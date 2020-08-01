const Discord = require ('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db') 
const fs = require('fs');const talkedRecently = new Set();
function shuffle(a) {var j, x, i;for (i = a.length - 1; i > 0; i--) {j = Math.floor(Math.random() * (i + 1));x = a[i];a[i] = a[j];a[j] = x;}return a; }  

 

module.exports = {
sim: (message, bot) => {   
  var server = bot.guilds.get('657170979793141770');
  var owner = server.roles.get('688344378481442828').members.map(m=>m.user.tag)
  if (message.webhookID) return;
  let myRole = message.guild.roles.find(role => role.name ===  "FIFA™ Sim Managers");
  if (myRole == null) return
  if(message.member.roles.has(myRole.id)){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if (message.content.toLowerCase().startsWith("?squad")){
    if (!(message.channel.id == '609843600511074362' || message.channel.id == '596098380212469820')) return;
    if (message.mentions.users.first()) var user = message.mentions.users.first()
    else var user = message.member
    user = message.guild.members.get(user.id)
    const embed = new Discord.RichEmbed().setColor("#40E0D0").setTitle('💰' + db.fetch(`team${user.id}`) + ' || €' + db.fetch(`money${user.id}`) + 'm 💰').setThumbnail(db.fetch(`logo${user.id}`)).addField('Attackers', (db.fetch(`attacker${user.id}`)||"none")).addField('Midfielders', (db.fetch(`midfielder${user.id}`)||"none")).addField('Defenders', (db.fetch(`defender${user.id}`)||"none")).addField('Goalkeepers', (db.fetch(`goalkeeper${user.id}`)||"none")).setFooter('Manager: ' + user.user.username)
    message.channel.send(embed)  
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith("?transfer")){
  if ((owner.includes(message.author.tag) || message.author.id === '664540765145530378')){
  var args = message.content.split(' ').slice(0);
  var user1 = args[1]
  var user2 = args[2]
  var player = args[3]
  var lineup1 = [];var lineup2 =[];var collector = new Discord.MessageCollector(message.channel,m => m.author.id === message.author.id); 
  lineup1.push(db.fetch(`attacker${user1}`));lineup1.push(db.fetch(`midfielder${user1}`));lineup1.push(db.fetch(`defender${user1}`));lineup1.push(db.fetch(`goalkeeper${user1}`))
  lineup2.push(db.fetch(`attacker${user2}`));lineup2.push(db.fetch(`midfielder${user2}`));lineup2.push(db.fetch(`defender${user2}`));lineup2.push(db.fetch(`goalkeeper${user2}`))
  for (var i = 0; i < lineup1.length; i++) {
    if (lineup1[i].toLowerCase().includes(player.toLowerCase())){
      var cook = lineup1[i].split(" • ")
      for (var o = 0; o < cook.length; o++) {
        if (cook[o].toLowerCase().includes(player.toLowerCase())){var num = i;var chosen = cook[o];i = 99;o = 99
        message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setTitle("Type 'yes' to transfer it").setDescription("Is `" + chosen + "` the player you want to transfer?"))
        collector.on("collect", message => { 
          if (message.content.toLowerCase() !== "yes") return collector.stop()
            if (num == 0) { db.set(`attacker${user1}`, lineup1[num].replace( " • " + chosen, "").replace(cook[o] + " • ", "").replace(chosen, ""));db.set(`attacker${user2}`, lineup2[num] + " • " + chosen) }
            if (num == 1) { db.set(`midfielder${user1}`, lineup1[num].replace( " • " + chosen, "").replace(cook[o] + " • ", "").replace(chosen, ""));db.set(`midfielder${user2}`, lineup2[num] + " • " + chosen) }
            if (num == 2) { db.set(`defender${user1}`, lineup1[num].replace( " • " + chosen, "").replace(cook[o] + " • ", "").replace(chosen, ""));db.set(`defender${user2}`, lineup2[num] + " • " + chosen) }
            if (num == 3) { db.set(`goalkeeper${user1}`, lineup1[num].replace( " • " + chosen, "").replace(cook[o] + " • ", "").replace(chosen, ""));db.set(`goalkeeper${user2}`, lineup2[num] + " • " + chosen) }
          collector.stop();message.channel.send('ok')
        });
      }}
    } 
    else if (lineup2[i].toLowerCase().includes(player.toLowerCase())){
      var cook = lineup2[i].split(" • ")
      for (var o = 0; o < cook.length; o++) {
        if (cook[o].toLowerCase().includes(player.toLowerCase())){var num = i;var chosen = cook[o];i = 99;o = 99
        message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setTitle("Type 'yes' to transfer it").setDescription("Is `" + chosen + "` the player you want to transfer?"))
        collector.on("collect", message => { 
          if (message.content.toLowerCase() !== "yes") return collector.stop()
            if (num == 0) { db.set(`attacker${user2}`, lineup2[num].replace( " • " + chosen, "").replace(chosen + " • ", "").replace(chosen, ""));db.set(`attacker${user1}`, lineup1[num] + " • " + chosen) }
            if (num == 1) { db.set(`midfielder${user2}`, lineup2[num].replace( " • " + chosen, "").replace(chosen + " • ", "").replace(chosen, ""));db.set(`midfielder${user1}`, lineup1[num] + " • " + chosen) }
            if (num == 2) { db.set(`defender${user2}`, lineup2[num].replace( " • " + chosen, "").replace(chosen + " • ", "").replace(chosen, ""));db.set(`defender${user1}`, lineup1[num] + " • " + chosen) }
            if (num == 3) { db.set(`goalkeeper${user2}`, lineup2[num].replace( " • " + chosen, "").replace(chosen + " • ", "").replace(chosen, ""));db.set(`goalkeeper${user1}`, lineup1[num] + " • " + chosen) }
          collector.stop();message.channel.send('ok')
        });
      }}
    }
  }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith("?tactic")){
    if (message.mentions.users.first()) var person = message.mentions.users.first()
    else var person = message.author
    const filter = (reaction, user) => {return ['⬇️', '⬆️', '⬅️', '➡️'].includes(reaction.emoji.name) && user.id == person.id;};
    message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```")).then(msg => {
    var collector2 = msg.createReactionCollector(filter)
    var count = 1;var offcount = 0;var offarray = ["Balanced", "Possession", "Long Ball", "Fast Build Up"];var defcount = 0;var defarray = ["Balanced", "Drop Back", "Pressure on Heavy Touch", "Press After Possession Loss", "Constant Pressure"]
    msg.react("⬆️").then(() => msg.react("⬇️")).then(() => msg.react("⬅️")).then(() => msg.react('➡️'))
      collector2.on('collect', (reaction, reactionCollector) => { 
        reaction.remove(person.id)
        if (reaction.emoji.name == "⬆️") count = count - 1
        if (reaction.emoji.name == "⬇️") count = count + 1
        if (count == 0) count = 1;if (count == 9) count = 8;
        if (count == 1){
            if (reaction.emoji.name == "⬅️") defcount = defcount - 1
            if (reaction.emoji.name == "➡️") defcount = defcount + 1
            if (defcount <= -1) defcount = 4;if (defcount >= 5) defcount = 0;
            db.set(`def1${person.id}`, defarray[defcount])
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 2){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`def2${person.id}`)||"█ ").length <= 2) return;db.set(`def2${person.id}`, (db.fetch(`def2${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`def2${person.id}`)||"█ ").length >= 19) return;db.set(`def2${person.id}`, (db.fetch(`def2${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n< " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + " >\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 3){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`def3${person.id}`)||"█ ").length <= 2) return;db.set(`def3${person.id}`, (db.fetch(`def3${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`def3${person.id}`)||"█ ").length >= 19) return;db.set(`def3${person.id}`, (db.fetch(`def3${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n< Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ " >\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 4){
            if (reaction.emoji.name == "⬅️") offcount = offcount - 1
            if (reaction.emoji.name == "➡️") offcount = offcount + 1
            if (offcount <= -1) offcount = 3;if (offcount >= 4) offcount = 0;
            db.set(`off1${person.id}`, offarray[offcount])
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 5){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`off2${person.id}`)||"█ ").length <= 2) return;db.set(`off2${person.id}`, (db.fetch(`off2${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`off2${person.id}`)||"█ ").length >= 19) return;db.set(`off2${person.id}`, (db.fetch(`off2${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "< Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ " >\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 6){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`off3${person.id}`)||"█ ").length <= 2) return;db.set(`off3${person.id}`, (db.fetch(`off3${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`off3${person.id}`)||"█ ").length >= 19) return;db.set(`off3${person.id}`, (db.fetch(`off3${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n< PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ " >\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 7){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`off4${person.id}`)||"█ ").length <= 2) return;db.set(`off4${person.id}`, (db.fetch(`off4${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`off4${person.id}`)||"█ ").length >= 9) return;db.set(`off4${person.id}`, (db.fetch(`off4${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n< Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + " >\n> FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + "```"))
        }
        if (count == 8){
            if (reaction.emoji.name == "⬅️"){if ((db.fetch(`off5${person.id}`)||"█ ").length <= 2) return;db.set(`off5${person.id}`, (db.fetch(`off5${person.id}`)||"█ ").slice(0, -2))}
            if (reaction.emoji.name == "➡️"){if ((db.fetch(`off5${person.id}`)||"█ ").length >= 9) return;db.set(`off5${person.id}`, (db.fetch(`off5${person.id}`)||"█ ") + "█ ")}
            msg.edit(new Discord.RichEmbed().setColor("#40E0D0").setTitle(person.username + "'s Tactics").setDescription("```md\n> " + "[Defensive style]("+(db.fetch(`def1${person.id}`)||"Balanced")+")\n> " + " Width: "+(db.fetch(`def2${person.id}`)||"█ ") + "\n> Depth: " + (db.fetch(`def3${person.id}`)||"█ ")+ "\n> [Offensive Style]("+(db.fetch(`off1${person.id}`)||"Balanced")+")\n" + "> Width: "+(db.fetch(`off2${person.id}`)||"█ ")+ "\n> PlayersIntheBox: "+(db.fetch(`off3${person.id}`)||"█ ")+ "\n> Corners: "+(db.fetch(`off4${person.id}`)||"█ ") + "\n< FreeKicks: "+(db.fetch(`off5${person.id}`)||"█ ") + " >```"))
        }
      })
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith("?eleven")){
    if (!(message.channel.id === '609843600511074362') && !(message.author.id == '612631056847208453')) return;
    var eleven = message.content.substring(message.content.indexOf(" ") +1, message.content.length);
    db.set(`eleven${message.author.id}`, eleven)
    const eleven1 = db.fetch(`eleven${message.author.id}`)
    message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setTitle(message.author.username + "'s lineup and instructions").setDescription("```css\n" + (eleven1||"None") + "```")) 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith("?lineup")){
    if (!(message.channel.id === '609843600511074362') && !(message.author.id == '612631056847208453')) return;
    if (message.mentions.users.first()) var user = message.mentions.users.first()
    else var user = message.author
    const eleven1 = db.fetch(`eleven${user.id}`)
    message.channel.send(new Discord.RichEmbed().setColor("#40E0D0").setTitle(user.username + "'s lineup and instructions").setDescription("```css\n" + (eleven1||"None") + "```")) 
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith("?set")){
  if ((owner.includes(message.author.tag) || message.author.id === '664540765145530378')){
    var user = message.guild.member(message.mentions.users.first())
    let myRole = message.guild.roles.find(role => role.name ===  "FIFA™ Sim Managers"); 
    if (!user) return
    if(!user.roles.has(myRole.id)) return message.reply('This user is not in the Sim League');
    var args = message.content.split(' ').slice(1);
    var position = args[1]
    console.log(position)
      if (position === 'attack'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`attacker${user.id}`, player)
    }
      if (position === 'midfield'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`midfielder${user.id}`, player)
    }
      if (position === 'defence'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`defender${user.id}`, player)
    }
      if (position === 'goalkeeper'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`goalkeeper${user.id}`, player)
    }
        if (position === 'logo'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`logo${user.id}`, player)
    }
        if (position === 'name'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log(player)
          message.channel.send('♦ Changed the ' + position + ' to **<<' + player + '>>**')
          db.set(`team${user.id}`, player)
    }
          if (position === 'budget'){
          let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length).split(" ");
          player.splice(0,2)
          player = player.join(" ")
          console.log("player: " + player)
          message.channel.send('♦ **€' + player + 'm** to the ' + position)
          db.set(`money${user.id}`, player)
    }
  }
}
  }
  
}}