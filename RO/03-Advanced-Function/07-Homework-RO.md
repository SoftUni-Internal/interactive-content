# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Add
[code-task title="Add" taskId="js-advanced-advanced-functions-homework-add" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function add() {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Enunț

Scrieți un program care menține un număr **inside its context** și **returns** o nouă funcție care  **adds** un număr **given** la numărul anterior. 

## Input

Verificați **examples below** pentru a vedea cum va fi executat codul vostru.

## Output


Funcția dvs. ar trebui să **returneze** rezultatul final.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| `let add5 = solution(5);` | 7 |
| `console.log(add5(2));` | 8 |
| `console.log(add5(3));` |  |

|**Intrare**|**Ieșire** |
| --- | --- |
| `let add7 = solution(7);` | 9 |
| `console.log(add7(2));` | 10 |
| `console.log(add7(3));` | |


[/task-description]
[code-io /]
[tests]
[test]
[input]
// Acquire console
let add0=result(0);

assert.equal(add0(2), 2, 'Printed wrong value.');
assert.equal(add0(3), 3, 'Printed wrong value.');

let add20000=result(20000);

assert.equal(add20000(2), 20002, 'Printed wrong value.');
assert.equal(add20000(3), 20003, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Acquire console
let add5=result(5);

assert.equal(add5(2), 7, 'Printed wrong value.');
assert.equal(add5(3), 8, 'Printed wrong value.');

let add9=result(9);

assert.equal(add9(2), 11, 'Printed wrong value.');
assert.equal(add9(3), 12, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Acquire console
let addNegative1=result(-1);

assert.equal(addNegative1(2), 1, 'Printed wrong value.');
assert.equal(addNegative1(3), 2, 'Printed wrong value.');

let addNegative2=result(-2);

assert.equal(addNegative2(2), 0, 'Printed wrong value.');
assert.equal(addNegative2(-3), -5, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Currency Format
[code-task title="Currency Format" taskId="js-advanced-advanced-functions-homework-Currency-Format" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function currencyFormatter(separator, symb, symbolFirst, value) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Enunț

Scrieți o funcție de **higher-order** care fixează câțiva dintre parametrii unei alte funcții. 

Programul va primi o funcție care **takes 4 parameters** și **returns a formatted string** \(o valoare monetară cu un simbol valutar\).

Sarcina voastră este să returnați o altă funcție care doar **takes one parameter** și **returns** un **same formatted string**.

Veți primi următoarea funcție:

```js
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
```

Fixați parametrii următori la valorile fixe:

`separator: ","`

`symbol: "$"`

`symbolFirst: true`

Pentru parametrul final **value** este ceea pe care o va primi funcția returnată.

## Input

Veți primi un parametru al **function**.

## Output

Trebuie să **return a function** care ia un singur parametru - **value**.

## Exemplu

**Intrare/Ieșire**

```js
let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let called = false;

function currencyFormatter(separator, symbol, symbolFirst, value) {
    called = true;
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = result(',', '$', true, currencyFormatter);
expect(typeof dollarFormatter).to.equal('function', "Your solution did not return a function");
expect(dollarFormatter.length).to.equal(1, "The returned function must take exactly one parameter");

let output = dollarFormatter(5345);
expect(called).to.be.equal(true, "Your solution must use the passed in function!\n");
expect(typeof output).to.not.equal('undefined', "The curried function must return a value");
expect(typeof output).to.equal('string', "The curried function must return a formatted string");
expect(output.length).to.be.greaterThan(0, "The curried function returned an empty string");
expect(dollarFormatter(5345)).to.equal('$ 5345,00', "Wrong formatting");
expect(dollarFormatter(3.1429)).to.equal('$ 3,14', "Wrong formatting");
expect(dollarFormatter(2.709)).to.equal('$ 2,71', "Wrong formatting");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(4, "Your function must receive four parameters");

function interceptor(separator, symbol, symbolFirst, value) {
    return [separator, symbol, symbolFirst, value];
}
let intercepted = result(',', '$', true, interceptor);
expect(typeof intercepted).to.equal('function', "Your solution did not return a function");
expect(intercepted.length).to.equal(1, "The returned function must take exactly one parameter");

let [separator, symbol, symbolFirst, value] = intercepted(1);
expect(separator).to.equal(',', "Incorrect separator passed to original function");
expect(symbol).to.equal('$', "Incorrect symbol passed to original function");
expect(symbolFirst).to.equal(true, "Incorrect symbolFirst passed to original function");
expect(value).to.equal(1, "Incorrect value passed to original function");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problemă: Filter Employees
[code-task title="Filter Employees" taskId="js-advanced-advanced-functions-homework-Filter-Employees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]


```
function filterEmployees(data, criteria) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
## Enunț

Scrieți un program care filtrează angajații companiei voastre. 

Trebuie să imprimați rezultatul într-un format specific. 

Veți primi **2** parametri \(`data`, `criteria`\). 

Trebuie să **parse** input, să găsiți toți angajații care îndeplinesc criteriul și să imprimați acești angajați. 

## Input

Veți primi un **string** cu toți angajații și un **criteria** după care trebuie să alegeți angajații.

Dacă criteriul este `all`, imprimați toți angajații în formatul dat. 

## Output

Ieșirea trebuie să fie **printed** în consolă.

Pentru mai multe informații, studiați exemplele.

## Exemplu
|**Intrare**|**Ieșire** |
|---|---|
|filterEmployees('\[\{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}\]', 'gender-Female')|0\. Ardine Bassam - abassam0@cnn.com|
||1\. Kizzee Jost - kjost1@forbes.com|


|**Intrare**|**Ieșire** |
|---|---|
|filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'last_name-Johnson')|0\. Kaylee Johnson - k0@cnn.com|
||1\. Kizzee Johnson - kjost1@forbes.com|
||2\. Evanne Johnson - ev2@hostgator.com|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
filterEmployees('\[\{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"\},\{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}\]', 'gender-Female')
[/input]
[output]
0\. Ardine Bassam \- abassam0\@cnn\.com
1\. Kizzee Jost \- kjost1\@forbes\.com
[/output]
[/test]
[test open]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\},\{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'last_name-Johnson')
[/input]
[output]
0\. Kaylee Johnson \- k0\@cnn.com
1\. Kizzee Johnson \- kjost1\@forbes\.com
2\. Evanne Johnson \- ev2\@hostgator\.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'all')
[/input]
[output]
0\. Kaylee Johnson - k0@cnn.com
1\. Kizzee Johnson - kjost1@forbes.com
2\. Evanne Maldin - emaldin2@hostgator.com
3\. Evanne Johnson - ev2@hostgator.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'gender-Male')
[/input]
[output]
0\. Evanne Maldin - emaldin2@hostgator.com
1\. Evanne Johnson - ev2@hostgator.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'email-null')
[/input]
[output]
0\. Kizzee Johnson - null
1\. Evanne Maldin - null
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'gender-Female')
[/input]
[output]
0\. Kaylee Johnson - k0@cnn.com
1\. Kizzee Johnson - null
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Sort Array
[code-task title="Sort Array" taskId="js-advanced-advanced-functions-homework-Sort-Array" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function sortArray(data, type) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Enunț

Scrieți o funcție care **sorts an array** cu valori **numeric** în ordine **ascending** sau **descending**, în funcție de **argument** care îi este pasat funcției.

Veți primi o **numeric array** și un **string** ca argumente ale primei funcții, în cod.

- Dacă al doilea argument este `asc`, matricea va fi sortată în **ascending order** \(valorile cele mai mici la început\).

- Dacă este `desc`, matricea va fi sortată în  **descending order** \(cele mai mari numere, la început\).

## Input

Veți primi o **numeric array** și un **string** ca parametri de intrare.

## Output

Ieșirea trebuie să fie **sorted array**.

## Exemplu
|**Intrare**|**Ieșire** |
|[14, 7, 17, 6, 8], 'asc'|[6, 7, 8, 14, 17]|
|[14, 7, 17, 6, 8], 'asc'|[6, 7, 8, 14, 17]|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
var inputArray = \[3, 1, 2, 10\];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[1, 2, 3, 10\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var inputArray = \[3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6\];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var inputArray = \[3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6\];
var sortingMethod = 'desc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Argument Info
[code-task title="Argument Info" taskId="js-advanced-advanced-functions-homework-Argument-Info" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function argumentInfo() {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

# Enunț

Scrieți o funcție care afișează **information** despre acel **arguments** care îi este pasat(**type** și **value**) și un **summary** despre numărul fiecărui tip, în următorul format:

"\{**argument type**\}: \{**argument value**\}"

Imprimați **each** descriere a argumentului pe o **new line**. 

La final, imprimați un **summary** care enumeră fiecare tip în **descending order**, fiecare pe o linie de cod nouă, în formatul următor:

"\{**type**\} = \{**count**\}"

Dacă două tipuri au **same count**, folosiți **order of appearance**. 

 **NOT** imprimați nimic pentru tipurile care nu apar în lista de argumente. 

## Intrare

Veți primi o serie de argumente **passed** funcției voastre.

## Ieșire

**Print to the console** și **type** și **value** ale fiecărui argument pasat funcției voastre. 

## Exemplu
**Intrare**

```js
'cat', 42, function () { console.log('Hello world!'); }
```

**Ieșire** 

``` js
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result('cat', 42, function () \{ console.log('Hello world!'); \});

console.log = oldConsole;

var expectedOutput = \[
    'string: cat',
    'number: 42',
    "function: function () \{ console.log('Hello world!'); \}",
    'string = 1',
    'number = 1',
    'function = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect arguments in output.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(\{ name: 'bob'\}, 3.333, 9.999);

console.log = oldConsole;

var expectedOutput = \[
    'object:',
    'number: 3.333',
    'number: 9.999',
    'number = 2',
    'object = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42);

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'number = 1',
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 'cat', \[\], undefined);

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'string: cat',
    'object:',
    'undefined: undefined',
    'number = 1',
    'string = 1',
    'object = 1',
    'undefined = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 15, 'cat');

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'number: 15',
    'string: cat',
    'number = 2',
    'string = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 'cat', 15, 'kitten', 'tomcat');

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'string: cat',
    'number: 15',
    'string: kitten',
    'string: tomcat',
    'string = 3',
    'number = 2'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Personal BMI
[code-task title="Personal BMI" taskId="js-advanced-advanced-functions-homework-Personal-BMI" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function personalBmi(name, age, weight, heightCm) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Enunț

O clinică de wellness v-a trimis o ofertă  - vor să scrieți un program care să creeze **patient charts** să ofere o evaluare preliminară a stării lor. 

Datele vă parvin sub forma unor **several arguments**, care descriu persoanele -  **name**, **age**, **weight** în kilograme și **height** în centimetri.

Programul trebuie să structureze informația într-un **object** și să o **return**  pentru procesare suplimentară.

Obiectul fișa pacientului trebuie să cuprindă următoarele proprietăți:

- **Name**
  
- **PersonalInfo** care este un obiect care cuprinde vârsta pacientului, greutatea și înălțimea, ca proprietăți
  
- **BMI** \- indexul masei corporale. Puteți găsi informații despre cum să calculați [aici](https://en.wikipedia.org/wiki/Body_mass_index)
  
- **Status**
  
Statusul este unul dintre următoarele:

- **Underweight**, pentru BMI mai mică decât 18.5
  
- **Normal**, pentru BMI mai mică de 25
  
- **Overweight**, pentru BMI mai mică decât 30
  
- **Obese**, pentru BMI 30 sau mai mult
  
Odată ce BMI și statusul sunt calculate, puteți face o recomandare.

Dacă pacientul este obez, adăugați o proprietate adițională care se numește recomandare și fixați-o la "**admission required**".


## Intrare

Funcția necesită patru argumente - **name**, **age**, **weight** și **height**

## Ieșire

Funcția trebuie să **return** un **object with the properties** descrise anterior. 

Toate valorile numerice pot fi **rounded** la cel mai apropiat număr întreg.

Toate câmpurile trebuie să fie denumite **exactly as described** \(ordinea lor nu este importantă \).

Studiați mostra de output pentru mai multe informații.

## Exemplu
**Intrare**

'Peter', 29, 75, 182

**Ieșire**

```
{
    name: 'Peter',
    personalInfo: {
        age: 29,
        weight: 75,
        height: 182
    }
    BMI: 23,
    status: 'normal'
}
```

**Intrare**

'Adrian', 9, 57, 137

**Ieșire**

```
{
    name: 'Adrian',
    personalInfo: {
        age: 9,
        weight: 57,
        height: 137
    },
    BMI: 30,
    status: 'obese',
    recommendation: 'admission required'
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var chart = result('Peter', 29, 75, 182);

expect(chart.name).to.equal('Peter');
expect(chart.personalInfo.age).to.equal(29);
expect(chart.personalInfo.weight).to.equal(75);
expect(chart.personalInfo.height).to.equal(182);
expect(chart.BMI).to.equal(23);
expect(chart.status).to.equal('normal');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var chart = result('Adrian', 9, 57, 137);

expect(chart.name).to.equal('Adrian');
expect(chart.personalInfo.age).to.equal(9);
expect(chart.personalInfo.weight).to.equal(57);
expect(chart.personalInfo.height).to.equal(137);
expect(chart.BMI).to.equal(30);
expect(chart.status).to.equal('obese');
expect(chart.recommendation).to.equal('admission required');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Ivan', 20, 55, 200);

expect(chart.name).to.equal('Ivan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(55);
expect(chart.personalInfo.height).to.equal(200);
expect(chart.BMI).to.equal(14);
expect(chart.status).to.equal('underweight');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Dragan', 20, 80, 185);

expect(chart.name).to.equal('Dragan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(80);
expect(chart.personalInfo.height).to.equal(185);
expect(chart.BMI).to.equal(23);
expect(chart.status).to.equal('normal');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Petkan', 20, 80, 178);

expect(chart.name).to.equal('Petkan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(80);
expect(chart.personalInfo.height).to.equal(178);
expect(chart.BMI).to.equal(25);
expect(chart.status).to.equal('overweight');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Kotooshu', 33, 152, 203);

expect(chart.name).to.equal('Kotooshu');
expect(chart.personalInfo.age).to.equal(33);
expect(chart.personalInfo.weight).to.equal(152);
expect(chart.personalInfo.height).to.equal(203);
expect(chart.BMI).to.equal(37);
expect(chart.status).to.equal('obese');
expect(chart.recommendation).to.equal('admission required');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Vector Math

[code-task title="Vector Math" taskId="js-advanced-advanced-functions-homework-Vector-Math" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function vectorMath() {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Enunț

Scrieți câteva funcții pentru a realiza **calculations** cu **vectors** în 2D 

[image assetsSrc="advanced-functions-07.png" /] 

și colectațile pe toate într-un **single object** \(namespace\), astfel încât să nu polueze scopul global. 

Implementați următoarele funcții:


- `add(vec1, vec2)`
    - adunarea a doi vectori
  
[image assetsSrc="advanced-functions-08.png" /] 


- `multiply(vec1, scalar)`
    - Înmulțirea scalară 

[image assetsSrc="advanced-functions-09.png" /] 


- `length(vec1)`
    - lungimea vectorilor 
  
[image assetsSrc="advanced-functions-10.png" /] 


- `dot(vec1, vec2)` 
    - produsul scalar a doi vectori 
    
    [image assetsSrc="advanced-functions-11.png" /] 


- `cross(vec1, vec2)`
    - produsul vectorial a doi vectori 

[image assetsSrc="advanced-functions-12.png" /] 

Un institut de matematică ar observa că formula produsului vectorial ar duce la un rezultat scalar, în loc de un vector-măsurăm doar lungimea vectorului rezultant deoarece produsul vectorial nu este posibil în 2D, acesta va exista numai în z-dimensional.

Dacă nu înțelegeți ce înseamnă toate acestea, ignorați acest paragraph, este irelevant pentru soluție. 


**Intrare**

Fiecare funcție separată în spațiul numelui va fi testată cu valori individuale.

Pot fi așteptate **one or two arguments**, așa cum am spus mai sus și la **return** a unei valori.

Vectorii vor fi matrice 2D arrays in format \[x, y\].

**Ieșire**

Funcția trebuie să **return** un **object with the properties** descrise anterior.

Toate valorile numerice pot fi **rounded** la cel mai apropiat număr întreg.

Toate câmpurile trebuie denumite **exactly as described** \(ordinea lor nu are importanță\).

Studiați exemplul pentru mai multe informații.

## Exemplu
|**Intrare**|**Ieșire** |**Explanation**|
|---|---|---|
|solution.add([1, 1], [1, 0])|[2, 1]|[1 + 1, 1 + 0] = [2, 1]|
|solution.multiply([3.5, -2], 2)|[7, -4]|[3.5 \* 2, (-2) * 2] = [7, -4]|
|solution.length([3, -4])|5|sqrt(3 \* 3 + (-4) \* (-4)) = 5|
|solution.dot([1, 0], [0, -1])|0|1 \* 0 + 0 \* (-1) = 0|
|solution.cross([3, 7], [1, 0])|-7|3 \* 0 - 7 \* 1 = -7|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var answer = result.add(\[1, 1\], \[1, 0\]);
var expected = \[2, 1\];
var errorMessage = "Incorrect addition.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.multiply(\[3.5, -2\], 2);
var expected = \[7, -4\];
var errorMessage = "Incorrect multiplication.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.length(\[3, -4\]);
expect(answer).to.equal(5, "Incorrect length");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.dot(\[1, 0\], \[0, -1\]);
expect(answer).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.cross(\[3, 7\], \[1, 0\]);
expect(answer).to.equal(-7);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.add(\[5.43, -1\], \[1, 31\]);
var expected = \[6.43, 30\];
var errorMessage = "Incorrect addition.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.multiply(\[3.5, -2\], -1);
var expected = \[-3.5, 2\];
var errorMessage = "Incorrect multiplication.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.length(\[1, 1\]);
expect(answer).to.equal(Math.sqrt(2), "Incorrect length");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.dot(\[2, 3\], \[2, -1\]);
expect(answer).to.equal(1);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.cross(\[1, 1\], \[-1, 1\]);
expect(answer).to.equal(2);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Breakfast Robot
[code-task title="Breakfast Robot" taskId="js-advanced-advanced-functions-homework-Breakfast-Robot" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function breakfastRobot() {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Enunț

*În sfârșit viitorul e aici!*
*Roboții se ocupă de tot și omul a fost eliberat de sarcinile banale de zi cu zi.*
*Totuși încă sunt lucruri de făcut din moment ce acești roboți trebuie programați mai întâi. Poate avem roboți bucătari, dar încă nu avem roboți programatori de software.*

Sarcina voastră este să scrieți un management de soft pentru un robot care să prepare micul dejun. 

Este necesar să **take orders**, să știe ce **ingredients** sunt disponibile și să arate orice **error** dacă ceva nu este în ordine.

Instrucțiunile de preparare au fost deja instalate, deci modulul trebuie să **plug into** sistem și să aibă grijă de **orders** și **ingredients**. 

Pentru că acesta e viitorul și hrana este imprimată cu nano-particule, toate ingredientele sunt microelemente- **protein**, **carbohydrates**, **fat** și **flavours**. 

Biblioteca de rețete include următoarele feluri de mâncarere: 

- **Apple** 
    -  alcătuit din **1 carb** și **2 flavour**

- **Lemonade** 
    - alcătuit din **10 carb** și **20 flavour**

- **Burger**
    - alcătuit din **5 carb**, **7 fat** și **3 flavour**

- **Eggs**
    - alcătuit din **5 protein**, **1 fat** și **1 flavour**

- **Turkey**
    - alcătuit din **10 protein**, **10 carb**, **10 fat** și **10 flavour**

Robotul primește instrucțiuni fie să **restock** ingredientele, **cook** a mâncare sau **report** statistici.

Datele de intrare constau dintr-una din următoarele comenzi: 

- `restock <microelement> <quantity>` - crește cantitatea microelemente din stocul dat

- `prepare <recipe> <quantity>` - folosește ingredientele disponibile pentru a prepara felul de mâncare dat

- `report` - returnează informații despre microelementele stocate, în ordinea descrisă mai jos, incusiv stoc zero de elemente


Robotul este echipat cu un câmp de cuantum de stoc, astfel încât el poate să rețină o **unlimited quantity** de ingrediente, dar aceasta nu este o garanție că vor fi suficiente pentru prepararea unei rețete, caz în care va fi returnat un **error message**.

Disponibilitatea ingredientelor este verificată în **order** în care ele **appear** in rețetă, deci eroareea poate să arate prima cerință caree nu a fost îndeplinită. 

Introduceți o **closure** care returnează funcția de management.

Funcția de management ia un parametru. 

## Intrare

Instrucțiunile sunt pasate ca un argument de tip șir funcției de management. 

Acesta va fi apelat de câteva ori pe sesiune, deci starea internă trebuie menținută pe întreaga sesiune.

## Ieșire

Valoarea **return** a fiecărei operații este unul dintre următoarele șiruri: 

- `Success` - când realimentarea sau prepararea nu au avut erori

- `Error: not enough <ingredient> in stock` - când robotul nu poate găsi suficiente microelemente

- `protein={qty} carbohydrate={qty} fat={qty} flavour={qty}` - când este cerut un raport, într-un singur șir

Studiați mostra de output pentru mai multe informații. 

## Constrângeri

- Rețetele și ingredientele din comenzi trebuie să aibă întotdeauna denumiri valide. 
  

## Exemplu

**Execution:**
```js
let manager = solution();
manager('restock flavour 50');  // Success
manager('prepare lemonade 4');  // Error: not enough carbohydrate in stock
```

|**Intrare**|**Ieșire** |
|---|---|
|'restock carbohydrate 10'|Success|
|'restock flavour 10'|Success|
|'prepare apple 1'|Success|
|'restock fat 10'|Success|
|'prepare burger 1'|Success|
|'report'|protein=0 carbohydrate=4 fat=3 flavour=5|

|**Intrare**|**Ieșire** |
|---|---|
|'prepare turkey 1'|Error: not enough protein in stock|
|'restock protein 10'|Success|
|'prepare turkey 1'|Error: not enough carbohydrate in stock|
|'restock carbohydrate 10'|Success|
|'prepare turkey 1'|Error: not enough fat in stock|
|'restock fat 10'|Success|
|'prepare turkey 1'|Error: not enough flavour in stock|
|'restock flavour 10'|Success|
|'prepare turkey 1'|Success|
|'report'|protein=0 carbohydrate=0 fat=0 flavour=0|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();

let expectationPairs = [
    ['restock flavour 50', 'Success'],
    ['prepare lemonade 4', 'Error: not enough carbohydrate in stock']
];

for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    expect(result(expectation[0])).to.equal(expectation[1], \`Order ${expectation[0]} should have resulted in ${expectation[1]}\`);
}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var expectationPairs = \[
    \['restock carbohydrate 10', 'Success'\],
    \['restock flavour 10', 'Success'\],
    \['prepare apple 1', 'Success'\],
    \['restock fat 10', 'Success'\],
    \['prepare burger 1', 'Success'\],
    \['report', 'protein=0 carbohydrate=4 fat=3 flavour=5'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var expectationPairs = \[
    \['prepare turkey 1', 'Error: not enough protein in stock'\],
    \['restock protein 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough carbohydrate in stock'\],
    \['restock carbohydrate 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough fat in stock'\],
    \['restock fat 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough flavour in stock'\],
    \['restock flavour 10', 'Success'\],
    \['prepare turkey 1', 'Success'\],
    \['report', 'protein=0 carbohydrate=0 fat=0 flavour=0'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['prepare lemonade 4', 'Error: not enough carbohydrate in stock'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare apple 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=98 fat=100 flavour=96'\],
    \['prepare apple 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=97 fat=100 flavour=94'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare lemonade 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=80 fat=100 flavour=60'\],
    \['prepare lemonade 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=70 fat=100 flavour=40'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare burger 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=90 fat=86 flavour=94'\],
    \['prepare burger 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=85 fat=79 flavour=91'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare eggs 2', 'Success'\],
    \['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'\],
    \['prepare eggs 1', 'Success'\],
    \['report', 'protein=85 carbohydrate=100 fat=97 flavour=97'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare turkey 2', 'Success'\],
    \['report', 'protein=80 carbohydrate=80 fat=80 flavour=80'\],
    \['prepare turkey 1', 'Success'\],
    \['report', 'protein=70 carbohydrate=70 fat=70 flavour=70'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
