const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stop',
			group: 'music',
			memberName: 'stop',
			description: 'stop audio playback.',
			examples: ['stop'],
		});
	}
	run(msg) {
		return;
	}
};
