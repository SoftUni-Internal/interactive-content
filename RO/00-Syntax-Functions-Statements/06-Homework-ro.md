# Teme pentru acasă
[slide hideTitle]
# Problemă: Math Operations
[code-task title="Math Operations" taskId="js-syntax-functions-statements-mathops" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculate(firstNum, secondNum, operator) {
    //Write your code here
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
## Descriere
Scrieți o funcție JS care primește **două** **numere** și **un șir** ca intrare.

Șirul poate fi unul dintre următoarele: '**+**', '**-**', '**\***', '**/**', '**%**', '**\*\***'.

Imprimați rezultatul operației **matematice** între **ambele numere** și **operatorul** pe care îl primiți ca un șir către consolă.

**Intrarea** vine ca **două numere** și **un argument șir** transmis funcției dvs.

**Ieșirea** ar trebui tipărită pe consolă.



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| calculate(5, 6, '+') | 11 |
| calculate(3, 5.5, '*') | 16.5 |


## Sfaturi

Scrieți o funcție care primește **trei** argumente:

[image assetsSrc="syntax-homework-01.png" /]

Declarați o variabilă numită **result** care va păstra rezultatul matematic.

Folosiți o instrucțiune **switch** pentru a lua șirul de la intrare și pe baza acestuia, efectuați operația matematică dintre cele două numere.

[image assetsSrc = "syntax-homework-02.png" /]


Imprimați rezultatul pe consolă.

[image assetsSrc="syntax-homework-03.png" /]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculate(5, 6, '+')
[/input]
[output]
11
[/output]
[/test]
[test open]
[input]
calculate(3, 5.5, '*')
[/input]
[output]
16.5
[/output]
[/test]
[test]
[input]
calculate(1, 5, '+')
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
calculate(53, 55, '-')
[/input]
[output]
-2
[/output]
[/test]
[test]
[input]
calculate(11, 5, '/')
[/input]
[output]
2.2
[/output]
[/test]
[test]
[input]
calculate(333, 1, '*')
[/input]
[output]
333
[/output]
[/test]
[test]
[input]
calculate(877, 21, '%')
[/input]
[output]
16
[/output]
[/test]
[test]
[input]
calculate(11, 2, '**')
[/input]
[output]
121
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Sum of Numbers N...M
[code-task title="Sum of Numbers N...M" taskId="js-syntax-functions-statements-sumofnumsnm" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sum(firstString, secondString) {
    //Write your code here
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
## Descriere

Scrieți o funcție care primește două numere **n** și **m** ca intrare și **tipărește suma** tuturor numerelor de la **n** la **m**.

**Intrarea** vine ca **două elemente de șir** care trebuie **parsate** la numere.

**Ieșirea** ar trebui **să returneze** suma.



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| sum('1', '5') | 15 |
| sum('-8', '20') | 174 |


## Sfaturi

Scrieți o funcție care primește două argumente șir și parasți-le în numere. Utilizați funcția `Number(string)` sau pur și simpu puneți semnul '**+**' înainte de șir.


[image assetsSrc="syntax-homework-04.png" /]

[image assetsSrc="syntax-homework-05.png" /]

Declarați o variabilă numită **result** care va păstra rezultatul matematic.

Scrieți **o buclă** **for** de la **num1** până la **num2** și pentru fiecare pas al ciclului, până când este finalizat, adăugați valoarea curentă.

[image assetsSrc="syntax-homework-06.png" /]

La final, returnați rezultatul

[image assetsSrc="syntax-homework-07.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sum('1', '5')
[/input]
[output]
15
[/output]
[/test]
[test open]
[input]
sum('-8', '20')
[/input]
[output]
174
[/output]
[/test]
[test]
[input]
sum('33', '244')
[/input]
[output]
29362
[/output]
[/test]
[test]
[input]
sum('0', '150')
[/input]
[output]
11325
[/output]
[/test]
[test]
[input]
sum('-33', '2')
[/input]
[output]
-558
[/output]
[/test]
[test]
[input]
sum('11.5', '2')
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sum('0.5', '0.5')
[/input]
[output]
0.5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Fruit
[code-task title="Fruit" taskId="js-syntax-functions-statements-fruit" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateCost(fruit, weightInGrams, pricePerKG) {
    //Write your code here
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
## Descriere

Scrieți o funcție care calculează câți bani aveți nevoie pentru a cumpăra fructe. Veți primi un **șir** care reprezintă tipul de fructe pe care doriți să îl cumpărați, **un număr** pentru greutatea lor în grame și un alt **număr** pentru prețul pe kilogram.

Imprimați următorul text pe consolă:

"**I need $**\{**money**\} **to buy** \{**weight**\} **kilograms of** \{**fruit**\}."

Imprimați greutatea și banii **rotunjiți** la două zecimale.

**Intrarea** vine ca **trei argumente** transmise funcției dvs.

**Ieșirea** ar trebui tipărită pe consolă.


## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| calculateCost('oranges', 2500, 1.80) | I need $4.50 to buy 2.50 kilograms of oranges. |
| calculateCost('apples', 1563, 2.35) | I need $3.67 to buy 1.56 kilograms of apples. |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateCost('oranges', 2500, 1.80)
[/input]
[output]
I need $4.50 to buy 2.50 kilograms of oranges.
[/output]
[/test]
[test open]
[input]
calculateCost('apples', 1563, 2.35)
[/input]
[output]
I need $3.67 to buy 1.56 kilograms of apples.
[/output]
[/test]
[test]
[input]
calculateCost('bananas', 21.20, 55.2)
[/input]
[output]
I need $1.17 to buy 0.02 kilograms of bananas.
[/output]
[/test]
[test]
[input]
calculateCost('jkkhkj', 566, 2.15)
[/input]
[output]
I need $1.22 to buy 0.57 kilograms of jkkhkj.
[/output]
[/test]
[test]
[input]
calculateCost('aaa', 1111, 32.15)
[/input]
[output]
I need $35.72 to buy 1.11 kilograms of aaa.
[/output]
[/test]
[test]
[input]
calculateCost('aaal', 0, 32.15)
[/input]
[output]
I need $0.00 to buy 0.00 kilograms of aaal.
[/output]
[/test]
[test]
[input]
calculateCost('ppp', 10, 5)
[/input]
[output]
I need $0.05 to buy 0.01 kilograms of ppp.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Greatest Common Divisor - GCD
[code-task title="Greatest Common Divisor - GCD" taskId="js-syntax-functions-statements-gcd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateGCD(firstNum, secondNum) {
    //Write your code here
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
## Descriere

Scrieți o funcție care primește **două** **pozitive** **numere** ca intrare și găsește cel mai mare divizor comun.

**Intrarea** vine **ca două numere întregi pozitive**.

**Ieșirea** ar trebui tipărită pe consolă.

## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| calculateGCD(15, 5) | 5 |
| calculateGCD(2154, 458) | 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateGCD(15, 5)
[/input]
[output]
5
[/output]
[/test]
[test open]
[input]
calculateGCD(2154, 458)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(100, 3)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
calculateGCD(10, 2)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(542, 2)
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
calculateGCD(31, 5)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
calculateGCD(105, 5)
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
calculateGCD(15, 3)
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
calculateGCD(145, 9)
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Same Numbers
[code-task title="Same Numbers" taskId="js-syntax-functions-statements-samenumbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function checkNumber(input) {
    //Write your code here
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
## Descriere

Scrieți o funcție care primește **un întreg** ca intrare și verifică dacă toate cifrele din numărul dat sunt aceleași sau nu.

Imprimați în consolă dacă toate numerele sunt aceleași și **false** dacă nu.

Pe următoarea linie tipăriți **suma tuturor cifrelor**.

**Intrarea** vine ca un număr întreg.

**Ieșirea** ar trebui tipărită pe consolă.



## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| checkNumber(2222222) | true |
|  | 14 |

| **Intrare** | **Ieșire** |
| --- | --- |
| checkNumber(1234) | false |
|  | 10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
checkNumber(2222222)
[/input]
[output]
true
14
[/output]
[/test]
[test open]
[input]
checkNumber(1234)
[/input]
[output]
false
10
[/output]
[/test]
[test]
[input]
checkNumber(111)
[/input]
[output]
true
3
[/output]
[/test]
[test]
[input]
checkNumber(00000)
[/input]
[output]
true
0
[/output]
[/test]
[test]
[input]
checkNumber(123456789)
[/input]
[output]
false
45
[/output]
[/test]
[test]
[input]
checkNumber(11112)
[/input]
[output]
false
6
[/output]
[/test]
[test]
[input]
checkNumber(333301)
[/input]
[output]
false
13
[/output]
[/test]
[test]
[input]
checkNumber(9999999999)
[/input]
[output]
true
90
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Time to Walk
[code-task title="Time to Walk" taskId="js-syntax-functions-statements-timetowalk" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculateTime(stepsCount, stepLength, speed) {
    //Write your code here
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
## Descriere

Scrieți o funcție care **calculează** cât timp îi trebuie unui student pentru a ajunge la universitate.

Funcția primește **trei numere**:

- **Primul** este numărul de **pași** pe care îi face studentul de la domiciliu la universitate

- Numărul **al doilea** este lungimea pașilor elevului în **metri**

- **Numărul al treilea** este viteza studentului în **km/h**

La fiecare 500 de metri, studentul se odihnește și face o pauză de **1 minut**.

Calculați cât de mult merge studentul de acasă la universitate și imprimați pe consolă rezultatul în următorul format:`hours:minutes:seconds`.

**Intrarea** vine ca **trei numere**.

**Ieșirea** ar trebui tipărită pe consolă.

## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| calculateTime(4000, 0.60, 5) | 00:32:48 |
| calculateTime(2564, 0.70, 5.5) | 00:22:35 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
calculateTime(4000, 0.60, 5)
[/input]
[output]
00:32:48
[/output]
[/test]
[test open]
[input]
calculateTime(2564, 0.70, 5.5)
[/input]
[output]
00:22:35
[/output]
[/test]
[test]
[input]
calculateTime(2564, 0.70, 5.5)
[/input]
[output]
00:22:35
[/output]
[/test]
[test]
[input]
calculateTime(1000, 0.55, 7.6)
[/input]
[output]
00:05:21
[/output]
[/test]
[test]
[input]
calculateTime(912, 1.05, 3.7)
[/input]
[output]
00:16:32
[/output]
[/test]
[test]
[input]
calculateTime(600, 0.95, 6.4)
[/input]
[output]
00:06:21
[/output]
[/test]
[test]
[input]
calculateTime(1600, 1.95, 9.4)
[/input]
[output]
00:25:55
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Road Radar
[code-task title="Road Radar" taskId="js-syntax-functions-statements-roadradar" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function speedCheck(speed, areaType) {
    //Write your code here
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
## Descriere

Scrieți o funcție care determină dacă un șofer se află în limita de viteză.

Veți primi viteza și zona. Fiecare zonă are o limită diferită:

- Pe **autostradă** limita este de **130 km/h**

- Pe **drumul dintre județe** limita este de **90 km/h**

- În **oraș** limita este de **50 km/h**

- Într-o zonă **rezidențială**, limita este de **20 km/h**

Dacă șoferul este **în limite**, nu ar trebui să existe nicio ieșire.

Cu toate acestea, dacă șoferul este **peste limită**, funcția dvs. ar trebui să imprime gravitatea infracțiunii.

Pentru a accelera până la **20** km/h peste limită, viteza ar trebui să fie tipărită.

Pentru viteza de până la **40** km/h peste limită, ar trebui tipărită viteza excesivă.

Pentru orice altceva, conducerea imprudentă ar trebui tipărită.

**Intrarea** vine ca o **matrice de elemente**.

Primul element este viteza curentă (**număr**), al doilea element este zona.

**Ieșirea** ar trebui tipărită pe consolă.

Rețineți că, în anumite cazuri, nu există nicio ieșire.


## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| speedCheck(40, 'city') |  |
| speedCheck(21, 'residential') | speeding |
| speedCheck(120, 'interstate') | excessive speeding |
| speedCheck(200, 'motorway') | reckless driving |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
speedCheck(40, 'city')
[/input]
[output]

[/output]
[/test]
[test open]
[input]
speedCheck(21, 'residential')
[/input]
[output]
speeding
[/output]
[/test]
[test open]
[input]
speedCheck(120, 'interstate')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test open]
[input]
speedCheck(200, 'motorway')
[/input]
[output]
reckless driving
[/output]
[/test]
[test]
[input]
speedCheck(20, 'residential')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(71, 'city')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test]
[input]
speedCheck(90, 'interstate')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(130, 'motorway')
[/input]
[output]

[/output]
[/test]
[test]
[input]
speedCheck(40, 'residential')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(90, 'city')
[/input]
[output]
excessive speeding
[/output]
[/test]
[test]
[input]
speedCheck(91, 'interstate')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(131, 'motorway')
[/input]
[output]
speeding
[/output]
[/test]
[test]
[input]
speedCheck(61, 'residential')
[/input]
[output]
reckless driving
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Cooking by Numbers
[code-task title="Cooking by Numbers" taskId="js-syntax-functions-statements-cookingbynums" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cook(start, action1, action2, action3, action4, action5) {
    //Write your code here
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
## Descriere

Create a program that receives a **number** and five operations. Perform the operations **sequentially** by starting with the **input number** and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

-   **chop**  - divide the number by two
-   **dice** - find the square root of the number
-   **spice**  - add 1 to the number
-   **bake** - multiply the number by 3
-   **fillet**  - subtract 20% from the number

The **input** comes as an **array of 6 string elements**. 

The first element is the starting point and must be **parsed** to a number. 

The remaining 5 elements are the names of the operations to be performed.

The **output** should be printed to the console.

Creați un program care primește un **număr** și cinci operații. Efectuați operațiile **secvențial** începând cu **numărul de intrare** și folosind rezultatul fiecărei operațiuni ca punct de plecare pentru următoarea. Imprimați rezultatul fiecărei operații în ordine. Operațiunile pot fi una dintre următoarele:

- **chop** - împarte numărul la doi
-  **dice** - găsiți rădăcina pătrată a numărului
- **spice** - adăugați 1 la număr
-  **bake** - înmulțește numărul cu 3
- **fillet**- scade 20% din număr

**Intrarea** vine ca o **matrice de 6 elemente de șir**.

Primul element este punctul de plecare și trebuie să fie **parsat** la un număr.

Cele 5 elemente rămase sunt numele operațiunilor care trebuie efectuate.

**Ieșirea** ar trebui tipărită pe consolă.


## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']) | 16 |
|  | 8 |
|  | 4 |
|  | 2 |
|  | 1 |

| **Intrare** | **Ieșire** |
| --- | --- |
| cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']) | 3 |
|  | 4 |
|  | 2 |
|  | 6 |
|  | 4.8 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
[/input]
[output]
16
8
4
2
1
[/output]
[/test]
[test open]
[input]
cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
[/input]
[output]
3
4
2
6
4.8
[/output]
[/test]
[test]
[input]
cook(['1024', 'chop', 'chop', 'chop', 'chop', 'chop'])
[/input]
[output]
512
256
128
64
32
[/output]
[/test]
[test]
[input]
cook(['3', 'bake', 'dice', 'spice', 'spice', 'fillet'])
[/input]
[output]
9
3
4
5
4
[/output]
[/test]
[test]
[input]
cook(['10', 'fillet', 'chop', 'dice', 'chop', 'dice'])
[/input]
[output]
8
4
2
1
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Validity Checker
[code-task title="Validity Checker" taskId="js-syntax-functions-statements-validitycheck" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function validate(x1, y1, x2, y2) {
    //Write your code here
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
## Descriere

Creați un program care primește două puncte pe un plan în format \[x1, y1, x2, y2 \].

Verificați dacă distanța dintre fiecare punct și începutul sistemului de coordonate cartezian (0,0) este **validă**.

O distanță între două puncte este considerată **valabilă** dacă are o **valoare pozitivă**.

În cazul în care distanța este validă, tipăriți "\{**x1, y1**\} **to** \{**x2, y2**\} **is valid**"

În cazul în care distanța este nevalidă, tipăriți "\{**x1, y1**\} **to** \{**x2, y2**\} **is invalid**"

Ordinea comparațiilor ar trebui să fie întotdeauna: prima \{**x1, y1**\} to \{**0, 0**\}, atunci \{**x2, y2**\} la \{**0, 0**\} și în cele din urmă \{**x1, y1**\} la \{**x2, y2**\}.

 **Intrarea** constă din două puncte date ca o **matrice de numere**.

Pentru fiecare comparație imprimați fie "\{**x1, y1**\} **to** \{**x2, y2**\} **is valid**" dacă distanța este validă, sau "\{**x1, y1**\} la \{**x2, y2**\} **is invalid**" dacă nu este validă.


## Exemple

| **Intrare** | **Ieșire** |
| --- | --- |
| validate([3, 0, 0, 4]) | \{3, 0\} to \{0, 0\} is valid |
|  | \{0, 4\} to \{0, 0\} is valid |
|  | \{3, 0\} to \{0, 4\} is valid |

| **Intrare** | **Ieșire** |
| --- | --- |
| validate([2, 1, 1, 1]) | \{2, 1\} to \{0, 0\} is invalid |
|  | \{1, 1\} to \{0, 0\} is invalid |
|  | \{2, 1\} to \{1, 1\} is valid |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
validate([3, 0, 0, 4])
[/input]
[output]
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
[/output]
[/test]
[test open]
[input]
validate([2, 1, 1, 1])
[/input]
[output]
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
[/output]
[/test]
[test]
[input]
validate([10, 10, 10, 10])
[/input]
[output]
{10, 10} to {0, 0} is invalid
{10, 10} to {0, 0} is invalid
{10, 10} to {10, 10} is valid
[/output]
[/test]
[test]
[input]
validate([0, 0, 0, 0])
[/input]
[output]
{0, 0} to {0, 0} is valid
{0, 0} to {0, 0} is valid
{0, 0} to {0, 0} is valid
[/output]
[/test]
[test]
[input]
validate([0, 5, 0, -12])
[/input]
[output]
{0, 5} to {0, 0} is valid
{0, -12} to {0, 0} is valid
{0, 5} to {0, -12} is valid
[/output]
[/test]
[test]
[input]
validate([13, 7, 1, -1])
[/input]
[output]
{13, 7} to {0, 0} is invalid
{1, -1} to {0, 0} is invalid
{13, 7} to {1, -1} is invalid
[/output]
[/test]
[test]
[input]
validate([-2, 5, -6, 8])
[/input]
[output]
{-2, 5} to {0, 0} is invalid
{-6, 8} to {0, 0} is valid
{-2, 5} to {-6, 8} is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
