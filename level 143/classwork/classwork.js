const EventEmitter = require('events');

const emitter = new EventEmitter();

function log(username) {
  console.log(`user: ${username}`);
}

emitter.on('log', log);

emitter.emit("log", "aleks");