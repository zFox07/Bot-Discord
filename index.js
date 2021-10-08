
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
const db = ("quick.db");


client.on("guildMemberAdd", (member) => {
    let discord_canal_de_boas_vindas = db.get(`discord_boas_vindas_${member.guild.id}`);
    let discord_contador = member.guild.memberCount;
    let discord_servidor = member.guild.name;
  
    if (!discord_canal_de_boas_vindas) return;
  
    let msg_embed_discord = new Discord.MessageEmbed() //mensagem embed
    .setAuthor(`${member.user.tag}`, member.user.avatarURL())
    .setDescription(`Boas Vindas ${member.user} ao servidor **${discord_servidor}**! \nAtualmente estamos com \`${discord_contador}\` membros!`)
    .setColor("RANDOM")
    .setThumbnail(member.user.avatarURL());
  
    let msg_not_embed_discord = `Boas Vindas ${member.user}! \nAtualmente estamos com \`${discord_contador}\` membros!`; //mensagem não embed
  
    client.channels.cache.get(discord_canal_de_boas_vindas).send(msg_embed_discord)
  });
  
const enmap = require('enmap');
const {token, prefix} = require('./config.json');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    //const "https://discord.gg/jkrpsMddCj";

    const message = message.content.slice(prefix.length).trim().split(/ +/g);
    const discord/*https://discord.gg/jkrpsMddCj*/ = message.shift().toLowerCase();
    const emoji = "🎫";

    if(discord/*https://discord.gg/jkrpsMddCj*/ == "ticket") {
        // ticket-setup #canal

        let mention = message.mentions.channels.first();
        if(!mention) return message.reply("`.ticket #canal`");

        let embed = await mention.send(new Discord.MessageEmbed()
            .setTitle("Sistema de ticket")
            .setDescription("**Reaja para abrir um ticket!**")
            .setFooter("Sistema de tickets criado pelo Eduzito!")
            .setColor("PURPLE")
        );

        embed.react(emoji);
        settings.set(`${message.guild.id}-ticket`, embed.id);

        message.channel.send("Sistema de ticket configurado!")
    }

    if(discord/*https://discord.gg/jkrpsMddCj*/ == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("Você não pode utilizar esse comando aqui!")
        message.channel.delete();
    }
});
client.on('ready', () => {
    console.log('ready')
});

client.on('messageReactionAdd', async (reaction, user) => {
  const emoji = "🎫";
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let mention = await settings.get(`${reaction.message.guild.id}-ticket`);

    if(!mention) return;

    if(reaction.message.id == mention && reaction.emoji.name == emoji) {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async mention => {
            mention.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Bem vindo ao seu atendimento!").setDescription("Utilize **.close** para fechar").setColor("PURPLE"));
            
        })
    }
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});



client.login(config.token);
