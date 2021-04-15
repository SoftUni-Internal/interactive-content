# Problema 3: Inbox Manager

[slide hideTitle]
# Inbox Manager

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/05.Java-Fundamentals-Exam-Preparation/RO/03-Inbox-Manager-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Inbox Manager" taskId="java-fundamentals-2-Exam-preparation-Inbox-Manager" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care **gestionează utilizatorii și e-mailurile** trimise de utilizatori.

Trebuie să păstrați informații despre numele de utilizator și e-mailurile trimise.

E-mailurile sunt **reprezentate ca șiruri**.

Veți primi **linii cu comenzi separate prin** "->" **până când veți primi** comanda "**Statistics**".

Există **trei comenzi posibile**:
- "**Add->**\{**username**\}" 
    - **verificați dacă numele de utilizator există și dacă se imprimă** - "\{**username**\} **is already registered"**
    - dacă nu există, atunci adăugați utilizatorul la colecția de utilizatori
- "**Send->**\{**username**\}**->**\{**Email**\}"
    - adăugați mesajul \{**Email**\} la colecția de e-mailuri trimise din \{**username**\}
- "**Delete->**\{**username**\}"
    - ștergeți utilizatorul dat, dacă acesta există
    - dacă utilizatorul nu există, tipăriți "\{**username**\} **not found!**"

În cele din urmă, trebuie să **tipăriți numărul de utilizatori**, **fiecare utilizator cu e-mailurile sale**.

**Utilizatorii** trebuie să fie **sortați în ordine descrescătoare** după **numărul de e-mailuri trimise și apoi după numele lor de utilizator în ordine crescătoare în următorul format**:

"**Users count:** \{**count**\}
\{**username**\} 
 - \{**Email1**\}
 - \{**Email2**\}
 - \{**EmailN**\}"

### Intrare
- Veți primi linii până când veți primi comanda "**Statistics**"
- Comenzile vor fi în formatul descris mai sus

### Ieșire
- Imprimați colecția în formatul descris mai sus după comanda "**Statistics**"

### Ieșire
Imprimați colecția în formatul descris mai sus după ce ați primit comanda "**Statistics**".

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Add->Mike | Users count: 2 |
| Add->George | George |
| Send->George->Hello World |  - Hello World |
| Send->George->Some random test mail |  - Some random test mail |
| Send->Mike->Hello, do you want to meet up tomorrow? |  - It would be a pleasure |
| Send->George->It would be a pleasure | Mike |
| Send->Mike->Another random test mail |  - Hello, do you want to meet up tomorrow? |
| Statistics |  - Another random test mail |

### Comentarii
- Mai întâi primim utilizatorii noștri
- Deoarece nu sunt încă în colecția noastră, îi adăugăm
- Apoi acesștia încep să trimită e-mailuri și la final imprimăm rezultatul în formatul descris


### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Add->Mike | Mike is already registered |
| Add->George | Peter not found! |
| Send->George->Hello World | Users count: 1 |
| Send->George->Your loan is overdue | Mike |
| Add->Mike |  - Hello, do you want to meet up tomorrow? |
| Send->Mike->Hello, do you want to meet up tomorrow? |  - Another random test mail |
| Delete->Peter | |
| Send->George->I'm busy | |
| Send->Mike->Another random test mail | |
| Delete->George | |
| Statistics | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Add-\>Mike
Add-\>George
Send-\>George-\>Hello World
Send-\>George-\>Some random test mail
Send-\>Mike-\>Hello, do you want to meet up tomorrow?
Send-\>George-\>It would be a pleasure
Send-\>Mike-\>Another random test mail
Statistics
[/input]
[output]
Users count: 2
George
 \- Hello World
 \- Some random test mail
 \- It would be a pleasure
Mike
 \- Hello, do you want to meet up tomorrow?
 \- Another random test mail
[/output]
[/test]
[test open]
[input]
Add-\>Annie
Add-\>George
Send-\>George-\>Hello World
Send-\>George-\>Some random test mail
Send-\>Annie-\>Hello, do you want to meet up tomorrow?
Send-\>George-\>It would be a pleasure
Send-\>Annie-\>Another random test mail
Delete-\>Annie
Delete-\>George
Statistics
[/input]
[output]
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Statistics
[/input]
[output]
Users count: 1
a
[/output]
[/test]
[test]
[input]
Add-\>a
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 1
a
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Delete-\>a
Statistics
[/input]
[output]
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>a
Statistics
[/input]
[output]
a is already registered
Users count: 1
a
[/output]
[/test]
[test]
[input]
Delete-\>a
Statistics
[/input]
[output]
a not found!
Users count: 0
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Add-\>z
Add-\>c
Statistics
[/input]
[output]
Users count: 4
a
b
c
z
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>a
Statistics
[/input]
[output]
a is already registered
Users count: 1
a
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 2
b
 \- test
 \- test
a
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Send-\>a-\>test
Statistics
[/input]
[output]
Users count: 2
a
 \- test
 \- test
b
 \- test
 \- test
[/output]
[/test]
[test]
[input]
Add-\>a
Add-\>b
Send-\>b-\>test
Send-\>b-\>test
Send-\>a-\>test
Send-\>a-\>test
Add-\>b
Delete-\>a
Delete-\>a
Add-\>c
Send-\>c-\>test
Send-\>c-\>test
Statistics
[/input]
[output]
b is already registered
a not found!
Users count: 2
b
 \- test
 \- test
c
 \- test
 \- test
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
