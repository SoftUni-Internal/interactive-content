# CRUD cu Mongoose

[slide hideTitle]

# CRUD

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/24-25-26-CRUD-with-Mongoose-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosind Mongoose, puteți efectua toate operațiunile **CRUD** oriunde doriți în codul dvs.

** CRUD ** înseamnă - **Create**, **Retrieve**, **Update**, **Delete**.

- **Create (Date persistente)**: `save()` este folosit pentru a insera o înregistrare în colecție.

Mai întâi trebuie să creăm un obiect model.

``` js
let newEmployee = new Employee(employee); // this is model object.
newEmployee.save() // Saving method
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })
```

- **Read**: Putem folosi `.find()` pentru a prelua date.

``` js
Student.find({})
```

- **Update (Modificarea datelor)**: Dacă știm ID-ul unei colecții, o putem actualiza cu `.findByIdAndUpdate()`.

``` js
Student
  .findByIdAndUpdate(id, {prop: newVal}, callback)
```

- **Delete (Eliminarea datelor)**: Putem utiliza metodele `.findByIdAndRemove()` sau `.remove()` în funcție de situație.

``` js
Student.findByIdAndRemove(id, callback)
Student.remove({name: studentName})
```


[/slide]

[slide hideTitle]

# Exemplu: Create

Aruncați o privire la următorul exemplu:

``` js
const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/unidb';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    age: {
        type: Number
    }
});
const Student = mongoose.model('Student', studentSchema);

mongoose.connect(connectionStr).then(() => {
    new Student({
            name: 'Peter',
            age: 21
        })
        .save()
        .then(student => {
            console.log(student._id)
        });
});
```

Acesta este un mod simplu de **conectare la baza de date**, **crearea unei scheme** și **construirea unui model**.

După conectarea la baza de date, **inserăm** un nou student cu proprietățile "**name**" și "**age**".

Apoi, îl salvăm folosind metoda `save()`.

În cele din urmă, imprimăm studentul adăugat.

[/slide]

[slide hideTitle]

# Exemplu: Citire

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/28-Read-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată **trei** modalități diferite de a prelua date cu Mongoose:

``` js
Student
    .find({})
    .then(students => console.log(students))
    .catch(err => console.error(err))

Student
    .find({
        name: 'Peter'
    })
    .then(students => console.log(students))

Student
    .findOne({
        name: 'Peter'
    })
    .then(student => console.log(student))
```

Prima comandă găsește toți studenții în baza de date și îi imprimă.

A doua găsește toți studenții după proprietatea name pe care o trecem și îi imprimă pe consolă.

Al treilea exemplu este folosit pentru a găsi prima apariție a unui student cu numele "Peter". 

Dacă sunt mai mulți studenți cu acel nume, folosind `FindOne()` nu se vor imprima pe toți.

Nu uitați să gestionați întotdeauna potențialele erori.

[/slide]

[slide hideTitle]

# Exemplu: Update

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/29-Update-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De asemenea, putem **actualiza** una sau mai multe entități cu mai multe metode.

``` js
Student
    .findById('57fb9fe1853ab747b0f692d1')
    .then((student) => {
        student.firstName = 'Steven'
        student.save()
    });

Student
    .findByIdAndUpdate('57fb9fe90cd76e4e2c59e1a2', {
        name: 'Steven'
    });

Student
    .update({
        firstName: 'Chris'
    }, {
        name: 'Peter'
    }, {
        multi: true
    });
```
[/slide]


[slide hideTitle]

# Exemplu: Delete

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/30-Remove-&-Count-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a elimina date din baza de date, utilizați: `remove(conditions, [callback])`.

Rețineți că, dacă condiția nu este **trecută** sau este **goală**, atunci toate înregistrările vor fi **eliminate**.

Aruncați o privire la următorul exemplu:

``` js
userModel.remove({userid:"George"})
// Removes the record with userid "George"
```

Putem **elimina** toate înregistrările colecției de utilizatori:

``` js
userModel.remove()
```

[/slide]

[slide hideTitle]

# Demo: Mongoose
[/slide]