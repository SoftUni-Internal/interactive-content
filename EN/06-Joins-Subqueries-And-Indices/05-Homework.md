[slide hideTitle]

# Homework

_Download the resources needed for this lesson from here:_ [Mega.nz](https://mega.nz/file/uJZhjCBT#Z0mRwfZ5GJQorDXWjlKEEkah57NG4S9o6tmpqELcPz8)

[/slide]

[slide hideTitle]

# Problem: Employee Address

[code-task title="Problem: Employee Address" taskId="071513b8-8dee-4e02-8edd-b02d268979c1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **job_title**
- **address_id**
- **address_text**

Return the first 5 rows sorted by **address_id** in ascending order.

## Examples

| **employee_id** | **job_title**           | **address_id** | **address_text**   |
| --------------- | ----------------------- | -------------- | ------------------ |
| 142             | Production Technician   | 1              | 108 Lakeside Court |
| 30              | Human Resources Manager | 2              | 1341 Prospect St   |
| ...             | ...                     | ...            | ...                |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
142
Production Technician
1
108 Lakeside Court
30
Human Resources Manager
2
1343 Prospect St
183
Production Technician
3
1648 Eastgate Lane
68
Production Technician
4
2284 Azalea Avenue
69
Production Technician
5
2947 Vine Lane
[/input]
[output]
142
Production Technician
1
108 Lakeside Court
30
Human Resources Manager
2
1343 Prospect St
183
Production Technician
3
1648 Eastgate Lane
68
Production Technician
4
2284 Azalea Avenue
69
Production Technician
5
2947 Vine Lane
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Addresses with Towns

[code-task title="Problem: Addresses with Towns" taskId="999e1848-e1c3-4648-989c-55dbb63651bb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **first_name**
- **last_name**
- **town**
- **address_text**

Sort the result by **first_name** in ascending order then by **last_name**. 

Select the first **five** employees.

## Examples

| **first_name** | **last_name** | **town**      | **address_text**   |
| -------------- | ------------- | ------------- | ------------------ |
| A.Scott        | Wright        | Newport Hills | 1400 Gate Drive    |
| Alan           | Brewer        | Kenmore       | 8192 Seagull Court |
| ...            | ...           | ...           | ...                |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A. Scott
Wright
Newport Hills
1400 Gate Drive
Alan
Brewer
Kenmore
8192 Seagull Court
Alejandro
McGuel
Seattle
7842 Ygnacio Valley Road
Alex
Nayberg
Newport Hills
4350 Minute Dr.
Alice
Ciccu
Snohomish
3114 Notre Dame Ave.
[/input]
[output]
A. Scott
Wright
Newport Hills
1400 Gate Drive
Alan
Brewer
Kenmore
8192 Seagull Court
Alejandro
McGuel
Seattle
7842 Ygnacio Valley Road
Alex
Nayberg
Newport Hills
4350 Minute Dr.
Alice
Ciccu
Snohomish
3114 Notre Dame Ave.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Sales Employee

[code-task title="Problem: Sales Employee" taskId="d1a131c9-6f9f-45c9-8326-7e5c3896daba" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**
- **last_name**
- **department_name**

Sort the result by **employee_id in descending order**. Select only employees from the "**Sales**" department.

## Examples

| **employee_id** | **first_name** | **last_name** | **department_name** |
| --------------- | -------------- | ------------- | ------------------- |
| 290             | Lynn           | Tsoflias      | Sales               |
| 289             | Rachel         | Valdez        | Sales               |
| ...             | ...            | ...           | ...                 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
290
Lynn
Tsoflias
Sales
289
Rachel
Valdez
Sales
288
Syed
Abbas
Sales
287
Tete
Mensa-Annan
Sales
286
Ranjit
Varkey Chudukatil
Sales
285
Jae
Pak
Sales
284
Amy
Alberts
Sales
283
David
Campbell
Sales
282
Jose
Saraiva
Sales
281
Shu
Ito
Sales
280
Pamela
Ansman-Wolfe
Sales
279
Tsvi
Reiter
Sales
278
Garrett
Vargas
Sales
277
Jillian
Carson
Sales
276
Linda
Mitchell
Sales
275
Michael
Blythe
Sales
273
Brian
Welcker
Sales
268
Stephen
Jiang
Sales
[/input]
[output]
290
Lynn
Tsoflias
Sales
289
Rachel
Valdez
Sales
288
Syed
Abbas
Sales
287
Tete
Mensa-Annan
Sales
286
Ranjit
Varkey Chudukatil
Sales
285
Jae
Pak
Sales
284
Amy
Alberts
Sales
283
David
Campbell
Sales
282
Jose
Saraiva
Sales
281
Shu
Ito
Sales
280
Pamela
Ansman-Wolfe
Sales
279
Tsvi
Reiter
Sales
278
Garrett
Vargas
Sales
277
Jillian
Carson
Sales
276
Linda
Mitchell
Sales
275
Michael
Blythe
Sales
273
Brian
Welcker
Sales
268
Stephen
Jiang
Sales
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employee Departments

[code-task title="Problem: Employee Departments" taskId="cfdf1e48-f9b9-4e22-9222-cd0bfe26ac85" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**
- **salary**
- **department_name**

Filter only employees with **salary** higher than 15000. Return the first 5 rows sorted by **department_id in descending order**.

## Examples

| **employee_id** | **first_name** | **last_name** | **department_name** |
| --------------- | -------------- | ------------- | ------------------- |
| 109             | Ken            | 125500.00     | Executive           |
| 140             | Laura          | 60100.00      | Executive           |
| ...             | ...            | ...           | ...                 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
109
Ken
125500.0000
Executive
140
Laura
60100.0000
Executive
85
Pilar
19200.0000
Shipping and Receiving
49
Christian
20400.0000
Facilities and Maintenance
218
Gary
24000.0000
Facilities and Maintenance
[/input]
[output]
109
Ken
125500.0000
Executive
140
Laura
60100.0000
Executive
85
Pilar
19200.0000
Shipping and Receiving
49
Christian
20400.0000
Facilities and Maintenance
218
Gary
24000.0000
Facilities and Maintenance
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employees Without Project

[code-task title="Problem: Employees Without Project" taskId="803fa41a-cec2-474a-9de8-4196dcc37349" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**

Filter only **employees** without a project. Return the first 3 rows sorted by **employee_id in descending order**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
293
George
292
Martin
291
Svetlin
[/input]
[output]
293
George
292
Martin
291
Svetlin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employees Hired After

[code-task title="Problem: Employees Hired After" taskId="f22d5d59-ac53-4814-a393-aa4e512211b6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **first_name**
- **last_name**
- **hire_date**
- **dept_name**

Filter only employees hired after 1/1/1999 and from either the "**Sales**" or the "**Finance**" **departments**. Sort the result by **hire_date (ascending)**.

## Examples

| **first_name** | **last_name** | **hire_date**       | **dept_name** |
| -------------- | ------------- | ------------------- | ------------- |
| Debora         | Poe           | 2001-01-19 00:00:00 | Finance       |
| Wendy          | Kahn          | 2001-01-26 00:00:00 | Finance       |
| ...            | ...           | ...                 | ...           |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Deborah
Poe
2001-01-19 00:00:00
Finance
Wendy
Kahn
2001-01-26 00:00:00
Finance
Candy
Spoon
2001-02-07 00:00:00
Finance
David
Barber
2001-02-13 00:00:00
Finance
Bryan
Walton
2001-02-25 00:00:00
Finance
David
Liu
2001-03-03 00:00:00
Finance
Dragan
Tomic
2001-03-15 00:00:00
Finance
Barbara
Moreland
2001-03-22 00:00:00
Finance
Janet
Sheperdigian
2001-04-02 00:00:00
Finance
Mike
Seamans
2001-04-09 00:00:00
Finance
Stephen
Jiang
2003-02-04 00:00:00
Sales
Brian
Welcker
2003-03-18 00:00:00
Sales
Jillian
Carson
2003-07-01 00:00:00
Sales
Linda
Mitchell
2003-07-02 00:00:00
Sales
Michael
Blythe
2003-07-03 00:00:00
Sales
Garrett
Vargas
2003-07-04 00:00:00
Sales
Tsvi
Reiter
2003-07-05 00:00:00
Sales
Pamela
Ansman-Wolfe
2003-07-07 00:00:00
Sales
Jose
Saraiva
2003-07-11 00:00:00
Sales
David
Campbell
2003-07-19 00:00:00
Sales
Shu
Ito
2003-07-20 00:00:00
Sales
Amy
Alberts
2004-05-18 00:00:00
Sales
Ranjit
Varkey Chudukatil
2004-07-01 00:00:00
Sales
Jae
Pak
2004-07-01 05:00:00
Sales
Tete
Mensa-Annan
2004-11-01 00:00:00
Sales
Syed
Abbas
2005-04-15 00:00:00
Sales
Lynn
Tsoflias
2005-07-01 01:00:00
Sales
Rachel
Valdez
2005-07-01 02:00:00
Sales
[/input]
[output]
Deborah
Poe
2001-01-19 00:00:00
Finance
Wendy
Kahn
2001-01-26 00:00:00
Finance
Candy
Spoon
2001-02-07 00:00:00
Finance
David
Barber
2001-02-13 00:00:00
Finance
Bryan
Walton
2001-02-25 00:00:00
Finance
David
Liu
2001-03-03 00:00:00
Finance
Dragan
Tomic
2001-03-15 00:00:00
Finance
Barbara
Moreland
2001-03-22 00:00:00
Finance
Janet
Sheperdigian
2001-04-02 00:00:00
Finance
Mike
Seamans
2001-04-09 00:00:00
Finance
Stephen
Jiang
2003-02-04 00:00:00
Sales
Brian
Welcker
2003-03-18 00:00:00
Sales
Jillian
Carson
2003-07-01 00:00:00
Sales
Linda
Mitchell
2003-07-02 00:00:00
Sales
Michael
Blythe
2003-07-03 00:00:00
Sales
Garrett
Vargas
2003-07-04 00:00:00
Sales
Tsvi
Reiter
2003-07-05 00:00:00
Sales
Pamela
Ansman-Wolfe
2003-07-07 00:00:00
Sales
Jose
Saraiva
2003-07-11 00:00:00
Sales
David
Campbell
2003-07-19 00:00:00
Sales
Shu
Ito
2003-07-20 00:00:00
Sales
Amy
Alberts
2004-05-18 00:00:00
Sales
Ranjit
Varkey Chudukatil
2004-07-01 00:00:00
Sales
Jae
Pak
2004-07-01 05:00:00
Sales
Tete
Mensa-Annan
2004-11-01 00:00:00
Sales
Syed
Abbas
2005-04-15 00:00:00
Sales
Lynn
Tsoflias
2005-07-01 01:00:00
Sales
Rachel
Valdez
2005-07-01 02:00:00
Sales
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employees with Project

[code-task title="Problem: Employees with Project" taskId="a6db00d1-cfd9-4b04-b665-c2d84dda8f56" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**
- **project_name**

Filter only **employees** with a project, which has started after **13.08.2002** and it is still **ongoing** (no end date).

Return the first 5 rows sorted by **first_name** **then by** **project_name both in ascending order**.

## Examples

| **employee_id** | **first_name** | **project_name**      |
| --------------- | -------------- | --------------------- |
| 44              | A. Scott       | Hitch Rack - 4-Bike   |
| 170             | Alan           | LL Touring Handlebars |
| ...             | ...            | ...                   |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
44
A. Scott
Hitch Rack - 4-Bike
170
Alan
LL Touring Handlebars
155
Alex
Hitch Rack - 4-Bike
145
Andreas
Touring Pedal
185
Andrew
HL Touring Handlebars
[/input]
[output]
44
A. Scott
Hitch Rack - 4-Bike
170
Alan
LL Touring Handlebars
155
Alex
Hitch Rack - 4-Bike
145
Andreas
Touring Pedal
185
Andrew
HL Touring Handlebars
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employee 24

[code-task title="Problem: Employee 24" taskId="b942b66d-5e6e-417d-a5c6-07dc98585b49" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**
- **project_name**

Filter all the **projects** of employees with **id 24**.

If the project has started after **2005 inclusively** the return value should be **NULL**.

Sort the result by **project_name alphabetically**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
24
David

24
David

24
David

24
David
Road-650
[/input]
[output]
24
David

24
David

24
David

24
David
Road-650
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employee Manager

[code-task title="Problem: Employee Manager" taskId="634491b6-5756-411c-af6b-be665199c800" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **first_name**
- **manager_id**
- **manager_name**

Filter all **employees** with a manager who has **id equal to 3 or 7**.

Return all rows sorted by **employee first_name in ascending order**.

## Examples

| **employee_id** | **first_name** | **manager_id** | **manager_name** |
| --------------- | -------------- | -------------- | ---------------- |
| 122             | Bryan          | 7              | JoLynn           |
| 158             | Dylan          | 3              | Roberto          |
| ...             | ...            | ...            | ...              |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
122
Bryan
7
JoLynn
158
Dylan
3
Roberto
156
Eugene
7
JoLynn
9
Gail
3
Roberto
76
James
7
JoLynn
11
Jossef
3
Roberto
267
Michael
3
Roberto
84
Nancy
7
JoLynn
263
Ovidiu
3
Roberto
4
Rob
3
Roberto
270
Sharon
3
Roberto
37
Simon
7
JoLynn
194
Thomas
7
JoLynn
[/input]
[output]
122
Bryan
7
JoLynn
158
Dylan
3
Roberto
156
Eugene
7
JoLynn
9
Gail
3
Roberto
76
James
7
JoLynn
11
Jossef
3
Roberto
267
Michael
3
Roberto
84
Nancy
7
JoLynn
263
Ovidiu
3
Roberto
4
Rob
3
Roberto
270
Sharon
3
Roberto
37
Simon
7
JoLynn
194
Thomas
7
JoLynn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Employee Summary

[code-task title="Problem: Employee Summary" taskId="c51662b6-f70a-49a9-a95b-65890bd12bce" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **employee_id**
- **employee_name**
- **manager_name**
- **department_name**

Show the first **5 employees** (only for employees who have a manager) with their **managers** and the **departments** they are in (show the departments of the **employees**).

Order by **employee_id**.

## Examples

| **employee_id** | **employee_name** | **manager_name** | **department_name** |
| --------------- | ----------------- | ---------------- | ------------------- |
| 1               | Guy Gilbert       | Jo Brown         | Production          |
| 2               | Kevin Brown       | David Bradley    | Marketing           |
| ...             | ...               | ...              | ...                 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
Guy Gilbert
Jo Brown
Production
2
Kevin Brown
David Bradley
Marketing
3
Roberto Tamburello
Terri Duffy
Engineering
4
Rob Walters
Roberto Tamburello
Tool Design
5
Thierry D'Hers
Ovidiu Cracium
Tool Design
[/input]
[output]
1
Guy Gilbert
Jo Brown
Production
2
Kevin Brown
David Bradley
Marketing
3
Roberto Tamburello
Terri Duffy
Engineering
4
Rob Walters
Roberto Tamburello
Tool Design
5
Thierry D'Hers
Ovidiu Cracium
Tool Design
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Min Average Salary

[code-task title="Problem: Min Average Salary" taskId="951e69cf-334a-4c06-8261-eaf1418065ef" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that returns the value of the lowest average **salary** of all **departments**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10866.66666667
[/input]
[output]
10866.66666667
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Highest Peaks in Bulgaria

[code-task title="Problem: Highest Peaks in Bulgaria" taskId="6962d106-9bf4-48ea-a807-495ae9f3bab9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **country_code**
- **mountain_range**
- **peak_name**
- **elevation**

Filter all **peaks** in **Bulgaria** with **elevation** over **2835**.

Return all rows sorted by **elevation** **in descending order**.

## Examples

| **country_code** | **mountain_range** | **peak_name** | **elevation** |
| ---------------- | ------------------ | ------------- | ------------- |
| BG               | Rila               | Musala        | 2925          |
| BG               | Pirin              | Vihren        | 2914          |
| ...              | ...                | ...           | ...           |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
BG
Rila
Musala
2925
BG
Pirin
Vihren
2914
BG
Pirin
Kutelo
2908
BG
Rila
Malka Musala
2902
BG
Pirin
Banski Suhodol
2884
BG
Pirin
Golyam Polezhan
2851
[/input]
[output]
BG
Rila
Musala
2925
BG
Pirin
Vihren
2914
BG
Pirin
Kutelo
2908
BG
Rila
Malka Musala
2902
BG
Pirin
Banski Suhodol
2884
BG
Pirin
Golyam Polezhan
2851
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Count Mountain Ranges

[code-task title="Problem: Count Mountain Ranges" taskId="22fdb65e-9027-4be7-b449-8122df267059" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **country_code**
- **mountain_range**

Filter the **count** of the **mountain ranges** in the **United States**, **Russia** and **Bulgaria**.

Sort result by **mountain_range count** in **decreasing order**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
BG
6
RU
1
US
1
[/input]
[output]
BG
6
RU
1
US
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Countries with Rivers

[code-task title="Problem: Countries with Rivers" taskId="7d7faf70-a8fc-4de9-84a1-53a54217a7ad" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **country_name**
- **river_name**

Find the first **5 countries** with or without **rivers** in **Africa**.

Sort them by **country_name in ascending order**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Algeria
Niger
Angola
Congo
Benin
Niger
Botswana

Burkina Faso
Niger
[/input]
[output]
Algeria
Niger
Angola
Congo
Benin
Niger
Botswana

Burkina Faso
Niger
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: \*Continents and Currencies

[code-task title="Problem: \*Continents and Currencies" taskId="288b18a9-e2b7-4bc7-b91e-c4412fe19b13" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a query that selects:

- **continent_code**
- **currency_code**
- **currency_usage**

Find all **continents** and their most used **currency**.

Filter any **currency** that is used in only one **country**.

Sort the result by **continent_code and currency_code**.

## Examples

| **continetn_code** | **currency_code** | **currency_usage** |
| ------------------ | ----------------- | ------------------ |
| AF                 | XOF               | 8                  |
| AS                 | AUD               | 2                  |
| AS                 | ILS               | 2                  |
| ...                | ...               | ...                |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
AF
XOF
8
AS
AUD
2
AS
ILS
2
EU
EUR
26
NA
XCD
8
OC
USD
8
[/input]
[output]
AF
XOF
8
AS
AUD
2
AS
ILS
2
EU
EUR
26
NA
XCD
8
OC
USD
8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Countries Without Any Mountains

[code-task title="Problem: Countries Without Any Mountains" taskId="4ba6ed71-c078-4ff0-b0b8-b92ab5cac596" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Find the count of all **countries** which don't have a **mountain**.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
231
[/input]
[output]
231
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Highest Peak and Longest River by Country

[code-task title="Problem: Highest Peak and Longest River by Country" taskId="4e17dd8d-9ef4-4fcc-8534-0efa6f1733c2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

For each **country**, find the **elevation** of **the highest peak** and **the length of the longest river**, sorted by the highest **peak_elevation (from highest to lowest)**, then by the **longest river_length (from longest to smallest)**, then by **country_name (alphabetically)**.

Display **NULL** when no data is available in some of the columns.

Limit only the **first 5 rows**.

## Examples

| **country_name** | **highest_peak_elevation** | **longest_river_length** |
| ---------------- | -------------------------- | ------------------------ |
| China            | 8848                       | 6300                     |
| India            | 8848                       | 3180                     |
| Nepal            | 8848                       | 2948                     |
| ...              | ...                        | ...                      |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
China
8848
6300
India
8848
3180
Nepal
8848
2948
Pakistan
8611
3180
Argentina
6962
4880
[/input]
[output]
China
8848
6300
India
8848
3180
Nepal
8848
2948
Pakistan
8611
3180
Argentina
6962
4880
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

