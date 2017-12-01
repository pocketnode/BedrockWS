class Listener {
	constructor(){
		this.subscribedEvents = new Map();
	}

	subscribe(event, callback){
        event = new event();
		this.subscribedEvents.set(event.name, {onData: event.onData, callback: callback});
	}

	unsubscribe(eventName){
		return this.subscribedEvents.delete(eventName);
	}

    isListeningFor(eventName){
        return this.subscribedEvents.has(eventName);
    }

    getEvent(eventName){
        return this.isListeningFor(eventName) ? this.subscribedEvents.get(eventName) : false;
    }
}

module.exports = Listener;