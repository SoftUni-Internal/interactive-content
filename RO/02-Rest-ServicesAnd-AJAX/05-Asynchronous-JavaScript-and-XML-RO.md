# JavaScript și XML asincrone

[slide hideTitle]

# Ce este AJAX?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-23-24-what-is-ajax-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abrevierea **AJAX** înseamnă **Asincron** **JavaScript** și **XML**. 

În zilele noastre se folosește **JSON** în locul **XML**.

Această tehnică ne permite să **încărcăm** **dinamic** și să **randăm** conținut sau date.

Există două tipuri de **AJAX**:

- **Randarea parțială a paginii** ne permite să randdăm un fragment HTML într-un `<div>` în timp ce datele se încarcă

- **Serviciile JSON** au obiecte JSON, pe care trebuie să le analizăm

[/slide]

[slide hideTitle]

# Fluxul de Lucru AJAX

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-25-ajax-workflow-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată un exemplu al **fluxului de lucru** AJAX:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-5.png" /]

În acest exemplu, putem vedea cum **clientul** trimite o cerere, iar **serverul** returnează un răspuns cu pagina solicitată.

După **încărcarea inițială** a paginii, **serverul** va returna doar un fișier **JSON** sau un fișier **HTML**.

Acest lucru ne permite să încărcăm conținutul dinamic, **fără** necesitatea reîncărcării paginii.

[/slide]

[slide hideTitle]

# XMLHttpRequest - API standard pentru AJAX

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-26-27-xmlhttp-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem vedea cum să actualizăm o pagină web fără a reîncărca pagina.

Pentru acest exemplu, vom folosi **obiectul XMLHttpRequest** pentru a solicita datele de la server.

Trebuie să creăm un **button** și un **div**.

```js
<button id="load">Load Repos</button>
<div id="res"></div>
```

Funcția va arăta astfel:

```js
let button = document.getElementById('#load');

button.addEventListener('click', function loadRepos() {
    let url = 'https://api.github.com/users/softuni/repos';
    const httpRequest = new XMLHttpRequest();

    httpRequest.addEventListener('readystatechange', function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            document.getElementById('res').textContent = httpRequest.responseText;
        }
    });

    httpRequest.open('GET', url);
    httpRequest.send();
});
```

[/slide]

[slide hideTitle]

# Ce este o Promisiune?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-28-what-is-a-promise-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Promisiunea**  este rezultatul unei **acțiuni asincrone**.

Când promisiunea este **finalizată**, aceasta **produce o valoare**.

Promisiunea are stări, care sunt:

- **Pending** - ceea ce înseamnă că operațiunea este încă în desfășurare sau este neterminată
- **Fulfilled** - ceea ce înseamnă că operațiunea s-a încheiat și rezultatul este disponibil
- **Failed** - ceea ce înseamnă că operațiunea a eșuat și există o eroare

Pentru a crea o **Promisiune**, folosim un **obiect de Promise**: `new Promise(executor);`

[/slide]

[slide hideTitle]

# Promise.then(): Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-29-promise-then-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În acest exemplu, vom vedea cum funcționează `new Promise()`:

```js live
let first = 'Before promise'
console.log(first);

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('done');
    }, 500);
}).then(function(res) {
    let second = 'Then returned: ' + res
    console.log(second);
});

let third = 'After promise'
console.log(third);
```

Vor fi tipărite numai valorile **primei** și **celei de a treia** variabile.

Asta pentru că Promisiunea este încă **nerezolvată**.

Valoarea **a doua** va fi tipărită pe consolă atunci când Promisiunea este rezolvată.

Motivul pentru aceasta este că Promisiunile sunt asincrone.

[/slide]

[slide hideTitle]

# Ce este Fetch?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-30-31-what-is-fetch-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Fetch**  este o alternativă la **XMLHttpRequest**.

Metoda `fetch()` ne permite să facem cereri de rețea folosind Promisiuni.

Face codul mai **mentenabil** și mai **lizibil** cu un API **mai simplu** și **mai curat**.

Aici putem vedea sintaxa `fetch()`:

```js
fetch('/api/example.json')
    .then(function(response) {})
    .catch(function(err) {});
```

