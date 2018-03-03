class Dispatcher {
	constructor(server){
        this.server = server;
		this.awaitingCommands = new Map();

        server.socket.clients.forEach(socket => {
            socket.on("message", message => {
                message = JSON.parse(message);

                if(data.header.messagePurpose === "")
            });
        });
	}

	run(recipients, command, callback){
        if(recipients === "all"){
            command = command.toObject();
            this.server.jsonAll(command);
            this.awaitingCommands.set(command.header.requestId, callback);
            console.log("Awaiting Commands:", this.awaitingCommands);
        }else{

        }
	}
}

module.exports = Dispatcher;