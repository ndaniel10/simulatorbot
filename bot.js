const Discord = require('discord.js');
const bot = new Discord.Client ();
const { Client, Attachment } = require('discord.js');
//messages


bot.on('message', (message) =>{
    if(message.content.startsWith(':a')) {
        message.channel.send('Shut up you`re gay')
    
        message.delete(message)
    } 
    
});

bot.on('message', (message) =>{
    if(message.content.startsWith(':f')) {
        message.channel.send('If I met you in real life I would give you a concussion')
    
        message.delete(message)
    } 
    
});

bot.on('message', (message) => {
    if(message.content.startsWith (':rank')) {
      message.reply('https://cdn.discordapp.com/attachments/489843725007192074/517043007690899485/unknown.png');
    }
  });
  
  bot.on('message', (message) =>{
    if (message.content === 'Sergio Ramos')  {
        const attachment = new Attachment('http://i37.tinypic.com/ok0pqd.jpg');
        message.channel.send(attachment);
    }
});
  
bot.on('message', (message) =>{
    if(message.content.startsWith(':help')) {
      message.reply('**To start the simulation you must state with the appropriate spacing or else it wont work properly. ** ```:AndresSim <emoji> <ClubName> <emoji> <ClubName> <Competition Name> <Stadium Name> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100> <Player1> <1-100> <Player2> <1-100> <Player3> <1-100>``` For an example type :example');
    }
});

bot.on('message', (message) =>{
    if(message.content.startsWith(':example')) {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/489843725007192074/514894613157511168/unknown.png');
        message.channel.send(attachment);
    }
});

