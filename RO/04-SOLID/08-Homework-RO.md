
# Teme Pentru Acasă

[slide hideTitle]

# Problemă cu Soluție: Logger

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/Problem-1-Logger-Problem-and-solution RO-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Logger" taskId="oop-advanced-java-SOLID-Principles-Logger" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[code-upload allowedMemory="30" /] 
[task-description]
Creați o **bibliotecă** pentru a înregistra **mesaje**.

Trimiteți soluția dvs. sub forma unui fișier `.zip`.
 
**Interfața** pentru utilizatorul final ar trebui să aibă următoarea aparență:

### Exemplu de cod sursă

```java
Layout simpleLayout = new SimpleLayout();
Appender consoleAppender = 
       new ConsoleAppender(simpleLayout);
Logger logger = new MessageLogger(consoleAppender);

logger.logError("3/26/2015 2:08:11 PM", 
            "Error parsing JSON.");
logger.logInfo("3/26/2015 2:08:11 PM", 
            "User Peter successfully registered.");
```
### Exemplu de date de ieșire

[image assetsSrc="solid-example(1).png" /]

Un `logger` **înregistrează** datele și ora (**String**) și un mesaj corespunzător (**String**).

## Arhitectura bibliotecii

Biblioteca ar trebui să conțină următoarele componente:

- **Aspecte** - definiți formatul în care trebuie adăugate mesajele (de ex. **SimpleLayout** afișează jurnalele în formatul "\{**date-time**\} - \{**report level**\} - \{**message**\}")
- **Anexe** - responsabile pentru adăugarea mesajelor pe ( **Console** , **File** , etc.)
- **Loggers** - rețineți metode pentru diferite tipuri de înregistrări ( **warnings** , **errors** , **info** , etc.)

Ori de câte ori un logger este obligat să **înregistreze** ceva, acesta apelează utilizează instrumentul adecvat pentru a atașa mesajul.

Anexanții plasează mesajul (către consolă sau un fișier) în funcție de aspectul pe care îl au.

## Descriere

Biblioteca dvs. trebuie să respecte corect toate principiile **SOLID**:

- **Principiul de responsabilitate unică** - nicio clasă sau metodă nu ar trebui să aibă mai multe funcționalități generale
- **Principiu deschis-închis** - biblioteca ar trebui să fie deschisă pentru extensie (adică utilizatorul său ar trebui să-și poată crea propriile machete / anexe / înregistrări)
- **Principiul de înlocuire Liskov** - clasele pentru copii nu ar trebui să se integreze în comportamentul părintelui lor
- **Principiul de separare a interfeței** - biblioteca ar trebui să furnizeze interfețe simple pentru implementarea clientului
- **Inversiunea dependenței** - nicio clasă / metodă nu ar trebui să depindă direct de concreții (doar de abstracții)

Evitați repetarea codului.

Denumiți fiecare element de cod în consecință.

## Implementari

Biblioteca ar trebui să furnizeze următoarele clase pentru client:

- **SimpleLayout** - folosește formatul "\{**date-time**\} - \{**report level**\} - \{**message**\}"

- **ConsoleAppender** - adaugă un logger la consolă utilizând aspectul furnizat

- **FileAppender** - adaugă un logger la un fișier (trebuie să implementați o clasă **CustomFile**) utilizând aspectul furnizat

- **LogFile** - o clasă de fișiere personalizată care înregistrează mesajele într-un constructor de șiruri folosind o metodă: `write()`
    - ar trebui să aibă un **getter** pentru **dimensiunea sa** care este **suma** codurilor ASCII ale tuturor caracterelor alfabetului pe care îl conține (de exemplu, a-z și A-Z)

- **Logger** - o clasă `logger` care este utilizată pentru a înregistra mesaje
    - apelează fiecare dintre anexele sale atunci când trebuie înregistrat ceva

### Exemplu de cod sursă

