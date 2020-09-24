[slide]
# Problem 04
[code-task title="Problem-04" taskId="27-07-04" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You have been hired by a cinema to write a program that calculates whether a movie showing will be enough so that the cinema hall is filled and how much money will the profit be. 

You are going to receive the count of seats in the hall and on the next lines until the command "Movie time!", how many people enter the hall. 

The price for one ticket is 5$. 

If the current count of people that enter the hall can be divided by 3 without remainder, there is 5$. discount of the total price.

If there are not enough free seats for the people that want to enter, it means that the there are no more seats left and the program must stop reading input from the console. 

If more people than the available seats try to enter the hall, it is considered full and the program should stop receiving input.

## Input
Read from the console:
- First line – hall's capacity – whole number in the range [50... 150]

On each of the next lines until the command "Movie time!":
- Count of people entering the cinema - whole number in the range [1… 15]

## Output
First, print on the console one line:
- If you have received the command "Movie time!": "There are \{seats left\} seats left in the cinema."
- If there are no more free seats in the hall: "The cinema is full."
- Afterwards, print: "Cinema income - \{income\}$"

## Example
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 60 | There are 6 seats left in the cinema. | If we receive the hall's capacity – 60 seats.|
| 10 | Cinema income - 255$ | On the next line we receive the people that have entered the hall – 10. |
| 6 | | The price that they will pay is 10 * 5 = 50. |
| 3 | | After that we receive that 6 people enter the hall and 6 can be divided by 3, so they pay 5$ less. |
| 20 | | We continue until we receive the command "Movie time!" and then we print a suitable output. |
| 15 | | |
| Movie time! | | |
[/task-description]
[code-io /]
[tests]
[test]
[input]
140
15
15
10
5
6
7
8
9
Movie time!
[/input]
[output]
There are 65 seats left in the cinema.
Cinema income - 355$
[/output]
[/test]
[test]
[input]
150
15
15
15
15
15
10
10
10
Movie time!
[/input]
[output]
There are 45 seats left in the cinema.
Cinema income - 500$
[/output]
[/test]
[test]
[input]
50
10
15
15
10
9
[/input]
[output]
The cinema is full.
Cinema income - 240$
[/output]
[/test]
[test]
[input]
100
15
15
15
15
15
15
15
[/input]
[output]
The cinema is full.
Cinema income - 420$
[/output]
[/test]
[test]
[input]
120
10
10
10
10
10
10
10
10
10
10
10
10
Movie time!
[/input]
[output]
There are 0 seats left in the cinema.
Cinema income - 600$
[/output]
[/test]
[test]
[input]
50
15
15
10
6
3
3
[/input]
[output]
The cinema is full.
Cinema income - 225$
[/output]
[/test]
[test]
[input]
100
15
3
6
9
12
15
10
Movie time!
[/input]
[output]
There are 30 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[test]
[input]
50
15
15
10
9
9
[/input]
[output]
The cinema is full.
Cinema income - 230$
[/output]
[/test]
[test]
[input]
120
10
15
3
6
9
12
15
Movie time!
[/input]
[output]
There are 50 seats left in the cinema.
Cinema income - 320$
[/output]
[/test]
[/tests]
[/code-task]
[/slide]