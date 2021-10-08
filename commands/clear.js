//Comando de clear
 
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send (`**Na tens perm para:** \`Gerenciar Mensagens\``).then(msg => {
      msg.delete({
        timeout: 5000
      })
    });
   
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send (`**Na tens perm para:** \`Gerenciar Mensagens\``).then(msg => {
      msg.delete({
        timeout: 5000
      })
    });
   
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 99) return message.channel.send(`**Mete um número até \`99 mensagens\` para eu remover! **`).then(msg => {
      msg.delete({
        timeout: 5000
      })
    });
   
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount + 1
    });
   
    message.channel.bulkDelete(fetched);
   
    message.channel.send(`**Chat limpo! | :broom:**`).then(msg => {
      msg.delete({
        timeout: 5000
      })
    });
  }