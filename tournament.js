const Discord = require ('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db') 
const talkedRecently = new Set();
function shuffle(a) {var j, x, i;for (i = a.length - 1; i > 0; i--) {j = Math.floor(Math.random() * (i + 1));x = a[i];a[i] = a[j];a[j] = x;}return a; }  
 

module.exports = {
sim: (message, bot) => {  
  var server = bot.guilds.get('657170979793141770');
  var owner = server.roles.get('688344378481442828').members.map(m=>m.user.tag)
  if (message.channel.id == '588408908234620959'){
    if (message.author.bot) return
    db.add(`msgting${message.guild.id}`, 1)   
    var msgting = db.fetch(`msgting${message.guild.id}`)
    if (msgting == 200){ 
      db.add(`msgting${message.guild.id}`, -200)  
      var rando = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      if (rando == 1){
        var ting = "";var rol = message.guild.roles.filter(r => r.name.startsWith("[FW]")).map(role => ting = ting + role.name.substring(5) + "\n")
        ting = ting.split("\n");ting.pop()
        var attackers = ting
        var attacker = attackers[Math.floor(Math.random() * attackers.length)];
        var attackerIMG = db.fetch(`FW` + attacker.toLowerCase().replace(/\s/g, ''))
        var attack = new Discord.RichEmbed().setColor('0x3b8ecf').setDescription('Type "grab" to collect this player ⭐').setTitle(attacker.toUpperCase()).setImage(attackerIMG)  .setFooter("Once grabbed, the player will be shown under your roles")
        message.channel.send(attack)
        .then((mess)=> {	
          var collector = new Discord.MessageCollector(message.channel, m => m.author != message.author.bot, { time: 15000 });
          collector.on('collect', message => {
	        if (message.content.toLowerCase() == 'grab'){
                var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
                if (rol.length >= 18) return message.author.send("You have reached maximum amount of players (18). Release some by typing `?release [player name]`")
                var chosen = message.guild.roles.find(role => role.name === "[FW] " + attacker);
                if(message.member.roles.find(r => r.name === chosen.name)) return message.author.send("You already own this player")
                message.member.addRole(chosen)
                message.channel.send("<a:3VQL:667112728309268493> " + message.author + " has grabbed **" + attacker + "** <a:3VQL:667112728309268493>")
                collector.stop() 
            }   
        });collector.on('end', collected => { mess.delete()});});}
      //midfielders
      if (rando == 2){
        var ting = "";var rol = message.guild.roles.filter(r => r.name.startsWith("[MF]")).map(role => ting = ting + role.name.substring(5) + "\n")
        ting = ting.split("\n");ting.pop()
        var midfielders = ting
        var midfielder = midfielders[Math.floor(Math.random() * midfielders.length)];
        var midfielderIMG = db.fetch(`MF` + midfielder.toLowerCase().replace(/\s/g, ''))
        var midfield = new Discord.RichEmbed().setColor('0xff4400').setDescription('Type "grab" to collect this player ⭐').setTitle(midfielder.toUpperCase()).setImage(midfielderIMG).setFooter("Once grabbed, the player will be shown under your roles")
        message.channel.send(midfield)
        .then((mess)=> { 
          var collector = new Discord.MessageCollector(message.channel, m => m.author != message.author.bot, { time: 15000 });
        collector.on('collect', message => {
            var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
	        if (message.content.toLowerCase() == 'grab'){
                var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
                if (rol.length >= 18) return message.author.send("You have reached maximum amount of players (18). Release some by typing `?release [player name]`")
                var chosen = message.guild.roles.find(role => role.name === "[MF] " + midfielder);
                if(message.member.roles.find(r => r.name === chosen.name)) return message.author.send("You already own this player")
                message.member.addRole(chosen)
                message.channel.send("<a:3VQL:667112728309268493> " + message.author + " has grabbed **" + midfielder + "** <a:3VQL:667112728309268493>")
                collector.stop()
           }
        });collector.on('end', collected => {mess.delete()});});}
      //defenders
      if (rando == 3){
        var ting = "";var rol = message.guild.roles.filter(r => r.name.startsWith("[DF]")).map(role => ting = ting + role.name.substring(5) + "\n")
        ting = ting.split("\n");ting.pop()
        var defenders = ting
        var defender = defenders[Math.floor(Math.random() * defenders.length)];
        var defenderIMG = db.fetch(`DF` + defender.toLowerCase().replace(/\s/g, ''))
        var defence = new Discord.RichEmbed().setColor('0xff4400').setTitle(defender.toUpperCase()).setImage(defenderIMG).setDescription('Type "grab" to collect this player ⭐').setFooter("Once grabbed, the player will be shown under your roles")
        message.channel.send(defence) 
        .then((mess)=> {
          var collector = new Discord.MessageCollector(message.channel, m => m.author != message.author.bot, { time: 15000 });
        collector.on('collect', message => {
	        if (message.content.toLowerCase() == 'grab'){
                var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
                if (rol.length >= 18) return message.author.send("You have reached maximum amount of players (18). Release some by typing `?release [player name]`")
                var chosen = message.guild.roles.find(role => role.name === "[DF] " + defender);
                if(message.member.roles.find(r => r.name === chosen.name)) return message.author.send("You already own this player")
                message.member.addRole(chosen)
                message.channel.send("<a:3VQL:667112728309268493> " + message.author + " has grabbed **" + defender + "** <a:3VQL:667112728309268493>")
                collector.stop()
          }
        });collector.on('end', collected => {mess.delete()});});}
      //goalkeepers
      if (rando == 4){
        var ting = "";var rol = message.guild.roles.filter(r => r.name.startsWith("[GK]")).map(role => ting = ting + role.name.substring(5) + "\n")
        ting = ting.split("\n");ting.pop()
        var defenders = ting
        var defender = defenders[Math.floor(Math.random() * defenders.length)];
        var defenderIMG = db.fetch(`GK` + defender.toLowerCase().replace(/\s/g, ''))
        var defence = new Discord.RichEmbed().setColor('0xff4400').setTitle(defender.toUpperCase()).setDescription('Type "grab" to collect this player ⭐').setFooter("Once grabbed, the player will be shown under your roles").setImage(defenderIMG)
        message.channel.send(defence) 
        .then((mess)=> {
          var collector = new Discord.MessageCollector(message.channel, m => m.author != message.author.bot, { time: 15000 });
        collector.on('collect', message => {
	        if (message.content.toLowerCase() == 'grab'){
            var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
            if (rol.length >= 18) return message.author.send("You have reached maximum amount of players (18). Release some by typing `?release [player name]`")
            //if (rol.length > 0) return message.author.send("❌ You have a goalkeeper already. Remove on by typing `?release [player name]` in the chat ❌")
            var chosen = message.guild.roles.find(role => role.name === "[GK] " + defender);
            if(message.member.roles.find(r => r.name === chosen.name)) return message.author.send("You already own this player")
            message.member.addRole(chosen)
            message.channel.send("<a:3VQL:667112728309268493> " + message.author + " has grabbed **" + defender + "** <a:3VQL:667112728309268493>")
            collector.stop()
          }
        });collector.on('end', collected => {mess.delete()});});}}
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?count")) {
    if (!owner.includes(message.author.tag)) return;
    var msgting = db.fetch(`msgting588408907622383618`)
    message.channel.send(msgting)
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?insert")){
    if (!owner.includes(message.author.tag)) return;
    var args = message.content.split(' ').slice(1);
    var player = args[0]
    var url = args[1]
    console.log(player + "\n" + url)
    db.set(player, url)
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?release")){
  let m3s = message.content.toLowerCase().substring(message.content.indexOf(" ") +1, message.content.length);
  var nope = new Discord.RichEmbed().setColor('0xff4400') .setTitle("Invalid ❌").setDescription("You do not own that role").setFooter(message.author.tag)
  var findRole = message.guild.roles.find(role => role.name.toLowerCase() === "[fw] " + m3s);
  if (findRole == null) findRole = message.guild.roles.find(role => role.name.toLowerCase() === "[mf] " + m3s);
  if (findRole == null) findRole = message.guild.roles.find(role => role.name.toLowerCase() === "[df] " + m3s);
  if (findRole == null) findRole = message.guild.roles.find(role => role.name.toLowerCase() === "[gk] " + m3s);
  if (findRole == null) return message.channel.send(nope);
  if(message.member.roles.has(findRole.id)){
    message.react('✅')
    message.member.removeRole(findRole)
    var edit = findRole.name.substring(1, 3) + m3s.replace(/\s/g, '')
        var attackerIMG = db.fetch(edit)
        var attack = new Discord.RichEmbed().setColor('0xffff00').setDescription('Type "grab" to collect this player ⭐').setTitle(m3s.toUpperCase()).setImage(attackerIMG)  .setFooter("Once grabbed, the player will be shown under your roles")
        message.channel.send(attack)
        .then((mess)=> {	
          var collector = new Discord.MessageCollector(message.channel, m => m.author != message.author.bot, { time: 15000 });
          collector.on('collect', message => {
	        if (message.content.toLowerCase() == 'grab'){
                var rol = message.member.roles.filter(r => r.name.startsWith("[")).map(role => role)
                if (rol.length >= 18) return message.author.send("You have reached maximum amount of players (18). Release some by typing `?release [player name]`")
                var chosen = message.guild.roles.find(role => role.name === findRole.name);
                if(message.member.roles.find(r => r.name === chosen.name)) return message.author.send("You already own this player")
                message.member.addRole(chosen)
                message.channel.send("<a:3VQL:667112728309268493> " + message.author + " has grabbed **" + m3s + "** <a:3VQL:667112728309268493>")
                collector.stop() 
          }  
        });collector.on('end', collected => {mess.delete()});});
  }else return message.channel.send(nope)}  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?add")){
      if (!owner.includes(message.author.tag)) return;
      var args = message.content.split(' ').slice(1);
      var user = args[0]
      if (message.mentions.members.first()) user = message.mentions.members.first()
      else{if (user < 3) return;user = bot.users.get(user)}
      var points = args[1]
      if (!points) points = 1
      console.log(points)
      db.add(`serverpts_${user.id}`, points)
      message.channel.send('ok')
      bot.channels.get('705136593408884746').fetchMessage('705472000893648998').then(msg =>{
       var pts = db.startsWith(`serverpts_`, { sort: '.data'});var tin = '```css\n+---+------------------+---+\n|#RK|USER              [PTS]\n+---+------------------+---+\n';var count = 1
       pts.sort(function(x,y) { var n = x.data - y.data; if (n !== 0) {return n;}return x.data - y.data;});pts.reverse() 
       pts.filter(f=>bot.guilds.get('588408907622383618').member(f.ID.split('_').pop())).map(t => tin = tin + "|#" + (count++).toString().padEnd(2) + "|" + bot.users.get(t.ID.split('_').pop()).username.replace(/[^a-zA-Z 0-9]+/g,'').substring(0,18).padEnd(18) + "[" + t.data.toString().padEnd(3) + "]\n+---+------------------+---+\n") 
       tin = tin.split("\n").slice(0, 44).join("\n")
       msg.edit(new Discord.RichEmbed().setColor("#BA55D3").setAuthor("Football Lounge Leaderboard", "https://i.imgur.com/J6skZxo.png").setDescription(tin + "```"))
      })
    }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  function sim(team1, team2) {  
      var teamrate1 = parseInt(team1.replace(/\D/g,''));var teamrate2 = parseInt(team2.replace(/\D/g,''))
      var rate1 = teamrate1 + parseInt(11 - teamrate2);var rate2 = teamrate2 + parseInt(11 - teamrate1)
      var score1 = 0;var score2 = 0;var extra = "";var matches = "";var players = ""
      message.member.roles.filter(r => r.name.startsWith("[")).map(role => players = players + role.name.substring(5) + "\n")
      players = players.split("\n")
      var lineup1 = db.fetch(team1.replace(/[0-9]/g, ''))
      var lineup2 = db.fetch(team2.replace(/[0-9]/g, ''))
        for(var i=0; i < 18; i++){ 
          if (Math.floor((Math.random() * rate1) + 1) == 1){score1 = score1 + 1 ;if (lineup1.some(r=> players.indexOf(r) >= 0)){;var ting = Math.floor(Math.random() * 101);if (ting < 71) db.add(`scorers${message.author.id}_` + lineup1.slice(0,1).concat(lineup1.slice(0,3))[Math.floor(Math.random() * 4)],1);else if (ting < 91) db.add(`scorers${message.author.id}_` + lineup1.slice(3,6).concat(lineup1.slice(0,5))[Math.floor(Math.random() * 8)],1);else db.add(`scorers${message.author.id}_` + lineup1.slice(6,10)[Math.floor(Math.random() * 4)],1)
            var tong = Math.floor(Math.random() * 101);if (tong < 71)db.add(`assists${message.author.id}_` +lineup1.slice(0,6)[Math.floor(Math.random() * 6)],1);else if (tong < 81)db.add(`assists${message.author.id}_` +lineup1.slice(6,10)[Math.floor(Math.random() * 4)],1)}
          }
          if (Math.floor((Math.random() * rate2) + 1) == 1){ score2 = score2 + 1;if (lineup1.some(r=> players.indexOf(r) >= 0)){var ting = Math.floor(Math.random() * 101);if (ting < 71) db.add(`scorers${message.author.id}_` + lineup2.slice(0,1).concat(lineup2.slice(0,3))[Math.floor(Math.random() * 4)],1);else if (ting < 91) db.add(`scorers${message.author.id}_` + lineup2.slice(3,6).concat(lineup2.slice(0,5))[Math.floor(Math.random() * 8)],1);else db.add(`scorers${message.author.id}_` + lineup2.slice(6,10)[Math.floor(Math.random() * 4)],1)
            var tong = Math.floor(Math.random() * 101);if (tong < 71)db.add(`assists${message.author.id}_` +lineup2.slice(0,6)[Math.floor(Math.random() * 6)],1);else if (tong < 81)db.add(`assists${message.author.id}_` +lineup2.slice(6,10)[Math.floor(Math.random() * 4)],1)}
          }
        }
      var arr = db.fetch('europe')
      var defenders1 = lineup1.slice(6,11)
      if (score2 == 0) for (var i = 0; i < defenders1.length; i++) db.add(`cleansheet${message.author.id}_` + defenders1[i], 1)
      var defenders2 = lineup2.slice(6,11)
      if (score1 == 0) for (var i = 0; i < defenders2.length; i++) db.add(`cleansheet${message.author.id}_` + defenders2[i], 1)
      //
      if (score1 == score2){extra = " (aet)";var breaker = ["home","away"][Math.floor(Math.random() * 2)];if (breaker == "home")score1 = score1 + 1;else score2 = score2 + 1}
      if (score1 > score2){ var match = "**" + team1.replace(/[0-9]/g, '') + "** `" + score1 + " - " + score2 + "` " + team2.replace(/[0-9]/g, '') + extra;arr.splice(arr.indexOf(team2), 1);db.set('europe', arr)}
      if (score1 < score2){ var match = team1.replace(/[0-9]/g, '') + " `" + score1 + " - " + score2 + "` **" + team2.replace(/[0-9]/g, '') + "**" + extra;arr.splice(arr.indexOf(team1), 1);db.set('europe', arr)}
      matches = matches + match + "\n"
      db.set(`matches`, db.fetch('matches') + matches)
    }  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  if (message.channel.id == '705136581484478504'){
      if (owner.includes(message.author.tag) || message.author.id == '664540765145530378') return;
      bot.channels.get('657304312006967306').send(message.author + " - " + message.content)
      message.delete()
      message.channel.overwritePermissions(message.author,{ 'SEND_MESSAGES': false },)
    }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  if (message.channel.id == '705516239451062383' && !(message.author.id == bot.user.id)){
    if (message.content.toLowerCase().startsWith("?play")){if (message.member.roles.filter(r => r.name.startsWith("[")).size == 0) {message.delete();message.author.send("You do not have any players left. You need atleast one")}}else message.delete()
  } 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?play")) { 
      if (talkedRecently.has(bot.user.id) || !(message.channel.id == '705516239451062383')|| message.member.roles.filter(r => r.name.startsWith("[")).size == 0) return 
      talkedRecently.add(bot.user.id);message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
      db.set('matches', "");
      db.set('europaleague', shuffle(["Marseille7", "Porto8","Monaco7", "Monchengladbach7", "Wolfsburg7", "Bayer Leverkusen6", "Roma6","Lazio5", "Inter6", "Manchester United5", "Wolves7", "Arsenal6","Real Sociedad6", "Sevilla5", "Getafe6", "Ajax6"]))
      db.set('championsleague', shuffle(["PSG4", "Lyon7","Bayern4", "Dortmund5", "Leipzig6", "Napoli6", "Atalanta6","Juventus4", "Manchester City4", "Chelsea5", "Liverpool4", "Spurs6","Barcelona4", "Real Madrid4", "Atletico Madrid5","Valencia6"]))
      var fixtures1 = db.fetch('europaleague')
      var fixtures2 = db.fetch('championsleague') 
      db.set('europe', db.fetch('championsleague'))
       for (var i = 0; i <= fixtures2.length && db.fetch('europe').length > 1; i++) { 
           if (i == db.fetch('europe').length) i = 0  
           sim(db.fetch('europe')[i], db.fetch('europe')[i+1])  
       }
      db.set('europe', db.fetch('europaleague'))
       for (var i = 0; i <= fixtures1.length && db.fetch('europe').length > 1; i++) { 
           if (i == db.fetch('europe').length) i = 0  
           sim(db.fetch('europe')[i], db.fetch('europe')[i+1])  
       }
      var allgames = db.fetch('matches')
      var CL = new Discord.RichEmbed().setTitle("Champions League").setColor("#0E1E5B").addField("Round of 16", allgames.split("\n").slice(0,8).join("\n")).addField("Quarter Finals", allgames.split("\n").slice(8,12).join("\n")).addField("Semi Finals", allgames.split("\n").slice(12,14).join("\n")).addField("Final", allgames.split("\n").slice(14,15).join("\n") + "<:trophy:701612063318999092>");
      var EL = new Discord.RichEmbed().setTitle("Europa League").setColor("#F26803").addField("Round of 16", allgames.split("\n").slice(15,23).join("\n")).addField("Quarter Finals", allgames.split("\n").slice(23,27).join("\n")).addField("Semi Finals", allgames.split("\n").slice(27,29).join("\n")).addField("Final", allgames.split("\n").slice(29,30).join("\n") + "<:europa:678612397363167242>")
      var arr = []
      for (var i = 0; i < 16; i++) { 
        if (fixtures2[i].includes(allgames.split("\n")[14].split("**")[1])) arr.push(fixtures2[i])
        if (fixtures1[i].includes(allgames.split("\n")[29].split("**")[1])) arr.push(fixtures1[i])
      }
      const filter = (reaction, user) => {
        return ['CL','europa'].includes(reaction.emoji.name) && !(user.id == bot.user.id);
      };
      message.channel.send(EL).then(msg => {
      const collector = msg.createReactionCollector(filter);
      setTimeout(function(){msg.react('701579939950100550')}, 0);setTimeout(function(){msg.react('701579806449467424')}, 50);
      collector.on('collect', (reaction, reactionCollector) => {
        reaction.users.filter(f=>f.id !== bot.user.id).map(u=>reaction.remove(u.id))
        if (reaction.emoji.name == "CL") msg.edit(CL)
        if (reaction.emoji.name == "europa") msg.edit(EL)
      });
      }) 
      var em = "";var tin = "";var num = 0
      message.member.roles.filter(r => r.name.startsWith("[")).map(role => em = em + role.name.substring(5) + "\n");
      var tin = '```prolog\n+--------------+--+--+--+--+\n|   players    |⚽|🎯|✋|🏆|\n+--------------+--+--+--+--+\n'
      em = em.split("\n");em.pop()
      var allgames = db.fetch('matches')
      var combine = db.fetch(allgames.split("\n")[14].split("**")[1]).concat(db.fetch(allgames.split("\n")[29].split("**")[1]))
      for (var i = 0; i < combine.length; i++) db.add(`trophies${message.author.id}_` + combine[i], 1)
      em.map(t=>tin = tin + "|" + t.padEnd(14) + "|" + (db.fetch(`scorers${message.author.id + "_" + t}`)||"0").toString().padEnd(2) + "|" + (db.fetch(`assists${message.author.id + "_" + t}`)||"0").toString().padEnd(2) + "|" +(db.fetch(`cleansheet${message.author.id + "_" + t}`)|| "0").toString().padEnd(2) + "|" + (db.fetch(`trophies${message.author.id + "_" + t}`)|| "0").toString().padEnd(2) +"|\n")
      for (var i = 0; i < em.length; i++) var num = num + (db.fetch(`scorers${message.author.id}_` + em[i])||0) + (db.fetch(`assists${message.author.id}_` + em[i])||0) + (db.fetch(`cleansheet${message.author.id}_` + em[i])||0) + (db.fetch(`trophies${message.author.id}_` + em[i])||0)
      db.add(`serverpts_${message.author.id}`, num)
      message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setAuthor("Overview", message.author.avatarURL).addField("Your players stats", tin + "+--------------+--+--+--+--+\n               |  Total: " + num.toString().padEnd(2) + "|\n               +--+--+--+--+```").setFooter(message.author.username + " gained " + num + " points"))
      var scorers = db.startsWith(`scorers${message.author.id}_`).concat(db.startsWith(`assists${message.author.id}_`)).concat(db.startsWith(`cleansheet${message.author.id}_`)).concat(db.startsWith(`trophies${message.author.id}_`))
      for (var x = 0; x < scorers.length; x++) {
        var teamname = (scorers[x].ID).split('_').pop()
        db.delete(`scorers${message.author.id}_` + teamname)
        db.delete(`cleansheet${message.author.id}_` + teamname)
        db.delete(`assists${message.author.id}_`+ teamname)
        db.delete(`trophies${message.author.id}_`+ teamname)    
      }
     message.member.roles.filter(r => r.name.startsWith("[")).map(role => message.member.removeRole(role))
     talkedRecently.delete(bot.user.id);message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: null })
      bot.channels.get('705136593408884746').fetchMessage('705472000893648998').then(msg =>{
       var pts = db.startsWith(`serverpts_`, { sort: '.data'});var tin = '```css\n+---+------------------+---+\n|#RK|USER              [PTS]\n+---+------------------+---+\n';var count = 1
       pts.sort(function(x,y) { var n = x.data - y.data; if (n !== 0) {return n;}return x.data - y.data;});pts.reverse() 
       pts.filter(f=>bot.guilds.get('588408907622383618').member(f.ID.split('_').pop())).map(t => tin = tin + "|#" + (count++).toString().padEnd(2) + "|" + bot.users.get(t.ID.split('_').pop()).username.replace(/[^a-zA-Z 0-9]+/g,'').substring(0,18).padEnd(18) + "[" + t.data.toString().padEnd(3) + "]\n+---+------------------+---+\n") 
       tin = tin.split("\n").slice(0, 44).join("\n")
       msg.edit(new Discord.RichEmbed().setColor("#BA55D3").setAuthor("Football Lounge Leaderboard", "https://i.imgur.com/J6skZxo.png").setDescription(tin + "```"))
      })
    } 
}
}