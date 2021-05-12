# Async / Await

[slide hideTitle]

# Funcțiile Async 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-16-17-18-19-Async-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile **Async**, spre deosebire de promisiuni și callbacks, sunt mai ușor de citit și de utilizat atunci când doriți să scrieți cod care rulează asincron.

Arată ca niște funcții obișnuite, dar utilizează bucla de evenimente pentru a funcționa asincron.

Funcțiile **Async** constau din două părți:

- `async` - Amplasat în **fața declarației funcției**

- `await` -  **întrerupe fluxul** funcției până când se returnează o anumită valoare

Utilizarea cuvântului cheie `await`  într-o funcție asincronă este opțională și este utilizată numai dacă trebuie să așteptați să fie returnată o anumită valoare pentru a evita variabile nedefinite.

Iată un exemplu de structurare a funcțiilor  `async`:

```js live
function getValueAfterDelay() {
    let username = 'Alex';
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Username is: ' + username);
        }, 2000);
    });
}

async function printUsername() {
    console.log('Getting name...');

    let result = await getValueAfterDelay(); // throws error if promise is rejected

    console.log(result);
}

printUsername();
```

Cuvântul cheie `await` este fundamental diferit de `Promise.then()`.

În timp ce `await` întrerupe executarea funcției pentru **o singură promisiune**, `Promise.then()` este utilizat pentru a înlănțui **mai multe promisiuni împreună**.

Folosiți întotdeauna `await` **pentru a obține o singură valoare** și `Promise.then()` **pentru a rula multe promisiuni în paralel**.

Unul dintre avantajele funcțiilor de scriere **async** este acela că pot fi utilizate în combinație cu blocurile **try/catch**.



[/slide]


[slide hideTitle]

# "Async"/"Await" vs "Promise.then"

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-20-Async-Await-vs-Promise.then()-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile Async sunt **mult mai concise** decât promisiunile.

Iată o comparație între cele două:

```js
//Exemplu de promisiune
function getDbInfo(url) {
    return fetch(url)
        .then((data) => {
            return data.json(); //convertește datele în JSON
        })
        .then((data) => {
            data.performMethod(); //apelează o metodă aleatorie a obiectului de date
        })
        .catch((err) => {
            console.log(err);
        });
}
```

```js
//Exemplu de funcție asincronă
async function getDbInfo(url) {
    try {
        let data = await fetch(url);

        let dataToJSON = await data.json(); // convertește datele în JSON
        dataToJSON.performMethod(); //apelează o metodă aleatorie a obiectului de date
    } catch (err) {
        console.log(err);
    }
}
```

Este important să rețineți că funcțiile **asincrone** sunt scrise **pe lângă promisiuni** ca o modalitate de a **ușura procesul de scriere a codului asincron**.

Ambele exemple de mai sus **fac aceeași treabă**, diferența este doar în **lizibilitatea codului**.

[/slide]

[slide hideTitle]

# Manipularea Erorilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-21-Error-Handling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile Async sunt **cel mai bine utilizate cu un bloc try/catch**.

```js
async function getInfo(url) {
    try {
        let response = await fetch(url);
        let text = await response.text();
    } catch (err) {
        //ar detecta o eroare pentru fiecare operațiune await
        console.log(err);
    }
}
```

Ele ar putea fi folosite și cu metoda `.catch()`.

```js
async function getInfo(url) {
    const response = await fetch(url);
}

//getInfo() devine o promisiune respinsă
getinfo.catch((err) => {
    console.log(err);
});
```

Este **foarte recomandat** să adăugați o metodă`.catch()` sau un bloc `catch` chiar dacă funcția îndeplinește o sarcină foarte simplă.

Lucrul cu codul **produce întotdeauna erori** și este **mai bine pentru experiența utilizatorului** dacă acestea sunt **rezolvate în loc să fie afișate pe ecran**.
[/slide]

[slide hideTitle]

# Execuție Secvențială

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-22-Sequential-execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cuvântul cheie `await` din funcțiile `async` permite **executarea codului în secvențe**.

Când este utilizat **înainte de o operațiune asincronă**, restul funcției se va **întrerupe și va aștepta valoarea returnată a operației**.

Iată un exemplu de executare secvențială a codului:

```js
function multiplyByTwo(number, seconds) {
    return new Promise((resolve) => {
        console.log('Entry number: ' + number);

        setTimeout(() => {
            console.log(`${number}*2 = ` + number * 2);
            resolve(number * 2);
        }, seconds * 1000);
    });
}

async function serialFlow() {
    let result1 = await multiplyByTwo(3, 1);
    let result2 = await multiplyByTwo(4, 1);
    let result3 = await multiplyByTwo(5, 1);

    let total = result1 + result2 + result3;
    console.log('Total sum: ' + total);
}

serialFlow();
```

Execuția secvențială este utilizată cel mai bine atunci când **funcțiile de mai jos se bazează pe datele preluate**.

În acest fel, **intrarea în funcția dată cu o variabilă nedefinită este imposibilă**.
[/slide]

[slide hideTitle]

# Execuție Concurentă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-23-Concurrent-execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când cuvântul cheie **await** este omis, operațiile rulează **simultan** sau **independent** una de cealaltă.

Iată codul din exemplul anterior, dar cu execuție **concurentă**:

```js
function multplyByTwo(number, seconds) {
    return new Promise((resolve) => {
        console.log('Entry number: ' + number);

        setTimeout(() => {
            console.log(`${number}*2 = ` + number * 2);
            resolve(number * 2);
        }, seconds * 1000);
    });
}

async function concurrentFlow() {
    let result1 = multplyByTwo(3, 1);
    let result2 = multplyByTwo(4, 2);
    let result3 = multplyByTwo(5, 3);

    let total = (await result1) + (await result2) + (await result3);
    console.log('Total sum: ' + total);
}

concurrentFlow();
```

Este de preferat să folosiți cuvântul cheie `async` înainte de **operațiuni asincrone** dacă orice funcționalitate de sub acestea **se bazează pe valoarea lor de returnare**.

Dacă fluxul programului este paralel, funcțiile care **depind de valorile operațiilor asincrone ar genera erori**.

[/slide]
