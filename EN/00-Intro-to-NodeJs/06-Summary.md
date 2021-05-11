[slide hideTitle]
# Summary


## In this lesson you learned:

- Event loop
  * **Order of execution** for called functions

- Modules
  - **Core**, **Local** and **Third-party** modules and their differences
  
  * **Installing** a third-party module
    
  * **Using modules** in a program

- Web servers

   * **What** a web server does

   * **Creating** a web server

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.write("This text will be sent to the client.");
    res.end();
  })
  .listen(3000);

console.log("Node.js server running on port 3000");
```

- Request and response wrappers

   * **wrapping** information about requests and responses in a **single object**

## In the next lesson, you will learn:

- Streams and utilities

- **Continuous streaming** of data

- Working with the **file system**

- **Debugging** a Node.js application

[/slide]
