module.exports = {
  dialog: {},
  ephemeral: {},
  message: {
    start: {
      channel: "GGZ3E91SQ",
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<fakeLink.toUser.com|Mark> wants to know: *Where should we order lunch from?*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":sushi: *Ace Wasabi Rock-n-Roll Sushi Bar*\nThe best landlocked sushi restaurant."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": [{"blueprint":"publicPoll","type":"update","value":"vote"}]
          }
        },
          {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "No votes"
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":hamburger: *Super Hungryman Hamburgers*\nOnly for the hungriest of the hungry."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": [{"blueprint":"publicPoll","type":"update","value":"vote"}]
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "No votes"
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":ramen: *Kagawa-Ya Udon Noodle Shop*\nDo you like to shop for noodles? We have noodles."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": [{"blueprint":"publicPoll","type":"update","value":"vote"}]
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "No votes"
            }
          ]
        },
        {
          "type": "divider"
        }
      ]
    }
  },
  thread: {},
  update: {
    vote: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<fakeLink.toUser.com|Mark> wants to know: *Where should we order lunch from?*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":sushi: *Ace Wasabi Rock-n-Roll Sushi Bar*\nThe best landlocked sushi restaurant."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": "click_me_123"
          }
        },
          {
          "type": "context",
          "elements": [
                  {
              "type": "image",
              "image_url": "https://ca.slack-edge.com/TAW6LHTB5-UAVNY70E5-0f54a6b30573-72",
              "alt_text": "Michael Scott"
            },
            {
              "type": "image",
              "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_1.png",
              "alt_text": "Michael Scott"
            },
            {
              "type": "image",
              "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_2.png",
              "alt_text": "Dwight Schrute"
            },
            {
              "type": "image",
              "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_3.png",
              "alt_text": "Pam Beasely"
            },
            {
              "type": "plain_text",
              "emoji": true,
              "text": "4 votes"
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":hamburger: *Super Hungryman Hamburgers*\nOnly for the hungriest of the hungry."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": "click_me_123"
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "image",
              "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_4.png",
              "alt_text": "Angela"
            },
            {
              "type": "image",
              "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_2.png",
              "alt_text": "Dwight Schrute"
            },
            {
              "type": "plain_text",
              "emoji": true,
              "text": "2 votes"
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":ramen: *Kagawa-Ya Udon Noodle Shop*\nDo you like to shop for noodles? We have noodles."
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Vote"
            },
            "value": "click_me_123"
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "No votes"
            }
          ]
        },
        {
          "type": "divider"
        }
      ]
    }
  }
}