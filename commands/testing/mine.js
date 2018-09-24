const Command = require('../../structures/Command');
const fs = require("fs");

module.exports = class mineCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mine',
            group: 'rpg',
            memberName: 'mine',
            description: 'Mines ore',
            throttling: {
                usages: 1,
                duration: 15
            }
        });
    }

    async run(message, args) {
        let players = JSON.parse(fs.readFileSync('rpg_files/players.json', 'utf8'));;
:
    }
}
