# Files and Directories

[slide]

# Files and Paths
A Java **Path** instance represents **a path in the file system**.

A path can point to either a **file** or a **directory**.

**Path** is used to **examine**, **locate**, and **manipulate** files.

An example of that is input.txt file which we have used for the previous problems.

```java
String input = "D:\\input.txt";

Path path = Paths.get(input);
```
The static method `get()` takes as argument the **String representation of the file location**.

By calling a `Paths.get()` - method the **instance of Path** is created.

The Path instance gives us an easy way to create a Buffered Stream by using a BufferedReader and **Files** classes.

Let's see the following example:

```java
Path path = Paths.get("D:\\input.txt");

try (BufferedReader inputStream = Files.newBufferedReader(path)) {

    String line = inputStream.readLine();
    while (line != null) {
        System.out.println(line);
        line = inputStream.readLine();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```
By calling a `newBufferedReader()` - method of the Files class and pass the path as an argument, the BufferedReader instance is created (**Buffered Stream**).

The following example illustrates copying the content of one file to another:

```java
Path inputPath = Paths.get("D:\\input.txt");
Path outputPath = Paths.get("D:\\output.txt");

try  {
    List<String> lines = Files.readAllLines(inputPath);
    Files.write(outputPath, lines);
} catch (IOException e) {
    e.printStackTrace();
}
```
First, we create two Path variables for input and output files.

Next, we call `readallLines()` - method of the Files class and pass the **inputPath** variable.

The `readAllLines()` - method, returns a List with all lines in a file.

Then we pass this **List** and the **outputPath** variable to the Files `write()` - method.




[/slide]


