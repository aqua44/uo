//===========================================================\\
//===================| Coded By Invalid'#0069 |====================\\
//==================| https://invaild-dev.tk/ |===================\\
//===========================================================\\
//=============| sugger={}#1882 </> |=============\\
//=============| https://discord.gg/dGDGWjfdVu |=============\\
//===========================================================\\

const { MessageEmbed, MessageButton, MessageActionRow, Client } = require("discord.js");
const moment = require("moment");
const pretty = require('pretty-ms');
const chalk = require('chalk');

module.exports = {
      name: "botinfo",
      description: "show bot information!",
      run: async (client, interaction, args) => {
    
    let embed = new MessageEmbed()
    .setTitle(`Help`)  
    .setColor("#2f3136")

      .addField(':stopwatch: Uptime', `${pretty(client.uptime)}`, true)
      .addField('<a:statusping:1008817677499912376> WebSocket Ping', `${client.ws.ping}ms`, true)
      .addField('<:ram:1008822055812210918> Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
      .addField('<:developer:1008449049717911654> Developers', `<@755566952449310842>`, true)
      .addField('<:server:1008816761493262420> Guild Count', `${client.guilds.cache.size} guilds`, true)
      .addField(`<:user:1008816981929107457> User Count`, `${client.users.cache.size} users`, true)
      .addField('<:node:994985829913067571> Node', `${process.version} on ${process.platform} ${process.arch}`, true)
      .addField('<:channel:1008818899137089596> Channel Count', `${client.channels.cache.size}`, true)
      .setTimestamp()
      .setColor("#3498DB");

    const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
         .setLabel("Invite")
         .setStyle("LINK")
         .setURL(`https://discord.com/oauth2/authorize?client_id=1009839129862869062&permissions=8&scope=bot%20applications.commands`)
         .setEmoji("989105142219563008")
        )
        .addComponents(
          new MessageButton()
          .setLabel("Support")
          .setStyle("LINK")
          .setURL(`https://discord.gg/UybeVq66hF`)
          .setEmoji("989105545946497055")
         )


    return interaction.reply({ embeds: [embed], components: [row] });
  }
};

//===========================================================\\
//===================| Coded By Invalid'#0069 |====================\\
//==================| https://invaild-dev.tk/ |===================\\
//===========================================================\\
//=============| sugger={}#1882 </> |=============\\
//=============| https://discord.gg/dGDGWjfdVu |=============\\
//===========================================================\\
