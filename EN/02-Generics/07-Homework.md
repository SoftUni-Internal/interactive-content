# Homework

[slide hideTitle]
# Problem: Generic Box
[code-task title="Generic Box" taskId="oop-basics-java-generics-Generic-Box" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a **generic class** "**Box**" that can store any type.

**Override** the `toString()` method to print the type and the value of the stored data in the format:

"\{**class full name**\}: \{**value**\}"

Use the class that you have created and test it with the class "**java.lang.String**". 

## Input

On the first line, you will get an integer **n** - the number of Strings to read from the console. 

On the next **n** lines, you will get the actual strings. 

## Output

For each string, create a "**Box**" class and call its `toString()` method to print the data to the console.

# Example
| **Input** | **Output** |
| --- | --- |
| 2 | java.lang.String: life in a box |
| life in a box | java.lang.String: box in a life |
| box in a life |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
life in a box
box in a life
[/input]
[output]
java.lang.String: life in a box
java.lang.String: box in a life
[/output]
[/test]
[test]
[input]
3
Pesho
Simo
Gosho
[/input]
[output]
java.lang.String: Pesho
java.lang.String: Simo
java.lang.String: Gosho
[/output]
[/test]
[test]
[input]
5
jega
mi
e
tezi
dni
[/input]
[output]
java.lang.String: jega
java.lang.String: mi
java.lang.String: e
java.lang.String: tezi
java.lang.String: dni
[/output]
[/test]
[test]
[input]
6
kolko
mnogo
muka
ima
po
tozi
[/input]
[output]
java.lang.String: kolko
java.lang.String: mnogo
java.lang.String: muka
java.lang.String: ima
java.lang.String: po
java.lang.String: tozi
[/output]
[/test]
[test]
[input]
1
I am an Integer
[/input]
[output]
java.lang.String: I am an Integer
[/output]
[/test]
[test]
[input]
10
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
I am an Integer
[/input]
[output]
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
java.lang.String: I am an Integer
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Box of Integer
[code-task title="Generic Box of Integer" taskId="oop-basics-java-generics-Generic-Box-of-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a **generic class Box** that can store any type.

**Override** the `toString()` method to print the type and the value of the stored data in the format 

"\{**class full name**\}: \{**value**\}"

Use the class that you have created and test it with the class "**java.lang.String**". 

On the first line, you will get the number **n** - the number of Integers to read from the console. 

On the next **n** lines, you will get the actual Integers. 

For each of them create a box and call its `toString()` method to print its data to the console.

# Example
| **Input** | **Output** |
| --- | --- |
| 3 | java.lang.Integer: 7 |
| 7 | java.lang.Integer: 123 |
| 123 | java.lang.Integer: 42 |
| 42 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7
123
42
[/input]
[output]
java.lang.Integer: 7
java.lang.Integer: 123
java.lang.Integer: 42
[/output]
[/test]
[test]
[input]
3
1
2
3
[/input]
[output]
java.lang.Integer: 1
java.lang.Integer: 2
java.lang.Integer: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
[/input]
[output]
java.lang.Integer: 12
java.lang.Integer: 13
java.lang.Integer: 14
java.lang.Integer: 15
java.lang.Integer: 16
[/output]
[/test]
[test]
[input]
1
-2147483648
[/input]
[output]
java.lang.Integer: -2147483648
[/output]
[/test]
[test]
[input]
1
0
[/input]
[output]
java.lang.Integer: 0
[/output]
[/test]
[test]
[input]
1
2147483647
[/input]
[output]
java.lang.Integer: 2147483647
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Swap Method String
[code-task title="Generic Swap Method String" taskId="oop-basics-java-generics-Generic-Swap-Method-String" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a generic method that receives a list containing **any type of data** and swaps the elements at two given indexes.

As in the previous problems, read **n** number of boxes of type **String** and add them to the list. 

On the next line, you will receive a swap command consisting of **two indexes**. 

Use the method you have created to swap the elements that correspond to the given indexes and **print each** element in the list.

# Example
| **Input** | **Output** |
| --- | --- |
| 3 | java.lang.String: Swap me with John |
| John | java.lang.String: George |
| George | java.lang.String: John |
| Swap me with John |  |
| 0 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
John
George
Swap me with John
0 2
[/input]
[output]
java.lang.String: Swap me with John
java.lang.String: George
java.lang.String: John
[/output]
[/test]
[test]
[input]
3
1
2
3
0 0
[/input]
[output]
java.lang.String: 1
java.lang.String: 2
java.lang.String: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
0 3
[/input]
[output]
java.lang.String: 15
java.lang.String: 13
java.lang.String: 14
java.lang.String: 12
java.lang.String: 16
[/output]
[/test]
[test]
[input]
1
-2147483648
0 0
[/input]
[output]
java.lang.String: -2147483648
[/output]
[/test]
[test]
[input]
2
pulien
haos
0 1
[/input]
[output]
java.lang.String: haos
java.lang.String: pulien
[/output]
[/test]
[test]
[input]
5
abc
d
e
f
ghi
0 1
[/input]
[output]
java.lang.String: d
java.lang.String: abc
java.lang.String: e
java.lang.String: f
java.lang.String: ghi
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Swap Method Integer
[code-task title="Generic Swap Method Integer" taskId="oop-basics-java-generics-Generic-Swap-Method-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a generic method that receives a list containing **any type of data** and swaps the elements at two given indexes.

As in the previous problems, read **n** number of boxes of type **Integer** and add them to the list. 

On the next line, you will receive a swap command consisting of **two indexes**. 

Use the method you created before to swap the elements that correspond to the given indexes and **print each** element in the list.

# Example
| **Input** | **Output** |
| --- | --- |
| 3 | java.lang.Integer: 42 |
| 7 | java.lang.Integer: 123 |
| 123 | java.lang.Integer: 7 |
| 42 |  |
| 0 2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7
123
42
0 2
[/input]
[output]
java.lang.Integer: 42
java.lang.Integer: 123
java.lang.Integer: 7
[/output]
[/test]
[test]
[input]
3
1
2
3
0 1
[/input]
[output]
java.lang.Integer: 2
java.lang.Integer: 1
java.lang.Integer: 3
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3 4
[/input]
[output]
java.lang.Integer: 12
java.lang.Integer: 13
java.lang.Integer: 14
java.lang.Integer: 16
java.lang.Integer: 15
[/output]
[/test]
[test]
[input]
1
-2147483648
0 0
[/input]
[output]
java.lang.Integer: -2147483648
[/output]
[/test]
[test]
[input]
1
0
0 0
[/input]
[output]
java.lang.Integer: 0
[/output]
[/test]
[test]
[input]
1
2147483647
0 0
[/input]
[output]
java.lang.Integer: 2147483647
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Count Method String
[code-task title="Generic Count Method String" taskId="oop-basics-java-generics-Generic-Count-Method-String" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a **method** that receives a **list of any type that can be compared** and an **element of the given type** as arguments.

The method should **return the count of elements that are greater than the value of the given element**.

**Modify your Box class** to support **value comparison** of the stored data.

On the **first line**, you will receive **n** - the number of elements to add to the list. 

On the next **n** lines, you will receive the actual elements. 

On the **last line**, you will get the value of the element to which you need to compare every element in the list.

# Example
| **Input** | **Output** |
| --- | --- |
| 3 | 2 |
| aa |  |
| aaa |  |
| bb |  |
| aa |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
aa
aaa
bb
aa
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
1
2
3
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1
aaa
aa
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
10
a
b
c
d
e
f
g
h
i
j
k
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5
p
pp
ppp
pppp
ppppp
pp
[/input]
[output]
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Generic Count Method Double
[code-task title="Generic Count Method Double" taskId="oop-basics-java-generics-Generic-Count-Method-Double" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a **method** that receives a **list of Double** and an **element of the given type** as arguments.

The method should **return the count of elements that are greater than the value of the given element**.

**Modify your Box class** to support **value comparison** of the stored data.

On the **first line**, you will receive **n** - the number of elements to add to the list. 

On the next **n** lines, you will receive the actual elements. 

On the **last line**, you will get the value of the element to which you need to compare every element in the list.

# Example
| **Input** | **Output** |
| --- | --- |
| 3 | 2 |
| 7.13 |  |
| 123.22 |  |
| 42.78 |  |
| 7.55 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
3
7.13
123.22
42.78
7.55
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
1
2
3
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
12
13
14
15
16
3
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
1
1231542.123
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3
-1
0
1
-1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
11.11
22.22
33.33
44.44
55.55
66.66
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Custom List
[code-task title="Custom List" taskId="oop-basics-java-generics-Custom-List" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

Create a generic data structure that can store **any type** that can be **compared**.

Implement functions:

- void add(T element)
- T remove(int index)
- boolean contains(T element)
- void swap(int index, int index)
- int countGreaterThan(T element)
- T getMax()
- T getMin()

Create a command interpreter that reads commands and modifies the custom list that you have created. Implement the commands:

- "**Add** \<**element**\>" - Adds the given element to the end of the list
- "**Remove** \<**index**\>" - Removes the element at the given index
- "**Contains** \<**element**\>" - Checks if the list contains the given element and prints **true or false**
- "**Swap** \<**index**\> \<**index**\>" - Swaps the elements at the given indexes
- "**Greater** \<**element**\>" - Counts the elements that are greater than the given element and prints their count
- "**Max**" - Prints the maximum element in the list
- "**Min**" - Prints the minimum element in the list
- "**Print**" - Prints all elements in the list, each on a separate line
- "**END**" - stops accepting commands

**Note**: For the **tests**, use **String** as **T**.

# Example
| **Input** | **Output** |
| --- | --- |
| Add aa | cc |
| Add bb | aa |
| Add cc | 2 |
| Max | true |
| Min | cc |
| Greater aa | bb |
| Swap 0 2 | aa |
| Contains aa |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add aa
Add bb
Add cc
Max
Min
Greater aa
Swap 0 2
Contains aa
Print
END
[/input]
[output]
cc
aa
2
true
cc
bb
aa
[/output]
[/test]
[test]
[input]
Add P
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Custom List Sorter
[code-task title="Custom List Sorter" taskId="oop-basics-java-generics-Custom-List-Sorter" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Extend the previous problem by creating an additional **Sorter class**. 

It should have a single static method `sort()` which can sort objects of type **CustomList** containing any type that can be compared.

**Extend the command list** to support one additional command:

- "**Sort**" - Sort the elements in the list in ascending order


# Example
| **Input** | **Output** |
| --- | --- |
| Add cc | aa |
| Add bb | bb |
| Add aa | cc |
| Sort |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add cc
Add bb
Add aa
Sort
Print
END
[/input]
[output]
aa
bb
cc
[/output]
[/test]
[test]
[input]
Add P
Sort
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
Sort
Print
END
[/input]
[output]
P
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Sort
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
Sort
Swap 0 1
Print
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
P
G
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Sort
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Custom List Iterator
[code-task title="Custom List Iterator" taskId="oop-basics-java-generics-Custom-List-Iterator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Extend the code from the previous task by implementing **Iterable** in your custom list class.

You probably used a **for-loop** for the print command.

This should allow you to iterate your list in a **foreach** statement.

# Example
| **Input** | **Output** |
| --- | --- |
| Add aa | cc |
| Add bb | aa |
| Add cc | 2 |
| Max | cc |
| Min | bb |
| Greater aa | aa |
| Swap 0 2 |  |
| Print |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Add aa
Add bb
Add cc
Max
Min
Greater aa
Swap 0 2
Contains aa
Print
END
[/input]
[output]
cc
aa
2
true
cc
bb
aa
[/output]
[/test]
[test]
[input]
Add P
Print
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Max
END
[/input]
[output]
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Swap 0 0
Swap 1 1
Swap 0 1
Swap 1 0
Swap 0 1
Print
END
[/input]
[output]
G
P
[/output]
[/test]
[test]
[input]
Add P
Add G
Contains 123
Contains falsd
Contains @\#!@\\$
Contains .
Contains P
Contains G
Greater P
Greater G
Greater aa
Greater zz
Greater true
Greater false
Greater 123
Greater ...
Greater @\#%!@\#
END
[/input]
[output]
false
false
false
false
true
true
0
1
0
0
0
0
2
2
2
[/output]
[/test]
[test]
[input]
Add a
Add b
Add c
Add d
Add e
Add f
Print
Max
Min
Greater a
Greater b
Greater c
Greater d
Greater e
Greater f
Remove 0
Remove 0
Remove 0
Print
END
[/input]
[output]
a
b
c
d
e
f
f
a
5
4
3
2
1
0
d
e
f
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Tuple
[code-task title="Tuple" taskId="oop-basics-java-generics-Tuple" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
There is a sequence of elements, called **"Tuple"**.

It is a class, that contains two objects: the first one is **"item1"**; the second one is **"item2"**.

It is similar to **Map.Entry** but it **only has items**, which are **neither key nor value**.

It is unknown what these objects are holding.

The class name does not provide enough information.

Your task is to try to implement it in Java, just for practicing generics.

Create a class **"Tuple"**, which holds two objects. 

The first one will be **"item1"** and the second one - **"item2"**.

The class has to hold **Generics**. 

When you create a new object of class -  **"Tuple"**, you should specify the item types separately.

## Input

The input consists of three lines:

- The first one consists of a **person's name** and **city of residence**
    - both are **separated by space(s)**
    - you have to collect them in the Tuple and print them to the console

This input comes in the following format:

"\{\{**first name**\} \{**last name**\}\} \{**city**\}"

- The second line holds a **name** of a person and the **amount of hobbies** he has and comes in the following format:

"\{**name**\} \{**hobbies**\}"

- The last line will hold an **Integer** and a **Double** in the following format:

"\{**Integer**\} \{**Double**\}"

## Output

- Print the Tuple items in the following format: 

"\{**item1**\} **->** \{**item2**\}"

## Constraints

Use all the good practices we learned so far.

Create the class and with getters and setters for its class variables. 

The input will always be valid, there is no need to check it explicitly!

# Example
| **Input** | **Output** |
| --- | --- |
| Sofia Tucker London | Sofia Tucker -> London |
| john 2 | john -> 2 |
| 23 21.23212321 | 23 -> 21.23212321 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Sofia Tucker London
John 2
23 21.23212321
[/input]
[output]
Sofia Tucker -\> London
John -\> 2
23 -\> 21.23212321
[/output]
[/test]
[test]
[input]
Sean Paul NY
Adam 6
29 21.121212
[/input]
[output]
Sean Paul -\> NY
Adam -\> 6
29 -\> 21.121212
[/output]
[/test]
[test]
[input]
Steven Adams Madrid
Peter 9
21 21
[/input]
[output]
Steven Adams -\> Madrid
Peter -\> 9
21 -\> 21.0
[/output]
[/test]
[test]
[input]
Garet = Geneva
G 2999999
21 21
[/input]
[output]
Garet = -\> Geneva
G -\> 2999999
21 -\> 21.0
[/output]
[/test]
[test]
[input]
Charls King Westcastle
Shamsky 2999999
21 21.212
[/input]
[output]
Charls King -\> Westcastle
Shamsky -\> 2999999
21 -\> 21.212
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Threeuple
[code-task title="Threeuple" taskId="oop-basics-java-generics-Threeuple" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
The next task is to create another Tuple.

Create a Class **Threeuple**. 

Its name shows that the **Threeuple** should **hold three objects**.

It should also have getters and setters. 

You can extend the previous Tuple class.

## Input
The input consists of three lines.

- The first contains a person's name, city, and country of residence in the following format:

"\{\{**first name**\} \{**last name**\}\} \{**city**\} \{**country**\}"

- The second line holds a name, amount of hobbies, and a **Boolean variable** - happy (true) or not (false), in the following format:

"\{**name**\} \{**hobbies**\} \{**happy or not**\}"

- The last line will contain a name, a bank balance (double) and a bank name, formatted as follows:

"\{**name**\} \{**account balance**\} \{**bank name**\}"

## Output

- Print the Threeuples objects in the following format: 

"\{**firstElement**\} **->** \{**secondElement**\} **->** \{**thirdElement**\}"


## Examples


| **Input** | **Output** |
| --- | --- |
| Sofia Tucker London UK | Sofia Tucker -> London -> UK |
| John 2 happy | John -> 2 -> true |
| Peter 0.10 Expressbank | Peter -> 0.1 -> Expressbank |


| **Input** | **Output** |
| --- | --- |
| Kevin Johnson Sofia Bulgaria | Kevin Johnson -> Sofia -> Bulgaria |
| Mat 18 not | Mat -> 18 -> false |
| Adam 0.10 NGB | Adam -> 0.1 -> NGB |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Sofia Tucker London UK
John 2 happy
Peter 0.10 Expressbank
[/input]
[output]
Sofia Tucker -\> London -\> UK
John -\> 2 -\> true
Peter -\> 0.1 -\> Expressbank
[/output]
[/test]
[test open]
[input]
Kevin Johnson Sofia Bulgaria
Mat 18 not
Adam 0.10 NGB
[/input]
[output]
Kevin Johnson -\> Sofia -\> Bulgaria
Mat -\> 18 -\> false
Adam -\> 0.1 -\> NGB
[/output]
[/test]
[test]
[input]
John Johnson Muiami USA
John 3 happy
John 11.11 AmericanExpress
[/input]
[output]
John Johnson -\> Muiami -\> USA
John -\> 3 -\> true
John -\> 11.11 -\> AmericanExpress
[/output]
[/test]
[test]
[input]
K K Varna Bulgaria
K 18 not
K 0.00 DSK
[/input]
[output]
K K -\> Varna -\> Bulgaria
K -\> 18 -\> false
K -\> 0.0 -\> DSK
[/output]
[/test]
[test]
[input]
Aaa Aaa B B
AA 3333 veryHappy
AA 10.01 aaa
[/input]
[output]
Aaa Aaa -\> B -\> B
AA -\> 3333 -\> false
AA -\> 10.01 -\> aaa
[/output]
[/test]
[test]
[input]
A B C D
E 18 HAPPY
F 0.10 G
[/input]
[output]
A B -\> C -\> D
E -\> 18 -\> false
F -\> 0.1 -\> G
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
