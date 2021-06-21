[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-33-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# În acestă lecție am învățat:

- **Express.js** este un framework de server
  - Folosit cu **Node.js**
  - **Middlewares** sunt utilizate pentru a modifica obiectele de solicitare și răspuns

```js
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));
```

- Putem utiliza routerul încorporat pentru a gestiona solicitările pe căi specifice

```js
app.get('/user', (req, res) => {
  res.send('The user management page has been requested')
})
```

Amintiți-vă că Express.js va acorda prioritate rutelor în funcție de cât de specifice sunt și, de asemenea, în funcție de ordinea în care apar în cod.

- Citirea parametrilor trecuți prin rute:

```js
app.get('/product/:productId', (req, res) => {
  const paramsObj = req.params
  res.send(paramsObj) })
```


- Middlewares sunt funcții care au acces la obiectele de răspuns și solicitare
 - încărcați-le folosind `app.use()`


- Puteți servi cu ușurință fișiere statice ca răspuns la solicitări:

```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

- **Șablonarea** îmbunătățește lizibilitatea codului și accelerează dezvoltarea
  - engine-uri de șablonare **assemble** **logic** și **data**

```js
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>

```

```js
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>

```

- **Handlebars** este un engine de modelare cu o mulțime de caracteristici

  - **bucle-For**
  ```js
  <ul class="product_list">
    {{#each products}}
    <li>{{product}}</li>
    {{/each}}
  </ul>
  ```
  - **instucțiuni condiționate**
  ```js
  {{#if sunny}}
    The sky is clear
  {{else}}
    The sky is overcast
  {{/if}}

  ```  
  - **partials**
  
  `{{> myPartial }}`
  

## În lecția următoare veți învăța:

- Baze de date Relationale și NoSQL 
- MongoDB
- Mongoose
  - modele
  - operații CRUD 
  - middleware și Queries
  - popularea modelului

[/slide]
