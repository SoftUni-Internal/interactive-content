[slide hideTitle]
# Predicate Party

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/06-Java-OOP-Basics-Exam-Preparation/EN/02-Predicate-Party-Problem-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Predicate Party" taskId="Java-OOP-Basics-Exam-Preparation-Predicate-Party" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java-code]
```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Write code here
  }
}
```
[/code-editor]
[task-description]
## Description

George's parents are on a vacation for the holidays and he is planning an epic party at home. 

Unfortunately, his organizational skills are not so great, so you are given the task to help him with the reservations.

On the first line, you receive a **list** that will contain all the **people** that are coming. 

On the next lines, until you receive the "**Party!**" command, you may be asked to "**double**"(to add another person with the same name) or to **remove** all of the people that fulfill the **given criteria**. 

There are three different commands: 

- "Double StartsWith \{name\}" - everyone that has a name **starting** with the given string
- "Double EndsWith \{name\}" - everyone that has a name **ending** with a given string
- "Double Length \{integer number\}" - everyone that has a name with the given **length**

You have to print the guests that are coming to the party in **ascending** order.

Finally, print all the guests who are going to the party separated by ", ", and then add the ending "are going to the party!". 

If nobody is going to the party, print "**Nobody is going to the party!**".

See the examples below.

## Examples
| **Input** | **Output** |
| --- | --- |
| Peter Michael Stefanos | Michael, Stefanos are going to the party! |
| Remove StartWith P | |
| Double Length 5 | | 
| Party! | |



| **Input** | **Output** |
| --- | --- |
| Peter | Peter, Peter, Peter, Peter are going to the party! |
| Double StartsWith Pete | | 
| Double EndsWith eter | |
| Party! | | 


| **Input** | **Output** |
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
