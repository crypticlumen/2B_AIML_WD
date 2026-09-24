const EventEmitter = require('events');
const { isNumberObject } = require('util/types');

const ud = new EventEmitter();

ud.on(`greet`, (name) => {
    console.log(`Hello, ${name}!`);
})

ud.on(`exit`, (num) => {
    console.log(`Goodbye! ${num}`);
})
ud.emit(`greet`, `Alice`);
ud.emit(`exit`,112);


