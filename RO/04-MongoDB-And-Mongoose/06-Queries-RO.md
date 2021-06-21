# Interogări Mongoose

[slide hideTitle]
# Interogări

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/34-35-Mongoose-Queries-1-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa **Mongoose Query** oferă o interfață pentru **găsirea**, **actualizarea** și **ștergerea** documentelor.

**Mongoose** definește toate interogările driverului nativ MongoDB într-un mod mai **clar** și **ușor de înțeles**.

Acesta este un exemplu de scriere a unei interogări în sintaxă implicită **MongoDB**:

``` js
{
  $or: [
    {conditionOne: true},
    {conditionTwo: true}
  ]
}
```
Aici putem găsi un obiect bazat pe două criterii dacă cel puțin unul dintre ele este adevărat.

Pentru a face acest lucru, folosim  `$or` și trecem o serie de obiecte, unde inserăm câte condiții avem nevoie, astfel încât să putem găsi un anumit obiect în baza de date.

Acesta este un exemplu de scriere a aceleiași interogări în sintaxa **Mongoose**:

``` js
.where({ conditionOne: true })
.or({ conditionTwo: true })
```

[/slide]


[slide hideTitle]

# Exemplu de Interogări Mongoose

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/36-37- Mongoose-Queries-1-2-Examples-1-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O mulțime de metode precum `.find()` returnează o **interogare mongoose**.

``` js
const Character = mongoose.model('Employee', Schema({
    fname: String,
    lname: String,
    age: Number
}));

const query = Character.find();
query instanceof mongoose.Query; // true

// Execute the query
const docs = await query;
```

**Mongoose** acceptă multe interogări diferite:

- `.where()`: **For equality / Non-equality**

``` js
Student.findOne({'lastName':'Higgins'})
```

``` js
Student.find({}).where('age').gt(7).lt(14)
```

``` js
Student.find({}).where('facultyNumber').equals('12399')
```

- `.select()`: **Selection of some properties**

```js
Student.findOne({'lastName':'Smith'}).select('name age')
```

- `.sort()`: **Sorting by a given criteria**

``` js
Student.find({}).sort({age:-1})
```

**Cuvintele cheie** pe care le puteți utiliza atunci când sortați sunt: **asc**, **desc**, **ascending**, **descending**, **1**, **-1**.

- `.limit()` / `.skip()`: **Limitați sau Omiteți rezultatele interogării**

```js
Student.find({}).sort({age:-1}).skip(10).limit(10)
```

Uneori avem nevoie de toate documentele și alteori avem nevoie doar de câteva.

Pentru aceasta, putem folosi metoda `limit()` care poate limita numărul de documente din rezultatul nostru de ieșire.

În exemplul de mai sus, `skip()` este folosit pentru a sări peste primele "n" documente, unde "n" este un număr dat.

Putem **stivui** diferite metode una peste alta

``` js
Student.find({})
    .where('firstName').equals('George')
    .where('age').gt(18).lt(65)
    .sort({
        age: -1
    })
    .skip(10)
    .limit(10)
```

[/slide]

[slide hideTitle]

# Model de Populare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/38-39-40-41-Model-Population-Definition-Example-Population-Query-Conditions-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Popularea este procesul de **înlocuire automată** a **căilor specificate** într-un document cu document(e) din **alte** colecții.

Putem **să populăm** un singur document, mai multe documente, un obiect simplu, mai multe obiecte simple sau toate obiectele returnate dintr-o interogare.

```js
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    facultyNumber: String
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

const subjectSchema = new mongoose.Schema({
    title: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const Student = mongoose.model('Student', studentSchema);
const Subject = mongoose.model('Subject', subjectSchema);
```

În acest exemplu, creăm **două modele** care fac referire unul la celălalt.

Pentru a încărca toate datele la care se face referire cu entitatea, utilizați metoda `populate()`.

``` js
Student.findOne({
        name: 'Peter'
    })
    .populate('subjects')
    .then(student => {
        console.log(student.subjects)
    })
```

De asemenea, putem încărca **mai multe** căi:

``` js
Student.findOne({
        name: 'Peter'
    })
    .populate('subjects')
    .populate('teacher')
    .then(student => {
        console.log(student.teacher)
        console.log(student.subjects)
    })
```

Rețineți următoarele caracteristici ale metodei `populate()`:

- Dacă nu se găsește niciun document, atunci câmpul va fi **null**

- Putem **înlănțui** metodele de completare a câmpurilor **multiple**

- Dacă avem o matrice de documente care **nu sunt găsite**, aceasta va returna o **matrice goală**

- Dacă există două metode care populează același câmp, a doua metodă o va **înlocui** pe prima

Putem popula pe baza unei **condiții**:

``` js
Subject.
find({})
    .populate({
        path: 'students',
        match: {
            age: {
                $gte: 19
            }
        },
        select: 'name facultyNumber',
        options: {
            limit: 3
        }
    })
```

Puteți citi mai multe despre populare [here.](mongoosejs.com/docs/populate.html)

[/slide]
