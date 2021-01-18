[slide]

# Homework

[/slide]

[slide hideTitle]
# Problem: Employees with Salary Above 35000
[code-task title="Problem: Employees with Salary Above 35000" taskId="3d980ba8-9edc-49a9-9396-bbb0ce0ff178" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

**Queries for SoftUni Database**

Download resources [here](https://mega.nz/file/SEIm3LQB#_udnGIpK6n2k7R90iEzFEeeSXgHVe10l-npgZC7fzpE)

Create stored procedure **usp_get_employees_salary_above_35000** that returns all employees' first and last names for whose **salary** is above 35000.

The result should be sorted by **first_name** then by **last_name** alphabetically, and id ascending.

Submit your query statement as Run skeleton, run queries & check DB in Judge

## Examples
| **first_name** | **last_name** |
| --- | --- |
| Amy | Alberts |
| Brian | Welcker |
| Dan | Wilson |
| … | … |
|  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Amy
Alberts
Brian
Welcker
Dan
Wilson
David
Bradley
Diane
Margheim
Dylan
Miller
Francois
Ajenstat
George
Denchev
Gigi
Matthew
James
Hamilton
Jean
Trenary
Ken
Sanchez
Laura
Norman
Martin
Kulov
Michael
Raheem
Michael
Sullivan
Roberto
Tamburello
Stephanie
Conroy
Stephen
Jiang
Svetlin
Nakov
Syed
Abbas
Terri
Duffy
Wendy
Kahn
[/input]
[output]
Amy
Alberts
Brian
Welcker
Dan
Wilson
David
Bradley
Diane
Margheim
Dylan
Miller
Francois
Ajenstat
George
Denchev
Gigi
Matthew
James
Hamilton
Jean
Trenary
Ken
Sanchez
Laura
Norman
Martin
Kulov
Michael
Raheem
Michael
Sullivan
Roberto
Tamburello
Stephanie
Conroy
Stephen
Jiang
Svetlin
Nakov
Syed
Abbas
Terri
Duffy
Wendy
Kahn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Employees with Salary Above Number
[code-task title="Problem: Employees with Salary Above Number" taskId="25aceebc-21cd-4583-9a36-7f1f5a137255" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create stored procedure **usp_get_employees_salary_above** that accept a **decimal number** (with precision, **4 digits** after the decimal point) as parameter and 

return **all employee's first and last names** whose salary is **above or equal** to the given number. The result should be sorted by first_name then by last_name 

**alphabetically and id ascending**.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **first_name** | **last_name** |
| --- | --- |
| Amy | Alberts |
| Brian | Welcker |
| Dylan | Miller |
| … | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Amy
Alberts
Brian
Welcker
Dylan
Miller
James
Hamilton
Jean
Trenary
Ken
Sanchez
Laura
Norman
Stephen
Jiang
Syed
Abbas
Terri
Duffy
[/input]
[output]
Amy
Alberts
Brian
Welcker
Dylan
Miller
James
Hamilton
Jean
Trenary
Ken
Sanchez
Laura
Norman
Stephen
Jiang
Syed
Abbas
Terri
Duffy
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Town Names Starting With
[code-task title="Problem: Town Names Starting With" taskId="33d3d168-1b98-4083-b4cf-c10cc153a71c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a stored procedure **usp_get_towns_starting_with** that **accept string as parameter** and returns **all town names starting with that string**.

The result should be sorted by **town_name** alphabetically.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **town_name** |
| --- |
| Bellevue |
| Berlin  |
| Bordeaux |
| Bothell |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Bellevue
Berlin
Bordeaux
Bothell
[/input]
[output]
Bellevue
Berlin
Bordeaux
Bothell
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Employees from Town
[code-task title="Problem: Employees from Town" taskId="af1b67b2-1739-4054-a5ad-eae65de40393" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a stored procedure **usp_get_employees_from_town** that accepts **town_name** as parameter and return the

**employees first and last name that live in the given town**.

The result should be sorted by **first_name** then by **last_name** alphabetically and **id ascending**.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **first_name** | **last_name** |
| --- | --- |
| George | Denchev |
| Martin | Kulov |
| Svetlin | Nakov |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George
Denchev
Martin
Kulov
Svetlin
Nakov
[/input]
[output]
George
Denchev
Martin
Kulov
Svetlin
Nakov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Salary Level Function
[code-task title="Problem: Salary Level Function" taskId="5b4b94cc-4d6b-4f4b-9969-83e7aa0d1a9b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a function **ufn_get_salary_level** that receives **salary of an employee** and returns the **level of the salary**.

- If salary is **< 30000** return "**Low**"

- If salary is **between 30000 and 50000** (**inclusive**) return "**Average**"

- If salary is **> 50000** return "**High**"

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.


## Examples
| **salary** | **salary_Level** |
| --- | --- |
| 13500.00 | Low |
| 43300.00 | Average |
| 125500.00 | High |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
13500.00
Low
30000.00
Average
43300.00
Average
50000.00
Average
125500.00
High
[/input]
[output]
13500.00
Low
30000.00
Average
43300.00
Average
50000.00
Average
125500.00
High
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Define Function
[code-task title="Problem: Define Function" taskId="7e538e04-a2db-4ef3-b426-01be74a1a217" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Define a function **ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50))**

that returns **true** or **false** depending on that if the word is a comprised of the given set of letters.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **set_of_letters** | **word** | **result** |
| --- | --- | --- |
| oistmiahf | Sofia | 1 |
| oistmiahf | halves | 0 |
| bobr | Rob | 1 |
| pppp | Guy | 0 |
|  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
a
aaa
bobr
Rob
oistmiahf
Sofia
[/input]
[output]
a
aaa
bobr
Rob
oistmiahf
Sofia
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find Full Name
[code-task title="Problem: Find Full Name" taskId="cbfdd3f5-50ed-40de-85b7-a88f59618e2d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Queries for Bank Database**

You are given a database schema with tables:

-	**account_holders(id (PK), first_name, last_name, ssn)**
and 

-	**accounts(id (PK), account_holder_id (FK), balance)**.

Write a stored procedure **usp_get_holders_full_name** that selects the full names of all people.

The result should be sorted by **full_name** alphabetically and **id ascending**. 

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **full_name** |
| --- |
| Bjorn Sweden |
| Jimmy Henderson |
| Kim Novac |
| … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Bjorn Sweden
Jimmy Henderson
Kim Novac
Kiril Petrov
Michka Tsekova
Monika Miteva
Petar Kirilov
Petko Petkov Junior
Steve Stevenson
Susan Cane
Zlatina Pateva
Zlatko Zlatyov
[/input]
[output]
Bjorn Sweden
Jimmy Henderson
Kim Novac
Kiril Petrov
Michka Tsekova
Monika Miteva
Petar Kirilov
Petko Petkov Junior
Steve Stevenson
Susan Cane
Zlatina Pateva
Zlatko Zlatyov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: People with Balance Higher Than
[code-task title="Problem: People with Balance Higher Than" taskId="417e450f-a5b3-46f0-b182-dd901a6582aa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Your task is to create a stored procedure **usp_get_holders_with_balance_higher_than**

that accepts a **number as a parameter** and returns all **people who have more money in total of all their accounts** than the **supplied number**. 

The result should be sorted by **account_holders.id** ascending.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.


## Examples

Supplied number for that example is 7000.

| **Input** | **Output** |
| --- | --- |
| Susan | Cane |
| Petar | Kirilov |
| Zlatina | Pateva |
| … | … |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Susan
Cane
Petar
Kirilov
Zlatina
Pateva
Monika
Miteva
Zlatko
Zlatyov
Petko
Petkov Junior
[/input]
[output]
Susan
Cane
Petar
Kirilov
Zlatina
Pateva
Monika
Miteva
Zlatko
Zlatyov
Petko
Petkov Junior
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Future Value Function
[code-task title="Problem: Future Value Function" taskId="4f568d16-a0b8-47e6-9cfa-3052c6e20813" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Your task is to create a function **ufn_calculate_future_value**

that accepts as parameters – sum (with precision, **4 digits** after the decimal point), 

**yearly interest rate (double)** and **number of years(int).** 

It should calculate and return the **future value of the initial sum**. 

The result from the function must be **decimal, with percision 4**.

Using the following formula:

[image assetsSrc="Database-Programabillity-Homework.png" /]

•	**I** – Initial sum

•	**R** – Yearly interest rate

•	**T** – Number of years

Submit your query statement as Run skeleton, **run queries & check DB in Judge.**


## Examples
| **Input** | **Output** |
| --- | --- |
| Initial sum: 1000 | 7593.7500 |
| Yearly Interest rate: 50% |  |
| years: 5 |  |
| ufn_calculate_future_value(1000, 0.5, 5) |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
0.00
0.05
10
0.0000
1000.00
0.10
5
1610.5100
1000.55
0.08
5
1470.1362
1500.00
0.04
2
1622.4000
1750.21
0.02
1
1785.2142
1925.98
0.05
3
2229.5626
2500.98
0.05
0
2500.9800
3000.98
0.00
10
3000.9800
[/input]
[output]
0.00
0.05
10
0.0000
1000.00
0.10
5
1610.5100
1000.55
0.08
5
1470.1362
1500.00
0.04
2
1622.4000
1750.21
0.02
1
1785.2142
1925.98
0.05
3
2229.5626
2500.98
0.05
0
2500.9800
3000.98
0.00
10
3000.9800
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Calculating Interest
[code-task title="Problem: Calculating Interest" taskId="455cfe3b-7706-442b-9f65-65477acb638f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Your task is to create a stored procedure **usp_calculate_future_value_for_account**

that accepts as parameters – **id** of account and **interest** rate.

The procedure uses the function from the previous problem to give an interest to a person's account **for 5 years**, 

along with information about his/her **account id, first name**, 

**last name and current balance** as it is shown in the example below. 

It should take the **account_id** and the **interest_rate** as parameters. 

Interest rate should have precision up to 0.0001, same as the calculated balance after 5 years.

**Be extremely careful to achieve the desired precision**!

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **account_id** | **first_name** | **last_name** | **current_balance** | **balance_in_5_years** |
| --- | --- | --- | --- | --- |
| 1 | Susan | Cane | 123.1200 | 198.2860 |
|  |  |  |  |  |





[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
Susan
Cane
123.1200
198.2860
[/input]
[output]
1
Susan
Cane
123.1200
198.2860
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Deposit Money
[code-task title="Problem: Deposit Money" taskId="d057e32a-c408-459a-bd08-e7517219b64f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write stored procedure **usp_transfer_money(from_account_id, to_account_id, amount)**

**that transfers money from one account to another**. 

Consider cases when one of the **account_ids** is not valid, 

the amount of **money is negative number**, 

**outgoing balance** is enough or transferring **from/to one and the same account**. 

Make sure that the whole procedure **passes without errors** and **if error occurs make no change in the database**. 

Make sure to guarantee exact results working with precision up to fourth sign after decimal point.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.


## Examples

Here is the result for **from_account_id = 1, to_account_id = 2 and money_amount = 10**.

| **account_id** | **account_holder_id** | **balance** |
| --- | --- | --- |
| 1 | 1 | 133.1200 |
| 2 | 3 | 4364.2300 |
|  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
1
133.1200
[/input]
[output]
1
1
133.1200
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Withdraw Money
[code-task title="Problem: Withdraw Money" taskId="33db8bb2-409a-4df2-8d8e-1fd70be9b83f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Add stored procedures **usp_withdraw_money(account_id, money_amount)** that operate in transactions. 

Make sure to guarantee withdraw is done only when balance is enough and **money_amount** is valid positive number.

**Work with precision up to fourth sign after decimal point**.

The procedure should produce exact results working with the specified precision.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.
.

## Examples

Here is the result for **account_id = 1 and money_amount = 10**.

| **account_id** | **account_holder_id** | **balance** |
| --- | --- | --- |
| 1 | 1 | 123.1200 |
|  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
1
113.1200
[/input]
[output]
1
1
113.1200
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Log Accounts Trigger
[code-task title="Problem: Log Accounts Trigger" taskId="a40ba60b-a469-4558-b769-ebc89bec281d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create another table – **logs(log_id, account_id, old_sum, new_sum)**.

Add a **trigger** to the **accounts** table that enters a new entry into the **logs** table every time the sum on an account changes.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **log_id** | **account_id** | **old_sum** | **new_sum** |
| --- | --- | --- | --- |
| 1 | 1 | 123.12 | 113.12 |
| 2 | 1 | 145.43 | 155.43 |
|  |  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
1
113.1200
2
3
4364.2300
[/input]
[output]
1
1
113.1200
2
3
4364.2300
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Emails Trigger
[code-task title="Problem: Emails Trigger" taskId="59c5af35-e0e5-47b1-a93b-e438798ef35c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create another table – **notification_emails(id, recipient, subject, body)**. 

Add a trigger to logs table to **create new email whenever new record is inserted in logs table**. 

The following data is required to be filled for each email:

•	**recipient – account_id**

•	**subject** – "Balance change for account: **{account_id}**

•	**body** - "On **{date (current date)}** your balance was changed from **{old}** to **{new}**.

Submit your query statement as Run skeleton, **run queries & check DB in Judge**.

## Examples
| **id** | **recipient** | **subject** | **body** |
| --- | --- | --- | --- |
| 1 | 1 | Balance change for account: 1 | On Sep 15 2016 at 11:44:06 AM your balance was changed from 133 to 143. |
| ... | ... | ... | ... |
|  |  |  |  |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
logs
account_id
log_id
new_sum
old_sum
log_id
1
1
123.1200
133.1200
2
1
133.1200
146.4320
3
2
4354.2300
4789.6530
4
3
6546543.2300
7201197.5530
5
4
15345.6400
16880.2040
6
5
36521.2000
40173.3200
7
6
5436.3400
5979.9740
8
7
565649.2000
622214.1200
9
8
999453.5000
1099398.8500
10
9
5349758.2300
5884734.0530
11
10
543.3000
597.6300
12
11
10.2000
11.2200
13
12
245656.2300
270221.8530
14
13
5435.3200
5978.8520
15
14
1.2300
1.3530
16
15
0.1900
0.2090
17
16
5345.3400
5879.8740
18
17
76653.2000
84318.5200
19
18
235469.8900
259016.8790
[/input]
[output]
logs
account_id
log_id
new_sum
old_sum
log_id
1
1
123.1200
133.1200
2
1
133.1200
146.4320
3
2
4354.2300
4789.6530
4
3
6546543.2300
7201197.5530
5
4
15345.6400
16880.2040
6
5
36521.2000
40173.3200
7
6
5436.3400
5979.9740
8
7
565649.2000
622214.1200
9
8
999453.5000
1099398.8500
10
9
5349758.2300
5884734.0530
11
10
543.3000
597.6300
12
11
10.2000
11.2200
13
12
245656.2300
270221.8530
14
13
5435.3200
5978.8520
15
14
1.2300
1.3530
16
15
0.1900
0.2090
17
16
5345.3400
5879.8740
18
17
76653.2000
84318.5200
19
18
235469.8900
259016.8790
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Homework Results
[tasks-results/]

[/slide]