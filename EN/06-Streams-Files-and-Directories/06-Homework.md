# Homework


[slide hideTitle]
# Problem: Sum Lines
[code-task title="Sum Lines" taskId="726fd5e4-9683-4204-9223-3fc2b40c088e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a text file (**input.txt** from the Resources - Folder) and prints on the console the **sum** of the ASCII symbols of each of its lines.

Use **BufferedReader** in combination with **FileReader**.

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | 1452 |
| Michael Angelo,  | 1397 |
| then fifty-seven years old,  | 2606 |
| writes | 670 |
| from Florence to  | 1573 |
| Tommaso de' Cavalieri,  | 2028 |
| a youth of noble Roman family, | 2762 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1452
1397
2606
670
1573
2028
2762
[/input]
[output]
1452
1397
2606
670
1573
2028
2762
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Sum Bytes
[code-task title="Sum Bytes" taskId="563aca90-b033-4d3d-908e-25e921dac646" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a text file (**input.txt** from the Resources - Folder) and prints on the console the **sum** of the ASCII symbols of all characters inside of the file.

Use **BufferedReader** in combination with **FileReader**.

## Hints

- You can modify your solution to the previous problem
- Use a type that will not overflow like **long** or **BigInteger**

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | 12488 |
| Michael Angelo,  |  |
| then fifty-seven years old,  |  |
| writes |  |
| from Florence to  |  |
| Tommaso de' Cavalieri,  |  |
| a youth of noble Roman family, |  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
12488
[/input]
[output]
12488
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: CAPITAL LETTERS
[code-task title="CAPITAL LETTERS" taskId="4c58e831-a4f5-4845-9b41-e083d08eac22" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a text file (**input.txt** from the Resources - Folder) and changes the casing of **all** letters to **upper**.

Write the output to another file (**output.txt**).

Use **BufferedReader** and **PrintWriter**.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | ON JANUARY 1 , 1533 ,  |
| Michael Angelo,  | MICHAEL ANGELO,  |
| then fifty-seven years old,  | THEN FIFTY-SEVEN YEARS OLD,  |
| writes | WRITES |
| from Florence to  | FROM FLORENCE TO  |
| Tommaso de' Cavalieri,  | TOMMASO DE' CAVALIERI,  |
| a youth of noble Roman family, | A YOUTH OF NOBLE ROMAN FAMILY, |

[/task-description]
[code-io /]
[tests]
[test]
[input]
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
[/input]
[output]
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Count Character Types
[code-task title="Count Character Types" taskId="9f79317b-6fb7-42f2-8ff9-8cde6dcb5181" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a list of words from the file (**input.txt** from the Resources - Folder) and finds the count of **vowels**, **consonants**, and **punctuation** marks.

Assume that:

- **a, e, i, o, u** are vowels, only lower case
- **All others** are consonants
- Punctuation marks are **(!,.?)**
- **Do not** count whitespace.

Write the results to another file – **output.txt**.

Use **BufferedReader** and **PrintWriter**.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | Vowels: 41 |
| from Florence to Tommaso de' Cavalieri, a youth of noble Roman family, | Consonants: 72 |
|  | Punctuation: 6 |


[/task-description]
[code-io /]
[tests]
[test]
[input]
Vowels: 41
Consonants: 72
Punctuation: 6
[/input]
[output]
Vowels: 41
Consonants: 72
Punctuation: 6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Line Numbers
[code-task title="Line Numbers" taskId="6059845f-06d5-4e57-93db-f665072f1734" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a text file (**inputLineNumbers.txt** from the Resources - Folder) and **inserts** line numbers in front of each of its lines.

The result should be written to **another** text file – **output.txt**.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| Two households, both alike in dignity, | 1. Two households, both alike in dignity, |
| In fair Verona, where we lay our scene, | 2. In fair Verona, where we lay our scene, |
| From ancient grudge break to new, | 3. From ancient grudge break to new, |
| Where civil blood makes civil hands. | 4. Where civil blood makes civil hands. |
| From forth the fatal loins of these two | 5. From forth the fatal loins of these two  |
| A pair of star-cross'd lovers take their life; | 6. A pair of star-cross'd lovers take their life; |
| Whose misadventured piteous overthrows | 7. Whose misadventured piteous overthrows |
| Do with their death bury their parents' strife. | 8. Do with their death bury their parents' strife. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.
[/input]
[output]
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Word Count
[code-task title="Word Count" taskId="39f0764c-dec5-49f3-870e-5ec7c9a52c27" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads a list of words from the file **words.txt** (from the Resources - Folder) and finds how many times each of the words is **contained** in another file **text.txt** (from the Resources – Folder).

Matching should be **case-insensitive**.

Write the results in file **results.txt**. 

Sort the words by frequency in **descending order**.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **Input** | **Output** |
| --- | --- |
| of which The | of - 6 |
|  | which - 2 |
|  | The - 1 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
of - 6
which - 2
The - 1
[/input]
[output]
of - 6
which - 2
The - 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Merge Two Files
[code-task title="Merge Two Files" taskId="b3e1004c-471b-483c-9c11-3503b46c218f" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads the contents of **two** text files (**inputOne.txt** , **inputTwo.txt** from Resources - Folder) and **merges** them together into a third one.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.

## Examples
| **File 1** | **File 2** | **Output** |
| --- | --- |
| 1 | 4 | 1 |
| 2 | 5 | 2 |
| 3 | 6 | 3 |
|  |  | 4 |
|  |  | 5 |
|  |  | 6 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
2
3
4
5
6
[/input]
[output]
1
2
3
4
5
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Get Folder Size
[code-task title="Get Folder Size" taskId="9ea94b9e-099e-4121-8fa6-cfef538c4e51" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **traverses** a folder and **calculates** its size in bytes.

Use Folder **Exercises Resources** in Resources - Folder.

## Guidelines
There is one zipped folder with resources for all exercises, that you need to use. 

Download the resources folder [here](https://mega.nz/file/nIwjSaKQ#KQpc5igeWhk70YWHwrA7QRqqyAySVW5xap-dxwFULgU).

For each exercise submit only the **output** of your program, **not the code**.


## Examples
| **Input** | **Output** |
| --- | --- |
|  | Folder size: 2878 |

[image assetsSrc="08-Strams-Files-and-Directories-Exercise-Get Folder Size.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
Folder size: 2878
[/input]
[output]
Folder size: 2878
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


# Problems For Self-Practice
[slide hideTitle]
# Problem: Copy a Picture

Write a program that makes a copy of a **.jpg** file using **FileInputStream**, **FileOutputStream**, and **byte[] buffer**. 

Set the name of the new file as **picture-copy.jpg**.

[/slide]

[slide hideTitle]
# Problem: Serialize Array List

Write a program that saves and loads an **ArrayList** of doubles to a file using **ObjectInputStream** and **ObjectOutputStream**. 

Set the name of the file as **list.ser**.

[/slide]

[slide hideTitle]
# Problem: Serialize Custom Object

Write a program that saves and loads the information about a custom object using **ObjectInputStream** and **ObjectOutputStream**.

Create a **simple class** called "Course" that has a **String field** containing its **name** and an **integer field** containing the **number of students** attending the course. 

Set the name of the save file as **course.ser**.

[/slide]

[slide hideTitle]
# Problem: Create Zip Archive

Write a program that reads three **.txt** files and creates a zip archive named **files.zip**. 

Use **FileOutputStream**, **ZipOutputStream**, and **FileInputStream**.

[/slide]


[slide]
# Homework Results
[tasks-results/]

[/slide]