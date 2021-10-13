const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;


bot.on('ready', () => {
    console.log('logged in as ${bot.user.tag}!');

})

bot.on('message', message => {

    if (message.content.startsWith(`${prefix}embed`)) {
        const embedname = new Discord.MessageEmbed().setTitle(`I AM AN EMBED`)
        .setDescription(message.content.substring(6))
        .setColor('0x#32ddff')
        .setFooter(`REQUESTED BY ${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true })}`);
        .setTimestamp();
        message.channel.send(embedname)
    }
    if (message.content === `${prefix}ping`) {
        message.reply('pong');
    }
    if (message.content === `${prefix}av`) {
        message.channel.send(message.author.displayAvatarURL({ dynamic: true }))
    }


});


bot.login(config.token);