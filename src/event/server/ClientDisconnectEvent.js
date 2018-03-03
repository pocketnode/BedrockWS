const Event = require("../Event");

class ClientDisconnectEvent extends Event {
    static name(){
        return "ClientDisconnect";
    }
}

module.exports = ClientDisconnectEvent;