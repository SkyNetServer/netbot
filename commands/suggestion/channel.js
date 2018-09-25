const Command = require('../../structures/Command');
const oneLine = require('common-tags').oneLine;

module.exports = class ChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'set',
            group: 'suggestions',
            memberName: 'set',
            description: 'Shows or sets the suggestion channel.',
            
        });
    }
	async run(msg, args) {
            return;
        
    }
}
