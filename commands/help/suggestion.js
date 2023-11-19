const {
    Command
  } = require('discord.js-commando');
  const {
    RichEmbed
  } = require('discord.js');
  
  module.exports = class SuggestCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'suggest',
        group: 'help',
        memberName: 'suggest',
        description: 'You can use this command to suggest something to the Mods/admins about something you think will be good for the server to add.'
      });
    }
  
    async run(message, args) {
  
      let SuggestChannel = message.guild.channels.find(channel => channel.name == 'help-and-suggestions');
      if (!SuggestChannel) return message.reply("I cant find the correct channel doogggggg");
  
      let suggestion = args.split(' ')
      if (!suggestion) return message.channel.send("Provide a suggestion please!");
  
      var SuggestionEmbed = new RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle(`**Suggestion**`)
        .addField(`User`, message.author.tag)
        .addField(`Suggestion`, suggestion);
  
      SuggestChannel.send(SuggestionEmbed);

      message.channel.send("**Recorded!**" + "Your suggestion will be looked at by staff soon thanks for all your help to the server!");
    }
  }