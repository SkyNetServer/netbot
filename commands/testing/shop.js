const Command = require('../../structures/Command');
const Discord = require("discord.js");
const fs = require("fs");

module.exports = class shopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shop',
            group: 'rpg',
            memberName: 'shop',
            description: 'displays all available items'
        });
    }

    async run(message, args) {
        if (message.author.bot) return;
         
        let items = JSON.parse(fs.readFileSync('rpg_files/items.json', 'utf8'));
        var array = [];
        for (var i in items) {
            if (items[i].purchasable) {
                array.push({
                    name: items[i].name,
                    worth: items[i].worth,
                    description: items[i].description
                });
            }
        }
        var output = "```javascript\n";
        for (var i in array) {
            output += "-->" + array[i].name + ": " + array[i].worth + " points\n Description: "+array[i].description + "\n";
        }
        output += "```";
        message.author.send(output);
    }
}
