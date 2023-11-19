const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class StopSongCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Stops the song that is currently playing.'
        });
    }

    async run(message, args)
    {

        var server = server[message.guild.id];
    
    
        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    };
}

module.exports = StopSongCommand;