const Server = require("./src/Server");

const server = new Server();

server.on("ClientConnect", () => console.log("Client Connected!"));
server.on("ClientDisconnect", () => console.log("Client Disconnected!"));

server.on("PlayerMessage", event => {
	console.log(event.sender + ": " + event.message);
});

server.on("BlockBroken", (ev, socket) => {
    console.log("sum one broke a blockkk");
    socket.json({
        "body": {
            "input": {
                "message": "Y U BREAKING BLOCKSS??"
            },
            "origin": {
                "type": "player"
            },
            "name": "say",
            "version": 1,
            "overload": "default"
        },
        "header": {
            "requestId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "messagePurpose": "commandRequest",
            "version": 1,
            "messageType": "commandRequest"
        }
    });
});

server.listen(80);