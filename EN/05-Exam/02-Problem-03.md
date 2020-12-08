[slide]
# Problem 3: The Pianist
## Description

On the first line of the standard input you will receive an **integer** `n` – the number of pieces that you will initially have.

On the next `n` lines the pieces themselves will follow with their **composer and key**, separated by `|` in the following format:

`{piece}|{composer}|{key}`

Then, you will be receiving **different commands**, each on a new line, separated by `|`, until the `Stop` command is given:

* Command `Add|{piece}|{composer}|{key}`: 

You need to **add the given piece with the information** about it to the other pieces

If the piece is **already in the collection**, print: `{piece} is already in the collection!`

If the **piece is not in the collection**, print: `{piece} by {composer} in {key} added to the collection!`

* Command `Remove|{piece}`:

If the p**iece is in the collection**, remove it and print: `Successfully removed {piece}!`

If the **piece is not in the collection**, print: `Invalid operation! {piece} does not exist in the collection.`

* Command `ChangeKey|{piece}|{new key}`:

If the **piece is in the collection**, change its key with the given one and print: `Changed the key of {piece} to {new key}!`
If the piece is not in the collection, print: `Invalid operation! {piece} does not exist in the collection.`

Upon receiving the `Stop` command you need to print all pieces in your collection, sorted by their **name and by the name of their composer in alphabetical order**, in the following format:

`{Piece} -> Composer: {composer}, Key: {key}`

## Input

* You will receive a single integer at first – the initial number of pieces in the collection

* For each piece you will receive a single line of text with information about it.

* Then you will receive multiple commands in the way described above, until the command `Stop`.

## Output

* All the output messages with the appropriate formats are described in the problem description.

