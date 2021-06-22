# Diferite Tipuri de Erori

[slide hideTitle]

# De ce ar Trebui să Validați Datele

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-3-20-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Validarea** este procesul de verificare dacă datele îndeplinesc cerințele specifice.

Ar trebui să efectuați întotdeauna validarea pentru a preveni **datele incorecte** să vă polueze baza de date.

Dacă o parte din date nu trece prin procesul de validare, ar trebui să returnați un mesaj de eroare.

Validarea datelor în dezvoltarea web se realizează prin compararea intrărilor utilizatorului cu o schemă sau un alt model valid.

[/slide]

[slide hideTitle]

# Cum se Validează Datele

Putem valida pe **partea de  server**, pe **partea de client** și în **baza de date**.

Pentru cea mai bună securitate, ar trebui să folosim toate metodele disponibile.

Validarea pe **partea de client** nu este foarte sigură, deoarece utilizatorul poate schimba codul în browser.

Această metodă nu protejează baza de date de date incorecte.

Cu toate acestea, îmbunătățește semnificativ experiența utilizatorului prin afișarea mesajelor de eroare în timp real.

La validarea pe **server**, utilizatorul nu are acces la codul dvs.

În acest fel, funcțiile de validare nu pot fi **modificate** sau **dezactivate**.

Ar trebui să vă concentrați asupra validării **pe partea de server**.

Cu toate acestea, ar trebui să validați în baza de date pentru a acoperi posibilele greșeli.

În majoritatea motoarelor de baze de date, există **validare încorporată**, care poate fi ușor activată.

[/slide]

[slide hideTitle]

# Biblioteca Validator.js

Biblioteca **validator.js** poate fi utilizată atât pe **partea de client**, cât și pe **partea de server**.

Oferă o mare varietate de funcții de validare.

Îl puteți instala introducând `npm install validator` în terminal.

Iată un exemplu de validare **pe partea de server**:

```js
const validator = require('validator');
const body = req.body;
validator.isEmail(body.email);
```

Funcția `isEmail ()` va returna **adevărat** sau **fals**.

Următorul exemplu validează același lucru pe **partea clientului**:

```js
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
   validator.isEmail('foo@bar.com'); // => true
</script>
```

În **partea de client**, `isEmail ()` returnează **adevărat** sau **fals**.

[/slide]

[slide hideTitle]

# Express-Validator

Putem folosi **Express-Validator** pentru a încheia funcțiile **validator.js**.

**Express-Validator** este un set de **middlewares** pentru **express.js**.

Pentru a instala **express-validator**, tastați `npm install express-validator` în terminal.

Putem seta verificări pentru câmpurile de introducere a datelor cu funcția `check()`.

Aruncați o privire la următorul exemplu:

```js
const {
    check,
    validationResult
} = require('express-validator');

check('email').isEmail();
check('password').isLength({
    min: 5
});

const errors = validationResult(req);

if (!errors.isEmpty()) {
    console.error('Request Failed')
}
```

După cum puteți vedea mai sus, verificăm **e-mailul** și **lungimea** **parolei**.

Apoi, apelăm funcția `validationResult()` pentru a obține rezultatul validării.

În cele din urmă, verificăm dacă există erori în rezultat

Dacă avem erori, vom imprima un **mesaj** pe consolă.

În caz contrar, vom **continua** cu crearea contului.

[/slide]

[slide hideTitle]

# Sanitizers

**Sanitizers** sunt funcții care mențin datele în formatul corect.

Munca lor se învârte în jurul **modificării** **cererii** și eliminării **caracterelor ilegale** din date.

Dacă introducerea utilizatorului este `John@example.com`, de exemplu, după funcția de igienizare va deveni `john@example.com`.

Acestea sunt cazuri în care funcțiile **de igienizare** ar putea fi utile:

- **Normalizarea** e-mailurilor - de ex. asigurându-vă că toate caracterele sunt cu litere mici

- **Tăierea** de caractere din intrare, cum ar fi spațiile inutile

- Eliminarea caracterelor **de pe lista neagră**

Aruncați o privire la aceste funcții **de igienizare**:

```js
const {
    body
} = require('express-validator');

body('email').isEmail().normalizeEmail();
body('password').isLength({
    min: 5
}).isAlphanumeric().trim();
```

Aici, folosim metoda `normalizeEmail` pentru a ne asigura că e-mailul corespunde tuturor cerințelor.

Metoda `isLength` asigură că lungimea parolei este mai mare sau egală cu 5.

Metoda `isAlphanumeric` asigură că include atât litere, cât și cifre.
[/slide]

[slide hideTitle]

# Validare Personalizată

**Validatorii expres** ne permit să creăm **validare personalizată**, **mesaje** și **igienizare**.

Să ne uităm la acest **validator personalizat**:

```js
const {
    body
} = require('express-validator');

app.post('/user', body('email').custom(value => {
                return User.findUserByEmail(value)
                    .then(user => {
                        if (user) {
                            return Promise.reject('E-mail already in use');
                        }
                    });
            };
```

Acest cod ilustrează crearea unei cereri **POST**.

Apelăm funcția de validare `custom()` pe **corp**.

În această funcție, specificăm procesul de validare **și mesajul de eroare**.

## Igienizare Personalizată

Pentru a crea o funcție de igienizare personalizată, folosim metoda `customSanitizer()`:

```js
const {
    sanitizeParam
} = require('express-validator');

app.post(
    '/object/:id',
    sanitizeParam('id').customSanitizer((value) => {
        return ObjectId(value);
    }),
    (req, res) => {
        console.log(req.params)
    }
);
```

Avem nevoie de **parametri de igienizare** de la **validatorul expres**.

După aceea, folosim metoda `customSanitizer()`, care va returna **ObjectId**.

