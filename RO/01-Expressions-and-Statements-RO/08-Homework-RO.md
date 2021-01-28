# Teme pentru acasă

[slide hideTitle]
# Problemă: Calculate a square area
[code-task title="Calculate a square area" taskId="pb-js-expressions-Calculate-a-square-area" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function calculateSpeed (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care obține un număr întreg și calculează aria unui pătrat cu latura `a`.
- obțineți un număr în argumentul funcției,
- multiplicați-l și
- tipăriți rezultatul în consolă.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 5 | 25 |


[/task-description]
[tests]
[test]
[input]
2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
1
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
# Problemă: Currency Converter

[vimeo-video]
[stream language="EN" videoId="486857468/b246ee7ca8" default /]
[stream language="RO" videoId="486857468/b246ee7ca8"  /]
[/video-vimeo]

[code-task title="Currency Converter" taskId="pb-js-expressions-Currency-Converted" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function currencyConverter (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Scrieți un program pentru a converti de la USD la EUR:
   * Citiți un ** număr cu virgulă mobilă **: ** dolari ** care urmează să fie convertiți
   * Convertiți dolari în euro (utilizați rata fixă ​​de dolari în euro: ** 0,88 **)
   * Imprimați valoarea convertită în ** euro **

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 17 | 14.96 |
| 87 | 76.56 |


[/task-description]
[tests]
[test]
[input]
10.0
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
5.0
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
25.5
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
12.0
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
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Scrieți o funcție care obține un **unghi** în [radiane](https://en.wikipedia.org/wiki/Radian) and converts it to [degrees](https://en.wikipedia.org/wiki/Degree_(angle)). 

Utilizați formula: 
- `grade = radiane * 180 / π` 

Numărul **π** în programele JavaScript poate fi accesat prun `Math.PI`. 
Rotunjiți rezultatul la cel mai apropiat număr întreg, folosind `toFixed(0)`.


## Exemplu
| **Input** | **Output** |
| --- | --- |
| 3.1416 | 180 |
| 6.2832 | 360 |
| 0.7854 | 45 |


[/task-description]
[tests]
[test]
[input]
0.5236
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
0.7854
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
6.2832
[/input]
[output]
360
[/output]
[/test]
[test]
[input]
3.1416
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
# Problemă: Days to Minutes

[vimeo-video]
[stream language="EN" videoId="486857308/5e4892a5b8" default /]
[stream language="RO" videoId="486857308/5e4892a5b8"  /]
[/video-vimeo]

[code-task title="Days to Minutes" taskId="pb-js-expressions-Days-to-Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language="javascript"]
```
function daysToMinutes (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Scrieți un program care covertează zilele în minute:

* Citiți un număr **întreg** (**zilele** care trebuie să fie convertite)

* Convertiți zilele în minute (utilizați operațiile de calcul)

* Imprimați **minutele**

  ## Exemplu
| **Input** | **Output** |
| --- | --- |
| 2 | 2880 |
| 5 | 7200 |


[/task-description]
[tests]
[test]
[input]
6
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
32
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
9
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
   // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a calcula aria și perimetrul unui **cerc**:
  * Citiți numărul în virgulă mobilă: **raza** cercului
  * Calculați **aria** și **perimetrul** cercului
  * Imprimați valorile calculate **formatate** până la 2 cifre după punctul zecimal

  ## Example
| **Input** | **Output** |
| --- | --- |
| 7 | Area = 153.94 |
|  | Perimeter = 43.98 |


[/task-description]
[tests]
[test]
[input]
12.0
[/input]
[output]
Area = 452.39
Perimeter = 75.40
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
Area = 314.16
Perimeter = 62.83
[/output]
[/test]
[test]
[input]
5.5
[/input]
[output]
Area = 95.03
Perimeter = 34.56
[/output]
[/test]
[test]
[input]
9.4
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
function fourOperations(input){
    // Write code here
}
```
[/code-editor]
[task-description]
# Descriere
Peter dorește să amenajeze teritoriul curții sale și de accea el a  yard, așa că a angajat o ** companie ** care să o facă pentru el.
Scrieți o funcție care ** calculează ** fondurile necesare pe care Peter va trebui să le ** plătească ** pentru acest serviciu
Prețul pe metru pătrat este de ** 7,61 dolari ** cu TVA.
Deoarece curtea lui Peter este destul de ** mare **, firma contractantă oferă o reducere de ** 18% ** la prețul final.
## Input
Funcția primește un argument:
- Metri pătrați, care vor fi amenajați - un număr real în intervalul \[0.00… 10000.00\]

## Output
 Două linii sunt imprimate pe consolă:

- `The final price is: {final price of the service} dollars.`

- `The discount is: {discount} dollars.`

## Exemplu
| **Input** | **Output** |
| --- | --- |
| 550 | The final price is: 3432.11 dollars. |
|  | The discount is: 753.39 dollars. |

## Explicații
Calculăm prețul pentru amenajarea întregi curți:
- `550 * 7.61 = $4185.5`

Reducem reducerea din suma totală:

- `0.18 * 4185.5 = $753.39`

Calculăm prețul final al serivicului:

- `4185.5 – 753.39 -> $3432.11`


| **Input** | **Output** |
| --- | --- |
| 150 | The final price is: 936.03 dollars. |
|  | The discount is: 205.47 dollars. |

[/task-description]
[tests]
[test]
[input]
550
[/input]
[output]
The final price is: 3432.11 dollars.
The discount is: 753.39 dollars.
[/output]
[/test]
[test]
[input]
335
[/input]
[output]
The final price is: 2090.467 dollars.
The discount is: 458.883 dollars.
[/output]
[/test]
[test]
[input]
412
[/input]
[output]
The final price is: 2570.9624000000003 dollars.
The discount is: 564.3576 dollars.
[/output]
[/test]
[test]
[input]
500
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

