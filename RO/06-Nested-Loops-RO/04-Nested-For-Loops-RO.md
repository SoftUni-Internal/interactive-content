[slide hideTitle]
# Bucle Imbricate de Tip For
Instrucțiuni care consta în câteva **bucle for** localizate **una în interiorul celeilalte**

**Buclele imbricate de tip for** sunt utilizate pentru:

* a executa o **acțiune**, care **execută** multiple **acțiuni**
* a face calcule și variații mai **complexe** 

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
Acestea sunt 3 bucle `for` imbricate una în cealaltă:
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
# Exemplu
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
# Problem with Solution: Triangle of Stars
[code-task title="Triangle of Stars" taskId="java-basics-nested-loops-triangle-of-stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care:

* Citește **înălțimea** unui triunghi din consolă
* Imprimă un **triunghi format din stele**
# Exemplu

| **Date de intrare** | **Date de ieșire** |
| ----- | ----- |
| 5 | \* |
|| \*\* |
|| \*\*\* |
|| \*\*\*\* |
|| \*\*\*\*\* |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

