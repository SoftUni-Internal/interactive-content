# Teme Pentru Acasă


[slide hideTitle]
# Problemă: Sum Lines
[code-task title="Sum Lines" taskId="java-advanced-streams-files-exercise-sum-lines" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere

Scrieți un program care citește fișierul **input.txt** din folderul cu resurse pe care l-ați descărcat și imprimă pe consolă **suma** simbolurilor ASCII ale fiecăreia dintre liniile sale.

Utilizați **BufferedReader** în combinație cu **FileReader**.

## Instrucțiuni

Fișierul zip conține toate fișierele de care veți avea nevoie pentru următoarele sarcini. 

Descărcați **folderul de resurse** [aici](https://videos.softuni.org/resources/java/java-advanced/04-Java-Advanced-Files-and-Streams-Exercise-Resources-New.zip).

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu
| **Intrare** | **Ieșire** |
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
```
1452
1397
2606
670
1573
2028
2762
```
[/input]
[output]
```
1452
1397
2606
670
1573
2028
2762
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Sum Bytes
[code-task title="Sum Bytes" taskId="java-advanced-streams-files-exercise-sum-bytes" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește fișierul **input.txt** din folderul cu resurse pe care l-ați descărcat și imprimă pe consolă **suma** valorilor ASCII ale tuturor caracterelor din fișier.

Utilizați **BufferedReader** în combinație cu **FileReader**.

[hints]
[hint]
Puteți modifica soluția la problema anterioară.
[/hint] 
[hint]
Utilizați un tip fără overflow, precum **long** sau **BigInteger**:

```java
long sum = 0;

// sau

import java.math.BigInteger;
// ...
BigInteger sum = new BigInteger("0");
```
[/hint] 
[/hints] 

## Instrucțiuni

Folosiți resursele primite anterior.

Trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu
| **Intrare** | **Ieșire** |
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
```
12488
```
[/input]
[output]
```
12488
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Capital Letters
[code-task title="Capital Letters" taskId="java-advanced-streams-files-exercise-capital-letters" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește fișierul **input.txt** din folderul cu resurse pe care l-ați descărcat și schimbă toate literele astfel încât textul să conțină doar majuscule.

Scrieți ieșirea în alt fișier (**output.txt**).

Utilizați **BufferedReader** și **PrintWriter**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului, **nu codul**.

## Exemplu
| **Intrare** | **Ieșire** |
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
```
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
```
[/input]
[output]
```
ON JANUARY 1 , 1533 , 
MICHAEL ANGELO, 
THEN FIFTY-SEVEN YEARS OLD, 
WRITES
FROM FLORENCE TO 
TOMMASO DE' CAVALIERI, 
A YOUTH OF NOBLE ROMAN FAMILY,
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Count Character Types
[code-task title="Count Character Types" taskId="java-advanced-streams-files-exercise-count-character-types" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește fișierul **input.txt** din folderul cu resurse pe care l-ați descărcat și determină numărul de **vocale**, **consoane** și **semne de punctuație** .

Să presupunem că:

- **a, e, i, o, u** sunt vocale, doar litere mici
- **toate celelalte** litere sunt consoane
- semnele de punctuație sunt **(! , . ?)**
- spațiile nu trebuie luate în considerare

Scrieți rezultatele în alt fișier - **output.txt**.

Utilizați **BufferedReader** și **PrintWriter**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | Vowels: 41 |
| from Florence to Tommaso de' Cavalieri, a youth of noble Roman family, | Consonants: 72 |
|  | Punctuation: 6 |


[/task-description]
[code-io /]
[tests]
[test]
[input]
```
Vowels: 41
Consonants: 72
Punctuation: 6

```
[/input]
[output]
```
Vowels: 41
Consonants: 72
Punctuation: 6

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Line Numbers
[code-task title="Line Numbers" taskId="java-advanced-streams-files-exercise-line-numbers" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește fișierul **input.txt** din folderul cu resurse pe care l-ați descărcat și **inserează** înaintea fiecărei linii numărul său.

Scrieți rezultatul în alt fișier text - **output.txt**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu
| **Intrare** | **Ieșire** |
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
```
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.

```
[/input]
[output]
```
1. Two households, both alike in dignity,
2. In fair Verona, where we lay our scene,
3. From ancient grudge break to new,
4. Where civil blood makes civil hands.
5. From forth the fatal loins of these two 
6. A pair of star-cross'd lovers take their life;
7. Whose misadventured piteous overthrows
8. Do with their death bury their parents' strife.

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Word Count
[code-task title="Word Count" taskId="java-advanced-streams-files-exercise-word-count" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o listă de cuvinte din fișierul **words.txt** și determină numărul de apariții ale fiecărui cuvânt în fișierul **text.txt**. Ambele fișiere se află în folderul cu resurse pe care l-ați descărcat.

Concordanțele între cuvinte se fac indiferent de scrierea cu majuscule sau minuscule.

Scrieți rezultatele în fișierul **results.txt**.

Ordonați cuvintele crescător în funcție de numărul lor de apariții în fișierul **text.txt**.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| of which The | of - 6 |
|  | which - 2 |
|  | The - 1 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
```
of - 6
which - 2
The - 1

```
[/input]
[output]
```
of - 6
which - 2
The - 1

```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Merge Two Files
[code-task title="Merge Two Files" taskId="java-advanced-streams-files-exercise-merge-two-files" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește conținutul a **două** fișiere de tip text (**inputOne.txt**, **inputTwo.txt**) și **le combină** într-un fișier nou.

## Instrucțiuni
Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.

## Exemplu
| **File 1** | **File 2** | **Ieșire** |
| --- | --- | --- |
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
```
1
2
3
4
5
6
```
[/input]
[output]
```
1
2
3
4
5
6
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Get Folder Size
[code-task title="Get Folder Size" taskId="java-advanced-streams-files-exercise-get-folder-size" executionType="tests-execution" executionStrategy="plaintext" requiresInput]
[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Scrieți un program care **parcurge** un fișier și **calculează** dimensiunea acestuia în octeți.

Utilizați folderul **Exercises Resources** din resurse.

## Instrucțiuni

Folosiți resursele primite anterior.

Pentru fiecare exercițiu trimiteți doar **rezultatul** programului vostru, **nu codul**.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|  | Folder size: 2878 |

[image assetsSrc="08-Strams-Files-and-Directories-Exercise-Get Folder Size.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
```
Folder size: 2878
```
[/input]
[output]
```
Folder size: 2878
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Copy a Picture

Scrieți un program care face o copie a fișierul **cat.jpg** folosind **FileInputStream**, **FileOutputStream** și buffer-ul `byte[]`. 

Folosiți resursele primite anterior.

Denumiți noul fișier **cat-copy.jpg**.

Pentru început, creați un proiect nou și deschideți clasa **Main**.

În fișierul `Main.java`, **importați** elementele necesare, dacă IDE-ul vostru nu a făcut-o deja:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
```

Alternativa este `import java.io.*;`.

În interiorul metodei `main`, creați un bloc `try-catch`:

```java
try {
    // Here, we will initialize the the I/O streams and clone the image. 🧑‍💻
    
} catch (IOException e) {
    // Exception handling logic goes here. 😵
    
}
```

Apoi, în interiorul blocului `try`, creați un flux de intrare pentru imaginea originală.

Inițializați un nou **flux de intrare** folosind `new File("Calea-absolută-către\imaginea-voastră.jpg")`.

Puteți obține calea absolută către imaginea voastră apăsând click-dreapta pe ea, și selectând "**Properties**".

Va apărea o fereastră, iar calea va fi localizată lângă "**Location:**". 

Selectați calea și inserați-o după cum urmează:

```java
FileInputStream inputImage = new FileInputStream(new File("C:\Folder-With-Resources\...\cat.jpg"));
```

După aceea, creați un flux de ieșire cu șirul "**cat-copy.jpg**" drept parametru.

```java
FileOutputStream outputImage = new FileOutputStream("cat-copy.jpg");
```

Creați un **buffer** `byte[]`.

Utilizați o buclă while pentru **a scrie datele** în fluxul de ieșire, ca mai jos.

```java
try {
    FileInputStream inputImage = new FileInputStream(new File("C:\Folder-With-Resources\cat.jpg"));
    FileOutputStream outputImage = new FileOutputStream("cat-copy.jpg");

    int oneByte;
    byte[] buffer = new byte[8192]; // Or more, if you want 🏞
    while ((oneByte = inputImage.read(buffer)) != -1) {
        outputImage.write(buffer, 0, count);
    }

    System.out.println("The image was copied successfully! 😎");
    
} catch (IOException e) {
    System.out.println("There was a problem with the file. 😿");
    e.printStackTrace();
}
```

Imaginea clonată este acum **salvată** în folderul proiectului vostru. 

[/slide]

[slide hideTitle]
# Problemă: Serialize Array List

Scrieți un program care salvează și încarcă într-un fișier un **ArrayList** cu numere de tip double, folosind **ObjectInputStream** și **ObjectOutputStream**. 

Denumiți noul fișier **list.ser**.

IDE-ul vostru trebuie să **importeze** următoarele elemente:

```java
import java.io.*;
import java.util.ArrayList;
```

Pentru a începe, creați un ArrayList de numere de tip **double** în corpul metodei `main()`.

```java
ArrayList<Double> numbers = new ArrayList<>();
```

În continuare, **adăugați** următoarele **numere** în virgulă mobilă:

```java
numbers.add(46.2);
numbers.add(32.5);
numbers.add(11.7);
```

Pentru a identifica posibilele **erori** care apar în operațiile de Intrare/Ieșire, creați un bloc `try-catch`.

```java
try {
    FileOutputStream writeData = new FileOutputStream("list.ser");
    ObjectOutputStream writeStream = new ObjectOutputStream(writeData);

    writeStream.writeObject(numbers);
    writeStream.flush();
    writeStream.close();
    
    System.out.println("The ArrayList was serialized successfully! 😎");

} catch (IOException e) {
    System.out.println("An error occurred. 😿");
    e.printStackTrace();
}
```

Creați un `FileOutputStream` numit **writeData** și setați numele fișierului la **list.ser**.

Prin furnizarea doar a **numelui**, fără o cale, fișierul va fi salvat în directorul principal al proiectului.

`ObjectOutputStream` va fi responsabil de scrierea obiectului în fișierul pe care `FileOutputStream` l-a creat.

Apelarea metodei `writeObject(numbers)` îi transmite programului să înceapă scrierea în **list.ser**.

O practică bună este utilizarea metodei `.flush()` - golește fluxul de ieșire și forțează eliminarea oricăror octeți tamponați de ieșire.

Când deschideți fișierul **list.ser**, veți vedea următoarele date de **ieșire**:

```
���sr�java.util.ArrayListx����a��I�sizexp���w���sr�java.lang.Double���J)k��D�valuexr�java.lang.Number��������xp@G�����sq�~�@@@�����sq�~�@'ffffffx
```

Nu vă îngrijorați dacă nu înțelegeți exact ce se întâmplă, Java poate să citească aceste datefără nicio problemă.

Folosind acest fișier, puteți **deserializa** Arraylist cu ajutorul `ObjectInputStream`.

Eliberați metoda `main()`, și scrieți:

```java
try {
    FileInputStream readData = new FileInputStream("list.ser");
    ObjectInputStream readStream = new ObjectInputStream(readData);

    ArrayList<Double> numbersDsl = (ArrayList<Double>) readStream.readObject();
    readStream.close();
    
    System.out.println(numbersDsl.toString());
    
} catch (Exception e) {
    System.out.println("An error occurred. 😿");
    e.printStackTrace();
}
```

Acum puteți să vedeți datele din ArrayList, tipărite pe **consolă**:

```
[46.2, 32.5, 11.7]
```

[/slide]

[slide hideTitle]
# Problemă: Serialize Custom Object

Scrieți un program care salvează și încarcă informațiile despre un obiect personalizat, folosind **ObjectInputStream** și **ObjectOutputStream**.

Denumiți noul fișier ca **course.ser**.

Creați o **clasă simplă** numită "**Course**" care are următoarele valori la inițializare:

- **name** - șir
    * numele cursului
- **studentsCount** - număr întreg
    * conține **numărul de studenți** care participă la curs

Clasa **trebuie să implementeze** interfața `Serializable`.

Pentru început, creați un fișier nou `Course.java`.

```java
import java.io.Serializable;

public class Course implements Serializable {
    private String name;
    private int studentsCount;

    public Course(String name, int studentsCount) {
        this.name = name;
        this.studentsCount = studentsCount;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getStudentsCount() {
        return this.studentsCount;
    }

    public void setStudentsCount(int studentsCount) {
        this.studentsCount = studentsCount;
    }


    @Override
    public String toString() {
        return new StringBuffer("Course name: ")
                .append(this.name)
                .append(", Students enrolled: ")
                .append(this.studentsCount)
                .toString();
    }

}
```

Odată ce ați terminat de creat clasa, deschideți **Main.java**.

Apoi, realizați o nouă instanță, în interiorul lui `main()`:

```java
Course courseOne = new Course("Programming with Python",  32);
```

Creați un bloc `try-catch`:

```java
try {
    FileOutputStream fileOut = new FileOutputStream("course.ser");
    ObjectOutputStream objectOut = new ObjectOutputStream(fileOut);
    objectOut.writeObject(courseOne);
    objectOut.close();

    System.out.println("The object was succesfully written to a file! ☑️");

} catch (Exception e) {
    System.out.println("An error occurred. 😵");
    e.printStackTrace();
}
```

În interiorul blocului`try`, setați numele fișierului salvat la **course.ser**.

Apoi, creați o instanță `ObjectOutputStream` pentru a scrie obiectul `courseOne` în fișier.

**Închideți** fluxul de ieșire și creați un bloc `catch` pentru **a gestiona erorile**.

În interior, tipăriți **stiva de apeluri**.

Presupunând că nu a apărut nicio eroare, fișierul este acum salvat în directorul proiectului vostru:

```
���sr�com.company.Course�`��/�u�I�
studentsCountL�namet�Ljava/lang/String;xp��� t�Programming with Python
```

Pentru a **deserializa** obiectul, folosiți următorul cod:

```java
Course courseDsl;

try {
    FileInputStream fileIn = new FileInputStream("course.ser");
    ObjectInputStream in = new ObjectInputStream(fileIn);

    courseDsl = (Course) in.readObject();

    in.close();
    fileIn.close();

    System.out.println(courseDsl.toString());

} catch (Exception e) {
    System.out.println("An exception occurred. 😾");
    e.printStackTrace();
}
```

Declarați un nou obiect de tip `Course`, numit **courseDsl**.

Creați un `FileInputStream` pentru a citi **course.ser**. 

Apoi, creați o instanță `ObjectInputStream`.

Metoda `readObject()` este folosită pentru a citi un obiect din `ObjectInputStream`.

După **închiderea** fluxurilor de intrare, folosiți metoda `courseDsl.toString()` pentru a tipări informația: 

```
Course name: Programming with Python, Students enrolled: 32
```

[/slide]

[slide hideTitle]
# Problemă: Create Zip Archive

Scrieți un program care citește trei fișiere **.txt** și creează o arhivă zip denumită **files.zip**.

Folosiți resursele primite anterior:
- **fileOne.txt**
- **fileTwo.txt**
- **fileThree.txt**

Utilizați **FileOutputStream**, **ZipOutputStream**, și **FileInputStream**.

Veți avea nevoie de următoarele **importuri** în `Main.java`:

```java
import java.io.*;
import java.util.*;
import java.util.zip.*;
```

În interiorul lui `main()`, declarați calea dorită pentru noul fișier `files.zip`:

```java
String zipFile = "C:/files.zip";
```

Apoi, creați o matrice cu toate căile pentru cele trei fișiere `.txt`:

```java
String[] sourceFiles = { "C:/fileOne.txt", "C:/fileTwo.txt", "C:/fileThree.txt"};
```

Creați un bloc try-catch și un **buffer** `byte[]`.
 
```java
try {

    // Create a byte[] buffer
    byte[] buffer = new byte[1024];

    FileOutputStream fileOut = new FileOutputStream(zipFile);

    ZipOutputStream zipOut = new ZipOutputStream(fileOut);

    for (int i=0; i < sourceFiles.length; i++) {

        File sourceFile = new File(sourceFiles[i]);

        FileInputStream fileIn = new FileInputStream(sourceFile);

        // Start writing a new ZIP entry
        // Positioning the stream to the start of the entry data
        zipOut.putNextEntry(new ZipEntry(sourceFile.getName()));

        int length;

        while ((length = fileIn.read(buffer)) > 0) {
            zipOut.write(buffer, 0, length);
        }

        zipOut.closeEntry();

        // Closing the InputStream
        fileIn.close();

    }
    
    // Closing the ZipOutputStream
    zipOut.close();

    System.out.println("The zip file was created successfully. 👏");
    

}
catch (IOException e) {
    System.out.println("There was an error creating the file. 😨");
}

```

Folosind o **buclă for**, iterăm prin matricea `sourceFiles`.

Scriem fiecare fișier în fluxul `zipOut` folosind un buffer `byte[]`.

După cum vedeți mai sus, putem folosi clasa `ZipEntry`, folosită pentru a reprezenta o înregistrare a unui fișier ZIP.

Fișierul vostru `.zip` este acum salvat în director, fiind declarat în șirul `zipFile`.

[/slide]
