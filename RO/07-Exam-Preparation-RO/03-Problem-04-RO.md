[slide]
# Problem 4: Cinema Income

[vimeo-video]
[stream language="EN" videoId="487118285/74e8a9a9c7" default /]
[stream language="RO" videoId="487118285/74e8a9a9c7"  /]
[/video-vimeo]

## Descriere

Ați fost angajat de un cinematograf să scrieți un program care să calculeze profitul obținut în cazul în care sala este plină. 

Trebuie să primiți numărul de locuri din sală și pe următoarele linii din consolă, până ce este introdusă comanda `Movie time!`, veți primi un număr de spectatori noi.

Dacă numărul de oameni care intră în sală poate fi împărțit la trei fără să avem un rest, atunci se va aplica o reducere de $5 la prețul total.

Dacă nu mai rămân locuri libere în sală, programul trebuie să oprească citirea datelor de intrare de pe consolă. 

Dacă numărul de spectatori care intră, depășește numărul de locuri rămase în sală, sala  trebuie să fie considerată ca fiind plină și programul trebuie să se oprească. 


# Intrare
Citiți de pe consolă:

- Lini 1– capacitatea sălii – un număr întreg în intervalul  \[50... 150\]

- Pe fiecare linie următoare, până când comana este  `Movie time!`:
	- Numărul de oameni care intră în cinematograf - un număr întreg în intervalul  \[1… 15\]

## Output
First, print on of these lines:

- Dacă ați primit comanda `Movie time!`: `There are {seats left} seats left in the cinema.`

- În cazul în care nu mai sunt locuri libere în sală: `The cinema is full.`

- Pe urmă imprimați: `Cinema income - {income}$`

[code-task title="Cinema Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Capacity - 60

People entering the cinema:
10

6

3

20

15

Movie time!

## Output
There are 6 seats left in the cinema.

Cinema income - 255$

## Comments
Capacitatea sălii este de 60 locuri.

Pe următoarea linie, vom primi numărul de oameni care au intrat în sală-10. 

Prețul pe care îl vor plăti este `10 * 5 = 50$`. 

După ce primim numărul de 6 spectatori intrați în sală, dacă 6 se împarte la 3, atunci ei vor plăti cu 5$ mai puțin. 

Continuăm până ce primim comanda `Movie time!` și apoi imprimăm datele de ieșire corespunzătoare.
[/task-description]
[code-io /]
[tests]
[test]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]