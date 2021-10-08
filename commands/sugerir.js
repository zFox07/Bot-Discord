const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, Escreva a sugestão após o comando!`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, Mande a sugestão com no maximo 1000 letras!`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "858691149908279306");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#00D166")
    .addField("📢 | Usuário:", message.author)
    .addField("📌 | Sugestão", content)
    .setThumbnail("https://i.pinimg.com/originals/a0/2f/50/a02f502b3cca2eaeaf2ec94a4079aed1.jpg")
    .setTimestamp()
  );
   message.channel.send("📢Sugestão Submetida!📢");

  const emojis = ["✅", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}