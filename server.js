const Discord = require ('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db') 
const talkedRecently = new Set();
const {flag, code, name, countries} = require('country-emoji');
const worldCupHistory = require('world-cup-history');
var futbol = require('./football.js');
var tournament = require('./tournament.js');    
var fifa = require('./fifa.js'); 
var guess = require('./guesswho.js'); 
function shuffle(a) {var j, x, i;for (i = a.length - 1; i > 0; i--) {j = Math.floor(Math.random() * (i + 1));x = a[i];a[i] = a[j];a[j] = x;}return a; }  
  
var replaceall = require("replaceall");   
var randomHexColor = require('random-hex-color')
const talkedRecently2 = new Set();  
const ms = require ('parse-ms');    
const http = require('http');    
require('dotenv').config()    
const express = require('express');  
const app = express();

const mute = [
    "https://i.imgur.com/yPZvUgd.jpg", 
    "https://i.imgur.com/yPZvUgd.jpg",
      "https://i.imgur.com/V85cwrG.jpg",  
    "https://i.imgur.com/i9BX1C9.jpg",
      "https://i.imgur.com/xToKdDa.jpg",
      "https://i.imgur.com/zyzcYaU.jpg",
      "https://i.imgur.com/cpZAC0d.jpg",  
      "https://i.imgur.com/y5WSCu8.jpg",  
      "https://i.imgur.com/P6tlhLE.jpg",  
      "https://i.imgur.com/Eeiz3PQ.jpg",  
      "https://i.imgur.com/jKr0QvK.jpg",  
      "https://i.imgur.com/c8wHcR0.jpg",  
      "https://i.imgur.com/XaRWtn9.jpg",  
      "https://i.imgur.com/08VVxFt.jpg",   
      "https://i.imgur.com/Ulri3Lr.png",   
      "https://i.imgur.com/msvCf8q.png"

    ];
const mentionHook = new Discord.WebhookClient("613826412821872661", "l6Bpj19m1BQWOAuQerS79lUOZ3e264pjlpD0hoYsvc_Xk224ROd6Ghdc25FgI2kEqrt4");
bot.on("ready", (message) => {
setInterval(() => {
          const guild = bot.guilds.get("567760702782177290");

const pics = Math.floor(Math.random() * (mute.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
mentionHook.send('<@&588507978185965579>');

const attachment = new Attachment(mute[pics]);
mentionHook.send(attachment); 
         }, 15000); // Runs this every 10 seconds.
}); 

bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name); 
bot.channels.get('657191909533679617').send('@everyone FL has been invited to **' + guild.name + '**')

})
const activities_list = [
        "ManUtd 8-2 Arsenal",  
      "ManUtd 8-2 Arsenal", 
    "Chelsea 6-0 Arsenal", 
    "Chelsea 4-1 Arsenal",
    "Barca 4-1 Arsenal", 
    "Bayern 10-2 Arsenal",
     "Sanchez, Cesc, RVP, Nasri",

    ]; // creates an arraylist containing phrases you want your bot to switch through.
bot.on('ready', function() {
    bot.user.setUsername("Football Lounge Bot");
});

bot.on('ready', () => {
  console.log('We gucci') 
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});  

bot.on('guildMemberAdd', member => {
    member.send("**Welcome to Football Lounge! Best football server around, and only one without any major problems (raids, spams, hacks) **<:rly:657310989355581456>\n\nWe got customized bots that you should try. The <@665248193038254093> that simulates football games of your choice, the <@665243450706493450> where you can be a footballer and make yourself a super-star. And finally the <@665226991217147915> where you can play fifa game modes like playing against other people's squads, futdrafts and open special/normal packs.\n<#588448488950595668> to know more about this server."); 
});

