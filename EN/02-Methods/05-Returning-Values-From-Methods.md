# Returning Values From Methods

[slide hideTitle]
# The Return Statement

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-27-28-The-return-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `return` keyword returns a value and ends the method execution.


```java live no-template
public class MyClass {
  static int myMethod(int x) {
    return 5 + x;
  }

  public static void main(String[] args) {
    System.out.println(myMethod(3));
  }
}
```

[/slide]

[slide hideTitle]
# Using the Return Values

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-29-Using-the-return-values-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The return value can be:

- **Assigned** to a variable
```Java
int max = getMax(5, 10);
```

- **Used** in expressions
```Java
double total = getPrice() * quantity * 1.20;
```

- **Passed** in to another method
```Java
int age = Integer.parseInt(sc.nextLine());
```

[/slide]

[slide hideTitle]
# Problem with Solution: Calculate Rectangle Area

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-30-problem-and-solution-calculate-rectangle-area-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Calculate Rectangle Area" taskId="java-fund-1-Methods-lab-Calculate-Rectangle-Area" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that calculates and returns the area of a rectangle by its side width and length.

## Examples
|**Input**|**Output**|
| --- | --- |
| 3 | 12 |
| 4 |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
4
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
6
2
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
3
7
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
3
5
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
2
4
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
3
6
[/input]
[output]
18
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Repeat String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-33-problem-and-solution-repeat-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Repeat String" taskId="java-fund-1-Methods-lab-Repeat-String" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that receives a **string** and a repetition number **n** \(integer\).

The method should return a new **string**, containing the initial one, repeated **n** times.

## Examples
|**Input**|**Output**|
| --- | --- |
| abc | abcabcabc |
| 3 |  |

|**Input**|**Output**|
| --- | --- |
| String | StringString |
| 2 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
abc
3
[/input]
[output]
abcabcabc
[/output]
[/test]
[test open]
[input]
String
2
[/input]
[output]
StringString
[/output]
[/test]
[test]
[input]
ani
2
[/input]
[output]
aniani
[/output]
[/test]
[test]
[input]
ananas
3
[/input]
[output]
ananasananasananas
[/output]
[/test]
[test]
[input]
tanya
2
[/input]
[output]
tanyatanya
[/output]
[/test]
[test]
[input]
yavor
3
[/input]
[output]
yavoryavoryavor
[/output]
[/test]
[test]
[input]
ivan
2
[/input]
[output]
ivanivan
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Math Power
[code-task title="Math Power" taskId="java-fund-1-Methods-lab-Math-Power" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.text.DecimalFormat;
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
Create a method that calculates and returns the value of a number raised to a given power.

## Examples
|**Input**|**Output**|
| --- | --- |
| 2 | 256 |
| 8 |  |

|**Input**|**Output**|
| --- | --- |
| 5.5 | 166.375 |
| 3 |  |

[hints] 
[hint] 
Use **BigDecimal**.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
8
[/input]
[output]
256
[/output]
[/test]
[test open]
[input]
5.5
3

[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
7
2
[/input]
[output]
49
[/output]
[/test]
[test]
[input]
123
3
[/input]
[output]
1860867
[/output]
[/test]
[test]
[input]
5.5
3
[/input]
[output]
166.375
[/output]
[/test]
[test]
[input]
21
10
[/input]
[output]
16679880978201
[/output]
[/test]
[test]
[input]
10
7
[/input]
[output]
10000000
[/output]
[/test]
[test]
[input]
12
3
[/input]
[output]
1728
[/output]
[/test]
[test]
[input]
2
3
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
3
2
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
4
4
[/input]
[output]
256
[/output]
[/test]
[test]
[input]
4.4
4
[/input]
[output]
374.8096
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Orders

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/EN/interactive-java-fundamentals-methods-problem-and-solution-orders-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Orders" taskId="java-fund-1-Methods-lab-Orders" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that calculates the total price of an order and prints it to the console.

The method should receive one of the **following products**: coffee, coke, water, snacks; and of the quantity of the product.

The prices for a single item of each product are:

|**Product**|**Price**|
| --- | --- |
| coffee | 1.50 |
| water | 1.00 |
| coke | 1.40 |
| snacks | 2.00 |


Print the result rounded to the second decimal place.

## Examples
|**Input**|**Output**|
| --- | --- |
| water | 5.00 |
| 5 | |

|**Input**|**Output**|
| --- | --- |
| coffee | 2.00 |
| 2 | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
water
5
[/input]
[output]
5.00
[/output]
[/test]
[test open]
[input]
coffee
2
[/input]
[output]
3.00
[/output]
[/test]
[test]
[input]
snacks
3
[/input]
[output]
6.00
[/output]
[/test]
[test]
[input]
water
4
[/input]
[output]
4.00
[/output]
[/test]
[test]
[input]
coke
2
[/input]
[output]
2.80
[/output]
[/test]
[test]
[input]
coffee
1
[/input]
[output]
1.50
[/output]
[/test]
[test]
[input]
water
1
[/input]
[output]
1.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
