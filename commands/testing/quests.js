const Command = require('../../structures/Command');
const fs = require("fs");




module.exports = class questsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quests',
            aliases: ['quest'],
            group: 'rpg',
            memberName: 'quests',
            description: 'Displays current quests.',
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run(message, args) {
        let players = JSON.parse(fs.readFileSync('rpg_files/players.json', 'utf8'));
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        if (message.author.bot) return;
        if (message.channel.name != 'rpg') {
            message.reply('Command must be used in text channel "rpg"');
            return;
        }
        var roll = Math.floor(Math.random() * 6) + 1;

        if (!players[message.author.id]) players[message.author.id] = {
            questsCompleted: 0,
            dailyQuest: false,
            active: true,
            questid: roll,
            itemCount: 0
        };

        if (!points[message.author.id]) points[message.author.id] = {
            points: 0,
            level: 0,
            pickaxe: "wood"
        };
        if (!points[message.author.id].pickaxe) points[message.author.id] = {
            points: points[message.author.id].points,
            level: points[message.author.id].level,
            pickaxe: "wood"
        };
        let userData = points[message.author.id];
        let playerData = players[message.author.id];
        if (playerData.dailyQuest == true && playerData.active == true) {
            console.log(message.author + " Has completed their quest!");
            //Quest Rewards
            var questid = playerData.questid;
            switch(questid) {
                case 1:{
                    message.reply("You were awarded 5000 Points for mining 50 Cobble.")
                    playerData.questsCompleted++;
                    userData.points += 5000;
                    userData.total += 5000;
                    userData.active = false;
                    break;
                }
                case 2:{
                    message.reply("You were awarded 5000 Points for mining 1 Emerald")
                    playerData.questsCompleted++;
                    userData.points += 5000;
                    userData.total += 5000;
                    userData.active = false;
                    break;
                }
                case 3:{
                    message.reply("You were awarded 10000 Points for mining 5 Diamonds.")
                    playerData.questsCompleted++;
                    userData.points += 10000;
                    userData.total += 10000;
                    userData.active = false;
                    break
                }
                case 4:{
                    message.reply("You were awarded 5000 Points for mining 20 Iron.")
                    playerData.questsCompleted++;
                    userData.points += 5000;
                    userData.total += 5000;
                    userData.active = false;
                    break;
                }
                case 5:{
                    message.reply("You were awarded 5000 Points for mining 35 Coal.")
                    playerData.questsCompleted++;
                    userData.points += 5000;
                    userData.total += 5000;
                    userData.active = false;
                    break;
                }
                case 6:{
                    message.reply("You were awarded 5000 for collecting Brandons hair..........")
                    playerData.questsCompleted++;
                    userData.points += 5000;
                    userData.total += 5000;
                    userData.active = false;
                    break;
                }
                default:
                    break;
            }
            playerData.active = false;
        } else if (playerData.dailyQuest == false) {
            //Display What quest it is if not done.
            var questid = playerData.questid;
            switch(questid) {
                case 1:{
                    message.reply(`Your quest is to mine 50 Cobble\nYour Progress is **${playerData.itemCount}** / **50**`);
                    break;
                }
                case 2:{
                    message.reply("Your quest is to mine 1 Emerald")
                    break;
                }
                case 3:{
                    message.reply(`Your quest is to mine 5 Diamonds\nYour Progress is **${playerData.itemCount}** / **5**`);
                    break
                }
                case 4:{
                    message.reply(`Your quest is to mine 20 Iron\nYour Progress is **${playerData.itemCount}** / **20**`);
                    break;
                }
                case 5:{
                    message.reply(`Your quest is to mine 35 Coal\nYour Progress is **${playerData.itemCount}** / **35**`);
                    break;
                }
                case 6:{
                    message.reply("Your quest is to collect Brandons Hair")
                    break;
                }
                default:
                    break;
            }
        } else {
            message.reply("You already completed your daily quest for today!");
        }

        let curLevel = Math.floor(0.1 * Math.sqrt(userData.total));
        if (curLevel > userData.level) {
            // Level up!
            userData.level = curLevel;
            message.reply(`You've leveled up to level **${curLevel}**! Pretty rad fam!`);
        }
        fs.writeFile('rpg_files/players.json', JSON.stringify(players, null, 4), (err) => {
            if (err) console.error(err)
        });
        fs.writeFile('rpg_files/points.json', JSON.stringify(points, null, 4), (err) => {
            if (err) console.error(err)
        });
    }
}
