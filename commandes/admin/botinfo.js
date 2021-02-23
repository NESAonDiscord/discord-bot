const { MessageEmbed } = require("discord.js")
const fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🔹 Hey`)
    .setDescription(`• Hey salut ** ${message.author}**`)
    .setImage(config.bot.image)
    .setColor(db.color)

  
const util = new MessageEmbed()
.setAuthor(`🔹 Bot info`)
.setColor(db.color)
.setDescription(` Préfix du bot sur ${message.guild} : \`${db.prefix}\`\n Commands : \`${client.commands.size}\`\nVersion : \`${config.bot.version}\`\nCouleur des embeds : \`${db.color}\`\nNombre de serveur ou est le bot : \`${client.guilds.cache.size}\`\n Owner : <@${config.bot.owner}>\n Developer : **${config.bot.dev}** ,\n Support : <${config.bot.support}> `)

.setFooter(config.bot.fhouther , config.bot.image)
    const pages = [
        help,
      util
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "bot-info",
    aliases: ['config' , 'settings'],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };