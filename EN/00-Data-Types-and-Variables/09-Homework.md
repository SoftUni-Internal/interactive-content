# Homework

[slide hideTitle]

# Problem: Integer Operations

[code-task title="Integer Operations" taskId="java-fund-1-data-types-and-variables-Integer-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read **four integer numbers**. 

**Add** the **first** number to the **second**, **divide** (integer division) the **sum** by the **third** number and **multiply** the result by the **fourth** number. 

**Print** the **result**.

### Example
| **Input** | **Output** |
| --- | --- |
| 10 | 30 |
| 20 | |
| 3 | |
| 3 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
20
3
3
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
15
14
2
3
[/input]
[output]
42
[/output]
[/test]
[test]
[input]
30
3
3
2
[/input]
[output]
22
[/output]
[/test]
[test]
[input]
40
10
5
2
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
100
20
2
3
[/input]
[output]
180
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Sum Digits
[code-task title="Sum Digits" taskId="java-fund-1-data-types-and-variables-Sum-Digit" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You will be given a **single** integer. 

Your task is to find the **sum of its digits**.

### Example
| **Input** | **Output** |
| --- | --- |
| 245678 | 32 |
| 543 | 12 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
245678
[/input]
[output]
32
[/output]
[/test]
[test]
[input]
97561
[/input]
[output]
28
[/output]
[/test]
[test open]
[input]
543
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
1000
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Elevator

[code-task title="Elevator" taskId="java-fund-1-data-types-and-variables-Elevator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Calculate how many times an elevator will need to go up to take **n persons** to the top.

The **input** will consist of **two lines**: 
- The number of people **n**
- The capacity **p** of the elevator

### Example
| **Input** | **Output** | **Comments**
| --- | --- | --- |
| 17 | 6 | 5 courses * 3 people |
| 3 | | + 1 course * 2 people |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
17
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
4
5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
16
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
16
4
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Sum of Chars
[code-task title="Sum of Chars" taskId="java-fund-1-data-types-and-variables-Sum-of-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program, which **sums the ASCII codes of n characters**. 

**Print the sum** to the console.

### Input
- On the first line, you will receive **n** - the number of lines
- On the next **n lines** - you will be receiving letters from the Latin alphabet

### Output
Print the total sum in the following format:
- "**The sum equals:** \{**totalSum**\}"

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | The sum equals: 399 |
| A | |
| b | |
| C | |
| d | |
| E | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
A
b
C
d
E
[/input]
[output]
The sum equals: 399
[/output]
[/test]
[test]
[input]
12
S
o
f
t
U
n
i
R
u
l
z
z
[/input]
[output]
The sum equals: 1263
[/output]
[/test]
[test]
[input]
10
H
e
l
l
o
B
u
d
d
y
[/input]
[output]
The sum equals: 1004
[/output]
[/test]
[test]
[input]
20
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
[/input]
[output]
The sum equals: 1940
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Print Part of the ASCII Table
[code-task title="Print Part of the ASCII Table" taskId="java-fund-1-data-types-and-variables-Print-Part-of-the-ASCII-Table" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Find more information about [ASCII](www.ascii-code.com) (American Standard Code for Information Interchange) online and create a program that **prints part of the ASCII table** of characters to the console.  

On the first line of input you will receive the **char index** that you should **start** with. 
On the second line - the index of the **last** character you should print.

### Example
| **Input** | **Output** |
| --- | --- |
| 60 | < = > ? @ A |
| 65 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
60
65
[/input]
[output]
< = > ? @ A
[/output]
[/test]
[test]
[input]
69
79
[/input]
[output]
E F G H I J K L M N O
[/output]
[/test]
[test]
[input]
97
104
[/input]
[output]
a b c d e f g h
[/output]
[/test]
[test]
[input]
40
55
[/input]
[output]
( ) * + , - . / 0 1 2 3 4 5 6 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Triples of Latin Letters
[code-task title="Triples of Latin Letters" taskId="java-fund-1-data-types-and-variables-Triples-of-Latin-Letters" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that **reads** an integer **n** and **prints all triples of the first n small Latin letters**, ordered **alphabetically**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | aaa |
| | aab |
| | aba |
| | abb |
| | baa |
| | bab |
| | bba |
| | bbb |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
aaa
aab
aba
abb
baa
bab
bba
bbb
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
aaa
aab
aac
aad
aba
abb
abc
abd
aca
acb
acc
acd
ada
adb
adc
add
baa
bab
bac
bad
bba
bbb
bbc
bbd
bca
bcb
bcc
bcd
bda
bdb
bdc
bdd
caa
cab
cac
cad
cba
cbb
cbc
cbd
cca
ccb
ccc
ccd
cda
cdb
cdc
cdd
daa
dab
dac
dad
dba
dbb
dbc
dbd
dca
dcb
dcc
dcd
dda
ddb
ddc
ddd
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
aaa
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
aaa
aab
aac
aad
aae
aaf
aba
abb
abc
abd
abe
abf
aca
acb
acc
acd
ace
acf
ada
adb
adc
add
ade
adf
aea
aeb
aec
aed
aee
aef
afa
afb
afc
afd
afe
aff
baa
bab
bac
bad
bae
baf
bba
bbb
bbc
bbd
bbe
bbf
bca
bcb
bcc
bcd
bce
bcf
bda
bdb
bdc
bdd
bde
bdf
bea
beb
bec
bed
bee
bef
bfa
bfb
bfc
bfd
bfe
bff
caa
cab
cac
cad
cae
caf
cba
cbb
cbc
cbd
cbe
cbf
cca
ccb
ccc
ccd
cce
ccf
cda
cdb
cdc
cdd
cde
cdf
cea
ceb
cec
ced
cee
cef
cfa
cfb
cfc
cfd
cfe
cff
daa
dab
dac
dad
dae
daf
dba
dbb
dbc
dbd
dbe
dbf
dca
dcb
dcc
dcd
dce
dcf
dda
ddb
ddc
ddd
dde
ddf
dea
deb
dec
ded
dee
def
dfa
dfb
dfc
dfd
dfe
dff
eaa
eab
eac
ead
eae
eaf
eba
ebb
ebc
ebd
ebe
ebf
eca
ecb
ecc
ecd
ece
ecf
eda
edb
edc
edd
ede
edf
eea
eeb
eec
eed
eee
eef
efa
efb
efc
efd
efe
eff
faa
fab
fac
fad
fae
faf
fba
fbb
fbc
fbd
fbe
fbf
fca
fcb
fcc
fcd
fce
fcf
fda
fdb
fdc
fdd
fde
fdf
fea
feb
fec
fed
fee
fef
ffa
ffb
ffc
ffd
ffe
fff
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Water Overflow

[code-task title="Water Overflow" taskId="java-fund-1-data-types-and-variables-Water-Overflow" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
You have a **water tank** with a capacity of 255 liters.

On the **first** line, you will receive **n**.

On the next **n lines**, you will **receive liters** of water, which you have to **pour in your tank**. 

If the **capacity is not enough**, print "**Insufficient capacity!**" and **continue reading** the next line. 

On the **last** line, **print the liters** in the tank.

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Insufficient capacity! |
| 20 | 240 |
| 100 | |
| 100 | |
| 100 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
20
100
100
100
20
[/input]
[output]
Insufficient capacity!
240
[/output]
[/test]
[test]
[input]
1
1000
[/input]
[output]
Insufficient capacity!
0
[/output]
[/test]
[test]
[input]
7
10
20
30
10
5
10
20
[/input]
[output]
105
[/output]
[/test]
[test]
[input]
10
3
10
12
50
30
40
10
20
60
20
[/input]
[output]
255
[/output]
[/test]
[test]
[input]
4
100
150
5
1
[/input]
[output]
Insufficient capacity!
255
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Beer Kegs

[code-task title="Beer Kegs" taskId="java-fund-1-data-types-and-variables-Beer-Kegs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program, which **calculates the volume** of **n** beer kegs. 

You will **receive** in total **3 * n lines**.

Each **three lines** will hold information for a **single keg**. 

**First** up is the **model** of the keg, **after that** is the **radius** (a floating-point number) of the keg, and **lastly** is the **height** of the keg.

Calculate the **volume** using the following formula:

`π * r^2 * h`

At the end, **print the model of the biggest keg**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Bigger Keg |
| Smaller Keg | |
| 2.41 | |
| 10 | |
| Bigger Keg | |
| 5.12 | |
| 20 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Smaller Keg
2.41
10
Bigger Keg
5.12
20
[/input]
[output]
Bigger Keg
[/output]
[/test]
[test]
[input]
3
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
3
Keg 1
15
15
Keg 2
20
10
Keg 3
10
20
[/input]
[output]
Keg 2
[/output]
[/test]
[test]
[input]
5
Keg 1
10
10
Keg 2
20
20
Keg 3
10
30
Keg 4
213213.123
1234124124
Keg 5
1236.345534
21321124
[/input]
[output]
Keg 4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Spice Must Flow
[code-task title="Spice Must Flow" taskId="java-fund-1-data-types-and-variables-Spice-Must-Flow" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that **calculates the total amount of spice** that can be extracted from a source. 

The source has a **starting** yield, which indicates how much spice can be mined on the **first day**.

After it has been mined for a day, the yield drops by 10, meaning on the **second day it'll produce 10 less spice** than on the first, on the **third day 10 less than on the second**, and **so on** (see examples). 

A source is considered **profitable only while its yield is at least 100** - when less than 100 spice is expected in a day, abandon the source.

The mining crew **consumes 26 spice every day** at the **end of their shift** and **an additional 26** after the mine has been exhausted. 

Note that the workers cannot consume more spice than there is in storage. 

When the operation is complete, **print to the console on two separate lines** how many **days** the mine has operated and the total **amount** of spice extracted.


### Input
You will **receive a number**, representing the **starting** yield of the source. 

### Output
Print **two separate lines** that represent how many **days the mine has operated** and the **total amount of spice extracted**.

### Example
| **Input** | **Output** |
| --- | --- |
| 111 | 2 |
| | 134 |

[hints] 
[hint] 
On the **first day**, we extract 111 spice and at the end of the shift, the workers consume 26, leaving 85. 
The yield drops by 10 to 101.
[/hint] 
[hint] 
On the **second day** we extract 101 spice, the workers consume 26, leaving 75. 
The total is 160 and the yield has dropped to 91.
[/hint] 
[hint] 
Since the expected yield is less than 100, we **abandon** the source. 
The workers take another 26, leaving 134. The mine has **operated** 2 days.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
111
[/input]
[output]
2
134
[/output]
[/test]
[test]
[input]
450
[/input]
[output] 
36
8938
[/output]
[/test]
[test]
[input]
200
[/input]
[output]
11
1338
[/output]
[/test]
[test]
[input]
1234
[/input]
[output] 
114
73276
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Poke Mon
[code-task title="Poke Mon" taskId="java-fund-1-data-types-and-variables-Poke-Mon" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
A Poke Mon is a special type of pokemon, which likes to poke others. 

But at the end of the day, the Poke Mon wants to keep **statistics** about how many pokes it has managed to do.

The Poke Mon pokes his target, and then proceeds to poke another target. 

The **distance between his targets reduces his poke power**.

You will be given the **poke power** that the Poke Mon has, **N** - an integer.

Then you will be given the **distance between the poke targets**, **M** - an integer.

Then you will be given the **exhaustionFactor Y** - an integer.

Your task is to start **subtracting M from N until N becomes less than M**, i.e. the Poke Mon does not have enough power to reach the next target. 

**Every time you subtract M from N that means you have reached a target** and poked it successfully. 

**Count** how many targets you have poked - you will need that count.

The Poke Mon becomes gradually **more exhausted**. 

**If N becomes equal to EXACTLY 50 % of its original value, you must divide N by Y**, if it is **possible**. 

Use integer division.

If division is not possible, you should NOT do it. 

Instead, you should continue subtracting.

After dividing, you should **continue subtracting** from N, until it becomes less than M.

When N becomes less than M, you must take what has remained of N and the count of targets you have poked and print them to the console.

**NOTE:** When you are calculating percentages, you should do it with maximum precision.

Note: 505 is not exactly 50% of 1000, it is 50.5%.

### Input/ Constraints
- On the first line, you will receive **N** - an integer
- On the second line, you will receive **M** - an integer
- On the third line, you will receive **Y** - an integer

### Output
- On the first line, print **what has remained of N**, after subtracting from it
- On the second line, print the **count of targets**, you’ve managed to poke

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | 1 |
| 2 | 2 |
| 3 | |


[hints] 
[hint] 
This Poke Mon has **poke power** of 5. (N = 5)
The **distance** between the **poke targets** is 2. (M = 2)
The **exhaustionFactor** is equal to 3. (Y = 3)
[/hint] 
[hint] 
We start subtracting M from N.
At the beginning, N = 5 and M = 2.
N - M = 3 -> 1 target poked
N - M = 1 -> 2 targets poked
N is now smaller than M.
[/hint] 
[hint] 
We print what has **remained** of **N**, which is 1.
We print the **count of targets**, which is 2.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
2
3
[/input]
[output]
1
2
[/output]
[/test]
[test]
[input]
10
5
2
[/input]
[output]
2
1
[/output]
[/test]
[test]
[input]
1000
45
2
[/input]
[output]
10
22
[/output]
[/test]
[test]
[input]
100
19
1
[/input]
[output]
5
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Snowballs

[code-task title="Snowballs" taskId="java-fund-1-data-types-and-variables-Snowballs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Tony and Andy love playing in the snow and having snowball fights, but they always argue who makes the best snowballs. 

They have decided to involve you in their fray by making you create a program, which **calculates snowball data** and outputs the best snowball value.

You will receive **N** - an integer, the **number of snowballs being made** by Tony and Andy.

For each snowball, you will receive 3 input lines:

- On the first line, you will get the **snowballSnow** - an integer

- On the second line, you will get the **snowballTime** - an integer

- On the third line, you will get the **snowballQuality** - an integer

For each snowball you must calculate its **snowballValue** by the following formula:
**(snowballSnow / snowballTime) ^ snowballQuality**

At the end you must **print the highest calculated snowballValue**.


### Input/ Constraints

- On the first input line, you will receive N - the number of snowballs

- On the next N \* 3 input lines, you will be receiving data about snowballs

### Output

- Print the **highest calculated snowballValue** using the formula specified above

- The output format is: 

"\{**snowballSnow**\} : \{**snowballTime**\} = \{**snowballValue**\} (\{**snowballQuality**\})"

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 10 : 2 = 125 (3) |
| 10 | |
| 2 | |
| 3 | |
| 5 | |
| 5 | |
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
10
2
3
5
5
5
[/input]
[output]
10 : 2 = 125 (3)
[/output]
[/test]
[test]
[input]
3
10
5
7
16
4
2
20
2
2
[/input]
[output]
10 : 5 = 128 (7)
[/output]
[/test]
[test]
[input]
2
50
10
4
5
5
10
[/input]
[output]
50 : 10 = 625 (4)
[/output]
[/test]
[test]
[input]
2
5
5
5
15
3
5
[/input]
[output]
15 : 3 = 3125 (5)
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
