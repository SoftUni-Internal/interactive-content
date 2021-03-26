Changed Strategy TypeChanged Strategy Type# Fluxuri de bază în Java


[slide hideTitle]

# Fluxuri de octeți

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-15-16-Byte-Stream-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fluxurile de octeți în Java sunt utilizate pentru a efectua intrarea și ieșirea de octeți pe 8 biți.

Fluxurile de octeți sunt fluxuri de cel mai scăzut nivel.

Caracteristica lor principală este că acestea pot citi sau scrie doar un singur octet la un moment dat.

Toate fluxurile de octeți coboară din clasele InputStream și OutputStream.

Chiar daca există multe clase legate de fluxurile de octețit insa cele mai frecvent utilizate clase sunt **FileInputStream** și **FileOutputStream**.

- **InputStream este o secvență de octeți care se termină cu -1**, care este un caracter special **care marchează sfârșitul fișierului**.

[image assetsSrc="streams-files-directories-example(3).png" /]

- **OutputStream constă numai din octeți**, care vor fi scrise.

[image assetsSrc="streams-files-directories-example(4).png" /]


[/slide]

[slide hideTitle]
# Problemă cu soluție: Copierea octeților

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-17-Copy-Bytes-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Copy Bytes" taskId="java-advanced-streams-files-lab-copy-bytes" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[/code-editor]
[task-description]
## Descriere
Citiți fișierul numit "**input.txt**" și scrieți într-un alt fișier fiecare caracter al **ASCII**.

Scrieți fiecare spațiu sau linie nouă așa cum este, de ex. ca un spațiu sau o nouă linie.
## Instrucțiuni

Ar trebui să aveți deja toate resursele necesare descărcate de la cerința precedentă.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | 79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 119114105116101115 |


