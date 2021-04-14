# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Employees
[code-task title="Employees" taskId="js-fundamentals-pt2-objects-and-classes-Employees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function employees(input){
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
Vi se cere să creați o listă de angajați și numerele lor personale.

Veți primi o matrice de șiruri.

Fiecare șir este **un nume** de angajat și pentru a **atribui un număr personal** trebuie să găsiți lungimea numelui (spații incluse).

Încercați să utilizați un obiect.

La final, tipăriți toți **angajații listați** în următorul format: 

"**Name:** \{**employeeName**\} **-- Personal Number:** \{**personalNum**\}"


## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
|employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])| Name\: Silas Butler \-\- Personal Number\: 12 |
|| Name\: Adnaan Buckley \-\- Personal Number\: 14 |
|| Name\: Juan Peterson \-\- Personal Number\: 13 |
||Name\: Brendan Villarreal \-\- Personal Number\: 18|

[/task-description]
[tests]
[test open]
[input]
employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])
[/input]
[output]
Name\: Silas Butler \-\- Personal Number\: 12
Name\: Adnaan Buckley \-\- Personal Number\: 14
Name\: Juan Peterson \-\- Personal Number\: 13
Name\: Brendan Villarreal \-\- Personal Number\: 18
[/output]
[/test]
[test]
[input]
employees(['Kiril Kirilov', 'Peter Petrov'])
[/input]
[output]
Name\: Kiril Kirilov \-\- Personal Number\: 13
Name\: Peter Petrov \-\- Personal Number\: 12
[/output]
[/test]
[test]
[input]
employees(['Jack', 'Will', 'Amanda'])
[/input]
[output]
Name\: Jack \-\- Personal Number\: 4
Name\: Will \-\- Personal Number\: 4
Name\: Amanda \-\- Personal Number\: 6
[/output]
[/test]
[test]
[input]
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])
[/input]
[output]
Name\: Samuel Jackson \-\- Personal Number\: 14
Name\: Will Smith \-\- Personal Number\: 10
Name\: Bruce Willis \-\- Personal Number\: 12
Name\: Tom Holland \-\- Personal Number\: 11
[/output]
[/test]
[test]
[input]
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
[/input]
[output]
Name\: Silas Butler \-\- Personal Number\: 12
Name\: Adnaan Buckley \-\- Personal Number\: 14
Name\: Juan Peterson \-\- Personal Number\: 13
Name\: Brendan Villarreal \-\- Personal Number\: 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Towns
[code-task title="Towns" taskId="js-fundamentals-pt2-objects-and-classes-Towns" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function towns(input){
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

Vi se cere să creați și să imprimați obiecte dintr-un tabel text.

Veți primi intrarea ca o matrice de șiruri, în care fiecare șir reprezintă un rând de tabel, cu valorile de pe rând separate de bare verticale " \| " și spații.

Tabelul va consta din exact 3 coloane: "**Town**", "**Latitude**" și "**Longitude**". 

Coloanele de latitudine și longitudine vor conține întotdeauna numere valide.

Consultați exemplele pentru a înțelege mai bine sarcina dvs.

Ieșirea trebuie să fie sub formă de obiecte.

Latitudinea și longitudinea trebuie parsate la numere și formatate la a doua zecimală.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|towns(['Bucuresti \| 42.696552 \| 23.32601','Beijing \| 39.913818 \| 116.363625'])|\{ town: 'Bucuresti', latitude: '42.70', longitude: '23.33' \} |
| | \{ town: 'Beijing', latitude: '39.91', longitude: '116.36' \} |

[/task-description]
[tests]
[test open]
[input]
towns(['Bucuresti \| 42.696552 \| 23.32601','Beijing \| 39.913818 \| 116.363625'])
[/input]
[output]
\{ town: 'Bucuresti', latitude: '42.70', longitude: '23.33' \}
\{ town: 'Beijing', latitude: '39.91', longitude: '116.36' \}
[/output]
[/test]
[test]
[input]
towns(['jdk \| 156.45 \| 12.5645', 'hjk \| 32.556 \| 134.824', 'io \| 87.65 \| 14.929', 'op \| 44.76 \| 184.28'])
[/input]
[output]
\{ town: 'jdk', latitude: '156.45', longitude: '12.56' \}
\{ town: 'hjk', latitude: '32.56', longitude: '134.82' \}
\{ town: 'io', latitude: '87.65', longitude: '14.93' \}
\{ town: 'op', latitude: '44.76', longitude: '184.28' \}
[/output]
[/test]
[test]
[input]
towns(['jj \| 156.45 \| 12.575', 'yu \| 65.65 \| 64.919', 'i \| 12.76 \| 184.28'])
[/input]
[output]
\{ town: 'jj', latitude: '156.45', longitude: '12.57' \}
\{ town: 'yu', latitude: '65.65', longitude: '64.92' \}
\{ town: 'i', latitude: '12.76', longitude: '184.28' \}
[/output]
[/test]
[test]
[input]
towns(['a \| 156.45 \| 12.575', 'b \| 1.65 \| 64.8919', 'c \| 45.786 \| 184.128', 'd \| 9.745 \| 1684.28', 'e \| 12.676 \| 1814.28'])
[/input]
[output]
\{ town: 'a', latitude: '156.45', longitude: '12.57' \}
\{ town: 'b', latitude: '1.65', longitude: '64.89' \}
\{ town: 'c', latitude: '45.79', longitude: '184.13' \}
\{ town: 'd', latitude: '9.74', longitude: '1684.28' \}
\{ town: 'e', latitude: '12.68', longitude: '1814.28' \}
[/output]
[/test]
[test]
[input]
towns(['a \| 136.45 \| 12.575', 'k \| 1.65 \| 564.19', 'l \| 99.545 \| 1684.18', 'e \| 112.66 \| 1814.28'])
[/input]
[output]
\{ town: 'a', latitude: '136.45', longitude: '12.57' \}
\{ town: 'k', latitude: '1.65', longitude: '564.19' \}
\{ town: 'l', latitude: '99.55', longitude: '1684.18' \}
\{ town: 'e', latitude: '112.66', longitude: '1814.28' \}
[/output]
[/test]
[test]
[input]
towns(['a \| 136.45 \| 812.575'])
[/input]
[output]
\{ town: 'a', latitude: '136.45', longitude: '812.58' \}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Movies
[code-task title="Movies"taskId="js-fundamentals-pt2-objects-and-classes-Movies" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function movies(input){
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
Scrieți o funcție care stochează informații despre filme într-o matrice.

Informațiile despre obiectul filmelor trebuie să fie **name**, **director** și **date**. Puteți primi mai multe tipuri de intrări:

* "**addMovie** \{**movie name**\}": adăugați filmul
* "\{**movie name**\} **directedBy** \{**director**\}": verificați dacă filmul există și apoi adăugați regizorul
* "\{**movie name**\} **onDate** \{**date**\}": verificați dacă filmul există și apoi adăugați data

La final, tipăriți toate filmele care au toate informațiile (dacă filmul nu are regizor, nume sau dată, nu le imprimați) **în format JSON.**

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']) | \{"name":"Fast and Furious", "date":"30.07.2018","director":"Rob Cohen"\}|
| | \{"name":"Godfather", "director":"Francis Ford Coppola", "date":"29.07.2018"\} |


[/task-description]
[tests]
[test open]
[input]
movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen'])
[/input]
[output]
\{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"\}
\{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"\}
[/output]
[/test]
[test]
[input]
movies(['addMovie a', 'addMovie b', 'a directedBy j', 'b directedBy o', 'b onDate 12\.34\.1244', 'a onDate 30\.07\.2010', 'addMovie c', 'c directedBy o', 'c onDate 12\.01\.1998'])
[/input]
[output]
\{"name":"a","director":"j","date":"30\.07\.2010"\}
\{"name":"b","director":"o","date":"12\.34\.1244"\}
\{"name":"c","director":"o","date":"12\.01\.1998"\}
[/output]
[/test]
[test]
[input]
movies(['addMovie a', 'addMovie b', 'a directedBy j', 'a onDate 30\.07\.2010'])
[/input]
[output]
\{"name":"a","director":"j","date":"30.07.2010"\}
[/output]
[/test]
[test]
[input]
movies(['addMovie y', 'addMovie b', 'y directedBy j', 'y onDate 30\.07\.2010', 'c onDate 30\.07\.2010', 'c directedBy l'])
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2010"\}
[/output]
[/test]
[test]
[input]
movies(['addMovie y', 'addMovie b', 'y directedBy j', 'y onDate 30\.07\.2010', 'b onDate 30\.17\.2015', 'addMovie k', 'k directedBy l', 'y directedBy j', 'k onDate 30\.07\.2010', 'y onDate 10\.07\.2010', 'addMovie n', 'x onDate 12\.07\.1994', 'y onDate 30\.07\.2018', 'n directedBy j', 'n onDate 30\.07\.2017'])
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2018"\}
\{"name":"k","director":"l","date":"30\.07\.2010"\}
\{"name":"n","director":"j","date":"30\.07\.2017"\}
[/output]
[/test]
[test]
[input]
movies(['addMovie y', 'addMovie b', 'y directedBy j', 'y onDate 30\.07\.2010', 'b onDate 30\.17\.2015', 'addMovie k', 'k directedBy l', 'y directedBy j', 'k onDate 30\.07\.2010'])
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2010"\}
\{"name":"k","director":"l","date":"30\.07\.2010"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Problemă: Inventory
[code-task title="Inventory"taskId="js-fundamentals-pt2-objects-and-classes-Inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function inventory(input){
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

Creați o funcție care creează un registru pentru eroi, cu numele, nivelul și articolele lor (dacă acestea există).

Intrarea este dată ca o matrice de șiruri. Fiecare element conține date pentru un erou, în următorul format:

"\{**heroName**\} \/ \{**heroLevel**\} \/ \{**item1**\}, \{**item2**\}, \{**item3**\}..."

Trebuie să stocați datele despre fiecare erou.

Numele este un șir, nivelul este un număr, iar articolele sunt toate șiruri.

Ieșirea este reprezentată de toate datele pentru toți eroii pe care i-ați stocat, sortați crescător după nivel, articolele fiind sortate alfabetic.

Datele trebuie să fie în următorul format pentru fiecare erou:

"**Hero:** \{**heroName**\}
**level** \=\> \{**heroLevel**\}
**items** \=\> \{**item1**\}, \{**item2**\}, \{**item3**\}"


## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']) | Hero: Hes |
| | level \=\> 1 |
| | items \=\> Antara, Desolator, Sentinel|
| | Hero: Derek |
| | level \=\> 12 |
| | items \=\> BarrelVest, DestructionSword |
| | Hero: Isacc |
| | level \=\> 25 |
| | items \=\> Apple, GravityGun |

[/task-description]
[tests]
[test open]
[input]
inventory(['Isacc \/ 25 \/ Apple, GravityGun', 'Derek \/ 12 \/ BarrelVest, DestructionSword', 'Hes \/ 1 \/ Desolator, Sentinel, Antara'])
[/input]
[output]
Hero: Hes
level \=\> 1
items \=\> Antara, Desolator, Sentinel
Hero: Derek
level \=\> 12
items \=\> BarrelVest, DestructionSword
Hero: Isacc
level \=\> 25
items \=\> Apple, GravityGun
[/output]
[/test]
[test]
[input]
inventory(['a \/ 10 \/ e, n, d, c, f', 'k \/ 13 \/ l, m', 'a \/ 18 \/ f, e, w'])
[/input]
[output]
Hero: a
level \=\> 10
items \=\> c, d, e, f, n
Hero: k
level \=\> 13
items \=\> l, m
Hero: a
level \=\> 18
items \=\> e, f, w
[/output]
[/test]
[test]
[input]
inventory(['a \/ 10 \/ e, n, d, c', 'k \/ 13 \/ l, o', 'n \/ 2 \/ f, e, w', 'i \/ 6 \/ q, r, f, e, w', 'p \/ 18 \/ w', 'f \/ 3 \/ f, p, w'])
[/input]
[output]
Hero: n
level \=\> 2
items \=\> e, f, w
Hero: f
level \=\> 3
items \=\> f, p, w
Hero: i
level \=\> 6
items \=\> e, f, q, r, w
Hero: a
level \=\> 10
items \=\> c, d, e, n
Hero: k
level \=\> 13
items \=\> l, o
Hero: p
level \=\> 18
items \=\> w
[/output]
[/test]
[test]
[input]
inventory(['l \/ 10 \/ d, c', 'k \/ 13 \/ l, o', 'n \/ 2 \/ f, e, w, a', 'f \/ 3 \/ f, p, w'])
[/input]
[output]
Hero: n
level \=\> 2
items \=\> a, e, f, w
Hero: f
level \=\> 3
items \=\> f, p, w
Hero: l
level \=\> 10
items \=\> c, d
Hero: k
level \=\> 13
items \=\> l, o
[/output]
[/test]
[test]
[input]
inventory(['l \/ 10 \/ d, ca, e, q, w, t'])
[/input]
[output]
Hero: l
level \=\> 10
items \=\> ca, d, e, q, t, w
[/output]
[/test]
[test]
[input]
inventory(['l \/ 10 \/ d, ca, e, q, w, t', 'q \/ 0 \/ w, r, i, s', 'n \/ 5 \/ p, r, y, x', 'o \/ 6 \/ w, r, n, s'])
[/input]
[output]
Hero: q
level \=\> 0
items \=\> i, r, s, w
Hero: n
level \=\> 5
items \=\> p, r, x, y
Hero: o
level \=\> 6
items \=\> n, r, s, w
Hero: l
level \=\> 10
items \=\> ca, d, e, q, t, w
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Make a Dictionary
[code-task title="Make a Dictionary" taskId="js-fundamentals-pt2-objects-and-classes-Make-a-Dictionary" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function dictionary(input){
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

Veți primi o matrice care conține șiruri în format JSON.

Trebuie să parsați aceste șiruri și **să le combinați într-un singur obiect.**

Fiecare șir din matrice va conține termenii descrierilor lor.

Dacă primiți același termen de două ori, înlocuiți-l cu noua definiție.

Imprimați fiecare **termen și definiție** din dicționar pe o nouă linie în acest format:

"**Term:** $\{**term**\} \=\> **Definition:** $\{**definition**\}"

Nu uitați să sortați conținutul **alfabetic** după termeni ca în dicționarele reale.

# Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| dictionary(['\{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."\}','\{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."\}','\{"Boiler":"A fuel-burning apparatus or container for heating water."\}','\{"Tape":"A narrow strip of material, typically used to hold or fasten something."\}','\{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."\}']) | Term\: Boiler \=\> Definition\: A fuel\-burning apparatus or container for heating water. |
| | Term\: Bus \=\> Definition\: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare. |
| | Term\: Coffee \=\> Definition\: A hot drink made from the roasted and ground seeds \(coffee beans\) of a tropical shrub. |
| | Term\: Microphone \=\> Definition\: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded. |
| | Term\: Tape \=\> Definition\: A narrow strip of material, typically used to hold or fasten something. |

[/task-description]
[tests]
[test open]
[input]
 dictionary(['\{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."\}','\{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."\}','\{"Boiler":"A fuel-burning apparatus or container for heating water."\}','\{"Tape":"A narrow strip of material, typically used to hold or fasten something."\}','\{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."\}'])
[/input]
[output]
Term\: Boiler \=\> Definition\: A fuel\-burning apparatus or container for heating water.
Term\: Bus \=\> Definition\: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare. 
Term\: Coffee \=\> Definition\: A hot drink made from the roasted and ground seeds \(coffee beans\) of a tropical shrub. 
Term\: Microphone \=\> Definition\: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded. 
Term\: Tape \=\> Definition\: A narrow strip of material, typically used to hold or fasten something.
[/output]
[/test]
[test]
[input]
dictionary(['\{"bb":"fghfhgfghfghfhg."\}', '\{"ad":"gyuguy gyu guy guy gyu guy guyguguhvhv"\}', '\{"ab":"vyvgvgh vgh vty vtyv ytv yt vty vyt."\}'])
[/input]
[output]
Term: ab \=\> Definition: vyvgvgh vgh vty vtyv ytv yt vty vyt.
Term: ad \=\> Definition: gyuguy gyu guy guy gyu guy guyguguhvhv
Term: bb \=\> Definition: fghfhgfghfghfhg.
[/output]
[/test]
[test]
[input]
dictionary(['\{"nmbb":"fghfhgfghfghfhg."\}', '\{"jad":"gyuguy gyu guy guy gyu guy guyguguhvhv"\}', '\{"hab":"vyvgvgh vgh vty vtyv ytv yt vty vyt."\}', '\{"bjad":"gyuguy gy bhjbhjb  u guy guy gyu guy guyguguhvhv"\}', '\{"mkjad":"gyuguy gyu guy guy gybhj bjh bu guy guyguguhvhv"\}'])
[/input]
[output]
Term: bjad \=\> Definition: gyuguy gy bhjbhjb  u guy guy gyu guy guyguguhvhv
Term: hab \=\> Definition: vyvgvgh vgh vty vtyv ytv yt vty vyt.
Term: jad \=\> Definition: gyuguy gyu guy guy gyu guy guyguguhvhv
Term: mkjad \=\> Definition: gyuguy gyu guy guy gybhj bjh bu guy guyguguhvhv
Term: nmbb \=\> Definition: fghfhgfghfghfhg.
[/output]
[/test]
[test]
[input]
dictionary(['\{"mmjad":"gyuu guy guy gyu guy guyguhvhv"\}', '\{"nhab":"vyvgvgh v yt vty vyt."\}', '\{"bjad":"gyuguy gy bhjbhjb  u guy gupp p po pyguguhvhv"\}', '\{"mkjad":"gyuguy gyu guy guyuguhvhv"\}'])
[/input]
[output]
Term: bjad \=\> Definition: gyuguy gy bhjbhjb  u guy gupp p po pyguguhvhv
Term: mkjad \=\> Definition: gyuguy gyu guy guyuguhvhv
Term: mmjad \=\> Definition: gyuu guy guy gyu guy guyguhvhv
Term: nhab \=\> Definition: vyvgvgh v yt vty vyt.
[/output]
[/test]
[test]
[input]
dictionary(['\{"zmmjad":"gyuu guy guy gyu guy guyguhvhv"\}', '\{"anhab":"vyvgvgh v yt vty vyt."\}', '\{"akjad":"gyuguy gyu guy guhvhv"\}'])
[/input]
[output]
Term: akjad \=\> Definition: gyuguy gyu guy guhvhv
Term: anhab \=\> Definition: vyvgvgh v yt vty vyt.
Term: zmmjad \=\> Definition: gyuu guy guy gyu guy guyguhvhv
[/output]
[/test]
[test]
[input]
dictionary(['\{"zmmjad":"gyuu guy guy gyu guy guyguhvhv"\}', '\{"anhab":"vyvgvgh v vty vtyy vyt."\}', '\{"makjad":"gyugvgh vghuy guhvhv"\}', '\{"kanhab":"vyvgvgh v yt vty vyt."\}', '\{"anhab":"vgh vgh yt."\}'])
[/input]
[output]
Term: anhab \=\> Definition: vgh vgh yt.
Term: kanhab \=\> Definition: vyvgvgh v yt vty vyt.
Term: makjad \=\> Definition: gyugvgh vghuy guhvhv
Term: zmmjad \=\> Definition: gyuu guy guy gyu guy guyguhvhv
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Songs
[code-task title="Songs"taskId="js-fundamentals-pt2-objects-and-classes-Songs" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function songs(input){
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

Definiți o clasă Song, care conține următoarele informații despre melodii: typeList, name și duration.

Veți primi intrarea sub formă de matrice.

Primul element "**n**" va fi numărul de melodii.

Următoarele "**n**" elemente vor fi datele melodiilor în următorul format: 

"\{**typeList**\}\_\{**name**\}\_\{**time**\}", iar ultimul element va fi typeList\/ "**all**".

Imprimați doar numele melodiilor care aparțin de typeList \/ toate melodiile.

# Exemplul Unu

|**Intrare**|**Ieșire** |
|---|---|
|songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])|DownTown|
||Kiss|
||Smooth Criminal|

# Exemplul Doi
|**Intrare**|**Ieșire** |
|---|---|
|songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']) |Andalouse|

# Exemplul Trei

|**Intrare**|**Ieșire** |
|---|---|
|songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])|Replay |
||Photoshop|

[/task-description]
[tests]
[test open]
[input]
songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite'])
[/input]
[output]
DownTown
Kiss
Smooth Criminal
[/output]
[/test]
[test open]
[input]
songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater'])
[/input]
[output]
Andalouse
[/output]
[/test]
[test open]
[input]
songs([2, 'like_Replay_3:15','ban_Photoshop_3:48','all'])
[/input]
[output]
Replay
Photoshop
[/output]
[/test]
[test]
[input]
songs([3, 'favourite\_immaterial\_3:24', 'ban\_party\_4:45', 'like\_smile\_4:25', 'like'])
[/input]
[output]
smile
[/output]
[/test]
[test]
[input]
songs([4, 'ban\_hey\_3:48', 'programming\_ban\_3:42', 'ban\_hello\_3:29', 'like\_like\_3:05', 'ban'])
[/input]
[output]
hey
hello
[/output]
[/test]
[test]
[input]
songs([4, 'ban\_hey\_3:48', 'programming\_ban\_3:42', 'ban\_hello\_3:29', 'like\_like\_3:05', 'programming'])
[/input]
[output]
ban
[/output]
[/test]
[test]
[input]
songs([4, 'ban\_hey\_3:48', 'programming\_ban\_3:42', 'ban\_hello\_3:29', 'like\_like\_3:05', 'all'])
[/input]
[output]
hey
ban
hello
like
[/output]
[/test]
[test]
[input]
songs([2, 'list\_song\_3:21', 'list2\_song2\_2:58', 'list'])
[/input]
[output]
song
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
