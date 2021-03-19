# Sortarea Listelor și a Matricelor

[slide hideTitle]
# Sortarea Listelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-23-24-sorting-lists-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


`Collections.sort(names)`- sortarea colecției în ordine crescătoare (alfabetică) 

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

System.out.println(String.join(", ", names));
```
`Collections.reverse()` - sortarea colecției în ordine descrescătoare.

```java live
List<String> names = new ArrayList<>(Arrays.asList("Peter", "Michael", "George", "Victor", "John", "Alexander"));

Collections.reverse(names); 

System.out.println(String.join(", ", names));
```
[/slide]


[slide hideTitle]
# Problemă cu Soluție: List of Products

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-25-problem-and-solution-list-of-products-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List of Products" taskId="java-fund-1-Lists-lab-List-of-products" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Citiți un număr **n** și **n linii de produse**.

Imprimați o **listă numerotată** a tuturor produselor **comandate după nume**.

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | 1.Apples |
| Potatoes | 2.Onions |
| Tomatoes | 3.Potatoes |
| Onions | 4.Tomatoes |
| Apples |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Potatoes
Tomatoes
Onions
Apples
[/input]
[output]
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
[/output]
[/test]
[test]
[input]
3
a
b
c
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
3
c
b
a
[/input]
[output]
1.a
2.b
3.c
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1.a
[/output]
[/test]
[test]
[input]
2
A
a
[/input]
[output]
1.A
2.a
[/output]
[/test]
[test]
[input]
5
a
c
b
e
d
[/input]
[output]
1.a
2.b
3.c
4.d
5.e
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Remove Negatives and Reverse

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-27-problem-and-solution-remove-negatives-and-reverse-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Remove Negatives and Reverse" taskId="java-1-fund-Lists-lab-Remove-Negatives-and-Reverse" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Citiți o**listă de numere întregi**, **eliminați toate numerele negative** din ea și tipăriți elementele rămase în **ordine inversă**.

În cazul în care nu există elemente rămase în listă, tipăriți "**empty**".

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 10 -5 7 9 -33 50 | 50 9 7 10 |
| 7 -2 -10 1 | 1 7 |
| -1 -2 -3 | empty |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 -5 7 9 -33 50
[/input]
[output]
50 9 7 10
[/output]
[/test]
[test open]
[input]
7 -2 -10 1
[/input]
[output]
1 7
[/output]
[/test]
[test open]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test open]
[input]
-1 -2 -3 -4
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
10 -5 7 9 -33 54
[/input]
[output]
54 9 7 10
[/output]
[/test]
[test]
[input]
8 -2 -10 1
[/input]
[output]
1 8
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
-1 -2 -3
[/input]
[output]
empty
[/output]
[/test]
[test]
[input]
-1 37 5 5 3 3 49 -2 4 4 83 -7 3 4 8 -33
[/input]
[output]
8 4 3 83 4 4 49 3 3 5 5 37
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


