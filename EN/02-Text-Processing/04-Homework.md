# Homework

[slide]
# Problem: Reveal Words
[code-task title="Reveal Words" taskId="js-advanced-text-processing-Reveal-Words" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
# Problem: Modern Times of HashTag
[code-task title="Modern Times of HashTag" taskId="js-advanced-text-processing-Modern-Times-of HashTag" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
[code-task title="Extract File" taskId="js-advanced-text-processing-Extract-File" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
# Problem: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="js-advanced-text-processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function replaceRepeatingChars(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
Write a function that receives a single string and **replaces** any sequence of the **same letters** with a single corresponding letter.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['aaaaabbbbbcdddeeeedssaa']`| abcdedsa |
|`['qqqwerqwecccwd']`| qwerqwecwd |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
aaaaabbbbbcdddeeeedssaa
[/input]
[output]
abcdedsa
[/output]
[/test]
[test open]
[input]
qqqwerqwecccwd
[/input]
[output]
qwerqwecwd
[/output]
[/test]
[test]
[input]
aaaaaaaa
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
bbbbbbbbb
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
aaaaabbbbbbbcccceeede
[/input]
[output]
abcede
[/output]
[/test]
[test]
[input]
kkddidkkgiiggbd
[/input]
[output]
kdidkgigbd
[/output]
[/test]
[test]
[input]
asdasdasd
[/input]
[output]
asdasdasd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Pascal-Case Splitter

[code-task title="Pascal-Case Splitter" taskId="js-advanced-text-processing-Pascal-Case-Splitter" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function splitter(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
You will receive a **single string.**

This string is written in **PascalCase** format.

Your task here is to split this string by **every word** in it.

Print them joined by **comma and space.**

# Example
  | **Input** | **Output** |
| --- | --- |
|`['SplitMeIfYouCanHaHaYouCantOrYouCan']`| Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can |
|`['HoldTheDoor']`| Hold, The, Door |
|`['ThisIsSoAnnoyingToDo']`| This, Is, So, Annoying, To, Do |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SplitMeIfYouCanHaHaYouCantOrYouCan
[/input]
[output]
Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
[/output]
[/test]
[test open]
[input]
HoldTheDoor
[/input]
[output]
Hold, The, Door
[/output]
[/test]
[test open]
[input]
ThisIsSoAnnoyingToDo
[/input]
[output]
This, Is, So, Annoying, To, Do
[/output]
[/test]
[test]
[input]
BdgshajTgdshDdsadasFF
[/input]
[output]
Bdgshaj, Tgdsh, Ddsadas, F, F
[/output]
[/test]
[test]
[input]
AhjbhbBsgasf
[/input]
[output]
Ahjbhb, Bsgasf
[/output]
[/test]
[test]
[input]
AhjbhbBsgasfCaXa
[/input]
[output]
Ahjbhb, Bsgasf, Ca, Xa
[/output]
[/test]
[test]
[input]
AhjbhbBsgasNNNMfCaXa
[/input]
[output]
Ahjbhb, Bsgas, N, N, N, Mf, Ca, Xa
[/output]
[/test]
[test]
[input]
Mhjbhb
[/input]
[output]
Mhjbhb
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Cut and Reverse
[code-task title="Cut and Reverse" taskId="js-advanced-text-processing-Cut-and-Reverse" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cutAndReverse(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
The input will be a **single string.**

Write a function that cuts the given string **into half** and reverse the **two halves.**

Print each half on a **separate line.**

# Example
  | **Input** | **Output** |
| --- | --- |
|`['tluciffiDsIsihTgnizamAoSsIsihT']`| ThisIsDifficult|
||ThisIsSoAmazing|

  | **Input** | **Output** |
| --- | --- |
|`['sihToDtnaCuoYteBIboJsihTtAdooGoSmI']`| IBetYouCantDoThis|
||ImSoGoodAtThisJob|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
tluciffiDsIsihTgnizamAoSsIsihT
[/input]
[output]
ThisIsDifficult
ThisIsSoAmazing
[/output]
[/test]
[test open]
[input]
sihToDtnaCuoYteBIboJsihTtAdooGoSmI
[/input]
[output]
IBetYouCantDoThis
ImSoGoodAtThisJob
[/output]
[/test]
[test]
[input]
adahjfvgshfgeegy
[/input]
[output]
gvfjhada
ygeegfhs
[/output]
[/test]
[test]
[input]
uiuyiuyuiy
[/input]
[output]
iyuiu
yiuyu
[/output]
[/test]
[test]
[input]
DRT2\\$%\#dgh
[/input]
[output]
\\$2TRD
hgd\#%
[/output]
[/test]
[test]
[input]
DRT2\\$s%\#Adgh
[/input]
[output]
s\\$2TRD
hgdA\#%
[/output]
[/test]
[test]
[input]
VDSHvdgshVSGDA
[/input]
[output]
gdvHSDV
ADGSVhs
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Homework Results

[tasks-results/]

[/slide]