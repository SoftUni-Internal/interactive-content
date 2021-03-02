# Notare Obiect JavaScript (JSON)

[slide hideTitle]
# Ce este JSON?

JSON înseamnă **JavaScript Object Notation** și este un **format de informații bazat pe text** care urmează sintaxa obiectului JavaScript.

JSON este **independent de limbă** și poate fi utilizat fără a depinde de JavaScript, chiar dacă este un **asemănător al sintaxei literale a obiectului JavaScript.**

JSON este o metodă de stocare a datelor și informațiilor într-o abordare organizată și ușor de accesat. 

[/slide]

[slide hideTitle]
# Utilizare JSON


Cu JSON putem **schimba date între un browser și un server.**

JSON permite o mai bună reprezentare a **obiectelor ierarhice**într-un flux decât XML. 

JavaScript a încorporat funcții pentru a analiza JSON, astfel încât este ușor de utilizat.

JSON folosește **text citibil de către om pentru a transmite date.**
[/slide]

[slide hideTitle]
# Exemplu JSON



``` js
{
  }
  "name": "George",
  "age": 25,
  "grades": {
    "Math": [2.50, 3.50],
    "Chemistry": [4.50]
  }
}
```

**În acest exemplu:**

* Parantezele `{}` definesc un JSON

* Cheile sunt între ghilimele duble: "name", "age", "grades", "Math", "Chemistry"

* Valori separate prin: `"George", 25, \[2.50, 3.50\], \[4.50\]

* Este posibil să aveți obiecte imbricate

[/slide]

[slide hideTitle]
# Metodele JSON


Avem două metode JSON:

* `JSON.parse()`: Această metodă ia un șir JSON și îl transformă într-un obiect JavaScript.

``` js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

* `JSON.stringify()`: Această metodă convertește o valoare JavaScript într-o reprezentare șir JSON.

``` js live
let car = {
  Car: 'Nio',
  Model: 'EP9',
  Colour: 'Blue',
}; 

var data = JSON.stringify(car);  

console.log(data);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Convert to Object

[code-task title="Convert to Object" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Convert-to-Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToObject(input){
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

# Descriere
Scrieți o funcție care primește un șir în format JSON și îl convertește în obiect.

Iterați toate cheile și imprimați-le cu valorile lor în format:

\{**key**\}**:** \{**value**\}


## Example One
|**Intrare**|**Ieșire** |
| --- | --- |
| convertToObject('\{"name": "George", "age": 40, "town": "Berlin"\}') | name: George |
||age: 40|
||town: Berlin|

## Example Two

|**Intrare**|**Ieșire** |
| --- | --- |
| convertToObject('\{"name": "Rafael", "age": 27, "town": "Madrid"\}') | name: Rafael |
||age: 27|
||town: Madrid|

[/task-description]
[tests]
[test open]
[input]
convertToObject('\{"name": "George", "age": 40, "town": "Berlin"\}')
[/input]
[output]
name: George
age: 40
town: Berlin
[/output]
[/test]
[test open]
[input]
convertToObject('\{"name": "Rafael", "age": 27, "town": "Madrid"\}')
[/input]
[output]
name: Rafael
age: 27
town: Madrid
[/output]
[/test]
[test]
[input]
convertToObject('\{"hui": "byue", "cty": 26, "byu": "ctuct"\}')
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
convertToObject('\{"hui": 156, "cty": \{"dsad": "dsadaf"\}, "byu": "ctuct"\}')
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
convertToObject('\{"name": "Ivan", "age": 10, "town": "Erevan"\}')
[/input]
[output]
name\: Ivan
age\: 10
town\: Erevan
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Convert to JSON

[code-task title="Convert to JSON" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Convert-to-JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(name, lastName, hairColor){
  // Write your code here
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

# Descriere
Write a function that receives three strings and sets them to an **object**.

The strings are **name**, **lastName**, and **hairColor**.

Convert the object to a JSON string and print it.

The input is provided as 3 single strings in the order stated above.

## Exemplus
|**Intrare**|**Ieșire** |
| --- | --- |
| convertToJSON('George', 'Jones', 'Brown') | \{"name":"George", "lastName":"Jones", "hairColor":"Brown"\}|
| convertToJSON('Thomas', 'Muller', 'Blonde') | \{"name":"Thomas", "lastName":"Muller", "hairColor":"Blonde"\}|

[/task-description]
[tests]
[test open]
[input]
convertToJSON('George', 'Jones', 'Brown')
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test open]
[input]
convertToJSON('Thomas', 'Muller', 'Blonde')
[/input]
[output]
\{"name":"Thomas","lastName":"Muller","hairColor":"Blonde"\}
[/output]
[/test]
[test]
[input]
convertToJSON('rtdrt', 'xxer', 'aweaw')
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
convertToJSON('Ivan', 'njnnjk', '14178')
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
