const commando = require('discord.js-commando');
const discord = require('discord.js');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans the mentioned user.'
        });
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("Sorry, I couldnt find that User");
            return;
        }
        if(!message.member.hasPermissions("BAN_USERS"))
        {
            message.channel.send("I can't let you ban this user because you dont have the right permissions for me to do so.");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = BanCommand;