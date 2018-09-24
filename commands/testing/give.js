const commando = require('discord.js-commando');
const fs = require("fs");

class giveCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'give',
            group: 'rpg',
            memberName: 'give',
            description: 'Gives your points to @mention'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        }
    }
