[slide hideTitle]

# Data Manipulation Language 

Here we need to do several manipulations in the database, like changing data, adding data etc

**Execute the following SQL statements and paste the result in judge as a solution**

[/slide]

[slide hideTitle]
# Problem: Insert
[code-task title="Problem: Insert" taskId="8a986626-0a60-467c-be0a-c97ff93df3b4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will have to **insert** records of data into the **products_stores** table, based on the **products** table. 

Find all **products** that are **not offered** in any stores (don’t have a relation with stores) and insert data in the 
products_stores.

For every product saved -> **product_id** and **1(one)** as a **store_id**. 

And now this product will be offered in store with name **Wrapsafe** and **id 1**.

-	**product_id** - id of product

-	**store_id** - set it to be 1 for all products.


**Submit your output to the Judge system from the following sql querie:**

```java
SELECT store_id, s.name, p.name, product_id FROM products_stores
JOIN products p ON p.id = products_stores.product_id
JOIN stores s ON products_stores.store_id = s.id
ORDER BY product_id, store_id;

```

## Examples

| **store_id**  |  **store_name** | **product_name**  | **product_id**   |
|---|---|---|---|
| 11  | Home Ing  | Container Clear 8 Oz  |  1 |
| 14  | Veribet  | Container Clear 8 Oz  | 1  |
| 18  | DuoStore  | Container Clear 8 Oz  |  1 |
|  …  | …  |  …  |  … |
|  6 |  Duobam |  Sugar - White Packet | 20  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
11,Home Ing,Container Clear 8 Oz,1
14,Veribet,Container Clear 8 Oz,1
18,DuoStore,Container Clear 8 Oz,1
6,Duobam,Oil - Sunflower,2
8,Alphazap,Oil - Sunflower,2
18,DuoStore,Oil - Sunflower,2
7,Keylex,Goat - Whole Cut,3
2,Solarbreeze,Cranberries - Fresh,4
5,Cardguard,Cranberries - Fresh,4
12,SafeWithUs,Cranberries - Fresh,4
14,Veribet,Bamboo Shoots - Sliced,5
8,Alphazap,"Pasta - Bauletti, Chicken White",6
10,Bitwolf,"Pasta - Bauletti, Chicken White",6
9,Flexidy,"Lemonade - Mandarin, 591 Ml",7
17,Stronghold,"Lemonade - Mandarin, 591 Ml",7
13,Konklab,Daikon Radish,8
15,Zaam-Dox,Daikon Radish,8
1,Wrapsafe,Ostrich - Fan Fillet,9
1,Wrapsafe,Rabbit - Saddles,10
3,Regrant,Green Scrubbie Pad H.duty,11
11,Home Ing,Green Scrubbie Pad H.duty,11
12,SafeWithUs,Green Scrubbie Pad H.duty,11
11,Home Ing,Chicken - Whole,12
1,Wrapsafe,Rice - Wild,13
3,Regrant,"Pork - Back, Short Cut, Boneless",14
13,Konklab,"Pork - Back, Short Cut, Boneless",14
18,DuoStore,Spic And Span All Purpose,15
19,Transcof,Spic And Span All Purpose,15
1,Wrapsafe,Soup - Cream Of Potato / Leek,16
2,Solarbreeze,Wine - Ruffino Chianti Classico,17
1,Wrapsafe,Food Colouring - Green,18
18,DuoStore,Sour Puss Raspberry,19
20,Voltsillam,Sour Puss Raspberry,19
6,Duobam,Sugar - White Packet,20
[/input]
[output]
11,Home Ing,Container Clear 8 Oz,1
14,Veribet,Container Clear 8 Oz,1
18,DuoStore,Container Clear 8 Oz,1
6,Duobam,Oil - Sunflower,2
8,Alphazap,Oil - Sunflower,2
18,DuoStore,Oil - Sunflower,2
7,Keylex,Goat - Whole Cut,3
2,Solarbreeze,Cranberries - Fresh,4
5,Cardguard,Cranberries - Fresh,4
12,SafeWithUs,Cranberries - Fresh,4
14,Veribet,Bamboo Shoots - Sliced,5
8,Alphazap,"Pasta - Bauletti, Chicken White",6
10,Bitwolf,"Pasta - Bauletti, Chicken White",6
9,Flexidy,"Lemonade - Mandarin, 591 Ml",7
17,Stronghold,"Lemonade - Mandarin, 591 Ml",7
13,Konklab,Daikon Radish,8
15,Zaam-Dox,Daikon Radish,8
1,Wrapsafe,Ostrich - Fan Fillet,9
1,Wrapsafe,Rabbit - Saddles,10
3,Regrant,Green Scrubbie Pad H.duty,11
11,Home Ing,Green Scrubbie Pad H.duty,11
12,SafeWithUs,Green Scrubbie Pad H.duty,11
11,Home Ing,Chicken - Whole,12
1,Wrapsafe,Rice - Wild,13
3,Regrant,"Pork - Back, Short Cut, Boneless",14
13,Konklab,"Pork - Back, Short Cut, Boneless",14
18,DuoStore,Spic And Span All Purpose,15
19,Transcof,Spic And Span All Purpose,15
1,Wrapsafe,Soup - Cream Of Potato / Leek,16
2,Solarbreeze,Wine - Ruffino Chianti Classico,17
1,Wrapsafe,Food Colouring - Green,18
18,DuoStore,Sour Puss Raspberry,19
20,Voltsillam,Sour Puss Raspberry,19
6,Duobam,Sugar - White Packet,20
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Update
[code-task title="Problem: Update" taskId="89158954-362f-432a-82b7-e2cdcd652062" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Update all **employees** that hire **after 2003(exclusive)** year and **not work** in store **Cardguard** and **Veribet**. 
Set their **manager** to be **Carolyn Q Dyett** (with **id 3**) and **decrease salary** with 500.

**Submit your output to the Judge system from the following sql querie:**

```java
SELECT first_name, salary, hire_date, id 
FROM employees 
WHERE manager_id = 3;
```

|  **first_name** | **salary**  | **hire_date**  | **id**  |
|---|---|---|---|
| Clemence  | 8753.81  | 2008-10-12  | 1  |
| Fletch  | 1644.71  | 2007-04-14  | 5  |
| Roz  | 8816.56  | 2018-10-20  | 6  |
| …  | …  | …  | … |
| Frasquito  | 8624.43  | 2011-11-25  | 19  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Clemence,8753.81,2008-10-12,1
Fletch,1644.71,2007-04-14,5
Roz,8816.56,2018-10-20,6
Shae,6963.52,2018-02-03,7
Breena,7349.65,2017-03-15,8
Jonie,3097.01,2012-01-11,9
Goldina,2785.16,2009-03-17,10
Jacintha,2005.62,2009-10-27,12
Elwin,9038.20,2017-05-12,13
Dierdre,3443.56,2014-09-25,14
Rube,528.20,2014-02-24,16
Faun,6209.77,2007-05-06,17
Xylina,6345.08,2013-05-03,18
Frasquito,8624.43,2011-11-25,19
[/input]
[output]
Clemence,8753.81,2008-10-12,1
Fletch,1644.71,2007-04-14,5
Roz,8816.56,2018-10-20,6
Shae,6963.52,2018-02-03,7
Breena,7349.65,2017-03-15,8
Jonie,3097.01,2012-01-11,9
Goldina,2785.16,2009-03-17,10
Jacintha,2005.62,2009-10-27,12
Elwin,9038.20,2017-05-12,13
Dierdre,3443.56,2014-09-25,14
Rube,528.20,2014-02-24,16
Faun,6209.77,2007-05-06,17
Xylina,6345.08,2013-05-03,18
Frasquito,8624.43,2011-11-25,19
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Delete
[code-task title="Problem: Delete" taskId="babc7c3f-0c5a-4c12-baee-a42c0db2fcdb" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
It is time for the stores to start working. All good employees already are in their stores. 

But some of the employers are too expensive and we need to cut them, because of finances restrictions.

Be careful not to delete **managers they are also employees**.

**Delete** only those employees that **have manager**s and a salary is more than **6000(inclusive)**

**Submit your output to the Judge system from the following sql querie:**

|   |   |   |   |
|---|---|---|---|
| Florian  | 6266.27  | 2018-02-19  | 2  |
| Carolyn  | 1223.45  | 2000-02-23  | 3  |
| Eba  | 5268.40  | 2015-02-09  | 4  |
| …  | …  | …  | …  |
| Leigh  | 2159.55  | 2002-07-11  | 20  |


[/task-description]
[code-io /]
[tests]
[test]
[input]
Florian,6266.27,2018-02-19,2
Carolyn,1223.45,2000-02-23,3
Eba,5268.40,2015-02-09,4
Fletch,1644.71,2007-04-14,5
Jonie,3097.01,2012-01-11,9
Goldina,2785.16,2009-03-17,10
Rhona,2651.20,2011-04-08,11
Jacintha,2005.62,2009-10-27,12
Dierdre,3443.56,2014-09-25,14
Richy,3091.96,2002-12-21,15
Rube,528.20,2014-02-24,16
Leigh,2159.55,2002-07-11,20
[/input]
[output]
Florian,6266.27,2018-02-19,2
Carolyn,1223.45,2000-02-23,3
Eba,5268.40,2015-02-09,4
Fletch,1644.71,2007-04-14,5
Jonie,3097.01,2012-01-11,9
Goldina,2785.16,2009-03-17,10
Rhona,2651.20,2011-04-08,11
Jacintha,2005.62,2009-10-27,12
Dierdre,3443.56,2014-09-25,14
Richy,3091.96,2002-12-21,15
Rube,528.20,2014-02-24,16
Leigh,2159.55,2002-07-11,20
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Exam Results
[tasks-results/]

[/slide]