[/task-description]
[code-io /]
[tests]
[test]
[input]
79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 11911410511610111513
102114111109 7010811111410111099101 116111 8411110910997115111 10010139 67971189710810510111410544 97 121111117116104 111102 11011198108101 8211110997110 102971091051081214413
119104111 9710211610111411997114100115 981019997109101 104105115 10297118111117114105116101 11211711210510858 3473102 73 100111 110111116 112111115115101115115 11610410113
97114116 111102 1109711810510397116105110103 116104101 11510197 111102 121111117114 112111116101110116 10310111010511711544 11610497116 103101110105117115 11910510810813
110101118101114116104101108101115115 10112099117115101 10910144 97110100 110101105116104101114 100101115112105115101 109121 1051101011131179710810511612144 110111114 1001011099711010013
111102 109101 11610497116 11910410599104 73 10497118101 105116 110111116 105110 109101 116111 10310511810159 11510511099101 11610497116 11910410599104 1151169711010011513
97108111110101 105110 101118101114121116104105110103 9997110 105110 110111116104105110103 102105110100 105116115 991111171101161011141129711411646 87104101114101102111114101 12111111711413
10811111410011510410511244 95116104101 111110108121 108105103104116 105110 111117114 97103101 1181111179910411597102101100 116111 116104105115 11911111410810011595 1049711810511010313
110111 10111311797108 111114 11210110111444 9997110110111116 102105110100 115971161051151029799116105111110 105110 116104101 119111114107 111102 97110121 11111610410111413
1049711010046 7310244 11610410111410110211111410144 116104105115 111114 11610497116 105110 116104101 119111114107115 11910410599104 73 104111112101 97110100 11211411110910511510113
116111 10112010199117116101 115104111117108100 10497112112101110 116111 11210810197115101 12111111744 73 115104111117108100 9997108108 11610497116 11911111410744 11011111613
10311111110044 98117116 1021111141161171109711610146 65110100 105102 73 115104111117108100 101118101114 102101101108 97115115117114101100 11610497116454597115 1049711513
98101101110 114101112111114116101100 116111 109101454573 10497118101 103105118101110 121111117114 108111114100115104105112 115971161051151029799116105111110 105110 11111010113
116104105110103 111114 9711011111610410111444 73 119105108108 10997107101 97 103105102116 116111 121111117 111102 109121 112114101115101110116 97110100 111102 9710810813
11610497116 116104101 102117116117114101 10997121 98114105110103 10910159 97110100 105116 119105108108 98101 97 10311410197116 11297105110 116111 109101 116111 9810113
1171109798108101 116111 1141019997108108 116104101 1129711511644 105110 111114100101114 116111 115101114118101 121111117 115111 10911799104 116104101 1081111101031011144413
10511011511610197100 111102 10497118105110103 111110108121 116104101 10211711611711410144 11910410599104 9997110110111116 98101 10811111010344 11510511099101 73 97109 9710810813
116111111 11110810046 84104101114101 105115 110111116104105110103 109111114101 108101102116 102111114 109101 116111 1159712146 8210197100 109121 10410197114116 9711010013
110111116 109121 10810111611610111444 102111114 109121 112101110 9997110110111116 971121121141119799104 116104101 101120112114101115115105111110 111102 109121 10311111110013
119105108108463491 51 9313
13
[/input]
[output]
79110 749711011797114121 49 44 49535151 44 771059910497101108 6511010310110811144 116104101110 10210510211612145115101118101110 12110197114115 11110810044 11911410511610111513
102114111109 7010811111410111099101 116111 8411110910997115111 10010139 67971189710810510111410544 97 121111117116104 111102 11011198108101 8211110997110 102971091051081214413
119104111 9710211610111411997114100115 981019997109101 104105115 10297118111117114105116101 11211711210510858 3473102 73 100111 110111116 112111115115101115115 11610410113
97114116 111102 1109711810510397116105110103 116104101 11510197 111102 121111117114 112111116101110116 10310111010511711544 11610497116 103101110105117115 11910510810813
110101118101114116104101108101115115 10112099117115101 10910144 97110100 110101105116104101114 100101115112105115101 109121 1051101011131179710810511612144 110111114 1001011099711010013
111102 109101 11610497116 11910410599104 73 10497118101 105116 110111116 105110 109101 116111 10310511810159 11510511099101 11610497116 11910410599104 1151169711010011513
97108111110101 105110 101118101114121116104105110103 9997110 105110 110111116104105110103 102105110100 105116115 991111171101161011141129711411646 87104101114101102111114101 12111111711413
10811111410011510410511244 95116104101 111110108121 108105103104116 105110 111117114 97103101 1181111179910411597102101100 116111 116104105115 11911111410810011595 1049711810511010313
110111 10111311797108 111114 11210110111444 9997110110111116 102105110100 115971161051151029799116105111110 105110 116104101 119111114107 111102 97110121 11111610410111413
1049711010046 7310244 11610410111410110211111410144 116104105115 111114 11610497116 105110 116104101 119111114107115 11910410599104 73 104111112101 97110100 11211411110910511510113
116111 10112010199117116101 115104111117108100 10497112112101110 116111 11210810197115101 12111111744 73 115104111117108100 9997108108 11610497116 11911111410744 11011111613
10311111110044 98117116 1021111141161171109711610146 65110100 105102 73 115104111117108100 101118101114 102101101108 97115115117114101100 11610497116454597115 1049711513
98101101110 114101112111114116101100 116111 109101454573 10497118101 103105118101110 121111117114 108111114100115104105112 115971161051151029799116105111110 105110 11111010113
116104105110103 111114 9711011111610410111444 73 119105108108 10997107101 97 103105102116 116111 121111117 111102 109121 112114101115101110116 97110100 111102 9710810813
11610497116 116104101 102117116117114101 10997121 98114105110103 10910159 97110100 105116 119105108108 98101 97 10311410197116 11297105110 116111 109101 116111 9810113
1171109798108101 116111 1141019997108108 116104101 1129711511644 105110 111114100101114 116111 115101114118101 121111117 115111 10911799104 116104101 1081111101031011144413
10511011511610197100 111102 10497118105110103 111110108121 116104101 10211711611711410144 11910410599104 9997110110111116 98101 10811111010344 11510511099101 73 97109 9710810813
116111111 11110810046 84104101114101 105115 110111116104105110103 109111114101 108101102116 102111114 109101 116111 1159712146 8210197100 109121 10410197114116 9711010013
110111116 109121 10810111611610111444 102111114 109121 112101110 9997110110111116 971121121141119799104 116104101 101120112114101115115105111110 111102 109121 10311111110013
119105108108463491 51 9313
13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Fluxuri de caractere 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-19-Character-Streams-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Fluxurile de caractere Java** sunt utilizate pentru a efectua intrări și ieșiri pentru **unicode pe 16 biți**.

