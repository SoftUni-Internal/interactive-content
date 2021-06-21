# Prezentare Generală MongoDB

[slide hideTitle]
# Instalarea MongoDB

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/07-08-09-10-MongoDB-Overview-Install-Configure-MongoDB-Working-with-Schell-client-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți descărca MongoDB de pe [official site](https://www.mongodb.com/download-center)

Când este instalată, MongoDB are nevoie de un **driver** care să funcționeze cu **Node.js**, **.NET** și **Java**.

``` js
npm install mongodb -g
```

## Configurarea MongoDB

Când este instalată, vor fi necesare configurații suplimentare.

- Accesați folderul de instalare și **rulați** o linie de comandă ca **administrator**

- Tastați următoarea comandă:


`<path to mongod.exe> mongod --dbpath <path to store data>`


De obicei, calea este `C:\Program Files\MongoDB\Server\3.4\bin`.

Puteți găsi mai multe informații [here.](https://docs.mongodb.com/manual/tutorial/)

## Lucrul cu MongoDB Shell Client

Există câțiva pași de urmat atunci când lucrați cu Shell Client.

- Porniți shell-ul de la o **altă** CLI (interfață linie de comandă) și tastați următoarele comenzi
  * `mongo`
  * `show dbs`
  * `use mytestdb`

Acesta este modul în care puteți adăuga sau găsi date în MongoDB:

```js
db.mycollection.insertOne({"name":"George"})
db.mycollection.find({"name":" George"})
db.mycollection.find({})
```

Puteți găsi mai multe informații despre toate celelalte metode și comenzi [here.](https://docs.mongodb.com/manual/reference/mongo-shell/)

[/slide]


[slide hideTitle]
# MongoDB Shell Client: Demo

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/MongoDB-Demo-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Lucrul cu MongoDB GUI

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/11-Working-woth-MongoDB-GUI-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Multe **interfețe grafice de utilizator MongoDB** ajută dezvoltatorii să-și gestioneze bazele de date.

Pentru această lecție, nu ne vom adânci în comparația dintre diferite interfețe.

Cele mai populare **GUI** sunt:

- [Robo 3T](https://robomongo.org/download)

- [NoSQLBooster](https://nosqlbooster.com)

- [Studio 3T](https://studio3t.com/download/)

Puteți alege unul care se potrivește cel mai mult cu proiectul dvs.

[/slide]


[slide hideTitle]

# Lucrul cu MongoDB din Node.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/12-Working-with-MongoDB-from-NodeJS-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată un exemplu simplu de conectare cu **MongoDB** folosind Node.js

``` js
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {
    if (err) {
        throw new Error(err)
    }
    const db = client.db('testdb');
    const people = db.collection('people');
    people.insert({
        'name': 'John'
    }, (err, result) => {
        people.find({
            name: 'John'
        }).toArray((err, data) => {
            console.log(data);
        });
    });
});
```

Mai întâi, importăm **MongoClient** și setăm **șirul de conexiune**.

După aceea, putem crea o instanță de **MongoClient**.

Ultimul pas este să realizăm o funcție care să colecteze datele noastre despre oamenii din interior.

[/slide]

