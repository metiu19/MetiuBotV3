const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.once('ready', () => {
    console.log('Bot ready!!!');
});

bot.on('messageCreate', message => {
    console.log(message.content);
    if (message.content.startsWith("!ping")) {
        message.channel.send("pong!");
    }
})

bot.login('ODc0NzQ4MjE0Mzc5NzA4NDI2.YRLewg.QZ7GcyWvwtMw_9QSDNMQwqSiOgE');