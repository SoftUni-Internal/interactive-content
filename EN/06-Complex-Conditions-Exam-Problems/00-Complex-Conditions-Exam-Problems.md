# Exercise

[slide hideTitle]
#  On Time for the Exam
[code-task title=" On Time for the Exam" taskId="On-Time-For-The-Exam" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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


[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
30
9
50
[/input]
[output]
Late
20 minutes after the start
[/output]
[/test]
[test open]
[input]
9
00
10
30
[/input]
[output]
Late
1:30 hours after the start
[/output]
[/test]
[test open]
[input]
9
00
8
30
[/input]
[output]
On time
30 minutes before the start
[/output]
[/test]
[test open]
[input]
14
00
13
55
[/input]
[output]
On time
5 minutes before the start
[/output]
[/test]
[test open]
[input]
11
30
10
55
[/input]
[output]
Early
35 minutes before the start
[/output]
[/test]
[test open]
[input]
16
00
15
00
[/input]
[output]
Early
1:00 hours before the start
[/output]
[/test]
[test open]
[input]
11
30
8
12
[/input]
[output]
Early
3:18 hours before the start
[/output]
[/test]
[test open]
[input]
11
30
12
29
[/input]
[output]
Late
59 minutes after the start
[/output]
[/test]
[test open]
[input]
10
00
10
00
[/input]
[output]
On time
[/output]
[/test]
[test]
[input]
8
00
6
00
[/input]
[output]
Early
2:00 hours before the start
[/output]
[/test]
[test]
[input]
9
00
7
25
[/input]
[output]
Early
1:35 hours before the start
[/output]
[/test]
[test]
[input]
16
00
14
55
[/input]
[output]
Early
1:05 hours before the start
[/output]
[/test]
[test]
[input]
15
30
14
30
[/input]
[output]
Early
1:00 hours before the start
[/output]
[/test]
[test]
[input]
10
00
9
01
[/input]
[output]
Early
59 minutes before the start
[/output]
[/test]
[test]
[input]
10
00
9
29
[/input]
[output]
Early
31 minutes before the start
[/output]
[/test]
[test]
[input]
9
00
8
30
[/input]
[output]
On time
30 minutes before the start
[/output]
[/test]
[test]
[input]
16
00
15
31
[/input]
[output]
On time
29 minutes before the start
[/output]
[/test]
[test]
[input]
8
30
8
29
[/input]
[output]
On time
1 minutes before the start
[/output]
[/test]
[test]
[input]
13
00
13
00
[/input]
[output]
On time
[/output]
[/test]
[test]
[input]
14
00
14
01
[/input]
[output]
Late
1 minutes after the start
[/output]
[/test]
[test]
[input]
9
00
9
10
[/input]
[output]
Late
10 minutes after the start
[/output]
[/test]
[test]
[input]
9
30
10
29
[/input]
[output]
Late
59 minutes after the start
[/output]
[/test]
[test]
[input]
16
00
17
00
[/input]
[output]
Late
1:00 hours after the start
[/output]
[/test]
[test]
[input]
16
00
17
05
[/input]
[output]
Late
1:05 hours after the start
[/output]
[/test]
[test]
[input]
9
00
10
55
[/input]
[output]
Late
1:55 hours after the start
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
#  Trip
[code-task title=" Trip" taskId="Trip" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
50
summer
[/input]
[output]
Somewhere in Bulgaria
Camp - 15.00
[/output]
[/test]
[test open]
[input]
75
winter
[/input]
[output]
Somewhere in Bulgaria
Hotel - 52.50
[/output]
[/test]
[test open]
[input]
312
summer
[/input]
[output]
Somewhere in Balkans
Camp - 124.80
[/output]
[/test]
[test open]
[input]
678.53
winter
[/input]
[output]
Somewhere in Balkans
Hotel - 542.82
[/output]
[/test]
[test open]
[input]
1500
summer
[/input]
[output]
Somewhere in Europe
Hotel - 1350.00
[/output]
[/test]
[test]
[input]
100
summer
[/input]
[output]
Somewhere in Bulgaria
Camp - 30.00
[/output]
[/test]
[test]
[input]
100
winter
[/input]
[output]
Somewhere in Bulgaria
Hotel - 70.00
[/output]
[/test]
[test]
[input]
1000
summer
[/input]
[output]
Somewhere in Balkans
Camp - 400.00
[/output]
[/test]
[test]
[input]
1000
winter
[/input]
[output]
Somewhere in Balkans
Hotel - 800.00
[/output]
[/test]
[test]
[input]
5000
summer
[/input]
[output]
Somewhere in Europe
Hotel - 4500.00
[/output]
[/test]
[test]
[input]
5000
winter
[/input]
[output]
Somewhere in Europe
Hotel - 4500.00
[/output]
[/test]
[test]
[input]
58.23
summer
[/input]
[output]
Somewhere in Bulgaria
Camp - 17.47
[/output]
[/test]
[test]
[input]
666.66
winter
[/input]
[output]
Somewhere in Balkans
Hotel - 533.33
[/output]
[/test]
[test]
[input]
2222.22
winter
[/input]
[output]
Somewhere in Europe
Hotel - 2000.00
[/output]
[/test]
[test]
[input]
3923
summer
[/input]
[output]
Somewhere in Europe
Hotel - 3530.70
[/output]
[/test]
[test]
[input]
3923.1
winter
[/input]
[output]
Somewhere in Europe
Hotel - 3530.79
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
#  Operations
[code-task title=" Operations" taskId="Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10
12
+
[/input]
[output]
10 + 12 = 22 - even
[/output]
[/test]
[test open]
[input]
10
1
-
[/input]
[output]
10 - 1 = 9 - odd
[/output]
[/test]
[test open]
[input]
7
3
\*
[/input]
[output]
7 \* 3 = 21 - odd
[/output]
[/test]
[test open]
[input]
123
12
/
[/input]
[output]
123 / 12 = 10.25
[/output]
[/test]
[test open]
[input]
10
3
%
[/input]
[output]
10 % 3 = 1
[/output]
[/test]
[test open]
[input]
112
0
/
[/input]
[output]
Cannot divide 112 by zero
[/output]
[/test]
[test open]
[input]
10
0
%
[/input]
[output]
Cannot divide 10 by zero
[/output]
[/test]
[test]
[input]
55
5
/
[/input]
[output]
55 / 5 = 11.00
[/output]
[/test]
[test]
[input]
11
2
\*
[/input]
[output]
11 \* 2 = 22 - even
[/output]
[/test]
[test]
[input]
423
453
/
[/input]
[output]
423 / 453 = 0.93
[/output]
[/test]
[test]
[input]
343
2421
+
[/input]
[output]
343 + 2421 = 2764 - even
[/output]
[/test]
[test]
[input]
2423
42332
-
[/input]
[output]
2423 - 42332 = -39909 - odd
[/output]
[/test]
[test]
[input]
0
0
%
[/input]
[output]
Cannot divide 0 by zero
[/output]
[/test]
[test]
[input]
0
0
/
[/input]
[output]
Cannot divide 0 by zero
[/output]
[/test]
[test]
[input]
10
1234
%
[/input]
[output]
10 % 1234 = 10
[/output]
[/test]
[test]
[input]
4324
43
-
[/input]
[output]
4324 - 43 = 4281 - odd
[/output]
[/test]
[test]
[input]
24343
765767
/
[/input]
[output]
24343 / 765767 = 0.03
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
#  Match Tickets
[code-task title=" Match Tickets" taskId="Match-Tickets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1000
Normal
1
[/input]
[output]
Yes! You have 0.01 leva left.
[/output]
[/test]
[test open]
[input]
30000
VIP
49
[/input]
[output]
Not enough money! You need 6499.51 leva.
[/output]
[/test]
[test open]
[input]
50000
Normal
200
[/input]
[output]
Not enough money! You need 12498.00 leva.
[/output]
[/test]
[test]
[input]
1234
VIP
1
[/input]
[output]
Not enough money! You need 191.49 leva.
[/output]
[/test]
[test]
[input]
25000
VIP
2
[/input]
[output]
Yes! You have 5250.02 leva left.
[/output]
[/test]
[test]
[input]
15432
Normal
5
[/input]
[output]
Yes! You have 4922.85 leva left.
[/output]
[/test]
[test]
[input]
9999.90
VIP
10
[/input]
[output]
Yes! You have 0.05 leva left.
[/output]
[/test]
[test]
[input]
7000
VIP
17
[/input]
[output]
Not enough money! You need 4999.83 leva.
[/output]
[/test]
[test]
[input]
13956
VIP
26
[/input]
[output]
Not enough money! You need 4626.14 leva.
[/output]
[/test]
[test]
[input]
76194
VIP
120
[/input]
[output]
Not enough money! You need 2853.30 leva.
[/output]
[/test]
[test]
[input]
1000000
VIP
200
[/input]
[output]
Yes! You have 650002.00 leva left.
[/output]
[/test]
[test]
[input]
67302
VIP
167
[/input]
[output]
Not enough money! You need 33021.83 leva.
[/output]
[/test]
[test]
[input]
76015
VIP
47
[/input]
[output]
Yes! You have 22109.47 leva left.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
#  Hotel Room
[code-task title=" Hotel Room" taskId="Hotel-Room" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[/task-description]
[code-io /]
[tests]
[test open]
[input]
May
15
[/input]
[output]
Apartment: 877.50 lv.
Studio: 525.00 lv.
[/output]
[/test]
[test open]
[input]
June
14
[/input]
[output]
Apartment: 961.80 lv.
Studio: 1052.80 lv.
[/output]
[/test]
[test open]
[input]
August
20
[/input]
[output]
Apartment: 1386.00 lv.
Studio: 1520.00 lv.
[/output]
[/test]
[test]
[input]
May
8
[/input]
[output]
Apartment: 520.00 lv.
Studio: 380.00 lv.
[/output]
[/test]
[test]
[input]
May
7
[/input]
[output]
Apartment: 455.00 lv.
Studio: 350.00 lv.
[/output]
[/test]
[test]
[input]
October
17
[/input]
[output]
Apartment: 994.50 lv.
Studio: 595.00 lv.
[/output]
[/test]
[test]
[input]
September
15
[/input]
[output]
Apartment: 927.45 lv.
Studio: 902.40 lv.
[/output]
[/test]
[test]
[input]
June
144
[/input]
[output]
Apartment: 8903.52 lv.
Studio: 8663.04 lv.
[/output]
[/test]
[test]
[input]
September
0
[/input]
[output]
Apartment: 0.00 lv.
Studio: 0.00 lv.
[/output]
[/test]
[test]
[input]
August
2
[/input]
[output]
Apartment: 154.00 lv.
Studio: 152.00 lv.
[/output]
[/test]
[test]
[input]
July
200
[/input]
[output]
Apartment: 13860.00 lv.
Studio: 15200.00 lv.
[/output]
[/test]
[test]
[input]
July
14
[/input]
[output]
Apartment: 1078.00 lv.
Studio: 1064.00 lv.
[/output]
[/test]
[test]
[input]
October
9
[/input]
[output]
Apartment: 585.00 lv.
Studio: 427.50 lv.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]