[slide hideTitle]

# Bucle Imbricate While
[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-28-30-nested-while-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Utilizarea buclelor imbricate `while` este foarte similară cu cea a buclelor imbricate `for`. Totuși, acestea sunt utilizate atunci când nu cunoaștem cu exactitate numărul de repetări necesare.

Aceasta este sintaxa în Java:
```java
while (condition) {
  // Outer Loop 
  while (condition) {
    // Inner Loop
    
    // Statements
  }
}
```

## Exemplu

```java live
int i = 0;
int n = 5;
while (i < n) {
  System.out.printf("Value of i: %d%n", i);
  int j = 1;
  i++;

  while (j < n) {
    System.out.printf("  Value of j: %d%n", j);
    j++;
  }
}
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Triangle of Stars with While

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-31-problem-and-solution-triangle-of-stars-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Triangle of Stars with While" taskId="java-basics-nested-loops-Triangle-of-Stars-with-While" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Citește **înălțimea** unui triunghi din consolă
* Imprimă un **triunghi din stele**
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


[slide hideTitle]

# Problemă cu Soluție: Sum of Digits Calculator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-33-34-nesting-while-and-for-loops-and-problem-and-solution-sum-digits-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of Digits Calculator" taskId="java-basics-nested-loops-Sum-of-Digits-Calculator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

- Citește continuu numere întregi până când este introdus "**End**"

   - imprimă suma **cifrelor** pentru fiecare număr întreg

- La final imprimă  "**Goodbye**"

## Exemplu

| **Intrare** | **Ieșire** |
| ----- | ----- |
|157 |Sum of digits = 13
|99|Sum of digits = 18
|5|Sum of digits = 5
|438|Sum of digits = 15
|End|Goodbye

[/task-description]
[tests]
[test open]
[input]
157
99
5
438
End
[/input]
[output]
Sum of digits = 13​
Sum of digits = 18​
Sum of digits = 5​
Sum of digits = 15​
Goodbye
[/output]
[/test]
[test]
[input]
55
123
145
End
[/input]
[output]
Sum of digits = 10
Sum of digits = 6
Sum of digits = 10
Goodbye
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]



[/slide]
