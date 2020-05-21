# Methods with Parameters

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# Method Parameters
Information can be **passed** to methods as parameter. 

Parameters act as **variables** inside the method.

Parameters are specified after the method name, **inside the parentheses**.

You can add as **many** parameters as you want, just **separate** them with a comma.

The following example has a method that takes a `String` called `firstName` as a parameter.

When the method is called, we pass along a first name, which is used inside the method to print the full name:

```Java live
public class MyClass {
  static void myMethod(String firstName) {
    System.out.println(firstName + " Refsnes");
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
```

You can pass zero or several parameters.

You can pass parameters of different types.

Each parameter has a name and a type.

```Java
public static void printStudent(String name, int age, double grade) {
    System.out.printf("Student: %s; Age: %d, Grade: %.2f\n",
        name, age, grade);
}
```

[/slide]

[slide]
# Problem: Sign of Integer
[code-task title="Sign of Integer" taskId="9aabcc93-1248-412f-ae2c-02386c9b669f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method that prints the sign of an integer number.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | The number 2 is positive. |
|  |  |

| **Input** | **Output** |
| --- | --- |
| -5 | The number -5 is negative. |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 0 | The number 0 is zero. |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
The number 2 is positive.
[/output]
[/test]
[test]
[input]
-5
[/input]
[output]
The number -5 is negative.
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
The number 0 is zero.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Sign of Integer
[code-task title="Sign of Integer" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class _01_SignOfIntegerNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());

        printNumber(num);
    }
    private static void printNumber (int num) {
        if (num < 0) {
            System.out.println("The number " + num + " is negative.");
        } else if (num == 0) {
            System.out.println("The number " + num + " is zero.");
        } else {
            System.out.println("The number " + num + " is positive.");
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Create a method that prints the sign of an integer number.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | The number 2 is positive. |
|  |  |

| **Input** | **Output** |
| --- | --- |
| -5 | The number -5 is negative. |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 0 | The number 0 is zero. |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
The number 2 is positive.
[/output]
[/test]
[test]
[input]
-5
[/input]
[output]
The number -5 is negative.
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
The number 0 is zero.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Grades
[code-task title="Grades" taskId="cbd5b4a2-597f-4f1b-b1d6-7bae5e055a29" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method **that receives** a grade between **2.00** and **6.00** and **prints the corresponding grade in words**:

* 2.00 – 2.99 - "Fail"
* 3.00 – 3.49 - "Poor"
* 3.50 – 4.49 - "Good"
* 4.50 – 5.49 - "Very good"
* 5.50 – 6.00 - "Excellent"

## Examples
| **Input** | **Output** |
| --- | --- |
| 3.33 | Poor |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4.50 | Very good |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2.99 | Fail |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3.33
[/input]
[output]
Poor
[/output]
[/test]
[test open]
[input]
4.50
[/input]
[output]
Very good
[/output]
[/test]
[test open]
[input]
2.99
[/input]
[output]
Fail
[/output]
[/test]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Grades
[code-task title="Grades" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        printGrade(Double.parseDouble(scan.nextLine()));
    }

    public static void printGrade(double grade) {
        if (grade >= 5.50) {
            System.out.println("Excellent");
        } else if (grade >= 4.50) {
            System.out.println("Very good");
        } else if (grade >= 3.50) {
            System.out.println("Good");
        } else if (grade >= 3.0) {
            System.out.println("Poor");
        } else {
            System.out.println("Fail");
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a method **that receives** a grade between **2.00** and **6.00** and **prints the corresponding grade in words**:

* 2.00 – 2.99 - "Fail"
* 3.00 – 3.49 - "Poor"
* 3.50 – 4.49 - "Good"
* 4.50 – 5.49 - "Very good"
* 5.50 – 6.00 - "Excellent"

## Examples
| **Input** | **Output** |
| --- | --- |
| 3.33 | Poor |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4.50 | Very good |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 2.99 | Fail |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3.33
[/input]
[output]
Poor
[/output]
[/test]
[test open]
[input]
4.50
[/input]
[output]
Very good
[/output]
[/test]
[test open]
[input]
2.99
[/input]
[output]
Fail
[/output]
[/test]
[test]
[input]
4.49
[/input]
[output]
Good
[/output]
[/test]
[test]
[input]
5.50
[/input]
[output]
Excellent
[/output]
[/test]
[test]
[input]
4.60
[/input]
[output]
Very good
[/output]
[/test]
[test]
[input]
3.20
[/input]
[output]
Poor
[/output]
[/test]
[test]
[input]
2.00
[/input]
[output]
Fail
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Printing Triangle
[code-task title="Printing Triangle" taskId="ac93703d-752e-4fd7-bfb6-63cdb3f805c4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a method for printing triangles as shown below:

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | 1 |
|  | 1 2 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4 | 1 |
|  | 1 2 |
|  | 1 2 3  |
|  | 1 2 3 4 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
1
1 2
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1
1 2
1 2 3 
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
22
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Printing Triangle
[code-task title="Printing Triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void printTriangle(int length) {
        for (int row = 1; row <= length; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
        for (int row = length - 1; row >= 1; row--) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int length = Integer.parseInt(input.nextLine());
        printTriangle(length);
    }
}
```
[/code-editor]
[task-description]
## Description
Create a method for printing triangles as shown below:

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | 1 |
|  | 1 2 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 4 | 1 |
|  | 1 2 |
|  | 1 2 3  |
|  | 1 2 3 4 |
|  | 1 2 3 |
|  | 1 2 |
|  | 1 |
|  |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
1
1 2
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1
1 2
1 2 3 
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
22
[/input]
[output]
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1 2 3 4 5 6 7 8 9 10 11 12 13 14
1 2 3 4 5 6 7 8 9 10 11 12 13
1 2 3 4 5 6 7 8 9 10 11 12
1 2 3 4 5 6 7 8 9 10 11
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Calculations
[code-task title="Calculations" taskId="ac6e4009-2cbc-42aa-938b-12254d45cb8b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that receives a **string** on the first line \(add, multiply, subtract, divide\) and on the next two lines receives **two numbers**.

Create four **methods** \(for each calculation\) and invoke the right one depending on the command.

The method should also print the result \(needs to be void\)

## Examples
| **Input** | **Output** |
| --- | --- |
| subtract | 1 |
| 5 |  |
| 4 |  |

| **Input** | **Output** |
| --- | --- |
| divide | 2 |
| 8 |  |
| 4 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
subtract
5
4
[/input]
[output]
1
[/output]
[/test]
[test open]
[input]
divide
8
4
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
add
1
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
multiply
2
4
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
divide
6
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
add
5
4
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
multiply
3
2
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Calculations
[code-task title="Calculations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Calculations {

    static void add(int a, int b){
        System.out.println(a + b);
    }

    static void subtract(int a, int b){
        System.out.println(a - b);
    }

    static void multiply(int a, int b){
        System.out.println(a * b);
    }

    static void devide(int a, int b){
        System.out.println(a / b);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String operation = scanner.nextLine();
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        switch (operation){
            case "add":
                add(a,b);
                break;
            case "multiply":
                multiply(a,b);
                break;
            case "divide":
                devide(a,b);
                break;
            default:subtract(a,b);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that receives a **string** on the first line \(add, multiply, subtract, divide\) and on the next two lines receives **two numbers**.

Create four **methods** \(for each calculation\) and invoke the right one depending on the command.

The method should also print the result \(needs to be void\)

## Examples
| **Input** | **Output** |
| --- | --- |
| subtract | 1 |
| 5 |  |
| 4 |  |

| **Input** | **Output** |
| --- | --- |
| divide | 2 |
| 8 |  |
| 4 |  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
subtract
5
4
[/input]
[output]
1
[/output]
[/test]
[test open]
[input]
divide
8
4
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
add
1
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
multiply
2
4
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
divide
6
2
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
add
5
4
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
multiply
3
2
[/input]
[output]
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

