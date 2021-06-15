[slide hideTitle]
# Rezumat


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

- **modulul fs** vă oferă acces la sistemul de fișiere

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

## În lecția următoare veți învăța:

- Express
- Engine-uri de vizualizare

[/slide]
