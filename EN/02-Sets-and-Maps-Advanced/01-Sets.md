# Sets

[slide hideTitle]
# What are Sets in Java?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-3-4-Sets-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Java **Collection Framework** contains numerous **interfaces**, one of which is the **Set** interface, which provides the features of the mathematical set in Java.

The **Set** interface extends the **Collection** interface.

**Interfaces** in Java represent a **behavior**, without specifying any sort of **implementations**.

The interface's job is to **specify the existence of certain methods**, with a particular behavior, and any class can implement them.

**Interfaces** are not in the **scope of ttheir course**, hence why we are going to learn more in-depth about them in the Java OOP course.

**There are three different types of Sets:**
- `HashSet<E>`
- `TreeSet<E>`
- `LinkedHashSet<E>`

**The main features of the Sets are:**
- Duplicate elements are not allowed
- Elements are not stored in order
- Offers very fast performance
- Can have only a single null value at most
- Unlike List and Arrays, Set does **NOT** support indexing or positioning of its elements

**Based on the features of the Sets, it is better to use them when:**
- You want to store elements distinctly, without duplication, or store unique elements
- You want faster performance and don't care about the order of the elements

**For example**, you can use a Set to store:
- **Unique integer numbers**
- **Cards randomly in a card game**
- **Numbers in random order**, etc

You can find out more about Interfaces [here](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html#:~:text=Interfaces%20form%20a%20contract%20between,the%20class%20will%20successfully%20compile.).

[/slide]

[slide hideTitle]

# HashSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-7-Hashset-Add-Remove-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **HashSet** class implements the **Set** interface, backed by a **Hash Table**.

It makes **no guarantees** about **the sequence of the elements** when you iterate over them.

The **HashSet** class offers **constant** time performance for the basic operations - `add()`, `remove()`, `contains()` and `size()`.

- Initialization:

```java
Set<String> hash = new HashSet<String>();
```

- `add()`: adds an element into the `HashSet`, Returns `true` if the element is successfully added

If the set already contains the element, it remains unchanged and returns `false`.

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
System.out.println(hash.add("George"));

System.out.println(hash);

System.out.println(hash.add("Alice"));
```

- `remove()`: searches for the specified element and returns `true` if the specified element exists in the `HashSet`. Otherwise, it returns `false`

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.remove("Alice"));

System.out.println(hash);

System.out.println(hash.remove("Ana"));
```


- `contains()`: returns `true` if the element exists in the `HashSet`, otherwise, it returns `false`

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.contains("Alice"));
System.out.println(hash.contains("Ana"));
```

- `size()`: returns how many elements (size) exists in the `HashSet`:

```java live
Set<String> hash = new HashSet<>();

hash.add("Peter");
hash.add("Alice");
hash.add("George");

System.out.println(hash.size());

```


[/slide]

[slide hideTitle]
# TreeSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-9-TreeSet-Add-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The elements are ordered using their **natural ordering**.

The `TreeSet` guarantees **log(n)** time cost for the basic operations - `add()`, `remove()` and `contains()`.

**Null values** are **not accepted** by the `TreeSet`.

- Initialization:
```java
Set<String> tree = new TreeSet<>();
```

- `add()`: adds the element to the `TreeSet` and returns `true` if the element is successfully added

If the set already contains the element, the `TreeSet` remains unchanged and returns `false`.

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree);
```


- `remove()`: searches for the specified element and returns `true` if it exists in the `TreeSet`. Otherwise, it returns `false`

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree.remove("Alice"));
System.out.println(tree.remove("Ana"));

System.out.println(tree);
```

- `contains()`: returns `true` if the element exists in the `TreeSet`, otherwise, it returns `false`

```java live
Set<String> tree = new TreeSet<>();

tree.add("Peter");
tree.add("Alice");
tree.add("George");

System.out.println(tree.contains("Alice"));
System.out.println(tree.contains("Ana"));
```
[/slide]

[slide hideTitle]
# LinkedHashSet

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-10-LinkedHashSet-Add-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **LinkedHashSet** is an **ordered version of the HashSet** that maintains a doubly-linked List across all of its elements.

A **LinkedHashSet** provides a **constant** time performance for the basic operations - `add()`, `remove()`, `contains()`.

A LinkedHashSet allows a maximum of **only one null element**.

- Initialization:

```java
Set<String> linkedHashSet = new LinkedHashSet<>();
```

- `add()`: adds the element to into the `LinkedHashSet`, and returns `true` if the element is successfully added

If the set already contains the element, the set remains unchanged and returns `false`.

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");

System.out.println(linkedHashSet.add("George"));

System.out.println(linkedHashSet);

System.out.println(linkedHashSet.add("Alice"));
```


