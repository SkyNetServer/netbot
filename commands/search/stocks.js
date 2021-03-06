const Command = require('../../structures/Command');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const { ALPHA_VANTAGE_KEY } = process.env;

module.exports = class StocksCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stocks',
			aliases: ['stock', 'alpha-vantage'],
			group: 'search',
			memberName: 'stocks',
			description: 'Responds with the current stocks for a specific symbol.',
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					key: 'symbol',
					prompt: 'What symbol would you like to get the stocks of?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, { symbol }) {
		try {
			const { body } = await request
				.get('https://www.alphavantage.co/query')
				.query({
					function: 'TIME_SERIES_INTRADAY',
					symbol,
					interval: '1min',
					apikey: ALPHA_VANTAGE_KEY
				});
			if (body['Error Message']) return msg.say('Could not find any results.');
			const data = Object.values(body['Time Series (1min)'])[0];
			const embed = new MessageEmbed()
				.setTitle(`Stocks for ${symbol.toUpperCase()}`)
				.setColor(0x9797FF)
				.addField('❯ Open', `$${data['1. open']}`, true)
				.addField('❯ Close', `$${data['4. close']}`, true)
				.addField('❯ Volume', data['5. volume'], true)
				.addField('❯ High', `$${data['2. high']}`, true)
				.addField('❯ Low', `$${data['3. low']}`, true)
				.addField('❯ Last Updated',
					moment.utc(body['Meta Data']['3. Last Refreshed']).format('MM/DD/YYYY h:mm A'), true);
			return msg.embed(embed);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
