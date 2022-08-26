//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 
const {
    MessageActionRow
} = require("discord.js");
const suggestions = require("../models/suggestion");
const server = require("../models/config");
const { error } = require("../controllers/logger");
const { havePerms } = require("../controllers/ticketChecks");
const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        const command = client.slashCommands.get(interaction.commandName);
        if (!command) {
            error(`Command ${interaction.commandName} not found`);
            return interaction.reply({ content: client.languages.__mf("errors.command_not_found",{
                command: interaction.commandName
            })});
        }

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        if (!(await havePerms(interaction))) return;
        command.run(client, interaction, args);
    }
});

//===========================================================\\

if (!interaction.isButton() || !interaction.customId.startsWith('sug-')) return;
       interaction.deferReply({
          ephemeral: true
      });
  
      let data = server.findById(interaction.guildId);
  
      if (!data || !data.channel.suggestions)
          return interaction.reply({
              content: `The suggestions channel is not configured`,
          });
  
      const id = interaction.customId.replace('sug-', '').substring(0, 8);
      const sugg = suggestions.findById(id);
  
      if (!sugg)
          return interaction.reply({
              content: `the suggestion has been deleted from the database`,
              ephemeral: true
          });
  
      const channel = (interaction.guild.channels.fetch(data.channel.suggestions).catch(() => null));
  
      if (!channel)
          return interaction.reply({
              content: `The suggestions channel was not found`,
              ephemeral: true
          });
  
      const message = (await channel.messages.fetch(sugg.messageId).catch(() => null));
  
      if (!message)
          return interaction.reply({
              content: `I cant find this suggestion maybe it has been deleted`,
              ephemeral: true
          });
          
      const action = interaction.customId.replace(`sug-${id}-`, '') == 'yes' ? 'upvote' : 'downvote';
      const find = sugg.answers.find(x => x.id == interaction.user.id);
  
      if (find) {
          if (action == find.type)
              return interaction.reply({
                  content: `You have already voted this suggestion`,
                  ephemeral: true
              });
  
          sugg.answers = sugg.answers.map(item => {
              if (item.id == interaction.user.id) return {
                  ...item,
                  type: action
              };
              else return item;
          });
  
          if (action == 'downvote') sugg.votes.up -= 1
          else sugg.votes.down -= 1
      } else
          sugg.answers.push({
              id: interaction.user.id,
              type: action
          });
  
      if (action == 'downvote') sugg.votes.down += 1;
      else sugg.votes.up += 1;
  
      const btnUp = message.components[0].components[0];
      const btnDown = message.components[0].components[1];
  
      btnUp.setLabel(`${sugg.votes.up}`);
      btnDown.setLabel(`${sugg.votes.down}`);
  
      await sugg.save();
      message.edit({
          components: [new MessageActionRow({
              components: [btnUp, btnDown]
          })]
      });
  
      return interaction.reply({
          content: `Your vote has been counted`,
          ephemeral: true
      });
});

//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 
