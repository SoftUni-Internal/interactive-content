# Problem 1: Password Reset

[slide hideTitle]
# Password Reset

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/05.Java-Fundamentals-Exam-Preparation/EN/01-password-reset-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Password Reset" taskId="java-fundamentals-part-2-exam-preparation-password-reset" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that performs a series of commands on a predefined string, which is representing a password. 

First, you will receive a string. Until the command "**Done**", you will be receiving **strings** containing commands split by a single space. 

The commands will be the following:

- **TakeOdd**
  * takes only the characters at **odd indices** and **concatenates** them together to obtain the **new raw password** and then **prints** it
- "**Cut** \{**index**\} \{**length**\}"
  * gets the substring with the **given length** starting from the **given index** from the password and removes its first occurrence of it, then prints the password on the console
  * the given index and length will **always be valid**
- "**Substitute** \{**substring**\} \{**substitute**\}"
  * if the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result
  * if it does not, prints "**Nothing to replace!**"


## Input

  - You will be receiving strings until the "**Done**" command is given

## Output

- After the "**Done**" command is received, print:
  * **"Your password is:** \{**password**\}"

## Constraints

- The indexes from the "**Cut** \{**index**\} \{**length**\}" command will always be valid


## Examples

| **Input** | **Output** |
| --- | --- |
| Siiceercaroetavm\!\:\?\:ahsott\.\:i\:nstupmomceqr | icecream\:\:hot\:\:summer |
| TakeOdd | icecream\:\:hot\:\:mer |
| Cut 15 3 | icecream\-hot\-mer |
| Substitute \:\: \- | Nothing to replace! |
| Substitute \| \^ | Your password is\: icecream\-hot\-mer |

[hints]
[hint]
The first command is `TakeOdd`.

We only take the characters at **odd** indices - 1, 3, 5 etc.

" Siiceercaroetavm\!\:\?\:ahsott\.\:i\:nstupmomceqr" \-\> "**icecream**\:\:**hot**\:\:**summer**"
[/hint] 
[hint]
Next is the `Cut 15 3` command.

We cut the "**sum**" substring starting at index **15** with a length of **3**, remove it from the raw password and **print** it:

"icecream\:\:hot\:\:**sum**mer" \-\> **sum**

Then, on a new line we print the resulting **new** raw password: 

**icecream**\:\:**hot**\:\:**mer**
[/hint] 
[hint]
The third command is `Substitute :: -` 

We **replace** "\:\:" with "\-"

"icecream\:\:hot\:\:mer" \-\> "icecream\-hot\-mer"

[/hint] 
[hint]
Next comes `Substitute | ^`

"\|" is **not found** anywhere in the raw password, so we print:

"**Nothing to replace!**" 

[/hint] 
[hint]
Finally, after receiving the "**Done**" command, we print the resulting password in the proper **format**:

"**Your password is**: **icecream-hot-mer**"
[/hint] 
[/hints] 

| **Input** | **Output** |
| --- | --- |
| up8rgoyg3r1atmlmpiunagt\!\-irs7\!1fgulnnnqy | programming\!is\!funny |
| TakeOdd | programming\!is\!fun |
| Cut 18 2 | programming\*\*\*is\*\*\*fun |
| Substitute \! \*\*\* | Nothing to replace! |
| Substitute \? \.\!\.| Your password is\: programming\*\*\*is\*\*\*fun |
| Done | | 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr
TakeOdd
Cut 15 3
Substitute :: -
Substitute \| ^
Done
[/input]
[output]
icecream\:\:hot\:\:summer
icecream\:\:hot\:\:mer
icecream-hot-mer
Nothing to replace!
Your password is\: icecream-hot-mer
[/output]
[/test]
[test open]
[input]
up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy
TakeOdd
Cut 18 2
Substitute ! \*\*\*
Substitute ? .!.
Done
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