bot.on('message', (message) =>{ 
   
if (message.channel.type == "dm") return;
if (!message.guild.member('620191623095255070')) return;
  var server = bot.guilds.get('657170979793141770');
  var owner = server.roles.get('688344378481442828').members.map(m=>m.user.tag)
  if (message.content.includes("@here") || message.content.includes("@everyone")) return;
////////////////////////////////////////////////////////////////////////-Tournament-////////////////////////////////////////////////////////////////
  tournament.sim(message, bot)
////////////////////////////////////////////////////////////////////////-Guess Who-////////////////////////////////////////////////////////////////    
  guess.sim(message, bot)
////////////////////////////////////////////////////////////////////////-FIFA-////////////////////////////////////////////////////////////////    
  fifa.sim(message, bot)
////////////////////////////////////////////////////////////////////////-FIFA-////////////////////////////////////////////////////////////////    
  futbol.sim(message, bot)
////////////////////////////////////////////////////////////////////////-prediction-////////////////////////////////////////////////////////////////    
  if (message.content.toLowerCase().startsWith("?psay")){
    let cont = message.content.substring(message.content.indexOf(" ") +1, message.content.length);
    const attachments = new Attachment('https://www.thesportsmirror.com/wp-content/uploads/2018/11/Athletico-Madrid-Vs-Athletico-Bilbao-La-Liga.png');
    bot.channels.get("720210486242574346").send(cont, attachments)
  }
////////////////////////////////////////////////////////////////////////-H2h-////////////////////////////////////////////////////////////////    
  if (message.content.toLowerCase().startsWith("?h2h")){
  if (talkedRecently.has(bot.user.id)) return message.react('❌')
  talkedRecently.add(bot.user.id);
  var rando = Math.floor(Math.random() * Math.floor(8))
  if (rando == 0){
    var arr1 = ["Oblak (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/200389.png?v=22", "Ter Stegen (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/192448.png?v=22", "De Gea (Man Utd)_https://cdn.futbin.com/content/fifa20/img/players/193080.png?v=22", "Alisson (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/212831.png?v=22", "Ederson (Man City)_https://cdn.futbin.com/content/fifa20/img/players/210257.png?v=22", "Neuer (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/167495.png?v=22", "Lloris (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/167948.png?v=22", "Courtois (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/192119.png?v=22", "Handanovic (Inter)_https://cdn.futbin.com/content/fifa20/img/players/162835.png?v=22", "Navas (PSG)_https://cdn.futbin.com/content/fifa20/img/players/193041.png?v=22", "Szczesny (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/186153.png?v=22", "Donnarumma (Milan)_https://cdn.futbin.com/content/fifa20/img/players/230621.png?v=22", "Lopes (Lyon)_https://cdn.futbin.com/content/fifa20/img/players/199482.png?v=22", "Gulacsi (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/185122.png?v=22", "Burki (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/189117.png?v=22", "Neto (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/194404.png?v=22", "Onana (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/226753.png?v=22", "Kepa (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/206585.png?v=22", "Sommer (Borussia Monch.)_https://cdn.futbin.com/content/fifa20/img/players/177683.png?v=22", "Buffon (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/1179.png?v=22", "Schmeichel (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/163587.png?v=22", "Trapp (Frankfurt)_https://cdn.futbin.com/content/fifa20/img/players/188943.png?v=22", "Patricio (Wolves)_https://cdn.futbin.com/content/fifa20/img/players/178005.png?v=22", "Leno (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/192563.png?v=22", "Pickford (Everton)_https://cdn.futbin.com/content/fifa20/img/players/204935.png?v=22", "Cillessen (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/199987.png?v=22", "Fabianski (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/164835.png?v=22", "Areola (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/193105.png?v=22", "Vaclik (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/204120.png?v=22", "Romero (Man United)_https://cdn.futbin.com/content/fifa20/img/players/173373.png?v=22", "Simon (Athletic)_https://cdn.futbin.com/content/fifa20/img/players/230869.png?v=22", "Strakosha (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/212151.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]
  }
  if (rando == 1){
  var arr1 = ["Van Dijk (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/203376.png?v=22", "Chiellini (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/138956.png?v=22", "Ramos (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/155862.png?v=22", "Koulibaly (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/201024.png?v=22", "Pique (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/152729.png?v=22", "Godin (Inter)_https://cdn.futbin.com/content/fifa20/img/players/182493.png?v=22", "Laporte (Man City)_https://cdn.futbin.com/content/fifa20/img/players/212218.png?v=22", "Hummels (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/178603.png?v=22", "Vertonghen (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/172871.png?v=22", "Alderweireld (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/184087.png?v=22", "Silva (PSG)_https://cdn.futbin.com/content/fifa20/img/players/164240.png?v=22", "Bonucci (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/184344.png?v=22", "Umtiti (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/205600.png?v=22", "Marquinhos (PSG)_https://cdn.futbin.com/content/fifa20/img/players/207865.png?v=22", "Skriniar (Inter)_https://cdn.futbin.com/content/fifa20/img/players/232363.png?v=22", "Sule (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/212190.png?v=22", "Varane (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/201535.png?v=22", "Manolas (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/192774.png?v=22", "Gimenez (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/216460.png?v=22", "De Ligt (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/235243.png?v=22", "Lenglet (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/220440.png?v=22", "Sokratis (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/172879.png?v=22", "Felipe (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/207863.png?v=22", "Lucas (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/220814.png?v=22", "Boateng (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/183907.png?v=22", "De Vrij (Inter)_https://cdn.futbin.com/content/fifa20/img/players/198176.png?v=22", "Sanchez (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/220793.png?v=22", "Stones (Man City)_https://cdn.futbin.com/content/fifa20/img/players/203574.png?v=22", "Luiz (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/179944.png?v=22", "Garay (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/170481.png?v=22", "Bartra (Betis)_https://cdn.futbin.com/content/fifa20/img/players/198141.png?v=22", "Otamendi (Man City)_https://cdn.futbin.com/content/fifa20/img/players/192366.png?v=22", "Romagnoli (Milan)_https://cdn.futbin.com/content/fifa20/img/players/210413.png?v=22", "Tah (Bayer)_https://cdn.futbin.com/content/fifa20/img/players/213331.png?v=22", "Djene (Getafe)_https://cdn.futbin.com/content/fifa20/img/players/217940.png?v=22", "Akanji (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/229237.png?v=22", "Savic (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/204639.png?v=22", "Rudiger (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/205452.png?v=22", "Matip (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/197061.png?v=22", "Kimpembe (PSG)_https://cdn.futbin.com/content/fifa20/img/players/225850.png?v=22", "Gabriel (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/201305.png?v=22", "Rugani (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/211320.png?v=22", "Militao (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/240130.png?v=22", "Lindelof (Man United)_https://cdn.futbin.com/content/fifa20/img/players/221660.png?v=22", "Lovren (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/195086.png?v=22", "Christensen (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/213661.png?v=22", "Naldo (Monaco)_https://cdn.futbin.com/content/fifa20/img/players/171919.png?v=22", "Zouma (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/204311.png?v=22", "Keane (Everton)_https://cdn.futbin.com/content/fifa20/img/players/207599.png?v=22", "Ake (Bournemouth)_https://cdn.futbin.com/content/fifa20/img/players/208920.png?v=22", "Gomez (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/225100.png?v=22", "Bailly (Man United)_https://cdn.futbin.com/content/fifa20/img/players/225508.png?v=22", "Dias (Benfica)_https://cdn.futbin.com/content/fifa20/img/players/239818.png?v=22", "Evans (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/169588.png?v=22", "Carlos (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/219693.png?v=22", "Denayer (Lyon)_https://cdn.futbin.com/content/fifa20/img/players/220182.png?v=22", "Konate (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/237678.png?v=22", "Zagadou (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/238476.png?v=22", "Soyuncu (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/232119.png?v=22", "Lascelles (Newcastle)_https://cdn.futbin.com/content/fifa20/img/players/203487.png?v=22", "Rojo (Man United)_https://cdn.futbin.com/content/fifa20/img/players/201862.png?v=22", "Upamecano (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/229558.png?v=22", "Demiral (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/238160.png?v=22", "Tomori (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/232756.png?v=22", "Saliba (Etienne)_https://cdn.futbin.com/content/fifa20/img/players/243715.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]
  }
  if (rando == 2){
  var arr1 = ["Kimmich (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/212622.png?v=22", "Carvajal (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/204963.png?v=22", "Cancelo (Man City)_https://cdn.futbin.com/content/fifa20/img/players/210514.png?v=22", "Walker (Man City)_https://cdn.futbin.com/content/fifa20/img/players/188377.png?v=22", "Azpilicueta (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/184432.png?v=22", "Trent (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/231281.png?v=22", "Roberto (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/199564.png?v=22", "Meunier (PSG)_https://cdn.futbin.com/content/fifa20/img/players/202371.png?v=22", "Pereira (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/210243.png?v=22", "Semedo (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/227928.png?v=22", "Piszczek (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/173771.png?v=22", "Florenzi (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/203551.png?v=22", "Bellerin (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/203747.png?v=22", "Vrsalko (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/203890.png?v=22", "Hysaj (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/210864.png?v=22", "Odriozola (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/234035.png?v=22", "Aurier (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/197853.png?v=22", "Bissaka (Man Utd)_https://cdn.futbin.com/content/fifa20/img/players/229880.png?v=22", "Klostermann (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/222331.png?v=22", "Hakimi (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/235212.png?v=22", "Trippier (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/186345.png?v=22", "Mazraoui (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/236401.png?v=22", "Sidibe (Everton)_https://cdn.futbin.com/content/fifa20/img/players/201042.png?v=22", "Young (Inter)_https://cdn.futbin.com/content/fifa20/img/players/152908.png?v=22", "Atal (Nice)_https://cdn.futbin.com/content/fifa20/img/players/240754.png?v=22", "Cedric (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/201118.png?v=22", "Niles (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/225782.png?v=22", "Dalot (Man United)_https://cdn.futbin.com/content/fifa20/img/players/234574.png?v=22", "Navas (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/146536.png?v=22", "Hateboer (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/220093.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]  
  }
  if (rando == 3){
  var arr1 = ["Alba (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/189332.png?v=22", "Sandro (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/191043.png?v=22", "Alaba (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/197445.png?v=22", "Robertson (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/216267.png?v=22", "Marcelo (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/176676.png?v=22", "Telles (Porto)_https://cdn.futbin.com/content/fifa20/img/players/212462.png?v=22", "Grimaldo (Benfica)_https://cdn.futbin.com/content/fifa20/img/players/210035.png?v=22", "Digne (Everton)_https://cdn.futbin.com/content/fifa20/img/players/200458.png?v=22", "Kolarov (Roma)_https://cdn.futbin.com/content/fifa20/img/players/185103.png?v=22", "Tagliafico (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/211256.png?v=22", "Alonso (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/192638.png?v=22", "Gaya (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/211688.png?v=22", "Shaw (Man United)_https://cdn.futbin.com/content/fifa20/img/players/205988.png?v=22", "Mendy (Man City)_https://cdn.futbin.com/content/fifa20/img/players/204884.png?v=22", "Rose (Newcastle)_https://cdn.futbin.com/content/fifa20/img/players/169595.png?v=22", "Ghoulam (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/201454.png?v=22", "Rodriguez (PSV)_https://cdn.futbin.com/content/fifa20/img/players/193352.png?v=22", "Mendy (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/228618.png?v=22", "Halstenberg (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/210665.png?v=22", "Monreal (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/177604.png?v=22", "Kolasinac (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/207993.png?v=22", "Angelino (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/220651.png?v=22", "Chilwell (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/229984.png?v=22", "Jonny (Wolves)_https://cdn.futbin.com/content/fifa20/img/players/210455.png?v=22", "Yuri (Athletic)_https://cdn.futbin.com/content/fifa20/img/players/183512.png?v=22", "Firpo (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/241184.png?v=22", "Emerson (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/210736.png?v=22", "Lodi (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/251573.png?v=22", "Tierney (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/226491.png?v=22", "Davies (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/234396.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]    
  }
  if (rando == 4){
  var arr1 = ["Modric (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/177003.png?v=22", "Busquets (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/189511.png?v=22", "Kante (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/215914.png?v=22", "Fernandinho (Man City)_https://cdn.futbin.com/content/fifa20/img/players/135507.png?v=22", "Casemiro (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/200145.png?v=22", "Rakitic (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/168651.png?v=22", "Verratti (PSG)_https://cdn.futbin.com/content/fifa20/img/players/199556.png?v=22", "Parejo (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/189513.png?v=22", "Matuidi (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/170890.png?v=22", "Witsel (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/177413.png?v=22", "Fabinho (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/209499.png?v=22", "Allan (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/199914.png?v=22", "Rodri (Man City)_https://cdn.futbin.com/content/fifa20/img/players/231866.png?v=22", "Savic (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/223848.png?v=22", "De Jong (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/228702.png?v=22", "Leiva (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/176266.png?v=22", "Gundogan (Man City)_https://cdn.futbin.com/content/fifa20/img/players/186942.png?v=22", "Martinez (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/177610.png?v=22", "Goretzka (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/209658.png?v=22", "Ndidi (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/226790.png?v=22", "Jorginho (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/205498.png?v=22", "Henderson (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/183711.png?v=22", "Gueye (PSG)_https://cdn.futbin.com/content/fifa20/img/players/193474.png?v=22", "Khedira (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/179846.png?v=22", "Danilo (Porto)_https://cdn.futbin.com/content/fifa20/img/players/200888.png?v=22", "Rabiot (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/210008.png?v=22", "Nainggolan (Cagliari)_https://cdn.futbin.com/content/fifa20/img/players/178518.png?v=22", "Illarramendi (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/190584.png?v=22", "Carvalho (Betis)_https://cdn.futbin.com/content/fifa20/img/players/207566.png?v=22", "Tolisso (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/219683.png?v=22", "Fabian (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/226271.png?v=22", "Herrera (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/156519.png?v=22", "Herrera (PSG)_https://cdn.futbin.com/content/fifa20/img/players/191740.png?v=22", "Keita (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/220971.png?v=22", "Biglia (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/158963.png?v=22", "Kovacic (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/207410.png?v=22", "Partey (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/209989.png?v=22", "Torreira (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/223959.png?v=22", "Neves (Wolves)_https://cdn.futbin.com/content/fifa20/img/players/224293.png?v=22", "Milner (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/138412.png?v=22", "Sissoko (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/183394.png?v=22", "Fernando (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/184134.png?v=22", "Xhaka (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/199503.png?v=22", "Ceballos (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/222509.png?v=22", "Emre Can (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/208333.png?v=22", "Matic (Man United)_https://cdn.futbin.com/content/fifa20/img/players/191202.png?v=22", "Kondogbia (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/201455.png?v=22", "Doucoure (Watford)_https://cdn.futbin.com/content/fifa20/img/players/208135.png?v=22", "Valverde (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/239053.png?v=22", "Tielemans (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/216393.png?v=22", "Bakayoko (Monaco)_https://cdn.futbin.com/content/fifa20/img/players/219809.png?v=22", "Weigl (Benfica)_https://cdn.futbin.com/content/fifa20/img/players/222028.png?v=22", "Soumare (Lille)_https://cdn.futbin.com/content/fifa20/img/players/239817.png?v=22", "Barella (Inter)_https://cdn.futbin.com/content/fifa20/img/players/224232.png?v=22", "Gomes (Everton)_https://cdn.futbin.com/content/fifa20/img/players/211575.png?v=22", "Llorente (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/226161.png?v=22", "Loftus Cheek (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/213666.png?v=22", "Kessie (Milan)_https://cdn.futbin.com/content/fifa20/img/players/230938.png?v=22", "Roca (Espanyol)_https://cdn.futbin.com/content/fifa20/img/players/235945.png?v=22", "Bentancur (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/227535.png?v=22", "Rice (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/234378.png?v=22", "De Roon (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/208461.png?v=22", "Zakaria (Borussia Monch.)_https://cdn.futbin.com/content/fifa20/img/players/229261.png?v=22", "Elneny (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/213051.png?v=22", "Arambarri (Getafe)_https://cdn.futbin.com/content/fifa20/img/players/232665.png?v=22", "Noble (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/152879.png?v=22", "Coquelin (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/189271.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]  
  }
  if (rando == 5){
  var arr1 = ["Coutinho (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/189242.png?v=22)", "De Bruyne (Man City)_https://cdn.futbin.com/content/fifa20/img/players/192985.png?v=22", "Dybala (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/211110.png?v=22", "Reus (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/188350.png?v=22", "Pogba (Man United)_https://cdn.futbin.com/content/fifa20/img/players/195864.png?v=22", "David Silva (Man City)_https://cdn.futbin.com/content/fifa20/img/players/168542.png?v=22", "Eriksen (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/190460.png?v=22", "Thiago (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/189509.png?v=22", "Pjanic (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/180206.png?v=22", "Isco (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/197781.png?v=22", "Muller (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/189596.png?v=22", "James (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/198710.png?v=22", "Fernandes (Man United)_https://cdn.futbin.com/content/fifa20/img/players/212198.png?v=22", "Saul (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/208421.png?v=22", "Ziyech (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/208670.png?v=22", "Gomez (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/143076.png?v=22", "Ozil (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/176635.png?v=22", "Vidal (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/181872.png?v=22", "Fekir (Betis)_https://cdn.futbin.com/content/fifa20/img/players/216594.png?v=22", "Wijnaldum (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/181291.png?v=22", "Arthur (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/230658.png?v=22", "Alli (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/211117.png?v=22", "Brandt (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/212194.png?v=22", "Havertz (Bayer 04)_https://cdn.futbin.com/content/fifa20/img/players/235790.png?v=22", "Canales (Betis)_https://cdn.futbin.com/content/fifa20/img/players/190286.png?v=22", "Ramsey (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/186561.png?v=22", "Draxler (PSG)_https://cdn.futbin.com/content/fifa20/img/players/202166.png?v=22", "Sarabia (PSG)_https://cdn.futbin.com/content/fifa20/img/players/198950.png?v=22", "Banega (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/178562.png?v=22", "Sirgudsson (Everton)_https://cdn.futbin.com/content/fifa20/img/players/184484.png?v=22", "Lo Celso (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/226226.png?v=22", "Mata (Man United)_https://cdn.futbin.com/content/fifa20/img/players/178088.png?v=22", "Cazorla (Villarreal)_https://cdn.futbin.com/content/fifa20/img/players/146562.png?v=22", "Bernardo (Man City)_https://cdn.futbin.com/content/fifa20/img/players/218667.png?v=22", "Lingard (Man United)_https://cdn.futbin.com/content/fifa20/img/players/207494.png?v=22", "Forsberg (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/208448.png?v=22", "Maddison (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/220697.png?v=22", "Odegaard (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/222665.png?v=22", "Payet (Marseille)_https://cdn.futbin.com/content/fifa20/img/players/177388.png?v=22", "Xhaka (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/199503.png?v=22", "Fornals (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/226456.png?v=22", "Ndombele (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/235569.png?v=22", "Aouar (Lyon)_https://cdn.futbin.com/content/fifa20/img/players/234906.png?v=22", "Sabitzer (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/204923.png?v=22", "Van De Beek (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/221363.png?v=22", "Winks (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/222400.png?v=22", "Chamberlain (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/198784.png?v=22", "Grealish (Aston Villa)_https://cdn.futbin.com/content/fifa20/img/players/206517.png?v=22", "Barkley (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/199189.png?v=22", "Fred (Man United)_https://cdn.futbin.com/content/fifa20/img/players/209297.png?v=22", "Mount (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/233064.png?v=22", "Dennis (Celta)_https://cdn.futbin.com/content/fifa20/img/players/205192.png?v=22", "Ikone (Lille)_https://cdn.futbin.com/content/fifa20/img/players/234612.png?v=22", "Bardhi (Levante)_https://cdn.futbin.com/content/fifa20/img/players/237239.png?v=22", "Cyprien (Nice)_https://cdn.futbin.com/content/fifa20/img/players/212886.png?v=22", "Camavinga (Rennes)_https://cdn.futbin.com/content/fifa20/img/players/248243.png?v=22", "Koke (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/193747.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]  
  }
  if (rando == 6){
  var arr1 = ["Neymar (PSG)_https://cdn.futbin.com/content/fifa20/img/players/190871.png?v=22", "Hazard (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/183277.png?v=22", "Mane (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/208722.png?v=22", "Sane (Man City)_https://cdn.futbin.com/content/fifa20/img/players/222492.png?v=22", "Coman (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/213345.png?v=22", "Perisic (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/181458.png?v=22", "Costa (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/190483.png?v=22", "Anderson (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/201995.png?v=22", "Martial (Man United)_https://cdn.futbin.com/content/fifa20/img/players/211300.png?v=22", "Asensio (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/220834.png?v=22", "Carrasco (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/208418.png?v=22", "Lemar (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/213565.png?v=22", "Guedes (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/224411.png?v=22", "Bailey (Bayer 04)_https://cdn.futbin.com/content/fifa20/img/players/229906.png?v=22", "Rafa (Benfica)_https://cdn.futbin.com/content/fifa20/img/players/216547.png?v=22", "Sanchez (Inter)_https://cdn.futbin.com/content/fifa20/img/players/184941.png?v=22", "Kostic (Frankfurt)_https://cdn.futbin.com/content/fifa20/img/players/208574.png?v=22", "Promes (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/208808.png?v=22", "Oyarzabal (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/230142.png?v=22", "Bergwijn (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/225953.png?v=22", "Fraser (Bournemouth)_https://cdn.futbin.com/content/fifa20/img/players/207807.png?v=22", "Neres (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/236632.png?v=22", "Vinicius (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/238794.png?v=22", "Vitolo (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/199715.png?v=22", "Cheryshev (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/206225.png?v=22", "Pulisic (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/227796.png?v=22", "Iwobi (Everton)_https://cdn.futbin.com/content/fifa20/img/players/213655.png?v=22", "Babel (Ajax)_https://cdn.futbin.com/content/fifa20/img/players/157301.png?v=22", "Ocampos (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/205632.png?v=22", "Boufal (Southampton)_https://cdn.futbin.com/content/fifa20/img/players/211381.png?v=22", "Diaby (Bayer 04)_https://cdn.futbin.com/content/fifa20/img/players/241852.png?v=22", "Salah (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/209331.png?v=22", "Sterling (Man City)_https://cdn.futbin.com/content/fifa20/img/players/202652.png?v=22", "Di Maria (PSG)_https://cdn.futbin.com/content/fifa20/img/players/183898.png?v=22", "Bale (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/173731.png?v=22", "Mahrez (Man City)_https://cdn.futbin.com/content/fifa20/img/players/204485.png?v=22", "Sancho (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/233049.png?v=22", "Dembele (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/231443.png?v=22", "Callejon (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/185020.png?v=22", "Gnabry (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/206113.png?v=22", "Pepe (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/226110.png?v=22", "Thauvin (Marseille)_https://cdn.futbin.com/content/fifa20/img/players/204970.png?v=22", "Pedro (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/189505.png?v=22", "Suso (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/202651.png?v=22", "Lozano (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/221992.png?v=22", "Willian (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/180403.png?v=22", "Shaqiri (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/193348.png?v=22", "Hazard (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/203486.png?v=22", "Correa (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/214997.png?v=22", "Quaresma (Besiktas)_https://cdn.futbin.com/content/fifa20/img/players/20775.png?v=22", "Mkhitaryan (Roma)_https://cdn.futbin.com/content/fifa20/img/players/192883.png?v=22", "Lamela (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/170368.png?v=22", "Deulofeu (Watford)_https://cdn.futbin.com/content/fifa20/img/players/202477.png?v=22", "Richarlison (Everton)_https://cdn.futbin.com/content/fifa20/img/players/231943.png?v=22", "Maximin (Newcastle)_https://cdn.futbin.com/content/fifa20/img/players/216388.png?v=22", "Chiesa (Fiorentina)_https://cdn.futbin.com/content/fifa20/img/players/235805.png?v=22", "Januzaj (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/208330.png?v=22", "James (Man United)_https://cdn.futbin.com/content/fifa20/img/players/232104.png?v=22", "Adama (Wolves)_https://cdn.futbin.com/content/fifa20/img/players/213956.png?v=22", "Chukwueze (Villarreal)_https://cdn.futbin.com/content/fifa20/img/players/246172.png?v=22", "Ferran (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/241461.png?v=22", "Under (Roma)_https://cdn.futbin.com/content/fifa20/img/players/235889.png?v=22", "Sarr (Watford)_https://cdn.futbin.com/content/fifa20/img/players/235353.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]  
  }
  if (rando == 7){
  var arr1 = ["Messi (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/158023.png?v=22", "Ronaldo (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/20801.png?v=22", "Aguero (Man City)_https://cdn.futbin.com/content/fifa20/img/players/153079.png?v=22", "Suarez (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/176580.png?v=22", "Lewandowski (Bayern)_https://cdn.futbin.com/content/fifa20/img/players/188545.png?v=22", "Kane (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/202126.png?v=22", "Mbappe (PSG)_https://cdn.futbin.com/content/fifa20/img/players/231747.png?v=22", "Griezmann (Barcelona)_https://cdn.futbin.com/content/fifa20/img/players/194765.png?v=22", "Aubameyang (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/188567.png?v=22", "Cavani (PSG)_https://cdn.futbin.com/content/fifa20/img/players/179813.png?v=22", "Son (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/200104.png?v=22", "Benzema (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/165153.png?v=22", "Insigne (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/198219.png?v=22", "Mertens (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/175943.png?v=22", "Firmino (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/201942.png?v=22", "Lacazette (Arsenal)_https://cdn.futbin.com/content/fifa20/img/players/193301.png?v=22", "Immobile (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/192387.png?v=22", "Werner (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/212188.png?v=22", "Lukaku (Inter)_https://cdn.futbin.com/content/fifa20/img/players/192505.png?v=22", "Icardi (PSG)_https://cdn.futbin.com/content/fifa20/img/players/201399.png?v=22", "Ibrahimovic (Milan)_https://cdn.futbin.com/content/fifa20/img/players/41236.png?v=22", "Higuain (Juventus)_https://cdn.futbin.com/content/fifa20/img/players/167664.png?v=22", "Aspas (Celta)_https://cdn.futbin.com/content/fifa20/img/players/192629.png?v=22", "Vardy (Leicester)_https://cdn.futbin.com/content/fifa20/img/players/208830.png?v=22", "Dzeko (Roma)_https://cdn.futbin.com/content/fifa20/img/players/180930.png?v=22", "Depay (Lyon)_https://cdn.futbin.com/content/fifa20/img/players/202556.png?v=22", "Ilicic (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/200647.png?v=22", "Martinez (Inter)_https://cdn.futbin.com/content/fifa20/img/players/231478.png?v=22", "Jovic (Real Madrid)_https://cdn.futbin.com/content/fifa20/img/players/232432.png?v=22", "Quagliarella (Sampdoria)_https://cdn.futbin.com/content/fifa20/img/players/159261.png?v=22", "Lucas (Spurs)_https://cdn.futbin.com/content/fifa20/img/players/200949.png?v=22", "Haller (West Ham)_https://cdn.futbin.com/content/fifa20/img/players/205693.png?v=22", "Diego Costa (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/179844.png?v=22", "Rodrigo (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/198329.png?v=22", "Zaha (Crystal Palace)_https://cdn.futbin.com/content/fifa20/img/players/198717.png?v=22", "Alcacer (Villarreal)_https://cdn.futbin.com/content/fifa20/img/players/200454.png?v=22", "Ben Yedder (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/199451.png?v=22", "Morata (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/201153.png?v=22", "Milik (Napoli)_https://cdn.futbin.com/content/fifa20/img/players/205175.png?v=22", "Werner (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/212188.png?v=22", "Kramaric (Hoffenheim)_https://cdn.futbin.com/content/fifa20/img/players/216354.png?v=22", "Rashford (Man United)_https://cdn.futbin.com/content/fifa20/img/players/231677.png?v=22", "Jesus (Man City)_https://cdn.futbin.com/content/fifa20/img/players/230666.png?v=22", "Giroud (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/178509.png?v=22", "De Jong (Sevilla)_https://cdn.futbin.com/content/fifa20/img/players/189805.png?v=22", "Zapata (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/215333.png?v=22", "Jose (Sociedad)_https://cdn.futbin.com/content/fifa20/img/players/195093.png?v=22", "Volland (Bayer 04)_https://cdn.futbin.com/content/fifa20/img/players/200610.png?v=22", "Williams (Athletic)_https://cdn.futbin.com/content/fifa20/img/players/216201.png?v=22", "Belotti (Torino)_https://cdn.futbin.com/content/fifa20/img/players/208596.png?v=22", "Poulsen (Leipzig)_https://cdn.futbin.com/content/fifa20/img/players/207791.png?v=22", "Gameiro (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/176600.png?v=22", "Joao Felix (Atletico)_https://cdn.futbin.com/content/fifa20/img/players/242444.png?v=22", "Jimenez (Wolves)_https://cdn.futbin.com/content/fifa20/img/players/204838.png?v=22", "Gomez (Valencia)_https://cdn.futbin.com/content/fifa20/img/players/239207.png?v=22", "Moussa Dembele (Lyon)_https://cdn.futbin.com/content/fifa20/img/players/211591.png?v=22", "Muriel (Atalanta)_https://cdn.futbin.com/content/fifa20/img/players/199110.png?v=22", "Correa (Lazio)_https://cdn.futbin.com/content/fifa20/img/players/215330.png?v=22", "Piatek (Berlin)_https://cdn.futbin.com/content/fifa20/img/players/223113.png?v=22", "Thuram (Borussia Monch.)_https://cdn.futbin.com/content/fifa20/img/players/228093.png?v=22", "King (Bournemouth)_https://cdn.futbin.com/content/fifa20/img/players/185422.png?v=22", "Benedetto (Marseille)_https://cdn.futbin.com/content/fifa20/img/players/215061.png?v=22", "Batshuayi (Chelsea)_https://cdn.futbin.com/content/fifa20/img/players/204529.png?v=22", "Haaland (Dortmund)_https://cdn.futbin.com/content/fifa20/img/players/239085.png?v=22", "Origi (Liverpool)_https://cdn.futbin.com/content/fifa20/img/players/213135.png?v=22", "Deeney (Watford)_https://cdn.futbin.com/content/fifa20/img/players/183125.png?v=22", "Jovetic (Monaco)_https://cdn.futbin.com/content/fifa20/img/players/181820.png?v=22", "Chicharito (La Galaxy)_https://cdn.futbin.com/content/fifa20/img/players/178224.png?v=22", "Welbeck (Watford)_https://cdn.futbin.com/content/fifa20/img/players/186146.png?v=22", "Avila (Osasuna)_https://cdn.futbin.com/content/fifa20/img/players/228520.png?v=22", "Pukki (Norwich)_https://cdn.futbin.com/content/fifa20/img/players/190362.png?v=22"]
      var chosen1 = arr1[Math.floor(Math.random() * arr1.length)]
      var chosen2 = arr1.filter(word => word != chosen1)[Math.floor(Math.random() * (arr1.length - 1))]  
  }
  //415
  var name1 = chosen1.substr(0, chosen1.indexOf('('))
  var tisk1 = chosen1.substr(0, chosen1.indexOf('_'));var club1 = tisk1.split('(').pop().replace(")", "")
  var name2 = chosen2.substr(0, chosen2.indexOf('('))
  var tisk2 = chosen2.substr(0, chosen2.indexOf('_'));var club2 = tisk2.split('(').pop().replace(")", "")
    var h2h = new Discord.RichEmbed()
      .setTitle(name1)
      .setDescription(club1)
      .setColor("#"+((1<<24)*Math.random()|0).toString(16))
      .setThumbnail(chosen1.split('_').pop())
    message.channel.send(h2h).then(msg => {msg.react('⭐')})
    var h2h2 = new Discord.RichEmbed()
      .setTitle(name2)
      .setDescription(club2)
      .setColor("#"+((1<<24)*Math.random()|0).toString(16))
      .setThumbnail(chosen2.split('_').pop())
    message.channel.send(h2h2).then(msg => {msg.react('⭐')})
  setTimeout(() => {talkedRecently.delete(bot.user.id)}, 4000)
}
////////////////////////////////////////////////////////////////////////-TRB-////////////////////////////////////////////////////////////////  
  if (message.content.toLowerCase().startsWith("?trb")){
    var team = ["Leicester","Everton","Arsenal","Manchester United","Manchester City","Liverpool","Tottenham","Chelsea","Wolves","West Ham","Southampton","Leeds","Sheffield UTD","Aston Villa","Swindon Town","FC Barcelona","Real Madrid","Atletico Madrid","Athletic Club","Villarreal","Sevilla","Real Sociedad","Celta Vigo","Real Betis","Malaga","Mallorca","Granada","Mirandes FC","Juventus","Napoli",
                "Celtic", "Inter", "AC Milan", "AS Roma", "Lazio", "Atalanta", "Fiorentina", "Bayern Munich", "Dortmund", "Bayer 04", "Leipzig", "PSG", "Olympique Lyon", "AS Monaco", "Ajax", "Besiktas", "Zenit", "Benfica", "Porto", "Sauce FC", "Hashtag United"
               ]
    var source = ["The Sun", "Metro", "Guillem Balague", "Sky Sport", "AS", "TalkSport", "Mark Goldbridge", "Fabrizio Romano", "Sport1", "David Ornstein", "GFFN", "Diario Gol", "Marca", "Gerard Romero", "The Guardian", "The Telegraph", "Gianluca Di Marzio", "The Mirror", "BBC", "COPE", "Kicker", "Daily Star"]
      team = team[Math.floor(Math.random()*team.length)]
      source = source[Math.floor(Math.random()*source.length)];
      var rando = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      if (rando == 1) var price = "€" + Math.round(Math.floor(Math.random() * (140 - 1 + 1)) + 1) + "m";
      if (rando == 2) var price = "€" + Math.round(Math.floor(Math.random() * (20 - 1 + 1)) + 1)+ "m";
      if (rando == 3) var price = "€" + Math.round(Math.floor(Math.random() * (140 - 1 + 1)) + 1) + "m";
      if (rando == 4) var price = "€" + Math.round(Math.floor(Math.random() * (20 - 1 + 1)) + 1)+ "m";
      if (rando == 5) var price = "€" + Math.round(Math.random() * (900 - 100 + 1) + 100) + "K";
      let player = message.content.substring(message.content.indexOf(" ") +1, message.content.length);
      const capitalize = (s) => {
        if (typeof s !== 'string') return ''
          return s.charAt(0).toUpperCase() + s.slice(1)
        }

      player = "**" + capitalize(player) + "**"; //'Flavio'
      var format = [
        source + ": " + player + " ready to move to " + team + " after " + price + " bid accepted.",
        source + " reporting that " + player + " could be on the move, with a " + price + " bid from " + team +" expected imminently.",
        team + " appear confident in their hopes of securing a " + price + " deal for " + player + " (" + source + ")",
        player + " to " + team + "? Deal moves closer as " + price + " bid submitted. (" + source + ")",
        player + " is wanted by " + team + " although the club is not willing to meet his " + price + " valuation. (" + source + ")",
        "Rumours that " + player + " could be on the move to " + team + ", " + price + " bid expected. (" + source + ")",
        "Reports that " + player + " could be moving to " + team + ", valued at " + price  + " (" + source + ")",
        team + " are after " + player + " but it will take a bid of at least " + price + " (" + source + ")",
        
      ];
      var randomItem = format[Math.floor(Math.random()*format.length)];
    message.channel.send(randomItem)
  } 
////////////////////////////////////////////////////////////////////////-Others-////////////////////////////////////////////////////////////////  
  if (message.content.toLowerCase() == "fr"){
    var count = 0 
    message.channel.fetchMessages({limit: 2}).then((msgCollection) => {
    msgCollection.forEach((msg) => {count = count + 1;if (count == 2) msg.react('682656021222916116')})})
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  if (message.channel.id === '588413034095968296') {     
   message.react('⭐')
   var winna = setInterval(function() {
   message.react('💩')
   clearInterval(winna)
   }, 1500);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  if (message.channel.id === '733434546984452146') {     
   message.react('696009662054662224')
   var winna = setInterval(function() {
   message.react('628202985612378118')
   clearInterval(winna)
   }, 1500);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  if (message.content.toLowerCase().startsWith("?ping")){    
    message.channel.send({embed: {
        color: 0x2ed32e,
        fields: [{name: "Pong",value: "My Ping: " + Math.round(bot.ping) + ' ms'}],}});
    }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase().startsWith("?wc")){
  let wc = message.content.substring(message.content.indexOf(" ") +1, message.content.length);
  var notpossible = new Discord.RichEmbed() 
       .setColor('#0xff0000') 
       .setTitle(("Invalid World Cup year"))   
  var ting = worldCupHistory.year(wc);
  if (ting == undefined) return message.channel.send(notpossible)
  var host = ting.hostCountry + ","
  const wcfield = new Discord.RichEmbed()
    .setTitle("World Cup " + wc + " <:worldcup:665505033558949899>")
    .setColor("0xffff00")
    .addField("Host Country", host.toString().substr(0, host.indexOf(','))+ " " + flag(host.toString().substr(0, host.indexOf(',')).replace("England", "UK")), true)
    .addField("Number of matches", ting.numberOfMatches, true)
    .addField("Total Attendance", ting.totalAttendance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
    .addField("Top Goalscorer", flag(ting.topGoalScorer[0].country.replace("England", "UK")) + " " + ting.topGoalScorer[0].name + "\n(" + ting.topGoalScorer[0].numberOfGoals + " goals)", true)
    .addField("Winner", ting.winner + " " + flag(ting.winner.replace("England", "UK")), true)
    .addField("Runner Up", ting.runnerUp + " " + flag(ting.runnerUp.replace("England", "UK")), true)
    .setImage('https://i.imgur.com/9ziQyHZ.jpg')
  message.channel.send(wcfield)
  }                           
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.channel.id === '609346678121562123') {    
    message.delete()
    let club = message.content.substring(message.content.indexOf(" ") -22, message.content.length);
    message.channel.overwritePermissions(message.author,{ 'READ_MESSAGES': false },)
    bot.channels.get('588412185944915978').send('**' + message.author + ': ' + club + '**')
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.channel.id === '609336050275450930') message.delete()
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith('?avatar')) {
  if (!message.mentions.users.size) {
return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
}
const avatarList = message.mentions.users.map(user => {
return "`" + user.username + "'s avatar: `" + user.displayAvatarURL;
});
message.channel.send(avatarList);
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ((message.content.toLowerCase().includes(' raid')) || message.content.toLowerCase().startsWith('raid')){
  if (message.channel.type === 'dm') return;
  if (message.channel.id == '645730566909460520') return
   if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete()
    const attachments = new Attachment('https://i.imgur.com/zaLOzXi.jpg');
    message.reply(attachments)
  .then(msg => {
    msg.delete(3000)
  })
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().startsWith('coyg')) {
  message.channel.send('<:snake1:665505314925182976> <:snake2:665505526574219304> <:snake3:665505526255452183> **HAHAHHAHAHAHAHA** <:snake4:665505525890285574> <:snake5:665505525634695198> <:snake6:665505525529837578>')
   .then(function (message) {
              message.react("💩")
  })
}
if (message.content.toLowerCase().startsWith('ggmu')) {
  message.channel.send('<:utd:665505530097303588> **5th dkm** <:utd:665505530097303588>')
     .then(function (message) {
              message.react("588418295212933174")
  })
}
if (message.content.toLowerCase().startsWith('coys')) {
  message.channel.send('<:spurs:665505529103122432> **COME ON YOU SPURS** <:spurs:665505529103122432>')
       .then(function (message) {
              message.react("588416833749647435")
  })
}
if (message.content.toLowerCase().startsWith('citeh')) {
  message.channel.send('<:ManCity:588420411373387922> تعال يا شيوخ <:ManCity:588420411373387922>')
       .then(function (message) {
              message.react("💰")
  })
}
if (message.content.toLowerCase().startsWith('coyb')) {
  message.channel.send('<:chelsea:665505528914378753> **COME ON YOU BLUES** <:chelsea:665505528914378753> ')
         .then(function (message) {
              message.react("588414289849614358")
  })
}
if (message.content.toLowerCase().startsWith('ynwa')) {
  message.channel.send('<:liverbird:665506646419701760> **YOU NEVER WALK ALONE** <:liverbird:665506646419701760>')
         .then(function (message) {
              message.react("588484197543575552")
  })
}
if (message.content.toLowerCase().startsWith('aupa atleti')) {
  message.channel.send('<:atletico:612402372848648221> **AUPA ATLETI** <:atletico:612402372848648221>')
         .then(function (message) {
              message.react("612402372848648221")
  })
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().includes("<@&589397864719974400>")){ 
  if (message.guild.id == '610868785129324563') return
      if (message.member.hasPermission("ADMINISTRATOR")) return;
  let role = message.guild.roles.find(role => role.name ===  "Muted");
message.member.send("That @everyone is a fake role :flushed: :wink: But you tried... You failed... You lose... Take this L bro, you actually though we'd allow anyone to ping it... unfortunate :(")
           message.member.addRole(role);
  const attachment = new Attachment('https://i.imgur.com/Ubap05h.jpg');
    message.reply(attachment)
  .then(msg => {
    msg.delete(3000)
  })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if (message.channel.id === '688529114894041155') { 
  if (!(message.author.id === '688345632796442650')){
    message.delete()
  }
    if (!owner.includes(message.author.tag)) var likes = ((Math.random() * (85 - 1 + 1)) + 1)
    else var likes = ((Math.random() * (948 - 250 + 1)) + 250)
    var retweets = (0.30 * likes).toFixed(1).toString() + 'k';
    likes = likes.toFixed(1).toString() + 'k'
  if(message.author.bot) return;
  let kool = message.content.substring(message.content.indexOf(" ") -99, message.content.length);
  var re = /(https?:\/\/.*\.(?:png|jpg|gif))/i;
  if (kool.match(re) == null) var img = 'https://cdn.discordapp.com/attachments/609901875927580711/657937412965793792/unknown.png'
  else var img = kool.match(re).join(" ").replace(/ .*/,'')
  kool = kool.replace(img, '')
  let myRole = message.guild.roles.find(role => role.name ===  "HTH idolo FC");
  //if(!message.member.roles.has(myRole.id)) return message.author.send('You are not in the squad. To join ask one of the admins of this FM career');  
  const exampleEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
	//.setTitle('Some title')
	.setAuthor(message.author.username + ' (@' + message.author.tag.toLowerCase().replace(/\s/g, '_').replace("#", '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') + ')', message.author.avatarURL, 'https://www.pornhub.com/')
	.setDescription(kool)
	.addField('Retweets', retweets, true)
	.addField('Likes', likes, true)
  .setImage(img)
	.setFooter('Twitter', 'https://i.imgur.com/31qbvsC.png');
  if (!(message.author.id === '665249331170902060')){
  message.channel.send(exampleEmbed)
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if (message.channel.id === '728406341604999238') { 
  if (!owner.includes(message.author.tag)) return
  if (!(message.author.id === '688345632796442650')){
    message.delete()
  }
    var likes = ((Math.random() * (948 - 10 + 1)) + 10)
    var retweets = (0.30 * likes).toFixed(1).toString() + 'k';
    likes = likes.toFixed(1).toString() + 'k'
  if(message.author.bot) return;
  let kool = message.content.substring(message.content.indexOf(" ") -99, message.content.length);
  var re = /(https?:\/\/.*\.(?:png|jpg|gif))/i;
  if (kool.match(re) == null) var img = 'https://cdn.discordapp.com/attachments/609901875927580711/657937412965793792/unknown.png'
  else var img = kool.match(re).join(" ").replace(/ .*/,'')
  kool = kool.replace(img, '')
  var avurl = ['https://i.imgur.com/PpSnC63.png', 'https://i.imgur.com/7jeEzzh.jpg', 'https://i.imgur.com/bXTvBol.jpg', 'https://i.imgur.com/LDtq7wf.jpg', 'https://i.imgur.com/Agwdnxt.jpg'][Math.floor(Math.random() * 5)];
  var namez = ['Baby Baba', 'Boom Baba', 'Big Baba', 'Brilliant Baba', 'Bad Baba'][Math.floor(Math.random() * 5)];
  const exampleEmbed = new Discord.RichEmbed()
  .setColor("#"+((1<<24)*Math.random()|0).toString(16))
	//.setTitle('Some title')
	.setAuthor(namez + ' (@' + message.author.tag.toLowerCase().replace(/\s/g, '_').replace("#", '').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') + ')', avurl, 'https://www.pornhub.com/')
	.setDescription(kool)
	.addField('Retweets', retweets, true)
	.addField('Likes', likes, true)
  .setImage(img)
	.setFooter('Twitter', 'https://i.imgur.com/31qbvsC.png');
  if (!(message.author.id === '665249331170902060')){
  message.channel.send(exampleEmbed)
  }
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})



bot.login(process.env.token)