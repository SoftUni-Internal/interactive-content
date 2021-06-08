[slide hideTitle]

# Querying

And now we need to do some data extraction. 

**Note** that the **example results** from **this section** use a **fresh database**. 

It is **highly recommended** that you **clear** the **database** that has been **manipulated** by the **previous problems** from the **DML section** 

and **insert again** the **dataset** you’ve been given, to ensure **maximum consistency** with the **examples** given in this section.

[/slide]

[slide hideTitle]
# Problem: Users
[code-task title="Problem: Users" taskId="88914e0a-5ef5-4b16-9310-a26a359d56ac" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Extract from the Insta Database (instd), info about all the **users**. 

**Order** the results by **age descending** then by **username ascending**.

## Required Columns

-	**username**

-	**gender**

-	**age**


## Examples
| **username** | **gender** | **age** |
| --- | --- | --- |
| chartfordz | M | 100 |
| mcaygill1d | F | 100 |
| mgethingq | M | 99 |
| … | … | … |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
chartfordz
M
100
mcaygill1d
F
100
mgethingq
M
99
ebridatf
F
98
gjoannidi3
M
98
prestorickx
M
98
nclaye2m
F
97
cbaythorp8
M
96
odalley2b
M
96
jmauger1u
F
94
mtansly1c
M
94
mbaxsterr
M
93
mkitteringhamc
F
93
rgurden15
M
92
vfaers24
F
92
bfrichley13
M
87
ylaimabley
M
87
tszach2l
M
86
balbertson2q
F
84
cmiddlemist1v
M
84
eblagden21
M
81
pshellcross1q
M
79
npaddisonl
F
78
aroccob
M
77
oleckie9
F
77
oseally19
F
77
rdomeny17
F
77
aosbourn2j
M
75
cvela2f
M
74
efellibrand2e
M
74
kwarbeyk
F
72
mhinsch1a
M
72
egurtono
M
71
ygeratt01
M
71
xbleby2p
F
69
djura2
M
68
rgreatreaxm
M
68
hmatonin1y
M
66
gciccottio2a
M
65
moliveira1w
F
62
yzettoi29
M
62
tduns11
F
61
kkynoch1r
F
59
dpauels
M
58
koregan1f
F
58
bbodycombe2n
M
57
vlukasik18
M
57
abrameld1o
F
56
ssantryd
F
52
bferenceg
F
50
bkelling1g
M
49
ddempster26
F
49
agurney2g
M
48
dcrouch1s
M
48
lboultwood2r
M
48
bvickress7
F
47
jlutmanh
F
44
mosgood1b
M
42
hbonelle2h
M
41
kbraitling1k
M
41
mvonoertzen1i
F
40
rmacauleyt
F
40
thavoc1l
F
38
mbartles28
M
37
matthowei
F
36
chalgarth10
F
34
galchin14
F
34
ebenoi25
M
33
bgillingsa
F
32
joutright23
M
30
lmckirdy12
M
30
ghingep
M
27
rmcgirr16
F
25
ekennaway1t
M
24
ichoakv
F
24
btander1e
F
23
canscott20
F
21
sbarrowclough2c
F
21
wsline6
F
21
htabordw
M
18
cchadbournee
M
16
ceasonu
F
14
urihanek1x
F
14
lcurtois1m
F
13
pbenes1p
F
12
aflexman1z
M
11
cdinesen1
M
11
godyvoy2o
F
11
ndelamar1j
M
11
akillelea2i
M
8
jgoody22
F
8
ehayle2d
M
5
lizacenko27
M
5
pcoomer1h
F
5
gmintram2k
M
4
hgrigoryov4
F
4
sknealen
F
4
rzywickij
M
3
ftroppmann5
M
1
jbousfield1n
F
1
[/input]
[output]
chartfordz
M
100
mcaygill1d
F
100
mgethingq
M
99
ebridatf
F
98
gjoannidi3
M
98
prestorickx
M
98
nclaye2m
F
97
cbaythorp8
M
96
odalley2b
M
96
jmauger1u
F
94
mtansly1c
M
94
mbaxsterr
M
93
mkitteringhamc
F
93
rgurden15
M
92
vfaers24
F
92
bfrichley13
M
87
ylaimabley
M
87
tszach2l
M
86
balbertson2q
F
84
cmiddlemist1v
M
84
eblagden21
M
81
pshellcross1q
M
79
npaddisonl
F
78
aroccob
M
77
oleckie9
F
77
oseally19
F
77
rdomeny17
F
77
aosbourn2j
M
75
cvela2f
M
74
efellibrand2e
M
74
kwarbeyk
F
72
mhinsch1a
M
72
egurtono
M
71
ygeratt01
M
71
xbleby2p
F
69
djura2
M
68
rgreatreaxm
M
68
hmatonin1y
M
66
gciccottio2a
M
65
moliveira1w
F
62
yzettoi29
M
62
tduns11
F
61
kkynoch1r
F
59
dpauels
M
58
koregan1f
F
58
bbodycombe2n
M
57
vlukasik18
M
57
abrameld1o
F
56
ssantryd
F
52
bferenceg
F
50
bkelling1g
M
49
ddempster26
F
49
agurney2g
M
48
dcrouch1s
M
48
lboultwood2r
M
48
bvickress7
F
47
jlutmanh
F
44
mosgood1b
M
42
hbonelle2h
M
41
kbraitling1k
M
41
mvonoertzen1i
F
40
rmacauleyt
F
40
thavoc1l
F
38
mbartles28
M
37
matthowei
F
36
chalgarth10
F
34
galchin14
F
34
ebenoi25
M
33
bgillingsa
F
32
joutright23
M
30
lmckirdy12
M
30
ghingep
M
27
rmcgirr16
F
25
ekennaway1t
M
24
ichoakv
F
24
btander1e
F
23
canscott20
F
21
sbarrowclough2c
F
21
wsline6
F
21
htabordw
M
18
cchadbournee
M
16
ceasonu
F
14
urihanek1x
F
14
lcurtois1m
F
13
pbenes1p
F
12
aflexman1z
M
11
cdinesen1
M
11
godyvoy2o
F
11
ndelamar1j
M
11
akillelea2i
M
8
jgoody22
F
8
ehayle2d
M
5
lizacenko27
M
5
pcoomer1h
F
5
gmintram2k
M
4
hgrigoryov4
F
4
sknealen
F
4
rzywickij
M
3
ftroppmann5
M
1
jbousfield1n
F
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Extract 5 Most Commented Photos
[code-task title="Problem: Extract 5 Most Commented Photos" taskId="8deef107-b4c7-4365-a7cf-8a07a5b50a16" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Extract from the database, 5 most commented **photos** with their count of **comments**. 

Sort the results by **commentsCount, descending**, then by **id** in **ascending** order.

## Required Columns
-	**id**

-	**date_and_time**

-	**description**

-	**commentsCount**


## Examples
| **id** | **date_and_time** | **description** | **commentsCount** |
| --- | --- | --- | --- |
| 23 | 2019-10-13 14:13:42 | Duis bibendum, felis sed interdum venenatis, turpis enim blandit … | 4 |
| 25 | 2019-07-20 13:08:03 | In congue. Etiam justo. Etiam pretium… | 4 |
| 14 | 2020-02-16 13:49:08 | Praesent blandit. Nam nulla. Integer pede justo… | 3 |
| … | … | … | … |
|  |  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
23
2019-10-13 14:13:42
Duis bibendum, sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
4
25
2019-07-20 13:08:03
In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
4
14
2020-02-16 13:49:08
Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.
3
17
2020-02-02 09:14:40
Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
3
31
2019-05-06 05:45:48
Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.
3
[/input]
[output]
23
2019-10-13 14:13:42
Duis bibendum, sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
4
25
2019-07-20 13:08:03
In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
4
14
2020-02-16 13:49:08
Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.
3
17
2020-02-02 09:14:40
Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
3
31
2019-05-06 05:45:48
Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Lucky Users
[code-task title="Problem: Lucky Users" taskId="2d741844-7d52-46f1-bc53-14bf304c5e82" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
When the user has the **same** id as its photo, it is considered Lucky User. 

Extract from the database all **lucky users**. 

Extract **id_username** (concat id + " " + username) and email of **all lucky users**. 

Order the results ascending by user **id**.

## Required Columns
•	**id_username**
•	**email**


## Examples
| **id_username** | **email** |
| --- | --- |
| 12 aroccob | dpendrichb@hhs.gov |
| … | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
12 aroccobb
dpendrichb@hhs.gov
54 pcoomer1h
amcgahy1h@cornell.edu
70 urihanek1x
mavison1x@imdb.com
[/input]
[output]
12 aroccobb
dpendrichb@hhs.gov
54 pcoomer1h
amcgahy1h@cornell.edu
70 urihanek1x
mavison1x@imdb.com
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Count Likes and Comments
[code-task title="Problem: Count Likes and Comments" taskId="527416b8-07c6-4943-8f0a-6a36fb828d2f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Extract from the database, **photos id with their likes and comments**. 

Order them by count of **likes descending**, then by **comments count descending** and **lastly by photo id ascending**.

## Required Columns

-	**photo_id**

-	**likes_count**

-	**comments_count**


## Examples
| **photo_id** | **likes_count** | **comments_count** |
| --- | --- | --- |
| 1 | 4 | 2 |
| 58 | 4 | 1 |
| 69 | 4 | 0 |
| … | … | … |
|  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
5
2
58
4
1
69
4
0
15
3
1
61
3
1
83
3
1
46
3
0
90
3
0
41
2
2
4
2
1
30
2
1
47
2
1
48
2
1
79
2
1
97
2
1
8
2
0
12
2
0
34
2
0
49
2
0
52
2
0
59
2
0
64
2
0
67
2
0
78
2
0
23
1
4
25
1
4
14
1
3
17
1
3
31
1
3
40
1
3
99
1
3
26
1
2
28
1
2
32
1
2
33
1
2
36
1
2
37
1
2
51
1
2
60
1
2
68
1
2
86
1
2
2
1
1
13
1
1
16
1
1
27
1
1
29
1
1
42
1
1
53
1
1
66
1
1
72
1
1
74
1
1
85
1
1
89
1
1
7
1
0
9
1
0
21
1
0
24
1
0
38
1
0
45
1
0
57
1
0
70
1
0
76
1
0
81
1
0
82
1
0
98
1
0
100
0
3
6
0
2
11
0
2
19
0
2
22
0
2
63
0
2
84
0
2
87
0
2
94
0
2
3
0
1
5
0
1
18
0
1
20
0
1
35
0
1
39
0
1
43
0
1
75
0
1
80
0
1
88
0
1
91
0
1
95
0
1
10
0
0
44
0
0
50
0
0
54
0
0
55
0
0
56
0
0
62
0
0
65
0
0
71
0
0
73
0
0
77
0
0
92
0
0
93
0
0
96
0
0
[/input]
[output]
1
5
2
58
4
1
69
4
0
15
3
1
61
3
1
83
3
1
46
3
0
90
3
0
41
2
2
4
2
1
30
2
1
47
2
1
48
2
1
79
2
1
97
2
1
8
2
0
12
2
0
34
2
0
49
2
0
52
2
0
59
2
0
64
2
0
67
2
0
78
2
0
23
1
4
25
1
4
14
1
3
17
1
3
31
1
3
40
1
3
99
1
3
26
1
2
28
1
2
32
1
2
33
1
2
36
1
2
37
1
2
51
1
2
60
1
2
68
1
2
86
1
2
2
1
1
13
1
1
16
1
1
27
1
1
29
1
1
42
1
1
53
1
1
66
1
1
72
1
1
74
1
1
85
1
1
89
1
1
7
1
0
9
1
0
21
1
0
24
1
0
38
1
0
45
1
0
57
1
0
70
1
0
76
1
0
81
1
0
82
1
0
98
1
0
100
0
3
6
0
2
11
0
2
19
0
2
22
0
2
63
0
2
84
0
2
87
0
2
94
0
2
3
0
1
5
0
1
18
0
1
20
0
1
35
0
1
39
0
1
43
0
1
75
0
1
80
0
1
88
0
1
91
0
1
95
0
1
10
0
0
44
0
0
50
0
0
54
0
0
55
0
0
56
0
0
62
0
0
65
0
0
71
0
0
73
0
0
77
0
0
92
0
0
93
0
0
96
0
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: The Photo on the Tenth Day of the Month
[code-task title="Problem: The Photo on the Tenth Day of the Month" taskId="6acc9807-402c-4b48-ae7b-9333ebf7698f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Extract from the database those **photos** that their upload day is **10** and **summarize** their description.

**The summary must be 30 symbols long plus "..." at the end**.

Order the results by **date descending order**. 

## Required Columns

-	summary

-	date


## Examples
| **summary** | **date** |
| --- | --- |
| Suspendisse potenti. In eleife... | 2019-12-10 15:20:14 |
| Quisque id justo sit amet sapi... | 2019-10-10 08:58:52 |
| Mauris enim leo, rhoncus sed, ... | 2019-05-10 14:40:22 |
| … | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Suspendisse potanti. In eleife...
2019-12-10 15:20:14
Quisque id justo sit amet sapi...
2019-10-10 08:58:52
Mauris enim leo, rhoncus sed, ...
2019-05-10 14:40:22
Sed sagittis. Nam congue, risu...
2019-05-10 14:23:11
In quis justo. Maecenas rhoncu...
2019-03-10 11:07:44
[/input]
[output]
Suspendisse potanti. In eleife...
2019-12-10 15:20:14
Quisque id justo sit amet sapi...
2019-10-10 08:58:52
Mauris enim leo, rhoncus sed, ...
2019-05-10 14:40:22
Sed sagittis. Nam congue, risu...
2019-05-10 14:23:11
In quis justo. Maecenas rhoncu...
2019-03-10 11:07:44
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Exam-Prep Results
[tasks-results/]

[/slide]