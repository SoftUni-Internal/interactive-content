# Refactoring

[slide hideTitle]

# Refactoring

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-16-17-Refactoring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Refactorizare înseamnă restructurarea codului fără a-i schimba comportamentul**.

- **Îmbunătățește** lizibilitatea codului
- **Reduce** complexitatea

Example:

Înainte de refactorizare:

```java
class ProblemSolver { public static void doMagic() { … } }
```
Dupa refactorizare:

```java
class CommandParser { 
	public static <T> Function<T, T> parseCommand() { … } }
class DataModifier { public static <T> T execute() { … } }
class OutputFormatter { public static void print() { … } }
```
[/slide]

[slide hideTitle]
# Tehnici de refactorizare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-18-Refactoring-Techniques-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Breaking code** în unități reutilizabile
- **Extragerea părților din metode** și **clase** în cele **noi**.

`depositOrWithdraw()` => `deposit()`; `withdraw()`

- **Îmbunătățirea numelor** a variabilelor, metodelor, claselor etc.

`String str;` => `String name;`

- **Mutarea metodelor** sau **câmpurilor** în clase mai adecvate

`Car.open();` => `Door.open;`

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Student System

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-19-student-system-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Student System" taskId="oop-basics-java-more-oop-concepts-lab-Student-System" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere

Aveți **un proiect de lucru**  pentru un mic **Sistem al Student**, dar codul este foarte prost organizat. Împărțiți codul **logic** în **unități funcționale mai mici - metode** și **clas** și nu întrerupeți funcționalitatea.

Programul acceptă următoarele comenzi::
- "**Create studentName studentAge studentGrade**" - creează un student nou și îi adaugă în depozit
- "**Show studentName**" - imprimă pe consolă informații despre un student în formatul:
    - "\{**studentName**\} **is** \{**studentAge**\} **years old.** \{**commentary**\}", unde **comentariul** se bazează pe nota studentului
- "**Exit**" - închide programul

**Nu** adăugați nicio **validare suplimentară** sau **funcționalitate** aplicației!

Descărcați fișierul cu resurse [here](https://mega.nz/file/7JgGDZzD#L37q5RDXatFRTFlsQiRZnSJPlNvXoSydMGlRl0xUWiM)

## Trimitere
Submit .zip

## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| Create Bob 20 5.50 | Bob is 20 years old. Excellent student. |
| Create Melany 18 4.50 | Melany is 18 years old. Average student. |
| Create George 25 3 |  |
| Show Bob |  |
| Show Melany |  |
| Exit |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create Bob 20 5.50
Create Melany 18 4.50
Create George 25 3
Show Bob
Show Melany
Exit
[/input]
[output]
Bob is 20 years old. Excellent student.
Melany is 18 years old. Average student.
[/output]
[/test]
[test]
[input]
Create Todor 19 2.00
Show Sasho
Show Todor
Create Sasho 20 3.00
Show Todor
Show Sasho
Exit
[/input]
[output]
Todor is 19 years old. Very nice person.
Todor is 19 years old. Very nice person.
Sasho is 20 years old. Very nice person.
[/output]
[/test]
[test]
[input]
Create Maria 80 5.7
Create Pesho 25 4.5
Create Gosho 12 3.00000
Exit
[/input]
[output]

[/output]
[/test]
[test]
[input]
Create Pesho -20 -20
Show Pesho
Exit
[/input]
[output]
Pesho is -20 years old. Very nice person.
[/output]
[/test]
[test]
[input]
Create Stamat 12 6.00
Show Stamat
Show Stamat
Create Stamat 20 4.00
Show Stamat
Exit
Show Stamat
[/input]
[output]
Stamat is 12 years old. Excellent student.
Stamat is 12 years old. Excellent student.
Stamat is 12 years old. Excellent student.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
