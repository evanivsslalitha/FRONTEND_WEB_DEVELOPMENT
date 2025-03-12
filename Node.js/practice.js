// Importing modules with different variable names
const operatingSystem = require('os');
const fileSystem = require('fs');
const filePath = require('path');
const httpServer = require('http');
const eventsModule = require('events');

// OS Module
console.log('OS Type:', operatingSystem.type());
console.log('Free Memory:', operatingSystem.freemem());

// Path Module
const sampleFilePath = '/user/local/bin/script.js';
console.log('Directory:', filePath.dirname(sampleFilePath));
console.log('File Extension:', filePath.extname(sampleFilePath));

// File System Module
fileSystem.writeFileSync('sample.txt', 'Hello, this is a sample text file.');
console.log('File Created Successfully!');
console.log('Reading File Content:', fileSystem.readFileSync('sample.txt', 'utf8'));

// HTTP Module
const server = httpServer.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, Node.js Server is Running!');
});
server.listen(3000, () => console.log('Server is listening on port 3000'));

// Events and Event Emitter
const eventEmitter = new eventsModule.EventEmitter();
eventEmitter.on('customEvent', (message) => {
    console.log('Custom Event Triggered:', message);
});
eventEmitter.emit('customEvent', 'Event Handling in Node.js');