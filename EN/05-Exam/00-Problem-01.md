[slide]
# Problem 1: The Imitation Game
## Description

On the first line of the input you will receive the encrypted message. 

After that, until the `Decode` command is given, you will be **receiving strings** with instructions for different operations that need to be **performed upon the concealed message** to interpret it and reveal its true content.

There are several types of instructions, split by `|`

* Command: `Move {number of letters}`

**Moves the first** `n` letters to the **back** of the string.

* Command: `Insert {index} {value}`

**Inserts** the given **value** before the given **index** in the string.

* Command: `ChangeAll {substring} {replacement}`

**Changes** all occurrences of the given **substring** with the **replacement** text.

## Input

* On the first line, you will receive a string with message.

* On the next lines, you will be receiving commands, split by `|`

## Output

* After the `Decode` command is received, print this message:

`The decrypted message is: {message}`

[code-task title="The Imitation Game" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples

 **Input**
`['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']`

**Output**

The decrypted message is: Hello

# Comments

* First command: `ChangeAll|z|l`

`zzHe → llHe`

We replace all occurrences of `z` with `l`.

* Second command: `Insert|2|o`
`llHe → lloHe`

We add an `o` before the character on index 2

* Third command: `Move|3`

`lloHe → Hello` 

We take the first three characters and move them to the end of the string

* Finally, after receiving the `Decode` command, we print the resulting message.

# Examples

**Input**
`['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']`

**Output**
The decrypted message is: howareyou?

[/task-description]
[code-io /]
[tests]
[test]
[input]
zzHe
ChangeAll\|z\|l
Insert\|2\|o
Move\|3
Decode
[/input]
[output]
The decrypted message is\: Hello
[/output]
[/test]
[test]
[input]
owyouh
Move\|2
Move\|3
Insert\|3\|are
Insert\|9\|\?
Decode
[/input]
[output]
The decrypted message is\: howareyou\?
[/output]
[/test]
[test]
[input]
aaaaaaaaaaaaaaaa
ChangeAll\|a\|b
Insert\|0\|abc
Move\|3
Decode
[/input]
[output]
The decrypted message is\: bbbbbbbbbbbbbbbbabc
[/output]
[/test]
[test]
[input]
secretsuper
Move\|6
Insert\|11\|message\!
Insert\|5\|
Insert\|12\|
Decode
[/input]
[output]
The decrypted message is\: super secret message\!
[/output]
[/test]
[test]
[input]
decrypt^this^secret^message\*
ChangeAll|^|
ChangeAll|\*|\!
Decode
[/input]
[output]
The decrypted message is: decrypt this secret message\!
[/output]
[/test]
[test]
[input]
m%&&aged%crypt^thi&^&%cr%t^
ChangeAll|^|
ChangeAll|%|e
ChangeAll|&|s
Move|7
Insert|27| if you can
Decode
[/input]
[output]
The decrypted message is: decrypt this secret message if you can
[/output]
[/test]
[test]
[input]
owyouh
Move|2
Move|3
Insert|3|are
Insert|9|?
Decode
[/input]
[output]
The decrypted message is: howareyou\?
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
