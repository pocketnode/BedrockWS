const WebSocket = require("ws");
const uuidv4 = require("uuid/v4");

const Event = require("./event/Event");
const EventPool = require("./event/EventPool");

const EventEmitter = require("events");

class Server extends EventEmitter {
	constructor(){
		super();
		this._socket = null;
	}

	listen(port){
		let server = this;

		this._socket = new WebSocket.Server({port});

		this._socket.on("connection", socket => {
			socket.json = obj => socket.send(JSON.stringify(obj));

			server.emit(EventPool.ClientConnect);

			server.eventNames().filter(e => EventPool[e] !== undefined).forEach(event => {
                let uuid = uuidv4();
                socket.json({
                    body: {
                        eventName: event
                    },
                    header: {
                        requestId: uuid,
                        messagePurpose: "subscribe",
                        version: 1,
                        messageType: "commandRequest"
                    }
                });
            });

		    socket.on("message", function(message) {
		    	let data = JSON.parse(message);

		    	switch(data.header.messagePurpose){
		    		case "error":
		    			console.log("Error recieved:", data);
		    			break;

		    		case "event":
		    			if(server.eventNames().indexOf(data.body.eventName) === -1) return;
		    			let event;
		    			if((event = EventPool[data.body.eventName]) !== undefined){
		    				event = new event();
		    				event._data = data;
		    				event.handle(data);
		    				server.emit(event.name(), event, socket);
			            }else{
			            	server.emit(data.body.eventName, data, socket);
			            }
			            break;
		    	}
		    });

		    socket.on("close", () => server.emit(EventPool.ClientDisconnect));
		});

		this._socket.jsonAll = function(obj){
			this.clients.forEach(client => {
		    	if(client.readyState === WebSocket.OPEN){
		      		client.json(obj);
		    	}
		  	});
		};

    	console.log("Server Created! Listening on port %s", port);
	}

	on(event, listener){
		if(typeof event !== "string"){
			event = event.name();
		}
		return super.on(event, listener);
	}

	once(event, listener){
		if(typeof event !== "string"){
			event = event.name();
		}
		return super.once(event, listener);
	}

	emit(event, ...args){
		if(typeof event !== "string"){
			event = event.name();
		}
		return super.emit.apply(this, [event].concat(args));
	}
}

module.exports = Server;