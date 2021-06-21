# Introducere în Express.js

[slide hideTitle]

# Introducere

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-3-4-introduction-to-express-js-and-simple-express-app-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Express.js** este un **framework** Node.js, conceput special pentru construirea **aplicațiilor web**. 

Este **cel mai popular** framework de server pentru **Node.js** și este open-source și cross-platform.

Biblioteca standard pentru Node.js include un set de I/O asincrone primitive, iar majoritatea bibliotecilor sunt scrise urmând paradigma non-blocantă.

Express.js nu face excepție și un server care rulează cu un șablon expres ar putea gestiona mii de cereri simultane.

Pentru a utiliza **Express.js** trebuie să instalăm biblioteca Express.js executând comanda `npm install express`.

Instalarea bibliotecii:

```js
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));
```

Pentru a putea utiliza biblioteca **Express.js** ar trebui să tastați `const express = require ('express')`, apoi ar trebui să afișăm funcția `const app = express();` astfel încât să putem genera serverul nostru.

Apoi creăm portul pe care serverul va accepta cererile `const port = 3000;`.

După aceea, realizăm un coordonator, care va fi responsabil pentru solicitările de tip `GET` :

```js
app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Express.js!');
})
```

Când primim o solicitare `GET`, acest coordonator va fi apelat și va returna răspunsul corespunzător.

În acest caz `200` și `Welcome to Express.js!`, ceea ce înseamnă că solicitarea noastră a fost procesată.

În cele din urmă, apelăm `app.listen`, trecând portul pe care o va asculta aplicația noastră și o funcție de apel invers `Express running on port: $ {port} ...`.

[/slide]