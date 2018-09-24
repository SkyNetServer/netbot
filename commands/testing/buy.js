const Command = require('../../structures/Command');
const fs = require("fs");

module.exports = class buyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'buy',
            group: 'rpg',
            memberName: 'buy',
            description: 'Buy item requested.'
        });
    }

    async run(message, args) {
        if (message.author.bot) return;
    }
}
