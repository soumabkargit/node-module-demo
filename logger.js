const EventEmitter = require('events');

    var url = 'http://mylogger.io/log';

    class Logger extends EventEmitter {
        log(message){
            //send HTTp request
            console.log('Bonjour MR :' + message);
            //  Raise an event
            this.emit('messageLogged',{id: 1, url: 'http://'});
        }
    }

    module.exports = Logger;