## Solicitare de Bază Fetch

**Fetch** returnează un răspuns, care este un obiect **Stream**.

O citim asincron folosind `then()`.

Când chemăm metoda `json()`, aceasta va returna o Promisiune.

**Înainte de a analiza** răspunsul ca JSON, trebuie să verificăm dacă **starea răspunsului** este **200**.

În caz contrar, ar trebui să **gestionăm** eroarea.

Iată un exemplu al acțiunii respective:

```js
if (response.status !== 200) {
    console.error('Request failed')
}

response.json().then(function(data) {});
```

Verificăm starea răspunsului și dacă este **200**, **continuăm** cu analizarea răspunsului.

[/slide]

[slide hideTitle]

# Înlănțuirea Promisiunilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-32-chaining-promises-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Lucrul benefic despre **promieiuni** este că atunci când folosim metoda `fetch()`, rezultatul returnat de aceasta poate fi **separat** în funcții.

Putem **înlănțui** promisiunile folosind metoda `then()`.

Când sunt înlănțuite, acestea vor funcționa **asincron**.

Iată un **exemplu** de bază:

```js
fetch('example.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error('Request Failed');
    });
```

În acest exemplu, **analizăm** răspunsul la **JSON** și imprimăm datele analizate pe consolă.

Dacă una dintre operațiuni **nu are succes**, metoda `catch ()` va imprima o eroare.

[/slide]

[slide hideTitle]

# Solicitarea GET 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-33-get-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prima solicitare cu `fetch()` pe care o vom analiza este o solicitare **GET**.

În mod implicit, **Fetch API** trimite o solicitare **GET**.

Iată un exemplu:

```js
fetch('https://api.github.com/users/softuni/repos')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

Pentru a vedea cum funcționează, rulați-l pe consola Chrome DevTools apăsând `F12`.

**Preluăm** adresa URL și **analizăm** **răspunsul** primit la **JSON**.

După ce datele sunt **analizate**, le imprimăm pe **consolă**.

Dacă există o eroare, metoda `catch()` va **imprima** o eroare.

[/slide]

[slide hideTitle]

# Solicitarea POST

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-34-post-request-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Solicitarea **POST** este diferită de solicitarea **GET**.

Când trimitem o solicitare **POST**, trebuie să setăm **method** (metoda), **headers** (antetele) și **body** (corpul).

Va arăta așa:

```js
fetch('https://api.github.com/repos/softni/js-apps/issues', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
});
```

**Content-Type** și autentificarile sunt setate în secțiunea **headers**.

Setăm datele în **body**, folosind metoda `JSON.stringify()`.

[/slide]

[slide hideTitle]

# Metodele Body

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-35-36-body-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După ce se face solicitarea **fetch**, ar trebui să se genereze un răspuns.

**Obiectul** de răspuns are proprietăți și metode.

**Metodele** sunt după cum urmează:

- `clone()` - va crea o **clonă** a răspunsului
- `json()` - va **analiza** răspunsul la JSON
- `redirect()` - va crea o copie a răspunsului, dar cu un nume nou
- `text()` - va **analiza** răspunsul la un text
- `arrayBuffer()` - va returna o promisiune care se rezolvă cu un **ArrayBuffer**
- `blob()` - va primi răspunsul și va returna o promisiune care se rezolvă cu **Blob**
- `formData()` - va returna o promisiune care se rezolvă cu un obiect **FormData**

[/slide]

[slide hideTitle]

# Tipul de răspuns

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-37-response-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Tipurile de răspuns** sunt proprietăți **doar în citire**.

Acestea arată tipul de răspuns.

| **Tip** | **Descriere** |
| --- | --- |
|**basic**| Răspuns normal sau de aceeași origine |
|**cors**| Răspunsul este primit de la o cerere validă de origine încrucișată |
|**error**| Eroare de rețea sau informații nevalide |
|**opaque**| Răspuns pentru solicitarea **no-cors** trimisă către resursa de origine încrucișată |
|**opaqueredirect**| Solicitarea a fost făcută cu o redirecționare **manuală** |

[/slide]

[slide hideTitle]
# Fetch(): Demo

[/slide]