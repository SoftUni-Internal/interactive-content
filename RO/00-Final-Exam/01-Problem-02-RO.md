# Problema 2: Mountain Run

[slide]

# Descriere

George decide să îmbunătățească recordul pentru cea mai rapidă urcare pe Mont Blanc.

Consola introduce recordul în câteva secunde pe care Georgi trebuie să îl îmbunătățească, distanța în metrii pe care trebuie să o urce și timpul în secunde în care trebuie să urce pe 1 metru.

Scrieți un program care să calculeze **dacă a făcut față sarcinii**, dat fiind:

- Panta terenului **îl încetinește** la fiecare **50 de metri cu 30 de secunde**.

**Calculați** timpul în secunde pentru care George va urca **distanța** până la vârf și **diferența de la înregistrare.**

Când **se calculează de câte ori George va încetini** ca urmare a pantei câmpului, rezultatul ar trebui să fie **rotunjit în jos la cel mai apropiat număr întreg.**


# Intrare
Trei rânduri sunt citite de pe consolă

- Înregistrarea în secunde - un număr real în intervalul \[0,00 ... 100000,00\]

- Distanța în metrii - un număr real în intervalul \[0,00 ... 100000,00\]

- Timpul în secunde pentru care urcă 1 metru - un număr real în intervalul \[0,00 ... 1000,00\]

# Ieșire

Imprimarea pe consolă depinde de rezultate:

- Dacă George a îmbunătățit înregistrarea, imprimăm: `Yes! The new record is { George's time} seconds.`

- Dacă NU a îmbunătățit înregistrarea, imprimăm: `No! He was {time need} seconds slower.`

Rezultatul trebuie să fie **formatat** la a doua cifră după punctul zecimal

[code-task title="Mountain Run" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|`["10164", "1400", "25"]` | No! He was 25676.00 seconds slower. |


# Comentarii

- George trebuie să **urce 1400 m.**:  `1400 * 25 = 35000 seconds`

- La fiecare **50 de metri**, **se adaugă** 30 de secunde**la timpul său: `(1400 / 50) * 30 = 840 seconds`

- Timp total: `35000 + 840 = 35840 de secunde`

- Dar pentru că `10164 < 35840`, nu a îmbunătățit **înregistrarea.**

- El **nu a avut suficient timp** pentru a îmbunătăți înregistrarea: `35840 - 10164 = 25676 seconds`

# Mai multe exemple

|**Intrare**|**Ieșire**|
| --- | --- |
|`["5554.36", "1340", "3.23"]` | Yes! The new record is 5108.20 seconds. |
|`["1377", "389", "3"]` | No! He was 0.00 seconds slower. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1052
100
9.77
[/input]
[output]
Yes! The new record is 1037.00 seconds.
[/output]
[/test]
[test]
[input]
108
89
0.5
[/input]
[output]
Yes! The new record is 74.50 seconds.
[/output]
[/test]
[test]
[input]
100000
100000
1000
[/input]
[output]
No! He was 99960000.00 seconds slower.
[/output]
[/test]
[test]
[input]
99999.9999
74738.1
0.2
[/input]
[output]
Yes! The new record is 59767.62 seconds.
[/output]
[/test]
[test]
[input]
2.25
5
0.5
[/input]
[output]
No! He was 0.25 seconds slower.
[/output]
[/test]
[test]
[input]
344444
378
417
[/input]
[output]
Yes! The new record is 157836.00 seconds.
[/output]
[/test]
[test]
[input]
1174
150
7
[/input]
[output]
Yes! The new record is 1140.00 seconds.
[/output]
[/test]
[test]
[input]
7.55
5
0.02
[/input]
[output]
Yes! The new record is 0.10 seconds.
[/output]
[/test]
[test]
[input]
357.5
15
23
[/input]
[output]
Yes! The new record is 345.00 seconds.
[/output]
[/test]
[test]
[input]
3164
3000
0.221
[/input]
[output]
Yes! The new record is 2463.00 seconds.
[/output]
[/test]
[test]
[input]
1401
891
1
[/input]
[output]
No! He was 0.00 seconds slower.
[/output]
[/test]
[test]
[input]
1526
68
22
[/input]
[output]
No! He was 0.00 seconds slower.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]