# Problema 1: Archery Tournament

[slide hideTitle]

# Archery Tournament

[code-task title="Archery Tournament" taskId="js-fundamentals-regular-exam-Archery-Tournament" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function archeryTournament(input) {
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

Veți primi o serie de numere întregi separate prin simbolul "\|", reprezentând țintele dintr-un poligon destinat tirului cu arcul.

Până la introducerea comenzii "**Game over**", veți primi comenzi:

* Comanda "**Shoot Left@**\{**start index**\}**@**\{**length**\}":

Peter se deplasează la stânga în poligon, începând de la "\{**start index**\}", și parcurge numărul de ținte indicate de "\{**length**\}".

El trebuie să ignore comanda dacă "\{**start index**\}" se află în afara poligonului.

Dacă a ajuns la capătul poligonului, Peter trebuie să se deplaseze în celălalt capăt și să continue să meargă spre stânga. 

* Comandа "**Shoot Right@**\{**start index**\}**@**\{**length**\}":

Peter se deplasează la dreapta în poligon, începând de la "\{**start index**\}", și parcurge numărul de ținte indicate de "\{**length**\}".

El trebuie să ignore comanda dacă "\{**start index**\}" se află în afara poligonului.

Dacă a ajuns la capătul poligonului, Peter trebuie să se deplaseze în celălalt capăt și să continue să meargă spre dreapta. 

* Comanda "**Reverse**":

Inversați toate țintele din poligon.

* Comanda "**Game Over**":

Imprimați starea actuală a tuturor țintelor din poligon.

De fiecare dată când Peter se află în dreptul țintei:

* El trage la țință și primește 5 puncte, scăzând numărul de puncte ale țintei cu 5

* Dacă ținta valorează mai puțin de 5 puncte, Peter trebuie să ia toate punctele și să scadă numărul de puncte ale țintei la 0

## Intrare

* Veți primi numere întregi separate prin simbolul "\|", reprezentând țintele din poligon

* Până la introducerea comenzii "**Game Over**", veți primi comenzi în formatul descris mai sus

## Ieșire

* Imprimați starea fiecărei ținte din poligon în următorul format:

"\{**target**\} - \{**target**\} - \{**target**\} ... - \{**target**\}"

"**Peter finished the archery tournament with** \{**points**\}!"

## Exemplul 1

| **Intrare** | **Ieșire** |
| --- | --- |
|archeryTournament(['10\|10\|10\|10\|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])| 5 \- 5 \- 10 \- 10 \- 10|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
Mai întâi, Peter primește comanda "**Shoot Left@0@2**", așa că începe să meargă spre stânga de la "**indicele 0**", cu "**lungimea 2**", și se oprește la "**indicele 3**".

El trage la țintă, iar țintele din poligon arată așa: `10 - 10 - 10 - 5 - 10`.

În acest moment el primește **5** puncte.
[/hint] 
[hint]
Apoi, Peter primește comanda "**Shoot Right@4@5**" \-\> `10 - 10 - 10 - 5 - 5`.
[/hint] 
[hint]
"**Shoot Right@6@5**" \-\> "**Indicele 6**" este în afara intervalului, așa că Peter ignoră comanda.
[/hint] 
[hint]
"**Reverse**" \-\> Rezultatul final este: `5 - 5 - 10 - 10 - 10`.
[/hint] 
[/hints] 


## Exemplul 2

| **Intrare** | **Ieșire** |
| --- | --- |
|archeryTournament(['20\|30\|40\|50\|60', 'Shoot Left@0@12', 'Shoot Right@4@15', 'Shoot Left@6@5', 'Reverse', 'Game over'])| 55 \- 45 \- 40 \- 30 \- 20|
||Peter finished the archery tournament with 10 points\!|

[hints]
[hint]
Împărțiți primul șir din intrare cu ajutorul delimitatorului (`|`) și salvați rezultatul într-o matrice.

Parcurgeți elementele din **matrice** și convertiți-le la `Number`.
[/hint] 
[hint]
Folosiți instrucțiunile condiționale potrivite pentru a gestiona fiecare tip de comandă.
[/hint] 
[hint]
Tipăriți rezultatul final în formatul potrivit, după cum este exemplificat mai sus.
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
