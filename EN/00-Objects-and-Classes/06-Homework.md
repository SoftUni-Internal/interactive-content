# Homework
[slide hideTitle]
# Problem: Articles
[code-task title="Articles" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create an article class with the following properties:
- Title – a string
- Content – a string
- Author – a string

The class should have a constructor and the following methods:
- **Edit** (new content) – change the old content with the new one
- **ChangeAuthor** (new author) – change the author
- **Rename** (new title) – change the title of the article
- **override ToString** – print the article in the following format: 

"\{title\} - \{content\}:\{author\}"

Write a program that reads an article in the following **format** "\{title\}, \{content\}, \{author\}". 

On the next line, you will get a **number n**. 

On the **next n lines**, you will get one of the following **commands**: 
- "Edit: \{new content\}" 
- "ChangeAuthor: \{new author\}" 
- "Rename: \{new title\}". 

At the end, **print the final article**.


### Example
| **Input** | **Output** |
| --- | --- |
| some title, some content, some author | better title - better content: better author |
| 3 | |
| Edit: better content | |
| ChangeAuthor:  better author | |
| Rename: better title | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
some title, some content, some author
3
Edit: better content
ChangeAuthor: better author
Rename: better title
[/input]
[output]
better title - better content: better author
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Edit: better content1
Edit: better content2
Edit: better content3
[/input]
[output]
Holy Ghost - better content3: John Sandford
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
ChangeAuthor:  Mitch Albom
ChangeAuthor:  better author
ChangeAuthor:  Kim Heacox
[/input]
[output]
Holy Ghost - content:  Kim Heacox
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Rename: The Next Person You Meet in Heaven
Rename: better title
Rename: John Muir and the Ice That Started a Fire
[/input]
[output]
John Muir and the Ice That Started a Fire - content: John Sandford
[/output]
[/test]
[test]
[input]
some title, some content, some author
6
Rename: The Good German
Edit: better content1
ChangeAuthor:  Ben Coes
ChangeAuthor:  Gary D. Chapman
Rename: The Girl with No Shadow
Edit: better content2
[/input]
[output]
The Girl with No Shadow - better content2:  Gary D. Chapman
[/output]
[/test]
[test]
[input]
some title, some content, some author
5
Rename: John Muir and the Ice That Started a Fire
ChangeAuthor:  John Grisham
ChangeAuthor:  Shirley Jackson
Rename: The haunting of hill house
Edit: better content2
[/input]
[output]
The haunting of hill house - better content2:  Shirley Jackson
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Opinion Poll

[vimeo-video]
[stream language="EN" videoId="421821499" default /]
[stream language="RO" videoId="433935894"  /]
[/video-vimeo]

[code-task title="Opinion Poll" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Using the **Person class**, write a program that reads from the console **N lines of personal information** and then **prints all people** whose **age is more than 30 years** in the following **format**:

\{name\} - \{age\}

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | John - 31 | 
| Peter 12 | Steven - 48 |
| John 31 | |
| Steven 48 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | Nick - 33 | 
| Nick 33 | John - 88 |
| John 88 | Leo - 44 |
| George 22 | |
| Leo 44 | |
| Peter 11 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
Peter 12
John 31
Steven 48
[/input]
[output]
John - 31
Steven - 48
[/output]
[/test]
[test]
[input]
5
Nikolai 33
Yordan 88
Tosho 22
Lyubo 44
Stanislav 11

[/input]
[output]
Nikolai - 33
Yordan - 88
Lyubo - 44

[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 31
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 321534
Suzi 3213
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Dencho - 31
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Pesho - 321534
Suzi - 3213
Zuzi - 32131

[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 1
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 0
Suzi 12
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Zuzi - 32131
[/output]
[/test]
[test]
[input]
4
A 10
B 11
C 12
D 13
[/input]
[output]

[/output]
[/test]
[test]
[input]
13
A 31
W 45
B 76
C 87
D 453
E 645
Z 55
K 53
I 43
J 543
P 67
H 76
F 88
[/input]
[output]
A - 31
W - 45
B - 76
C - 87
D - 453
E - 645
Z - 55
K - 53
I - 43
J - 543
P - 67
H - 76
F - 88
[/output]
[/test]
[test]
[input]
13
Astor 45
Asto 31
Borko 76
Ceco 87
Dido 453
Encho 645
Focker 11
Haplio 76
Ivo 12
Julien 0
Kodkoslav 30
Pencho 67
Zoro 55
[/input]
[output]
Astor - 45
Asto - 31
Borko - 76
Ceco - 87
Dido - 453
Encho - 645
Haplio - 76
Pencho - 67
Zoro - 55
[/output]
[/test]
[test]
[input]
4
Ann 31
Anntoanette 39
An 33
Annie 31
[/input]
[output]
Ann - 31
Anntoanette - 39
An - 33
Annie - 31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Articles 2.0
[code-task title="Articles 2.0" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Change the program "Articles", so you can store a **list of articles**.

You will not need the methods any more (**except** the ToString method).

On the **first line**, you will get a **number n**.

On the next **n lines**, you will get some **articles in the same format as the previous task** ("\{title\}, \{content\}, \{author\}").

Finally, you will get one of the **three criteria**: "title", "content", "author".

You need to order the articles **alphabetically** based on the command and print them sorted by the given **criteria**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Article - content: Johnny |
| Science, planets, Bill | Science - planets: Bill |
| Article, content, Johnny | |
| title | |

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | title3 – A: author3 |
| title1, C, author1 | title2 – B: author2 |
| title2, B, author2 | title1 – C: author1 |
| title3, A, author3 | |
| content | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Science, planets, Bill
Article, content, Johnny
title
[/input]
[output]
Article - content: Johnny
Science - planets: Bill

[/output]
[/test]
[test]
[input]
3
title1, C, author1
title2, B, author2
title3, A, author3
content
[/input]
[output]
title3 - A: author3
title2 - B: author2
title1 - C: author1
[/output]
[/test]
[test]
[input]
2
The Reckoning, Content, John Grisham
Harry Potter and the Sorcerer's Stone (Enhanced Edition), content2, J.K. Rowling
title
[/input]
[output]
Harry Potter and the Sorcerer's Stone (Enhanced Edition) - content2: J.K. Rowling
The Reckoning - Content: John Grisham
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
content
[/input]
[output]
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Ego Is the Enemy - content2: Ryan Holiday
A Christmas Message - content3: Anne Perry
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
author
[/input]
[output]
A Christmas Message - content3: Anne Perry
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Most Valuable Playboy - content4: Lauren Blakely
Ego Is the Enemy - content2: Ryan Holiday
[/output]
[/test]
[test]
[input]
2
A Simple Favor, content2, Darcey Bell
Gracie's Secret, content1, Jill Childs
title
[/input]
[output]
A Simple Favor - content2: Darcey Bell
Gracie's Secret - content1: Jill Childs
[/output]
[/test]
[test]
[input]
3
A Simple Favor, content2, Darcey Bell
Most Valuable Playboy, content4, Lauren Blakely
Gracie's Secret, content1, Jill Childs
content
[/input]
[output]
Gracie's Secret - content1: Jill Childs
A Simple Favor - content2: Darcey Bell
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Students

[vimeo-video]
[stream language="EN" videoId="421822838" default /]
[stream language="RO" videoId="433936042"  /]
[/video-vimeo]


[code-task title="Students" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that receives **n count** of students with grades and prints whether they have successfully passed a test.

If the **grade** is **greater than or equal to 3.00**, the test is **passed**.

Each student should have **First name** (string), **Last name** (string) and **grade** (floating-point number).

### Input
- First line will be a **number n**
- Next **n lines** you will get a student info in the **format** 

"\{first name\} \{second name\} \{grade\}"

### Output
- If the **test is passed**, print:

"\{first name\} \{second name\}: \{PASS\}"

- If the **test isn't passed**, print:

"\{first name\} \{second name\}"

### Example
| **Input** | **Output** |
| --- | --- |
| 4 | Lakia Eason: PASS |
| Lakia Eason 3.90 | Prince Messing: PASS |
| Prince Messing 5.49 | Akiko Segers |
| Akiko Segers 2.85 | Rocco Erben: PASS |
| Rocco Erben 6.00 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
Lakia Eason 3.90
Prince Messing 5.49
Akiko Segers 2.85
Rocco Erben 6.00
[/input]
[output]
Lakia Eason: PASS
Prince Messing: PASS
Akiko Segers
Rocco Erben: PASS
[/output]
[/test]
[test]
[input]
4
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: PASS
Amias Mathews
Mora Tod
Pete Kendrick
[/output]
[/test]
[test]
[input]
3
Cletus Henry 4.34
Deena Banks 5.83
Asher West 5.76
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
[/output]
[/test]
[test]
[input]
3
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
[/output]
[/test]
[test]
[input]
6
Sydnie Britton 5.79
Cletus Henry 5.50
Deena Banks 5.24
Asher West 4.59
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: PASS
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
Mora Tod
Pete Kendrick
[/output]
[/test]
[test]
[input]
7
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Cletus Henry: PASS
Deena Banks: PASS
Asher West: PASS
Sydnie Britton: PASS
Amias Mathews
Mora Tod
Pete Kendrick
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Vehicle Catalogue
[code-task title="Vehicle Catalogue" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Until you receive the **command** "End" you will receive lines of input in the format:
- \{typeOfVehicle\} \{model\} \{color\} \{horsepower\}

After the "End" command, you will start receiving **models of vehicles**. **Print for every received vehicle** its data in the **format**:

Type: \{typeOfVehicle\}

Model: \{modelOfVehicle\}

Color: \{colorOfVehicle\}

Horsepower: \{horsepowerOfVehicle\}

When you receive the command "Close the Catalogue", stop receiving **input and print the average horsepower** for the cars and for the trucks in the **format**:

"\{typeOfVehicles\} have average horsepower of \{averageHorsepower\}."

The average horsepower is **calculated** by **dividing the sum of horsepower for all vehicles of the type by the total count of vehicles from the same type**.

Format the answer to the **second decimal point**.

### Example
| **Input** | **Output** |
| --- | --- |
| truck Man red 200 | Type: Car |
| truck Mercedes blue 300 | Model: Ferrari |
| car Ford green 120 | Color: red |
| car Ferrari red 550 | Horsepower: 550 |
| car Lamborghini orange 570 | Type: Car |
| End | Model: Ford |
| Ferrari | Color: green |
| Ford | Horsepower: 120 |
| Man | Type: Truck |
| Close the Catalogue | Model: Man |
| | Color: red |
| | Horsepower: 200 |
| | Cars have average horsepower of: 413.33. |
| | Trucks have average horsepower of: 250.00. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
truck Man red 200
truck Mercedes blue 300
car Ford green 120
car Ferrari red 550
car Lamborghini orange 570
End
Ferrari
Ford
Man
Close the Catalogue
[/input]
[output]
Type: Car
Model: Ferrari
Color: red
Horsepower: 550
Type: Car
Model: Ford
Color: green
Horsepower: 120
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have average horsepower of: 413.33.
Trucks have average horsepower of: 250.00.
[/output]
[/test]
[test]
[input]
car Opel green 736
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 736.00.
Trucks have average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Opel green 248
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 0.00.
Trucks have average horsepower of: 248.00.
[/output]
[/test]
[test]
[input]
car Lamborghini orange 570
End
Lamborghini
Close the Catalogue
[/input]
[output]
Type: Car
Model: Lamborghini
Color: orange
Horsepower: 570
Cars have average horsepower of: 570.00.
Trucks have average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Man red 200
End
Man
Close the Catalogue
[/input]
[output]
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have average horsepower of: 0.00.
Trucks have average horsepower of: 200.00.
[/output]
[/test]
[test]
[input]
truck Man red 800
truck Mercedes blue 300
car Ford green 400
car Ferrari red 553
car Lamborghini orange 570
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 507.67.
Trucks have average horsepower of: 550.00.
[/output]
[/test]
[test]
[input]
truck Man red 354
truck Mercedes blue 320
car Jaguar green 480
car Honda red 220
car Volvo orange 326
truck Volkswagen black 423
End
Volvo
Jaguar
Volkswagen
Close the Catalogue
[/input]
[output]
Type: Car
Model: Volvo
Color: orange
Horsepower: 326
Type: Car
Model: Jaguar
Color: green
Horsepower: 480
Type: Truck
Model: Volkswagen
Color: black
Horsepower: 423
Cars have average horsepower of: 342.00.
Trucks have average horsepower of: 365.67.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Person ID

[vimeo-video]
[stream language="EN" videoId="421821748" default /]
[stream language="RO" videoId="433932277"  /]
[/video-vimeo]

[code-task title="Person ID" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive **an unknown number of lines**.

On each line, you will receive **array with 3 elements**.

The **first** element will be **string** and represents the **name of the person**. 

The **second** element will be a **string** and will represent the **ID of the person**. 

The last element will be an **integer** and represents the **age of the person**.

If you get a person whose **ID you've already received**, then **update** the name and age for that ID with that **of the new person**.

When you receive the **command** "End", **stop** taking input and **print all the people**.

### Example
| **Input** | **Output** |
| --- | --- |
| George 123456 20 | George with ID: 123456 is 20 years old. |
| Peter 78911 15 | John with ID: 78911 is 30 years old. |
| Steven 524244 10 | Steven with ID: 524244 is 10 years old. |
| John 78911 30 | |
| End | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George 123456 20
Peter 78911 15
Steven 524244 10
John 78911 30
End
[/input]
[output]
George with ID: 123456 is 20 years old.
John with ID: 78911 is 30 years old.
Steven with ID: 524244 is 10 years old.
[/output]
[/test]
[test]
[input]
Cindy 88611 2
Kaloyan 13967 3
Simona 53316 11
Gil 31837 72
Gil 31837 72
Stacy 88611 10
End
[/input]
[output]
Stacy with ID: 88611 is 10 years old.
Kaloyan with ID: 13967 is 3 years old.
Simona with ID: 53316 is 11 years old.
Gil with ID: 31837 is 72 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Margie 17098 46
Chip 84450 89
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Margie with ID: 17098 is 46 years old.
Chip with ID: 84450 is 89 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Chip 84450 89
Margie 17098 46
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Chip with ID: 84450 is 89 years old.
Margie with ID: 17098 is 46 years old.
[/output]
[/tests]
[/code-task]
[/slide]

