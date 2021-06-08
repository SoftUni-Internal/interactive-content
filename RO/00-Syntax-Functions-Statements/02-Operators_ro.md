# Operatori
[slide hideTitle]

# Operatorii aritmetici

**Operatorii aritmetici** sunt simboluri rezervate în cod care sunt utilizate pentru efectuarea operațiilor aritmetice.

Ele reprezintă operatorii aritmetici din matematică.

Valorile din partea stângă și dreaptă a unui operator aritmetic se numesc **operanzi**.

Operațiunile aritmetice returnează o singură valoare numerică ca rezultat.


| **Operator** | **Descriere** |
| --- | --- |
| \+ | Adunare |
| \+\+ | Incrementare|
| \- | Scădere |
| \-\- | Decrementare |
| \* | Înumlțire | 
| \*\* | Exponențierea (ES2016 în continuare) |
| \/ | Împărțire |
| \% | Funcția modulo (împărțirea cu rest) |



## Adunarea și scăderea

Prin utilizarea operatorului `+` sau `-` putem aduna sau scădea numere.

```js live
let a = 20;
let b = 4;
let x;

x = a + b;
console.log('a + b = ', x)

x = a - b;
console.log('a - b = ', x)
```

Utilizarea operatorului  `+` pe valori de date șir va concatena cei doi operanzi

```js live
let a = 'Harry';
let b = ' Mack';
let x;

x = a + b;
console.log('a + b = ', x)
```

Utilizarea operatorului  `+` cu un șir și un număr va rezulta din nou în concatenarea acestora.

```js live
let a = "Let's go, ";
let b = 1212;
let x;

x = a + b;
console.log('a + b = ', x)
```

## Multiplication and Division

Înmulțirea se efectuează prin operatorul `*` , iar divizarea - prin operatorul `/`.

```js live
let a = 20;
let b = 4;
let x;

x = a * b;
console.log("a * b = ", x)

x = a / b;
console.log("a / b = ", x)
```

În JavaScript, nu există **implicit o divizare întreagă**, deoarece toate numerele sunt duble.

V-ați aștepta ca rezultatul împărțirii a 6 la 5 să fie egal cu 1:

```js live
let result = 6 / 5;
console.log(result);
```
După rularea codului veți vedea că ieșirea este **1.2**.

Puteți ocoli acest comportament implicit și puteți efectua împărțirea numărului întreg folosind `Math.floor()`.

```js live
let result = Math.floor(6 / 5);
console.log(result);
```

Dar ce se întâmplă în caul în care rezultatul împărțirii este un număr negativ? 

```js live
let result = Math.floor(-6 / 5);
console.log(result);
```

În mod obișnuit împărțirea -6 la 5 este egal cu -1, dar obținem -2.

Puteți folosi `Math.trunc()` dacă vă așteptați la o valoare negativă ca rezultat al operației, aceasta va funcționa de la ES6 în continuare.

```js live
let result = Math.trunc(-6 / 5);
console.log(result);
```
## Incrementarea și decrementarea

Puteți incrementa și decrementa valoarea numerică cu operatorii `++` și `--`.

```js live
let a = 6;
a++;
console.log(a);
```

```js live
let a = 6;
a--;
console.log(a);
```



[/slide]

[slide hideTitle]

# Operatorii de atribuire

**Operatorii de atribuire** atribuie o valoare operandului din stânga, în funcție de valoarea operandului din dreapta.

Mai jos puteți găsi câțiva dintre operatorii de atribuire utilizați în mod obișnuit:


| **Operator** | **Prescurtare** | **Descriere** |
| --- | --- | --- |
| x \= y | x \= y | Atribuie o valoare unei variabile |
| x \= x \+ y | x \+\= y | Adaugă și atribuie |
| x \= x \- y | x \-\= y | Scade și atribuie |
| x \= x \* y | x \*\= y |Înmulțește și atribuie|
| x \= x \/ y | x \/\= y | Împărțește și atribuie |
| x \= x \% y | x \%\= y | Modulo și atribuie |
| x \= x \*\* y | x \*\*\= y | Exponențiere și atribuie |

Puteți folosi fie expresia completă, fie reprezentarea ei pe scurt.

## Exemple

- **Subtraction assignment**:

```js live
let a = 5;
let y = 25;
y -= a;

console.log(y);
```
Cele de mai sus sunt la fel ca `y = y - a`.

- **Division assignment**:

```js live
let a = 5;
let y = 25;
y /= a;

console.log(y);
```

Folosirea prescurtării  operatorului de atribuire a împărțirii este la fel ca   `y = y / a`.