```java
Layout simpleLayout = new SimpleLayout();

Appender consoleAppender = 
          new ConsoleAppender(simpleLayout);

File file = new LogFile();

Appender fileAppender = new FileAppender(simpleLayout);
((FileAppender) fileAppender).setFile(file);

Logger logger = new MessageLogger(consoleAppender,
                                  fileAppender);

logger.logError("3/26/2015 2:08:11 PM",
                "Error parsing JSON.");
logger.logInfo("3/26/2015 2:08:11 PM", 
                "User Peter successfully registered.");
```

Codul de mai sus ar trebui să înregistreze mesajele, atât în ​​**consola**, cât și într-un **LogFile** în forma pe care o oferă **SimpleLayout**.

## Extensibilitate

Utilizatorul ar trebui să poată adăuga propriile sale **layouts** / **appenders** / **loggers** și să le folosească.

De exemplu, ar trebui să poată crea propriul **XmlLayout** și să-i facă pe anexatori să-l folosească, **fără a edita direct** codul sursă al bibliotecii.

### Exemplu de cod sursă

```java
Layout xmlLayout = new XmlLayout();

Appender consoleAppender = 
         new ConsoleAppender(xmlLayout);
         
Logger logger = new MessageLogger(consoleAppender);

logger.logFatal("3/31/2015 5:23:54 PM", 
       "mscorlib.dll does not respond");
logger.logCritical("3/31/2015 5:23:54 PM", 
       "No connection string found in App.config");

```
### Exemplu de date de ieșire

[image assetsSrc="solid-example(2).png" /]

## Prag de raportare

Implementați un **prag de nivel de raport** la toate appenderele.

Solicitantul trebuie să adauge numai mesajele cu un nivel de raport **mai mare sau egal ca** pragul său de nivel de raport (în mod implicit toate mesajele sunt adăugate).

Nivelul raportului ar putea fi: **Info**, **Warning**, **Error**, **Critical**, **Fatal**.

### Exemplu de cod sursă

```java
Layout simpleLayout = new SimpleLayout();

Appender consoleAppender = 
         new ConsoleAppender(simpleLayout);
         
consoleAppender.setReportLevel(ReportLevel.ERROR);

Logger logger = new MessageLogger(consoleAppender);

logger.logInfo("3/31/2015 5:33:07 PM", 
       "Everything seems fine");
logger.logWarning("3/31/2015 5:33:07 PM", 
       "Warning: ping is too high - disconnect imminent");
logger.logError("3/31/2015 5:33:07 PM", 
       "Error parsing request");
logger.logCritical("3/31/2015 5:33:07 PM", 
       "No connection string found in App.config");
logger.logFatal("3/31/2015 5:33:07 PM", 
       "mscorlib.dll does not respond");
```
### Exemplu de date de ieșire

[image assetsSrc="solid-example(3).png" /]

Sunt adăugate numai mesajele de la erori și de mai sus.

## Fișier

Un fișier ar trebui să accepte toate mesajele intern și ar trebui să păstreze informații despre dimensiunea sa.

Dimensiunea unui fișier este calculată prin însumarea codurilor ASCII ale tuturor caracterelor alfabetice (a-Z) conținute în acesta.

De exemplu, un fișier appender cu un aspect simplu și un singur mesaj **"3/31/2015 5:33:07 PM - ERROR - Error parsing request"** are o dimensiune de 2606 (inclusiv toate caracterele: PM, ERROR, Error, parsing, request). 

În cazul aspectului XML, fișierul ar avea o dimensiune de 6632, din cauza caracterelor suplimentare din etichete.

## Controller

Implementați un **Controller** care citește toate appenderele  pe care le va avea un **Logger** și introduceți mesaje de pe consolă.

Fiecare mesaj ar trebui să fie evaluat de toți aplicanții și înregistrat dacă îndeplinește nivelul raportului.

Appenderele  **ar trebui să afișeze direct pe consolă**.

Fișierele apelate **salvează** mesajele, dar nu le afișează.

### Datele de intrare

Pe prima linie, veți primi **N** - numărul de solicitanți. Pe următoarele N linii, veți obține informații despre anexe într-unul dintre formatele de mai jos:

