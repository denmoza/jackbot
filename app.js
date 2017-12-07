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
  var result = args.join(' ');
  
  
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
		"https://i.imgur.com/QZ7xkBj.jpg",
		"https://i.imgur.com/ITF5Tho.png",
		"https://i.imgur.com/Y0kCRBq.png",
		"https://i.imgur.com/MfgkAF4.jpg",
		"https://i.imgur.com/7KpBM3Z.jpg",
		"https://i.imgur.com/exxdp9U.png",
		"https://i.imgur.com/Gsowpsb.png",
		"https://i.imgur.com/tVYSvYH.png",
		"https://i.imgur.com/59rde5A.png",
		"https://i.imgur.com/8CXcChI.jpg",
		"https://i.imgur.com/UExG0Ao.png",
		"https://i.imgur.com/D99Ob4s.jpg",
		"https://i.imgur.com/JtQ2rju.png",
		"https://i.imgur.com/B1FdUYt.jpg",
		"https://i.imgur.com/MmlFVxl.jpg",
		"https://i.imgur.com/FAvXORY.jpg",
		"https://i.imgur.com/PlmPGd3.png",
		"https://i.imgur.com/TQS3wYr.png",
		"https://i.imgur.com/vH2qdqd.png",
		"https://i.imgur.com/3smtOMB.jpg",
		"https://i.imgur.com/T3wgnmH.png",

		];
		
		message.channel.send(jackReplies[Math.floor(Math.random() * jackReplies.length)]);
	}

	if(command === "vid") {
		const vids = [
		'https://www.youtube.com/watch?v=BOZngVYS04s',
		'https://www.youtube.com/watch?v=DUyMM90v3SA',
		'https://www.youtube.com/watch?v=lb0Ymam2Za0',
		'https://www.youtube.com/watch?v=DhA8HFBmWIg',
		'https://www.youtube.com/watch?v=65PL8wBiHok',
		'https://www.youtube.com/watch?v=TWpt-ze_cYU',
		'https://www.youtube.com/watch?v=5Ki0FDDfrzg',
		'https://www.youtube.com/watch?v=-kKPDYcwzJw',
		'https://www.youtube.com/watch?v=WalsQ8WW2VI',
		'https://www.youtube.com/watch?v=xtG1ZbstuAY',
		'https://www.youtube.com/watch?v=6jdCzTo4mN0',
		'https://www.youtube.com/watch?v=K53v3BQtE_k',
		'https://www.youtube.com/watch?v=G_lTlHVT9bw',
		'https://www.youtube.com/watch?v=IEaat6L1aPo',
		'https://www.youtube.com/watch?v=zVim45Y5kus',
		'https://www.youtube.com/watch?v=S5Esa9L4nvE',
		'https://www.youtube.com/watch?v=OY_cUBpDoiI',
		'https://www.youtube.com/watch?v=p5xu8cZPK38',
		'https://www.youtube.com/watch?v=uL7CpXY_S9o',
		'https://www.youtube.com/watch?v=sYgJx3UYoUU',
		'https://www.youtube.com/watch?v=GDIOfv643TM',
		'https://www.youtube.com/watch?v=TNhyrPaGFYQ',
		'https://www.youtube.com/watch?v=3c2tdAoNMPM',
		'https://www.youtube.com/watch?v=eLdqkQWUVFI',
		'https://www.youtube.com/watch?v=vzsqaGmwMys',
		'https://www.youtube.com/watch?v=r4RfsfD6ZhM',
		'https://www.youtube.com/watch?v=K-wIguaX97I',
		'https://www.youtube.com/watch?v=nCVerXHlBB8',
		'https://www.youtube.com/watch?v=AY281mLYooc',
		'https://www.youtube.com/watch?v=tehz6bAA-_s',
		'https://www.youtube.com/watch?v=M2C6PKn0t9E',
		'https://www.youtube.com/watch?v=9EDcg6JX2to',
		'https://www.youtube.com/watch?v=fBEk1LDPJUE',
		'https://www.youtube.com/watch?v=rV-2SMprSkE',
		'https://www.youtube.com/watch?v=nMBtri9bCGc',
		'https://www.youtube.com/watch?v=XvENerzoPKI',
		'https://www.youtube.com/watch?v=2e4y8VvHL3Y',
		'https://www.youtube.com/watch?v=6n-bHJUjh90',
		'https://www.youtube.com/watch?v=uDALTYjNi0I',
		'https://www.youtube.com/watch?v=ALHYoalTL7s',
		'https://www.youtube.com/watch?v=R-FlaYR2FyU',
		'https://www.youtube.com/watch?v=KFhZiJ9B9cc',
		'https://www.youtube.com/watch?v=mJ4Te3BgItM',
		'https://www.youtube.com/watch?v=WcRj70cieTI',
		'https://www.youtube.com/watch?v=bM_pAXi_pEQ',
		'https://www.youtube.com/watch?v=7rsABDI7BSk',
		'https://www.youtube.com/watch?v=S6Z_qstBdUs',
		'https://www.youtube.com/watch?v=6Z-4ZekQbHE',
		'https://www.youtube.com/watch?v=21BvScVx5j4',
		'https://www.youtube.com/watch?v=xcY3nR0Mvw4',
		'https://www.youtube.com/watch?v=3J43TouOsqM',
		'https://www.youtube.com/watch?v=BuP-LwXqdMg',
		'https://www.youtube.com/watch?v=iN8iA-rue2k',
		'https://www.youtube.com/watch?v=yjbG-a0uujw',
		'https://www.youtube.com/watch?v=KU_MN_W_aDg',
		'https://www.youtube.com/watch?v=2FN8IUgmaik',
		'https://www.youtube.com/watch?v=SqNLJuy28BU',
		'https://www.youtube.com/watch?v=lJFEltleR1I',
		'https://www.youtube.com/watch?v=V0nULJajOWc',
		'https://www.youtube.com/watch?v=bfvRQVu43Wg',
		'https://www.youtube.com/watch?v=1-1yoYtGtlQ',
		'https://www.youtube.com/watch?v=KidJIwJicnY',
		'https://www.youtube.com/watch?v=So1X4BN03jk',
		'https://www.youtube.com/watch?v=KH2NHCjt_X8',
		'https://www.youtube.com/watch?v=8QVKruPgl2g',
		'https://www.youtube.com/watch?v=JTHERk6v4hU',
		'https://www.youtube.com/watch?v=2PcwpLRF-Go',
		'https://www.youtube.com/watch?v=BK91fpy-5Eg',
		'https://www.youtube.com/watch?v=Vob0PDrr5es',
		'https://www.youtube.com/watch?v=efDfN5ntD-s',
		'https://www.youtube.com/watch?v=2JAizzyNFXI',
		'https://www.youtube.com/watch?v=5vTYaAU0nrw',
		'https://www.youtube.com/watch?v=JRKp9xLYwaA',
		'https://www.youtube.com/watch?v=tII-tBQODmw',
		'https://www.youtube.com/watch?v=LTrFH-puIcQ',
		'https://www.youtube.com/watch?v=FcQeeutP8yo',
		'https://www.youtube.com/watch?v=YcwGLjl2W_s',
		'https://www.youtube.com/watch?v=pKJD39Q26rQ',
		'https://www.youtube.com/watch?v=lGL9uvLmFKA',
		'https://www.youtube.com/watch?v=hefDYC8V1F4',
		'https://www.youtube.com/watch?v=ek73ebks39w',
		'https://www.youtube.com/watch?v=x3qz7iMYPQ8',
		'https://www.youtube.com/watch?v=7Aiyi77M_vI',
		'https://www.youtube.com/watch?v=6VBr09g30KQ',
		'https://www.youtube.com/watch?v=HoFHp-DVuYU',
		'https://www.youtube.com/watch?v=YQ_Js9s45b8',
		'https://www.youtube.com/watch?v=xa2wurIpicA',
		'https://www.youtube.com/watch?v=ZwopXpdwmyc',
		'https://www.youtube.com/watch?v=zNrwwx-HQjc',
		'https://www.youtube.com/watch?v=fh2nEWGv1t0',
		'https://www.youtube.com/watch?v=mV-KsgsZrpw',
		'https://www.youtube.com/watch?v=PJkIw5PdM0I',
		'https://www.youtube.com/watch?v=zpCWYpYhMuI',
		'https://www.youtube.com/watch?v=Z54xVuC9EJ0',
		'https://www.youtube.com/watch?v=twkGJY_JxLE',
		'https://www.youtube.com/watch?v=0o8vujoZfhM',
		'https://www.youtube.com/watch?v=S9z50ttWgyM',
		'https://www.youtube.com/watch?v=FTSVazGsi4s',
		'https://www.youtube.com/watch?v=FOAQ8AGmAAM',
		'https://www.youtube.com/watch?v=kYI6JuExGwI',
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

