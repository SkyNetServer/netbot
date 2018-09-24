const Command = require('../../structures/Command');
const fs = require("fs");

module.exports = class levelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'level',
            group: 'rpg',
            memberName: 'level',
            description: 'Displays level <3'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let userData = points[message.author.id];
        message.channel.send("```\nName: "+message.author.username+" \nLevel: "+userData.level+" \nPoints: "+userData.points+" \nTotal: "+userData.total+"\nPickaxe: "+userData.pickaxe+"\n```");
    }
}
