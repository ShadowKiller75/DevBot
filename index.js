const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Role = require('./commands/role')
const Whatis = require('./commands/whatis')
const Docs = require('./commands/docs')



bot.on('ready', function() {
	console.log('Bot connecté')
	bot.user.setGame('coder du sale').catch(console.error)
})


//guildMemberAdd
bot.on('guildMemberAdd', function(member) {

	member.guild.channels.find("name", "general").sendMessage({embed: {
			color: 226666,
			fields: [{
				name: 'Bienvenue dans le serveur ' + '**' + member.guild.name + '** !',
				value:  'Bienvenue parmis nous ! ' + member.toString() + ' *n\'oubliez de lire le #reglement*'
			}],
		}
	})
	member.addRole(member.guild.roles.find("name", "Membre"));

})



//Message
bot.on('message', function(message) {

	Google.parse(message)

	Blague.parse(message)

	Role.parse(message)

	Whatis.parse(message)

	Docs.parse(message)

	if(message.content === 'd?stats') {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField('Statistiques du serveur DevHack', 'Il y a actuellement ' + '**' + message.guild.channels.size + '**' +' channels dans ce serveur \nIl y a exactement ' + '**' + message.guild.members.size + '**' + ' membres dans ce serveur\nLe serveur a été crée le: ' + '**' + message.guild.createdAt + '** \nJe suis present dans ' + '**' + bot.guilds.size + '**' + ' serveurs')
		message.channel.send(embed).catch(console.error)
	
	}  else if(message.content === 'd?all_roles') {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Tous les roles disponibles", "-Développeur ->  d?role -dev\n-Youtubeur ->      d?role -youtubeur\n-Hacker ->           d?role -hacker\n-Graphiste ->     d?role -graphiste\n-Journaliste ->    d?role -journaliste\n-Front-end ->      d?role -frontend\n-Back-end ->      d?role -backend\n-Full-stack ->      d?role -fullstack")
		message.channel.send(embed).catch(console.error)

	} else if(message.content.startsWith('d?game')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Vrai :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Faux :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
		}
	} else if(message.content === 'd?gitdevbot') {
		message.reply('Voila le repos github du bot DevBot: https://github.com/karim-uchiwa/DevBot/')
	}  else if(message.content === 'd?apropos') {

		var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Le développeur du bot: **Karim_Uchiwa**\nSite web: https://devhack.fr.nf\nHébergeur web: **Heroku**\nTwitter: https://twitter.com/karim_uchiwa")
			.setFooter('A propos du bot')
			message.channel.send(embed).catch(console.error)
		
	} 
	
})



bot.login(process.env.TOKEN);