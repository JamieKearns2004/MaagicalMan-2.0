const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class VerifyCommand extends commando.Command {
    constructor(client)
    {
        super(client, {
            name: 'verify',
            group: 'admin',
            memberName: 'verify',
            description: 'Verifies a user.'
        });
    }

    async run(message, agrs){

        if(!message.member.hasPermissions("MANAGE_MESSAGES")){
            var WarningEmbed = new discord.RichEmbed()
                .setTitle('Caught That!')
                .addField('Sneaky but I caught that! Please dont try verify when you dont have permission to do so!')
                .setColor('0xF2A202')

                message.channel.sendEmbed(WarningEmbed);

            let logchannel = message.guild.channels.find(channel => channel.name == 'mod-logs');
            if (!logchannel) return message.reply("I cant find the correct channel doogggggg");

            var LogEmbed = new discord.RichEmbed()
                .setTitle('They were caught!')
                .addField('Someones trying to verify someone without permission, keep an eye on them!')
                .setColor('0xF2A202')

                logchannel.sendEmbed(LogEmbed);
        }
        let member = message.mentions.members.first();
        if (!member) return message.channel.send("Sorry, I couldnt find that User");

        let CitizenRole = message.guild.roles.find("name", "Citizen");
        message.member.addRole(CitizenRole);

        let UnverifiedRole = message.guild.roles.find("name", "Unverified");
        message.member.removeRole(UnverifiedRole);

        var FinalEmed = new discord.RichEmbed()
            .setTitle('All done!')
            .addField('Ur user was succefully verified.', 'Well done staff, keep it up!')
            .setColor('RANDOM')

            message.channel.sendEmbed(FinalEmed);
    }
}