[code-task title="The Pianist" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
`['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']`

**Output**
Sonata No.2 by Chopin in B Minor added to the collection!
Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
Fur Elise is already in the collection!
Successfully removed Clair de Lune!
Changed the key of Moonlight Sonata to C\# Major!
Fur Elise \-\> Composer: Beethoven, Key: A Minor
Hungarian Rhapsody No.2 \-\> Composer: Liszt, Key: C\# Minor
Moonlight Sonata \-\> Composer: Beethoven, Key: C\# Major
Sonata No.2 \-\> Composer: Chopin, Key: B Minor

# Comments:
After we receive the initial pieces with their info, we start receiving commands. 

The first two commands are to add a piece to the collection and since the pieces are not already added, we manage to add them.

The third add command, however, attempts to add a piece, which is already in the collection, so we print a special message and don't add the piece.

After that, we receive the remove command and since the piece is in the collection, we remove it successfully.

Finally, the last command says to change the key of a piece. Since the key is present in the collection, we modify its key.

We receive the Stop command, print the information about the pieces, sorted in the way described above, and the program ends.


 **Input**
`[ '4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop']`

**Output**
Spring by Vivaldi in E Major added to the collection!
Successfully removed The Marriage of Figaro!
Invalid operation! Turkish March does not exist in the collection.
Changed the key of Spring to C Major!
Nocturne by Chopin in C\# Minor added to the collection!
Eine kleine Nachtmusik \-\> Composer: Mozart, Key: G Major
Hungarian Dance No.5 \-\> Composer: Brahms, Key: G Minor
La Campanella \-\> Composer: Liszt, Key: G\# Minor
Nocturne \-\> Composer: Chopin, Key: C\# Minor
Spring \-\> Composer: Vivaldi, Key: C Major

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
AAAA\|Mozart\|G Major
BBBB\|Liszt\|G\# Minor
VVVVV\|Mozart\|G Major
CC\|Brahms\|G Minor
Add\|AAAA\|Vivaldi\|E Major
Remove\|The Marriage of Figaro
Remove\|Turkish March
ChangeKey\|Spring\|C Major
Add|Nocturne\|Chopin\|C\# Minor
Stop
[/input]
[output]
AAAA is already in the collection\!
Invalid operation\! The Marriage of Figaro does not exist in the collection.
Invalid operation\! Turkish March does not exist in the collection.
Invalid operation\! Spring does not exist in the collection.
Nocturne by Chopin in C# Minor added to the collection!
AAAA \-\> Composer: Mozart, Key: G Major
BBBB \-\> Composer: Liszt, Key: G\# Minor
CC \-\> Composer: Brahms, Key: G Minor
Nocturne \-\> Composer: Chopin, Key: C\# Minor
VVVVV \-\> Composer: Mozart, Key: G Major
[/output]
[/test]
[test]
[input]
3
AAAA\|BB\|G Major
ABcshj\|AA\|G\# Minor
ACygsv\|CC\|G Major
Stop
[/input]
[output]
AAAA \-\> Composer: BB, Key: G Major
ABcshj \-\> Composer: AA, Key: G\# Minor
ACygsv \-\> Composer: CC, Key: G Major
[/output]
[/test]
[test]
[input]
3
AAAA\|BB\|G Major
ABcshj\|AA\|G\# Minor
ACygsv\|CC\|G Major
Add\|Hello\|Mozart\|C
ChangeKey\|Hello\|B Minor
Remove\|Hello
Stop
[/input]
[output]
Hello by Mozart in C added to the collection\!
Changed the key of Hello to B Minor!\
Successfully removed Hello\!
AAAA \-\> Composer: BB, Key: G Major
ABcshj \-\> Composer: AA, Key: G\# Minor
ACygsv \-\> Composer: CC, Key: G Major
[/output]
[/test]
[test]
[input]
0
Add\|Autumn\|Vivaldi|C
Add\|Winter\|Vivaldi|C
Add\|Summer\|Vivaldi|C
Add\|Spring\|Vivaldi|C
ChangeKey\|Spring\|B Minor
ChangeKey\|Summer\|B Minor
Stop
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Autumn \-\> Composer: Vivaldi, Key: C
Spring \-\> Composer: Vivaldi, Key: B Minor
Summer \-\> Composer: Vivaldi, Key: B Minor
Winter \-\> Composer: Vivaldi, Key: C
[/output]
[/test]
[test]
[input]
5
Concerto\|Schumann\|C Minor
Nocturne\|Chopin\|E Major
Clavier\|Bach\|E Major
Emperor\|Beethoven\|B Minor
Piano sonata\|Liszt\|B Minor
Add\|Autumn\|Vivaldi\|C
Add\|Winter\|Vivaldi\|C
Add\|Summer\|Vivaldi\|C
Add\|Spring\|Vivaldi\|C
ChangeKey\|Spring\|B Minor
ChangeKey\|Summer\|B Minor
Remove\|Nocturne
Remove\|Concerto
Remove\|Clavier
Remove\|Clavier
Remove\|Piano Sonata
Remove\|Autumn
Stop
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
Emperor \-\> Composer: Beethoven, Key: B Minor
Piano sonata \-\> Composer: Liszt, Key: B Minor
Spring \-\> Composer: Vivaldi, Key: B Minor
Summer \-\> Composer: Vivaldi, Key: B Minor
Winter \-\> Composer: Vivaldi, Key: C
[/output]
[/test]
[test]
[input]
5
Concerto\|Schumann\|C Minor
Nocturne\|Chopin\|E Major
Clavier\|Bach\|E Major
Emperor\|Beethoven\|B Minor
Piano sonata|Liszt\|B Minor
Add\|Autumn\|Vivaldi\|C
Add\|Winter\|Vivaldi\|C
Add\|Summer\|Vivaldi\|C
Add\|Spring\|Vivaldi\|C
ChangeKey\|Spring\|B Minor
ChangeKey\|Summer\|B Minor
ChangeKey\|Winter\|B Minor
ChangeKey\|Autumn\|B Minor
ChangeKey\|Emperor\|B Minor
ChangeKey\|Clavier\|B Minor
ChangeKey\|Turkish March\|B Minor
ChangeKey\|Turkish March\|B Minor
Stop
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
Autumn \-\> Composer: Vivaldi, Key: B Minor
Clavier \-\> Composer: Bach, Key: B Minor
Concerto \-\> Composer: Schumann, Key: C Minor
Emperor \-\> Composer: Beethoven, Key: B Minor
Nocturne \-\> Composer: Chopin, Key: E Major
Piano sonata \-\> Composer: Liszt, Key: B Minor
Spring \-\> Composer: Vivaldi, Key: B Minor
Summer \-\> Composer: Vivaldi, Key: B Minor
Winter \-\> Composer: Vivaldi, Key: B Minor
[/output]
[/test]
[test]
[input]
4
Eine kleine Nachtmusik\|Mozart\|G Major
La Campanella\|Liszt\|G\# Minor
The Marriage of Figaro\|Mozart\|G Major
Hungarian Dance No.5\|Brahms\|G Minor
Add\|Spring\|Vivaldi\|E Major
Remove\|The Marriage of Figaro
Remove\|Turkish March
ChangeKey\|Spring\|C Major
Add|Nocturne\|Chopin\|C\# Minor
Stop
[/input]
[output]
Spring by Vivaldi in E Major added to the collection\!
Successfully removed The Marriage of Figaro\!
Invalid operation\! Turkish March does not exist in the collection.
Changed the key of Spring to C Major\!
Nocturne by Chopin in C\# Minor added to the collection\!
Eine kleine Nachtmusik \-\> Composer: Mozart, Key: G Major
Hungarian Dance No.5 \-\> Composer: Brahms, Key: G Minor
La Campanella \-\> Composer: Liszt, Key: G\# Minor
Nocturne \-\> Composer: Chopin, Key: C# Minor
Spring \-\> Composer: Vivaldi, Key: C Major
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
