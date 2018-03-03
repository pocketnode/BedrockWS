const Server = require("./src/Server");

const server = new Server();

server.on("ClientConnect", () => console.log("Client Connected!"));
server.on("ClientDisconnect", () => console.log("Client Disconnected!"));

server.on("PlayerMessage", event => {
	console.log(event.sender + ": " + event.message);
});

server.listen(80);