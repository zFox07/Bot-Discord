const Discord = require("discord.js");

module.exports = {
    name: "help com reação ",
    description: "clique na reação, e a mensagem será editada :)",
    author: "Eduzinho",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Painel de comandos`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Veja os comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Outros
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("YELLOW")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("◀️")
      msg.react("🔗")
      msg.react("⚙")
      msg.react("🤣")
      msg.react("👑")

      let filtro0 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '🔗' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '⚙' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🤣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let edu = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Veja os comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Outros
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("YELLOW")   
        
     
        msg.edit(`${message.author}`, edu)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`🔗 Utilidade 🔗`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`➔.help
        ➔.ip 
        ➔.bug
        ➔.sugerir
        ➔.botinfo\n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let embed1 = new Discord.MessageEmbed()
        .setTitle(`⚙ Moderação ⚙`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`➔.ban
        ➔.unban
        ➔.kick
        ➔.clear
        ➔.say 
        ➔.lock
        ➔.unlock
        ➔.ticket\n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, embed1)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let edu = new Discord.MessageEmbed()
        .setTitle(`🤣 Diversão 🤣`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`➔.slap
        ➔.kiss
        ➔.hug
        ➔.avatar \n⠀`)
        .setColor("RANDOM")

        msg.edit(`${message.author}`, edu)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let embed3 = new Discord.MessageEmbed()
        .setTitle(`👑 Outros 👑`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`➔ .ping
        ➔ .embed
        ➔ .reload \n⠀`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, embed3)
      })
    })
  }
}//by eduzinho ;)