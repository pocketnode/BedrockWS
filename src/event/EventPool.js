module.exports = {
    "Server": {
        "ClientConnect": require("./server/ClientConnectEvent"),
        "ClientDisconnect": require("./server/ClientDisconnectEvent")
    },

    "Client": {
        "BlockBroken": require("./block/BlockBrokenEvent"),
        "BlockPlaced": require("./block/BlockPlacedEvent"),

        "PlayerJoin": require("./player/PlayerJoinEvent"),
        "PlayerLeave": require("./player/PlayerLeaveEvent"),
        "PlayerMessage": require("./player/PlayerMessageEvent")
    }
};