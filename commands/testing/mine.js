const Command = require('../../structures/Command');
const fs = require("fs");

module.exports = class mineCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mine',
            group: 'rpg',
            memberName: 'mine',
            description: 'Mines ore',
            throttling: {
                usages: 1,
                duration: 15
            }
        });
    }

    async run(message, args) {
        let players = JSON.parse(fs.readFileSync('rpg_files/players.json', 'utf8'));
let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        if (message.author.bot) return;
  
        var stone = {
            worth: 5
        };
        var coal = {
            worth: 10
        };
        var iron = {
            worth: 20
        };
        var diamond = {
            worth: 100
        };
        var emerald = {
            worth: 500
        };
        var brandonsHair = {
            worth: -100
        };
        var stonepick = {
            value: .05
        }
        var ironpick = {
            value: .25
        }
        var diamondpick = {
            value: .40
        }
        var legendarypick = {
            value: .65
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
            total: 0,
            level: 0,
            pickaxe: "wood"
        };
        if (!points[message.author.id].pickaxe) points[message.author.id] = {
            points: points[message.author.id].points,
            total: points[message.author.id].total,
            level: points[message.author.id].level,
            pickaxe: "wood"
        };
        let userData = points[message.author.id];
        var roll = Math.floor(Math.random() * 100) + 1;
        if (roll >= 1 && roll < 21) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 4 && playerData.itemCount < 20){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 4 && playerData.itemCount == 20){
                            playerData.dailyQuest = true;
                        }
                        userData.points += iron.worth;
                        userData.total += iron.worth;
                        message.reply('You found Iron and got 20 points');
                        break;
                    }
                case "stone":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 4 && playerData.itemCount < 20){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 4 && playerData.itemCount == 20){
                            playerData.dailyQuest = true;
                        }
                        var val = iron.worth + (iron.worth * stonepick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "iron":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 4 && playerData.itemCount < 20){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 4 && playerData.itemCount == 20){
                            playerData.dailyQuest = true;
                        }
                        var val = iron.worth + (iron.worth * ironpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "diamond":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 4 && playerData.itemCount < 20){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 4 && playerData.itemCount == 20){
                            playerData.dailyQuest = true;
                        }
                        var val = iron.worth + (iron.worth * diamondpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                case "legendary":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 4 && playerData.itemCount < 20){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 4 && playerData.itemCount == 20){
                            playerData.dailyQuest = true;
                        }
                        var val = iron.worth + (iron.worth * legendarypick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Iron and got '+val+' points');
                        break;
                    }
                default:
                    break;
            }

        } else if (roll > 20 && roll < 51) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 5 && playerData.itemCount < 35){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 5 && playerData.itemCount == 35){
                            playerData.dailyQuest = true;
                        }
                        userData.points += coal.worth;
                        userData.total += coal.worth;
                        message.reply('You found Coal and got 10 points');
                        break;
                    }
                case "stone":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 5 && playerData.itemCount < 35){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 5 && playerData.itemCount == 35){
                            playerData.dailyQuest = true;
                        }
                        var val = coal.worth + (coal.worth * stonepick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "iron":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 5 && playerData.itemCount < 35){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 5 && playerData.itemCount == 35){
                            playerData.dailyQuest = true;
                        }
                        var val = coal.worth + (coal.worth * ironpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "diamond":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 5 && playerData.itemCount < 35){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 5 && playerData.itemCount == 35){
                            playerData.dailyQuest = true;
                        }
                        var val = coal.worth + (coal.worth * diamondpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                case "legendary":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 5 && playerData.itemCount < 35){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 5 && playerData.itemCount == 35){
                            playerData.dailyQuest = true;
                        }
                        var val = coal.worth + (coal.worth * legendarypick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found Coal and got '+val+' points');
                        break;
                    }
                default:
                    break;
            }
        } else if (roll > 50 && roll < 56) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 3 && playerData.itemCount < 5){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 3 && playerData.itemCount == 5){
                            playerData.dailyQuest = true;
                        }
                        userData.points += diamond.worth;
                        userData.total += diamond.worth;
                        message.reply('You found DIAMOND and got 100 points PogChamp');
                        break;
                    }
                case "stone":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 3 && playerData.itemCount < 5){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 3 && playerData.itemCount == 5){
                            playerData.dailyQuest = true;
                        }
                        var val = diamond.worth + (diamond.worth * stonepick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "iron":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 3 && playerData.itemCount < 5){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 3 && playerData.itemCount == 5){
                            playerData.dailyQuest = true;
                        }
                        var val = diamond.worth + (diamond.worth * ironpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "diamond":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 3 && playerData.itemCount < 5){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 3 && playerData.itemCount == 5){
                            playerData.dailyQuest = true;
                        }
                        var val = diamond.worth + (diamond.worth * diamondpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                case "legendary":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 3 && playerData.itemCount < 5){
                            playerData.itemCount++;
                        }
                        if(playerData.questid == 3 && playerData.itemCount == 5){
                            playerData.dailyQuest = true;
                        }
                        var val = diamond.worth + (diamond.worth * legendarypick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('You found DIAMOND and got '+val+' points PogChamp');
                        break;
                    }
                default:
                    break;
            }
            

        } else if (roll > 55 && roll < 59) {
            switch (userData.pickaxe) {
                case "wood":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 2){
                            playerData.dailyQuest = true;
                        }
                        userData.points += emerald.worth;
                        userData.total += emerald.worth;
                        message.reply('YOU FOUND !@#$ING EMERALDS 500 to score');
                        break;
                    }
                case "stone":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 2){
                            playerData.dailyQuest = true;
                        }
                        var val = emerald.worth + (emerald.worth * stonepick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "iron":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 2){
                            playerData.dailyQuest = true;
                        }
                        var val = emerald.worth + (emerald.worth * ironpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "diamond":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 2){
                            playerData.dailyQuest = true;
                        }
                        var val = emerald.worth + (emerald.worth * diamondpick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                case "legendary":
                    {
                        let playerData = players[message.author.id];
                        if(playerData.questid == 2){
                            playerData.dailyQuest = true;
                        }
                        var val = emerald.worth + (emerald.worth * legendarypick.value);
                        userData.points += val;
                        userData.total += val;
                        message.reply('YOU FOUND !@#$ING EMERALDS '+val+' to score');
                        break;
                    }
                default:
                    break;
                    
            }
        } else if (roll > 59 && roll < 61) {
            let playerData = players[message.author.id];
            if(playerData.questid == 6){
                playerData.dailyQuest = true;
            }
            userData.points += brandonsHair.worth;
            message.reply('You found a lock of brandons hair.. gross... -100 points..');
        } else {
            let playerData = players[message.author.id];
            if(playerData.questid == 1 && playerData.itemCount < 50){
                playerData.itemCount++;
            }
            if(playerData.questid == 1 && playerData.itemCount == 50){
                playerData.dailyQuest = true;
            }
            userData.points += stone.worth;
            userData.total += stone.worth;
            message.reply('You found Cobblestone.. Meh 5 points');
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
