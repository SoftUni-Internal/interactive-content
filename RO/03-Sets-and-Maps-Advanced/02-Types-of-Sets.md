

[slide]

# Types of Sets

**HashSet**

The **HashSet** class implements the **Set** interface, backed by a **Hash Table**.

It makes **no guarantees** about **the sequence of the elements** when you iterate them.

The **HashSet** class offers **constant** time performance for the basic operations - `add()`, `remove()`, `contains()` and `size()`.

- Initialization:
```java
Set<String> hash = new HashSet<String>();
```
- Adding Elements 
```java live
Set<Integer> hash = new HashSet<>();

List<Integer> data = Arrays.asList(40,20,30,10,50,10,10,10);

hash.addAll(data);

System.out.println(hash);
```

**TreeSet**

The elements are ordered using their **natural ordering**.

The TreeSet provides guaranteed **log(n)** time cost for the basic operations - `add()`, `remove()` and `contains()`.

**Null values** are **not accepted** by the TreeSet.

- Initialization:
```java
Set<String> tree = new TreeSet<>();
```

- Adding Elements 
```java live
Set<Integer> tree = new TreeSet<>();

List<Integer> data = Arrays.asList(40,20,30,10,50,10,10,10);

tree.addAll(data);

System.out.println(tree);
```

**LinkedHashSet**

A **LinkedHashSet** is an **ordered version of HashSet** that maintains a doubly-linked List across all elements.

A **LinkedHashSet** provides **constant** time performance for the basic operations - `add()`, `contains()` and `remove()`.

A LinkedHashSet allows maximum **one null element**.

- Initialization:
```java
Set<String> linkedHashSet = new LinkedHashSet<>();
```

- Adding Elements 
```java live
Set<Integer> linkedHashSet = new LinkedHashSet<>();

List<Integer> data = Arrays.asList(40,20,30,10,50,10,10,10);

linkedHashSet.addAll(data);

System.out.println(linkedHashSet);
```
[/slide]


[slide]
# How to iterate over the Set

- Using `Iterator<E>` 

Iterators are used in Collection framework in Java to retrieve elements **one by one**.

You can see how to use it for iterating over the set in the following example:
```java live
Set<Integer> hash = new HashSet<>(Arrays.asList(40,20,30,10,50));

// creating an Iterator object by calling iterator() method present in Collection Interface
Iterator<Integer> iterator = hash.iterator();

// checking the next element availability
while (iterator.hasNext()){

    // moving cursor to the next element and returning it
    int currentElement = iterator.next();
    System.out.println(currentElement);
}
```

- Using `For-each` loop

```java live
Set<Integer> hash = new HashSet<>(Arrays.asList(40,20,30,10,50));

for (Integer element : hash) {
    System.out.println(element);
}
```
- Using `ForEach()` - method

```java live
 Set<Integer> hash = new HashSet<>(Arrays.asList(40,20,30,10,50));

 hash.forEach(System.out::println);
```

[/slide]


