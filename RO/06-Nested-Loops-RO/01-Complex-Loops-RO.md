[slide hideTitle]
# Bucle Complexe

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-8-9-complex-loops-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când utilizați bucle for, variabila buclei poate fi modificată în mai multe moduri.

În plus față de incrementare și decrementare, acestea pot fi modificate folosind o logică mai complexă, cum ar fi împărțirea și înmulțirea.

De exemplu:
``` java
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
    // Imprimați doar valorile pare ale lui i de la 0 până la 10
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
# Problemă cu Soluție: Numbers from N Down to 1

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-10-problem-and-solution-numbers-from-n-down-to-one-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers from N down to 1" taskId="pb-js-nested-loops-lab-Numbers-from-N-down-to-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care imprimă numerele de la **n** până la 1.

Programul primește un număr `n` și imprimă numerele de la `n` până 1.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|5| 5 4 3 2 1 |


[/task-Descriere]
[tests]
[test open]
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
# Problemă cu Soluție: Numbers from 1 to N with Step 3

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-12-problem-and-solution-numbers-from-one-to-n-with-step-three-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers from 1 to N with Step 3" taskId="pb-js-nested-loops-lab-Numbers-from-1-to-N-with-Step-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care imprimă numerele de la 1 până la `n` cu pasul 3:

* Primește un număr `n`

* Imprimă numerele de la 1 până la `n` cu pasul 3


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|7| 1 4 7 |
|10| 1 4 7 10 |

[/task-description]
[tests]
[test open]
[input]
7
[/input]
[output]
1 4 7
[/output]
[/test]
[test open]
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
# Problemă cu Soluție: Even Powers of 2

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/RO/interactive-programming-basics-with-java-nested-loops-14-problem-and-solution-even-powers-of-two-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even Powers of 2" taskId="pb-js-nested-loops-lab-Even-Powers-of-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere
Scrieți un program care imprimă puterile pare ale lui 2:

* Primește un număr `n`

* Imprimă puterile pare ale lui 2, până la `n`

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
|5| 1, 4, 16 |
|10| 1, 4, 16, 64, 256, 1024 |

[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
1, 4, 16
[/output]
[/test]
[test open]
[input]
10
[/input]
[output]
1, 4, 16, 64, 256, 1024
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

