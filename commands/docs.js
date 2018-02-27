const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Docs extends Command {

	static match(message) {
		return message.content.startsWith('d?doc')
	}

	static action(message) {
		if (message.content === 'd?doc') {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Commandes pour consulter les docs des langages ci-dessous", "- d?doc -php\n- d?doc -js\n- d?doc -html/css")
			.setFooter('Les meilleurs docs de Devbot')
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('d?doc -php')) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Voici le(s) meilleur(s) documentations pour le langage php", "PHP.net => http://php.net/manual/fr/")
			.setFooter('Les meilleurs docs de Devbot')
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('d?doc -js')) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Voici le(s) meilleur(s) documentations pour le langage js", "MDN Web Docs => https://developer.mozilla.org/fr/docs/Web/JavaScript\nDevDocs.io JS => http://devdocs.io/javascript/")
			.setFooter('Les meilleurs docs de Devbot')
			message.channel.send(embed).catch(console.error)

		} else if (message.content.startsWith('d?doc -html/css')) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Voici le(s) meilleur(s) documentations pour les langages html et css", "DevDocs.io \n (HTML) http://devdocs.io/html/\n (CSS) http://devdocs.io/html/")
			.setFooter('Les meilleurs docs de Devbot')
			message.channel.send(embed).catch(console.error)

		} else if(message.content.startsWith('d?doc -python')) {
		
			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Voici le(s) meilleur(s) documentations pour le langage python", "Docs.python.org => https://docs.python.org/3.6/tutorial/index.html \n DevDocs.io => http://devdocs.io/python~3.6/ ")
			.setFooter('Les meilleurs docs de Devbot')
			message.channel.send(embed).catch(console.error)
	
		}

	}
}
