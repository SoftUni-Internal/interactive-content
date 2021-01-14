[slide]
# Problem 1: Calculator for TV series

[vimeo-video]
[stream language="EN" videoId="487118037/76e61cd949" default /]
[stream language="RO" videoId="487118037/76e61cd949"  /]
[/video-vimeo]

## Descriere
Scrieți un program care calculează cât timp vă va lua să vedeți toate episoadele unui serial TV, în minute.

Ca date de intrare, veți primi un număr de episoade, numărul de episoade din fiecare sezon și durata fiecărui episod. 

In fiecare episod este inclusă o reclamă, ceea ce mărește durata episodului cu `20%`.

Trebuie să rețineți și faptul că fiecare sezon se încheie cu un episod special care este mai lung cu 10 minute decât celelalte.

## Intrare
Ca intrare veți primi 4 linii de pe consolă:
- Numele serialului - un șir
- Numărul sezoanelor – un număr întreg în intervalul \[1… 10\]
- Numărul episoadelor – un număr întreg în intervalul \[10… 80\]
Durata unui episod standard fără reclame - dublă în intervalul \ [40,0 ... 65,0 \]
## Ieșire
Imprimați pe consolă timpul necesar pentru a viziona toate episoadele, rotunjite la cel mai apropiat număr întreg în următorul format:
- `Timpul total necesar pentru a viziona seria {numele seriei} este de {timp} minute.`

[code-task title="Calculator for TV series" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Name of the series - Lucifer

Number seasons – 3

Number episodes  – 18

Duration of an episode – 55

## Output
Total time needed to watch the Lucifer series is 3594 minutes.

## Comments 
Durata reclamelor din fiecare episod: `20% from 55 = 11.0`
Durata unui episod cu publicitate: `55 + 11 = 66.0`

Timp adăugat pentru episoadele speciale: `3*10 = 30`

Timpul total necesar pentru a vedea toate episoadele: `66 * 18 * 3 + 30 = 3594.0`  
[/task-description]
[code-io /]
[tests]
[test]
[input]
Flash
5
20
51
[/input]
[output]
Total time needed to watch the Flash series is 6170 minutes.
[/output]
[/test]
[test]
[input]
Origin
10
19
50
[/input]
[output]
Total time needed to watch the Origin series is 11500 minutes.
[/output]
[/test]
[test]
[input]
Arrow
5
24
60
[/input]
[output]
Total time needed to watch the Arrow series is 8690 minutes.
[/output]
[/test]
[test]
[input]
Vampires
8
25
50
[/input]
[output]
Total time needed to watch the Vampires series is 12080 minutes.
[/output]
[/test]
[test]
[input]
Tom & Jerry
15
25
30
[/input]
[output]
Total time needed to watch the Tom & Jerry series is 13650 minutes.
[/output]
[/test]
[test]
[input]
Teen wolf
5
20
55
[/input]
[output]
Total time needed to watch the Teen wolf series is 6650 minutes.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]