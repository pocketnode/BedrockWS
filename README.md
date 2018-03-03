# BedrockWS

Starting up the first time:
```text
git clone https://github.com/eDroiid/BedrockWS.git
cd BedrockWS
npm i && node Server
```


Another way:
```text
npm i https://github.com/eDroiid/BedrockWS.git
node MyServer.js
```

`MyServer.js`:
```js
const MyServer = new (require("bedrockws"))();

MyServer.on("PlayerMessage", event => console.log(`${event.sender}: ${event.message}`));

MyServer.listen(80);
```

In Minecraft run `/connect localhost`. Send a message. Check your command line.