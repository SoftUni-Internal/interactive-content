# Streams and Events

[slide hideTitle]

# Stream

Node.js streams are objects that are used to handle reading and writing operations sequentially.

A stream is a collection of data that is not available at once and may come continuously in chunks.

There are many stream objects provided by Node.js, for instance, a request to an HTTP server is a stream instance.

These are the four main types of streams:

- **Readable** - can only **read** data

- **Writable** - can only **write** data

- **Duplex** - can **read** and **write** data

- **Transform** - a Duplex stream where the output is, in some way, related to the input

Like all Duplex streams, Transform streams implement both the Readable and Writable interfaces.

[/slide]

[slide hideTitle]

# Readable Stream

A readable stream is a type of stream that reads a file or data, often very large, and breaks it into small pieces (chunks). 

They allow working sequentially with the data without overloading the RAM.

Readable streams have the following **methods**:

- `.read()` - reads the data out of the internal buffer

It returns data as a buffer object if no encoding is specified or if the stream is working in object mode.

This method accepts a single parameter **size**, which specifies how many bytes the internal buffer will read.

If no data exist in the buffer, then **null** is returned.

```js
readable.read(size);
```

- `.pause()` - stops the flowing mode from emitting data events

Any data that becomes accessible will continue to exist in the internal buffer.

This method does not accept any parameters.

```js
readable.pause();
```

- `.resume()` - restores the data flow if the `.pause()` method has been used

This method does not accept any parameters.

```js
readable.resume();
```

## Events

All streams are instances of the "**EventEmitter**" class and emit events used to read and write data.

The most important events on a readable stream are:

- **Data** - emitted whenever the stream passes a chunk of data to the consumer

- **End** - emitted when there is no more data to be received from the stream

- **Error** - emitted when there is an error receiving data

## DEMO: Readable Stream Example

An HTTP request is an instance of the readable stream.

To create a server and make a request, you need to require the "HTTP" module from Node.js.

Then, use the `createServer()` method to create a server on your computer.

This is a function that receives two callbacks - "**req**" and "**res**".

The **req** callback stands for request, and **res** stands for the response.

The `req.on()` method binds an event to an object and adds a listener function for a specific event.

If the "data" event is emitted, we attach the data to the `body` variable.

If the "**end**" event is emitted, we end the data transfer.

The `.listen()` method creates a listener on the specified port or path.

```js
const http = require('http');
http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            body += data
        });
        req.on('end', () => {
            console.log(body);
        });
    }
}).listen(5000);
```

[/slide]

[slide hideTitle]

# Writable Stream

A writable stream is used for writing small pieces of data in files.

It has the following **methods**:

- `.write()` - writes data to the stream

The **chunk** argument is a buffer unless we configure the stream differently.

We need the encoding argument for different configurations, but usually, we can ignore it.

The callback is a function that we need to call after we are done processing the data chunk.

It signals whether the writing was successful or not. 

To signal a failure, call the callback with an error object.

```js
const { Writable } = require('stream');
const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});
process.stdin.pipe(outStream);
```

- `.end()` - this method ends the writing process

The chunk and encoding arguments are optional, which will permit one final new chunk of data to be written instantly before closing the stream.

The optional callback function is added as a listener for the **finish** event of the Writable stream.

```js
writable.end(chunk, encoding, callback);
```

## **Events**

The more common events in a writable stream are:

- **Drain** - emitted when a writable stream's internal buffer has been emptied

The cause of something like this can be reading a data source from one stream faster than it can be written to another resource.

- **Finish** - emitted after the `writable.end()` method has been called

- **Error** - emitted if there is an error in the writing process

The following code is an example of how to use the **finish** event:

```js
const stream = require('stream');
const writable = new stream.Writable({
    write: function(chunk, encoding, next) {
        console.log(chunk.toString());
        next();
    }
});
writable.write('Hello There');
writable.end();
writable.on('finish', function() {
    console.log("Write is completed.");
});
```

## DEMO: Writable Stream Example

An HTTP response is an instance of a writable stream.

Take a look at the following example.

First, we require the "**fs**" module from Node.js, then we create a server, which will be listening on **port 5000**.

We start reading from the `./bigfile.txt` file.

Then, we use the `write()` method inside the `src.on()` function to write the data.

Finally, we use the `end()` method to finish writing the data.

```js
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('./bigfile.txt');
    src.on('data', data => res.write(data));
    src.on('end', () => res.end());
});
server.listen(5000);
```

[/slide]

[slide hideTitle]

# Piping Streams

Piping happens when the input of a stream is provided by the output of another stream.

A typical example of using pipes is if you want to transfer data from one file to another.

Here is an example of how we can transfer data using pipes.

The `pipe()` function allows a readable stream to output directly to a writable stream.

We read from the `./bigfile.txt` file, and then we send the data to the **response** using the pipe command to transfer the data from `src` to `res`.

```js
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('./bigfile.txt');
    src.pipe(res);
});
server.listen(5000);
```

[/slide]

[slide hideTitle]

# Duplex and Transform Streams

A duplex stream is both readable and writable similar to a **Transform** stream. 

However, a Duplex stream is usually referring to a stream that has two independent streams embedded in it, one flowing out and one flowing in.

The transform stream is a special kind of duplex stream where the output is a transformed version of the input.

In the following example we read from the `index.js` file and then we compress it to `index.js.gz`.

We require the "**fs**" and "**zlib**" modules from Node.js, then we create a readable and writable stream.

Finally using the `.pipe()` method we transfer data from one file to another.

```js
const fs = require('fs');
const zlib = require('zlib');
let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.js.gz');
let gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);
```

[/slide]

[slide hideTitle]

# Node.js Events

The "Events" module is used to manage events easily in Node.js.

To include the built-in Events module, use the `require()` method. 

Besides, all event properties and methods are an instance of the EventEmitter class. 

To be able to access these properties and methods, we create an EventEmitter instance.

With that instance, we can assign handlers to our events.

In this example we use the `.on()` method to assign the event handler to an event called "**click**".

Finally, we fire the event using the `.emit()` method.

**An important thing to know is that Events are not Asynchronous!**

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
