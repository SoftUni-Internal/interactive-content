// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-03"
# Problem 3: Cinema
[slide hideTitle]
# Cinema

[vimeo-video]
[stream language="EN" videoId="487118157/70c5ba1ce8" default /]
[stream language="RO" videoId="487118157/70c5ba1ce8"  /]
[/video-vimeo]



[code-task title="Cinema" taskId="js-pb-exam-preparation-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(input) {
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
Pentru viitoarele premiere ale 3 din celor mai așteptate producții de cinema locale ați fost angajat să creați un program care calculează prețul pe care clienții lor trebuie să-l plătească, în funcție de film și de oferta pe care au ales-o.

| \- | **John Wick**      | **Star Wars** | **Jumanji**   |
|:---:    | :---:       |    :----:   |   :---:     |
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Scrieți un program care calculează care este prețul total pe care trebuie să-l plătească un client. 

Sunt, de asemenea, reduceri promoționale disponibile pentru două dintre filme:

- Dacă filmul ales este "**Star Wars**" și sunt cumpărate cel puțin patru bilete, este aplicată o reducere de 30\% pe familie.

- Dacă filmul ales este "**Jumanji**" și sunt cumpărate exact 2 bilete, se aplică o reducere de 15\% pe cuplu.

## Intrare

Ca intrare veți primi 3 elemente de consolă:

- Linia 1: film - șir: "**John Wick**", "**Star Wars**" or "**Jumanji**"

- Linia 2: ofertă - șir: "**Drink**", "**Popcorn**" or "**Menu**"

- Linia 3: număr de bilete  – un număr întreg în intevalul \[1… 30\]

## Ieșire

Imprimați o linie pe consolă: 

"**Your bill is** \{**total price**\}$"

* Prețul ar trebui fomratat la două cifre după punctul zecimal

## Example
| **Intrare** | **Ieșire** |
| --- | --- |
|cinema(['John Wick', 'Drink', 6])| Your bill is 72.00$|
|cinema(['Star Wars', 'Menu', 1]) | Your bill is 30.00$| 

[hints]

[hint]
Depending on what movie and drink have been chosen, determine the ticket price.
[/hint]

[hint]
Check if there will be a discount and calculate the total price.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cinema(['John Wick', 'Drink', 6])
[/input]
[output]
Your bill is 72.00$
[/output]
[/test]
[test]
[input]
cinema(['John Wick', 'Popcorn', 11])
[/input]
[output]
Your bill is 165.00$
[/output]
[/test]
[test]
[input]
cinema(['John Wick', 'Drink', 23])
[/input]
[output]
Your bill is 276.00$
[/output]
[/test]
[test]
[input]
cinema(['John Wick', 'Menu', 8])
[/input]
[output]
Your bill is 152.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Drink', 10])
[/input]
[output]
Your bill is 126.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Popcorn', 3])
[/input]
[output]
Your bill is 75.00$
[/output]
[/test]
[test]
[input]
cinema(['Star Wars', 'Menu', 1])
[/input]
[output]
Your bill is 30.00$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Drink', 2])
[/input]
[output]
Your bill is 15.30$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Popcorn', 1])
[/input]
[output]
Your bill is 11.00$
[/output]
[/test]
[test]
[input]
cinema(['Jumanji', 'Menu', 3])
[/input]
[output]
Your bill is 42.00$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
