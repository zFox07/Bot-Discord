const Discord = require("discord.js")

module.exports = {
    name: "bug",
    author: "edu",
    servidor: "https://discord.gg/BRj59tkbTK",

    run: async(client, message, args) => {
        let id = client.channels.cache.get("856657228969934860"); //ID DO CANAL DE BUGS
        let bug = args.join(" ");
        let author = message.author;
        let edu_cade_a_msg = "Escreva o bug encontrado após o comando"

        if (!bug) return message.channel.send(`:x: | ${author} ${edu_cade_a_msg}!`)

        let author_tag = message.author.tag;
        let author_id = message.author.id;
        let server_name = message.guild.name;
        let server_id = message.guild.id;

        let edu_msg = new Discord.MessageEmbed()
        .setTitle(`💩 BUG REPORTADO`)
        .setColor("RANDOM")
        .setDescription(`\`✏ Usuário:\` ${author}\n\`✏ Usuário TAG e ID:\` ${author_tag} - ${author_id}\n\`✏ Servidor:\` ${server_name}\n\`✏ Servidor ID:\` ${server_id}
\`⛔ BUG:\` ${bug}`);


       id.send(edu_msg)
       let edu_msg_bugs_enviado_com_sucesso = "O bug foi reportado para meu servidor suporte com sucesso!"
       message.channel.send(`✅ | ${author} ${edu_msg_bugs_enviado_com_sucesso}\nhttps://discord.gg/BRj59tkbTK`)
    }
}