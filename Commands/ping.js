const { SlashCommandBuilder } = require('@discordjs/builders');
const Wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong response'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await Wait(4000);
        await interaction.followUp('Pong again!');
    },
}