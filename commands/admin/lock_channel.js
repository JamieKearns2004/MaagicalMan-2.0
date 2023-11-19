const commando = require('discord.js-commando');
const discord = require('discord.js');

class LockChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'lock',
            group: 'admin',
            memberName: 'lock',
            description: 'Locks a channel for a pecififc amount of time.'
        });
    }

    async run(message, args) {
      
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sorry, you dont have the permssion to lockdoqn or unlock')
        .then(message => message.delete({
          timeout: 10000
        }));
    if(!this.client.lockit) this.client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if(!time) return message.channel.send('You must set a duration for the lockdown either hour(s), minute(s) or seconds(s)');

    if(validUnlocks.includes(time)) {
      message.channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send('Lockdown lifted.');
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(error => {
        console.log(error);
      });
}else {
  message.channel.updateOverwrite(message.guild.id, {
    SEND_MESSAGES: false
  })
  .then(() => {
    message.channel.send(`Channel locked down for ${ms(ms(time), { long:true})}`)
      .then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          })
          .then(message.channel.send('Lockdown lifted.'))
          .catch(console.error);
        delete client.lockit[message.channel.id];
        }, ms(time));
      })
      .catch(error => {
        console.log(error);
      })
  })
}
    }
}

module.exports = LockChannelCommand;