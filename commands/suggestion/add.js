const Command = require('../../structures/Command');
const RichEmbed = require('discord.js').RichEmbed;

module.exports = class AddCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'add',
            aliases: ['create', 'new', 'add-suggestion', 'suggestion', 'add-feedback', 'feedback'],
            group: 'suggestions',
            memberName: 'add',
            description: 'Add a suggestion',
            examples: ['add "Add music bot" "Please add a music bot to the server, because it\'s fun!"'],
            throttling: {
                usages: 2,
                duration: 60
            }, 
            argsSingleQuotes: false,
        });
    }

    async run(msg, args) {
        
        return 
    }
}
