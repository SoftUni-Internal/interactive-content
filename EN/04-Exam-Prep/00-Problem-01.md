# Problem 1: Password Reset

[slide hideTitle]
# Password Reset

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/05.JS-Fundamentals-Exam-Prep/EN/password-reset-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Password Reset" taskId="js-fundamentals-2-examPreparation-problem-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwordReset(input) {
   // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

Write a password reset function that performs a series of commands on a string. 

First, you will receive a **string that you have to alter**, and afterward, until the command "**Done**" is received, you will be given **commands** in the form of text (a string), split by a single space. 

The commands will be the following:

* Command "**TakeOdd**": 

Takes only the characters at **odd indices** and concatenates them together to obtain the new raw password and then prints it.

* Command "**Cut** \{**index**\} \{**length**\}": 

Cuts а substring with the given length from the original one, starting from the specified index and prints it on the console.

Then prints the new raw password on a new line.

The specified index and length will always be valid.

* Command "**Substitute** \{**substring**\} \{**substitute**\}": 

If the "**raw password**" contains the given substring, replaces all of its occurrences with the given substitute text and prints the result.

If it does not, print "**Nothing to replace!**"

## Input

* You will be receiving strings until the "**Done**" command is received

* The indexes of the "**Cut** \{**index**\} \{**length**\}" command will always be valid

## Output

* After the "**Done**" command is received, print: "**Your password is:** \{**password**\}"

## Examples One

**Input**
passwordReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitute :: -', 'Substitute \| \^', 'Done'])

**Output**
icecream\:\:hot\:\:summer

icecream\:\:hot\:\:mer

icecream\-hot\-mer

Nothing to replace!

Your password is: icecream\-hot\-mer

[hints]
[hint]
The **first** command is `TakeOdd`

The initial string is: "**Siiceercaroetavm**!:?:**ahsott**.:**i**:**nstupmomceqr**"

We only take the chars at **odd** indices 1, 3, 5, etc. and the result is: "**icecream**::**hot**::**summer**"
[/hint] 
[hint]
The **second** command is `Cut 15 3`

The string is: "**icecream**::**hot**::**summer**"

We cut a substring starting at index 15 with length 3, which is "**sum**", remove it from the raw password and print it.

Then, on a new line we **print** the resulting new raw password: "**icecream**::**hot**::**mer**"
[/hint] 
[hint]
The **third** command is `Substitute :: -`

The initial string is: "**icecream**::**hot**::**summer**"

we replace "::" with "-", and the result is: "**icecream**-**hot**-**mer**"
[/hint] 
[hint]
The **fourth** command is `Substitute | ^`

"\|" is not found anywhere in the raw password.

We print: "**Nothing to replace!**"
[/hint] 
[hint]
Finally, after receiving the "**Done**" command, we print the resulting password in the proper format.
[/hint] 
[/hints] 


## Examples Two

**Input**
passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! \*\*\*', 'Substitute ? .!.', 'Done'])

**Output**
programming!is!funny

programming!is!fun

programming\*\*\*is\*\*\*fun

Nothing to replace!

Your password is: programming\*\*\*is\*\*\*fun

[/task-description]
[code-io /]
[tests]
[test open]
[input]
passwordReset(['Siiceercaroetavm!\:\?\:ahsott\.\:i\:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitute \:\: \-', 'Substitute \| \^', 'Done'])
[/input]
[output]
icecream\:\:hot\:\:summer
icecream\:\:hot\:\:mer
icecream\-hot\-mer
Nothing to replace\!
Your password is\: icecream\-hot\-mer
[/output]
[/test]
[test open]
[input]
passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! \*\*\*', 'Substitute ? .!.', 'Done'])
[/input]
[output]
programming!is!funny
programming!is!fun
programming\*\*\*is\*\*\*fun
Nothing to replace!
Your password is: programming\*\*\*is\*\*\*fun
[/output]
[/test]
[test]
[input]
passwordReset(['abcd', 'TakeOdd', 'Done'])
[/input]
[output]
bd
Your password is: bd
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd'
'Done'])
[/input]
[output]
bdf
Your password is: bdf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Cut 0 2', 'Done'])
[/input]
[output]
bdf
f
Your password is: f
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Substitute b y', 'Done'])
[/input]
[output]
bdf
ydf
Your password is: ydf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Substitute z y', 'Done'])
[/input]
[output]
bdf
Nothing to replace!
Your password is: bdf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 0 3', 'Done'])
[/input]
[output]
defg
Your password is: defg
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 0 6', 'Done'])
[/input]
[output]
g
Your password is: g
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 3 1', 'Done'])
[/input]
[output]
abcefg
Your password is: abcefg
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 4 2', 'Done'])
[/input]
[output]
abcdg
Your password is: abcdg
[/output]
[/test]
[test]
[input]
passwordReset(['AABBCCDDEEFFGG', 'TakeOdd', 'Cut 2 3', 'Substitute B A', 'Done'])
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
passwordReset(['AAABBBCCCDDDEEEFFFGGG', 'Cut 0 1', 'Cut 0 1', 'Cut 0 1', 'Cut 1 1', 'Cut 3 2', 'Substitute G Y', 'TakeOdd', 'Done'])
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
passwordReset(['AAABBBCCCDDD', 'Cut 2 3', 'Substitute C J', 'Substitute Z M', 'TakeOdd', 'Done'])
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