- `remove()`: searches for the specified element and returns `true` if the specified element exists in the `LinkedHashSet`, otherwise returns `false`

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");
linkedHashSet.add("George");

System.out.println(linkedHashSet.remove("Alice"));
System.out.println(linkedHashSet.remove("Ana"));

System.out.println(linkedHashSet);

```

- `contains()`: returns `true` if the element exists in the `LinkedHashSet`, otherwise, it returns `false`

```java live
Set<String> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add("Peter");
linkedHashSet.add("Alice");
linkedHashSet.add("George");

System.out.println(linkedHashSet.contains("Alice"));
System.out.println(linkedHashSet.contains("Ana"));
```

[/slide]


[slide hideTitle]
# Problem with Solution: Parking Lot

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-11-Problem-and-solution-Parking-Lot-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Parking Lot" taskId="java-advanced-sets-and-maps-advanced-lab-Parking-Lot" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:
 - Records a car number for every car that enters the parking lot
 - Removes the specific car number when the car goes out

## Input
The input will be a string in the format [**direction, carNumber**].
The input lines end with the string `END`.

## Output
Print the output with all of the car numbers which are in the parking lot.
If the parking lot is empty print: `Parking Lot is Empty`.

## Examples
| **Input** | **Output** |
| --- | --- |
| IN, CA2844AA | CA9999TT |
| IN, CA1234TA | CA2844AA |
| OUT, CA2844AA | CA9876HH |
| IN, CA9999TT | CA2822UU |
| IN, CA2866HI |  |
| OUT, CA1234TA |  |
| IN, CA2844AA |  |
| OUT, CA2866HI |  |
| IN, CA9876HH |  |
| IN, CA2822UU |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| IN, CA2844AA | Parking Lot is Empty |
| IN, CA1234TA |  |
| OUT, CA2844AA |  |
| OUT, CA1234TA |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
IN, CA2844AA
IN, CA1234TA
OUT, CA2844AA
IN, CA9999TT
IN, CA2866HI
OUT, CA1234TA
IN, CA2844AA
OUT, CA2866HI
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA9999TT
CA2844AA
CA9876HH
CA2822UU
[/output]
[/test]
[test open]
[input]
IN, CA2844AA
IN, CA1234TA
OUT, CA2844AA
OUT, CA1234TA
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA2844AA
CA1234TA
CA9999TT
CA2866HI
CA9876HH
CA2822UU
[/output]
[/test]
[test]
[input]
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
IN, CA2844AA
OUT, CA2844AA
END
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
OUT, CA2844AA
OUT, CA1234TA
OUT, CA9999TT
OUT, CA2866HI
OUT, CA2844AA
OUT, CA9876HH
END
[/input]
[output]
CA2822UU
[/output]
[/test]
[test]
[input]
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
IN, CA2844AA
IN, CA1234TA
IN, CA9999TT
IN, CA2866HI
IN, CA2844AA
IN, CA9876HH
IN, CA2822UU
END
[/input]
[output]
CA2844AA
CA1234TA
CA9999TT
CA2866HI
CA9876HH
CA2822UU
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: SoftUni Party

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-12-13-Problem-and-Solution-Softuni-Party-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="SoftUni Party" taskId="java-advanced-sets-and-maps-advanced-lab-SoftUni-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
There is a party. Many guests are invited, and they are two types: **VIP** and **Regular**.

When a guest comes, you have to check **if he/she exists** in any of the **two reservation lists**.

All **reservation numbers** will be with **8 chars**.

All VIP **reservation numbers** start with a **digit**.

## Input

- Until the `PARTY` command, you will receive guest invitations

- Until the `END` command, you will receive a second list of guests that came to the party

## Output 

- On the first line, print the number of guests who did not come to the party

- On the next lines, print all of the guests, who did not come to the party (**VIPs must be first**)

## Examples
| **Input** | **Output** |
| --- | --- |
| 7IK9Yo0h | 2 |
| 9NoBUajQ | 7IK9Yo0h |
| Ce8vwPmE | tSzE5t0p |
| SVQXQCbc |  |
| tSzE5t0p |  |
| PARTY |  |
| 9NoBUajQ |  |
| Ce8vwPmE |  |
| SVQXQCbc |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| m8rfQBvl | 2 |
| fc1oZCE0 | MDzcM9ZK |
| UgffRkOn | xys2FYzn |
| 7ugX7bm0 |  |
| 9CQBGUeJ |  |
| 2FQZT3uC |  |
| dziNz78I |  |
| mdSGyQCJ |  |
| LjcVpmDL |  |
| fPXNHpm1 |  |
| HTTbwRmM |  |
| B5yTkMQi |  |
| 8N0FThqG |  |
| xys2FYzn |  |
| MDzcM9ZK |  |
| PARTY |  |
| 2FQZT3uC |  |
| dziNz78I |  |
| mdSGyQCJ |  |
| LjcVpmDL |  |
| fPXNHpm1 |  |
| HTTbwRmM |  |
| B5yTkMQi |  |
| 8N0FThqG |  |
| m8rfQBvl |  |
| fc1oZCE0 |  |
| UgffRkOn |  |
| 7ugX7bm0 |  |
| 9CQBGUeJ |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
END
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test open]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
END
[/input]
[output]
2
MDzcM9ZK
xys2FYzn
[/output]
[/test]
[test]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
PARTY
END
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
m8rfQBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
END
[/input]
[output]
15
2FQZT3uC
7ugX7bm0
8N0FThqG
9CQBGUeJ
B5yTkMQi
HTTbwRmM
LjcVpmDL
MDzcM9ZK
UgffRkOn
dziNz78I
fPXNHpm1
fc1oZCE0
m8rfQBvl
mdSGyQCJ
xys2FYzn
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBPajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBPajQ
Ce8vwPmE
SVQXQCbc
END
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
m8rfSBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
xys2FYzn
MDzcM9ZK
PARTY
2FQZT3uC
dziNz78I
mdSGyQCJ
LjcVpmDL
fPXNHpm1
HTTbwRmM
B5yTkMQi
8N0FThqG
m8rfSBvl
fc1oZCE0
UgffRkOn
7ugX7bm0
9CQBGUeJ
END
[/input]
[output]
2
MDzcM9ZK
xys2FYzn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem with Solution: Card Game

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/04-Sets-and-Maps-Advanced/EN/interactive-java-advanced-sets-and-maps-15-Solution-Card-Game-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Card Game" taskId="java-advanced-sets-and-maps-advanced-lab-Card-Game" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:
  - Reads 20 numbers for both of the players, separated by a **single space**
  - Every player **can only hold unique numbers**
Each round, both players draw the top number from their decks.

The player, with the bigger number, gets both numbers and adds them to the bottom of their own deck.

The game ends after 50 rounds or if any player loses all of their numbers.

## Examples
| **Input** | **Output** |
| --- | --- |
| 26 58 16 92 44 65 65 77 57 23 71 57 7 52 85 44 32 70 38 23 | Second player win! |
| 43 95 33 51 62 93 57 55 0 31 32 95 68 34 30 51 37 32 11 97 |  |

| **Input** | **Output** |
| --- | --- |
| 74 78 82 42 19 39 29 69 20 42 31 77 57 36 76 26 4 9 83 42 | First player win! |
| 15 43 80 71 22 88 78 35 28 30 46 41 76 51 76 18 14 52 47 38 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
26 58 16 92 44 65 65 77 57 23 71 57 7 52 85 44 32 70 38 23 
43 95 33 51 62 93 57 55 0 31 32 95 68 34 30 51 37 32 11 97
[/input]
[output]
Second player win!
[/output]
[/test]
[test open]
[input]
74 78 82 42 19 39 29 69 20 42 31 77 57 36 76 26 4 9 83 42
15 43 80 71 22 88 78 35 28 30 46 41 76 51 76 18 14 52 47 38
[/input]
[output]
First player win!
[/output]
[/test]
[test]
[input]
47 41 79 33 54 30 77 67 27 52 80 41 76 90 22 42 70 84 46 92 
42 15 96 41 37 11 29 10 94 69 98 60 22 13 0 68 84 58 76 15
[/input]
[output]
First player win!
[/output]
[/test]
[test]
[input]
30 73 24 85 5 45 87 87 59 43 16 47 99 25 43 18 31 4 77 57 
81 63 52 85 72 63 35 46 81 29 20 3 63 44 77 51 21 41 13 30
[/input]
[output]
First player win!
[/output]
[/test]
[test]
[input]
43 76 30 64 49 5 33 41 48 68 59 14 62 87 4 90 89 79 52 75 
9 8 90 60 74 8 28 64 22 49 27 22 65 36 65 37 2 68 95 6
[/input]
[output]
First player win!
[/output]
[/test]
[test]
[input]
91 0 91 45 0 46 0 78 9 50 63 45 6 88 90 79 83 21 25 72 
67 60 93 9 8 88 0 86 13 68 32 80 38 87 5 17 89 26 88 8
[/input]
[output]
First player win!
[/output]
[/test]
[test]
[input]
44 86 55 21 74 65 80 67 5 29 66 8 24 35 67 4 34 11 43 78 
44 5 31 38 2 64 50 94 52 85 75 84 34 51 79 43 13 96 38 25
[/input]
[output]
Second player win!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

