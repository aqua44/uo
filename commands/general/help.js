const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
      name: "help",
      description: "Return all commands!",
      
     run: async (client, interaction, args) => {
    

    let embed = new MessageEmbed()
    .setTitle(`Help`)  
    .setColor("#2f3136")
    .addField("Information Commands", `help, whois, invite, support, botinfo`)
    .addField("Config Commands", `roles, set, unset, ticket-panel`)
    .addField(":tickets: Ticket Commands", `add, close, delete, open, remove, reopen, transcript`)

    const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
         .setLabel("Invite")
         .setStyle("LINK")
         .setURL(`https://discord.com/oauth2/authorize?client_id=1009839129862869062&permissions=8&scope=bot%20applications.commands`)
        )
        .addComponents(
          new MessageButton()
          .setLabel("Support")
          .setStyle("LINK")
          .setURL(`https://discord.gg/UybeVq66hF`)
         )

    interaction.followUp({ embeds: [embed], components: [row] });
  }
};
