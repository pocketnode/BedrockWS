const WebSocket = require("ws"),
	Listener = require("./event/Listener"),
	InvalidParameterError = require("./error/InvalidParameterError");

class Server {
	constructor(port, listener){
		if(!(listener instanceof Listener)) throw new InvalidParameterError("Invalid listener!");

		this.socket = new WebSocket.Server({port: port});

		this.socket.on("connection", function(socket) {
			socket.json = function(obj){return this.send(JSON.stringify(obj))};

			console.log("Client Connected!");

			for(let [eventName] of listener.subscribedEvents){
				socket.json({
				    body: {
				        eventName: eventName
				    },
				    header: {
				        requestId: "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxx",
				        messagePurpose: "subscribe",
				        version: 1,
				        messageType: "commandRequest"
				    }
				});
			}

		    socket.on("message", function(message) {
		    	let data = JSON.parse(message);

		    	switch(data.header.messagePurpose){
		    		case "event":
		    			if(listener.isListeningFor(data.body.eventName)){
		    				let event = listener.getEvent(data.body.eventName);
			    			event.callback(event.onData(data), socket); //remove later!!!!!!
		    			}
		    			break;

		    		case "error":
		    			console.log("ERROR:", data);
		    			break;

		    		default:
		    			console.log("Unhandled Message Purpose. Here is the data:", data);
		    			break;

		    	}
		    });

		    socket.on("close", function(){
		        console.log("Client Disconnected.");
		    });
		});

    	console.log("Server Created! Listening on port %s", port);
	}
}

module.exports = Server;