# simple-giveaways

Discord bot powered by Cloudflare Workers that will choose a random winner from those that have reacted to a message.

![sample-output](assets/sample.png)

## Usage

1. [Invite the bot to your server](https://discord.com/api/oauth2/authorize?client_id=1043925848526430279&permissions=2147551296&scope=bot%20applications.commands)
2. Post a message and have people react on it. When you're ready to pick a winner, just right-click or long-press on your message, go to Apps → Pick random winner.
3. Bot will post a winner.

It will take the react that has the highest amount of reacts and choose a random user, and then output a message.

This was built for MouseHunt servers, so the message does include "Please send your ID" in it.

## Installation

Make sure you update `wrangler.toml` with the correct keys and create a `.env` file and set `DISCORD_TOKEN` to your bot token.
