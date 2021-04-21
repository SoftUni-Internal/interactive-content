[slide hideTitle]
# Problem: Flower Wreaths
[code-task title="Flower Wreaths" taskId="java-advanced-exam-Flower-Wreaths" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

To participate in a flowers wreath competition you have to make at least 5 flower wreaths.

You will be given **two sequences of integers**, **representing roses and lilies**. 

You need to start making wreaths **knowing that one wreath needs 15 flowers**. 

Your goal is to make **at least 5 flower wreaths**. 

You will start crafting from the **last lilies** and the **first roses**. 

If the sum of their values is **equal** to **15** – **create one wreath** and **remove** them.

If the sum is **bigger than 15**, **decrease** the value of the **lilies by 2**. 
 
If the sum is **less than 15**, you have to store them for later and remove them. 
 
You need to **stop** combining when you have **no more roses or lilies**. 

In the end, if you have **any stored flowers**, you should make as many wreaths as you can with them.

## Input

- On the **first line**, you will receive the integers representing the **lilies**, **separated** by "**,** ".

- On the **second line**, you will receive the integers representing the **roses**, **separated** by "**,** ".

## Output

- Print whether you have succeeded making **at least 5 wreaths**: 
  - **"You made it, you are going to the competition with** \{**count of wreaths**\} **wreaths!"**
  - **"You didn't make it, you need** \{**wreaths needed**\} **wreaths more!"**

## Constraints

- All of the given numbers will be valid integers in range \[0 ... 120\]. 

- There will not be a case where a lily or a rose will be a negative number

## Examples

|**Input**|**Output**|
|---|---|
|10, 15, 2, 7, 9, 13|You made it, you are going to the competition with 5 wreaths!|
|2, 10, 8, 12, 0, 5||




|**Input**|**Output**|
|---|---|
|10, 5, 3, 7, 8|You didn't make it, you need 1 wreaths more!|
|5, 10, 8, 7, 6||

[hints]
[hint]
We start with the last **lilies** (8) and the first **roses** (5):
**8** + **5** is equal to **13**.
13 is **smaller** than 15, which means we have to **store** their sum for later and **remove** them.
[/hint] 
[hint]
Next, we have `7 + 10 = 17`

We **decrease** the lilies by **2**:
`5 + 10 = 15`

15 is **equal** to 15, so we create **one wreath**.
[/hint] 
[hint]
Third, we have `3 + 8 = 11` 
**11** \< **15** -\> we store their sum for later and remove them.
[/hint] 
[hint]
Fourth, we have `5 + 7 = 12`
We store their sum for later and remove them.
[/hint] 
[hint]
After that, we have `10 + 6 = 16` -\> 16 \> 15
We **decrease** the lilies by **2** -> `8 + 6 = 14`
Since 14 is less than 15, we **store** their sum for later and **remove** them.
[/hint] 
[hint]
And last we have `10 + 5 = 15`, we create one more wreath and **stop** mixing because there are no more flowers.
[/hint] 
[hint]
We stop crafting because we do not have any flowers left.
We have 1 wreath and 50 stored flowers. 
We create 3 more wreaths because `3 * 15 = 45` -\> `50 – 45 = 5` -> **5** < **15**.
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
10, 15, 2, 7, 9, 13
2, 10, 8, 12, 0, 5
[/input]
[output]
You made it, you are going to the competition with 5 wreaths!
[/output]
[/test]
[test open]
[input]
10, 5, 3, 7, 8
5, 10, 8, 7, 6
[/input]
[output]
You didn't make it, you need 1 wreaths more!
[/output]
[/test]
[test]
[input]
10, 5, 7, 8, 15, 14
8, 7, 5, 10, 9
[/input]
[output]
You didn't make it, you need 1 wreaths more!
[/output]
[/test]
[test]
[input]
15, 20, 14, 8, 5
0, 0, 5, 6, 3
[/input]
[output]
You didn't make it, you need 2 wreaths more!
[/output]
[/test]
[test]
[input]
14, 14, 14, 14, 14
1, 1, 1, 1, 1
[/input]
[output]
You made it, you are going to the competition with 5 wreaths!
[/output]
[/test]
[test]
[input]
5, 6, 7, 8
1, 2, 3, 4
[/input]
[output]
You didn't make it, you need 3 wreaths more!
[/output]
[/test]
[test]
[input]
15, 15, 15, 15, 15
0, 0, 0, 0, 0
[/input]
[output]
You made it, you are going to the competition with 5 wreaths!
[/output]
[/test]
[test]
[input]
10, 5, 8, 6, 3
2, 3, 6, 4
[/input]
[output]
You didn't make it, you need 3 wreaths more!
[/output]
[/test]
[test]
[input]
0, 0, 0, 0, 0
0, 0, 0, 0, 0
[/input]
[output]
You didn't make it, you need 5 wreaths more!
[/output]
[/test]
[test]
[input]
14, 5, 7
1, 5, 4
[/input]
[output]
You didn't make it, you need 3 wreaths more!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
