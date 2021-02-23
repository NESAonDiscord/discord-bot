const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🔹 Help`)
    .setImage(config.bot.image)
    .setDescription(`• Hey salut ** ${message.author}**\n• Je suis actuellement sur \`${client.guilds.cache.size}\` serveur\n• PLus de \`${client.users.cache.size}\` membres!,\n • Plus de \`${client.channels.cache.size}\` salons! \n • Version : \`${config.bot.version}\`\n• Préfix du bot sur ${message.guild} : \`${db.prefix}\`\n• Commands : \`${client.commands.size}\` `)
    .setColor(db.color)

    const administratif = new MessageEmbed()
    .setAuthor(`🔹 Administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul les admin peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes](https://github.com/KazushiProject)`)

.addField("`prefix`", `[Alias:](https://github.com/KazushiProject) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`settings`" , `[Alias:](https://github.com/KazushiProject)  \`config\`\n - Permet d'avoir quelque info sur le bot.`)
.addField("`dm`" , `[Alias:](https://github.com/KazushiProject)  \`mp\`\n - Permet d'envoyer des mp avec le bot.`)
.addField("`say`" , `[Alias:](https://github.com/KazushiProject)  \`❌\`\n - Faire dire n'importe quoi au bot.`)
.addField("`poll`" , `[Alias:](https://github.com/KazushiProject)  \`sondage\`\n - Faire un sondage.`)

const serveur = new MessageEmbed()
.setAuthor(`🔹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://github.com/KazushiProject)`)
.addField("`giveaway`", `[Alias:](https://github.com/KazushiProject) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](https://github.com/KazushiProject) \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](https://github.com/KazushiProject) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](https://github.com/KazushiProject) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](iroo://iroo.bot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](https://github.com/KazushiProject) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `[Alias:](https://github.com/KazushiProject) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)

const moderation = new MessageEmbed()
.setAuthor(`🔹 Modération`)
.setColor(db.color)
.setDescription(`Partie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://github.com/KazushiProject)`)
.addField("`mpanel`", `[Alias:](https://github.com/KazushiProject) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `[Alias:](https://github.com/KazushiProject) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](https://github.com/KazushiProject) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](https://github.com/KazushiProject) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](https://github.com/KazushiProject) \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `[Alias:](https://github.com/KazushiProject) \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `[Alias:](https://github.com/KazushiProject) \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
.addField("`clear`", `[Alias:](https://github.com/KazushiProject) \`purge\`\n - Suprime le nombre de message que vous vouler`)
.addField("`slowmode`", `[Alias:](https://github.com/KazushiProject) \`slow\`\n - Active le slow mode dans le salon`)
.addField("`lock-all`", `[Alias:](https://github.com/KazushiProject) \`lkall\`\n - Ferme tout les salons du server`)
.addField("`warn`", `[Alias:](https://github.com/KazushiProject) \`wrn\`\n - Warn un membre`)

const fun = new MessageEmbed()
.setAuthor(`🔹  fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://github.com/KazushiProject)`)
.addField("`kiss`", `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Combat une personne`)
.addField("`hug`", `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Fais un calin a une personne.`)
.addField("`8ball`", `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Il y a de grandes chances que je vous insulte!.`)
.addField("`pic`" , `[Alias:](https://github.com/KazushiProject) \`pp\`, \`avatar\` \n - Obtenez votre propre avatar ou celui de quelqu'un d'autre.`)
.addField("`calc`" , `[Alias:](https://github.com/KazushiProject) \`calcule\`, \`math\` \n - Resoudre des calcules simples`)
.addField("`love`" , `[Alias:](https://github.com/KazushiProject) \`lc\` \n - A combien en t'aime ?.`)
.addField("`gif`" , `[Alias:](https://github.com/KazushiProject) \`tenor\` \n - Fournissez une requête et je vous retournerai un gif!.`)
.addField("`cat`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Donne une image random de chat!.`)
.addField("`dog`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Donne une image random de chien!.`)
.addField("`koala`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Donne une image random de koala!.`)
.addField("`trivia`" , `[Alias:](https://github.com/KazushiProject) \`trv\` \n - Quiz pour un developer`)
.addField("`panda`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n -  Donne une image random de panda`)
.addField("`punsh`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Fraper un membre`)
.addField("`flip`" , `[Alias:](https://github.com/KazushiProject) \`coin\` \n - Lance une pièce`)

const util = new MessageEmbed()
.setAuthor(`🔹  utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes](https://iroolapute)`)
.addField("`vc`", `[Alias:](https://github.com/KazushiProject) \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `[Alias:](https://github.com/KazushiProject) \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `[Alias:](https://github.com/KazushiProject) \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `[Alias:](https://github.com/KazushiProject) \`aide\` \n - Affiche la liste des commandes`)
.addField("`ping`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Affiche le ping du bot et de l'api discord`)
.addField("`embed`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - Ecrire en embed`)
.addField("`server-pic`" , `[Alias:](https://github.com/KazushiProject) \`sp\` \n - Donne la pdp du server`)
.addField("`server-info`" , `[Alias:](https://github.com/KazushiProject) \`si\` \n - Donne des infos sur le server`)
.addField("`user-info`" , `[Alias:](https://github.com/KazushiProject) \`info\`, \`ui\` \n - Donne des infos sur une perssonne`)
.addField("`ancien`" , `[Alias:](https://github.com/KazushiProject) \`oldest\` \n - Donne la perssonne la plus ancienne du server`)
.addField("`recent`" , `[Alias:](https://github.com/KazushiProject) \`yougest\` \n - Donne la perssonne la plus jeunne du server`)
.addField("`addbot`" , `[Alias:](https://github.com/KazushiProject) \`invite\` \n - Donne l'invitation du bot`)
.addField("`total-ban`" , `[Alias:](https://github.com/KazushiProject) \`bans\` \n - Liste des membres / bot ban sur le serveur `)

const nsfw = new MessageEmbed()
.setAuthor(`🔹  Nsfw`)
.addField("`4k`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - 4k`)
.addField("`anal`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - anal`)
.addField("`ass`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - ass`)
.addField("`boobs`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - boobs`)
.addField("`hentai`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - hentai`)
.addField("`porngif`" , `[Alias:](https://github.com/KazushiProject) \`pgif\` \n - prongif`)
.addField("`pussy`" , `[Alias:](https://github.com/KazushiProject) \`❌\` \n - pussy`)


.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://github.com/KazushiProject)`)
const owner = new MessageEmbed()
.setAuthor(`🔹  Owner`)
.setColor(db.color)
.setDescription(`Partie Owner du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.

> [Liste des commandes](https://github.com/KazushiProject)`)
.addField("`server-list`" , `[Alias:](https://github.com/KazushiProject) \`slt\` \n - Donne les serveurs ou ce trouve le bot`)
.addField("`setavatar`", `[Alias:](https://github.com/KazushiProject) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](https://github.com/KazushiProject) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`stream`", `[Alias:](https://github.com/KazushiProject) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `[Alias:](https://github.com/KazushiProject) \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
.addField("`eval`", `[Alias:](https://github.com/KazushiProject) \`❌\` \n - ❌ `)
.addField("`down`" , `[Alias:](https://github.com/KazushiProject) \`shutdown\` \n - Eteint le bot`)

    const pages = [
        help,
        util,
        fun,
        nsfw,
      serveur,
      moderation,
      administratif,
      owner
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ",
  };