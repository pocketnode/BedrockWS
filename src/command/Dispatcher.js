class Dispatcher {
	constructor(){
		this.awaiting_commands = {};
	}

	run(command, callback){
		this.awaiting_commands[command.name] = {args: command.args, onresponse: command.onresponse, callback: callback};
	}

	unsubscribe(event){
		delete this.subscribed_events[event.name];
	}
}

module.exports = Listener;