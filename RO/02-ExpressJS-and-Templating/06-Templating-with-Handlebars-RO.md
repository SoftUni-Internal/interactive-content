# Șablonarea cu Handlebars

[slide hideTitle]
# Ce este Handlebars?

**Handlebars** este un simplu **limbaj de șablonare**, bazat pe specificația Mustache.

**Șablonanele Handlebars** arată ca un text obișnuit cu **expresii** încorporate Handlebars.

## Expresii

**Expresiile** Handlebars sunt **unitatea de bază** a unui **șablon** Handlebars.

Ele folosesc **notația cu acoladă dublă**:

```js
<body>
<p>My name is {{name}}</p>
</body>
```

Când șablonul este **executat**, aceste expresii sunt **înlocuite** cu **valorile** dintr-o sursă de intrare (de examplu o **bază de date**).

Handlebars permit utilizarea instrucțiunilor condiționale și a buclelor pentru a itera prin date.

[/slide]

[slide hideTitle]
# Integrarea în Express

Iată un server web simplu, cu o integrare de Handlebars:

```js
const express = require("express");
const app = express();
const port = 4000;

const handlebars = require("express-handlebars");

app.set("view engine", "handlebars");

app.engine( "handlebars", handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { layout: "index" });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
```

Instalăm Handlebars folosind NPM:

```js
npm install express-handlebars
```

Apoi, trebuie să solicităm Handlebars la nivel de aplicație sau de router:

```js
const handlebars = require('express-handlebars');
```

Trebuie să declarăm Handlebars ca engine-ul nostru de vizualizare după cum urmează:

```js
app.set('view engine', 'handlebars');
```

Folosind metoda `app.engine()`, definim locația fișierelor noastre șablon:

```js
app.engine( "handlebars", handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);
```

Localizăm directorul în care sunt stocate fișierele noastre statice:

```js
app.use(express.static('public'));
```

La final, declarăm vizualizarea paginii noastre de pornire:

```js
app.get("/", (req, res) => {
  res.render("home", { layout: "index" });
});
```

Trecem fișierul `home.hbs` la metoda `render()`.

Metoda servește corpul paginii noastre către containerul `index.hbs`.

[/slide]

[slide hideTitle]
# Bucle-For

Folosind `#each` **ajutorul special**, putem itera printr-o matrice:

```js
const context = {
  people: [
    { name: 'Samantha', lastname: 'Smith' age: 26}, name: 'John', lastname: 'Peterson' age: 34}]};

```

```js
<ul class="people_list">
  {{#each people}}
    <li>{{firstName}} {{lastName}}, {{age}}</li>
  {{else}}
    <p class="empty">There are no people</p>
{{/each}}
</ul>
```

După cum puteți vedea în exemplul de mai sus, putem adăuga și secțiunea `{{else}}`.

Acesta va fi **randată** în cazul în care **matricea** este **goală**.

[/slide]

[slide hideTitle]
# Instucțiuni Condiționate

Similar to JavaScript, putem folosi și **instucțiunile condiționate** în **șablonul** nostru.

 `#if` helper, urmat de o condiție este utilizat pentru a realiza acest lucru:

```js
<div class="entry">
{{#if person}}
<h1>{{firstName}} {{lastName}}</h1>
{{/if}}
{{else}}
    <p class="empty">This person does not exist in our database</p>
</div>
```

Dacă argumentul său returnează `false`, `undefined`, `null`, `""`, `0`, or `[]`, apoi Handlebars vor randa blocul `{{else}}`, **dacă se declară astfel**.

[/slide]

[slide hideTitle]
# Partials

Handlebars ne permite să **reutilizăm șabloanele** prin **partials**.

**Partials** sunt **șabloane** Handlebars normale care poate fi apelate direct de **alte șabloane**.

Pentru a utiliza un partial, trebuie să îl înregistrăm folosind metoda `Handlebars.registerPartial()`:

```js
Handlebars.registerPartial('myPartial', '{{newVar}}');
```

Partials pot fi precompilate cu un nou șablon, căruia îi este trecut un al doilea parametru.

Apelarea unui partial se face cu acolade duble, precedând numele cu un semn `>`:

```js
{{> myPartial }}
```

Un exemplu de partial poate fi un meniu, un card de informații sau orice alt element pe care doriți să îl inserați într-un alt șablon.

Partials pot fi refolosite în câte locații aveți nevoie și sunt o modalitate bună de a păstra șablonul mai simplu, fără a fi nevoie să repetați același cod în locații diferite.

[/slide]

[slide hideTitle]
# HTML Escaping

După cum am aflat mai devreme, **acoladele duble** sunt folosite pentru a **declara** **expresiile** Handlebars.

În Handlebars, valorile returnate de către `{{expression}}` sunt HTML\-escaped.

De exemplu, dacă expresia conține `&`, apoi ieșirea returnată HTML-escape este generată ca `&amp;`.

Dacă nu vreți ca Handlebars să omită o **valoare de evadare**, puteți folosi "triple-stash", `{{{`:

```js
{{{Any symbol inside here will not be escaped}}}
```

[/slide]

[slide hideTitle]
# Demo: Handlebars

[/slide]