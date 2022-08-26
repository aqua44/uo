//===========================================================\\
//===================| Coded By Invalid'#0069 |====================\\
//==================| https://invaild-dev.tk/ |===================\\
//===========================================================\\
//=============| sugger={}#1882 </> |=============\\
//=============| https://discord.gg/dGDGWjfdVu |=============\\
//===========================================================\\

const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Returns Websocket Ping Latency',
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
            .setTitle(`Pong!`)
            .setDescription(`Websocket API : ${client.ws.ping} ms!`)
            .setColor('#800080');
        interaction.reply({ embeds: [embed] });
    },
};

//===========================================================\\
//===================| Coded By Invalid'#0069 |====================\\
//==================| https://invaild-dev.tk/ |===================\\
//===========================================================\\
//=============| sugger={}#1882 </> |=============\\
//=============| https://discord.gg/dGDGWjfdVu |=============\\
//===========================================================\\
