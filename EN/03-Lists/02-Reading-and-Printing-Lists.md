# Reading and Printing Lists

[slide hideTitle]
# Reading Lists 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-10-11-reading-lists-from-the-console-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Reading a list using a **for-loop**:

```java 
Scanner scanner = new Scanner(System.in);

// reading size of the list
int n = Integer.parseInt(scanner.nextLine()); 
        
// initializing an empty list of Integers
List<Integer> list = new ArrayList<>(); 

// creating a for loop with the size of the list
for (int i = 0; i < n; i++) { 

    // reading the element from the console        
    int number = Integer.parseInt(scanner.nextLine()); 

    // adding the element to the list        
    list.add(number); 
}
```

[/slide]

[slide hideTitle]
# Reading from a Single Line

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-12-reading-values-from-a-single-line-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


You can read a list as a single line from the console.

Imagine we have an input that consists of several **Integer** values, separated by spaces. (10 20 30 40 50)

``` java
// input: 10 20 30 40 50
String values = scanner.nextLine();   

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to a list
```
[/slide]

[slide hideTitle]
# Printing Lists 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-13-printitng-lists-on-the-console-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Printing a list using a **for-loop**:

```java live
List<String> months = new ArrayList<>(
    Arrays.asList("January", "February", "March"));

for (int index = 0; index < months.size(); index++) {
   System.out.print(months.get(index) + " ");
}
```
- Printing a list using a **foreach-loop**:

```java live
List<String> numbers = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

for (String number : numbers) {
   System.out.print(number + " ");
}
```
- Printing a list using a "String.join(…)"**:

```java live
List<String> list = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

System.out.println(String.join(" ", list));
```
[/slide]

[slide hideTitle]
# Problem with Solution: Sum Adjacent Equal Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-14-problem-and-solution-print-adjacent-equal-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Adjacent Equal Numbers" taskId="java-1-fund-Lists-lab-Sum-Adjacent-Equal-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a program to **sum all of the adjacent equal numbers** in a list of decimal numbers, starting from **left to right**.

- After two numbers are summed, the result could be equal to some of its neighbors and should be summed as well (see the examples below)

- Always sum the leftmost two equal neighbors (if several couples of equal neighbors are available)

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 3 3 6 1 | 12 1 | **3 3** 6 1 -> **6 6** 1 -> 12 1 |
| 8 2 2 4 8 16 | 16 8 16 | 8 **2 2** 4 8 16 -> 8**4 4** 8 16 -> **8 8** 8 16 -> 16 8 16 |
| 0.1 0.1 5 -5 | 0.2 5 -5 | **0.1 0.1** 5 -5 -> 0.2 5 -5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 3 6 1
[/input]
[output]
12 1
[/output]
[/test]
[test open]
[input]
8 2 2 4 8 16
[/input]
[output]
16 8 16
[/output]
[/test]
[test open]
[input]
0.1 0.1 5 -5
[/input]
[output]
0.2 5 -5
[/output]
[/test]
[test]
[input]
5 4 2 1 1 4
[/input]
[output]
5 8 4
[/output]
[/test]
[test]
[input]
0.5 0.5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
2 1
[/output]
[/test]
[test]
[input]
1 1 2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 1 1 1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Gauss' Trick

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-17-problem-and-solution-gauss-trick-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Gauss' Trick" taskId="java-fund-1-Lists-lab-Gauss'-Trick" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that sums all numbers in a list in the following order: 
- **first** + **last**, **first + 1** + **last - 1**, **first + 2** + **last - 2**, … **first + n**, **last - n**


[image assetsSrc="lists-problem-gaus-trick(1).png" /]

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 2 3 4 5 | 6 6 3 |
| 1 2 3 4 | 5 5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5
[/input]
[output]
6 6 3
[/output]
[/test]
[test open]
[input]
1 2 3 4
[/input]
[output]
5 5
[/output]
[/test]
[test]
[input]
1 1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
4 2
[/output]
[/test]
[test]
[input]
10 20 30 40
[/input]
[output]
50 50
[/output]
[/test]
[test]
[input]
10 20 30 40 50
[/input]
[output]
60 60 30
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Merging Lists

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/EN/interactive-java-fundamntals-lists-19-problem-merging-and-solution-lists-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Merging Lists" taskId="java-fund-1-Lists-lab-Merging-Lists" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are going to receive **two lists** of **numbers**.

Create a list that **contains** the **numbers** from **both of the lists**.

The **first element** should be from the **first list**, **the second** from the **second list**, and so on.

If **the length** of the two lists **is not equal**, just **add the remaining** elements **at the end of the list**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 5 2 43 12 3 54 10 23 | 3 76 5 5 2 34 43 2 12 4 3 12 54 10 23 |
| 76 5 34 2 4 12 |  |

| **Input** | **Output** |
| --- | --- |
| 76 5 34 2 4 12 | 76 3 5 5 34 2 2 43 4 12 12 3 54 10 23 |
| 3 5 2 43 12 3 54 10 23 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 5 2 43 12 3 54 10 23
76 5 34 2 4 12
[/input]
[output]
3 76 5 5 2 34 43 2 12 4 3 12 54 10 23
[/output]
[/test]
[test open]
[input]
76 5 34 2 4 12
3 5 2 43 12 3 54 10 23
[/input]
[output]
76 3 5 5 34 2 2 43 4 12 12 3 54 10 23
[/output]
[/test]
[test]
[input]
1 2 3
4 5 6
[/input]
[output]
1 4 2 5 3 6
[/output]
[/test]
[test]
[input]
1 2 3
4 5
[/input]
[output]
1 4 2 5 3
[/output]
[/test]
[test]
[input]
1 2
3 4 5
[/input]
[output]
1 3 2 4 5
[/output]
[/test]
[test]
[input]
1 1 1
2 2 2
[/input]
[output]
1 2 1 2 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
1 6 2 3 4 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
