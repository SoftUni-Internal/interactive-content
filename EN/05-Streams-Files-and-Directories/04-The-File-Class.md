# The File Class
[slide hideTitle]

# File

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-34-35-File-Class-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The File class represents the files and directory pathnames in an abstract manner.

This class is used for the creation of files and directories, file searching, file deletion, etc.

The File object represents the actual file/directory on the disk. 

Creating a File object, by placing the String representation of the file location in the constructor:

```java
File file = new File("D:\\input.txt");
```
Here are some useful **methods** of the **File** class:

| **Method** | **Description** |
| --- | --- |
| `exists()` | Tests whether the file or directory denoted by this abstract pathname exists. Returns true if and only if the file or directory denoted by this abstract pathname exists; false otherwise. |
| `length()` | Returns the length of the file denoted by this abstract pathname. The return value is unspecified if this pathname denotes a directory. |
| `isDirectory()` | Tests whether the file denoted by this abstract pathname is a directory. Returns true if and only if the file denoted by this abstract pathname exists and is a directory; false otherwise. |
| `listFiles()` | Returns an array of abstract pathnames denoting the files in the directory denoted by this abstract pathname. |


[/slide]



[slide hideTitle]
# Problem with Solution: List Files

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-36-list-files-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Files" taskId="java-advanced-streams-files-lab-list-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]

[task-description]
## Description

There is a folder named "**Files-and-Streams**" in the zip file you downloaded previously.

Create a program that lists the names and file sizes (**in bytes**) of all files that are placed directly in it (**do not include files in the nested folders**).

## Guidelines

Submit only the **output** of your program, **not the code**.


## Examples

## Input:
[image assetsSrc="streams-files-directories-example-input.png" /]

## Output:
input.txt: [size in bytes] 
output.txt: [size in bytes]


[hints]
[hint]
Use the **File** class and its method `listFiles()`:

```java
import java.io.File;

// ...

File[] files = file.listFiles();
```
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test]
[input]
```
input.txt: [14321]
output.txt: [14328]

```
[/input]
[output]
```
input.txt: [14321]
output.txt: [14328]

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
    
[slide hideTitle]
# Problem with Solution: Nested Folders

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-38-Nested-Folders-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Nested Folders" taskId="java-advanced-streams-files-lab-nested-folders" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]

[task-description]
## Description
There is a folder named "**Files-and-Streams**" in the zip file you downloaded previously.

Create a program that lists the names of all directories in it (**including all nested directories**).

On the last line, print the count of all folders, including the root folder.

## Examples

## Input:
[image assetsSrc="streams-files-directories-example-input.png" /]

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
