
[slide]

# Obiecte

Un obiect este **unitate de bază** și o **instanță a unei clase**.
Clasele definesc șabloane pentru obiecte: câmpuri, constructori, metode.

Exemplu:

- Clasa eșantion: LocalDate

- Exemple de obiecte: birthdayPeter, birthdayMaria


Un obiect reprezintă **subiecți din viața reală**.

Dacă comparați obiectul software cu un obiect din lumea reală, acestea au caracteristici foarte similare.
Puteți găsi multe obiecte în jurul nostru: mașini din clasa Vehicle, câini din clasa Animal, oameni din clasa Person etc.

[/slide]


[slide]
# Definiția Object

Un obiect are:

- stare, care este reprezentată de **câmpuri**.

- comportament, care este reprezentat de **metode**- un obiect interacționează cu un alt obiect prin invocarea metodelor.

- identitate, care dă un **nume unic** unui obiect.


Exemplu din viața reală: un câine are stări - culoare, nume, rasă; și comportamente - lătrat, mâncat, dând din coadă.


Un obiect deține un set de valori numite.
Exemplu: obiectul zilei de naștere conține ziua, luna și anul.

```java live no-template
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        LocalDate birthday = LocalDate.of(2018,5,5);
        System.out.println(birthday);
    }
}
```
[/slide]


[slide]

# Creați un obiect

Crearea unui obiect dintr-o clasă definită se numește **instanțiere**.
**Instanța** este obiectul în sine, care este creat de timpul de rulare.
Toate instanțele au un **comportament comun**.

Pentru a crea un obiect declarați mai întâi **main method**, apoi specificați **numele clasei**, urmat de **numele obiectului** și utilizați **cuvântul cheie**  `new`:

