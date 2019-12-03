[slide]
# Problem: Fuel Tank
[code-task title="Fuel Tank" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that knows whether the tank of a vehicle needs refueling or not. 

# Input
The input is consists of 2 lines:
- First you have to read from the console the type of fuel - text with options: "Diesel", "Gasoline" or "Gas"
- The second line of input reads the fuel in the tank in liters

# Output
If the fuel in the tank is more than or equal to 25 liters print:
- "You have enough \{type of fuel\}."

Otherwise print:
- "Fill your tank with \{type of fuel\}!". 

If a fuel other than the specified is introduced, "Invalid fuel!" shall be printed.

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| Diesel | | Fill your tank with diesel! |
| 10 | | |

| **Input** | | **Output** |
| --- | --- | --- |
| Gas | | You have enough gas. |
| 25 | | |

[/task-description]
[tests]
[test]
[input]
Diesel
10
[/input]
[output]
Fill your tank with diesel!
[/output]
[/test]
[test]
[input]
Gasoline
40
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Gas
25
[/input]
[output]
You have enough gas.
[/output]
[/test]
[test]
[input]
Kerosene
200
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[test]
[input]
Diesel
25
[/input]
[output]
You have enough diesel.
[/output]
[/test]
[test]
[input]
Gasoline
28
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Gas
20
[/input]
[output]
Fill your tank with gas!
[/output]
[/test]
[test]
[input]
Kerosene
20
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]