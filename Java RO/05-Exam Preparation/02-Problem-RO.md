# Heart Delivery

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="434990115" default /]
[stream language="RO" videoId="433962598"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Heart Delivery
[code-task title="Heart Delivery" taskId="java-fund-18-Exam-Preparation-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi un șir **cu numere întregi**, separate printr-un "@".

Acesta este **cartierul**.

După aceea va urma o **serie de comenzi Sariți**,**până când veți primi** "Love!".

Fiecare casă din cartier **are nevoie de un anumit număr de inimi livrate de Cupidon**, pentru a putea sărbători Ziua Îndrăgostiților.

Acele inimi necesare sunt **indicate de numerele întregi** din vecinătate.

Cupidon **începe de la poziția primei case** (index 0) și trebuie să sară cu o lungime dată.

Comenzile **de salt vor fi în acest format**: "Jump \{length\}".

De fiecare dată când sare de la o casă la alta, **inimile necesare pentru casa vizitată sunt scăzute cu 2**.

**Dacă inimile necesare pentru o anumită casă devin egale cu 0**,**tipăriți** pe consolă "Place \{houseIndex\} has Valentine's day." 

Dacă Cupidon sare într-o casă în care **inimile necesare sunt deja 0**, **tipăriți** pe consolă "Place \{houseIndex\} already had Valentine's day."

Rețineți că Cupidon poate avea o **lungime de săritură mai mare decât dimensiunea cartierului** și, dacă el sare **în afara**, ar trebui **să înceapă din nou din prima casă**.

**De exemplu**, ni se oferă acest cartier: 6@6@7.

**Cupidon este la început** și **sare** cu o **lungime de 2**.

El va ajunge la **index 2** și va scădea inimile necesare acolo cu 2: [6, 6, 5].

Apoi sare din nou cu o lungime de 2 și merge **în afara cartierului**, așa că merge **înapoi la prima casă** (index 0) și **scade din nou inimile necesare acolo**: [4, 6, 5].




### Intrare
- Pe prima linie veți primi un șir cu numere întregi separate, separate prin "@" - cartierul și numărul de inimi pentru fiecare casă.
- În rândurile următoare, până la "Love!" este primit, veți primi comenzi de salt în acest format: "Jump \{length\}".

### Ieșire
La final, tipăriți ultima poziție a **lui Cupidon și dacă misiunea sa a avut succes sau nu**:
- "Cupid's last position was \{lastPositionIndex\}.
- Dacă fiecare casă a avut Ziua Îndrăgostiților, tipăriți:
     - "Mission was successful."
- Dacă nu, tipăriți numărul tuturor caselor care nu au sărbătorit Ziua Îndrăgostiților:
     - "Cupid has failed \{houseCount\} places."

### Constrângeri
- Dimensiunea cartierului va fi în intervalul  \[1 … 20\]
- Fiecare casă va avea nevoie de un număr par de inimi în intervalul \[2 … 10\]
- Fiecare lungime a saltului va fi un număr întreg în intervalul \[1 … 20\]

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 10@10@10@2 | Place 3 has Valentine's day. |
| Jump 1 | Cupid's last position was 3. |
| Jump 2 | Cupid has failed 3 places. |
| Love! | |

### Cometariu
- Jump 1 -> \[10, 8, 10, 2\]
- Jump 2 -> \[10, 8, 10, 0\] așa că tipărim "Place 3 has Valentine's day."
- Următoarea comandă este "Love!", Așa că imprimăm ultima poziție a lui Cupidon și rezultatul misiunii sale.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2@4@2 | Place 2 has Valentine's day. |
| Jump 2 | Place 0 has Valentine's day. |
| Jump 2 | Place 0 already had Valentine's day. |
| Jump 8 | Place 0 already had Valentine's day. |
| Jump 3 | Cupid's last position was 1. |
| Jump 1 | Cupid has failed 1 places. |
| Love! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10@10@10@2
Jump 1
Jump 2
Love!
[/input]
[output]
Place 3 has Valentine's day.
Cupid's last position was 3.
Cupid has failed 3 places.
[/output]
[/test]
[test open]
[input]
2@4@2
Jump 2
Jump 2
Jump 8
Jump 3
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 1.
Cupid has failed 1 places.
[/output]
[/test]
[test]
[input]
8@8@8@8@8@8@8
Jump 1
Jump 2
Jump 3
Love!
[/input]
[output]
Cupid's last position was 6.
Cupid has failed 7 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2@2@2
Jump 2
Jump 2
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 4 has Valentine's day.
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 4 places.

[/output]
[/test]
[test]
[input]
10@8@6@2@2@2@2@2@2@2@2@2
Jump 20
Jump 13
Jump 5
Love!
[/input]
[output]
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 11 places.
[/output]
[/test]
[test]
[input]
4@4@4
Jump 15
Jump 17
Jump 5
Jump 6
Love!
[/input]
[output]
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 2 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2@2@2@2@2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 4 has Valentine's day.
Place 6 has Valentine's day.
Place 8 has Valentine's day.
Place 0 has Valentine's day.
Place 2 already had Valentine's day.
Place 4 already had Valentine's day.
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 3 places.
[/output]
[/test]
[test]
[input]
8@2@4
Jump 1
Jump 3
Jump 1
Jump 3
Jump 3
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 1 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 2 places.
[/output]
[/test]
[test]
[input]
4@2@4@2
Jump 1
Jump 2
Jump 1
Jump 2
Jump 2
Jump 2
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 3 has Valentine's day.
Place 0 has Valentine's day.
Place 2 has Valentine's day.
Cupid's last position was 2.
Mission was successful.
[/output]
[/test]
[test]
[input]
10@10
Jump 20
Jump 20
Jump 20
Jump 20
Jump 20
Jump 1
Jump 4
Jump 4
Jump 4
Jump 4
Jump 4
Love!
[/input]
[output]
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 1 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 2 has Valentine's day.
Place 3 has Valentine's day.
Place 4 has Valentine's day.
Place 0 has Valentine's day.
Place 1 already had Valentine's day.
Place 2 already had Valentine's day.
Place 3 already had Valentine's day.
Place 4 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Mission was successful.
[/output]
[/test]
[test]
[input]
10@8@6@4@2@10@8@6@4@2@10@8@6@4@2@10@8@6@4@2
Jump 4
Jump 5
Jump 5
Jump 5
Love!
[/input]
[output]
Place 4 has Valentine's day.
Place 9 has Valentine's day.
Place 14 has Valentine's day.
Place 19 has Valentine's day.
Cupid's last position was 19.
Cupid has failed 16 places.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]