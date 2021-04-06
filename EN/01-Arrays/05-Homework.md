# Homework

[slide hideTitle]
# Problem: Train

[code-task title="Train" taskId="java-fund-1-arrays-Train" executionType="tests-execution" executionStrategy="java-code" requiresInput requiresInput]
[code-editor language=java]
```
import java.util.*;
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

A train has an **n** number of wagons /integer, received as input/. 

On the next **n lines**, you will receive the amount of people that are going to get on each wagon. 

**Print out the number of passengers in each wagon** followed by the **total number of passengers on the train**.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 13 24 8 |
| 13 | 45 |
| 24 | |
| 8 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 1 | 100 |
| 100 | 100 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
13
24
8
[/input]
[output]
13 24 8
45
[/output]
[/test]
[test open]
[input]
1
100
[/input]
[output]
100
100
[/output]
[/test]
[test]
[input]
6
3
52
71
13
65
4
[/input]
[output]
3 52 71 13 65 4
208
[/output]
[/test]
[test]
[input]
5
1
2
3
45
5
[/input]
[output]
1 2 3 45 5
56
[/output]
[/test]
[test]
[input]
3
-100
-200
-300
[/input]
[output]
-100 -200 -300
-600
[/output]
[/test]
[test]
[input]
3
100
1
2
[/input]
[output]
100 1 2
103
[/output]
[/test]
[test]
[input]
3
1
1
1
[/input]
[output]
1 1 1
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Common Elements
[code-task title="Common Elements" taskId="java-fund-1-arrays-Common-Elements" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program that prints out all **common elements** in **two arrays**.

You have to **compare the elements** of the **second array** to the elements of the **first**.

### Example
| **Input** | **Output** |
| --- | --- |
| Hey hello 2 4 | 4 hello |
| 10 hey 4 hello | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Hey hello 2 4
10 hey 4 hello
[/input]
[output]
4 hello
[/output]
[/test]
[test]
[input]
S of t un i
of i 10 un
[/input]
[output]
of i un
[/output]
[/test]
[test]
[input]
i love to code
code i love to
[/input]
[output]
code i love to
[/output]
[/test]
[test]
[input]
a b c d
a x e f
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
abc def xyz kmn lop
abc 213 xyz 5406 lop ####
[/input]
[output]
abc xyz lop
[/output]
[/test]
[test]
[input]
aaa bbb ccc ddd eee fff ggg
aaa xxx yyy zzz 123 ccc ggg
[/input]
[output]
aaa ccc ggg
[/output]
[/test]
[test]
[input]
aaa bbb ddd eee fff ggg
ggg
[/input]
[output]
ggg
[/output]
[/test]
[test]
[input]
111 222 333 444 555
666 777 888 999 111
[/input]
[output]
111
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Zig-Zag Arrays

[code-task title="Zig-Zag Arrays" taskId="java-fund-1-arrays-Zig-Zag-Array" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program that creates **2 arrays**.

You will be given an **integer n**.

On the **next n lines**, you will get **2 integers**.

Form 2 new arrays in a **zig-zag** pattern as **shown below**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 80 19 |
| 80 23 | 23 31 |
| 31 19 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
80 23
31 19
[/input]
[output]
80 19
23 31
[/output]
[/test]
[test]
[input]
4
1 5
9 10
31 81
41 20
[/input]
[output]
1 10 31 20
5 9 81 41
[/output]
[/test]
[test]
[input]
3
1 2
3 4
5 6
[/input]
[output]
1 4 5
2 3 6
[/output]
[/test]
[test]
[input]
4
1 2
3 4
5 6
7 8
[/input]
[output]
1 4 5 8
2 3 6 7
[/output]
[/test]
[test]
[input]
1
1 2
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
3
1 2
3 2
4 2
[/input]
[output]
1 2 4
2 3 2
[/output]
[/test]
[test]
[input]
5
0 0
1 1
2 2
3 3
4 4
[/input]
[output]
0 1 2 3 4
0 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Array Rotation
[code-task title="Array Rotation" taskId="java-fund-1-arrays-Rotation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program that **receives an array and a number of rotations** that you have to perform.

The rotations are done by switching the element at index 0 with the element at the last index.

**Print the resulting** array.

### Example
| **Input** | **Output** |
| --- | --- |
| 51 47 32 61 21 | 32 61 21 51 47 |
| 2 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
51 47 32 61 21
2
[/input]
[output]
32 61 21 51 47
[/output]
[/test]
[test]
[input]
32 21 61 1
4
[/input]
[output]
32 21 61 1
[/output]
[/test]
[test]
[input]
2 4 15 31
5
[/input]
[output]
4 15 31 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
2
[/input]
[output]
3 4 5 6 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
1 2 3
0
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
2 3 4 5 1
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 12
12
[/input]
[output]
5 6 7 12 1 2 3 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Top Integers

[code-task title="Top Integers" taskId="java-fund-1-arrays-Top-Integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program to **find all the top integers** in an array.

A top integer is an integer that is **greater** than all the elements **to its right**.

### Example
| **Input** | **Output** |
| --- | --- |
| 14 24 3 19 15 17 | 24 19 17 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
14 24 3 19 15 17
[/input]
[output]
24 19 17
[/output]
[/test]
[test]
[input]
1 4 3 2
[/input]
[output]
4 3 2
[/output]
[/test]
[test]
[input]
27 19 42 2 13 45 48
[/input]
[output]
48
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 4
[/input]
[output]
6 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
0 1 0 0 0
[/input]
[output]
1 0
[/output]
[/test]
[test]
[input]
6 5 4 3 2 1
[/input]
[output]
6 5 4 3 2 1
[/output]
[/test]
[test]
[input]
1 6 4 2 1 0
[/input]
[output]
6 4 2 1 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Equal Sums
[code-task title="Equal Sums" taskId="java-fund-1-arrays-Equal-Sums" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program that determines if **an element exists in an array** for which the **sum of all elements to its left** is **equal** to **the sum of all elements to its right**.

If there are **no elements to the left or right**, their **sum is considered to be 0**.

**Print** the **index** of the element that satisfies the condition or "no" if there is no such element.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 **3** 3 | 2 |

[hints] 
[hint] 
In this example, the element at index 2 (arr\[2\]) satisfies the condition.
[/hint] 
[hint] 
The sum of the elements on the **left** side (1, 2) is equal to 3.
The sum of the elements on the **right** side (3) is also equal to 3.

arr\[0\] + arr\[1\] = arr\[3\]
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 3
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
10 5 5 99 3 4 2 5 1 1 4
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
1 2
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
999
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
4 2 2 2 0
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8 1 4 4 5 17
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7
[/input]
[output]
no
[/output]
[/test]
[test]
[input]
1 1 1 1 1 1 1 1 1 1 99999 10
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
11 555 1 1 1 1 1 1 1 1 1 1 1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
-5 1 1 1 1 1 1000
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1000 -5 1 1 1 1 1
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Max Sequence of Equal Elements

[code-task title="Max Sequence of Equal Elements" taskId="java-fund-1-arrays-Max-Sequence-of-Equal-Elements" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program that **finds the longest sequence of equal elements in an array** of integers.

If **several equal sequences are present in the array**, print out the **leftmost** one.

### Example
| **Input** | **Output** |
| --- | --- |
| 0 1 1 5 2 2 6 3 3 | 1 1 |
| 1 1 1 2 3 1 3 3 | 1 1 1 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
0 1 1 5 2 2 6 3 3
[/input]
[output]
1 1
[/output]
[/test]
[test open]
[input]
1 1 1 2 3 1 3 3
[/input]
[output]
1 1 1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
4 4 4 4
[/input]
[output]
4 4 4 4
[/output]
[/test]
[test]
[input]
1 2 3 4
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2 1 1 2 3 3 2 2 2 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
9 9 9 9 9 9 9 9 9
[/input]
[output]
9 9 9 9 9 9 9 9 9
[/output]
[/test]
[test]
[input]
1 2 3 1 1 1 1 1 1 1
[/input]
[output]
1 1 1 1 1 1 1
[/output]
[/test]
[test]
[input]
1 2 2 2 1 2 2 2 3 1 1 1
[/input]
[output]
2 2 2
[/output]
[/test]
[test]
[input]
0 0 -1 -1 -1 -2 -3 -3 -4 -5
[/input]
[output]
-1 -1 -1
[/output]
[/test]
[test]
[input]
1 2 2
[/input]
[output]
2 2
[/output]
[/test]
[test]
[input]
3 3 3 1
[/input]
[output]
3 3 3
[/output]
[/test]
[test]
[input]
1 1 2 2 3 3 4 4 5 5
[/input]
[output]
1 1
[/output]
[/test]
[test]
[input]
0 1 1 1 0 2 2 0 3 3 3 0 4 4 0 5 5 5
[/input]
[output]
1 1 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Magic Sum
[code-task title="Magic Sum" taskId="java-fund-1-arrays-Magic-Sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Create a program, which **prints all unique pairs** in an array of integers whose **sum is equal to a given number**.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 7 6 2 19 23 | 1 7 |
| 8 | 6 2 |

### Example
| **Input** | **Output** |
| --- | --- |
| 14 20 60 13 7 19 8 | 14 13 |
| 27 | 20 7 |
| | 19 8 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 7 6 2 19 23
8
[/input]
[output]
1 7
6 2
[/output]
[/test]
[test open]
[input]
14 20 60 13 7 19 8 
27
[/input]
[output]
14 13
20 7
19 8
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
6
[/input]
[output]
1 5
2 4
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6
7
[/input]
[output]
1 6
2 5
3 4
[/output]
[/test]
[test]
[input]
101 102 103 104
205
[/input]
[output]
101 104
102 103
[/output]
[/test]
[test]
[input]
0 1 2 3 4
4
[/input]
[output]
0 4
1 3
[/output]
[/test]
[test]
[input]
9 8 7 6 5
15
[/input]
[output]
9 6
8 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: LadyBugs

[code-task title="LadyBugs" taskId="java-fund-1-arrays-LadyBugs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
You are given a **field size** and the **indexes where ladybugs** can be found on the field.

On every new line, until the "**end**" command is given, a ladybug **changes its position** either to its **left** or to its **right** by a given **fly length**.

A movement description **command** looks like this: "0 right 1".

This means that the little insect **placed on index 0 should fly one index to its right**.

If the ladybug **lands on another ladybug**, it **continues to fly in the same direction repeating the specified flight length**.

If the ladybug **flies out of the field**, it is **gone**.

Example: you are given a **field of size 3** there are ladybugs on indexes **0 and 1**.

If the ladybug **on index 0 needs to fly to its right by the length of 1** (0 right 1) it will attempt to **land on index 1** but as there is **another ladybug** there, so it will continue further to the right passing 1 index in length, landing on **index 2**.

After that, if the same ladybug needs to fly to its right passing 1 index (2 right 1), it will land somewhere **outside** of the field, so it flies **away**: 

If we receive an initial **index that does not contain a ladybug nothing** happens.

If you are given a ladybug index that is **outside the field**, **nothing** happens.

In the end, **print all cells** of the field **separated** by **blank spaces**.

For each cell that has a ladybug in it print '1' and for each empty cell print '0'.

The output of the example above should be '0 1 0'.

### Input
- On the first line, you will receive an integer - the size of the field
- On the second line, you will receive the initial indexes of all ladybugs separated by a blank space

The given indexes may or may not be inside the field range
- On the next lines, until you get the "**end**" command you will receive commands in the format: "\{ladybug index\} \{direction\} \{fly length\}"

### Output
- Print all field cells in format: "\{cell\} \{cell\} … \{cell\}"
    - if a cell has a ladybug in it, print '1'
    - if a cell is empty, print '0' 


### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 0 1 0 |
| 0 1 | |
| 0 right 1 | |
| 2 right 1 | |
| end | |

[hints] 
[hint] 
First, we receive the field size - **3**.
Then, we recеive the indexes with ladybugs - **0** and **1**.

Initially, the field looks like this: `1 1 0`
[/hint] 
[hint] 
The first command is "**0 right 1**":
- **0** - the **index** of the ladybug
- right - the **direction** to fly to
- 1 - the **fly length**

After this command, the field looks like this: `0 0 1`
[/hint] 
[hint] 
The second command is "**2 right 1**".

Since this fly length is outside of the array, the ladybug **flies away**.

After this command, the field looks like this: `0 1 0`
[/hint] 
[/hints]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
0 1
0 right 1
2 right 1
end
[/input]
[output]
0 1 0
[/output]
[/test]
[test]
[input]
3
0 1 2
0 right 1
1 right 1
2 right 1
end
[/input]
[output]
0 0 0
[/output]
[/test]
[test]
[input]
5
3
3 left 2
1 left -2
end
[/input]
[output]
0 0 0 1 0
[/output]
[/test]
[test]
[input]
5
0 2 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 0 1
[/output]
[/test]
[test]
[input]
5
0 1 2 3 4
0 right 1
2 left 1
end
[/input]
[output]
1 1 0 1 1
[/output]
[/test]
[test]
[input]
0
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
10
2 3 4
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 1 1 1 0 0 0 0 0
[/output]
[/test]
[test]
[input]
10
-2 -3 -4 12 32 89 6
0 right 5
6 right 2
7 left 1
19 left 0
end
[/input]
[output]
0 0 0 0 0 0 0 0 1 0
[/output]
[/test]
[test]
[input]
100
-2 -3 -4 12 32 89 6 1 12 32 89 6 1 12 32 1 1 11 1
0 right 5
6 right 2
7 left 1
19 left 0
-12 left 12
0 left 0
12 right 0
32 right 120
89 left 260
end
[/input]
[output]
0 1 0 0 0 0 0 0 1 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
0
0
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
1
0
12 right 12
0 right 0
0 left 0
32 right 54
54 left 32
end
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
1000
100 200 300 400 500 600 700 800 900 1000
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
1000 left 999
300 right 100
400 right 400
500 left 500
0 right 1
600 right 100
700 left 700
end
[/input]
[output]
0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

