[slide]
# Problem 3: Cinema

[vimeo-video]
[stream language="EN" videoId="487118157/70c5ba1ce8" default /]
[stream language="RO" videoId="487118157/70c5ba1ce8"  /]
[/video-vimeo]

## Descriere
Pentru viitoarele premiere ale 3 din celor mai așteptate producții de cinema locale ați fost angajat să creați un program care calculează prețul pe care clienții lor trebuie să-l plătească, în funcție de film și de oferta pe care au ales-o.

| | John Wick      | Star Wars | Jumanji   |
|:---:    | :---:       |    :----:   |   :---:     |
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Scrieți un program care calculează care este prețul total pe care trebuie să-l plătească un client. 

Sunt, de asemenea, reduceri promoționale disponibile pentru două dintre filme:

- Dacă filmul ales este `Star Wars` și sunt cumpărate cel puțin patru bilete, este aplicată o reducere de `30%` pe familie.

- Dacă filmul ales este `Jumanji` și sunt cumpărate exact 2 bilete, se aplică o reducere de `15%` pe cuplu.

## Intrare
Primiți 3 lii de pe consolă:
- Linia 1 - film - șir: `John Wick`, `Star Wars` sau `Jumanji`
- Linia 2  - ofertă - șir: `Drink`, `Popcorn` sau `Menu`
- Linia 3 – număr de bilete  – un număr întreg în intevalul \[1… 30\]

## Ieșire
Imprimați o linie pe consolă: `Your bill is {total price}$`
 * Prețul ar trebui fomratat la două cifre după punctul zecimal

[code-task title="Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]
## Input
Movie - John Wick

Offer - Drink

Count tickets – 6

## Output
Your bill is 72.00$

## Comments
Filmul este John Wick și este aleasă o băutura.

Prețul unui bilet este de 12\$

6 bilete la fiecare `12$ -> 72$`

Pentru acest film nu se aplică discount, prețul total este de`72.00$`. 

[/task-description]
[code-io /]
[tests]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]