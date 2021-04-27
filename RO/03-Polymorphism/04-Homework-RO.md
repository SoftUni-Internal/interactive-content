# Teme pentru acasă

[slide hideTitle]
# Problemă: Vehicles
[code-task title="Vehicles" taskId="oop-advanced-java-polymorphism-Vehicles" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput] 

[task-description]
# Descriere
Creați un program care conține clasele pentru a reprezenta două tipuri de vehicule (**Car** și **Truck**). Ar trebui să simuleze **conducerea** și **realimentarea** vehiculelor.

**Car** și **Truck** trebuie să aibă ambele: **cantitate de combustibil**, **consum de combustibil în litri pe kilometru** și pot fi **conduse la o anumită distanță** și **realimentate cu un numărul dat de litri de gaz**.

În timpul **verii** ambele vehicule sunt dotate cu aer condiționat, astfel încât **consumul de combustibil** pe kilometru **crește cu 0,9** litri pentru **mașina** și cu **1,6** litri **pentru camion**.

De asemenea, **Camionul** are o gaură în rezervor și atunci când este **realimentat** reține doar **95%** din totalul **cantității reumplute**.

**Mașina** nu are astfel de probleme și poate fi **reumplută fără a pierde din gaz**.

Dacă vehiculul **nu poate** parcurge distanța specificată, nivelul său de combustibil rămâne neschimbat.

## Date de intrare
- Pe **prima linie** - informații despre mașină în formatul **Mașină** \{**cantitate de combustibil** \} \{**litri pe km** \}
- Pe **a doua linie** - informații despre camion în formatul **Camion** \{**cantitate de combustibil** \} \{**litri pe km** \}
- Pe **a treia linie** - **numărul de comenzi N** care vor fi date pe următoarele **N** linii
- În următoarele **N** linii - comenzi în format:
    - **Drive Car** \{**distance** \}
    - **Drive truck** \{**distance** \}
    - **The car needs refueling** \{**liters** \}
    - **The truck needs refueling** \{**liters** \}

## Date de ieșire
După fiecare comandă **Drive**, tipăriți dacă mașina sau camionul a putut parcurge distanța dată în acest format:

**Imprimați distanța formatată la două cifre după separatorul zecimal, cu excepția zerourilor finale**.

Utilizați clasa **DecimalFormat**: **The car / truck travelled** \{**distance** \} **km**

Dacă nu există suficient combustibil: **The car / truck needs refueling**

În cele din urmă, tipăriți **combustibilul rămas** atât pentru mașină, cât și pentru camion rotunjit **la a doua zecimală** în formatul:

**Car:** \{**liters**\}

