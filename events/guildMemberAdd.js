module.exports = async (client, member) =>{
	const Discord = require("discord.js");

	const embed = new Discord.MessageEmbed()
	.setTitle(member.user.username + " Bem vindo(a) ao servidor!")
	.setAuthor(client.user.username, client.user.displayAvatarURL())
	.setImage(member.user.avatarURL())
	.setColor('RANDOM')
	.setDescription('Leia as 853427929890684968!')
	.setTimestamp(new Date())

	member.guild.channels.cache.get('859916940495552522').send({embed});
}