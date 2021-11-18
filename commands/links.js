
const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const filter = i => i.customId === 'primary' && i.user.id === '122157285790187530';

module.exports = {
  
    data: new SlashCommandBuilder()

    .setName('links')
    .setDescription("Shows Snipersaiyan's Socials"),
   // .addUserOption(option => option.setName('target').setDescription('The member to kick')),
   async execute(interaction) {
  //  const user = interaction.options.getUser('target');

const row = new MessageActionRow()
.addComponents(
    new MessageButton()
       // .setCustomId('primary')
        .setLabel('Twitch')
        .setStyle("LINK")
       // .setEmoji('123456789012345678')
        .setURL("https://www.twitch.tv/snipersaiyan"),
        new MessageButton()
      //  .setCustomId('primary')
        .setLabel('Youtube')
        .setStyle("LINK")
        .setURL("https://www.youtube.com/channel/UCizU3B482FSjABs-iJ05a0Q"),
        new MessageButton()
       // .setCustomId('primary')
        .setLabel('TikTok')
        .setStyle("LINK")
        .setURL("https://www.tiktok.com/@snipersaiyan?lang=en"),
        new MessageButton()
       // .setCustomId('primary')
        .setLabel('Twitter')
        .setStyle("LINK")
        .setURL("https://twitter.com/sniper_saiyan?lang=en"),
        
        new MessageButton()
        .setLabel('Instagram')
        .setStyle("LINK")
        .setURL("https://www.instagram.com/snipersaiyan/?hl=en"),
);

            return interaction.reply({ content: 'Social Media', ephemeral: false, components: [row] });
	
            }}
