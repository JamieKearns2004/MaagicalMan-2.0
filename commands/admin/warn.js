const {
    Command
  } = require('discord.js-commando');
  const {
    RichEmbed
  } = require('discord.js');
  
  module.exports = class WarnCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'warn',
        group: 'admin',
        memberName: 'warn',
        description: 'Warns a user.'
      });
    }
  
    async run(message, args) {
  
      if (!message.member.hasPermissions("MANAGE_CHANNELS")) return message.channel.send("I can't let you warn this user because you dont have the right permissions for me to do so.");
  
      let warnchannel = message.guild.channels.find(channel => channel.name == 'mod-logs');
      if (!warnchannel) return message.reply("I cant find the correct channel doogggggg");
  
      let member = message.mentions.members.first();
      if (!member) return message.channel.send("Sorry, I couldnt find that User");
  
      let reason = args.split(' ').slice(1).join(' ')
      if (!reason) return message.channel.send("Provide a reason for the warn!");
  
      var WarnEmbed = new RichEmbed()
        .setColor('0xFF0000')
        .setTimestamp()
        .setTitle(`**ACTION: Warn**`)
        .addField(`User`, member.user.tag + ' | ' + member, true)
        .addField(`Mod/Admin`, message.author.tag, true)
        .addField("Warned In:", message.channel, true)
        .addField(`Reason`, reason);
  
      warnchannel.send(WarnEmbed);

      message.channel.send("**Recorded!**" + " Your mentioned user has been warned!" + " This warning will be investigated soon!");
    }
  }