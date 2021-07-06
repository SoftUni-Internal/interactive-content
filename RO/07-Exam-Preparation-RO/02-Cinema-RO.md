# Problemă: Cinema
[slide hideTitle]

# Cinema

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/07-Exam-Preparation/RO/interactive-programming-basics-with-java-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cinema" taskId="java-basics-exam-prep-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Pentru viitoarea premieră a trei producții populare, un cinematograf local v-a angajat să scrieți un software care calculează prețul pe care clienții trebuie să-l plătească, în funcție de film și de oferta pe care au ales-o.

| -  | **John Wick** | **Star Wars**| **Jumanji** |
| --- | --- | --- | --- |
| Drink | $12 | $18 | $9 |
| Popcorn | $15 | $25 | $11 |
| Menu | $19 | $30 | $14 |

Scrieți un program care calculează **prețul total** care trebuie plătit.

Rețineți că există reduceri:

- Dacă filmul ales este "**Star Wars**" și se cumpără cel puțin patru bilete, există o reducere de familie de 30% 

- Dacă filmul ales este "**Jumanji**" și biletele cumpărate sunt **exact două**, există o reducere de 15% pentru două persoane

## Intrare
Veți primi 3 linii de pe consolă:
- Numele filmului - un șir: "**John Wick**", "**Star Wars**" sau "**Jumanji**"

- Tipul ofertei - un șir: "**Drink**", "**Popcorn**" sau "**Menu**"

- Numărul biletelor - un număr întreg în intervalul [1 ... 30]

## Ieșire
Imprimați un singur rând pe consolă: **"Your bill is $**\{**total price**\}**"**

Prețul trebuie formatat la două cifre după punctul zecimal.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| John Wick | Your bill is $72.00 | 
| Drink | |
| 6 | |

[hints]

[hint]
În funcție de filmul și băutura aleasă, stabiliți prețul biletului
[/hint]

[hint]
Verificați dacă există o reducere și calculați prețul total.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Wick
Drink
6
[/input]
[output]
Your bill is $72.00
[/output]
[/test]
[test]
[input]
John Wick
Drink
23
[/input]
[output]
Your bill is $276.00
[/output]
[/test]
[test]
[input]
John Wick
Popcorn
11
[/input]
[output]
Your bill is $165.00
[/output]
[/test]
[test]
[input]
John Wick
Menu
8
[/input]
[output]
Your bill is $152.00
[/output]
[/test]
[test]
[input]
Star Wars
Drink
10
[/input]
[output]
Your bill is $126.00
[/output]
[/test]
[test]
[input]
Star Wars
Popcorn
3
[/input]
[output]
Your bill is $75.00
[/output]
[/test]
[test]
[input]
Star Wars
Menu
1
[/input]
[output]
Your bill is $30.00
[/output]
[/test]
[test]
[input]
Jumanji
Drink
2
[/input]
[output]
Your bill is $15.30
[/output]
[/test]
[test]
[input]
Jumanji
Popcorn
1
[/input]
[output]
Your bill is $11.00
[/output]
[/test]
[test]
[input]
Jumanji
Menu
3
[/input]
[output]
Your bill is $42.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
