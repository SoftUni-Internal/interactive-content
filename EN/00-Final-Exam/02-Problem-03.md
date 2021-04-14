# Problem 3: The Pianist
[slide hideTitle]
# The Pianist

[code-task title="The Pianist" taskId="js-fundamentals-2-finalExam-The-Pianist" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function thePianist(number, input) {
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

*You are a pianist and you like to keep a list of your favorite piano pieces.* 
*Create a program, to help you organize it and add, change, remove pieces from it!*

On the first line of the input, you will receive an **integer** "**n**" - representing the number of pieces that you will initially have. 

On the next "**n**" lines, you will receive the title of each piece, followed by its **composer and key**, separated by "\|" in the following format: 
**
"\{**piece**}\|\{**composer**\}\|\{**key**\}"

Then, you will receive **different commands**, each on a new line, separated by "\|", until the "**Stop**" command is given: 

* Command "**Add**\|\{**piece**\}\|\{**composer**\}\|\{**key**\}":
You need to **add the piece and the information** about it to the other pieces. 

If the piece is **already in the collection**, you should print: 
"\{**piece**\} **is already in the collection!**"

If the piece **is not in the collection**, you should print: 
"\{**piece**\} **by** \{**composer**\} **in** \{**key**\} **added to the collection!**"

* Command "**Remove**\|\{**piece**\}":
If the **piece is in the collection**, you have to remove it. 

Then, you have to print the following message: 
"**Successfully removed** \{**piece**\}!"

If the **piece is not in the collection**, you need to print: 
"**Invalid operation!** \{**piece**\} **does not exist in the collection.**"

* Command "**ChangeKey**\|\{**piece**\}\|\{**newKey**\}":
If the **piece is in the collection**, change its key to the specified one and print: 

"**Changed the key of** \{**piece**\} **to** \{**newKey**\}!"

If the **piece is not in the collection**, print: 
"**Invalid operation!** \{**piece**\} **does not exist in the collection.**"

Upon receiving the "**Stop**" command, you need to print all pieces in the collection, sorted by **their name and by the name of their composer in alphabetical order**, in the following format: 

"\{**piece**\} \-\> **composer:** \{**composer**\}, **Key:** \{**key**\}"

## Input

- First, you will receive a single integer - the initial number of pieces in the collection 

- For each piece, you will receive a single line of text containing information about it

- Then, you will receive multiple commands in the way described above, until you receive the command "**Stop**"

**Note**: Commands that you will receive will modify the object.

## Output

* All the output messages and the appropriate formats are described in the problem description

## Examples One

| **Input** | **Output** |
| --- | --- |
|thePianist(3, ['Fur Elise\|Beethoven\|A Minor', 'Moonlight Sonata\|Beethoven\|C\# Minor', 'Clair de Lune\|Debussy\|C\# Minor', 'Add\|Sonata No.2\|Chopin\|B Minor', 'Add\|Hungarian Rhapsody No.2\|Liszt\|C\# Minor', 'Add\|Fur Elise\|Beethoven\|C# Minor', 'Remove\|Clair de Lune', 'ChangeKey\|Moonlight Sonata\|C\# Major', 'Stop'])|Sonata No.2 by Chopin in B Minor added to the collection!|
||Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!|
||Fur Elise is already in the collection!|
||Successfully removed Clair de Lune!|
||Changed the key of Moonlight Sonata to C\# Major!|
||Fur Elise \-\> Composer: Beethoven, Key: A Minor|
||Hungarian Rhapsody No.2 \-\> Composer: Liszt, Key: C\# Minor|
||Moonlight Sonata \-\> Composer: Beethoven, Key: C\# Major|
||Sonata No.2 \-\> Composer: Chopin, Key: B Minor|


[hints]
[hint]
After you receive the initial pieces and the information about them, you start receiving commands. 
[/hint] 
[hint]
The first two commands are to add a piece to the collection. Since the pieces are not in the collection, you add them. 
[/hint] 
[hint]
By the third command, which is also "**add**", you **attempt to add a piece** that is already in the collection, so you **print the appropriate message**, but you do not add the piece. 
[/hint] 
[hint]
After that, you receive the "**remove**" **command**. 

The **last** command **requires changing the key of a piece**. 

Since the piece is **present in the collection**, you **modify** its key.
[/hint] 
[hint]
Next, you receive the "**Stop**" command, you **print the information about the pieces**, sorted the way described above, and the program ends. 
[/hint] 
[/hints] 

## Examples Two

| **Input** | **Output** |
| --- | --- |
|thePianist(4, ['Eine kleine Nachtmusik\|Mozart\|G Major', 'La Campanella\|Liszt\|G\# Minor', 'The Marriage of Figaro\|Mozart\|G Major', 'Hungarian Dance No\.5\|Brahms\|G Minor', 'Add\|Spring\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])|Spring by Vivaldi in E Major added to the collection\!|
||Successfully removed The Marriage of Figaro\!|
||Invalid operation! Turkish March does not exist in the collection\.|
||Changed the key of Spring to C Major\!|
||Nocturne by Chopin in C\# Minor added to the collection\!|
||Eine kleine Nachtmusik \-\> Composer\: Mozart, Key\: G Major|
||Hungarian Dance No\.5 \-\> Composer\: Brahms, Key\: G Minor|
||La Campanella \-\> Composer\: Liszt, Key\: G\# Minor|
||Nocturne \-\> Composer\: Chopin, Key\: C\# Minor|
||Spring \-\> Composer\: Vivaldi, Key\: C Major|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
thePianist(3, ['Fur Elise\|Beethoven\|A Minor', 'Moonlight Sonata\|Beethoven\|C\# Minor', 'Clair de Lune\|Debussy\|C\# Minor', 'Add\|Sonata No\.2\|Chopin\|B Minor', 'Add\|Hungarian Rhapsody No\.2\|Liszt\|C\# Minor', 'Add\|Fur Elise\|Beethoven\|C\# Minor', 'Remove\|Clair de Lune', 'ChangeKey\|Moonlight Sonata\|C\# Major', 'Stop',])
[/input]
[output]
Sonata No\.2 by Chopin in B Minor added to the collection\!
Hungarian Rhapsody No\.2 by Liszt in C\# Minor added to the collection\!
Fur Elise is already in the collection\!
Successfully removed Clair de Lune\!
Changed the key of Moonlight Sonata to C\# Major\!
Fur Elise \-\> Composer\: Beethoven, Key: A Minor
Hungarian Rhapsody No\.2 \-\> Composer\: Liszt, Key\: C\# Minor
Moonlight Sonata \-\> Composer\: Beethoven, Key\: C\# Major
Sonata No\.2 \-\> Composer\: Chopin, Key\: B Minor
[/output]
[/test]
[test open]
[input]
thePianist(4, ['Eine kleine Nachtmusik\|Mozart\|G Major', 'La Campanella\|Liszt\|G\# Minor', 'The Marriage of Figaro\|Mozart\|G Major', 'Hungarian Dance No\.5\|Brahms\|G Minor', 'Add\|Spring\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])
[/input]
[output]
Spring by Vivaldi in E Major added to the collection\!
Successfully removed The Marriage of Figaro\!
Invalid operation\! Turkish March does not exist in the collection\.
Changed the key of Spring to C Major\!
Nocturne by Chopin in C\# Minor added to the collection\!
Eine kleine Nachtmusik \-\> Composer\: Mozart, Key\: G Major
Hungarian Dance No\.5 \-\> Composer\: Brahms, Key\: G Minor
La Campanella \-\> Composer\: Liszt, Key\: G\# Minor
Nocturne \-\> Composer\: Chopin, Key\: C\# Minor
Spring \-\> Composer\: Vivaldi, Key\: C Major
[/output]
[/test]
[test]
[input]
thePianist(4, ['AAAA\|Mozart\|G Major', 'BBBB\|Liszt\|G\# Minor', 'VVVVV\|Mozart\|G Major', 'CC\|Brahms\|G Minor', 'Add\|AAAA\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])
[/input]
[output]
AAAA is already in the collection\!
Invalid operation\! The Marriage of Figaro does not exist in the collection\.
Invalid operation\! Turkish March does not exist in the collection\.
Invalid operation\! Spring does not exist in the collection\.
Nocturne by Chopin in C\# Minor added to the collection\!
AAAA \-\> Composer\: Mozart, Key\: G Major
BBBB \-\> Composer\: Liszt, Key\: G\# Minor
CC \-\> Composer\: Brahms, Key\: G Minor
Nocturne \-\> Composer: Chopin, Key\: C\# Minor
VVVVV \-\> Composer\: Mozart, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(3, ['AAAA\|BB\|G Major', 'ABcshj\|AA\|G\# Minor', 'ACygsv\|CC\|G Major', 'Stop'])
[/input]
[output]
AAAA \-\> Composer\: BB, Key\: G Major
ABcshj \-\> Composer\: AA, Key\: G\# Minor
ACygsv \-\> Composer\: CC, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(3, ['AAAA\|BB\|G Major', 'ABcshj\|AA\|G\# Minor', 'ACygsv\|CC\|G Major', 'Add\|Hello\|Mozart\|C', 'ChangeKey\|Hello\|B Minor', 'Remove\|Hello', 'Stop'])
[/input]
[output]
Hello by Mozart in C added to the collection\!
Changed the key of Hello to B Minor\!
Successfully removed Hello\!
AAAA \-\> Composer\: BB, Key\: G Major
ABcshj \-\> Composer\: AA, Key\: G\# Minor
ACygsv \-\> Composer\: CC, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(0, ['Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Autumn \-\> Composer\: Vivaldi, Key\: C
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: C
[/output]
[/test]
[test]
[input]
thePianist(5, ['Concerto\|Schumann\|C Minor', 'Nocturne\|Chopin\|E Major', 'Clavier\|Bach\|E Major', 'Emperor\|Beethoven\|B Minor', 'Piano sonata\|Liszt\|B Minor', 'Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'Remove\|Nocturne', 'Remove\|Concerto', 'Remove\|Clavier', 'Remove\|Clavier', 'Remove\|Piano Sonata', 'Remove\|Autumn', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Successfully removed Nocturne\!
Successfully removed Concerto\!
Successfully removed Clavier\!
Invalid operation\! Clavier does not exist in the collection\.
Invalid operation\! Piano Sonata does not exist in the collection\.
Successfully removed Autumn\!
Emperor \-\> Composer: Beethoven, Key\: B Minor
Piano sonata \-\> Composer\: Liszt, Key\: B Minor
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: C
[/output]
[/test]
[test]
[input]
thePianist(5, ['Concerto\|Schumann\|C Minor', 'Nocturne\|Chopin\|E Major', 'Clavier\|Bach\|E Major', 'Emperor\|Beethoven\|B Minor', 'Piano sonata\|Liszt\|B Minor', 'Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'ChangeKey\|Winter\|B Minor', 'ChangeKey\|Autumn\|B Minor', 'ChangeKey\|Emperor\|B Minor', 'ChangeKey\|Clavier\|B Minor', 'ChangeKey\|Turkish March\|B Minor', 'ChangeKey\|Turkish March\|B Minor', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Changed the key of Winter to B Minor\!
Changed the key of Autumn to B Minor\!
Changed the key of Emperor to B Minor\!
Changed the key of Clavier to B Minor\!
Invalid operation\! Turkish March does not exist in the collection\.
Invalid operation\! Turkish March does not exist in the collection\.
Autumn \-\> Composer\: Vivaldi, Key\: B Minor
Clavier \-\> Composer\: Bach, Key\: B Minor
Concerto \-\> Composer\: Schumann, Key\: C Minor
Emperor \-\> Composer\: Beethoven, Key\: B Minor
Nocturne \-\> Composer\: Chopin, Key\: E Major
Piano sonata \-\> Composer\: Liszt, Key\: B Minor
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: B Minor
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