```java
public class Animal {
    // fields
    private String type;

    // constructors
    public Animal() {
    }

    public Animal(String type) {
        this.type = type;
    }

    // getters and setters
    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    // methods
    public void makeSound() {
        System.out.println("The animal is making sounds.");
    }

    // main method
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

Puteți crea mai multe obiecte dintr-o singură clasă.

```java
public class Animal {
    public static void main(String[] args) {
        Animal dog = new Animal("mammal");
        Animal lizard = new Animal("reptile");
    }
}
```

[/slide]

[slide hideTitle]
# Problem: Songs
[code-task title="Songs" taskId="java-fund-16-Objects-and-Classes-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere

Definiți o clasă **Song**, care conține următoarele informații despre melodii:
- **Type List**

- **Name**

- **Time**

### Intrare / constrângeri

- Pe prima linie veți primi **numărul de melodii - N**.

- Pe următoarele linii N veți primi date în următorul format:
"\{typeList\}\_\{name\}\_\{time\}".

- Pe ultima linie veți primi **Lista de tipuri** sau **"all"**.

### Ieșire

Imprimați numai **Numele melodiilor** care aparțin acelei **Lista de tipuri** sau **Toate melodiile**.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | DownTown |
| favourite_DownTown_3:14 | Kiss |
| favourite_Kiss_4:16 | Smooth Criminal |
| favourite_Smooth Criminal_4:01 | |
| favourite | |

|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | Andalouse |
| favourite_DownTown_3:14 | |
| listenLater_Andalouse_3:24 | |
| favourite_In To The Night_3:58 | |
| favourite_Live It Up_3:48 | |
| listenLater | |

|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | Replay |
| like_Replay_3:15 | Photoshop |
| ban_Photoshop_3:48 | |
| all | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
favourite_DownTown_3:14
favourite_Kiss_4:16
favourite_Smooth Criminal_4:01
favourite
[/input]
[output]
DownTown
Kiss
Smooth Criminal
[/output]
[/test]
[test open]
[input]
4
favourite_DownTown_3:14
listenLater_Andalouse_3:24
favourite_In To The Night_3:58
favourite_Live It Up_3:48
listenLater
[/input]
[output]
Andalouse
[/output]
[/test]
[test open]
[input]
2
like_Replay_3:15
ban_Photoshop_3:48
all
[/input]
[output]
Replay
Photoshop
[/output]
[/test]
[test]
[input]
4
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
v
[/input]
[output]
rrr
r
rp
[/output]
[/test]
[test]
[input]
6
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
b_wqeq_3:58
b_tre_3:48
b
[/input]
[output]
wqeq
tre
[/output]
[/test]
[test]
[input]
5
a_opsa_2:51
like_Replay_3:15
c_tigre_4:21
Ceca_Trepni_3:58
ban_Photoshop_3:48
all
[/input]
[output]
opsa
Replay
tigre
Trepni
Photoshop
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Songs
[code-task title="Songs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Songs {

    public static class Song {
      // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere

Definiți o clasă **Song**, care conține următoarele informații despre melodii:
- **Type List**

- **Name**

- **Time**

### Intrare / constrângeri

- Pe prima linie veți primi **numărul de melodii - N**.

- Pe următoarele linii N veți primi date în următorul format:
"\{typeList\}\_\{name\}\_\{time\}".

- Pe ultima linie veți primi **Lista de tipuri** sau **"all"**.

### Ieșire

Imprimați numai **Numele melodiilor** care aparțin acelei **Lista de tipuri** sau **Toate melodiile**.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | DownTown |
| favourite_DownTown_3:14 | Kiss |
| favourite_Kiss_4:16 | Smooth Criminal |
| favourite_Smooth Criminal_4:01 | |
| favourite | |

|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | Andalouse |
| favourite_DownTown_3:14 | |
| listenLater_Andalouse_3:24 | |
| favourite_In To The Night_3:58 | |
| favourite_Live It Up_3:48 | |
| listenLater | |

|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | Replay |
| like_Replay_3:15 | Photoshop |
| ban_Photoshop_3:48 | |
| all | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
favourite_DownTown_3:14
favourite_Kiss_4:16
favourite_Smooth Criminal_4:01
favourite
[/input]
[output]
DownTown
Kiss
Smooth Criminal
[/output]
[/test]
[test open]
[input]
4
favourite_DownTown_3:14
listenLater_Andalouse_3:24
favourite_In To The Night_3:58
favourite_Live It Up_3:48
listenLater
[/input]
[output]
Andalouse
[/output]
[/test]
[test open]
[input]
2
like_Replay_3:15
ban_Photoshop_3:48
all
[/input]
[output]
Replay
Photoshop
[/output]
[/test]
[test]
[input]
4
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
v
[/input]
[output]
rrr
r
rp
[/output]
[/test]
[test]
[input]
6
v_rrr_3:14
listenLater_rr_3:24
v_r_3:58
v_rp_3:48
b_wqeq_3:58
b_tre_3:48
b
[/input]
[output]
wqeq
tre
[/output]
[/test]
[test]
[input]
5
a_opsa_2:51
like_Replay_3:15
c_tigre_4:21
Ceca_Trepni_3:58
ban_Photoshop_3:48
all
[/input]
[output]
opsa
Replay
tigre
Trepni
Photoshop
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Students
[code-task title="Students" taskId="java-fund-16-Objects-and-Classes-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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

Definiți o clasă **Student**, care conține următoarele informații despre elevi:
 - first name
 - last name
 - age
 - hometown

### Intrare / constrângeri

Citiți o listă de studenți până când primiți comanda **"end"**.

După aceea, veți primi un **nume de oraș**.

### Ieșire

Imprimați numai studenții care sunt din orașul dat, în următorul format:
"\{firstName\} \{lastName\} is \{age\} years old."

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| John Smith 15 Sofia | John Smith is 15 years old. |
| Peter Ivanov 14 Plovdiv | Linda Bridge is 16 years old. |
| Linda Bridge 16 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |

|**Intrare**|**Ieșire**|
| --- | --- |
| Anthony Taylor 15 Chicago | Anthony Taylor is 15 years old. |
| David Anderson 16 Washington | Jack Lewis is 14 years old. |
| Jack Lewis 14 Chicago | David Lee is 14 years old. |
| David Lee 14 Chicago | |
| end | |
| Chicago | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test open]
[input]
Anthony Taylor 15 Chicago
David Anderson 16 Washington
Jack Lewis 14 Chicago
David Lee 14 Chicago
end
Chicago
[/input]
[output]
Anthony Taylor is 15 years old
Jack Lewis is 14 years old
David Lee is 14 years old
[/output]
[/test]
[test]
[input]
Anthony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 varna
end
varna
[/input]
[output]
Anthony Taylor is 13 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
Thony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 b
end
b
[/input]
[output]
David A is 14 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 13 varna
b Aa 14 b
N m 21 c
Jack L 16 varna
David Lee 17 b
end
c
[/input]
[output]
N m is 21 years old
[/output]
[/test]
[test]
[input]
T T 13 v
b Aa 14 v
N m 21 v
Jack L 16 v
David Lee 17 v
end
v
[/input]
[output]
T T is 13 years old
b Aa is 14 years old
N m is 21 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 22 a
b Aa 14 e
N m 30 c
Jack L 18 e
Port Lee 14 e
end
e
[/input]
[output]
b Aa is 14 years old
Jack L is 18 years old
Port Lee is 14 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Students
[code-task title="Students" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Students {

    static class Student {
        // Write your code here

    }
}
```
[/code-editor]
[task-description]
## Descriere

