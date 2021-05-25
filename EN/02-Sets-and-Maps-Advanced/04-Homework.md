# Homework

[slide hideTitle]
# Problem: Unique Usernames
[code-task title="Unique Usernames" taskId="java-advanced-sets-and-maps-advanced-Unique-Usernames" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
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
Create a program that reads a sequence of usernames and keeps a collection with only the unique ones.

Print the unique usernames on the console in order of insertion. 

## Examples
| **Input** | **Output** |
| --- | --- |
| 6 | Hello |
| Hello | World |
| Hello | Greeting |
| Hello |  |
| World |  |
| Hello |  |
| Greetings |  |

| **Input** | **Output** |
| --- | --- |
| 10 | Peter |
| Peter | Maria |
| Maria | George |
| Peter | Stephen |
| George | Alexander |
| Stephen |  |
| Maria |  |
| Alexander |  |
| Peter |  |
| Stephen |  |
| George |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
6
Hello
Hello
Hello
World
Hello
Greetings
[/input]
[output]
Hello
World
Greetings
[/output]
[/test]
[test open]
[input]
10
Peter
Maria
Peter
George
Stephen
Maria
Alexander
Peter
Stephen
George
[/input]
[output]
Peter
Maria
George
Stephen
Alexander
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
10
&hhecee&
heehhech
eehddd&e
deddheh&
hddhcc&e
&&&hed&h
eedcc&d&
hedhdeed
edhdcehd
&&&&hedc
[/input]
[output]
&hhecee&
heehhech
eehddd&e
deddheh&
hddhcc&e
&&&hed&h
eedcc&d&
hedhdeed
edhdcehd
&&&&hedc
[/output]
[/test]
[test]
[input]
20
ecdeee&&
c&hhchhc
d&hhdedc
&&e&ehdh
cee&e&ce
decdhd&h
&hd&hdc&
e&dd&hc&
ccec&ehc
ehdhce&h
ec&dedee
hed&hddd
c&hccchd
d&&eecee
eehh&eec
hdhhdchd
ehc&ehee
cc&cdedh
&echh&dh
h&ehd&ce
[/input]
[output]
ecdeee&&
c&hhchhc
d&hhdedc
&&e&ehdh
cee&e&ce
decdhd&h
&hd&hdc&
e&dd&hc&
ccec&ehc
ehdhce&h
ec&dedee
hed&hddd
c&hccchd
d&&eecee
eehh&eec
hdhhdchd
ehc&ehee
cc&cdedh
&echh&dh
h&ehd&ce
[/output]
[/test]
[test]
[input]
100
ehd&ee&e
hcheddhh
&chcedec
&eehdd&d
&he&dedd
&eecc&h&
hededchc
hcdhd&&e
h&hcdehd
ee&h&ce&
eeeece&d
hd&hhh&h
de&h&dhe
hhdhe&he
c&deechh
c&decc&d
cd&&dd&e
c&hcehdh
&&&ed&h&
cdee&cde
ddheh&dc
&dh&hh&h
hc&eh&he
ehhdd&eh
&hddhhce
d&ch&de&
&cechhc&
ecddcdcc
dcedc&&&
cceedecc
cedc&d&d
&cdhedc&
&d&hd&h&
&cddddh&
ededhhhe
hdhcedd&
dhehhdch
h&&de&d&
e&dhhc&c
ed&&&dh&
c&&&ddee
&c&hed&h
&cchhdhc
dchceee&
&hh&d&&e
dhdheh&c
h&hh&h&&
echcdehh
hhhchc&h
ce&cecd&
ecdddcce
ccdeec&d
cc&eehhh
&eec&c&d
ccd&ddeh
cdedh&h&
c&c&hdee
cd&chdch
h&eccdhh
hch&&che
ecc&&dee
&hdddc&d
&eccd&dh
&ch&&dhh
c&hdd&cd
cce&e&he
h&dh&dh&
&&cceced
&hc&hhdd
&ec&h&&&
hd&d&ed&
dcechhce
ecehec&d
ecdcddcc
&&&&&ddd
ddcchecc
&&eee&ec
dhh&cdhh
dhe&cdee
cc&ecedh
eceh&ee&
&dehehdd
ccedc&c&
c&hdecec
dddeddde
hdedc&&h
c&eeeedd
&eeece&d
cc&hhd&c
dhhec&hd
d&&ecech
ddc&hde&
e&&&e&d&
hd&dd&de
dcehcce&
h&hdeh&d
ceh&c&&c
ehdeh&&d
h&hhec&e
c&&c&che
[/input]
[output]
ehd&ee&e
hcheddhh
&chcedec
&eehdd&d
&he&dedd
&eecc&h&
hededchc
hcdhd&&e
h&hcdehd
ee&h&ce&
eeeece&d
hd&hhh&h
de&h&dhe
hhdhe&he
c&deechh
c&decc&d
cd&&dd&e
c&hcehdh
&&&ed&h&
cdee&cde
ddheh&dc
&dh&hh&h
hc&eh&he
ehhdd&eh
&hddhhce
d&ch&de&
&cechhc&
ecddcdcc
dcedc&&&
cceedecc
cedc&d&d
&cdhedc&
&d&hd&h&
&cddddh&
ededhhhe
hdhcedd&
dhehhdch
h&&de&d&
e&dhhc&c
ed&&&dh&
c&&&ddee
&c&hed&h
&cchhdhc
dchceee&
&hh&d&&e
dhdheh&c
h&hh&h&&
echcdehh
hhhchc&h
ce&cecd&
ecdddcce
ccdeec&d
cc&eehhh
&eec&c&d
ccd&ddeh
cdedh&h&
c&c&hdee
cd&chdch
h&eccdhh
hch&&che
ecc&&dee
&hdddc&d
&eccd&dh
&ch&&dhh
c&hdd&cd
cce&e&he
h&dh&dh&
&&cceced
&hc&hhdd
&ec&h&&&
hd&d&ed&
dcechhce
ecehec&d
ecdcddcc
&&&&&ddd
ddcchecc
&&eee&ec
dhh&cdhh
dhe&cdee
cc&ecedh
eceh&ee&
&dehehdd
ccedc&c&
c&hdecec
dddeddde
hdedc&&h
c&eeeedd
&eeece&d
cc&hhd&c
dhhec&hd
d&&ecech
ddc&hde&
e&&&e&d&
hd&dd&de
dcehcce&
h&hdeh&d
ceh&c&&c
ehdeh&&d
h&hhec&e
c&&c&che
[/output]
[/test]
[test]
[input]
10
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
c&&c&che
[/input]
[output]
c&&c&che
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Sets of Elements
[code-task title="Sets of Elements" taskId="java-advanced-sets-and-maps-advanced-Sets-of-Elements" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
On the first line, you will be given **the length of two sets n and m**.

On the **next n + m** lines, there are **n numbers that are in the first set** and **m numbers that are in the second**.

Find all **non-repeating elements** that appear in **both** of them, and print them in **the same order** to the console:

Set with length `n = 4:{1, 3, 5, 7}`

Set with length `m = 3:{3, 4, 5}`

Set that contains all repeating elements \-\> `{3, 5}`

## Examples
| **Input** | **Output** |
| --- | --- |
| 4 3 | 3 5 |
| 1 |  |
| 3 |  |
| 5 |  |
| 7 |  |
| 3 |  |
| 4 |  |
| 5 |  |

| **Input** | **Output** |
| --- | --- |
| 2 2 | 1 |
| 1 |  |
| 3 |  |
| 1 |  |
| 5 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 3
1
3
5
7
3
4
5
[/input]
[output]
3 5
[/output]
[/test]
[test open]
[input]
2 2
1
3
1
5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
5 5
5
6
16
8
12
5
6
16
8
12
[/input]
[output]
5 6 16 8 12
[/output]
[/test]
[test]
[input]
5 5
5
5
16
8
12
5
5
16
8
12
[/input]
[output]
5 16 8 12
[/output]
[/test]
[test]
[input]
2 2
2
2
2
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
0 0
[/input]
[output]

[/output]
[/test]
[test]
[input]
40 40
12
91
84
19
35
46
81
73
17
93
47
109
18
38
31
8
37
118
51
118
48
19
38
9
86
98
30
69
120
62
98
96
80
35
117
18
10
118
19
93
104
114
116
23
110
82
121
75
50
20
114
44
113
87
79
37
108
94
31
95
45
114
119
39
4
107
16
103
73
19
71
49
118
71
99
79
47
29
10
39
[/input]
[output]
19 73 47 31 37 118 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Periodic Table
[code-task title="Periodic Table" taskId="java-advanced-sets-and-maps-advanced-Periodic-Table" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given an **n** number of **chemical compounds**.

You need to **keep track of all the chemical elements** used in the compounds. In the end, print all of the **unique ones in ascending order**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 4 | Ce Ee Mo O |
| Ce O |  |
| Mo O Ce |  |
| Ee |  |
| Mo |  |

| **Input** | **Output** |
| --- | --- |
| 3 | Ch Ge Mo Nb Ne O Tc |
| Ge Ch O Ne |  |
| Nb Mo Tc |  |
| O Ne |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Ce O
Mo O Ce
Ee
Mo
[/input]
[output]
Ce Ee Mo O
[/output]
[/test]
[test open]
[input]
3
Ge Ch O Ne
Nb Mo Tc
O Ne
[/input]
[output]
Ch Ge Mo Nb Ne O Tc
[/output]
[/test]
[test]
[input]
6
He Cl Na
Na
Fe
Si
He Cl
Ca
[/input]
[output]
Ca Cl Fe He Na Si
[/output]
[/test]
[test]
[input]
2
Al Ca Li
B Br U
[/input]
[output]
Al B Br Ca Li U
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
8
F Ne
Ar I
Ge Mg
Pt Te
Pt Te
Ge Mg
Ar I
F Ne
[/input]
[output]
Ar F Ge I Mg Ne Pt Te
[/output]
[/test]
[test]
[input]
5
Zn Ni Sn Ba As
Kr Co Cs Y W
As Ba Sn Ni Zn
W Y Cs Co Kr
Zn Ni Sn Ba As
[/input]
[output]
As Ba Co Cs Kr Ni Sn W Y Zn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Count Symbols
[code-task title="Count Symbols" taskId="java-advanced-sets-and-maps-advanced-Count-Symbols" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads some **text** and **counts the occurrences of each character** in it.

Print the results in **alphabetical** (lexicographical) order, using the syntax: `{symbol}: {count} time/s`.

## Examples
| **Input** | **Output** |
| --- | --- |
| SoftUni rocks |  : 1 time/s |
|  | S: 1 time/s |
|  | U: 1 time/s |
|  | c: 1 time/s |
|  | f: 1 time/s |
|  | i: 1 time/s |
|  | k: 1 time/s |
|  | n: 1 time/s |
|  | o: 2 time/s |
|  | r: 1 time/s |
|  | s: 1 time/s |
|  | t: 1 time/s |

| **Input** | **Output** |
| --- | --- |
| Did you know Math.Round rounds to the nearest even integer? |  : 9 time/s |
|  | .: 1 time/s |
|  | ?: 1 time/s |
|  | D: 1 time/s |
|  | M: 1 time/s |
|  | R: 1 time/s |
|  | a: 2 time/s |
|  | d: 3 time/s |
|  | e: 7 time/s |
|  | g: 1 time/s |
|  | h: 2 time/s |
|  | i: 2 time/s |
|  | k: 1 time/s |
|  | n: 6 time/s |
|  | o: 5 time/s |
|  | r: 3 time/s |
|  | s: 2 time/s |
|  | t: 5 time/s |
|  | u: 3 time/s |
|  | v: 1 time/s |
|  | w: 1 time/s |
|  | y: 1 time/s |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SoftUni rocks
[/input]
[output]
 : 1 time/s
S: 1 time/s
U: 1 time/s
c: 1 time/s
f: 1 time/s
i: 1 time/s
k: 1 time/s
n: 1 time/s
o: 2 time/s
r: 1 time/s
s: 1 time/s
t: 1 time/s
[/output]
[/test]
[test open]
[input]
Did you know Math.Round rounds to the nearest even integer?
[/input]
[output]
 : 9 time/s
.: 1 time/s
?: 1 time/s
D: 1 time/s
M: 1 time/s
R: 1 time/s
a: 2 time/s
d: 3 time/s
e: 7 time/s
g: 1 time/s
h: 2 time/s
i: 2 time/s
k: 1 time/s
n: 6 time/s
o: 5 time/s
r: 3 time/s
s: 2 time/s
t: 5 time/s
u: 3 time/s
v: 1 time/s
w: 1 time/s
y: 1 time/s
[/output]
[/test]
[test]
[input]
Write a program that reads some text from the console and counts the occurrences of each character in it
[/input]
[output]
 : 18 time/s
W: 1 time/s
a: 8 time/s
c: 8 time/s
d: 2 time/s
e: 11 time/s
f: 2 time/s
g: 1 time/s
h: 5 time/s
i: 3 time/s
l: 1 time/s
m: 3 time/s
n: 5 time/s
o: 8 time/s
p: 1 time/s
r: 9 time/s
s: 5 time/s
t: 10 time/s
u: 2 time/s
x: 1 time/s
[/output]
[/test]
[test]
[input]
Problem 4.	Count Symbols
[/input]
[output]
    : 1 time/s
 : 2 time/s
.: 1 time/s
4: 1 time/s
C: 1 time/s
P: 1 time/s
S: 1 time/s
b: 2 time/s
e: 1 time/s
l: 2 time/s
m: 2 time/s
n: 1 time/s
o: 3 time/s
r: 1 time/s
s: 1 time/s
t: 1 time/s
u: 1 time/s
y: 1 time/s
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0: 1 time/s
[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]
K - the type of keys maintained by this map
V - the type of mapped values
[/input]
[output]
 : 9 time/s
-: 1 time/s
K: 1 time/s
a: 3 time/s
b: 1 time/s
d: 1 time/s
e: 4 time/s
f: 1 time/s
h: 2 time/s
i: 3 time/s
k: 1 time/s
m: 2 time/s
n: 2 time/s
o: 1 time/s
p: 2 time/s
s: 2 time/s
t: 4 time/s
y: 3 time/s
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Phonebook
[code-task title="Phonebook" taskId="java-advanced-sets-and-maps-advanced-Phonebook" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives some info from the console about **people** and their **phone numbers**.

You are free to choose how the data is entered. Each **entry** should have **one name** and **one number** (both of them strings). 

If you receive a name that **already exists** in the phonebook, update its number.

After filling the phonebook, upon receiving the **command** "**search**", your program should be able to perform a search in the contact by name and print the details in the format `{name} -> {number}`. 

In case the contact isn't found, print "**Contact** \{**name**\} **does not exist.**"

The program should end when receiving the "**stop**" command.

## Examples
| **Input** | **Output** |
| --- | --- |
| John-00359888080808 | Contact Maria does not exist. |
| search | John \-\> 00359888080808 |
| Maria |  |
| John |  |
| stop |  |

| **Input** | **Output** |
| --- | --- |
| John-00359888001122 | Samuel \-\> 0047123123123 |
| Peter-0040333111000 | Contact samuel does not exist. |
| George-0049112233 | Contact PeTeR does not exist. |
| Samuel-0047123123123 | Peter \-\> 0040333111000 |
| search |  |
| Samuel |  |
| samuel |  |
| PeTeR |  |
| Peter |  |
| stop |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John-00359888080808
search
Maria
John
stop
[/input]
[output]
Contact Maria does not exist.
John -\> 00359888080808
[/output]
[/test]
[test open]
[input]
John-00359888001122
Peter-0040333111000
George-0049112233
Samuel-0047123123123
search
Samuel
samuel
PeTeR
Peter
stop
[/input]
[output]
Samuel -\> 0047123123123
Contact samuel does not exist.
Contact PeTeR does not exist.
Peter -\> 0040333111000
[/output]
[/test]
[test]
[input]
Peter-00359888001122
Daniel-004312345678
James-0032987654321
Oscar-003011335577
search
Oscar
Daniele
James
Pete
stop
[/input]
[output]
Oscar -\> 003011335577
Contact Daniele does not exist.
James -\> 0032987654321
Contact Pete does not exist.
[/output]
[/test]
[test]
[input]
Abby-0049112233
Barbara-0033999888777
Daisy-0037166668888
Faith-0034333555777
Gabriela-0040333111000
Ella-0047123123123
search
Daisy
Gabrielle
Faith
Aby
stop
[/input]
[output]
Daisy -\> 0037166668888
Contact Gabrielle does not exist.
Faith -\> 0034333555777
Contact Aby does not exist.
[/output]
[/test]
[test]
[input]
search
stop
[/input]
[output]

[/output]
[/test]
[test]
[input]
France-0033
Germany-0049
Srain-0034
Portugal-00351
Italy-0039
Netherlands-0031
Greece-0030
Austria-0043
search
Ireland
Bulgaria
Estonia
Finland
Norway
stop
[/input]
[output]
Contact Ireland does not exist.
Contact Bulgaria does not exist.
Contact Estonia does not exist.
Contact Finland does not exist.
Contact Norway does not exist.
[/output]
[/test]
[test]
[input]
Oliver-004455667788
Sophia-003344556677
search
Sophia
Oliver
stop
[/input]
[output]
Sophia -\> 003344556677
Oliver -\> 004455667788
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: A Miner Task
[code-task title="A Miner Task" taskId="java-advanced-sets-and-maps-advanced-A-Miner-Task" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a sequence of strings, each on a **new line**.

Every **odd** line represents a **resource** (e.g.
**Gold**, **Silver**, **Copper**, and so on), and every **even - a quantity**.

Your task is to **collect** the resources and to print them each on a **new line**.

**Print the resources and their quantities in the format:**

`{resource} –> {quantity}`

The quantity inputs will be in **range** \[1 ... 2 000 000 000\]

## Examples
| **Input** | **Output** |
| --- | --- |
| Gold | Gold \-\> 155 |
| 155 | Silver \-\> 10 |
| Silver | Copper \-\> 17 |
| 10 |  |
| Copper |  |
| 17 |  |
| stop |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Gold
155
Silver
10
Copper
17
stop
[/input]
[output]
Gold -\> 155
Silver -\> 10
Copper -\> 17
[/output]
[/test]
[test open]
[input]
Gold
15555555
Silver
10000000
Copper
17000000
Copper
1700
stop
[/input]
[output]
Gold -\> 15555555
Silver -\> 10000000
Copper -\> 17001700
[/output]
[/test]
[test]
[input]
Gold
96941
Silver
40909
Cooper
70826
Gold
26953
Silver
11860
Cooper
68966
Gold
28604
Silver
67208
Cooper
62054
Gold
70777
Silver
5012
Cooper
49873
Gold
667
Silver
70628
Cooper
8741
Gold
42550
Silver
19878
Cooper
16479
Gold
43512
Silver
77785
Cooper
60305
Gold
13619
Silver
53187
Cooper
4777
Gold
45510
Silver
1355
Cooper
434
Gold
19443
Silver
554
Cooper
22528
stop
[/input]
[output]
Gold -\> 388576
Silver -\> 348376
Cooper -\> 364983
[/output]
[/test]
[test]
[input]
Gold
43426
Silver
9066
Cooper
48254
Gold
91578
Silver
65032
Cooper
79895
Gold
13100
Silver
10035
Cooper
38187
Gold
34882
Silver
27216
Cooper
4153
Gold
83120
Silver
91917
Cooper
50021
stop
[/input]
[output]
Gold -\> 266106
Silver -\> 203266
Cooper -\> 220510
[/output]
[/test]
[test]
[input]
Gold
26922
Silver
8566
Cooper
57765
Gold
70738
Silver
6941
Cooper
2538
Gold
70120
Silver
1696
Cooper
73384
Gold
91663
Silver
78550
Cooper
24019
Gold
16221
Silver
89664
Cooper
7669
stop
[/input]
[output]
Gold -\> 275664
Silver -\> 185417
Cooper -\> 165375
[/output]
[/test]
[test]
[input]
Gold
0
Silver
0
Cooper
0
stop
[/input]
[output]
Gold -\> 0
Silver -\> 0
Cooper -\> 0
[/output]
[/test]
[test]
[input]
Gold
2000000000
Silver
2000000000
Cooper
2000000000
stop
[/input]
[output]
Gold -\> 2000000000
Silver -\> 2000000000
Cooper -\> 2000000000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Fix Emails
[code-task title="Fix Emails" taskId="java-advanced-sets-and-maps-advanced-Fix-Emails" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a sequence of strings, each on a new line, until you receive the "**stop**" command.

The first string is a **name** of a person.

On the second line, you receive his **email**.

Your task is to **collect** their names and emails and **remove** emails whose domain ends with "US", "UK" or "com" (case insensitive).

Print in the following format: `{name} -> {email}`

## Examples
| **Input** | **Output** |
| --- | --- |
| John | John \-\> johnDoe@softuni.org |
| johnDoe@softuni.org | Peter Smith \-\> smith.peter@softuni.org |
| Peter Smith |  |
| smith.peter@softuni.org |  |
| Taylor Baker |  |
| baker@gmail.com |  |
| stop |  |

| **Input** | **Output** |
| --- | --- |
| Peter Adamas | Duke Jenkins \-\> jenkins.duke@softuni.org |
| peter_adams@gmail.com |  |
| Anna Foster |  |
| foster.anna@yahoo.com |  |
| Duke Jenkins |  |
| jenkins.duke@softuni.org |  |
| stop |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John
johnDoe@softuni.org
Peter Smith
smith.peter@softuni.org
Taylor Baker
baker@gmail.com
stop
[/input]
[output]
John -\> johnDoe@softuni.org
Peter Smith -\> smith.peter@softuni.org
[/output]
[/test]
[test open]
[input]
Peter Adamas
peter_adams@gmail.com
Anna Foster
foster.anna@yahoo.com
Duke Jenkins
jenkins.duke@softuni.org
stop
[/input]
[output]
Duke Jenkins -\> jenkins.duke@softuni.org
[/output]
[/test]
[test]
[input]
Evelyn Pearce
pearce.evelyn@gamil.com
Jackson Scott
jackson.scott@softuni.org
Harper Moor
moor@gmail.us
stop
[/input]
[output]
Jackson Scott -\> jackson.scott@softuni.org
[/output]
[/test]
[test]
[input]
stop
[/input]
[output]

[/output]
[/test]
[test]
[input]
Mason Howard
howard.mason@gmail.com
William Miller
miller.william@yahoo.com
Kevin Butler
butler.kevin@gmail.us
stop
[/input]
[output]

[/output]
[/test]
[test]
[input]
Susan Kennedy
kennedy.susan@softuni.org
Tracy Adams
adams.tracy@softuni.bg
Miranda Carter
carter.miranda@greenpeace.org
stop
[/input]
[output]
Susan Kennedy -\> kennedy.susan@softuni.org
Tracy Adams -\> adams.tracy@softuni.bg
Miranda Carter -\> carter.miranda@greenpeace.org
[/output]
[/test]
[test]
[input]
Lynda
lynda@gmail.se
Angela
angela@yahoo.it
Ruth
rith@gmail.bg
Cindy
cindy@gmail.de
Amilia
amilia@gmail.com.uk
stop
[/input]
[output]
Lynda -\> lynda@gmail.se
Angela -\> angela@yahoo.it
Ruth -\> rith@gmail.bg
Cindy -\> cindy@gmail.de
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Hands Of Cards
[code-task title="Hands Of Cards" taskId="java-advanced-sets-and-maps-advanced-Hands-Of-Cards" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a sequence of people.

Each person draws cards from their deck.

The input will be in **separate** lines in the **format**:

"\{**personName**\}: \{**PT, PT, PT,… PT**\}"

Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card, and T (S, H, D, C) is the type. The input ends when a "**JOKER**" is drawn. 

The name can contain any ASCII symbol except for: "**:**"

The input will always be valid and in the format described.

A single person **can not have more than one** card with the same power and type. 

If he draws such a card, he **discards** it. 

The people are playing with **multiple decks**. 

Each card has a value that is **calculated** by the power multiplied by the type. 

Powers from **2 to 10** have the same value and **J to A** are **11 to 14**. 

Types are mapped to multipliers in the the following format (`S -> 4`, `H-> 3`, `D -> 2`, `C -> 1`).

In the end, print the **total value each player** has in his hand in the format:

`{personName}: {value}`

## Examples
| **Input** | **Output** |
| --- | --- |
| Peter: 2C, 4H, 9H, AS, QS | Peter: 167 |
| Jenny: 3H, 10S, JC, KD, 5S, 10S | Jenny: 175 |
| Alice: QH, QC, QS, QD | Alice: 197 |
| Jenny: 6H, 7S, KC, KD, 5S, 10C |  |
| Alice: QH, QC, JS, JD, JC |  |
| Peter: JD, JD, JD, JD, JD, JD |  |
| JOKER |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter: 2C, 4H, 9H, AS, QS
Jenny: 3H, 10S, JC, KD, 5S, 10S
Alice: QH, QC, QS, QD
Jenny: 6H, 7S, KC, KD, 5S, 10C
Alice: QH, QC, JS, JD, JC
Peter: JD, JD, JD, JD, JD, JD
JOKER
[/input]
[output]
Peter: 167
Jenny: 175
Alice: 197
[/output]
[/test]
[test]
[input]
Jonathan Davis: JD, JD, JD, JD
JOKER
[/input]
[output]
Jonathan Davis: 22
[/output]
[/test]
[test]
[input]
John: 2C, 4H, 9H, AS, QS
Peter: 3H, 10S, JC, KD, 5S, 10S
Steve: QH, QC, QS, QD
Alice: 6H, 7S, KC, KD, 5S, 10C
Jenny: QH, QC, JS, JD, JC
Sandra: JD, 7D, 3D, 4D, 5D, 6D
JOKER
[/input]
[output]
John: 145
Peter: 106
Steve: 120
Alice: 115
Jenny: 125
Sandra: 72
[/output]
[/test]
[test]
[input]
JOKER
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: User Logs
[code-task title="User Logs" taskId="java-advanced-sets-and-maps-advanced-User-Logs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You are given input in the format:

`IP=(IP.Address) message=(A&sample&message) user=(username)`

Your task is to **parse** the **IP** and the **username** from the input and for **every user**, you have to display **every IP** from which the corresponding user has sent a message and the **count of the messages** sent with the corresponding IP. 

In the output, the usernames must be **sorted alphabetically** while their IP addresses should be displayed in the **order of their first appearance.** 

The output should be in the following format:

```
username:
IP => count, IP => count
```

For example, the following input - 
`IP=192.23.30.40 message='Hello&derps.' user=destroyer`
You have to get the username **destroyer** and the IP **192.23.30.40** and display it in the following format:

```
destroyer:
192.23.30.40 => 1.
```

The username destroyer has sent a message from IP 192.23.30.40 once.

Check the **examples** below. 

They will further clarify the assignment.

## Input

The input comes from the console as a **varying number** of lines. 

You have to parse every command until the `end` command. 

The input will be in the format displayed above, there is no need to check it explicitly.

## Output

For every user found, you have to display each log in the format:

```
username:
IP => count, IP => count
```

The IP addresses must be split with a comma, and each line of IP addresses must end with a dot.

## Constraints

- The number of commands will be in range \[1 ... 50\]
- The IP addresses will be in the format of either **IPv4** or **IPv6**
- The messages will be in the format: **This&is&a&message**
- The username will be a string with length in range \[3 ... 50\]

## Examples
| **Input** | **Output** |
| --- | --- |
| `IP=192.23.30.40 message='Hello&derps.' user=destroyer` | destroyer:  |
| `IP=192.23.30.41 message='Hello&yall.' user=destroyer` | 192.23.30.40 \=\> 2, 192.23.30.41 \=\> 1, 192.23.30.42 \=\> 1. |
| `IP=192.23.30.40 message='Hello&hi.' user=destroyer` |  |
| `IP=192.23.30.42 message='Hello&People.' user=destroyer` |  |
| end |  |

| **Input** | **Output** |
| --- | --- |
| `IP=FE80:0000:0000:0000:0202:B3FF:FE1E:8329 message='Hey&son' user=mother` | child0:  |
| `IP=192.23.33.40 message='Hi&mom!' user=child0` | 192.23.33.40 => 1. |
| `IP=192.23.30.40 message='Hi&from&me&too' user=child1` | child1:  |
| `IP=192.23.30.42 message='spam' user=destroyer`| 192.23.30.40 \=\> 1. |
| `IP=192.23.30.42 message='spam' user=destroyer` | destroyer:  |
| `IP=192.23.50.40 message='' user=yetAnotherUsername` | 192.23.30.42 \=\> 2. |
| `IP=192.23.50.40 message='comment' user=yetAnotherUsername` | mother:  |
| `IP=192.23.155.40 message='Hello.' user=unknown`| FE80:0000:0000:0000:0202:B3FF:FE1E:8329 \=\> 1. |
| end | unknown:  |
|  | 192.23.155.40 \=\> 1. |
|  | yetAnotherUsername:  |
|  | 192.23.50.40 \=\> 2. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.41 message='Hello&yall.' user=destroyer
IP=192.23.30.40 message='Hello&hi.' user=destroyer
IP=192.23.30.42 message='Hello&Dudes.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.40 =\> 2, 192.23.30.41 =\> 1, 192.23.30.42 =\> 1.
[/output]
[/test]
[test open]
[input]
IP=FE80:0000:0000:0000:0202:B3FF:FE1E:8329 message='Hey&son' user=mother
IP=192.23.33.40 message='Hi&mom!' user=child0
IP=192.23.30.40 message='Hi&from&me&too' user=child1
IP=192.23.30.42 message='spam' user=destroyer
IP=192.23.30.42 message='spam' user=destroyer
IP=192.23.50.40 message='' user=yetAnotherUsername
IP=192.23.50.40 message='comment' user=yetAnotherUsername
IP=192.23.155.40 message='Hello.' user=unknown
end
[/input]
[output]
child0: 
192.23.33.40 =\> 1.
child1: 
192.23.30.40 =\> 1.
destroyer: 
192.23.30.42 =\> 2.
mother: 
FE80:0000:0000:0000:0202:B3FF:FE1E:8329 =\> 1.
unknown: 
192.23.155.40 =\> 1.
yetAnotherUsername: 
192.23.50.40 =\> 2.
[/output]
[/test]
[test]
[input]
IP=192.23.30.44 message='hiiiii' user=hier
IP=192.23.33.45 message='Hi&mom!' user=blabla
IP=192.23.30.42 message='Hi&from&me&too' user=someone
IP=192.23.30.42 message='spam' user=destroyer
IP=192.23.30.42 message='spam' user=destroyer
IP=192.23.50.44 message='' user=yetAnotherUsername
IP=192.23.50.40 message='comment' user=yetAnotherUsername
IP=192.23.155.40 message='Hello.' user=mario
end
[/input]
[output]
blabla: 
192.23.33.45 =\> 1.
destroyer: 
192.23.30.42 =\> 2.
hier: 
192.23.30.44 =\> 1.
mario: 
192.23.155.40 =\> 1.
someone: 
192.23.30.42 =\> 1.
yetAnotherUsername: 
192.23.50.44 =\> 1, 192.23.50.40 =\> 1.
[/output]
[/test]
[test]
[input]
end
[/input]
[output]

[/output]
[/test]
[test]
[input]
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=mario
IP=192.23.30.44 message='Hello&derps.' user=mario
IP=192.23.30.40 message='Hello&derps.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.40 =\> 4, 192.23.30.42 =\> 2.
mario: 
192.23.30.40 =\> 1, 192.23.30.44 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=mario
IP=192.23.30.44 message='Hello&derps.' user=mario
IP=192.23.30.40 message='Hello&derps.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.40 =\> 4, 192.23.30.42 =\> 2.
mario: 
192.23.30.40 =\> 1, 192.23.30.44 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=592.23.300.40 message='Hello&derps.' user=destroyer
IP=192.222.30.40 message='Hello&derps.' user=destroyer
IP=192.234.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=mario
IP=422.23.30.44 message='Hello&derps.' user=mario
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=592.23.300.40 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=mario
IP=192.234.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.40 =\> 4, 592.23.300.40 =\> 2, 192.222.30.40 =\> 1, 192.234.30.42 =\> 1, 192.23.30.42 =\> 3, 192.234.30.40 =\> 1.
mario: 
192.23.30.40 =\> 2, 422.23.30.44 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.23.500.40 message='Hello&derps.' user=destroyer
IP=192.23.366.40 message='asdasdasd' user=greetings
IP=192.23.111.40 message='sdfsdfsd' user=bojo
IP=192.245.30.42 message='Hello&derps.' user=bojo
IP=192.254.30.42 message='Hello&derps.' user=marian
IP=192.666.30.40 message='Aloha' user=hello9
IP=192.999.30.44 message='asfdsfdsf' user=hello
IP=192.120.30.40 message='ggdsfdsfsd' user=zzzzzzzzzzz
IP=192.23.30.500 message='spampamapmapa' user=bbbbbbbb
IP=192.23.30.666 message='yoooooo' user=aaaa
IP=192.23.30.642 message='heyooo' user=sdfsdf
IP=192.23.30.123 message='fgfgfgfgd' user=destroyer
IP=192.23.245.545 message='grrrrrrrrr' user=mario
IP=192.23.123.40 message='aaaaaaaa' user=destroyer
IP=192.23.467.40 message='aaaaaaaaa' user=destroyer
end
[/input]
[output]
aaaa: 
192.23.30.666 =\> 1.
bbbbbbbb: 
192.23.30.500 =\> 1.
bojo: 
192.23.111.40 =\> 1, 192.245.30.42 =\> 1.
destroyer: 
192.23.500.40 =\> 1, 192.23.30.123 =\> 1, 192.23.123.40 =\> 1, 192.23.467.40 =\> 1.
greetings: 
192.23.366.40 =\> 1.
hello: 
192.999.30.44 =\> 1.
hello9: 
192.666.30.40 =\> 1.
marian: 
192.254.30.42 =\> 1.
mario: 
192.23.245.545 =\> 1.
sdfsdf: 
192.23.30.642 =\> 1.
zzzzzzzzzzz: 
192.120.30.40 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.40 =\> 5.
[/output]
[/test]
[test]
[input]
IP=192.23.30.42 message='Hello&derps.' user=destroyer
IP=192.23.30.40 message='Hello&derps.' user=mario
IP=192.23.30.44 message='Hello&derps.' user=mario
IP=192.23.30.40 message='Hello&derps.' user=destroyer
end
[/input]
[output]
destroyer: 
192.23.30.42 =\> 1, 192.23.30.40 =\> 1.
mario: 
192.23.30.40 =\> 1, 192.23.30.44 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=nasko
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=nasko
IP=192.239.500.123 message='spam' user=hello
IP=192.239.500.123 message='spam' user=mario
IP=192.239.500.123 message='spam' user=mario
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=borko
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=krasi
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=mario
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=mitko
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=destroyer
IP=192.239.500.123 message='spam' user=mario
IP=2001:0000:5ef5:79fd:8aa:9D2:3f57:860a message='spam' user=asshole
end
[/input]
[output]
asshole: 
2001:0000:5ef5:79fd:8aa:9D2:3f57:860a =\> 1.
borko: 
192.239.500.123 =\> 1.
destroyer: 
192.239.500.123 =\> 9.
hello: 
192.239.500.123 =\> 1.
krasi: 
192.239.500.123 =\> 1.
mario: 
192.239.500.123 =\> 4.
mitko: 
192.239.500.123 =\> 1.
nasko: 
192.239.500.123 =\> 2.
[/output]
[/test]
[test]
[input]
IP=192.23.500.40 message='Hello&derps.' user=hello
IP=192.23.362.46 message='asdasdasd' user=greetings
IP=192.23.111.40 message='sdfsdfsd' user=bojo
IP=192.245.30.42 message='Hello&derps.' user=bojo
IP=192.254.345.42 message='Hello&derps.' user=fdgdfgdfgdf
IP=192.666.30.40 message='Aloha' user=hello
IP=192.999.30.44 message='asfdsfdsf' user=dsfdgdfg
IP=192.120.30.40 message='ggdsfdsfsd' user=zzzzzzzzzzz
IP=192.23.362.500 message='spampamapmapa' user=bbbbbbbb
IP=FE80:0000:0000:0000:0202:B3FF:FE1E:8329 message='yoooooo' user=aaaa
IP=192.23.30.642 message='heyooo' user=sdfsdf
IP=192.23.30.123 message='fgfgfgfgd' user=fgdfgdfgdfg
IP=192.232.245.545 message='grrrrrrrrr' user=mario
IP=192.231.123.59 message='aaaaaaaa' user=aaaaaaaaa
IP=192.231.467.40 message='aaaaaaaaa' user=destroyer
end
[/input]
[output]
aaaa: 
FE80:0000:0000:0000:0202:B3FF:FE1E:8329 =\> 1.
aaaaaaaaa: 
192.231.123.59 =\> 1.
bbbbbbbb: 
192.23.362.500 =\> 1.
bojo: 
192.23.111.40 =\> 1, 192.245.30.42 =\> 1.
destroyer: 
192.231.467.40 =\> 1.
dsfdgdfg: 
192.999.30.44 =\> 1.
fdgdfgdfgdf: 
192.254.345.42 =\> 1.
fgdfgdfgdfg: 
192.23.30.123 =\> 1.
greetings: 
192.23.362.46 =\> 1.
hello: 
192.23.500.40 =\> 1, 192.666.30.40 =\> 1.
mario: 
192.232.245.545 =\> 1.
sdfsdf: 
192.23.30.642 =\> 1.
zzzzzzzzzzz: 
192.120.30.40 =\> 1.
[/output]
[/test]
[test]
[input]
IP=192.23.500.40 message='Hello&derps.' user=hello
IP=192.23.362.46 message='asdasdasd' user=greetings
IP=192.23.111.40 message='sdfsdfsd' user=bojo
IP=192.245.30.42 message='Hello&derps.' user=bojo
IP=192.254.345.42 message='Hello&derps.' user=fdgdfgdfgdf
IP=192.666.30.40 message='Aloha' user=hello
IP=192.999.30.44 message='asfdsfdsf' user=dsfdgdfg
IP=192.120.30.40 message='ggdsfdsfsd' user=zzzzzzzzzzz
IP=192.23.362.500 message='spampamapmapa' user=bbbbbbbb
IP=192.234.30.666 message='yoooooo' user=aaaa
IP=192.23.30.642 message='heyooo' user=sdfsdf
IP=192.23.30.123 message='fgfgfgfgd' user=fgdfgdfgdfg
IP=192.232.245.545 message='grrrrrrrrr' user=mario
IP=192.231.123.59 message='aaaaaaaa' user=aaaaaaaaa
IP=192.231.467.40 message='aaaaaaaaa' user=destroyer
IP=192.23.500.40 message='Hello&derps.' user=hello
IP=192.23.362.46 message='asdasdasd' user=greetings
IP=192.23.111.40 message='sdfsdfsd' user=bojo
IP=192.245.30.42 message='Hello&derps.' user=bojo
IP=192.254.345.42 message='Hello&derps.' user=fdgdfgdfgdf
IP=192.666.30.40 message='Aloha' user=hello
IP=192.999.30.44 message='asfdsfdsf' user=dsfdgdfg
IP=192.120.30.40 message='ggdsfdsfsd' user=zzzzzzzzzzz
IP=192.23.362.500 message='spampamapmapa' user=bbbbbbbb
IP=192.234.30.666 message='yoooooo' user=aaaa
IP=192.23.30.642 message='heyooo' user=sdfsdf
IP=192.23.30.123 message='fgfgfgfgd' user=fgdfgdfgdfg
IP=192.232.245.545 message='grrrrrrrrr' user=mario
IP=192.231.123.59 message='aaaaaaaa' user=aaaaaaaaa
IP=192.231.467.40 message='aaaaaaaaa' user=destroyer
end
[/input]
[output]
aaaa: 
192.234.30.666 =\> 2.
aaaaaaaaa: 
192.231.123.59 =\> 2.
bbbbbbbb: 
192.23.362.500 =\> 2.
bojo: 
192.23.111.40 =\> 2, 192.245.30.42 =\> 2.
destroyer: 
192.231.467.40 =\> 2.
dsfdgdfg: 
192.999.30.44 =\> 2.
fdgdfgdfgdf: 
192.254.345.42 =\> 2.
fgdfgdfgdfg: 
192.23.30.123 =\> 2.
greetings: 
192.23.362.46 =\> 2.
hello: 
192.23.500.40 =\> 2, 192.666.30.40 =\> 2.
mario: 
192.232.245.545 =\> 2.
sdfsdf: 
192.23.30.642 =\> 2.
zzzzzzzzzzz: 
192.120.30.40 =\> 2.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Population Counter
[code-task title="Population Counter" taskId="java-advanced-sets-and-maps-advanced-Population-Counter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
On each input line, you will be given the data in the format: "**city**\|**country**\|**population**". 

There will be **no redundant whitespaces anywhere** in the input. 

Aggregate the data **by country and by city** and print it to the console. 

**For each country**, print its **total population** and on separate lines the data for each of its cities. 

**Countries** should be ordered by **their total population in descending order** and within each country, the **cities** should be ordered by **the same criterion**. 

If two countries/cities have the same population, keep them in the **order** in which they were **entered**. 


## Input

- The data consist of a variable number of lines and ends when the "**report**" command is received
- The input data will always be valid and in the format described. There is no need to check it explicitly

## Output

- The output should be printed to the console
- Print the aggregated data for each country and city in the format shown below

## Constraints

- The name of the city, country, and the population count will be separated from each other by **a pipe** `|`
- The **number of input lines** will be in range \[2 ... 50\]
- A city-country pair will not be repeated
- The **population count** of each city will be an integer in range \[0 ... 2 000 000 000\]

## Examples
| **Input** | **Output** |
| --- | --- |
| Bucharest\|Romania\|2000000 | Romania (total population: 2000000) |
| report | \=\>Bucharest: 2000000 |

| **Input** | **Output** |
| --- | --- |
| Sofia\|Bulgaria\|1 | UK (total population: 4) |
| Veliko Tarnovo\|Bulgaria\|2 | =>London: 4 |
| London\|UK\|4 | Bulgaria (total population: 3) |
| Rome\|Italy\|3 | =>Veliko Tarnovo: 2 |
| report | =>Sofia: 1 |
|  | Italy (total population: 3) |
|  | =>Rome: 3 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Bucharest\|Romania\|2000000
report
[/input]
[output]
Romania (total population: 2000000)
=\>Bucharest: 2000000
[/output]
[/test]
[test open]
[input]
Sofia\|Bulgaria\|1
Varna\|Bulgaria\|2
London\|UK\|4
Rome\|Italy\|3
report
[/input]
[output]
UK (total population: 4)
=\>London: 4
Bulgaria (total population: 3)
=\>Varna: 2
=\>Sofia: 1
Italy (total population: 3)
=\>Rome: 3
[/output]
[/test]
[test]
[input]
Albury\|Russia\|654521985
Grenoble\|United Kingdom\|1531927399
Naples\|France\|954101852
Toulouse\|United States\|782480507
Toronto\|Bulgaria\|455044005
Sofia\|Bulgaria\|773739884
Cordoba\|Canada\|1884583444
Verona\|France\|315269521
Florence\|Argentina\|1501567638
Catania\|United States\|687235468
Plovdiv\|Spain\|783998291
Pleven\|Japan\|258548204
report
[/input]
[output]
Canada (total population: 1884583444)
=\>Cordoba: 1884583444
United Kingdom (total population: 1531927399)
=\>Grenoble: 1531927399
Argentina (total population: 1501567638)
=\>Florence: 1501567638
United States (total population: 1469715975)
=\>Toulouse: 782480507
=\>Catania: 687235468
France (total population: 1269371373)
=\>Naples: 954101852
=\>Verona: 315269521
Bulgaria (total population: 1228783889)
=\>Sofia: 773739884
=\>Toronto: 455044005
Spain (total population: 783998291)
=\>Plovdiv: 783998291
Russia (total population: 654521985)
=\>Albury: 654521985
Japan (total population: 258548204)
=\>Pleven: 258548204
[/output]
[/test]
[test]
[input]
Pernik\|United Kingdom\|1153523021
Cordoba\|Bulgaria\|899369979
Rimini\|France\|1600378510
Reims\|Russia\|434059958
Sydney\|France\|26170099
Bordeaux\|Italy\|187931875
Palermo\|Canada\|313884804
Genoa\|Spain\|1639663550
Grenoble\|United States\|1295694
Sapporo\|Japan\|1179355114
Yokohama\|Japan\|579616388
Toronto\|France\|117036690
Paris\|Australia\|1536964913
report
[/input]
[output]
Japan (total population: 1758971502)
=\>Sapporo: 1179355114
=\>Yokohama: 579616388
France (total population: 1743585299)
=\>Rimini: 1600378510
=\>Toronto: 117036690
=\>Sydney: 26170099
Spain (total population: 1639663550)
=\>Genoa: 1639663550
Australia (total population: 1536964913)
=\>Paris: 1536964913
United Kingdom (total population: 1153523021)
=\>Pernik: 1153523021
Bulgaria (total population: 899369979)
=\>Cordoba: 899369979
Russia (total population: 434059958)
=\>Reims: 434059958
Canada (total population: 313884804)
=\>Palermo: 313884804
Italy (total population: 187931875)
=\>Bordeaux: 187931875
United States (total population: 1295694)
=\>Grenoble: 1295694
[/output]
[/test]
[test]
[input]
Toulouse\|Bulgaria\|1681169054
Montpellier\|France\|1621943700
Lyon\|Germany\|1373592125
Genoa\|Russia\|1396104875
Nantes\|France\|148031054
Toulon\|Canada\|649131721
Bordeaux\|Russia\|1085945055
Modena\|Argentina\|1639876145
Sapporo\|Germany\|1649401846
Toronto\|Germany\|1017589270
Pernik\|Austria\|1628726701
Sofia\|Russia\|1068182372
Yokohama\|Australia\|1605202015
Ruse\|Spain\|40710212
Kobe\|Austria\|786943621
Ottawa\|Argentina\|1154915368
Sydney\|Austria\|1581589671
Rimini\|United States\|878443390
Albury\|France\|442892311
Buenos Aires\|Australia\|1836849553
Kawasaki\|Argentina\|113613160
Paris\|Canada\|1105795084
Bologna\|France\|1378045328
Strasbourg\|Canada\|540850078
Nice\|Austria\|1951259823
Bari\|United States\|1608116661
Nagoya\|Bulgaria\|935830041
Milan\|Austria\|508251358
Saint-Etienne\|Japan\|487832085
Florence\|Argentina\|695816147
Naples\|Canada\|13987623
report
[/input]
[output]
Austria (total population: 6456771174)
=\>Nice: 1951259823
=\>Pernik: 1628726701
=\>Sydney: 1581589671
=\>Kobe: 786943621
=\>Milan: 508251358
Germany (total population: 4040583241)
=\>Sapporo: 1649401846
=\>Lyon: 1373592125
=\>Toronto: 1017589270
Argentina (total population: 3604220820)
=\>Modena: 1639876145
=\>Ottawa: 1154915368
=\>Florence: 695816147
=\>Kawasaki: 113613160
France (total population: 3590912393)
=\>Montpellier: 1621943700
=\>Bologna: 1378045328
=\>Albury: 442892311
=\>Nantes: 148031054
Russia (total population: 3550232302)
=\>Genoa: 1396104875
=\>Bordeaux: 1085945055
=\>Sofia: 1068182372
Australia (total population: 3442051568)
=\>Buenos Aires: 1836849553
=\>Yokohama: 1605202015
Bulgaria (total population: 2616999095)
=\>Toulouse: 1681169054
=\>Nagoya: 935830041
United States (total population: 2486560051)
=\>Bari: 1608116661
=\>Rimini: 878443390
Canada (total population: 2309764506)
=\>Paris: 1105795084
=\>Toulon: 649131721
=\>Strasbourg: 540850078
=\>Naples: 13987623
Japan (total population: 487832085)
=\>Saint-Etienne: 487832085
Spain (total population: 40710212)
=\>Ruse: 40710212
[/output]
[/test]
[test]
[input]
Montpellier\|Australia\|495606858
Burgas\|Spain\|772145448
Naples\|United States\|1878853670
Ottawa\|France\|655721435
Toulouse\|Canada\|584844774
Varna\|Italy\|1477720896
Kobe\|France\|67501948
Pleven\|Canada\|458982123
Florence\|Spain\|1099855936
Rennes\|Spain\|1013021950
Plovdiv\|Russia\|364161185
Bordeaux\|Australia\|1835641221
Kyoto\|Spain\|1209210297
Kaspichan\|United States\|584627853
Sydney\|United Kingdom\|578332653
Toronto\|Russia\|1394126076
Marseille\|Germany\|584058382
Reims\|Germany\|1148876322
Pernik\|Austria\|1595152873
Buenos Aires\|Spain\|1982662003
Rimini\|Japan\|276015753
Nice\|Argentina\|1340640720
Paris\|Russia\|489726432
report
[/input]
[output]
Spain (total population: 6076895634)
=\>Buenos Aires: 1982662003
=\>Kyoto: 1209210297
=\>Florence: 1099855936
=\>Rennes: 1013021950
=\>Burgas: 772145448
United States (total population: 2463481523)
=\>Naples: 1878853670
=\>Kaspichan: 584627853
Australia (total population: 2331248079)
=\>Bordeaux: 1835641221
=\>Montpellier: 495606858
Russia (total population: 2248013693)
=\>Toronto: 1394126076
=\>Paris: 489726432
=\>Plovdiv: 364161185
Germany (total population: 1732934704)
=\>Reims: 1148876322
=\>Marseille: 584058382
Austria (total population: 1595152873)
=\>Pernik: 1595152873
Italy (total population: 1477720896)
=\>Varna: 1477720896
Argentina (total population: 1340640720)
=\>Nice: 1340640720
Canada (total population: 1043826897)
=\>Toulouse: 584844774
=\>Pleven: 458982123
France (total population: 723223383)
=\>Ottawa: 655721435
=\>Kobe: 67501948
United Kingdom (total population: 578332653)
=\>Sydney: 578332653
Japan (total population: 276015753)
=\>Rimini: 276015753
[/output]
[/test]
[test]
[input]
Rimini\|Germany\|1784669833
Pleven\|United Kingdom\|252292726
Ruse\|Italy\|477208227
Kobe\|Italy\|1579983847
Osaka\|Canada\|364875192
Nagoya\|Germany\|123324227
Brescia\|Australia\|12050698
Kyoto\|Argentina\|127693479
Sofia\|Japan\|777832979
Buenos Aires\|Australia\|460455041
Reims\|United States\|1549636645
Fukuoka\|Japan\|1167955089
Toulouse\|Argentina\|79072877
Rome\|Argentina\|771688701
Genoa\|Australia\|455122537
report
[/input]
[output]
Italy (total population: 2057192074)
=\>Kobe: 1579983847
=\>Ruse: 477208227
Japan (total population: 1945788068)
=\>Fukuoka: 1167955089
=\>Sofia: 777832979
Germany (total population: 1907994060)
=\>Rimini: 1784669833
=\>Nagoya: 123324227
United States (total population: 1549636645)
=\>Reims: 1549636645
Argentina (total population: 978455057)
=\>Rome: 771688701
=\>Kyoto: 127693479
=\>Toulouse: 79072877
Australia (total population: 927628276)
=\>Buenos Aires: 460455041
=\>Genoa: 455122537
=\>Brescia: 12050698
Canada (total population: 364875192)
=\>Osaka: 364875192
United Kingdom (total population: 252292726)
=\>Pleven: 252292726
[/output]
[/test]
[test]
[input]
Yokohama\|France\|835333378
Cordoba\|Russia\|1517452839
Winnipeg\|Austria\|324648545
Sydney\|Bulgaria\|1649305083
Rennes\|Italy\|1681052740
Marseille\|Italy\|182014960
Montpellier\|Argentina\|1997119705
Albury\|Canada\|1145595724
Toronto\|United States\|196605932
Burgas\|Argentina\|1573071787
Kawasaki\|Italy\|941664435
Buenos Aires\|Russia\|1821467395
Nagoya\|Canada\|1776977313
Ruse\|Bulgaria\|214664911
Bari\|Australia\|462040122
Toulon\|France\|1554317743
Naples\|Argentina\|1667073864
Strasbourg\|United Kingdom\|1223526238
Modena\|Canada\|126188360
Rimini\|United Kingdom\|1584615829
Le Havre\|Argentina\|335888235
Sapporo\|Argentina\|1271660155
Osaka\|Japan\|1746374976
Kobe\|United Kingdom\|543669520
Lyon\|Austria\|1458385182
Verona\|Germany\|499132218
Florence\|France\|1054034134
Pleven\|United Kingdom\|1947300751
Kyoto\|Germany\|1494891164
Brescia\|Australia\|718868388
Catania\|France\|915765576
Varna\|Japan\|399781003
Bologna\|Austria\|174436641
Bordeaux\|Canada\|1516253730
Genoa\|Canada\|328406426
Nice\|Bulgaria\|1303854765
Grenoble\|United States\|1757437817
Reims\|Germany\|848903863
Paris\|Canada\|424252169
Ottawa\|France\|1116303256
Saint-Etienne\|Germany\|1029426732
Pernik\|Australia\|887196608
Lille\|Australia\|1075515372
Rome\|United States\|636425816
report
[/input]
[output]
Argentina (total population: 6844813746)
=\>Montpellier: 1997119705
=\>Naples: 1667073864
=\>Burgas: 1573071787
=\>Sapporo: 1271660155
=\>Le Havre: 335888235
France (total population: 5475754087)
=\>Toulon: 1554317743
=\>Ottawa: 1116303256
=\>Florence: 1054034134
=\>Catania: 915765576
=\>Yokohama: 835333378
Canada (total population: 5317673722)
=\>Nagoya: 1776977313
=\>Bordeaux: 1516253730
=\>Albury: 1145595724
=\>Paris: 424252169
=\>Genoa: 328406426
=\>Modena: 126188360
United Kingdom (total population: 5299112338)
=\>Pleven: 1947300751
=\>Rimini: 1584615829
=\>Strasbourg: 1223526238
=\>Kobe: 543669520
Germany (total population: 3872353977)
=\>Kyoto: 1494891164
=\>Saint-Etienne: 1029426732
=\>Reims: 848903863
=\>Verona: 499132218
Russia (total population: 3338920234)
=\>Buenos Aires: 1821467395
=\>Cordoba: 1517452839
Bulgaria (total population: 3167824759)
=\>Sydney: 1649305083
=\>Nice: 1303854765
=\>Ruse: 214664911
Australia (total population: 3143620490)
=\>Lille: 1075515372
=\>Pernik: 887196608
=\>Brescia: 718868388
=\>Bari: 462040122
Italy (total population: 2804732135)
=\>Rennes: 1681052740
=\>Kawasaki: 941664435
=\>Marseille: 182014960
United States (total population: 2590469565)
=\>Grenoble: 1757437817
=\>Rome: 636425816
=\>Toronto: 196605932
Japan (total population: 2146155979)
=\>Osaka: 1746374976
=\>Varna: 399781003
Austria (total population: 1957470368)
=\>Lyon: 1458385182
=\>Winnipeg: 324648545
=\>Bologna: 174436641
[/output]
[/test]
[test]
[input]
Verona\|Italy\|42444719
Marseille\|Spain\|525910616
Plovdiv\|United States\|952165984
Ruse\|United States\|281274510
Sydney\|Germany\|815625727
Ottawa\|Spain\|1334638266
Rimini\|Japan\|1636932720
Florence\|Argentina\|950418014
Buenos Aires\|Italy\|627160781
Milan\|Japan\|624150377
Osaka\|Germany\|1000540153
Fukuoka\|United Kingdom\|1715660823
Kawasaki\|United States\|1873289107
Saint-Etienne\|Australia\|391835969
Toulouse\|Russia\|653588520
Nagoya\|Italy\|1559255360
Winnipeg\|Australia\|1918407180
Catania\|Spain\|919801596
Genoa\|Italy\|1173171043
Montpellier\|Bulgaria\|398321044
Kobe\|United Kingdom\|605516562
Toronto\|Australia\|1030308946
Palermo\|Australia\|1273433341
Nantes\|Australia\|1661817001
Reims\|Australia\|925609507
Bordeaux\|Australia\|482416584
Varna\|Japan\|19466462
Nice\|Australia\|1155042017
Yokohama\|Germany\|1419948281
Cordoba\|Australia\|554379342
Naples\|France\|1439020657
Toulon\|Spain\|580557305
Bologna\|Australia\|1331648244
Grenoble\|Russia\|1010054894
report
[/input]
[output]
Australia (total population: 10724898131)
=\>Winnipeg: 1918407180
=\>Nantes: 1661817001
=\>Bologna: 1331648244
=\>Palermo: 1273433341
=\>Nice: 1155042017
=\>Toronto: 1030308946
=\>Reims: 925609507
=\>Cordoba: 554379342
=\>Bordeaux: 482416584
=\>Saint-Etienne: 391835969
Italy (total population: 3402031903)
=\>Nagoya: 1559255360
=\>Genoa: 1173171043
=\>Buenos Aires: 627160781
=\>Verona: 42444719
Spain (total population: 3360907783)
=\>Ottawa: 1334638266
=\>Catania: 919801596
=\>Toulon: 580557305
=\>Marseille: 525910616
Germany (total population: 3236114161)
=\>Yokohama: 1419948281
=\>Osaka: 1000540153
=\>Sydney: 815625727
United States (total population: 3106729601)
=\>Kawasaki: 1873289107
=\>Plovdiv: 952165984
=\>Ruse: 281274510
United Kingdom (total population: 2321177385)
=\>Fukuoka: 1715660823
=\>Kobe: 605516562
Japan (total population: 2280549559)
=\>Rimini: 1636932720
=\>Milan: 624150377
=\>Varna: 19466462
Russia (total population: 1663643414)
=\>Grenoble: 1010054894
=\>Toulouse: 653588520
France (total population: 1439020657)
=\>Naples: 1439020657
Argentina (total population: 950418014)
=\>Florence: 950418014
Bulgaria (total population: 398321044)
=\>Montpellier: 398321044
[/output]
[/test]
[test]
[input]
Sofia\|Italy\|710802804
Plovdiv\|Russia\|1945425908
Lille\|Bulgaria\|1025141329
Kaspichan\|Spain\|933420623
Osaka\|Spain\|1726696842
Bologna\|Germany\|747562594
Catania\|United Kingdom\|1967802980
Toulouse\|Argentina\|1296662998
Nagoya\|United Kingdom\|1215423431
Rennes\|Russia\|213855828
Nantes\|Argentina\|821436292
Le Havre\|Australia\|1142323970
Albury\|Canada\|541920718
Sydney\|Australia\|632572118
report
[/input]
[output]
United Kingdom (total population: 3183226411)
=\>Catania: 1967802980
=\>Nagoya: 1215423431
Spain (total population: 2660117465)
=\>Osaka: 1726696842
=\>Kaspichan: 933420623
Russia (total population: 2159281736)
=\>Plovdiv: 1945425908
=\>Rennes: 213855828
Argentina (total population: 2118099290)
=\>Toulouse: 1296662998
=\>Nantes: 821436292
Australia (total population: 1774896088)
=\>Le Havre: 1142323970
=\>Sydney: 632572118
Bulgaria (total population: 1025141329)
=\>Lille: 1025141329
Germany (total population: 747562594)
=\>Bologna: 747562594
Italy (total population: 710802804)
=\>Sofia: 710802804
Canada (total population: 541920718)
=\>Albury: 541920718
[/output]
[/test]
[test]
[input]
Reims\|Argentina\|1377726115
Saint-Etienne\|United States\|1977413473
Nagoya\|United Kingdom\|1150081604
Sofia\|Bulgaria\|44987423
Naples\|Japan\|398271352
Paris\|Austria\|1783799296
Sydney\|Canada\|1768426721
Strasbourg\|Austria\|805939943
Bordeaux\|Austria\|615598856
Buenos Aires\|Germany\|43353551
Fukuoka\|France\|1005967037
Milan\|Spain\|1588549228
Brescia\|Russia\|1153685879
Rennes\|Argentina\|196086714
Florence\|Australia\|478464717
Varna\|United States\|1391771702
Grenoble\|United Kingdom\|601156190
Pleven\|United Kingdom\|1407355326
Kaspichan\|Australia\|1764041692
report
[/input]
[output]
United States (total population: 3369185175)
=\>Saint-Etienne: 1977413473
=\>Varna: 1391771702
Austria (total population: 3205338095)
=\>Paris: 1783799296
=\>Strasbourg: 805939943
=\>Bordeaux: 615598856
United Kingdom (total population: 3158593120)
=\>Pleven: 1407355326
=\>Nagoya: 1150081604
=\>Grenoble: 601156190
Australia (total population: 2242506409)
=\>Kaspichan: 1764041692
=\>Florence: 478464717
Canada (total population: 1768426721)
=\>Sydney: 1768426721
Spain (total population: 1588549228)
=\>Milan: 1588549228
Argentina (total population: 1573812829)
=\>Reims: 1377726115
=\>Rennes: 196086714
Russia (total population: 1153685879)
=\>Brescia: 1153685879
France (total population: 1005967037)
=\>Fukuoka: 1005967037
Japan (total population: 398271352)
=\>Naples: 398271352
Bulgaria (total population: 44987423)
=\>Sofia: 44987423
Germany (total population: 43353551)
=\>Buenos Aires: 43353551
[/output]
[/test]
[test]
[input]
Sydney\|Italy\|1552200708
Burgas\|United States\|466762961
Grenoble\|Argentina\|1514161857
Winnipeg\|Australia\|823119710
Milan\|Australia\|16130944
Montpellier\|Italy\|708073743
Albury\|Argentina\|313453179
Pleven\|United Kingdom\|557622716
Reims\|Russia\|1519176013
Paris\|Canada\|1032153773
Nice\|Spain\|1637488319
Naples\|France\|1104840614
Rennes\|Spain\|1780332372
Toulouse\|Italy\|1333560996
Yokohama\|Canada\|1693131324
Lille\|Japan\|1822438494
Kobe\|Austria\|1647213845
Rimini\|Russia\|1245888142
report
[/input]
[output]
Italy (total population: 3593835447)
=\>Sydney: 1552200708
=\>Toulouse: 1333560996
=\>Montpellier: 708073743
Spain (total population: 3417820691)
=\>Rennes: 1780332372
=\>Nice: 1637488319
Russia (total population: 2765064155)
=\>Reims: 1519176013
=\>Rimini: 1245888142
Canada (total population: 2725285097)
=\>Yokohama: 1693131324
=\>Paris: 1032153773
Argentina (total population: 1827615036)
=\>Grenoble: 1514161857
=\>Albury: 313453179
Japan (total population: 1822438494)
=\>Lille: 1822438494
Austria (total population: 1647213845)
=\>Kobe: 1647213845
France (total population: 1104840614)
=\>Naples: 1104840614
Australia (total population: 839250654)
=\>Winnipeg: 823119710
=\>Milan: 16130944
United Kingdom (total population: 557622716)
=\>Pleven: 557622716
United States (total population: 466762961)
=\>Burgas: 466762961
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Logs Aggregator
[code-task title="Logs Aggregator" taskId="java-advanced-sets-and-maps-advanced-Logs-Aggregator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that aggregates the logs of data and print for each user the **total duration** of his sessions and a **list of unique IP addresses** in format 

`< IP > < user > < duration >`.

**For example:**

- 168.0.11 peter 33
- 10.17.33 alex 12
- 10.17.35 peter 30
- 10.17.34 peter 120
- 10.17.34 peter 120
- 50.118.81 alex 46
- 50.118.81 alex 4

Write a program to aggregate the logs data and print **for each user** the **total duration** of his sessions and a **list of unique IP addresses** in format 

`< user > < duration > [ < IP1 >, < IP2 >, ...]`. 

Order the **users alphabetically**. 

Order the **IPs alphabetically**. 

The output should be printed like this:

- alex: 62 [10.10.17.33, 212.50.118.81]
- peter: 303 [10.10.17.34, 10.10.17.35, 192.168.0.11]

## Input

On the first line is a number **n** - the count of the following lines. 

The next n lines hold the logged information in the format. 

`< IP > < user > < duration >`. 

The input data will always be **valid** and in the described format. 

There is no need to check it explicitly.

## Output

Print **single line for each user** (order users alphabetically). 

For each user print the sum of durations and all of his session IPs ordered alphabetically in format.

`< user >: < duration > [< IP1 >, < IP2 >, ...]`. 

Remove any duplicated values in the IP addresses.

## Constraints

- The **count** of the lines **n** is in range \[1 ... 1000\]
- The `< IP >` is a standard IP address in format **a.b.c.d** where **a**, **b**, **c** and **d** are integers in range \[0 ... 255\]
- The `< user >` consists only of **Latin characters**, with length of \[1 .... 20\]
- The `< duration >` is an integer number in the range \[1 ... 1000\]

## Examples

| **Input** | **Output** |
| --- | --- |
| 7 | alex: 62 \[10.10.17.33, 212.50.118.81\] |
| 192.168.0.11 peter 33 | peter: 303 \[10.10.17.34, 10.10.17.35, 192.168.0.11\] |
| 10.10.17.33 alex 12 |  |
| 10.10.17.35 peter 30 |  |
| 10.10.17.34 peter 120 |  |
| 10.10.17.34 peter 120 |  |
| 212.50.118.81 alex 46 |  |
| 212.50.118.81 alex 4 |  |

| **Input** | **Output** |
| --- | --- |
| 2 | john: 60 \[84.238.140.178\] |
| 84.238.140.178 john 25 |  |
| 84.238.140.178 john 35 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
7
192.168.0.11 peter 33
10.10.17.33 alex 12
10.10.17.35 peter 30
10.10.17.34 peter 120
10.10.17.34 peter 120
212.50.118.81 alex 46
212.50.118.81 alex 4
[/input]
[output]
alex: 62 \[10.10.17.33, 212.50.118.81\]
peter: 303 \[10.10.17.34, 10.10.17.35, 192.168.0.11\]
[/output]
[/test]
[test open]
[input]
2
84.238.140.178 john 25
84.238.140.178 john 35
[/input]
[output]
john: 60 \[84.238.140.178\]
[/output]
[/test]
[test]
[input]
1
8.8.8.8 google 100
[/input]
[output]
google: 100 \[8.8.8.8\]
[/output]
[/test]
[test]
[input]
2
8.8.8.8 google 50
10.10.10.10 test 500
[/input]
[output]
google: 50 \[8.8.8.8\]
test: 500 \[10.10.10.10\]
[/output]
[/test]
[test]
[input]
4
10.10.10.10 test 500
8.8.8.8 google 150
10.10.10.10 test 100
8.8.8.8 google 50
[/input]
[output]
google: 200 \[8.8.8.8\]
test: 600 \[10.10.10.10\]
[/output]
[/test]
[test]
[input]
4
10.10.10.10 root 46
8.8.8.8 root 167
1.2.3.4 root 120
5.6.7.8 root 970
192.168.0.11 root 55
[/input]
[output]
root: 1303 \[1.2.3.4, 10.10.10.10, 5.6.7.8, 8.8.8.8\]
[/output]
[/test]
[test]
[input]
14
8.8.8.8 google 100
8.8.8.8 google 50
10.10.10.10 test 98
10.10.10.10 google 730
8.8.8.8 google 150
10.10.10.10 test 100
8.8.8.8 google 50
10.10.10.10 root 46
10.10.10.10 root 58
8.8.8.8 root 167
1.2.3.4 root 120
5.6.7.8 root 970
192.168.0.11 root 55
10.10.10.10 test 302
[/input]
[output]
google: 1080 \[10.10.10.10, 8.8.8.8\]
root: 1416 \[1.2.3.4, 10.10.10.10, 192.168.0.11, 5.6.7.8, 8.8.8.8\]
test: 500 \[10.10.10.10\]
[/output]
[/test]
[test]
[input]
30
8.8.8.8 pepi 100
8.8.8.8 google 999
8.8.8.8 google 100
8.8.8.8 didi 999
10.10.10.10 steve 98
10.10.10.10 google 730
8.8.8.8 google 150
10.10.10.10 test 100
8.8.8.8 google 50
10.10.10.10 root 46
10.10.10.10 root 58
8.8.8.8 nakov 167
1.2.3.4 peter 120
5.6.7.8 root 970
192.168.0.33 root 55
10.10.10.10 kurtev 302
8.8.28.8 google 100
8.8.8.8 google 50
10.10.10.10 test 98
10.10.10.10 google 730
8.8.8.8 google 150
10.10.10.103 test 100
8.8.8.18 google 50
10.10.10.10 root 46
10.10.10.10 george 58
8.8.8.8 root 167
1.2.3.4 maria 120
5.6.7.8 root 970
192.168.0.11 root 55
10.10.10.1 test 302
[/input]
[output]
didi: 999 \[8.8.8.8\]
george: 58 \[10.10.10.10\]
google: 3109 \[10.10.10.10, 8.8.28.8, 8.8.8.18, 8.8.8.8\]
kurtev: 302 \[10.10.10.10\]
maria: 120 \[1.2.3.4\]
nakov: 167 \[8.8.8.8\]
pepi: 100 \[8.8.8.8\]
peter: 120 \[1.2.3.4\]
root: 2367 \[10.10.10.10, 192.168.0.11, 192.168.0.33, 5.6.7.8, 8.8.8.8\]
steve: 98 \[10.10.10.10\]
test: 600 \[10.10.10.1, 10.10.10.10, 10.10.10.103\]
[/output]
[/test]
[test]
[input]
60
8.18.8.8 pepi 100
8.8.28.8 kiki 999
8.8.48.8 google 100
8.83.8.8 didi 999
10.140.10.10 steve 98
10.10.10.10 google 630
8.38.8.8 google 150
10.140.10.10 kiki 100
8.8.68.8 google 50
110.10.10.10 root 46
10.160.10.10 root 58
8.8.8.86 nakov 166
1.26.3.4 peter 120
5.26.6.8 hristo 960
192.168.0.33 didi 55
10.160.10.10 kurtev 302
8.8.28.8 google 100
8.8.38.8 google 50
10.140.10.10 test 98
10.10.10.10 google 630
8.8.8.8 google 150
10.10.10.103 test 100
8.8.8.18 google 50
10.106.10.10 root 46
160.10.10.10 george 58
8.8.86.8 root 166
1.2.3.4 maria 120
5.6.66.8 root 960
192.168.0.11 penka 55
10.10.10.1 test 302
8.8.86.8 pepi 100
8.86.8.8 google 999
8.86.8.8 google 100
8.8.8.8 didi 999
10.10.10.10 steve 98
10.10.10.10 google 630
8.8.86.8 google 150
10.10.10.10 test 100
8.8.8.8 google 50
10.160.10.10 root 46
10.10.10.10 root 58
8.8.8.8 nakov 166
1.2.63.4 peter 120
5.66.6.8 hristo 960
192.168.0.33 martin 55
10.10.10.10 kurtev 302
8.8.228.8 google 100
8.8.8.8 google 50
10.10.10.10 test 98
10.130.10.10 google 630
8.8.8.8 google 150
10.130.10.103 steve 100
8.8.8.18 joke 50
10.10.10.10 root 46
10.10.10.10 george 58
8.8.38.8 penka 166
1.2.3.4 maria 120
5.26.6.8 root 960
192.168.0.12 root 55
10.10.10.11 test 302
[/input]
[output]
didi: 2053 \[192.168.0.33, 8.8.8.8, 8.83.8.8\]
george: 116 \[10.10.10.10, 160.10.10.10\]
google: 4769 \[10.10.10.10, 10.130.10.10, 8.38.8.8, 8.8.228.8, 8.8.28.8, 8.8.38.8, 8.8.48.8, 8.8.68.8, 8.8.8.18, 8.8.8.8, 8.8.86.8, 8.86.8.8\]
hristo: 1920 \[5.26.6.8, 5.66.6.8\]
joke: 50 \[8.8.8.18\]
kiki: 1099 \[10.140.10.10, 8.8.28.8\]
kurtev: 604 \[10.10.10.10, 10.160.10.10\]
maria: 240 \[1.2.3.4\]
martin: 55 \[192.168.0.33\]
nakov: 332 \[8.8.8.8, 8.8.8.86\]
penka: 221 \[192.168.0.11, 8.8.38.8\]
pepi: 200 \[8.18.8.8, 8.8.86.8\]
peter: 240 \[1.2.63.4, 1.26.3.4\]
root: 2441 \[10.10.10.10, 10.106.10.10, 10.160.10.10, 110.10.10.10, 192.168.0.12, 5.26.6.8, 5.6.66.8, 8.8.86.8\]
steve: 296 \[10.10.10.10, 10.130.10.103, 10.140.10.10\]
test: 1000 \[10.10.10.1, 10.10.10.10, 10.10.10.103, 10.10.10.11, 10.140.10.10\]
[/output]
[/test]
[test]
[input]
15
8.18.8.8 pepi 100
8.8.28.8 kiki 999
8.8.48.8 google 100
8.83.8.8 didi 999
10.140.10.10 steve 98
10.10.10.10 google 630
8.38.8.8 google 150
10.140.10.10 kiki 100
8.8.68.8 google 50
110.10.10.10 root 46
10.160.10.10 root 58
8.8.8.86 nakov 166
1.26.3.4 peter 120
5.26.6.8 hristo 960
12.168.0.33 didi 55
[/input]
[output]
didi: 1054 \[12.168.0.33, 8.83.8.8\]
google: 930 \[10.10.10.10, 8.38.8.8, 8.8.48.8, 8.8.68.8\]
hristo: 960 \[5.26.6.8\]
kiki: 1099 \[10.140.10.10, 8.8.28.8\]
nakov: 166 \[8.8.8.86\]
pepi: 100 \[8.18.8.8\]
peter: 120 \[1.26.3.4\]
root: 104 \[10.160.10.10, 110.10.10.10\]
steve: 98 \[10.140.10.10\]
[/output]
[/test]
[test]
[input]
30
8.18.8.8 pepi 100
8.8.28.8 kiki 999
8.8.48.8 google 100
8.83.8.8 didi 999
10.140.10.10 steve 98
10.10.10.10 google 630
8.38.8.8 google 150
10.140.10.10 kiki 100
8.8.68.8 google 50
110.10.10.10 root 46
10.160.10.10 root 58
8.8.8.86 nakov 166
1.26.3.4 peter 120
5.26.6.8 hristo 960
12.168.0.33 didi 55
10.160.10.10 kurtev 302
8.8.28.8 google 100
8.8.38.8 google 50
10.140.10.10 test 98
10.10.10.10 google 630
8.8.8.8 google 150
10.10.10.103 test 100
8.8.8.18 google 50
10.106.10.10 root 46
160.10.10.10 george 58
8.8.86.8 root 166
1.2.3.4 maria 120
5.6.66.8 root 960
192.168.0.11 penka 55
10.10.10.1 test 302
[/input]
[output]
didi: 1054 \[12.168.0.33, 8.83.8.8\]
george: 58 \[160.10.10.10\]
google: 1910 \[10.10.10.10, 8.38.8.8, 8.8.28.8, 8.8.38.8, 8.8.48.8, 8.8.68.8, 8.8.8.18, 8.8.8.8\]
hristo: 960 \[5.26.6.8\]
kiki: 1099 \[10.140.10.10, 8.8.28.8\]
kurtev: 302 \[10.160.10.10\]
maria: 120 \[1.2.3.4\]
nakov: 166 \[8.8.8.86\]
penka: 55 \[192.168.0.11\]
pepi: 100 \[8.18.8.8\]
peter: 120 \[1.26.3.4\]
root: 1276 \[10.106.10.10, 10.160.10.10, 110.10.10.10, 5.6.66.8, 8.8.86.8\]
steve: 98 \[10.140.10.10\]
test: 500 \[10.10.10.1, 10.10.10.103, 10.140.10.10\]
[/output]
[/test]
[test]
[input]
50
8.4.8.8 pepi 100
8.8.28.8 kiki 999
8.8.48.8 google 100
8.83.8.8 didi 999
10.140.10.10 steve 98
10.10.10.10 google 630
8.38.8.8 google 150
10.140.10.10 kiki 100
8.8.68.8 google 50
110.5.10.10 root 46
10.160.10.10 root 58
8.8.8.86 nakov 166
1.26.3.4 peter 120
5.26.6.8 hristo 960
12.168.0.33 didi 55
10.160.10.10 kurtev 302
8.8.28.8 google 100
8.8.38.8 google 50
10.140.10.10 test 98
10.10.10.10 google 630
8.8.8.8 google 150
10.10.10.103 test 100
8.8.8.18 google 50
10.106.10.10 root 46
160.10.10.10 george 58
8.8.86.8 root 166
1.2.3.4 maria 120
5.6.66.8 root 960
192.168.0.11 penka 55
10.10.10.1 test 302
8.8.55.8 pepi 100
8.86.8.8 google 999
8.55.8.8 google 100
8.8.8.8 didi 999
10.10.150.10 steve 98
10.10.10.10 google 630
8.8.86.8 google 150
105.10.10.10 test 100
8.8.8.8 google 50
10.160.10.10 root 46
10.10.10.10 root 58
8.8.8.8 nakov 166
1.2.63.4 peter 120
5.66.6.8 hristo 960
192.168.0.33 martin 55
10.10.10.10 kurtev 302
8.84.228.8 google 100
8.8.8.8 google 50
10.10.10.10 test 98
10.130.10.10 google 630
[/input]
[output]
didi: 2053 \[12.168.0.33, 8.8.8.8, 8.83.8.8\]
george: 58 \[160.10.10.10\]
google: 4619 \[10.10.10.10, 10.130.10.10, 8.38.8.8, 8.55.8.8, 8.8.28.8, 8.8.38.8, 8.8.48.8, 8.8.68.8, 8.8.8.18, 8.8.8.8, 8.8.86.8, 8.84.228.8, 8.86.8.8\]
hristo: 1920 \[5.26.6.8, 5.66.6.8\]
kiki: 1099 \[10.140.10.10, 8.8.28.8\]
kurtev: 604 \[10.10.10.10, 10.160.10.10\]
maria: 120 \[1.2.3.4\]
martin: 55 \[192.168.0.33\]
nakov: 332 \[8.8.8.8, 8.8.8.86\]
penka: 55 \[192.168.0.11\]
pepi: 200 \[8.4.8.8, 8.8.55.8\]
peter: 240 \[1.2.63.4, 1.26.3.4\]
root: 1380 \[10.10.10.10, 10.106.10.10, 10.160.10.10, 110.5.10.10, 5.6.66.8, 8.8.86.8\]
steve: 196 \[10.10.150.10, 10.140.10.10\]
test: 698 \[10.10.10.1, 10.10.10.10, 10.10.10.103, 10.140.10.10, 105.10.10.10\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Legendary Farming
[code-task title="Legendary Farming" taskId="java-advanced-sets-and-maps-advanced-Legendary-Farming" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You have beaten all of the content and the last thing left to accomplish is to own a legendary item.

However, it is a tedious process and it requires quite a bit of farming.

Anyway, you are not too pretentious - any legendary will do.

The possible items are:
- **Shadowmourne** - requires **250 Shards**;
- **Valanyr** - requires **250 Fragments**;
- **Dragonwrath** - requires **250 Motes**;

**Shards, Fragments**, and **Motes** are the **key materials**, everything else is **junk**. 

You will be given lines of input, such as **2 motes 3 ores 15 stones**. 

Keep track of the **key materials** - the **first** that reaches **250 mark wins the race**. 

At that point, print the corresponding legendary obtained. 

Then, print the **remaining** shards, fragments, motes, ordered by their **quantity** in **descending** order, each on a new line. 

Finally, print the collected **junk** items, in **alphabetic** order.


## Input

- Each line of input is in a specific format: 

`{quantity} {material} {quantity} {material} ... {quantity} {material}`


## Output

- On the first line, print the obtained item in the following format: 
`{Legendary item} obtained!`
- On the next three lines, print the remaining key materials in descending order by quantity
  - if two or more key materials have the same quantity, print them in alphabetical order
- On the final several lines, print the junk items in alphabetical order
  - all materials should be printed in the format  
  `{material}: {quantity}`
  - all outputs should be in **lower case**, except the first letter of the legendary

## Constraints

- The quantity-material pairs are between 1 and 25 per line
- The number of lines is in range \[1 ... 10\]
- All materials are case-insensitive

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 Motes 5 stones 5 Shards | Valanyr obtained! |
| 6 leathers 255 fragments 7 Shards | fragments: 5 |
|  | shards: 5 |
|  | motes: 3 |
|  | leathers: 6 |
|  | stones: 5 |

[hints]
[hint]
Store the key and junk materials in two different data structures.

```java
Map<String, Integer> legendaryResources = new TreeMap<>();
legendaryResources.put("shards", 0);
legendaryResources.put("fragments", 0);
legendaryResources.put("motes", 0);

Map<String, Integer> trashResources = new TreeMap<>();
```
[/hint] 
[hint]
Read lines of input until the item is obtained:

```java
while (!legendaryObtained) {
  // ...
}
```
[/hint] 
[hint]
Split the tokens on each input line and iterate through them.

```java
String[] tokens = scan.nextLine().split("\\s+");

// ...
```
[/hint] 
[/hints] 

| **Input** | **Output** |
| --- | --- |
| 123 silver 6 shards 8 shards 5 motes | Dragonwrath obtained! |
| 9 fangs 75 motes 103 MOTES 8 Shards | shards: 22 |
| 86 Motes 7 stones 19 silver | motes: 19 |
|  | fragments: 0 |
|  | fangs: 9 |
|  | silver: 123 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 Motes 5 stones 5 Shards
6 leathers 255 fragments 7 Shards
[/input]
[output]
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
[/output]
[/test]
[test open]
[input]
123 silver 6 shards 8 shards 5 motes
9 fangs 75 motes 103 MOTES 8 Shards
86 Motes 7 stones 19 silver
[/input]
[output]
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123
[/output]
[/test]
[test]
[input]
5 shards 5 motes 255 fragments
[/input]
[output]
Valanyr obtained!
fragments: 5
motes: 5
shards: 5
[/output]
[/test]
[test]
[input]
16 leathers 22 leather 82 leathers 17 LEATHER 88 LEATHERS
28 shards 78 motes 66 motes 215 shards 7 shards 3 fragments
[/input]
[output]
Shadowmourne obtained!
motes: 144
fragments: 0
shards: 0
leather: 39
leathers: 186
[/output]
[/test]
[test]
[input]
8 iron
3 gold
7 silver 15 shards
15 onions 236 shards
8 freshwater
9 souls
[/input]
[output]
Shadowmourne obtained!
shards: 1
fragments: 0
motes: 0
gold: 3
iron: 8
onions: 15
silver: 7
[/output]
[/test]
[test]
[input]
249 shards 249 fragments 249 motes 8 linen 5 silver 123 silk 22 embersilk
13 alpha-gems 0 shards 0 fragments 1 motes
[/input]
[output]
Dragonwrath obtained!
fragments: 249
shards: 249
motes: 0
alpha-gems: 13
embersilk: 22
linen: 8
silk: 123
silver: 5
[/output]
[/test]
[test]
[input]
98 spirit-shards 17 SPIRiT-SHARDS 123 SPIRIT-SHARDS 12 sPI_ritShards 92 gems 1 gem
6 fragments 9 Fragments 129 Fragments 1 Shards 0 Shards 123 Shards 9 Motes
123 Motes 123 Fragments 1098 MotES
[/input]
[output]
Valanyr obtained!
motes: 132
shards: 124
fragments: 17
gem: 1
gems: 92
spi_ritshards: 12
spirit-shards: 238
[/output]
[/test]
[test]
[input]
0 shards
1 shards
2 shards
3 shards
4 shards
0 SHARDS 126 SHARDS
122 SHARDS
1 motes
1 fragments
[/input]
[output]
Shadowmourne obtained!
shards: 8
fragments: 0
motes: 0
[/output]
[/test]
[test]
[input]
77 heavy-leather 123 light-leather
789 fragments 8889 fragments 88123 motes
[/input]
[output]
Valanyr obtained!
fragments: 539
motes: 0
shards: 0
heavy-leather: 77
light-leather: 123
[/output]
[/test]
[test]
[input]
988 HEAVY-STONES
1230812 HEAVY-STONes
120398 Fragments
[/input]
[output]
Valanyr obtained!
fragments: 120148
motes: 0
shards: 0
heavy-stones: 1231800
[/output]
[/test]
[test]
[input]
123 leathers
12 leather
12 leathe
12 motes
12 shards
262 fragments
[/input]
[output]
Valanyr obtained!
fragments: 12
motes: 12
shards: 12
leathe: 12
leather: 12
leathers: 123
[/output]
[/test]
[test]
[input]
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
[/input]
[output]
Shadowmourne obtained!
fragments: 240
motes: 240
shards: 5
linen: 1420
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Dragon Army
[code-task title="Dragon Army" taskId="java-advanced-sets-and-maps-advanced-Dragon-Army" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Heroes III is the best game ever.

Everyone loves it and everyone plays it all the time.

John is no exclusion to this rule.

His favorite units in the game are all **types** of dragons - black, red, gold, azure, etc... 

He likes them so much that he gives them **names** and keeps logs of their **stats** : **damage, health**, and **armor**.

The process of aggregating all of the data is quite tedious, so he would like to have a program doing it.

Since he is no programmer, it is your task to help him.

You need to categorize dragons by their **type**. 

For each dragon, identified by **name**, keep information about his **stats**. 

Type is **preserved** in the order of the input but the dragons are **sorted** alphabetically by name. 

For each type, you should also print the average **damage**, **health**, and **armor** of the dragons. 

For each dragon, print its own stats.

There **may** be **missing** stats in the input, though. 

If a stat is missing you should assign its default values. 

Default values are as follows: 
- health - **250**
- damage - **45** 
- armor - **10**

Missing stat will be marked by **null**.

The input is in the following format 

`{type} {name} {damage} {health} {armor}`

Any of the integers may be assigned **null** value. 

See the examples below for a better understanding of the task.

If the same dragon is added a second time, the new stats should **overwrite** the previous ones. 

Two dragons are considered **equal** if they match by **both** in name and in type.

## Input

- On the first line, you are given **number N** - the number of dragons
- On the **next N lines**, you will be receiving inputs in the **above described** format. There will be a single space separating each element. 

### Output

- Print the aggregated data on the console
- For each type, print the average stats of its dragons in format 

`{Type}::({damage}/{health}/{armor})`

- Damage, health, and armor should be rounded to the 2nd digit after the decimal separator
- For each dragon, print its stats in the following format 

`-{Name} -> damage: {damage}, health: {health}, armor: {armor}`

### Constraints

- N is in range \[1 ... 100\]
- The dragon type and name are one word only, starting with a capital letter
- Damage health and armor are integers in range \[0 ... 100000\] or **null**

## Examples
| **Input** | **Output** |
| --- | --- |
| 5 | Red::(160.00/2350.00/30.00) |
| Red Bazgargal 100 2500 25 | \-Bazgargal \-\> damage: 100, health: 2500, armor: 25 |
| Black Dargonax 200 3500 18 | \-Obsidion \-\> damage: 220, health: 2200, armor: 35 |
| Red Obsidion 220 2200 35 | Black::(200.00/3500.00/18.00) |
| Blue Kerizsa 60 2100 20 | \-Dargonax \-\> damage: 200, health: 3500, armor: 18 |
| Blue Algordox 65 1800 50 | Blue::(62.50/1950.00/35.00) |
|  | -Algordox \-\> damage: 65, health: 1800, armor: 50 |
|  | -Kerizsa \-\> damage: 60, health: 2100, armor: 20 |


[hints]
[hint]
Declare the default values in the class body:

```java
private static final int DAMAGE = 45;
private static final int HEALTH = 250;
private static final int ARMOR = 10;
```
[/hint] 
[hint]
Create a `getStat` method.
It will be used to set the initial stats of each dragon.

```java
private static int getStat(String arg, int defaultValue) {
  if (arg.equals("null")) {
    return defaultValue;
  } else {
    return Integer.parseInt(arg);
  }
}
```
[/hint] 
[hint]
Use a LinkedHashMap to store the dragon types:

```java
Map<String, Map<String, List<Integer>>> dragonTypeMap = new LinkedHashMap<>();
```

[/hint] 
[/hints] 

| **Input** | **Output** |
| --- | --- |
| 4 | Gold::(223.75/826.25/17.50) |
| Gold Zzazx null 1000 10 | \-Ardrax \-\> damage: 100, health: 1055, armor: 50 |
| Gold Traxx 500 null 0 | \-Traxx \-\> damage: 500, health: 250, armor: 0 |
| Gold Xaarxx 250 1000 null | \-Xaarxx \-\> damage: 250, health: 1000, armor: 10 |
| Gold Ardrax 100 1055 50 | \-Zzazx \-\> damage: 45, health: 1000, armor: 10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Red Bazgargal 100 2500 25
Black Dargonax 200 3500 18
Red Obsidion 220 2200 35
Blue Kerizsa 60 2100 20
Blue Algordox 65 1800 50
[/input]
[output]
Red::(160.00/2350.00/30.00)
-Bazgargal -\> damage: 100, health: 2500, armor: 25
-Obsidion -\> damage: 220, health: 2200, armor: 35
Black::(200.00/3500.00/18.00)
-Dargonax -\> damage: 200, health: 3500, armor: 18
Blue::(62.50/1950.00/35.00)
-Algordox -\> damage: 65, health: 1800, armor: 50
-Kerizsa -\> damage: 60, health: 2100, armor: 20
[/output]
[/test]
[test open]
[input]
4
Gold Zzazx null 1000 10
Gold Traxx 500 null 0
Gold Xaarxx 250 1000 null
Gold Ardrax 100 1055 50
[/input]
[output]
Gold::(223.75/826.25/17.50)
-Ardrax -\> damage: 100, health: 1055, armor: 50
-Traxx -\> damage: 500, health: 250, armor: 0
-Xaarxx -\> damage: 250, health: 1000, armor: 10
-Zzazx -\> damage: 45, health: 1000, armor: 10
[/output]
[/test]
[test]
[input]
10
Black Gosho 50 100 50
Black Gosho 50 100 50
Black Gosho 50 100 50
Black Gosho 50 100 50
Black Gosho 100 150 100
Red Pesho 80 160 80
Red Pesho 80 160 80
Red Pesho 80 160 80
Red Pesho 80 160 80
Red Pesho 200 260 280
[/input]
[output]
Black::(100.00/150.00/100.00)
-Gosho -\> damage: 100, health: 150, armor: 100
Red::(200.00/260.00/280.00)
-Pesho -\> damage: 200, health: 260, armor: 280
[/output]
[/test]
[test]
[input]
5
Green Stamat 150 215 123
Yellow Stamat 51 124 124
Blue PernishkiGeroi 13 151 15
Gold Dancho 148 1787 11
Purple Azis 89 12 1515
[/input]
[output]
Green::(150.00/215.00/123.00)
-Stamat -\> damage: 150, health: 215, armor: 123
Yellow::(51.00/124.00/124.00)
-Stamat -\> damage: 51, health: 124, armor: 124
Blue::(13.00/151.00/15.00)
-PernishkiGeroi -\> damage: 13, health: 151, armor: 15
Gold::(148.00/1787.00/11.00)
-Dancho -\> damage: 148, health: 1787, armor: 11
Purple::(89.00/12.00/1515.00)
-Azis -\> damage: 89, health: 12, armor: 1515
[/output]
[/test]
[test]
[input]
15
Black Motichkata 150 12115 124
Purple Motichkata 105 124 1412
Black Asencho 121 12412 155
Black Mitaka 17 782 989
Green Parvan 115 1000 100
Purple Stoqn 151 12412 113
Purple Asencho 128 889 909
Green Bochko 124 56 1947
Purple Bochko 1948 909 1231
Black Motichkata 150 12115 124
Purple Motichka 105 1242 1412
Black Assencho 2121 12412 155
Black Shmitaka 17 782 989
Green Parvanka 1115 10020 100
Purple Stoqnka 151 12412 113
[/input]
[output]
Black::(485.20/7700.60/482.40)
-Asencho -\> damage: 121, health: 12412, armor: 155
-Assencho -\> damage: 2121, health: 12412, armor: 155
-Mitaka -\> damage: 17, health: 782, armor: 989
-Motichkata -\> damage: 150, health: 12115, armor: 124
-Shmitaka -\> damage: 17, health: 782, armor: 989
Purple::(431.33/4664.67/865.00)
-Asencho -\> damage: 128, health: 889, armor: 909
-Bochko -\> damage: 1948, health: 909, armor: 1231
-Motichka -\> damage: 105, health: 1242, armor: 1412
-Motichkata -\> damage: 105, health: 124, armor: 1412
-Stoqn -\> damage: 151, health: 12412, armor: 113
-Stoqnka -\> damage: 151, health: 12412, armor: 113
Green::(451.33/3692.00/715.67)
-Bochko -\> damage: 124, health: 56, armor: 1947
-Parvan -\> damage: 115, health: 1000, armor: 100
-Parvanka -\> damage: 1115, health: 10020, armor: 100
[/output]
[/test]
[test]
[input]
6
Green Goshko 120 123 0
Yellow Goshko 120 125 null
Blue Pesho 989 1050 null
Blue Pesho 1000 10000 100
Green Goshko null null null
Yellow Goshko 10000 1000 100
[/input]
[output]
Green::(45.00/250.00/10.00)
-Goshko -\> damage: 45, health: 250, armor: 10
Yellow::(10000.00/1000.00/100.00)
-Goshko -\> damage: 10000, health: 1000, armor: 100
Blue::(1000.00/10000.00/100.00)
-Pesho -\> damage: 1000, health: 10000, armor: 100
[/output]
[/test]
[test]
[input]
100
Gold Mitio null 100 null
Green Goshko 1112 123 123
Gold Toncho 150 null 123
Gold Asan 14 null null
Green Toshko 124 7878 null
Purple Biserchko 149 787 817
Purple Doncho 89 1982 180
Gold Stoil 888 109 1231
Green Boko null 1230 123
Purple Todor null null null
Gold Mitio null 100 null
Green Goshko 1112 123 123
Gold Toncho 150 null 123
Gold Asan 14 null null
Green Toshko 124 7878 null
Purple Bissgerchko 149 787 817
Purple Dosgncho 89 1982 180
Gold Stosgil 888 109 1231
Green Boksgo null 1230 123
Purple Todsgor null null null
Gold Mitigso null 100 null
Green Goshkajko 1112 123 123
Gold Tonchado 150 null 125
Gold Asanak 1412 null null
Green Toshkod 12134 7878 null
Purple Biseadrchko 149 787 817
Purple Donadcho 829 1982 180
Gold Stoiadl 8881 109 1231
Green Bokxo null 11230 123
Purple Todqeor null null null
Gold Mitiqeo null 1100 null
Green Goshqeko 1112 1123 123
Gold Toncqeho 1560 null 123
Gold Asaqen 14 null null
Green Toshkqo 124 7878 null
Purple Bisqeerchko 1849 787 817
Purple Doneqcho 89 19882 180
Gold Stoqeil 888 109 12831
Green Bokoq null 1230 1823
Purple Todqeor null null null
Gold Mitieqo null 1080 null
Green Gosqehko 1112 1283 123
Gold Toneqcho 150 null 8123
Gold Asqean 14 null null
Green Tosheqko 1248 7878 null
Purple Biseqerchko 1849 787 817
Purple Doqencho 898 1982 180
Gold Stoqeil 888 1089 1231
Green Bokeo null 1230 8123
Purple Toeqdor null null null
Gold Mitieo null 1080 null
Green Goseqhko 1112 1823 123
Gold Tonqecho 150 null 123
Gold Asean 114 null null
Green Tosheqko 124 7878 null
Purple Bqeiserchko 1492 7827 817
Purple Deoncho 891 1982 180
Gold Stoeil 888 1029 1231
Green Bokeqo null 1230 123
Purple Toeqdor null null null
Gold Mitqeio null 1010 null
Green Goqeshko 1112 1223 123
Gold Tonqcho 150 null 2123
Gold Asaqen 214 null null
Green Toshkeqo 124 7878 null
Purple Biseqerchko 149 787 817
Purple Donqwcho 829 1982 180
Gold Stoaeil 888 1209 1231
Green Bafoko null 1230 123
Purple Torydor null null null
Gold Mitiro null 1020 null
Green Goshkory 1112 1523 123
Gold Tonchako 150 null 5123
Gold Asankaaa 154 null null
Green Toshako 1254 7878 null
Purple Biseraschko 1549 7587 817
Purple Doncaasdho 859 1982 180
Gold Stoilzl 888 19 1231
Green Bokokko null 1230 123
Purple Todorrr null null null
Gold Mitkio null 10150 null
Green Gosghko 1112 1123 123
Gold Toncaho 150 null 1223
Gold Asaan 1134 null null
Green Toashko 124 72878 null
Purple Bisggerchko 1429 7287 817
Purple Donacho 89 1982 1280
Gold Stoail 888 109 13231
Green Boadko null 12330 123
Purple Toaddor null null null
Gold Mitaio null 1020 null
Green Godashko 1112 1223 123
Gold Toncdaho 150 null 123
Gold Asaana 124 null null
Green Toddshko 124 7878 null
Purple Biseggrchko 1429 7287 817
Purple Donancho 819 12982 180
Gold Stoilka 888 1029 1231
Green Bokoa null 12230 1123
Purple Todaor null null null
[/input]
[output]
Gold::(638.00/734.89/1155.94)
-Asaan -\> damage: 1134, health: 250, armor: 10
-Asaana -\> damage: 124, health: 250, armor: 10
-Asan -\> damage: 14, health: 250, armor: 10
-Asanak -\> damage: 1412, health: 250, armor: 10
-Asankaaa -\> damage: 154, health: 250, armor: 10
-Asaqen -\> damage: 214, health: 250, armor: 10
-Asean -\> damage: 114, health: 250, armor: 10
-Asqean -\> damage: 14, health: 250, armor: 10
-Mitaio -\> damage: 45, health: 1020, armor: 10
-Mitieo -\> damage: 45, health: 1080, armor: 10
-Mitieqo -\> damage: 45, health: 1080, armor: 10
-Mitigso -\> damage: 45, health: 100, armor: 10
-Mitio -\> damage: 45, health: 100, armor: 10
-Mitiqeo -\> damage: 45, health: 1100, armor: 10
-Mitiro -\> damage: 45, health: 1020, armor: 10
-Mitkio -\> damage: 45, health: 10150, armor: 10
-Mitqeio -\> damage: 45, health: 1010, armor: 10
-Stoaeil -\> damage: 888, health: 1209, armor: 1231
-Stoail -\> damage: 888, health: 109, armor: 13231
-Stoeil -\> damage: 888, health: 1029, armor: 1231
-Stoiadl -\> damage: 8881, health: 109, armor: 1231
-Stoil -\> damage: 888, health: 109, armor: 1231
-Stoilka -\> damage: 888, health: 1029, armor: 1231
-Stoilzl -\> damage: 888, health: 19, armor: 1231
-Stoqeil -\> damage: 888, health: 1089, armor: 1231
-Stosgil -\> damage: 888, health: 109, armor: 1231
-Toncaho -\> damage: 150, health: 250, armor: 1223
-Toncdaho -\> damage: 150, health: 250, armor: 123
-Tonchado -\> damage: 150, health: 250, armor: 125
-Tonchako -\> damage: 150, health: 250, armor: 5123
-Toncho -\> damage: 150, health: 250, armor: 123
-Toncqeho -\> damage: 1560, health: 250, armor: 123
-Toneqcho -\> damage: 150, health: 250, armor: 8123
-Tonqcho -\> damage: 150, health: 250, armor: 2123
-Tonqecho -\> damage: 150, health: 250, armor: 123
Green::(910.74/6740.41/485.81)
-Bafoko -\> damage: 45, health: 1230, armor: 123
-Boadko -\> damage: 45, health: 12330, armor: 123
-Bokeo -\> damage: 45, health: 1230, armor: 8123
-Bokeqo -\> damage: 45, health: 1230, armor: 123
-Boko -\> damage: 45, health: 1230, armor: 123
-Bokoa -\> damage: 45, health: 12230, armor: 1123
-Bokokko -\> damage: 45, health: 1230, armor: 123
-Bokoq -\> damage: 45, health: 1230, armor: 1823
-Boksgo -\> damage: 45, health: 1230, armor: 123
-Bokxo -\> damage: 45, health: 11230, armor: 123
-Godashko -\> damage: 1112, health: 1223, armor: 123
-Goqeshko -\> damage: 1112, health: 1223, armor: 123
-Goseqhko -\> damage: 1112, health: 1823, armor: 123
-Gosghko -\> damage: 1112, health: 1123, armor: 123
-Goshkajko -\> damage: 1112, health: 123, armor: 123
-Goshko -\> damage: 1112, health: 123, armor: 123
-Goshkory -\> damage: 1112, health: 1523, armor: 123
-Goshqeko -\> damage: 1112, health: 1123, armor: 123
-Gosqehko -\> damage: 1112, health: 1283, armor: 123
-Toashko -\> damage: 124, health: 72878, armor: 10
-Toddshko -\> damage: 124, health: 7878, armor: 10
-Toshako -\> damage: 1254, health: 7878, armor: 10
-Tosheqko -\> damage: 124, health: 7878, armor: 10
-Toshkeqo -\> damage: 124, health: 7878, armor: 10
-Toshko -\> damage: 124, health: 7878, armor: 10
-Toshkod -\> damage: 12134, health: 7878, armor: 10
-Toshkqo -\> damage: 124, health: 7878, armor: 10
Purple::(525.37/3134.93/382.70)
-Biseadrchko -\> damage: 149, health: 787, armor: 817
-Biseggrchko -\> damage: 1429, health: 7287, armor: 817
-Biseqerchko -\> damage: 149, health: 787, armor: 817
-Biseraschko -\> damage: 1549, health: 7587, armor: 817
-Biserchko -\> damage: 149, health: 787, armor: 817
-Bisggerchko -\> damage: 1429, health: 7287, armor: 817
-Bisqeerchko -\> damage: 1849, health: 787, armor: 817
-Bissgerchko -\> damage: 149, health: 787, armor: 817
-Bqeiserchko -\> damage: 1492, health: 7827, armor: 817
-Deoncho -\> damage: 891, health: 1982, armor: 180
-Donacho -\> damage: 89, health: 1982, armor: 1280
-Donadcho -\> damage: 829, health: 1982, armor: 180
-Donancho -\> damage: 819, health: 12982, armor: 180
-Doncaasdho -\> damage: 859, health: 1982, armor: 180
-Doncho -\> damage: 89, health: 1982, armor: 180
-Doneqcho -\> damage: 89, health: 19882, armor: 180
-Donqwcho -\> damage: 829, health: 1982, armor: 180
-Doqencho -\> damage: 898, health: 1982, armor: 180
-Dosgncho -\> damage: 89, health: 1982, armor: 180
-Toaddor -\> damage: 45, health: 250, armor: 10
-Todaor -\> damage: 45, health: 250, armor: 10
-Todor -\> damage: 45, health: 250, armor: 10
-Todorrr -\> damage: 45, health: 250, armor: 10
-Todqeor -\> damage: 45, health: 250, armor: 10
-Todsgor -\> damage: 45, health: 250, armor: 10
-Toeqdor -\> damage: 45, health: 250, armor: 10
-Torydor -\> damage: 45, health: 250, armor: 10
[/output]
[/test]
[test]
[input]
1
Green Stamat null null null
[/input]
[output]
Green::(45.00/250.00/10.00)
-Stamat -\> damage: 45, health: 250, armor: 10
[/output]
[/test]
[test]
[input]
6
Green Abc 124 14 1
Green Def 189 199 19
Green Ghi 78 899 91
Green Jkl 91 24 234
Green Mno 15 151 8
Green Pqr 898 109 133
[/input]
[output]
Green::(232.50/232.67/81.00)
-Abc -\> damage: 124, health: 14, armor: 1
-Def -\> damage: 189, health: 199, armor: 19
-Ghi -\> damage: 78, health: 899, armor: 91
-Jkl -\> damage: 91, health: 24, armor: 234
-Mno -\> damage: 15, health: 151, armor: 8
-Pqr -\> damage: 898, health: 109, armor: 133
[/output]
[/test]
[test]
[input]
10
Purple Toshko 12 123 1234
Purple Asen 11 2222 333
Purple Rosko 55 141 42
Green Bastuncho 150 1500 550
Green Bastuncho 150 100 150
Green Bastuncho 140 150 550
Green Bastuncho 120 150 550
Purple Stamat 128 1242 155
Green Azsymbastun null null null
Yellow Stoil null null 0
[/input]
[output]
Purple::(51.50/932.00/441.00)
-Asen -\> damage: 11, health: 2222, armor: 333
-Rosko -\> damage: 55, health: 141, armor: 42
-Stamat -\> damage: 128, health: 1242, armor: 155
-Toshko -\> damage: 12, health: 123, armor: 1234
Green::(82.50/200.00/280.00)
-Azsymbastun -\> damage: 45, health: 250, armor: 10
-Bastuncho -\> damage: 120, health: 150, armor: 550
Yellow::(45.00/250.00/0.00)
-Stoil -\> damage: 45, health: 250, armor: 0
[/output]
[/test]
[test]
[input]
3
Green Boklik 0 0 0
Yellow Bokluk 0 0 0
Green Boklek 0 0 0
[/input]
[output]
Green::(0.00/0.00/0.00)
-Boklek -\> damage: 0, health: 0, armor: 0
-Boklik -\> damage: 0, health: 0, armor: 0
Yellow::(0.00/0.00/0.00)
-Bokluk -\> damage: 0, health: 0, armor: 0
[/output]
[/test]
[test]
[input]
5
Black Xxx null 100 null
Black Motko 100 null 100
Yellow Pichagata 15 155 null
Black Azis null null null
Green Bochko 100 1000 10
[/input]
[output]
Black::(63.33/200.00/40.00)
-Azis -\> damage: 45, health: 250, armor: 10
-Motko -\> damage: 100, health: 250, armor: 100
-Xxx -\> damage: 45, health: 100, armor: 10
Yellow::(15.00/155.00/10.00)
-Pichagata -\> damage: 15, health: 155, armor: 10
Green::(100.00/1000.00/10.00)
-Bochko -\> damage: 100, health: 1000, armor: 10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


