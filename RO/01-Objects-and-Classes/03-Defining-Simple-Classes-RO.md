# Crearea Claselor Particularizate

[slide hideTitle]
# Definirea Claselor Simple

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-14-15-defining-simple-classes-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La definirea clasei, aceasta conține doar acele componente ale unei declarații de clasă care sunt necesare.

Componentele **obligatorii** sunt:

- Cuvântul cheie `class`

- **Numele** clasei

- **Corpul** clasei - între **{}**

Componente de **legitimație**, dar care nu sunt obligatorii:

- Câmpuri de clasă

- Constructor

- Getters și Setters

- Metode de clasă

Fiecare **clasă**, **câmp**, **constructor** sau **metodă** este inițializată cu un **modificator de acces** înainte, care specifică **accessibilitea**. 

**Nivelul de acces** poate fi **schimbat** prin aplicarea **modificatorului de acces** . 

Vom discuta despre asta în cursul următor. 

Există posibilitatea de a genera **automat** prin IntelliJ IDEA **constructori**, **getters**, **setters**, și cele mai folosite metode. 

Pentru a face asta, folosiți `Right-click + Generate`. 

Comanda scurtă depinde de sistemul de operare: 

- În Windows and Linux este `Alt + Insert` 

- În Macintosh este `Cmd + N`


[/slide]


[slide hideTitle]
# Numirea Claselor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-16-naming-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Numele clasei începe cu majusculă, prin convenție, i.e. **PascalCase naming**. 

Numele clasei ar trebui să conțină substantive descriptive.

Abrevierile trebuie evitate(cu excepția celor cunoscute, e.g. URL, HTTP, etc.).

```java
public class MyClass {

}
```

[/slide]
[slide hideTitle]
# Membri Clasei
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-17-class-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Câmpurile** și **metodele** definesc **starea** și **comportamentul** unei clase.

**Câmpurile** furnizează starea unei clase și a obiectelor sale:

- `String type` 

- `int age`

**Metodele** implementează comportamentul unei clase și al obiectelor sale: 

- `makeSound()`

Luați în considerare următorul exemplu:

```java
class Car {

    //Field
    private int fuel;

    //Method
    public void drive() {...}
}
```

[/slide]
[slide hideTitle]
# Metode

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-18-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

S-a stabilit anterior că metodele descriu **comportamentul** unui obiect.

Pot face asta prin stocarea **codului executabil** care manipulează **starea** atunci când este invocat.

Observați cum o metodă afectează un câmp:

```java
class Car {
  public int fuel;

  public int drive(distance) {
    int fuelBurned = distance * 0.1;
    
    // Modifies the state
    this.fuel -= fuelBurned;

    return fuelBurned;
  }
}
```

[/slide]

[slide hideTitle]
# Getters și Setters

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-19-getters-and-setters-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un getter și un setter pot fi declarați pentru fiecare câmp.

Getters furnizează **acces** la câmp și citesc valoarea acestuia. 

Aceștia încep întotdeauna cu cuvântul `get`, urmat de numele variabilei:

- `getColor`

- `getType`

Din moment ce metoda getter este de tipul **return**, tipul de date al valorii returnate de către metodă este de același tip cu cel al câmpului.

Setters **schimbă** și **actualizează** valoarea unui câmp.

Aceștia încep întotdeauna cu cuvântul `set`, urmat de numele variabilei:

- `setColor`

- `setType`

Metoda setter este de tip **void**.

```java
public class Car {
    // field
    private int fuel;
    . . .
    // getter
    public int getFuel() {
        return this.fuel;
    }

    // setter
    public void setFuel(int fuel) {
        this.fuel = fuel;
    }
}
```

[/slide]

[slide hideTitle]

# Crearea Unui Obiect

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-20-creating-an-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

De fiecare dată când un obiect este **creat**, acestuia îi este **dedicată** niște **memorie**.

Din acest motiv **variabilele locale** sunt create ca **referințe** pentru acea parte din memorie.

**Java Virtual Machine** este responsabilă pentru **urmărirea** referințelor obiectului.

Dacă nu sunt **referințe** pentru un obiect, acesta devine **gunoi** și este **șters**.

Este posibilă crearea a **multor obiecte* dintr-o clasă folosind cuvântul cheie `new`. 

Luați în considerare exemplul următor:

```java
class Program {
  public static void main(String[] args) {
    Car sedan = new Car();
    Car coupe = new Car();
  }
}
```

[/slide]

[slide hideTitle]
# Constructor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-21-22-constructors-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă specială, executată în timpul creării unui obiect, care **setează starea inițială a obiectului**.

Numele constructor-ului este **același cu numele clasei**.

Constructor-ul **poate să aibă parametri**, fapt care se folosește pentru **inițializarea câmpurilor**.

Toate clasele au **implicit constructor**. 

Pot să existe **constructori multipli ai aceleiași clase**. 

Acest lucru ajută la instanțierea obiectelor în diferite moduri cu un număr diferit de argumente.

```java
public class Animal {
    // fields
    private String type;
    private int age;
    private boolean herbivorous;

    // constructors
    public Animal() {

    }
    public Animal(String type) {
        this.type = type;
    }
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Students

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-problem-and-solution-students-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Students" taskId="java-fund-2-Objects-and-Classes-lab-Students" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere

Definiți o clasă **Student**, care conține următoarele informații despre elevi:
 - first name
 - last name
 - age
 - home town

### Intrare / Constrângeri

Citiți o listă de studenți până când primiți comanda **"end"**.

După aceea, veți primi un **nume de oraș**.

### Ieșire

Imprimați numai studenții care sunt din orașul dat, în următorul format:
"\{**firstName**\} \{**lastName**\} **is** \{**age**\} **years old.**"

## Exemple
|**Intrare**|**Ieșire**|
| --- | --- |
| Anthony Taylor 15 Chicago | Anthony Taylor is 15 years old. |
| David Anderson 16 Washington | Jack Lewis is 14 years old. |
| Jack Lewis 14 Chicago | David Lee is 14 years old. |
| David Lee 14 Chicago | |
| end | |
| Chicago | |



[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test]
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
# Problemă cu Soluție: Students 2.0
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-problem-and-solution-students-2.0-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Students 2.0" taskId="java-fund-2-Objects-and-Classes-lab-Students-2.0" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Description
Folosiți clasa din problema anterioară.

Dacă primiți un student, care există deja (**first name** și **last name** ar trebui să fie **unic**) suprascrieți informațiile.

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
[code-upload allowedMemory="30" /]
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
# Problemă cu Soluție: Songs

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-problem-and-solution-songs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Songs" taskId="java-fund-2-Objects-and-Classes-lab-Songs" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[task-description]
## Descriere

Definiți o clasă **Song**, care conține următoarele informații despre melodii:
- **Type List**

- **Name**

- **Time**

### Intrare / Constrângeri

- Pe prima linie veți primi **numărul de melodii - N**.

- Pe următoarele linii N veți primi date în următorul format:
"\{**typeList**\}\_\{**name**\}\_\{**time**\}".

- Pe ultima linie veți primi **Type List** sau **"all"**.

### Ieșire

Imprimați numai **Numele melodiilor** care aparțin de **Type list** sau **All songs**.

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
[code-upload allowedMemory="30" /]
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
