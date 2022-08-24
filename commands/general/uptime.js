const { Client, MessageEmbed } = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
    name: 'uptime',
    description: "Returns Maily's Uptime",
   
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
            .setTitle(`🕘 Maily's Uptime`)
            .setDescription(`\`\`\`yml\nStatus : Online\nUptime : ${pretty(client.uptime)}\n\`\`\``)
            .setColor("#800080");

        interaction.reply({ embeds: [embed] });
    },
};
