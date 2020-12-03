[slide]
# Problem 1: Password Reset
## Description
Write a password reset program that performs a series of commands upon a predefined string. 

First, you will receive a string and afterwards, until the command `Done` is given, you will be receiving strings with commands split by a single space. 

The commands will be the following:

* `TakeOdd`: Takes only the characters at odd indices and concatenates them together to obtain the new raw password and then prints it.

* `Cut {index} {length}`:
Cuts the substring with the given length starting from the given index and prints it on the console.

Then prints the new raw password itself on a new line.

The given index and length will always be valid.

* `Substitute {substring} {substitute}`:
If the raw password contains the given substring, replaces all of its  occurrences with the substitute text given and prints the result.

If it doesn't, prints `Nothing to replace!`

## Input

* You will be receiving strings until the `Done` command is given.
* The indexes from the `Cut {index} {length}` command will always be valid.

## Output

* After the `Done` command is received, print: `Your password is: {password}`


[code-task title="Mu Online" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
`['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr','TakeOdd', 'Cut 15 3', 'Substitute :: -', 'Substitute | ^', 'Done']`

**Output**
icecream::hot::summer

icecream::hot::mer

icecream\-hot\-mer

Nothing to replace!

Your password is: icecream\-hot\-mer

# Comments

* First command is `TakeOdd`:

The initial string is: `Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr`

We only take the chars at odd indices 1, 3, 5 etc. and the result is:

`icecream::hot::summer`

* Second command is `Cut 15  3`:

The string is: `icecream::hot::summer`.

We cut a substring starting at index 15 with length 3, which is `sum`, remove it from the raw password and print it.

Then, on a new line we print the resulting new raw password:

`icecream::hot::mer`

* Thurd command is `Substitute :: -` 

The initial string is: `icecream::hot::summer`

we replace `::` with `-`, and the result is

`icream-hot-summer`

* Fourth command is `Substitute | ^`:

`|` is not found anywhere in the raw password.

We print:
`Nothing to replace!` 

Finally, after receiving the `Done` command, we print the resulting password in the proper format.


# Examples

 **Input**
`['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy','TakeOdd', 'Cut 18 2', 'Substitute ! ***', 'Substitute ? .!.', 'Done']`

**Output**
programming!is!funny

programming!is!fun

programming\*\*\*is\*\*\*fun

Nothing to replace!

Your password is: programming\*\*\*is\*\*\*fun

[/task-description]
[code-io /]
[tests]
[test]
[input]
abcd
TakeOdd
Done
[/input]
[output]
bd
Your password is: bd
[/output]
[/test]
[test]
[input]
abcdefg
TakeOdd
Done
[/input]
[output]
bdf
Your password is: bdf
[/output]
[/test]
[test]
[input]
abcdefg
TakeOdd
Cut 0 2
Done
[/input]
[output]
bdf
f
Your password is: f
[/output]
[/test]
[test]
[input]
abcdefg
TakeOdd
Substitute b y
Done
[/input]
[output]
bdf
ydf
Your password is: ydf
[/output]
[/test]
[test]
[input]
abcdefg
TakeOdd
Substitute z y
Done
[/input]
[output]
bdf
Nothing to replace!
Your password is: bdf
[/output]
[/test]
[test]
[input]
abcdefg
Cut 0 3
Done
[/input]
[output]
defg
Your password is: defg
[/output]
[/test]
[test]
[input]
abcdefg
Cut 0 6
Done
[/input]
[output]
g
Your password is: g
[/output]
[/test]
[test]
[input]
abcdefg
Cut 3 1
Done
[/input]
[output]
abcefg
Your password is: abcefg
[/output]
[/test]
[test]
[input]
abcdefg
Cut 4 2
Done
[/input]
[output]
abcdg
Your password is: abcdg
[/output]
[/test]
[test]
[input]
AABBCCDDEEFFGG
TakeOdd
Cut 2 3
Substitute B A
Done
[/input]
[output]
ABCDEFG
ABFG
AAFG
Your password is: AAFG
[/output]
[/test]
[test]
[input]
AAABBBCCCDDDEEEFFFGGG
Cut 0 1
Cut 0 1
Cut 0 1
Cut 1 1
Cut 3 2
Substitute G Y
TakeOdd
Done
[/input]
[output]
AABBBCCCDDDEEEFFFGGG
ABBBCCCDDDEEEFFFGGG
BBBCCCDDDEEEFFFGGG
BBCCCDDDEEEFFFGGG
BBCDDDEEEFFFGGG
BBCDDDEEEFFFYYY
BDDEFFY
Your password is: BDDEFFY
[/output]
[/test]
[test]
[input]
AAABBBCCCDDD
Cut 2 3
Substitute C J
Substitute Z M
TakeOdd
Done
[/input]
[output]
AABCCCDDD
AABJJJDDD
Nothing to replace!
AJJD
Your password is: AJJD
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
