# Homework

[slide hideTitle]
# Problem: Listy Iterator
[code-task title="Listy Iterator" taskId="oop-basics-java-iterators-and-comparators-Listy-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
 
[task-description]
# Description
Create a class "**ListyIterator**".

It should receive a collection of **Strings** to iterate over through its constructor.

You should store the elements in a **List**.

The class should have three main functions:

- "**Move**" - moves an internal **index** position to the next index in the list, the method should return **true** if the operation is successful, and **false** if there is no next index

- "**HasNext**" - should return **true** if there is a next index and **false** if the index is already at the **last** element of the list

- "**Print**" - should **print** the element at the current internal index
    - calling "**Print**" on a collection without elements should **throw** an **exception** with the message "**Invalid Operation!**"

By default, the internal index should be pointing to **the zero index** of the List. 

Your program should support the following commands:

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| Create \{e1 e2 …\} | void | Creates a ListyIterator from the specified collection. In case you receive a "Create" command without any elements, you should create a ListyIterator with an empty collection. |
| Move | boolean | This command should move the internal index to the next index. |
| Print | void | This command should print the element at the current internal index. |
| HasNext | boolean | Returns whether the collection has the next element. |
| END | void | Stops accepting input. |

## Input

Input will come from the console as **lines** of commands.
The first line will **always** be a **Create** command.

The last command received will **always** be "**END**".

## Output

For every command (except for the **END** and the **Create** commands), print the result of that command to the console, each on a **new line**. 

If you receive the **Move** or the **HasNext** commands, print the **return value** of the method.

Your program should catch **any exceptions thrown** from validations (calling "Print" on an empty collection) and print the error messages.

## Constraints

- There will always be only **one Create** command and it will always be the first command passed
- The number of commands received will be **between** [1 ... 100]
- The last command will always be the "**END**" command


## Examples


| **Input** | **Output** |
| --- | --- |
| Create | Invalid Operation! |
| Print | false |
| Move | false |
| HasNext |  |
| END |  |


| **Input** | **Output** |
| --- | --- |
| Create Stan Johnson | true |
| HasNext | Stan |
| Print | true |
| Move | Johnson |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create
Print
Move
HasNext
END
[/input]
[output]
Invalid Operation!
false
false
[/output]
[/test]
[test open]
[input]
Create Stan Johnson
HasNext
Print
Move
Print
END
[/input]
[output]
true
Stan
true
Johnson
[/output]
[/test]
[test]
[input]
Create
Print
END
[/input]
[output]
Invalid Operation!
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
Print
Move
Print
END
[/input]
[output]
true
Steven
true
Grand
[/output]
[/test]
[test]
[input]
Create 1 2 3
HasNext
Move
HasNext
HasNext
Move
HasNext
END
[/input]
[output]
true
true
true
true
true
false
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
Print
Move
Print
Move
Print
Move
Print
END
[/input]
[output]
true
Steven
true
Grand
false
Grand
false
Grand
[/output]
[/test]
[test]
[input]
Create Steven Grand
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
HasNext
Print
END
[/input]
[output]
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
true
Steven
[/output]
[/test]
[test]
[input]
Create Steven Grand
END
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Collection
[code-task title="Collection" taskId="oop-basics-java-iterators-and-comparators-Collection" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Using the "**ListyIterator**" from the last problem, extend it by implementing the "**Iterable**" interface.

Implement **all** methods required by the interface manually.

Add a new method to the `PrintAll()`class. The method should use "**foreach**" on the collection and print all elements on a **single line**, separated by a space.

## Input
The input will come from the console as **lines** of commands. 

The first line will always be the "**Create**" command. 

The **last** command received will always be the "**END**" command.

## Output
For every command from the input (except for the "**END**" and the "**Create**" commands), print the result of that command to the console, each on a **new line**. 

In case you receive the "**Move**" or the "**HasNext**" commands, print the return value of the method.

If you get the "**PrintAll**" command, you should print all elements on a single line, **separated by spaces**. 

Your program should catch **any exceptions** thrown due to validations and print their messages.

## Constraints
- **Do not use the built-in iterators**
- There will always be only **one** "**Create**" **command** and it will **always** be the first command passed
- The number of commands received will be **between** [1 ... 100]
- The **last** command will always be the "**END**" command

## Examples

| **Input** | **Output** |
| --- | --- |
| Create 1 2 3 4 5 | true |
| Move | 1 2 3 4 5 |
| PrintAll |  |
| END |  |


| **Input** | **Output** |
| --- | --- |
| Create Steven John Kevin | Steven John Kevin  |
| PrintAll | true |
| Move | true |
| Move | Kevin |
| Print | false |
| HasNext |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create 1 2 3 4 5
Move
PrintAll
END
[/input]
[output]
true
1 2 3 4 5
[/output]
[/test]
[test open]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
HasNext
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
false
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
HasNext
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
false
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Print
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
PrintAll
HasNext
HasNext
asd
asd
asd
asd
asd
PrintAll
END
[/input]
[output]
Steven John Kevin 
true
true
Kevin
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
Steven John Kevin 
false
false
Steven John Kevin
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
END
[/input]
[output]
Steven John Kevin 
true
[/output]
[/test]
[test]
[input]
Create Steven John Kevin
PrintAll
Move
Move
Move
Move
Move
Move
Move
Move
Move
Move
Move
PrintAll
END
[/input]
[output]
Steven John Kevin 
true
true
false
false
false
false
false
false
false
false
false
Steven John Kevin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Stack Iterator
[code-task title="Stack Iterator" taskId="oop-basics-java-iterators-and-comparators-Stack-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
You have a task to create a custom **Stack**.

You already know the structure of a **Stack**.

The elements are stored in a collection.

It has two functions - "**push**" and "**pop**" an element.

The first **popped** element is in the **last position** in the collection.

The "**push**" method adds an element to the **top** of the collection. 

The "**pop**" method returns the **top** element and **removes** it.

Write your custom implementation of "**Stack**\<**Integer**\>" and implement your custom **iterator**. 

Your **Stack** class should implement the "**Iterable**\<**Integer**\>" interface, and your **Iterator Class** should implement the "**Iterator**\<**Integer**\>" interface. 

Your Custom Iterator should follow the rules of the **Abstract Data Type - Stack**. (First In First Out) 

Iterators are used only for iterating through the collection, so they **should not** remove or alter the elements.

## Input
The input can be only two types - "**push**" and "**pop**", followed by integers for the "**push**" command, and **no other** input for the "**pop**" command. 

Each command will come on a separate line.

**Format:**
- "**Push** \{**element, secondElement...**\}"
- "**Pop**"

## Output
The program should stop when you receive the "**END**" command. 

**Foreach** the stack **twice** and print all elements. Each element should be on a **new line**.

## Constraints
- The elements in the "**Push**" command will be represented by **valid** integers **between** [2 ^ -32 ... 2 ^ 32 - 1]
- The commands will always be **valid** (either "**Push**", "**Pop**", or "**END**")
- There will be no more than **16** elements in the "**Push**" command
- If the "**Pop**" command **could not** be executed as expected (e.g. there are no elements in the stack), print out: "**No elements**"


## Examples


| **Input** | **Output** |
| --- | --- |
| Push 1, 2, 3, 4 | 2 |
| Pop | 1 |
| Pop | 2 |
| END | 1 |


| **Input** | **Output** |
| --- | --- |
| Push 1, 2, 3, 4  | 1 |
| Pop | 3 |
| Push 1 | 2 |
| END | 1 |
|  | 1 |
|  | 3 |
|  | 2 |
|  | 1 |


| **Input** | **Output** |
| --- | --- |
| Push 1, 2, 3, 4  | No elements |
| Pop |  |
| Pop |  |
| Pop |  |
| Pop |  |
| Pop |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Push 1, 2, 3, 4
Pop
Pop
END
[/input]
[output]
2
1
2
1
[/output]
[/test]
[test open]
[input]
Push 1, 2, 3, 4 
Pop
Push 1
END
[/input]
[output]
1
3
2
1
1
3
2
1
[/output]
[/test]
[test open]
[input]
Push 1, 2, 3, 4 
Pop
Pop
Pop
Pop
Pop
END
[/input]
[output]
No elements
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5
Pop
Pop
Pop
END
[/input]
[output]
2
1
2
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Push 1
END
[/input]
[output]
1
3
2
1
1
3
2
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Pop
Pop
END
[/input]
[output]
1
1
[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4 
Pop
Pop
Pop
Pop
END
[/input]
[output]

[/output]
[/test]
[test]
[input]
Push 1, 2, 3, 4, 5 
Pop
Pop
Pop
Pop
Pop
Pop
END
[/input]
[output]
No elements
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Program: Froggy
[code-task title="Froggy" taskId="oop-basics-java-iterators-and-comparators-Froggy" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Let us play a game.

There is a little **Frog** and a **Lake** with numbers.

You will receive the numbers that form the **Lake** as an input from the console.

The **Frog** lives in the **Lake**.

The **Frog starts jumping when the "**END**" command is received.

When the **Frog** starts jumping, print to the console **each number** the **Frog** has stepped over.

Follow the guidelines:

The frog starts jumping from the **zero index**. 

Next, the frog jumps on all even indexes in **ascending** order(0 -> 2 -> 4 -> 6 and so on), and then on all odd indexes in **ascending** order (1 -> 3 -> 5 -> 7 and so on). 

Consider the **zero** index as **even**.

Long story short: Create a class called "**Lake**" that should implement the "**Iterable**" interface. 

Inside the **Lake** class, create a class called "**Frog**" and implement the "**Iterator**" interface. 

You will receive **only integers**.

## Input
The input will consist of two lines. 

On the first line, you will receive the **initial** numbers that form the lake, **separated** by a comma and a single space. 

On the second line, you will receive the "**END**" command.

## Output

**Foreach** the collection of numbers the **Frog** has jumped over and print **each** element.

The output should be printed on a **single** line.

**Format:**

"\{**number**\}, \{**second number**\}, \{**third number**\} ..."

## Constraints
- The numbers that form the lake will be **valid** integers in the **range** [2 ^ -32 ... 2 ^ 32 - 1]
- The command will always be **valid**

## Examples

| **Input** | **Output** |
| --- | --- |
| 1, 2, 3, 4, 5, 6, 7, 8 | 1, 3, 5, 7, 2, 4, 6, 8 |
| END |  |



| **Input** | **Output** |
| --- | --- |
| 1, 2, 3 | 1, 3, 2 |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
1, 2, 3, 4, 5, 6, 7, 8
END
[/input]
[output]
1, 3, 5, 7, 2, 4, 6, 8
[/output]
[/test]
[test open]
[input]
1, 2, 3
END
[/input]
[output]
1, 3, 2
[/output]
[/test]
[test]
[input]
1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
END
[/input]
[output]
1, 3, 5, 7, 1, 3, 5, 7, 2, 4, 6, 8, 2, 4, 6, 8
[/output]
[/test]
[test]
[input]
1, 2, 3, 4
END
[/input]
[output]
1, 3, 2, 4
[/output]
[/test]
[test]
[input]
1, 2, 3, 4, -3, -0, 0
END
[/input]
[output]
1, 3, -3, 0, 2, 4, 0
[/output]
[/test]
[test]
[input]
0
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
10000000, 100000000, 100000000
END
[/input]
[output]
10000000, 100000000, 100000000
[/output]
[/test]
[test]
[input]
3, 3, 3
END
[/input]
[output]
3, 3, 3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Comparing Objects
[code-task title="Comparing Objects" taskId="oop-basics-java-iterators-and-comparators-Comparing-Objects" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a **class** "**Person**".

Each person object should have a **name**, **age**, and **town**.

As you may know, there is a built-in Comparable interface.

You should implement the "**Comparable**" interface and try to override the "**compareTo**" method.

When you compare two people, first you should compare their **names**, after that, their **age**, and finally, their **town** name.


## Input
The input consists of few lines of information about people in the following format:

"\{**name**\} \{**age**\} \{**town**\}"

Keep accepting input until you receive the "**END**" command.

After that, you will receive an integer **N**.

This integer refers to the **N**\-th person in your collection.

## Output

Print the following information on a single line:
- Number of people that are the **same** as the **N-th person**
- Number of people that are **different** than this person
- Total number of people in the collection

**Format:**

"\{**Number of people that are the same as the N-th person**\} \{**number of people that are different than this person**\} \{**total number of people in the collection**\}"

## Constraints
- All names, ages, and town names will be **valid**
- **N** will be always a **valid** integer in the **range** [2 ... 100]
- If there are no equal objects, print: "**No matches**"

## Examples

| **Input** | **Output** |
| --- | --- |
| Peter 22 Venice | No matches |
| George 14 San Francisco |  |
| END |  |
| 2 |  |


| **Input** | **Output** |
| --- | --- |
| John 22 Miami | 2 1 3 |
| Adam 22 Miami |  |
| Adam 22 Miami |  |
| END |  |
| 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Peter 22 Venice
George 14 San Francisco
END
2
[/input]
[output]
No matches
[/output]
[/test]
[test open]
[input]
John 22 Miami
Adam 22 Miami
Adam 22 Miami
END
2
[/input]
[output]
2 1 3
[/output]
[/test]
[test]
[input]
John 22 Venice
George 14 San Francisco
END
2
[/input]
[output]
No matches
[/output]
[/test]
[test]
[input]
Peter 22 Miami
Adam 22 Miami
Adam 22 Miami
END
2
[/input]
[output]
2 1 3
[/output]
[/test]
[test]
[input]
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
P 22 V
G 22 V
G 22 V
P 22 V
END
2
[/input]
[output]
8 8 16
[/output]
[/test]
[test]
[input]
P 22 V
END
1
[/input]
[output]
No matches
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Strategy Pattern
[code-task title="Strategy Pattern" taskId="oop-basics-java-iterators-and-comparators-Strategy-Pattern" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
An interesting pattern you may have heard of is the **Strategy Design Pattern**.

If there are multiple ways to do a given task, it allows the client to choose the way that most fits their needs.

A popular implementation of the pattern used for sorting objects in Java is the `Collections.sort()` method that takes a **Comparator**.

Create a class "**Person**". Each person should have a **name** and **age**. 

Create 2 Comparators for Person (classes that implement the "**Comparator**\<**Person**\>" **interface**). 

The first comparator should compare people based on the **length of their name** as a first parameter.

If two people have a name with the **same** length, perform a **case-insensitive** comparison based on the **first letter of their name** instead. 

The second comparator should compare them based on their **age**. 

Create 2 **TreeSets** of type **Person**. The first one should implement the name comparator, the second one should implement the age comparator.

## Input
On the first line, you will receive a number **N**. 

On each of the next **N** lines, you will receive information about people in the following format: "\{**name**\} \{**age**\}". 

Add the people from the input into **both** sets.

## Output
**Foreach** the sets and print each person from the set on a **new line** in the same format that you received them. 

Start with the set that implements the name comparator.

## Constraints

- A person's name will be a string that contains **only** alphanumerical characters with a length **between** [1 ... 50] symbols

- A person's age will be a **positive** integer in the **range** [1 ... 100]

- The number of people **N** will be a **positive** integer in the **range** [0 ... 100]

## Examples


| **Input** | **Output** |
| --- | --- |
| 3 | John 100 |
| Peter 20 | Peter 20 |
| John 100 | Penelope 1 |
| Penelope 1 | Penelope 1 |
|  | Peter 20 |
|  | John 100 |



| **Input** | **Output** |
| --- | --- |
| 5 | aria 33 |
| Ivan 17 | Ivan 17 |
| aria 33 | John 3 |
| Steven 25 | Nicko 99 |
| Nicko 99 | Steven 25 |
| John 3 | John 3 |
|  | Ivan 17 |
|  | Steven 25 |
|  | aria 33 |
|  | Nicko 99 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
Peter 20
John 100
Penelope 1
[/input]
[output]
John 100
Peter 20
Penelope 1
Penelope 1
Peter 20
John 100
[/output]
[/test]
[test open]
[input]
5
Ivan 17
aria 33
Steven 25
Nicko 99
John 3
[/input]
[output]
aria 33
Ivan 17
John 3
Nicko 99
Steven 25
John 3
Ivan 17
Steven 25
aria 33
Nicko 99
[/output]
[/test]
[test]
[input]
3
Peter 33
John 11
Penelope 2
[/input]
[output]
John 11
Peter 33
Penelope 2
Penelope 2
John 11
Peter 33
[/output]
[/test]
[test]
[input]
5
Ivan 27
aria 43
Steven 35
Nicko 99
John 13
[/input]
[output]
aria 43
Ivan 27
John 13
Nicko 99
Steven 35
John 13
Ivan 27
Steven 35
aria 43
Nicko 99
[/output]
[/test]
[test]
[input]
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
2
Ivan 17
aria 33
[/input]
[output]
aria 33
Ivan 17
Ivan 17
aria 33
[/output]
[/test]
[test]
[input]
5
Ivan 17
aria 33
aaRia 20
aaRias 20
Vans1 13
[/input]
[output]
aria 33
Ivan 17
aaRia 20
Vans1 13
aaRias 20
Vans1 13
Ivan 17
aaRia 20
aria 33
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Equality Logic
[code-task title="Equality Logic" taskId="oop-basics-java-iterators-and-comparators-Equality-Logic" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

Create a class "**Person**". Each person should have a **name** and **age**. 

If there are two or more people with **same** name and age, they should be considered the same.

Override any methods needed to apply this logic.

Your class should work with **both** standard and hashed collections.

Create a "**TreeSet**" and a "**HashSet**" of type Person.

## Input

On the first line, you will receive an integer **N**. 

On each of the next **N** lines, you will receive information about people in the following format: "\{**name**\} \{**age**\}".  

Add the people from the input into **both** sets (both sets should hold all the people passed in from the input).

## Output

The output should consist of **exactly** 2 lines. 

On the first line, you should print the **size** of the "**TreeSet**", and on the second - the **size** of the "**HashSet**".

## Constraints

- A person's name will be a string that contains **only** alphanumerical characters with a length **between** [1 ... 50] symbols

- A person's age will be a **positive** integer in the **range** [1 ... 100]

- The number of people **N** will be a positive integer in the **range** [0 ... 100]

## Hint

You should override **both** the **equals()** and the **hashCode()** methods. 

You can check online for implementation of hashCode - it does not have to be perfect, but it should be good enough to produce the same hash code for objects with the **same** name and age, and different hash codes for objects with **different** name and/or age.


## Examples

| **Input** | **Output** |
| --- | --- |
| 3 | John 100 |
| Peter 20 | Peter 20 |
| John 100 | Penelope 1 |
| Penelope 1 | Penelope 1 |
|  | Peter 20 |
|  | John 100 |



| **Input** | **Output** |
| --- | --- |
| 5 | aria 33 |
| Ivan 17 | Ivan 17 |
| aria 33 | John 3 |
| Steven 25 | Nicko 99 |
| Nicko 99 | Steven 25 |
| John 3 | John 3 |
|  | Ivan 17 |
|  | Steven 25 |
|  | aria 33 |
|  | Nicko 99 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
4
Peter 20
Pete 20
John 15
Peter 21
[/input]
[output]
4
4
[/output]
[/test]
[test open]
[input]
7
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
4
Peter 30
Pete 30
John 25
Peter 31
[/input]
[output]
4
4
[/output]
[/test]
[test]
[input]
7
Ivan 27
ivan 27
Stan 35
Ivan 28
Ivan 27
Stann 35
Stan 35
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
14
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
Ivan 17
ivan 17
Stan 25
Ivan 18
Ivan 17
Stann 25
Stan 25
[/input]
[output]
5
5
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0
0
[/output]
[/test]
[test]
[input]
2
P 100
Y 1
[/input]
[output]
2
2
[/output]
[/test]
[test]
[input]
2
I 3
I 3
[/input]
[output]
1
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Pet Clinics
[code-task title="Pet Clinics" taskId="oop-basics-java-iterators-and-comparators-Pet-Clinics" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
***You are a young and ambitious owner of a Pet Clinics Holding.***

You ask your employees to create a program that will store the whole information about the pets in the database.

Each pet should have a **name**, **age**, and **type**.


Your application should support a few basic operations, such as: 

- **Creating** a pet
- **Creating** a clinic
- **Adding** a pet to a clinic
- **Releasing** a pet from a clinic
- **Printing** information about a **specific** room in a clinic, or printing information about **all** rooms in a clinic

Clinics should have an **odd** number of rooms. Attempting to create a clinic with an **even** number of rooms should **fail** and **throw** an appropriate **exception**.

## Accommodation Order

For example, let us take a look at a clinic with 5 rooms. 

The **first** room where a pet will be treated is the **central** one (room 3). 

So, the order in which animals are entering is as follows: the first animal is going to the **center** (room 3). The next pet enters the room to the **left** of the previously occupied one (second room). The next pet enters the room to the **right** of the same occupied room (room 4).

The last free rooms in which pets can enter are **room 1** and **room 5**. 

In case a room is already occupied, we go to the next room in the above order. Your task is to model the application and make it support some commands.

The first pet enters room 3. -> 1 2 **3** 4 5

The second pet enters room 2. -> 1 **2** 3 4 5

The third pet would enter room 4. -> 1 2 3 **4** 5

The fourth pet would enter room 1. -> **1** 2 3 4 5 

The fifth pet would enter room 5. -> 1 2 3 4 **5** 

When we have added all the pets, it is time to find a way to release them. 

The process of releasing them is not so simple. 

When the **Release** method is called, we start from the **central** room (room 3), and continue with the rooms to the **right** (room 4, room 5, and so on), until we find a pet or reach the **last** room (room 5). 

If we reach the last room, we start from the **first** room (room 1), and again, we move right until we reach the **central** room (room 3). 

If a pet is found, we **remove** it from the collection and **return** "**true**". If a pet is **NOT** found, we return "**false**".

When the "**Print**" command for a certain room is called, if the room contains a pet, we print the information about the pet on a single line in the following format: "\{**pet name**\} \{**pet age**\} \{**pet type**\}". 

Alternatively, if the room is empty, we print **"Room empty"**. 

When a "**Print**" command for a certain clinic is called, we should print **all** rooms in the clinic, ordered by their room numbers.

### Commands

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| Create Pet \{name\} \{age\} \{type\} | void | Creates a pet with the specified name and age (returns true if the operation is successful, and false if it is not) |
| Create Clinic \{name\} \{rooms\} | void | Creates a clinic with the specified name and number of rooms (if the number of the rooms is not odd, throws an exception) |
| Add \{pet's name\} \{clinic's name\} | boolean | This command should add the given pet in the specified clinic (returns true if the operation is successful, and false if it is not) |
| Release \{clinic's name\} | boolean | This command should release an animal from the specified clinic (returns true if the operation is successful, and false if it is not) |
| HasEmptyRooms \{clinic's name\} | boolean | Returns whether the clinic has any empty rooms (returns true if it has, and false if it does not) |
| Print \{clinic's name\} | void | This command should print each room in the specified clinic, ordered by their room numbers |
| Print \{clinic's name\} \{room\} | void | Prints the pets that are currently being treated in the specified room on a single line |

## Input

On the first line, you will be given an integer **N** - the number of commands you will receive.

On each of the next **N** lines, you will receive a command. 

Commands and parameters will always be **correct** ( "**Add**", "**Release**", "**HasEmptyRooms**" and "**Print**" commands will always be passed to **existing** clinics/pets), except for the number of rooms in the **Create Clinic** command, which can be any **valid** integer **between 1 and 101**.

## Output

For each command with a boolean **return** type received through the input, you should print its return value on a **separate** line. 

If a method **throws** an **exception** (such as trying to create a clinic with an even number of rooms, or trying to add a pet that does not exist), you should **catch** the exceptions and print "**Invalid Operation!**". 

The **Print** \{**clinic's name**\} \{**room**\} command should print information about that room in the format **specified** above. 

The **Print** \{**clinic's name**\} command should print information about all rooms in the clinic, ordered by their room numbers.

## Constraints

- The number of commands **N** will be a valid integer in the **range** [1 ... 1000], there is no need to check it explicitly
- All **pet names**, **clinic names**, and **types** will be strings consisting only of alphabetical characters. Their length will be **between** [1 ... 50] characters
- **The age of a pet** will be an integer in the **range** [1 ... 100]
- **The number of all rooms in a clinic** will be an integer in the **range** [1 ... 101]
- **The room number** in a **Print** command will always be **between 1** and the **number of all rooms** in that clinic
- Input will consist **only** of **correct commands**, and they will **always** have the correct type of parameters

## Examples

| **Input** | **Output** |
| --- | --- |
| 9 | Invalid Operation! |
| Create Pet Garet 7 Cat | true |
| Create Clinic VetClinic 4 | false |
| Create Clinic PetClinic 1 | true |
| HasEmptyRooms PetClinic | false |
| Release PetClinic | false |
| Add Garet PetClinic |  |
| HasEmptyRooms PetClinic |  |
| Create Pet Shabby 2 Dog |  |
| Add Shabby PetClinic |  |



| **Input** | **Output** |
| --- | --- |
| 8 | true |
| Create Pet Sherry 7 Cat | true |
| Create Pet Tom 1 Cata | Sherry 7 Cat |
| Create Clinic PetClinic 5 | true |
| Add Sherry PetClinic | Room empty |
| Add Tom PetClinic | Tom 1 Cata |
| Print PetClinic 3 | Room empty |
| Release PetClinic | Room empty |
| Print PetClinic | Room empty |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
9
Create Pet Garet 7 Cat
Create Clinic VetClinic 4
Create Clinic PetClinic 1
HasEmptyRooms PetClinic
Release PetClinic
Add Garet PetClinic
HasEmptyRooms PetClinic
Create Pet Shabby 2 Dog
Add Shabby PetClinic
[/input]
[output]
Invalid Operation!
true
false
true
false
false
[/output]
[/test]
[test open]
[input]
8
Create Pet Sherry 7 Cat
Create Pet Tom 1 Cata
Create Clinic PetClinic 5
Add Sherry PetClinic
Add Tom PetClinic
Print PetClinic 3
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
Sherry 7 Cat
true
Room empty
Tom 1 Cata
Room empty
Room empty
Room empty
[/output]
[/test]
[test]
[input]
9
Create Pet Garet 8 Cat
Create Clinic VetClinic 4
Create Clinic PetClinic 1
HasEmptyRooms PetClinic
Release PetClinic
Add Garet PetClinic
HasEmptyRooms PetClinic
Create Pet Shabby 2 Dog
Add Shabby PetClinic
[/input]
[output]
Invalid Operation!
true
false
true
false
false
[/output]
[/test]
[test]
[input]
8
Create Pet Sherry 9 Cat
Create Pet Tom 1 Cata
Create Clinic PetClinic 5
Add Sherry PetClinic
Add Tom PetClinic
Print PetClinic 3
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
Sherry 9 Cat
true
Room empty
Tom 1 Cata
Room empty
Room empty
Room empty
[/output]
[/test]
[test]
[input]
14
Create Pet Garet 7 Cat
Create Pet Sherry 1 Cat
Create Pet Shabby 3 Dog
Create Pet Tom 4 Cat
Create Pet Victor 17 Giraffe
Create Clinic PetClinic 5
Add Garet PetClinic
Add Sherry PetClinic
Add Shabby PetClinic
Add Tom PetClinic
Add Victor PetClinic
Release PetClinic
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
true
true
true
true
true
Tom 4 Cat
Sherry 1 Cat
Room empty
Room empty
Victor 17 Giraffe
[/output]
[/test]
[test]
[input]
12
Create Pet Garet 7 Cat
Create Pet Sam 1 Cat
Create Pet Graf 100 Wolf
Create Clinic PetClinic 5
Add Garet PetClinic
Add Sam PetClinic
Add Graf PetClinic
Print PetClinic 3
Print PetClinic 1
Print PetClinic 2
Release PetClinic
Print PetClinic
[/input]
[output]
true
true
true
Garet 7 Cat
Room empty
Sam 1 Cat
true
Room empty
Sam 1 Cat
Room empty
Graf 100 Wolf
Room empty
[/output]
[/test]
[test]
[input]
11
Create Pet Doggy 1 Dog
Create Pet Cat 2 Cat
Create Pet Turtle 3 Turle
Create Pet Elephant 4 Elephant
Create Clinic Random 3
Create Clinic OtherRandom 17
Add Doggy Random
Add Cat Random
Add Elephant Random
Add Turtle Random
Print Random
[/input]
[output]
true
true
true
false
Cat 2 Cat
Doggy 1 Dog
Elephant 4 Elephant
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Linked List Traversal
[code-task title="Linked List Traversal" taskId="oop-basics-java-iterators-and-comparators-Linked-List-Traversal" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
You need to write a simplified implementation of a **generic Linked List that has an Iterator**.

The list should support the "**Add**" and the "**Remove**" operations. It should reveal the number of elements that it has by calling a "**getSize**" function, and it should have an implemented iterator (should be **foreach**-able).

The "**add**" method should add a new element at the end of the collection.

The "**remove**" method should remove the first occurrence of the item, starting from the beginning of the collection. If the element is successfully removed, the method should **return true**, and alternatively, if the element passed is not in the collection, the method should **return false**.

The "**getSize**" method should return the **number of all elements** that are currently in the list.

The **iterator** should iterate over the collection, starting from the first entered element.


## Input

On the first line, you will receive a number **N**. 

On each of the next **N** lines, you will receive a command in one of the following formats:

- "**Add** \{**number**\}" - adds a number to your linked list
- "**Remove** \{**number**\}" - removes the first occurrence of the number from the linked list
    - if there is no such element, the collection remains **unchanged**

## Output

The output should consist of exactly 2 lines. 

On the first, you should print the result of calling the "**getSize**" function on the Linked list. 

On the next line, you should print **all elements** in the collection by iterating over the collection with a **foreach** loop.

## Constraints

- All numbers received through the input will be **valid** integers in the **range** [2 ^ -32 ... 2 ^ 32 - 1]
- All commands received through the input will be **valid** ("**Add**" or "**Remove**")
- The number **N** will be an integer in the **range** [1 ... 500]

## Examples

| **Input** | **Output** |
| --- | --- |
| 5 | 2 |
| Add 7 | -50 20 |
| Add -50 |  |
| Remove 3 |  |
| Remove 7 |  |
| Add 20 |  |



| **Input** | **Output** |
| --- | --- |
| 6 | 4 |
| Add 13 | 13 20 4 4 |
| Add 4 |  |
| Add 20 |  |
| Add 4 |  |
| Remove 4 |  |
| Add 4 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
5
Add 7
Add -50
Remove 3
Remove 7
Add 20
[/input]
[output]
2
-50 20
[/output]
[/test]
[test open]
[input]
6
Add 13
Add 4
Add 20
Add 4
Remove 4
Add 4
[/input]
[output]
4
13 20 4 4
[/output]
[/test]
[test]
[input]
5
Add 8
Add -50
Remove 3
Remove 7
Add 20
[/input]
[output]
3
8 -50 20
[/output]
[/test]
[test]
[input]
6
Add 11
Add 4
Add 20
Add 4
Remove 4
Add 4
[/input]
[output]
4
11 20 4 4
[/output]
[/test]
[test]
[input]
11
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Add 4
Add 0
Add 0
Add -10
Add -12335435
[/input]
[output]
11
13 4 0 333333 20 4 4 0 0 -10 -12335435
[/output]
[/test]
[test]
[input]
9
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Remove 4
Remove 0
Add 4
[/input]
[output]
5
13 333333 20 4 4
[/output]
[/test]
[test]
[input]
11
Add 13
Add 4
Add 0
Add 333333
Add 20
Add 4
Remove 4
Remove 0
Add 4
Add 0
Add 0
[/input]
[output]
7
13 333333 20 4 4 0 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
