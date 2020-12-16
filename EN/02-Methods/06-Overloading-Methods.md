# Overloading Methods
[slide]
# Video

[vimeo-video startTimeInSeconds="7460" endTimeInSeconds="9014"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

[/slide]
[slide]
# Method Signature

In Java, a method signature is part of the method declaration.

It's the combination of the method name and the parameter list.

```Java
public static void print(String text) {
  System.out.println(text);
}
```

Method **signature** does not include the return type of the method.

A class cannot have two methods with the same signature.

If we try to declare two methods with the same signature you will get a compile-time error.

```Java
public static void print(String text) {
  System.out.println(text);
}

public static String print(String text) {
  return text;
}
// Compile-time error!
```

# Overloading Methods

Using same name for multiple methods with different **signatures** \(method **name** and **parameters**\)

Instead of defining two methods that should do the same thing, it is better to overload one.

In the example below, we overload the `plusMethod` method to work for both `int` and `double`:

```java live no-template
public class MyClass {
 static int plusMethodInt(int x, int y) {
  return x + y;
 }

 static double plusMethodDouble(double x, double y) {
  return x + y;
 }

 public static void main(String[] args) {
  int myNum1 = plusMethodInt(8, 5);
  double myNum2 = plusMethodDouble(4.3, 6.26);

  System.out.println("int: " + myNum1);

  System.out.println("double: " + myNum2);
 }
}
```

[/slide]

[slide hideTitle]
# Problem: Greater of Two Values
[code-task title="Problem: Greater of Two Values" taskId="7922a26e-1814-4229-9172-5b3d809264c4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given two values of the same type as input.

The values can be of type **int**, **char** of **String**.

Create a method **getMax()** that returns the greater of the two values:

## Examples
|**Input**|**Output**|
| --- | --- | 
| int | 16 |
| 2 | |
| 16 | |

|**Input**|**Output**|
| --- | --- | 
| char | z |
| a | |
| z | |

|**Input**|**Output**|
| --- | --- |
| String | Todor |
| Ivan | |
| Todor | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
int
2
16
[/input]
[output]
16
[/output]
[/test]
[test]
[input]
char
a
z
[/input]
[output]
z
[/output]
[/test]
[test]
[input]
string
Ivan
Todor
[/input]
[output]
Todor
[/output]
[/test]
[test]
[input]
char
A
a
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
int
123412
123
[/input]
[output]
123412
[/output]
[/test]
[test]
[input]
string
lorem ipsum
muspi merol
[/input]
[output]
muspi merol
[/output]
[/test]
[test]
[input]
string
Soft
Uni
[/input]
[output]
Uni
[/output]
[/test]
[test]
[input]
string
Programming Fundamentals
Software Technologies
[/input]
[output]
Software Technologies
[/output]
[/test]
[test]
[input]
char
1
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
string
123
234
[/input]
[output]
234
[/output]
[/test]
[test]
[input]
int
999999
888888
[/input]
[output]
999999
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Greater of Two Values
[code-task title="Problem: Greater of Two Values" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class GreaterOfTwoValues {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String typeValues = scanner.nextLine();

        if (typeValues.equalsIgnoreCase("int")) {
            int a = Integer.parseInt(scanner.nextLine());
            int b = Integer.parseInt(scanner.nextLine());

            System.out.println(getMax(a, b));
        } else if (typeValues.equalsIgnoreCase("char")) {
            char a = scanner.nextLine().charAt(0);
            char b = scanner.nextLine().charAt(0);
            
            System.out.println(getMax(a, b));
        } else if (typeValues.equalsIgnoreCase("String")) {
            String a = scanner.nextLine();
            String b = scanner.nextLine();

            System.out.println(getMax(a, b));
        }
    }

    public static int getMax(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    public static char getMax(char a, char b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    public static String getMax(String a, String b) {
        if (a.compareTo(b) >= 0) {
            return a;
        } else {
            return b;
        }
    }
}
```
[/code-editor]
[task-description]
## Description
You are given two values of the same type as input.

The values can be of type **int**, **char** of **String**.

Create a method **getMax()** that returns the greater of the two values:

## Examples
|**Input**|**Output**|
| --- | --- |
| int | 16 |
| 2 | |
| 16 | |

|**Input**|**Output**|
| --- | --- |
| char | z |
| a | |
| z | |

|**Input**|**Output**|
| --- | --- |
| String | Todor |
| Ivan | |
| Todor | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
int
2
16
[/input]
[output]
16
[/output]
[/test]
[test]
[input]
char
a
z
[/input]
[output]
z
[/output]
[/test]
[test]
[input]
string
Ivan
Todor
[/input]
[output]
Todor
[/output]
[/test]
[test]
[input]
char
A
a
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
int
123412
123
[/input]
[output]
123412
[/output]
[/test]
[test]
[input]
string
lorem ipsum
muspi merol
[/input]
[output]
muspi merol
[/output]
[/test]
[test]
[input]
string
Soft
Uni
[/input]
[output]
Uni
[/output]
[/test]
[test]
[input]
string
Programming Fundamentals
Software Technologies
[/input]
[output]
Software Technologies
[/output]
[/test]
[test]
[input]
char
1
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
string
123
234
[/input]
[output]
234
[/output]
[/test]
[test]
[input]
int
999999
888888
[/input]
[output]
999999
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Multiply Evens by Odds
[code-task title="Problem: Multiply Evens by Odds" taskId="0421a3db-de4d-4534-aaeb-aa5cbaebec02" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads an **integer number** and **multiplies the sum of all its even digits** by **the sum of all its odd digits**:

## Examples
|**Input**|**Output**|**Comments**|
| --- | --- | --- |
| 12345 | 54 | 12345 has 2 even digits - 2 and 4. Even  |
| | | digits has sum of 6. |
| | | Also it has 3 odd digits - 1, 3 and 5.  |
| | | Odd digits has sum of 9. |
| | | Multiply 6 by 9 and you get 54. |


|**Input**|**Output**|
| --- | --- |
| -12345 | 54 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
12345
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
-12345
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
12211
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
17
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222222
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222221
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
12521234
[/input]
[output]
100
[/output]
[/test]
[test]
[input]
10000012
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-8811
[/input]
[output]
32
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Multiply Evens by Odds
[code-task title="Problem: Multiply Evens by Odds" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class MultiplyEvensByOdds {

    static int evenSum(int n){
        int sum = 0;
        while (n != 0){
            if((n % 10) % 2 == 0)
                sum += (n % 10);
            n /= 10;
        }
        return sum;
    }

    static int oddSum(int n){
        int sum = 0;
        while (n != 0){
            if((n % 10) % 2 != 0)
                sum += (n % 10);
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        System.out.println(evenSum(n) * oddSum(n));
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that reads an **integer number** and **multiplies the sum of all its even digits** by **the sum of all its odd digits**:

## Examples
|**Input**|**Output**|**Comments**|
| --- | --- | --- |
| 12345 | 54 | 12345 has 2 even digits - 2 and 4. Even  |
| | | digits has sum of 6. |
| | | Also it has 3 odd digits - 1, 3 and 5.  |
| | | Odd digits has sum of 9. |
| | | Multiply 6 by 9 and you get 54. |


|**Input**|**Output**|
| --- | --- |
| -12345 | 54 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
12345
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
-12345
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
12211
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
17
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222222
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2222221
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
12521234
[/input]
[output]
100
[/output]
[/test]
[test]
[input]
10000012
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-987654321
[/input]
[output]
500
[/output]
[/test]
[test]
[input]
-8811
[/input]
[output]
32
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
