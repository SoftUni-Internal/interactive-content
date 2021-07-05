[slide hideTitle]

# Querying 

And now we need to do some data extraction. 

**Note** that the **example results** from **this section** use a **fresh database**. 

It is **highly recommended** that you **clear** the **database** that has been **manipulated** by the **previous problems** 

from the **DML section** and **insert again** the **dataset** you’ve been given, 

to ensure **maximum consistency** with the **examples** given in this section.

[/slide]

[slide hideTitle]
# Problem: Employees
[code-task title="Problem: Employees" taskId="0ca9fee5-6aac-4cb1-9c48-25592a638ea9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Extract from the **SoftUni Stores System** database, info about all of the **employees**. 

**Order** the results by employees **hire date** in **descending** order.

### Required Column

- **first_name**

-	**middle_name**

-	**last_name**

-	**salary**

-	**hire_date**

**Submit your output to the Judge system from the following sql querie:**

### Output

| first_name  | middle_name  | last_name  | salary  | hire_date  |
|---|---|---|---|---|
| Roz  | U  | Dewdney  | Dewdney  | 2018-10-20 |
| Florian  | E  | Bamlet  | Bamlet  | 2018-02-19 |
| Shae  | O  | Fasey  | Fasey  | 2018-02-03 |
| Elwin  | G  | Rennock  | Rennock  | 2017-05-12 |
| …  | …  | …  | …  | … |
| Carolyn  | Q  | Dyett  | Dyett  | 2000-02-23 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Roz,U,Dewdney,9316.56,2018-10-20
Florian,E,Bamlet,6266.27,2018-02-19
Shae,O,Fasey,7463.52,2018-02-03
Elwin,G,Rennock,9538.20,2017-05-12
Breena,S,Hymans,7849.65,2017-03-15
Eba,X,Oleszkiewicz,5268.40,2015-02-09
Dierdre,B,Jaggard,3943.56,2014-09-25
Rube,F,Daveren,1028.20,2014-02-24
Xylina,W,Apfelmann,6845.08,2013-05-03
Jonie,J,McNicol,3597.01,2012-01-11
Frasquito,Y,Wimpey,9124.43,2011-11-25
Rhona,Q,Pettwood,2651.20,2011-04-08
Jacintha,S,Polly,2505.62,2009-10-27
Goldina,G,Seabrocke,3285.16,2009-03-17
Clemence,F,Darthe,9253.81,2008-10-12
Faun,U,Winkworth,6709.77,2007-05-06
Fletch,Y,de Najera,2144.71,2007-04-14
Richy,E,Cady,3091.96,2002-12-21
Leigh,D,Vedenyakin,2159.55,2002-07-11
Carolyn,Q,Dyett,1223.45,2000-02-23
[/input]
[output]
Roz,U,Dewdney,9316.56,2018-10-20
Florian,E,Bamlet,6266.27,2018-02-19
Shae,O,Fasey,7463.52,2018-02-03
Elwin,G,Rennock,9538.20,2017-05-12
Breena,S,Hymans,7849.65,2017-03-15
Eba,X,Oleszkiewicz,5268.40,2015-02-09
Dierdre,B,Jaggard,3943.56,2014-09-25
Rube,F,Daveren,1028.20,2014-02-24
Xylina,W,Apfelmann,6845.08,2013-05-03
Jonie,J,McNicol,3597.01,2012-01-11
Frasquito,Y,Wimpey,9124.43,2011-11-25
Rhona,Q,Pettwood,2651.20,2011-04-08
Jacintha,S,Polly,2505.62,2009-10-27
Goldina,G,Seabrocke,3285.16,2009-03-17
Clemence,F,Darthe,9253.81,2008-10-12
Faun,U,Winkworth,6709.77,2007-05-06
Fletch,Y,de Najera,2144.71,2007-04-14
Richy,E,Cady,3091.96,2002-12-21
Leigh,D,Vedenyakin,2159.55,2002-07-11
Carolyn,Q,Dyett,1223.45,2000-02-23
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Products with old pictures
[code-task title="Problem: Products with old pictures" taskId="510992ea-7952-4474-9f93-e4d63fc8a862" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A photographer wants to take pictures of **products that have old pictures**. 

You must select all of the products that have a description **more than 100 characters** long description, 

and a picture that is **made before 2019 (exclusive)** and the **product price being more than 20**. 

Select a **short description column** that consists of first **10 characters** of the picture's description **plus '…'**. 

Order the results by **product price** in **descending** order.

### Required Column

-	**name (product)**

-	**price** 

-	**best_before**

-	**short_description**
    -	**only first 10 characters of product description + '...'**

-	**url** 


**Submit your output to the Judge system from the following sql querie:**

### Output

|  **product_name** |  **price** | **best_before**  | **short_description**  |  **url** |
| --- | --- | --- | --- | --- |
| Pasta - Bauletti Chicken White  | 48.85  | 2020-02-08  | Fusce cong...  |  `http://dummyimage.com/241x194.jpg/5fa2dd/ffffff` |
| Oil - Sunflower  | 48.00  | 2019-10-25  | Lorem ipsu...  | `http://dummyimage.com/243x233.jpg/cc0000/ffffff`  |
| Sugar - White Packet  | 40.89  | 2019-11-14  | Pellentesq...  |  `http://dummyimage.com/197x104.jpg/cc0000/ffffff` |
| …  |  …   |  …   |  …   |  …   |
| Lemonade - Mandarin 591 Ml  | 25.53  | 2020-04-03  | Duis biben...  | `http://dummyimage.com/208x226.jpg/cc0000/ffffff`  |


[/task-description]
[code-io /]
[tests]
[test]
[input]
Pasta - Bauletti Chicken White,48.85,2020-02-08,Fusce cong...,http://dummyimage.com/241x194.jpg/5fa2dd/ffffff
Oil - Sunflower,48.00,2019-10-25,Lorem ipsu...,http://dummyimage.com/243x233.jpg/cc0000/ffffff
Sugar - White Packet,40.89,2019-11-14,Pellentesq...,http://dummyimage.com/197x104.jpg/cc0000/ffffff
Spic And Span All Purpose,36.53,2020-05-31,Maecenas t...,http://dummyimage.com/249x208.jpg/cc0000/ffffff
Green Scrubbie Pad H.duty,31.29,2020-05-21,Phasellus ...,http://dummyimage.com/235x227.jpg/cc0000/ffffff
Lemonade - Mandarin 591 Ml,25.53,2020-04-03,Duis biben...,http://dummyimage.com/208x226.jpg/cc0000/ffffff
[/input]
[output]
Pasta - Bauletti Chicken White,48.85,2020-02-08,Fusce cong...,http://dummyimage.com/241x194.jpg/5fa2dd/ffffff
Oil - Sunflower,48.00,2019-10-25,Lorem ipsu...,http://dummyimage.com/243x233.jpg/cc0000/ffffff
Sugar - White Packet,40.89,2019-11-14,Pellentesq...,http://dummyimage.com/197x104.jpg/cc0000/ffffff
Spic And Span All Purpose,36.53,2020-05-31,Maecenas t...,http://dummyimage.com/249x208.jpg/cc0000/ffffff
Green Scrubbie Pad H.duty,31.29,2020-05-21,Phasellus ...,http://dummyimage.com/235x227.jpg/cc0000/ffffff
Lemonade - Mandarin 591 Ml,25.53,2020-04-03,Duis biben...,http://dummyimage.com/208x226.jpg/cc0000/ffffff
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Count of products in stores and their average
[code-task title="Problem: Count of products in stores and their average" taskId="49bcef7f-daef-42a4-bcca-a4b3840baff5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
The managers needs to know in which stores sell different products and their average price.

Extract from the database all of the **stores (with or without products)** and the **count** of the **products** that they have. 

Also you can show the average price of all products (rounded to the second digit after decimal point) that sells in store.

**Order** the results **descending by count of products** in store, **then by average price in descending order** and **finally by store id**.


### Required Column

-	**Name (store)**

-	**product_count**

-	**avg**

### Output

| **name**  | **product_count**  | **avg** |
|---|---|---|
| DuoStore  | 4  | 32.15  |
| Home Ing  | 3  | 13.72  |
| Alphazap  | 2  | 48.43  |
| Duobam  | 2  | 44.45  |
| …  | …  | …  |
| Lotstring  | 0  | NULL  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
DuoStore,4,32.15
Home Ing,3,13.72
Alphazap,2,48.43
Duobam,2,44.45
Regrant,2,32.06
Konklab,2,31.39
SafeWithUs,2,27.25
Solarbreeze,2,22.42
Veribet,2,10.29
Bitwolf,1,48.85
Keylex,1,39.78
Voltsillam,1,37.93
Transcof,1,36.53
Zaam-Dox,1,29.95
Flexidy,1,25.53
Stronghold,1,25.53
Cardguard,1,23.21
Wrapsafe,0,
Aerified,0,
Lotstring,0,
[/input]
[output]
DuoStore,4,32.15
Home Ing,3,13.72
Alphazap,2,48.43
Duobam,2,44.45
Regrant,2,32.06
Konklab,2,31.39
SafeWithUs,2,27.25
Solarbreeze,2,22.42
Veribet,2,10.29
Bitwolf,1,48.85
Keylex,1,39.78
Voltsillam,1,37.93
Transcof,1,36.53
Zaam-Dox,1,29.95
Flexidy,1,25.53
Stronghold,1,25.53
Cardguard,1,23.21
Wrapsafe,0,
Aerified,0,
Lotstring,0,
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Specific employees
[code-task title="Problem: Specific employees" taskId="32046362-1fca-421c-9ed7-1b40a05dab6c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
There are many employees in our shop system, but we need to find only the ones that passes specific criterias. 

Extract from the database, the **full name** (a combination of **first and last name**) of employee,

**name of store** that he works, **address** of store, and **salary**. 

The employee's **salary** must be **lower than 7000**, 

the **address** of the store must **contain 'a'** somewhere and the **length** of the **store name** needs to be **more than 5** characters. 

**Order the result by employee id**.

### Required Column

-	**Full name (employee)**

-	**Store name**

-	**Address**

-	**Salary**


**Submit your output to the Judge system from the following sql querie:**

### Output

|  **Full_name** | **Store_name**  | **address**  | **salary**  |
|---|---|---|---|
| Florian Bamlet  | Veribet  | 29395 Larry Pass  | 6266.27  |
| Carolyn Dyett  | Cardguard  | 61346 Melody Lane  | 1223.45  |
| ...  | ...  | ...  |  ... |
| Leigh Vedenyakin  | Stronghold  | 32759 Dwight Plaza  | 2159.55  |



[/task-description]
[code-io /]
[tests]
[test]
[input]
Florian Bamlet,Veribet,29395 Larry Pass,6266.27
Carolyn Dyett,Cardguard,61346 Melody Lane,1223.45
Eba Oleszkiewicz,Cardguard,61346 Melody Lane,5268.40
Fletch de Najera,Alphazap,51515 Loftsgordon Trail,2144.71
Jonie McNicol,Aerified,4 Hansons Way,3597.01
Goldina Seabrocke,Stronghold,32759 Dwight Plaza,3285.16
Rhona Pettwood,Cardguard,61346 Melody Lane,2651.20
Jacintha Polly,Keylex,91 Bayside Pass,2505.62
Dierdre Jaggard,Aerified,4 Hansons Way,3943.56
Richy Cady,Transcof,07 Armistice Parkway,3091.96
Rube Daveren,Transcof,07 Armistice Parkway,1028.20
Faun Winkworth,Wrapsafe,816 Old Gate Point,6709.77
Xylina Apfelmann,Keylex,91 Bayside Pass,6845.08
Leigh Vedenyakin,Stronghold,32759 Dwight Plaza,2159.55
[/input]
[output]
Florian Bamlet,Veribet,29395 Larry Pass,6266.27
Carolyn Dyett,Cardguard,61346 Melody Lane,1223.45
Eba Oleszkiewicz,Cardguard,61346 Melody Lane,5268.40
Fletch de Najera,Alphazap,51515 Loftsgordon Trail,2144.71
Jonie McNicol,Aerified,4 Hansons Way,3597.01
Goldina Seabrocke,Stronghold,32759 Dwight Plaza,3285.16
Rhona Pettwood,Cardguard,61346 Melody Lane,2651.20
Jacintha Polly,Keylex,91 Bayside Pass,2505.62
Dierdre Jaggard,Aerified,4 Hansons Way,3943.56
Richy Cady,Transcof,07 Armistice Parkway,3091.96
Rube Daveren,Transcof,07 Armistice Parkway,1028.20
Faun Winkworth,Wrapsafe,816 Old Gate Point,6709.77
Xylina Apfelmann,Keylex,91 Bayside Pass,6845.08
Leigh Vedenyakin,Stronghold,32759 Dwight Plaza,2159.55
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Find all information about stores
[code-task title="Problem: Find all information about stores" taskId="35c26227-c96b-4e57-99e5-21df5b97cf3c" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
The managers always want to know how the business goes. 

Now, they want from us to show all store names, but for security, 

the name and must be in the reversed order.

Select the name of stores (in **reverse** order). 

After that, the full_address in format: {**town name in upper case**}-{**address** name}.

The next info is the **count of employees**, 

which work in the store, the **minimum price** of products that are sold in the store and **the count of product ids**.

**Filter** only the stores that have a **minimum price** of product **more than 10**.

The last one is the **date of the newest added picture of product**, which is **sold in the store**, 

in a specific format: **4th-Dec-2018** (Example, Day of the month should be with English suffix (1st, 2nd, 3rd …))

-	Note that 4th-Dec-2018 is different from 4-Dec-2018 and 2018-12-4

Order the results by the **reversed name of the store in ascending order**, then by the **minimum price of product in stores**

### Required Columns

-	**reversed_name (store name)** 

-	**full_address (full_address)**

-	**employees_count**

-	**min_price** 

-	**products_count**

-	**newest_pic - in a specific format**

**Submit your output to the Judge system from the following sql querie:**

### Output


| **reversed_name**  | **full_address**  | **employees_count**  | **min_price**  | **products_count**  | **newest_pic**  |
|---|---|---|---|---|---|
| balknoK  |  BLAGOEVGRAD-789 Lien Plaza | 0  | 29.95  |  2 | 12th-Jun-2020  |
| dlohgnortS  | BLAGOEVGRAD-32759 Dwight Plaza  |  3 | 25.53  | 1  | 21st-Aug-2018  |
| draugdraC  | VIDIN-61346 Melody Lane  | 3  | 23.21  | 1  | 14th-Nov-2018  |
| ezeerbraloS  | DOBRICH-1 Cody Pass  | 0  | 21.63  | 2  | 6th-Jan-2020  |
| …  |  … | …  | …  | …  | …  |
| ydixelF  | VIDIN-83637 Reinke Alley  | 0  | 25.53  | 1  | 21st-Aug-2018  |


[/task-description]
[code-io /]
[tests]
[test]
[input]
balknoK,BLAGOEVGRAD-789 Lien Plaza,0,29.95,2,12th-Jun-2020
dlohgnortS,BLAGOEVGRAD-32759 Dwight Plaza,3,25.53,1,21st-Aug-2018
draugdraC,VIDIN-61346 Melody Lane,3,23.21,1,14th-Nov-2018
ezeerbraloS,DOBRICH-1 Cody Pass,0,21.63,2,6th-Jan-2020
flowtiB,SOZOPOL-396 Summerview Center,0,48.85,1,3rd-Oct-2018
focsnarT,BURGAS-07 Armistice Parkway,2,36.53,1,4th-Dec-2018
mabouD,BLAGOEVGRAD-35952 Stoughton Circle,1,40.89,2,18th-Dec-2018
mallistloV,SHUMEN-18645 Hollow Ridge Drive,0,37.93,1,28th-Jan-2019
pazahplA,SHUMEN-51515 Loftsgordon Trail,1,48.00,2,18th-Dec-2018
sUhtiWefaS,PAMPOROVO-2217 Fieldstone Court,3,23.21,2,14th-Nov-2018
tnargeR,PLEVEN-6 Caliangt Parkway,0,31.29,2,2nd-Oct-2018
xelyeK,SOFIA-91 Bayside Pass,2,39.78,1,21st-Jan-2020
xoD-maaZ,SHUMEN-1656 Anniversary Way,0,29.95,1,12th-Jun-2020
ydixelF,VIDIN-83637 Reinke Alley,0,25.53,1,21st-Aug-2018
[/input]
[output]
balknoK,BLAGOEVGRAD-789 Lien Plaza,0,29.95,2,12th-Jun-2020
dlohgnortS,BLAGOEVGRAD-32759 Dwight Plaza,3,25.53,1,21st-Aug-2018
draugdraC,VIDIN-61346 Melody Lane,3,23.21,1,14th-Nov-2018
ezeerbraloS,DOBRICH-1 Cody Pass,0,21.63,2,6th-Jan-2020
flowtiB,SOZOPOL-396 Summerview Center,0,48.85,1,3rd-Oct-2018
focsnarT,BURGAS-07 Armistice Parkway,2,36.53,1,4th-Dec-2018
mabouD,BLAGOEVGRAD-35952 Stoughton Circle,1,40.89,2,18th-Dec-2018
mallistloV,SHUMEN-18645 Hollow Ridge Drive,0,37.93,1,28th-Jan-2019
pazahplA,SHUMEN-51515 Loftsgordon Trail,1,48.00,2,18th-Dec-2018
sUhtiWefaS,PAMPOROVO-2217 Fieldstone Court,3,23.21,2,14th-Nov-2018
tnargeR,PLEVEN-6 Caliangt Parkway,0,31.29,2,2nd-Oct-2018
xelyeK,SOFIA-91 Bayside Pass,2,39.78,1,21st-Jan-2020
xoD-maaZ,SHUMEN-1656 Anniversary Way,0,29.95,1,12th-Jun-2020
ydixelF,VIDIN-83637 Reinke Alley,0,25.53,1,21st-Aug-2018
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

