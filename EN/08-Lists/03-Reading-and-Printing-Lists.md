# Reading and Printing Lists

[slide]
# Video

[vimeo-video startTimeInSeconds="3799" endTimeInSeconds="7434"]
[stream language="EN" videoId="421781852" default /]
[stream language="RO" videoId="431758884"  /]
[/video-vimeo]

[/slide]

[slide]
# Reading Lists 
- Reading a List using `for` loop and `scanner.nextLine()`
```java 
Scanner scanner = new Scanner(System.in);

    // reading the List size 
int n = Integer.parseInt(scanner.nextLine()); 
        
    // initializing empty List of Integers
List<Integer> list = new ArrayList<>(); 

    // creating a for loop with the size of the List
for (int i = 0; i < n; i++) { 

    // read the element from the console        
    int number = Integer.parseInt(scanner.nextLine()); 

    // add the element to the List        
    list.add(number); 
}
```
- Reading List values from a **single line** using `String.split()`
```java
String values = scanner.nextLine();    // input: 10 20 30 40 50

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to List
```
[/slide]

[slide]
# Printing Lists 
- Printing a list using a `for` loop
```java live
List<String> numbers = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

for (int index = 0; index < numbers.size(); index++) {
   System.out.print(numbers.get(index) + " ");
}
```
- Printing a list using `for-each` loop
```java live
List<String> numbers = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

for (String number : numbers) {
   System.out.print(number + " ");
}
```
- Printing a list using a `String.join(…)`
```java live
List<String> list = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

System.out.println(String.join(" ", list));
```
[/slide]

[slide hideTitle]
# Problem: Sum Adjacent Equal Numbers
[code-task title="Sum Adjacent Equal Numbers" taskId="java-fund-13-Lists-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a program to **sum all adjacent equal numbers** in a list of decimal numbers, starting from **left to right**.

- After two numbers are summed, the obtained result could be equal to some of its neighbors and should be summed as well (see the examples below).

- Always sum the leftmost two equal neighbors (if several couples of equal neighbors are available).

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 3 3 6 1 | 12 1 | **3 3** 6 1 -> **6 6** 1 -> 12 1 |
|  |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 8 2 2 4 8 16 | 16 8 16 | 8 **2 2** 4 8 16 -> 8**4 4** 8 16 -> **8 8** 8 16 -> 16 8 16 |
|  |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
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
# Solution: Sum Adjacent Equal Numbers
[code-task title="Sum Adjacent Equal Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.text.DecimalFormat;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Double> numbers = Arrays.stream(sc.nextLine().split(" "))
                .map(Double::parseDouble).collect(Collectors.toList());

        for (int i = 0; i < numbers.size() - 1; i++)

            if (numbers.get(i).equals(numbers.get(i + 1))) {

                numbers.set(i, numbers.get(i) + numbers.get(i + 1));
                numbers.remove(i + 1);
                i = -1;
            }

        String output = joinElementsByDelimiter(numbers, " ");
        System.out.println(output);


    }

    private static String joinElementsByDelimiter(List<Double> items, String delimiter) {
        String output = "";

        for (Double item : items){
            output += (new DecimalFormat("0.#").format(item) + delimiter);
        }

        return output;

    }
}
```
[/code-editor]
[task-description]
## Description

Write a program to **sum all adjacent equal numbers** in a list of decimal numbers, starting from **left to right**.

- After two numbers are summed, the obtained result could be equal to some of its neighbors and should be summed as well (see the examples below).

- Always sum the leftmost two equal neighbors (if several couples of equal neighbors are available).

## Examples
| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 3 3 6 1 | 12 1 | **3 3** 6 1 -> **6 6** 1 -> 12 1 |
|  |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 8 2 2 4 8 16 | 16 8 16 | 8 **2 2** 4 8 16 -> 8**4 4** 8 16 -> **8 8** 8 16 -> 16 8 16 |
|  |  |  |

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
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
5 4 2 1 1 4
[/input]
[output]
5 8 4
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
3 3 6 1
[/input]
[output]
12 1
[/output]
[/test]
[test]
[input]
0.1 0.1 5 -5
[/input]
[output]
0.2 5 -5
[/output]
[/test]
[test]
[input]
8 2 2 4 8 16
[/input]
[output]
16 8 16
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
# Problem: Gauss' Trick
[code-task title="Gauss' Trick" taskId="java-fund-13-Lists-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that sums all numbers in a list in the following order: 
- **first** + **last**, **first + 1** + **last - 1**, **first + 2** + **last - 2**, … **first + n**, **last - n**.


[image assetsSrc="lists-problem-gaus-trick(1).png" /]

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 2 3 4 5 | 6 6 3 |
|  |  |

| **Input** | **Output** |
| --- | --- |
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
# Solution: Gauss' Trick
[code-task title="Gauss' Trick"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::parseInt).collect(Collectors.toList());

        int size = numbers.size();

        for (int i = 0; i < size / 2; i++) {

            numbers.set(i, numbers.get(i) + numbers.get(numbers.size() - 1));

            numbers.remove(numbers.size() - 1);
        }
        System.out.println(numbers.toString().replaceAll("[\\[\\],]", ""));
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that sums all numbers in a list in the following order: 
- **first** + **last**, **first + 1** + **last - 1**, **first + 2** + **last - 2**, … **first + n**, **last - n**.


[image assetsSrc="lists-problem-gaus-trick(1).png" /]

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 2 3 4 5 | 6 6 3 |
|  |  |

| **Input** | **Output** |
| --- | --- |
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
# Problem: Merging Lists
[code-task title="Merging Lists" taskId="java-fund-13-Lists-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are going to receive **two lists** with **numbers**.

Create a result list which **contains** the **numbers** from **both of the lists**.

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


[slide hideTitle]
# Solution: Merging Lists
[code-task title="Merging Lists"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> nums1 = Arrays
                .stream(scanner.nextLine()
                .split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        List<Integer> nums2 = Arrays
                .stream(scanner.nextLine()
                .split(" ")).map(Integer::parseInt)
                .collect(Collectors.toList());

        List<Integer> resultNums = new ArrayList<>();

        for (int i = 0; i < Math.min(nums1.size(), nums2.size()); i++) {
            resultNums.add(nums1.get(i));
            resultNums.add(nums2.get(i));
        }

        if (nums1.size() > nums2.size()){
            
            resultNums.addAll(getRemainingElements(nums1, nums2));
        }
        else if (nums2.size() > nums1.size()){

            resultNums.addAll(getRemainingElements(nums2, nums1));
        }
        System.out.println(resultNums.toString().replaceAll("[\\[\\],]", ""));

    }

    public static List<Integer> getRemainingElements(List<Integer> longerList, List<Integer> shorterList) {
        List<Integer> nums = new ArrayList<>();
        
        for (int i = shorterList.size(); i < longerList.size(); i++){

            nums.add(longerList.get(i));
        }
        return nums;
    }
}
```
[/code-editor]
[task-description]
## Description
You are going to receive **two lists** with **numbers**.

Create a result list which **contains** the **numbers** from **both of the lists**.

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
