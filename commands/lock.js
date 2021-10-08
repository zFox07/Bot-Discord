module.exports = {
    name: "lock ",
    author: "Edu",

    run: async(client, message, args) => {
        let edu_perm = message.member.hasPermission("MANAGE_GUILD");
        let edu_perm_erro_msg = `:x: | ${message.author} Você não possui a permissão **Gerenciar Servidor**.`;
        if (!edu_perm) return message.channel.send(edu_perm_erro_msg);

        let edu_lock = await message.channel.updateOverwrite(message.guild.roles.cache.find(fera => fera.name.toLowerCase().trim() == "@everyone"),
        {
            SEND_MESSAGES: false
        });
        
        let edu_lock_msg = `✅ ${message.author} O canal foi trancado com sucesso!`

        message.channel.send(edu_lock_msg)
    }

}