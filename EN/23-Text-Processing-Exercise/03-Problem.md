[slide hideTitle]
# Problem: Extract File
[code-task title="Extract File" taskId="python-fundamentals-text-processing-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program that **reads the path to a file** and **subtracts the file name and its extension**.

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Internal\training-internal\Template.pptx | File name: Template | 
| | File extension: pptx |

### Example
| **Input** | **Output** |
| --- | --- |
| C:\Projects\Data-Structures\LinkedList.cs | File name: LinkedList | 
| | File extension: cs |

[/task-description]
[code-io /]
[tests]
[test]
[input]
C:\Internal\training-internal\Template.pptx
[/input]
[output]
File name: Template
File extension: pptx
[/output]
[/test]
[test]
[input]
C:\Projects\Data-Structures\LinkedList.cs
[/input]
[output]
File name: LinkedList
File extension: cs
[/output]
[/test]
[test]
[input]
C:\Internal\training-C#\Strings-and-Text-Processing.doc
[/input]
[output]
File name: Strings-and-Text-Processing
File extension: doc
[/output]
[/test]
[test]
[input]
C:\Pesho\Video\Wrath-of-The-Titans.mkv
[/input]
[output]
File name: Wrath-of-The-Titans
File extension: mkv
[/output]
[/test]
[test]
[input]
C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VS2017.exe
[/input]
[output]
File name: VS2017
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Program Files\Ditto\Ditto.exe
[/input]
[output]
File name: Ditto
File extension: exe
[/output]
[/test]
[test]
[input]
C:\Trash\DesignPatterns\DesignPatterns.sln
[/input]
[output]
File name: DesignPatterns
File extension: sln
[/output]
[/test]
[/tests]
[/code-task]
[/slide]