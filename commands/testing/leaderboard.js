const Command = require('../../structures/Command');
const fs = require("fs");
let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
var bot;

module.exports = class leaderboardCommand extends Command {
    constructor(client) {
        bot = client;
        super(client, {
            name: 'leaderboard',
            aliases: ['scoreboard'],
            group: 'rpg',
            guildOnly: true,
            memberName: 'leaderboard',
            description: 'Shows Top 5 Players 8)'
        });
    }

    async run(message, args) {
        let points = JSON.parse(fs.readFileSync('rpg_files/points.json', 'utf8'));
        let userData = points[message.author.id];
        var sort_array = [];
        for (var i in points) {
            sort_array.push({
                id: i,
                total: points[i].total,
                level: points[i].level
            });
        }
        
        sort_array.sort(function(x,y){return y.total - x.total});
        //console.log(sort_array);
        var first,second,third,fourth,fifth;
        first = bot.users.get(sort_array[0].id);
        second = bot.users.get(sort_array[1].id);
        third = bot.users.get(sort_array[2].id);
        fourth = bot.users.get(sort_array[3].id);
        fifth = bot.users.get(sort_array[4].id);
        const embed = {
            "title": "Leader Board",
            "description": "Displays the top 5 Players",
            "color": 12797324,
            "thumbnail": {
              "url": "https://media.discordapp.net/attachments/332743615862538241/424787456013893637/myboi.jpg"
            },
            "author": {
              "name": "Randy 2.0",
              "icon_url": "https://media.discordapp.net/attachments/332743615862538241/424787415060971530/grill.png?width=300&height=300"
            },
            "fields": [
              {
                "name": first.username,
                "value": "Points: **"+sort_array[0].total+"** Level: **"+sort_array[0].level+"**"
              },
              {
                "name": second.username,
                "value": "Points: **"+sort_array[1].total+"** Level: **"+sort_array[1].level+"**"
              },
              {
                "name": third.username,
                "value": "Points: **"+sort_array[2].total+"** Level: **"+sort_array[2].level+"**"
              },
              {
                "name": fourth.username,
                "value": "Points: **"+sort_array[3].total+"** Level: **"+sort_array[3].level+"**"
              },
              {
                "name": fifth.username,
                "value": "Points: **"+sort_array[4].total+"** Level: **"+sort_array[4].level+"**"
              }
            ]
          };
        message.channel.send({ embed }).then(msg => {
            msg.delete(10000)
          })
    }



}
