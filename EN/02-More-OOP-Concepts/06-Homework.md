# Homework

[slide hideTitle]
# Problem: Card Suit
[code-task title="Problem: Card Suit" taskId="04ac25bf-6fe9-42d8-9ad8-a48006d966dc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create an **enumeration type** that has as its constants the **four suits** of a deck of playing cards (CLUBS, DIAMONDS, HEARTS, SPADES). 

Iterate over the values of the enumeration type and print all **ordinal values** and **names**. 

## Submit

Submit .zip

## Examples
| **Input** | **Output** |
| --- | --- |
| Card Suits | Card Suits: |
|  | Ordinal value: 0; Name value: CLUBS |
|  | Ordinal value: 1; Name value: DIAMONDS |
|  | Ordinal value: 2; Name value: HEARTS |
|  | Ordinal value: 3; Name value: SPADES |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Card Suits
[/input]
[output]
Card Suits:
Ordinal value: 0; Name value: CLUBS
Ordinal value: 1; Name value: DIAMONDS
Ordinal value: 2; Name value: HEARTS
Ordinal value: 3; Name value: SPADES
[/output]
[/test]
[test]
[input]
Card Suits
[/input]
[output]
Card Suits:
Ordinal value: 0; Name value: CLUBS
Ordinal value: 1; Name value: DIAMONDS
Ordinal value: 2; Name value: HEARTS
Ordinal value: 3; Name value: SPADES
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Card Rank
[code-task title="Problem: Card Rank" taskId="da1794c7-0978-48ab-aff1-1ea88646d618" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create an **enumeration type** that has as its constants the **fourteen ranks** of a deck of playing cards (ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING). 

Iterate over the values of the enumeration type and print all ordinal values and names.

## Submit
Submit .zip

## Examples
| **Input** | **Output** |
| --- | --- |
| Card Ranks | Card Ranks: |
|  | Ordinal value: 0; Name value: ACE |
|  | Ordinal value: 1; Name value: TWO |
|  | Ordinal value: 2; Name value: THREE |
|  | Ordinal value: 3; Name value: FOUR |
|  | Ordinal value: 4; Name value: FIVE |
|  | Ordinal value: 5; Name value: SIX |
|  | Ordinal value: 6; Name value: SEVEN |
|  | Ordinal value: 7; Name value: EIGHT |
|  | Ordinal value: 8; Name value: NINE |
|  | Ordinal value: 9; Name value: TEN |
|  | Ordinal value: 10; Name value: JACK |
|  | Ordinal value: 11; Name value: QUEEN |
|  | Ordinal value: 12; Name value: KING |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Card Ranks
[/input]
[output]
Card Ranks:
Ordinal value: 0; Name value: ACE
Ordinal value: 1; Name value: TWO
Ordinal value: 2; Name value: THREE
Ordinal value: 3; Name value: FOUR
Ordinal value: 4; Name value: FIVE
Ordinal value: 5; Name value: SIX
Ordinal value: 6; Name value: SEVEN
Ordinal value: 7; Name value: EIGHT
Ordinal value: 8; Name value: NINE
Ordinal value: 9; Name value: TEN
Ordinal value: 10; Name value: JACK
Ordinal value: 11; Name value: QUEEN
Ordinal value: 12; Name value: KING
[/output]
[/test]
[test]
[input]
Card Ranks
[/input]
[output]
Card Ranks:
Ordinal value: 0; Name value: ACE
Ordinal value: 1; Name value: TWO
Ordinal value: 2; Name value: THREE
Ordinal value: 3; Name value: FOUR
Ordinal value: 4; Name value: FIVE
Ordinal value: 5; Name value: SIX
Ordinal value: 6; Name value: SEVEN
Ordinal value: 7; Name value: EIGHT
Ordinal value: 8; Name value: NINE
Ordinal value: 9; Name value: TEN
Ordinal value: 10; Name value: JACK
Ordinal value: 11; Name value: QUEEN
Ordinal value: 12; Name value: KING
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Cards with Power
[code-task title="Problem: Cards with Power" taskId="9722be01-e6d0-4388-ac97-d77309ab909a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that generates a **deck of cards** **(class Card)** which have a power. The power of a card is calculated by **adding** the power of its rank plus the power of its suit.

**Rank powers** are as follows: (ACE - 14, TWO - 2, THREE - 3, FOUR - 4, FIVE - 5, SIX - 6, SEVEN - 7, EIGHT - 8, NINE - 9, TEN - 10, JACK - 11, QUEEN - 12, KING - 13).

**Suit powers** are as follows: (CLUBS - 0, DIAMONDS - 13, HEARTS - 26, SPADES - 39).

## Input
You will get a command consisting of **two** lines. On the **first** line you will receive the Rank of the card and on the **second** line you will get the suit of the card.

## Output
Print the output in the format **"Card name: ACE of SPADES; Card power: 53".**

## Note
Try using the enumeration types you have created in the previous problems but extending them with constructors and methods. Try using the `**Enum.valueOf()**`.

## Submit
Submit .zip


## Examples
| **Input** | **Output** |
| --- | --- |
| TWO | Card name: TWO of CLUBS; Card power: 2 |
| CLUBS |  |

| **Input** | **Output** |
| --- | --- |
| ACE | Card name: ACE of SPADES; Card power: 53 |
| SPADES |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
TWO
CLUBS
[/input]
[output]
Card name: TWO of CLUBS; Card power: 2
[/output]
[/test]
[test open]
[input]
ACE
SPADES
[/input]
[output]
Card name: ACE of SPADES; Card power: 53
[/output]
[/test]
[test]
[input]
ACE
CLUBS
[/input]
[output]
Card name: ACE of CLUBS; Card power: 14
[/output]
[/test]
[test]
[input]
KING
CLUBS
[/input]
[output]
Card name: KING of CLUBS; Card power: 13
[/output]
[/test]
[test]
[input]
TEN
HEARTS
[/input]
[output]
Card name: TEN of HEARTS; Card power: 36
[/output]
[/test]
[test]
[input]
TWO
DIAMONDS
[/input]
[output]
Card name: TWO of DIAMONDS; Card power: 15
[/output]
[/test]
[/tests]
[/code-task]
[/slide]