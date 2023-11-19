const commando = require('discord.js-commando');
const discord = require('discord.js');

class PurgeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'Deletes a certain amount of messages.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermissions("MANAGE_MESSAGES"))
        {
            message.channel.send("I can't let you use the purge command because you do not have the correct permissions.");
            return;
        }
        (args);
            message.channel.bulkDelete(args)
        .then(messages => console.log(`Successfully deleted ${args} messages`))
        .catch(console.error);
    }
}

module.exports = PurgeCommand;