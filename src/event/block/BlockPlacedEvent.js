const Event = require("../Event");

class BlockPlacedEvent extends Event {
    static name(){
        return "BlockPlaced";
    }

    handle(data){
        this.id = data.body.properties.Type;
        this.damage = data.body.properties.AuxType;
    }
}

module.exports = BlockPlacedEvent;