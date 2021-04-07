# Stacks: Last In First Out (LIFO)

[slide hideTitle]
# Stack Functionality

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-10-11-Stack-Functionality-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Stacks** are data structures similar to **lists**.

The elements in a stack are ordered based on the **LIFO** principle - **Last In First Out**.

When you add an element, it is always placed **on top** of the stack.

Removing an element also removes it **from the top** of the stack.

Stacks provide the following functionality:
- **pushing** an element to the top of the stack
- **popping** an element from the top of the stack
- getting (**peeking at**) the top element without removing it

[image assetsSrc="Java-Advanced-Stack-and-Queues-3.png" /]

[/slide]

[slide hideTitle]
# Implementing Stack with ArrayDeque

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-12-ArrayDeque-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]
 
- Stack implementation using the `ArrayDeque<E>` class:

```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```

- `push(element)` - adds an element to the top of the stack:

```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

stack.forEach(System.out::println);
```

- `pop()` - removes the top element from the stack:

```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// remove 
stack.pop();

stack.forEach(System.out::println);
```

- `peek()`: returns the value of the top element from the stack:

```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// get 
Integer element = stack.peek();

System.out.println(element);
```
[/slide]



[slide hideTitle]
# Utility Methods

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-13-Stack-Utility-Methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `size()` - returns the number of elements in the stack:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("The size is: " + stackOfCars.size());
```

- `isEmpty()` - checks whether the stack is empty or not:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("Is the Stack empty? " + stackOfCars.isEmpty());
```

- `contains(element)` - checks whether a stack contains a specific element. Returns **true** if it does, otherwise it returns **false**:

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println(stackOfCars.contains("BMW M3"));
```

[/slide]

[slide hideTitle]
# Overview of All Operations

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-14-Stack-Overview-of-all-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Browser History

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-15-Problem-and-solution-Browser-History-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Browser History" taskId="java-advanced-lab-stack-and-queue-Browser-History" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that takes two types of **browser** commands:

- Normal navigation: a **URL**, provided as a **string**

- a **back** - command that sets the current URL to the previous URL

After executing each command, the program should **print the current URL**. 

If the **back** command can not be executed, print: `no previous URLs`.

The program **stops** after receiving the `Home` command.


## Examples
| **Input** | **Output** |
| --- | --- |
| `https//softuni.org/` | `https//softuni.org/` |
| `back` | `no previous URLs` |
| `https//softuni.org/trainings/courses` | `https//softuni.org/trainings/courses`|
| `back` | `https//softuni.org/` |
| `https//softuni.org/trainings/2056` | `https//softuni.org/trainings/2056` |
| `back` | `https//softuni.org/` |
| `https//softuni.org/trainings/live` | `https//softuni.org/trainings/live` |
| `https//softuni.org/trainings/live/details` | `https//softuni.org/trainings/live/details` |
| `Home` |  |

## Hints
- Use an `ArrayDeque<>`
- Use a variable of type `String` to store the current URL
- Use the `push()` method when moving to the next URL
- Use the `pop()` method when going back to the previous URL



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
# Problem with Solution: Simple Calculator 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-18-Problem-and-Solution-Simple-Calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Simple Calculator" taskId="java-advanced-lab-stack-and-queue-Simple-Calculator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Create a calculator** to **evaluate simple expressions**. It should work with only two operations - addition (+) and subtraction (-).

There will be no operations placed in brackets and implementing operator precedence **is not** required.

Solve the problem **using a Stack**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 + 5 + 10 - 2 - 1 | 14 |
| 2 - 2 + 5 | 5 |


## Hints
- Use an `ArrayDeque<>`
- Consider using the `add()` method
- You can either:
    - add the elements and then pop them out 
    - push them and reverse the stack


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
# Problem with Solution: Decimal to Binary Converter

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-21-Problem-and-solution-Decimal-To-Binary-Converter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Decimal to Binary Converter" taskId="java-advanced-lab-stack-and-queue-Decimal-to-Binary-Converter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Print the binary representation** to the console.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 | 1010 |
| 1024 | 10000000000 |


## Hints
- If the given number is 0, print 0
- Else, while the number is greater than zero, divide it by 2 and push the remainder into the stack

```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```

- When you are done dividing, pop all remainders from the stack. This is the binary representation.


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
# Problem with Solution: Matching Brackets

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/02-Stacks-and-Queues/java-advanced-stacks-and-queue-21-Problem-and-solution-Decimal-To-Binary-Converter-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Matching Brackets" taskId="java-advanced-lab-stack-and-queue-Matching-Brackets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
| `1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5` | `(2 + 3)` |
|  | `(3 + 1)` |
|  | `(2 - (2 + 3) * 4 / (3 + 1))` |


| **Input** | **Output** |
| --- | --- |
| `(2 + 3) - (2 + 3)` | `(2 + 3)` |
|  | `(2 + 3)` |

## Hints 
- Use a stack, implemented with an `ArrayDeque()` 
- Scan through the expression searching for brackets 
   - if you find an opening bracket, push the index into the stack 
   - if you find a closing bracket, pop the top element from the stack. This is the index of the opening bracket 
   - use the current and the popped index to extract the sub-expression 
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
