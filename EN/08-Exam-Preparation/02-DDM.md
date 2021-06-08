[slide hideTitle]

# Data Manipulation Language (DML)

[/slide]

[slide hideTitle]

# Data Manipulation Language (DML) – 30 Pts

Here we need to do several manipulations in the database, like changing data, adding data etc.

[/slide]

[slide hideTitle]
# Problem: Insert
[code-task title="Problem: Insert" taskId="2b3bab74-2a81-4825-bdf2-e181ea4ba203" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will have to **insert** records of data into the **addresses** table, based on the **users** table. 

For **users** with **male gender**, **insert data** in the **addresses** table with the **following values**:

•	**address** – set it to **username** of the **user**.

•	**town** – set it to **password** of the **user**.

•	**country** – set it to **ip** of the **user**. 

•	**user_id** – set it to **age** of the **user**. 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT COUNT(id) FROM addresses;
[/input]
[output]
154
[/output]
[/test]
[test]
[input]
100
34 Nobel Point
87
101
ygeratt0
71
102
cdinesen1
11
103
djura2
68
104
gjoannidi3
98
105
ftroppmann5
1
106
cbaythorp8
96
107
aroccob
77
108
cchadbournee
16
109
rzywickij
3
110
rgreatreaxm
68
111
egurtono
71
112
ghingep
27
113
mgethingq
99
114
mbaxsterr
93
115
dpauels
58
116
htabordw
18
117
prestorickx
98
118
ylaimabley
87
119
chartfordz
100
120
lmckirdy12
30
121
bfrichley13
87
122
rgurden15
92
123
vlukasik18
57
124
mhinsch1a
72
125
mosgood1b
42
126
mtansly1c
94
127
bkelling1g
49
128
ndelamar1j
11
129
kbraitling1k
41
130
pshellcross1q
79
131
dcrouch1s
48
132
ekennaway1t
24
133
cmiddlemist1v
84
134
hmatonin1y
66
135
aflexman1z
11
136
eblagden21
81
137
joutright23
30
138
ebenoi25
33
139
lizacenko27
5
140
mbartles28
37
141
yzettoi29
62
142
gciccottio2a
65
143
odalley2b
96
144
ehayle2d
5
145
efellibrand2e
74
146
cvela2f
74
147
agurney2g
48
148
hbonelle2h
41
149
akillelea2i
8
150
aosbourn2j
75
151
gmintram2k
4
152
tszach2l
86
153
bbodycombe2n
57
154
lboultwood2r
48
[/input]
[output]
100
34 Nobel Point
87
101
ygeratt0
71
102
cdinesen1
11
103
djura2
68
104
gjoannidi3
98
105
ftroppmann5
1
106
cbaythorp8
96
107
aroccob
77
108
cchadbournee
16
109
rzywickij
3
110
rgreatreaxm
68
111
egurtono
71
112
ghingep
27
113
mgethingq
99
114
mbaxsterr
93
115
dpauels
58
116
htabordw
18
117
prestorickx
98
118
ylaimabley
87
119
chartfordz
100
120
lmckirdy12
30
121
bfrichley13
87
122
rgurden15
92
123
vlukasik18
57
124
mhinsch1a
72
125
mosgood1b
42
126
mtansly1c
94
127
bkelling1g
49
128
ndelamar1j
11
129
kbraitling1k
41
130
pshellcross1q
79
131
dcrouch1s
48
132
ekennaway1t
24
133
cmiddlemist1v
84
134
hmatonin1y
66
135
aflexman1z
11
136
eblagden21
81
137
joutright23
30
138
ebenoi25
33
139
lizacenko27
5
140
mbartles28
37
141
yzettoi29
62
142
gciccottio2a
65
143
odalley2b
96
144
ehayle2d
5
145
efellibrand2e
74
146
cvela2f
74
147
agurney2g
48
148
hbonelle2h
41
149
akillelea2i
8
150
aosbourn2j
75
151
gmintram2k
4
152
tszach2l
86
153
bbodycombe2n
57
154
lboultwood2r
48
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Update
[code-task title="Problem: Update" taskId="7b0c30ab-71e9-4963-bcb3-cfd5b5fae365" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Rename** those **countries**, which meet the following conditions:

If the country name starts with 'B' – **change** it to '**Blocked**'.

If the country name starts with 'T' – **change** it to '**Test**'.

If the country name starts with 'P' – **change** it to '**In Progress**'.



[/task-description]
[code-io /]
[tests]
[test open]
[input]
11
4
16
[/input]
[output]
11
4
16
[/output]
[/test]
[test]
[input]
1
17
27
34
56
76
79
85
86
89
92
12
33
53
96
3
7
9
16
25
28
40
42
45
55
57
58
67
74
87
98
[/input]
[output]
1
17
27
34
56
76
79
85
86
89
92
12
33
53
96
3
7
9
16
25
28
40
42
45
55
57
58
67
74
87
98
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Delete
[code-task title="Problem: Delete" taskId="90353737-3912-4926-b782-f92e70c1f67b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
As you remember at the beginning of our work, we **inserted** and **updated** some data. 

Now you need to **remove** some **addresses**.	

**Delete** all **addresses** from table **addresses**, which id is divisible by **3**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
67
[/input]
[output]
67
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
[/tests]
[/code-task]
[/slide]

