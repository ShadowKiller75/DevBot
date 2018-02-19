const Discord = require('discord.js');
const Command = require('./command')

module.exports = class Blague extends Command {



	static match(message) {
		return message.content.startsWith('d?blague')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 10)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Quand est ce que Windows ne bug pas ? \n Quand l\'ordinateur est éteint.')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('De quelle couleur sont tes yeux ? ;) \n #1292f4 et toi ? :smiley:')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Que dit une mère à son fils geek quand le diner est servi ? \n Alt Tab !!!')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 3) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('De nos jours, le zip ça devient rar...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 4) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Comment un informaticien répare sa voiture quand elle est en panne ? \n Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et la redémarre.')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 5) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Un geek ne descend pas du métro. Il libère la RAM...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 6) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('A quoi sert Internet Explorer ? \n A télécharger Google Chrome.')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 7) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Un geek sait compter jusqu\'a 403 apres pour lui c\'est introuvable')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 8) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Quand quelqu\'un de triste joue aux jeux vidéo pour oublier, on peut dire qu\'il se console...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 9) {
			
			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Les filles c\'est comme les noms de domaine. \n Celles que j\'aime sont déjà prises. :sob:')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)
		}
		
	}



}

