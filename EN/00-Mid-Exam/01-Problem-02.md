# Problem 2: School Library

[slide hideTitle]

# School Library

[code-task title="School Library" taskId="js-fundamentals-regular-exam-School-Library" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function schoolLibrary(input) {
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

You will receive a string, representing a bookshelf in the library. On the bookshelf, every book title is separated by a "\&".

Until you receive "**Done**" as a command, you will be receiving the following commands:

* Command "**Add Book** \| \{**book name**\}": 

Add the book to the shelf and place it before all others.

If the book is already present on the shelf, ignore the command.

* Command "**Take Book**" \| \{**book name**\}": 

Remove the book with the specified title only if it's on the shelf, otherwise ignore this command.

* Command "**Swap Books** \| \{**book1**\} \| \{**book2**\}": 

If both books are on the shelf, swap their places.

* Command "**Insert Book** \| \{**book name**\}": 

Add a book at the end of the shelf. 

* Command "**Check Book** \| \{**index**\}": 

Print the name of the book at the specified index on the shelf.

If the index is invalid, ignore the command.


## Input

* You will receive a string, containing book titles, separated by a "\&"

* Until you receive "**Done**", you will get commands in the format described above


## Output

* Print the collection of books joined by  (", ")

"\{**firstBook**\}, \{**secondBook**\}, ...\{**lastBook**\}"

## Constraints

* You will not receive any duplicate book names in the initial list of books

## Example One

| **Input** | **Output** |
| --- | --- |
|schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Take Book \| Don Quixote', 'Insert Book \| The Lord of the Rings', 'Check Book \| 3', 'Done' ])| Hamlet|
||The Odyssey, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings|

[hints]
[hint]
Use the appropriate conditional statements and loops to handle each command type.
[/hint] 
[/hints] 

## Example Two

| **Input** | **Output** |
| --- | --- |
|schoolLibrary(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger', 'Add Book \| David Copperfield', 'Add Book \| One Thousand and One Nights', 'Swap Books \| One Thousand and One Nights \| Catch-22', 'Take Book \| David Copperfield', 'Insert Book \| The Stories of Anton Chekhov', 'Check Book \| 17', 'Done'])| Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights, The Stranger, The Stories of Anton Chekhov |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Take Book \| Don Quixote', 'Insert Book \| The Lord of the Rings', 'Check Book \| 3', 'Done' ])
[/input]
[output]
Hamlet
The Odyssey, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings
[/output]
[/test]
[test open]
[input]
schoolLibrary(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger', 'Add Book \| David Copperfield', 'Add Book \| One Thousand and One Nights', 'Swap Books \| One Thousand and One Nights \| Catch-22', 'Take Book \| David Copperfield', 'Insert Book \| The Stories of Anton Chekhov', 'Check Book \| 17', 'Done'])
[/input]
[output]
Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  The Stranger, The Stories of Anton Chekhov
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| The Odyssey', 'Done'])
[/input]
[output]
The Odyssey, Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Take Book \| Don Quixote', 'Done'])
[/input]
[output]
The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Insert Book \| The Lord of the Rings', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, The Lord of the Rings
[/output]
[/test]
[test]
[input]
schoolLibrary(['abc&def&ghi&jkl', 'Swap Books \| abc \| jkl', 'Done'])
[/input]
[output]
jkl, def, ghi, abc
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book \| Hamlet', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Take Book \| The Lord of the Rings', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Insert Book \| Hamlet', 'Done'])
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, Hamlet
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C&D', 'Add Book \| A', 'Add Book \| B', 'Add Book \| C', 'Take Book \| C', 'Swap Books \| A \| C', 'Check Book \| 1', 'Done'])
[/input]
[output]
B
A, B, D
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C', 'Swap Books \| C \| C', 'Add Book \| D', 'Insert Book \| G', 'Stefan \| B', 'Add Book \| M', 'Check Book \| 69', 'Done'])
[/input]
[output]
M, D, A, B, C, G
[/output]
[/test]
[test]
[input]
schoolLibrary(['A&B&C', 'Done'])
[/input]
[output]
A, B, C
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
