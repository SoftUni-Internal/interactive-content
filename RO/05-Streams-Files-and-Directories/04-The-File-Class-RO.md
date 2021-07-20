# Clasa File

[slide hideTitle]
# File

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-34-35-File-Class-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa File reprezintă numele căilor fișierelor și directoarelor într-un mod abstract.

Această clasă este utilizată pentru crearea fișierelor și directoarelor, căutarea fișierelor, ștergerea fișierelor etc.

Obiectul File reprezintă fișierul/directorul propiu-zis de pe disc.

Crearea unui obiect File, prin plasarea reprezentării String a locației fișierului în constructor:

```java
File file = new File("D:\\input.txt");
```
Mai jos sunt enumerate câteva metode **utile** ale clasei **File**:

| **Metoda** | **Descriere** |
| --- | --- |
| `exists()` | Testează dacă fișierul sau directorul indicat de această cale abstractă există. Returnează true dacă și numai dacă fișierul sau directorul indicat de această cale abstractă există; altfel va returna false. |
| `length()` |Returnează lungimea fișierului indicat de această cale abstractă. Valoarea returnată nu este specificată dacă această cale indică un director. |
| `isDirectory()` | Testează dacă fișierul indicat de această cale abstractă este un director. Returnează true dacă și numai dacă fișierul indicat de acestă cale abstractă există și este un director; altfel va returna false.|
| `listFiles()` | Returnează o matrice de căi abstracte care indică fișierele din directorul indicat de această cale abstractă. |

[/slide]



[slide hideTitle]
# Problemă cu Soluție: List Files

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-36-list-files-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Files" taskId="java-advanced-streams-files-lab-list-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere

Aveți un folder numit "**Files-and-Streams**" în fișierul zip pe care l-ați descărcat anterior.

Creați un program care listează numele și dimensiunile (**în octeți**) tuturor fișierelor care sunt plasate direct în acest folder (**nu includeți fișierele din folderele imbricate**).

## Instrucțiuni

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.


## Exemplu

## Intrare
[image assetsSrc="streams-files-directories-example-input.png" /]

## Ieșire
input.txt: [size in bytes] 
output.txt: [size in bytes]


[hints]
[hint]
Utilizați clasa **File** și metoda sa `listFiles()`:

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
# Problemă cu Soluție: Nested Folders

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-38-Nested-Folders-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Nested Folders" taskId="java-advanced-streams-files-lab-nested-folders" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Aveți un folder numit "**Files-and-Streams**" în fișierul zip pe care l-ați descărcat anterior.

Creați un program care care listează numele tuturor directoarelor din acest folder (**inclusiv toate directoarele imbricate**).

Pe ultima linie, imprimați numărul tuturor fișierelor, inclusiv fișierul rădăcină.

## Intrare
[image assetsSrc="streams-files-directories-example-input.png" /]

## Ieșire:
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
