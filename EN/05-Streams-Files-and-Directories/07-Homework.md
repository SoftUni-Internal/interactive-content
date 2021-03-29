# Homework


[slide hideTitle]
# Problem: Sum Lines
[code-task title="Sum Lines" taskId="java-advanced-streams-files-exercise-sum-lines" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create a program that reads the **input.txt** from the resources folder you downloaded and prints the **sum** of the ASCII symbols of each of its lines to the console.

Use a **BufferedReader** in combination with **FileReader**.

## Guidelines

The zip file contains all the files you will need for the rest of the tasks as well.

**Download the resources** [here](https://videos.softuni.org/resources/java/java-advanced/04-Java-Advanced-Files-and-Streams-Exercise-Resources.zip). 

Submit only the **output** of your program, **not the code**.

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
```
1452
1397
2606
670
1573
2028
2762
```
[/input]
[output]
```
1452
1397
2606
670
1573
2028
2762
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Sum Bytes
[code-task title="Sum Bytes" taskId="java-advanced-streams-files-exercise-sum-bytes" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]

[task-description]
## Description
Create a program that reads the **input.txt** from the resources folder you downloaded, and prints the **sum** of the ASCII symbols of all characters inside of the file to the console.

Use **BufferedReader** in combination with **FileReader**.

## Hints

- You can modify your solution to the previous problem
- Use a type that will not overflow like **long** or **BigInteger**

## Guidelines

Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
12488
```
[/input]
[output]
```
12488
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: CAPITAL LETTERS
[code-task title="CAPITAL LETTERS" taskId="java-advanced-streams-files-exercise-capital-letters" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a program that reads the **input.txt** file from the resources folder you downloaded, and changes all letters to their **uppercase** counterpart.

Write the output to another file (**output.txt**).

Use а **BufferedReader** and а **PrintWriter**.

## Guidelines
Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
```
[/input]
[output]
```
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Count Character Types
[code-task title="Count Character Types" taskId="java-advanced-streams-files-exercise-count-character-types" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a program that reads the **input.txt** file from the resources folder you downloaded and finds the count of **vowels**, **consonants**, and **punctuation** marks.

Assume that:

- **a, e, i, o, u** are vowels, only lower case
- **All others** are consonants
- Punctuation marks are **(!,.?)**
- **Do not** count whitespace

Write the results to another file – **output.txt**.

Use a **BufferedReader** and a **PrintWriter**.

## Guidelines

Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
Vowels: 41
Consonants: 72
Punctuation: 6

```
[/input]
[output]
```
Vowels: 41
Consonants: 72
Punctuation: 6

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Line Numbers
[code-task title="Line Numbers" taskId="java-advanced-streams-files-exercise-line-numbers" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a program that reads the **input.txt** file from the resources folder and **inserts** a line number in the beginning of each line.

The result should be written to **another** text file – **output.txt**.

## Guidelines
Use the previously provided resources.

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
```
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.

```
[/input]
[output]
```
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Word Count
[code-task title="Word Count" taskId="java-advanced-streams-files-exercise-word-count" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a program that reads a list of words from the **words.txt** file and finds how many times each of the words is **contained** in another file **text.txt**. Both files are in the resources folder you previously downloaded.

Matching the words should be **case-insensitive**.

Write the results in a file called **results.txt**. 

Sort the words by the number of times they appear in the **text.txt** file in **descending order**.

## Guidelines

Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
of - 6
which - 2
The - 1

```
[/input]
[output]
```
of - 6
which - 2
The - 1

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Merge Two Files
[code-task title="Merge Two Files" taskId="java-advanced-streams-files-exercise-merge-two-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description
Create a program that reads the contents of **two** text files (**inputOne.txt** , **inputTwo.txt**) and **merges** them together into a new file.

## Guidelines
Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
1
2
3
4
5
6
```
[/input]
[output]
```
1
2
3
4
5
6
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Get Folder Size
[code-task title="Get Folder Size" taskId="java-advanced-streams-files-exercise-get-folder-size" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Description

Create a program that **traverses** a folder and **calculates** its size in bytes.

Use the **Exercises Resources** folder in the resources.

## Guidelines

Use the previously provided resources.

Submit only the **output** of your program, **not the code**.

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
```
Folder size: 2878
```
[/input]
[output]
```
Folder size: 2878
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Copy a Picture

Create a program that makes a copy of a **.jpg** file using **FileInputStream**, **FileOutputStream**, and `byte[]` buffer. 

Set the name of the new file as **picture-copy.jpg**.

To start, pick a random image.

Then, create a new project and open the **Main** class.

In the `Main.java` file, add the necessary **imports**, if your IDE does not already:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
```

Inside the `main` method, create a `try-catch` block:

```java
try {
    // Here, we will initialize the the I/O streams and clone the image. 🧑‍💻
    
} catch (IOException e) {
    // Exception handling logic goes here. 😵
    
}
```

Then, inside the `try` block, create an input stream for the original image.

Initialize a new **input stream** using `new File("the-absolute-path-to-your\\image")`.

You can get the absolute path to your image by right-clicking on it, and choosing "**Properties**".

After that, create an **output stream** with the "**picture-copy.jpg**" string as a parameter.

Create a `byte[]` buffer with a size **bigger than or equal to** your image size, in bytes.

Use a while loop to **write the data** to the output stream, as shown below.

```java
try {
    FileInputStream inputImage = new FileInputStream(new File("C:\\Folder1\\picture.jpg"));
    FileOutputStream outputImage = new FileOutputStream("picture-copy.jpg");

    int oneByte;
    byte[] buffer = new byte[8192]; // The size should be >= to that of your image. 🏞
    while ((oneByte = inputImage.read(buffer)) != -1) {
        outputImage.write(buffer, 0, count);
    }

    System.out.println("The image was copied successfully! 😎");
    
} catch (IOException e) {
    System.out.println("The file is either corrupted or missing. 😿");
}
```

The cloned image is now **saved** in your project folder.

[/slide]

[slide hideTitle]
# Problem: Serialize Array List

Create a program that saves and loads an **ArrayList** of doubles to a file using **ObjectInputStream** and **ObjectOutputStream**. 

Your IDE must add the following **imports** in the process:

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
```

To start, let us create an ArrayList of **doubles** in the body of `main()`.

```java
ArrayList<Double> numbers = new ArrayList<>();
```

Next, **add** the following floating-point **numbers**:

```java
numbers.add(46.2);
numbers.add(32.5);
numbers.add(11.7);
```

To catch possible **errors** with the I/O operations, create a `try-catch` block.

```java
try {
    FileOutputStream writeData = new FileOutputStream("list.ser");
    ObjectOutputStream writeStream = new ObjectOutputStream(writeData);

    writeStream.writeObject(numbers);
    writeStream.flush();
    writeStream.close();
    
    System.out.println("The ArrayList was serialized successfully! 😎");

} catch (IOException e) {
    System.out.println("An error occurred. 😿");
    e.printStackTrace();
}
```

Create a `FileOutputStream` called **WriteData** and set the name of the file as **list.ser**.

By providing only the **name**, without a path, the file will be saved in the project's main directory.

`ObjectOutputStream` will handle writing the object into the file that `FileOutputStream` created.

Calling thе `writeObject` method tells the program to start writing into **list.ser**.

Opening the **list.ser** file, you will see the **output**.

```
�� sr java.util.ArrayListx����a� I sizexp   w   sr java.lang.Double���J)k� D valuexr java.lang.Number������  xp@G�����sq ~ @@@     sq ~ @'ffffffx
```

Do not worry if it does not make sense to you, Java can read it just fine.

**Note:** Using this file, you can try **deserializing** the ArrayList.

[/slide]

[slide hideTitle]
# Problem: Serialize Custom Object

Create a program that saves and loads information about a custom object using **ObjectInputStream** and **ObjectOutputStream**.

Create a **simple class** called "Course" that has a **String field** containing its **name** and an **integer field** containing the **number of students** attending the course. 

Set the name of the saved file as **course.ser**.

[/slide]

[slide hideTitle]
# Problem: Create Zip Archive

Create a program that reads three **.txt** files and creates a zip archive named **files.zip**. 

Use **FileOutputStream**, **ZipOutputStream**, and **FileInputStream**.

[/slide]
