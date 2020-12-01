# Problem: Vending Machine

[slide]
# Video 

[vimeo-video]
[stream language="EN" videoId="421823528" default /]
[stream language="RO" videoId="423949738"  /]
[/video-vimeo]

[/slide]

[slide hideTitle]
# Problem: Vending Machine
[code-task title="Vending Machine" taskId="java-fund-02-Basic Syntax-Exercise-problem-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Your task is to calculate the **total price of a purchase** from a vending machine.

Until you receive "**Start**" you will be given different coins that are being inserted in the machine. 
 
You have to **sum** them in order to have the **total money inserted**. 
 
There is a problem though. Your vending machine only works with **0.1**, **0.2**, **0.5**, **1**, and **2 coins**. 
 
If someone **tries to insert some other coins** you have to **display** "Cannot accept \{money\}", where the value is **formated** to the **second** digit after the decimal point and not add it to the total money. 
 
On the next few lines until you receive **"End"** you will be **given products** to purchase. 
 
Your machine has however only **"Nuts", "Water", "Crisps", "Soda", "Coke"**. The prices are: **2.0, 0.7, 1.5, 0.8, 1.0** respectively. 
 
If the person tries to purchase a **not existing product print “Invalid product”**. 
 
Be careful that the person may **try** to **purchase** a product for which he **doesn't have money**. 
 
In that case **print "Sorry, not enough money"**. 
 
If the person purchases a product **successfully** print "Purchased \{product name\}". 
 
After the **"End"** command print the money that are left **formatted** to the **second** decimal point in the format "Change: \{money left\}".

### Example
| **Input** | **Output** |
| --- | --- |
| 1 | Cannot accept 0.60 |
| 1 | Purchased Coke |
| 0.5 | Purchased Soda |
| 0.6 | Sorry, not enough money |
| Start | Change: 0.70 |
| Coke | |
| Soda | |
| Crisps | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
1
0.5
0.6
Start
Coke
Soda
Crisps
End
[/input]
[output]
Cannot accept 0.60
Purchased Coke
Purchased Soda
Sorry, not enough money
Change: 0.70
[/output]
[/test]
[test]
[input]
1
Start
Nuts
Coke
End
[/input]
[output]
Sorry, not enough money
Purchased Coke
Change: 0.00
[/output]
[/test]
[test]
[input]
1
1
1
Start
B
X
S
End
[/input]
[output]
Invalid product
Invalid product
Invalid product
Change: 3.00
[/output]
[/test]
[test]
[input]
1
Start
Coke
End
[/input]
[output]
Purchased Coke
Change: 0.00
[/output]
[/test]
[test]
[input]
1
1
1
1
1
1
Start
Water
Soda
Coke
Nuts
Crisps
End
[/input]
[output]
Purchased Water
Purchased Soda
Purchased Coke
Purchased Nuts
Purchased Crisps
Change: 0.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
