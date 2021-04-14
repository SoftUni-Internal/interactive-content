# Notare Obiect JavaScript (JSON)

[slide hideTitle]
# Ce este JSON?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-14-15-What-is-JSON--,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JSON înseamnă **JavaScript Object Notation** și este un **format de informații bazat pe text** care urmează sintaxa obiectului JavaScript.

JSON este **independent de limbaj**, ceea ce înseamnă că poate fi utilizat cu orice limbaj, chiar dacă este **asemănător sintaxei literalului obiectului JavaScript.**

JSON este o metodă de stocare a datelor și informațiilor într-o abordare organizată și ușor de accesat. 

[/slide]

[slide hideTitle]
# Utilizarea JSON

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-16-JSON-usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu JSON putem **schimba date între un browser și un server.**

JSON permite o mai bună reprezentare ierarhică a **obiectelor**, în mod similar cu XML. 

JavaScript a încorporat funcții pentru a analiza JSON, astfel încât este ușor de utilizat.

JSON folosește **text care poate fi citit de către om pentru a transmite date.**
[/slide]

[slide hideTitle]
# Exemplu JSON

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-17-JSON-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

* Cheile sunt încadrate de ghilimele duble: "name", "age", "grades", "Math", "Chemistry"

* Valorile sunt separate de chei prin două puncte: "George", 25, \[2.50, 3.50\], \[4.50\]

* Este posibil să aveți obiecte imbricate - precum cel imbricat în cadrul "grades"

[/slide]

[slide hideTitle]
# Metodele JSON

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-18-JSON-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Avem două metode JSON încorporate:

* `JSON.parse()`: Această metodă ia un șir JSON și îl transformă într-un obiect JavaScript.

``` js live
let car = '{"Car":"Nio","Model": "EP9","Colour":"Blue"}';  

var data = JSON.parse(car);  

console.log(data);
```

* `JSON.stringify()`: Această metodă convertește o valoare JavaScript într-o reprezentare de tip șir JSON.

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
# Problemă cu Soluție: Convert to Object

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-21-Solution-Convert-to-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

Iterați prin toate cheile și imprimați-le împreună cu valorile lor în format:

\{**key**\}**:** \{**value**\}


## Exemplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
| convertToObject('\{"name": "George", "age": 40, "town": "Berlin"\}') | name: George |
||age: 40|
||town: Berlin|

## Exemplul Doi

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
# Problemă cu Soluție: Convert to JSON

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-23-Solution-Convert-to-JSON-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Convert to JSON" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Convert-to-JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(name, lastName, hairColor){
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
Scrieți o funcție care primește trei șiruri și le transformă într-un **obiect**.

Șirurile sunt **name**, **lastName** și **hairColor**.

Convertiți obiectul într-un șir JSON și imprimați-l.

Intrarea constă în 3 șiruri, în ordinea descrisă mai sus.

## Exemple
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
