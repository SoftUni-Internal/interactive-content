# Clasa de Fișiere

[slide hideTitle]
# Clasa de Fișiere în Java

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-34-35-File-Class-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa de fișiere în Java reprezintă fișierele și numele de cale ale directorului într-un mod abstract.

Această clasă este utilizată pentru crearea fișierelor și directoarelor, căutarea fișierelor, ștergerea fișierelor etc.

Obiectul a fișierului reprezintă  fișierul/directorul real de pe disc.

Crearea unui obiect a Fișierului, prin plasarea reprezentării String a locației fișierului în constructor:

```java
File file = new File("D:\\input.txt");
```
Unele dintre metodele **utile** din clasa **Fișier** sunt:

| **Metoda** | **Descriere** |
| --- | --- |
| `exists()` | Testează dacă fișierul sau directorul indicat de această cale abstractă există. Returnează true if și only if fișierul sau directorul indicat de această cale abstractă există; altfel false. |
| `length()` |Returnează lungimea fișierului indicat de acestă cale abstractă. Valoarea returnată nu este specificată dacă această cale este indicata  de un director. |
| `isDirectory()` | Testează dacă fișierul indicat de această cale abstractă este un director. Returnează true if și only if daca fișierul indicat cu acestă cale abstractă există și este un director; altfel false.|
| `listFiles()` | Returnează un matrice de nume de căi abstracte care indică fișierele din directorul indicat de această cale abstractă. |

[/slide]



[slide hideTitle]
# Problemă cu Soluție: List Files

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-36-list-files-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Files" taskId="java-advanced-streams-files-lab-list-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere

Aveți un fișier numit "**Files-and-Streams**".

Creați un program care listează numele și dimensiunile fișierelor (**în octeți**) ale tuturor fișierelor care sunt plasate direct în el (**nu includeți fișierele în folderele imbricate**).

## Instrucțiuni

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.


## Exemplu

## Intrare
[image assetsSrc="streams-files-directories-example-input.png" /]

## Ieșire
input.txt: [size in bytes] 
output.txt: [size in bytes]


## Sugestii
- Utilizați clasa **File** și metoda sa `listFiles()`


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
Aveți un fișier numit "**Files-and-Streams**".

Creați un program care care listează numele tuturor directoarelor din acesta (**inclusiv toate directoarele imbricate**).

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
