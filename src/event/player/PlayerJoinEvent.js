const Event = require("../Event");

class PlayerJoinEvent extends Event {
    static name(){
        return "PlayerJoin";
    }

    handle(data){
        //this.data = data;
    }
}

module.exports = PlayerJoinEvent;