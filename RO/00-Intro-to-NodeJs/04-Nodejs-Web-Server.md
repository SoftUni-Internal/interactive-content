# Node.js Web Server

[slide hideTitle]

# Web Servers

Although they share the same word, **web servers are quite different from physical servers**.

Physical servers are those **big pieces of hardware**, controlled by the operating system and stored in large, cold places.

Web servers, on the other hand, are **just software, which operates with web requests** by using the operating system.

Here is an image that represents how web servers work:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-3.png" /]

As you can see from the diagram, the **client** sends a request to the **server**, which it then **handles**.

To do so, the server connects to the **database**, where all information is being stored.

Depending on the database response, it sends the appropriate status **code**, along with **data** (usually in the form of **JSON**), when applicable.

[/slide]

[slide hideTitle]

# Node.js Web Server

Node.js allows for the **simple** and **easy** creation of a web server.

The whole process can be done with a few lines of code:

```js
const http = require("http");

http.createServer((req, res) => {
    res.write("This text will be sent to the client.");
    res.end();
}).listen(3000);

console.log("Node.js server running on port 3000");
```

The code from above is the **bare minimum** to start a web server using Node.js.

The `createServer` method creates an HTTP Server.

This server is an object with multiple methods, such as:

- `listen(port)` - used to make the server listen to a specific **port** locally
- `close()` - closes the connection, preventing the server from accepting new connections
- `setTimeout()` - sets the timeout value of the server
  * has a default value of **2000** (2 minutes)

The server is now ready to **handle incoming requests** and **send data to the client**.

[/slide]

[slide hideTitle]
# Creating a Web Server with Node.js: Demo

A live demonstration video will be added later.

[/slide]