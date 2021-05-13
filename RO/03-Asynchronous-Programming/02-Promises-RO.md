# Promisiuni

[slide hideTitle]

# Ce este o Promisiune?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-8-9-10-What-is-a-Promise--,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Executarea funcțiilor care se bazează pe date externe este o sarcină destul de **lentă**.

Deoarece informațiile **nu ajung imediat**, întreaga funcție **trebuie blocată** până când este prezentă o anumită valoare.

Obținerea sincronă de resurse dintr-o bază de date, de exemplu, poate **bloca o întreagă pagină web**.

Aici vin promisiunile pentru a salva situația.

În loc să aștepte finalizarea operațiunii, promisiunile **o reprezintă ca pe o stare**, permițând funcției să **continue cu execuția**.

Aceste stări sunt:

- **Fulfilled** - Operațiunea a fost finalizată cu succes

- **Rejected** - Operațiunea a eșuat

- **Pending** - Aceasta este starea în care este inițiată o promisiune. Înseamnă că promisiunea nu este nici rezolvată, nici respinsă

Promisiunile sunt inițializate cu obiectul **Promise**.

```js
new Promise(executor);
```

Promisiunile pot fi, de asemenea, **înlănțuite**.

În acest fel, prima promisiune **transmite informații despre proces** către a doua, care reacționează în consecință și așa mai departe.

Iată o reprezentare vizuală a procesului de înlănțuire:

[image assetsSrc="jsapps-async-programming-promises.png" /]

[/slide]

[slide hideTitle]

# Metode de Promisiune

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-11-12-Promise-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Promisiunile oferă o varietate de metode utile pentru un proces de lucru ușor și eficient:

- `Promise.reject(reason)` - Returnează un obiect **Promise** care a fost respins dintr-un anumit motiv

```js live
Promise.reject('There was an error!').then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);
```

- `Promise.resolve(value)` - Returnează un obiect `Promise` **rezolvat** cu valoarea furnizată

Dacă valoarea este o promisiune - **returnează promisiunea**.

```js live
Promise.resolve('Operation was successful!').then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);
```

- `Promise.all(iterable)` - Face o serie de promisiuni și returnează o singură **Promisiune**

Promisiunea returnată **se rezolvă** la o matrice de valori, **dacă toate promisiunile date sunt rezolvate**.


În caz contrar, ar **respinge imediat**.

```js live
let firstPromise = new Promise((resolve, reject) => {
    resolve('Information acquired successfully!');
});
let secondPromise = Promise.resolve('No errors.');
let thirdPromise = Promise.resolve(7);

Promise.all([firstPromise, secondPromise, thirdPromise]).then((data) => {
    console.log(data);
});
```

- `Promise.allSettled(iterable)` -  ia o serie de promisiuni și returnează un obiect `Promise`

Acest lucru se poate întâmpla numai după ce toate promisiunile date sunt **rezolvate sau respinse**.


```js live
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error!');
    }, 1000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 3000);
});

Promise.allSettled([firstPromise, secondPromise]).then((data) => {
    data.forEach((promise) => {
        console.log(promise);
    });
});
```

- `Promise.race(iterable)` - Face o serie de promisiuni și după aceea prima este fie **rezolvată**, fie **respinsă**

Această metodă returnează un obiect Promise care rezolvă sau respinge cu valoarea sa.


```js live
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This took a lot of time.');
    }, 5000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Operation finished quickly!');
    }, 1000);
});

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This took three seconds to finish!');
    }, 3000);
});

Promise.race([firstPromise, secondPromise, thirdPromise]).then((data) => {
    console.log(data);
});
```

- `Promise.finally(function)` - Preia o funcție callback pentru a fi executată după ce promisiunea este soluționată

```js live
Promise.resolve('Operation succeeded!')
    .then((data) => {
        console.log(data);
    })
    .finally(() => {
        console.log('This is printed after the oprations has finished!');
    });
```

[/slide]

[slide hideTitle]

# Promise.then(): Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-13-Promise.then()-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `then()` face posibilă înlănțuirea promisiunilor.

Se folosește **după inițializarea unei promisiuni** și ia **doi parametri**:

- O funcție callback **dacă promisiunea este rezolvată**

- O funcție callback **dacă promisiunea este respinsă**

Iată un exemplu al modului în care se folosește `then()`:

```js live
console.log('This will appear first');

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Eddie');
    }, 1000);
}).then(function(response) {
    console.log('My name is: ' + response);
});

console.log('This will appear second');
```

După cum s-a văzut mai sus, metoda `then()` **așteaptă finalizarea cu promisiunea anterioară** și **se execută cu valoarea sa returnată ca argument**.

[/slide]

[slide hideTitle]

# Promise.catch(): Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-14-Promise.catch()-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `catch()` este utilizată pentru a "**prinde erorile aruncate**" de promisiuni.

Este foarte util să **gestionăm posibilele respingeri ale promisiunilor**.

Iată cum se folosește această metodă cu codul din exemplul anterior:

```js live
console.log('This will appear first');

new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('Error while getting name!');
        }, 1000);
    })
    .then(function(response) {
        console.log('My name is: ' + response);
    })
    .catch(function(err) {
        console.log(err);
    });

console.log('This will appear second');
```

Este bine de știut că o altă metodă `then()` poate fi plasată **după** `catch()`. 

Se va executa **indiferent dacă promisiunea este respinsă sau nu**.

[/slide]
