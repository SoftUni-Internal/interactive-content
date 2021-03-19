# Problem 2: Mountain Run
[slide hideTitle]
# Mountain Run

[code-task title="Mountain Run" taskId="JavaScript-Programming-Basics-exam-Mountain-Run" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function mountainRun(input) {
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

George decide să îmbunătățească recordul pentru cea mai rapidă urcare pe Mont Blanc.

Consola introduce recordul în câteva secunde pe care Georgi trebuie să îl îmbunătățească, distanța în metrii pe care trebuie să o urce și timpul în secunde în care trebuie să urce pe 1 metru.

Scrieți un program care să calculeze **dacă a făcut față sarcinii**, dat fiind:

- Panta terenului **îl încetinește** la fiecare **50 de metri cu 30 de secunde**

**Calculați** timpul în secunde pentru care George va urca **distanța** până la vârf și **diferența de la înregistrare.**

Când **se calculează de câte ori George va încetini** ca urmare a pantei câmpului, rezultatul ar trebui să fie **rotunjit în jos la cel mai apropiat număr întreg.**


## Intrare
Datele de intrare sunt date sub forma unui **vector care conține 3 numere**:

- **First Number:**  

The record in seconds, floating-point  in the interval \[0.00 … 100000.00\]

- **Second Number:** 

The distance in meters, floating-point in the interval \[0.00 … 100000.00\]

- **Third Number:**

The time in seconds for which he climbs 1 meter, floating-point in the interval \[0.00 … 1000.00\]

## Ieșire

Imprimarea pe consolă depinde de rezultate:

- Dacă George a îmbunătățit înregistrarea, imprimăm: 

"**Yes! The new record is** \{**George's time**\} **seconds.**"

- Dacă NU a îmbunătățit înregistrarea, imprimăm:

"**No! He was** \{**time needed**\} **seconds slower.**" 

Rezultatul trebuie să fie **formatat** la a doua cifră după punctul zecimal

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|mountainRun([5554.36, 1340, 3.23]) | Yes! The new record is 5108.20 seconds. |
|mountainRun([1377, 389, 3])|No! He was 0.00 seconds slower.|
|mountainRun([10164, 1400, 25]) | No! He was 25676.00 seconds slower. |
 Verificați dacă acesta va bate recordul curent și printați datele de ieșire corecte.

[hints]
[hint]
Calculați timpul necesar în care George va urca întreaga distanță. 

Apoi, determinați cât de mult va fi încetinit din cauza terenului, și adăugați acel interval de timp la timpul total.
[/hint]
[hint]
Verificați dacă acesta va bate recordul curent și printați datele de ieșire corecte.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
mountainRun([10164, 1400, 25])
[/input]
[output]
No! He was 25676.00 seconds slower.
[/output]
[/test]
[test open]
[input]
mountainRun([5554.36, 1340, 3.23])
[/input]
[output]
Yes! The new record is 5108.20 seconds.
[/output]
[/test]
[test open]
[input]
mountainRun([1377, 389, 3])
[/input]
[output]
No! He was 0.00 seconds slower.
[/output]
[/test]
[test]
[input]
mountainRun([1052, 100, 9.77])
[/input]
[output]
Yes! The new record is 1037.00 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([108, 89, 0.5])
[/input]
[output]
Yes! The new record is 74.50 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([100000, 100000, 1000])
[/input]
[output]
No! He was 99960000.00 seconds slower.
[/output]
[/test]
[test]
[input]
mountainRun([99999.9999, 74738.1, 0.2])
[/input]
[output]
Yes! The new record is 59767.62 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([2.25, 5, 0.5])
[/input]
[output]
No! He was 0.25 seconds slower.
[/output]
[/test]
[test]
[input]
mountainRun([344444, 378, 417])
[/input]
[output]
Yes! The new record is 157836.00 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([1174, 150, 7])
[/input]
[output]
Yes! The new record is 1140.00 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([7.55, 5, 0.02])
[/input]
[output]
Yes! The new record is 0.10 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([357.5, 15, 23])
[/input]
[output]
Yes! The new record is 345.00 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([3164, 3000, 0.221])
[/input]
[output]
Yes! The new record is 2463.00 seconds.
[/output]
[/test]
[test]
[input]
mountainRun([1401, 891, 1])
[/input]
[output]
No! He was 0.00 seconds slower.
[/output]
[/test]
[test]
[input]
mountainRun([1526, 68, 22])
[/input]
[output]
No! He was 0.00 seconds slower.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