**Truck:** \{**liters**\}`

# Exemple

## Exemplul 1
| **Intrare* | **Ieșire** |
| --- | --- |
| Car 15 0.3 | The car travelled 9 km |
| Truck 100 0.9 | The car needs refueling |
| 4 | The truck travelled 10 km |
| Drive Car 9 | Car: 54.20 |
| Drive Car 30 | Truck: 75.00 |
| Refuel Car 50 |  |
| Drive Truck 10 |  |

## Exemplul 2
| **Intrare** | **Ieșire** |
| --- | --- |
| Car 30.4 0.4 | The car needs refueling |
| Truck 99.34 0.9 | The car travelled 13.5 km |
| 5 | The truck needs refueling |
| Drive Car 500 | Car: 113.05 |
| Drive Car 13.5 | Truck: 109.13 |
| Refuel Truck 10.300 |  |
| Drive Truck 56.2 |  |
| Refuel Car 100.2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
```
Car 15 0.3
Truck 100 0.9
4
Drive Car 9
Drive Car 30
Refuel Car 50
Drive Truck 10
```
[/input]
[output]
```
The car travelled 9 km
The car needs refueling
The truck travelled 10 km
Car: 54.20
Truck: 75.00
```
[/output]
[/test]
[test open]
[input]
```
Car 30.4 0.4
Truck 99.34 0.9
5
Drive Car 500
Drive Car 13.5
Refuel Truck 10.300
Drive Truck 56.2
Refuel Car 100.2
```
[/input]
[output]
```
The car needs refueling
The car travelled 13.5 km
The truck needs refueling
Car: 113.05
Truck: 109.13
```
[/output]
[/test]
[test]
[input]
```
Car 10000 0.3
Truck 100 0.9
10
Drive Car 1
Drive Car 1.2
Drive Car 1.244
Drive Car 123.329
Drive Car 300.321
Drive Car 101.324
Drive Car 0.002
Drive Car 4000.943
Drive Car 0
Drive Car 0.0
```
[/input]
[output]
```
The car travelled 1 km
The car travelled 1.2 km
The car travelled 1.24 km
The car travelled 123.33 km
The car travelled 300.32 km
The car travelled 101.32 km
The car travelled 0 km
The car travelled 4000.94 km
The car travelled 0 km
The car travelled 0 km
Car: 4564.76
Truck: 100.00
```
[/output]
[/test]
[test]
[input]
```
Car 15 1.1
Truck 100 0.9
4
Drive Car 100
Drive Car 15.0
Drive Car 100.2343
Drive Car 200
```
[/input]
[output]
```
The car needs refueling
The car needs refueling
The car needs refueling
The car needs refueling
Car: 15.00
Truck: 100.00
```
[/output]
[/test]
[test]
[input]
```
Car 15 0.3
Truck 100 0.9
5
Refuel Car 10
Refuel Car 100.1
Refuel Car 10.3432
Refuel Car 99.9939
Refuel Car 18
```
[/input]
[output]
```
Car: 253.44
Truck: 100.00
```
[/output]
[/test]
[test]
[input]
```
Car 100 0.34
Truck 100090 0.9
8
Drive Truck 1
Drive Truck 2.4
Drive Truck 3.765432
Drive Truck 1239
Drive Truck 999.32
Drive Truck 0
Drive Truck 99.33
Drive Truck 0.0
```
[/input]
[output]
```
The truck travelled 1 km
The truck travelled 2.4 km
The truck travelled 3.77 km
The truck travelled 1239 km
The truck travelled 999.32 km
The truck travelled 0 km
The truck travelled 99.33 km
The truck travelled 0 km
Car: 100.00
Truck: 94227.96
```
[/output]
[/test]
[test]
[input]
```
Car 15 0.3
Truck 10.29 0.9
4
Drive Truck 500
Drive Truck 200.5
Drive Truck 300.31345
Drive Truck 100.10
```
[/input]
[output]
```
The truck needs refueling
The truck needs refueling
The truck needs refueling
The truck needs refueling
Car: 15.00
Truck: 10.29
```
[/output]
[/test]
[test]
[input]
```
Car 15 0.3
Truck 100 0.9
6
Refuel Truck 1
Refuel Truck 1.0
Refuel Truck 1.23432
Refuel Truck 234332.32138
Refuel Truck 94234.324
Refuel Truck 3213.434
```
[/input]
[output]
```
Car: 15.00
Truck: 315294.15
```
[/output]
[/test]
[test]
[input]
```
Car 15 0.03
Truck 100 0.9
10
Drive Car 14
Drive Car 15
Refuel Car 100
Drive Car 500
Drive Car 99.1
Drive Car 1000.32
Drive Car 5.01
Refuel Car 1.99
Refuel Truck 0.01
Drive Car 1
```
[/input]
[output]
```
The car travelled 14 km
The car needs refueling
The car needs refueling
The car travelled 99.1 km
The car needs refueling
The car travelled 5.01 km
The car travelled 1 km
Car: 6.22
Truck: 100.01
```
[/output]
[/test]
[test]
[input]
```
Car 15 0.3
Truck 100 0.09
10
Drive Truck 100
Refuel Truck 100
Drive Truck 5000
Drive Truck 60000.325
Refuel Truck 50
Drive Truck 40.2
Drive Truck 48.234
Refuel Truck 10.965
Drive Truck 1.009
Drive Truck 1000000
```
[/input]
[output]
```
The truck needs refueling
The truck needs refueling
The truck needs refueling
The truck travelled 40.2 km
The truck travelled 48.23 km
The truck travelled 1.01 km
The truck needs refueling
Car: 15.00
Truck: 101.76
```
[/output]
[/test]
[test]
[input]
```
Car 15.1 0.3
Truck 100.2 0.9
21
Drive Car 100
Drive Truck 1000
Drive Car 1
Drive Car 2.23
Drive Car 10000
Drive Truck 1000.32
Refuel Car 1000
Refuel Car 10.29
Refuel Truck 100
Refuel Truck 8.9
Drive Car 100
Drive Car 15.2
Drive Truck 109.9
Drive Truck 10.99
Refuel Car 12.12
Refuel Car 12.12
Drive Car 0
Drive Car 0.000
Drive Truck 0
Drive Truck 0.00
Drive Car 700.2
```
[/input]
[output]
```
The car needs refueling
The truck needs refueling
The car travelled 1 km
The car travelled 2.23 km
The car needs refueling
The truck needs refueling
The car travelled 100 km
The car travelled 15.2 km
The truck needs refueling
The truck travelled 10.99 km
The car travelled 0 km
The car travelled 0 km
The truck travelled 0 km
The truck travelled 0 km
The car travelled 700.2 km
Car: 67.27
Truck: 176.18
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Vehicles Extension
[code-task title="Vehicles Extension" taskId="oop-advanced-java-polymorphism-Vehicles-Extension" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere
Utilizați soluția de la sarcina anterioară ca punct de plecare și adăugați funcționalitatea necesară.

Adăugați o nouă clasă de vehicule - **Bus**.

Fiecare vehicul are **capacitatea rezervorului** și cantitatea de combustibil **nu poate scădea sub 0** (Dacă rezerva de combustibil devine mai mică de 0, **afișați** **The fuel amount must be a positive number** pe consolă).

Capacitatea rezervorului unui vehicul nu poate fi depășită.

Dacă **încercăm să punem mai mult combustibil** în rezervor decât **spațiul disponibil**, afișăm **The fuel amount exceeds this vehicle's capacity** și **nu adăugăm combustibil** în rezervorul vehiculului.

Adăugați o **funcție nouă** în clasa de autobuz:

**Autobuzul** poate **circula cu sau fără persoane**.

Dacă autobuzul **are pasageri** - **aparatul de aer condiționat este pornit** și **consumul de combustibil** pe kilometru **este mărit cu 1,4 litri**.

Dacă nu există **persoane în autobuz** când conduceți aparatul de aer condiționat este **oprit** și consumul său de combustibil este nealterat.

## Date de intrare
- Pe **primele trei linii** veți primi informații despre vehicule în acest format:

**Vehicle** \{**initial fuel quantity**\} \{**liters per km**\} \{**tank capacity**\}

- Pe linia a patra - **numărul de comenzi N** care vor fi date pe următoarele **N** linii
- În următoarele **N** linii - comenzi în format:
    - **Drive Car** \{**distance**\}
    - **Drive Truck** \{**distance**\}
    - **Drive Bus** \{**distance**\}
    - **DriveEmpty Bus** \{**distance**\}
    - **Refuel Car** \{**liters**\}
    - **Refuel Truck** \{**liters**\}
    - **Refuel Bus** \{**liters**\}

## Date de ieșire
-După fiecare comandă **Drive**, tipăriți dacă mașina/camionul/autobuzul a reușit să parcurgă distanța dată în următorul format:
- Dacă a reușit:

**The car/truck/bus travelled** \{**distance**\} **km**

- Dacă nu a reușit:

**The car/truck/bus needs refueling**

-Dacă se face o încercare de a specifica un număr de combustibil **mai mic sau egal cu 0**, tipăriți **The fuel amount must be a positive number**
- În cazul în care cantitatea de reumplere depășește capacitatea de combustibil a unui vehicul, tipăriți **The fuel amount exceeds this vehicle's capacity**

- În cele din urmă, imprimați **combustibilul rămas** pentru mașină, camion și autobuz rotunjit la **a doua zecimală** după cum urmează:

`**Car:** \{**liters**\}

**Truck:** \{**liters**\}

**Bus:** \{**liters**\}`

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| Car 30 0.04 70 | The fuel amount must be a positive number |
| Truck 100 0.5 300 | The fuel amount must be a positive number |
| Bus 40 0.3 150 | The fuel amount exceeds this vehicle's capacity |
| 8 | The bus travelled 10 km |
| Refuel Car -10 | The fuel amount exceeds this vehicle's capacity |
| Refuel Truck 0 | The bus needs refueling |
| Refuel Car 10 | The fuel amount exceeds this vehicle's capacity |
| Refuel Car 300 | Car: 40.00 |
| Drive Bus 10 | Truck: 100.00 |
| Refuel Bus 1000 | Bus: 23.00 |
| DriveEmpty Bus 100 |  |
| Refuel Truck 1000 |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Car 30 0.04 70
Truck 100 0.5 300
Bus 40 0.3 150
8
Refuel Car -10
Refuel Truck 0
Refuel Car 10
Refuel Car 300
Drive Bus 10
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
[/input]
[output]
The fuel amount must be a positive number
The fuel amount must be a positive number
The fuel amount exceeds this vehicle's capacity
The bus travelled 10 km
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
Car: 40.00
Truck: 100.00
Bus: 23.00
[/output]
[/test]
[test]
[input]
Car 30 0.04 70
Truck 100 0.5 300
Bus 40 0.3 150
16
Refuel Car -10
Refuel Truck 0
Refuel Car 10
Refuel Car 300
Drive Bus 10
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
Refuel Car 110
Refuel Truck 10
Refuel Car 10
Refuel Car -300
Drive Bus 110
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
[/input]
[output]
The fuel amount must be a positive number
The fuel amount must be a positive number
The fuel amount exceeds this vehicle's capacity
The bus travelled 10 km
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
The fuel amount exceeds this vehicle's capacity
The fuel amount must be a positive number
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
Car: 50.00
Truck: 109.50
Bus: 23.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Wild Farm
[code-task title="Wild Farm" taskId="oop-advanced-java-polymorphism-Wild-Farm" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Cerință
Creați cod pentru a reprezenta diagrama.

Toate clasele trebuie să fie **abstracte**, **cu excepție** pentru **Vegetable**, **Meat**, **Mouse**, **Tiger**, **Cat**, și **Zebra**.

[image assetsSrc="interfaces-and-abstraction-example(17).png" /]

Date de intare suplimentare vor fi primite de pe consolă.

Fiecare linie **pară** va conține informații despre un **Animal** în următorul format:


\{**AnimalType**\} \{**AnimalName**\} \{**AnimalWeight**\} \{**AnimalLivingRegion**\} \[\{**CatBreed**\} = Only if it is a cat\]

Pe liniile **impare** veți primi informații despre **mâncarea** pe care ar trebui să o dați **Animalului**.

Linia va consta în **FoodType** și **quantity**, separate prin spații albe.

Ar trebui să construiți logica pentru a determina dacă animalul va mânca alimentele furnizate.

Clasele **Mouse** și **Zebra** ar trebui să verifice dacă alimentele furnizate sunt **Vegetable**.

Dacă **sunt**, ei **îl vor mânca**.

**În caz contrar**, ar trebui să **tipăriți** un **mesaj** în formatul:

**The type of food cannot be consumed by** \{**AnimalType**\}

**Pisicile** mănâncă **orice** fel de mâncare, dar **Tigrii** mănâncă **numai Carne**.

Dacă o **Legumă** este oferită unui **tigru**, ar trebui să fie produs același mesaj securizat anterior.

După ce citiți informații despre un **Animal** și **Mâncarea** acestuia, invocați metoda **makeSound()** a animalului curent și **hrăniți-l**.

În cele din urmă tipăriți toate informațiile pe întregul obiect și continuați să citiți informații despre următorul animal / mâncare.

Introducerea va continua până când veți primi următoarea comandă: **End**.

După aceea, **tipăriți** toate informațiile primite despre **toate animalele** în format:

\{**AnimalType**\} \[\{**AnimalName**\}, \{**CatBreed**\}, \{**AnimalWeight**\}, \{**AnimalLivingRegion**\}, \{**FoodEaten**\}\]

**AnimalWeight** ar trebui să fie tipărit fără zero după separatorul zecimal.

Utilizați clasa **DecimalFormat**.

## Notă:
Luați în considerare modificarea metodei implicite **toString()**.

# Exemple
## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| Cat Gray 1.1 Home Persian | Meowwww |
| Vegetable 4 | Cat[Gray, Persian, 1.1, Home, 4] |
| End |  |

## Exmplul 2
| **Intrare** | **Ieșire** |
| --- | --- |
| Tiger Tom 167.7 Asia | ROAAR!!! |
| Vegetable 1 | The type of food cannot be consumed by Tigers |
| End | Tiger[Tom, 167.7, Asia, 0] |

## Exemplul 3
| **Intrare** | **Ieșire** |
| --- | --- |
| Zebra Jaguar 500 Africa | Zs |
| Vegetable 150 | Zebra[Jaguar, 500, Africa, 150] |
| End |  |

## Exemplul 4
| **Ieșire** | **Ieșire** |
| --- | --- |
| Mouse Jerry 0.5 Anywhere | SQUEEEAAAK! |
| Vegetable 0 | Mouse[Jerry, 0.5, Anywhere, 0] |
| End |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Cat Gray 1.1 Home Persian
Vegetable 4
End
[/input]
[output]
Meowwww
Cat\[Gray, Persian, 1.1, Home, 4\]
[/output]
[/test]
[test open]
[input]
Tiger Tom 167.7 Asia
Vegetable 1
End
[/input]
[output]
ROAAR!!!
The type of food cannot be consumed by Tigers
Tiger\[Tom, 167.7, Asia, 0\]
[/output]
[/test]
[test open]
[input]
Zebra Jaguar 500 Africa
Vegetable 150
End
[/input]
[output]
Zs
Zebra\[Jaguar, 500, Africa, 150\]
[/output]
[/test]
[test open]
[input]
Mouse Jerry 0.5 Anywhere
Vegetable 0
End
[/input]
[output]
SQUEEEAAAK!
Mouse\[Jerry, 0.5, Anywhere, 0\]
[/output]
[/test]
[test]
[input]
Cat Spas 7.250 Streets Unknown
Meat 3
Cat Tutcho 2.127 US_Home British
Vegetable 10
End
[/input]
[output]
Meowwww
Meowwww
Cat\[Spas, Unknown, 7.25, Streets, 3\]
Cat\[Tutcho, British, 2.13, US_Home, 10\]
[/output]
[/test]
[test]
[input]
Cat Spas 0.750 Home Persian_Angorian
Meat 143
Mouse Mincho 4.23 Home
Meat 1
Tiger Giggs 4 Asia
Vegetable 0
End
[/input]
[output]
Meowwww
SQUEEEAAAK!
The type of food cannot be consumed by Mice
ROAAR!!!
The type of food cannot be consumed by Tigers
Cat\[Spas, Persian_Angorian, 0.75, Home, 143\]
Mouse\[Mincho, 4.23, Home, 0\]
Tiger\[Giggs, 4, Asia, 0\]
[/output]
[/test]
[test]
[input]
Zebra Zebrin 345.235 Zoo
Meat 55
Tiger Tigrin 913 Zoo
Vegetable 214
Mouse Mousin 0.2 Zoo
Meat 345
End
[/input]
[output]
Zs
The type of food cannot be consumed by Zebras
ROAAR!!!
The type of food cannot be consumed by Tigers
SQUEEEAAAK!
Mice are not eating that type of food!
Zebra\[Zebrin, 345.24, Zoo, 0\]
Tiger\[Tigrin, 913, Zoo, 0\]
Mouse\[Mousin, 0.2, Zoo, 0\]
[/output]
[/test]
[test]
[input]
Cat No_Name 0.100 Cat_Clinic Unhealty_Cat
Meat 100
Tiger No_Name 100 Cat_Clinic
Meat 1000
Cat MyCat 1.120 @Home Persian/British
Meat 17
End
[/input]
[output]
Meowwww
ROAAR!!!
Meowwww
Cat\[No_Name, Unhealty_Cat, 0.1, Cat_Clinic, 100\]
Tiger\[No_Name, 100, Cat_Clinic, 1000\]
Cat\[MyCat, Persian/British, 1.12, @Home, 17\]
[/output]
[/test]
[test]
[input]
Cat No_Name 0.100 Cat_Clinic Unhealty_Cat
Vegetable 100
Tiger No_Name 100 Cat_Clinic
Vegetable 1000
Cat MyCat 1.120 @Home Persian/British
Vegetable 17
End
[/input]
[output]
Meowwww
ROAAR!!!
The type of food cannot be consumed by Tigers
Meowwww
Cat\[No_Name, Unhealty_Cat, 0.1, Cat_Clinic, 100\]
Tiger\[No_Name, 100, Cat_Clinic, 0\]
Cat\[MyCat, Persian/British, 1.12, @Home, 17\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Word
[code-task title="Word" taskId="oop-advanced-java-polymorphism-Word" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

**Aici aveți un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Polymorphism-Word.zip) **pentru această cerință.**

Vă este dat un schelet pentru un program de procesare de cuvinte (like MS Word, OpenOffice Writer, etc.). 

Programul ciește o linie de text de pe consolă, apoi începe să accepte și să aplice comenzi de editare a textului. 

Fiecare comandă modifică textul.

Când este introdusă comanda **exit**, programul imprimă ultima formă a textului.

**Toate** comenzile sunt sub **forma**:

"\{**commandName**\} \{**startIndex**\} \{**endIndex**\}"

Unde:

- **commandName** este un șir care descrie ce comandă trebuie utilizată
- **startIndex** este un număr întreg care descrie din care index ar trebui aplicată comanda
- **endIndex** este un număr întreg care descrie la care index (exclusiv) ar trebui aplicată comanda
    - adică comanda este aplicată pe indici începând de la **startIndex** și se termină la **endIndex - 1** inclusiv

Scheletul care vi se oferă conține următoarele fișiere:
- **Main.java** - conține metoda `main(String[] args)`, citește intrarea și afșează ieșirea pe consolă
- **TextTransform.java** - conține o clasă de bază pentru orice transformare de text adăugată în program
- **Command.java** - conține o clasă care reprezintă comenzi
- **CommandInterface.java** - definește o clasă de interfață care gestionează comenzile reprezentate ca șiruri (provenind de pe consolă, citite din `main(String[] args)`)
- **CommandImpl.java** - clasă care deține implementarea **CommandInterface**

Creați un fișier **Initialization.java** care deține funcționalitatea pentru a crea instanțe din clasa CommandImpl

Fișierele care vi se oferă acceptă toată logica necesară pentru a implementa următoarea comandă:

**uppercase** - transformă orice caracter alfabetic din textul din gama \[**startIndex**, **endIndex**\) în varianta sa cu majuscule.

**De exemplu:**
Dacă textul curent este **dom3. text**
și ni se dă comanda: **uppercase 1 7**
textul se va schimba în **dOM3. Text**

**Notă**: dacă **startIndex == endIndex**, comanda nu are efect.

Sarcina dvs. este să implementați următoarele comenzi:
- **cut** - taie (elimină) caractere din textul din intervalul \[**startIndex**, **endIndex**\) și salvează ultima piesă care a fost eliminată

**De exemplu:**
Dacă textul curent este **dom3. text**
și executăm comanda **cut 1 7**
textul se va schimba în **dext**

**Notă**: dacă **startIndex == endIndex**, comanda nu are efect asupra textului, dar "**șterge**" ultima tăietură amintită

- **paste** - înlocuiește caracterele din text în intervalul \[**startIndex**, **endIndex**\) cu caracterele care au fost eliminate de la ultima tăiere

**De exemplu:**
Dacă avem textul **dom3. Text**
iar comenzile **cut 1 7** (textul se schimbă în **dext**) **paste 3 4**
textul se va schimba în **dexom3. t** (lipim ultima bucată tăiată - **om3. t** - peste indexurile specificate)

**Notă**: dacă **startIndex == endIndex**, **paste** va insera textul în poziția **startIndex**, ceea ce înseamnă că orice text din **startIndex** va fi împins spre dreapta de textul inserat.

**De exemplu:**
Dacă ultima comandă a fost **paste 0 0** (nu **paste 3 4**),
textul ar fi **om3. Tdext**
 
## Intrare
Programul definit în `Main.java` citește următoarea intrare:

O linie de text, urmată de o succesiune de linii care conțin comenzi ale formatului

"\{**commandName**\} \{**startIndex**\} \{**endIndex**\}"

terminându-se cu comanda **exit**.

## Ieșire
Programul definit în `Main.java` produce următoarea ieșire:

**The modified line of text.**

## Restricții
Textul introdus nu va avea mai mult de **30** caractere și nu vor fi mai mult de **10** comenzi în intrare.

Fiecare comandă va răspunde la:

**0 <= startIndex <= endIndex < currentTextLength**
(intrarea va fi întotdeauna aplicabilă)

Întotdeauna va exista cel puțin 1 comandă **cut** înainte de orice comandă **paste**.

Comenzile consecutive **paste** (fără **cut** între ele) vor lipi același text.

Durata totală de rulare a programului dvs. nu trebuie să depășească **0,1 secunde**.

Memoria totală utilizată nu trebuie să depășească **16 MB**.

# Exemple
## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| dom3. text | dexom3. t |
| cut 1 7 |  |
| paste 3 4 |  |
| exit |  |

## Exemplul 2
| **Intare** | **Ieșire** |
| --- | --- |
| abc d e | dabc E |
| cut 0 4 |  |
| uppercase 1 3 |  |
| paste 1 2 |  |
| exit |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
dom3. text
cut 1 7
paste 3 4
exit
[/input]
[output]
dexom3. t
[/output]
[/test]
[test open]
[input]
abc d e
cut 0 4
uppercase 1 3
paste 1 2
exit
[/input]
[output]
dabc E
[/output]
[/test]
[test]
[input]
abc d e
cut 0 4
uppercase 0 1
exit
[/input]
[output]
D e
[/output]
[/test]
[test]
[input]
test using cut only
cut 0 2
cut 3 4
cut 14 16
cut 0 3
cut 4 8
exit
[/input]
[output]
sing on
[/output]
[/test]
[test]
[input]
cut and paste testing
cut 3 6
paste 0 3
cut 6 15
paste 0 1
cut 5 6
paste 0 0
cut 6 9
exit
[/input]
[output]
taste and ping
[/output]
[/test]
[test]
[input]
edge cases paste and cut
cut 0 0
paste 0 0
paste 5 10
cut 16 19
paste 5 5
paste 0 0
exit
[/input]
[output]
cutedge cut paste and
[/output]
[/test]
[test]
[input]
mixed testing all commands
cut 0 6
uppercase 8 11
uppercase 4 6
cut 12 13
paste 8 8
cut 8 12
paste 8 8
uppercase 8 9
paste 13 20
cut 13 14
cut 4 7
paste 9 9
exit
[/input]
[output]
test CALLINg ALL
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Calculator
[code-task title="Calculator" taskId="oop-advanced-java-polymorphism-Calculator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

**Aici aveți un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Polymorphism-Calculator.zip) **pentru aeastă cerință.**

Acesta este scheletul de cod al unui program de calculatoare (cum ar fi aplicația **Calculator** din Windows sau calculatorul de pe smartphone etc.).

Programul acceptă numerele și comenzile de operare de pe consolă și le execută cu numerele.

Numerele sunt numere întregi pozitive, în timp ce operațiile pot fi simboluri unice (de exemplu, simbolul asterisc `*` înseamnă multiplicare) sau șiruri de caractere (de exemplu, operația "**end**" oprește programul și imprimă rezultatul).

Operațiile sunt executate imediat după ce primesc toți operanzii necesari.

**De exemplu**, expresia **3 * 4 / 2** va accepta **3**, apoi semnul de înmulțire și apoi, va aștepta un număr pentru a se înmulți - când primește **4** va calcula că **3 * 4 = 12**, apoi este introdus semnul divizării și va aștepta un număr pentru a împărți rezultatul la - când primește **2**, va împărți **12** la **2**.

Orice număr introdus suprascrie rezultatul curent al calculatorului.

De exemplu, dacă se primește expresia **3 1 * 4 16 / 2**, primim mai întâi **3**, îl suprascriem cu **1**, îl înmulțim cu **4** și obținem **4** ca rezultat, apoi suprascriem acest lucru cu **16** și îl împărțim la **2** - rezultatul final va fi **8**.

Scheletul care vi se oferă conține următoarele fișiere:
- **Main.java** - conține metoda `main(String[] args)`, citește datele de intrare și afișează datele de ieșire pe consolă
- **Operation.java** - conține o clasă de bază pentru orice operație efectuată de calculator
- **MultiplicationOperation.java** - definește o clasă care moștenește clasa de bază **Operațiunea** și implementează operația de multiplicare (*)
- **CalculationEngine.java** - definește logica centrală a calculatorului de manipulare a numărului și a operațiilor de intrare
- **InputInterpreter.java** - definește o clasă care poate interpreta un șir fie într-un număr, fie într-o operație și poate invoca motorul în consecință

Fișierele care vi se oferă acceptă toată logica necesară pentru a implementa operația de **multiplicare**, precum și intrarea și ieșirea consolei (rețineți că elementele de intrare nu trebuie să fie pe aceeași linie - puteți avea **o operație** sau număr pe linie și codul va funcționa în continuare) lipsește logica pentru a crea un **InputInterpreter**, care ar trebui definit în fișierul **Extensions.java** lipsă.

Sarcina dvs. este să studiați codul furnizat și să adăugați următoarele operații:
- **/** - **diviziune**, împarte valoarea curentă a calculatorului la următorul număr pe care îl primește calculatorul și împinge rezultatul la calculator (adică același lucru cu multiplicarea, dar împarte)
- **ms** - salvează rezultatul curent al calculatorului în "**memorie**". Rezultatul acestei operații este rezultatul curent al calculatorului. De exemplu, expresia **3 * 4 ms * 5** și expresia **3 * 4 * 5** sunt echivalente în rezultatul lor
- **mr** - **reamintire de memorie**, elimină ultimul element din memorie și îl trimite la calculator
    - rețineți că această operațiune poate fi utilizată în combinație cu alte operații, de exemplu, expresia **3 ms * 4 ms * 5 * mr * mr** va salva **3** în memorie, efectuați un calcul producând **12** ca rezultat, salvați-l în memorie, calculați următoarea expresie: **60** este primit, înmulțiți cu **12** (stocat în memorie), **720** este primit ca produs și stocat, apoi înmulțiți cu **3**, rezultatul final va fi: **2160**
    - poate fi folosit și fără operații - **3 ms 4 mr** este același cu **3 4 3**
## Intrare
Programul definit în **Main.java** citește următoarea intrare:

Șiruri, reprezentând numere sau operații, separate prin spații (sau linii noi sau orice spațiu "void"), care se termină cu șirul "**end**".

## Ieșire
Programul definit în **Main.java** produce următoarea ieșire:

Rezultatul calculat al tuturor numerelor și operațiilor din intrare.

## Restricții
Numerele din intrare vor fi întotdeauna numere întregi pozitive și nicio operațiune nu va duce la un număr mai mare de 1 miliard.

Întotdeauna va exista cel puțin o oprațiune **ms** înainte de orice operațiune **mr**.

Nu vor exista mai multe operațiuni **mr** decât operațiile ms precedente.

Nu va exista nicio operație ms în urma unei operații care așteaptă o valoare (de exemplu, **3 * ms 4** nu este o dată de intrare validă, dar **3 ms * 4** este). Nu va exista niciodată o serie nevalidă de operații (de ex. **3 / / 4**, sau **3 * * 4** etc.)

Primele **40%** din teste NU vor conține operațiuni **ms** sau **mr** .

Durata totală de rulare a programului dvs. nu trebuie să depășească **0,1 secunde**.

Memoria totală utilizată nu trebuie să depășească **16 MB**.

# Exemple
## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| 1 * 2 * 3 ms * 4 * mr / 2 end | 72 |

## Exemplul 2
| **Intrare** | **Ieșire** |
| --- | --- |
| 12 / 3 ms / 2 ms * 5 mr * mr end | 8 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
1 \* 2 \* 3 ms \* 4 \* mr / 2 end
[/input]
[output]
72
[/output]
[/test]
[test open]
[input]
12 / 3 ms / 2 ms \* 5 mr \* mr end
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
105 / 5 / 3 end
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
10 \* 20 / 20 \* 170 \* 30 \* 40 \* 50 \* 2 / 80 / 170 end
[/input]
[output]
15000
[/output]
[/test]
[test]
[input]
10 ms \* 20 / 20 ms ms \* 170 \* 30 ms \* 40 \* 50 \* 3 ms ms / 80 / 170 end
[/input]
[output]
22500
[/output]
[/test]
[test]
[input]
15 ms \* 4 17 \* 5 \* mr end
[/input]
[output]
1275
[/output]
[/test]
[test]
[input]
15 ms ms ms \* 4 mr \* mr / 5 ms / 5 \* 42 \* mr ms / 2 / 5 / 3 \* mr / mr end
[/input]
[output]
642978
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
