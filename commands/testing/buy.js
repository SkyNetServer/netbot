const Command = require('../../structures/Command');
const fs = require("fs");

module.exports = class buyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'buy',
            group: 'rpg',
            memberName: 'buy',
            description: 'Buy item requested.'
        });
    }

    async run(message, args) {
        if (message.author.bot) return;
       
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let items = JSON.parse(fs.readFileSync('rpg_files/items.json', 'utf8'));
        let userData = points[message.author.id];
        var array = [];
        for (var i in items) {
            if (items[i].purchasable) {
                array.push({
                    name: items[i].name,
                    worth: items[i].worth
                });
            }
        }
        var a = args.toUpperCase();

        for (var i in array) {
            var b = array[i].name.toUpperCase();
            if (a == b) {
                if (userData.points >= array[i].worth) {
                    //Pickaxes
                    if (array[i].name == "Stone Pickaxe") {
                        userData.points -= array[i].worth;
                        console.log(userData.pickaxe);
                        userData.pickaxe = "stone";
                        message.reply('Nice Pickaxe....I think.. New pickaxe Level');
                        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
                            if (err) console.error(err)
                        });
                        return;
                    }
                    if (array[i].name == "Iron Pickaxe") {
                        userData.points -= array[i].worth;
                        userData.pickaxe = "iron";
                        message.reply('Pshh No life.. New pickaxe Level');
                        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
                            if (err) console.error(err)
                        });
                        return;
                    }
                    if (array[i].name == "Diamond Pickaxe") {
                        userData.points -= array[i].worth;
                        userData.pickaxe = "diamond";
                        message.reply('WOOO NICE DIAMOND PICK BRUH.. New pickaxe Level');
                        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
                            if (err) console.error(err)
                        });
                        return;
                    }
                } else {
                    message.reply('Not enough money ;(');
                    return;
                }
            }
        }
        message.reply('Could not find item.');
        return;
    }
}
