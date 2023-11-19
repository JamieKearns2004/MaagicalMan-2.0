const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client({
    commandPrefix: '?'
});

// This is the token for MagicalMan dont forget to change it after you regenerate it!
const TOKEN = 'goodtry'

// This is were I register were the commands are coming from. (Registering subfolders)
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('funny', 'Funny');
bot.registry.registerGroup('help', 'Help');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

// Tells you in your terminal when the bot goes Online.
bot.on('ready',function(){
    console.log("MagicalMan is now Online.");
    // Sets the activity of the bot. Like what game its playing at the time.
    bot.user.setActivity("?help, Contact jamiekearns2004#2485 on discord for additional help!", {type: 'PLAYING'})
});

// This section of code is for commads that dont need a prefix.

bot.on('message', function(message){    
    if(message.content == 'Hello')
    {
        message.channel.send('Hello ' + message.author + ', how are you?');
        return;
    }
    if (message.author.bot) return; 
    if (message.content.toLowerCase().includes("where can i ask questions")) {
        message.channel.send('Hey ' + message.author + ', you can ask questions in #help-and-suggestions.');
        return;
    }
    if(message.content == 'How can I become staff?')
    {
        message.channel.send('Hey ' + message.author + ', you can only earn staff. Sorry.');
        return;
    }
    if(message.content == 'Why did I get warned?')
    {
        message.channel.send('Hey ' + message.author + ', you most likely were warned because you either broke some rules, annoyed staff or were annoying other people in X channels.');
        return;
    }
    if(message.content == 'Am I allowed to tag staff member?')
    {
        message.channel.send('No!' + message.author + ', you are not allowed to tag staff members because it gets very annoying for staff to get notifications every time they get tag when they get notified anyway when someone types something.');
        return;
    }
    if(message.content == 'What are the rules of this server?')
    {
        message.channel.send('Hey ' + message.author + ', all the rules for this server are on the website, #website');
        return;
    }
    if(message.content == 'Wshen will I be verified?')
    {
        message.channel.send('Never if you keep asking!');
        return;
    }
    if (message.author.bot) return; 
    if (message.content.toLowerCase().includes("where can i find the website")) {
        message.channel.send("Hey " + message.author + ", you can find the website at #website");
    }
});

//Banned messages section.
bot.on('message', function(message){
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("nigga")) {
        {
            message.channel.send(message.author + ", your recent message is a banned message, watch your language!");
        }

        let banned_message_channel = message.guild.channels.find('name', 'mod-logs');
        if (!banned_message_channel) return message.channel.send(message.author + ", you have used a banned message, but you are lucky because the staff have not set up tShe correct channel for me to warn you in.");

        var banned_message_embed = new discord.RichEmbed()
            .setColor('0xB400FF')
            .setTimestamp()
            .setTitle(`**ACTION: Banned Word**`)
            .addField(`User`, message.author)
            .addField("Caught In:", message.channel, true)

        banned_message_channel.sendEmbed(banned_message_embed);
        {
            let bannedMessage = message.content.includes

            message.delete(bannedMessage);
        }
    }
});

//----------------------------------------------------------------------------------------------

bot.on('message', function(message){
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("nigger")) {
        {
            message.channel.send(message.author + ", your recent message is a banned message, watch your language!");
        }

        let banned_message_channel = message.guild.channels.find('name', 'mod-logs');
        if (!banned_message_channel) return message.channel.send(message.author + ", you have used a banned message, but you are lucky because the staff have not set up yhe correct channel for me to warn you in.");

        var banned_message_embed = new discord.RichEmbed()
            .setColor('0xB400FF')
            .setTimestamp()
            .setTitle(`**ACTION: Banned Word**`)
            .addField(`User`, message.author)
            .addField("Caught In:", message.channel, true)

        banned_message_channel.sendEmbed(banned_message_embed);
        {
            let bannedMessage = message.content.includes

            message.delete(bannedMessage);
        }
    }
});

//---------------------------------------------------------------------------------------------------------

bot.on('message', function(message){
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("gay")) {
        {
            message.channel.send(message.author + ", your recent message is a banned message, watch your language!");
        }

        let banned_message_channel = message.guild.channels.find('name', 'mod-logs');
        if (!banned_message_channel) return message.channel.send(message.author + ", you have used a banned message, but you are lucky because the staff have not set up the correct channel for me to warn you in.");
        
        var banned_message_embed = new discord.RichEmbed()
            .setColor('0xB400FF')
            .setTimestamp()
            .setTitle(`**ACTION: Banned Word**`)
            .addField(`User`, message.author)
            .addField("Caught In:", message.channel, true)

        banned_message_channel.sendEmbed(banned_message_embed);
        {
            let bannedMessage = message.content.includes

            message.delete(bannedMessage);
        }
    }
});

// End of section.

// Welcomes a user to the server as an embed
bot.on('guildMemberAdd', member => {
    let unverifiedRole = member.guild.roles.find("name", "Unverified");
    member.addRole(unverifiedRole);
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if(!channel) return;
        let WelcomeEmbed = new discord.RichEmbed()
        .setColor('0xF95CF9')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to ${member.guild.name} ${member}! Please make sure you read all the rules and have also submitted a valid application, which can be found in website . If you have done both of these, please wait until a member of Staff can interview you. We currently have ${member.guild.memberCount} certified members!`)
        .addField(':id: | User : ', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | You are the member', `${member.guild.memberCount}`)
        .addField("Name", '<@' + `${member.id}` + '>', true)
        .addField('Server', `${member.guild.name}`, true )
        .setTimestamp()

        channel.sendEmbed(WelcomeEmbed)
});

bot.on('guildMemberAdd', member => {
    console.log(`${member}`, "has joined " + `${member.guild.name}`)
});

// This is the Token for MagicalMan's bot make sure to change it when u regenerate it!
bot.login(TOKEN);
