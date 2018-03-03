class Event {
    static name(){
        return "";
    }

    name(){
        return this.constructor.name();
    }

	constructor(){
        this._data = null;
	}

    getData(){
        return this._data;
    }

	handle(data){
        this.data = data;
    }
}

module.exports = Event;