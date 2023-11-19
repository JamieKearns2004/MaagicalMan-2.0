const commando = require('discord.js-commando');
const repuatation = require("../../reputation.json");
const fs = require("fs");

class PlusRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'plusrep',
            group: 'simple',
            memberName: 'plusrep',
            description: 'Adds repuatation to the user.'
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
        repuatation[message.author.id].rep = repuatation[message.author.id].rep + 1;
        fs.writeFile("../reputation.json", JSON.stringify(repuatation), (err) =>{
            if(err){
                console.log(err);
            }
        });  
        
        message.reply("You just added one rep point to your account.");
    }
}

module.exports = PlusRepCommand;