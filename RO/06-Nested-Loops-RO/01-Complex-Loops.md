[slide hideTitle]
# Bucle complexe

interactive-programming-basics-with-java-nested-loops-8-9-complex-loops + 

interactive-programming-basics-with-java-nested-loops-8-9-complex-loops-demo

Atunci când utilizați bucle for, bucla variabilă poate fi modificată în mai multe moduri.

În plus, față de incrementare și decrementare, acestea pot fi modificate folosind o logică mai complexă, cum ar fi împărțirea și multiplicarea.

De exemplu:
``` java
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
    // Imprimați doar valorile pare ale i de la 0 până la 10
}

for (int i = 20; i > 0; i -= 5) {
     System.out.println(i);
    // Imprimați valorile divizibile cu 5
}

for (int j = 2; j <= 16; j *= 2) {
    System.out.println(j);
    // Imprimați rezultatele puterilor numărului 2 în ordine crescătoare 
}

for (int j = 16; j > 1; j /= 2) {
    System.out.println(j);
    // Imprimați rezultatele puterilor numărului 2 în ordine descrescătoare
}

```
[/slide]

[slide hideTitle]
# Problem with Solution: Numbers from N down to 1

interactive-programming-basics-with-java-nested-loops-10-problem-numbers-from-n-down-to-one + 

[code-task title="Numbers from N down to 1" taskId="pb-js-nested-loops-lab-Numbers-from-N-down-to-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
public class Main {
    public static void main(String[] args) {
      
    }
}

```
[/code-editor]
[task-description]
# Description
Write a program that prints the numbers from N down to 1.

The program receives a number `n` and prints the numbers from `n` down to 1. 

# Example
| **Input** | **Output** |
| --- | --- |
|5| 5 4 3 2 1 |


[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5 4 3 2 1
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 3 2 1
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Numbers from 1 to N with Step 3

interactive-programming-basics-with-java-nested-loops-12-problem-numbers-from-one-to-n-with-step-three + 

[code-task title="Numbers from 1 to N with Step 3" taskId="pb-js-nested-loops-lab-Numbers-from-1-to-N-with-Step-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
public class Main {
    public static void main(String[] args) {
      
    }
}

```
[/code-editor]
[task-description]
# Description
Write a program that prints the numbers from 1 to `n` with step 3:

* Receives a number `n`

* Prints the numbers from 1 to `n` with step 3


# Example
| **Input** | **Output** |
| --- | --- |
|7| 1 4 7 |
|10| 1 4 7 10 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1 4 7 10
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1 4 7 10 13
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1 4 7 10 13 16 19
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1 4 7 10 13 16 19 22 25
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1 4 7 10 13 16 19 22 25 28
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
# Problem with Solution: Even Powers of 2

interactive-programming-basics-with-java-nested-loops-14-problem-even-powers-of-two + 

[code-task title="Even Powers of 2" taskId="pb-js-nested-loops-lab-Even-Powers-of-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
public class Main {
    public static void main(String[] args) {
      
    }
}

```
[/code-editor]
[task-description]
# Description
Write a program that prints the even powers of 2:

* Receives a number `n`

* Prints the even powers of 2 up to `2n`

# Example
| **Input** | **Output** |
| --- | --- |
|5| 1 4 16 |
|10| 1 4 16 64 256 1024 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1 4 16 64 256 1024
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1 4 16 64 256 1024 4096 16384
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1 4 16 64 256 1024 4096 16384 65536 262144 1048576
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1 4 16 64 256 1024 4096 16384 65536 262144 1048576 4194304 16777216
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1 4 16 64 256 1024 4096 16384 65536 262144 1048576 419434, 16777216 67108864 268435456 1073741824
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

