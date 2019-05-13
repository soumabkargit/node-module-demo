function sayHello(name) {
    console.log('Hello '+name);
}
sayHello('Abdoul-Karim');
const logger = require('./logger');

logger('Kotébaor');
 const path = require('path');
 var pathObj = path.parse(__filename);
 console.log(pathObj);

 const os = require('os');
 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 function sayInfoOs(){
     console.log('Hello '+totalMemory);
     console.log('Hello '+totalMemory);
 }