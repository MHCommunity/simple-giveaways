# simple-giveaways

Discord bot powered by Cloudflare Workers that will choose a random winner from those that have reacted to a message.

## Usage

Post a message and have people react on it. When you're ready to pick a winner, just right-click or long-press on your message, go to Apps → Pick random winner.

It will take the react that has the highest amount of reacts and choose a random user, and then output a message.

This was built for MouseHunt servers, so the message does include "Please send your ID" in it.

## Installation

Make sure you create a `.env` file and set `DISCORD_TOKEN` to your bot token.
