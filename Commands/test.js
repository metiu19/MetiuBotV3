const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Info of user or sever')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')
        ),
    async execute(interaction) {
        switch (interaction.options.getSubcommand()) {
            case 'user':
                var user = interaction.options.getUser('target');
                if (!user) user = interaction.user;
                var badges = user.flags.toArray();
                if (badges.length == 0) badges = 'None'
                var embed = new MessageEmbed()
                    .setTitle('User info')
                    .setDescription('Info about the user')
                    .setColor('DARK_AQUA')
                    .setAuthor('MetiuBotV3', 'https://cdn.discordapp.com/avatars/874748214379708426/76922ed18f4eee78b69bce4226e64c2b.webp')
                    .setThumbnail(user.avatarURL())
                    .addFields(
                        { name: `Nickname`, value: `${interaction.guild.members.resolve(user).nickname}`, inline: true },
                        { name: 'Badges', value: `${badges}`, inline: true },
                        { name: '\u2800', value: `\u2800`, inline: true },
                        { name: `Username`, value: `${user.username}`, inline: true },
                        { name: `Discriminator`, value: `${user.discriminator}`, inline: true }
                    );
                await interaction.reply({ embeds: [embed] });
                break;
            case 'server':
                await interaction.reply('Plz wait!');
                break;
            default:
                await interaction.reply({ content: 'Wrong parameter!', ephemeral: true });
                break;
        }
    }
}