[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab. 

Now we are going to create a couple of **console applications**, with which we are going to take a few more steps further into programming. 

We have prepared some problems for you to solve.
[/slide]

[slide]
# Problem: Gramophone
[code-task title="Gramophone" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function gramophone(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function which as input will receive 3 parameters (strings)

- First string is the name of the band

- Second string is the name of the album

- The third is holding a song name from the album

You have to find out how many **times** the plate will rotate the given song from the album.

**The plate makes a full rotation every 2.5 seconds.**

The song **duration in seconds** is calculate by the given formula: 

`albumName.length * bandName.length) * song name.length / 2`

As output you should print the following message:

`The plate was rotated {rotations} times.`

Rotations should be **rounded up.**



# Example
  | **Input** | **Output** |
| --- | --- |
|`['Black Sabbath', 'Paranoid', 'War Pigs']`| The plate was rotated 167 times. |

[/task-description]
[tests]
[test]
[input]
Bhjkhbath
Pudfgdgioid
Wois
[/input]
[output]
The plate was rotated 80 times.
[/output]
[/test]
[test]
[input]
gjhg
jklcrj
gyuguyguy
[/input]
[output]
The plate was rotated 44 times.
[/output]
[/test]
[test]
[input]
bhjbhjbj
cghcgh
uiou
[/input]
[output]
The plate was rotated 39 times.
[/output]
[/test]
[test]
[input]
Bvyuvh
ji
Wauios
[/input]
[output]
The plate was rotated 15 times.
[/output]
[/test]
[test]
[input]
gyuuath
Pgyd
Wabygs
[/input]
[output]
The plate was rotated 34 times.
[/output]
[/test]
[test]
[input]
tyuath
Pargyu
tuus
[/input]
[output]
The plate was rotated 29 times.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Fuel Money
[code-task title="Fuel Money" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fuelMoney(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a **function** which calculates how much **money** for fuel will be needed to drive а bus from one place to another.

Consider the following:

- Calculate **the fuel** by knowing that **an empty bus** can pass 100 km with 7L diesel.

- **One person** in that bus excluding the driver increases fuel consumption by **100 milliliters.**

- The **money** is calculated by **multiplying** the **fuel price** with the needed fuel for the trip.

As **input** you will receive **3 parameters**:
- **Distance** the bus must travel
- **Passengers** in it 
- **Price** for **1 liter of diesel**

As output you should print this message:
 `Needed money for that trip is {neededMoney} dollars.`

# Example
  | **Input** | **Output** |
| --- | --- |
|`['260', '9', '2.49']`| Needed money for that trip is 47.559 dollars. |
|`['90', '14', '2.88']`| Needed money for that trip is 22.176 dollars. |

[/task-description]
[tests]
[test]
[input]
154
5
3.1
[/input]
[output]
Needed money for that trip is 34.968 dollars.
[/output]
[/test]
[test]
[input]
545
5
54.59
[/input]
[output]
Needed money for that trip is 2109.9035 dollars.
[/output]
[/test]
[test]
[input]
32
15
1.0
[/input]
[output]
Needed money for that trip is 3.74 dollars.
[/output]
[/test]
[test]
[input]
1232
13
2.19
[/input]
[output]
Needed money for that trip is 191.7126 dollars.
[/output]
[/test]
[test]
[input]
546
45
4.45
[/input]
[output]
Needed money for that trip is 190.104 dollars.
[/output]
[/test]
[test]
[input]
755
10
3.474
[/input]
[output]
Needed money for that trip is 187.0749 dollars.
[/output]
[/test]
[test]
[input]
451
2
12.5
[/input]
[output]
Needed money for that trip is 397.125 dollars.
[/output]
[/test]
[test]
[input]
361
45
2.989
[/input]
[output]
Needed money for that trip is 88.98253 dollars.
[/output]
[/test]
[test]
[input]
1565
12
1.49
[/input]
[output]
Needed money for that trip is 165.0175 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Centuries to Minutes
[code-task title="Centuries to Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function centuriesToMinutes(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write program to receive a **number** of **centuries** and convert it to **years, days, hours** and minutes.

Print the output in the following format: 
`{number} centuries = {number} years = {number} days = {number} hours = {number} minutes`
# Example
  | **Input** | **Output** |
| --- | --- |
|`['1']`| 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes |
|`['5']`| 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[tests]
[test]
[input]
14
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]