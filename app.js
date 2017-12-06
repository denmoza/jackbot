const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const settings = require("./settings.json");

client.on('ready',() => {
	
	console.log('[jackbot]: I\'m online!');
	client.user.setPresence({ game: { name: ('http://jacksfilms.me/'), type: 0 } });
	client.user.setStatus('dnd');	
});

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.indexOf(settings.prefix) !== 0) return;

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
	if(command === "ping") {
		const m = await message.channel.send("Ping?");
		m.edit(`Pong! Latency is **${m.createdTimestamp - message.createdTimestamp}ms**. API Latency is **${Math.round(client.ping)}ms**`);
	}
	
	if(command === "hug") {
		const hugReplies = [
		'Hugs $USER :hugging:',
		'Gives a big hug to $USER :hugging:',
		];
		let user;
		if (message.mentions.users.first()) {
		user = message.mentions.users.first();
		} else {
		user = message.author;
		}
		
		message.channel.send(hugReplies[Math.floor(Math.random() * hugReplies.length)].replace('$USER', user));
	}

	if(command === "jack") {
		const jackReplies = [
		'https://i.imgur.com/UIbc5aN.png',
		'https://i.imgur.com/gUaq2zP.png',
		'https://i.imgur.com/LhdFDQm.png',
		'https://i.imgur.com/hxbyF5f.png',
		'https://i.imgur.com/lmJ08hs.png',
		'https://i.imgur.com/yocL8to.png',
		'https://i.imgur.com/LVeC4hP.png',
		'https://i.imgur.com/0F35VWs.png',
		"https://image.ibb.co/kiOUAG/231914808051212.png",
		"https://image.ibb.co/hWSpAG/artworks_000140364814_xryhdl_t500x500.jpg",
		"https://image.ibb.co/nwB5jb/BGUs_Jzd_CMAAJs2h.jpg",
		"https://image.ibb.co/iUcNVG/CV6_Fqf_WWUAAUPxr.jpg",
		"https://image.ibb.co/fmP2VG/e101e818624a0709c1347073617842d4_456x430x1.png",
		"https://image.ibb.co/fZEQjb/hqdefault.jpg",
		"https://image.ibb.co/crFnxw/https_images_genius_com_d61735671174933211b16028a493aeea_345x345x1.png",
		"https://image.ibb.co/nm9Ecw/maxresdefault.jpg",
		"https://image.ibb.co/h1Rucw/Questions.jpg",

		];
		
		message.channel.send(jackReplies[Math.floor(Math.random() * jackReplies.length)]);
	}

	if(command === "vid") {
		const vids = [
		'https://www.youtube.com/watch?v=BOZngVYS04s',
		'https://www.youtube.com/watch?v=ksDKoYxhS8E',
		'https://www.youtube.com/watch?v=lb0Ymam2Za0',
		'https://www.youtube.com/watch?v=3LK3AlnUvYM',
		'https://www.youtube.com/watch?v=c3CDsoRDdRA',
		'https://www.youtube.com/watch?v=xtG1ZbstuAY',
		'https://www.youtube.com/watch?v=ketCUtFpzNo',
		'https://www.youtube.com/watch?v=F5D1x-OtGME',
		'https://www.youtube.com/watch?v=p5xu8cZPK38',
		'https://www.youtube.com/watch?v=Mi-1_xFUONk',
		'https://www.youtube.com/watch?v=o3XUbjpsadg',
		'https://www.youtube.com/watch?v=tehz6bAA-_s',
		'https://www.youtube.com/watch?v=9EDcg6JX2to',
		'https://www.youtube.com/watch?v=UWn8zsYtbtY',
		'https://www.youtube.com/watch?v=D1-Lnk99G1U',		
		'https://www.youtube.com/watch?v=4ENP3qiH33w',
		'https://www.youtube.com/watch?v=j1h6XsIIQvc',
		'https://www.youtube.com/watch?v=ouXfI8OkZa8',
		'https://www.youtube.com/watch?v=hboNl_epgzA',
		'https://www.youtube.com/watch?v=jE4RoVwaQMY',
		'https://www.youtube.com/watch?v=SWS_10lEMuI',
		];
		
		message.channel.send(vids[Math.floor(Math.random() * vids.length)]);
	}
	
	if(command === "commands") {
		const embed = new Discord.RichEmbed()
		.setTitle("COMMANDS")
		.setColor(0x00AE86)
		.setDescription("!commands, !hug, !jack, !vid, !setgame(Admins only)")
		message.channel.send({embed});
	}	
	
	if(command === "setgame") {
		if(!message.member.roles.some(r=>["dec-Event", "klonadmin"].includes(r.name)) ) 
			return message.reply(":x: You must be an admin or Toni to use this command.");
	
		if (!result) {
			result = null;
		}
		message.channel.send(':ok_hand: Game changed.');
		client.user.setPresence({ game: { name: (result), type: 0 } });	
	}	
});
		


client.login(token);

