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
		'https://www.youtube.com/watch?v=6y7thuMUwrY',
		'https://www.youtube.com/watch?v=ggylY8E2L_A',
		'https://www.youtube.com/watch?v=Bj4K9sZ5a5Y',
		'https://www.youtube.com/watch?v=NtmIawYBSdk',
		'https://www.youtube.com/watch?v=MO0zP-SB5hk',
		'https://www.youtube.com/watch?v=BT4WDib5_do',
		'https://www.youtube.com/watch?v=XVuNGKnsqUA',
		'https://www.youtube.com/watch?v=9maz-P4BEPc',
		'https://www.youtube.com/watch?v=w919DSzuSdE',
		'https://www.youtube.com/watch?v=--4EqGOaEgU',
		'https://www.youtube.com/watch?v=oLZ0nui_tI0',
		'https://www.youtube.com/watch?v=ZWL_vluRrRU',
		'https://www.youtube.com/watch?v=6aOKl5Ra01Q',
		'https://www.youtube.com/watch?v=zmNPfS3k64g',
		'https://www.youtube.com/watch?v=wZ5Z4gsWqls',
		'https://www.youtube.com/watch?v=52vvEWpce8M',
		'https://www.youtube.com/watch?v=TsfqBKpPUko',
		'https://www.youtube.com/watch?v=sT_Fn-ge5ZM',
		'https://www.youtube.com/watch?v=AA8Y2xbFPho',
		'https://www.youtube.com/watch?v=REQHnW0MFEw',
		'https://www.youtube.com/watch?v=JxHM5fepeNw',
		'https://www.youtube.com/watch?v=C7fS3RsFuUE',
		'https://www.youtube.com/watch?v=EPsrpn9X5hg',
		'https://www.youtube.com/watch?v=W38GAttJn_c',
		'https://www.youtube.com/watch?v=kGHBo_QWVxU',
		'https://www.youtube.com/watch?v=9tk_9zhWm14',
		'https://www.youtube.com/watch?v=kjjjv0X4_gQ',
		'https://www.youtube.com/watch?v=9QB_canzluY',
		'https://www.youtube.com/watch?v=gjJtt0PcogU',
		'https://www.youtube.com/watch?v=j2MNU2I9ZH4',
		'https://www.youtube.com/watch?v=x8Djk4r0fFM',
		'https://www.youtube.com/watch?v=0DCCgiU9aNY',
		'https://www.youtube.com/watch?v=zZBy87IGcPw',
		'https://www.youtube.com/watch?v=0ZdGs_ss2QQ',
		'https://www.youtube.com/watch?v=nbG1E98dCYA',
		'https://www.youtube.com/watch?v=9ZwGAOE-DXQ',
		'https://www.youtube.com/watch?v=6LPaS7wYK0k',
		'https://www.youtube.com/watch?v=0HPLwM4aVJw',
		'https://www.youtube.com/watch?v=mB3OhZtwaBo',
		'https://www.youtube.com/watch?v=2J5us5gukkc',
		'https://www.youtube.com/watch?v=RcNIyvNKceI',
		'https://www.youtube.com/watch?v=sA4lREmVTUQ',
		'https://www.youtube.com/watch?v=u5T_2VDZMxo',
		'https://www.youtube.com/watch?v=D9D2iMHP4og',
		'https://www.youtube.com/watch?v=FInX7ihu-do',
		'https://www.youtube.com/watch?v=zq0cSP_74fM',
		'https://www.youtube.com/watch?v=TArc0EwXxGU',
		'https://www.youtube.com/watch?v=JsdKgsbPRjo',
		'https://www.youtube.com/watch?v=CgCeNDAVjho',
		'https://www.youtube.com/watch?v=lnfmId5nsjk',
		'https://www.youtube.com/watch?v=tc06dpkGXbg',
		'https://www.youtube.com/watch?v=hX3QwFdADF8',
		'https://www.youtube.com/watch?v=X9kl4dkX29g',
		'https://www.youtube.com/watch?v=cSsHXIvJy_w',
		'https://www.youtube.com/watch?v=9Y-kTvWH488',
		'https://www.youtube.com/watch?v=3aFSvfqUPV0',
		'https://www.youtube.com/watch?v=n4LdscIDxE4',
		'https://www.youtube.com/watch?v=1LRNkPQY3lU',
		'https://www.youtube.com/watch?v=WpeoFxtHDK4',
		'https://www.youtube.com/watch?v=5C4lFTcvf7Y',
		'https://www.youtube.com/watch?v=HUdruEid5_0',
		'https://www.youtube.com/watch?v=z9zlP5mPzhM',
		'https://www.youtube.com/watch?v=6UCKWhVvGy4',
		'https://www.youtube.com/watch?v=0Lnk6OCAaE4',
		'https://www.youtube.com/watch?v=F8r_xdpHmP8',
		'https://www.youtube.com/watch?v=0PfLXNSndlY',
		'https://www.youtube.com/watch?v=UDujx8f_XvM',
		'https://www.youtube.com/watch?v=8quKYvYiP38',
		'https://www.youtube.com/watch?v=zXE6V2O9YxA',
		'https://www.youtube.com/watch?v=krY100x6iqo',
		'https://www.youtube.com/watch?v=gAm0cjBfWSw',
		'https://www.youtube.com/watch?v=Kunpsxzot4c',
		'https://www.youtube.com/watch?v=u4bXfKe8_2I',
		'https://www.youtube.com/watch?v=3I55B_JtXt0',
		'https://www.youtube.com/watch?v=t9ib6DqAOvk',
		'https://www.youtube.com/watch?v=K4Oa7yCs2GA',
		'https://www.youtube.com/watch?v=1Yjg7tJADX8',
		'https://www.youtube.com/watch?v=-CBaupAHdXg',
		'https://www.youtube.com/watch?v=EPOWiGp0r0s',
		'https://www.youtube.com/watch?v=KVHUI4T5jx8',
		'https://www.youtube.com/watch?v=JRaD7CKXHb4',
		'https://www.youtube.com/watch?v=C-KHDXtYFdg',
		'https://www.youtube.com/watch?v=8CPuArqCRF4',
		'https://www.youtube.com/watch?v=K68xkIqD4Jw',
		'https://www.youtube.com/watch?v=GhfA2P0SqTg',
		'https://www.youtube.com/watch?v=un_ZUY_1Vuo',
		'https://www.youtube.com/watch?v=91G7B5X6LHs',
		'https://www.youtube.com/watch?v=hehuUBBaYgk',
		'https://www.youtube.com/watch?v=9bEKQ9JIUU4',
		'https://www.youtube.com/watch?v=fdrOW-CSR9c',
		'https://www.youtube.com/watch?v=Mmig57jwS8o',
		'https://www.youtube.com/watch?v=z8Sz9fKXin8',
		'https://www.youtube.com/watch?v=ZMUcaI7ouz4',
		'https://www.youtube.com/watch?v=KKvQg6frGOU',
		'https://www.youtube.com/watch?v=iHrn8Y9ozLc',
		'https://www.youtube.com/watch?v=X30BS3x-E_w',
		'https://www.youtube.com/watch?v=SCfA1hbowcw',
		'https://www.youtube.com/watch?v=WNqOGFqtUbs',
		'https://www.youtube.com/watch?v=GcdbH_5qd04',
		'https://www.youtube.com/watch?v=_u3fN8nveRY',
		'https://www.youtube.com/watch?v=mK1CHUPb804',
		'https://www.youtube.com/watch?v=YqKBrBpx9RQ',
		'https://www.youtube.com/watch?v=_Ogvn3KG468',
		'https://www.youtube.com/watch?v=-n4b7yHGjKE',
		'https://www.youtube.com/watch?v=dYsPBZcGZqE',
		'https://www.youtube.com/watch?v=VIM_vQa8yr8',
		'https://www.youtube.com/watch?v=nqx3wBAaYD0',
		'https://www.youtube.com/watch?v=veC9Mr8AU4M',
		'https://www.youtube.com/watch?v=7PXYF3JOksk',
		'https://www.youtube.com/watch?v=j3AYMXGOVzs',
		'https://www.youtube.com/watch?v=YUVecGaFZgY',
		'https://www.youtube.com/watch?v=2CvrfOczLRY',
		'https://www.youtube.com/watch?v=xjYlZyxD05g',
		'https://www.youtube.com/watch?v=98xzk5H4MsY',
		'https://www.youtube.com/watch?v=sRioUu66B8o',
		'https://www.youtube.com/watch?v=ygCx-DCZo4E',
		'https://www.youtube.com/watch?v=gu41DR7TiyU',
		'https://www.youtube.com/watch?v=ActNuTuC_-w',
		'https://www.youtube.com/watch?v=Zob8etzAqNo',
		'https://www.youtube.com/watch?v=02iq6JZg9cA',
		'https://www.youtube.com/watch?v=Ujx5-Jg47rY',
		'https://www.youtube.com/watch?v=Hl-rANTDhfY',
		'https://www.youtube.com/watch?v=-SFzHgPtZSQ',
		'https://www.youtube.com/watch?v=n3Ol8aYOpSI',
		'https://www.youtube.com/watch?v=G0pWEy7ALHQ',
		'https://www.youtube.com/watch?v=OPJFSeCxGBY',
		'https://www.youtube.com/watch?v=0i3ZyZGCjP0',
		'https://www.youtube.com/watch?v=d1c9mmH0nbk',
		'https://www.youtube.com/watch?v=kev_Vx5Cs5c',
		'https://www.youtube.com/watch?v=uRLUC2EpmnY',
		'https://www.youtube.com/watch?v=M_pMahfCGxo',
		'https://www.youtube.com/watch?v=TQ1DKsr9tgU',
		'https://www.youtube.com/watch?v=8S9L10RNI0I',
		'https://www.youtube.com/watch?v=qFwUlP56dQI',
		'https://www.youtube.com/watch?v=65bsdfdpmwI',
		'https://www.youtube.com/watch?v=xoM2aocM8hk',
		'https://www.youtube.com/watch?v=4GpB-4rcasU',
		'https://www.youtube.com/watch?v=3h1_Ww3bw28',
		'https://www.youtube.com/watch?v=hJZxJvlhL_A',
		'https://www.youtube.com/watch?v=ua8hIslIpJ8',
		'https://www.youtube.com/watch?v=4ZcIo_jzfU8',
		'https://www.youtube.com/watch?v=8QCoZHsLUGI',
		'https://www.youtube.com/watch?v=CnLZ-M75m-c',
		'https://www.youtube.com/watch?v=Q05n0uRDXNY',
		'https://www.youtube.com/watch?v=SNu6pX8GZWQ',
		'https://www.youtube.com/watch?v=2_bJs-LJaUo',
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

	if(command === "setstatus") {
		if(!message.member.roles.some(r=>["dec-Event", "klonadmin"].includes(r.name)) ) 
			return message.reply(":x: You must be an admin or Toni to use this command.");
		
		if (!result) {
			result = 'dnd';
		}
		message.channel.send(':ok_hand: Status changed. *Due to discord\'s limitations, statuses can sometimes take a while to update.*');
		client.user.setStatus(result);
	}
});
		


client.login(token);

