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
# Homework Results

[tasks-results/]

[/slide]