
/**
 * Roll winner.
 */
export async function roll(messageData, request, env) {
  const message = Object.values(messageData.data?.resolved?.messages)[0] || {};
  const { author, channel_id, id  } = message;

  if ( author?.id !== messageData?.member?.user?.id ) {
    return {
      type: 4,
      data: {
        content: '',
        flags: 64,
        embeds: [
          {
            type: 'rich',
            title: 'Oops!',
            description: 'You can only roll a winner on your own messages.',
            color: 0xbd432a
          }
        ]
      },
    };
  }

  const messageResponse = await fetch(`https://discord.com/api/v10/channels/${channel_id}/messages/${id}`, {
    headers: { Authorization: `Bot ${env.DISCORD_TOKEN}` },
    method: 'GET'
  });

  const messageJson = await messageResponse.json();
  const reactions = messageJson.reactions || [];

  if ( !reactions.length ) {
    return {
      type: 4,
      data: {
        content: '',
        flags: 64,
        embeds: [
          {
            type: 'rich',
            title: 'Oops!',
            description: 'A message needs to have at least one reaction to be able to roll a winner.',
            color: 0xbd432a
          }
        ]
      },
    };
  }

  // Sort reactions by count.
  reactions.sort((a, b) => b.count - a.count);

  // Get the first reaction.
  const reaction = reactions[0] || {};
  let emoji = reaction.emoji.name;

  if (reaction.emoji.id) {
    if (reaction.emoji.animated) {
      emoji = `<a:${reaction.emoji.name}:${reaction.emoji.id}>`;
    } else {
      emoji = `${reaction.emoji.name}:${reaction.emoji.id}`;
    }
  }

  const reactResponse = await fetch(`https://discord.com/api/v10/channels/${channel_id}/messages/${id}/reactions/${emoji}?limit=100`, {
    headers: {
      Authorization: `Bot ${env.DISCORD_TOKEN}`,
    },
    method: 'GET'
  });

  const reactData = await reactResponse.json();
  const winner = reactData[Math.floor(Math.random() * reactData.length)];

  return {
    type: 4,
    data: {
      content: `​​\n​**🎉️ Congratulations <@${winner.id}>! You've won the [giveaway](<https://discord.com/channels/${messageData.guild_id}/${channel_id}/${message.id}>)! 🎉️** \n\n​  _Send your ID to <@${author.id}> to claim your prize!_`,
    },
  }
}
