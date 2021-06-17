[slide hideTitle]

# Rezumat

## În această lecție ați învățat:

- Ce este validarea
   * **împiedicarea** ajungerii în baza de date a informațiilor incorecte  
   * se face prin notificarea **utilizatorului** pentru date formatate necorespunzător 

- **express-validato** poate valida și igieniza datele

```js
body('email').isEmail()
```

```js
body('email').isEmail().normalizeEmail();
```


- Validatorul **Mongoose** folosește **scheme** pentru a configura modelele

```js
schema.pre('validate', () => {});
schema.post('validate', () => {});
schema.pre('save', () => {});
schema.post('save', () => {});
```

- Există trei tipuri principale de erori
  * erori **tehnice** - apar ca urmare a unor probleme hardware
  * erori **așteptate**
  * **băguri**, cunoscute ca erori logice


- Putem gestiona erorile folosind un bloc `try-catch`.

```js
try {
    console.log('Hello');
} catch (error) {
    console.error(error);
}
```

- Pentru operațiuni **asincrone**, utilizați `then().catch()`.

```js
.then((exemplu) => {
        console.log('Hello');
    })
    .catch((eroare) => {
        console.error(error);
    });  
```

## În lecția următoare veți învăța:

- **Implementare**:

   * cum să configurați **Heroku**.

   * crearea unui depozit **Git** și a unei **baze de date**.

   * **implementarea** unei versiuni live a **proiectului** dvs.

[/slide]