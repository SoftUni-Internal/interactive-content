# Files and Paths

[slide hideTitle]

# Paths

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-29-Paths-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A Java **Path** instance represents **a path in the file system**.

A path can point to either a **file** or a **directory**.

**Path** is used to **examine**, **locate**, and **manipulate** file paths and directories.

An example of that is input.txt file which we have used for the previous problems.

```java
String input = "D:\\input.txt";

Path path = Paths.get(input);
```

The static method `get()` takes a **String representation of the file location** as input.

The **instance of Path** is created by calling the `Paths.get()` method.

The **Path** instance gives us an easy way to create a **Buffered Stream** by using the BufferedReader and the **Files** class.


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

By calling the `newBufferedReader()` method of the Files class and passing the path as an argument, the BufferedReader instance is created (**Buffered Stream**).

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

Next, we call the `readallLines()` method of the Files class and pass the **inputPath** variable.

The `readAllLines()` method returns a List with all lines in a file.

Then we pass this **List** and the **outputPath** variable to the Files `write()` - method.


[/slide]

[slide hideTitle]

# Files

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-30-31-Files-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Files class provides methods for manipulating files.


This class is used for the creation of files and directories, file searching, file deletion, etc.

- Creating a File object by placing the String representation of the file location in the constructor:


```java
File file = new File("D:\\input.txt");

try (BufferedReader reader = Files.newBufferedReader(path)) {
    // Do operations on a file
} catch (IOException e) {
    // Handle the exception
}
```

Here are a few useful **methods** provided by the **Files** and **Paths** classes:

| **Method** | **Description** |
| --- | --- |
| **Files.exists()**| Tests whether the file or directory denoted by this abstract pathname exists. Returns true if and only if the file or directory denoted by this abstract pathname exists; false otherwise. |
| **Paths.get()** | Converts a path of the resource from a single string that can be joined together with another string to form the complete path. |
| **Files.readAllLines()** | Read all lines from a file. |
| **Files.write(outputPath, content)** | Writes the content to a file. |

```Java
Path inPath = Paths.get("D:\\input.txt");
Path outPath = Paths.get("D:\\output.txt");

List<String> lines = Files.readAllLines(inPath);
Files.write(outPath, lines);
```
[/slide]


[slide hideTitle]
# Problem with Solution: Sort Lines

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-32-Sort-Lines-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sort Lines" taskId="java-advanced-streams-files-lab-sort-lines" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]

[task-description]
## Description

Read the "**input.txt**" file from the resources that you downloaded previously. 

Write the text to **another txt file**.

Use the **Paths** and **Files** Classes.

## Guidelines

You should already have all the required resources downloaded from a previous task.

Submit only the **output** of your program, **not the code**.


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

