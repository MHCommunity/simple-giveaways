# simple-giveaways

Discord bot powered by Cloudflare Workers that will choose a random winner from those that have reacted to a message.

It will take the react that has the highest amount of reacts and choose a random user, and then output a message.

This was built for MouseHunt servers, so the message does include "Please send your ID" in it.

Make sure you create a `.env` file and set `DISCORD_TOKEN` to your bot token.