Chiar dacă există multe clase legate de fluxurile de caractere, dar cele mai frecvent utilizate clase sunt **FileReader** și **FileWriter**. 

Deși intern **FileReader folosește FileInputStream** și **FileWriter folosește FileOutputStream**, dar aici diferența principală este că FileReader **citește doi octeți pe rând** și FileWriter **scrie doi octeți pe rând**.

Pe scurt, fluxurile de caractere pot citi și scrie dintr-o intrare **caracter prin caracter**.


Fluxurile de intrare și ieșire sunt create utilizând clasele FileReader și FileWriter într-un bloc **try-with-resources**.

După declararea și atribuirea variabilei de caractere, utilizând metoda `inputStream.read()`, bucla (loop) while a fost pornită până când ultimul caracter a fost citit din fișierul de intrare. 

În scopul buclei, caracterele, din fișierele de intrare, sunt scrise în fișierul de ieșire utilizând metoda `outputStream.write()`.


```java
String input = "C:\\input.txt";
String output = "C:\\output.txt";

try (FileReader inputStream = new FileReader(input);
             FileWriter outputStream = new FileWriter(output)) {

     int character;
     while ((character = inputStream.read()) != -1) {
         outputStream.write(character);
     }
} catch (FileNotFoundException ex) {
    System.out.println("Input file not found!");
} catch (IOException e) {
    e.printStackTrace();
}

```
[/slide]

[slide hideTitle]
# Combinarea fluxurilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-20-Combining-Streams-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Caractere de fluxuri sunt deseori "**ambalaje**" pentru fluxurile de octeți:
    - FileReader folosește FileInputStream
    - FileWriter folosește FileOutputStream

```java
String path = "D:\\input.txt";

Scanner reader = new Scanner(new FileInputStream(path));
```

Exemplul de mai sus este dat cu clasa `Scanner`, pe care ați folosit-o de ceva timp acum.

Aici ste folosit pentru a acoperi `FileInputStream` și, până acum, ați făcut acest lucru prin împachetarea `System.in`, care nu este altceva decât o constantă care deține un `InputStream`.

[/slide]


[slide hideTitle]
# Problemă cu soluție: extragerea numerelor întregi

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-21-Extract-integers-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Extract Integers" taskId="java-advanced-streams-files-lab-exact-integers" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Citiți fișierul dat, denumit "**input.txt**" și **extrageți toate numerele întregi care nu fac parte dintr-un cuvânt** într-un fișier separat.

Un număr întreg valid este **înconjurat de whitespace**.

## Instrucțiuni

Ar trebui să aveți deja toate resursele necesare descărcate de la cerința precedentă.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**.

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 , Michael Angelo, then fifty-seven years old, writes | 1 |
| … | 1533 |

[/task-description]
[code-io /]
[tests]
[test]
[input]
1
1533
3
[/input]
[output]
1
1533
3
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Fluxurile de bufere

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-23-Buffered-Streams-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Următorul strat de abstractizare peste fluxul de octeți sunt fluxurile tamponate. 

Fluxurile pe care le-am văzut până acum nu sunt tamponate I/O.

Aceasta înseamnă că fiecare cerere de citire sau scriere este tratată direct de sistemul de operare

Acest lucru poate face programul mai puțin eficient, deoarece fiecare cerere de acest tip adesea consuma din spațiul discului activității din rețea sau o altă operație care este relativ scumpă.

Pentru a depăși acest tip de cheltuieli generale, platforma Java implementează Buffered I/O Streams.

Fluxurile de intrare de bufere citesc date dintr-o zonă de memorie cunoscută sub numele de buffer.

Când se creează fluxurile de bufere, se creează o matrice intern de bufere.

Fluxul de bufere poate acoperi un flux de caractere și ne poate oferi acces la metode foarte puternice. 

