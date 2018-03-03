const Event = require("../Event");

class ClientConnectEvent extends Event {
    static name(){
        return "ClientConnect";
    }
}

module.exports = ClientConnectEvent;