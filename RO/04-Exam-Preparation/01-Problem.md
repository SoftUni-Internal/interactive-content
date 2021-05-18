# Problema 2: Registration

[slide hideTitle]
# Registration

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/05.Java-Fundamentals-Exam-Preparation/RO/02-Registration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Registration" taskId="java-fundamentals-part-2-exam-preparation-registration" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care verifică **dacă niște înregistrări sunt valide**.

Fiecare înregistrare constă dintr-un **nume de utilizator și o parolă**.

Pe **prima linie** veți primi un **număr care indică câte intrări** veți primi pe **următoarele** linii.

O **înregistrare este valabilă** dacă:

- Numele de utilizator **este încadrat de** `"U\$"`

- **Numele de utilizator conține cel puțin 3 caractere**, **începe** cu o **majusculă**, urmată **numai de litere mici**

- Parola **este încadrată de** `"P@\$"`

- Parola **începe cu minim 5 caractere alfabetice** (fără cifre) și **trebuie să se termine cu o cifră**

**Exemplu pentru o înregistrare** validă:
- "U\$MichaelU\$P@\$asdqwe123P@\$"

Trebuie să verificați dacă înregistrarea este **valabilă și dacă este, imprimați**:
- "**Registration was successful**"
- "**Username**: \{**Username**\}, **Password**: \{**Password**\}"

**Dacă nu este** - tipăriți următorul mesaj:
- "**Invalid username or password**"

La final, **tipăriți numărul de înregistrări reușite**:
- "**Successful registrations:** \{**successfulRegistrationsCount**\}"

### Intrare

- Pe prima linie veți primi numărul **n** - numărul de intrări
- Pe următoarele **n** linii - un text care conține un nume de utilizator și o parolă

### Ieșire
- Imprimați mesajele corespunzătoare, fiecare pe o nouă linie
- La final, tipăriți numărul înregistrărilor reușite

### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 | Registration was successful |
| U\$MichaelU\$P@$asdqwe123P@\$ | Username: Michael, Password: asdqwe123 |
| U\$NameU$P@\$PasswordP@\$ | Invalid username or password |
| U\$UserU$P@\$ad2P@\$ | Invalid username or password |
| | Successful registrations: 1 |

[hints]
[hint]
Avem **3** linii cu date de intrare de verificat.

**Prima** respectă regulile și este **valabilă**.
[/hint] 
[hint]
A **doua nu este valabilă**, deoarece parola nu se termină cu o cifră.
[/hint] 
[hint]
A **treia nu este valabilă**, deoarece parola este prea scurtă.
[/hint] 
[/hints] 


### Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | Registration was successful |
| U\$TommyU\$P@\$asdqwe123P@\$ | Username: Tommy, Password: asdqwe123 |
| Sara 1232412 | Invalid username or password |
| | Successful registrations: 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
U\$MichaelU\$P@\$asdqwe123P@\$
U\$NameU\$P@\$PasswordP@\$
U\$UserU\$P@\$ad2P@\$
[/input]
[output]
Registration was successful
Username: Michael, Password: asdqwe123
Invalid username or password
Invalid username or password
Successful registrations: 1
[/output]
[/test]
[test open]
[input]
2
U\$TommyU\$P@\$asdqwe123P@\$
Sara 1232412
[/input]
[output]
Registration was successful
Username: Tommy, Password: asdqwe123
Invalid username or password
Successful registrations: 1
[/output]
[/test]
[test open]
[input]
3
U\$myU\$--\>P@\$asdqwe123P@\$
Sara 1232412
U\$NameU\$P@\$Pass234P@\$
[/input]
[output]
Invalid username or password
Invalid username or password
Invalid username or password
Successful registrations: 0
[/output]
[/test]
[test]
[input]
1
U\$MichaelU\$P@\$asdqwe123P@\$
[/input]
[output]
Registration was successful
Username: Michael, Password: asdqwe123
Successful registrations: 1
[/output]
[/test]
[test]
[input]
1
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Registration was successful
Username: Mic, Password: asdqw1
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 2
[/output]
[/test]
[test]
[input]
2
U\$micU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MiU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdqwP@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
U\$MicU\$P@\$asdq5P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
\$Mic\$P@\$asdqs5P@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
2
\$Mic\$P@\$asdqs5
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[test]
[input]
5
\$Mic\$P@\$asdqs5
MicU\$P@\$asdqw1P@\$
U\$micU\$P@\$asdqw1P@\$
U\$MicU\$P@\$asdqwP@\$
U\$MicU\$P@\$asdqw1P@\$
[/input]
[output]
Invalid username or password
Invalid username or password
Invalid username or password
Invalid username or password
Registration was successful
Username: Mic, Password: asdqw1
Successful registrations: 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
