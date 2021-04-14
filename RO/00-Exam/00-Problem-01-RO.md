# Problema 1: Archery Tournament

[slide hideTitle]

# Archery Tournament

[code-task title="Archery Tournament" taskId="js-fundamentals-regular-exam-Archery-Tournament" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function archeryTournament(input) {
   // Scrieți codul aici
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

Veți primi o serie de numere întregi separate printr-un "\|" reprezentând țintele într-un interval de tir cu arcul.

Până la data comenzii "**Game over**", veți primi comenzi:

* Command "**Shoot Left@**\{**start index**\}**@**\{**length**\}":

Peter începe să se deplaseze în zona de tir cu arcul de la stânga începând de la "\{**start index**\}" și trece prin cât mai multe ținte indicate în: "\{**lungime** \}".

Ar trebui să ignore comanda dacă "\{**start index**\}" se află în afara intervalului de tir cu arcul.

Mergeți și continuați să mergeți spre stânga dacă el a ajuns la capătul zonei de tir cu arcul.

* Commandа "**Shoot Right@**\{**start index**\}**@**\{**length**\}":

Peter începe să se deplaseze în zona de tir cu arcul de la dreapta începând de la "\{**start index**\}" și trece prin cât mai multe ținte indicate în: "\{**lungime**\}".

Ar trebui să ignore comanda dacă "\{**start index**\}" se află în afara intervalului de tir cu arcul.

Mergeți și continuați să mergeți spre stânga dacă a ajuns la capătul zonei de tir cu arcul.

* Comanda "**Reverse**":

Inversați toate țintele din interval.

* Comanda "**Game Over**":

Imprimați starea actuală a tuturor țintelor din interval

De fiecare dată când Peter a atins o țintă:

* El trage la țină  și primește 5 puncte, scăzând valoarea totală a punctelor țintei cu 5

* Dacă ținta valorează mai puțin de 5 puncte, Peter ar trebui să ia toate punctele sale și scade totalul punctelor țintei la 0

## Intrare

* Veți primi numere întregi separate prin а "\|" reprezentând țintele din zona de tir cu arcul

* Până la data comenzii "**Game Over**", veți primi comenzi în formatul descris mai sus

## Ieșire

* Imprimați starea fiecărei ținte pe câmp în următorul format:

"\{**target**\} - \{**target**\} - \{**target**\} ... - \{**target**\}"

"**Peter finished the archery tournament with** \{**points**\}!"

## Exemplul 1

| **Intrare** | **Ieșire** |
| --- | --- |
|archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])| 5 \- 5 \- 10 \- 10 \- 10|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
Mai întâi, Peter primește comanda "**Shoot Left@0@2**", așa că începe să meargă în intervalul de tir cu arcul de la "**index 0**" cu "**lungime 2**" și se oprește la "**index 3**"

El trage, iar tirul cu arcul arată așa: `0 - 10 - 10 - 5 - 10`

În acest moment el dobândește **5** puncte.
[/hint] 
[hint]
Apoi primește "**Shoot Right@4@5**" \-\> `10 - 10 - 10 - 5 - 5`
[/hint] 
[hint]
Tragerea "**Right@6@5**" \-\> "**Index 6**" este în afara intervalului (nu există în interval), așa că Peter ignoră comanda.
[/hint] 
[hint]
"**Reverse**" \-\> Rezultatul final ar trebui să fie: `5 - 5 - 10 - 10 - 10`
[/hint] 
[/hints] 


## Exemplul 2

| **Intrare** | **Ieșire** |
| --- | --- |
|archeryTournament(['20\|30\|40\|50\|60', 'Shoot Left@0@12', 'Shoot Right@4@15', 'Shoot Left@6@5', 'Reverse', 'Game over'])| 55 \- 45 \- 40 \- 30 \- 20|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
Split the first input string by the delimeter (`|`), and save the result in an array.

Map through the elements in the **field** and convert them to `Number`.
[/hint] 
[hint]
Use the appropriate conditional statements to handle each command type.
[/hint] 
[hint]
Print the end result in the proper format, as shown above.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test open]
[input]
archeryTournament(['20\|30\|40\|50\|60', 'Shoot Left@0@12', 'Shoot Right@4@15', 'Shoot Left@6@5', 'Reverse', 'Game over'])
[/input]
[output]
55 - 45 - 40 - 30 - 20
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['1\|1\|1\|1\|1', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])
[/input]
[output]
0 - 0 - 1 - 1 - 1
Peter finished the archery tournament with 2 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@-6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@3@0', 'Shoot Right@4@0', 'Shoot Right@-6@5', 'Reverse', 'Game over'])
[/input]
[output]
5 - 5 - 10 - 10 - 10
Peter finished the archery tournament with 10 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['3\|1243\|6\|3\|2', 'Shoot Right@0@2', 'Shoot Right@5@5', 'Shoot Right@9@5', 'Game over'])
[/input]
[output]
3 - 1243 - 1 - 3 - 2
Peter finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['3\|13\|6\|3\|2\|34\|5\|123\|576', 'Shoot Left@6@3', 'Reverse', 'Shoot Right@5@7', 'Shoot Left@2@8', 'Game over'])
[/input]
[output]
576 - 123 - 5 - 24 - 2 - 0 - 6 - 13 - 3
Peter finished the archery tournament with 13 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Reverse', 'Shoot Left@6@3', 'Reverse', 'Shoot Left@5@0', 'Reverse', 'Shoot Left@2@1', 'Reverse', 'Game over'])
[/input]
[output]
34 - 5 - 118 - 576
Peter finished the archery tournament with 5 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Reverse', 'Reverse', 'Reverse', 'Reverse', 'Game over'])
[/input]
[output]
34 - 5 - 123 - 576
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[test]
[input]
archeryTournament(['34\|5\|123\|576', 'Game over'])
[/input]
[output]
34 - 5 - 123 - 576
Peter finished the archery tournament with 0 points!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
