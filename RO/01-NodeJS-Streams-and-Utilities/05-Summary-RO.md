[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-29-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# În această lecție am învățat:

- Șablonul **Pub/Sub** este folosit pentru a comunica mesaje
- Diferite module utilitare în Node.js
- Fluxurile permit lucrul cu date mari secvențial

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

- Evenimentele simplifică comunicarea în cadrul unei aplicații mari

- **Modulul fs** vă oferă acces la sistemul de fișiere

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

## În lecția următoare veți învăța:

- Express
- Engine-uri de vizualizare

[/slide]
