const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'volume',
			guildOnly: true,
			group: 'music',
			memberName: 'volume',
			description: 'Adjusts volume for audio playback.',
			examples: ['volume 20'],
		});
	}
	run(msg) {
		return;
	}
};
