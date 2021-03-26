# Teme pentru acasă


[slide hideTitle]
# Problemă: Adunarea Liniilor
[code-task title="Sum Lines" taskId="java-advanced-streams-files-exercise-sum-lines" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere

Scrieți un program care citește un fișier de tip text (**input.txt** din the Resources - Folder) și imprimă pe consolă **suma** simbolurilor ASCII ale fiecăreia dintre liniile sale.

Utilizați **BufferedReader** în combinație cu **FileReader**.

## Instrucțiuni

Există un fișier zip cu resurse pentru toate exercițiile, pe care trebuie să îl utilizați.

Descărcați **folderul de resurse** [here](https://videos.softuni.org/resources/java/java-advanced/04-Java-Advanced-Files-and-Streams-Exercise-Resources.zip).

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | 1452 |
| Michael Angelo,  | 1397 |
| then fifty-seven years old,  | 2606 |
| writes | 670 |
| from Florence to  | 1573 |
| Tommaso de' Cavalieri,  | 2028 |
| a youth of noble Roman family, | 2762 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1452
1397
2606
670
1573
2028
2762
[/input]
[output]
1452
1397
2606
670
1573
2028
2762
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Suma octeților
[code-task title="Sum Bytes" taskId="java-advanced-streams-files-exercise-sum-bytes" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește un fișier de tip text (**input.txt** din Resources - Folder) și imprimă pe consolă **suma** simbolurilor ASCII ale tuturor caracterelor din fișierul.

Utilizați **BufferedReader** în combinație cu **FileReader**.

## Sugestii

- Puteți modifica soluția la problema anterioară
- Utilizați un tip care nu se va revărsa ca **long** sau **BigInteger**

## Instrucțiuni

Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | 12488 |
| Michael Angelo,  |  |
| then fifty-seven years old,  |  |
| writes |  |
| from Florence to  |  |
| Tommaso de' Cavalieri,  |  |
| a youth of noble Roman family, |  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
12488
[/input]
[output]
12488
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: LITERE MAJUSCULE
[code-task title="CAPITAL LETTERS" taskId="java-advanced-streams-files-exercise-capital-letters" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește un fișier de tip text (**input.txt** din Resurces - Folder) și schimbă carcasa **tuturor** litere spre **superior**.

Scrieți ieșirea într-un alt fișier (**output.txt**).

Utilizați **BufferedReader** și **PrintWriter**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | ON JANUARY 1 , 1533 ,  |
| Michael Angelo,  | MICHAEL ANGELO,  |
| then fifty-seven years old,  | THEN FIFTY-SEVEN YEARS OLD,  |
| writes | WRITES |
| from Florence to  | FROM FLORENCE TO  |
| Tommaso de' Cavalieri,  | TOMMASO DE' CAVALIERI,  |
| a youth of noble Roman family, | A YOUTH OF NOBLE ROMAN FAMILY, |

[/task-description]
[code-io /]
[tests]
[test]
[input]
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
[/input]
[output]
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: calcularea tipurilor de caractere
[code-task title="Count Character Types" taskId="java-advanced-streams-files-exercise-count-character-types" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o listă de cuvinte din fișierul (**input.txt** din Resources - Folder) și calculează numărul de **vocale**, **consoane** și **semne de punctuație** .

Să presupunem că:

- **a, e, i, o, u** sunt vocale, doar cu litere mici
- **Toate celelalte** sunt consoane
- Semnele de punctuație sunt **(!,.?)**
- **Să nu** calculați whitespace.

Scrieți rezultatele într-un alt fișier - **output.txt**.

Utilizați **BufferedReader** și **PrintWriter**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple

| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | Vowels: 41 |
| from Florence to Tommaso de' Cavalieri, a youth of noble Roman family, | Consonants: 72 |
|  | Punctuation: 6 |


[/task-description]
[code-io /]
[tests]
[test]
[input]
Vowels: 41
Consonants: 72
Punctuation: 6
[/input]
[output]
Vowels: 41
Consonants: 72
Punctuation: 6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Numere de linie
[code-task title="Line Numbers" taskId="java-advanced-streams-files-exercise-line-numbers" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește un fișier de tip text (**input.txt** din Resources - Folder) și **insertează**  numerele de linie în fața fiecăreia dintre liniile sale.

Scrieți rezultul într-un alt fișier - **output.txt**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| Two households, both alike in dignity, | 1. Two households, both alike in dignity, |
| In fair Verona, where we lay our scene, | 2. In fair Verona, where we lay our scene, |
| From ancient grudge break to new, | 3. From ancient grudge break to new, |
| Where civil blood makes civil hands. | 4. Where civil blood makes civil hands. |
| From forth the fatal loins of these two | 5. From forth the fatal loins of these two  |
| A pair of star-cross'd lovers take their life; | 6. A pair of star-cross'd lovers take their life; |
| Whose misadventured piteous overthrows | 7. Whose misadventured piteous overthrows |
| Do with their death bury their parents' strife. | 8. Do with their death bury their parents' strife. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.
[/input]
[output]
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Calcularea cuvintelor
[code-task title="Word Count" taskId="java-advanced-streams-files-exercise-word-count" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o listă de cuvinte din fișierul **words.txt** (din Resources - Folder) și găsește de câte ori fiecare dintre cuvintele **se conține** într-un alt fișier **text.txt** (din Resources – Folder).

Potrivirea trebuie să fie **diferențiată de majuscule**.

Scrieți rezultatele în fișierul **results.txt**.

Sortați cuvintele după frecvență în **ordine descrescătoare**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| of which The | of - 6 |
|  | which - 2 |
|  | The - 1 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
of - 6
which - 2
The - 1
[/input]
[output]
of - 6
which - 2
The - 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: combinarea de două fișiere
[code-task title="Merge Two Files" taskId="java-advanced-streams-files-exercise-merge-two-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește conținutul a **două** fișiere de tip text (**inputOne.txt** , **inputTwo.txt** din Resources - Folder) și **le combină** într-un al treilea fișier.

## Instrucțiuni
Use the previously provided resources.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **File 1** | **File 2** | **Output** |
| --- | --- |
| 1 | 4 | 1 |
| 2 | 5 | 2 |
| 3 | 6 | 3 |
|  |  | 4 |
|  |  | 5 |
|  |  | 6 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
2
3
4
5
6
[/input]
[output]
1
2
3
4
5
6
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: obținerea dimensiunii fișierului
[code-task title="Get Folder Size" taskId="java-advanced-streams-files-exercise-get-folder-size" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **parcurge** un fișier și **calculează** dimensiunea acestuia în octeți.

Use the **Exercises Resources** folder in the resources.

## Instrucțiuni

Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.


## Examples
| **Input** | **Output** |
| --- | --- |
|  | Folder size: 2878 |

[image assetsSrc="08-Strams-Files-and-Directories-Exercise-Get Folder Size.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
Folder size: 2878
[/input]
[output]
Folder size: 2878
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: copierea unei imagini

Scrieți un program care face o copie a unui fișier **.jpg** folosind **FileInputStream**, **FileOutputStream**, și `byte[]` buffer. 

Denumiți noul fișier ca **picture-copy.jpg**.

To start, pick a random image.

Then, create a new project and open the **Main** class.

Inside the `main` method, create a `try-catch` block:

```java
try {
    // Here, we will initialize the the I/O streams and clone the image. 🧑‍💻
    
} catch (IOException e) {
    // Exception handling logic goes here. 😵
    
}
```

Then, inside the `try` block, create an input stream for the original image.

Initialize a new **input stream** using `new File("the-absolute-path-to-your\\image")`.

You can get the absolute path to your image by right-clicking on it, and choosing "**Properties**".

After that, create an **output stream** with the "**picture-copy.jpg**" string as a parameter.

Create a `byte[]` buffer with a size **bigger than or equal to** your image size, in bytes.

Use a while loop to **write the data** to the output stream, as shown below.

```java
try {
    FileInputStream inputImage = new FileInputStream(new File("C:\\Folder1\\picture.jpg"));
    FileOutputStream outputImage = new FileOutputStream("picture-copy.jpg");

    int oneByte;
    byte[] buffer = new byte[8192]; // The size should be >= to that of your image. 🏞
    while ((oneByte = inputImage.read(buffer)) != -1) {
        outputImage.write(buffer, 0, count);
    }

    System.out.println("The image was copied successfully! 😎");
    
} catch (IOException e) {
    System.out.println("The file is either corrupted or missing. 😿");
}
```

The cloned image is now **saved** in your project folder.

[/slide]

[slide hideTitle]
# Problemă: Serializarea listei de matrice

Scrieți un program care salvează și încarcă un **List de matrice** de duble într-un fișier folosind **ObjectInputStream** și **ObjectOutputStream**. 

Denumiți noul fișier ca **list.ser**.

[/slide]

[slide hideTitle]
# Problemă: Serializarea obiectului personalizat

Scrieți un program care salvează și încarcă informațiile despre un obiect personalizat folosind **ObjectInputStream** și **ObjectOutputStream**.

Creați o **clasă simplă** numită "Course" care are un **câmp șir** care conține **numele său** și un **câmp întreg** care conține **numărul de studenți** care participă la curs.

Denumiți noul fișier ca **course.ser**.

[/slide]

[slide hideTitle]
# Problemă: crearea  arhivei Zip

Scrieți un program care citește trei fișiere **.txt** și creează o arhivă zip denumită **files.zip**.

Utilizați **FileOutputStream**, **ZipOutputStream**, și **FileInputStream**.

[/slide]
