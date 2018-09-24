const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			aliases: ['commands', 'command-list'],
			group: 'util',
			memberName: 'help',
			description: 'Displays a list of available commands, or detailed information for a specific command.',
			guarded: true,
			args: [
				{
					key: 'command',
					prompt: 'Which command would you like to view the help for?',
					type: 'command',
					default: ''
				}
			]
		});
	}

	async run(msg, { command }) {
		if (!command) {
			const embed = new MessageEmbed()
				.setTitle('Command List')
			      .setDescription("The prefix is ``$`` \n use ``$help {command name}`` for more info. Ex: ``$help rip``")
			       .setTimestamp()
				.setColor(0x00AE86)
				.setFooter(`${this.client.registry.commands.size} Commands`);
			for (const group of this.client.registry.groups.values()) {
				embed.addField(
					`👉   ${group.name} commands`,
					group.commands.map(cmd => `\`${cmd.name}\``).join(', ') || 'None'
				);
			}
			try {
				const msgs = [];
				msgs.push(await msg.direct({ embed }));        
				msg.direct("love using NetBot? you can add me using this link: **coming soon** \n you can vote for me to keep me free and online: **coming soon** \n you can also join my home where i was made: https://discord.me/netbot")
                                if (msg.channel.type !== 'dm') msgs.push(await msg.say(`*sshh*....Hey there ${msg.author}, I just Sent you a DM with all the info you need.`));
				return msgs;
			} catch (err) {
				return msg.reply('Failed to send DM. You probably have DMs disabled.... 💔.');
			}
		}
		return msg.say(stripIndents`
			__Command **${command.name}**__${command.guildOnly ? ' (Usable only in servers)' : ''}
			${command.description}${command.details ? `\n${command.details}` : ''}

			**Format:** ${msg.anyUsage(`${command.name} ${command.format || ''}`)}
			**Aliases:** ${command.aliases.join(', ') || 'None'}
			**Group:** ${command.group.name} (\`${command.groupID}:${command.memberName}\`)
		`);
	}
};
