[slide]
# Problem: Flowers
[code-task title="Flowers" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

A flower market offers **3 types of flowers: lilia**, **roses** and **tulips**. The prices depends on the season:

| **Season** | **Lilia** | **Rose** | **Tulip** |
| --- | --- | --- | --- |
| **Spring / Summer** | **2.00$** | **4.10$** | **2.50$** |
| **Autumn / Winter** | **3.75$** | **4.50$** | **4.15$** |

In the holidays the prices of all flowers **increase by 15%**. The market offers the following **discounts**:

- If you buy **7 or more tulips during the spring** - **5% of the price of the whole bouquet**
- If you buy **10 or more roses during the winter** - **10% of the price of the whole bouquet**
- If you buy **more than 20 flowers in total during ALL seasons - 20% of the price of the whole bouquet**

**The discounts are applied in the specified order above and can be superimposed!**

**All of the discounts should be applied after the increasing of the prices in holidays!**

The price of the bouquet arrangement is **always** 2 dollars. 

Write a program to **calculate** the price of a bouquet.

# Input
The input is read from the **console** and is exactly **5 lines**:
- Count of the bought **lilias** - integer in range \[0 ... 200\]
- Count of the bought **roses** - integer in range \[0 ... 200\]
- Count of the bought **tulips** - integer in range \[0 ... 200\]
- **Season** - \[Spring, Summer, Аutumn, Winter\]
- If the day is **holiday** - \[Y - yes / N - no\]

# Output
Print on the console a **single number** - the price of the flowers, **formatted to the second decimal point**.

# Example
| **Input** | | **Output** 
| --- | --- | --- |
| 2 | | 46.14 |
| 4 | | |
| 8 | | |
| Spring | | |
| Y | | |

## Comments
- **Price: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 $** 
- **Holiday** 40.40 + **15%** = 46.46 $
- **5% discount for more than 7 tulips during the spring** - 44.14
- In total the flowers are 20 or less - there **isn't a discount**
- **44.14 + 2 for arrangement = 46.14 $** 

[/task-description]
[tests]
[test]
[input]
2
4
8
Spring
Y
[/input]
[output]
46.14
[/output]
[/test]
[test]
[input]
3
10
9
Winter
N
[/input]
[output]
69.39
[/output]
[/test]
[test]
[input]
10
10
10
Autumn
N
[/input]
[output]
101.20
[/output]
[/test]
[test]
[input]
4
3
8
Winter
N
[/input]
[output]
63.70
[/output]
[/test]
[test]
[input]
3
14
0
Summer
N
[/input]
[output]
65.40
[/output]
[/test]
[test]
[input]
0
0
0
Summer
Y
[/input]
[output]
2.00
[/output]
[/test]
[test]
[input]
200
200
200
Winter
N
[/input]
[output]
1787.60
[/output]
[/test]
[test]
[input]
100
8
80
Spring
Y
[/input]
[output]
380.27
[/output]
[/test]
[test]
[input]
10
15
22
Winter
N
[/input]
[output]
143.34
[/output]
[/test]
[test]
[input]
33
33
33
Autumn
Y
[/input]
[output]
378.46
[/output]
[/test]
[test]
[input]
3
1
3
Winter
Y
[/input]
[output]
34.43
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]