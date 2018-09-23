const { Command } = require("discord.js-commando");

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ban",
            aliases: ["ban-hammer", "banne"],
            group: "mod",
            memberName: "ban",
            description: "Bans a user when executed.",
            examples: ["ban @User#1234"],
            args: [{
                key: "member",
                prompt: "Which user do you want to ban?\n",
                type: "member"
            }, {
                key: "days",
                prompt: "How much days to delete message history? (max: 7)\n",
                type: "integer"
            }, {
                key: "reason",
                prompt: "What is the reason?\n",
                type: "string"
            }]
        });
    }

    hasPermission(msg) {
        return this.client.isOwner(msg.author) || msg.member.permissions.has("BAN_MEMBERS");
    }

    async run(msg, { member, days, reason } ) {
        try {
            await member.ban({ days, reason });
            await msg.say(`✅ | Successfully banned \`${member.user.tag}\` for \`${reason}\`.`);
        } catch (err) {
            await msg.say(`❎ | I was unable to ban ${member.user.toString()}! Code: \`${err.message}\`.`);
        }
    }
};
