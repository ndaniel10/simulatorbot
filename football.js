const Discord = require ('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db') 
const FootballDataAPI = require('footballdata-api-js');
const api = FootballDataAPI.getAPIWrapper('d5d5f53792854553ad109e2dc06e4f4c');

module.exports = {
sim: (message, bot) => { 
if (message.content.includes("@here") || message.content.includes("@everyone")) return;
var server = bot.guilds.get('657170979793141770');
if (message.channel.type == "dm") return;  
if (!message.guild.member('620191623095255070')) return;
var owner = server.roles.get('688344378481442828').members.map(m=>m.user.tag)
if (message.guild.member(owner.id)) return
  let prefix = "?"; 
  /*
if (message.content.toLowerCase().startsWith("?betcheck")){
    if (!owner.includes(message.author.tag)) return;
    var predict = message.content.toUpperCase().substring(message.content.indexOf(" ") +1, message.content.length)
    console.log(predict)
    var data = db.startsWith('prediction_')
      for (var x = 0; x < data.length; x++){
        for (var num = 0; num < data[x].data.length; num++){
          var c = data[x].data.charAt(num);
          var d = predict.charAt(num)
          db.add(`point2_${data[x].ID}`, 0)
          if (c == d) db.add(`point2_${data[x].ID}`, 1)
          db.add(`fornow_${data[x].ID}`, 0)
          if (c == d) db.add(`fornow_${data[x].ID}`, 1)
        } 
        var pt = db.fetch(`fornow_${data[x].ID}`) 
        var xp = db.fetch(`point2_${data[x].ID}`) 
        var user = bot.users.get(data[x].ID.split('_').pop())
        user.send("You predicted **" + pt + "** games this week, which puts you at **" + xp + "** total points. Go predict for the next matchday now you silly boy :D")
        console.log(user.tag + ": predicted " + pt + " games this week, which puts you at " + (xp || 0) + " total points.")
        db.delete(`prediction_${(data[x].ID).split('_').pop()}`)
        db.delete(`fornow_${data[x].ID}`)
      }  
} 
*/
if (message.content.toLowerCase().startsWith("?futbol")){
  
}

if (message.content.toLowerCase().startsWith("?info")){
  (async () => { 
    let namez = message.content.toLowerCase().substring(message.content.indexOf(" ") +1, message.content.length);
    //la liga
    if (namez.includes("barcelona") || namez.includes("barca")){
      var logo = "https://i.imgur.com/Sm56tDX.png"
      var teamID = "81"
      var color = "0x04068a"
      var kit = "https://i.imgur.com/ZrNZVIz.png"
    }
    else if (namez.includes("real madrid")){
      var logo = "https://i.imgur.com/g3CIjFl.png" 
      var teamID = "86"
      var color = "0xf8f4f4"
      var kit = "https://i.imgur.com/TLsBEEr.png"
    }
    else if (namez.includes("atleti")){
      var logo = "https://i.imgur.com/KqYTj8O.png" 
      var teamID = "78"
      var color = "0xf74d38"
      var kit = "https://i.imgur.com/NyEpO4v.png"
    }
    else if (namez.includes("sevilla")){
      var logo = "https://i.imgur.com/8wjL4m7.png" 
      var teamID = "559"
      var color = "0xf7b3a4"
      var kit = "https://i.imgur.com/RefGbwh.png"
    }
    else if (namez.includes("valencia")){
      var logo = "https://i.imgur.com/pO3ijEz.png" 
      var teamID = "95"
      var color = "0x817e7d"
      var kit = "https://i.imgur.com/hxy9uVY.png"
    }
    else if (namez.includes("sociedad")){
      var logo = "https://i.imgur.com/RxLtWmf.png" 
      var teamID = "92"
      var color = "0x6795c5"
      var kit = "https://i.imgur.com/G8zkjEN.png"
    }
    //prem
    else if (namez.includes("arsenal")){
      var logo = "https://i.imgur.com/VdzGPdg.png"
      var teamID = "57"
      var color = "0xff0000"
      var kit = "https://i.imgur.com/EWWwnlk.png"
    }
    else if (namez.includes("united")){
      var logo = "https://i.imgur.com/OvtK6H9.png"
      var teamID = "66"
      var color = "0xa70808"
      var kit = "https://i.imgur.com/QubqYt3.png"
    }
    else if (namez.includes("chelsea")){
      var logo = "https://i.imgur.com/zM4KVUF.png"
      var teamID = "61"
      var color = "0x3033ff"
      var kit = "https://i.imgur.com/ugzgfMm.png"
    }
    else if (namez.includes("city")){
      var logo = "https://i.imgur.com/1I8FNQ7.png"
      var teamID = "65"
      var color = "0x00e7ff"
      var kit = "https://i.imgur.com/hSTUKFJ.png"
    }
    else if (namez.includes("liverpool")){
      var logo = "https://i.imgur.com/lXkyxBx.png"
      var teamID = "64"
      var color = "0xdb331c"
      var kit = "https://i.imgur.com/RHU58C3.png"
    }
    else if (namez.includes("spurs")){
      var logo = "https://i.imgur.com/AKw2ALp.png"
      var teamID = "73"
      var color = "0xf5f5f5"
      var kit = "https://i.imgur.com/ByzTYnI.png"
    } 
    //bundesliga
    else if (namez.includes("bayern")){
      var logo = "https://i.imgur.com/GtkPn4K.png"
      var teamID = "5"
      var color = "0xb32e2e"
      var kit = "https://i.imgur.com/oOjhAt6.png"
    }
    else if (namez.includes("dortmund")){
      var logo = "https://i.imgur.com/FFPfrIv.png"
      var teamID = "4"
      var color = "0xffe600"
      var kit = "https://i.imgur.com/hQriDqU.png"
    }
    //serie A
    else if (namez.includes("juventus")){
      var logo = "https://i.imgur.com/Rk2NhGb.png"
      var teamID = "109"
      var color = "0x111110"
      var kit = "https://i.imgur.com/O1A3ROs.png"
    }
    else if (namez.includes("napoli")){
      var logo = "https://i.imgur.com/j8mJC7X.png"
      var teamID = "113"
      var color = "0x1675b8"
      var kit = "https://i.imgur.com/kOIYerA.png"
    }
    else if (namez.includes("inter")){
      var logo = "https://i.imgur.com/XC8HZcm.png"
      var teamID = "108"
      var color = "0x2c2c2e"
      var kit = "https://i.imgur.com/h1w9shh.png"
    }
    //PSG
    else if (namez.includes("psg")){
      var logo = "https://i.imgur.com/31zKGfS.png"
      var teamID = "524"
      var color = "0x0f0f49"
      var kit = "https://i.imgur.com/FfoczlS.png"
    }
    else{
    var ree4 = new Discord.RichEmbed()
      .setTitle("Invalid Input")
      .setColor("0xda0f0f")
      .setDescription("That team is not in the database. If you wish to have it in the bot's database then contact the owner")
      return message.channel.send(ree4)
    }
  var dua = ''
  var compteam = await api.getCompetitions()
            .catch(function (error) {
                dua = 'error' 
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
  const matches = await api.getTeamMatches(teamID, {status: "SCHEDULED"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
    var game1 = ""
    for (var i = 0; i < matches.matches.length; i++) {
      if (matches.matches[i].awayTeam.id == teamID) var game1 = game1 + "✈️`" + matches.matches[i].awayTeam.name.replace(" FC", "").replace("FC ", "")  + "` vs `" + matches.matches[i].homeTeam.name.replace(" FC", "").replace("FC ", "")  + "`\n"
      else var game1 = game1 + "🏠`" + matches.matches[i].homeTeam.name.replace(" FC", "").replace("FC ", "")  + "` vs `" + matches.matches[i].awayTeam.name.replace(" FC", "").replace("FC ", "") + "`\n"
      if (i == 4) i = 9903
    }
    game1 = game1.replace("Real Betis Balompié", "Real Betis")   
    var matchz = new Discord.RichEmbed() 
      .setTitle("Next 5 games")
      .setThumbnail(logo)
      .setColor(color)
      .setDescription(("" + (game1|| "No Games")))
      .setImage(kit)
    
    message.channel.send(matchz)
  })();  
}  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
if (message.content.toLowerCase().startsWith("?matches")){
  (async () => { 
  console.log('hi')
    let league = message.content.toLowerCase().substring(message.content.indexOf(" ") +1, message.content.length);
    if (league.includes("epl")||league.includes("pl")||league.includes("premier league")||league.includes("prem")){
      var comp = "PL"
      var authorpfp = "https://i.imgur.com/RocmutV.jpg"
      var color = "0x8f2cd6"
    }
    else if (league.includes("la liga")||league.includes("laliga")||league.includes("spain")||league.includes("primera division")){
      var comp = "PD"
      var authorpfp = "https://i.imgur.com/L12pT5k.png"
      var color = "0x1651ce"
    }
    else if (league.includes("serie a")||league.includes("seriea")||league.includes("italy")||league.includes("italy")){
      var comp = "SA"
      var authorpfp = "https://i.imgur.com/ziUXbNP.png"
      var color = "0x22ce16"
    }
    else if (league.includes("ligue 1")||league.includes("ligue1")||league.includes("france")||league.includes("uber eats")){
      var comp = "FL1" 
      var authorpfp = "https://i.imgur.com/uGbEAAt.gif"
      var color = "0xc7ce16"
    }
    /*
    else if (league.includes("ucl")||league.includes("cl")||league.includes("champions league")){
      var comp = "CL" 
      var authorpfp = "https://i.imgur.com/cNvDSks.png?1"
      var color = "#799bbb"
    }
    */
    else if (league.includes("bundesliga")||league.includes("german")||league.includes("germany")||league.includes("bundesliga")){
      var comp = "BL1"
      var authorpfp = "https://i.imgur.com/GmqrVlA.png?1"
      var color = "0xce3416"
    }else{ 
    var ree4 = new Discord.RichEmbed()
      .setTitle("Invalid Input") 
      .setColor("0xda0f0f")
      .setDescription("**Options:** EPL, La Liga, Bundesliga, Serie A, Ligue 1")
      return message.channel.send(ree4) 
    }
    var dua = ''
    const mdnum = await api.getCompetitionStandings(comp, {standingType: 'TOTAL'})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
    var current = mdnum.season.currentMatchday
    var compname = mdnum.competition.name
    var firstDay = new Date()
    var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
    var date1 = firstDay.getFullYear() + '-' + ('0' + (firstDay.getMonth()+1)).slice(-2) + '-' + ('0' + firstDay.getDate()).slice(-2)
    var date2 = nextWeek.getFullYear() + '-' + ('0' + (nextWeek.getMonth()+1)).slice(-2) + '-' + ('0' + nextWeek.getDate()).slice(-2)
    const matches2 = await api.getCompetitionMatches(comp, {dateFrom: date1,dateTo: date2})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
    const matches = await api.getCompetitionMatches(comp, {matchday: current})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
  const ayy = bot.emojis.find(emoji => emoji.name === "ezgif");
  const post = bot.emojis.find(emoji => emoji.name === "no");
    var matchz = new Discord.RichEmbed()   
      .setTitle("La Liga Fixtures")
      .addField("Dates",matches.matches.map(m=>m.utcDate.slice(0, 10), true))
      .addField("Matches",matches.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name + " " + m.status.replace("IN_PLAY", ayy).replace("FINISHED", "").replace("LIVE", ayy).replace("PAUSED", ayy).replace("SCHEDULED", "").replace("POSTPONED", post) ).join("\n").toString(), true)
    
    var field1 = matchz.fields[0].value
    var desc = matchz.fields[1].value.replace(/null/g, '') 
    desc = desc.replace("Wolverhampton Wanderers FC", 'Wolves')
    var newmatch = new Discord.RichEmbed() 
      .setAuthor(compname + " - Matchday " + matches.matches[0].matchday, authorpfp)
      .setColor(color)
      .addField("Dates", "`" + field1 + "`", true)
      .addField("Matches", desc, true)
    message.channel.send(newmatch)
     
  })(); 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
if (message.content.toLowerCase().startsWith("?live")){ 
  (async () => { 
    var dua = ''
        const CLlive = await api.getCompetitionMatches("CL", {status: "LIVE"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
        const LIGAlive = await api.getCompetitionMatches("PD", {status: "LIVE"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
        const PLlive = await api.getCompetitionMatches("PL", {status: "LIVE"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
        const BUNDESlive = await api.getCompetitionMatches("BL1", {status: "LIVE"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
        const SERIElive = await api.getCompetitionMatches("SA", {status: "LIVE"})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
        var score1 = (CLlive.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name.replace(/null/g, '')).join("\n"))
        var score2 = (LIGAlive.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name.replace(/null/g, '')).join("\n"))
        var score3 = (PLlive.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name.replace(/null/g, '')).join("\n"))
        var score4 = (BUNDESlive.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name.replace(/null/g, '')).join("\n"))
        var score5 = (SERIElive.matches.map(m=>m.homeTeam.name + " `" + m.score.fullTime.homeTeam + " - " + m.score.fullTime.awayTeam  + "` " + m.awayTeam.name.replace(/null/g, '')).join("\n"))
        const ayy = bot.emojis.find(emoji => emoji.name === "ezgif");
        var livestuff = new Discord.RichEmbed() 
          .setTitle("Live Scores " + ayy)
          .setColor("0xff00b4")
          .addField("Champions League 🇪🇺", (score1 || "No live matches")) 
          .addField("La Liga 🇪🇸", (score2 || "No live matches"))
          .addField("Premier League 🇬🇧", (score3 ||"No live matches" ))
          .addField("Bundesliga 🇩🇪", (score4 || "No live matches"))
          .addField("Serie A 🇮🇹", (score5 || "No live matches"))
        message.channel.send(livestuff)
  })();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
if (message.content.toLowerCase().startsWith("?standing")){
 
(async () => {
   var dua = ''
    let league = message.content.toLowerCase().substring(message.content.indexOf(" ") +1, message.content.length);
    if (league.includes("epl")||league.includes("pl")||league.includes("premier league")||league.includes("prem")){
      var comp = "PL"
      var authorpfp = "https://i.imgur.com/RocmutV.jpg"
      var color = "0x8f2cd6"
    }
    else if (league.includes("la liga")||league.includes("laliga")||league.includes("spain")||league.includes("primera division")){
      var comp = "PD"
      var authorpfp = "https://i.imgur.com/L12pT5k.png"
      var color = "0x1651ce"
    }
    else if (league.includes("serie a")||league.includes("seriea")||league.includes("italy")||league.includes("italy")){
      var comp = "SA"
      var authorpfp = "https://i.imgur.com/ziUXbNP.png"
      var color = "0x22ce16"
    }
    else if (league.includes("ligue 1")||league.includes("ligue1")||league.includes("france")||league.includes("uber eats")){
      var comp = "FL1"
      var authorpfp = "https://i.imgur.com/uGbEAAt.gif"
      var color = "0xc7ce16"
    }
    else if (league.includes("bundesliga")||league.includes("german")||league.includes("germany")||league.includes("bundesliga")){
      var comp = "BL1"
      var authorpfp = "https://i.imgur.com/GmqrVlA.png?1"
      var color = "0xce3416"
    }else{
    var ree4 = new Discord.RichEmbed()
      .setTitle("Invalid Input")
      .setColor("0xda0f0f")
      .setDescription("**Options:** EPL, La Liga, Bundesliga, Serie A, Ligue 1")
      return message.channel.send(ree4)
    }
    const standings = await api.getCompetitionStandings(comp, {standingType: 'TOTAL'})
            .catch(function (error) {
                dua = 'error'
                return message.channel.send(error.response.data.message) 
            })
        if (dua == 'error') return
    var lastup = standings.competition.lastUpdated 
    var compname = standings.competition.name
    var current = standings.season.currentMatchday
    
    
   var team1W = (standings.standings[0].table[0].won).toString().padEnd(3, ' ');    
   var team1D = (standings.standings[0].table[0].draw).toString().padEnd(3, ' ');    
   var team1L = (standings.standings[0].table[0].lost).toString().padEnd(3, ' ');    
   var team1GD = (standings.standings[0].table[0].goalDifference).toString().padEnd(4, ' '); 
   var team1pts = (standings.standings[0].table[0].points).toString().padEnd(3, ' ');
   var team1 = (standings.standings[0].table[0].team.name).toString().toUpperCase().replace(/\d+/g, '').padEnd(31, ' ');
    
   var team2W = (standings.standings[0].table[1].won).toString().padEnd(3, ' ');    
   var team2D = (standings.standings[0].table[1].draw).toString().padEnd(3, ' ');    
   var team2L = (standings.standings[0].table[1].lost).toString().padEnd(3, ' ');    
   var team2GD = (standings.standings[0].table[1].goalDifference).toString().padEnd(4, ' '); 
   var team2pts = (standings.standings[0].table[1].points).toString().padEnd(3, ' ');
   var team2 = (standings.standings[0].table[1].team.name).toString().toUpperCase().replace(/\d+/g, '').padEnd(31, ' ');
    
   var team3W = (standings.standings[0].table[2].won).toString().padEnd(3, ' ');    
   var team3D = (standings.standings[0].table[2].draw).toString().padEnd(3, ' ');    
   var team3L = (standings.standings[0].table[2].lost).toString().padEnd(3, ' ');    
   var team3GD = (standings.standings[0].table[2].goalDifference).toString().padEnd(4, ' '); 
   var team3pts = (standings.standings[0].table[2].points).toString().padEnd(3, ' ');
   var team3 = (standings.standings[0].table[2].team.name).toString().toUpperCase().replace(/\d+/g, '').padEnd(31, ' ');
    
   var team4W = (standings.standings[0].table[3].won).toString().padEnd(3, ' ');    
   var team4D = (standings.standings[0].table[3].draw).toString().padEnd(3, ' ');    
   var team4L = (standings.standings[0].table[3].lost).toString().padEnd(3, ' ');    
   var team4GD = (standings.standings[0].table[3].goalDifference).toString().padEnd(4, ' '); 
   var team4pts = (standings.standings[0].table[3].points).toString().padEnd(3, ' ');
   var team4 = (standings.standings[0].table[3].team.name).toString().toUpperCase().padEnd(31, ' ');
    
   var team5W = (standings.standings[0].table[4].won).toString().padEnd(3, ' ');    
   var team5D = (standings.standings[0].table[4].draw).toString().padEnd(3, ' ');    
   var team5L = (standings.standings[0].table[4].lost).toString().padEnd(3, ' ');    
   var team5GD = (standings.standings[0].table[4].goalDifference).toString().padEnd(4, ' '); 
   var team5pts = (standings.standings[0].table[4].points).toString().padEnd(3, ' ');
   var team5 = (standings.standings[0].table[4].team.name).toString().toUpperCase().padEnd(31, ' ');
    
   var team6W = (standings.standings[0].table[5].won).toString().padEnd(3, ' ');    
   var team6D = (standings.standings[0].table[5].draw).toString().padEnd(3, ' ');    
   var team6L = (standings.standings[0].table[5].lost).toString().padEnd(3, ' ');    
   var team6GD = (standings.standings[0].table[5].goalDifference).toString().padEnd(4, ' '); 
   var team6pts = (standings.standings[0].table[5].points).toString().padEnd(3, ' ');
   var team6 = (standings.standings[0].table[5].team.name).toString().toUpperCase().padEnd(31, ' ');
    
   var team7W = (standings.standings[0].table[6].won).toString().padEnd(3, ' ');    
   var team7D = (standings.standings[0].table[6].draw).toString().padEnd(3, ' ');    
   var team7L = (standings.standings[0].table[6].lost).toString().padEnd(3, ' ');    
   var team7GD = (standings.standings[0].table[6].goalDifference).toString().padEnd(4, ' '); 
   var team7pts = (standings.standings[0].table[6].points).toString().padEnd(3, ' ');
   var team7 = (standings.standings[0].table[6].team.name).toString().toUpperCase().padEnd(31, ' ');
    
   var team8W = (standings.standings[0].table[7].won).toString().padEnd(3, ' ');    
   var team8D = (standings.standings[0].table[7].draw).toString().padEnd(3, ' ');    
   var team8L = (standings.standings[0].table[7].lost).toString().padEnd(3, ' ');    
   var team8GD = (standings.standings[0].table[7].goalDifference).toString().padEnd(4, ' '); 
   var team8pts = (standings.standings[0].table[7].points).toString().padEnd(3, ' ');
   var team8 = (standings.standings[0].table[7].team.name).toString().toUpperCase().padEnd(31, ' ');
  
   var team9W = (standings.standings[0].table[8].won).toString().padEnd(3, ' ');    
   var team9D = (standings.standings[0].table[8].draw).toString().padEnd(3, ' ');    
   var team9L = (standings.standings[0].table[8].lost).toString().padEnd(3, ' ');    
   var team9GD = (standings.standings[0].table[8].goalDifference).toString().padEnd(4, ' '); 
   var team9pts = (standings.standings[0].table[8].points).toString().padEnd(3, ' ');
   var team9 = (standings.standings[0].table[8].team.name).toString().toUpperCase().padEnd(31, ' ');
    
   var team10W = (standings.standings[0].table[9].won).toString().padEnd(3, ' ');    
   var team10D = (standings.standings[0].table[9].draw).toString().padEnd(3, ' ');    
   var team10L = (standings.standings[0].table[9].lost).toString().padEnd(3, ' ');    
   var team10GD = (standings.standings[0].table[9].goalDifference).toString().padEnd(4, ' '); 
   var team10pts = (standings.standings[0].table[9].points).toString().padEnd(3, ' ');
   var team10 = (standings.standings[0].table[9].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team11W = (standings.standings[0].table[10].won).toString().padEnd(3, ' ');    
   var team11D = (standings.standings[0].table[10].draw).toString().padEnd(3, ' ');    
   var team11L = (standings.standings[0].table[10].lost).toString().padEnd(3, ' ');    
   var team11GD = (standings.standings[0].table[10].goalDifference).toString().padEnd(4, ' '); 
   var team11pts = (standings.standings[0].table[10].points).toString().padEnd(3, ' ');
   var team11 = (standings.standings[0].table[10].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team12W = (standings.standings[0].table[11].won).toString().padEnd(3, ' ');    
   var team12D = (standings.standings[0].table[11].draw).toString().padEnd(3, ' ');    
   var team12L = (standings.standings[0].table[11].lost).toString().padEnd(3, ' ');    
   var team12GD = (standings.standings[0].table[11].goalDifference).toString().padEnd(4, ' '); 
   var team12pts = (standings.standings[0].table[11].points).toString().padEnd(3, ' ');
   var team12 = (standings.standings[0].table[11].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team13W = (standings.standings[0].table[12].won).toString().padEnd(3, ' ');    
   var team13D = (standings.standings[0].table[12].draw).toString().padEnd(3, ' ');    
   var team13L = (standings.standings[0].table[12].lost).toString().padEnd(3, ' ');    
   var team13GD = (standings.standings[0].table[12].goalDifference).toString().padEnd(4, ' '); 
   var team13pts = (standings.standings[0].table[12].points).toString().padEnd(3, ' ');
   var team13 = (standings.standings[0].table[12].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team14W = (standings.standings[0].table[13].won).toString().padEnd(3, ' ');    
   var team14D = (standings.standings[0].table[13].draw).toString().padEnd(3, ' ');    
   var team14L = (standings.standings[0].table[13].lost).toString().padEnd(3, ' ');    
   var team14GD = (standings.standings[0].table[13].goalDifference).toString().padEnd(4, ' '); 
   var team14pts = (standings.standings[0].table[13].points).toString().padEnd(3, ' ');
   var team14 = (standings.standings[0].table[13].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team15W = (standings.standings[0].table[14].won).toString().padEnd(3, ' ');    
   var team15D = (standings.standings[0].table[14].draw).toString().padEnd(3, ' ');    
   var team15L = (standings.standings[0].table[14].lost).toString().padEnd(3, ' ');    
   var team15GD = (standings.standings[0].table[14].goalDifference).toString().padEnd(4, ' '); 
   var team15pts = (standings.standings[0].table[14].points).toString().padEnd(3, ' ');
   var team15 = (standings.standings[0].table[14].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team16W = (standings.standings[0].table[15].won).toString().padEnd(3, ' ');    
   var team16D = (standings.standings[0].table[15].draw).toString().padEnd(3, ' ');    
   var team16L = (standings.standings[0].table[15].lost).toString().padEnd(3, ' ');    
   var team16GD = (standings.standings[0].table[15].goalDifference).toString().padEnd(4, ' '); 
   var team16pts = (standings.standings[0].table[15].points).toString().padEnd(3, ' ');
   var team16 = (standings.standings[0].table[15].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team17W = (standings.standings[0].table[16].won).toString().padEnd(3, ' ');    
   var team17D = (standings.standings[0].table[16].draw).toString().padEnd(3, ' ');    
   var team17L = (standings.standings[0].table[16].lost).toString().padEnd(3, ' ');    
   var team17GD = (standings.standings[0].table[16].goalDifference).toString().padEnd(4, ' '); 
   var team17pts = (standings.standings[0].table[16].points).toString().padEnd(3, ' ');
   var team17 = (standings.standings[0].table[16].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team18W = (standings.standings[0].table[17].won).toString().padEnd(3, ' ');    
   var team18D = (standings.standings[0].table[17].draw).toString().padEnd(3, ' ');    
   var team18L = (standings.standings[0].table[17].lost).toString().padEnd(3, ' ');    
   var team18GD = (standings.standings[0].table[17].goalDifference).toString().padEnd(4, ' '); 
   var team18pts = (standings.standings[0].table[17].points).toString().padEnd(3, ' ');
   var team18 = (standings.standings[0].table[17].team.name).toString().toUpperCase().padEnd(30, ' ');
   if (comp != "BL1"){ 
   var team19W = (standings.standings[0].table[18].won).toString().padEnd(3, ' ');    
   var team19D = (standings.standings[0].table[18].draw).toString().padEnd(3, ' ');    
   var team19L = (standings.standings[0].table[18].lost).toString().padEnd(3, ' ');    
   var team19GD = (standings.standings[0].table[18].goalDifference).toString().padEnd(4, ' '); 
   var team19pts = (standings.standings[0].table[18].points).toString().padEnd(3, ' ');
   var team19 = (standings.standings[0].table[18].team.name).toString().toUpperCase().padEnd(30, ' ');
    
   var team20W = (standings.standings[0].table[19].won).toString().padEnd(3, ' ');    
   var team20D = (standings.standings[0].table[19].draw).toString().padEnd(3, ' ');    
   var team20L = (standings.standings[0].table[19].lost).toString().padEnd(3, ' ');    
   var team20GD = (standings.standings[0].table[19].goalDifference).toString().padEnd(4, ' '); 
   var team20pts = (standings.standings[0].table[19].points).toString().padEnd(3, ' ');
   var team20 = (standings.standings[0].table[19].team.name).toString().toUpperCase().padEnd(30, ' ');
   }
    var something = 
    "+----------------------------------+---+---+---+----+\n"+
    "|                                  | W | D | L |Pts |\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|1. " + team1 +                 "|" + team1W +  "|" + team1D + "|" +  team1L + "| "  +  team1pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|2. " + team2 +                 "|" + team2W +  "|" + team2D + "|" +  team2L + "| "  +  team2pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|3. " + team3 +                 "|" + team3W +  "|" + team3D + "|" +  team3L + "| "  +  team3pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|4. " + team4 +                 "|" + team4W +  "|" + team4D + "|" +  team4L + "| "  +  team4pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|5. " + team5 +                 "|" + team5W +  "|" + team5D + "|" +  team5L + "| "  +  team5pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|6. " + team6 +                 "|" + team6W +  "|" + team6D + "|" +  team6L + "| "  +  team6pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|7. " + team7 +                 "|" + team7W +  "|" + team7D + "|" +  team7L + "| "  +  team7pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|8. " + team8 +                 "|" + team8W +  "|" + team8D + "|" +  team8L + "| "  +  team8pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|9. " + team9 +                 "|" + team9W +  "|" + team9D + "|" +  team9L + "| "  +  team9pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|10. " + team10 +                 "|" + team10W +  "|" + team10D + "|" +  team10L + "| "  +  team10pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"
    
    var something2 = 
    "+----------------------------------+---+---+---+----+\n"+
    "|                                  | W | D | L |Pts |\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|11. " + team11 +                 "|" + team11W +  "|" + team11D + "|" +  team11L + "| "  +  team11pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|12. " + team12 +                 "|" + team12W +  "|" + team12D + "|" +  team12L + "| "  +  team12pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|13. " + team13 +                 "|" + team13W +  "|" + team13D + "|" +  team13L + "| "  +  team13pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|14. " + team14 +                 "|" + team14W +  "|" + team14D + "|" +  team14L + "| "  +  team14pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|15. " + team15 +                 "|" + team15W +  "|" + team15D + "|" +  team15L + "| "  +  team15pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|16. " + team16 +                 "|" + team16W +  "|" + team16D + "|" +  team16L + "| "  +  team16pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|17. " + team17 +                 "|" + team17W +  "|" + team17D + "|" +  team17L + "| "  +  team17pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|18. " + team18 +                 "|" + team18W +  "|" + team18D + "|" +  team18L + "| "  +  team18pts + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|19. " + (team19 || '                              ') + "|" + (team19W || '   ') +  "|" + (team19D || '   ') + "|" +  (team19L || '   ') + "| "  +  (team19pts || '   ') + "|\n" +
    "+----------------------------------+---+---+---+----+\n"+
    "|20. " + (team20 || '                              ') + "|" + (team20W || '   ') +  "|" + (team20D || '   ') + "|" +  (team20L || '   ') + "| "  +  (team20pts || '   ') + "|\n" +
    "+----------------------------------+---+---+---+----+\n"      
    
    something = something.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    something2 = something2.normalize("NFD").replace(/[\u0300-\u036f]/g, "")    
    something = something.normalize("NFD").replace("'", "")
    something2 = something2.normalize("NFD").replace("'", " ")   
    something = something.normalize("NFD").replace("1901", "    ")
    something2 = something2.normalize("NFD").replace("1901", "    ")
    something = something.normalize("NFD").replace("2013", "    ")
    something2 = something2.normalize("NFD").replace("2013", "    ")
    something = something.normalize("NFD").replace("1909", "    ")
    something2 = something2.normalize("NFD").replace("1909", "    ")
    something = something.normalize("NFD").replace("1913", "    ")
    something2 = something2.normalize("NFD").replace("1913", "    ")
    something = something.normalize("NFD").replace(" 29             ", "                ")
    something2 = something2.normalize("NFD").replace(" 29             ", "                ")
    something = something.normalize("NFD").replace("09 DORTMUND        ", "DORTMUND           ")
    something2 = something2.normalize("NFD").replace("09 DORTMUND        ", "DORTMUND          ")
    something = something.normalize("NFD").replace("04 LEVERKUSEN            ", "LEVERKUSEN               ")
    something2 = something2.normalize("NFD").replace("04 LEVERKUSEN            ", "LEVERKUSEN               ")
    something = something.normalize("NFD").replace("1899 HOFFENHEIM            ", "HOFFENHEIM                 ")
    something2 = something2.normalize("NFD").replace("1899 HOFFENHEIM            ", "HOFFENHEIM                 ")
    something = something.normalize("NFD").replace(" 1. FC UNION BERLIN            ", "FC UNION BERLIN                ")
    something2 = something2.normalize("NFD").replace(" 1. FC UNION BERLIN            ", "FC UNION BERLIN                ")
    something = something.normalize("NFD").replace(" 1. FSV MAINZ 05               ", "FSV MAINZ                      ")
    something2 = something2.normalize("NFD").replace(" 1. FSV MAINZ 05               ", "FSV MAINZ                      ")
    something = something.normalize("NFD").replace("TSV FORTUNA 95 DUSSELDORF     ", "TSV FORTUNA DUSSELDORF        ")
    something2 = something2.normalize("NFD").replace("TSV FORTUNA 95 DUSSELDORF     ", "TSV FORTUNA DUSSELDORF        ")
    something = something.normalize("NFD").replace("1. FC KOLN                    ", "FC KOLN                       ")
    something2 = something2.normalize("NFD").replace("1. FC KOLN                    ", "FC KOLN                       ")
    something = something.normalize("NFD").replace("SC PADERBORN 07               ", "SC PADERBORN                  ")
    something2 = something2.normalize("NFD").replace("SC PADERBORN 07               ", "SC PADERBORN                  ")
  
  
    var ree = new Discord.RichEmbed()
      .setAuthor(compname + " - Matchday " + current, authorpfp)
      .setColor(color)
      .setDescription("```ml\n" + something + "```")
      .setFooter("Last updated: " + lastup)
    
    var ree2 = new Discord.RichEmbed()
      .setAuthor(compname + " - Matchday " + current, authorpfp)
      .setTitle(compname)
      .setColor(color)
      .setDescription("```ml\n" + something2 + "```")
      .setFooter("Last updated: " + lastup)
 
    message.channel.send(ree);

})();  
 
}

}
}
