const Event = require("../Event");

class BlockBrokenEvent extends Event {
    static name(){
        return "BlockBroken";
    }

    handle(data){
        this.id = data.body.properties.Type;
        this.damage = data.body.properties.AuxType;
    }
}

module.exports = BlockBrokenEvent;