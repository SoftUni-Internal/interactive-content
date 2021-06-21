# Fluxuri și Evenimente

[slide hideTitle]

# Flux

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-7-8-streams-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fluxurile Node.js sunt obiecte care sunt utilizate pentru a gestiona secvențial operațiile de citire și scriere.

Un flux este o colecție de date care nu sunt disponibile simultan și care pot veni continuu în bucăți.

Există multe obiecte de flux furnizate de Node.js, de exemplu, o cerere către un server HTTP este o instanță de flux.

Acestea sunt cele patru tipuri principale de fluxuri:

- **Citibile** - poate doar **citi** date

- **Scriibile** - poate doar **scrie** date

- **Duplex** - poate **citi** și **scrie** date

- **Transform** - un flux Duplex unde ieșirea este, într-un fel, legată de intrare

La fel ca toate fluxurile Duplex, fluxurile Transform implementează atât interfețele citibile, cât și cele de scris.

[/slide]

[slide hideTitle]

# Flux Citibil

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-9-10-readable-stream-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un flux citibil este un tip de flux care citește un fișier sau date, adesea foarte mari, și îl împarte în bucăți mici. 

Acestea permit lucrul secvențial cu datele fără a supraîncărca RAM-ul.

Fluxurile care pot fi citite au următoarele **metode**:

- `.read()` - citește datele din tamponul intern

Returnează datele ca obiect tampon dacă nu este specificată nicio codificare sau dacă fluxul funcționează în modul obiect.

Această metodă acceptă un singur parametru **mărimea**, care specifică câți octeți va citi tamponul intern.

Dacă nu există date în tampon, atunci **null** este returnat.

```js
readable.read(size);
```

- `.pause()` - oprește modul flux din a emite evenimente de date

Orice date care devin accesibile vor continua să existe în memoria tampon intern.

Această metodă nu acceptă niciun parametru.

```js
readable.pause();
```

- `.resume()` - restabilește fluxul de date dacă metoda `.pause()` ma fost utilizată

Această metodă nu acceptă niciun parametru.

```js
readable.resume();
```

## Evenimente

Toate fluxurile sunt instanțe ale clasei "**EventEmitter**" și emite evenimente utilizate pentru citirea și scrierea datelor.

Cele mai importante evenimente dintr-un flux de citit sunt:

- **Data** - emise ori de câte ori fluxul transmite o parte din date către consumator

- **End** - emise atunci când nu mai sunt date de primit de la flux

- **Error** - emisă atunci când există o eroare la primirea datelor

## DEMO: Exemplu de Flux Scriibil

O cerere HTTP este o instanță a fluxului scriibil.

Pentru a crea un server și a face o solicitare, trebuie să solicitați modulul "HTTP" din Node.js.

Apoi, utilizați metoda `createServer()` pentru a crea un server pe computer.

Aceasta este o funcție care primește funcții de apel invers - "**req**" și "**res**".

Funcția de apel invers **req** callback se referă la cerere, iar **res** reprezintă răspunsul.

Metoda `req.on()` leagă un eveniment de un obiect și adaugă o funcție de ascultător pentru un anumit eveniment.

Dacă evenimentul "data" este emis, atașăm datele la variabila `body`.

Dacă evenimentul "**end**" este emis, încheiem transferul de date.

Metoda `.listen()` creează un ascultător pe portul sau calea specificată.

```js
const http = require('http');
http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            body += data
        });
        req.on('end', () => {
            console.log(body);
        });
    }
}).listen(5000);
```

[/slide]

[slide hideTitle]

# Flux Scriibil

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-11-12-writable-stream-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un flux scriibil este utilizat pentru scrierea unor bucăți mici de date în fișiere.

Are următoarele **metode**:

- `.write()` - scrie date în flux

Argumentul **chunk** este un tampon, cu excepția cazului în care configurăm fluxul în mod diferit.

Avem nevoie de argumentul de codificare pentru diferite configurații, dar, de obicei, îl putem ignora.

Funcția de apel invers este o funcție pe care trebuie să o apelăm după ce am terminat procesarea fragmentului de date.

Semnalează dacă scrierea a avut succes sau nu. 

Pentru a semnaliza un eșec, apelați apelul invers cu un obiect de eroare.


```js
const { Writable } = require('stream');
const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});
process.stdin.pipe(outStream);
```

- `.end()` - această metodă încheie procesul de scriere

Argumentele chunk și codificare sunt opționale, ceea ce va permite ca o ultimă bucată de date să fie scrisă instantaneu înainte de a închide fluxul.

