[slide]
# Problem: Back to the Past
[code-task title="Back to the Past" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Josh is 18 years old and receives a legacy that consists of **X amount of money and time machine**. 

He decided to return **until 1800**, but he did not know if the money would suffice to live without working.

Write a program that calculates whether Josh will have enough money to not have to work until a certain year. 
- Assuming that for every even (1800, 1802, etc.) year will spend **12 000 dollars**. 
- For each odd (1801, 1803, etc.) will spend 12 000 + 50 \* \[the years age in a given year\].

# Input
The input is read from the console and contains exactly 2 lines:
- Legacy money – real number in range \[1.00... 1,000,000.00\] 
- Year to be lived (inclusive) – integer in range \[1801... 1900\]

# Output
Print on the console a **single** line. The amount must be formatted to **two decimal digits**:
- If the money are enough:
    - "Yes! He will live a carefree life and will have \{N\} dollars left." – where N are the money that will remain
- If the money are **NOT** enough:
    - "He will need \{М\} dollars to survive." - where M are money he needs

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| 50000 | | Yes! He will live a carefree life and will have 13050.00 dollars left. |
| 1802 | | |

## Comments
- 1800 -> even year;
    - Josh spends **12000** dollars
    - 50000 – 12000 = **38000** dollars remain
- 1801 -> odd year 
    - he spends 12000 + 19 \* 50 = 12000 + 950 = 12950 dollars
    - 38000 – 12950 = 25050 dollars remain
- 1802 -> even year
    - he spends 12000 dollars
    - 25050 – 12000 = 13050 dollars remain

[/task-description]
[tests]
[test]
[input]
50000
1802
[/input]
[output]
Yes! He will live a carefree life and will have 13050.00 dollars left.
[/output]
[/test]
[test]
[input]
100000.15
1808
[/input]
[output]
He will need 12399.85 dollars to survive.
[/output]
[/test]
[test]
[input]
1000000
1860
[/input]
[output]
Yes! He will live a carefree life and will have 196000.00 dollars left.
[/output]
[/test]
[test]
[input]
1000000.42
1874
[/input]
[output]
He will need 1749.58 dollars to survive.
[/output]
[/test]
[test]
[input]
1.6
1800
[/input]
[output]
He will need 11998.40 dollars to survive.
[/output]
[/test]
[test]
[input]
12000
1800
[/input]
[output]
Yes! He will live a carefree life and will have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
234657.89
1816
[/input]
[output]
Yes! He will live a carefree life and will have 20257.89 dollars left.
[/output]
[/test]
[test]
[input]
50000.99
1803
[/input]
[output]
Yes! He will live a carefree life and will have 0.99 dollars left.
[/output]
[/test]
[test]
[input]
60043.5
1900
[/input]
[output]
He will need 1321956.50 dollars to survive.
[/output]
[/test]
[test]
[input]
234789.5
1970
[/input]
[output]
He will need 2254960.50 dollars to survive.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]