const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Need some help? No problem!'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("All about MagicalMan")
            .addField("About Me", "Hello, my name is MagicalMan. Im a bot for all users big and small, just like leprachauns to still be able to use it with ease.", true)
            .addField("Other", "I have lots of differnt commands that you can use for your enjoyment. The default prefix for MagicalMan is & or if the server changed it you can always just use @MagicalMan#3935 , they both work the same.", true)
            .addField("Author", "Jamie Kearns")
            .setColor(0xD333CD)
            .setThumbnail(message.author.avatarURL)
            .setFooter("Thanks for reading. I hope you learned a little, or a lot about me. :D")

         message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoCommand;