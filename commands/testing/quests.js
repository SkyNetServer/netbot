const Command = require('../../structures/Command');
const fs = require("fs");




module.exports = class questsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quests',
            aliases: ['quest'],
            group: 'rpg',
            memberName: 'quests',
            description: 'Displays current quests.',
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run(message, args) {
        let players = JSON.parse(fs.readFileSync('rpg_files/players.json', 'utf8'));
        
    }
}