[slide]
# Problem: Parking Lot
[code-task title="Parking Lot" taskId="3a94dfc6-efac-41fb-a81a-1e09ddb41e79" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that:
 - Records car number for every car that enter in the parking lot
 - Removes car number when the car goes out
## Input
The input will be string in format [direction, carNumber]
The input ends with string "**END**"
## Output
Print the output with all car numbers which are in parking lot 

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

[slide]
# Solution: Parking Lot
[code-task title="Parking Lot" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        LinkedHashSet<String> parkingLot = new LinkedHashSet<>();

        String input = sc.nextLine();
        while (!input.equals("END")) {

            String[] reminder = input.split(", ");
            if (reminder[0].equals("IN")) {
                parkingLot.add(reminder[1]);
            } else {
                parkingLot.remove(reminder[1]);
            }
            input = sc.nextLine();
        }

        if (parkingLot.isEmpty()){
            System.out.println("Parking Lot is Empty");
        }else{
            parkingLot.forEach(System.out::println);
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that:
 - Records car number for every car that enter in the parking lot
 - Removes car number when the car goes out
## Input
The input will be string in format [direction, carNumber]
The input ends with string "**END**"
## Output
Print the output with all car numbers which are in parking lot 

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

[slide]
# Problem: SoftUni Party
[code-task title="SoftUni Party" taskId="9731adb3-e6c2-449b-9e28-79d29de7caa4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
There is a party in SoftUni. Many guests are invited, and they are two types: **VIP** and **regular**.

When guest comes, you have to check if he/she exist in any of two reservation lists.

All reservation numbers will be with 8 chars.

All VIP numbers start with digit.

## Input
- Until **PARTY** command, you will receive guest invitations.
- Until **END** command, you will receive a second list with guests that actually cаme to the party.
## Output 
- On the first line print the count of the guests who didn't come to the party.
- On the next lines print all guests, who didn't come to the party (**VIP must be first**).




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

[slide]
# Solution: SoftUni Party
[code-task title="SoftUni Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Set<String> vip = new TreeSet<>();
        Set<String> regular = new TreeSet<>();
        
        String guestId = scanner.nextLine();

        while (!guestId.equals("PARTY")) {
            if (Character.isDigit(guestId.charAt(0))) {
                vip.add(guestId);
            } else {
                regular.add(guestId);
            }
            guestId = scanner.nextLine();
        }

        guestId = scanner.nextLine();

        while (!guestId.equals("END")) {

            vip.remove(guestId);
            regular.remove(guestId);

            guestId = scanner.nextLine();
        }
        System.out.println(vip.size() + regular.size());
        vip.forEach(System.out::println);
        regular.forEach(System.out::println);
    }
}
```
[/code-editor]
[task-description]
## Description
There is a party in SoftUni. Many guests are invited, and they are two types: **VIP** and **regular**.

When guest comes, you have to check if he/she exist in any of two reservation lists.

All reservation numbers will be with 8 chars.

All VIP numbers start with digit.

## Input
- Until **PARTY** command, you will receive guest invitations.
- Until **END** command, you will receive a second list with guests that actually cаme to the party.
## Output 
- On the first line print the count of the guests who didn't come to the party.
- On the next lines print all guests, who didn't come to the party (**VIP must be first**).



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

[slide]
# Problem: Card Game
[code-task title=""War" - Number Game" taskId="dbb3fd50-530f-4843-88f4-ad596cfd8960" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that:
  - Reads 20 numbers for both players, separated with **single space**
  - Every player can **hold only unique numbers** 
Each Round both players get the top number from their own deck.

Player with the bigger number get both numbers and add it on the bottom of his own sequence.

Game ends after 50 rounds or if any player lose all of his numbers

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

[slide]
# Solution: Card Game
[code-task title=""War" - Number Game" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        LinkedHashSet<Integer> firstPlayer = getPlayerNumbers(scanner);
        LinkedHashSet<Integer> secondPlayer = getPlayerNumbers(scanner);

        for (int i = 0; i < 50; i++) {
            if (firstPlayer.isEmpty() || secondPlayer.isEmpty()) {
                break;
            }

            int firstNumber = firstPlayer.iterator().next();
            firstPlayer.remove(firstNumber);

            int secondNumber = secondPlayer.iterator().next();
            secondPlayer.remove(secondNumber);

            if (firstNumber > secondNumber) {
                firstPlayer.add(firstNumber);
                firstPlayer.add(secondNumber);
            } else if (secondNumber > firstNumber) {
                secondPlayer.add(firstNumber);
                secondPlayer.add(secondNumber);
            }
        }

        if(firstPlayer.size() > secondPlayer.size()) {
            System.out.println("First player win!");
        } else if (secondPlayer.size() > firstPlayer.size()){
            System.out.println("Second player win!");
        } else {
            System.out.println("Draw!");
        }
    }

    private static LinkedHashSet<Integer> getPlayerNumbers (Scanner scanner) {
        LinkedHashSet<Integer> reminder = new LinkedHashSet<>();
        String line = scanner.nextLine();
        String[] input = line.split(" ");

        for (int i = 0; i < input.length; i++) {
            reminder.add(Integer.parseInt(input[i]));
        }
        return reminder;
    }     
}
```
[/code-editor]
[task-description]
## Description
Write a program that:
  - Reads 20 numbers for both players, separated with **single space**
  - Every player can **hold only unique numbers** 
Each Round both players get the top number from their own deck.

Player with the bigger number get both numbers and add it on the bottom of his own sequence.

Game ends after 50 rounds or if any player lose all of his numbers

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
