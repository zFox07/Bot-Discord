const Discord = require("discord.js"); 

module.exports = {
  name: "avatar",
  //veja a foto de alguém

  run : async (client, message, args) => {
  
  let table = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let msg = new Discord.MessageEmbed() 
    .setColor(`RANDOM`) 
    .setTitle(table.tag) 
    .setImage(table.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setFooter(`Comando feito por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(msg);


  }

}
