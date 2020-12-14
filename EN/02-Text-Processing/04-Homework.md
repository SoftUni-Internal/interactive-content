# Homework

[slide]
# Problem: Reveal Words
[code-task title="Problem: Reveal Words" taskId="js-advanced-text-processing-Reveal-Words" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function revealWords(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description
Write a function, which receives two parameters.

The first parameter will be a string with some words separated by `, `.

The second parameter will be a string which contains templates containing `*`.

Find the word with the exact same length as the template and replace it.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['great', 'softuni is ***** place for learning new programming languages']`| softuni is great place for learning new programming languages |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
great
softuni is \*\*\*\*\* place for learning new programming languages
[/input]
[output]
softuni is great place for learning new programming languages
[/output]
[/test]
[test open]
[input]
great, learning
softuni is \*\*\*\*\* place for \*\*\*\*\*\*\*\* new programming languages
[/input]
[output]
softuni is great place for learning new programming languages
[/output]
[/test]
[test]
[input]
pesho
jdsakl as \*\*\*\*\* dsajkk hdsj
[/input]
[output]
jdsakl as pesho dsajkk hdsj
[/output]
[/test]
[test]
[input]
pesho, goshho
jdsakl as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj
[/input]
[output]
jdsakl as pesho dsajkk goshho hdsj
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko
jdsakl as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl as pesho dsajkk goshho hdsj stamatko
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko, kiro
jdsakl \*\*\*\* as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl kiro as pesho dsajkk goshho hdsj stamatko
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko, kiro, b
jdsakl \*\*\*\* as \*\*\*\*\* dsajkk \*\*\*\*\*\* \* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl kiro as pesho dsajkk goshho b hdsj stamatko
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: 2.	Modern Times of HashTag
[code-task title="Problem: Modern Times of HashTag" taskId="js-advanced-text-processing-Modern-Times-of HashTag" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function modernTimesOfHashTag(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description
The input will be a **single string.**

Find all special words **starting with** `#`.

Word is invalid if it has **anything** other than **letters**.

Print the words you found without the tag each on a new line.

# Example
  | **Input** | **Output** |
| --- | --- |
|`[''Nowadays everyone uses # to tag a #special word in #socialMedia']`| special
socialMedia
 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Nowadays everyone uses \# to tag a \#special word in \#socialMedia
[/input]
[output]
special
socialMedia
[/output]
[/test]
[test]
[input]
hjahd hasjk ag dwgyw gdyag dgsydwu shusia \#jkdlsa dasjkfjkj \#dsdas
[/input]
[output]
jkdlsa
dsdas
[/output]
[/test]
[test]
[input]
hjag dgsydwu shusia \#545A dasjkfjkj \#sdas
[/input]
[output]
sdas
[/output]
[/test]
[test]
[input]
nj kwuei euie ruiw eop oerr \# \#sa
[/input]
[output]
sa
[/output]
[/test]
[test]
[input]
nj \#kwuei \#euiAAe \#32432\\$\\$\\$\\$ ruiw eop oerr \# \#sa
[/input]
[output]
kwuei
euiAAe
sa
[/output]
[/test]
[test]
[input]
nj \#nnj
[/input]
[output]
nnj
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Extract File
[code-task title="Problem: Extract File" taskId="js-advanced-text-processing-Extract-File" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function extractFile(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
Write a function that receives a single string - the path to a file (the `\` character is escaped)
Your task is to subtract the **file name** and its extension. (Beware of files like **template.bak.pptx**, as **template.bak** should be the file name, while pptx is the extension).

# Example
  | **Input** | **Output** |
| --- | --- |
|`['C:\\Internal\\training-internal\\Template.pptx']`| File name: Template |
||File extension: pptx|

 | **Input** | **Output** |
| --- | --- |
|`['C:\\Projects\\Data-Structures\\LinkedList.cs']`|File name: LinkedList |
||File extension: cs|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
C:\Internal\training-internal\Template.pptx
[/input]
[output]
File name: Template
File extension: pptx
[/output]
[/test]
[test open]
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
E:\P\JAVA\src\oop\Main.java
[/input]
[output]
File name: Main
File extension: java
[/output]
[/test]
[test]
[input]
E:\EX\csharp\CatShop.sln
[/input]
[output]
File name: CatShop
File extension: sln
[/output]
[/test]
[test]
[input]
E:\P\JAVA\src\oop\Bor.xml
[/input]
[output]
File name: Bor
File extension: xml
[/output]
[/test]
[test]
[input]
E:\Trash\MoreTrash\SoftUniExamsSolutions.txt
[/input]
[output]
File name: SoftUniExamsSolutions
File extension: txt
[/output]
[/test]
[test]
[input]
E:\TECH-SVN\Java\07-Objects-and-Classes\Exercise\07.Objects-and-Classes-Exercise.docx
[/input]
[output]
File name: 07.Objects-and-Classes-Exercise
File extension: docx
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: String Substring
[code-task title="String Substring" taskId="js-advanced-text-processing-String-Substring" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function stringSubstring(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
The input will be given as **two** separated strings.

Write a function that checks given text for containing a given word.

The comparison should be **case insensitive.**

Once you find match, print the word and stop the program.

If you don't find the word print `{word} not found!`


# Example
  | **Input** | **Output** |
| --- | --- |
|`['javascript', 'JavaScript is the best programming language']`| javascript |
|`['python','JavaScript is the best programming language']`| python not found\! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
javascript
JavaScript is the best programming language
[/input]
[output]
javascript
[/output]
[/test]
[test open]
[input]
python
JavaScript is the best programming language
[/input]
[output]
python not found!
[/output]
[/test]
[test]
[input]
java
Java is the best programming language
[/input]
[output]
java
[/output]
[/test]
[test]
[input]
chushki
Jaba is chushki the best jaba programming language
[/input]
[output]
chushki
[/output]
[/test]
[test]
[input]
chushki
bla bla bla
[/input]
[output]
chushki not found!
[/output]
[/test]
[test]
[input]
drashki
bla bla bla drashki
[/input]
[output]
drashki
[/output]
[/test]
[test]
[input]
drashki
bla bla bla nodrashki
[/input]
[output]
drashki not found!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Homework Results

[tasks-results/]

[/slide]