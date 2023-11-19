const commando = require('discord.js-commando');
const discord = require('discord.js');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks the mentioned user.'
        });
    }

    async run(message, args)
    {
        let KickedUser = message.guild.member(message.mentions.users.first());
        if(!KickedUser)
        {
            message.channel.send("Sorry, I couldnt find that User");
            return;
        }
        if(!message.member.hasPermissions("KICK_USERS"))
        {
            message.channel.send("I can't let you kick this user because you dont have the right permissions for me to do so.");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(KickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = KickCommand;