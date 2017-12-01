class Event {
	constructor(name){
		this.name = name;
	}

	onData(data){
        return data;
    }
}

module.exports = Event;