# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Opinion Poll
[code-task title="Opinion Poll" taskId="oop-basics-java-defining-classes-Opinion-Poll" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Creați clasa "**Person**" cu două câmpuri "**String name**" și "**int age**", scrieți un program care să citească din consolă **N** linii de informații personale și apoi imprimați toate persoanele a căror **age** este **more than 30** ani, **sorted in alphabetical order**.

**Note:** puteți folosi `stream()` pentru a filtra persoanele. 

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | John - 48 |
| Peter 12 | Steven – 31 |
| Steven 31 |  |
| John 48 |  |



| **Intrare**|**Ieșire**|
| --- | --- |
| 5 | Robert - 44 |
| Sofia 33 | Sofia - 33 |
| Thomas 88 | Thomas - 88 |
| Camilla 22 |  |
| Robert 44 |  |
| Owen 11 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
Peter 12
Steven 31
John 48
[/input]
[output]
John - 48
Steven - 31
[/output]
[/test]
[test open]
[input]
5
Sofia 33
Thomas 88
Camilla 22
Robert 44
Owen 11
[/input]
[output]
Robert - 44
Sofia - 33
Thomas - 88
[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
D 31
E 99
M 32
N 123
O 100
P 321534
S 3213
Z 32131
[/input]
[output]
A - 40
B - 43
C - 54
D - 31
E - 99
M - 32
N - 123
O - 100
P - 321534
S - 3213
Z - 32131
[/output]
[/test]
[test]
[input]
11
Z 32
S 12
P 0
O 100
N 123
M 32
E 99
D 1
C 54
B 43
A 40
[/input]
[output]
A - 40
B - 43
C - 54
E - 99
M - 32
N - 123
O - 100
Z - 32
[/output]
[/test]
[test]
[input]
4
A 10
B 11
C 12
D 13
[/input]
[output]

[/output]
[/test]
[test]
[input]
10
A 31
B 76
E 645
Z 55
K 53
I 43
J 543
P 67
H 76
F 88
[/input]
[output]
A - 31
B - 76
E - 645
F - 88
H - 76
I - 43
J - 543
K - 53
P - 67
Z - 55
[/output]
[/test]
[test]
[input]
10
Andrew 31
Ben 76
Edward 645
Felix 11
Harley 76
Ivy 12
Joanna 0
Kylie 30
Poppy 67
Zoie 55
[/input]
[output]
Andrew - 31
Ben - 76
Edward - 645
Harley - 76
Poppy - 67
Zoie - 55
[/output]
[/test]
[test]
[input]
4
Ann 31
Anntoanette 39
An 33
Annie 31
[/input]
[output]
An - 33
Ann - 31
Annie - 31
Anntoanette - 39
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Company Roster
[code-task title="Company Roster" taskId="oop-basics-java-defining-classes-Company-Roster" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Definiți o clasă **Employee** care conține următoarele informații : **name, salary, position, department, email** și **age**.

Informațiile **name, salary, position** și **department** sunt **mandatory** în timp ce celelalte sunt **optional**.

Sarcina voastră este să scrieți un program care să ia **N** linii de informații despre angajați din consolă și să calculeze departamentul cu cel mai mare salariu mediu și să imprime pentru fiecare angajat din acel departament **name, salary, email and age** - **sorted by salary in descending order**. 

Dacă un angajat **does not have** un **email** - in loc de acest câmp puteți imprima **"n/a"** , dacă nu are informația **age** - imprimați **"-1"** . 

Suma **salary** trebuie să fie imprimată **two decimal places** după separator.

**Hint**: puteți defini clasa **Department** care cuprinde o listă de angajați. 

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 4 | Highest Average Salary: Development |
| Peter 2200.00 Dev Development peter@softuni.org 28 | John 4400.20 john@john.com -1 |
| Tom 3300.00 Manager Marketing 33 | Peter 2200.00 peter@softuni.org 28 |
| John 4400.20 ProjectLeader Development john@john.com |  |
| Philip 0.20 Freelancer Nowhere 18 |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| 6 | Highest Average Salary: Sales |
| Stan 4960.37 Temp Coding stan@yahoo.com | Jimmy 6100.13 n/a -1 |
| Jimmy 6100.13 Manager Sales | Alex 6090.99 alex@softuni.org 44 |
| Alex 6090.99 Manager Sales alex@softuni.org 44 |  |
| Victoria 0.02 Director BeerDrinking victoria@gmail.com 23 |  |
| Andrew 7000.00 Director Coding |  |
| Peyton 130.3333 Sailor SpinachGroup peyton@softuni.org |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
4
Peter 2200.00 Dev Development peter@softuni.org 28
Tom 3300.00 Manager Marketing 33
John 4400.20 ProjectLeader Development john@john.com
Philip 0.20 Freelancer Nowhere 18
[/input]
[output]
Highest Average Salary: Development
John 4400.20 john@john.com -1
Peter 2200.00 peter@softuni.org 28
[/output]
[/test]
[test open]
[input]
6
Stan 4960.37 Temp Coding stan@yahoo.com
Jimmy 6100.13 Manager Sales
Alex 6090.99 Manager Sales alex@softuni.org 44
Victoria 0.02 Director BeerDrinking victoria@gmail.com 23
Andrew 7000.00 Director Coding
Peyton 130.3333 Sailor SpinachGroup peyton@softuni.org
[/input]
[output]
Highest Average Salary: Sales
Jimmy 6100.13 n/a -1
Alex 6090.99 alex@softuni.org 44
[/output]
[/test]
[test]
[input]
6
Michael 1300.01 Dev Development michael@softuni.org 28
Jeremy 1200.01 QA Testing jeremy@softuni.org 21
Trevor 1300.01 QA Testing trevor@gmail.com 23
Bethany 1300.02 QA Testing bethany@bethany.net 19
Stiven 1200.43 Dev Development stiven@yahoo.com 28
Sofia 1200.23 Dev Development sofia@softuni.org 28
[/input]
[output]
Highest Average Salary: Testing
Bethany 1300.02 bethany@bethany.net 19
Trevor 1300.01 trevor@gmail.com 23
Jeremy 1200.01 jeremy@softuni.org 21
[/output]
[/test]
[test]
[input]
6
Jacob 8400.20 ProjectLeader Development jacob@jacob.com
Bishop 1230.31 Manager Marketing bishop@gmail.com
Derek 3210.23 QA Testing derek@yahoo.com
Bobby 310.1 ProjectLeader Testing bobby@bobby.net
Phil 0.23 NoWhere StreetWork kodko@street.bg
Ed 11000.33 Dev Development ed@softuni.org
[/input]
[output]
Highest Average Salary: Development
Ed 11000.33 ed@softuni.org -1
Jacob 8400.20 jacob@jacob.com -1
[/output]
[/test]
[test]
[input]
7
Ben 8400.20 ProjectLeader Development 123
Clark 1230.31 Manager Marketing  123
Wendy 3210.23 QA Testing 22
Andy 3100.1 ProjectLeader Testing 14
Sarah 0.23 NoWhere StreetWork 13
Abbigail 1100.33 Dev Development 12
Robert 9999.98 QADev Testing 13
[/input]
[output]
Highest Average Salary: Testing
Robert 9999.98 n/a 13
Wendy 3210.23 n/a 22
Andy 3100.10 n/a 14
[/output]
[/test]
[test]
[input]
3
Ed 1223.32 Dev Development email@email.em
Edward 1993.32 Dev Development 22
Edison 1223931.32 Dev Development email@email.em 44
[/input]
[output]
Highest Average Salary: Development
Edison 1223931.32 email@email.em 44
Edward 1993.32 n/a 22
Ed 1223.32 email@email.em -1
[/output]
[/test]
[test]
[input]
18
Stan 49665.37 Temp Coding stan@yahoo.com
Yasmin 610.1653 Manager Sales
Teodor 60659.99 Manager Sales teodor@tdr.com 44
Benjamin 0.0652 Trainer Training benjamin@ben.org 23
Penny 700.0650 Director Coding
Popeye 13.335433 Sailor Shipping popeye@pop.eu
Murphy 496.3734 Temp Coding murphy@yahoo.com
Kurt 610.13 Manager Sales kurt@gmail.com
Teodor 609.993 Manager Sales teodor@gmail.com 44
Victor 0.032 Director Sales sales@uni.eu 23
Andrew 700.03305 Director Coding
Popeye2 13.333333 Sailor Shipping popeye@pop.eu
Simon 496.3437 Temp Coding simon@yahoo.com
Donald 620.133333 Manager Sales 12
Duck 609.99 Manager Sales duck@gmail.com 44
Daffy 0.02 Director Training daffy@uni.eu 23
Duckk 702.00 Director Coding
Christopher 13.3333 Sailor SpinachGroup robin@pop.eu
[/input]
[output]
Highest Average Salary: Sales
Teodor 60659.99 teodor@tdr.com 44
Donald 620.13 n/a 12
Yasmin 610.17 n/a -1
Kurt 610.13 kurt@gmail.com -1
Teodor 609.99 teodor@gmail.com 44
Duck 609.99 duck@gmail.com 44
Victor 0.03 sales@uni.eu 23
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Speed Racing
[code-task title="Speed Racing" taskId="oop-basics-java-defining-classes-Speed-Racing" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Sarcina voastră este să implementați un program care să țină cont de traseul mașinilor și de combustibil și să suporte metode pentru mișcarea mașinilor. 

Definiți clasa **Car** care să țină cont de informațiile despre mașini, astfel: **Model, fuel amount, fuel cost for 1 kilometer**, și **distance traveled**.

Un model de mașină este **unique** - aici nu vor exista niciodată 2 mașini de același model. 

Pe prima linie din datele de intrare veți primi un număr **N** - numărul de mașini pe care trebuie să le urmăriți. 

Pe **each** din următoarele **N** linii, veți primi informații despre o mașină în următorul format: 

"\<**model**\> \<**fuelAmount**\> \<**fuelCostFor1km**\>"

Toate **cars start at 0 kilometers traveled**.

După **N** linii, până la primirea comenzii "**End**", veți primi comenzi în următorul format: 

"**Drive** \<**carModel**\> \<**amountOfKm**\>"

Implementați o metodă în clasa **Car** pentru a calcula dacă o mașină **can** să meargă pe această distanță sau **not**. 

Dacă poate,  **fuel amount** pentru mașina respectivă trebuie să fie **reduced** cu cantitatea de combustibil folosit și **distance traveled** va trebui să fie mărită cu numărul de kilometri parcurs, altfel mașina nu se va mai mișca (cantitatea de combustibil și distanța parcursa trebuie să rămână la fel) și trebuie să imprimați în consolă

"**Insufficient fuel for the drive**"

După primirea comenzii "**End**" imprimați fiecare mașină în ordinea apariției în input și cantitatea curentă de combustibil și distanța parcursă în formatul:

"\<**model**\> \<**fuelAmount**\> \<**distanceTraveled**\>"

Când cantitatea de combustibil trebuie să fie rotunjită până la **second decimal place**.

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 2 | AudiA4 17.60 18 |
| AudiA4 23 0.3 | BMW-M2 21.48 56 |
| BMW-M2 45 0.42 |  |
| Drive BMW-M2 56 |  |
| Drive AudiA4 5 |  |
| Drive AudiA4 13 |  |
| End |  |


| **Intrare**|**Ieșire**|
| --- | --- |
| 3 | Insufficient fuel for the drive |
| AudiA4 18 0.34 | Insufficient fuel for the drive |
| BMW-M2 33 0.41 | AudiA4 1.00 50 |
| Ferrari-488Spider 50 0.47 | BMW-M2 33.00 0 |
| Drive Ferrari-488Spider 97 | Ferrari-488Spider 4.41 97 |
| Drive Ferrari-488Spider 35 |  |
| Drive AudiA4 85 |  |
| Drive AudiA4 50 |  |
| End |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
AudiA4 23 0.3
BMW-M2 45 0.42
Drive BMW-M2 56
Drive AudiA4 5
Drive AudiA4 13
End
[/input]
[output]
AudiA4 17.60 18
BMW-M2 21.48 56
[/output]
[/test]
[test open]
[input]
3
AudiA4 18 0.34
BMW-M2 33 0.41
Ferrari-488Spider 50 0.47
Drive Ferrari-488Spider 97
Drive Ferrari-488Spider 35
Drive AudiA4 85
Drive AudiA4 50
End
[/input]
[output]
Insufficient fuel for the drive
Insufficient fuel for the drive
AudiA4 1.00 50
BMW-M2 33.00 0
Ferrari-488Spider 4.41 97
[/output]
[/test]
[test]
[input]
3
MustangGTR 80 4.9
FerarriGTR 10 5.5
Moher 10 0.1
Drive MustangGTR 25
Drive MustangGTR 10
Drive FerarriGTR 100
Drive FerarriGTR 1
Drive Moher 101
End
[/input]
[output]
Insufficient fuel for the drive
Insufficient fuel for the drive
Insufficient fuel for the drive
MustangGTR 31.00 10
FerarriGTR 4.50 1
Moher 10.00 0
[/output]
[/test]
[test]
[input]
5
M1 10 1.1
M2 20 1.2
M3 40 2
M4 40 4
M 100 5
Drive M1 5
Drive M2 20
Drive M 15
Drive M1 70
Drive M3 20
Drive M4 20
End
[/input]
[output]
Insufficient fuel for the drive
Insufficient fuel for the drive
Insufficient fuel for the drive
M1 4.50 5
M2 20.00 0
M3 0.00 20
M4 40.00 0
M 25.00 15
[/output]
[/test]
[test]
[input]
3
M100 90 6
T 100 5
H 200 7
Drive M100 15
Drive M100 10
Drive T 1000
Drive T 25
Drive H 25
End
[/input]
[output]
Insufficient fuel for the drive
Insufficient fuel for the drive
Insufficient fuel for the drive
M100 0.00 15
T 100.00 0
H 25.00 25
[/output]
[/test]
[test]
[input]
3
K 5 0.1
S 9 10
T 10 0.2
Drive K 5
Drive K 15
Drive S 100
Drive T 15
End
[/input]
[output]
Insufficient fuel for the drive
K 3.00 20
S 9.00 0
T 7.00 15
[/output]
[/test]
[test]
[input]
5
B 50 1
S 5 0.5
M 1 0.5
D 15 2
K 20 5
Drive B 49
Drive S 10
Drive D 7
Drive D 1
Drive K 3
Drive K 1
Drive M 100
End
[/input]
[output]
Insufficient fuel for the drive
Insufficient fuel for the drive
B 1.00 49
S 0.00 10
M 1.00 0
D 1.00 7
K 0.00 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Raw Data
[code-task title="Raw Data" taskId="oop-basics-java-defining-classes-Raw-Data" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Sunteți proprietarul unei companii de curierat și vreți să creați un sistem de urmărire a mașinilor și a mărfurilor. 

Definiți o clasă **Car** care conține informații despre  **model, engine, cargo**, și o **collection of exactly 4 tires**.

Motorul, marfa, cauciucurile **should be separate classes**, creați un constructor care primește toate informațiile despre mașină și crează și inițializează toate componentele interne ale acesteia (motor, marfă și cauciucuri).

Pe prima linie de intrare veți primi un număr **N** - numărul de mașini pe care le aveți. 

Pe fiecare dintre următoarele **N** linii, veți primi informații despre mașină în formatul : 

"\<**model**\> \<**engineSpeed**\> \<**enginePower**\> \<**cargoWeight**\> \<**cargoType**\> \<**tire1Pressure**\> \<**tire1Age**\> \<**tire2Pressure**\> \<**tire2Age**\> \<**tire3Pressure**\> \<**tire3Age**\> \<**tire4Pressure**\> \<**tire4Age**\>"

În timp ce puterea, greutatea și vârsta cauciucurilor sunt **integers**, presiunea din cauciucuri este un **double**.

După primele **N** linii veți primi o singură linie cu 2 comenzi "**fragile**" sau "**flamable**".

Dacă primiți comanda "**fragile**" imprimați toate mașinile al căror **cargoType is** "**fragile**" cu un **tire** a cărui **pressure is < 1**.

Dacă primiți comanda "**flamable**" imprimați toate mașinile al căror **cargoType is** "**flamable**" și care au **enginePower > 250**. 

Mașinile în intrare, pe linii separate. 

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 2 | Citroen2CV |
| ChevroletAstro 200 180 1000 fragile 1.3 1 1.5 2 1.4 2 1.7 4 |  |
| Citroen2CV 190 165 1200 fragile 0.9 3 0.85 2 0.95 2 1.1 1 |  |
| fragile |  |

| **Intrare**|**Ieșire**|
| --- | --- |
| 4 | ChevroletExpress |
| ChevroletExpress 215 255 1200 flammable 2.5 1 2.4 2 2.7 1 2.8 1 | DaciaDokker |
| ChevroletAstro 210 230 1000 flammable 2 1 1.9 2 1.7 3 2.1 1 |  |
| DaciaDokker 230 275 1400 flammable 2.2 1 2.3 1 2.4 1 2 1 |  |
| Citroen2CV 190 165 1200 fragile 0.8 3 0.85 2 0.7 5 0.95 2 |  |
| flammable |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
ChevroletAstro 200 180 1000 fragile 1.3 1 1.5 2 1.4 2 1.7 4
Citroen2CV 190 165 1200 fragile 0.9 3 0.85 2 0.95 2 1.1 1
fragile
[/input]
[output]
Citroen2CV
[/output]
[/test]
[test open]
[input]
4
ChevroletExpress 215 255 1200 flammable 2.5 1 2.4 2 2.7 1 2.8 1
ChevroletAstro 210 230 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
DaciaDokker 230 275 1400 flammable 2.2 1 2.3 1 2.4 1 2 1
Citroen2CV 190 165 1200 fragile 0.8 3 0.85 2 0.7 5 0.95 2
flammable
[/input]
[output]
ChevroletExpress
DaciaDokker
[/output]
[/test]
[test]
[input]
5
ChevroletExpress 215 255 1200 flammable 2.5 1 2.4 2 2.7 1 2.8 1
ChevroletAstro 210 230 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
DaciaDokker 230 275 1400 flammable 2.2 1 2.3 1 2.4 1 2 1
Citroen2CV 190 165 1200 fragile 0.8 3 0.85 2 0.7 5 0.95 2
LaTroca 150 350 1500 flammable 2 1 1.9 2 1.7 3 2.1 1
flammable
[/input]
[output]
ChevroletExpress
DaciaDokker
LaTroca
[/output]
[/test]
[test]
[input]
4
C 200 180 1000 fragile 1.3 1 1.5 2 1.4 2 1.7 4
C2 190 165 1200 fragile 0.9 3 0.85 2 0.95 2 1.1 1
M4 300 250 1500 fragile 0.9 4 0.55 2 0.85 2 1.1 2
M 404 404 4004 fragile 0.9 1 0.9 5 0.9 4 3 5
fragile
[/input]
[output]
C2
M4
M
[/output]
[/test]
[test]
[input]
6
ChevroletExpress 215 255 1200 flammable 2.5 1 2.4 2 2.7 1 2.8 1
ChevroletAstro 210 230 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
DaciaDokker 230 275 1400 flammable 2.2 1 2.3 1 2.4 1 2 1
Citroen2CV 190 165 1200 fragile 0.8 3 0.85 2 0.7 5 0.95 2
Chevrolantiq 210 270 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
KappaMobile 210 330 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
flammable
[/input]
[output]
ChevroletExpress
DaciaDokker
Chevrolantiq
KappaMobile
[/output]
[/test]
[test]
[input]
2
ChevroletExpress 215 200 1200 fragile 2.5 1 2.4 2 2.7 1 2.8 1
ChevroletAstro 210 200 1000 flammable 2 1 1.9 2 1.7 3 2.1 1
flammable
[/input]
[output]

[/output]
[/test]
[test]
[input]
1
T 2000 1800 10000 flammable 1.3 1 1.5 2 1.4 2 1.7 4
flammable
[/input]
[output]
T
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Car Salesman
[code-task title="Car Salesman" taskId="oop-basics-java-defining-classes-Car-Salesman" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Definiți două clasee **Car** și **Engine**.

O **Car** are un **model, engine, weight** și **color**.

Un motor are un **model, power, displacement** și **efficiency**.

Pentru o mașină, **weight** și **color** și **displacements** ale motorului său și**efficiency** sunt **optional**.

Pe prima linie veți citi un număr **N** care va specifica numărul de linii de motoare pe care îl veți primi. 

Pe fiecare dintre următoarele **N** linii veți primi informații despre **Engine** in următorul format:

"\<**model**\> \<**power**\> \<**displacement**\> \<**efficiency**\>"

După liniile cu motoare, pe următoarea linie veți primi un număr  **M** – specificând numărul de Mașini care vor urma. 

Pe fiecare dintre următoarele **M** linii, informația despre o **Car** va urma în următorul format:

"\<**model**\> \<**engine**\> \<**weight**\> \<**color**\>"

Când motorul în format va fi **model of an existing Engine**. 

Când creați obiectul pentru o **Car**, trebuie să aveți o **reference to the real engine** în aceasta, în loc să aveți doar modelul de motor, **note** că proprietățile opționale **might be missing** din formate.

Sarcina este să imprimați fiecare mașină  (in **order** în care le-ați **received**) și informația trebuie să fie în formatul definit mai jos: 

Dacă oricare dintre câmpurile opționale nu a imprimat **"n/a"** în locul de :

```java
<carModel>
<engineModel>
Power: <enginePower>
Displacement: <engineDisplacement>
Efficiency: <engineEfficiency>
Weight: <carWeight>
Color: <carColor>
```

## Opțional

Suprascrieți metoda claselor `toString()` pentru a avea un mod reutilizabil de a arăta obiectele.

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 2 | FordFocus: |
| V8-101 220 50 | V4-33: |
| V4-33 140 28 B | Power: 140 |
| 3 | Displacement: 28 |
| FordFocus V4-33 1300 Silver | Efficiency: B |
| FordMustang V8-101 | Weight: 1300 |
| VolkswagenGolf V4-33 Orange | Color: Silver |
|  | FordMustang: |
|  | V8-101: |
|  | Power: 220 |
|  | Displacement: 50 |
|  | Efficiency: n/a |
|  | Weight: n/a |
|  | Color: n/a |
|  | VolkswagenGolf: |
|  | V4-33: |
|  | Power: 140 |
|  | Displacement: 28 |
|  | Efficiency: B |
|  | Weight: n/a |
|  | Color: Orange |


| **Intrare**|**Ieșire**|
| --- | --- |
| 4 | FordMondeo: |
| DSL-10 280 B | DSL-13: |
| V7-55 200 35 | Power: 305 |
| DSL-13 305 55 A+ | Displacement: 55 |
| V7-54 190 30 D | Efficiency: A+ |
| 4 | Weight: n/a |
| FordMondeo DSL-13 Purple | Color: Purple |
| VolkswagenPolo V7-54 1200 Yellow | VolkswagenPolo: |
| VolkswagenPassat DSL-10 1375 Blue | V7-54: |
| FordFusion DSL-13 | Power: 190 |
|  | Displacement: 30 |
|  | Efficiency: D |
|  | Weight: 1200 |
|  | Color: Yellow |
|  | VolkswagenPassat: |
|  | DSL-10: |
|  | Power: 280 |
|  | Displacement: n/a |
|  | Efficiency: B |
|  | Weight: 1375 |
|  | Color: Blue |
|  | FordFusion: |
|  | DSL-13: |
|  | Power: 305 |
|  | Displacement: 55 |
|  | Efficiency: A+ |
|  | Weight: n/a |
|  | Color: n/a |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
V8-101 220 50
V4-33 140 28 B
3
FordFocus V4-33 1300 Silver
FordMustang V8-101
VolkswagenGolf V4-33 Orange
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 28
Efficiency: B
Weight: 1300
Color: Silver
FordMustang:
V8-101:
Power: 220
Displacement: 50
Efficiency: n/a
Weight: n/a
Color: n/a
VolkswagenGolf:
V4-33:
Power: 140
Displacement: 28
Efficiency: B
Weight: n/a
Color: Orange
[/output]
[/test]
[test open]
[input]
4
DSL-10 280 B
V7-55 200 35
DSL-13 305 55 A+
V7-54 190 30 D
4
FordMondeo DSL-13 Purple
VolkswagenPolo V7-54 1200 Yellow
VolkswagenPassat DSL-10 1375 Blue
FordFusion DSL-13
[/input]
[output]
FordMondeo:
DSL-13:
Power: 305
Displacement: 55
Efficiency: A+
Weight: n/a
Color: Purple
VolkswagenPolo:
V7-54:
Power: 190
Displacement: 30
Efficiency: D
Weight: 1200
Color: Yellow
VolkswagenPassat:
DSL-10:
Power: 280
Displacement: n/a
Efficiency: B
Weight: 1375
Color: Blue
FordFusion:
DSL-13:
Power: 305
Displacement: 55
Efficiency: A+
Weight: n/a
Color: n/a
[/output]
[/test]
[test]
[input]
4
V8-101 220 50 A
V4-33 140 28 B
V6-33 230 28 D
V7-44 330 35 E
5
FordFocus V4-33 1300 Silver
Opelche V7-44 1550 Gold
Orel V8-101 1000 Pink
Nissan V8-101 1050 Yellow
Jugan V6-33 2001 Red
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 28
Efficiency: B
Weight: 1300
Color: Silver
Opelche:
V7-44:
Power: 330
Displacement: 35
Efficiency: E
Weight: 1550
Color: Gold
Orel:
V8-101:
Power: 220
Displacement: 50
Efficiency: A
Weight: 1000
Color: Pink
Nissan:
V8-101:
Power: 220
Displacement: 50
Efficiency: A
Weight: 1050
Color: Yellow
Jugan:
V6-33:
Power: 230
Displacement: 28
Efficiency: D
Weight: 2001
Color: Red
[/output]
[/test]
[test]
[input]
5
V8-101 220 50
V4-33 140 28
V6-33 230 28
V7-44 330 35
V12-45 450 60
7
FordFocus V4-33 1300 Silver
Opelche V7-44 1550 Gold
Orel V8-101 1000 Pink
Nissan V8-101 1050 Yellow
Jugan V6-33 2001 Red
Trabant V12-45 1000 White
Trabant V7-44 600 Green
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 28
Efficiency: n/a
Weight: 1300
Color: Silver
Opelche:
V7-44:
Power: 330
Displacement: 35
Efficiency: n/a
Weight: 1550
Color: Gold
Orel:
V8-101:
Power: 220
Displacement: 50
Efficiency: n/a
Weight: 1000
Color: Pink
Nissan:
V8-101:
Power: 220
Displacement: 50
Efficiency: n/a
Weight: 1050
Color: Yellow
Jugan:
V6-33:
Power: 230
Displacement: 28
Efficiency: n/a
Weight: 2001
Color: Red
Trabant:
V12-45:
Power: 450
Displacement: 60
Efficiency: n/a
Weight: 1000
Color: White
Trabant:
V7-44:
Power: 330
Displacement: 35
Efficiency: n/a
Weight: 600
Color: Green
[/output]
[/test]
[test]
[input]
5
V8-101 220 C
V4-33 140 B
V33-33 220 D
V12-101 340 A
V10-10 210 E+
6
FordFocus V4-33 1300 Silver
Trabant V10-10 600 Gold
Jaguar V8-101 1235 Green
Toyota V33-33 1200 Green
MercedesSmart V8-101 1100 None
MiniCooper V12-101 100 YellowBlack
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: n/a
Efficiency: B
Weight: 1300
Color: Silver
Trabant:
V10-10:
Power: 210
Displacement: n/a
Efficiency: E+
Weight: 600
Color: Gold
Jaguar:
V8-101:
Power: 220
Displacement: n/a
Efficiency: C
Weight: 1235
Color: Green
Toyota:
V33-33:
Power: 220
Displacement: n/a
Efficiency: D
Weight: 1200
Color: Green
MercedesSmart:
V8-101:
Power: 220
Displacement: n/a
Efficiency: C
Weight: 1100
Color: None
MiniCooper:
V12-101:
Power: 340
Displacement: n/a
Efficiency: A
Weight: 100
Color: YellowBlack
[/output]
[/test]
[test]
[input]
7
V8-101 220
V4-33 140
V33-33 220
V12-101 340
V10-10 210
V11-1110 110
V01-1011 230
10
FordFocus V4-33 1300 Silver
Trabant V10-10 600 Gold
Ford V4-33 650 Red
Jaguar V8-101 1235 Green
Toyota V33-33 1200 Green
Trabant V11-1110 1200 BlackYellow
MercedesSmart V8-101 1100 None
Tesla V01-1011 1230 PinkGreen
MiniCooper V12-101 100 YellowBlack
Motor123 V12-101 1000 JellyBeanColor
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: n/a
Efficiency: n/a
Weight: 1300
Color: Silver
Trabant:
V10-10:
Power: 210
Displacement: n/a
Efficiency: n/a
Weight: 600
Color: Gold
Ford:
V4-33:
Power: 140
Displacement: n/a
Efficiency: n/a
Weight: 650
Color: Red
Jaguar:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: 1235
Color: Green
Toyota:
V33-33:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: 1200
Color: Green
Trabant:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: n/a
Weight: 1200
Color: BlackYellow
MercedesSmart:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: 1100
Color: None
Tesla:
V01-1011:
Power: 230
Displacement: n/a
Efficiency: n/a
Weight: 1230
Color: PinkGreen
MiniCooper:
V12-101:
Power: 340
Displacement: n/a
Efficiency: n/a
Weight: 100
Color: YellowBlack
Motor123:
V12-101:
Power: 340
Displacement: n/a
Efficiency: n/a
Weight: 1000
Color: JellyBeanColor
[/output]
[/test]
[test]
[input]
7
V8-101 220 220 A
V4-33 140 110 D
V33-33 220 323 C
V12-101 340 325 D
V10-10 210 121 A+
V11-1110 110 450 D++
V01-1011 230 440 B+
11
FordFocus V4-33 1300
Trabant V10-10 600
Ford V4-33 650
Jaguar V8-101 1235
Toyota V33-33 1200
Trabant V11-1110 1200
MercedesSmart V8-101 1100
Tesla V01-1011 1230
MiniCooper V12-101 100
Motor123 V12-101 1001
Kolichka V11-1110 1234
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: 1300
Color: n/a
Trabant:
V10-10:
Power: 210
Displacement: 121
Efficiency: A+
Weight: 600
Color: n/a
Ford:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: 650
Color: n/a
Jaguar:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: 1235
Color: n/a
Toyota:
V33-33:
Power: 220
Displacement: 323
Efficiency: C
Weight: 1200
Color: n/a
Trabant:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: 1200
Color: n/a
MercedesSmart:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: 1100
Color: n/a
Tesla:
V01-1011:
Power: 230
Displacement: 440
Efficiency: B+
Weight: 1230
Color: n/a
MiniCooper:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: 100
Color: n/a
Motor123:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: 1001
Color: n/a
Kolichka:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: 1234
Color: n/a
[/output]
[/test]
[test]
[input]
7
V8-101 220 220 A
V4-33 140 110 D
V33-33 220 323 C
V12-101 340 325 D
V10-10 210 121 A+
V11-1110 110 450 D++
V01-1011 230 440 B+
11
FordFocus V4-33 Yellow
Trabant V10-10 Green
Ford V4-33 Black
Jaguar V8-101 White
Toyota V33-33 Red
Trabant V11-1110 None
MercedesSmart V8-101 GrayMetalic
Tesla V01-1011 Gray
MiniCooper V12-101 Purple
Motor123 V12-101 Pink
Kolichka V11-1110 Colorless
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: n/a
Color: Yellow
Trabant:
V10-10:
Power: 210
Displacement: 121
Efficiency: A+
Weight: n/a
Color: Green
Ford:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: n/a
Color: Black
Jaguar:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: n/a
Color: White
Toyota:
V33-33:
Power: 220
Displacement: 323
Efficiency: C
Weight: n/a
Color: Red
Trabant:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: n/a
Color: None
MercedesSmart:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: n/a
Color: GrayMetalic
Tesla:
V01-1011:
Power: 230
Displacement: 440
Efficiency: B+
Weight: n/a
Color: Gray
MiniCooper:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: n/a
Color: Purple
Motor123:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: n/a
Color: Pink
Kolichka:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: n/a
Color: Colorless
[/output]
[/test]
[test]
[input]
7
V8-101 220 220 A
V4-33 140 110 D
V33-33 220 323 C
V12-101 340 325 D
V10-10 210 121 A+
V11-1110 110 450 D++
V01-1011 230 440 B+
11
FordFocus V4-33
Trabant V10-10
Ford V4-33
Jaguar V8-101
Toyota V33-33
Trabant V11-1110
MercedesSmart V8-101
Tesla V01-1011
MiniCooper V12-101
Motor123 V12-101
Kolichka V11-1110
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: n/a
Color: n/a
Trabant:
V10-10:
Power: 210
Displacement: 121
Efficiency: A+
Weight: n/a
Color: n/a
Ford:
V4-33:
Power: 140
Displacement: 110
Efficiency: D
Weight: n/a
Color: n/a
Jaguar:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: n/a
Color: n/a
Toyota:
V33-33:
Power: 220
Displacement: 323
Efficiency: C
Weight: n/a
Color: n/a
Trabant:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: n/a
Color: n/a
MercedesSmart:
V8-101:
Power: 220
Displacement: 220
Efficiency: A
Weight: n/a
Color: n/a
Tesla:
V01-1011:
Power: 230
Displacement: 440
Efficiency: B+
Weight: n/a
Color: n/a
MiniCooper:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: n/a
Color: n/a
Motor123:
V12-101:
Power: 340
Displacement: 325
Efficiency: D
Weight: n/a
Color: n/a
Kolichka:
V11-1110:
Power: 110
Displacement: 450
Efficiency: D++
Weight: n/a
Color: n/a
[/output]
[/test]
[test]
[input]
7
V8-101 220
V4-33 140
V33-33 220
V12-101 340
V10-10 210
V11-1110 110
V01-1011 230
12
FordFocus V4-33
Trabant V10-10
Ford V4-33
Jaguar V8-101
Toyota V33-33
Trabant V11-1110
MercedesSmart V8-101
Tesla V01-1011
MiniCooper V12-101
Motor123 V12-101
Kolichka V11-1110
Tracktorche V8-101
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Trabant:
V10-10:
Power: 210
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Ford:
V4-33:
Power: 140
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Jaguar:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Toyota:
V33-33:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Trabant:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
MercedesSmart:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Tesla:
V01-1011:
Power: 230
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
MiniCooper:
V12-101:
Power: 340
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Motor123:
V12-101:
Power: 340
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Kolichka:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Tracktorche:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
[/output]
[/test]
[test]
[input]
7
V8-101 220
V4-33 140 430
V33-33 220 E+
V12-101 340 230 A++
V10-10 210
V11-1110 110 C
V01-1011 230 330
12
FordFocus V4-33
Trabant V10-10
Ford V4-33
Jaguar V8-101
Toyota V33-33
Trabant V11-1110
MercedesSmart V8-101
Tesla V01-1011
MiniCooper V12-101
Motor123 V12-101
Kolichka V11-1110
Tracktorche V8-101
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 430
Efficiency: n/a
Weight: n/a
Color: n/a
Trabant:
V10-10:
Power: 210
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Ford:
V4-33:
Power: 140
Displacement: 430
Efficiency: n/a
Weight: n/a
Color: n/a
Jaguar:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Toyota:
V33-33:
Power: 220
Displacement: n/a
Efficiency: E+
Weight: n/a
Color: n/a
Trabant:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: C
Weight: n/a
Color: n/a
MercedesSmart:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Tesla:
V01-1011:
Power: 230
Displacement: 330
Efficiency: n/a
Weight: n/a
Color: n/a
MiniCooper:
V12-101:
Power: 340
Displacement: 230
Efficiency: A++
Weight: n/a
Color: n/a
Motor123:
V12-101:
Power: 340
Displacement: 230
Efficiency: A++
Weight: n/a
Color: n/a
Kolichka:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: C
Weight: n/a
Color: n/a
Tracktorche:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
[/output]
[/test]
[test]
[input]
8
V8-101 220
V4-33 140 430
V33-33 220 E+
V12-101 340 230 A++
V10-10 210
V11-1110 110 C
V01-1011 230 330
V22-22 323 100 A-
13
FordFocus V4-33
Trabant V10-10 Yellow
Ford V4-33 1230
Jaguar V8-101 1200 Green
Toyota V33-33 900 Purple
Trabant V11-1110 1000
Lambo V22-22 999 Gold
MercedesSmart V8-101
Tesla V01-1011 GreenishPurple
MiniCooper V12-101 9000
Motor123 V12-101 790 Colorful
Kolichka V11-1110 Colorless
Tracktorche V8-101 899 Gray
[/input]
[output]
FordFocus:
V4-33:
Power: 140
Displacement: 430
Efficiency: n/a
Weight: n/a
Color: n/a
Trabant:
V10-10:
Power: 210
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: Yellow
Ford:
V4-33:
Power: 140
Displacement: 430
Efficiency: n/a
Weight: 1230
Color: n/a
Jaguar:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: 1200
Color: Green
Toyota:
V33-33:
Power: 220
Displacement: n/a
Efficiency: E+
Weight: 900
Color: Purple
Trabant:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: C
Weight: 1000
Color: n/a
Lambo:
V22-22:
Power: 323
Displacement: 100
Efficiency: A-
Weight: 999
Color: Gold
MercedesSmart:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: n/a
Color: n/a
Tesla:
V01-1011:
Power: 230
Displacement: 330
Efficiency: n/a
Weight: n/a
Color: GreenishPurple
MiniCooper:
V12-101:
Power: 340
Displacement: 230
Efficiency: A++
Weight: 9000
Color: n/a
Motor123:
V12-101:
Power: 340
Displacement: 230
Efficiency: A++
Weight: 790
Color: Colorful
Kolichka:
V11-1110:
Power: 110
Displacement: n/a
Efficiency: C
Weight: n/a
Color: Colorless
Tracktorche:
V8-101:
Power: 220
Displacement: n/a
Efficiency: n/a
Weight: 899
Color: Gray
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Pokemon Trainer
[code-task title="Pokemon Trainer" taskId="oop-basics-java-defining-classes-Pokemon-Trainer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Vă doriți să fiți cel mai bun antrenor de pokemon, mai bun decât oricare altul, deci trebuie să prindeți pokemon. 

Definiți o clasă **Trainer** și o clasă **Pokemon**.

Antrenorul are un **name**, **number of badges** și o **collection of pokemon**.

Pokemon are un **name**, un **element** și **health**, toate valorile fiind **mandatory**.

Fiecare anternor **starts with 0 badges**.

Veți primi din consolă un număr necunoscut de linii, până veți primi comanda "**Tournament**". 

Fiecare linie va conține informații despre pokemon și antrenor, în formatul:

"\<**trainerName**\> \<**pokemonName**\> \<**pokemonElement**\> \<**pokemonHealth**\>" 

Unde **trainerName** este numele Antrenorului care a prins pokemonul.

Numele sunt **unique**, nu pot exista 2 antenori cu același nume. 

După primirea comenzii "**Tournament**" un număr necunoscut de linii care conțin unul dintre cele trei elemente **"Fire"**, **"Water"**, **"Electricity"** vor urma, până când primiți comanda "**End**". 

Pentru fiecare comandă, trebuie să verificați dacă un antrenor are **at least 1** pokemon cu elementul dat. 

Dacă da, el primește 1 badge, altfel, pokemonul **lose 10 health**. 

Dacă un pokemon ajunge  **to 0 or less health he dies** și trebuie să fie șters din colecția antrenorului. 

După ce comanda "**End**" este primită, trebuie să imprimați toți antrenorii **sorted by the number of badges they have in descending order**. 

Dacă doi traineri au același număr de badge-uri, trebuie să fie sortați după ordinea apariției în datele de intrare. 

Imprimați în format:

"\<**trainerName**\> \<**badges**\> \<**numberOfPokemon**\>"

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| Peter Charizard Fire 100 | Peter 2 2 |
| John Squirtle Water 38 | John 0 1 |
| Peter Pikachu Electricity 10 |  |
| Tournament |  |
| Fire |  |
| Electricity |  |
| End |  |


| **Intrare**|**Ieșire**|
| --- | --- |
| Stan Blastoise Water 18 | Nick 1 1 |
| Nick Pikachu Electricity 22 | Stan 0 0 |
| John Kadabra Psychic 90 | John 0 1 |
| Tournament |  |
| Fire |  |
| Electricity |  |
| Fire |  |
| End |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Peter Charizard Fire 100
John Squirtle Water 38
Peter Pikachu Electricity 10
Tournament
Fire
Electricity
End
[/input]
[output]
Peter 2 2
John 0 1
[/output]
[/test]
[test open]
[input]
Stan Blastoise Water 18
Nick Pikachu Electricity 22
John Kadabra Psychic 90
Tournament
Fire
Electricity
Fire
End
[/input]
[output]
Nick 1 1
Stan 0 0
John 0 1
[/output]
[/test]
[test]
[input]
P Charizard Fire 100
G Squirtle Water 38
P Pikachu Electricity 10
M Balbazor Fire 101
Tournament
End
[/input]
[output]
P 0 2
G 0 1
M 0 1
[/output]
[/test]
[test]
[input]
P Charizard Fire 100
G Squirtle Water 38
P Pikachu Electricity 10
P Balbazor Electricity 102
G Buterfree Fire 11
Tournament
End
[/input]
[output]
P 0 3
G 0 2
[/output]
[/test]
[test]
[input]
P Charizard Fire 100
M MiniCharizard Fire 50
P BigCharizard Fire 120
P FirePokemon Fire 101
M Char Fire 100
J Turtle Water 100
J BigTurtle Water 250
Tournament
Fire
Fire
Fire
Fire
End
[/input]
[output]
P 4 3
M 4 2
J 0 2
[/output]
[/test]
[test]
[input]
G Golem Water 102
P Charizard Water 100
M MiniCharizard Water 50
P BigCharizard Water 120
P FirePokemon Water 101
M Char Fire 100
J Turtle Electricity 100
J BigTurtle Fire 250
Tournament
Water
Water
Water
Water
Water
Water
End
[/input]
[output]
G 6 1
P 6 3
M 6 2
J 0 2
[/output]
[/test]
[test]
[input]
G Golem Water 102
P Charizard Water 100
M MiniCharizard Water 50
P BigCharizard Water 120
P FirePokemon Water 101
M Char Electricity 100
J Turtle Electricity 100
J BigTurtle Fire 250
Tournament
Electricity
Electricity
Electricity
Electricity
End
[/input]
[output]
M 4 2
J 4 2
G 0 1
P 0 3
[/output]
[/test]
[test]
[input]
G Golem Water 102
P Charizard Water 100
M MiniCharizard Water 30
P BigCharizard Water 120
P FirePokemon Water 101
M Char Electricity 100
J Turtle Electricity 100
J BigTurtle Water 250
Tournament
Fire
Fire
Fire
Fire
Fire
End
[/input]
[output]
G 0 1
P 0 3
M 0 1
J 0 2
[/output]
[/test]
[test]
[input]
G Golem Fire 102
P Charizard Fire 100
M MiniCharizard Fire 30
P BigCharizard Fire 120
P FirePokemon Electricity 101
M Char Electricity 100
J Turtle Electricity 10
J BigTurtle Fire 25
Tournament
Water
Water
Water
Water
Water
Water
Water
End
[/input]
[output]
G 0 1
P 0 3
M 0 1
J 0 0
[/output]
[/test]
[test]
[input]
G Golem Fire 102
P Charizard Fire 100
M MiniCharizard Fire 30
P BigCharizard Fire 120
P FirePokemon Water 11
M Char Water 10
J Turtle Fire 10
J BigTurtle Fire 2500
Tournament
Electricity
Electricity
Electricity
Electricity
Electricity
End
[/input]
[output]
G 0 1
P 0 2
M 0 0
J 0 1
[/output]
[/test]
[test]
[input]
An Balbazor Water 100
A Pikachu Electricity 100
Annie Squirtal Fire 100
P Balbazor Water 100
P Electricity Electricity 100
P Balbazor2 Fire 100
Tournament
Fire
Water
Electricity
End
[/input]
[output]
P 3 3
An 1 1
A 1 1
Annie 1 1
[/output]
[/test]
[test]
[input]
S Blastoise Water 18
N Pikachu Electricity 22
N Pikachu2 Electricity 200
N Pikachu3 Electricity 21
N Pikachu4 Electricity 23
N Pikachu5 Electricity 230
J Kadabra Psychic 90
S Squirtle Water 1200
P TurtoiseSVN Water 500
P Charizard Water 50
G Flower Fire 10
Tournament
Electricity
Fire
Water
Fire
Electricity
Fire
Water
Electricity
Electricity
Water
Water
Water
Water
Electricity
Fire
Fire
End
[/input]
[output]
S 6 1
P 6 1
N 5 2
J 0 0
G 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Personal Information
[code-task title="Personal Information" taskId="oop-basics-java-defining-classes-Personal-Information" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
*You and your friends decide to create a Class that holds all the information about all of you, even your pokemon collection. Since you are good at writing code, they asked you to design that Class.*

Din consolă, veți primi linii, până la comanda "**End**".

Fiecare dintre linii va conține informații despre o persoană, într-unul dintre formatele următoare: 

- "\{**personName**\} **company** \{**companyName**\} \{**department**\} \{**salary**\}"

- "\{**personName**\} **pokemon** \{**pokemonName**\} \{**pokemonType**\}"

- "\{**personName**\} **parents** \{**parentName**\} \{**parentBirthday**\}"

- "\{**personName**\} **children** \{**childName**\} \{**childBirthday**\}"

- "\{**personName**\} **car** \{**carModel**\} \{**carSpeed**\}"

Trebuie să structurați informația despre o persoană într-o clasă cu subclase imbricate. 

Numele persoanelor sunt **unique** - nu pot fi 2 persoane cu același nume. 

O persoană poate avea **only one company** și **one car**, dar poate avea **multiple parents, children** și **pokemon**. 

După comanda "**End**" veți primi un **single** nume pe următoarea linie.

Trebuie să **print** toate informațiile despre acea persoană.

**Note**  informația poate să se schimbe **during**  **input**.

De exemplu, dacă primiți linii multiple care specifică compania persoanei, numai **last one** poate fi cel reținut.

Salariul trebuie să fie formatat la **the second decimal place**.

Imprimați informația în următorul format:

"\{**personName**\}
**Company:**
\{**companyName**\} \{**companyDepartment**\} \{**salary**\}
**Car:**
\{**carModel**\} \{**carSpeed**\}
**Pokemon:**
\{**pokemonName**\} \{**pokemonType**\}
**Parents:**
\{**parentName**\} \{**parentBirthday**\}
**Children:**
\{**childName**\} \{**childBirthday**\}"


## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| Peter company PeshInc Management 1000.00 | Tom |
| Tom car Volvo 30 | Company: |
| Peter pokemon Pikachu Electricity | Car: |
| Peter parents JohnDoe 22/02/1920 | Volvo 30 |
| Tom pokemon Electrode Electricity | Pokemon: |
| End | Electrode Electricity |
| Tom | Parents: |
|  | Children: |


| **Intrare**|**Ieșire**|
| --- | --- |
| JohnDoe pokemon Onyx Rock | JohnDoe |
| JohnDoe parents JJ 13/03/1933 | Company: |
| GeorgeAdams pokemon Moltres Fire | JLtd Jelior 777.77 |
| JohnDoe company JLtd Jelior 777.77 | Car: |
| JohnDoe children PJ 01/01/2001 | AudiA4 180 |
| StanSmith pokemon Blastoise Water | Pokemon: |
| JohnDoe car AudiA4 180 | Onyx Rock |
| JohnDoe pokemon Charizard Fire | Charizard Fire |
| End | Parents: |
| JohnDoe | JJ 13/03/1933 |
|  | Children: |
|  | PJ 01/01/2001 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Peter company PeshInc Management 1000.00
Tom car Volvo 30
Peter pokemon Pikachu Electricity
Peter parents JohnDoe 22/02/1920
Tom pokemon Electrode Electricity
End
Tom
[/input]
[output]
Tom
Company:
Car:
Volvo 30
Pokemon:
Electrode Electricity
Parents:
Children:
[/output]
[/test]
[test open]
[input]
JohnDoe pokemon Onyx Rock
JohnDoe parents JJ 13/03/1933
GeorgeAdams pokemon Moltres Fire
JohnDoe company JLtd Jelior 777.77
JohnDoe children PJ 01/01/2001
StanSmith pokemon Blastoise Water
JohnDoe car AudiA4 180
JohnDoe pokemon Charizard Fire
End
JohnDoe
[/input]
[output]
JohnDoe
Company:
JLtd Jelior 777.77
Car:
AudiA4 180
Pokemon:
Onyx Rock
Charizard Fire
Parents:
JJ 13/03/1933
Children:
PJ 01/01/2001
[/output]
[/test]
[test]
[input]
K company JC CEO 2000.00
K pokemon P P
K car Audi 50
S parents MJ 19/01/1950
S children KK 20/09/1992
S pokemon B B
End
S
[/input]
[output]
S
Company:
Car:
Pokemon:
B B
Parents:
MJ 19/01/1950
Children:
KK 20/09/1992
[/output]
[/test]
[test]
[input]
K pokemon C C
K pokemon S S
K pokemon S W
K car L 100
M car L 99
M car S 98
E parents P 19/09/1999
E children H 19/08/1998
End
K
[/input]
[output]
K
Company:
Car:
L 100
Pokemon:
C C
S S
S W
Parents:
Children:
[/output]
[/test]
[test]
[input]
V children AR 01/05/1995
A pokemon RA Water
A children IJ 02/06/1993
A car BMW 120
A company SoftUni Janitor 5.00
A parents SN 06/06/1966
End
A
[/input]
[output]
A
Company:
SoftUni Janitor 5.00
Car:
BMW 120
Pokemon:
RA Water
Parents:
SN 06/06/1966
Children:
IJ 02/06/1993
[/output]
[/test]
[test]
[input]
D pokemon Z Z
D parents TB 01/01/1983
D company DC P 500
K company NL JD 2000
K pokemon K K
K parents P 07/23/1960
KT company B CG 100
KT pokemon T T
End
K
[/input]
[output]
K
Company:
NL JD 2000.00
Car:
Pokemon:
K K
Parents:
P 07/23/1960
Children:
[/output]
[/test]
[test]
[input]
T company H EM 999999.99
T children H 01/01/1000
T children A 01/01/1000
T children LR 01/01/1000
T parents N 00/00/0000
T pokemon MR S
End
T
[/input]
[output]
T
Company:
H EM 999999.99
Car:
Pokemon:
MR S
Parents:
N 00/00/0000
Children:
H 01/01/1000
A 01/01/1000
LR 01/01/1000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Family Tree

[code-task title="Family Tree" taskId="oop-basics-java-defining-classes-Familiy-Tree" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
*You want to build your family tree, so you went to ask your grandmother.*

*Sadly your grandmother keeps remembering information about your predecessors in pieces, so it falls to you to group the information and build the family tree.*

Pe prima linie de intrare, veți primi fie un nume, fie o dată de naștere, în următorul format: 

"\<**FirstName**\> \<**LastName**\>" și "**day/month/year**"

Sarcina voastră este să găsiți informații despre persoană în arborele genealogic. 

Pe următoarele linii, până la comanda "**End**", veți primi informații despre predecesori, de care aveți nevoie pentru arborele familiei. 

Informația va fi în următoarele formate : 

- firstName lastName - firstName lastName
- firstName lastName - day/month/year
- day/month/year - firstName lastName
- day/month/year - day/month/year
- firstName lastName day/month/year

Primele 4 formate dezvăluie o legătură de rudenie:

Persoana **on the left** este **parent** al persoanei **on the right**.

Formatul poate fi **without names**. 

De exemplu, al 4-lea format înseamnă că persoana **born on the left date** este **parent to the person born on the right** dată. 

Ultimele date de legătură sunt informații **different**  - i.e. **the person with that name was born on that date**. 

**Names** și **birthdates** are **unique** - nu vor exista două persoane cu aceeași dată de naștere. 

Vor exista întotdeauna **always** destule intrări pentru a construi un arbore de familie (toate numele de persoane și datele de naștere sunt cunoscute și au **at least one** o conexiune cu o altă persoană din arbore).

După primirea comenzii "**End**" trebuie să imprimați toate informațiile despre persoanele al căror nume sau dată de naștere au fost primite pe prima linie -  **name, birthday, parents, and children** (verificați exemplele pentru format).

Persoanele din lista de părinți și copii trebuie să fie  **ordered** după **first appearance** din liniile de intrare. 

Indiferent dacă au apărut ca date de naștere sau nume. 

De exemplu, în prima linie Stan este înaintea lui Jenny, fiindcă data sa de naștere apare prima din a doua lonie, în timp ce ea a apărut în a treia linie.

## Exemplu
| **Input** | **Output** |
| --- | --- |
| John Baker | John Baker 23/05/1980 |
| 11/11/1951 - 23/05/1980 | Parents: |
| Jenny Baker - 23/05/1980 | Stan Baker 11/11/1951 |
| Jenny Baker 09/02/1953 | Jenny Baker 09/02/1953 |
| John Baker - Garrett Baker | Children: |
| Garrett Baker 01/01/2005 | Garrett Baker 01/01/2005 |
| Stan Baker 11/11/1951 |  |
| John Baker 23/05/1980 |  |
| End |  |

| **Input** | **Output** |
| --- | --- |
| 13/12/1993 | Christopher Williams 13/12/1993 |
| 25/03/1934 - 04/04/1961 | Parents: |
| Leonard Williams 25/03/1934 | Benjamin Williams 04/04/1961 |
| 04/04/1961 - Christopher Williams | Children: |
| Benjamin Williams - Edward Williams |  |
| Christopher Williams 13/12/1993 |  |
| Edward Williams 07/07/1995 |  |
| Benjamin Williams 04/04/1961 |  |
| End |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Baker
11/11/1951 - 23/05/1980
Jenny Baker - 23/05/1980
Jenny Baker 09/02/1953
John Baker - Garrett Baker
Garrett Baker 01/01/2005
Stan Baker 11/11/1951
John Baker 23/05/1980
End
[/input]
[output]
John Baker 23/05/1980
Parents:
Stan Baker 11/11/1951
Jenny Baker 09/02/1953
Children:
Garrett Baker 01/01/2005
[/output]
[/test]
[test open]
[input]
13/12/1993
25/03/1934 - 04/04/1961
Leonard Williams 25/03/1934
04/04/1961 - Christopher Williams
Benjamin Williams - Edward Williams
Christopher Williams 13/12/1993
Edward Williams 07/07/1995
Benjamin Williams 04/04/1961
End
[/input]
[output]
Christopher Williams 13/12/1993
Parents:
Benjamin Williams 04/04/1961
Children:
[/output]
[/test]
[test]
[input]
17/8/1950
P0 P - P8 P
P0 P 17/8/1950
P8 P - P1 P
P1 P 17/10/2001
26/5/1948 - P2 P
P2 P 13/5/1973
17/2/1952 - P P
P3 P 17/2/1952
P11 P - P4 P
P4 P 16/7/1998
26/5/1948 - P5 P
P5 P 21/1/1973
26/5/1948 - P5 P
P6 P 26/5/1948
21/1/1973 - P7 P
P7 P 18/10/2002
26/5/1948 - 28/1/1974
P8 P 28/1/1974
26/5/1948 - 23/4/1973
P9 P 23/4/1973
13/5/1973 - P10 P
P10 P 16/11/1998
P6 P - P11 P
P11 P 24/4/1977
24/7/1951 - 21/1/1973
P12 P 24/7/1951
End
[/input]
[output]
P0 P 17/8/1950
Parents:
Children:
P8 P 28/1/1974
[/output]
[/test]
[test]
[input]
6/9/1927
P7 P - 12/1/1974
P0 P 12/1/1974
17/2/1950 - 10/3/1975
P1 P 10/3/1975
P10 P - P2 P
P2 P 26/5/1924
17/2/1950 - P3 P
P3 P 28/12/1973
P1 P - 21/9/1998
P4 P 21/9/1998
P1 P - P5 P
P5 P 27/11/1998
P10 P - P6 P
P6 P 6/9/1927
P2 P - 17/2/1950
P7 P 17/2/1950
28/12/1973 - P8 P
P8 P 12/12/1999
P10 P - 10/7/1927
P9 P 10/7/1927
6/9/1900 - P9 P
P10 P 6/9/1900
End
[/input]
[output]
P6 P 6/9/1927
Parents:
P10 P 6/9/1900
Children:
[/output]
[/test]
[test]
[input]
Abc12 Abcde
3/10/1927 - 23/10/1951
Abc0 Abcde 3/10/1927
3/4/1923 - Abc1 Abcde
Abc1 Abcde 26/8/1951
3/10/1927 - Abc2 Abcde
Abc2 Abcde 24/6/1948
Abc4 Abcde - 5/2/1998
Abc3 Abcde 5/2/1998
Abc1 Abcde - 4/3/1977
Abc4 Abcde 4/3/1977
3/10/1927 - Abc5 Abcde
Abc5 Abcde 6/3/1951
Abc4 Abcde - 16/12/1998
Abc6 Abcde 16/12/1998
3/4/1923 - Abc7 Abcde
Abc7 Abcde 23/10/1951
Abc4 Abcde - 10/2/1999
Abc8 Abcde 10/2/1999
Abc4 Abcde - 23/11/2001
Abc9 Abcde 23/11/2001
Abc4 Abcde - 18/8/2000
Abc10 Abcde 18/8/2000
Abc4 Abcde - 21/6/2002
Abc11 Abcde 21/6/2002
Abc12 Abcde 3/4/1923
4/3/1977 - Abc13 Abcde
Abc13 Abcde 2/6/2001
End
[/input]
[output]
Abc12 Abcde 3/4/1923
Parents:
Children:
Abc1 Abcde 26/8/1951
Abc7 Abcde 23/10/1951
[/output]
[/test]
[test]
[input]
9/9/1975
Abc9 Abcde - 14/12/1948
Abc0 Abcde 14/12/1948
Abc9 Abcde - Abc1 Abcde
Abc1 Abcde 6/11/1952
Abc9 Abcde - Abc2 Abcde
Abc2 Abcde 10/6/1951
Abc6 Abcde - Abc3 Abcde
Abc3 Abcde 1/5/1999
Abc9 Abcde - Abc4 Abcde
Abc4 Abcde 20/8/1949
10/6/1951 - Abc5 Abcde
Abc5 Abcde 5/8/1973
14/12/1948 - Abc6 Abcde
Abc6 Abcde 9/9/1975
14/12/1948 - 14/1/1975
Abc7 Abcde 14/1/1975
Abc1 Abcde - Abc8 Abcde
Abc8 Abcde 7/10/1976
Abc9 Abcde - Abc1 Abcde
Abc9 Abcde 11/5/1925
Abc4 Abcde - 9/5/1976
Abc10 Abcde 9/5/1976
End
[/input]
[output]
Abc6 Abcde 9/9/1975
Parents:
Abc0 Abcde 14/12/1948
Children:
Abc3 Abcde 1/5/1999
[/output]
[/test]
[test]
[input]
14/6/1950
21/9/1899 - Abc9 Abcde
Abc0 Abcde 21/9/1899
22/2/1898 - 17/12/1924
Abc1 Abcde 17/12/1924
21/9/1899 - 11/2/1925
Abc2 Abcde 11/2/1925
22/2/1898 - Abc3 Abcde
Abc3 Abcde 20/7/1927
22/2/1898 - 11/2/1925
Abc4 Abcde 22/2/1898
19/6/1901 - 11/11/1926
Abc5 Abcde 11/11/1926
Abc5 Abcde - Abc6 Abcde
Abc6 Abcde 27/8/1952
14/6/1950 - 26/9/1974
Abc7 Abcde 26/9/1974
Abc2 Abcde - Abc8 Abcde
Abc8 Abcde 14/6/1950
Abc4 Abcde - Abc9 Abcde
Abc9 Abcde 17/3/1923
Abc10 Abcde - 17/12/1924
Abc10 Abcde 19/6/1901
End
[/input]
[output]
Abc8 Abcde 14/6/1950
Parents:
Abc2 Abcde 11/2/1925
Children:
Abc7 Abcde 26/9/1974
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Cat Catalog
[code-task title="Cat Catalog" taskId="oop-basics-java-defining-classes-Cat-Catalog" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
*The people from a pet shelter need to have a catalog of their cats with the breed and special characteristics.*

Sunt trei rase de pisici **"Siamese"**, **"Cymric"** și **"DomesticShorthair"**. 

**Each breed** are o **characteristic** specială. 

De exemplu, caracteristica specială a pisicii **Siamese** cats este **ear size**, a pisicilor **Cymric**  - este **length of their fur** in milimetri iar pentru Pisica DomesticShorthair este **volume of their meowing**.

Toate informațiile despre pisci, rasele lor și caracteristicile, trebuie colectate. 

Veți primi din consolă linii de informații despre o pisică, până la comanda "**End**".

Informația va veni in **one of** formatele următoare:

- "**Siamese** \<**name**\> \<**earSize**\>"
- "**Cymric** \<**name**\> \<**furLength**\>"
- "**DomesticShorthair** \<**name**\> \<**meowingVolume**\>"

Pe prima linie, după comanda "**End**" veți primi un **name** al pisicii. 


Ar trebui să tipăriți informațiile pisicii în formatul:

"\<**breed**\> \<**name**\> \<**numeric value of their special characteristic**\>"

Trebuie să imprimați acea pisică și să rotunjiți numărul la **two digits** după separatorul de zecimale. 

## Exemplu
| **Input** | **Output** |
| --- | --- |
| DomesticShorthair Kitty 85 | Cymric Tom 28.00 |
| Siamese Sim 4 |  |
| Cymric Tom 28 |  |
| End |  |
| Tom |  |

| **Input** | **Output** |
| --- | --- |
| DomesticShorthair Tom 80 | DomesticShorthair Kitty 100.00 |
| DomesticShorthair Kitty 100 |  |
| Cymric Tim 31 |  |
| End |  |
| Kitty |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
DomesticShorthair Kitty 85
Siamese Sim 4
Cymric Tom 28
End
Tom
[/input]
[output]
Cymric Tom 28.00
[/output]
[/test]
[test open]
[input]
DomesticShorthair Tom 80
DomesticShorthair Kitty 100
Cymric Tim 31
End
Kitty
[/input]
[output]
DomesticShorthair Kitty 100.00
[/output]
[/test]
[test]
[input]
Siamese Tony 5
Siamese Toncat 6
Siamese Antoan 5
Siamese Antony 5
Siamese Tonny 5
DomesticShorthair Kappa 95
Cymric Keepo 4.41
End
Toncat
[/input]
[output]
Siamese Toncat 6.00
[/output]
[/test]
[test]
[input]
DomesticShorthair Meow 90
DomesticShorthair Moow 91
DomesticShorthair Moew 92
Siamese Simon 5
Siamese Simmy 4
Cymric Kolly 3.20
Cymric Munny 2.30
End
Kolly
[/input]
[output]
Cymric Kolly 3.20
[/output]
[/test]
[test]
[input]
Cymric TommyTheCat 5.10
End
TommyTheCat
[/input]
[output]
Cymric TommyTheCat 5.10
[/output]
[/test]
[test]
[input]
DomesticShorthair Jerry 91
DomesticShorthair Was 92
DomesticShorthair A 93
DomesticShorthair Racecar 94
DomesticShorthair Driver 95
End
Jerry
[/input]
[output]
DomesticShorthair Jerry 91.00
[/output]
[/test]
[test]
[input]
DomesticShorthair Loly 61
Siamese Rony 4
Cymric Tommy 8.20
Cymric Dan 4.20
DomesticShorthair NoCat 1
DomesticShorthair CatCat 120
Cymric Wirehair 5.00
End
CatCat
[/input]
[output]
DomesticShorthair CatCat 120.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