//simulator
bot.on('message', (message) =>{
    if(message.content.startsWith(':AndresSim')) {
        var messagesplit = message.content.split(" ")
        var P1Goals = 0
        var P1GoalsOfficial = 0
        var P2GoalsOfficial = 0
        var P3GoalsOfficial = 0
        var P4GoalsOfficial = 0
        var P5GoalsOfficial = 0
        var P6GoalsOfficial = 0
        var P2Goals = 0
        var P3Goals = 0
        var P4Goals = 0
        var P5Goals = 0
        var P6Goals = 0
         var Time = 0
         var Player1Rate = 0
         var Player2Rate = 0
         var Player3Rate = 0
         var Player4Rate = 0
         var Player5Rate = 0
         var Player6Rate = 0
         var team1 = messagesplit[1] + " " + messagesplit[2]
         var team2 = messagesplit[3] + " " + messagesplit[4]
         var Player1 = messagesplit[9]
         var Player1Rate = messagesplit[10]
         var Player2 = messagesplit[11]
         var Player2Rate = messagesplit[12]
         var Player3 = messagesplit[13]
         var Player3Rate = messagesplit[14]
         var Player4 = messagesplit[15]
         var Player4Rate = messagesplit[16]
         var Player5 = messagesplit[17]
         var Player5Rate = messagesplit[18]
         var Player6 = messagesplit[19]
         var Player6Rate = messagesplit[20]
         var P1R = parseInt(Player1Rate, 10)  
         var P2R = parseInt(Player2Rate, 10)
         var P3R = parseInt(Player3Rate, 10)
         var P4R = parseInt(Player4Rate, 10)
         var P5R = parseInt(Player5Rate, 10)
         var P6R = parseInt(Player6Rate, 10)          
         var Team1Rate = P1R + P2R + P3R
         var Team2Rate = P4R + P5R + P6R
         var Ovr1Rate = Math.round((15-0.04*Team1Rate)*100)/100
         var Ovr2Rate = Math.round((15-0.04*Team2Rate)*100)/100
         var score1 = 0
         var score2 = 0
         var Iffe = 0
         var length = setInterval(function() {
             if (Time === 90) {
                var game = setInterval(function (){
                    if (score1 > score2)
                        message.channel.send("**FULL TIME:** **" + ":tada: " + team1 + " :tada: (" + score1 + " - " + score2 + ") :poop:" + team2 + " :poop:" + "** You fucking suck " + team2 + " LMAO! AHHA L :joy:")
                    if (score2 > score1)
                        message.channel.send("**FULL TIME:** **" + ":poop: " + team1 + " :poop: (" + score1 + " - " + score2 + ") :tada:" + team2 + " :tada:" + "** You fucking suck " + team1 + " LMAO! AHHA L :joy:")
                    if (score1 === score2)
                        message.channel.send("**FULL TIME:** **" + team1 + " (" + score1 + " - " + score2 + ") " + team2 + "** fucking trash draw, fuck you both teams die :middle_finger:")
                     clearInterval(game)
                    }, 2000);
                 clearInterval(length)
                 
             }
             var randomizer1 = Math.floor((Math.random() * Ovr1Rate) + 1);
            if (randomizer1 === 1) {
                 score1 = score1 + 1
                 poss = Math.floor((Math.random() * 99) + 1)
                 possession = String(Math.max(poss, 100-poss))+"% / "+String(Math.min(poss, 100-poss))+"%"
                 var randomizer55 = Math.floor((Math.random() * 3) + 1);
                 if (randomizer55 === 1) {
                 commentary = (":soccer: Goal! " + team1 + " and " + Player1 + " scored! " + score1 + "-" + score2 + ".")
                 P1Goals = P1Goals + 1
                 }
                 if (randomizer55 === 2) {
                 commentary = (":soccer: Goal! " + team1 + " and " + Player2 + " scored! " + score1 + "-" + score2 + ".")
                 P2Goals = P2Goals + 1
                 }
                 if (randomizer55 === 3) {
                 commentary = (":soccer: Goal! " + team1 + " and " + Player3 + " scored! " + score1 + "-" + score2 + ".")
                 P3Goals = P3Goals + 1
                 }
             }
             else {
                 Iffe = 1
                 poss = Math.floor((Math.random() * 99) + 1)
                 possession = String(poss)+"% / "+String(100-poss)+"%"
                 commentary = ("Very little happening at the moment, " + score1 + "-" + score2 + ".")
             }
             var randomizer6 = Math.floor((Math.random() * Ovr2Rate) + 1);
             if (randomizer6 === 1) {
                 score2 = score2 + 1
                 poss = Math.floor((Math.random() * 99) + 1)
                 possession = String(Math.min(poss, 100-poss))+"% / "+String(Math.max(poss, 100-poss))+"%"
                 var randomizer7 = Math.floor((Math.random() * 3) + 1);
                 if (randomizer7 === 1) {
                 P4Goals = P4Goals + 1
                 commentary = (":soccer: Goal! " + team2 + " and " + Player4 + " scored! " + score1 + "-" + score2 + ".")
                 }
                 if (randomizer7 === 2) {
                 P5Goals = P5Goals + 1
                 commentary = (":soccer: Goal! " + team2 + " and " + Player5 + " scored! " + score1 + "-" + score2 + ".")
                 }
                 if (randomizer7 === 3) {
                 P6Goals = P6Goals + 1
                 commentary = (":soccer: Goal! " + team2 + " and " + Player6 + " scored! " + score1 + "-" + score2 + ".")
                 }
             }
             if (Iffe != 1){
                 Iffe = 1
                 poss = Math.floor((Math.random() * 99) + 1)
                 possession = String(poss)+"% / "+String(100-poss)+"%"
                 commentary = ("Very little happening at the moment, " + score1 + "-" + score2 + ".")
             }
             P1GoalsOfficial = Array(P1Goals+1).join(" :soccer:")
             P2GoalsOfficial = Array(P2Goals+1).join(" :soccer:")
             P3GoalsOfficial = Array(P3Goals+1).join(" :soccer:")
             P4GoalsOfficial = Array(P4Goals+1).join(" :soccer:")
             P5GoalsOfficial = Array(P5Goals+1).join(" :soccer:")
             P6GoalsOfficial = Array(P6Goals+1).join(" :soccer:")
             msging = message.channel.send({embed: {
                 color: 0x7289DA,
                 title: ":trophy: Competition",
                 description: messagesplit[5] + " " + messagesplit[6],
                 thumbnail: {
                     url: "https://cdn.discordapp.com/attachments/481477499428012042/514461468062646302/unknown.png"
                 },
                 fields: [{
                     name: ":stadium: Stadium",
                     value: messagesplit[7] + " " + messagesplit[8],
                 },
                 {
                     name: ":clock1: Time",
                     value: Time, 
                 },
                 {
                     name: team1,
                     value: " "+score1,
                     inline: true
                 },
                 {
                     name: team2,
                     value : " "+score2,
                     inline: true
                 },
                 {
                     name: "Possession",
                     value: possession
                 },
                 {
                     name: ":microphone2: Commentary",
                     value: commentary
                 },
                 {
                     name: "Home",
                     value: Player1 + " - " + Player1Rate + P1GoalsOfficial + "\n" + Player2 + " - " + Player2Rate + P2GoalsOfficial + "\n" + Player3 + " - " + Player3Rate + P3GoalsOfficial,
                     inline: true
                 },
                 {
                     name: "Away",
                     value: Player4 + " - " + Player4Rate + P4GoalsOfficial + "\n" + Player5 + " - " + Player5Rate + P5GoalsOfficial + "\n" + Player6 + " - " + Player6Rate + P6GoalsOfficial,
                     inline: true
                 },
                 {
                     name: "Home Team Rating",
                     value: Ovr1Rate + " - " + Team1Rate,
                     inline: true
                 },
                 {
                   name: "Away Team Rating",
                     value: Ovr2Rate + " - " + Team2Rate,
                     inline: true
                 }
                 ]
             }})
             Time = Time + 10
             message.delete(msging)
         }, 3000);
        }
    
    
    
 
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
