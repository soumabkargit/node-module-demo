(function (exports, require, module, __filename, __dirname) {
    var url = 'http://mylogger.io/log';

    function log(message) {
        //send HTTp request
        console.log('Bonjour MR :' + message);
    }

    module.exports = log;
}
); 
