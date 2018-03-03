const Event = require("../Event");

class PlayerMessageEvent extends Event {
    static name(){
        return "PlayerMessage";
    }

    handle(data){
        this.sender = data.body.properties.Sender;
        this.message = data.body.properties.Message;
        this.type = data.body.properties.MessageType;
        this.minecraft = {
            version: data.body.properties.Build,
            platform: data.body.properties.Plat,
            gamemode: data.body.properties.PlayerGameMode
        }
    }
}

module.exports = PlayerMessageEvent;