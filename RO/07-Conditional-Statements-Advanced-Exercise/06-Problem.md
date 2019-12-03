[slide]
# Prolem: Fishing Boat
[code-task title="Fishing Boat" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Tony and his friends decided to rent a boat - the rent depends on the **season** and the **number** of fishermen.

**The price** on the basis of **season**:

- **Spring - 3000 $**
- **Summer and autumn - 4200 $**
- **Winter - 2600 $**

**The price** on the basis of **number** of fishermen uses **discount:**

- If the group is **up to 6 people (inclusive) -  10% discount**
- If the group members are in range \[7…11\] -  **15% discount**
- If the group is **12 or more people - 25% discount**

The fishermen use another **5 % discount if they are even number** except when it is **NOT** autumn – then they do **NOT** have additional discount.

Write a **program** to **calculate** whether the fishermen will gather **enough** money.

# Input
The input is consists of exactly **3 lines**:
- The **budget** of the group - real number in range \[1…8000\]
- **Season**  - String : "**Spring**", "**Summer**", "**Autumn**", "**Winter**"
- **Number** of fishermen - integer in range \[4…18\]

# Output
Print on the console a **single** line:
- If the budget **IS** enough: "Yes! You have \{money left\} dollars left."
- If the budget **IS NOT** enough: "Not enough money! You need \{money needed\} dollars."

**The prices should be formatted to the second decimal point.**

# Example
| **Input** | | **Output** 
| --- | --- | --- |
| 3000 | | Not enough money! You need 570.00 dollars. |
| Summer | | |
| 11 | | |

## Comments
- In the summer fishing costs 4200$,
- **11 fishermen take 15% discount** -> **4200 - 15% = 3570** $, their number is **odd** so they do **not** use **additional** discount.
- 3000 <= 3570, hence they need 570.00 $ more

# Example
| **Input** | | **Output** |
| --- | --- | --- |
| 2000 | | Yes! You have 50.00 dollars left. |
| Winter | | |
| 13 | | |

[/task-description]
[tests]
[test]
[input]
3000
Summer
11
[/input]
[output]
Not enough money! You need 570.00 dollars.
[/output]
[/test]
[test]
[input]
3600
Autumn
6
[/input]
[output]
Not enough money! You need 180.00 dollars.
[/output]
[/test]
[test]
[input]
2000
Winter
13
[/input]
[output]
Yes! You have 50.00 dollars left.
[/output]
[/test]
[test]
[input]
3780
Autumn
6
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
1949
Winter
13
[/input]
[output]
Not enough money! You need 1.00 dollars.
[/output]
[/test]
[test]
[input]
3570
Summer
11
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
15
[/input]
[output]
Yes! You have 1850.00 dollars left.
[/output]
[/test]
[test]
[input]
2860
Spring
4
[/input]
[output]
Yes! You have 295.00 dollars left.
[/output]
[/test]
[test]
[input]
2231
Winter
6
[/input]
[output]
Yes! You have 8.00 dollars left.
[/output]
[/test]
[test]
[input]
1390
Winter
4
[/input]
[output]
Not enough money! You need 833.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Winter
1
[/input]
[output]
Not enough money! You need 1340.00 dollars.
[/output]
[/test]
[test]
[input]
2500
Winter
1
[/input]
[output]
Yes! You have 160.00 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
1
[/input]
[output]
Yes! You have 1400.00 dollars left.
[/output]
[/test]
[test]
[input]
3800
Summer
10
[/input]
[output]
Yes! You have 408.50 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]