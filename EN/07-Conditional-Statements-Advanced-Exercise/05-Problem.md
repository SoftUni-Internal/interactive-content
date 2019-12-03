[slide]
# Problem: Summer Outfit
[code-task title="Summer Outfit" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
It's summer with changeable weather and Victor needs your help. 

Write a program that recommends Victor which clothes to choose **according to the part of day and degrees (Celsius)**. 

Your friend has different plans for every part of the day with different outfits – check the **table** below.

| **Part of Day / Degrees** | Morning | Afternoon | Evening |
| --- | --- | --- | --- |
| 10 <= deg <= 18 | Outfit: Sweatshirt | Outfit: Shirt | Outfit: Shirt |
| | Shoes = Sneakers | Shoes: Moccasins | Shoes: Moccasins |
| 18 < deg <= 24 | Outfit: Shirt | Outfit: T-Shirt | Outfit: Shirt |
| | Shoes = Moccasins | Shoes: Sandals | Shoes: Moccasins |
| deg >= 25 | Outfit: T-Shirt | Outfit: Swim Suit | Outfit: Shirt |
| | Shoes: Sandals | Shoes: Barefoot | Shoes: Moccasins |

# Input
**Read two lines of input:**
- **Degrees** - an integer in range \[10…42\]
- **Part of day** - text - possibilities: "Morning", "Afternoon", "Evening"

# Output
- Print on the console a **single** line:
    - It's \{degrees\} degrees, get your \{outfit\} and \{shoes\}."

# Example
| **Input** | | **Output** 
| --- | --- | --- |
| 16 | | It\'s 16 degrees, get your Sweatshirt and Sneakers. |
| Morning | | |

[/task-description]
[tests]
[test]
[input]
16
Morning
[/input]
[output]
It's 16 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test]
[input]
22
Afternoon
[/input]
[output]
It's 22 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
28
Evening
[/input]
[output]
It's 28 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Afternoon
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
24
Morning
[/input]
[output]
It's 24 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
32
Evening
[/input]
[output]
It's 32 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Evening
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
25
Afternoon
[/input]
[output]
It's 25 degrees, get your Swim Suit and Barefoot.
[/output]
[/test]
[test]
[input]
25
Morning
[/input]
[output]
It's 25 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
10
Morning
[/input]
[output]
It's 10 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test]
[input]
24
Afternoon
[/input]
[output]
It's 24 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
21
Morning
[/input]
[output]
It's 21 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
11
Evening
[/input]
[output]
It's 11 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]