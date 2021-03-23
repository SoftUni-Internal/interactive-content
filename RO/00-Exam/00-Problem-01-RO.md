# Problem: Pool Day
[slide hideTitle]
# Pool Day
[code-task title="Pool Day" taskId="pb-java-exam-Pool-day" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    // Scrieți codul dvs. aici
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

## Intrare
Din consolă se citesc 4 rânduri:
- Prima linie - numărul de persoane - număr întreg în intervalul [1 ... 100]
- A doua linie - taxa de intrare - număr real în interval [0.00... 50.00]
- A treia linie - preț pentru un șezlong - număr real în intervalul [0.00... 50.00]
- A patra linie - preț pentru o umbrelă - număr real în intervalul [0.00... 50.00]

## Ieșire
Rezultatul trebuie formatat la a doua cifră după punctul zecimal:
"\{**total price**\} **euro**" 


## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- | 
| 21 | 254.10 euro | 
| 5.50 | | 
| 4.40 | | 
| 6.20 | | 
[hints]
[hint]
Calculate the initial entrance fee for all the people.
[/hint]
[hint]
Determine how many of them will want a sunbed and calculate the price for all the sunbeds.
[/hint]
[hint]
Note that 1 umbrella can be used by 2 people. Don't forget that when calculating the number of umbrellas and sunbeds, their number should be rounded up to the next integer.
[/hint]
[hint]
Determine the final price after adding the umbrellas and sunbeds fees to the entrance fee.
[/hint]
[/hints]

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
254.10 euro
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
272.00 euro
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
3325.00 euro
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
8994.00 euro
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
3.00 euro
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
166.00 euro
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
2465.80 euro
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
1614.50 euro
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
4155.14 euro
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
1418.60 euro
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
11250.00 euro
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
