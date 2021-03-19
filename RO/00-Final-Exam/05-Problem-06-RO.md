# Problem 6: Study Materials

[slide]

# Descriere
Scrie un program care urmărește performanța echipei tale la un turneu caritabil de Crăciun.

În fiecare zi primiți numele jocurilor lângă comanda `Finish.

Câștigând fiecare joc câștigi **20 de dolari pentru caritate**.

Trebuie să calculați câți **bani ați câștigat la sfârșitul zilei**.

Dacă ai **mai multe jocuri câștigate decât pierdute** - **ești câștigătorul zilei** și suma banilor tăi este majorată cu 10%.

La **sfârșitul turneului**, dacă ați fost câștigătorul celor mai multor zile, veți câștiga turneul și veți mări toata suma banilor câștigați cu 20%.

Nu veți avea niciodată un număr egal de jocuri câștigate și pierdute.


# Intrare
Inițial, **numărul de zile ale turneului este citit de pe consolă** - un număr întreg în intervalul \ [1 ... 20 \]

Până când primiți comanda `Finish`, citiți:

- Sport - șir

**Pentru fiecare sport citiți:**

- Rezultat - text cu posibilități: `win`sau `lose`


# Ieșire

În cele din urmă, se imprimă o linie:

- Dacă ai câștigat, turneul: `You won the tournament! Total raised money: {the money earned}`

- Dacă ai pierdut, turneul: `You lost the tournament! Total raised money: {the money earned}`

Banii ar trebui să fie**formatați la a doua cifră după punctul zecimal.**


[code-task title="Study materials" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Exemplu

| **Input** | **Output** |
| --- | --- |
|`["2", "volleyball", "win", "football","lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]` | You won the tournament! Total raised money: 132.00 |

# Comentarii

Turneul **este de 2 zile.**

Prima zi:

- Jucăm volei și câștigăm `20 de dolari`
- Jucăm fotbal și pierdem `0 dolari`
- Jucăm baschet și câștigăm `20 de dolari`

Primim comanda 'Finish' și jocurile pentru ziua respectivă s-au încheiat.

Câștigat bani `20 + 0 + 20 = 40 de dolari .`

Avem mai multe jocuri câștigate decât pierdute, respectiv creștem banii zilei cu `10% -> 44 de dolari`.

A doua zi:

- Jucăm golf și câștigăm `20 de dolari`
- Jucăm tenis și câștigăm `20 de dolari`
- Jucăm badminton și câștigăm `20 de dolari`

Primim comanda 'Finish' și jocurile pentru ziua respectivă s-au încheiat.

Bani câștigati  `20 + 20 + 20 = 60 de dolari`

Am câștigat doar jocuri, respectiv mărim banii zilei cu `10% -> 66 de dolari`.

Bani câștigați  din ambele zile: `44 + 66 = 110 de dolari`

Deoarece avem mai multe victorii decât pierderi, câștigăm turneul și creștem banii cu `20% -> 132 de dolari`

# Mai multe exemple

|**Intrare**|**Ieșire**|
| --- | --- |
|`["2", "sport","lose","Finish", "sport", "lose", "Finish"]` | You lost the tournament! Total raised money: 0.00|
 
[/task-description]
[code-io /]
[tests]
[test]
[input]
3
darts
lose
handball
lose
judo
win
Finish
snooker
lose
swimming
lose
squash
lose
table tennis
win
Finish
volleyball
win
basketball
win
Finish
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
2
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 52.80
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 156.00
[/output]
[/test]
[test]
[input]
5
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
sport
win
sport
win
sport
win
Finish
sport
win
sport
win
sport
win
Finish
sport
win
Finish
sport
win
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 422.40
[/output]
[/test]
[test]
[input]
3
sport
win
sport
win
sport
win
sport
lose
sport
lose
Finish
sport
win
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
win
sport
lose
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 180.00
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
Finish
sport
lose
sport
lose
sport
lose
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
lose
sport
win
Finish
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
2
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
lose
sport
lose
Finish
sport
lose
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total raised money: 60.00
[/output]
[/test]
[test]
[input]
1
sport
win
sport
lose
sport
win
sport
lose
sport
win
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 105.60
[/output]
[/test]
[test]
[input]
4
sport
win
sport
win
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
win
Finish
[/input]
[output]
You won the tournament! Total raised money: 208.80
[/output]
[/test]
[test]
[input]
4
sport
lose
sport
lose
sport
win
sport
lose
sport
lose
sport
win
Finish
sport
win
sport
win
Finish
sport
lose
sport
lose
sport
win
Finish
sport
lose
Finish
[/input]
[output]
You lost the tournament! Total raised money: 104.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]