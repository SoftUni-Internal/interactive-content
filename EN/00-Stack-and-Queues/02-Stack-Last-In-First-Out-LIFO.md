# Stacks: Last In First Out (LIFO)

[slide hideTitle]
# Stack Functionality

**Stacks** are data structures similar to **lists**. The elements in a stack are ordered based on the **LIFO** principle or **Last In First Out**. When you add an element, it is always placed **on top** of the stack and removing an element also removes it **from the top** of the stack.

- Stacks provide the following functionality:
    - Pushing an element to the top of the stack
    - Popping an element from the top of the stack
    - Getting (**Peek**) the top element without removing it

[image assetsSrc="Java-Advanced-Stack-and-Queues-3.png" /]

[/slide]

[slide hideTitle]
# Java Stack Implementation and Built-In Methods
 
- Stack Implementation using `ArrayDeque<E>`

```java
ArrayDeque<Integer> stack = new ArrayDeque<>();
```

- `push(element)` - add an element to the top of the stack:

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

- `peek()`: gets the value of the top element in the stack:

```java live
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(2);
stack.push(5);
stack.push(10);

// get 
Integer element = stack.peek();

System.out.println(element);
```

[image assetsSrc="Java-Advanced-Stack-and-Queues-10.gif" /]

[/slide]



[slide hideTitle]
# Utility Methods

- `size()` - returns the number of elements in the stack

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("The size is: " + stackOfCars.size());
```

- `isEmpty()` - checks whether the stack is empty or not

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println("Is the Stack empty? " + stackOfCars.isEmpty());
```

- `contains(element)` - checks whether a stack contains a specific element or not

```java live
ArrayDeque<String> stackOfCars = new ArrayDeque<>();
stackOfCars.push("Tesla Model S");
stackOfCars.push("Nio ES8");
stackOfCars.push("Lucid Air");

System.out.println(stackOfCars.contains("BMW M3"));
```

[/slide]

[slide hideTitle]
# Problem: Browser History
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
Write a program that takes 2 types of browser commands:

- Normal navigation: a URL, provided in string format

- `back` - command that sets the current URL to the last set URL

After each command, the program should **print the current URL**. 

If the **back** command can not be executed, print `no previous URLs`.

The input **ends** with the `Home` command. **Stop the program** when you receive this command.


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
- Use `ArrayDeque<>`
- Use `String` to store the current URL
- Use `push()`, when moving to next URL
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
[code-task title="Browser History" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that takes 2 types of browser commands:

- Normal navigation: a URL, provided in string format

- `back` - command that sets the current URL to the last set URL

After each command, the program should **print the current URL**. 

If the **back** command can not be executed, print `no previous URLs`.

The input **ends** with the `Home` command. **Stop the program** when you receive this command.

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
- Use `ArrayDeque<>`
- Use `String` to store the current URL
- Use `push()`, when moving to next URL
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
**Create a simple calculator** to **evaluate simple expressions**. It should work with only two operations - addition (+) and subtraction (-).

There will be no operations placed in parenthesis and implementing operator precedence **is not** required.

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
- You can either:
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
[code-task title="Simple Calculator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Create a simple calculator** to **evaluate simple expressions**. It should work with only two operations - addition (+) and subtraction (-).

There will be no operations placed in parenthesis and implementing operator precedence **is not** required.

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
- You can either:
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

**Print the binary representation** to the terminal.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 | 1010 |


| **Input** | **Output** |
| --- | --- |
| 1024 | 10000000000 |

## Hints
- If the given number is 0, print 0
- Else, while the number is greater than zero, divide it by 2 and push the reminder into the stack

```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```

- When you are done dividing, pop all reminders from the stack. This is the binary representation


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
[code-task title="Decimal to Binary Converter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Print the binary representation** to the terminal.

## Examples
| **Input** | **Output** |
| --- | --- |
| 10 | 1010 |


| **Input** | **Output** |
| --- | --- |
| 1024 | 10000000000 |

## Hints
- If the given number is 0, print 0
- Else, while the number is greater than zero, divide it by 2 and push the reminder into the stack

```java
while (decimal != 0) {
    stack.push(decimal % 2);
    decimal /= 2;
}
```

- When you are done dividing, pop all reminders from the stack. This is the binary representation

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
# Problem: Matching Parenthesis
[code-task title="Matching Parenthesis" taskId="java-advanced-lab-stack-and-queue-Matching-Parenthesis" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given an arithmetical **expression** with **parenthesis**.

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
- Use a stack, namely an `ArrayDeque()` 
- Scan through the expression searching for parenthesis 
   - If you find an opening parenthesis, push the index into the stack 
   - If you find a closing parenthesis pop the top element from the stack. This is the index of the opening parenthesis. 
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
# Solution: Matching Parenthesis
[code-task title="Matching Parenthesis" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given an arithmetical **expression** with **parenthesis**.

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
- Use a stack, namely an `ArrayDeque()` 
- Scan through the expression searching for parenthesis 
   - If you find an opening parenthesis, push the index into the stack 
   - If you find a closing parenthesis pop the top element from the stack. This is the index of the opening parenthesis. 
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
