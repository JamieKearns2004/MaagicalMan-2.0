const {
    Command
  } = require('discord.js-commando');
  const {
    RichEmbed
  } = require('discord.js');
  
  module.exports = class MuteCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'suspend',
        group: 'admin',
        memberName: 'suspend',
        description: 'Suspends a user for a pecific amount of time.'
      });
    }
  
    async run(message, args) {
  
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I can't let you mute this user because you dont have the right permissions for me to do so.");
  
      let warnchannel = message.guild.channels.find(channel => channel.name == 'mod-logs');
      if (!warnchannel) return message.reply("I cant find the correct channel doogggggg");
  
      let member = message.mentions.members.first();
      if (!member) return message.channel.send("Sorry, I couldnt find that User");
  
      let reason = args.split(' ').slice(1).join(' ')
      if (!reason) return message.member.channel.send("Provide a reason for the mute!");

      let suspendrole = message.guild.roles.find("name", "Suspended");
      message.member.addRole(suspendrole);

      let citizenrole = message.member.guild.roles.find("name", "Citizen");
      message.member.removeRole(citizenrole);

      var warnemebd = new RichEmbed()
        .setColor('0xF2A202')
        .setTimestamp()
        .setTitle(`**ACTION: Suspend**`)
        .addField(`User:`, member.user.tag + ' | ' + member, true)
        .addField(`Admin:`, message.author.tag, true)
        .addField("Suspened In:", message.channel, true)
        .addField(`Reason:`, reason);
  
      warnchannel.send(warnemebd);

      message.channel.send("**Recorded!**" + " Your mentioned user has been suspended!" + " This suspend will be investigated soon!");
    }
  }