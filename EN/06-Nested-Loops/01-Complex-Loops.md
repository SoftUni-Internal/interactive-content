[slide hideTitle]
# Complex Loops

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/06-nested-loops/EN/interactive-programming-basics-with-java-nested-loops-8-9-complex-loops-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When using for-loops, the loop variable can be modified in more than one way.

In addition to incrementation and decrementation, it can be altered using more complex logic, such as division and multiplication.

For example:
``` java live
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
    // Print only even values of i from 0 to 10
}
```

``` java live
for (int i = 20; i > 0; i -= 5) {
     System.out.println(i);
    // Print values that are devisible by 5
}
```

``` java live

for (int j = 2; j <= 16; j *= 2) {
    System.out.println(j);
    // Print the results of powers of 2 ascending
}
```

``` java live

for (int j = 16; j > 1; j /= 2) {
    System.out.println(j);
    // Print the results of powers of 2 descending
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

