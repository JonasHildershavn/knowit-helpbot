const { App } = require("@slack/bolt");
const store = require("./store");
const messages = require("./messages");
const helpers = require("./helpers");
const data = require("./data");
const fuzzymatch = require("fuzzball");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  ignoreSelf: false,
});

function matchWord(word, searchwords) {
  let max = 0;
  searchwords.forEach((searchWord) => {
    let fuzzRatio = fuzzymatch.ratio(word, searchWord);
    if (fuzzRatio > max) {
      max = fuzzRatio;
    }
  });
  return max;
}

app.command("/info", async ({ command, ack, say, respond }) => {
  await ack();
  await respond("42");
  let args = command.text.slice("info");
  let inputWords = args.split(" ");

  let personalhåndbok = helpers.copy(data.personalhåndbok);
  inputWords.forEach(async (word) => {
    if (matchWord(word, personalhåndbok.searchwords) > 90) {
      await respond(personalhåndbok.message);
      return;
    }
  });

  let vpn = helpers.copy(data.vpn);
  inputWords.forEach(async (word) => {
    if (matchWord(word, vpn.searchwords) > 90) {
      await respond(vpn.message);
      return;
    }
  });

  let printer = helpers.copy(data.printer);
  inputWords.forEach(async (word) => {
    if (matchWord(word, printer.searchwords) > 90) {
      await respond(printer.message);
      return;
    }
  });

  let feriepenger = helpers.copy(data.feriepenger);
  inputWords.forEach(async (word) => {
    if (matchWord(word, feriepenger.searchwords) > 90) {
      await respond(feriepenger.message);
      return;
    }
  });

  let teaorcoffee = helpers.copy(data.teaorcoffee);
  inputWords.forEach(async (word) => {
    if (matchWord(word, teaorcoffee.searchwords) > 90) {
      await respond(teaorcoffee.message);
      return;
    }
  });

  let hr = helpers.copy(data.hr);
  inputWords.forEach(async (word) => {
    if (matchWord(word, hr.searchwords) > 90) {
      await respond(hr.message);
      return;
    }
  });

  let husgruppe = helpers.copy(data.husgruppe);
  inputWords.forEach(async (word) => {
    if (matchWord(word, husgruppe.searchwords) > 90) {
      await respond(husgruppe.message);
      return;
    }
  });

  await respond("42"); //TODO: Det er noe krøll med async her. Bare sjekk med å skrive /halp personalhåndbok personalhåndbok personalhåndbok
});

/**

`reaction_added` event is triggered when a user adds a reaction to a message in a channel where the Bot User is part of

https://api.slack.com/events/reaction_added

We use this event to check if the added emoji (reactji) is a ⚡ (:zap:) emoji. If that's the case,
a link to this message will be posted to the configured channel

**/
app.event("reaction_added", async ({ event, client }) => {
  // only react to ⚡ (:zap:) emoji
  if (event.reaction === "question") {
    let channelId = event.item.channel;
    let ts = event.item.ts;

    // get a permalink for this message
    const permalink = await client.chat.getPermalink({
      message_ts: ts,
      channel: channelId,
    });

    // get user info of user who reacted to this message
    const user = await client.users.info({
      user: event.user,
    });

    // formatting the user's name to mention that user in the message (see: https://api.slack.com/messaging/composing/formatting)
    let name = "<@" + user.user.id + ">";
    let channel = store.getChannel();

    // post this message to the configured channel
    await client.chat.postMessage({
      channel: channel && channel.id,
      text: name + " wants you to see this message: " + permalink.permalink,
      unfurl_links: true,
      unfurl_media: true,
    });
  }
});

/**

`member_joined_channel` event is triggered when a user joins public or private channels

https://api.slack.com/events/member_joined_channel

We use this event to introduce our App once it's added to a channel

**/
app.event("member_joined_channel", async ({ event, say }) => {
  let channel = store.getChannel();
  let user = event.user;

  // check if our Bot user itself is joining the channel
  if (user === store.getMe() && channel) {
    let message = helpers.copy(messages.welcome_channel);
    // fill in placeholder values with channel info
    message.blocks[0].text.text = message.blocks[0].text.text
      .replace("{{channelName}}", channel.name)
      .replace("{{channelId}}", channel.id);
    await say(message);
  }
});

app.error(async (error) => {
  // Check the details of the error to handle cases where you should retry sending a message or stop the app
  console.error(error);
});

// Start your app
(async () => {
  await app.start(process.env.PORT || 8080);
  console.log("⚡️ Bolt app is running!");

  // after the app is started we are going to retrieve our Bot's user id through
  // the `auth.test` endpoint (https://api.slack.com/methods/auth.test)
  // and store it for future reference
  let id = await app.client.auth
    .test({ token: process.env.SLACK_BOT_TOKEN })
    .then((result) => result.user_id);
  store.setMe(id);
})();
