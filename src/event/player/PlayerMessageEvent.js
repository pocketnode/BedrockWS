const Event = require("../Event");

class PlayerMessageEvent extends Event {
    constructor(){
        super("PlayerMessage");
    }

    onData(data){
        let PlayerMessage = {};

        PlayerMessage.sender = data.body.properties.Sender;
        PlayerMessage.message = data.body.properties.Message;
        
        return PlayerMessage;
    }
}

module.exports = PlayerMessageEvent;