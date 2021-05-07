[slide hideTitle]
# Bucle Imbricate For

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-23-25-nested-for-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acum vom observa instrucțiunile care constă în câteva **bucle for** imbricate.

**Buclele imbricate for** sunt utilizate pentru:

* **A repeta o logică de cod** de un număr exact de ori
* A realiza calcule și variații mai **complexe** 

Sintaxa unei **bucle imbricate for în Java** este după cum urmează:
```java
for (variable initialization; condition; increment) {
  // Outer Loop 
  for (variable initialization; condition; increment) { 
    // Inner Loop

    // Statements
  }
}
```

Acesta este un exemplu de 3 bucle `for` imbricate una în cealaltă:
```java live
int n = 5;
for (int i = 1; i <= n; i += 3) {
    for (int j = 1; j <= n; j += 3) {
        for (int k = 1; k <= n; k += 3) {
            System.out.printf("%d%d%d%n", i, j, k);
        }
    }
}
```
## Exemplu
Aici se află un exemplu de program în Java:
```java live
int a = 3;
int b = 3;

for (int i = 0; i < a; i++) {
    System.out.printf("i = %d%n", i);

    for (int j = 0; j < b; j++) {
        System.out.printf("  j = %d%n", j);
    }
}
```
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Triangle of Stars

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-26-problem-and-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars" taskId="java-basics-nested-loops-triangle-of-stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care:

* Citește **înălțimea** unui triunghi de pe consolă
* Imprimă un **triunghi format din stele**

## Exemplu

| **Intrare** | **Ieșire** |
| ----- | ----- |
| 5 | \* |
|| \*\* |
|| \*\*\* |
|| \*\*\*\* |
|| \*\*\*\*\* |

[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
*
**
***
****
*****
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
*
**
***
****
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
