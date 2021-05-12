[slide hideTitle]
# Summary


# In this lesson you learned:

- **Pub/Sub** pattern is used to communicate messages.
- Node.js has various useful utility modules.
- Streams allow working with big data.

```js
const http = require('http');
http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => { body += data });
        req.on('end', () => {
            console.log(body);
        });
    }
}).listen(5000);
```

- Events simplify communication within a large application.

- The **fs module** gives you access to the file system.

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

## In the next lesson you will learn:

- Express​
- View Engines

[/slide]