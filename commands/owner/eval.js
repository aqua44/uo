require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const { inspect } = require('util');

module.exports = {
    name: 'eval',
    description: 'Evaluate some code',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if (!message.author.id === process.env.OWNERID) return;
        const code = args.join(' ');
        if (!code) return message.reply('Please provide some code to evaluated!');

        try {
            const result = await eval(code);
            let output = result;

            if (typeof result !== 'string') {
                output = inspect(result);
            }

            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor('#00FF00')
                        .setTitle(`✔️ | 200 : Success`)
                        .setDescription(`Results\n\`\`\`yml\n${output}\n\`\`\``)
                        .setFooter(`Actioned by : ${message.author.tag}`),
                ],
            });
        } catch (error) {
            console.log(error);
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setTitle(`❌ | Evaluated Content too long to displayed`)
                        .setDescription(`Error Logs\n\`\`\`yml\n${error}\n\`\`\``)
                        .setColor('#FF0000')
                        .setFooter(`Actioned by : ${message.author.tag}`),
                ],
            });
        }
    },
};
