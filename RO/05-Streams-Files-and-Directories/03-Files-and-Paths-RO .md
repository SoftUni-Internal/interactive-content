# Fișiere și directoare

[slide hideTitle]

# Fișiere și rute

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-28-Files-and-Paths-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java **Path** reprezintă **o cale în sistemul de fișiere**.

O cale poate indica fie un **fișier**, fie un **director**.

**Path** este utilizat pentru a **examina**, **localiza** și **manipular** fișierele.

Un exemplu de acest tip este fișierul input.txt pe care l-am folosit pentru problemele anterioare.

```java
String input = "D:\\input.txt";

Path path = Paths.get(input);
```
Metoda statică `get()` primește ca argument **Reprezentarea String a locației fișierului**.

Prin chemarea unui `Paths.get()` - este creata metoda **instance of Path** .

Instanța Path ne oferă o modalitate ușoară de a crea un flux de bufere utilizând clasele BufferedReader și **Files**.

Să vedem următorul exemplu:


```java
Path path = Paths.get("D:\\input.txt");

try (BufferedReader inputStream = Files.newBufferedReader(path)) {

    String line = inputStream.readLine();
    while (line != null) {
        System.out.println(line);
        line = inputStream.readLine();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```
Prin chemarea unui `newBufferedReader()` - metoda clasei Files, trece calea ca argument, se creează instanța BufferedReader (**Buffered Stream**).

Următorul exemplu ilustrează copierea conținutului unui fișier în altul:

```java
Path inputPath = Paths.get("D:\\input.txt");
Path outputPath = Paths.get("D:\\output.txt");

try  {
    List<String> lines = Files.readAllLines(inputPath);
    Files.write(outputPath, lines);
} catch (IOException e) {
    e.printStackTrace();
}
```
În primul rând, creăm două variabile Path pentru fișierele de intrare și de ieșire.

Apoi, chemam `readallLines()` - metoda clasei Files și trecem variabila **inputPath**.

Metoda `readAllLines()` - returnează o Listă cu toate liniile dintr-un fișier.

Apoi trecem aceasta **Lista** și variabila **outputPath** variable catre Files `write()` - metoda.


[/slide]

[slide hideTitle]

# Files

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-30-31-Files-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasa Files furnizează metode pentru gestionarea fișierelor.

Această clasă este folosită pentru crearea fișierelor și a directoarelor, pentru căutarea fișierelor, ștergerea fișierelor, etc.

- Crearea unui obiect File prin plasarea reprezentării String a locației fișierului în constructor


```java
File file = new File("D:\\input.txt");

try (BufferedReader reader = Files.newBufferedReader(path)) {
    // Do operations on a file
} catch (IOException e) {
    // Handle the exception
}
```

Aici sunt câteva **metode** utile furnizate de clasele **Files** și **Paths**:

| **Metodă** | **Descriere** |
| --- | --- |
| **Files.exists()**| Testează dacă fișierul notat prin acest nume abstract al căii există . Returnează true dacă și numai dacă  fișierul sau directorul notat prin acest nume abstract al căii există; altfel returnează false. |
| **Paths.get()** | Obține calea resursei de la un singur șir sau de la o secvență de șiruri care pot fi unite pentru a forma calea completă.|
| **Files.readAllLines()** | Citește toate liniile dintr-un fișier. |
| **Files.write(outputPath, content)** | Scrie conținutul într-un fișier. |

```Java
Path inPath = Paths.get("D:\\input.txt");
Path outPath = Paths.get("D:\\output.txt");

List<String> lines = Files.readAllLines(inPath);
Files.write(outPath, lines);
```
[/slide]

[slide hideTitle]
# Problemă cu soluție: sortarea liniilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-32-Sort-Lines-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sort Lines" taskId="java-advanced-streams-files-lab-sort-lines" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]

## Descriere

Citiți fișierul dat, denumit "**input.txt**" și sortați toate liniile. 

Scrieți textul către **un alt text a fișierului**.

Utilizați clasele **Path** și **Files**.

## Instrucțiuni

Ar trebui să aveți deja toate resursele necesare descărcate de la cerința precedentă.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.


## Exemple
| **Input** | **Output** |
| --- | --- |
| C | A |
| A | B |
| B | C |
| D | D |

[/task-description]
[code-io /]
[tests]
[test]
[input]
On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes
alone in everything can in nothing find its counterpart. Wherefore your
art of navigating the sea of your potent genius, that genius will
been reported to me--I have given your lordship satisfaction in one
from Florence to Tommaso de' Cavalieri, a youth of noble Roman family,
good, but fortunate. And if I should ever feel assured that--as has
hand. If, therefore, this or that in the works which I hope and promise
instead of having only the future, which cannot be long, since I am all
lordship, _the only light in our age vouchsafed to this worlds_ having
nevertheless excuse me, and neither despise my inequality, nor demand
no equal or peer, cannot find satisfaction in the work of any other
not my letter, for my pen cannot approach the expression of my good
of me that which I have it not in me to give; since that which stands
that the future may bring me; and it will be a great pain to me to be
thing or another, I will make a gift to you of my present and of all
to execute should happen to please you, I should call that work, not
too old. There is nothing more left for me to say. Read my heart and
unable to recall the past, in order to serve you so much the longer,
who afterwards became his favourite pupil: "If I do not possess the
will."[ 3 ]
[/input]
[output]
On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes
alone in everything can in nothing find its counterpart. Wherefore your
art of navigating the sea of your potent genius, that genius will
been reported to me--I have given your lordship satisfaction in one
from Florence to Tommaso de' Cavalieri, a youth of noble Roman family,
good, but fortunate. And if I should ever feel assured that--as has
hand. If, therefore, this or that in the works which I hope and promise
instead of having only the future, which cannot be long, since I am all
lordship, _the only light in our age vouchsafed to this worlds_ having
nevertheless excuse me, and neither despise my inequality, nor demand
no equal or peer, cannot find satisfaction in the work of any other
not my letter, for my pen cannot approach the expression of my good
of me that which I have it not in me to give; since that which stands
that the future may bring me; and it will be a great pain to me to be
thing or another, I will make a gift to you of my present and of all
to execute should happen to please you, I should call that work, not
too old. There is nothing more left for me to say. Read my heart and
unable to recall the past, in order to serve you so much the longer,
who afterwards became his favourite pupil: "If I do not possess the
will."[ 3 ]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]