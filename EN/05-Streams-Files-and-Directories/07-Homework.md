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

To start, pick a random image, or download one [here](https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-culture-1170986.jpg&fm=jpg).

Then, create a new project and open the **Main** class.

In the `Main.java` file, add the necessary **imports**, if your IDE does not already:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
```

Or just `import java.io.*;`.

Inside the `main` method, create a `try-catch` block:

```java
try {
    // Here, we will initialize the the I/O streams and clone the image. 🧑‍💻
    
} catch (IOException e) {
    // Exception handling logic goes here. 😵
    
}
```

Then, inside the `try` block, create an input stream for the original image.

Initialize a new **input stream** using `new File("the-absolute-path-to-your\image")`.

You can get the absolute path to your image by right-clicking on it, and choosing "**Properties**".

A window will appear, and the path will be located next to "**Location:**".

Select the path and paste it as follows:

```java
FileInputStream inputImage = new FileInputStream(new File("C:\folder-name\...\picture-name.jpg"));
```

After that, create an **output stream** with the "**picture-copy.jpg**" string as a parameter.

```java
FileOutputStream outputImage = new FileOutputStream("picture-copy.jpg");
```

Create a `byte[]` buffer.

Use a while loop to **write the data** to the output stream, as shown below.

```java
try {
    FileInputStream inputImage = new FileInputStream(new File("C:\FolderOne\picture.jpg"));
    FileOutputStream outputImage = new FileOutputStream("picture-copy.jpg");

    int oneByte;
    byte[] buffer = new byte[8192]; // Or more, if you want 🏞
    while ((oneByte = inputImage.read(buffer)) != -1) {
        outputImage.write(buffer, 0, count);
    }

    System.out.println("The image was copied successfully! 😎");
    
} catch (IOException e) {
    System.out.println("There was a problem with the file. 😿");
    e.printStackTrace();
}
```

The cloned image is now **saved** in your project folder.

[/slide]

[slide hideTitle]
# Problem: Serialize Array List

Create a program that saves and loads an **ArrayList** of doubles to a file using **ObjectInputStream** and **ObjectOutputStream**. 

Your IDE must add the following **imports** in the process:

```java
import java.io.*;
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

Create a `FileOutputStream` called **writeData** and set the name of the file as **list.ser**.

By providing only the **name**, without a path, the file will be saved in the project's main directory.

`ObjectOutputStream` will handle writing the object into the file that `FileOutputStream` created.

Calling thе `writeObject(numbers)` method tells the program to start writing into **list.ser**.

A good practice is to use `.flush()` - it flushes the output stream and forces any buffered output bytes to be written out.

Opening the **list.ser** file, you will see the following **output**:

```
���sr�java.util.ArrayListx����a��I�sizexp���w���sr�java.lang.Double���J)k��D�valuexr�java.lang.Number��������xp@G�����sq�~�@@@�����sq�~�@'ffffffx
```

Do not worry if it does not make sense to you, Java can read it just fine.

Using this file, you can **deserialize** the ArrayList with the help of `ObjectInputStream`.

Clear out the `main()` method, and write:

```java
try {
    FileInputStream readData = new FileInputStream("list.ser");
    ObjectInputStream readStream = new ObjectInputStream(readData);

    ArrayList<Double> numbersDsl = (ArrayList<Double>) readStream.readObject();
    readStream.close();
    
    System.out.println(numbersDsl.toString());
    
} catch (Exception e) {
    System.out.println("An error occurred. 😿");
    e.printStackTrace();
}
```

You can now see the ArrayList's data, printed on the **console**:

```
[46.2, 32.5, 11.7]
```

[/slide]

[slide hideTitle]
# Problem: Serialize Custom Object

Create a program that saves and loads information about a custom object using **ObjectInputStream** and **ObjectOutputStream**.

Create a **simple class** called "**Course**" that has the following values upon initialization:

- **name** - String
    * the name of the course
- **studentsCount** - int
    * contains the **number of students** attending the course

The class **must implement** the `Serializable` interface.

