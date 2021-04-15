# Problema 2: School Library

[slide hideTitle]

# School Library

[code-task title="School Library" taskId="js-fundamentals-regular-exam-School-Library" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function schoolLibrary(input) {
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

Veți primi un șir, reprezentând un raft în bibliotecă. Pe raft, fiecare titlu de carte este separat de un "\&".

Până când veți primi "**Done**" ca comandă, veți primi următoarele comenzi:

* Comanda "**Add Book** \| \{**book name**\}": 

Adăugați cartea pe raft și așezați-o înaintea tuturor celorlalte.

Dacă cartea este deja prezentă pe raft, ignorați comanda.

* Comandă "**Take Book**" \| \{**book name**\}": 

Eliminați cartea cu titlul specificat numai dacă este pe raft, altfel ignorați această comandă.

* Comanda "**Swap Books** \| \{**book1**\} \| \{**book2**\}": 

Dacă ambele cărți sunt pe raft, schimbați-le locul.

* Comanda "**Insert Book** \| \{**book name**\}":

Adăugați o carte la capătul raftului.

* Comanda "**Check Book** \| \{**index**\}": 

Imprimați numele cărții la indexul specificat pe raft.

Dacă indexul este nevalid, ignorați comanda.


## Intrare

* Veți primi un șir, care conține titluri de carte, separate printr-un "\&"

* Până când primiți "**Done**", veți primi comenzi în formatul descris mai sus


## Ieșire

* Imprimați colecția de cărți alăturate de (", ")

"\{**firstBook**\}, \{**secondBook**\}, ...\{**lastBook**\}"

## Limitări

* Nu veți primi niciun nume de carte duplicat în lista inițială de cărți

## Exemplul 1

| **Intrare** | **Ieșire** |
| --- | --- |
|schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Take Book \| Don Quixote', 'Insert Book \| The Lord of the Rings', 'Check Book \| 3', 'Done' ])| Hamlet|
||The Odyssey, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings|

[hints]
[hint]
Folosiți instrucțiunile și buclele condiționale potrivite pentru a gestiona fiecare tip de comandă.
[/hint] 
[/hints] 

## Exemplul 2

| **Intrare** | **Ieșire** |
| --- | --- |
|schoolLibrary(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger', 'Add Book \| David Copperfield', 'Add Book \| One Thousand and One Nights', 'Swap Books \| One Thousand and One Nights \| Catch-22', 'Take Book \| David Copperfield', 'Insert Book \| The Stories of Anton Chekhov', 'Check Book \| 17', 'Done'])| Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights, The Stranger, The Stories of Anton Chekhov |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Take Book \| Don Quixote', 'Insert Book \| The Lord of the Rings', 'Check Book \| 3', 'Done' ])
[/input]
[output]
Hamlet
The Odyssey, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings
[/output]
[/test]
[test open]
[input]
schoolLibrary(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger', 'Add Book \| David Copperfield', 'Add Book \| One Thousand and One Nights', 'Swap Books \| One Thousand and One Nights \| Catch-22', 'Take Book \| David Copperfield', 'Insert Book \| The Stories of Anton Chekhov', 'Check Book \| 17', 'Done'])
[/input]
[output]
Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  The Stranger, The Stories of Anton Chekhov
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Done'])
[/input]
[output]
The Odyssey, Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Take Book \| Don Quixote', 'Done'])
[/input]
[output]
The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Insert Book \| The Lord of the Rings', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings
[/output]
[/test]
[test]
[input]
schoolLibrary(['abc&def&ghi&jkl', 'Swap Books \| abc \| jkl', 'Done'])
[/input]
[output]
jkl, def, ghi, abc
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| Hamlet', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Take Book \| The Lord of the Rings', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Insert Book \| Hamlet', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C&D', 'Add Book \| A', 'Add Book \| B', 'Add Book \| C', 'Take Book \| C', 'Swap Books \| A \| C', 'Check Book \| 1', 'Done'])
[/input]
[output]
B
A, B, D
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C', 'Swap Books \| C \| C', 'Add Book \| D', 'Insert Book \| G', 'Stefan \| B', 'Add Book \| M', 'Check Book \| 69', 'Done'])
[/input]
[output]
M, D, A, B, C, G
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C', 'Done'])
[/input]
[output]
A, B, C
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
