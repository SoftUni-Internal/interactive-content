# Problema 6: Tournament of Christmas 
[slide hideTitle]
# Tournament of Christmas 

[code-task title="Tournament of Christmas" taskId="JavaScript-Programming-Basics-exam-Tournament-of-Christmas" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function tournament(input) {
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
Scrieți un program care urmărește performanța echipei voastre la un turneu caritabil de Crăciun.

În fiecare zi primiți numele unor jocuri, până la introducerea comenzii "Finish".

Câștigarea unui joc reprezintă **20 de dolari donați pentru caritate**.

Trebuie să calculați câți **bani ați câștigat la sfârșitul zilei**.

Dacă aveți **mai multe jocuri câștigate decât pierdute** - **sunteți câștigătorii zilei** și suma este majorată cu 10%.

La **sfârșitul turneului**, dacă ați fost câștigători în cele mai multe zile, veți câștiga turneul și veți majora suma câștigată cu 20%.

Nu veți avea niciodată un număr egal de jocuri câștigate și pierdute.

## Intrare

**Datele de intrare sunt introduse sub forma unei matrice de elemente:**

Până la introducerea comenzii "**Finish**", veți primi:

- **Primul Element:**

**Numărul de zile ale turneului**: un număr întreg din intervalul \[1 ... 20\]

- **Până la introducerea comenzii** "**Finish**", **citiți:**

**Joc** - șir de caractere

- **Pentru fiecare joc citit:**

**Result** - text ce poate avea următoarele valori:  "**win**" sau "**lose**"

## Ieșire

La final se imprimă o linie:

- Dacă ați câștigat turneul:

"**You won the tournament! Total raised money:** \{**the money earned**\}"

- Dacă ați pierdut turneul:

"**You lost the tournament! Total raised money:** \{**the money earned**\}"

Suma de bani trebuie să fie **formatată la a doua cifră după punctul zecimal.**

## Exemplu

| **Intrare**|**Ieșire**|
| --- | --- |
|tournament([3, 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish']) | You lost the tournament! Total raised money: 84.00 |
|tournament([2, 'volleyball', 'win', 'football','lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']) | You won the tournament! Total raised money: 132.00 |

[hints]
[hint]
Determinați suma de bani câștigată în fiecare zi a turneului.


Verificați dacă jocurile câștigate sunt în număr mai mare decât cele pierdute. În acest caz, adăugați un bonus de 10%.

Până la introducerea comenzii "**Finish**", calculați suma totală de bani.
[/hint]
[hint]
În final, verificați dacă, per total, numărul de câștiguri e mai mare decât numărul de înfrângeri.

În acest caz, adăugați 20% și tipăriți datele de ieșire corespunzătoare.
[/hint]
[/hints]
 
[/task-description]
[code-io /]
[tests]
[test open]
[input]
tournament([2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 132.00
[/output]
[/test]
[test open]
[input]
tournament([3, 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'lose', 'Finish', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 0.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'win', 'Finish', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 52.80
[/output]
[/test]
[test]
[input]
tournament([3, 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 156.00
[/output]
[/test]
[test]
[input]
tournament([5, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 422.40
[/output]
[/test]
[test]
[input]
tournament([3, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 180.00
[/output]
[/test]
[test]
[input]
tournament([4, 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 84.00
[/output]
[/test]
[test]
[input]
tournament([2, 'sport', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'sport', 'lose', 'Finish', 'sport', 'lose', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 60.00
[/output]
[/test]
[test]
[input]
tournament([1, 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'win', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 105.60
[/output]
[/test]
[test]
[input]
tournament([4, 'port', 'win', 'sport', 'win', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'Finish'])
[/input]
[output]
You won the tournament! Total raised money: 208.80
[/output]
[/test]
[test]
[input]
tournament([4, 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'win', 'sport', 'win', 'Finish', 'sport', 'lose', 'sport', 'lose', 'sport', 'win', 'Finish', 'sport', 'lose', 'Finish'])
[/input]
[output]
You lost the tournament! Total raised money: 104.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