[slide hideTitle]
# Problem: Sort Lines
[code-task title="Problem: Sort Lines" taskId="ff62c581-1c97-4bb5-bf9a-18f2cd397350" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
Read the file provided, named "**input.txt**" and sort all lines.

Write text to **another text file**.

Use **Path** and **Files** Classes.

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the **resources folder** [here](https://mega.nz/file/7YgFUaxb#759BYR32eIMTbn2BiXWIs0s6ip0ZahlwUOuOuFu221Y).

For each exercise submit only the **output** of your program, **not the code**.


## Examples
| **Input** | **Output** |
| --- | --- |
| C | A |
| A | B |
| B | C |
| D | D |

[/task-description]
[code-io /]
[tests]
[test]
[input]
On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes
alone in everything can in nothing find its counterpart. Wherefore your
art of navigating the sea of your potent genius, that genius will
been reported to me--I have given your lordship satisfaction in one
from Florence to Tommaso de' Cavalieri, a youth of noble Roman family,
good, but fortunate. And if I should ever feel assured that--as has
hand. If, therefore, this or that in the works which I hope and promise
instead of having only the future, which cannot be long, since I am all
lordship, _the only light in our age vouchsafed to this worlds_ having
nevertheless excuse me, and neither despise my inequality, nor demand
no equal or peer, cannot find satisfaction in the work of any other
not my letter, for my pen cannot approach the expression of my good
of me that which I have it not in me to give; since that which stands
that the future may bring me; and it will be a great pain to me to be
thing or another, I will make a gift to you of my present and of all
to execute should happen to please you, I should call that work, not
too old. There is nothing more left for me to say. Read my heart and
unable to recall the past, in order to serve you so much the longer,
who afterwards became his favourite pupil: "If I do not possess the
will."[ 3 ]
[/input]
[output]
On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes
alone in everything can in nothing find its counterpart. Wherefore your
art of navigating the sea of your potent genius, that genius will
been reported to me--I have given your lordship satisfaction in one
from Florence to Tommaso de' Cavalieri, a youth of noble Roman family,
good, but fortunate. And if I should ever feel assured that--as has
hand. If, therefore, this or that in the works which I hope and promise
instead of having only the future, which cannot be long, since I am all
lordship, _the only light in our age vouchsafed to this worlds_ having
nevertheless excuse me, and neither despise my inequality, nor demand
no equal or peer, cannot find satisfaction in the work of any other
not my letter, for my pen cannot approach the expression of my good
of me that which I have it not in me to give; since that which stands
that the future may bring me; and it will be a great pain to me to be
thing or another, I will make a gift to you of my present and of all
to execute should happen to please you, I should call that work, not
too old. There is nothing more left for me to say. Read my heart and
unable to recall the past, in order to serve you so much the longer,
who afterwards became his favourite pupil: "If I do not possess the
will."[ 3 ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Sort Lines

```java
String inputPath = "D:\\input.txt";
String outputPath = "D:\\06.SortLinesOutput.txt";

Path path = Paths.get(inputPath);
Path output = Paths.get(outputPath);

try {
    List<String> lines = Files.readAllLines(path);

    lines = lines.stream().filter(line -> !line.isBlank()).collect(Collectors.toList());

    Collections.sort(lines);

    Files.write(output, lines);

} catch (IOException e) {
    e.printStackTrace();
}
```

[/slide]

[slide]

# File Class in Java

Java File class represents the files and directory pathnames in an abstract manner.

This class is used for creation of files and directories, file searching, file deletion, etc.

The File object represents the actual file/directory on the disk. 

- Creating a File object, by placing the String representation of the file location in the constructor:
```java
File file = new File("D:\\input.txt");
```
- Some of the useful **methods** of the **File** class are:

| **Method** | **Description** |
| --- | --- |
| `exists()` | Tests whether the file or directory denoted by this abstract pathname exists. Returns true if and only if the file or directory denoted by this abstract pathname exists; false otherwise. |
| `length()` | Returns the length of the file denoted by this abstract pathname. The return value is unspecified if this pathname denotes a directory. |
| `isDirectory()` | Tests whether the file denoted by this abstract pathname is a directory. Returns true if and only if the file denoted by this abstract pathname exists and is a directory; false otherwise. |
| `listFiles()` | Returns an array of abstract pathnames denoting the files in the directory denoted by this abstract pathname. |


[/slide]

[slide hideTitle]
# Problem: List Files
[code-task title="Problem: List Files" taskId="9c1c43ef-63a0-4d85-bfb2-3d96b979c380" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
You are provided a folder named "**Files-and-Streams**".

Create a program that lists the names and file sizes (**in bytes**) of all files that are placed directly in it (**do not include files in nested folders**).

## Guidelines

There is one zipped folder with resources for all exercises, that you need to use. 

Download the **resources folder** [here](https://mega.nz/file/7YgFUaxb#759BYR32eIMTbn2BiXWIs0s6ip0ZahlwUOuOuFu221Y).

For each exercise submit only the **output** of your program, **not the code**.


## Examples

## Input:
[image assetsSrc="streams-files-directories-example(6).png" /]

## Output:
input.txt: [size in bytes] 
output.txt: [size in bytes]


## Hints
- Use the **File** class and its method `listFiles()`


[/task-description]
[code-io /]
[tests]
[test]
[input]
input.txt: \[14321\]
output.txt: \[14328\]
[/input]
[output]
input.txt: \[14321\]
output.txt: \[14328\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
    
[slide]

# Solution: List Files

```java
File file = new File("D:\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\Files-and-Streams");

if (file.exists()) {
    if (file.isDirectory()) {
        File[] files = file.listFiles();
        for (File f : files) {
            if (!f.isDirectory()) {
                System.out.printf("%s: [%s]%n",
                      f.getName(), f.length());
            }
        }
    }
}

```

[/slide]


[slide hideTitle]
# Problem: Nested Folders
[code-task title="Problem: Nested Folders" taskId="ef8adca3-1c35-4b65-8b55-262d9a9ae0aa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```

```
[/code-editor]
[task-description]
## Description
You are provided a folder named "**Files-and-Streams**".

Create a program that lists the names of all directories in it (**including all nested directories**).

On the last line, print the count of all folders, including the root folder.

## Examples

## Input:
[image assetsSrc="streams-files-directories-example(6).png" /]

## Output:
Streams-and-Files 
Files-and-Streams 
Streams-and-Files 
Serialization 
Streams-and-Files 
[folder count] folders 

[/task-description]
[code-io /]
[tests]
[test]
[input]
Files-and-Streams
Files-and-Streams
Serialization
Streams-and-Files
Serialization
Streams-and-Files
Files-and-Streams
Streams-and-Files
Files-and-Streams
Serialization
Serialization
Streams-and-Files
Serialization
Streams-and-Files
Files-and-Streams
Streams-and-Files
Serialization
Streams-and-Files
18 folders
[/input]
[output]
Files-and-Streams
Files-and-Streams
Serialization
Streams-and-Files
Serialization
Streams-and-Files
Files-and-Streams
Streams-and-Files
Files-and-Streams
Serialization
Serialization
Streams-and-Files
Serialization
Streams-and-Files
Files-and-Streams
Streams-and-Files
Serialization
Streams-and-Files
18 folders
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]

# Solution: Nested Folders

```java
 String path = "D:\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\Files-and-Streams";

File root = new File(path);

Deque<File> dirs = new ArrayDeque<>();
dirs.offer(root);

int count = 0;
while (!dirs.isEmpty()) {
    File current = dirs.poll();
    File[] nestedFiles = current.listFiles();
    for (File nestedFile : nestedFiles)
        if (nestedFile.isDirectory())
            dirs.offer(nestedFile);
    count++;
    System.out.println(current.getName());
}
System.out.println(count + " folders");

```

[/slide]