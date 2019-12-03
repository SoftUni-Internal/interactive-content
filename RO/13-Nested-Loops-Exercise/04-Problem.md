[slide]
# Problem: Word Wars
[code-task title="Word Wars" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program that **calculates the ASCII value of a few words**, as the word with the **highest value** is the winner.

The value of a word is calculated when you sum the **ASCII values of all the letters of which it consists of**. 

From the console read words until the command "**STOP**", then print:
- "Winner is \{winner word\} – \{value of the word\}!"

# Example

| **Input** | **Output** 
| --- | --- |
| House | Winner is Destination - 1154! |
| Dog | |
| Destination | |
| STOP | |

## Comments
- The first letter is \'H\' and it\'s ASCII value is 72, \'o\' has value 111, \'u\' has value 117, \'s\' has value 115, \'e\' has value 101. Their sum is 516. 
- Keep doing the same calculations for the other words and get that Destination has the highest value - 1154.

[/task-description]
[tests]
[test]
[input]
House
Dog
Destination
STOP
[/input]
[output]
Winner is Destination - 1154!
[/output]
[/test]
[test]
[input]
Cat
Doll
Information
Winner
STOP
[/input]
[output]
Winner is Information - 1158!
[/output]
[/test]
[test]
[input]
IVAN
Stoyan
Kirch0
STOP
[/input]
[output]
Winner is Stoyan - 638!
[/output]
[/test]
[test]
[input]
st0y1n
Vladimir
Petur
STOP
[/input]
[output]
Winner is Vladimir - 824!
[/output]
[/test]
[test]
[input]
slavi
Gosheto
Aleksandur
STOP
[/input]
[output]
Winner is Aleksandur - 1034!
[/output]
[/test]
[test]
[input]
Mascota
Destryktor
STOP
[/input]
[output]
Winner is Destryktor - 1083!
[/output]
[/test]
[test]
[input]
marto
krasi
Vasil
Valeri
Baluchonkata
STOP
[/input]
[output]
Winner is Baluchonkata - 1229!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]