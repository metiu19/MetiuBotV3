const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('secret-ping')
        .setDescription('A ping that only you can see!'),
    async execute(interaction) {
        await interaction.reply({ content: 'ping', ephemeral:true});
    },
}