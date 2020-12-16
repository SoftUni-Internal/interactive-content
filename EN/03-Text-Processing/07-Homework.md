# Homework


[slide hideTitle]
# Problem: Valid Usernames
[code-task title="Valid Usernames" taskId="Java-Fundamentals-Part-Two-Text-Processing-Valid-Usernames" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads user names on a single line (joined by ", ") and **prints all valid usernames**.

A **valid username** is:
- Has **length between 3 and 16 characters**
- Contains **only letters, numbers, hyphens and underscores**
- Has **no redundant symbols** before, after or in between.

### Example
| **Input** | **Output** |
| --- | --- |
| Jeff, john45, ab, cd, peter-white, @smith | Jeff | 
| | john45 |
| | peter-white |

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
[code-task title="Character Multiplier" taskId="Java-Fundamentals-Part-Two-Text-Processing-Character-Multiplier" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a **method that takes two strings** as arguments and **returns the sum of their character codes multiplied** (multiply str1\[0\] with str2\[0\] and add to the total sum).

Then **continue with the next two characters**.

**If one of the strings is longer than the other**, **add the remaining character codes** to the total sum without multiplication.

### Example
| **Input** | **Output** |
| --- | --- |
| a aaaa | 9700 | 

### Example
| **Input** | **Output** |
| --- | --- |
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
[code-task title="Extract File" taskId="Java-Fundamentals-Part-Two-Text-Processing-Extract-Files" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **reads the path to a file** and **subtracts the file name and its extension**.

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
[code-task title="Caesar Cipher" taskId="Java-Fundamentals-Part-Two-Text-Processing-Caesar-Cipher" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **returns an encrypted version of the same text**.

**Encrypt the text by shifting each character with three positions forward**.

**For example** A would be replaced by D, B would become E, and so on.

**Print the encrypted text**.

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
[code-task title="Multiply Big Number" taskId="Java-Fundamentals-Part-Two-Text-Processing-Multiply-Big-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given **two lines** - **the first one can be a really big number** (0 to 1050).

The **second one will be a single digit** number (0 to 9).

You must display the product of these numbers.

**Note**: do not use the BigInteger class.

### Example
| **Input** | **Output** |
| --- | --- |
| 23 | 46 | 
| 2 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 923847238931983192462832102 | 3695388955727932769851328408 | 
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
923847238931983192462832102
4
[/input]
[output]
3695388955727932769851328408
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
[code-task title="Replace Repeating Chars" taskId="Java-Fundamentals-Part-Two-Text-Processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **reads a string from the console** and **replaces any sequence of the same letters with a single corresponding letter**.

### Example
| **Input** | **Output** |
| --- | --- |
| aaaaabbbbbcdddeeeedssaa | abcdedsa |

### Example
| **Input** | **Output** |
| --- | --- |
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
[code-task title="String Explosion" taskId="Java-Fundamentals-Part-Two-Text-Processing-String-Explosion" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Explosions are marked** with '>'.

Immediately after the mark, there will be an integer, which signifies the **strength of the explosion**.

You should **remove x characters** (where x is the strength of the explosion), **starting after the punch character** ('>').

If you find **another explosion mark** ('>') **while you're deleting characters**, you should **add the strength to your previous explosion**.

When all characters are processed, **print the string without the deleted characters**. 

You **should not delete the explosion character** - '>', but you **should delete the integers**, which represent the strength.

### Input
You will receive single line with the string.

### Output
Print what is left from the string after explosions.

### Example
| **Input** | **Output** |
| --- | --- |
| abv>1>1>2>2asdasd | abv>>>>dasd |

### Comments
1st explosion is at index 3 and it is with strength of 1. 

We delete only the digit after the explosion character. 

The string will look like this: abv>>1>2>2asdasd

2nd explosion is with strength one and the string transforms to this: abv>>>2>2asdasd

3rd explosion is now with strength of 2. 

We delete the digit and we find another explosion. 

At this point the string looks like this: abv>>>>2asdasd. 

4th explosion is with strength 2. 

We have 1 strength left from the previous explosion, we add the strength of the current explosion to what is left and that adds up to a total strength of 3. 

We delete the next three characters and we receive the string abv>>>>dasd 

We do not have any more explosions and we print the result: abv>>>>dasd

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
[code-task title="Letters Change Numbers" taskId="Java-Fundamentals-Part-Two-Text-Processing-Letters-Change-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[slide]
# Homework Results

[tasks-results/]

[/slide]