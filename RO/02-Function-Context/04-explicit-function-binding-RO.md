# Explicit Function Binding

[slide hideTitle]

# Explicit Binding

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-16-17-explicit-binding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Legarea ne permite să modificăm contextul unei funcții, schimbând în esență ceea la ce ne indică cuvântului cheie `this`.

**Explicit binding** este ceea ce se întâmplă atunci când folosim `call()`, `apply()` sau `bind()` pe o funcție. 

Acest lucru ne permite să legăm o funcție de un anumit obiect și să o folosim ca și cum ar fi o metodă a acelui obiect.

Aceasta schimbă în esență contextul `this`. Cu alte cuvinte, legăm funcția de un context la alegerea noastră.

Să ne uităm la un exemplu folosind `call()`:

```js live
function speak(message) {
    console.log(`My name is ${this.name}. ${message}`);
}

let person = {
    name: 'John'
};

speak.call(person, 'This is my story...');
```
În mod normal `this` ar indica  la **global object** sau **window** și ar fi returnat `undefined` pentru `this.name`.

Am legat în mod explicit obiectul **person** de funcția `speak()` folosind `call()`.

Este o funcție externă, dar totuși se comportă ca și cum `speak()` este o metodă care aparține obiectului person.

[/slide]

[slide hideTitle]

# Changing the Context: Call()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-18-19-changing-the-context-call-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`call()` apelează o funcție cu o valoare dată de `this` și argumente opționale. Schimbă contextul funcției la obiectul dat

```js
functionName.call(objectToBind, additionalArguments);
```

Puteți avea 0, 1 sau mai multe argumente și atunci când apelați obiectul le puteți adăuga astfel `function.call(object, argument1, argument2, argumentN)`;

Metoda `call()` nu face o copie a funcției, ci o execută imediat.

```js live
let praise = function(...praises) {
    console.log(`This is ${this.name}.`);

    let compliments = praises.reduce((acc, curr) => {
        let el = `-- ${curr}\n`;
        return acc + el;
    }, `He is:\n`).trim();
    return compliments;
}

let dog = {
    name: 'Rex',
}

console.log(praise.call(dog,
    'A good boy', 'My best friend'));


let cat = {
    name: 'Charlie'
}

console.log(praise.call(cat,
    'A good companion', 'A goofball'));
```

În exemplul de mai sus, puteți vedea că am folosit aceeași funcție care nu aparținea niciunui obiect și am legat acele obiecte de acesta.

De fiecare dată când am folosit `call()` contextul a `this` a fot diferit.

[/slide]

[slide hideTitle]

# Changing the Context: Apply()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-20-changing-the-context-apply-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`apply()` și `call()` au același scop. Cu toate aceste, `call()` ia o listă de argumente, în timp ce, `apply()` ia un matrice.

Pentru a ilustra acest lucru cu exemplul anterior:

Folosind ``call()``:

```js
console.log(praise.call(dog,
    'A good boy', 'My best friend'
));
```

Folosind ``apply()``:

```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
));
```

Dacă aveți o serie de argumente, puteți utiliza în continuare `call()` folosind operatorul spread:

```js
functionName.call(thisContext, ...[yourArray]);
```

[/slide]


[slide hideTitle]

# Example of Apply()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-21-apply-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const firstPerson = {
    name: 'Peter',
    prof: 'Fisherman',
    shareInfo: function() {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};

const secondPerson = {
    name: 'George',
    prof: 'Manager'
};
firstPerson.shareInfo.apply(secondPerson);
// George works as a Manager
```

[/slide]

[slide hideTitle]

# Changing the Context: Bind()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-22-changing-the-context-bind-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`bind()` creează o **funcție nouă** și are setat `this` la orice valoare furnizata.

Funcția nu este executată direct când se utilizează `bind()`. 

În esență, permite obiectelor să împrumute metode de la alte obiecte fără ca noi să facem manual copii ale acelei metode.

Să ne imaginăm că avem un **student** care poate `study()`:

```js
let student = {
    alias: `Motivated student`,
    subject: 'Web Development',
    study: function(hours) {
        console.log(`${this.alias} studies 
      ${this.subject} ${hours} hours a day`);
    }
};
```

Avem și un profesor care poate `teach()`:

```js
let professor = {
    alias: `Grumpy professor`,
    subject: 'Mathematics',
    teach: function(hours) {
        console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
    }
};
```

Acum imaginați-vă că studentul a avansat atât de mult încât acum este capabil să `teach()`. Folosiți `bind()` pentru a împrumuta metoda de la obiectul **professor**.

```js
let teach = professor.teach.bind(student, 2);
teach();
// Motivated student teaches Web Development for 2 hours a day
```

Folosind `bind(student, 2)` am trecut obiectul **student** ca primul argument, schimbând contextul `this` din **professor** la **student** și am trecut **2** ca al doilea argument.

Vedeți-o în acțiune:

```js live
let student = {
    alias: `Motivated student`,
    subject: 'Web Development',
    study: function(hours) {
        console.log(`${this.alias} studies 
      ${this.subject} ${hours} hours a day`);
    }
};