Există patru clase de fluxuri de bufere utilizate pentru a acoperi fluxuri nebuferate:

 - **BufferedInputStream** și **BufferedOutputStream** creez  bufere de **fluxuri de octeți**
 - **BufferedReader** și **BufferedWriter** creez  bufere de **fluxuri de caractere**.

Să ne uitam la următorul exemplu:

[image assetsSrc="streams-files-directories-example(5).png" /]

În loc să citim conținutul "**Files and**", octet prin octet sau un caracterprin caracter, putem folosi un buffer pentru a obține bucăți mai mari de text la rând.

În acest caz, buferul va conține două caractere în același timp.

Acest lucru va crește semnificativ **performanța** aplicațiilor noastre.

[/slide]

[slide hideTitle]
# Problemă cu soluție: scrieți fiecare al treilea rând

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-24-Write-Every-3rd-Line-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Write Every Third Line" taskId="java-advanced-streams-files-lab-write-every-third-line" executionType="tests-execution" executionStrategy="plaintext" requiresInput]

[code-editor language=java]
[/code-editor]
[task-description]
## Descriere
Citiți fișierul dat, numit "**input.txt**" și scrieți într-un alt fișier toate liniile la care numărul este **divizibil cu 3 ]**.

Numerele de linie **încep de la unu**.

## Instrucțiuni

Ar trebui să aveți deja toate resursele necesare descărcate de la cerința precedentă.

Pentru fiecare exercițiu trimiteți doar **rezultatul** a programului dvs., **nu codul**

## Exemple
| **Input** | **Output** |
| --- | --- |
| On January 1 , 1533 ,  | then fifty-seven years old,  |
| Michael Angelo,  | Tommaso de' Cavalieri,  |
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
who afterwards became his favourite pupil: "If I do not possess the
of me that which I have it not in me to give; since that which stands
no equal or peer, cannot find satisfaction in the work of any other
good, but fortunate. And if I should ever feel assured that--as has
that the future may bring me; and it will be a great pain to me to be
too old. There is nothing more left for me to say. Read my heart and
[/input]
[output]
who afterwards became his favourite pupil: "If I do not possess the
of me that which I have it not in me to give; since that which stands
no equal or peer, cannot find satisfaction in the work of any other
good, but fortunate. And if I should ever feel assured that--as has
that the future may bring me; and it will be a great pain to me to be
too old. There is nothing more left for me to say. Read my heart and
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Comanda I/O Streams 

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-26-27-Command-Line-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java oferă suport pentru I/O standard, unde programul utilizatorului poate prelua intrarea de la o tastatură și apoi produce o ieșire pe ecranul calculatorului.

Platforma Java acceptă trei fluxuri standard, atașate la consolă.

**Standard Input** − `System.in` este un **InputStream** care este de obicei este conectat la intrarea de la tastatură a programelor de consolă.

**Standard Output** − `System.out` este adesea folosit din programe numai pentru consolă ca o modalitate de a afișa rezultatul execuției lor către utilizator.

**Standard Error** − `System.err` este utilizat pentru a afișa datele de eroare produse de programul utilizatorului.

Este posibil să aveți așteptari ca fluxurile standard să fiu fluxuri de caractere, dar, din motive istorice, acestea sunt **fluxuri de octeți**.

`System.out` și `System.err` sunt definite ca obiecte  **PrintStream**.

Chiar daca din punctul de vedere tehnic este un flux de octet, PrintStream utilizează un **obiect de flux de caractere** pentru a emula  **multe dintre caracteristicile fluxurilor de caractere**.

În schimb, `System.in` este un flux de octeți **fără caracteristici de flux de caractere**. 

Pentru a utiliza **Standard Input** ca flux de caractere, ambalați `System.in` în **InputStreamReader**.

Următorul exemplu este pentru fluxul de intrare de bufere care citește conținutul din `System.in` (**Console**):

Creăm un flux**BufferedReader**, care ambalează **InputStreamReader**.

Apoi **InputStreamReader** ambalează fluxul`System.in`.

Metoda `readline()` - citește un rând de text, în acest caz, acesta va fi scris în consolă.

```java
BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

String hello = reader.readLine(); 
System.out.println(hello);        

```

[/slide]