- "`<appender type>` `<layout type>` `<REPORT LEVEL>`"
- "`<appender type>` `<layout type>`"


Dacă nu este furnizat niciun nivel de raport, apelantul ar trebui să fie setat să înregistreze toate mesajele.

Dacă nu există un nivel de raport, valoarea acestuia este **INFO**.

Apoi, până când veți obține comanda **END**, veți primi mesaje care conțin nivelul raportului, ora și mesajul separat printr-un simbol `|`:

- `<REPORT LEVEL>|<time>|<message>`

### Datele de ieșire

Anexele consolei trebuie să afișeze informații direct pe consolă cu aspectul specificat:

- Simple layout example - **"3/31/2015 5:33:07 PM - ERROR - Error parsing request"**
- Xml layout example (date, level and message tags are indented by 1 tabulation):

```js
<log>
    <date>3/31/2015 5:33:07 PM</date>
    <level>ERROR</level>
    <message>Error parsing request</message>
</log>

```

După comanda **END**, trebuie să afișați informațiile despre **Logger**, care includ statistici despre fiecare apelant (tipul, aspectul, nivelul raportului, mesajele anexate și dimensiunea fișierului pentru anexele de fișiere):
"Logger info
Appender type: `<appender type>`, Layout type: `<layout type>`, Report level: `<REPORT LEVEL>`, Messages appended: `<count>`, File size: `<size>`"


# Exemplu

## Date de intrare

```
2
ConsoleAppender SimpleLayout CRITICAL
FileAppender XmlLayout
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is 
too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string
found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll 
does not respond
END
```

## Date de ieșire

```
3/26/2015 2:38:01 PM - CRITICAL - No connection string 
found in App.config
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does 
not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout,
Report level: CRITICAL, Messages appended: 2
Appender type: FileAppender, Layout type: XmlLayout, 
Report level: INFO, Messages appended: 5, File size: 37526
```
[/task-description]
[tests]
[test open]
[input]
2
ConsoleAppender SimpleLayout CRITICAL
FileAppender XmlLayout
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll does not respond
END
[/input]
[output]
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: CRITICAL, Messages appended: 2
Appender type: FileAppender, Layout type: XmlLayout, Report level: INFO, Messages appended: 5, File size: 37526
[/output]
[/test]
[test]
[input]
2
ConsoleAppender SimpleLayout CRITICAL
FileAppender XmlLayout
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll does not respond
END
[/input]
[output]
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: CRITICAL, Messages appended: 2
Appender type: FileAppender, Layout type: XmlLayout, Report level: INFO, Messages appended: 5, File size: 37526
[/output]
[/test]
[test]
[input]
1
ConsoleAppender SimpleLayout ERROR
INFO\|3/31/2015 5:33:07 PM\|Everything seems fine
WARNING\|3/31/2015 5:33:07 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/31/2015 5:33:07 PM\|Error parsing request
CRITICAL\|3/31/2015 5:33:07 PM\|No connection string found in App.config
FATAL\|3/31/2015 5:33:07 PM\|mscorlib.dll does not respond
END
[/input]
[output]
3/31/2015 5:33:07 PM - ERROR - Error parsing request
3/31/2015 5:33:07 PM - CRITICAL - No connection string found in App.config
3/31/2015 5:33:07 PM - FATAL - mscorlib.dll does not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: ERROR, Messages appended: 3
[/output]
[/test]
[test]
[input]
1
ConsoleAppender XmlLayout INFO
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll does not respond
END
[/input]
[output]
\<log\>
   \<date\>3/26/2015 2:08:11 PM\</date\>
   \<level\>INFO\</level\>
   \<message\>Everything seems fine\</message\>
\</log\>
\<log\>
   \<date\>3/26/2015 2:22:13 PM\</date\>
   \<level\>WARNING\</level\>
   \<message\>Warning: ping is too high - disconnect imminent\</message\>
\</log\>
\<log\>
   \<date\>3/26/2015 2:32:44 PM\</date\>
   \<level\>ERROR\</level\>
   \<message\>Error parsing request\</message\>
