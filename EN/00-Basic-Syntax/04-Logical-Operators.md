# Logical Operators

[slide]
# Video

[vimeo-video startTimeInSeconds="5726" endTimeInSeconds="6676"]
[stream language="EN" videoId="421764903" default /]
[stream language="RO" videoId="422795597"  /]
[/vimeo-video]

[/slide]

[slide]
# Logical Operators
Logical operators give us the ability to write multiple conditions in one `if` statement.

They return a boolean value and compare boolean values.

| Operator | Notation in Java | Example |
|---|---|---|
| Logical NOT| `!` | !false -> true |
| Logical AND | `&&` | true `&&` false -> false | 
| Logical OR | `||` | true `||` false -> true | 

* **Logical NOT**
```java live
int x = 5;
System.out.println(!(x > 3 && x < 10)); 
```
In that example the result is false because ! (not) is used to reverse the result.

* **Logical AND**
```java live
int x = 5;
System.out.println(x > 3 && x < 10); 
```
In that example the result is true because 5 is greater than 3 AND 5 is less than 10.

* **Logical OR**
```java live
int x = 5;
System.out.println(x > 3 || x < 4); 
```
In that example the result is true because one of the conditions is true (5 is greater than 3, but 5 is not less than 4).

If both conditions were false, then the result would be false.

[/slide]

[slide hideTitle]
# Problem Theatre Promotions
[code-task title="Theatre Promotions" taskId="java-fund-01-Basic-Syntax-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A theatre is **doing a ticket sale**, but they need a program to calculate the price of a single ticket.

If the given age does not fit one of the categories, you should print `Error!`.

You can see the prices in the table below:

| Day/Age | 0 <= age <= 18 | 18 < age <= 64 | 64 < age <= 122 |
|---|---|---|---|
| Weekday | $12 | $18 | $12 |
| Weekend | $15 | $20 | $15 |
| Holiday | $5 | $12 | $10 |

## Examples
|Input|Output|
|-----|------|
| Weekday | $18 |
| 42 | |


|Input|Output|
|-----|------|
| Holiday | Error! |
| -12 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Weekday
42
[/input]
[output]
18$
[/output]
[/test]
[test open]
[input]
Holiday
-12
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Holiday
15
[/input]
[output]
5$
[/output]
[/test]
[test]
[input]
Weekend
122
[/input]
[output]
15$
[/output]
[/test]
[test]
[input]
Holiday
18
[/input]
[output]
5$
[/output]
[/test]
[test]
[input]
Weekday
32
[/input]
[output]
18$
[/output]
[/test]
[test]
[input]
Holiday
65
[/input]
[output]
10$
[/output]
[/test]
[test]
[input]
Holiday
122
[/input]
[output]
10$
[/output]
[/test]
[test]
[input]
Weekend
64
[/input]
[output]
20$
[/output]
[/test]
[test]
[input]
Weekday
0
[/input]
[output]
12$
[/output]
[/test]
[test]
[input]
Weekend
18
[/input]
[output]
15$
[/output]
[/test]
[test]
[input]
Weekend
-18
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Weekend
123
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Holiday
19
[/input]
[output]
12$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution Theatre Promotions
[code-task title="Theatre Promotions" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String typeOfDay = scanner.nextLine();
        int age = scanner.nextInt();
        int price = 0;

        switch (typeOfDay) {
            case "Weekday":
                if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                    price = 12;
                } else if (age > 18 && age < 65) {
                    price = 18;
                }
                break;
            case "Weekend":
                if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                    price = 15;
                } else if (age > 18 && age < 65) {
                    price = 20;
                }
                break;
            case "Holiday":
                if (age >= 0 && age <= 18) {
                    price = 5;
                } else if (age > 18 && age < 65) {
                    price = 12;
                } else if (age > 64 && age < 123) {
                    price = 10;
                }
                break;
        }

        if (price == 0) {
            System.out.println("Error!");
        } else {
            System.out.println(price + "$");
        }
    }
}
```
[/code-editor]
[task-description]
## Description
A theatre is **doing a ticket sale**, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print `Error!`.  You can see the prices in the table below:

| Day/Age | 0 <= age <= 18 | 18 < age <= 64 | 64 < age <= 122 |
|---|---|---|---|
| Weekday | $12 | $18 | $12 |
| Weekend | $15 | $20 | $15 |
| Holiday | $5 | $12 | $10 |

## Examples
|Input|Output|
|-----|------|
| Weekday | $18 |
| 42 |  |


|Input|Output|
|-----|------|
| Holiday | Error! |
| -12 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Weekday
42
[/input]
[output]
18$
[/output]
[/test]
[test open]
[input]
Holiday
-12
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Holiday
15
[/input]
[output]
5$
[/output]
[/test]
[test]
[input]
Weekend
122
[/input]
[output]
15$
[/output]
[/test]
[test]
[input]
Holiday
18
[/input]
[output]
5$
[/output]
[/test]
[test]
[input]
Weekday
32
[/input]
[output]
18$
[/output]
[/test]
[test]
[input]
Holiday
65
[/input]
[output]
10$
[/output]
[/test]
[test]
[input]
Holiday
122
[/input]
[output]
10$
[/output]
[/test]
[test]
[input]
Weekend
64
[/input]
[output]
20$
[/output]
[/test]
[test]
[input]
Weekday
0
[/input]
[output]
12$
[/output]
[/test]
[test]
[input]
Weekend
18
[/input]
[output]
15$
[/output]
[/test]
[test]
[input]
Weekend
-18
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Weekend
123
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
Holiday
19
[/input]
[output]
12$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]