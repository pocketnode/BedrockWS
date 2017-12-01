const Event = require("../Event");

class PlayerJoinEvent extends Event {
    constructor(){
        super("PlayerJoin");
    }
}

module.exports = PlayerJoinEvent;