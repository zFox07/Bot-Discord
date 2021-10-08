const Discord = require ("discord.js")

module.exports = {
    name: "Bot info",
    description: "o bot vai enviar uma embed full + menção",
    author: "Eduzito :)",

    run: async(client, message, args) => {

        let eduzinho = message.author;

        let edu = new Discord.MessageEmbed()
        .setAuthor(`➔ 📜| Regras `, /*url de alguma coisa*/)
        .setTitle(`➔ 📜 | Regras do servidor`)
        .setDescription(`➔ Respeitar todos os membros do servidor!
        ➔ Proibido qualquer tipo de divulgalão de links sem conhecimento da Staff!
        ➔ Proibido qualquer tipo de conteudo Explicito ou pornografico!
        ➔ Proibido divulgação de outros bots no servidor!
        ➔ Proibido fazer qualquer tipo de discurso de ódio`)
        .setFooter(`➔ Quem me quiser adicionar está aqui o link! => https://sites.google.com/view/playboybot/p%C3%A1gina-inicial`)
        .setColor("RANDOM")
        .setImage(client.user.displayAvatarURL()) //url de alguma imagem (imagem grande em baixo)
        .setThumbnail("https://images-ext-2.discordapp.net/external/M3A5NlebU7Dkapy05DZjOQFntIVKNg4i5KC4zY44lxc/https/cdn.discordapp.com/avatars/856657375456264213/7aa4bf42366dc6c0865fdaa579f19ee7.webp?width=102&height=102") //url de alguma imagem (na direita | parte de cima)
        .setTimestamp()
        .addFields(
            {
                name: "➔ Meu criador!",
                value: "Foxzin#7777",
                inline: true
            },
            {
                name: "➔ Passa pelo meu Site!",
                value: "https://sites.google.com/view/playboybot/p%C3%A1gina-inicial",
                inline: true
            }
        );

        message.channel.send(eduzinho, edu)
  
    }
}