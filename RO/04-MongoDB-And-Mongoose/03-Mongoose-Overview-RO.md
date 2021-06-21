# Mongoose

[slide hideTitle]

# Prezentare Generală a Mongoose

**Mongoose** este o **bibliotecă de modelare a datelor obiectelor** pentru MongoDB și Node.Js.

Este folosit pentru a gestiona relațiile dintre date și pentru a traduce obiectele noastre în cod.

Acestea sunt câteva dintre caracteristicile sale:

- Oferă o soluție **simplă**, **bazată pe schemă** pentru **modelarea** datelor aplicației dvs.

  * *schema* descrie câmpurile proprietăților

- Deoarece MongoDB este o bază de date de documente NoSQL fără schemă, putem stoca documente **JSON** în ea

- Extinde **interogările** native

Pentru a o **instala**, trebuie doar să deschideți o **linie de comandă** și să tastați:

```js
npm install mongoose
```

Există câteva avantaje ale utilizării **Mongoose** peste **MongoDB nativ**:

- Atunci când se utilizează **Mongoose**, eliminăm necesitatea de a utiliza **colecții denumite**, deoarece oferă un **strat de abstractizare** lui **MongoDB**

- Putem scrie funcții noi care pot fi atașate la **Models** în Mongoose

- Interogările utilizează înlănțuirea funcțiilor

Acest lucru face codul mai flexibil și mai ușor de citit.

Puteți afla mai multe despre **MongooseJS** [here.](https://mongoosejs.com/docs/api.html)


## Lucrul cu Mongoose în Node.js

Pentru a lucra cu Mongoose, trebuie să încărcăm următorul **modul**::

```js
const mongoose = require('mongoose')
```

Apoi, ne conectăm la baza de date cu metoda `.connect()`:

```js
mongoose.connect('mongodb://localhost:27017/unidb')
```

Aceste două linii de cod sunt tot ce avem nevoie pentru a începe să lucrăm cu Mongoose.

## Găzduire MongoDB

Pentru a găzdui o **bază de date** în serviciul global cloud **MongoDB** accesați [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) și înregistrați-vă.

Puteți stoca până la 512 MB de date gratuit.

[/slide]

[slide hideTitle]
# Modele

Modelele sunt constructori compilați din definițiile **Schemei**.

**Schema** în sine formează structura documentului.

Poate defini proprietăți precum valori implicite, validatoare, în timp ce **modelul** oferă o interfață pentru baza de date.

Puteți crea o nouă schemă ca instanță a `mongoose.Schema`:

Aruncați o privire la următorul exemplu:

``` js
const exampleSchema = new mongoose.Schema({
    propString: String,
    propNumber: Number,
    propObject: {},
    propArray: [],
    propBool: Boolean
});
const Model = mongoose.model('Example', exampleSchema);
```

În primul rând, creăm o nouă schemă în care definim proprietățile modelului.

Când apelăm `mongoose.model()` pe o schemă, acesta **compilează** un model gata de utilizare.

## Modele de metode

Modelele Mongoose sunt doar **constructori de obiecte** JavaScript.

Acestea vin cu diferite metode **methods**.

Iată cum diferă sintaxa lor de JS simplu:

``` js
const studentSchema = new mongoose.Schema({…});
studentSchema.methods.getInfo = function() { // Avoid arrow functions
    return `I am ${this.firstName} ${this.lastName}`;
};
```

După cum puteți vedea, alte metode pot fi adăugate la o schemă.

[/slide]

[slide hideTitle]

# Modele de proprietăți virtuale

Putem crea Proprietăți **Virtuale** care există doar în **Modelul Mongoose** și nu în MongoDB.

Sunt câmpuri suplimentare pentru un model dat.

Ar trebui mai întâi să creăm o nouă schemă pentru exemplul nostru:

``` js
// Definim schema de utilizator
var userSchema = new Schema({  
    firstName: String,
    lastName: String
});

// Atunci ne compilăm modelul
var User = mongoose.model('User', userSchema);

// Ultimul pas este de a adăuga un utilizator nou
var employee = new User({  
    firstName: 'Jason',
    lastName: 'Harris'
});
```

Dacă dorim să obținem numele complet al angajaților noștri, putem concatena manual numele și prenumele.

``` js
console.log(mentalist.first + ' ' + mentalist.last); // Jason Harris 
```

Acest lucru se poate face folosind și **câmpuri virtuale**.

În acest fel, evităm concatenarea de fiecare dată când avem nevoie de un nume complet.

Proprietățile virtuale au atât **gettere**, cât și **settere**.

``` js
userSchema.virtual('fullname').get(function() {  
    return this.firstName + ' ' + this.lastName;
});
```

Proprietatea virtuală a numelui complet va imprima aceeași ieșire ca mai sus:

``` js
console.log(employee.fullname); // Jason Harris
```

Putem folosi setere pentru a ne manipula șirul.

Acest exemplu **împarte** numele trecut la fiecare spațiu alb.

``` js
userSchema.virtual('fullname').set(function (name) {  
  var split = name.split(' ');
  this.first = split[0];
  this.last = split[1];
});
```

[/slide]

[slide hideTitle]

# Validarea Proprietății

Folosind Mongoose, dezvoltatorii pot **defini** **validări** personalizate pe proprietățile lor.

Validarea este definită în *SchemaType*.

``` js 
studentSchema.path('firstName')
    .validate(function() {
        return this.firstName.length >= 2 &&
            this.firstName.length <= 10
    }, 'First name must be between 2 and 10 symbols long!') // Error message passed as a second parameter
```

Prin validare, ne putem asigura că datele "**rele**" nu intră în aplicație.

**Mongoose** are **încorporat** un suport pentru schemele de date și validarea automată a datelor atunci când acestea sunt persistente.

**Validatoarele Mongoose** sunt ușor de configurat.

[/slide]

[slide hideTitle]

# Exportarea modulelor

A avea toate definițiile modelului în modulul **principal** este o practică proastă.

Acesta este motivul pentru care Node.js are **module** în primul rând.

```js
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    facultyNumber: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('Student', studentSchema);
```

Putem pune fiecare **model** într-un **modul** diferit și **putem încărca** toate modelele la începutul programului nostru.

```js
const Student = require('./models/Student');
```

[/slide]

[slide hideTitle]

# Mongoose: Demo

//MongoDB-Demo-2

[/slide]

