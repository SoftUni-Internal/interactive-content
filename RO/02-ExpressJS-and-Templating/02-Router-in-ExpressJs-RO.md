# Rutarea în Express.js

[slide hideTitle]
# Rutarea

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-5-6-router-in-express-js-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rutarea se referă la modul în care o aplicație tratează cererile către căi specifice.

Rutarea în Express.js se face utilizând funcția `app.METHOD()`, care primește ca parametru **path** și o funcție de apel invers **handler**.


Sintaxa este `app.METHOD(PATH, HANDLER)`.

În acest caz:
- `app` - o instanță a express

- `METHOD` - o metodă de solicitare HTTP (cu litere mici)

- `PATH` - o cale din server

- `HANDLER` - funcția de executare a traseului este potrivită

Iată un exemplu:

```js
app.get('/', function(req, res) {
    res.send('Hello World!')
})
```

or 

```js
app.get('/user', (req, res) => {
    res.send('The user management page has been requested')
})
```

[/slide]

[slide hideTitle]
# Metode Route

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-7-8-route-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În acest exemplu, există cereri diferite, precum și calea lor.

Tipul de solicitări este `GET`, `POST`, și `PUT`, și fiecare dintre solicitări are propria sa **rută**.

```js
// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
// PUT method route
app.put('/', (req, res) => {
    res.send('PUT request to the homepage')
})
```

De asemenea, puteți utiliza `app.all()` pentru a gestiona toate tipurile de metode HTTP.

Este important de reținut că Express.js va acorda prioritate rutelor în funcție de cât de specifice sunt și, de asemenea, în funcție de ordinea în care apar în cod.

Aruncați o privire la exemplul de mai jos:


```js
// Un wildcard ca rută înseamnă că se va potrivi cu orice rută
app.get('*', (req, res) => {
    res.send('Page not found!')
})
// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
```

Ruta wildcard se va potrivi cu orice rută introdusă și, deoarece se află în poziția superioară, celelalte rute nu vor fi niciodată atinse.

Abordarea corectă este de a păstra întotdeauna rutele mai puțin specifice sub cele mai specifice, iar ruta wildcard este un bun exemplu de rută care ar trebui să fie ultima care apare în cod.

## Metode de Rută cu Funcții de Apel Invers Multiple

Metodele de rutare pot avea mai multe funcții de apel invers.

Puteți utiliza `next()` în corpul funcției pentru a trece controlul la următorul apel invers.

```js
app.all('/about', (req, res, next) => {
    console.log('Middleware execution..')
    next()
}, (req, res) => {
    res.send('Show about page.')
})
```
În acest exemplu, orice tip de cerere către ruta '/about' apelează funcția cu care imprimă "**Middleware execution..**" pe consolă.

Apoi, datorită metodei `next()` returnăm un răspuns cu o altă funcție care trimite un răspuns care "afișează" pagina about. 

Acest lucru este util mai ales dacă doriți să executați o funcție (un middleware) înainte de a gestiona cererea.

[/slide]

[slide hideTitle]
# Router Paths

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-9-router-paths-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rutele nu sunt strict definite.

Putem crea o cale folosind regex.

În acest exemplu, executăm această funcție pe toate rutele care se termină cu `fly`.

```js
app.get('/ab*cd', (req, res) => {
    res.send('Match abcd or abANYTEXTcd')
})
app.get(/.*fly$/, (req, res) => {
    res.send('Matches words like butterfly, dragonfly')
})
app.get('*', (req, res) => {
    res.send('Matches everything')
})
```


[/slide]

[slide hideTitle]
# Extragerea Parametrilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-10-extracting-parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Căile pot conține parametri.

De exemplu, este posibil să aveți o pagină de produs cu un buton de editare, caz în care ar trebui să obțineți cumva ID-ul produsului din calea URL pentru a afișa pagina de editare pentru produsul corect.

Calea dvs. ar putea arăta ca `/product/1224/`.

Va trebui să citiți codul (1224) și să îl utilizați pentru a extrage detaliile corecte ale produsului dintr-o bază de date.


```js
app.get('/product/:productId', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```

Primirea unei cereri GET pe o cale, cum ar fi `/product/121`, vă va permite să capturați id-ul produsului și să îl stocați în variabila paramsObj.


În acest fel putem prelua dinamic date, pe care le putem folosi ulterior, de exemplu, pentru a obține informații din baza de date.

De asemenea, putem valida parametrii cu expresii regulate:

```js
app.get('/product/:productId', (req, res) => {
    const paramsObj = req.params
    res.send(paramsObj)
})
```

Verificarea regex din calea de mai sus asigură că parametrul primit este un număr, altfel vom primi o eroare **Not Found**.


[/slide]

[slide hideTitle]
# Chaining Routes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-11-chainable-routes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți înlănțui handlers using `app.route()`

```js
app.route('/home')
    .get((req, res) => {
        res.send('GET home page')
    })
    .post((req, res) => {
        res.send('POST home page')
    })
    .all((req, res) => {
        res.send('Everything else')
    })
```

Acest lucru este foarte util atunci când doriți să executați acțiuni diferite pe baza tipului de cerere pe aceeași cale, economisind câteva linii de cod.


[/slide]

[slide hideTitle]
# Răspunsuri Router

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-12-13-router-responses-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există mai multe tipuri diferite de răspunsuri pe care le putem specifica.

Putem folosi:

- `res.download()`: dacă dorim să returnăm un fișier pentru descărcare de către utilizator

```js
app.get('/pdf', (req, res) => {
    res.download('FULL PATH TO PDF')
})
```

- `res.end()`: încheie procesul de răspuns

- `res.json()`: trimite răspuns în format JSON

```js
res.json({ product: 'Tootbrush' })
```

- `res.redirect()`: redirecționează o solicitare către o altă pagină

```js
app.get('/about/old', (req, res) => {
  res.redirect('/about') })
```

- `res.sendFile()`: trimite un fișier ca **un flux de octet**

```js
app.get('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName
    res.sendFile("PATH TO FILE" + fileName)
})
```

- `res.render`: randează un șablon de vizualizare, index HTML sau alt șablon
[/slide]

[slide hideTitle]
# Routers Modulare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-14-modular-routers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți utiliza `express.Router` pentru a crea coordonatori de rută modulare care să fie montate pe căi specifice.

În acest fel, puteți utiliza middleware, specific numai pentru acel router.

Acestea sunt create în fișiere js separate.

De exemplu, putem crea un fișier about.js cu următorul conținut:

```js
const express = require('express')
const router = express.Router()
router.use( /* adăugarea middleware */ )
router.get( /* definirea route handlers */ )
app.use('/about', router)
```

Dacă dorim să folosim routerul oriunde în cadrul aplicației, îl putem încărca cu `var aboutRouter = require('./about')`

[/slide]