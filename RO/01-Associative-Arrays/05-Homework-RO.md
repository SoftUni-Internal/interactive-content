# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Word Tracker

[code-task title="Word Tracker" taskId="js-fundamentals-pt2-Associative-Arrays-World-tracker" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function words(input) {
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

Scrieți o funcție care primește o **matrice de cuvinte** și găsește **apariții ale fiecărui cuvânt specificat** într-un șir.

Intrarea va fi sub forma unei **matrice de șiruri**.

**Primul șir** va conține **cuvintele** pe care le veți căuta, separate printr-un **spațiu**.

Toate **șirurile de după** vor conține propoziții pe care trebuie să le verificați și să numărați de câte ori a fost prezent fiecare dintre cuvintele specificate.

Tipăriți **de câte** ori a apărut fiecare dintre cuvintele specificate.

Cuvintele trebuie să fie **sortate după numărul de ori în care au fost prezente, în ordine descrescătoare**

## Exemplu

| **Intrare**  | **Ieșire** |
| --- | --- |
| words(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']) | this \- 3 |
| | sentence \- 2 |

[[/task-description]
[tests]
[test open]
[input]
words(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
[/input]
[output]
this \- 3
sentence \- 2
[/output]
[/test]
[test]
[input]
words(['dara bara mara', 'mara', 'mara', 'mara', 'dara', 'bara', 'dara', 'bara', 'data', 'dara', 'rdhfdjkk', 'fhsjksdhjks', 'sdhfsdjfd', 'fhdjk', 'bara', 'bara'])
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
[/output]
[/test]
[test]
[input]
words(['dara', 'mara', 'mara', 'mara', 'dara', 'bara', 'dara', 'bara', 'data', 'dara', 'rdhfdjkk', 'fhsjksdhjks', 'sdhfsdjfd', 'fhdjk', 'bara', 'bara'])
[/input]
[output]
dara - 3
[/output]
[/test]
[test]
[input]
words(['dara sara mara', 'mara', 'mara', 'mara', 'dara', 'bara', 'dara', 'bara', 'data', 'dara', 'rdhfdjkk', 'fhsjksdhjks', 'sdhfsdjfd', 'fhdjk', 'bara', 'bara'])
[/input]
[output]
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
words(['dara sara mara bara', 'mara', 'mara', 'mara', 'dara', 'bara', 'dara', 'bara', 'data', 'dara', 'rdhfdjkk', 'fhsjksdhjks', 'sdhfsdjfd', 'fhdjk', 'bara', 'bara'])
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
words(['a b c d', 'vdsa', 'a', 'rb', 'b', 'dbs', 'a', 'ss', 'b', 'c', 'd', 'sdn', 'bd', 'd'])
[/input]
[output]
a \- 2
b \- 2
d \- 2
c \- 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Odd Occurrences

[code-task title="Odd Occurrences" taskId="js-fundamentals-pt2-Associative-Arrays-odd-occurrences" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function oddOccurences(input) {
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

Scrieți o funcție care extrage toate elementele unei propoziții, care sunt prezente într-un șir de un număr impar de ori (**majusculele trebuie ignorate**).

Intrarea este un **singur șir**. 

Cuvintele vor fi **separate printr-un singur spațiu**.

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#') | c\# php 1 5 |

[/task-description]
[tests]
[test open]
[input]
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
[/input]
[output]
c\# php 1 5
[/output]
[/test]
[test]
[input]
oddOccurences('a 2 A a A c D C dcndjk dbsa bsd bs Cbc D ss as')
[/input]
[output]
2 dcndjk dbsa bsd bs cbc ss as
[/output]
[/test]
[test]
[input]
oddOccurences('a a a a a D Sb dbsnb bdw dd dd dss')
[/input]
[output]
a d sb dbsnb bdw dss
[/output]
[/test]
[test]
[input]
oddOccurences('b b b b b')
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
oddOccurences('a a a b b c')
[/input]
[output]
a c
[/output]
[/test]
[test]
[input]
oddOccurences('a a a a a a a a a aa a a a a ab bb bb cccc')
[/input]
[output]
a aa ab cccc
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]

# Problemă: Piccolo

[code-task title="Piccolo" taskId="js-fundamentals-pt2-Associative-Arrays-Piccolo" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function picolo(input) {
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

Scrieți o funcție care:

- Înregistrează o plăcuță de înmatriculare pentru fiecare mașină care intră în parcare
- Elimină mașina când aceasta iese din parcare
- Intrarea va fi o matrice de șiruri în formatul următor: "\['**direction**, **carNumber**'\]"

Tipariți ieșirea cu toate numerele mașinilor care se află în parcare, **sortate în ordine crescătoare după numărul lor de înmatriculare**.

## Exemplul Unu
| **Intrare** | **Ieșire**  |
| --- | --- |
| picolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']) | CA2822UU |
| | CA2844AA |
| | CA9876HH |
| | CA9999TT |

## Exemplul Doi

| **Intrare** | **Ieșire**  |
| --- | ---|
| picolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']) | Parking Lot is Empty |

[/task-description]
[tests]
[test open]
[input]
picolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
[/input]
[output]
CA2822UU
CA2844AA
CA9876HH
CA9999TT
[/output]
[/test]
[test open]
[input]
picolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
picolo(['IN, mmm', 'IN, aaa', 'IN, ccc', 'IN, ggg', 'IN, sss', 'IN, gqq'])
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
picolo(['IN, mmm', 'IN, aaa', 'IN, ccc', 'IN, ggg', 'IN, sss', 'IN, sss', 'IN, gqq'])
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
picolo(['IN, mmm', 'IN, aaa', 'IN, ccc', 'OUT, ggg', 'IN, sss', 'IN, mmm', 'OUT, aaa', 'IN, ccc', 'OUT, ggg', 'IN, sss', 'IN, mmm', 'IN, aaa', 'OUT, ccc', 'IN, ggg', 'IN, sss', 'IN, sss', 'OUT, gqq'])
[/input]
[output]
aaa
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
picolo(['IN, mmm', 'IN, aaa', 'IN, ccc', 'OUT, ggg', 'IN, sss', 'IN, mmm', 'IN, ggg', 'IN, sss', 'IN, sss', 'OUT, gqq'])
[/input]
[output]
aaa
ccc
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
picolo(['IN, mmm', 'IN, aaa', 'IN, ccc', 'OUT, ggg', 'IN, ll', 'IN, sss', 'IN, mmm', 'IN, kk', 'IN, sss', 'IN, sss', 'IN, sss', 'IN, mmm', 'IN, ggg', 'IN, sss', 'IN, sss', 'OUT, gqq'])
[/input]
[output]
aaa
ccc
ggg
kk
ll
mmm
sss
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Party Time

[code-task title="Party Time" taskId="js-fundamentals-pt2-Associative-Arrays-party-time" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function partyTime(input) {
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

Există o petrecere la SoftUni. Mai mulți oaspeți sunt invitați și există **două tipuri de invitați**: VIP și obișnuiți.

Când oaspeții vin la petrecere, verificați dacă el/ea **există** în oricare dintre **cele două liste de rezervare**.

Intrarea va fi **o matrice de șiruri**. Vi se va da lista cu invitații pe care trebuie să îi procesați până se întâlnește următoarea comandă: "**PARTY**".

Toate **numerele VIP încep cu o cifră**.

Când primiți comanda "**PARTY**", oaspeții încep să vină.

Afișați toți invitații care nu au venit la petrecere (**invitații VIP trebuie să fie primii**).

## Exemplul Unu

| **Intrare** | **Ieșire**  |
| --- | --- |
| partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']) | 2          |
| | 7IK9Yo0h   |
| | tSzE5t0p   |

## Exemplul Doi

| **Intrare** | **Ieșire**  |
| --- | --- |
| partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK','PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']) | 2          |
| | xys2FYzn |
| | MDzcM9ZK |


[/task-description]
[tests]
[test open]
[input]
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test open]
[input]
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK','PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])
[/input]
[output]
2
xys2FYzn
MDzcM9ZK
[/output]
[/test]
[test]
[input]
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY'])
[/input]
[output]
5
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
[/output]
[/test]
[test]
[input]
partyTime(['7IK9Yo0h', '9NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '6tSzE5t0p', 'PARTY', '5SVQXQCbc', '6tSzE5t0p'])
[/input]
[output]
3
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
[/output]
[/test]
[test]
[input]
partyTime(['IK9Yo0h', 'NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '7IK9Yo0h', '9NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '6tSzE5t0p', 'PARTY', '9NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '6tSzE5t0p'])
[/input]
[output]
5
7IK9Yo0h
4Ce8vwPmE
5SVQXQCbc
IK9Yo0h
NoBUajQ
[/output]
[/test]
[test]
[input]
partyTime(['NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '6tSzE5t0p', 'PARTY', 'IK9Yo0h', 'NoBUajQ', '4Ce8vwPmE', '5SVQXQCbc', '6tSzE5t0p'])
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
partyTime(['5IK9Yo0h', 'NoBUajQ', '4Ce8vwPmE', 'QXQCbc', '6tSzE5t0p', '4ftyfvwPmE', 'jghvgyg', '6tSzE5t0p', 'PARTY', '4Ce8vwPmE', '6tSzE5t0p'])
[/input]
[output]
6
5IK9Yo0h
4ftyfvwPmE
6tSzE5t0p
NoBUajQ
QXQCbc
jghvgyg
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Card Game

[code-task title="Card Game" taskId="js-fundamentals-pt2-Associative-Arrays-Card-Game" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function cardGame(input) {
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

Vi se oferă o secvență de oameni și ce cărți de joc extrage fiecare din pachet.

Intrarea va fi o **matrice de șiruri**. Fiecare șir va avea acest format:

"\{**personName**\}: \{**PT, PT, PT,... PT**\}"

Unde P "(**2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A**)" este puterea cărții și T "(**S, H, D, C**)" este tipul.

Numele persoanei poate conține orice simbol ASCII, cu excepția: "**:**".

Intrarea va fi întotdeauna în formatul descris, nu este necesar să o verificați.

O singură persoană nu poate avea mai multe cărți de joc de aceeași **putere** și **tip**, dacă extrage o astfel de carte, o aruncă.

Jocul este jucat folosind mai multe pachete. Fiecare carte are o valoare. Valoarea cărții este calculată prin înmulțirea **puterii** sale cu **tipul** său.

Puterile de la 2 la 10 au aceeași valoare ca numărul lor și "J, Q, K, A" sunt "11, 12, 13, 14".

Tipurile sunt asociate cu multiplicatori în felul următor: "(**S -> 4, H-> 3, D -> 2, C -> 1**)".

Imprimați valoarea totală a cărții pe care fiecare jucător o are în mână în formatul:

"\{**personName**\}: \{**value**\}"

## Exemplu

| **Intrare** | **Ieșire**  |
| --- | --- |
| cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD']) | Peter\: 167 |
| | Tomas\: 175 |
| | Andrea\: 197  |

[/task-description]
[tests]
[test open]
[input]
cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD'])
[/input]
[output]
Peter\: 167
Tomas\: 175
Andrea\: 197
[/output]
[/test]
[test]
[input]
cardGame(['Pesho: 2C, 4H, 9H, AS, QS', 'Slav: 3H, 10S, JC, KD, 5S, 10S', 'Peshoslav: QH, QC, QS, QD', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Pesho: JD, JD, JD, JD, JD, JD'])
[/input]
[output]
Pesho\: 167
Slav\: 175
Peshoslav\: 197
[/output]
[/test]
[test]
[input]
cardGame(['Jonathan DA: JD, JD, JD, JD'])
[/input]
[output]
Jonathan DA\: 22
[/output]
[/test]
[test]
[input]
cardGame(['Pesho: 2C, 4H, 9H, AS, QS', 'Pesh0: 3H, 10S, JC, KD, 5S, 10S', 'pesho: QH, QC, QS, QD', 'Pe$ho: 6H, 7S, KC, KD, 5S, 10C', 'PESHO: QH, QC, JS, JD, JC', 'P3sho: JD, 7D, 3D, 4D, 5D, 6D'])
[/input]
[output]
Pesho\: 145
Pesh0\: 106
pesho\: 120
Pe$ho\: 115
PESHO\: 125
P3sho\: 72
[/output]
[/test]
[test]
[input]
cardGame(['Pesho: 2C, 4H, 9H, AS, QS', 'Slav: 3H, 10S, JC, KD, 5S, 10S', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Pesho: JD, JD, JD, JD'])
[/input]
[output]
Pesho\: 167
Slav\: 175
Peshoslav\: 125
[/output]
[/test]
[test]
[input]
cardGame(['Pesho: 2C, 4H, 9H, AS, QS', 'Slav: 3H, 10S, JC, KD, 5S, 10S', 'A: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'A: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Pesho: JD, JD, JD, JD'])
[/input]
[output]
Pesho\: 167
Slav\: 175
A\: 115
Peshoslav\: 125
[/output]
[/test]
[test]
[input]
cardGame(['A: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'A: 6H, 7S, KC, KD, 5S, 10C', 'Peshoslav: QH, QC, JS, JD, JC', 'Pesho: JD, JD, JD, JD'])
[/input]
[output]
A\: 115
Peshoslav\: 125
Slav\: 115
Pesho\: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Company Users

[code-task title="Company Users" taskId="js-fundamentals-pt2-Associative-Arrays-Company-Users" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function companyUsers(input) {
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

Scrieți o funcție care stochează informații despre companii și angajații acestora.

Veți primi o matrice de șiruri care conțin un **nume de companie** și un **ID de angajat**.

Adăugați fiecare angajat la compania specificată. 

Rețineți că o companie nu poate avea doi angajați cu același ID.

Când terminați de citit datele, ordonați companiile după **nume** în **ordine crescătoare**.

Imprimați numele companiei și ID-ul fiecărui angajat în următorul format:

"\{**companyName**\}
\-\- \{**id1**\}
\-\- \{**id2**\}
\-\- \{**idN**\}"

- Intrarea este o **matrice de șiruri**, fiecare în format: "\{**companyName**\} \-\> \{**employeeId**\}"
- Intrarea va fi întotdeauna validă

## Exemplul Unu

| **Intrare** | **Ieșire**  |
| --- | --- |
| companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']) | HP           |
|                                                                                         | \-\- BB12345 |
|                                                                                         | Microsoft    |
|                                                                                         | \-\- CC12345 |
|                                                                                         | SoftUni      |
|                                                                                         | \-\- AA12345 |
|                                                                                         | \-\- BB12345 |

## Exemplul Doi

| **Intrare** | **Ieșire**  |
| --- | --- |
| companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']) | Lenovo       |
|                                                                                                                  | \-\- XX23456 |
|                                                                                                                  | Movement     |
|                                                                                                                  | \-\- DD11111 |
|                                                                                                                  | SoftUni      |
|                                                                                                                  | \-\- AA12345 |
|                                                                                                                 | \-\- CC12344 |

[/task-description]
[tests]
[test open]
[input]
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])
[/input]
[output]
HP
\-\- BB12345
Microsoft
\-\- CC12345
SoftUni
\-\- AA12345
\-\- BB12345
[/output]
[/test]
[test open]
[input]
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])
[/input]
[output]
Lenovo
\-\- XX23456
Movement
\-\- DD11111
SoftUni
\-\- AA12345
\-\- CC12344
[/output]
[/test]
[test]
[input]
companyUsers(['A -> ncsms', 'B -> sasa', 'B -> sasa', 'M -> M', 'M -> 12ww', 'Z -> wqwqw'])
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
M
\-\- M
\-\- 12ww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
companyUsers(['A -> ncsms', 'B -> sasa', 'B -> sasa', 'M -> sasgyads', 'M -> 12gyww', 'Z -> wqwqw', 'L -> sasa', 'L -> sahjksads', 'L -> 12vvww'])
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
L
\-\- sasa
\-\- sahjksads
\-\- 12vvww
M
\-\- sasgyads
\-\- 12gyww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
companyUsers(['F -> dncsms', 'B -> sasadd', 'B -> sasadd', 'M -> sasgdyads', 'M -> 12gyww', 'F -> wqwqw', 'L -> sasa', 'L -> sahjksads'])
[/input]
[output]
B
\-\- sasadd
F
\-\- dncsms
\-\- wqwqw
L
\-\- sasa
\-\- sahjksads
M
\-\- sasgdyads
\-\- 12gyww
[/output]
[/test]
[test]
[input]
companyUsers(['F -> dncsms', 'A -> sa44sadd', 'B -> sasadd', 'M -> sas,gdyads', 'M -> 12gnjyww', 'N -> wqwqw', 'L -> sasa', 'L -> sahjksads'])
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sasadd
F
\-\- dncsms
L
\-\- sasa
\-\- sahjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
[/output]
[/test]
[test]
[input]
companyUsers(['F -> dnjkcsms', 'A -> sa44sadd', 'B -> sanjsadd', 'M -> sas,gdyads', 'M -> 12gnjyww', 'N -> wqwqw', 'O -> snnasa', 'L -> sa(\*hjksads', 'P -> 12gnjyww', 'N -> wqwqw', 'Q -> snnasa'])
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sanjsadd
F
\-\- dnjkcsms
L
\-\- sa(\*hjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
O
\-\- snnasa
P
\-\- 12gnjyww
Q
\-\- snnasa
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: A Miner Task

[code-task title="A Miner Task" taskId="js-fundamentals-pt2-Associative-Arrays-A-Miner-Task" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function minerTask(input) {
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

Vi se oferă o **matrice de șiruri**.

Fiecare **șir impar** reprezintă o **resursă** (de exemplu, aur, argint, cupru și așa mai departe) și **fiecare șir par - o cantitate**.

Sarcina dvs. este să colectați resursele și să le tipăriți pe fiecare dintre ele pe o nouă linie.

**Tipăriți resursele și cantitățile acestora în acest format**:

"\{**resource**\} \-\> \{**quantity**\}"

Cantitățile introduse vor fi în intervalul "\[**1...2 000 000 000**\]".


## Exemplul Unu

| **Intrare** | **Ieșire**  |
| --- | --- |
| minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']) | Gold \-\> 155  |
|                                                   | Silver \-\> 10 |
|                                                   | Copper \-\> 17 |

## Exemplul Doi

| **Intrare** | **Ieșire**  |
| --- | --- |
| minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']) | gold \-\> 170  |
|                                                                 | silver \-\> 10 |
|                                                                | copper \-\> 17 |

[/task-description]
[tests]
[test open]
[input]
minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])
[/input]
[output]
Gold \-\> 155
Silver \-\> 10
Copper \-\> 17
[/output]
[/test]
[test open]
[input]
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])
[/input]
[output]
gold \-\> 170
silver \-\> 10
copper \-\> 17
[/output]
[/test]
[test]
[input]
minerTask(['gold', '155', 'silver', '10', 'copper', '17'])
[/input]
[output]
gold \-\> 155
silver \-\> 10
copper \-\> 17
[/output]
[/test]
[test]
[input]
minerTask(['silver', '14', 'silver', '-2', 'silver', '\-3'])
[/input]
[output]
silver \-\> 9
[/output]
[/test]
[test]
[input]
minerTask(['Gold', '15', 'gold', '15'])
[/input]
[output]
Gold \-\> 15
gold \-\> 15
[/output]
[/test]
[test]
[input]
minerTask(['Gold', '12', 'gold', '1'])
[/input]
[output]
Gold \-\> 12
gold \-\> 1
[/output]
[/test]
[test]
[input]
minerTask(['a', '15', 'a', '40', 'b', '3', 'c', '45', 'd', '152'])
[/input]
[output]
a \-\> 55
b \-\> 3
c \-\> 45
d \-\> 152
[/output]
[/test]

[/tests]
[code-io /]
[/code-task]

[/slide]

