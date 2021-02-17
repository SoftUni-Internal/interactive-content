# Boolean Type
[slide hideTitle]

# The Boolean Data Type

The boolean data type is declared with the **boolean** keyword. It can hold only two possible values: **true** or **false**.

```java live
 int firstNumber = 5;
 int secondNumber = 10;

 boolean firstBoolean = true;
 boolean secondBoolean = false;

 if (firstNumber < secondNumber) {
  System.out.println(firstBoolean);
 } else {
  System.out.println(secondBoolean);
 }       
 ```
[/slide]

[slide hideTitle]
# Problem with Solution: Special Numbers
[code-task title="Special Numbers" taskId="java-fund-data-types-lab-special-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
A **number** is **special** when the **sum of its digits is 5, 7, or 11**.

Write a program to read an integer **n**. 

For all numbers in the range **1…n**, print the number and if it is special or not - **(True / False)**.

## Example
| **Input** | **Output** |
| --- | --- |
| 15 | 1 -> False|
|  | 2 -> False |
|  | 3 -> False |
|  | 4 -> False |
|  | 5 -> True |
|  | 6 -> False |
|  | 7 -> True |
|  | 8 -> False |
|  | 9 -> False |
|  | 10 -> False |
|  | 11 -> False |
|  | 12 -> False |
|  | 13 -> False |
|  | 14 -> True |
|  | 15 -> False |
 
### Hints
To calculate the sum of digits of a given number **num**, you might repeat the following: sum the last digit **(num % 10)** and remove it **(sum = sum / 10)** until **num** reaches **0**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
15
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -\> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
41 -\> True
42 -\> False
43 -\> True
44 -\> False
45 -\> False
46 -\> False
47 -\> True
48 -\> False
49 -\> False
50 -\> True
51 -\> False
52 -\> True
53 -\> False
54 -\> False
55 -\> False
56 -\> True
57 -\> False
58 -\> False
59 -\> False
60 -\> False
61 -\> True
62 -\> False
63 -\> False
64 -\> False
65 -\> True
66 -\> False
67 -\> False
68 -\> False
69 -\> False
70 -\> True
71 -\> False
72 -\> False
73 -\> False
74 -\> True
75 -\> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