let professor = {
    alias: `Grumpy professor`,
    subject: 'Mathematics',
    teach: function(hours) {
        console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
    }
};

let teach = professor.teach.bind(student, 2);
teach();
```

Acest lucru este cunoscut ca și funcție de împrumut/borrowing în JavaScript. 

[/slide]

[slide hideTitle]

# Example of Bind()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-23-bind-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const x = 42;
const getX = function() {
    return this.x;
}
const module = {
    x,
    getX
};
const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```

[/slide]

[slide hideTitle]

# Problem with Solution: Area and Volume Calculator

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-26-solution-area-and-volume-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Area and Volume Calculator" taskId="js-advanced-function-context-Area-and-Volume-Calculator" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function calculator(area, vol, input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Scrieți o funcție care **calculează**  **area** și **volumul** unei figuri, care este **definită** prin **coordonatele sale** 
(**x**, **y**, **z**). 

Funcțiile **zona** și **vol** sunt **transmise ca parametri** funcției dvs:

```js
function area() {
  return this.x * this.y;
};
```

```js
function vol() {
  return this.x * this.y * this.z;
};
```

## Input
Veți primi 3 parametri - zona, funcțiile și vol ca și un șir, care conține coordonatele fugurei.

**Pentru mai multe informații verificați exemplele**


## Output
Rezultatul trebuie să fie **returnat** ca o **matrice de obiecte**. Fiecare obiect are **două proprietăți**: **zona** și **volumul** al figurii.

```js
[
  { area: ${area1}, volume: ${volume1} },
  { area: ${area2}, volume: ${volume2} },
  ...
]

```

**Notă: trimiteți numai funcția de rezolvare**.

# Examples

## Input

```js
area, vol, '[ 
{"x":"1","y":"2","z":"10"}, 
{"x":"7","y":"7","z":"10"}, 
{"x":"5","y":"2","z":"10"} 
]'
```

## Output

```js
[
  { area: 2, volume: 20 }, 
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
]
```


## Input

```js
area, vol, '[ 
{"x":"10","y":"-22","z":"10"}, 
{"x":"47","y":"7","z":"-5"}, 
{"x":"55","y":"8","z":"0"}, 
{"x":"100","y":"100","z":"100"}, 
{"x":"55","y":"80","z":"250"} 
]' 
```

## Output

```js
[
  { area: 220, volume: 2200 },
  { area: 329, volume: 1645 },
  { area: 440, volume: 0 },
  { area: 10000, volume: 1000000 },
  { area: 4400, volume: 1100000 }
]
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
function area() \{
    return this.x \* this.y\*156;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 312, volume: 20 \},
  \{ area: 7644, volume: 490 \},
  \{ area: 1560, volume: 100 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y\*3;
\};
function vol() \{
    return this.x \* this.y \* this.z/16;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 6, volume: 1.25 \},
  \{ area: 147, volume: 30.625 \},
  \{ area: 30, volume: 6.25 \}
\]
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 2, volume: 20 \},
  \{ area: 49, volume: 490 \},
  \{ area: 10, volume: 100 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"10","y":"-22","z":"10"\},\{"x":"47","y":"7","z":"-5"\},\{"x":"55","y":"8","z":"0"\},\{"x":"100","y":"100","z":"100"\},\{"x":"55","y":"80","z":"250"\}\]');
let expected = \[
  \{ area: 220, volume: 2200 \},
  \{ area: 329, volume: 1645 \},
  \{ area: 440, volume: 0 \},
  \{ area: 10000, volume: 1000000 \},
  \{ area: 4400, volume: 1100000 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
