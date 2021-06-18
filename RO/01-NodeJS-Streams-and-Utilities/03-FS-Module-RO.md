# Modulul FS

[slide hideTitle]

# Lucrul cu Sistemul de Fișiere

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

## Using `readFile()` and `readFileSync()`

The `readFile()` and `readFileSync()` methods work in a similar fashion to the previous two, with one notable difference - they are used to **read a single file**, not a directory.

In the following **example**, we create a simple server:

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

We use the `fs.readFile()` method to read the contents of `dummyFile.html` **asynchronously**.

Using the `writeHead` method, we send a response header to the request.

Then, we send the data using `write`.

`readFile()` accepts three arguments, similarly to `readdir()` - the file **path**, a callback function, and `options`.

The `options` argument can either be of type `Object` or `string`.

If of type `string`, it is used to specify the **encoding**.

As an `Object`, it can specify:

- the `encoding` - like **"utf-8"**, for example
    * has a **default** value of `null`
- a `flag` property - customises the **read/write** permissions of the file
    * defaults to **'r'** (read-only)
- `signal` - allows us to **terminate** an ongoing `readFile` process before completion
    * unavalable in the synchronous version - `readFileSync()` 

Keep in mind that `readFile()` buffers the entire file - this can result in higher memory use.

It is recommended to use `createReadStream()` whenever possible.

[/slide]

[slide hideTitle]

# Creați un Director

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

## Using `appendFile()` and `appendFileSync()`

We use the `appendFile()` and `appendFileSync()` methods when we want to append data to an existing file.

For example, let us say we have a `newFile.txt` with the following **content**:

```
Creating a new file with FS Module
```

If we want to **modify** it, we can use `fs.appendFile`:

```js
const fs = require('fs');

fs.appendFile('newFile.txt', ' Appended text', function(err) {
    if (err) {
        throw err;
    }

    console.log('Updated');
})
```

It can accept up to **four** arguments:

- `path` - the file's name or location, `newFile.txt` in our case
    * if such a file does not exist, it will be created automatically
- `data` - the new information we want to append - such as **" Appended text"**
    * can be of type `string` or `Buffer`
- a **callback** function
- `options` - include `encoding`, `mode` and `flag`

After executing the above code, `newFile.txt` looks like this:

```
Creating a new file with FS Module Appended text
```

[/slide]

[slide hideTitle]

# Redenumiți Fișierul sau Directorul

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