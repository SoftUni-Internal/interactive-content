[slide]
# Problem: Old Books
[code-task title="Old Books" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Andreea goes to her home town after being a long time abroad. 

When she comes home, she sees her grandmother\'s library and remembers her favourite book. 

Help Andreea writing a program in which Andreea enters the name of the **book** she\'s searching for (**String**) and the **capacity** of the library (**integer**). 

**Until** Andreea finds her favourite book **or** doesn\'t check all books in the library, the program have to reads every time the name of the next book on a separate line.

# Input
- First line of input is the name of the book Andreea's searching for - string
- Second line is the capacity of the library - integer
- On every nex line - name of book from library - string

# Output
- If Andreea **does not** find the book, print **two** lines:
  - "The book you search is not here!"
  - "You checked \{count\} books."
- If Andreea **finds** the book, print a **single** line:
  - "You checked \{count\} books and found it."

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| Troy | | You checked 2 books and found it. |
| 8 | | |
| Stronger | | |
| Life Style | | |
| Troy | | |

## Comments
- Andreea is searching for a book with name "Troy", and the library\'s capacity is 8 books.
- The first book is "Stronger", the second one is "Life Style", the third one is desired - "Troy" and the program ends.

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| The Spot | | The book you search is not here! |
| 4 | | You checked 4 books. |
| Hunger Games | | |
| Harry Potter | | |
| Torronto | | | 
| Spotify | | | 

## Comments
- Andreea is searching for a book with name "The Spot". The library contains 4 books.
- The first book is "Hunger Games", the second - "Harry Potter", the third - "Torronto", the fourth - "Spotify"
- Since there aren\'t other books in the library, reading names is stopped. Andreea didn\'t find the book.
[/task-description]
[tests]
[test]
[input]
Troy
8
Stronger
Life Style
Troy
[/input]
[output]
You checked 2 books and found it.
[/output]
[/test]
[test]
[input]
The Spot
4
Hunger Games
Harry Potter
Torronto
Spotify
[/input]
[output]
The book you search is not here!
You checked 4 books.
[/output]
[/test]
[test]
[input]
Bourne
32
True Story
Forever
More Space
The Girl
Spaceship
Strongest
Profit
Tripple
Stella
The Matrix
Bourne
[/input]
[output]
You checked 10 books and found it.
[/output]
[/test]
[test]
[input]
Horror
22
Storm
Worms
Bronks
Paradise
Serdika
Stronger
Steroid
Proud
epic
Pepper
Purple Rain
Sephia
Philip The Killer
Saturday Night
Terror
Poor Man
Medom
medusa
saturn
story teller
Spotify
santas Life
[/input]
[output]
The book you search is not here!
You checked 22 books.
[/output]
[/test]
[test]
[input]
Sports
7
Stars
String It
Glamour
Paris 
Life Spell
Poppay
Proud of ME
[/input]
[output]
The book you search is not here!
You checked 7 books.
[/output]
[/test]
[test]
[input]
Programming Basics
4
Four
Triple W
Sarrah
Programming Basics
[/input]
[output]
You checked 3 books and found it.
[/output]
[/test]
[test]
[input]
La Liga
1
Troy
[/input]
[output]
The book you search is not here!
You checked 1 books.
[/output]
[/test]
[test]
[input]
The Post
5
Porto
Troy
Stormy
Udemy
The Post
[/input]
[output]
You checked 4 books and found it.
[/output]
[/test]
[test]
[input]
Most Wanted
9
Post Fight
stormy Wife
Windows..
Saturn
Karate Kid
Don't Think about me
Most Dangerous
Prepare for fight
Fair
The book you search is not here!
[/input]
[output]
The book you search is not here!
You checked 9 books.
[/output]
[/test]
[test]
[input]
Paramedick
11
Pop
Rock
Metallica
Mamma Mia
Morandy
Solo
Ordinary Life
Portable
Paramedick
[/input]
[output]
You checked 8 books and found it.
[/output]
[/test]
[test]
[input]
Possesion
1
Possesion
[/input]
[output]
You checked 0 books and found it.
[/output]
[/test]
[test]
[input]
Keep Trying
1
sout
[/input]
[output]
The book you search is not here!
You checked 1 books.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]