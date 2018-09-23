const Command = require('../../structures/Command');
const { MusicCommand, klasaUtil: { sleep } } = require('../../structures/index');

module.exports = class MusicCommand extends Command {

	constructor(client) {
		 super(client, {
      name: 'play',
      memberName: 'play',
      group: 'music',
      aliases: ['add', 'enqueue', 'start', 'join'],
      description: 'Adds a song to the queue',
      format: 'YoutubeURL|YoutubeVideoSearch',
      examples: ['play {youtube video to play}'],
      guildOnly: true
		 });
	} 
  async run(msg) {
		const { music } = msg.guild;

		if (!music.queue.length)
			return msg.sendMessage(`I have no disk in my deck, you may want to give me some songs with \`$add\``);

		if (!music.voiceChannel) await this.client.commands.get('join').run(msg);

		if (music.playing) {
			return msg.sendMessage('Hey! The disk is already spinning!');
		} else if (music.paused) {
			music.resume();
			return msg.sendMessage(`There was a track going on! Playing it back! Now playing: ${music.queue[0].title}!`);
		} else {
			music.channel = msg.channel;
			return this.play(music);
		}
	}
  
  async play(music) {
		while (music.queue.length) {
			const [song] = music.queue;
			await music.channel.send(`🎧 Playing: **${song.title}** as requested by: **${song.requester}**`);
			await sleep(300);

			try {
				if (!await new Promise(async (resolve) => {
					(await music.play())
						.on('end', () => {
							music.skip();
							resolve(true);
						})
						.on('error', (err) => {
							music.channel.send('Whoops! This disk broke!');
							music.client.emit('error', err);
							music.skip();
							resolve(true);
						})
						.once('disconnect', () => {
							resolve(false);
						});
				})) return;

				// Autofetch if the autoplayer is enabled
				if (!music.queue.length && music.autoplay) await this.autoPlayer(music);
			} catch (error) {
				this.client.emit('error', error);
				music.channel.send(error);
				music.leave();
				break;
			}
		}
    if (!music.queue.length) {
			music.channel.send('⏹ If you liked this music session, you can upvote the bot by clicking this link https://discordbots.org/bot/425506796250333195 and support us for the furture development. You can also join our support server by clicking this link https://discord.gg/4eMsYmx')
				.then(() => music.leave());
		}
	}

	autoPlayer(music) {
		return music.add('YouTube AutoPlay', music.next);
	}

}
