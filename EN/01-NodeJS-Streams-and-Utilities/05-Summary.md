[slide hideTitle]
# Summary
[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/NodeJS-Streams-And-Utilities-29-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# In this lesson you learned:

- The **Pub/Sub** pattern is used to communicate messages
- Different utility modules in Node.js
- Streams allow working with big data sequentially

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

- Events simplify communication within a large application

- The **fs module** gives you access to the file system

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

## In the next lesson you will learn:

- Express
- View Engines

[/slide]
