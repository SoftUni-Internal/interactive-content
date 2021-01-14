[slide]
# Problem 6: The Best Movie

[vimeo-video]
[stream language="EN" videoId="487118452/de8f1dddfb" default /]
[stream language="RO" videoId="487118452/de8f1dddfb"  /]
[/video-vimeo]

## Descriere

Este vineri seara, vă întrebați la ce film să vă uitați. 

V-ați decis să scrieți un program care să aleagă în locul vostru. 
Până când veți primi comanda `STOP`, veți primi titlurile unora dintre cele mai preferate filme.

Filmul ideal pentru voi va fi cel care a primit cele mai multe puncte.

Punctele sunt calculate din suma valorilor literelor ASCII din titlul filmului.

Nu va exista situația în care două filme să aibă un număr egal de puncte. 

Rețineți următoarele:
- Pentru fiecare literă mică din titlu, veți extrage din sumă, lungimea titlului înmulțită cu 2.

- Pentru fiecare literă majusculă din titlu, lungimea titlului filmului trebuie scăzută din sumă. 

- Puteți avea maxim 7 titluri de filme 

## Intrare
Primiți mai multe linii de pe consolă, până ce primiți comanda `STOP` sau până la atingerea limitei de 7 filme:
- Numele filmului – un șir;

## Ieșire
Imprimați pe consolă:
- Dacă ați atins limita de 7 filme, trebuie să imprimați: `Title limit has been reached.`
- Imprimați numele celui mai bun fim: `The best movie for you is {movie title} its ASCII sum is: {sum of symbols}.`
[code-task title="The Best Movie" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Matrix

Breaking bad

Legend

STOP

## Output
The best movie for you is Breaking bad its ASCII sum is: 878.
## Comments

Mai întâi vom primi **Matrix**, prima literă este M cu valoarea de 77f, este o literă majusculă, așa că vom scădea din aceasta lungimea titlului `77 - 6 = 71`.

A doua literă are valoarea 97 și scădem lungimea titlului *2 din suma `97 - 12 = 85`.

În mod similar, procedăm cu fiecare literă care urmează, până ajungem la rezultatul final de 563.

După ce am primit comanda `STOP` , imprimăm titlul cu cea mai mare valoare, care este **Breaking** cu suma de 878.

[/task-description]
[code-io /]
[tests]
[test]
[input]
The maze
School story 2
Shrek 2
Ice age
STOP
[/input]
[output]
The best movie for you is School story 2 its ASCII sum is: 1013.
[/output]
[/test]
[test]
[input]
Tomorrow Land
NEW BEGINNING
STOP
[/input]
[output]
The best movie for you is Tomorrow Land its ASCII sum is: 1002.
[/output]
[/test]
[test]
[input]
The maze
Scorch
Killing zone
Danger alert
Harry Poter
Shrek
Hobbit
[/input]
[output]
Title limit has been reached.
The best movie for you is Killing zone its ASCII sum is: 938.
[/output]
[/test]
[test]
[input]
The Maze
New Beggining
Trials
STOP
[/input]
[output]
The best movie for you is New Beggining its ASCII sum is: 950.
[/output]
[/test]
[test]
[input]
Dark Knight Raises
Game of thrones
STOP
[/input]
[output]
The best movie for you is Dark Knight Raises its ASCII sum is: 1156.
[/output]
[/test]
[test]
[input]
New Beggining
Pretty Little Liars
Hobbit New Beggining
STOP
[/input]
[output]
The best movie for you is Pretty Little Liars its ASCII sum is: 1252.
[/output]
[/test]
[test]
[input]
Frozen
Kill machine
Mad Max
Fury
Rage
Stone cold
Matrix
[/input]
[output]
Title limit has been reached.
The best movie for you is Kill machine its ASCII sum is: 901.
[/output]
[/test]
[test]
[input]
Rage
Fury
Cold
Ice
Fire
Furrry
ROAD RAGE
[/input]
[output]
Title limit has been reached.
The best movie for you is Furrry its ASCII sum is: 584.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
Ice Age
[/input]
[output]
Title limit has been reached.
The best movie for you is War of Titans its ASCII sum is: 942.
[/output]
[/test]
[test]
[input]
Heavy Metal
Armagedon
War of Titans
TROY
Elysium
Vortex
STOP
[/input]
[output]
The best movie for you is War of Titans its ASCII sum is: 942.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]