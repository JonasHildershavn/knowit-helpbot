module.exports = {
  welcome_channel: {
    text: "Hi there! I am a boy! :zap: emoji.",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Hi there! \n\n I promise that I am a girl, just like I said. <#{{channelId}}|{{channelName}}> TODO: FIx message.",
        },
      },
    ],
  },
};
