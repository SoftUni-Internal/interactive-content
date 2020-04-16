# Boolean and Character Types

[slide]
# Video

[vimeo-video startTimeInSeconds="1958" endTimeInSeconds="2495"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]

[/slide]

[slide]
# Boolean Type
A boolean data type is declared with the **boolean** keyword and can only take the values `true` or `false`:

```java live
boolean isValid = true;
boolean isPositive = 5 > 0;
System.out.println(isValid);   
System.out.println(isPositive);   
```

[/slide]

[slide]
# Problem: Special Numbers
[code-task title="Problem: Special Numbers" taskId="java-fundamentals-Data-Types-and-Variables-05" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
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
A **number** is **special** when its **sum of digits is 5, 7 or 11**.

Write a program to read an integer **n** and for all numbers in the range **1…n** to print the number and if it is special or not - `true` or `false`.

## Examples
|**Input**|**Output**|
|-----|------|
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
To calculate the sum of digits of given number **num**, you might repeat the following steps:
- sum the last digit - `num % 10`
- remove the last digit - `sum = sum / 10`
- until **num** reaches **0**

[/task-description]
[code-io /]
[tests]
[test]
[input]
15
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
41 -> True
42 -> False
43 -> True
44 -> False
45 -> False
46 -> False
47 -> True
48 -> False
49 -> False
50 -> True
51 -> False
52 -> True
53 -> False
54 -> False
55 -> False
56 -> True
57 -> False
58 -> False
59 -> False
60 -> False
61 -> True
62 -> False
63 -> False
64 -> False
65 -> True
66 -> False
67 -> False
68 -> False
69 -> False
70 -> True
71 -> False
72 -> False
73 -> False
74 -> True
75 -> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Special Numbers
[code-task title="Problem: Special Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= n; i++) {
            int sumOfDigits = 0;
            int digits = i;
            while (digits > 0) {
                sumOfDigits += digits % 10;
                digits = digits / 10;
            }
            if ((sumOfDigits == 5) || (sumOfDigits == 7) || (sumOfDigits == 11)) {
                System.out.printf("%d -> True%n", i);
            } else {
                System.out.printf("%d -> False%n", i);
            }

        }

    }
}
```
[/code-editor]
[task-description]
## Description
A **number** is **special** when its **sum of digits is 5, 7 or 11**.

Write a program to read an integer **n** and for all numbers in the range **1…n** to print the number and if it is special or not - `true` or `false`.

## Examples
|**Input**|**Output**|
|-----|------|
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
To calculate the sum of digits of given number **num**, you might repeat the following steps:
- sum the last digit - `num % 10`
- remove the last digit - `sum = sum / 10`
- until **num** reaches **0**

[/task-description]
[code-io /]
[tests]
[test]
[input]
15
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
41 -> True
42 -> False
43 -> True
44 -> False
45 -> False
46 -> False
47 -> True
48 -> False
49 -> False
50 -> True
51 -> False
52 -> True
53 -> False
54 -> False
55 -> False
56 -> True
57 -> False
58 -> False
59 -> False
60 -> False
61 -> True
62 -> False
63 -> False
64 -> False
65 -> True
66 -> False
67 -> False
68 -> False
69 -> False
70 -> True
71 -> False
72 -> False
73 -> False
74 -> True
75 -> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]