# Modulul FS

[slide hideTitle]

# Lucrul cu Sistemul de Fișiere

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-18-19-FS-Module-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**modulul fișierelor de sistem** al Node.js vă permite să lucrați cu fișiere sincron sau asincron.

Pentru a-l include în codul dvs., utilizați metoda `require()`.

```js
let fs = require('fs');
```

Acestea sunt unele dintre cele mai frecvent utilizate metode:
- `.readFile()` - citește date dintr-un fișier
- `.writeFile()` - scrie date într-un fișier
- `.unlink()` - folosită pentru a șterge un fișier
- `.rename()` - folosită pentru a redenumi un fișier

Următorul exemplu arată diferența dintre versiunile sincrone și asincrone ale acestor metode:

```js
// Synchronous
let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);
```

```js
// Asynchronous
let data = fs.readFile('./package.json', 'utf8', (err, data) => {
    console.log(data);
});
```

[/slide]

[slide hideTitle]

# Listează Fișierele Dintr-un Director

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-20-List-Files-fs-reading-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizați metoda `readdirSync()` pentru a citi conținutul unui director dat în mod sincron.

Metoda returnează o matrice cu toate numele fișierelor sau obiectele din director. 

Utilizați argumentul opțiuni pentru a modifica formatul în care fișierele sunt returnate din metodă.

Metoda acceptă trei argumente:

- **Calea** către fișierul din care citim

- Formatul **de codificare**, o valoare de șir care specifică ce codare ar fi utilizată pentru numele de fișiere date argumentului funcției de apel invers 

- Funcția **de apel invers**

Rețineți că formatul de codificare implicit este `utf8`.

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

Dacă folosim metoda `fs.readdir()`, conținutul unui director dat va fi citit asincron.

Returnează o matrice de obiecte Șir, Buffer sau `fs.Dirent` care conțin fișierele din director.

```js
let fs = require('fs');
let data = fs.readdir('./myDir', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
```

## Utilizarea lui `readFile()` și `readFileSync()`

Metodele `readFile()` și `readFileSync()` funcționează într-un mod asemănător cu ultimele două, cu o diferență notabilă - sunt folosite pentru **a citi un singur fișier**, nu un director.

În **exemplul** următor, vom crea un server simplu:

```js
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('dummyFile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
    });
}).listen(8080);

console.log('Server is running!');
```

Folosim metoda `fs.readFile()` pentru a citi **asincron** conținutul lui `dummyFile.html`.

Folosind metoda `writeHead`, trimitem un antet de tip răspuns solicitării.

Apoi, trimitem datele folosind `write`.

`readFile()` acceptă trei argumente, în mod similar cu `readdir()` - **calea** fișierului, o funcție de apel invers și `options`.

Argumentul `options` poate fi de tip `Object` sau `string`.

Dacă este de tip `string`, este folosit pentru a specifica **encoding-ul**.

Dacă este de tip `Object`, poate specifica:

- `encoding-ul` - precum **""utf-8""**, de exemplu
    * are valoarea **implicită** `null`
- proprietatea `flag` - personalizează permisiunile **de citire/scriere** ale fișierului
    * implicit **'r'** (read-only)
- `signal` - ne permite să **încheiem** un proces `readFile` în curs de desfășurare, înainte de finalizare
    * nu este valabil în versiunea sincronă - `readFileSync()`

Țineți cont de faptul că `readFile()` tamponează întregul fișier - acest lucru poate avea ca rezultat o utilizare mai mare a memoriei.

Este recomandată utilizarea lui `createReadStream()` oricând este posibile.

[/slide]

[slide hideTitle]

# Creați un Director

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-21-Create-fs-writing-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți crea un director cu metodele `mkdir()` sau `mkdirSync()`.

```js
// Synchronous
fs.mkdirSync('./myDir');
```

```js
// Asynchronous
let fs = require('fs');
fs.mkdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

## Utilizarea lui `appendFile()` și `appendFileSync()`

Folosim metodele `appendFile()` și `appendFileSync()` atunci când vrem să adăugăm date la un fișier existent.

De exemplu, să spunem că avem un fișier numit `newFile.txt`, cu următorul **conținut**:

```
Creating a new file with FS Module
```

Dacă vrem să îl **modificăm**, putem folosi `fs.appendFile`:

```js
const fs = require('fs');

fs.appendFile('newFile.txt', ' Appended text', function(err) {
    if (err) {
        throw err;
    }

    console.log('Updated');
})
```

Poate accepta până la **patru** argumente:

- `path` - numele sau locația fișierului, `newFile.txt` în cazul nostru 
    * dacă nu există un astfel de fișier, va fi creat automat
- `data` - noile informații pe care vrem să le adăugăm - de exemplu **" Appended text"**
    * poate fi de tip `string` sau `Buffer`
- o funcție de **apel invers**
- `options` - includ `encoding`, `mode` și `flag`

După executarea codului de mai sus, `newFile.txt` arată așa:

```
Creating a new file with FS Module Appended text
```

[/slide]

[slide hideTitle]

# Redenumiți Fișierul sau Directorul

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-22-Rename-fs-renaming-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizați metoda `renameSync()` pentru a redenumi sincron un fișier sau un director.

```js
fs.renameSync('./oldName', './newName');
```

Utilizați metoda `rename()` pentru a redenumi asincron un fișier sau un director.

```js
let fs = require('fs');
fs.rename('./oldName', './newName', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]

[slide hideTitle]

# Scrieți Într-un Fișier

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-23-Write-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când scriem date într-un fișier, trebuie mai întâi să specificăm calea către fișier.

După aceea, putem folosi metode sincrone sau asincrone pentru a scrie datele în fișier.

Utilizați `writeFileSync()` sau `writeFile()` pe baza a ceea ce aveți nevoie.

Următorul exemplu arată cum să utilizați metoda **asincronă**:

```js
let fs = require('fs');
let filePath = './data.txt';
let data = 'Some text';
fs.writeFile(filePath, data, err => {
    if (err) {
        console.log(err);
        return;
    }
})
```

[/slide]

[slide hideTitle]

# Ștergeți un Fișier

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/02-Streams-and-Utilities/NodeJS-Streams-And-Utilities-23-Delete-fs-delete-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În cazul în care dorim să ștergem un fișier, folosim `unlinkSync()` sau `unlink()`.

```js
let fs = require('fs');
fs.unlink('./target.txt', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

În mod similar, putem șterge un director cu `rmdirSync()` sau `rmdir()`.

```js
let fs = require('fs');
fs.rmdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]