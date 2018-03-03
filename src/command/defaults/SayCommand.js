const Command = require("../Command");

class SayCommand extends Command {
    constructor(message){
        super("say");
        this.input.message = message;
    }
}

module.exports = SayCommand;