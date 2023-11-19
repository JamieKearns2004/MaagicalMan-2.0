const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class SkipSongCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Skips the song that is currently playing.'
        });
    }

    async run(message, args)
    {
        var server = servers[message.guild.id];

        if(server.dipatcher) server.dipatcher.end();    
    };
}

module.exports = SkipSongCommand;