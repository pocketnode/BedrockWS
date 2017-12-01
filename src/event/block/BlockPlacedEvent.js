const Event = require("../Event");

class BlockPlacedEvent extends Event {
    constructor(){
        super("BlockPlaced");
    }

    onData(data){
        let BlockPlaced = {};
        BlockPlaced.id = data.body.properties.Type;
        BlockPlaced.damage = data.body.properties.AuxType;
        return BlockPlaced;
    }
}

module.exports = BlockPlacedEvent;