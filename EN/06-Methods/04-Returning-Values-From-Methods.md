# Returning Values From Methods
[slide]
# Video

[vimeo-video startTimeInSeconds="4537" endTimeInSeconds="5783"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

[/slide]
[slide]
# The Return Statement

The `return` keyword finishes the execution of a method, and can be used to return a value from a method.

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
# Using the Return Values

Return value can be:

* **Assigned** to a variable
```Java
int max = getMax(5, 10);
```

* **Used** in expression
```Java
double total = getPrice() * quantity * 1.20;
```

* **Passed** to another method
```Java
int age = Integer.parseInt(sc.nextLine());
```

[/slide]


[slide hideTitle]
# Problem: Calculate Rectangle Area
[code-task title="Problem: Calculate Rectangle Area" taskId="318ace21-8a03-41a6-b537-8809e4aa23ac" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that calculates and returns the area of a triangle by given width and length:

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
# Solution: Calculate Rectangle Area
[code-task title="Problem: Calculate Rectangle Area" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());

        PrintArea(width, length);
    }

    private static void PrintArea(int width, int length) {

        System.out.println(width * length);
    }
}
```
[/code-editor]
[task-description]
## Description
Create a method that calculates and returns the area of a triangle by given width and length:

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
# Problem: Repeat String
[code-task title="Problem: Repeat String" taskId="e39e24a2-f942-4855-822d-1601ba84f8ce" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives a string and a repeat count n \(integer\).

The method should return a new string \(the old one repeated n times\).

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
# Solution: Repeat String
[code-task title="Problem: Repeat String" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();
        int n = Integer.parseInt(scanner.nextLine());

        Print(text, n);
    }

    private static void Print(String text, int n) {

        for (int i = 0; i < n; i++) {

            System.out.print(text);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a method that receives a string and a repeat count n \(integer\).

The method should return a new string \(the old one repeated n times\).

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
# Problem: Math Power
[code-task title="Problem: Math Power" taskId="856a60c4-b014-4717-80d8-fb79c0c2f82e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that calculates and returns the value of a number raised to a given power:

## Examples
|**Input**|**Output**|
| --- | --- |
| 2 | 256 |
| 9 |  |

|**Input**|**Output**|
| --- | --- |
| 5.5 | 166.375 |
| 3 |  |

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
# Solution: Math Power
[code-task title="Problem: Math Power" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.text.DecimalFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double number = Double.parseDouble(scanner.nextLine());
        int power = Integer.parseInt(scanner.nextLine());
        double result = Power(number, power);

        DecimalFormat fm = new DecimalFormat("###.######");

        System.out.println(fm.format(result));
    }


    private static double Power(double number, int power) {

        double result = 0d;

        result = Math.pow(number, power);
        return result;

    }
}
```
[/code-editor]
[task-description]
## Description
Create a method that calculates and returns the value of a number raised to a given power:

## Examples
|**Input**|**Output**|
| --- | --- |
| 2 | 256 |
| 9 |  |

|**Input**|**Output**|
| --- | --- |
| 5.5 | 166.375 |
| 3 |  |

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
# Problem: Orders
[code-task title="Problem: Orders" taskId="dbdac507-68fa-4b8c-a455-bd9146e433ad" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that calculates the total price of an order and prints it on the console.

The method should receive one of the **following products**: coffee, coke, water, snacks; and a quantity of the product.

The prices for a single piece of each product are:

* coffee - 1.50
* water - 1.00
* coke - 1.40
* snacks - 2.00

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

[slide hideTitle]
# Solution: Orders
[code-task title="Problem: Orders" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Orders {

    static void order(String product, int quantity){
        switch (product){
            case "coffee":
                System.out.printf("%.2f", quantity * 1.5);
                break;
            case "water":
                System.out.printf("%.2f", (double)quantity);
                break;
            case "coke":
                System.out.printf("%.2f", quantity * 1.4);
                break;
            default:
                System.out.printf("%.2f", (double)quantity * 2);
                break;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        int quantity = Integer.parseInt(scanner.nextLine());
        order(product,quantity);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a method that calculates the total price of an order and prints it on the console.

The method should receive one of the **following products**: coffee, coke, water, snacks; and a quantity of the product.

The prices for a single piece of each product are:

* coffee - 1.50
* water - 1.00
* coke - 1.40
* snacks - 2.00

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
