[slide]
# Array Manipulator
[code-task title="Array Manipulator" taskId="java-fundamentals-methods-11" executionType="tests-execution" executionStrategy="java-code"]
[code-editor language=java requiresInput]
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
The array may be manipulated by one of the following **commands**:
- **exchange** \{index\} – **splits the array** after the given index, and **exchanges the places of the two resulting sub-arrays**. E.g. \[1, 2, 3, 4, 5\] -> exchange 2 -> result: \[4, 5, 1, 2, 3\]
    - If the index is **outside the boundaries** of the array, print "Invalid index"
- **max even/odd** – returns the **index** of the max even/odd element -> \[1, 4, 8, 2, 3\] -> max odd -> print 4
- **min even/odd** – returns the **index** of the min even/odd element -> \[1, 4, 8, 2, 3\] -> min even -> print 3
    - If there are **two or more equal min/max elements**, return the index of the **rightmost one**
    - If a min/max even/odd element cannot be found, print "No matches"
- first \{count\} even/odd– returns the first \{count\} elements -> \[1, 8, 2, 3\] -> first 2 even -> print \[8, 2\]
- last \{count\} even/odd – returns the last \{count\} elements -> \[1, 8, 2, 3\] -> last 2 odd -> print \[1, 3\]
    - If the count is **greater than the array length**, print "Invalid count"
    - If there are **not enough elements** to satisfy the count, print as many as you can. If there are **zero even/odd** elements, print an empty array \[\]
- end – stop taking input and print the final state of the array

### Input
- The input data should be read from the console.
- On the first line, the **initial array** is received as a **line of integers**, separated by a **single space**.
- On the next lines, until the command "end" is received, you will receive the **array manipulation commands**.

### Output
- The output should be printed on the console.
- On a separate line, print the output of the corresponding command.
- On the last line, **print the final array** in **square brackets** with its **elements** separated by a **comma** and a **space**.
- See the examples below to get a better understanding of your task.

### Example
| **Input** | **Output** |
| --- | --- |
| 1 3 5 7 9 | 2 |
| exchange 1 | No matches |
| max odd | [5, 7] |
| min even | [] |
| first 2 odd | [3, 5, 7, 9, 1] |
| last 2 even | |
| exchange 3 | |
| end | |

### Example
| **Input** | **Output** |
| --- | --- |
| 1 10 100 1000 | 3 |
| max even | Invalid count |
| first 5 even | Invalid index |
| exchange 10 | 0 |
| min odd | 2 |
| exchange 0 | 0 |
| max even | [10, 100, 1000, 1] |
| min even | |
| end | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1 3 5 7 9
exchange 1
max odd
min even
first 2 odd
last 2 even
exchange 3
end
[/input]
[output]
2
No matches
[5, 7]
[]
[3, 5, 7, 9, 1]
[/output]
[/test]
[test]
[input]
1 10 100 1000
max even
first 5 even
exchange 10
min odd
exchange 0
max even
min even
end
[/input]
[output]
3
Invalid count
Invalid index
0
2
0
[10, 100, 1000, 1]
[/output]
[/test]
[test]
[input]
1 10 100 1000
exchange 3
first 2 odd
last 4 odd
end
[/input]
[output]
[1]
[1]
[1, 10, 100, 1000]
[/output]
[/test]
[test]
[input]
0 0 0 5 0 0 5
min even
max odd
exchange 6
min even
max odd
first 1 even
last 5 odd
end
[/input]
[output]
5
6
5
6
[0]
[5, 5]
[0, 0, 0, 5, 0, 0, 5]
[/output]
[/test]
[test]
[input]
17 16 15 14 13 12 11
max even
min odd
first 3 even
exchange 2
first 3 odd
exchange 2
first 3 odd
last 3 odd
max odd
end
[/input]
[output]
1
6
[16, 14, 12]
[13, 11, 17]
[11, 17, 15]
[17, 15, 13]
1
[11, 17, 16, 15, 14, 13, 12]
[/output]
[/test]
[test]
[input]
15
exchange 0
exchange 1
exchange -1
min even
max odd
first 1 even
last 1 odd
first 2 odd
last 2 even
end
[/input]
[output]
Invalid index
Invalid index
No matches
0
[]
[15]
Invalid count
Invalid count
[15]
[/output]
[/test]
[test]
[input]
1 1 1 1 1
first 3 odd
last 2 even
min even
max odd
end
[/input]
[output]
[1, 1, 1]
[]
No matches
4
[1, 1, 1, 1, 1]
[/output]
[/test]
[test]
[input]
1 1 1 2 2 2
min even
max odd
exchange 2
min even
max odd
first 4 odd
last 4 even
first 8 even
end
[/input]
[output]
5
2
2
5
[1, 1, 1]
[2, 2, 2]
Invalid count
[2, 2, 2, 1, 1, 1]
[/output]
[/test]
[test]
[input]
1 2 3 4 5
exchange 10
exchange -1
first 8 even
last 12 odd
end
[/input]
[output]
Invalid index
Invalid index
Invalid count
Invalid count
[1, 2, 3, 4, 5]
[/output]
[/test]
[test]
[input]
176 188 191 188 19
first 3 odd
exchange 2
first 3 odd
max odd
max even
end
[/input]
[output]
[191, 19]
[19, 191]
4
3
[188, 19, 176, 188, 191]
[/output]
[/test]
[test]
[input]
1 0 0 1
min odd
max even
exchange 1
min odd
max even
exchange 1
min even
max odd
exchange 1
first 2 even
last 2 odd
end
[/input]
[output]
3
2
2
3
2
3
[0, 0]
[1, 1]
[0, 1, 1, 0]
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
first 25 even
last 25 odd
min even
max even
exchange 24
first 25 even
last 25 odd
min even
max even
end
[/input]
[output]
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
1
49
[26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
[27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]
26
24
[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
[/output]
[/test]
[test]
[input]
10
min even
max even
exchange 0
exchange 1
exchange -1
first 1 even
first 2 even
last 1 odd
last 2 odd
end
[/input]
[output]
0
0
Invalid index
Invalid index
[10]
Invalid count
[]
Invalid count
[10]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]