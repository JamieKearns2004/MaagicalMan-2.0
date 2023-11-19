const commando = require('discord.js-commando');
const discord = require('discord.js');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice.'
        });
    }

    async run(message, args)
    {
        var DiceRollMath = Math.floor(Math.random() * 6) + 1;
        var DiceRoll = new discord.RichEmbed()
            .setTitle("Dice Roll!")
            .addField("Your dice landed on " + DiceRollMath, "Congrats!")
            .setColor("0x8E44AD");

        message.channel.sendEmbed(DiceRoll);
    }
}

module.exports = DiceRollCommand;