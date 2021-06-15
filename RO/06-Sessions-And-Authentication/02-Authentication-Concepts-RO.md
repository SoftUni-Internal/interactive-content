# Concepte de Autentificare
[slide hideTitle]

# Securitatea Aplicației

Pe măsură ce tehnologia avansează, securitatea adecvată este cu atât mai necesară.

O **parte indispensabilă** a securității aplicației este conceptul de **autentificare**.

Scopul principal al autentificării este de a **confirma** că utilizatorul este cel **cine pretinde că este**.

La fel ca clienții de la o bancă care trebuie să prezinte un ID.

**Cookies** și **sessions** servesc scopului **ID-urilor** de pe internet.

Ei documentează cine este utilizatorul și își propun să confirme că nu pretind că sunt o altă persoană.

Autentificarea este o **preocupare transversală**, ceea ce înseamnă că este **esențială pentru întreaga aplicație**.

Cel mai bun lucru este **să o gestionați separat**, rezultând o **structură de cod mai bună**.

Aici puteți vedea o diagramă simplificată a modului în care se efectuează autentificarea:

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-1.png" /]

[/slide]

[slide hideTitle]

# Bcrypt

**Hashing** este un concept fundamental al securității cibernetice.

Este o conversie **one-way** a unei **chei** într-o **hash value** cu ajutorul unui **hashing algorithm**.

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-2.png" /]

`Bcrypt` este o funcție de hash populară.

Utilizează câteva concepte de securitate suplimentare:

- `salt` - Adăugarea unui **cuvânt cheie unic** la hash pentru a preveni atacurile **rainbow table** utilizate de obicei pentru a sparge parolele hash.

- `multiple iterations` - **Număr crescut de iterații** pentru a preveni **brute force** (atacuri care încearcă toate combinațiile posibile)

Pentru a utiliza `bcrypt` with Express, cu Express, instalați middleware-ul astfel::

```js
npm install bcrypt
```

Aici este un exemplu simplu cum să executam hash la o parolă cu `bcrypt`:

```js
const bcrypt = require('bcrypt');
const saltRounds = 8; // Salt iterations, a higher value reduces performance

const myPlainTextPassword = "unhackable"; // The initial password is "unhackable"

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
        console.log(hash);
        // $2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty
    })
});
```

Funcțiile `genSalt` și `hash` rulează **asincron**.

După marcarea cu succes a unei parole, hash **trebuie comparat** cu originalul la fiecare cerere.

Acesta este modul de utilizare a funcției `compare`:

```js
const plainTextPassword = "unhackable";
const hash = "$2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty";
const fakeHash = "$2b$08$O24n5Ol.4XmN.egE5ceFFem5nWms85DQnZjmAl3Az8TYqcuWlRbty"

bcrypt.compare(plainTextPassword, hash, (err, res) => {
    console.log(res); // true
});

bcrypt.compare(plainTextPassword, fakeHash, (err, res) => {
    console.log(res); // false
});
```

Rețineți că `compare` rulează și **asincron** pentru a evita blocarea executării codului.

[/slide]

[slide hideTitle]

# Authentication vs. Authorization

După cum s-a discutat anterior, **autentificarea** este procesul de verificare a identității unui utilizator.

Se întâmplă prin furnizarea acreditării specifice, cum ar fi:

- **Password**

- **Tokens**

- **Smart cards**

Un alt concept de securitate cibernetică este **autorizarea**.

Deși poate suna similar cu **autentificarea**, acestea nu sunt la fel.

Obiectivul principal al **autorizării** este verificarea dacă unui utilizator i se **permite** să facă ceva.

Acestea sunt câteva cazuri în care se utilizează **autorizarea**:

- Determinarea dacă un utilizator are privilegiile unui **utilizator invitat**, al unui **utilizator înregistrat** sau al unui **administrator**

- **Ascunderea** sau **afișarea** resurselor speciale în funcție de nivelul de autorizare

[/slide]

