const Event = require("../Event");

class PlayerLeaveEvent extends Event {
    constructor(){
        super("PlayerLeave");
    }
}

module.exports = PlayerLeaveEvent;