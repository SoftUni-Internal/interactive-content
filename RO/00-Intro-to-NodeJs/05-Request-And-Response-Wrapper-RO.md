# Interfața de Solicitare și Răspuns

[slide hideTitle]

# Interfața de Solicitare

Suportul de solicitări este folosit pentru a **furniza informații despre o solicitare HTTP** efectuată către server.

Se numește suport, interfață sau înveliș pentru că este **un obiect, conținând perechi de informații de tipul cheie-valoare ce aparțin acelei solicitări**.

Ea are mai multe proprietăți, pornind de la **tipul solicitării** și până la **versiunile antetelor și protocoalelor sale**.

Aveți aici câteva dintre cele mai des utilizate proprietăți:

- `httpVersion` - specifică **versiunea** protocolului HTTP utilizat

- `headers` - parsează **contextul și proprietățile** drept antete ale solicitării

- `method` - metoda specifcă tipul cererii (`GET`, `POST`, `PUT`, `DELETE`, etc.)

- `url` - arată care este **URL-ul** solicitării

## Exemplul 1: Interfață de Solicitare

Iată aici un exemplu despre cum să folosiți interfața de solicitare:

```js
const http = require("http");
const url = require("url");
const port = 3000;

http.createServer((req, res) => {
    let path = url.parse(req['url']).pathname;

    if (path === '/') {
        console.log("You are currently on the home page");
    } else {
        // Log the current page to the console.
    }
}).listen(port);
```

Așa cum putem vedea, folosim metoda `parse` pentru a obține șirul URL-ului.

Folosind o instrucțiune **if**, determinăm dacă ne aflăm pe **pagina de început (home)**.

Apoi, **tipărim** rezultatul corespondent pe consolă.

[/slide]

[slide hideTitle]

# Interfața de Răspuns

Interfața sau suportul de răspuns face **exact opusul interfeței de cerere**.

Pe aceasta o folosim pentru a transmite **date și informații privind stare** drept răspuns din partea serverului.

Acestea sunt câteva dintre metodele care se folosesc împreună cu această interfață: 

- `res.writeHead` - Adaugă un antet de răspuns cu **codul de stare**, **tipul de conținut** și **mesajul**

- `res.write` - Poate fi utilizată în locul lui `writeHead`

Va trimite un **antet implicit**.

- `res.statusCode` - Specifică **codul de stare al HTTP** când nu se folosește `writeHead`

Este recomandată **utilizarea unui cod de stare corect al HTTP în fiecare răspuns** întrucât acesta **îmbunătățește semnificativ gradul de optimizare pentru motoarele de căutare (SEO) al website-ului vizat**.

Iată aici câteva dintre cele mai des întâlnite coduri de stare și semnificațiile acestora: 

| **Codul de stare** | **Descrierea** |
|---|---|
| 200 | Operațiune reușită |
| 301 | Resursă mutată permanent la link-ul furnizat | 
| 401 | Acces neautorizat |
| 404 | Resursa nu a fost găsită | 
| 500 | Eroare de server |

## Exemplul 2: Interfața de Răspuns

Iată cum se trimit date de la server către client:

```js
const http = require('http');
const port = 3000;

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // Trimite un cod de stare 200 (succes)
    // Specifică faptul că datele transmise vor fi de tip text

    res.write("How are things going on the client side?");

    // Trimite clientului un mesaj codificat text UTF-8

    res.end();

    // Încheie răspunsul

}).listen(port);

```

Așa cum putem vedea din acest exemplu, metoda `writeHead` este folosită pentru a trimite **un antet de răspuns** cererii primite.

În acest caz, acceptă doi parametri - un **cod de stare** și un antet `Content-Type`.

Este esențial să **folosim întotdeauna codul de stare corect și să finalizăm răspunsul**.

[/slide]
