// sectionId: "Javascript::Programming-Basics::Expressions-And-Statements::Homework"

# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Calculate a square area
[code-task title="Calculate a square area" taskId="pb-js-expressions-Calculate-a-square-area" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function calculateArea(input) {
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
Creați un program care obține un număr întreg și calculează aria unui pătrat cu latura **a**.

- Veți primi valoarea laturii ca argument al funcției
- Folosiți formula pentru a calcula aria
- Imprimați rezultatul pe consolă

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| calculateArea(5) | 25 |
| calculateArea(12) | 144 |

[hints]
[hint]
Formula pentru calcularea ariei unui pătrat este - a * a.
[/hint]
[/hints]


[/task-description]
[tests]
[test open]
[input]
calculateArea(12)
[/input]
[output]
144
[/output]
[/test]
[test]
[input]
calculateArea(2)
[/input]
[output]
4
[/output]
[/test]
[test open]
[input]
calculateArea(5)
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
calculateArea(100)
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
calculateArea(1)
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Currency Converter

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/problem2-currency-converter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Currency Converter" taskId="pb-js-expressions-Currency-Converted" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function currencyConverter (input) {
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

Creați un program pentru a converti USD în EUR:

* Veți primi un **număr în virgulă mobilă**: **dolari** care urmează să fie convertiți

* Convertiți dolarii în euro (utilizați rata fixă ​​de dolari în euro: **0,88**)

* Imprimați valoarea convertită în **euro**

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| currencyConverter(17) | 14.96 |
| currencyConverter(87) | 76.56 |


[/task-description]
[tests]
[test open]
[input]
currencyConverter(17)
[/input]
[output]
14.96
[/output]
[/test]
[test open]
[input]
currencyConverter(87)
[/input]
[output]
76.56
[/output]
[/test]
[test]
[input]
currencyConverter(10.0)
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
currencyConverter(5.0)
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
currencyConverter(25.5)
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
currencyConverter(12.0)
[/input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Convert Radians to Degrees
[code-task title="Convert Radians to Degrees" taskId="pb-js-expressions-Convert-Radians-To-Degrees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function areaOfTriangle (input) {
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
Creați un program care obține un **unghi** în [radiani](https://en.wikipedia.org/wiki/Radian) și îl convertește în [grade](https://en.wikipedia.org/wiki/Degree_(angle)). 

Utilizați formula: 

- **grade = radiani * 180 / π**

Numărul **π** în programele JavaScript poate fi accesat prun **Math.PI**. 
Rotunjiți rezultatul la cel mai apropiat număr întreg, folosind **toFixed(0)**.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| areaOfTriangle(3.1416) | 180 |
| areaOfTriangle(6.2832) | 360 |
| areaOfTriangle(0.7854) | 45 |


[/task-description]
[tests]
[test]
[input]
areaOfTriangle(0.5236)
[/input]
[output]
30
[/output]
[/test]
[test open]
[input]
areaOfTriangle(0.7854)
[/input]
[output]
45
[/output]
[/test]
[test open]
[input]
areaOfTriangle(6.2832)
[/input]
[output]
360
[/output]
[/test]
[test open]
[input]
areaOfTriangle(3.1416)
[/input]
[output]
180
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Days to Minutes

[video src="https://videos.softuni.org/hls/javascript-basics/RO/01-Expressions-And-Statements/problem1-days-to-minutes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Days to Minutes" taskId="pb-js-expressions-Days-to-Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function daysToMinutes (input) {
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

Creați un program care covertește zilele în minute:

* Veți primi un singur număr **întreg**: **zilele** care trebuie convertite

* Convertiți zilele în minute

* Imprimați **minutele** pe consolă

  ## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| daysToMinutes(2) | 2880 |
| daysToMinutes(5) | 7200 |


[/task-description]
[tests]
[test open]
[input]
daysToMinutes(2)
[/input]
[output]
2880
[/output]
[/test]
[test open]
[input]
daysToMinutes(5)
[/input]
[output]
7200
[/output]
[/test]
[test]
[input]
daysToMinutes(6)
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
daysToMinutes(10)
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
daysToMinutes(32)
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
daysToMinutes(9)
[/input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Circle Area and Perimeter
[code-task title="Circle Area and Perimeter" taskId="pb-js-expressions-Circle-Area" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function circleArea (input) {
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
Creați un program pentru a calcula aria și perimetrul unui **cerc**:

* Veți primi un număr în virgulă mobilă: **raza** unui cerc
   * calculați **aria** și **perimetrul** cercului
   * imprimați zona și perimetrul, **formatate** la 2 cifre după punctul zecimal

  ## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| circleArea(7) | Area = 153.94 |
|  | Perimeter = 43.98 |


| **Intrare** | **Ieșire** |
| --- | --- |
| circleArea(8) | Area = 201.06 |
|  | Perimeter = 50.27 |

[hints]
[hint]
Formula pentru a calcula perimetrul unui cerc este: P = 2 * π * R.
"R" este raza.
[/hint]
[hint]
Formula pentru calcularea ariei unui cerc este: A = π * R * R.
[/hint]
[/hints]


[/task-description]
[tests]
[test open]
[input]
circleArea(7)
[/input]
[output]
Area = 153.94
Perimeter = 43.98
[/output]
[/test]
[test open]
[input]
circleArea(8)
[/input]
[output]
Area = 201.06
Perimeter = 50.27
[/output]
[/test]
[test]
[input]
circleArea(12.0)
[/input]
[output]
Area = 452.39
Perimeter = 75.40
[/output]
[/test]
[test]
[input]
circleArea(10.0)
[/input]
[output]
Area = 314.16
Perimeter = 62.83
[/output]
[/test]
[test]
[input]
circleArea(5.5)
[/input]
[output]
Area = 95.03
Perimeter = 34.56
[/output]
[/test]
[test]
[input]
circleArea(9.4)
[/input]
[output]
Area = 277.59
Perimeter = 59.06
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Yard Landscaping
[code-task title="Yard Landscaping" taskId="pb-js-expressions-Yard-Landscaping" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function landscape(input){
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
Peter dorește să amenajeze teritoriul curții sale, așa că a angajat o **companie** care să o facă pentru el.

Creați un program care **calculează** fondurile necesare pe care Peter va trebui să le **plătească** pentru acest serviciu.

Prețul pe metru pătrat este de **7.61 dolari** cu TVA.

Deoarece curtea lui Peter este destul de **mare**, firma contractantă oferă o reducere de **18%** din prețul final.

## Intrare
Funcția primește un argument:
- Metri pătrați, care vor fi amenajați - un număr real în intervalul \[0.00 ... 10000.00\]

## Ieșire
 Două linii sunt imprimate pe consolă:

- "**The final price is:** \{**final price of the service**\} **dollars.**"

- "**The discount is:** \{**discount**\} **dollars.**"

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| landscape(150) | The final price is: 936.03 dollars. |
|  | The discount is: 205.47 dollars. |


| **Intrare** | **Ieșire** |
| --- | --- |
| landscape(550) | The final price is: 3432.11 dollars. |
|  | The discount is: 753.39 dollars. |


[hints]
[hint]

Calculați prețul pentru amenajarea teritoriului întregii curți și depozitați-l într-o variabilă.

[/hint]

[hint]

Calculați reducerea și stocați rezultatul într-o variabilă.

[/hint]

[hint]

Scădeți reducerea din prețul total.

[/hint]
[hint]

Imprimați rezultatul pe consolă:
console.log('The final price is: $\{total\} dollars.');
console.log('The discount is: $\{discount\} dollars.');

[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
landscape(150)
[/input]
[output]
The final price is: 936.03 dollars.
The discount is: 205.47 dollars.
[/output]
[/test]
[test open]
[input]
landscape(550)
[/input]
[output]
The final price is: 3432.11 dollars.
The discount is: 753.39 dollars.
[/output]
[/test]
[test]
[input]
landscape(335)
[/input]
[output]
The final price is: 2090.467 dollars.
The discount is: 458.883 dollars.
[/output]
[/test]
[test]
[input]
landscape(412)
[/input]
[output]
The final price is: 2570.9624000000003 dollars.
The discount is: 564.3576 dollars.
[/output]
[/test]
[test]
[input]
landscape(500)
[/input]
[output]
The final price is: 3120.1 dollars.
The discount is: 684.9 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

