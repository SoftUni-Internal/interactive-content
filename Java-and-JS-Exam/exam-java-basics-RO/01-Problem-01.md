[slide hideTitle]
# Pool Day
[code-task title="Pool Day" taskId="pb-java-exam-Pool-day" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Afară este cald și însorit, așa că echipa de antrenament Softuni decide să organizeze o zi de lucru lângă piscină.

Sarcina dvs. este să scrieți un program care să calculeze suma care ar trebui plătită.

Taxa de intrare trebuie plătită pentru fiecare persoană.

Trebuie să aveți cont de faptul că o umbrelă este suficientă pentru două persoane. Se știe că doar 75% din echipă își dorește șezlonguri.

În calculul numărului de umbrele și șezlonguri, numărul acestora trebuie rotunjit la cel mai apropiat număr întreg.

## Input
Din consolă se citesc 4 rânduri:
- Prima linie - numărul de persoane - număr întreg în intervalul [1 ... 100]
- A doua linie - taxa de intrare - număr real în interval [0.00... 50.00]
- A treia linie - preț pentru un șezlong - număr real în intervalul [0.00... 50.00]
- A patra linie - preț pentru o umbrelă - număr real în intervalul [0.00... 50.00]

## Output
"\{total price\} dollars." 
- Rezultatul trebuie formatat la a doua cifră după punctul zecimal.

## Exemplu
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 21 | 254.10 dollars. | 21 people \* 5.50$ = 115.50$ |
| 5.50 | | 75% of 21 people are 16 -> 16 * 4.40 = 70.40$ |
| 4.40 | | 50% of 21 people are 11 -> 11 * 6.20$ = 68.20$ |
| 6.20 | | The final: 115.50 + 70.40 + 68.20 = 254.10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
21
5.50
4.40
6.20
[/input]
[output]
254.10 dollars.
[/output]
[/test]
[test]
[input]
32
5
2
4
[/input]
[output]
272.00 dollars.
[/output]
[/test]
[test]
[input]
123
23
2
5
[/input]
[output]
3325.00 dollars.
[/output]
[/test]
[test]
[input]
666
6
6
6
[/input]
[output]
8994.00 dollars.
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
3.00 dollars.
[/output]
[/test]
[test]
[input]
34
2.4
2.2
1.6
[/input]
[output]
166.00 dollars.
[/output]
[/test]
[test]
[input]
46
24
23.4
23.6
[/input]
[output]
2465.80 dollars.
[/output]
[/test]
[test]
[input]
49
20.20
13.10
5.60
[/input]
[output]
1614.50 dollars.
[/output]
[/test]
[test]
[input]
88
22.22
11.11
33.33
[/input]
[output]
4155.14 dollars.
[/output]
[/test]
[test]
[input]
23
43
23
1.3
[/input]
[output]
1418.60 dollars.
[/output]
[/test]
[test]
[input]
100
50
50
50
[/input]
[output]
11250.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]