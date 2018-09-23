const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'play',
			guildOnly: true,
			group: 'music',
			memberName: 'play',
			description: 'Searches for the provided query on YouTube.',
			examples: ['play bag raiders shooting stars'],
		});
	}
	run(msg) {
		return;
	}
};
//this is a other code
