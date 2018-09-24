const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js');
const db = require('quick.db');

module.exports = class UtilInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'guildlist',
            aliases: ['gl'],
            group: 'util',
            memberName: 'guildlist',
            description: `dm's you a list of all the guilds im in`,
            details: oneLine `
            dm's you a list of all the guilds im in
			`,
            examples: ['>guildlist', '>gl']
        });
    }

    async run(msg, args) {
        if (msg.author.bot) return;
        var guilds;
        this.client.guilds.forEach(guild => {
            guilds = guilds + `\n${guild.name} with ${parseInt(guild.memberCount)} members`
        });
        guilds = `${guilds}`.replace(/undefined/g, '');
        msg.author.send(guilds);
        msg.react('📩');   
    }
};
