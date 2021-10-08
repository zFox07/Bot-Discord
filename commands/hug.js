const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://i.pinimg.com/originals/2c/da/e0/2cdae028dff777144478a3f55c990e45.gif',
    'https://i.pinimg.com/originals/39/6d/8c/396d8cf19235b7b437d1067045a63b5a.gif',
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para abraçar!`);

  let embed = new Discord.MessageEmbed()
  .setTitle(`🤗 Abraço ✨`)
  .setDescription(`💓 ${message.author} abraçou ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("YELLOW")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`Comando feito por: Eduzinho 😉`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(embed)
  
  }