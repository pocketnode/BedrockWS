const Server = require("./src/Server");
const Listener = require("./src/event/Listener");
const PlayerMessageEvent = require("./src/event/player/PlayerMessageEvent");

const listener = new Listener();
listener.subscribe(PlayerMessageEvent, function(data){
	console.log(data.sender + ": " + data.message);
});

new Server(80, listener);