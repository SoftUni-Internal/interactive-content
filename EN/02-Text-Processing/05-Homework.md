# Homework

[slide hideTitle]

# Problem: Valid Usernames
[code-task title="Valid Usernames" taskId="Java-Fundamentals-2-Text-Processing-Valid-Usernames" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives usernames on a single line, separated by a comma and a white space (", "), and **prints all valid usernames**.

A **valid username**:
- Has a **length between 3 and 16 characters**
- Contains **only letters, numbers, hyphens, and underscores**
- Has **no redundant symbols** before, after, or in-between.

### Example
| **Input** | **Output** |
| --- | --- |
| Jeff, john45, ab, cd, peter-white, @smith | Jeff | 
| | john45 |
| | peter-white |

[hints]
[hint]
Create a validator method:

```java
private static boolean validate(String username)
```
[/hint] 
[hint]
Make sure you check the length first:

```java
if (username.length() < 3 || username.length() > 16) {
  return false;
}
```
[/hint] 
[hint]
Iterate through the characters with a for-loop:

```java
for (int i = 0; i < username.length(); i++)
```
[/hint] 
[hint]
Use the built-in `isLetterOrDigit` method to validate each character:

```java
char symbol = username.charAt(i);
 
if (!Character.isLetterOrDigit(symbol) &&
  symbol != '-' && symbol != '_') {
    return false;
}
```
[/hint]
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Jeff, john45, ab, cd, peter-white, @smith
[/input]
[output]
Jeff
john45
peter-white
[/output]
[/test]
[test]
[input]
sh, too_long_username, !lleg@l ch@rs, jeffbutt
[/input]
[output]
jeffbutt
[/output]
[/test]
[test]
[input]
ador@ed, babo_on, bog-art, boo@@@th, %bul$ocks,    burgoo
[/input]
[output]
babo_on
bog-art
[/output]
[/test]
[test]
[input]
cheesey, chix, clastic, clearwater, cofactor, collection
[/input]
[output]
cheesey
chix
clastic
clearwater
cofactor
collection
[/output]
[/test]
[test]
[input]
chee\@sey, \$chix\$,   clastic, clear-water, cof actor, collection
[/input]
[output]
clear-water
collection
[/output]
[/test]
[test]
[input]
produce, gather, low-ther, energy_power, #adored,   dashboard  , registered , fish, stylish
[/input]
[output]
produce
gather
low-ther
energy_power
fish
stylish
[/output]
[/test]
[test]
[input]
le, tod@gers, log_in, infant, fancy-smile,  , bogart, as
[/input]
[output]
log_in
infant
fancy-smile
bogart
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Character Multiplier
[code-task title="Character Multiplier" taskId="Java-Fundamentals-2-Text-Processing-Character-Multiplier" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a **method that takes two strings** as arguments and **returns the sum of the ASCII values of their characters multiplied** (multiply str1\[0\] with str2\[0\] and add the result to the total sum).

Then continue with the **next two characters**.

If one of the strings is **longer than the other**, add the ASCII values of the remaining characters to the total sum **without** multiplication.

### Example
| **Input** | **Output** |
| --- | --- |
| a aaaa | 9700 | 
| John Smith | 42025 | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a aaaa
[/input]
[output]
9700
[/output]
[/test]
[test open]
[input]
John Smith
[/input]
[output]
42025
[/output]
[/test]
[test]
[input]
123 522
[/input]
[output]
7647
[/output]
[/test]
[test]
[input]
mnoji sabe
[/input]
[output]
44894
[/output]
[/test]
[test]
[input]
leet test
[/input]
[output]
47800
[/output]
[/test]
[test]
[input]
poKys ePyrviqStringTuka
[/input]
[output]
57885
[/output]
[/test]
[test]
[input]
zzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzz
[/input]
[output]
416752
[/output]
[/test]
[test]
[input]
ioers;hiuesyv843sao384uyvP309308u 0s8o48eieoveatgo4rh;owia390'a92qa
[/input]
[output]
256134
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Extract File
[code-task title="Extract File" taskId="Java-Fundamentals-2-Text-Processing-Extract-Files" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives a **path to a file** and **prints the name of the file and its extension**, each on a new line, as shown in the example.

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Internal\training-internal\Template.pptx | File name: Template | 
| | File extension: pptx |

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Projects\Data-Structures\LinkedList.cs | File name: LinkedList | 
| | File extension: cs |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
C:\Internal\training-internal\Template.pptx
[/input]
[output]
File name: Template
File extension: pptx
[/output]
[/test]
[test open]
[input]
C:\Projects\Data-Structures\LinkedList.cs
[/input]
[output]
File name: LinkedList
File extension: cs
[/output]
[/test]
[test]
[input]
C:\Internal\training-C#\Strings-and-Text-Processing.doc
[/input]
[output]
File name: Strings-and-Text-Processing
File extension: doc
[/output]
[/test]
[test]
[input]
C:\Pesho\Video\Wrath-of-The-Titans.mkv
[/input]
[output]
File name: Wrath-of-The-Titans
File extension: mkv
[/output]
[/test]
[test]
[input]
C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VS2017.exe
[/input]
[output]
File name: VS2017
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Program Files\Ditto\Ditto.exe
[/input]
[output]
File name: Ditto
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Trash\DesignPatterns\DesignPatterns.sln
[/input]
[output]
File name: DesignPatterns
File extension: sln
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Caesar Cipher
[code-task title="Caesar Cipher" taskId="Java-Fundamentals-2-Text-Processing-Caesar-Cipher" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives a text and **returns an encrypted version of the same text**.

**Encrypt the text by changing each character** in the following way:

- **A** should be replaced by **D** 
- **B** should be replaced by **E**
- **C** should be replaced by **F**, and so on

**Print out the encrypted text**.

### Example
| **Input** | **Output** |
| --- | --- |
| Programming is cool! | Surjudpplqj#lv#frro$ | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Programming is cool!
[/input]
[output]
Surjudpplqj#lv#frro$
[/output]
[/test]
[test]
[input]
One year has 365 days.
[/input]
[output]
Rqh#\|hdu#kdv#698#gd\|v1
[/output]
[/test]
[test]
[input]
Where do random thoughts come from?
[/input]
[output]
Zkhuh#gr#udqgrp#wkrxjkwv#frph#iurpB
[/output]
[/test]
[test]
[input]
I think I will buy the red car, or I will lease the blue one.
[/input]
[output]
L#wklqn#L#zloo#ex\|#wkh#uhg#fdu/#ru#L#zloo#ohdvh#wkh#eoxh#rqh1
[/output]
[/test]
[test]
[input]
The stranger officiates the meal.
[/input]
[output]
Wkh#vwudqjhu#riilfldwhv#wkh#phdo1
[/output]
[/test]
[test]
[input]
There was no ice cream in the freezer, nor did they have money to go to the store.
[/input]
[output]
Wkhuh#zdv#qr#lfh#fuhdp#lq#wkh#iuhh}hu/#qru#glg#wkh\|#kdyh#prqh\|#wr#jr#wr#wkh#vwruh1
[/output]
[/test]
[test]
[input]
My Mum tries to be cool by saying that she likes all the same things that I do.
[/input]
[output]
P\|#Pxp#wulhv#wr#eh#frro#e\|#vd\|lqj#wkdw#vkh#olnhv#doo#wkh#vdph#wklqjv#wkdw#L#gr1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Multiply Big Number
[code-task title="Multiply Big Number" taskId="Java-Fundamentals-2-Text-Processing-Multiply-Big-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive **two** lines of input. 

- On the first line, you can receive a really big number in range \[0-1050\]

- On the second line, you will receive a single digit in range \[0-9\]

Your task is to calculate the product of these numbers and to print it to the console **without using the BigInteger class**.

### Example
| **Input** | **Output** |
| --- | --- |
| 23 | 46 | 
| 2 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 214748364711 | 858993458844 | 
| 4 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
23
2
[/input]
[output]
46
[/output]
[/test]
[test open]
[input]
214748364711
4
[/input]
[output]
858993458844
[/output]
[/test]
[test]
[input]
9999
9
[/input]
[output]
89991
[/output]
[/test]
[test]
[input]
2398482374762387432193481894638
4
[/input]
[output]
9593929499049549728773927578552
[/output]
[/test]
[test]
[input]
2938413876134964736
7
[/input]
[output]
20568897132944753152
[/output]
[/test]
[test]
[input]
000002
5
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999999
0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
230947329471398784192398431894
1
[/input]
[output]
230947329471398784192398431894
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="Java-Fundamentals-2-Text-Processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives a **String** as input and replaces any sequence of the same letters with a **single corresponding letter**.


### Example
| **Input** | **Output** |
| --- | --- |
| aaaaabbbbbcdddeeeedssaa | abcdedsa |
| qqqwerqwecccwd | qwerqwecwd |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
aaaaabbbbbcdddeeeedssaa
[/input]
[output]
abcdedsa
[/output]
[/test]
[test open]
[input]
qqqwerqwecccwd
[/input]
[output]
qwerqwecwd
[/output]
[/test]
[test]
[input]
aaaaaaaa
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
bbbbbbbbb
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
aaaaabbbbbbbcccceeede
[/input]
[output]
abcede
[/output]
[/test]
[test]
[input]
kkddidkkgiiggbd
[/input]
[output]
kdidkgigbd
[/output]
[/test]
[test]
[input]
asdasdasd
[/input]
[output]
asdasdasd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: String Explosion
[code-task title="String Explosion" taskId="Java-Fundamentals-2-Text-Processing-String-Explosion" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
There are some explosions that are marked with "\>" characters.

Immediately after each "\>" character, there will be an **integer**, which will represent the **power of the explosion**.

You should **remove** `x` **characters** (where `x` is the power of the explosion), **starting immediately after the "\>" character.

If you find **another "**\>**" character** while you are deleting characters, you should **add the power of the new explosion to the power of the previous explosion**.

When all characters are processed, **print out the remaining string** (without the deleted characters). 

You **should not delete the "**\>**" characters**, but you **should delete the integers that represent the powers of the explosions**

### Input
You will receive a single line of input that will contain a **String**.

### Output
Print out the resulting **string** after all explosions.

### Example
| **Input** | **Output** |
| --- | --- |
| abv\>1\>1\>2\>2asdasd | abv\>\>\>\>dasd |

You can see the **result of each explosion** at this hint section.

[hints]
[hint]
The first explosion is at index **3** and it has a power of **1**. 

We **delete** only the digit after the "\>" character. 

The string will look like this: `abv>>1>2>2asdasd`
[/hint] 
[hint]
The second explosion has a power of **1** and the resulting string is: `abv>>>2>2asdasd`
[/hint] 
[hint]
The third explosion has a power of **2**. 

We **delete** a digit and we find another explosion. 

This is the result: `abv>>>>2asdasd`
[/hint] 
[hint]
The fourth explosion has a power of **2**. 

We have a power of **1** left from the previous explosion and we **add** the power of the current explosion so that we have a **total** power of **3**. 

We **delete** the next three characters.

At this point, the string looks like this: `abv>>>>dasd`
[/hint] 
[hint]
There are no more explosions left, so we **print** out the result: `abv>>>>dasd`
[/hint]
[/hints] 

In this second hint section, you will find an explanation of the **solving** process.

[hints]
[hint]
Create a result `StringBuilder` and initialize the **power**:

```java
Scanner sc = new Scanner(System.in);

StringBuilder result = 
  new StringBuilder(sc.nextLine());
int power = 0;
```
[/hint] 
[hint]
**Increase** the **power** by the numeric values of the characters preceded by `>`:

```java
for (int i = 0; i < result.length(); i++) {
  if (result.charAt(i) == '>') {
    power += Character
      .getNumericValue(result.charAt(i + 1));
  } else if (power > 0 && result.charAt(i) != '>') {
    result.deleteCharAt(i);
    power--;
    i--;
  }
}
```

**Delete** the characters as needed. You should not delete `>`

[/hint] 
[hint]
**Print** out the remaining string to the console:

```java
System.out.println(result);
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
abv>1>1>2>2asdasd
[/input]
[output]
abv>>>>dasd
[/output]
[/test]
[test]
[input]
pesho>2sis>1a>2akarate>4hexmaster
[/input]
[output]
pesho>is>a>karate>master
[/output]
[/test]
[test]
[input]
abv>1as>1 dfgdg>2ss>2Adasd
[/input]
[output]
abv>as> dfgdg>s>dasd
[/output]
[/test]
[test]
[input]
aaaa>2B>3ACe>1asdfghjkl
[/input]
[output]
aaaa>>e>asdfghjkl
[/output]
[/test]
[test]
[input]
aaaa>5B>9ACE>9ASDFGHJKL
[/input]
[output]
aaaa>>>
[/output]
[/test]
[test]
[input]
frtkvd>8CARDS>5ACE>2
[/input]
[output]
frtkvd>>>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Letters Change Numbers
[code-task title="Letters Change Numbers" taskId="Java-Fundamentals-2-Text-Processing-Letters-Change-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
John likes Math, but he also likes the English alphabet a lot.

He invented a game with numbers and letters from the English alphabet.

The game is simple.

You get a **string consisting of two letters and a number between them**.

Depending on whether the **letter is in front of the number** or **after it**, you should perform different mathematical operations.

**You should start with the letter before the given number**. 

- If it is **uppercase**, you should divide the number by the position of the letter in the English alphabet

- If it is **lowercase**, you should multiply the number by the position of the letter in the English alphabet

Then you **move to the letter after the number**. 

- If it is **uppercase**, you should subtract the position of the letter in the alphabet from the resulting number

- If it is **lowercase**, you should add the position of the letter in the alphabet to the resulting number

The game became too easy for John. 

He decided to complicate it a bit by doing the same, but with multiple strings, keeping track **only of the total sum of all results**. 

Once he started playing the game with multiple strings and bigger numbers, it became quite hard for him. 

So, he asks you to **create a program that calculates the sum of all numbers** after the operations on each number have been done.

**For example**, we are given the following sequence of characters: "A12b s17G":

We have two strings - "A12b" and "s17G". 

We perform the required operations on each string and we sum the results. 

We **start with the first string**. The letter before the number is **A**. 

**A** is **uppercase** and its position in the alphabet is **1**. We divide the number **12** by its position **1** (12/1 = 12). 

Then we move to the letter after the number. 

**b** is **lowercase** and its position is **2**. We add **2** to the resulting number (12+2=14). 

We do the same for the **second string**. 

**s** is **lowercase** and its position is **19**, so we multiply the number **1** by its position **19** (17*19 = 323). 

Then we move to the letter after the number. 

**G** is uppercase and its position in the alphabet is **7**. We subtract **7** from the resulting number (323 – 7 = 316).

Finally, we **sum the results** (14 + 316 = 330).

### Input
The input comes from the console as a single line, holding the sequence of strings. 

The strings are separated by one or more white spaces.

The input data will always be valid and in the described format. There is no need to check it explicitly.

### Output
Print out a single number: the total sum of all processed numbers, formatted to the second digit after the decimal point.

### Example
| **Input** | **Output** |
| --- | --- |
| A12b s17G | 330.00 |

### Comments
12\/1=12, 12+2=14, 17\*19=323, 323–7=316, 14+316=330

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