```java
import java.io.Serializable;

public class Course implements Serializable {
    private String name;
    private int studentsCount;

    public Course(String name, int studentsCount) {
        this.name = name;
        this.studentsCount = studentsCount;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getStudentsCount() {
        return this.studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }


    @Override
    public String toString() {
        return new StringBuffer("Course name: ")
                .append(this.name)
                .append(", Students enrolled: ")
                .append(this.studentsCount)
                .toString();
    }

}
```

Once you are done creating the class, make a new instance of it, inside `main()`:

```java
Course course = new Course("Programming with Python",  32);
```

Create a `try-catch` block:

```java
try {
    FileOutputStream fileOut = new FileOutputStream("course.ser");
    ObjectOutputStream objectOut = new ObjectOutputStream(fileOut);
    objectOut.writeObject(course);
    objectOut.close();

    System.out.println("The object was succesfully written to a file! ☑️");

} catch (Exception e) {
    System.out.println("An error occurred. 😵");
    e.printStackTrace();
}
```

Inside of `try`, set the name of the saved file as **course.ser**.

Then, create an `ObjectOutputStream` instance in order to write the `course` object to the file.

**Close** the output stream and create a `catch` block for **error handling**. 

Inside of it, print the **stack trace**.

Assuming no errors occurred, the file is now saved in your project's directory:

```
���sr�com.company.Course�`��/�u�I�
studentsCountL�namet�Ljava/lang/String;xp��� t�Programming with Python
```

To **deserialize** the object, use the following code:

```java
Course courseDsl;

try {
    FileInputStream fileIn = new FileInputStream("course.ser");
    ObjectInputStream in = new ObjectInputStream(fileIn);

    courseDsl = (Course) in.readObject();

    in.close();
    fileIn.close();

    System.out.println(courseDsl.toString());

} catch (Exception e) {
    System.out.println("An exception occurred. 😾");
    e.printStackTrace();
}
```

Declare a new object of type `Course`, named **CourseDsl**.

Create a `FileInputStream` to read **course.ser**.

Then, create an `ObjectInputStream` instance.

Use the `readObject()` method to **deserialize** the object.

After **closing** the input streams, use the `courseDsl.toString()` method to **print** information:

```
Course name: Programming with Python, Students enrolled: 32
```

[/slide]

[slide hideTitle]
# Problem: Create Zip Archive

Create a program that reads three **.txt** files and creates a `zip` archive named **files.zip**. 

Use **FileOutputStream**, **ZipOutputStream**, and **FileInputStream**.

To start, create three **.txt** files in a directory of your choice.

You will need the following **imports** in `Main.java`:

```java
import java.io.*;
import java.util.*;
import java.util.zip.*;
```

Inside `main()`, declare the desired path for the new `.zip` file:

```java
String zipFile = "C:/archive.zip";
```

Then, create an array of all the paths to the three `.txt` files:

```java
String[] sourceFiles = { "C:/fileOne.txt", "C:/fileTwo.txt", "C:/fileThree.txt"};
```

Create a try-catch block and a `byte[]` buffer.
 
```java
try {

    // Create a byte buffer
    byte[] buffer = new byte[1024];

    FileOutputStream fileOut = new FileOutputStream(zipFile);

    ZipOutputStream zipOut = new ZipOutputStream(fileOut);

    for (int i=0; i < sourceFiles.length; i++) {

        File sourceFile = new File(sourceFiles[i]);

        FileInputStream fileIn = new FileInputStream(sourceFile);

        // Start writing a new ZIP entry
        // Positioning the stream to the start of the entry data
        zipOut.putNextEntry(new ZipEntry(sourceFile.getName()));

        int length;

        while ((length = fileIn.read(buffer)) > 0) {
            zipOut.write(buffer, 0, length);
        }

        zipOut.closeEntry();

        // Closing the InputStream
        fileIn.close();

    }
    
    // Closing the ZipOutputStream
    zipOut.close();

    System.out.println("The zip file was created successfully. 👏");
    

}
catch (IOException e) {
    System.out.println("There was an error creating the file. 😨");
}

```

Using a **for-loop**, we iterate through the `sourceFiles` array. 

We write each file to the `zipOut` stream using a `byte[]` buffer.

As you can see above, we also use the `ZipEntry` class, used to represent a ZIP file entry.

Your `.zip` file is now saved in the directory, declared in the `zipFile` string.

[/slide]
