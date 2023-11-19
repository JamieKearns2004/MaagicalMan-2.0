const commando = require('discord.js-commando');

class WhatDoIlookLikeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'what_do_i_look_like',
            group: 'simple',
            memberName: 'what_do_i_look_like',
            description: 'This command shows you what yourr avatar on Disocrd is.'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL)
    }
}

module.exports = WhatDoIlookLikeCommand;