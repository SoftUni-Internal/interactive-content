# JWT

[slide hideTitle]

# Ce este JWT?

**JWT** sau **JSON Web Token** este **standard** folosit pentru a **transfera în siguranță** un **obiect JSON** între două părți.

**JWT** este sigur datorită semnăturii sale digitale.

Există două moduri de a semna un token digital:

- `secret`: semnarea cu un "secret", folosind algoritmul **HMAC**

- `public/private key`: semnarea cu o cheie publică/privată, folosing algoritmele **RSA** sau**ECDSA**

Semnarea cu token previne atacurile cibernetice **man-in-the-middle**.

Un atac **man-in-the-middle** apare atunci când atacatorul **interceptează** și **modifică** mesajele dintre două persoane.

De parcă un poștaș decide să deschidă poșta și să schimbe scrisorile.

Persoanle respective cred că comunicarea lor este privată.

Cu toate acestea, întreaga conversație poate fi modificată de man in the middle, așa cum sugerează și numele.

[/slide]

[slide hideTitle]

# Când se folosește JWT?

Există două cazuri de utilizare universale pentru **JWT**:

- **Autorizare**

- **Schimb de informatii**

**JWT** este bun pentru **autorizare** datorită **semnăturii digitale** și **fiabilității** sale.

**După** o autentificare reușită, tokenele sunt **trimise la fiecare cerere** pentru a **verifica** ceea ce este **permis** utilizatorului să facă.

Capacitatea de a transfera informații într-un mod **sigur** și **securizat** face **JWT** util și pentru orice alt tip de schimb de date.

Celebrul protocol **OAuth 2.0** folosește mai multe tokene pentru autorizare:

## Access token 

Aplicațiile utilizează **access tokens** pentru a face cereri către un API cu acreditările utilizatorului.

Este utilizat în scopuri de **autorizare**, permițând accesul la date private și/sau inaccesibile în alt mod.

Aceste tokene trebuie să își păstreze **confidențialitatea** atât în ​​timp ce sunt transportate, cât și stocate.

Ca rezultat, acestea pot fi trimise numai prin conexiuni **HTTPS**.

## Identity token

Un **token de identitate** este returnat de server cu scopul de a codifica informațiile de autentificare ale utilizatorului curent.

Ceea ce le face diferite de tokenele de acces este faptul că pot fi înțelese de **terțe părți**, în loc doar de serverul de resurse.

Tokenele ID sunt deseori solicitate alături de tokenul de acces.

## Refresh token 

O caracteristică importantă a tokenelor de acces este că au o durată de viață **relativ scurtă**.

Deși acest lucru este excelent pentru **securitate**, acesta introduce o problemă pe termen lung - dacă o aplicație încearcă să acceseze o resursă **după ce simbolul de acces a expirat**, trebuie **să ceară** utilizatorului permisiunea din nou.

**Tokenele Refresh** vizează abordarea acestei probleme obținând automat un nou token de acces la expirarea celui actual.

[/slide]

[slide hideTitle]

#  Structura JWT 

Un **JSON Web Token** constă din **trei** părți:

- **Header**: specifică **tipul de simbol** și **algoritmul de semnătură**

- **Payload**: conține datele transferate într-un format `base64`

- **Signature**: conține valoarea de verificare

JWT și **structura sa**, vizualizate:

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-3.jpg" /]

[/slide]

[slide hideTitle]

#  Utilizarea JWT 

Înainte de a utiliza **JWT**, instalați-l cu următoarea comandă:

```js
npm install jsonwebtoken
```

Acesta este modul în care se semnează un Token Web JSON:

```js
const jwt = require("jsonwebtoken");

const payload = {
    name: "Garry",
    age: 27
}; // datele de transferat
const options = {
    expiresIn: "2d"
}; // setează data de expirare după 2 zile
const secret = "signing secret"; // secret pentru semnătură

const token = jwt.sign(payload, secret, options);

console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FycnkiLCJhZ2UiOjI3LCJpYXQiOjE2MDk4ODc5NzMsImV4cCI6MTYxMDA2MDc3M30.AIuFu04O39uokaGwfxy7iWzjr9vnsI00gqxXJ-peT8Y
```
Metoda `sign` acceptă the payload, împreună cu cheia și un obiect **options**.

Acest obiect poate conține mai multe proprietăți, inclusiv:

- `algorithm` - valoarea implicită este `HS256`
- `expiresIn` - poate fi un număr exprimat în secunde (cum ar fi 120, timp de 2 minute) sau un șir de timp - '10 h', '5 days', '10d'
- `mutatePayload` - un boolean, dacă este egal cu true, permite modificarea directă a payload prin metoda `sign`

Procesul de semnare **JWT** este **reversibil**

Decodarea simbolului se efectuează după cum urmează:

```js
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FycnkiLCJhZ2UiOjI3LCJpYXQiOjE2MDk4ODc5NzMsImV4cCI6MTYxMDA2MDc3M30.AIuFu04O39uokaGwfxy7iWzjr9vnsI00gqxXJ-peT8Y";

const decodedToken = jwt.verify(token, "signing secret"); // decode with the initial secret key

console.log(decodedToken); // {name: 'Garry', age: 27, iat: 1609887973, exp: 1610060773}
```

Metoda `verify` acceptă tokenul, împreună cu o cheie secretă sau publică și returnează payload decodificat.

Puteți afla mai multe informații despre **JWT** pe [website](https://jwt.io/).

[/slide]