[/slide]

[slide hideTitle]

# Operatorii de comparație

**Operatorii de comparație** sunt utilizați în instrucțiuni logice atunci când sunt comparați doi operanzi.

| **Operator** | **Descriere** | 
| --- | --- |
| \=\= | Verifică egalitatea între două valori | 
| \=\=\= | Verifică **valoarea egală** și **tipul egal** |
| \!\= | Verifică dacă două valori sunt diferite |
| \!\=\= | Verifică dacă **valorile și tipurile acestora** sunt egale |
| \> | Verifică dacă valoarea  operandului din stânga este **mai mare decât** din dreapta |
| \>\= | **Mai mare decât** sau **egal cu** |
| \< | **Mai mic decât** |
| \<\= | **Mai mic decât** sau **Egal cu** |

Operaațiile de comparație se evaluează la valori boleene și rezultatul poate fi `true` sau `false`.

O comparație simplă între două valori numerice:

```js live
let a = 400;
let b = 1;
let result = a > b;
console.log(result);
```

Cele din sus returnează `true` (400 > 1).

Să vedem comparațiile de egalitate - `==` și `===`:

```js live
let a = 777;
let b = 777;
let result = a == b;
console.log(result);
```
Rezultatul este `true`, după cum se așteaptă.

```js live
let a = 777;
let b = '777';
let result = a == b;
console.log(result);
```
Rezultatul este `true`, ceea ce pare a fi greșit, deoarece valoarea lui  **b** este un șir.

Pentru a obține o comparație exactă între cele două, trebuie să verificăm egalitatea în funcție de tipul de date prin utilizarea operatorului  `===`.

```js live
let a = 777;
let b = '777';
let result = a === b;
console.log(result);
```

```js live
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(3 != '3'); // false
console.log(3 !== '3');// true
console.log(5 < 5.5);  // true
console.log(5 <= 4);   // false
console.log(2 > 1.5);  // true
console.log(2 >= 2);   // true
console.log(5 > 6 ? 'YES' : 'NO');// NO
```

Ultima linie a codului de mai sus utilizează opertorul denumit **operator ternar**. 

## Operatorul ternar

Operatorul ternar este singurul operator din JavaScript care acceptă trei operanzi.

Constă din două părți - o condiție de evaluat, urmată de un semn de întrebare (?) și o expresie de executat.

`[CONDITION] ? [RETURN THIS IF TRUE] : [RETURN THIS IF FALSE]`

```js live
let a = 6;
let b = "6";

let result = a === b ? 'Equal' : 'Not Equal'
console.log(result);
```

```js live
let isFriend = false;
let result = isFriend ? 'Welcome!' : 'Go away!!'
console.log(result);
```

[/slide]

[slide hideTitle]

# Valorile Truthy and Falsy 

Atunci când sunt verificate într-un context boolean, valorile  **truthy** se evaluează la  `true` și  **falsy** se evaluează la `false`.

JavaScript este un pic dificil când vine vorba de acest lucru, deci merită să vedeți câteva exemple.

Putem crea o funcție pentru a verifica acest lucru.

Mai întâi definim funcția:

```js
function logTruthiness(val) {
  if (val) {
    console.log('Truthy!');
  } else {
    console.log('Falsy.');
  }
}
```

Acum o putem folosi pentru a experimenta cu valorile truthy și falsy într-un exemplu de cod real

```js live
function logTruthiness(val) {
  if (val) {
    console.log('Truthy!');
  } else {
    console.log('Falsy.');
  }
}

logTruthiness (3.14);      
logTruthiness ({});      
logTruthiness (NaN);      
logTruthiness ('NaN');     
logTruthiness ([]);        
logTruthiness (null);     
logTruthiness ('');        
logTruthiness (undefined);
logTruthiness (0);         
```

Ieșirea rezutlată poate părea arbitrar, dar există o logică în spatele acestui lucru:

- Șirurile sunt considerate **truthy**
- Șirurile goale sunt **falsy**
- Numereel sunt **truthy**
- Obiectele sunt **truthy**
- `NaN` este  **falsy** (cu excepția cazului în care e evaluat ca un șir)
- Matricele sunt **truthy**
- `null` este **falsy**
- 0 și  `undefined` sunt **falsy**
- `false` este **falsy**
- `true` este **truthy**

[/slide]

[slide hideTitle]

# Operatorii logici

Sunt trei operatori logici pe care le folosim în JavaScript.

| **Operator** | **Semnificație** | 
| --- | --- |
| && | and | 
| \|\| | or | 
| ! | not | 



