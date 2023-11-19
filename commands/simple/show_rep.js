const commando = require('discord.js-commando');
const repuatation = require("../../reputation.json");
const discord = require("discord.js");
const fs = require("fs");

class ShowRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'showrep',
            group: 'simple',
            memberName: 'showrep',
            description: 'Show the reputation the user currently has.'
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
        let repEmbed = new discord.RichEmbed()
            .setTitle(targetUser.user.username + " Reputation")
            .addField("Reputation", (repuatation[message.author.id].rep).toString(),false)
            .setThumbnail(message.author.avatarURL)
            .setColor(0x23F93D)
        message.channel.send(repEmbed);    
        fs.writeFile("../reputation", JSON.stringify(repuatation), (err) =>{
            if(err){
                console.log(err);
            }
        });       
    }
}

module.exports = ShowRepCommand;