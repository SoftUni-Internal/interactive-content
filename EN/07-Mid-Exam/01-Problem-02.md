[slide]
# Problem 2: School Library
## Description

On the first line you will receive a String, representing a bookshelf in library. Every book title is separated by `&`.

On the next lines until you receive `Done` as a command, you will be receiving the following commands:

* Command `Add Book | {book name}`: Add the book to the shelf and place it before all others.

If the book is already present on the shelf, ignore the command.

* Command `Take Book | {book name}`: Remove the book with the specified title (only if the book is on the shelf, otherwise ignore this command.)

* Command `Swap Books | {book1} | {book2}`: If both books are on the shelf, swap their places.

* Command `Insert Book | {book name}`: Add a book at the end of the book collection. 

* Command `Check Book | {index}`: Print the name of the book, present at this index in the list.

If the index is invalid, ignore the command.


## Input

* On the first line, you will receive a string, containing book titles, separated by `&`.

* On the next lines, until you receive `Done`, you will get commands in the format described above.


## Output

* Print the collection of books joined by  `, `.

`{firstBook}, {secondBook}, …{lastBook}`

## Constraints

* You will not receive any duplicate book names in the initial list of books.

[code-task title="School Library" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples
| **Input** | **Output** |
| --- | --- |
|`['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book | The Odyssey', Take Book | Don Quixote', 'Insert Book | Alice's Adventures in Wonderland', 'Check Book | 3', 'Done' ]`|Hamlet |
||The Odyssey, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland|


| **Input** | **Output** |
| --- | --- |
|`['Anna Karenina&Heart of Darkness&Catch-22& The Stranger', 'Add Book | David Copperfield', 'Add Book | One Thousand and One Nights', 'Swap Books | One Thousand and One Nights | Catch-22', 'Take Book | David Copperfield', 'Insert Book | The Stories of Anton Chekhov', 'Check Book | 17', 'Done']`|Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  The Stranger, The Stories of Anton Chekhov |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Add Book \| The Odyssey
Done
[/input]
[output]
The Odyssey, Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Take Book \| Don Quixote
Done
[/input]
[output]
The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Insert Book \| Alice's Adventures in Wonderland
Done
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland
[/output]
[/test]
[test]
[input]
abc\&def\&ghi\&jkl
Swap Books \| abc \| jkl
Done
[/input]
[output]
jkl, def, ghi, abc
[/output]
[/test]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Add Book \| Hamlet
Done
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Take Book \| Alice's Adventures in Wonderland
Done
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet
[/output]
[/test]
[test]
[input]
Don Quixote\&The Great Gatsby\&Moby Dick\&Hamlet
Insert Book \| Hamlet
Done
[/input]
[output]
Don Quixote, The Great Gatsby, Moby Dick, Hamlet, Hamlet
[/output]
[/test]
[test]
[input]
A\&B\&C\&D
Add Book \| A
Add Book \| B
Add Book \| C
Take Book | C
Swap Books \| A \| C
Check Book \| 1
Done
[/input]
[output]
B
A, B, D
[/output]
[/test]
[test]
[input]
A\&B\&C
Swap Books \| C \| C
Add Book \| D
Insert Book \| G
Stefan \| B
Add Book \| M
Check Book \| 69
Done
[/input]
[output]
M, D, A, B, C, G
[/output]
[/test]
[test]
[input]
A\&B\&C
Done
[/input]
[output]
A, B, C
[/output]
[/test]
[/tests]
[/code-task]
[/slide]