const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Things about the bot'),
    async execute(interaction) {
        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Invite me')
                    .setStyle('LINK')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=874748214379708426&permissions=8&scope=applications.commands%20bot'),
                new MessageButton()
                    .setLabel('Source code')
                    .setStyle('LINK')
                    .setURL('https://github.com/metiu19/MetiuBotV3'),
            );
        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Click me!')
                    .setStyle('PRIMARY')
                    .setCustomId('ClickMe'),
                new MessageButton()
                    .setLabel('Click me v2!')
                    .setStyle('PRIMARY')
                    .setCustomId('ClickMe2'),
            );
        await interaction.reply({ content: 'This bot is developed by Metiu19 (GdG_Metiu19#1134)', components: [row1, row2] });
    },
    async ButtonResponse(interaction) {
        var row2 = undefined;
        if (interaction.customId == 'ClickMe') {
            row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel('Click me!')
                        .setStyle('SUCCESS')
                        .setCustomId('ClickMe')
                        .setDisabled(true),
                    interaction.message.components[1].components[1],
                );
        } else if (interaction.customId == 'ClickMe2') {
            row2 = new MessageActionRow()
                .addComponents(
                    interaction.message.components[1].components[0],
                    new MessageButton()
                        .setLabel('Click me v2!')
                        .setStyle('SUCCESS')
                        .setCustomId('ClickMe2')
                        .setDisabled(true),
                );
        }
        await interaction.update({ content: 'This bot is developed by Metiu19 (GdG_Metiu19#1134)', components: [interaction.message.components[0], row2] });
    }
}