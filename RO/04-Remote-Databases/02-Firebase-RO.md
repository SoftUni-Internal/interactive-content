# Firebase

[slide hideTitle]

# Ce este Firebase?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/RO/JS-apps-remote-dbs-7-8-what-is-a-firebase-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Firebase** este un set de instrumente folosite pentru construirea, îmbunătățirea și dezvoltarea aplicației.

Acesta ne furnizează instrumente pentru a lucra cu majoritatea serviciilor pe care altfel programatorii ar trebui să le construiască pe cont propriu.

Acesta include **caracteristici** precum analitică, autentificare, baze de date, configurare, stocarea fișierelor, mesajerie de tip push, etc. 

Serviciile sunt **cloud-hosted** și sunt caracterizate de o scalare facilă de partea programatorului.

## Noțiuni de Bază

Asigurați-vă că aveți un cont **Google** și că sunteți **logat**.

Dați click [aici](https://console.firebase.google.com) pentru a ajunge la **Consola Firebase**.

După ce v-ați logat, ar trebui să vedeți această **fereastră**:

[image assetsSrc="Remote-Databases(19).png" /]

Creați un proiect nou dând click pe "**Add project**" sau "**Create a project**".

[image assetsSrc="Remote-Databases(2).png" /]

Alegeți un **nume** pentru proiect, de exemplu "**TestApp**", și dați click pe "**Continue**".

[image assetsSrc="Remote-Databases(3).png" /]

**Dezactivați Google Analytics**, deoarece nu veți avea nevoie de această funcție.

Apoi, dați click pe "**Create project**".

[image assetsSrc="Remote-Databases(4).png" /]

Dați click pe "**Continue**".

[image assetsSrc="Remote-Databases(5).png" /]

În continuare, trebuie să adăugăm o aplicație.

Adăugați o **aplicație web** dând click pe următorul semn: "\<\/\>".

[image assetsSrc="Remote-Databases(6).png" /]

Selectați un nume pentru App, de exemplu "**books**", și dați click pe "**Register app**".

[image assetsSrc="Remote-Databases(7).png" /]

Vom primi un script pe care îl vom folosi mai târziu când vom lucra cu Firebase SDK.

Dați click pe "**continue to console**".

[image assetsSrc="Remote-Databases(8).png" /]

## Creați o Bază de Date

Dați click pe "**Realtime Database**".

[image assetsSrc="Remote-Databases(9).png" /]

Apoi, dați click pe "**Create Database**".

[image assetsSrc="Remote-Databases(10).png" /]

Apăsați butonul "**Next**".

[image assetsSrc="Remote-Databases(11).png" /]

Alegeți opțiunea "**Start in test mode**" și dați click pe "**Enable**".

[image assetsSrc="Remote-Databases(12).png" /]

Baza de date a fost creată cu **succes**.

Copiați **URL-ul bazei de date** pentru a o putea folosi în **Postman** pentru a crea cărți.

[image assetsSrc="Remote-Databases(13).png" /]

[/slide]

[slide hideTitle]

# Operații CRUD Firebase REST API: Partea 1

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/RO/JS-apps-remote-dbs-9-10-firebase-rest-api-crud-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**CRUD** este un acronim pentru **Create**, **Read**, **Update** și **Delete**.

Acestea sunt cele patru **operații** utilizate pentru **stocarea datelor**.

În acest exemplu, vom folosi **baza de date** pe care am creat-o anterior în Firebase.

**Notă: Este posibil să nu obțineți aceleași rezultate precum cele arătate în exemple.** 

**Acest lucru se întâmplă deoarece puteți introduce date personalizate pe măsură ce experimentați cu bazele de date.**

[/slide]

[slide hideTitle]

# Operații CRUD Firebase REST API: Partea 2

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/RO/JS-apps-remote-dbs-11-accessing-firebase-rest-api-with-postman-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Preluarea Tuturor Cărților

Deschideți **Postman** și creați o nouă solicitare. 

Alegeți metoda **GET**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/.json`

Puteți să îl folosiți și pe cel de mai jos, rezultatul va fi același:

`https://softuni-remotedb.firebaseio.com/books.json`

Dați click pe butonul "**Send**" pentru a primi un răspuns de la server.

Ca rezultat, primim toate cărțile stocate în baza de date.

```js
{
    "books": {
        "books": [
            null,
            {
                "author": "J.K. Rowling",
                "title": "Harry Potter and the Philosopher's stone"
            },
            {
                "author": "Steven King",
                "title": "IT"
            },
            {
                "author": "Herman Melville",
                "title": "Moby-Dick"
            }
        ]
    }
}
```

## Preluarea unei Singure Cărți

În continuare, vom prelua o singură carte din baza de date.

Alegeți metoda **GET**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1.json`

Dați click pe butonul "**Send**" pentru a primi un răspuns de la server.

Ca rezultat, vom primi cartea de pe poziția **1** din matricea "books".

```js
{
    "author": "J.K. Rowling",
    "title": "Harry Potter and the Philosopher's stone"
}
```

Acum să încercăm să preluăm autorul unei cărți.

Alegeți metoda **GET**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1/author.json`

Dați click pe butonul "**Send**" pentru a primi răspunsul de la server.

```js
"J.K. Rowling"
```

## Adăugarea unei Cărți

În continuare, vom adăuga o nouă carte în baza de date, folosind metoda **POST**.

Alegeți metoda **POST**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books.json`

Dați click pe butonul "**Body**", iar apoi pe butonul "**raw**".

Alegeți formatul **JSON** în ultima coloană.

Apoi, copiați următorul obiect JSON:

```js
{
    "title": "New title",
    "author": "New author"
}
```

În **Postman**, rezultatul trebuie să arate ca în exemplul de mai jos.

[image assetsSrc="Remote-Databases.png" /]

Răspunsul de la server trebuie să fie un **ID**, care este un **șir aleator**.

Aici este răspunsul de la server pentru cartea pe care am creat-o.

```js
{
    "name": "-MOpe8WgPwqaw7tdKwIN"
}
```

## Eliminarea unei Cărți

Vom șterge o carte pe care tocmai am creat-o folosind metoda **DELETE**.

Alegeți metoda **DELETE**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/-MOpe8WgPwqaw7tdKwIN.json`

"-MOpe8WgPwqaw7tdKwIN" este **ID-ul noii cărți**, pe care l-am primit când am **creat** cartea.

**Când vom crea o carte, vom primi un ID diferit. Folosiți ID-ul pe care l-ați primit de la server pentru acest exemplu.**

Răspunsul de la server va fi **200 OK**.  De asemenea, va returna **null**.

## Editarea unei Cărți

Următorul pas este editarea unei cărți.

Alegeți metoda **PUT**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Dați click pe butonul "**Body**", iar apoi pe butonul "**raw**".

Alegeți formatul **JSON** în ultima coloană.

Apoi, copiați următorul obiect JSON:

```js
{
    "title": "Edited",
    "year": 1980,
    "ISBN": "954X"
}
```

Dacă cartea **există deja** în baza de date, aceasta va fi actualizată, iar noile date JSON vor înlocui datele vechi.

Dacă cartea **nu există** în baza de date, aceasta va fi **creată**.

Acesta este răspunsul de la server:

```js
{
    "ISBN": "954X",
    "title": "Edited",
    "year": 1980
}
```

Dacă vrem să actualizăm doar date specifice, de exemplu să schimbăm autorul cărții, folosim metoda **PATCH**.

Alegeți metoda **PATCH**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Dați click pe butonul "**Body**", iar apoi pe butonul "**raw**".

Alegeți formatul **JSON** în ultima coloană.

Apoi, copiați următorul obiect JSON:

`{"year":1981, "author":"Author Changed"}`

Cu ajutorul metodei **PATCH**, vom actualiza doar datele pe care le stabilim cu ajutorul obiectului **JSON**.

În acest exemplu, anul se va schimba de la **1980** la **1981**, și o nouă proprietate **author** va fi de asemenea creată.

Acesta este răspunsul de la server:

```js
{
    "year": 1981,
    "author": "Author Changed"
}
```

## Utilizarea Metodei PUT

Vom vedea încă un exemplu, dar de această dată vom folosi metoda **PUT**.

Alegeți metoda **PUT**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Dați click pe butonul "**Body**", iar apoi pe butonul "**raw**".

Alegeți formatul **JSON** în ultima coloană.

Apoi, copiați următorul obiect JSON:

"New author was assigned"

Acesta este răspunsul de la server:

```js
"New author was assigned"
```

Acum, dacă trimitem o solicitare **GET** către server, vom primi următorul răspuns:

```js
{
    "books": {
        "2": "New author was assigned",
        "books": [
            null,
            {
                "author": "J.K. Rowling",
                "title": "Harry Potter and the Philosopher's stone"
            },
            {
                "author": "Steven King",
                "title": "IT"
            },
            {
                "author": "Herman Melville",
                "title": "Moby-Dick"
            }
        ]
    }
}
```

Aveți grijă atunci când folosiți metoda **PUT**. În locul acesteia, folosiți metoda **PATCH**.

Aceasta va actualiza doar datele transmise prin intermediul obiectului JSON.

## Eliminarea unei Cărți

La final, eliminăm cartea pe care am creat-o.

Alegeți metoda **DELETE**, iar pentru **URL**, copiați următorul rând în **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Răspunsul de la server va fi **200 OK** și va returna **null**.

[/slide]

[slide hideTitle]

# Autentificare vs. Autorizare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/RO/JS-apps-remote-dbs-12-authentication-vs-authorization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Autentificarea** reprezintă validarea unor informații precum numele utilizatorului, ID și parolă, pentru verificarea identității.

**Autorizarea** are loc doar după ce identitatea a fost **autentificată** de către sistem.

Acest lucru vă oferă **acces complet** la resurse precum informații, fișiere, baze de date etc.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: All Books

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-All-Books-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **prelua toate** cărțile, trebuie să utilizați **URL-ul bazei de date** pe care l-ați primit atunci când ați creat baza de date, urmat de numele **entității**, în acest caz "**books**", și extensia "**.json**" la final.

Metoda este "**GET**":

- **URL:** `https://databaseURL/books/.json`

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Get a Book

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Get-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a prelua o **carte specifică**, alegeți metoda "**GET**" în Postman și folosiți următorul **URL**:

- `https://databaseURL/books/{bookId}.json`

Înlocuiți `{bookId}`cu ID-ul cărții pe care vreți să o preluați, de exemplu **2**.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Create Books

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Create-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a crea o carte, vom trimite o solicitare "**POST**", iar corpul JSON trebuie să respecte următorul format:

```js
{
    "Author": "Steven King",
    "title": "IT"
}
```

Trimiteți solicitarea la următorul **URL:** `https://databaseURL/books/{newBookID}.json`

Plasați **ID-ul** **noii cărți** între acolade - **4**, de exemplu

## Exemplu

[image assetsSrc="Remote-Databases(14).png" /]

Putem să facem acest lucru **direct** cu ajutorul interfeței bazei de date.

[/slide]

[slide hideTitle]

# Problemă cu Soulție: Patch Book

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Patch-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Comanda HTTP "**PATCH**" modifică o resursă HTTP existentă.

De asemenea, poate **crea** resursa dacă aceasta **nu există**.

Corpul JSON trebuie să respecte următorul format:

```js
{
    "year": 1920,
    "author": "Someone"
}
```

- **URL:** `https://databaseURL/books/bookId/-mQM-ru804j590z/.json`

Înlocuiți porțiunea `bookId/-mQM-ru804j590z` cu ID-urile corespunzătoare.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Change Book Author

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Change-Book-Author-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Următoarea sarcină este executarea comenzii "**PUT**". 

Puteți schimba numele oricărui **author**.

**Corpul** JSON trebuie să respecte următorul format:

```
"New Author Value"
```

Trimiteți solicitarea la următorul **URL:** `https://databaseURL/books/{bookId}/{firebaseAutoID}/author/.json`

Accesați **Consola Firebase** pentru a vizualiza **rezultatele**.

[/slide]
