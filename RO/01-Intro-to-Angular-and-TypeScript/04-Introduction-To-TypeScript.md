# Introducere în TypeScript

[slide hideTitle]

# Prezentare generală TypeScript

Intro-to-Angular-and-Typescript-14-15-Introduction-to-TypeScript

**TypeScript** este un **superset JavaScript** dezvoltat de Google și Microsoft.

Ne permite să scriem JavaScript **tastat**, dar nu ne forțează.

Putem instala compilatorul **TypeScript** din **npm** cu următoarea comandă: `npm install -g typescript`.

Trebuie să adăugăm extensia `.ts` la fișierele noastre pentru a utiliza **TypeScript**.

Pentru a rula fișiere  **TypeScript**, trebuie să tastăm comanda `tsc myFile.ts` în terminal.

După compilarea fișierelor, **vom primi JavaScript simplu** ca ieșire.

[/slide]

[slide hideTitle]

# Tipuri de variabile în TypeScript

Intro-to-Angular-and-Typescript-16-Variable-Types

TypeScript ne permite să avem **adnotări** atașate variabilelor.

Adnotările ne oferă posibilitatea de a **specifica** **tipul** **variabilei**.

**Tipurile** de variabile din TypeScript sunt:

-  **Boolean**

```js
   let isChecked: boolean = false;
```

-  **Number**

```js
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
```

-  **String**

```js
   let car: string = 'coupe';
```

-  **Array**

```js
   let list: number[] = [1, 2, 3]; //Recomandat
   let shoppingList: Array<number> = [1, 2, 3];
```

[/slide]

[slide hideTitle]

# Clase în TypeScript

Intro-to-Angular-and-Typescript-17-Classes

**Clasele** din **TypeScript** sunt puțin diferite de cele din JavaScript.

**TypeScript** ne oferă **modificatori de acces** și funcțiile pot avea un **tip de returnare**.

O **clasă** în **TypeScript** arată astfel:

```js
   class Greeter {
      public greeting : string;

      constructor(message : string) {
      this.greeting = message;
   }

   greet() : string {
         return `Hello, ${this.greeting}!`;
      }
   }

   let greeter : Greeter = new Greeter('world');
   console.log(greeter.greet());
```

În această clasă, proprietatea **greeting** este **publică** și, de asemenea, un **șir**.

**Constructorul** este un constructor JavaScript obișnuit, cu diferența că setăm un **tip** proprietății mesajului.

Setăm **tipul de returnare** al funcției **greet**, care returnează un **șir**.

După ce instanțierea clasei **Greeter**, se imprimă și pe consolă.

[/slide]

[slide hideTitle]

# Moștenirea în TypeScript

Intro-to-Angular-and-Typescript-18-Inheritance

**Moștenirea** în **TypeScript** este aceeași ca în **JavaScript**.

În **TypeScript** folosim cuvântul cheie **extends** pentru a moșteni o clasă.

Diferența dintre moștenirea din **TypeScript** și cea utilizată în **JavaScript**, este că în **TypeScript** putem adăuga **adnotări**.

Iată un exemplu:

```js
   class Animal {
      move(distanceInMeters: number = 0): void {
         console.log(`Animal moved ${distanceInMeters}m.`);
      }
   }

   class Dog extends Animal {
      bark(): void {
         console.log('Woof! Woof!');
      }
   }

   const dog = new Dog();
   dog.bark();
   dog.move(10);
   dog.bark();
```

Clasa **Dog** moștenește clasa **Animal**.

Clasa **Dog** va avea toate metodele pe care le are clasa **Animal**.
Adăugăm adnotarea **void** la metodele `bark()` și `move()` deoarece **nu** returnează nimic.

[/slide]

[slide hideTitle]

# Interfaces

Intro-to-Angular-and-Typescript-19-Interfaces

**Interfaces** este un alt concept furnizat de TypeScript.

Cu **interfețe**, putem separa și grupa cele mai utilizate proprietăți ale unei anumite caracteristici și le putem **reutiliza** în loc să le rescriem de fiecare dată.

Acest lucru ne permite să avem mai multe coduri **reutilizabile** care îi scad dimensiunea și complexitatea.

Putem separa **interfețele** în diferite fișiere, ceea ce le face mai ușor de adresat și de utilizat într-o aplicație.

În acest fel, dacă **trebuie să folosim interfețe**, trebuie doar să le importăm.

Dacă vom folosi o anumită **interfață**, trebuie să o adăugăm ca o **adnotare**.

Iată un exemplu:

```js
   interface Man {
      name: string;
   }

   function Person(obj: Man) {
      return `Hi, ${obj.name}`;
   }

   let john = { name: 'John' };
   console.log(john);
```

În acest exemplu, avem interfața "**Man**", utilizată în funcția **Person**.

Această funcție va returna șirul: `Hi, John`, imprimându-l pe consolă.

[/slide]

[slide hideTitle]

# Generice și enumerații

Intro-to-Angular-and-Typescript-20-Generics-and-Enumerations

Genericele permit un cod **mai flexibil** și mai **reutilizabil**, de asemenea fac ca o componentă să funcționeze cu **mai multe tipuri**.

Putem seta o funcție specifică pentru a lucra cu **orice** tip dat, dar în acest fel, după instrucțiunea return, **tipul de date** se pierde.

Putem rezolva această problemă utilizând **variabila de tip**- `T`, care ne permite să **capturăm** tipul furnizat.

De exemplu:

```js
   function identity<T>(arg: T): T {
      return arg;
   }

   let outputString = identity<string>'myString';
   let outputNumber = identity<number>5;
```

În acest exemplu, setăm tipul de date al variabilei  `outputString` ca **șir**.

Am setat variabila `outputNumber` să fie un **număr**

`outputString` va fi de tip **șir** și  `outputNumber` va fi un **număr**.

## Enumerații

**Enumerațiile** sunt un set de constante numite.

TypeScript oferă atât enumerații **numerice**, cât și **bazate pe șiruri**.

Ne ajută să creăm un **set de cazuri individuale**.

Iată o enumerație **numerică**:

```js
   enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
   }
```

Enumerațiile **numerice** pot stoca valori ca numere.

**Enumerație bazată pe șiruri**:

```js
   enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT",
   }
```

Enumerațiile **bazate pe șiruri** pot stoca șirurile ca valori.

[/slide]

[slide hideTitle]

# Module

Intro-to-Angular-and-Typescript-21-Modules

Modulele din TypeScript sunt **la fel ca în ES6**.

Iată câteva modalități de a exporta metode:

- **Exportarea** și **declararea**:

```js
   export default interface StringValidator {
      isAcceptable(s: string): boolean;
   }
```

- **Exportarea** unei funcţii **specifice**:

```js
   export { Example };
```

- **Exportați** o **funcție** cu un **nume** **diferit**:

```js
   export { Example as mainExample };
```

Iată câteva modalități de a importa metode:

- **Importarea** unei funcții **specifice**:

```js
   import { Example } from './example';
```

- **Importarea** **a tot** într-o **singură** **variabilă**:

```js
   import * as example from './example';
```

- **Importarea** unei **funcții** și **schimbarea** **numelui**:

```js
   import { Example as mainExample } from './example';
```

Dacă am folosit **exportul implicit**, putem folosi `import example from "./example";`.

Puteți afla mai multe despre TypeScript aici [here](https://www.typescriptlang.org/docs/).

[/slide]
