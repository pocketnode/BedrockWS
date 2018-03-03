const UUID = require("uuid/v4");

class Message {
    constructor(body, header = null){
        this._body = body;
        if(header !== null){
            this._header = header;
        }else{
            let purpose = body.getPurpose();
            switch(purpose){
                case 
            }
        }
    }
}

module.exports = Message;