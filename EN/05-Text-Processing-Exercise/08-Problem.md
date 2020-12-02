[slide hideTitle]
# Problem: Letters Change Numbers
[code-task title="Letters Change Numbers" taskId="904f4c38-b525-446b-89b7-df45a3fa840b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
John likes Math.

But he also likes the English alphabet a lot.

He invented a **game with numbers and letters** from the English alphabet.

The game was simple.

You get a **string consisting of a number between two letters**.

Depending on whether the **letter was in front of the number** or **after it you would perform different mathematical operations** on the number to achieve the result.

**First you start with the letter before the number**. 
- If it's **uppercase** you **divide the number by the letter's position** in the alphabet. 
- If it's **lowercase** you **multiply the number with the letter's position** in the alphabet. 

Then you **move to the letter after the number**. 
- If it's **uppercase you subtract its position** from the resulted number.
- If it's **lowercase you add its position** to the resulted number.

But the game became too easy for John really quick. 

He decided to complicate it a bit by **doing the same but with multiple strings keeping track of only the total sum** of all results. 

Once he started to solve this with **more strings and bigger numbers** it became quite hard to do it only in his mind. 

So he asks you to **write a program that calculates the sum of all numbers** after the operations on each number have been done.

**For example**, you are given the sequence "A12b s17G":

We have two strings – "A12b" and "s17G". 

We do the **operations on each and sum them**. We **start with the letter before the number** on the first string. 

A is **uppercase and its position in the alphabet is 1**. So we **divide the number 12 with the position 1** (12/1 = 12). 

Then we **move to the letter after the number**. b is **lowercase** and its **position is 2**.

So we **add 2 to the resulted** number (12+2=14). 

Similarly for the second string s is **lowercase** and **its position is 19** so we **multiply it with the number** (17*19 = 323). 

Then we have **uppercase G with position 7**, so we **subtract it from the resulted number** (323 – 7 = 316). 

Finally, we **sum the 2 results and we get** 14 + 316 = 330.

### Input
The input comes from the console as a single line, holding the sequence of strings. 

Strings are separated by one or more white spaces.

The input data will always be valid and in the format described. There is no need to check it explicitly.

### Output
Print at the console a single number: the total sum of all processed numbers rounded up to two digits after the decimal separator.

### Example
| **Input** | **Output** |
| --- | --- |
| A12b s17G | 330.00 |

### Comments
12/1=12, 12+2=14, 17*19=323, 323–7=316, 14+316=330

### Example
| **Input** | **Output** |
| --- | --- |
| P34562Z q2576f   H456z | 46015.13 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A12b s17G
End
[/input]
[output]
330.00
[/output]
[/test]
[test open]
[input]
P34562Z q2576f   H456z
End
[/input]
[output]
46015.13
[/output]
[/test]
[test]
[input]
a1A
End
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
A43873477A    b647742b  C57C h1337Q  
End
[/input]
[output]
45179657.00
[/output]
[/test]
[test]
[input]
Z1Z k6573H    	 F12J
End
[/input]
[output]
72261.04
[/output]
[/test]
[test]
[input]
A129561542z F220197965z r4756z T23692z A79367z G7777z l1000z A2531z A21z I393993777z
End
[/input]
[output]
210220371.77
[/output]
[/test]
[test]
[input]
A2147483646a
End
[/input]
[output]
2147483647.00
[/output]
[/test]
[test]
[input]
z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z z2147483647z
End
[/input]
[output]
558345748480.00
[/output]
[/test]
[test]
[input]
a1Z
End
[/input]
[output]
-25.00
[/output]
[/test]
[test]
[input]
s536K Q532f b53u b23822a x35823Z F3258x a58325814X
End
[/input]
[output]
59244065.29
[/output]
[/test]
[test]
[input]
S134L U4A I636N O1337S T86314t
End
[/input]
[output]
4456.74
[/output]
[/test]
[test]
[input]
A1w e2S 	o3M  e4T 	e5S  t6S
End
[/input]
[output]
154.00
[/output]
[/test]
[test]
[input]
j1j   f1V 		P1E   g1x  	 Y1T  c1M F1v h1c		 b1J d1x
End
[/input]
[output]
53.27
[/output]
[/test]
[/tests]
[/code-task]
[/slide]