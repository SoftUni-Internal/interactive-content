[slide]
# Problem: Bills
[code-task title="Bills" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program to calculate the average cost per month for a family over a period of time. For each month the costs are as follows:

- For **electricity** - every month the bill is different and will be read from the console
- For **water** - 20$
- For **Internet** - 15$
- For **others** - sum the bills for electricity, water and Internet and add 20%

For each bill, you need to calculate how much total is paid for **all months**.

# Input

The input is read from the console: 

- The **months** for which the average cost is searched – integer in range \[1... 100\] 
- For each month – the bill for electricity – a real number in range \[1.00... 1000.00\]

# Output
Print to the console **5** rows: 
- "Electricity: \{electricity for all months\} $" 
- "Water: \{water for all months\} $" 
- "Internet: \{Internet for all months\} $" 
- "Other: \{Other for all months\} $" 
- "Average: \{Average all costs per month\} $ "

All bills sohould be **formatted to the 2nd digit after the decimal point**.

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 5 | | Electricity: 447.16 $ |
| 68.63 | | Water: 100.00 $ |
| 68.63 | | Internet: 75.00 $ |
| 132.53 | | Other: 746.59 $ |
| 93.53 | | Average: 273.75 $ |
| 63.22 | | |

## Comments
For **5** months:
- **Electricity** -> 68.63 \+ 89.25 \+ 132.53 \+ 93.53 \+ 63.22 = **447.16**$
- **Water** -> 5 months \* 20$ = **100**$
- **Internet** -> 5 months \* 15$ = **75**$
- **Others**:
    - 68.63+20+15) + 20% = 124.356  
    - (89.25+20+15) + 20% = 149.1
    - (132.53+20+15) + 20% = 201.036
    - (93.53+20+15) + 20% = 154.236
    - (63.22+20+15) + 20% = 117.864
- **Total = 746.592$**
- **Average** bills per month = (447.16+100+75+746.592)/5 = **273.7504**$

[/task-description]
[tests]
[test]
[input]
5
68.63
89.25
132.53
93.53
63.22
[/input]
[output]
Electricity: 447.16 $
Water: 100.00 $
Internet: 75.00 $
Other: 746.59 $
Average: 273.75 $
[/output]
[/test]
[test]
[input]
8
123.54
231.54
140.23
100
122.4
430
178.52
64.2
[/input]
[output]
Electricity: 1390.43 $
Water: 160.00 $
Internet: 120.00 $
Other: 2004.52 $
Average: 459.37 $
[/output]
[/test]
[test]
[input]
10
123
321
123
321
123
321
123
321
123
321
[/input]
[output]
Electricity: 2220.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 3084.00 $
Average: 565.40 $
[/output]
[/test]
[test]
[input]
50
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
[/input]
[output]
Electricity: 1275.00 $
Water: 1000.00 $
Internet: 750.00 $
Other: 3630.00 $
Average: 133.10 $
[/output]
[/test]
[test]
[input]
23
123.34
432.23
213.12
231.3
266.1
677
1000
23
54
765
23
54
23
54
87
236
353
847
357
346
335
643
523
[/input]
[output]
Electricity: 7666.09 $
Water: 460.00 $
Internet: 345.00 $
Other: 10165.31 $
Average: 810.28 $
[/output]
[/test]
[test]
[input]
1
123.34
[/input]
[output]
Electricity: 123.34 $
Water: 20.00 $
Internet: 15.00 $
Other: 190.01 $
Average: 348.35 $
[/output]
[/test]
[test]
[input]
10
1
2
3
4
5
6
7
8
9
10
[/input]
[output]
Electricity: 55.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 486.00 $
Average: 89.10 $
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]