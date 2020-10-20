# Stack - Last In First Out - LIFO

[slide]
# Stack Functionality

A Stack is a data structure where you add elements to the **top** of the stack, and also remove elements from the **top** again.
This is also referred to as the "Last In First Out" - **LIFO** principle. 

- Stacks provide the following functionality:
    - Pushing an element at the top of the stack
    - Popping element from the top of the stack
    - Getting(**Peek**) the topmost element without removing it

[image assetsSrc="stacksAndQueues-example(1).png" /]

[/slide]

[slide]
# Stack Implementation and Built-In Methods

- Stack Implementation using `ArrayDeque<E>`
```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```

- `push(element)` - adding elements at the top of the stack
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

stack.forEach(System.out::println);
```

- `pop()` - removing the topmost element
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// remove 
stack.pop();

stack.forEach(System.out::println);
```

- `peek()` - getting the value of the topmost element
```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// get 
Integer element = stack.peek();

System.out.println(element);
```
# Utility Methods

- `size()` - returns the number of elements in deque

- `isEmpty()` - checks whether the deque is empty or not

- `contains()` - checks whether a deque contains the element or not

[/slide]

[slide hideTitle]
# Problem: Browser History
[code-task title="Browser History" taskId="f1c2adae-8f12-4f70-94b4-2df7b1453714" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program which takes 2 types of browser instructions:
- Normal navigation: a URL is set, given by a string
- The string "**back**" that sets the current URL to the last set URL

After each instruction the program should **print the current URL**. 
If the **back** instruction can’t be executed, print "**no previous URLs**".
The input **ends** with "**Home**" command, then simply you have to **stop the program**.


## Examples
| **Input** | **Output** |
| --- | --- |
| https//softuni.org/ | https//softuni.org/ |
| back | no previous URLs |
| https//softuni.org/trainings/courses | https//softuni.org/trainings/courses |
| back | https//softuni.org/ |
| https//softuni.org/trainings/2056 | https//softuni.org/trainings/2056 |
| back | https//softuni.org/ |
| https//softuni.org/trainings/live | https//softuni.org/trainings/live |
| https//softuni.org/trainings/live/details | https//softuni.org/trainings/live/details |
| Home |  |

## Hints
- Use `ArrayDeque<>`
- Use `String` to keep current page
- Use `push()`, when moving to next page
- Use `pop()`, when going back



[/task-description]
[code-io /]
[tests]
[test open]
[input]
https//softuni.org/
back
https//softuni.org/trainings/courses
back
https//softuni.org/trainings/2056
back
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
Home
[/input]
[output]
https//softuni.org/
no previous URLs
https//softuni.org/trainings/courses
https//softuni.org/
https//softuni.org/trainings/2056
https//softuni.org/
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
[/output]
[/test]
[test]
[input]
a
b
c
d
e
back
back
back
back
back
back
back
back
Home
[/input]
[output]
a
b
c
d
e
d
c
b
a
no previous URLs
no previous URLs
no previous URLs
no previous URLs
[/output]
[/test]
[test]
[input]
back
back
A
b
c
d
Home
[/input]
[output]
no previous URLs
no previous URLs
A
b
c
d
[/output]
[/test]
[test]
[input]
A
A
A
A
A
A
A
back
back
back
back
Home
[/input]
[output]
A
A
A
A
A
A
A
A
A
A
A
[/output]
[/test]
[test]
[input]
back
back
A
Go
To
Somewhere
Then
Get
back
back
back
And
Finally
Go
Home
[/input]
[output]
no previous URLs
no previous URLs
A
Go
To
Somewhere
Then
Get
Then
Somewhere
To
And
Finally
Go
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Solution: Browser History
[code-task title="Browser History"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<String> browser = new ArrayDeque<>();
        String line = scanner.nextLine();

        String current = "";
        while (!line.equals("Home")) {
            if (line.equals("back")) {
                if (!browser.isEmpty()) {
                    current = browser.pop();
                } else {
                    System.out.println("no previous URLs");
                    line = scanner.nextLine();
                    continue;
                }
            } else {
                if (!current.equals("")) {
                    browser.push(current);
                }
                current = line;
            }
            System.out.println(current);
            line = scanner.nextLine();
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program which takes 2 types of browser instructions:
- Normal navigation: a URL is set, given by a string
- The string "**back**" that sets the current URL to the last set URL

After each instruction the program should **print the current URL**. 
If the **back** instruction can’t be executed, print "**no previous URLs**".
The input **ends** with "**Home**" command, then simply you have to **stop the program**.


## Examples
| **Input** | **Output** |
| --- | --- |
| https//softuni.org/ | https//softuni.org/ |
| back | no previous URLs |
| https//softuni.org/trainings/courses | https//softuni.org/trainings/courses |
| back | https//softuni.org/ |
| https//softuni.org/trainings/2056 | https//softuni.org/trainings/2056 |
| back | https//softuni.org/ |
| https//softuni.org/trainings/live | https//softuni.org/trainings/live |
| https//softuni.org/trainings/live/details | https//softuni.org/trainings/live/details |
| Home |  |

## Hints
- Use `ArrayDeque<>`
- Use `String` to keep current page
- Use `push()`, when moving to next page
- Use `pop()`, when going back



[/task-description]
[code-io /]
[tests]
[test open]
[input]
https//softuni.org/
back
https//softuni.org/trainings/courses
back
https//softuni.org/trainings/2056
back
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
Home
[/input]
[output]
https//softuni.org/
no previous URLs
https//softuni.org/trainings/courses
https//softuni.org/
https//softuni.org/trainings/2056
https//softuni.org/
https//softuni.org/trainings/live
https//softuni.org/trainings/live/details
[/output]
[/test]
[test]
[input]
a
b
c
d
e
back
back
back
back
back
back
back
back
Home
[/input]
[output]
a
b
c
d
e
d
c
b
a
no previous URLs
no previous URLs
no previous URLs
no previous URLs
[/output]
[/test]
[test]
[input]
back
back
A
b
c
d
Home
[/input]
[output]
no previous URLs
no previous URLs
A
b
c
d
[/output]
[/test]
[test]
[input]
A
A
A
A
A
A
A
back
back
back
back
Home
[/input]
[output]
A
A
A
A
A
A
A
A
A
A
A
[/output]
[/test]
[test]
[input]
back
back
A
Go
To
Somewhere
Then
Get
back
back
back
And
Finally
Go
Home
[/input]
[output]
no previous URLs
no previous URLs
A
Go
To
Somewhere
Then
Get
Then
Somewhere
To
And
Finally
Go
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Simple Calculator 
[code-task title="Simple Calculator " taskId="3c41a4c0-ac7a-4de0-aeb7-7188ce402388" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
**Create a simple calculator** that can **evaluate simple expressions** that will not hold any operator different from addition and subtraction.

There will not be parentheses or operator precedence.

Solve the problem **using a Stack**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 + 5 + 10 - 2 - 1 | 14 |

| **Input** | **Output** |
| --- | --- |
| 2 - 2 + 5 | 5 |

## Hints
- Use an `ArrayDeque<>`
- Consider using the `add()` method
- You can either 
    - add the elements and then pop them out 
    - or push them and reverse the stack


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 + 5 + 10 - 2 - 1
[/input]
[output]
14
[/output]
[/test]
[test open]
[input]
2 - 2 + 5
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
3 - 2 + 7 + 123 - 22 - 12 - 55 + 120
[/input]
[output]
162
[/output]
[/test]
[test]
[input]
99 - 99
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
0 + 0 + 0 + 0 - 0 - 0 + 0 - 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2123412 - 123123 + 12312 - 12312
[/input]
[output]
2000289
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Simple Calculator 
[code-task title="Simple Calculator " executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] tokens = scanner.nextLine().split("\\s+");

        Deque<String> stack = new ArrayDeque<>();
        Collections.addAll(stack, tokens);

        while (stack.size() > 1) {
            int first = Integer.parseInt(stack.pop());
            String op = stack.pop();
            int second = Integer.parseInt(stack.pop());

            switch (op) {
                case "+":
                    stack.push(String.valueOf(first + second));
                    break;
                case "-":
                    stack.push(String.valueOf(first - second));
                    break;
            }
        }
           System.out.println(stack.pop());
    }
}
```
[/code-editor]
[task-description]
## Description
**Create a simple calculator** that can **evaluate simple expressions** that will not hold any operator different from addition and subtraction.

There will not be parentheses or operator precedence.

Solve the problem **using a Stack**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 + 5 + 10 - 2 - 1 | 14 |

| **Input** | **Output** |
| --- | --- |
| 2 - 2 + 5 | 5 |

## Hints
- Use an `ArrayDeque<>`
- Consider using the `add()` method
- You can either 
    - add the elements and then pop them out 
    - or push them and reverse the stack


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 + 5 + 10 - 2 - 1
[/input]
[output]
14
[/output]
[/test]
[test open]
[input]
2 - 2 + 5
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
3 - 2 + 7 + 123 - 22 - 12 - 55 + 120
[/input]
[output]
162
[/output]
[/test]
[test]
[input]
99 - 99
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
0 + 0 + 0 + 0 - 0 - 0 + 0 - 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2123412 - 123123 + 12312 - 12312
[/input]
[output]
2000289
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Decimal to Binary Converter
[code-task title="Simple Calculator " taskId="1f9e646a-8a8f-4f6a-9710-0b1743bd5ef5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*; 

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a simple program that **can convert a decimal number to its binary representation**.
Implement an elegant solution **using a Stack**.
**Print the binary representation** back at the terminal.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 | 1010 |


| **Input** | **Output** |
| --- | --- |
| 1024 | 10000000000 |

## Hints
- If the given number is 0, just print 0
- Else, while the number is greater than zero, divide it by 2 and push the reminder into the stack
```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```
- When you are done dividing, pop all reminders from the stack, that is the binary representation


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
[/input]
[output]
1010
[/output]
[/test]
[test open]
[input]
1024
[/input]
[output]
10000000000
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
111110100
[/output]
[/test]
[test]
[input]
42
[/input]
[output]
101010
[/output]
[/test]
[test]
[input]
2546123
[/input]
[output]
1001101101100111001011
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0
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

[slide hideTitle]
# Solution: Decimal to Binary Converter
[code-task title="Simple Calculator " executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*; 

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int decimal = Integer.parseInt(scanner.nextLine());

        ArrayDeque<Integer> stack = new ArrayDeque<>();

        if (decimal == 0){
            System.out.println(decimal);
        }

        while (decimal != 0) {
            stack.push(decimal % 2);
            decimal /= 2;
        }

        while (!stack.isEmpty()) {
            System.out.print(stack.pop());
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Create a simple program that **can convert a decimal number to its binary representation**.
Implement an elegant solution **using a Stack**.
**Print the binary representation** back at the terminal.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 | 1010 |


| **Input** | **Output** |
| --- | --- |
| 1024 | 10000000000 |

## Hints
- If the given number is 0, just print 0
- Else, while the number is greater than zero, divide it by 2 and push the reminder into the stack
```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```
- When you are done dividing, pop all reminders from the stack, that is the binary representation


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
[/input]
[output]
1010
[/output]
[/test]
[test open]
[input]
1024
[/input]
[output]
10000000000
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
111110100
[/output]
[/test]
[test]
[input]
42
[/input]
[output]
101010
[/output]
[/test]
[test]
[input]
2546123
[/input]
[output]
1001101101100111001011
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0
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

[slide hideTitle]
# Problem: Matching Brackets
[code-task title="Matching Brackets" taskId="69a9ca82-bf00-49c7-a284-2d296ed138ce" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are given an arithmetical **expression** with **brackets**.

Scan through the string and **extract** each **sub-expression**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5 | (2 + 3) |
|  | (3 + 1) |
|  | (2 - (2 + 3) * 4 / (3 + 1)) |


| **Input** | **Output** |
| --- | --- |
| (2 + 3) - (2 + 3) | (2 + 3) |
|  | (2 + 3) |

 ## Hints 
 - Use a stack, namely an `ArrayDeque()`
 - Scan through the expression searching for brackets 
   - If you find an opening bracket, push the index into the stack 
   - If you find a closing bracket pop the topmost element from the stack. This is the index of the opening bracket. 
   - Use the current and the popped index to extract the sub-expression 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 + (2 - (2 + 3) \* 4 / (3 + 1)) \* 5
[/input]
[output]
(2 + 3)
(3 + 1)
(2 - (2 + 3) \* 4 / (3 + 1))
[/output]
[/test]
[test open]
[input]
(2 + 3) - (2 + 3)
[/input]
[output]
(2 + 3)
(2 + 3)
[/output]
[/test]
[test]
[input]
(1 + 2) \* (3 - 4) / (2 \* (1 / 10) - (20 - 10))
[/input]
[output]
(1 + 2)
(3 - 4)
(1 / 10)
(20 - 10)
(2 \* (1 / 10) - (20 - 10))
[/output]
[/test]
[test]
[input]
(3 - 1)
[/input]
[output]
(3 - 1)
[/output]
[/test]
[test]
[input]
3 + 1
[/input]
[output]

[/output]
[/test]
[test]
[input]
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/input]
[output]
(1 + 2)
(2 + 3)
((1 + 2) - (2 + 3))
(4 - 1)
(2 + 3)
((4 - 1) \* (2 + 3))
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/output]
[/test]
[test]
[input]
(90 - 20) + 1
[/input]
[output]
(90 - 20)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Matching Brackets
[code-task title="Matching Brackets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine();

        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < expression.length(); i++) {
            char ch = expression.charAt(i);
            if (ch == '(') {
                stack.push(i);
            } else if (ch == ')') {
                int startIndex = stack.pop();

                String contents = expression.substring(startIndex, i + 1);
                System.out.println(contents);
            }
        }
    }
}
```
[/code-editor]
[task-description]
## Description
You are given an arithmetical **expression** with **brackets**.

Scan through the string and **extract** each **sub-expression**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5 | (2 + 3) |
|  | (3 + 1) |
|  | (2 - (2 + 3) * 4 / (3 + 1)) |


| **Input** | **Output** |
| --- | --- |
| (2 + 3) - (2 + 3) | (2 + 3) |
|  | (2 + 3) |

## Hints 
- Use a stack, namely an `ArrayDeque()` 
- Scan through the expression searching for brackets 
   - If you find an opening bracket, push the index into the stack 
   - If you find a closing bracket pop the topmost element from the stack. This is the index of the opening bracket. 
   - Use the current and the popped index to extract the sub-expression 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 + (2 - (2 + 3) \* 4 / (3 + 1)) \* 5
[/input]
[output]
(2 + 3)
(3 + 1)
(2 - (2 + 3) \* 4 / (3 + 1))
[/output]
[/test]
[test open]
[input]
(2 + 3) - (2 + 3)
[/input]
[output]
(2 + 3)
(2 + 3)
[/output]
[/test]
[test]
[input]
(1 + 2) \* (3 - 4) / (2 \* (1 / 10) - (20 - 10))
[/input]
[output]
(1 + 2)
(3 - 4)
(1 / 10)
(20 - 10)
(2 \* (1 / 10) - (20 - 10))
[/output]
[/test]
[test]
[input]
(3 - 1)
[/input]
[output]
(3 - 1)
[/output]
[/test]
[test]
[input]
3 + 1
[/input]
[output]

[/output]
[/test]
[test]
[input]
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/input]
[output]
(1 + 2)
(2 + 3)
((1 + 2) - (2 + 3))
(4 - 1)
(2 + 3)
((4 - 1) \* (2 + 3))
(((1 + 2) - (2 + 3)) - ((4 - 1) \* (2 + 3)))
[/output]
[/test]
[test]
[input]
(90 - 20) + 1
[/input]
[output]
(90 - 20)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
