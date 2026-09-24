const EventEmitter = require('events');

const ud = new EventEmitter();

ud.on(`greet`, (name) => {
    console.log(`Hello, ${name}!`);
})

ud.on(`exit`, (num) => {
    console.log(`Goodbye! ${num}`);
})
ud.emit(`greet`, `Lewis Hamilton`);
ud.emit(`exit`,47);


