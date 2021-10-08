const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://i.pinimg.com/originals/ba/98/a4/ba98a469124cf57fc5ffa2856038e737.gif',
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para beijar!`);

  let embed = new Discord.MessageEmbed()
  .setTitle(`💋 Beijo 😘`)
  .setDescription(`💓 ${message.author} beijou ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("YELLOW")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`Comando feito por: Eduzinho ;)`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(embed)
  
  }