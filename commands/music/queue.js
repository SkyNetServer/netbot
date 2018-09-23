const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'queue',
			group: 'music',
			memberName: 'queue',
			description: 'Displays music queue.',
			examples: ['queue'],
		});
	}
	run(msg) {
		return;
	}
};
