# Fișiere Statice

[slide hideTitle]
# Fișiere Statice

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/03-ExpressJS-and-Templating/interactive-express.js-and-view-engines-19-20-static-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a servi **fișiere statice** precum imagini, fișiere CSS și JavaScript, folosim funcția `express.static()`, încorporată în ExpressJS:

```js
app.use(express.static('public'))
```

Puteți utiliza codul de mai sus pentru a difuza imagini, css sau orice alt fișier static dintr-un director cu numele "public".

Funcția `static()` middleware acceptă **calea relativă** către directorul în care se află fișierele statice.

**Calea** furnizată funcției este **relativă** la directorul în care se execută procesul Node.js.

În cazul în care rulați aplicația Express dintr-un alt director, este mai sigur să utilizați o cale absolută:

```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

Configurarea aplicației pentru a difuza fișiere statice le-ar face disponibile în mod implicit la calea rădăcină.

De exemplu `http://localhost:3030/catpic.jpg`

Puteți crea o cale virtuală și să faceți ca fișierele statice să fie deservite printr-o altă rută `app.use('/files', express.static('public'))`.

Acum, imaginile pisicii dvs. vor fi accesibile printr-o cale, cum ar fi `http://localhost:3030/files/catpic.jpg`

[/slide]
