// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-03"
# Problema 3: Cinema
[slide hideTitle]
# Cinema

[video src="https://videos.softuni.org/hls/javascript-basics/RO/07-Exam-Preparation/JS-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Cinema" taskId="js-pb-exam-preparation-Cinema" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cinema(input) {
	// Write your code here
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
Pentru viitoarele premiere ale trei producții așteptate, un cinematograf local v-a angajat să creați un program care calculează prețul pe care clienții lor trebuie să-l plătească, în funcție de film și de oferta pe care au ales-o.

| \- | **John Wick**      | **Star Wars** | **Jumanji**   |
|:---:    | :---:       |    :----:   |   :---:     |
| Drink | 12$ | 18$ | 9$ |
| Popcorn | 15$ | 25$ | 11$ |
| Menu | 19$ | 30$ | 14$ |

Scrieți un program care calculează care este prețul total pe care trebuie să-l plătească un client. 

Există, de asemenea, reduceri promoționale disponibile pentru două dintre filme:

- Dacă filmul ales este "**Star Wars**" și sunt cumpărate cel puțin 4 bilete, este aplicată o reducere de familie de 30\%.

- Dacă filmul ales este "**Jumanji**" și sunt cumpărate exact 2 bilete, se aplică o reducere de cuplu de 15\%.

## Intrare

Ca intrare veți primi 3 elemente de consolă:

- Un șir, reprezentând numele filmului: "**John Wick**", "**Star Wars**" sau "**Jumanji**"

- Un șir, reprezentând consumabilele: "**Drink**", "**Popcorn**" sau "**Menu**"

- Un număr, reprezentând numărul de bilete  – un număr întreg în intevalul \[1… 30\]

## Ieșire

Imprimați o linie pe consolă: 

"**Your bill is** \{**total price**\}$"

* Prețul trebuie formatat la a doua cifră după punctul zecimal

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|cinema(['John Wick', 'Drink', 6])| Your bill is 72.00$|
|cinema(['Star Wars', 'Menu', 1]) | Your bill is 30.00$| 

[hints]

[hint]
Stabiliți prețul biletului, în funcție de filmul și băutura alese.
[/hint]

[hint]
Verificați dacă va fi aplicată o reducere și calculați prețul total.
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
[test open]
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
