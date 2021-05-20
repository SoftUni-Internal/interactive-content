# Rutarea cu page.js

[slide hideTitle]

# Introducere la page.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-24-25-26-27-Routing-with-page-js-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Page.js** este un router pe partea de client, care folosește conversia **string-to-regexp**.

Pentru a-l utiliza, trebuie să instalăm pachetul.

Trebuie să-l instalăm de la **npm** cu următoarea comandă: `npm install page`.

Putem trece mai mulți parametri către **page.js**.

Definirea unui traseu se face folosind **callback-uri**.

Fiecare callback este apelat cu un **context** și un **next** ca parametri.

Când vom transmite callback-ul **next**, acesta va instanția următorul callback înregistrat din cale.

Iată un exemplu:

```js
page('/', user.list);
page('/user/:id', user.load, user.show);
```

În acest exemplu, setăm adresele URL și callback-urile: **user.list**, **user.load** și **user.show**.

**user.list** va fi executat atunci când utilizatorul se află pe **Home page**.

Va enumera toți utilizatorii.

Când utilizatorul se află pe calea `/ user /:id`, va fi executat **user.load**.

După ce **user.load** este gata, **user.show** va fi executat.

[/slide]

[slide hideTitle]
# Redirecționarea cu page.js

Putem apela `page.redirect()` pentru a redirecționa.

Această metodă primește doar ***path** ca parametru.

Acesta așteaptă starea traseului curent și îl înlocuiește cu unul nou.

După redirecționare, va lăsa **obiectul istoricului browserului** curat.

Iată cum arată `redirect()`:

```js
page('/index', function() {
    if (admin) {
        page.redirect('/admin');
    } else {
        page.redirect('/guest');
    }
});
```

În acest exemplu verificăm dacă utilizatorul este un **admin** sau **nu**.

Dacă utilizatorul este administrator, funcția va redirecționa către pagina `/admin`.

Dacă nu, va fi redirecționat către pagina `/guest`.

[/slide]
