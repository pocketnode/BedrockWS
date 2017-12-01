const Event = require("../Event");

class BlockBrokenEvent extends Event {
    constructor(){
        super("BlockBroken");
    }

    onData(data){
        let BlockBroken = {};
        BlockBroken.id = data.body.properties.Type;
        BlockBroken.damage = data.body.properties.AuxType;
        return BlockBroken;
    }
}

module.exports = BlockBrokenEvent;