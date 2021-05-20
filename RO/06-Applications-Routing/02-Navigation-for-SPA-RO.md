# Conceptele rutării

[slide hideTitle]

# Cum funcționează rutarea

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-14-15-16-navigation-for-SPA-how-routers-wrok-hash-based-routing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Routerul** încarcă conținutul potrivit pentru o anumită locație, numită și URL.

Ar trebui să **actualizăm** bara de adrese la **fiecare modificare** a conținutului paginii.

**Routerul** permite utilizatorului să schimbe locația **manual** sau făcând clic pe un **link**

Oferă **utilizatorului** o experiență **mai bună**.

[/slide]

[slide hideTitle]

# Hash-Based Routing 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-17-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosim rutare **bazată pe hash** pentru a crea o  "**legătură profundă**" cu o secțiune a unei pagini.

Acest tip de navigare  simulează încărcarea de conținut diferit.

**Rutarea bazată pe Hash** **nu** reîncarcă pagina.

Pentru a extrage hash-ul din URL, folosim:

```js
window.location.href.split('#')[1] || '';
```

Dacă folosim doar "**window.location.href**", vom **recupera întregul URL**.

Pentru a extrage hash-ul putem folosi `split('#')`.

Un exemplu pentru schimbarea locației: 

```js
let changePath = function(path) {
    let currentPath = window.location.href;
    window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
};
```

Setăm URL-ul curent într-o variabilă numită "**currentPath**".

Apoi, setăm **window.location.href** aceluiași URL, dar cu un hash schimbat.

[/slide]

[slide hideTitle]

# Subscribing to Changes 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-18-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abonarea înseamnă crearea unei funcții care verifică la o anumită perioadă dacă există modificări.

În cazul nostru, atașăm funcția la adresa URL.

Abonamentul arată astfel:

```js
let url = undefined;

let getCurrent = function() {
    return window.location.hash;
};

let listen = function() {
    let current = getCurrent();
    if (current !== url) {
        url = current;
    }
    setTimeout(listen, 200);
};

listen();
```

Avem două funcții, `getCurrent()` și `listen()`.

Funcția `getCurrent()` returnează **hash-ul** curent care este în URL.

Funcția care ne interesează este funcția `listen()`.

În această funcție, verificăm dacă hash-ul curent este diferit.

Dacă nu, atribuim hash-ul variabilei **URL**.

După aceea, am setat **expirarea** la 200 ms.

[/slide]

[slide hideTitle]

# Push-Based Routing 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-19-Push-based-routing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rutarea **bazată pe push** este un mod mai modern de gestionare a navigării.

Cu rutarea **bazată pe push**, putem folosi **randarea pe partea de server**.

**Randarea pe partea de server** ajută la **SEO** și **Facebook Open Graph**.

Rutarea **bazată pe push** vă ajută la **analizare** și remediază **problemele de hashtag**.

Acest tip de rutare ne permite să folosim rutare **bazată pe hash** așa cum am intenționat.

[/slide]

[slide hideTitle]

# History API 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-20-History-API-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

API-ul Istoric oferă acces la obiectul "**history**" al browserului.

Putem folosi metode precum `back()`, `forward()` și `go()` folosind obiectul "history".

Această metodă ne permite să avem navigarea nativă dorită de utilizatori.

În **HTML5** au fost introduse `history.pushState()` și `history.replaceState()`.

Aceste metode pot modifica și adăuga la **intrările obiectului istoric**.

Acestea funcționează în combinație cu evenimentul **popstate**.

Dacă folosim metoda `pushState()` sau metoda `replaceState()`, ascultătorul de evenimente va stoca o copie a obiectului istoric.

[/slide]

[slide hideTitle]

# The PushState Method

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-21-The-Pushstate-Method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda **PushState** adaugă o nouă intrare la **obiectul istoric** al browserului.

Această metodă ia trei parametri.

- **starea** asociată cu noua intrare

- Pagina **Title** a noii intrări

   - este ignorat de majoritatea browserelor din zilele noastre

- **URL-ul** este noua intrare din istoric și trebuie să provină din **aceeași origine** ca adresa URL curentă

Iată un exemplu:

```js
history.pushState({}, '', '/product/56789123');
```

Apelăm metoda `history.pushState()` și trecem parametrii.

Browserele ignoră al doilea parametru și de aceea este un șir gol.

Înainte de a apela metoda `pushState()`, adresa URL va arăta astfel:

[image assetsSrc = "JS-Applications-Routing-12.png" /]

După instanțarea metodei `pushState()`, adresa URL ar fi astfel:

[image assetsSrc="JS-Applications-Routing-13.png" /]

[/slide]

[slide hideTitle]

# The ReplaceState Method

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-22-The-ReplaceState-Method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda **ReplaceState** modifică intrarea curentă.

Este nevoie de  **State**, **Title** și  **URL** ca parametri.

Parametrul **Title** va fi ignorat de majoritatea browserelor.

**ReplaceState** este util dacă dorim să actualizăm **obiectul de stare** sau **URL-ul**.

Aici este un exemplu pentru `replaceState()`:

```js
history.replaceState({}, '', '20');
```

După ce instanțiem metoda `replaceState()`, aceasta va modifica intrarea curentă a istoricului.

Înainte de instanțierea metodei `replaceState()`, adresa URL va arăta astfel:

[image assetsSrc="JS-Applications-Routing-14.png" /]

După ce apelăm `replaceState()`, URL-ul va fi așa:

[image assetsSrc="JS-Applications-Routing-15.png" /]

[/slide]

[slide hideTitle]

# The Popstate Event

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/RO/JS-apps-routing-23-The-Popstate-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Evenimentul  **popstate** ascultă pentru modificări ale stării.

Evenimentul se va declanșa când obiectul istoric se schimbă.

**Evenimentul Popstate** va actualiza intrarea curentă la ultima vizitată de utilizator.

Putem citi obiectul istoric curent utilizând "**history.state.property**", fără a-l aștepta pe evenimentul **popstate**.

[/slide]
