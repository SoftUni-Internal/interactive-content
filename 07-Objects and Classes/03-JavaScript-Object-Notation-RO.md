# Notare obiect JavaScript (JSON)

[slide]
# Ce este JSON?

[vimeo-video]
[stream language="EN" videoId="489794709/20241a30bb" default /]
[stream language="RO" videoId="489794709/20241a30bb"  /]
[/video-vimeo]

JSON înseamnă **JavaScript Object Notation** și este un **format de informații bazat pe text** care urmează sintaxa obiectului JavaScript.

JSON este **independent de limbă** și poate fi utilizat fără a depinde de JavaScript, chiar dacă este un **asemănător al sintaxei literale a obiectului JavaScript.**

JSON este o metodă de stocare a datelor și informațiilor într-o abordare organizată și ușor de accesat. 

[/slide]

[slide]
# Utilizare JSON

[vimeo-video]
[stream language="EN" videoId="489794769/4f4530031d" default /]
[stream language="RO" videoId="489794769/4f4530031d"  /]
[/video-vimeo]

Cu JSON putem **schimba date între un browser și un server.**

JSON permite o mai bună reprezentare a **obiectelor ierarhice**într-un flux decât XML. 

JavaScript a încorporat funcții pentru a analiza JSON, astfel încât este ușor de utilizat.

JSON folosește **text citibil de către om pentru a transmite date.**
[/slide]

[slide]
# Exemplu JSON

[vimeo-video]
[stream language="EN" videoId="489794764/4f709f8685" default /]
[stream language="RO" videoId="489794764/4f709f8685"  /]
[/video-vimeo]

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

În acest exemplu:

* Parantezele `{}` definesc un JSON

* Cheile sunt între ghilimele duble: `"name"`, `"age"`, `"grades"`, `"Math"`, `"Chemistry"`

* Valori separate prin: `"George"`, `25`, `[2.50, 3.50]`, `[4.50]`

* Este posibil să aveți obiecte imbricate

[/slide]

[slide]
# Metodele JSON

[vimeo-video]
[stream language="EN" videoId="489794807/692c83c874" default /]
[stream language="RO" videoId="489794807/692c83c874"  /]
[/video-vimeo]

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
  Car:"Nio",
  Model: "EP9",
  Colour:"Blue"
  };  

var data = JSON.stringify(car);  

console.log(data);
```

[/slide]

[slide]
# Problemă: Convert to Object

[vimeo-video]
[stream language="EN" videoId="489794810/52f44fb1a4" default /]
[stream language="RO" videoId="489794810/52f44fb1a4"  /]
[/video-vimeo]

[code-task title="Convert to Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToObject(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți o funcție care primește un șir în format JSON și îl convertește în obiect.

Iterați toate cheile și imprimați-le cu valorile lor în format:
`{key}: {value}`


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`{"name": "George", "age": 40, "town": "Berlin"}`| name: George |
||age: 40|
||town: Berlin|

[/task-description]
[tests]
[test]
[input]
\{"hui"\: "byue", "cty"\: 26, "byu"\: "ctuct"\}
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"hui"\: 156, "cty"\: {"dsad"\: "dsadaf"}, "byu"\: "ctuct"\}
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"name"\: "George", "age"\: 40, "town"\: "Sofia"\}
[/input]
[output]
name\: George
age\: 40
town\: Sofia
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide]
# Soluție: Convert to Object

[vimeo-video]
[stream language="EN" videoId="489794882/3f1feba34c" default /]
[stream language="RO" videoId="489794882/3f1feba34c"  /]
[/video-vimeo]

[code-task title="Convert to Object" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
//Video code

function convertToObject(input){
   let person = JSON.parse(input);

   let keys = Object.keys(person);
   
   for(let key of keys){
   console.log(`${key}: ${person[key]}`)
   }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care primește un șir în format JSON și îl convertește în obiect.

Iterați toate cheile și imprimați-le cu valorile lor în format:
`{key}: {value}`


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`{"name": "George", "age": 40, "town": "Berlin"}`| name: George |
||age: 40|
||town: Berlin|

[/task-description]
[tests]
[test]
[input]
\{"hui"\: "byue", "cty"\: 26, "byu"\: "ctuct"\}
[/input]
[output]
hui\: byue
cty\: 26
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"hui"\: 156, "cty"\: {"dsad"\: "dsadaf"}, "byu"\: "ctuct"\}
[/input]
[output]
hui\: 156
cty\: \[object Object\]
byu\: ctuct
[/output]
[/test]
[test]
[input]
\{"name"\: "George", "age"\: 40, "town"\: "Sofia"\}
[/input]
[output]
name\: George
age\: 40
town\: Sofia
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Convert to JSON

[vimeo-video]
[stream language="EN" videoId="489794917/67b2d5ed40" default /]
[stream language="RO" videoId="489794917/67b2d5ed40"  /]
[/video-vimeo]

[code-task title="Convert to JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function convertToJSON(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți o funcție care primește **Nume**, **Numele de familie**, **Culoarea părului** și le setează ca obiect.

Convertiți obiectul în șir JSON și imprimați-l.

Intrarea este furnizată ca 3 șiruri simple în ordinea menționată mai sus.
# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['George','Jones','Brown']`| `{"name":"George", "lastName":"Jones", "hairColor":"Brown"}`|

[/task-description]
[tests]
[test]
[input]
George
Jones
Brown
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test]
[input]
rtdrt
xxer
aweaw
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
Ivan
njnnjk
14178
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Soluție: Convert to JSON

[vimeo-video]
[stream language="EN" videoId="489794931/a0337f77f1" default /]
[stream language="RO" videoId="489794931/a0337f77f1"  /]
[/video-vimeo]

[code-task title="Convert to JSON" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
//Different vido code

function convertToJSON(input){
  let person = {
        name: input[0],
        lastName: input[1],
        hairColor: input[2]
    }

    console.log(JSON.stringify(person));
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care primește **Nume**, **Numele de familie**, **Culoarea părului** și le setează ca obiect.

Convertiți obiectul în șir JSON și imprimați-l.

Intrarea este furnizată ca 3 șiruri simple în ordinea menționată mai sus.
# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['George','Jones','Brown']`| `{"name":"George", "lastName":"Jones", "hairColor":"Brown"}`|

[/task-description]
[tests]
[test]
[input]
George
Jones
Brown
[/input]
[output]
\{"name"\:"George","lastName"\:"Jones","hairColor"\:"Brown"\}
[/output]
[/test]
[test]
[input]
rtdrt
xxer
aweaw
[/input]
[output]
\{"name"\:"rtdrt","lastName"\:"xxer","hairColor"\:"aweaw"\}
[/output]
[/test]
[test]
[input]
Ivan
njnnjk
14178
[/input]
[output]
\{"name"\:"Ivan","lastName"\:"njnnjk","hairColor"\:"14178"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]