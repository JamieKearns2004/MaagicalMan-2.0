const commando = require('discord.js-commando');
const discord = require('discord.js');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, lands on either heads or tails.'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2)
        if(chance == 0)
        {
            var coinflipheads = new discord.RichEmbed()
                .setTitle("Coin Flip!")
                .setColor(0xFFFB00)
                .addField("Your coin landed on heads!", "Congrats.")

         message.channel.sendEmbed(coinflipheads);
        }
        else
        {
            var coinfliptails = new discord.RichEmbed()
            .setTitle("Coin Flip!")
            .setColor(0xFFFB00)
            .addField("Your coin landed on taisl!", "Congrats.")

            message.channel.sendEmbed(coinfliptails);
        };
    }
}

module.exports = CoinFlipCommand;