[/slide]

[slide hideTitle]

# Validarea Mongoose

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-15-mongoose-validation-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Validarea Mongoose este o validare **middleware** efectuată în **SchemaType**:


```js
const schema = new Schema({
    name: {
        type: String,
        required: true
    }
});
const Product = db.model('Product', schema);

// This product has no name
const product = new Product();
product.save(function(error) {
    assert.equal(error.errors['name'].message,
        'A `name` is required for this entity.');

    error = product.validateSync();
    assert.equal(error.errors['name'].message,
        'A `name` is required for this entity.');
});
```

Este înregistrat ca un cârlig `pre('save')`.

Această validare este, de asemenea, **asincronă recursivă** și o putem personaliza.

Avem opțiunea **unique**, care ajută la construirea indexurilor unice MongoDB.

Amintiți-vă că `unique` **nu** este un validator.

[/slide]

[slide hideTitle]

# Cârligele Mongoose Save și Validate

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-16-mongoose-save-validate-hooks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a declanșa cârligul `validate()` avem nevoie de funcția `save()`.

Înainte de orice cârlig  `pre('save')`, se apelează cârligele `pre('validate')` și `post('validate')`.

Iată un exemplu:

```js
schema.pre('validate', function() {
    //this gets printed first
});
schema.post('validate', function() {
    //this gets printed second
});
schema.pre('save', function() {
    //this gets printed third
});
schema.post('save', function() {
    //this gets printed fourth
});
```

Cârligele  **de validare** vor fi executate mai întâi.

Cârligul `pre('validate')` va fi primul care va rula.

Cârligele de  **salvare** se vor executa după ce cele **de validare** sunt gata.

Din nou cârligul `pre('save')` va fi înainte de `post('save')`.

[/slide]

[slide hideTitle]

# Validatoarii Încorporați Mongoose

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-17-mongoose-built-in-validators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Toate Mongoose **SchemaTypes** au validatori **încorporați**.

**Tipurile de schemă** sunt:

- Pentru **Numere**:

  * validatorii `Min` și `Max` verifică dacă o valoare este mai mare/mai mică/egală cu un anumit minim sau maxim

- Pentru **Șiruri**:

  * `enum` - validează dacă o valoare este prezentă într-o matrice
  * `match` - compară valoarea cu o expresie regulată dată
  * `trim` - setează dacă se invocă metoda  `.trim()`  pe valoarea dată, boolean
  * `lowercase` and `uppercase` - booleeni folosiți pentru a seta dacă se apelează metodele `.toLowerCase()` sau `.toUpperCase()` pe valoare

Următorul cod este un exemplu de **schemă Mongoose**:

```js
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20,
    },
});
```

În această schemă, vom seta proprietățile implicite ale unui **nume de utilizator**.

Porecla trebuie să fie de tip **"Șir"**.

Nu putem crea un utilizator fără unul, așa că setăm `required` la **adevărat**.

De asemenea, setăm `minlength` și `maxlength` pentru a ne asigura că lungimea numelui de utilizator este între **4** și **20** de caractere.
[/slide]

[slide hideTitle]

# Validatori Personalizați Mongoose

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-18-mongoose-custom-validators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Deși avem multe **validatori** încorporați, dacă nu putem găsi ceea ce avem nevoie, putem face unul **personalizat**.

Cu validatorii personalizați, putem trimite un mesaj personalizat:

```js
const userSchema = new Schema({
    phone: {
        type: String,
        validate: {
            validator: function(validate) {
                return /\d{3}-\d{3}-\d{4}/.test(validate);
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
        required: [true, 'User phone number required'],
    },
});
```

În acest exemplu, dorim să validăm un număr de telefon.

Creăm o schemă cu obiectul **telefon**, care include tipul de date.

Acesta deține două funcții ca parametri, care sunt **validator** și **message**.

Funcția **validator** ia o valoare și returnează un **boolean**.

Funcția **message** returnează o eroare dacă validarea **eșuează**.

[/slide]

[slide hideTitle]

# Erori de Validare la Baza de Date Mongoose

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-19-mongoose-validation-errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectul **ValidationError** este returnat atunci când validarea eșuează.

Obiectul următor are proprietățile **kind**, **path**, **value** și **message** .

Accesăm aceste proprietăți din `err.errors.color.Property`.

Iată un exemplu:

```js
toy.save((err) => {
  assert.equal(err.errors.color.message, 'Color');
  assert.equal(err.errors.color.kind, 'Invalid color');
  assert.equal(err.errors.color.path, 'color');
  assert.equal(err.errors.color.value, 'Green');
  ...
});
```

Proprietatea **message** returnează un mesaj de eroare.

Proprietatea **kind** returnează tipul de eroare, cum ar fi un index nevalid, sau în acest caz - "Culoare nevalidă"

Proprietatea **path** returnează istoricul proprietății de validare eșuate.

Și **value** returnează valoarea proprietății eșuate.

[/slide]

[slide hideTitle]

# Cele mai Bune Practici

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-20-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În cele din urmă, orice tip de validare este predispus la eșec.

De aceea, trebuie să avem mai multe **straturi** de validare.

Atunci când validarea eșuează, se recomandă să:

- Să se returneze un **mesaj** util și lizibil, astfel încât utilizatorul să știe ce este greșit.

- Să testăm **toate cazurile limită** din codul nostru și să ne asigurăm că toate acestea sunt gestionate

- Să evităm **reîncărcarea** paginii atunci când este posibil
  * în schimb, **notificați** utilizatorul cu un simplu **mesaj**.

Puteți găsi mai multe informații despre **express-validator** și **mongoose** aici:

- [Express-validator](https://express-validator.github.io/docs/)
- [Mongoose](https://mongoosejs.com/docs/validation.html)

[/slide]