Definiți o clasă **Student**, care conține următoarele informații despre elevi:
 - first name
 - last name
 - age
 - hometown

### Intrare / constrângeri

Citiți o listă de studenți până când primiți comanda **"end"**.

După aceea, veți primi un **nume de oraș**.

### Ieșire

Imprimați numai studenții care sunt din orașul dat, în următorul format:
"\{firstName\} \{lastName\} is \{age\} years old."

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| John Smith 15 Sofia | John Smith is 15 years old. |
| Peter Ivanov 14 Plovdiv | Linda Bridge is 16 years old. |
| Linda Bridge 16 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |

|**Intrare**|**Ieșire**|
| --- | --- |
| Anthony Taylor 15 Chicago | Anthony Taylor is 15 years old. |
| David Anderson 16 Washington | Jack Lewis is 14 years old. |
| Jack Lewis 14 Chicago | David Lee is 14 years old. |
| David Lee 14 Chicago | |
| end | |
| Chicago | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test open]
[input]
Anthony Taylor 15 Chicago
David Anderson 16 Washington
Jack Lewis 14 Chicago
David Lee 14 Chicago
end
Chicago
[/input]
[output]
Anthony Taylor is 15 years old
Jack Lewis is 14 years old
David Lee is 14 years old
[/output]
[/test]
[test]
[input]
Anthony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 varna
end
varna
[/input]
[output]
Anthony Taylor is 13 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
Thony Taylor 13 varna
David A 14 b
Jack L 16 varna
David Lee 17 b
end
b
[/input]
[output]
David A is 14 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 13 varna
b Aa 14 b
N m 21 c
Jack L 16 varna
David Lee 17 b
end
c
[/input]
[output]
N m is 21 years old
[/output]
[/test]
[test]
[input]
T T 13 v
b Aa 14 v
N m 21 v
Jack L 16 v
David Lee 17 v
end
v
[/input]
[output]
T T is 13 years old
b Aa is 14 years old
N m is 21 years old
Jack L is 16 years old
David Lee is 17 years old
[/output]
[/test]
[test]
[input]
T T 22 a
b Aa 14 e
N m 30 c
Jack L 18 e
Port Lee 14 e
end
e
[/input]
[output]
b Aa is 14 years old
Jack L is 18 years old
Port Lee is 14 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Students 2.0
[code-task title="Students 2.0" taskId="java-fund-16-Objects-and-Classes-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
Folosiți clasa din problema anterioară.

Dacă primiți un student, care există deja (**prenume** și **prenume** ar trebui să fie **unic**) suprascrieți informațiile.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| John Smith 15 Sofia | John Smith is 16 years old. |
| John Smith 16 Sofia | Linda Bridge is 17 years old. |
| Linda Bridge 17 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
John Smith 16 Sofia
Linda Bridge 17 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 16 years old
Linda Bridge is 17 years old
[/output]
[/test]
[test]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Peter Ivanov 14 Sofia
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Peter Ivanov is 14 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
Varna
[/input]
[output]
Simon Stone is 12 years old
Simon Sone is 12 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
S
[/input]
[output]
J S is 3 years old
P J is 104 years old
J P is 61 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Students 2.0
[code-task title="Students 2.0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Students2 {

    static class Student {
       // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Folosiți clasa din problema anterioară.

Dacă primiți un student, care există deja (**prenume** și **prenume** ar trebui să fie **unic**) suprascrieți informațiile.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| John Smith 15 Sofia | John Smith is 16 years old. |
| John Smith 16 Sofia | Linda Bridge is 17 years old. |
| Linda Bridge 17 Sofia | |
| Simon Stone 12 Varna | |
| end | |
| Sofia | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith 15 Sofia
John Smith 16 Sofia
Linda Bridge 17 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 16 years old
Linda Bridge is 17 years old
[/output]
[/test]
[test]
[input]
John Smith 15 Sofia
Peter Ivanov 14 Plovdiv
Peter Ivanov 14 Sofia
Linda Bridge 16 Sofia
Simon Stone 12 Varna
end
Sofia
[/input]
[output]
John Smith is 15 years old
Peter Ivanov is 14 years old
Linda Bridge is 16 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
Varna
[/input]
[output]
Simon Stone is 12 years old
Simon Sone is 12 years old
[/output]
[/test]
[test]
[input]
J S 3 S
Peter Ivanov 14 P
P J 104 S
J P 61 S
Simon Stone 12 Varna
Simon Sone 12 Varna
end
S
[/input]
[output]
J S is 3 years old
P J is 104 years old
J P is 61 years old
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
