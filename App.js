// Modules import
const { Client, Intents, Collection } = require('discord.js');
const Config = require('./config.json');
const fs = require('fs');

// Client (Bot) creation & intents selection
const Bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Importing commands handler from './Commands/'
Bot.commands = new Collection();
const CommandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
CommandFiles.forEach( file => {
    const command = require(`./Commands/${file}`);
    Bot.commands.set(command.data.name, command);
});

// Bot ready event (once)
Bot.once('ready', () => {
    console.log('Bot ready!!!');
});

// On interaction creation event
Bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    if (!Bot.commands.has(interaction.commandName)) return;
    try {
        await Bot.commands.get(interaction.commandName).execute(interaction);
    } catch (err) {
        console.error(err);
        await interaction.reply({ content: 'There is an error executing this command!', ephemeral: true});
    }
})

// Bot login
Bot.login(Config.Token);