const Event = require("../Event");

class PlayerLeaveEvent extends Event {
    static name(){
        return "PlayerLeave";
    }
}

module.exports = PlayerLeaveEvent;