Funcția opțională de apel invers este adăugată ca ascultător pentru evenimentul **finish** al fluxului de scris.

```js
writable.end(chunk, encoding, callback);
```

## **Evenimente**

Cele mai frecvente evenimente dintr-un flux care poate fi scris sunt: 

- **Drain** - emis atunci când tamponul intern al unui flux de scris a fost golit

Cauza unui astfel de lucru poate fi citirea unei surse de date dintr-un flux mai repede decât poate fi scrisă într-o altă resursă.

- **Finish** - emis după ce metoda `writable.end()` a fost apelată

- **Error** - emis dacă există o eroare în procesul de scriere

Următorul cod este un exemplu de utilizare a fișierului evenimentului **finish**:

```js
const stream = require('stream');
const writable = new stream.Writable({
    write: function(chunk, encoding, next) {
        console.log(chunk.toString());
        next();
    }
});
writable.write('Hello There');
writable.end();
writable.on('finish', function() {
    console.log("Write is completed.");
});
```

## DEMO: Exemplu de Flux Scriibil

Un răspuns HTTP este o instanță a unui flux care poate fi scris.

Aruncați o privire la următorul exemplu.

În primul rând, avem nevoie de modulul "**fs**" din Node.js, apoi creăm un server, care va fi ascultat pe **port 5000**.

Începem să citim din fișierul `./bigfile.txt`.

Apoi, vom folosi metoda `write()` în interiorul funcției `src.on()` pentru a scrie datele.

LA final, folosim metoda `end()` pentru a termina de scris datele.

```js
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('./bigfile.txt');
    src.on('data', data => res.write(data));
    src.on('end', () => res.end());
});
server.listen(5000);
```

[/slide]

[slide hideTitle]

# Fluxuri de Tip Piping 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-13-piping-streams-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Piping-ul se întâmplă atunci când intrarea unui flux este furnizată de ieșirea unui alt flux.

Un exemplu tipic de utilizare a piping-ului este dacă doriți să transferați date dintr-un fișier în altul.

Iată un exemplu despre modul în care putem transfera date folosind conducte.

Funcția `pipe()` permite unui flux citibil să iasă direct către un flux care poate fi scris.

Citim din fișierul `./bigfile.txt`, și apoi trimitem datele către **response** folosind comanda pipe pentru a transfera datele de la `src` la `res`.

```js
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('./bigfile.txt');
    src.pipe(res);
});
server.listen(5000);
```

[/slide]

[slide hideTitle]

# Fluxurile de tip Duplex și Transform 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-13-piping-streams-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un flux duplex este atât de citit, cât și de scris, similar cu un flux de tip **Transform**. 

Cu toate acestea, un flux Duplex se referă de obicei la un flux care are încorporate două fluxuri independente, unul care curge în afară și unul care curge în interior.

Fluxul de tip transform este un tip special de flux duplex în care ieșirea este o versiune transformată a intrării.

În exemplul următor citim din fișierul `index.js` și apoi îl comprimăm ca `index.js.gz`.

Avem nevoie de modulele "**fs**" și "**zlib**" din Node.js, apoi creăm un flux care poate fi citit și scris.

În cele din urmă folosind metoda `.pipe()` transferăm datele dintr-un fișier în altul.

```js
const fs = require('fs');
const zlib = require('zlib');
let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.js.gz');
let gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);
```

[/slide]

[slide hideTitle]

# Evenimentele Node.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-16-17-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modulul "Events" este utilizat pentru a gestiona evenimentele cu ușurință în Node.js.

Pentru a include modulul de Evenimente încorporat, utilizați metoda `require()`. 

În plus, toate proprietățile și metodele evenimentelor sunt o instanță a clasei EventEmitter.

Pentru a putea accesa aceste proprietăți și metode, creăm o instanță EventEmitter.

Cu această instanță, putem atribui gestionari evenimentelor noastre.

În acest exemplu folosim metoda `.on()` pentru a atribui gestionarul de evenimente unui eveniment numit "**click**".

Într-un final, declanșăm evenimentul folosind metoda `.emit()`.

**Un lucru important de știut este că evenimentele nu sunt Asincrone!**

```js
const events = require('events');
let eventEmitter = new events.EventEmitter();
eventEmitter.on('click', (a, b) => {
    console.log('A click has been detected!');
    console.log(a + ' ' + b);
});
eventEmitter.emit('click', 'Hello', 'world');
```

[/slide]
