[slide hideTitle]
# Problem: Padawan Equipment
[code-task title="Padawan Equipment" taskId="java-fund-02-Basic Syntax-Exercise-problem-9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Yoda is starting his newly created Jedi academy. So, he asked one master to buy the needed equipment. 

The number of items depends on how many students will sign up. 

The equipment for the Padawan contains **lightsabers, belts and robes**.

You will be given the **amount of money** he has, the **number of students** and the prices of each item. 

You have to help **calculate** if the **money** the master has is **enough** to buy all of the equipment, or how much more money he needs. 

Because the **lightsabres** sometimes **break**, he should buy **10% more**, rounded up to the next integer. Also, **every sixth belt is free**.

### Input/ Constraints
The input data should be read from the console. It will consist of exactly 5 lines:
-	The amount of money the master has – floating-point number
-	The count of students – integer
-	The price of lightsabers for a single sabre – floating-point number
-	The price of robes for a single robe – floating-point number
-	The price of belts for a single belt – floating-point number

### Output
The output should be printed on the console.
-	If the **calculated price of the equipment is less or equal to the money** the master has:
    -	"The money is enough - it would cost \{the cost of the equipment\}$."
-	If the **calculated price of the equipment is more than the money** the master has:
	- "The master will need \{neededMoney\}$ more."
-	All prices must be **rounded** to **two** digits after the decimal point.

### Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 100 | The money is enough - it would cost 13.00$. | Needed equipment for 2 padawans: |
| 2 | | 1*(3) + 2*(2) + 3*(2) = 13.00 |
| 1.0 | | 13.00 <= 100 – the money will be enough |
| 2.0 | | |
| 3.0 | | |

### Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 100 | The master will need 737.00$ more. | Needed equipment for 42 padawans: |
| 42 | | 12 * 47 + 4 * 42 + 3 * 35 = 837.00|
| 12.0 | | 837 > 100 – need 737.00$ more |
| 4.0 | | |
| 3.0 | | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
100
2
1.0
2.0
3.0
[/input]
[output]
The money is enough - it would cost 13.00$.
[/output]
[/test]
[test open]
[input]
100
42
12.0
4.0
3.0
[/input]
[output] 
The master will need 737.00$ more.
[/output]
[/test]
[test]
[input]
0.00
0
0.00
0.00
0.00
[/input]
[output]
The money is enough - it would cost 0.00$.
[/output]
[/test]
[test]
[input]
333.33
29
33.33
22.22
11.11
[/input]
[output] 
The master will need 1655.36$ more.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
