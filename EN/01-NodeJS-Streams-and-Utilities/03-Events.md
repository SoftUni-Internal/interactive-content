# Events

[slide]

# Node.js Events

Node.js has a built-in module, called "Events", where you can create, fire, and listen for your own events.

To include the built-in Events module use the `require()` method. 

In addition, all event properties and methods are an instance of an EventEmitter object. 

To be able to access these properties and methods, create an EventEmitter object.

With the EventEmitter object we can assign handlers to our own events.

In this example we use the `eventEmitter.on()` method to assign the event handler to an event called "click".

Finally we fire the event using the `eventEmitter.emit()` method.

**Important thing to know is that Events are not Asychronous!**

```js
const events = require('events');
let eventEmitter = new events.EventEmitter();
eventEmitter.on('click', (a, b) => {
    console.log('A click has been detected!');
    console.log(a + ' ' + b);
});
eventEmitter.emit('click', 'Hello', 'world');
```

[/slide]