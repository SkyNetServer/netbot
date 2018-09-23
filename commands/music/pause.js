const Command = require('../../structures/Command');
const fs = require('fs');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pause',
			guildOnly: true,
			group: 'music',
			memberName: 'pause',
			description: 'Pauses audio playback.',
			examples: ['pause'],
		});
	}
	run(msg) {
		return;
	}
};
