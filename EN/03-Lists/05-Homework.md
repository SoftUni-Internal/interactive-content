# Homework

[slide hideTitle]
# Problem: Train

[code-task title="Train" taskId="java-fund-1-Lists-Train" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
On the first line, we will receive a **list of wagons** (integers).

Each **integer** represents the **number of passengers** that are currently in each wagon of a passenger train.

On the next line, you will receive the **max capacity of a wagon** represented as a **single integer**.

**Until** you receive the "**end**" command, you will be receiving two types of input:

- "**Add** \{**passengers**\}" - add a wagon to the end of the train with the given number of passengers

- "\{**passengers**\}" -  **find a single wagon** to fit all the incomming passengers (starting from the first wagon)

In the end, **print** the final state of the train (all the wagons separated by a space).

### Example
| **Input** | **Output** |
| --- | --- |
| 32 54 21 12 4 0 23 | 72 54 21 12 4 75 23 10 0 |
| 75 | |
| Add 10 | |
| Add 0 | |
| 30 | |
| 10 | |
| 75 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
32 54 21 12 4 0 23
75
Add 10
Add 0
30
10
75
end
[/input]
[output]
72 54 21 12 4 75 23 10 0
[/output]
[/test]
[test]
[input]
0 0 0 10 2 4
10
Add 10
10
10
10
8
6
end
[/input]
[output]
10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
57 64 60 7 39
100
24
79
32
6
158
end
[/input]
[output]
87 96 60 86 39
[/output]
[/test]
[test]
[input]
527 64 60 72 349
589
254
791
322
65
1528
end
[/input]
[output]
527 383 382 72 349
[/output]
[/test]
[test]
[input]
86 23 62 36 23 70 83 90
300
4684
7611
5029
740
6277
8480
1235
349
end
[/input]
[output]
86 23 62 36 23 70 83 90
[/output]
[/test]
[test]
[input]
4704 7637 5848
10000
Add 5755
Add 3631
Add 6616
Add 260
Add 4457
Add 3949
Add 8921
Add 7992
Add 2708
Add 4067
end
[/input]
[output]
4704 7637 5848 5755 3631 6616 260 4457 3949 8921 7992 2708 4067
[/output]
[/test]
[test]
[input]
1 2 3
10
Add 4
Add 5
Add 6
Add 7
Add 8
Add 9
Add 0
end
[/input]
[output]
1 2 3 4 5 6 7 8 9 0
[/output]
[/test]
[test]
[input]
245 658 123
1548
Add 414
Add 598
end
[/input]
[output]
245 658 123 414 598
[/output]
[/test]
[test]
[input]
10 25 35 9 5 44 15
80
26
100
200
58
Add 80
Add 80
end
[/input]
[output]
36 25 35 67 5 44 15 80 80
[/output]
[/test]
[test]
[input]
25 50 75 100
100
75
50
Add 0
25
100
end
[/input]
[output]
100 100 100 100 100
[/output]
[/test]
[test]
[input]
2 4 8 16 32
1000
750
Add 893
990
18
Add 999
254
Add 100
end
[/input]
[output]
770 994 262 16 32 893 999 100
[/output]
[/test]
[test]
[input]
46 28 18 8 7 158
248
15
69
Add 28
17
Add 148
Add 178
189
22
end
[/input]
[output]
169 217 18 8 7 158 28 148 178
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Change List
[code-task title="Change List" taskId="java-fund-1-Lists-Change-List" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program, that **reads a list of integers** from the console and receives **commands** to **manipulate the list**.

Your program may receive the following **commands**: 

- "**Delete** \{**element**\}" - delete all elements in the array, which are equal to the given element

- "**Insert** \{**element**\} \{**position**\}" - insert the element at the given position

You should **exit the program** when you receive the "**end**" command. 

Print all numbers in the array **separated by a single whitespace**.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 3 4 5 5 5 6 | 1 10 2 3 4 6 |
| Delete 5 | |
| Insert 10 1 | |
| Delete 5 | |
| end | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 5 5 6
Delete 5
Insert 10 1
Delete 5
end
[/input]
[output]
1 10 2 3 4 6
[/output]
[/test]
[test]
[input]
20 12 4 319 21 31234 2 41 23 4
Insert 50 2
Insert 50 5
Delete 4
end
[/input]
[output]
20 12 50 319 50 21 31234 2 41 23
[/output]
[/test]
[test]
[input]
429 816 83 411
Delete 816
Delete 83
end
[/input]
[output]
429 411
[/output]
[/test]
[test]
[input]
750 747 827 55
Delete 750
Delete 750
Delete 83
Delete 54
Delete 55
end
[/input]
[output]
747 827
[/output]
[/test]
[test]
[input]
56 95
Insert 198 0 
Insert 18 2 
Insert 178 3 
Insert 8 1 
Insert 25 0 
end
[/input]
[output]
25 198 8 56 18 178 95
[/output]
[/test]
[test]
[input]
21 85 29
Insert 275 0 
Insert 744 2 
Insert 73 3 
Insert 798 1 
Insert 248 0 
end
[/input]
[output]
248 275 798 21 744 73 85 29
[/output]
[/test]
[test]
[input]
444 868 119 891 717 755 564 52 246 876
Delete 119
Delete 755
Insert 755 0
Delete 876
Insert 666 5
Insert 949 6
end
[/input]
[output]
755 444 868 891 717 666 949 564 52 246
[/output]
[/test]
[test]
[input]
67 26 161 985 709 373 830
Delete 0
Delete 26
Insert 0 0
Delete 373
Delete 985
Insert 666 5
Insert 949 6
end
[/input]
[output]
0 67 161 709 830
[/output]
[/test]
[test]
[input]
216 467 876
Delete 216
Delete 876
Insert 0 0
Delete 373
Delete 985
Insert 13 0
Insert 468 1
end
[/input]
[output]
13 468 0 467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: House Party

[code-task title="House Party" taskId="java-fund-1-Lists-House-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that keeps track of the guests that are going to a house party.

On the first line of input, you are going to receive **the number of commands that will follow**.

On the next lines, you are going to receive some of the following: 

"\{**name**\} **is going!**"

- You have to **add the person if they are not in the guest list already**
- If **the person is on the list** print to the following to the console: "\{**name**\} **is already in the list!**"


"\{**name**\} **is not going!**"

- You have to remove the person if they are in the list. 
- If not, print out: "\{**name**\} **is not in the list!**"


Finally, print all of the guests, each on a new line.

### Example
| **Input** | **Output** |
| --- | --- |
| 4 | John is not in the list! |
| Allie is going! | Allie |
| George is going! | |
| John is not going! | |
| George is not going! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Allie is going!
George is going!
John is not going!
George is not going!
[/input]
[output]
John is not in the list!
Allie

[/output]
[/test]
[test]
[input]
5
Tom is going!
Annie is going!
Tom is going!
Garry is going!
Jerry is going!
[/input]
[output]
Tom is already in the list!
Tom
Annie
Garry
Jerry
[/output]
[/test]
[test]
[input]
5
Denny is going!
Annie is going!
Gregory is going!
Jack is going!
Sam is going!
[/input]
[output]
Denny
Annie
Gregory
Jack
Sam
[/output]
[/test]
[test]
[input]
7
Denny is going!
Sofiya is going!
Rosica is going!
Ivica is going!
Kveta is going!
Giosetta is going!
Chip is going!
[/input]
[output]
Denny
Sofiya
Rosica
Ivica
Kveta
Giosetta
Chip
[/output]
[/test]
[test]
[input]
8
Adriana is going!
Posie is going!
Eldon is going!
Posie is going!
Jack is going!
Adriana is going!
Nataly is going!
Jack is going!
[/input]
[output]
Posie is already in the list!
Adriana is already in the list!
Jack is already in the list!
Adriana
Posie
Eldon
Jack
Nataly
[/output]
[/test]
[test]
[input]
5
Adriana is going!
Posie is going!
Eldon is going!
Adriana is not going!
Posie is not going!
[/input]
[output]
Eldon
[/output]
[/test]
[test]
[input]
5
Adriana is not going!
Posie is not going!
Posie is not going!
Jack is not going!
Jack is going!
[/input]
[output]
Adriana is not in the list!
Posie is not in the list!
Posie is not in the list!
Jack is not in the list!
Jack
[/output]
[/test]
[test]
[input]
7
Adriana is going!
Nataly is going!
Posie is not going!
Nataly is going!
Jack is not going!
Nataly is not going!
Jack is going!
[/input]
[output]
Posie is not in the list!
Nataly is already in the list!
Jack is not in the list!
Adriana
Jack
[/output]
[/test]
[test]
[input]
9
Nataly is going!
Nataly is going!
Nataly is going!
Posie is not going!
Ivan is going!
Jack is not going!
Nata is not going!
Jack is going!
Pesho is going!
[/input]
[output]
Nataly is already in the list!
Nataly is already in the list!
Posie is not in the list!
Jack is not in the list!
Nata is not in the list!
Nataly
Ivan
Jack
Pesho
[/output]
[/test]
[test]
[input]
5
Misho is going!
Pesho is going!
Pesho is going!
Adriana is not going!
Adriana is going!
[/input]
[output]
Pesho is already in the list!
Adriana is not in the list!
Misho
Pesho
Adriana
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: List Operations
[code-task title="List Operations" taskId="java-fund-1-Lists-List-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
The first input line will hold a list of **integers**.

Until we receive the **End** command, we will be given **operations** we have to apply to the list.

The **possible commands** are:

- "**Add** \{**number**\}" - add the given number to the end of the list

- "**Insert** \{**number**\} \{**index**\}" - insert the number at the given index

- "**Remove** \{**index**\}" - remove the number at the given index

- "**Shift left** \{**number**\}" - first number becomes last. This has to be repeated the specified number of times

- "**Shift right** \{**number**\}" - last number becomes first. To be repeated the specified number of times

**Note**: the index given may be outside of the bounds of the array. 

In that case print: "**Invalid index**".

### Example
| **Input** | **Output** |
| --- | --- |
| 1 23 29 18 43 21 20  | 43 20 5 1 23 29 18 |
| Add 5 |  |
| Remove 5 | |
| Shift left 3 | |
| Shift left 1 | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 23 29 18 43 21 20 
Add 5
Remove 5
Shift left 3
Shift left 1
End
[/input]
[output]
43 20 5 1 23 29 18
[/output]
[/test]
[test]
[input]
5 12 42 95 32 1
Insert 3 0
Remove 10
Insert 8 6
Shift right 1
Shift left 2
End
[/input]
[output]
Invalid index
5 12 42 95 32 8 1 3
[/output]
[/test]
[test]
[input]
73 57 29
Add 15
Add 58
Add 17
Add 97
End
[/input]
[output]
73 57 29 15 58 17 97
[/output]
[/test]
[test]
[input]
39 54 66
Add 1500
Add 59588
Add 1718
Add 9227
End
[/input]
[output]
39 54 66 1500 59588 1718 9227
[/output]
[/test]
[test]
[input]
39 54 66
Insert 1500 1
Insert 59588 0
Insert 1718 4
Insert 9227 2
End
[/input]
[output]
59588 39 9227 1500 54 1718 66
[/output]
[/test]
[test]
[input]
25 87
Insert 23 1
Insert 1 0
Insert 22 3
Insert 0 2
Insert 80 2
Insert 15 2
Insert 52 2
Insert 16 2
End
[/input]
[output]
1 25 16 52 15 80 0 23 22 87
[/output]
[/test]
[test]
[input]
90 29 49 20 0 84 64 62 50 2
Remove 0
Remove 5
Remove 4
Remove 6
Remove 0
Remove 1
Remove 3
Remove 1
End
[/input]
[output]
49 62
[/output]
[/test]
[test]
[input]
91 33 11 34 20 23 47 70 53 19 31 25 20 12 50 39 86 94 98 97 30 46 84 79 95 45 89 29 34 4 43 1 81 81 31 18 11 81 52 90 24 92 36 97 6 26 57 74 18 0
Remove 0
Remove 25
Remove 34
Remove 16
Remove 10
Remove 11
Remove 13
Remove 24
End
[/input]
[output]
33 11 34 20 23 47 70 53 19 31 20 50 39 98 97 30 46 84 79 95 45 29 34 4 1 81 81 31 18 81 52 90 24 92 36 97 6 26 57 74 18 0
[/output]
[/test]
[test]
[input]
67 50 97 67 29
Shift left 5
Shift left 5
Shift left 5
End
[/input]
[output]
67 50 97 67 29
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift left 2
Shift left 7
Shift left 20
End
[/input]
[output]
72 58 27 8 43
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Shift right 2
Shift right 7
Shift right 20
End
[/input]
[output]
27 8 43 72 58
[/output]
[/test]
[test]
[input]
13 764 666 89 27 24
Shift right 3
Shift right 17
Shift right 7
Shift right 8
End
[/input]
[output]
764 666 89 27 24 13
[/output]
[/test]
[test]
[input]
58 27
Add 24
Insert 89 1
Insert 666 1
Add 764
Remove 0
Remove 185
Insert 13 4
Remove -9
Insert 245 -54
Shift left 17
Shift right 7
End
[/input]
[output]
Invalid index
Invalid index
Invalid index
13 764 666 89 27 24
[/output]
[/test]
[test]
[input]
58 27 8 43 72
Add 24
Remove 3
Remove 27
Insert 13 4
Insert 9999 -54
Shift right 20
Shift left 3
End
[/input]
[output]
Invalid index
Invalid index
27 8 72 13 24 58
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Bomb Numbers

[code-task title="Bomb Numbers" taskId="java-fund-1-Lists-Bomb-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads a sequence of numbers and a special **bomb** number **holding a certain power**.

Your task is to **detonate every occurrence of the special bomb number** and according to its power **the numbers to its left and right**.

The bomb power refers to how many numbers to the left and right will be removed, no matter their values.

Detonations are performed **from left to right** and all the detonated numbers **disappear**.

Finally, **print the sum of the remaining elements** in the sequence.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 2 4 2 2 2 9  | 12 |
| 4 2 | |

[hints]
[hint]
The special number is 4 with a power of 2.
[/hint] 
[hint]
After detonation, this sequence remains: \[1, 2, 9\] with a sum of 12.
[/hint] 
[/hints] 

### Example
| **Input** | **Output** |
| --- | --- |
| 1 4 4 2 8 9 1 | 5 |
| 9 3 | |

[hints]
[hint]
The special number is 9 with a power of 3.
[/hint] 
[hint]
After detonation, the remaining sequence is: \[1, 4\] with a sum of 5.
[/hint] 
[hint]
Since the number 9 has only 1 neighbor to the right of it, we only remove the number 1 (we remove one number instead of three numbers).
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 2 4 2 2 2 9
4 2
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
1 4 4 2 8 9 1
9 3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 7 7 1 2 3
7 1
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1 1 2 1 1 1 2 1 1 1
2 1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 1 1 1
2 3
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1 1 2 1 1
2 2
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
8 1 8 1 1 8 1 8 0 0 9
8 2
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
1 2 1 1 2 1 1 2 2 1
2 0
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Card Game
[code-task title="Card Game" taskId="java-fund-1-Lists-Cards-Game" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You will be given two hands of cards, which will be represented by **integers**.

Assume each one is held by a different player

You have to **find** which one has the **winning deck**.

You start from the beginning of both hands of cards. **Compare** the cards from the first deck to the cards from the second deck. 

The player, **who holds the more powerful card** on the current iteration, takes both cards and puts them at the back of his hand - the second player's card is placed last, and the first person's card (the winning one) comes after it (second to last)  

If both players' cards **have the same values** - no one wins, and the two cards must be removed from both hands. 

The **game is over** when only one of the decks is left **without any cards**. 

You have to **display the result on the console** and **the sum of the remaining** cards: "\{**First/Second**\} **player wins! Sum:** \{**sum**\}".

### Example
| **Input** | **Output** |
| --- | --- |
| 20 30 40 50  | First player wins! Sum: 240 |
| 10 20 30 40 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
20 30 40 50
10 20 30 40
[/input]
[output]
First player wins! Sum: 240
[/output]
[/test]
[test]
[input]
10 20 30 40 50
50 40 30 30 10
[/input]
[output]
Second player wins! Sum: 50
[/output]
[/test]
[test]
[input]
42 83 37 84 75 47 99
54 3 20 48 91 25 88
[/input]
[output]
First player wins! Sum: 796
[/output]
[/test]
[test]
[input]
21 19 59 47 99 92 87 19 50 34
14 10 20 51 71 77 82 13 54 50
[/input]
[output]
First player wins! Sum: 969
[/output]
[/test]
[test]
[input]
200 157 300
100 200 300
[/input]
[output]
Second player wins! Sum: 257
[/output]
[/test]
[test]
[input]
70 92 27 70 56 28 73 10
53 47 97 89 7 37 18 52
[/input]
[output]
Second player wins! Sum: 826
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Append Arrays

[code-task title="Append Arrays" taskId="java-fund-1-Lists-Append-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program to **append several arrays** of numbers one after another.

- **Arrays** are **separated** by '\|'

- Their **Values** are **separated** by spaces (' ', one or several)

- Take all arrays starting from the **rightmost** and going to the **left** and place them in a new array in that order.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 2 3 \|4 5 6 \|  7  8  | 7 8 4 5 6 1 2 3 |
| 7 \| 4  5\|1 0\| 2 5 \|3  | 3 2 5 1 0 4 5 7 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test open]
[input]
7 \| 4  5\|1 0\| 2 5 \|3
[/input]
[output]
3 2 5 1 0 4 5 7
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 2 3 \|4 5 6 \|  7  8
[/input]
[output]
7 8 4 5 6 1 2 3
[/output]
[/test]
[test]
[input]
1\| 4 5 6 7 \| 8 9
[/input]
[output]
8 9 4 5 6 7 1
[/output]
[/test]
[test]
[input]
1 \| \| \|\|\|2   3 \|4   5 6 \| 7 8\| -3 2   1\|\|1 2\|3\|4\|99 77
[/input]
[output]
99 77 4 3 1 2 -3 2 1 7 8 4 5 6 2 3 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Pokemon Don't Go

[code-task title="Pokemon Don't Go" taskId="java-fund-1-Lists-Pokemon-Don't-Go" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
In **Pokemon Don't Go**, when you walk to a certain pokemon, those closest to you get further and those further from you get closer.

You will **receive a sequence of integers, separated by spaces** - the **distance** to the pokemons.

Then you will **begin receiving integers**, which will correspond to **indexes** in that sequence.

**When you receive an index**, you must **remove the element at that index** from the sequence (as if you have captured the pokemon).

You must increase the value of all elements in the sequence, which are **less than or equal to the removed element** by the **value of the removed element**.

You must decrease the value of all elements in the sequence, which are **greater than the removed element** by the **value of the removed element**.

If the given index is **less than 0**, **remove the first element of the sequence** and **copy the last element at its place**.

If the given index is **greater than the last index of the sequence**, **remove the last element from the sequence** and **copy the first element at its place**.

Increasing and decreasing all elements should be performed in all cases. 

The element, whose value you should use, is the **removed element**.

The **program ends** when **no more elements remain** in the sequence.

### Input

- On the first line, you will receive a sequence of integers, separated by spaces

- On the next several lines you will receive integers - the indexes

### Output
When the program ends, you must print the summed up value of all **REMOVED** elements.

### Example
| **Input** | **Output** |
| --- | --- |
| 4 5 3 | 14 |
| 1 | |
| 1 | |
| 0 | |

[hints]
[hint]
The array consists of \{**4, 5, 3**\}.

The index is **1**.
We remove **5**, and we increase all index numbers that are smaller than 5 and decrease all index numbers bigger than it.
In this case, there are elements less than 5.

The result is \{**9, 8**\}.
[/hint] 
[hint]
The next index is **1**. 
So we remove **8** and decrease all elements - greater.

The result is \{**1**\}.
[/hint] 
[hint]
The last index is **0**. 

So we remove **1**.
There are no elements left, so we print the sum of all removed elements:
**5 + 8 + 1 = 14**

`System.out.println(sum); // Output: 14`
[/hint] 
[/hints] 

### Example
| **Input** | **Output** |
| --- | --- |
| 5 10 6 3 5 | 31 |
| 4 | |
| 1 | |
| 1 | |
| 3 | |
| 0 | |
| 0 | |

[hints]
[hint]
The array consists of \{**5, 10, 6, 3, 5**\}.

Step 1: \{**11, 4, 9, 11**\}.
[/hint] 
[hint]
Step 2: \{**22, 15, 20, 22**\}.
[/hint] 
[hint]
Step 3: \{**7, 5, 7**\}
[/hint] 
[hint]
Step 4: \{**2, 2**\}
[/hint] 
[hint]
Step 5: \{**4, 4**\}
[/hint] 
[hint]
Step 6: \{**8**\}
[/hint] 
[hint]
Step 7: \{\} (empty)

There are no elements left, so we print the sum of all removed elements:
**6 + 11 + 15 + 5 + 2 + 4 + 8 = 51**

`System.out.println(sum); // Output: 51`
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 5 3
1
1
0

[/input]
[output]
14

[/output]
[/test]
[test open]
[input]
5 10 6 3 5
2
4
1
1
3
0
0

[/input]
[output]
51

[/output]
[/test]
[test]
[input]
1 2 3 4 5
2
0
2
1
0

[/input]
[output]
42

[/output]
[/test]
[test]
[input]
10 5 2 3 104 4 30 2 1
4
5
0
0
2
1
1
0
0

[/input]
[output]
31365

[/output]
[/test]
[test]
[input]
1 1 1 1 1
4
3
2
1
0
[/input]
[output]
31

[/output]
[/test]
[test]
[input]
4 8 15 16 23 42
0
1
3
1
0
0

[/input]
[output]
105

[/output]
[/test]
[test]
[input]
124 56 93 20 31 40 59 2 11 3 11
10
3
2
0
5
1
2
1
0
0
0

[/input]
[output]
995

[/output]
[/test]
[test]
[input]
1 2 3 4 3 2 1
3
2
2
1
1
0
0

[/input]
[output]
427

[/output]
[/test]
[test]
[input]
102 31 24 54
3
10
0
-1
0
0

[/input]
[output]
748

[/output]
[/test]
[test]
[input]
123 321
-12491287
12412831
0
0

[/input]
[output]
1509

[/output]
[/test]
[test]
[input]
1 1
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
2147483647
-2147483648
0
0

[/input]
[output]
65535

[/output]
[/test]
[test]
[input]
-2 1
1
0

[/input]
[output]
0

[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: SoftUni Course Planning
[code-task title="SoftUni Course Planning" taskId="java-fund-1-Lists-SoftUni-Course-Planning" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Help planning the next Programming Fundamentals course by keeping track of the lessons, that are going to be included in the course, as well as all the exercises for the lessons.

On the first input line, you will receive the initial schedule of lessons and exercises that are going to be part of the next course, separated by a comma and a space ", ". 

Before the course starts, there are some changes to be made. 

Until you receive the "**course start**" command, you will be given some **commands to modify the course schedule**. 

The **possible commands** are: 

- "**Add:**\{**lessonTitle**\}" - **add the lesson to the end** of the schedule, if it **does not exist**

- "**Insert:**\{**lessonTitle**\}:\{**index**\}" - **insert** the lesson to the **given index**, if it **does not exist**

- "**Remove:**\{**lessonTitle**\}" - **remove the lesson**, if it **exists**

- "**Swap:**\{**lessonTitle**\}:\{**lessonTitle**\}" - **swap the position** of the two lessons, **if they exist**

- "**Exercise:**\{**lessonTitle**\}" - **add the Exercise to the schedule right after the lesson index**, if the lesson exists and there is no exercise already, in the following format: "**- - -** \{**lessonTitle**\}**-Exercise**"
    - if the **lesson does not exist**, **add** the lesson **to the end** of the course schedule, **followed by the exercise**

Each time you **Swap or Remove a lesson,** you should **do the same with the exercises**, if there are any following the lessons.

### Example
| **Input** | **Output** |
| --- | --- |
| Data Types, Objects, Lists | 1.Arrays |
| Add:Databases | 2.Data Types |
| Insert:Arrays:0 | 3.Objects |
| Remove:Lists | 4.Databases |
| course start | |

[hints]
[hint]
We receive the initial schedule.

Next, we add the **Databases** lesson, because it does not exist:

```java
if (!schedule.contains(lessonTitle)) {
    schedule.add(lessonTitle);
}
```
[/hint] 
[hint]
We insert the **Arrays** lesson at the given index because it is not present in the schedule:

```java
if (!schedule.contains(lessonTitle)) {
    if (index >= 0 && index < schedule.size()) {
        schedule.add(index, lessonTitle);
    }
}
```
[/hint] 
[hint]
After receiving the last command and removing the Lists lesson, we print the whole schedule.

`schedule.remove(lessonTitle);`

```java
for (int i = 1; i <= schedule.size(); i++) {
    System.out.println(i + "." + schedule.get(i - 1));
}
```
[/hint] 
[/hints] 

### Example
| **Input** | **Output** |
| --- | --- |
| Arrays, Lists, Methods | 1.Methods |
| Swap:Arrays:Methods | 2.Databases |
| Exercise:Databases | 3.Databases-Exercise |
| Swap:Lists:Databases | 4.Arrays |
| Insert:Arrays:0 | 5.Lists |
| course start | |

[hints]
[hint]
We swap the given lessons because both exist:

```java
swapping(schedule, lessonTitle, swapLessonWith);
```

You can implement a custom `swapping` method.
[/hint] 
[hint]
After receiving the **Exercise** command, we see that such a lesson does not exist, so we add the lesson to the end, followed by the exercise:

```java
if (!schedule.contains(lessonTitle + "-Exercise")) {
    schedule.add(lessonTitle);
    schedule.add(lessonTitle + "-Exercise");
}
```
[/hint] 
[hint]
We swap the Lists and the **Databases** lessons, the **Databases-Exercise** is also moved after the Databases lesson:

```java
swapping(schedule, lessonTitle, swapLessonWith);
```
[/hint] 
[hint]
We skip the next command because we already have such a lesson on our schedule.
[/hint] 
[/hints] 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
Data Types, Objects, Lists
Add:Databases
Insert:Arrays:0
Remove:Lists
course start
[/input]
[output]
1.Arrays
2.Data Types
3.Objects
4.Databases
[/output]
[/test]
[test open]
[input]
Arrays, Lists, Methods
Swap:Arrays:Methods
Exercise:Databases
Swap:Lists:Databases
Insert:Arrays:0
course start
[/input]
[output]
1.Methods
2.Databases
3.Databases-Exercise
4.Arrays
5.Lists
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.dd
[/output]
[/test]
[test]
[input]
aa, dd, cc
Add:bb
course start
[/input]
[output]
1.aa
2.dd
3.cc
4.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Insert:dd:2
course start
[/input]
[output]
1.aa
2.bb
3.dd
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:bb
course start
[/input]
[output]
1.aa
2.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Remove:cc
course start
[/input]
[output]
1.aa
2.bb
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:bb
course start
[/input]
[output]
1.aa
2.bb
3.bb-Exercise
4.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Exercise:cc
Exercise:cc
Exercise:dd
course start
[/input]
[output]
1.aa
2.bb
3.cc
4.cc-Exercise
5.dd
6.dd-Exercise
[/output]
[/test]
[test]
[input]
aa, bb, cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.aa
3.cc
[/output]
[/test]
[test]
[input]
aa, bb, cc
Add:dd
Insert:dd:2
Insert:ff:1
Remove:bb
Exercise:bb
Exercise:cc
Swap:aa:bb
Swap:aa:dd
course start
[/input]
[output]
1.bb
2.bb-Exercise
3.ff
4.cc
5.cc-Exercise
6.aa
7.dd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
