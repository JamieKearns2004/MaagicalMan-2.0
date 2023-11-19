const commando = require('discord.js-commando');
const repuatation = require("../../reputation.json");
const fs = require("fs");

class MinusRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'minusrep',
            group: 'simple',
            memberName: 'minusrep',
            description: 'Subtracts repuatation from the user.'
        });
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("Sorry, I couldn't find that user.")
        }
        if(!repuatation[message.author.id]){
            repuatation[message.author.id] = {
                rep: 0
            };
        } 
        repuatation[message.author.id].rep = repuatation[message.author.id].rep - 1;
        fs.writeFile("../reputation.json", JSON.stringify(repuatation), (err) =>{
            if(err){
                console.log(err);
            }
        });   
        
        message.reply("You just subtracted one rep point from your account.");
    }
}

module.exports = MinusRepCommand;