const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
	client.on('ready', () => reqEvent('ready')(client));
	client.on('guildMemberAdd', () => reqEvent('guildMemberAdd') (client));
	client.on('guidMemberRemove', () => reqEvent('guildMemberRemove') (client));
	client.on('guildBanAdd', () => reqEvent('guildBanAdd') (client));
	client.on('guildBanRemove', () => reqEvent('guildBanRemove') (client));
	client.on('channelCreate', () => reqEvent('channelCreate') (client));
	client.on('channelDelete', () => reqEvent('channelDelete') (client));
	client.on('roleDelete', () => reqEvent('roleDelete') (client));
	client.on('messageDelete', () => reqEvent('messageDelete') (client));
};

// 	client.on('', () => reqEvent('') (client));