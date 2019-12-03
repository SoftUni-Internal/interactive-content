[slide]
# Problem: Animal Type
[code-task title="Animal Type" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description

Write a program that prints the **type** of an animal according to its **name**.

# Input / Output

- **dog -> mammal**
- **crocodile, tortoise, snake -> reptile**
- **others -> unknown**

# Example

| **Input** | | **Output** |
| --- | --- | --- |
| dog | | mammal |

| **Input** | | **Output** |
| --- | --- | --- |
| snake | | reptile |

| **Input** | | **Output** |
| --- | --- | --- |
| cat | | unknown |
[/task-description]
[tests]
[test]
[input]
dog
[/input]
[output]
mammal
[/output]
[/test]
[test]
[input]
crocodile
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
tortoise
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
snake
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
cat
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]