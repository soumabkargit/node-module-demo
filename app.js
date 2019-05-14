function sayHello(name) {
    console.log('Hello '+name);
}
sayHello('Abdoul-Karim');

//path
 const path = require('path');
 var pathObj = path.parse(__filename);
 console.log(pathObj);

 //operating system
 const os = require('os');
 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 function sayInfoOs(){
     console.log('Hello '+totalMemory);
     console.log('Hello '+freeMemory);
 }
sayInfoOs();
// directory
 const fs = require('fs');
 //const files = fs.readdirSync('./');
 //console.log(files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) =>{
    console.log('Listener called ...', arg);
});
logger.log('message');

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5,6,7,8,9]));
        res.end();
    }
    }

);
/*
server.on('connection', (socket)=>{
    console.log('New connection ...');
});*/
server.listen(3000);
console.log('Listening on port 3000 ...') ;
