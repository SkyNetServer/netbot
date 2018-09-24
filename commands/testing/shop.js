const Command = require('../../structures/Command');
const Discord = require("discord.js");
const fs = require("fs");

module.exports = class shopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shop',
            group: 'rpg',
            memberName: 'shop',
            description: 'displays all available items'
        });
    }

    async run(message, args) {
        if (message.author.bot) return;
         
        let items = JSON.parse(fs.readFileSync('rpg_files/items.json', 'utf8'));
     
    }
}
