const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Whatis extends Command {

	static match(message) {
		return message.content.startsWith('d?whatis')
	}

	static action(message) {
		if (message.content.startsWith('d?whatis front-end')) {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Signification du mot front-end", "Lorsque que l'on parle de front-end, il s'agit de la partie vue d'un site web, les élements que l'on voit a l'écran et sur qui l'on peut interagir, ex de languages front-end: HTML, CSS ou JavaScript.")
		.setFooter('Les meilleures définitions de DevBot')
		message.channel.send(embed)

		} else if(message.content.startsWith('d?whatis back-end')) {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Signification du mot back-end", "Le back-End, c'est un peu comme la partie immergée de l'iceberg. Elle est invisible pour les visiteurs mais représente une grande partie du développement d'un projet web. Sans elle, le site web reste une coquille vide.")
		.setFooter('Les meilleures définitions de DevBot')
		message.channel.send(embed)

		} else if(message.content.startsWith('d?whatis full-stack')) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Signification du mot full-stack", "On parle plus du metier de dev full-stack mais ca peut aussi etre un language comme JavaScript, donc full-stack c'est un peu front-end et back-end réunis mais aussi la structure de ton projet web en gros le dev full-stack gere tout le site web. Pourquoi j'ai cité JavaScript ? Parce que c'était un language front-end de base mais avec Node.js on peut coder coté serveur en js donc en back-end.")
			.setFooter('Les meilleures définitions de DevBot')
			message.channel.send(embed)

		}
	}
}