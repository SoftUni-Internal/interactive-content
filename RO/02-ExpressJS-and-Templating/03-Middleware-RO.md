# Middleware

[slide hideTitle]

# Ce este Middleware?

Middleware vă permite să definiți una sau mai multe acțiuni care sunt executate în ordine.

Un exemplu de middleware ar fi o funcție de înregistrare care înregistrează unele informații în baza de date înainte de accesarea unei anumite resurse sau o funcție care pregătește datele pentru utilizare filtrându-le într-un fel.

Folosim funcții middleware pentru:

- **Executarea** oricărui cod din corpul funcției;
- **Modificarea** obiectelor **cererii** și **răspunsului**;

- Apelarea **următorului middleware** din stivă.

- **Încheierea** **ciclului de solicitare-răspuns**.


Un **middleware** este o **funcție** care are acces la:

- Obiectul **request** (`req`)
- Obiectul **response** (`res`)


## Cum se încarcă un middleware

Pentru a încărca **middleware**, utilizăm metoda `app.use()` care acceptă o funcție ca parametru.


```js
var express = require("express");
var app = express();

app.use(function(req, res, next) {
    console.log("Hello World!");
    next();
});
```

În primul rând, **importăm** framework-ul `express`.

Apoi creăm o nouă instanță a **app object**.

Predăm funcția middleware metodei `app.use()`.

În corpul funcției, am numit metoda `console.log()` cu un șir simplu.

Numim **următoarea funcție**, dacă există în **stiva de middleware**, cu ajutorul `next()`.


[/slide]

[slide hideTitle]

# Tipuri de Middleware

Putem folosi middleware-ul **Application-level** declarând `app.use()`, despre care am discutat mai devreme.

De asemenea, putem utiliza funcția `app.METHOD()` pentru a crea middleware **specific rutei**.

## Middleware-ul Router-level 

Middleware **Router-level**  este foarte similar cu middleware application-level.

O **diferență principală** este că **o legăm** de o instanță de `express.Router()`, în loc de `express()`:

```js
const router = express.Router()
```

Pentru a încărca middleware la nivel de router, folosim funcțiile `router.use()` sau `router.METHOD()`:

```js
const express = require("express");

const app = express();

const router = express.Router();

router.use((req, res, next) => {
    console.log("Time:", new Date());
    next();
});
```

## Middleware-ul Error-Handling 

**Express.js**  este livrat împreună cu **gestionarea erorilor** în mod **implicit**

Definim **funcțiile middleware** de gestionare a erorilor în cea mai mare parte la fel ca alte funcții middleware.

Principala caracteristică a funcțiilor de gestionare a erorilor este că acceptă un al patrulea argument, obiectul \-  `error`:

```js
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(404).send("This page does not exist.");
});
```

În acest exemplu, numim `console.error()` cu stiva de erori ca parametru.

De asemenea, atribuim obiectului de răspuns o stare "**404 - Not Found**".

## Middleware Third-party 

**Middleware Third-party** permite o mulțime de **funcționalități suplimentare**.

Instalăm middleware third party ca orice alt modul **Node.js**:

```js
npm install name-of-middleware-module
```

După terminarea instalării, trebuie să **importăm**, fie la nivel de aplicație, fie la nivel de router.

Vom folosi modulul `cookie-parser` ca exemplu:

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()));
```

Presupunând că am rulat deja `npm install cookie-parser`, următorul nostru pas este să-l importăm în fișierul nostru:

```js
const cookieParser = require('cookie-parser');
```

Apoi încărcăm middleware-ul de analiză a cookie-urilor:

```js
app.use(cookieParser())
```

Următorul tabel prezintă unele middleware utilizate în mod obișnuit.

| **Modul Middleware** | **Descriere** |
| --- | --- |
| `cookie-parser`       | Transformă antetul unui cookie. Populează proprietatea `cookies` a obiectului cererii. |
| `errorhandler`        | Permite depanarea și gestionarea erorilor în mediul dezvoltator.  |
| `cors`                | Permite partajarea resurselor cross-origin (CORS). |
| `serve-static`        | Folosit pentru lucrul cu fișiere statice. |

[/slide]

[slide hideTitle]

# Middleware-ul Custom 

Putem crea **middleware custom** pentru **căi specifice**.

Funcțiile `app.use()` și  `app.METHOD()` pot accepta un șir formatat **route** alături de **funcția middleware** ca parametri:

```js
app.use("/post/:postId", (req, res, next) => {
    const postId = req.params.postId;

    let postExists = postId !== undefined;

    if (!postExists) {
        res.redirect("/home");
    } else {
        next();
    }
});

app.get("/post/:postId", (req, res) => {
    res.send("Post details");
});
```

Verificăm dacă există o postare de blog cu un anumit `postId` într-o bază de date.

În funcție de aceasta, fie redirecționăm utilizatorul către pagina de pornire, fie afișăm mai multe informații despre postare.

[/slide]