## Operatorul AND 

Returnează valoarea "false" din stânga.

Dacă toate sunt adevărate, returnează **ultima valoare truthy**.

```js live
const value =   false && 5 && 'yes';
console.log(value);
```

Cele de mai sus returnează `false`, deoarece este valoarea "false" din stânga din acest exemplu.

```js live
const value =   true && 5 && 'yes';
console.log(value);
```

În al doilea exemplu, valoarea returnată este "yes"  deoareace este ultima valoare "truthy".


## Operatorul OR 

Returnează valoarea "true" din stânga.

Dacă toate sunt false, returnează **ultima valoare falsy**.

```js live
const value =   false || '' || 5;
console.log( value );
```

Cele de mai sus returnează  **5** , deoarece este valaorea "true" din stânga din acest exemplu.

```js live
const value = null || NaN || undefined;
console.log(value);
```

În al doulea exemplu valoarea returnată este "undefined" fiindcă este ultima valoare "falsy".

## Operatorul NOT 

Returnează false dacă operandul poate fi convertit în `true`. În caz contrar, returnează `true`.

```js live
const value = !true;
console.log(value);
```

Exemplul de mai sus returnează `false` deoarece este opusul lui `true`.

```js live
const value = !false;
console.log(value);
```

Exemplul de mai sus returnează `true` deoarece este opusul lui `false`.


[/slide]

[slide hideTitle]

#  Operatorul Typeof 

Operatorul  `typeof` este folosit pentru a verifica tipul unui operand.

Returnează tipul de dare în format string.

Îl puteți folosi în două moduri: `typeof operand` sau `typeof(operand)`.

Funcționează pentru tipuri primitive și obiecte.

```js live
console.log(typeof 'Pogo Stick')
console.log(typeof('Pogo Stick'))
```

`typeof` a returnat "string" care este tipul datelor  pe care le-am verificat în acest exemplu.

```js live
console.log(typeof 1)
```

1 is a "number".

```js live
const person = { name: 'Marshall', age: 25 };
console.log(typeof person);
```

Aici sunt prezentate câteva rezultate ale `typeof`, în funcție de tipul datelor pe care le verificați.


| **Data Type** | **Output** | 
| --- | --- |
| String | "string" | 
| Number | "number" | 
| Undefined | "undefined" | 
| Null | "object" | 
| BigInt | "bigint" | 
| Function | "function" |
| Any object | "object" |


[/slide]

[slide hideTitle]

#  Operatorul Instanceof 

Operatorul `instanceof` verifică dacă un obiect aparține unei anumite clase. 

Sintaxa pentru utilizarea acestuia este `[Some Object] instanceof [Type]`


```js live
const school = {
  name: "Lisbon Falls",
  teachersCount: 40,
  studentsCount: 300
};
console.log(school instanceof Object);
console.log(school instanceof String);
```
De exemplu, putem crea un obiect denumit **school** și să verificăm dacă este **Object**, ceea ce va returna `true`.

Verificarea dacă este **String** returnează `false` deoarecea acesta  **este** un obiect.

[/slide]

[slide hideTitle]

# Câteva exemple interesante

[image assetsSrc="confused.png" /]


Aici vă prezentăm câteva exemple neobișnite de verificare a tipurilor de date:

```js live
console.log(typeof NaN);             
console.log(NaN === NaN);            
console.log(typeof null);            
console.log(null instanceof Object); 
console.log(new Array() == false);   
console.log(0.1 + 0.2);             
```

- Tipul **NaN** cu toate că aceasta înseamnă `Not a Number`
- Tipul de date  **null** este un obiect, dar nu este o instanță a tipului JS Object 
- Crearea unei matrice cu Array constructor și verificarea dacă este false returnează `true` cu toate că matricele sunt  "truthy"
- Adunarea 0.1 și 0.2 rezultă în 0.30000000000000004 și nu  0.3 așa cum era de așteptat


Valorile Truthy și  Falsy vă pot surprinde, de asemenea:

Creați o matrice goală și numiți-o "emptiness".

```js live
const emptiness = [];
console.log(emptiness == false)
```

Aceasta returnează `true` confirmând că matricea este evaluată ca  "falsy", în ciuda faptului că ar trebui să fie "truthy".

Făcând același experiment, dar verificând valoarea tabloului cu o **instrucțiune if** are rezultatul opus.

```js live
const emptiness = [];

if (emptiness) {
  console.log('This is truthy');
}
```

Acum valoarea matricei goale se evaluează la `true`.

[/slide]





