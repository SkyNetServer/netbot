const { Command } = require("discord.js-commando");

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: "kick",
            aliases: ["kicke"],
            group: "mod",
            memberName: "kick",
            description: "Kicks a user when executed.",
            examples: ["kick @User#1234"],
            args: [{
                key: "member",
                prompt: "Which user do you want to kick?\n",
                type: "member"
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

    async run(msg, { member, reason } ) {
        try {
            await msg.guild.member(member).kick(reason);
            await msg.say(`✅ | Successfully kicked \`${member.user.tag}\` for \`${reason}\`.`);
        } catch (err) {
            await msg.say(`❎ | I was unable to kick ${member.user.toString()}! Code: \`${err.message}\`.`);
        }
    }
};
