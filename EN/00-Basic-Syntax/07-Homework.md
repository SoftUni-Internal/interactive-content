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
gyuguygu
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