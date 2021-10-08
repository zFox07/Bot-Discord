const Discord = require ("discord.js")

module.exports = {
    name: "Bot info",
    description: "o bot vai enviar uma embed full + menção",
    author: "Eduzito :)",

    run: async(client, message, args) => {

        let user = message.author;

        let chat = new Discord.MessageEmbed()
        .setAuthor(`➔ BotInfo `, /*url de alguma coisa*/)
        .setTitle(`➔ Um pouco da minha história`)
        .setDescription(`➔ Fui criado pelo Edu, desenvolvido em JavaScript, Node.js e a minha maior paixão é o discord.js!!"`)
        .setFooter(`➔ Quem me quiser adicionar está aqui o link! => https://sites.google.com/view/playboybot/p%C3%A1gina-inicial`)
        .setColor("BLUE")
        .setImage(client.user.displayAvatarURL()) //url de alguma imagem (imagem grande em baixo)
        .setThumbnail("https://images-ext-2.discordapp.net/external/M3A5NlebU7Dkapy05DZjOQFntIVKNg4i5KC4zY44lxc/https/cdn.discordapp.com/avatars/856657375456264213/7aa4bf42366dc6c0865fdaa579f19ee7.webp?width=102&height=102") //url de alguma imagem (na direita | parte de cima)
        .setTimestamp()
        .addFields(
            {
                name: "➔ Meu criador!",
                value: "! SrEdu07#5062",
                inline: true
            },
            {
                name: "➔ Passa pelo meu Site!",
                value: "https://sites.google.com/view/playboybot/p%C3%A1gina-inicial",
                inline: true
            }
        );

        message.channel.send(user, chat)
  
    }
}