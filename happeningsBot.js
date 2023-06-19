const { Client } = require('discord.js');

const sourceHappenings = '664620377065914408'; // ID of the source channel
const destinationHappenings = '884192910902427649'; // ID of your destination channel

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.channel.id === sourceHappenings) {
    const destinationChannel = client.channels.cache.get(destinationHappenings);
    if (destinationChannel) {
      destinationChannel.send(
        `New message in ${message.guild.name}:\n${message.content}`
      );
    }
  }
});

client.login('MTEyMDQxMTQ3MDUyMjQ5MDg4MA.GLUTwS.ylxN-9QIaWwaB3makkRe8ocOm1W3TviISz7B0U');
