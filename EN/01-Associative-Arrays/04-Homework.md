[slide]

# Homework

[/slide]

[slide]

# Problem: Word Tracker

[code-task title="Word Tracker" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a function that receives an **array of words** and finds **occurrences of given words** in that sentence.

The input will come as **array of strings**.

The **first string** will contain the **words** you will be looking for separated by a **space**.

All **strings after that** will be the words you will be looking for.

Print **for each word** how many times it **occurs**.

The words should be **sorted by count in descending**.

# Example

| **Input**                                                                                                                                                                 | **Output**    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the' ,'words','this','and','sentence','because','this','is','your','task' ]` | this \- 3     |
|                                                                                                                                                                           | sentence \- 2 |

[/task-description]
[tests]
[test]
[input]
this sentence
In this sentence you have to count the occurances of the words this and sentence because this is your task
[/input]
[output]
this \- 3
sentence \- 2
[/output]
[/test]
[test]
[input]
dara bara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
[/output]
[/test]
[test]
[input]
dara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara - 3
[/output]
[/test]
[test]
[input]
dara sara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
dara sara mara bara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
a b c d
vdsa a rb b dbs a ss b c d sdn bd d
[/input]
[output]
a \- 2
b \- 2
d \- 2
c \- 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
