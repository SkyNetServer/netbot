const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class ConnectCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'summon',
            group: 'music',
            aliases: ['summon'],
            memberName: 'summon',
            description: 'Connects the bot to your current channel.',
            examples: ['!disconnect'],
            guildOnly: true
        });    
    }

	hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("MOVE_MEMBERS") : false

    }

    async run(message) {
        await message.delete();
        let voiceCollection = message.member.voiceChannel;
        await voiceCollection.join();
        return console.log('❗ ' + message.author.username + " has summoned the bot to the channel: " + voiceCollection.name);
        };
    }
