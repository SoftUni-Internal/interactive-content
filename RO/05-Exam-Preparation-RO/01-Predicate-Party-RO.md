[slide hideTitle]
# Predicate Party


[code-task title="Predicate Party" taskId="Java-OOP-Basics-Exam-Preparation-Predicate-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java-code]
```

```
[/code-editor]
[task-description]
## Description

George's parents are on a vacation for the holidays and he is planning an epic party at home. 

Unfortunately, his organizational skills are next to non-existent so you are given the task to help him with the reservations.

On the first line, you get a **list** with all the **people** that are coming. 

On the next lines, until you get the "**Party**!" command, you may be asked to **double** or **remove** all of the people that apply to **given criteria**. 

There are three different options: 

- Everyone that has a name **starting** with a given string
- Everyone that has a name **ending** with a given string
- Everyone that has a name with a given **length**

When you print the guests that are coming to the party, you have to print them in **ascending** order.

If nobody is going, print "**Nobody is going to the party!**".

See the examples below.

## Examples
| **Intrare**|**Ieșire**|
| --- | --- |
| Peter Michael Stefanos | Michael, Stefanos are going to the party! |
| Remove StartWith P | |
| Double Length 5 | | 
| Party! | |



| **Intrare**|**Ieșire**|
| --- | --- |
| Peter | Peter, Peter, Peter, Peter are going to the party! |
| Double StartsWith Pete | |
| Double EndsWith eter | |
| Party! | |



| **Intrare**|**Ieșire**|
| --- | --- |
| Peter | Nobody is going to the party! |
| Remove StartsWith P | |
| Party! | | 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter Michael Stefanos
Remove StartsWith P
Double Length 5
Party!
[/input]
[output]
Michael, Stefanos are going to the party!
[/output]
[/test]
[test open]
[input]
Peter
Double StartsWith Pete
Double EndsWith eter
Party!
[/input]
[output]
Peter, Peter, Peter, Peter are going to the party!
[/output]
[/test]
[test open]
[input]
Peter
Remove StartsWith P
Party!
[/input]
[output]
Nobody is going to the party!
[/output]
[/test]
[test]
[input]
Pesho Misho Stefan Gosho Hari Meri pepi stavri loshomie
Remove StartsWith P
Double StartsWith p
Remove Length 4
Party!
[/input]
[output]
Gosho, Misho, Stefan, loshomie, stavri are going to the party!
[/output]
[/test]
[test]
[input]
G
Party!
[/input]
[output]
G are going to the party!
[/output]
[/test]
[test]
[input]
Pesho
Double StartsWith P
Double Length 5
Double EndsWith o
Party!
[/input]
[output]
Pesho, Pesho, Pesho, Pesho, Pesho, Pesho, Pesho, Pesho are going to the party!
[/output]
[/test]
[test]
[input]
Stavri
Double StartsWith P
Double Length 5
Double EndsWith o
Remove Length 5
Double StartsWith Pesho
Double StartsWith S
Party!
[/input]
[output]
Stavri, Stavri are going to the party!
[/output]
[/test]
[test]
[input]
Pesho
Double StartsWith P
Double Length 5
Double EndsWith o
Remove Length 5
Double StartsWith Pesho
Party!
[/input]
[output]
Nobody is going to the party!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
