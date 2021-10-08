const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://gifprint.s3.amazonaws.com/p/gif/85789/4bd971508daf0137cb174e76b35a0b68.gif',
    'https://i.pinimg.com/originals/80/71/53/807153b1c9fcc751c74c2f9471214999.gif',
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para dar um tapa!`);

  let edu = new Discord.MessageEmbed()
  .setTitle(`😠 Chapadão 😢`)
  .setDescription(`💓 ${message.author} deu um tapa em ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("YELLOW")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`Comando feito por: Eduzinho 😉`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(edu)
  
  }