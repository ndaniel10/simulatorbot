const Discord = require ('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db') 
const talkedRecently = new Set();
function shuffle(a) {var j, x, i;for (i = a.length - 1; i > 0; i--) {j = Math.floor(Math.random() * (i + 1));x = a[i];a[i] = a[j];a[j] = x;}return a; }  

var playerArray = ["Blaszczykowski","Messi", "Suarez", "Griezmann", "Arthur", "De Jong", "Busquets", "Draxler", "Semedo", "Pique", "Umtiti", "Alba", "Ter Stegen", "Lenglet", "Rakitic", "Ousmane Dembele","Turan","Vidal", "Alena","Firpo", "Sergi Roberto", "Todibo", "Neto",
                      "Benzema","Hazard","Bale","Modric","Kroos","Casemiro","Mendy","Carvajal","Ramos","Varane","Courtois","Isco","Asensio","Marcelo","Jovic", "Lucas Vazquez","Diaz","Nacho","Militao","Odriozola","Areola",
                      "Felix","Morata","Vitolo","Correa","Carrasco","Partey","Saul","Koke","Lemar","Trippier","Lodi","Felipe","Gimenez","Oblak","Diego Costa","Herrera","Llorente","Savic","Arias","Hermoso",
                      "Maxi Gomez","Rodrigo","Parejo","Gabriel","Cillessen","Bakayoko","Fekir","Isak","Santi Mina","Yerry Mina","Aspas","Cazorla","Aduriz","Gameiro","Wass","Guedes","Soler","Cheryshev","Garay","Piccini","Florenzi","Mangala",
                      "Aubameyang","Lacazette","Xhaka","Guendouzi","Ozil","Pepe","Bellerin","Saka","David Luiz","Mustafi","Sokratis","Leno","Ceballos","Martinelli","Havertz","Volland","Munir","En Nesyri","Chicharito","Jesus Navas","Ocampos","Fernando","Nolito","Suso","Gnagnon","Vaclik",
                      "Chukwueze","Bony","Ekambi","Iborra","Albiol","Barton","Asenjo","Anguissa","Unai Simon","Williams","Munian","Raul Garcia","Inigo","Yuri","Oyarzabal","Illarramendi","Monreal","Bartra","Banega","Carvalho","Guardado","Diakhaby","Gaya","Kondogbia","Coquelin","Joaquin","Wu Lei","Rafinha","Denis Suarez","Sisto",
                      "Abraham","Pulisic","Willian","Odoi","Kovacic","Jorginho","Kante","Mount","Alonso","Emerson","Zouma","Kepa","Depay","Aouar","Rudiger", "Hamsik","Quaresma",
                      "Rashford","Martial","Bruno Fernandes","Pogba","Matic","McTominay","Fred","Bissaka","Shaw","Lindelof","Maguire","De Gea","Ziyech","Promes","Tadic",
                      "Mane","Salah","Firmino","Wijnaldum","Henderson","Keita","Fabinho","Trent","Robertson","Van Dijk","Matip","Lovren","Alisson","Odegaard","Payet","Karius",
                      "Kane","Son","Lo Celso","Alli","Ndombele","Sissoko","Vertonghen","Alderweireld","Lloris","Winks","Bergwijn","Adama","Jimenez","Richarlison","Zaha", "Castillejo",
                      "Aguero","Sane","Sterling","Mahrez","Bernardo","De Bruyne","Rodri","Gundogan","Walker","Zinchenko","Laporte","Fernandinho","Stones","Werner","Forsberg","Romagnoli","Rebic","Leao","Bonaventura","Biglia","Piatek","Paqueta","Borini","Calhanoglu",
                      "Lewandowski","Muller","Coman","Gnabry","Tolisso","Thiago","Goretzka","Alaba","Neuer","Haaland","Reus","Weigl","Akanji","Zagadou","Burki","Schmeichel","Handanovic","Brandt","Hummels","Immobile","Lukaku","Godin","Young","Robben","Ribery","Pavard","Lautaro Martinez","Javi Martinez","De Vrij","De Roon","Skriniar","Barella","Brozovic","Vecino","Asamoah","Sensi",
                      "Ronaldo","Dybala","Higuain","Khedira","Matuidi","Pjanic","Sandro","Chiellini","De Ligt","Bonucci","Cuardado","Rabiot","Bernardeschi","Emre Can","Demiral","Soumare","Fati","Pirlo","Ronaldinho","Maradona","Maldini","Ibrahimovic","Insigne","Mertens","Koulibaly","Lobotka","Milik","Hysaj","Demme","Zielinski","Fabian","Callejon","Manolas",
                      "Neymar","Mbappe","Gueye","Icardi","Cavani","Verratti","Di Maria","Ikone","Meunier","Kurzawa","Thiago Silva","Marquinhos","Buffon","Navas","Torreira","Scholes","Lampard","Gerrard","Drogba","Kompany","Ilicic","Zapata","Muriel","Skrtel","Chiesa","Sirigu","Szczesny","Patricio","Gulacsi","Mignolet","Mandanda","Neres","Onana","Foster","Nouri","Tiote","Trapp","Reina","Lafont","Muslera",
                      "Nuno","Bordalas","Gasperini","Del Bosque","Mancini","Hiddink","Conte","Redknapp","Ranieri","Bilic","Scolari","Benitez","Spalletti","Valverde", "Mourinho", "Allegri", "Simeone", "Guardiola", "Pochettino", "Wenger", "Zidane", "Setien", "Arteta", "Casillas", "Ole", "Tuchel", "Sarri", "Klopp","Marcelino","Ferguson", "Dzeko","Smalling","Zaniolo","Pellegrini","Mkhitaryan","Fazio","Zappacosta","Pastore","Kluivert","Belotti","Nkoulou","Zaza","Laxalt",
                      "Eriksen","David Silva","Tielemans","Sarr","Tomori","Anderson","Batshuayi","Digne","Vardy","Azpilicueta","Milner","Aarons","Chamberlain","Otamendi","Walcott","Grealish","Maddison","Tarkowski","Foyth","Shaqiri","McGinn","Angelino","Bernard","Ndidi","Pukki","Moutinho","Keane","Defoe","Deeney","Chong","Moura","Haller","Lanzini","Fornals",
                      "Maximin","Wesley","Doherty","Giroud","Mata","Pedro","Neves","Snodgrass","Noble","Fraser","Jota","Bailly","Deulofeu","Rose","Lamela","Barkley","Jones","Lingard","Akinfenwa","Heskey","Lallana","Sakho","Kolasinac","Dier","Coleman","Sidibe","Loftus Cheek","Schar","Clyne","Origi","Wilshere","Ramsey","Wanyama","Townsend","Rojo","Chilwell","Iwobi",
                      "Rice","Tosun","Drinkwater","Albrighton","Ogbonna","Cahill","Delph","Shelvey","Cutrone","Gayle","Cresswell","Kouyate","Yedlin","Cleverley","Foden","Mooy","Holding","Kean","Crouch","Carroll","Dalot","Ayew","Benteke","Sessegnon","Calvert Lewin","Klose","Soyuncu","Choudhury","Tuanzebe","Fosu Mensah","Daniel James","James Rodriguez","Solanke","Ings",
                      "Greenwood","Longstaff","Olmo","Perisic","Sancho","Upamecano","Davies","Delaney","Witsel","Coutinho","Diaby","Aranguiz","Sabitzer","Sule","Guerreiro","Mbabu","Bellarabi","Kostic","Perisic","Orban","Lucas Hernandez","Bender","Alcacer","Tah","Vrsaljko","Kampl","Hakimi","Gotze","Dost","McKennie","Piszczek","Poulsen","Weghorst","Dabbur","Alario","Sala","Dahoud",
                      "Nkunku","Weiser","Hector","Grujic","Bentaleb","Bennacer","Mukiele","Denayer","Wendt","Paredes","Ben Yedder","Falcao","Osimhen","Remy","Cyprien","Atal","Koscielny","Glik","Sarabia","Sanson","Kimpembe","Benedetto","Golovin","Dzyuba","Dolberg","Cornet","Fonte","Cedric","Slimani","Bernat","Balde","Kehrer","Tousart","Jovetic","Azeez","Mendes","Niang","Choupo Moting",
                      "Nketiah","Nainggolan","Allan","Kolarov","Tonali","Candreva","Kubo","Portu","Morales","Soldado","Mandi","Inui","Bardhi","Coke","Iglesias","Funes Mori","Lucas Perez","Mayoral","Marega","Telles","Corona","Grimaldo","Pizzi","Pereira","Danilo","Acuna","Mathieu","Soares","Aboubakar","Vela","Nani","Giggs","Carrick","Evra","O'Shea","Ferdinand",
                      "Minamino", "Iniesta", "Xavi", "Paulinho", "Podolski", "Beckham", "Dani Alves", "Fabregas", "Terry", "Ancelotti", "Emery", "Cruyff", "Moyes", "Bielsa", "Vinicius", "Rodrygo", "Van Persie", "Figo", "Makalele", "Cafu", "Henry", "Vidic","Van Der Sar","Lehmann","Cole","Sagna","Bergkamp","Pires","Vieira","Zola","Ivanovic","Cech","Ederson","Makelele","Essien",
                      "Oscar","Ramires","Shearer","Pele","George Best","Gullit","Nistelrooy","Zanetti","Nesta","Lineker","Rivaldo","Puyol","Owen","Desailly","Hagi","Ballack","Shevchenko","Nedved","Socrates","Laudrup","Kaka","Koeman","Hierro","Deschamps","Inzaghi","Okocha","Gattuso","Blanc","Van Basten","Rijkaard","Moore","Schweinsteiger","Yaya Toure","Barzagli","Cantona","Platini","Infantino","Marchisio","Del Piero","Lahm",
                      "Real Madrid","Atleti","Barcelona","Getafe","Sevilla","Villarreal","Valencia","Athletic","Real Sociedad","Granada","Granada","Osasuna","Real Betis","Alaves","Valladolid","Eibar","Celta Vigo","Levante","Mallorca","Leganes","Espanyol","Malaga","Girona","Ajax",
                      "Liverpool","Manchester City","Manchester United","Leicester","Chelsea","Sheffield","Spurs","Sheffield","Everton","Wolves","Arsenal","Burnley","Newcastle","Southampton","Brighton","Crystal Palace","Brighton","Bournemouth","Aston Villa","West Ham","Norwich","Watford","Leeds","Stoke","Sunderland",
                      "Bayern","Dortmund","Leipzig","Monchengladbach","Bayer","Schalke","Hoffenheim","Frankfurt","Wolfsburg","Hertha","PSG","Marseille","Monaco","Lille","Montpellier","Bordeaux","Lyon","OGC Nice","Toulouse","Inter","Juventus","Lazio","Atalanta","Roma","Milan","Torino","Sassuolo","Genoa","Sampdoria",
                      "Anoeta","Camp Nou","Bernabeu","San Mames","Mestalla","Metropolitano","Anfield","Old Trafford","Emirates","Stamford Bridge","Etihad","San Siro","Allianz Arena","Wembley Stadium", "Eto'o", "Dudek", "Carragher", "Puskas", "Balotelli", "Bebe", "Mario Suarez", "Ben Arfa", "Ulloa", "Musa", "Kramaric", "Huth", "Morgan", "Okazaki", "Kagawa", "Long", "Pelle", "Boufal", "Redmond", "Yoshida", "Gazzaniga", "Rangers", "Romeu", "Vestegaard", "Bertrand", "Welbeck", "Sturridge", "Gabbiadini", "Carrillo", "Joselu", "Willock",
                      "Arshavin","Nasri", "Clichy", "Gibbs", "Djourou", "Adebayor", "Sanchez", "Rosicky", "Flamini", "Antunes", "Mertesacker", "Ospina", "Meret", "Sanogo", "Campbell", "Doucoure","Luis Alberto", "Rulli", "Sanches", "Snodgrass", "Buendia", "Krul", "Palacios", "Lavezzi", "Talisca", "Rooney", "Layun", "Howard", "Tevez", "Pato", "Huntelaar", "Gervinho", "Green", "Bolasie", "Doumbia", "Ibarbo", "Perotti", "Kalinic", "Diawara", "Stekelenburg", "Jagielka", "Miranda", "Benatia", "Mascherano", "Meyer", "Guaita", "Pizarro", "Coentrao",
                      "Jonas", "Fejsa", "Jardel", "Vargas", "Feghouli", "Brahimi", "Rami", "Diego Alves", "Piatti", "Puig", "Bojan", "Diouf", "Arnautovic", "Shawcross", "Allen","Saiss", "Dendoncker", "Jonny", "Boly", "Vallejo", "Coady", "Pereyra", "Capoue", "Chalobah", "Foulquier", "Nyom", "Cleverley", "Holebas", "Kabasele", "Morrison", "Niasse", "Andre Gomes", "Gbamin", "Baines", "Holgate", "Elyounoussi", "Pasalic", "Musonda", "Kenedy", "Baba", "Piazon", "Omeruo", "Ampadu", "Boga", "Brooks", "Altidore", "Lainez", "Guzan", "Juanmi",
                      "Tello", "Sidnei", "Robles", "Campana", "Van De Beek", "Palomino", "Medel", "Dzemaili", "Palacio", "Musacchio", "Theo Hernandez", "Ghoulam", "Valero", "Piemonte Calcio", "Mandzukic", "Douglas Costa", "Bentancur", "Rugani", "Sciglio", "Perin", "Falque", "Spinazzola", "Juan Jesus", "Benassi", "Schone", "Younes", "Milenkovic", "Caicedo", "Parolo", "Radu", "Bastos", "Durmisi", "Strakosha", "Sturaro", "Pjaca", "Kessie", "Pandev", "Sanabria", "Behrami", "Cagliari", "Nandez", "Klavan", "Olsen", "Donnarumma", "Kjaer",
                      "Quagliarella", "Ghezzal", "Boateng", "Pezzella", "Caceres", "Badelj", "Corluka", "Vida", "Tshabalala", "Chambers", "Menez", "Martins", "Gedson Fernandes", "Andre Silva", "Naldo", "Maripan", "Henrichs", "Lecomte", "Sommer", "Subasic", "Benaglio", "Reguilon", "Bounou", "Darder", "De Tomas", "Djene", "Salisu", "Angel", "Molina", "Fajr", "Cucurella", "Etebo", "Eusebio", "Deco", "Lopes", "Rafa", "Bruma", "Joao Mario", "Elneny", "Almeida", "Dias", "Ljajic", "Rode", "Podence", "Lehmann", "Seaman", "McCarthy", "Tomkins",
                      "Fahrmann", "Demirbay", "Schulz", "Thorgan", "Schmelzer", "Hitz", "Berge", "Horn", "Ginter", "Herrmann", "Halstenberg", "Stindl", "Shick", "Lookman", "Konate", "Kramer", "Plea", "Embolo", "Raffael", "Zakaria", "Thuram", "Arnold", "Rudy", "Harit", "Nastatic", "Caligiuri", "Braithwaite", "Christensen", "Ginkel", "Gilmour", "Reece James", "Caballero", "Belhanda", "Amrabat", "Saiss", "Chadli", "Trossard", "Casteels", "Moussa Dembele", "Mousa Dembele", "Januzaj", "Defour", "Fellaini", "Nzonzi", "Thauvin", "Germain",
                      "Strootman", "De Rossi", "Totti", "Maicon", "Milito", "Sneijder", "Cambiasso", "Muntari", "Motta", "Lucio", "Julio Cesar", "Olic", "Badstuber", "Dante", "Gustavo", "Di Matteo", "Kalou", "Enrique", "Maxwell", "Montoya", "Afellay", "David Villa", "Maxi Lopez", "Guti", "Solari", "Seedorf", "Sahin", "Arbeloa", "Adriano", "Nicolas Pepe", "Crespo", "Gaitan", "Avila", "Almiron", "Joelinton", "Lascelles", "Willems", "Baston", "Sigurdsson", "Fabianski", "Balbuena", "Masuaku", "Reid", "Tim Cahill", "Zabaleta", "Diop", "Randolph",
                      "Paisley", "Heynckes", "Bacca", "Pau Torres", "Alberto Moreno", "Trigueros", "Gerard Moreno", "Joachim Low", "Schurrle", "Jackson Martinez", "Nigel De Jong", "Howedes", "Vlaar", "Bolhi", "Zuniga", "Jedinak", "Bradley", "Donovan", "Alex Morgan", "Rapinoe", "Valdes", "Kuyt", "Dunga", "Marquez", "Tabarez", "Sampaoli", "Lozano", "Giovinco", "Negredo", "Guidetti", "Lescott", "Demichelis", "Hart", "Pantilimon"
]
module.exports = {
sim: (message, bot) => {  
  var server = bot.guilds.get('657170979793141770');
  var owner = server.roles.get('688344378481442828').members.map(m=>m.user.tag)
    if (message.content.toLowerCase() == "?res"){
      if (!owner.includes(message.author.tag)) return;
      db.delete(`full${message.guild.id}`)
      db.delete(`locking${bot.user.id}`)
      message.channel.send('ok')
    }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.toLowerCase().startsWith("?ban")){
    if (!owner.includes(message.author.tag)) return;
    var user = message.mentions.members.first()
    db.set(`banned${user.id}`, user.id)
    message.react('✅')
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.toLowerCase().startsWith("?unban")){
    if (!owner.includes(message.author.tag)) return;
    var user = message.mentions.members.first()
    db.delete(`banned${user.id}`)
    message.react('✅')
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.content.toLowerCase() == "?guesswho"){
    if (db.fetch(`locking${bot.user.id}`)) return message.react('❌');
    var banned = (db.fetch(`banned${message.author.id}`))
    var tin = (db.fetch(`current${message.guild.id}`))
    if (message.author.id == banned) return message.reply("You have been banned from using this command for being a big fag")
    if (message.author.id == tin) return message.reply("Give others a chance idiot, i hate you so does everyone else on this server")
    db.set(`locking${bot.user.id}`, 'stop')
    if (!(db.fetch(`full${message.guild.id}`))){
    db.set(`game${message.guild.id}`, message.author.id)
    db.set(`full${message.guild.id}`, 'full')
    var king = (db.fetch(`game${message.guild.id}`))
    var chos3 = playerArray[Math.floor(Math.random()*playerArray.length)];
    message.channel.send(message.author + " has started a **__Guess Who__** game. Go and try to guess based on the hints he gives")
    message.author.send("You have been given... **" + chos3 + "**!\nTry to make the others guess it within 1 minute without saying his name (if you do then you get penelized)")
    var collector = new Discord.MessageCollector(message.channel, m => m.author.id != king, { time: 60000 });
    var collector2 = new Discord.MessageCollector(message.channel, m => m.author.id == king, { time: 60000 });
      collector2.on('collect', message => {
        if (message.content.toLowerCase().includes(chos3.toLowerCase())){
          message.channel.send("Game ended because someone decided to cheat 👀")
          db.set('noppp', 'no')
          collector2.stop() 
          collector.stop() 
        }
      });
      collector.on('collect', message => {
        if (message.content.toLowerCase().includes(chos3.toLowerCase())){
          message.channel.send(message.author + " has guessed it. It was **" + chos3 + "**!")
          db.add(`xp_${message.author.id}`, 1);var rol = ""
          message.member.roles.filter(r => r.name.startsWith("[")).map(role => rol = rol + role.name + "\n");
          rol = rol.split("\n");rol.pop()
          var ting = "";
          message.guild.roles.filter(r => r.name.startsWith("[")).filter(r => !rol.includes(r.name)).map(role => ting = ting + role.name + "\n")
          ting = ting.split("\n");ting.pop();var namez = ting[Math.floor(Math.random() * (ting.length - 0 + 1)) + 0];var chosen = message.guild.roles.find(role => role.name === namez)
          if (db.fetch(`xp_${message.author.id}`) == 15){db.set(`xp_${message.author.id}`, 0);if (rol.length < 18){ message.member.addRole(chosen);message.channel.send(new Discord.RichEmbed().setTitle("You earned a role!").setColor("#43C6DB").setDescription(message.author + " has got **" + namez.substring(5) + "** for getting it correct"))}}
          db.set('noppp', 'no')
          collector.stop() 
          collector2.stop()
        }
      }); 
      collector.on('end', collected => {
          db.delete(`locking${bot.user.id}`)
          db.delete(`full${message.guild.id}`)
          db.set(`current${message.guild.id}`, king)
          if (db.fetch('noppp')){
            db.delete('noppp')
            return;
          }
          message.channel.send("**TIMES UP!** Nobody has guessed it. It was **" + chos3 + "**!")
      });
    }else{
      message.reply("A game is active right now!")
    }
  }
  
////////////////////////////////////////////////////////////////////////-Emotes-////////////////////////////////////////////////////////////////  
  if (message.content.toLowerCase().startsWith("?guessage")){
    if (db.fetch(`locking${bot.user.id}`)) return message.react('❌');
    db.set(`locking${bot.user.id}`, 'stop')
    var ting = ""
    message.guild.roles.filter(r => r.name.startsWith("[")).map(role => ting = ting + role.name + "\n")
    ting = ting.split("\n");ting.pop();var chosen = ting[Math.floor(Math.random() * (ting.length - 0 + 1)) + 0]
    var collector = new Discord.MessageCollector(message.channel,m => !(m.author.id === '3333'), {time: 15000 }); 
    var everyone = db.startsWith(`b_`)
    var checking = "hi"
    var rando = Math.floor(Math.random() * (everyone.length - 0 + 1)) + 0
    var age = everyone[rando].data.age
    var player = everyone[rando].ID.split("_").pop().substring(2)
    message.channel.send(new Discord.RichEmbed().setTitle("How old is " + player).setColor("#43C6DB").setDescription("First person to say his age wins 1 point")).then(msg => {
    collector.on("collect", message => {
     if (message.content > 0){}else return
      if (message.content == age){
          checking = "no";collector.stop();
          message.channel.send(new Discord.RichEmbed().setColor("#43C6DB").setDescription(message.author + " got the age correct. He was **" + age + "**"))
          db.add(`xp_${message.author.id}`, 1);var rol = ""
          message.member.roles.filter(r => r.name.startsWith("[")).map(role => rol = rol + role.name + "\n");
          rol = rol.split("\n");rol.pop()
          var ting = "";
          message.guild.roles.filter(r => r.name.startsWith("[")).filter(r => !rol.includes(r.name)).map(role => ting = ting + role.name + "\n")
          ting = ting.split("\n");ting.pop();var namez = ting[Math.floor(Math.random() * (ting.length - 0 + 1)) + 0];var chosen = message.guild.roles.find(role => role.name === namez)
          if (db.fetch(`xp_${message.author.id}`) == 15){db.set(`xp_${message.author.id}`, 0);if (rol.length < 18){ message.member.addRole(chosen);message.channel.send(new Discord.RichEmbed().setTitle("You earned a role!").setColor("#43C6DB").setDescription(message.author + " has got **" + namez.substring(5) + "** for getting it correct"))}}
      }
    });
      collector.on('end', collected => {
        db.delete(`locking${bot.user.id}`)
        if (checking == "hi") message.channel.send(new Discord.RichEmbed().setTitle("No one got it correct in time").setColor("#43C6DB").setDescription("The answer is **" + age + "**"))
      });
    });
  }
}}