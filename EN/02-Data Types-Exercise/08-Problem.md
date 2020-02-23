[slide]
# Problem: Beer Kegs
[code-task title="Beer Kegs" taskId="JF-02-08" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which **calculates the volume** of **n** beer kegs. 

You will **receive** in total **3 * n lines**.

Each **three lines** will hold information for a **single keg**. 

**First** up is the **model** of the keg, **after that** is the **radius** (a floating-point numeber) of the keg, and **lastly** is the **height** of the keg.

Calculate the **volume** using the following formula: **π * r^2 * h**. 

At the end, **print the model of the biggest keg**.

## Example
### Input
2

Smaller Keg

2.41

10

Bigger Keg

5.12

20


### Output
Bigger Keg

[/task-description]
[code-io /]
[tests]
[test]
[input]
3
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
2
Smaller Keg
2.41
10
Bigger Keg
5.12
20
[/input]
[output]
Bigger Keg
[/output]
[/test]
[test]
[input]
3
Keg 1
15
15
Keg 2
20
10
Keg 3
10
20
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
5
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
Keg 4
213213.123
1234124124
Keg 5
1236.345534
21321124
[/input]
[output]
Keg 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]