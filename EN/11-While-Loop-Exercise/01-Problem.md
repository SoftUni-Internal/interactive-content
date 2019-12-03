[slide]
# Problem: Dishwasher
[code-task title="Dishwasher" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
John works in a restaurant and is responsible for loading the dishwasher at the end of the day. 

Your task is to write a program that calculates **whether** a purchased quantity of bottles of dishwasher detergent is **enough** to wash a certain amount of vessels. 

It is known that each bottle contains **750 ml.** detergent. 

For 1 **plate** 5 ml is needed, and for a **pots** 15 ml. 

Accept that on every **third** filling with vessels, the dishwasher is filled only with pots, and the other times with plates. 

Until you get the command **"END"** you will continue to receive the number of vessels that need to be washed.

# Input
Read from the console: 
- **Number of bottles of detergent** that will be used for washing of plates - integer in range \[1...10\] 

On each **subsequent** line, until the command **"End"** or until **the amount of detergent is not run out**, the **number of vessels** that need to be washed - integer in range \[1...100\]

# Output
- In case that the amount of detergent **was sufficient** for the washing of the vessels, print three lines of output: 
    - "Detergent was enough!"
    - "\{Number of clean plates\} dishes and \{number of clean pots\} pots were washed."
    - "Leftover detergent \{amount of detergent remaining\} ml." 
- If the amount of detergent **was not sufficient** for the washing of the vessels, print the following line: 
    - "Not enough detergent, \{quantity not reached detergent\} ml. more necessary!"

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 2 | | Detergent was enough! |
| 53 | | 118 dishes and 55 pots were washed. |
| 65 | | Leftover detergent 85 ml. |
| 55 | | |
| End | | |

## Comments
- Detergent quantity = 2 \* 750 = 1500 ml.
- 53 plates are loaded = > 53 \* 5 = 265 ml.  1500 \- 265 = 1235 ml. (residue)
- 65 plates = > 65 \* 5 = 325 ml 1235 \- 325 = 910 ml. (residue)
- 55 pots = > 55 \* 15 = 825 ml 910\- 825 = 85 ml. (residue)
- We receive the command "End", therefore the quantity is reached and the corresponding message is printed: number of plates = 53 \+ 65 = 118. Number of pots = 55
[/task-description]
[tests]
[test]
[input]
2
53
65
55
End
[/input]
[output]
Detergent was enough!
118 dishes and 55 pots were washed.
Leftover detergent 85 ml.
[/output]
[/test]
[test]
[input]
1
10
15
10
12
13
30
[/input]
[output]
Not enough detergent, 100 ml. more necessary!
[/output]
[/test]
[test]
[input]
2
25
50
75
End
[/input]
[output]
Detergent was enough!
75 dishes and 75 pots were washed.
Leftover detergent 0 ml.
[/output]
[/test]
[test]
[input]
2
25
50
75
1
[/input]
[output]
Not enough detergent, 5 ml. more necessary!
[/output]
[/test]
[test]
[input]
3
66
33
99
End
[/input]
[output]
Detergent was enough!
99 dishes and 99 pots were washed.
Leftover detergent 270 ml.
[/output]
[/test]
[test]
[input]
3
38
47
59
75
31
29
[/input]
[output]
Not enough detergent, 25 ml. more necessary!
[/output]
[/test]
[test]
[input]
4
25
39
31
20
49
66
33
25
End
[/input]
[output]
Detergent was enough!
191 dishes and 97 pots were washed.
Leftover detergent 590 ml.
[/output]
[/test]
[test]
[input]
1
32
33
45
[/input]
[output]
Not enough detergent, 250 ml. more necessary!
[/output]
[/test]
[test]
[input]
4
52
3
13
39
86
50
49
37
End
[/input]
[output]
Detergent was enough!
266 dishes and 63 pots were washed.
Leftover detergent 725 ml.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]