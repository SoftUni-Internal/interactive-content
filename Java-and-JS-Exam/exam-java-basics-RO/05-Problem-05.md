[slide hideTitle]
# Football Tournament
[code-task title="Football Tournament" taskId="pb-java-exam-football-tournament" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Write code here
  }
}
```
[/code-editor]
[task-description]

## Descriere
Sarcina dvs. este să scrieți un program care să ia numele echipei și să facă statistici despre aceasta.

Pe parcursul unui sezon fiecare echipă joacă un anumit număr de meciuri de fotbal și pentru fiecare echipă se acordă puncte de întâlnire în funcție de rezultatul meciului.

Există trei rezultate posibile dintr-o singură întâlnire:
- W - Echipa este un câștigător și obține 3 puncte
- D - Întâlnirea s-a încheiat fără câștigător și echipa primește 1 punct
- L - Echipa a pierdut meciul și nu primește puncte

Scrieți un program care să ia numele unei echipe de fotbal și să afișeze statisticile sale, pe baza meciurilor jucate în acest sezon.

Statisticile sale ar trebui să includă numărul total de puncte câștigate în sezonul curent, statistici detaliate privind rezultatul jocurilor jucate și o rată de bătăi în sezon.

Dacă din anumite motive echipa nu a jucat niciun meci în sezonul curent, se afișează un mesaj special.

## Input
veți primi două linii de pe consolă:
- Numele echipei de fotbal despre care facem statistici - șir
- Numărul de jocuri jucate în sezonul curent - număr întreg în intervalul [0 ... 100]

Pentru fiecare joc jucat, se citește o linie separată:
- Rezultatul jocului jucat într-unul dintre formatele de mai sus - caracterele: „W”, „D” sau „L”

## Output
În funcție de faptul dacă echipa a jucat jocuri în sezonul curent, sunt afișate două tipuri de rezultate.
- Dacă echipa nu a jucat un singur meci în sezonul curent, o linie este afișată în următorul format:
	- "\{team name\} hasn't played any games during this season."
-Dacă echipa a jucat un meci sau mai multe, șase linii sunt afișate în următorul format:
	- "\{team name\} has won \{count points\} points during this season."
	- "Total stats:"
	- "## W: \{count games won\}"
	- "## D: \{number of games with even score\}" 
	- "## L: \{count games lost\}" 
	- "Win rate: \{percent games won\}%"

Procentul trebuie formatat la a doua cifră după punctul zecimal.

## Exemple
| **Input** | **Output** |
| --- | --- |
| Liverpool | Liverpool has won 19 points during this season. |
| 10 | Total stats: |
| W | \#\# W: 5 |
| D | \#\# D: 4 |
| D | \#\# L: 1 |
| W | Win rate: 50.00% |
| L |  |
| W |  |
| D |  |
| D |  |
| W |  |
| W |  |

### Comentarii
- Numele echipei noastre este Liverpool.
- 10 jocuri jucate în sezon:
- 5 câștigate * 3 puncte = 15 puncte
- 4 au marcat par * 1 puncte = 4 puncte
- 1 pierdut -> niciun punct adăugat
- Total puncte după sezon: 19 puncte
- 5 victorii din 10 jocuri jucate = 50% rata de câștig
- După formatare la a doua cifră -> 50,00%

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Liverpool
10
W
D
D
W
L
W
D
D
W
W
[/input]
[output]
Liverpool has won 19 points during this season.
Total stats:
\#\# W: 5
\#\# D: 4
\#\# L: 1
Win rate: 50.00%
[/output]
[/test]
[test]
[input]
Otbor deto igrae malko machove
1
W
[/input]
[output]
Otbor deto igrae malko machove has won 3 points during this season.
Total stats:
\#\# W: 1
\#\# D: 0
\#\# L: 0
Win rate: 100.00%
[/output]
[/test]
[test]
[input]
drug slab otbor deto igrae malko machove
1
L
[/input]
[output]
drug slab otbor deto igrae malko machove has won 0 points during this season.
Total stats:
\#\# W: 0
\#\# D: 0
\#\# L: 1
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
MainstreamFootballTeam
18
W
W
L
D
W
L
W
W
W
W
W
L
D
W
W
W
L
W
[/input]
[output]
MainstreamFootballTeam has won 38 points during this season.
Total stats:
\#\# W: 12
\#\# D: 2
\#\# L: 4
Win rate: 66.67%
[/output]
[/test]
[test]
[input]
MnogoSilenOtbor
20
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
W
[/input]
[output]
MnogoSilenOtbor has won 60 points during this season.
Total stats:
\#\# W: 20
\#\# D: 0
\#\# L: 0
Win rate: 100.00%
[/output]
[/test]
[test]
[input]
EdinMnogoSlabOtbor
15
D
L
L
L
D
D
L
D
L
L
L
D
L
D
D
[/input]
[output]
EdinMnogoSlabOtbor has won 7 points during this season.
Total stats:
\#\# W: 0
\#\# D: 7
\#\# L: 8
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
OtborDetoIgraeMnogoMachove
70
W
L
W
W
D
W
W
L
L
W
W
L
L
D
D
L
L
L
D
D
W
D
L
L
L
D
L
D
L
W
L
W
D
W
W
D
D
L
D
D
D
D
W
D
D
W
L
W
L
L
L
D
L
W
W
D
W
W
W
D
L
L
D
W
L
W
D
L
W
L
[/input]
[output]
OtborDetoIgraeMnogoMachove has won 91 points during this season.
Total stats:
\#\# W: 23
\#\# D: 22
\#\# L: 25
Win rate: 32.86%
[/output]
[/test]
[test]
[input]
EdinOtborSMnogoNusykWinRate
99
L
D
L
L
L
D
L
L
D
L
D
L
D
L
L
D
L
L
D
L
L
D
D
L
L
L
L
D
D
L
L
D
D
D
D
D
D
D
L
D
D
D
D
L
D
L
L
L
D
D
L
L
L
L
L
L
L
D
D
L
L
L
L
D
L
L
D
D
D
D
D
L
L
L
D
D
D
L
D
L
L
L
L
D
L
L
L
L
L
D
D
L
D
D
L
D
L
L
W
[/input]
[output]
EdinOtborSMnogoNusykWinRate has won 46 points during this season.
Total stats:
\#\# W: 1
\#\# D: 43
\#\# L: 55
Win rate: 1.01%
[/output]
[/test]
[test]
[input]
OtborDetoIgraeMachoveNaMax
100
D
L
D
D
L
L
D
D
L
D
W
W
D
L
W
D
W
W
D
L
D
W
D
W
L
D
D
D
W
W
D
D
W
W
D
D
D
W
L
W
W
W
L
W
L
D
D
W
W
W
L
W
W
L
W
D
D
L
W
D
L
D
L
W
D
L
W
W
D
L
D
W
W
L
D
W
D
L
W
D
D
L
W
L
W
W
W
L
W
W
D
W
W
W
L
W
D
W
L
D
[/input]
[output]
OtborDetoIgraeMachoveNaMax has won 158 points during this season.
Total stats:
\#\# W: 41
\#\# D: 35
\#\# L: 24
Win rate: 41.00%
[/output]
[/test]
[test]
[input]
NacionalniqDetoNeMuSeIgraeMnogoMnogo
3
D
L
D
[/input]
[output]
NacionalniqDetoNeMuSeIgraeMnogoMnogo has won 2 points during this season.
Total stats:
\#\# W: 0
\#\# D: 2
\#\# L: 1
Win rate: 0.00%
[/output]
[/test]
[test]
[input]
NacionalniqDetoHichNeImSeIgrae
0
[/input]
[output]
NacionalniqDetoHichNeImSeIgrae hasn't played any games during this season.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]