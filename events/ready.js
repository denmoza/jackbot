module.exports = client => {
	
	console.log('[Starting Message]: I\'m online!');
	client.user.setPresence({ game: { name: ('Exodus Network'), type: 0 } });
	client.user.setStatus('online');	
}