\</log\>
\<log\>
   \<date\>3/26/2015 2:38:01 PM\</date\>
   \<level\>CRITICAL\</level\>
   \<message\>No connection string found in App.config\</message\>
\</log\>
\<log\>
   \<date\>3/26/2015 2:39:19 PM\</date\>
   \<level\>FATAL\</level\>
   \<message\>mscorlib.dll does not respond\</message\>
\</log\>
Logger info
Appender type: ConsoleAppender, Layout type: XmlLayout, Report level: INFO, Messages appended: 5
[/output]
[/test]
[test]
[input]
5
ConsoleAppender SimpleLayout CRITICAL
ConsoleAppender XmlLayout INFO
ConsoleAppender SimpleLayout INFO
FileAppender SimpleLayout WARNING
FileAppender XmlLayout FATAL
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll does not respond
END
[/input]
[output]
\<log\>
   \<date\>3/26/2015 2:08:11 PM\</date\>
   \<level\>INFO\</level\>
   \<message\>Everything seems fine\</message\>
\</log\>
3/26/2015 2:08:11 PM - INFO - Everything seems fine
\<log\>
   \<date\>3/26/2015 2:22:13 PM\</date\>
   \<level\>WARNING\</level\>
   \<message\>Warning: ping is too high - disconnect imminent\</message\>
\</log\>
3/26/2015 2:22:13 PM - WARNING - Warning: ping is too high - disconnect imminent
\<log\>
   \<date\>3/26/2015 2:32:44 PM\</date\>
   \<level\>ERROR\</level\>
   \<message\>Error parsing request\</message\>
\</log\>
3/26/2015 2:32:44 PM - ERROR - Error parsing request
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
\<log\>
   \<date\>3/26/2015 2:38:01 PM\</date\>
   \<level\>CRITICAL\</level\>
   \<message\>No connection string found in App.config\</message\>
\</log\>
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
\<log\>
   \<date\>3/26/2015 2:39:19 PM\</date\>
   \<level\>FATAL\</level\>
   \<message\>mscorlib.dll does not respond\</message\>
\</log\>
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: CRITICAL, Messages appended: 2
Appender type: ConsoleAppender, Layout type: XmlLayout, Report level: INFO, Messages appended: 5
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: INFO, Messages appended: 5
Appender type: FileAppender, Layout type: SimpleLayout, Report level: WARNING, Messages appended: 4, File size: 14919
Appender type: FileAppender, Layout type: XmlLayout, Report level: FATAL, Messages appended: 1, File size: 7245
[/output]
[/test]
[test]
[input]
4
ConsoleAppender SimpleLayout CRITICAL
ConsoleAppender SimpleLayout INFO
FileAppender SimpleLayout WARNING
FileAppender XmlLayout FATAL
INFO\|3/26/2015 2:08:11 PM\|Everything seems fine
WARNING\|3/26/2015 2:22:13 PM\|Warning: ping is too high - disconnect imminent
ERROR\|3/26/2015 2:32:44 PM\|Error parsing request
CRITICAL\|3/26/2015 2:38:01 PM\|No connection string found in App.config
FATAL\|3/26/2015 2:39:19 PM\|mscorlib.dll does not respond
END
[/input]
[output]
3/26/2015 2:08:11 PM - INFO - Everything seems fine
3/26/2015 2:22:13 PM - WARNING - Warning: ping is too high - disconnect imminent
3/26/2015 2:32:44 PM - ERROR - Error parsing request
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
3/26/2015 2:38:01 PM - CRITICAL - No connection string found in App.config
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
3/26/2015 2:39:19 PM - FATAL - mscorlib.dll does not respond
Logger info
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: CRITICAL, Messages appended: 2
Appender type: ConsoleAppender, Layout type: SimpleLayout, Report level: INFO, Messages appended: 5
Appender type: FileAppender, Layout type: SimpleLayout, Report level: WARNING, Messages appended: 4, File size: 14919
Appender type: FileAppender, Layout type: XmlLayout, Report level: FATAL, Messages appended: 1, File size: 7245
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

