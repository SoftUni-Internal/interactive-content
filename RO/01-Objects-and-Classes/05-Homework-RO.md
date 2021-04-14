# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Articles

[code-task title="Articles" taskId="java-fund-2-Objects-and-Classes-Articles" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[task-description]

## Descriere
Creați o clasă articol cu următoarele proprietăți:
- Title - un șir
- Content - un șir
- Author - un șir

Clasa ar trebui să aibă un constructor și următoarele metode:
- **edit** (new content) - schimbați conținutul vechi cu cel nou
- **changeAuthor** (new author) - schimbați autorul
- **rename** (new title) - modificați titlul articolului
- **override ToString** - tipărește articolul în următorul format: 

"\{title\} - \{content\}:\{author\}"

Scrieți un program care citește un articol în următorul **format** "\{title\}, \{content\}, \{author\}". 

Pe linia următoare, veți obține un **număr n**.

Pe **următoarele n linii**, veți primi una dintre următoarele **comenzi**:

- "Edit: \{new content\}" 
- "ChangeAuthor: \{new author\}" 
- "Rename: \{new title\}". 

La final, **tipăriți articolul final**.


### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| some title, some content, some author | better title - better content: better author |
| 3 | |
| Edit: better content | |
| ChangeAuthor:  better author | |
| Rename: better title | |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
some title, some content, some author
3
Edit: better content
ChangeAuthor: better author
Rename: better title
[/input]
[output]
better title - better content: better author
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Edit: better content1
Edit: better content2
Edit: better content3
[/input]
[output]
Holy Ghost - better content3: John Sandford
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
ChangeAuthor:  Mitch Albom
ChangeAuthor:  better author
ChangeAuthor:  Kim Heacox
[/input]
[output]
Holy Ghost - content:  Kim Heacox
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Rename: The Next Person You Meet in Heaven
Rename: better title
Rename: John Muir and the Ice That Started a Fire
[/input]
[output]
John Muir and the Ice That Started a Fire - content: John Sandford
[/output]
[/test]
[test]
[input]
some title, some content, some author
6
Rename: The Good German
Edit: better content1
ChangeAuthor:  Ben Coes
ChangeAuthor:  Gary D. Chapman
Rename: The Girl with No Shadow
Edit: better content2
[/input]
[output]
The Girl with No Shadow - better content2:  Gary D. Chapman
[/output]
[/test]
[test]
[input]
some title, some content, some author
5
Rename: John Muir and the Ice That Started a Fire
ChangeAuthor:  John Grisham
ChangeAuthor:  Shirley Jackson
Rename: The haunting of hill house
Edit: better content2
[/input]
[output]
The haunting of hill house - better content2:  Shirley Jackson
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problemă: Opinion Poll

[code-task title="Opinion Poll" taskId="java-fund-2-Objects-and-Classes-Opinion-Poll" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[task-description]

## Descriere
Folosind **clasa Person**, scrieți un program care citește de pe consolă **N linii de informații personale** și apoi **imprimă toate persoanele** a căror **vârstă este mai mare de 30 de ani** în următorul **format**:

"\{name\} - \{age\}"

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | John - 31 |
| Peter 12 | Steven - 48 |
| John 31 | |
| Steven 48 | |

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 5 |  Leo - 44  | 
| Nick 33 | Nick - 33 |
| Yoan 88 | Yoan - 88|
| Tom 22 | |
| Leo 44 | |
| Sophie 11 | |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
John 31
Steven 48
[/input]
[output]
John - 31
Steven - 48
[/output]
[/test]
[test open]
[input]
5
Nick 33
Yoan 88
Tom 22
Leo 44
Sophie 11
[/input]
[output]
Leo - 44
Nick - 33
Yoan - 88
[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 31
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 321534
Suzi 3213
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Dencho - 31
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Pesho - 321534
Suzi - 3213
Zuzi - 32131

[/output]
[/test]
[test]
[input]
11
A 40
B 43
C 54
Dencho 1
Encho 99
Mincho 32
Noncho 123
Oncho 100
Pesho 0
Suzi 12
Zuzi 32131
[/input]
[output]
A - 40
B - 43
C - 54
Encho - 99
Mincho - 32
Noncho - 123
Oncho - 100
Zuzi - 32131
[/output]
[/test]
[test]
[input]
4
A 10
B 11
C 12
D 13
[/input]
[output]

[/output]
[/test]
[test]
[input]
13
A 31
W 45
B 76
C 87
D 453
E 645
Z 55
K 53
I 43
J 543
P 67
H 76
F 88
[/input]
[output]
A - 31
B - 76
C - 87
D - 453
E - 645
F - 88
H - 76
I - 43
J - 543
K - 53
P - 67
W - 45
Z - 55
[/output]
[/test]
[test]
[input]
13
Astor 45
Asto 31
Borko 76
Ceco 87
Dido 453
Encho 645
Focker 11
Haplio 76
Ivo 12
Julien 0
Kodkoslav 30
Pencho 67
Zoro 55
[/input]
[output]
Asto - 31
Astor - 45
Borko - 76
Ceco - 87
Dido - 453
Encho - 645
Haplio - 76
Pencho - 67
Zoro - 55
[/output]
[/test]
[test]
[input]
4
Ann 31
Anntoanette 39
An 33
Annie 31
[/input]
[output]
An - 33
Ann - 31
Annie - 31
Anntoanette - 39
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Articles 2.0
[code-task title="Articles 2.0" taskId="java-fund-2-Objects-and-Classes-Articles-2.0" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]
[task-description]

## Descriere
Schimbați programul "Articles", astfel încât să puteți stoca o **listă de articole**.

Nu veți mai avea nevoie de metode (**cu excepția** metodei toString).

Pe **prima linie**, veți primi un **număr n**.

Pe următoarele **n linii**, veți primi câteva **articole în același format ca sarcina anterioară** ("\{title\}, \{content\}, \{author\}").

În cele din urmă, veți primi unul dintre cele **trei criterii**: "title", "content", "author".

Trebuie să ordonați articolele **alfabetic** pe baza comenzii și să le imprimați sortate după **criteriile** date.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 2 | Article - content: Johnny |
| Science, planets, Bill | Science - planets: Bill |
| Article, content, Johnny | |
| title | |

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 | title3 – A: author3 |
| title1, C, author1 | title2 – B: author2 |
| title2, B, author2 | title1 – C: author1 |
| title3, A, author3 | |
| content | |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
2
Science, planets, Bill
Article, content, Johnny
title
[/input]
[output]
Article - content: Johnny
Science - planets: Bill

[/output]
[/test]
[test]
[input]
3
title1, C, author1
title2, B, author2
title3, A, author3
content
[/input]
[output]
title3 - A: author3
title2 - B: author2
title1 - C: author1
[/output]
[/test]
[test]
[input]
2
The Reckoning, Content, John Grisham
Harry Potter and the Sorcerer's Stone (Enhanced Edition), content2, J.K. Rowling
title
[/input]
[output]
Harry Potter and the Sorcerer's Stone (Enhanced Edition) - content2: J.K. Rowling
The Reckoning - Content: John Grisham
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
content
[/input]
[output]
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Ego Is the Enemy - content2: Ryan Holiday
A Christmas Message - content3: Anne Perry
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
author
[/input]
[output]
A Christmas Message - content3: Anne Perry
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Most Valuable Playboy - content4: Lauren Blakely
Ego Is the Enemy - content2: Ryan Holiday
[/output]
[/test]
[test]
[input]
2
A Simple Favor, content2, Darcey Bell
Gracie's Secret, content1, Jill Childs
title
[/input]
[output]
A Simple Favor - content2: Darcey Bell
Gracie's Secret - content1: Jill Childs
[/output]
[/test]
[test]
[input]
3
A Simple Favor, content2, Darcey Bell
Most Valuable Playboy, content4, Lauren Blakely
Gracie's Secret, content1, Jill Childs
content
[/input]
[output]
Gracie's Secret - content1: Jill Childs
A Simple Favor - content2: Darcey Bell
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problemă: Students

[code-task title="Students" taskId="java-fund-2-Objects-and-Classes-Students" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]

## Descriere

Scrieți un program care primește **un număr n de elevi** și îi **ordonează (descendent) în funcție de note** .

Fiecare elev trebuie să aibă **first name** (șir), **Last name** (șir) și **grade** (număr în virgulă mobilă).

### Intrare

- Prima linie va fi un **număr n**
- Următoarele **n linii** veți primi informații despre elev în **formatul** "\{first name\} \{second name\} \{grade\}"

### Ieșire
-Tipăriți fiecare elev în următorul format "\{first name\} \{second name\}: \{grade\}"

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | Rocco Erben: 6.00 |
| Lakia Eason 3.90 | Prince Messing: 5.49 |
| Prince Messing 5.49 | Akiko Segers: 4.85 |
| Akiko Segers 2.85 | Lakia Eason: 3.90 |
| Rocco Erben 6.00 | |


[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
4
Lakia Eason 3.90
Prince Messing 5.49
Akiko Segers 4.85
Rocco Erben 6.00
[/input]
[output]
Rocco Erben: 6.00
Prince Messing: 5.49
Akiko Segers: 4.85
Lakia Eason: 3.90
[/output]
[/test]
[test]
[input]
4
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: 5.79
Mora Tod: 2.78
Pete Kendrick: 2.61
Amias Mathews: 2.30
[/output]
[/test]
[test]
[input]
3
Cletus Henry 4.34
Deena Banks 5.83
Asher West 5.76
[/input]
[output]
Deena Banks: 5.83
Asher West: 5.76
Cletus Henry: 4.34
[/output]
[/test]
[test]
[input]
3
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
[/input]
[output]
Cletus Henry: 5.50
Deena Banks: 5.33
Asher West: 3.59
[/output]
[/test]
[test]
[input]
6
Sydnie Britton 5.79
Cletus Henry 5.50
Deena Banks 5.24
Asher West 4.59
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: 5.79
Cletus Henry: 5.50
Deena Banks: 5.24
Asher West: 4.59
Mora Tod: 2.78
Pete Kendrick: 2.61
[/output]
[/test]
[test]
[input]
7
Cletus Henry 5.50
Deena Banks 5.33
Asher West 3.59
Sydnie Britton 5.79
Amias Mathews 2.30
Mora Tod 2.78
Pete Kendrick 2.61
[/input]
[output]
Sydnie Britton: 5.79
Cletus Henry: 5.50
Deena Banks: 5.33
Asher West: 3.59
Mora Tod: 2.78
Pete Kendrick: 2.61
Amias Mathews: 2.30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problemă: Vehicle Catalogue
[code-task title="Vehicle Catalogue" taskId="java-fund-2-Objects-and-Classes-Vehicle-Catalogue" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere
Până când primiți **comanda** "`End`", veți primi linii de intrare în format:

- \{typeOfVehicle\} \{model\} \{color\} \{horsepower\}

După comanda "End", veți începe să primiți **modele de vehicule**. **Imprimați pentru fiecare vehicul primit** datele sale în **format**:

Type: \{typeOfVehicle\}

Model: \{modelOfVehicle\}

Color: \{colorOfVehicle\}

Horsepower: \{horsepowerOfVehicle\}

Când primiți comanda "Close the Catalogue", **imprimați puterea medie** pentru mașini și camioane în **format**:

"\{typeOfVehicles\} have an average horsepower of \{averageHorsepower\}."

Puterea medie este **calculată** prin **împărțirea sumei de cai putere pentru toate vehiculele de acel tip la numărul total de vehicule de același tip**.

Formatați răspunsul la **a doua zecimală**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| truck Man red 200 | Type: Car |
| truck Mercedes blue 300 | Model: Ferrari |
| car Ford green 120 | Color: red |
| car Ferrari red 550 | Horsepower: 550 |
| car Lamborghini orange 570 | Type: Car |
| End | Model: Ford |
| Ferrari | Color: green |
| Ford | Horsepower: 120 |
| Man | Type: Truck |
| Close the Catalogue | Model: Man |
| | Color: red |
| | Horsepower: 200 |
| | Cars have an average horsepower of: 413.33. |
| | Trucks have an average horsepower of: 250.00. |

[hints]
[hint]
Puteți defini o clasă `Vehicle` separată cu următoarele proprietăți:

```java
public class Vehicle {
  private String type;
  private String model;
  private String color;
  private int horsePower;

  // Definiți getters și setters...

}
```
[/hint] 
[hint]
Suprascrieți metoda `toString` implicită în următorul mod:

```java
@Override
public String toString() {
  return String.format("Type: %s\n" +
    "Model: %s\n" +
    "Color: %s\n" +
    "Horsepower: %d", 
    getType().toUpperCase().charAt(0) +
      this.getType().substring(1), 
    getModel(), 
    getColor(), 
    getHorsePower());
}
```
[/hint]
[/hints] 

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
truck Man red 200
truck Mercedes blue 300
car Ford green 120
car Ferrari red 550
car Lamborghini orange 570
End
Ferrari
Ford
Man
Close the Catalogue
[/input]
[output]
Type: Car
Model: Ferrari
Color: red
Horsepower: 550
Type: Car
Model: Ford
Color: green
Horsepower: 120
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have an average horsepower of: 413.33.
Trucks have an average horsepower of: 250.00.
[/output]
[/test]
[test]
[input]
car Opel green 736
End
Close the Catalogue
[/input]
[output]
Cars have an average horsepower of: 736.00.
Trucks have an average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Opel green 248
End
Close the Catalogue
[/input]
[output]
Cars have an average horsepower of: 0.00.
Trucks have an average horsepower of: 248.00.
[/output]
[/test]
[test]
[input]
car Lamborghini orange 570
End
Lamborghini
Close the Catalogue
[/input]
[output]
Type: Car
Model: Lamborghini
Color: orange
Horsepower: 570
Cars have an average horsepower of: 570.00.
Trucks have an average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Man red 200
End
Man
Close the Catalogue
[/input]
[output]
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have an average horsepower of: 0.00.
Trucks have an average horsepower of: 200.00.
[/output]
[/test]
[test]
[input]
truck Man red 800
truck Mercedes blue 300
car Ford green 400
car Ferrari red 553
car Lamborghini orange 570
End
Close the Catalogue
[/input]
[output]
Cars have an average horsepower of: 507.67.
Trucks have an average horsepower of: 550.00.
[/output]
[/test]
[test]
[input]
truck Man red 354
truck Mercedes blue 320
car Jaguar green 480
car Honda red 220
car Volvo orange 326
truck Volkswagen black 423
End
Volvo
Jaguar
Volkswagen
Close the Catalogue
[/input]
[output]
Type: Car
Model: Volvo
Color: orange
Horsepower: 326
Type: Car
Model: Jaguar
Color: green
Horsepower: 480
Type: Truck
Model: Volkswagen
Color: black
Horsepower: 423
Cars have an average horsepower of: 342.00.
Trucks have an average horsepower of: 365.67.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Person ID

[code-task title="Person ID" taskId="java-fund-2-Objects-and-Classes-Exercise-Person-ID" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Veți primi **un număr necunoscut de linii**.

Pe fiecare linie, veți primi o **matrice cu 3 elemente**.

**Primul** element va fi de tip **șir** și reprezintă **numele persoanei**.

Cel de-al **doilea** element va fi de tip **șir** și va reprezenta **ID-ul persoanei**.

Ultimul element va fi un de tip **număr întreg** și reprezintă **vârsta persoanei**.

Dacă primiți o persoană al cărei **ID l-ați primit deja**, atunci **actualizați** numele și vârsta ID-ului respectiv cu cele **ale noii persoane**.

Când primiți **comanda** "End", **imprimați toate persoanele**.

### Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| George 123456 20 | George with ID: 123456 is 20 years old. |
| Peter 78911 15 | John with ID: 78911 is 30 years old. |
| Steven 524244 10 | Steven with ID: 524244 is 10 years old. |
| John 78911 30 | |
| End | |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
George 123456 20
Peter 78911 15
Steven 524244 10
John 78911 30
End
[/input]
[output]
George with ID: 123456 is 20 years old.
John with ID: 78911 is 30 years old.
Steven with ID: 524244 is 10 years old.
[/output]
[/test]
[test]
[input]
Cindy 88611 2
Kaloyan 13967 3
Simona 53316 11
Gil 31837 72
Gil 31837 72
Stacy 88611 10
End
[/input]
[output]
Stacy with ID: 88611 is 10 years old.
Kaloyan with ID: 13967 is 3 years old.
Simona with ID: 53316 is 11 years old.
Gil with ID: 31837 is 72 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Margie 17098 46
Chip 84450 89
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Margie with ID: 17098 is 46 years old.
Chip with ID: 84450 is 89 years old.
[/output]
[/test]
[test]
[input]
Deyan 57989 24
Chip 74059 44
Chip 84450 89
Margie 17098 46
End
[/input]
[output]
Deyan with ID: 57989 is 24 years old.
Chip with ID: 74059 is 44 years old.
Chip with ID: 84450 is 89 years old.
Margie with ID: 17098 is 46 years old.
[/output]
[/tests]
[/code-task]
[/slide]

