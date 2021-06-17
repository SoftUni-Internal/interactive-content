# Concepte de Autentificare

[slide hideTitle]

# Tipuri de Erori

Atunci când avem erori în aplicația noastră, trebuie să le gestionăm în mod corespunzător.

Există mai multe tipuri de erori:

- **Erorile tehnice** sau **Erorile de rețea**:

  * atunci când serverul este oprit

- **Erorile obișnuite** sau **așteptate**:

  * sunt previzibile

  * un eșec al unei cereri de solicitare a bazei de date este previzibil - este posibil să căutați o resursă inexistentă

- **Bugs**, cunoscute și sub numele de **erori logice**:

  * aceste erori sunt **nu sunt previzibile**, deoarece software-ul nu funcționează așa cum se așteaptă

  * încercarea de a **apela o funcție care nu există** este o eroare logică

  * aceste erori sunt din vina noastră și ar trebui să le corectăm în timpul procesului de dezvoltare

[/slide]

[slide hideTitle]

# Lucrul cu Erorile

Există un obiect **built-in error** în **node.js**, pe care îl putem folosi pentru a arunca o eroare.

Pentru a prinde erorile în codul **sincron**, trebuie să folosim un bloc **try-catch**.

Pentru codul **asincron**, folosim `then().catch()`.

Putem gestiona erorile direct cu **try-catch** sau `then().catch()`. 

În funcție de preferințele noastre, putem utiliza instrumentele **ExpressJS**.

Atunci când folosim funcționalitatea **ExpressJS**, trebuie să folosim funcția `next()`, care apelează un middleware.

Acesta este un exemplu de utilizare a funcției `next`:

```js
async function validateCookies(req, res, next) {
    await cookieValidator(req.cookies);
    next();
}

app.use(cookieParser());
```

[/slide]

[slide hideTitle]

# Procesul de Lucru Sincronizat cu Erorile

Utilizăm declarația bloc **try-catch** cu **async** și **await** pentru a gestiona erorile în mod sincron.

Iată un exemplu:

```js
const User = require('../models/User/');

async (req, res, next) => {
    const {
        username,
        password
    } = req.body;
    try {
        const currentUser = await User.findOne({
            username
        });
        console.log(username);
    } catch (error) {
        console.error(error);
    }
};
```

În instrucțiunea `try{...}`, imprimăm **username** pe consolă.

În instrucțiunea `catch(error){...}`, se afișează **eroarea** pe consolă.

[/slide]

[slide hideTitle]

# Procesul de Lucru Asincron cu Erori

Putem gestiona erorile asincrone cu ajutorul instrucțiunii bloc `.then().catch()`:

```js
Post.findById(productId)
    .then((product) => {
        console.log(product)
    })
    .catch((error) => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    });
```

În instrucțiunea `then()`, imprimăm **produs** pe consolă.

Dar dacă produsul lipsește, se va executa instrucțiunea `catch()`.

În acest caz, verificăm codul **status**.

Dacă acesta lipsește, îl stabilim la **500**.

După aceea, transmitem **eroarea** către middleware-ul `next()`.

[/slide]

[slide hideTitle]

# Gestionarea Erorilor

**Gestionarea erorilor** este importantă din mai multe motive:

- Face ca aplicația noastră să fie mai ușor de utilizat, deoarece putem trata eroarea într-un mod adecvat.
  * putem, de asemenea, să facilităm utilizatorul să contacteze un centru de asistență atunci când apare o problemă

- Dezvoltatorii beneficiază de un cod mai ușor de depanat și de întreținut

- Ne asigurăm că aplicația noastră va **continuă să ruleze**, fără accidentări fatale


Există mai multe lucruri pe care le putem face pentru a îmbunătăți **experiența utilizatorului** în astfel de momente:

- Putem **redirecționa** către o pagină de eroare

[image assetsSrc="JS-Web-Validation-And-Error-Handling.png" /]

- Afișarea unei **notificări** de eroare este o alternativă **mai puțin intruzivă** la redirecționare

  * poate fi utilizată pentru erori mai puțin importante, cum ar fi un index nevalid într-un câmp de **input**.

- Fiecare răspuns de la API ar trebui să aibă un **cod de stare specific** și **informații bine descrise** despre eroare

[/slide]
