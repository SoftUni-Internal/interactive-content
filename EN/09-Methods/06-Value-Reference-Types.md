# Value and Reference Types
[slide]
# Video

[vimeo-video startTimeInSeconds="5784" endTimeInSeconds="6540"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

[/slide]
[slide]

# Value Types

A variable of a value \(primitive data\) type contains an instance of the type and hold directly their value. 

With value types, each variable has **its own copy of the data**, and it is not possible for operations on one variable to **affect the other**.

When a value of a primitive is assigned to another variable of the same type, a copy is made.

When a primitive is passed into a method, only a copy of the primitive is passed. 

The called method does not have access to the original primitive value and therefore cannot change it. 

The called method can change the copied value.

* Primitive data types are: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`.

```Java
int i = 42; //require 4 bytes of memory
char ch = 'A'; //require 2 bytes of memory
boolean result = true; //require 1 byte of memory
```

# Reference Types

**Reference type** variables hold а reference \(pointer / memory address\) of the value itself.

When a reference type is assigned to another reference type, both will point to the same object.

When an object is passed into a method, the called method can change the contents of the object passed to it but not the address of the object.

* Reference data types are: `String`, `int[]`, `char[]`, `String[]`.

```Java
String str = "Hello";
byte[] bytes = { 1, 2, 3 };
```
## Value Types Example

```java live no-template
public class MyClass {
 public static void main(String[] args) {
   int num = 5;
   increment(num, 15);
   System.out.println(num);
}

public static void increment(int num, int value) {
   num += value;
 }
}
```

## Reference Types Example

```java live no-template
public class MyClass {
public static void main(String[] args) {
  int[] nums = { 5 };
  increment(nums, 15);
  System.out.println(nums[0]);
}

public static void increment(int[] nums, int value) {
  nums[0] += value;
 }
} 
```
[/slide]

[slide hideTitle]
# Problem: Math operations
[code-task title="Problem: Math operations" taskId="4aa29fd8-46d3-4a80-9daa-b5376cfe10a6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives **two number** and an **operator**, calculates the result and returns it.

You will be given **three lines of input**.

The first will be the first **number**, the second one will be the **operator** and the last one will be the **second number**.

The possible operators are: `/` `*` `+` `-`

## Examples
|**Input**|**Output**|
| --- | --- | 
| 5 | 25 |
| * ||
| 5 ||

|**Input**|**Output**|
| --- | --- | 
| 4 | 12 |
| + ||
| 8 ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
\*
5
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
4
+
8
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
4
/
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
\-
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
+
2
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
2
\*
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
5
+
5
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Math operations
[code-task title="Problem: Math operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class MathOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double firstNumber = Double.valueOf(sc.nextLine());
        String operator = sc.nextLine();
        double secondNumber = Double.valueOf(sc.nextLine());
        double result = 0;

        switch (operator) {
            case "+": result = sum(firstNumber, secondNumber); break;
            case "-": result = subtract(firstNumber, secondNumber); break;
            case "*": result = multiply(firstNumber, secondNumber); break;
            case "/": result = divide(firstNumber, secondNumber); break;
        }

        System.out.printf("%d", (int)result);
    }

    private static double sum(double a, double b) {
        return a + b;
    }

    private static double subtract(double a, double b) {
        return a - b;
    }

    private static double multiply(double a, double b) {
        return a * b;
    }

    private static double divide(double a, double b) {
        return a / b;
    }
}
```
[/code-editor]
[task-description]
## Description
Write a method that receives **two number** and an **operator**, calculates the result and returns it.

You will be given **three lines of input**.

The first will be the first **number**, the second one will be the **operator** and the last one will be the **second number**.

The possible operators are: `/` `*` `+` `-`

## Examples
|**Input**|**Output**|
| --- | --- | 
| 5 | 25 |
| * ||
| 5 ||

|**Input**|**Output**|
| --- | --- | 
| 4 | 12 |
| + ||
| 8 ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
\*
5
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
4
+
8
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
4
/
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
\-
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
+
2
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
2
\*
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
5
+
5
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
