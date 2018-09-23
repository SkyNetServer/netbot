const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'np',
			group: 'music',
			memberName: 'np',
			description: 'show audio playback.',
			examples: ['np'],
		});
	}
	run(msg) {
		return;
	}
};
