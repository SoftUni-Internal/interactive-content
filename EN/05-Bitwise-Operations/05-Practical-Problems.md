# Practical Problems

[slide]
# Video

[vimeo-video startTimeInSeconds="4257" endTimeInSeconds="4333"]
[stream language="EN" videoId="426199411" default /]
[stream language="RO" videoId="426200319"  /]
[/video-vimeo]

[/slide]

[slide hideTitle]
# Problem: Binary Digits Count
[code-task title="Binary Digits Count" taskId="e2e25dfa-37e4-40c7-ae95-aa0010e7d993" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a **positive integer** number and one **binary digit B** (0 or 1).

Your task is to write a program that finds the **number of binary digits (B) in a number**.

## Hints

- Declare **two** variables **(n and b)**.

- Read the user input from the console.

- Convert the n into **binary representation** (you can use built-in method).

- Count the **b** digit in the binary number.

- Print the result on the console.

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 20 | 3 | 20 -> 10100 |
| 0 |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 15 | 4 | 15 -> 1111 |
| 1 |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 10 | 2 | 10 -> 1010 |
| 0 |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
20
0
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
15
1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
10
0
[/input]
[output]
2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: First Bit
[code-task title="First Bit" taskId="3e8355cc-5292-46f3-8f92-2df4b92d3818" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that prints the bit at position 1 of a number.

## Hints

- Declare **two** variables (n and bitAtPosition1). 

- **Read** the user input from the console. 

- **Find** the **value** of the **bit at position 1** (position 1 is the second bit from right to left: [7, 6, 5, 4, 3, 2, 1, 0]): 

  - **Shift** the number **n** times to the **right** (where **n** is the position, in this case it is **1**) by using the `>>` operator. In that way the bit we want to check will be at position `0`;

  - **Find** the bit at **position 0**. Use **& 1** operator expression to extract the value of a bit. By using the following **formulae** (bitAtPosition1 1) you **check** whether the bit at **position 0** is equal to **1** or **not**. If the bit is **equal** to **1** the **result** is **1** if the bit is **not equal** - the **result is 0**;

  - **Save** the result in **bitAtPosition1**;

- **Print** the result on the console.

## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | 1 |

| **Input** | **Output** |
| --- | --- |
| 51 | 1 |

| **Input** | **Output** |
| --- | --- |
| 13 | 0 |

| **Input** | **Output** |
| --- | --- |
| 24 | 0 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
51
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
24
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: p-th Bit
[code-task title="p-th Bit" taskId="6eb59a32-057b-4de0-9b10-52161369dceb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that prints the bit at position p of a number.

## Hints

- Declare **three** variables (n, p and bitAtPositionP). 

- **Read** the user input from the console. 

- **Find** the **value** of the **bit at position p**: 

  - **Shift** the number **p** times to the **right** (where **p** is the position) by using the **>>** operator. In that way the bit we want to check will be at position **0**;

  - **Find** the bit at **position 0**. Use **& 1** operator expression to extract the value of a bit. By using the following **formula** (bitAtPositionP & 1) you **check** whether the bit at **position 0** is equal to **1** or **not**. If the bit is **equal** to **1** the **result** is **1** if the bit is **not equal** - the **result is 0**;

  - **Save** the result in **bitAtPosition1**;

- **Print** the result on the console.


## Examples
| **Input** | **Output** |
| --- | --- |
| 2145 | 1 |
| 5 |  |

| **Input** | **Output** |
| --- | --- |
| 512 | 0 |
| 0 |  |

| **Input** | **Output** |
| --- | --- |
| 111 | 0 |
| 8 |  |

| **Input** | **Output** |
| --- | --- |
| 255 | 1 |
| 7 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2145
5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
512
0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
111
8
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
255
7
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Bit Destroyer
[code-task title="Bit Destroyer" taskId="6f9236f7-e33c-4e67-bb66-c711df00b399" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that sets the bit at **position** p to 0.

Print the resulting number.

## Hints

- Declare **four** variables (n, p, mask and newNumber). 

- **Read** the user input from the console.

- **Set** the **value** of the **bit at position p to 0**: 

  - **Shift** the number **1, p times** to the **left** (where **p** is the position) by using the **<<** operator. In that way the bit we want to delete will be at position **p**. Save the resulting value in **mask**;

  - **Invert** the **mask** (e.g. we move the number 1, 3 times and we get 00001000, after inverting we get 11110111).

  - Use **& mask** operator expression to **set** the **value** of a number to **0**. By using the **following** formulae (n & mask) you **copy all** the **bits** of the **number** and you **set** the bit at **position p to 0**;

  - **Save** the result in **newNumber**;

- **Print** the result on the console.

## Examples
| **Input** | **Output** |
| --- | --- |
| 1313 | 1281 |
| 5 |  |

| **Input** | **Output** |
| --- | --- |
| 231 | 227 |
| 2 |  |

| **Input** | **Output** |
| --- | --- |
| 111 | 47 |
| 6 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1313
5
[/input]
[output]
1281
[/output]
[/test]
[test]
[input]
231
2
[/input]
[output]
227
[/output]
[/test]
[test]
[input]
111
6
[/input]
[output]
47
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problems: Odd Times
[code-task title="Odd Times" taskId="02666a02-3e0a-4ef1-bd70-0a04e240ee75" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Given an array of positive integers in a single line joined by space (' ').

All numbers occur even number of times except one number which occurs odd number of times.

Find the number.

## Hints

- Read an array of integers.

- Initialize a variable **result** with value **0**.

- Iterate through all number in the array.

- Use **XOR (^)** of **result** and **all numbers** in the **array**.

  - **XOR** of **two elements** is **0** if **both elements** are **same** and **XOR** of a number **x** with **0** is **x**

- Print the **result**.


## Examples
| **Input** | **Output** |
| --- | --- |
| 1 2 3 2 3 1 3 | 3 |

| **Input** | **Output** |
| --- | --- |
| 5 7 2 7 5 2 5 | 5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 2 3 1 3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
5 7 2 7 5 2 5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Tri-bit Switch
[code-task title="Tri-bit Switch" taskId="207a9f49-af42-4f72-a894-0da161629ecd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that inverts the **3 bits** from position p to the left with their opposites (e.g. 111 -> 000, 101 -> 010) in 32-bit number.

**Print** the resulting number on the console.

## Hints

- **Shift** the number **7** (the number 7 has the bits 111 which we use to get 3 consecutive values), **p times** to the **left** (where **p is the position**) by using the **<<** operator. In that way the **3 bits** we want to **invert** will be at position **p**. Save the resulting value in **mask**;

- Use **^ mask** operator expression to **invert** the **values** of the **three bits** starting from position **p**. By using the following **formula** (n ^ mask) you **copy** all the **bits** of the **number** and you **invert** the bits at position **p, p+1 and p+2**;

- Save the result in **result**;

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 1234 | 1874 | 00000000000000000000010011010010 |
| 7 |  | 00000000000000000000011101010010 |


| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 44444 | 44524 | 00000000000000001010110110011100 |
| 4 |  | 00000000000000001010110111101100 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1234
7
[/input]
[output]
1874
[/output]
[/test]
[test]
[input]
44444
4
[/input]
[output]
44524
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
