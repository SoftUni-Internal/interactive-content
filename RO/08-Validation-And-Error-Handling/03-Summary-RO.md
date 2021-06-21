[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/07-Validation-and-Error-Handling/interactive-js-back-end-validation-and-error-handling-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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