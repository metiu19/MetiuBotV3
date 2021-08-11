const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Things about the bot'),
    async execute(interaction) {
        await interaction.reply('This bot is developed by Metiu19 (GdG_Metiu19#1134)\nInvite link: https://discord.com/api/oauth2/authorize?client_id=874748214379708426&permissions=8&scope=applications.commands%20bot');
    },
}