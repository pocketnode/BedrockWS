const uuidv4 = require("uuid/v4");

class Command {
	constructor(name){
		this.name = name;
        this.input = {};
        this.origin = "player";
        this.overload = "default";
	}

    toSendable(){
        return {
            body: {
                input: this.input,
                origin: {
                    type: this.origin
                },
                name: this.name,
                version: 1,
                overload: this.overload;
            },
            header: {
                requestId: uuidv4(),
                messagePurpose: "commandRequest",
                version: 1,
                messageType: "commandRequest"
            }
        };
    }
}

module.exports = Command;