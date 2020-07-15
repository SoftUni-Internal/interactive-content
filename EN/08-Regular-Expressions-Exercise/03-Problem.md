# Problem: Bar Income

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421818955" default /]
[stream language="RO" videoId="436029066"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Bar Income
[code-task title="Bar Income" taskId="f4d199ba-5dc2-49c6-a7ef-ea9cb9c71a6d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Calculate the profit from the products that were sold throughout the day.

**Until you receive a line** with text "end of shift" you will **be given lines of input**.

But before processing that line you have to do some **validations** first.

Each valid order should have a **customer, product, count and a price**.

A **valid**: 
- **customer's name** should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
- **product** contains any word character and must be surrounded by '<' and '>' 
- **count** is an integer, surrounded by '\|'
- **price** is any real number followed by '$'

The parts of a **valid order should appear in the order given**: **customer, product, count and a price**.

Between each **part there can be other symbols**, **except** ('\|', '$', '%' and '.')

**For each valid line print** on the console: "\{customerName\}: \{product\} - \{totalPrice\}"

When you receive "end of shift" **print the total amount of money** for the day rounded to **2 decimal places** in the following format: 
- "Total income: \{income\}".

### Example
| **Input** | **Output** |
| --- | --- |
| %George%\<Croissant\>\|2\|10.3\$ | George: Croissant - 20.60 |
| %Peter%\<Gum\>\|1\|1.3\$ | Peter: Gum - 1.30 |
| %Maria%\<Cola\>\|1\|2.4\$ | Maria: Cola - 2.40 |
| end of shift | Total income: 24.30 |

### Comments
- Each line is valid, so we print each order, calculating the total price of the product bought.
- At the end we print the total income for the day

### Example
| **Input** | **Output** |
| --- | --- |
| %InvalidName%\<Croissant\>\|2\|10.3\$ | Valid: Valid - 200.00 |
| %Peter%\<Gum\>1.3\$ | Total income: 200.00 |
| %Maria%\<Cola\>\|1\|2.4 | |
| %Valid%\<Valid\>valid\|10\|valid20\$ | |
| end of shift | |

### Comments
- On the first line, the customer name isn't valid, so we skip that line.
- The second line is missing product count.
- The third line don't have a valid price.
- And only the forth line is valid

[/task-description]
[code-io /]
[tests]
[test open]
[input]
%George%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>\|1\|1.3\$
%Maria%\<Cola\>\|1\|2.4\$
end of shift
[/input]
[output]
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
[/output]
[/test]
[test open]
[input]
%InvalidName%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>1.3\$
%Maria%\<Cola\>\|1\|2.4
%Valid%\<Valid\>valid\|10\|valid20\$
end of shift
[/input]
[output]
Valid: Valid - 200.00
Total income: 200.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%\<Product2\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product2 - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%valid\<Product3\>valid\|1\|20.80\$
end of shift
[/input]
[output]
Name: Product3 - 20.80
Total income: 20.80
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|20.50\$
end of shift
[/input]
[output]
Name: Product - 41.00
Total income: 41.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
%Name%\<Product\>\|1\|9.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Name: Product - 9.50
Total income: 30.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10.3\$
%Name%\<Pro_duct\>\|2\|10.3\$
end of shift
[/input]
[output]
Name: Product - 20.60
Name: Pro_duct - 20.60
Total income: 41.20
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|30.10\$
%Name%\<Product\>\|1.0\|10.10\$
%Name%\<Product\>\|1\|10.10
%Name%Product\|1\|10.10\$
end of shift
[/input]
[output]
Name: Product - 30.10
Total income: 30.10
[/output]
[/test]
[test]
[input]
%Name%ho\<Product\>eins\|1\|10\$
%Name%he\<Product\>zwei\|2\|10\$
%Name%hi\<Product\>drei\|3\|10\$
end of shift
[/input]
[output]
Name: Product - 10.00
Name: Product - 20.00
Name: Product - 30.00
Total income: 60.00
[/output]
[/test]
[test]
[input]
%Name%sorry for this test\<\>\<\>\<\>\<\>\<Product\>\<\>\<\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]