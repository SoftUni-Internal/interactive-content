# Temă

[slide hideTitle]
# Problem: Count Chars in a String
[code-task title="Count Chars in a String" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Count-Char-In-A-String" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care să **counts all characters** dintr-un string, cu excepția spațiului (' ').

**Print** toate variantele in următorul **format**:

"\{**char**\} \-\> \{**occurrences**\}"

### Exemplu
| **Input** | **Output** |
| --- | --- |
| text | t \-\> 2 | 
| | e \-\> 1 |
| | x \-\> 1 |

### Exemplu
| **Input** | **Output** |
| --- | --- |
| text text text | t \-\> 6 | 
| | e \-\> 3 |
| | x \-\> 3 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
text
[/input]
[output]
t -> 2
e -> 1
x -> 1
[/output]
[/test]
[test open]
[input]
text text text
[/input]
[output]
t -> 6
e -> 3
x -> 3
[/output]
[/test]
[test]
[input]
The waves were crashing on the shore; it was a lovely sight.
[/input]
[output]
T -> 1
h -> 5
e -> 7
w -> 3
a -> 4
v -> 2
s -> 5
r -> 3
c -> 1
i -> 3
n -> 2
g -> 2
o -> 3
t -> 3
; -> 1
l -> 2
y -> 1
. -> 1
[/output]
[/test]
[test]
[input]
There were white out conditions in the town; subsequently, the roads were impassable.
[/input]
[output]
T -> 1
h -> 4
e -> 12
r -> 4
w -> 4
i -> 5
t -> 7
o -> 5
u -> 3
c -> 1
n -> 5
d -> 2
s -> 6
; -> 1
b -> 2
q -> 1
l -> 2
y -> 1
, -> 1
a -> 3
m -> 1
p -> 1
. -> 1
[/output]
[/test]
[test]
[input]
I hear that Nancy is very pretty.
[/input]
[output]
I -> 1
h -> 2
e -> 3
a -> 3
r -> 3
t -> 4
N -> 1
n -> 1
c -> 1
y -> 3
i -> 1
s -> 1
v -> 1
p -> 1
. -> 1
[/output]
[/test]
[test]
[input]
Yeah, I think it's a good environment for learning English.
[/input]
[output]
Y -> 1
e -> 4
a -> 3
h -> 3
, -> 1
I -> 1
t -> 3
i -> 5
n -> 7
k -> 1
' -> 1
s -> 2
g -> 3
o -> 4
d -> 1
v -> 1
r -> 3
m -> 1
f -> 1
l -> 2
E -> 1
. -> 1
[/output]
[/test]
[test]
[input]
Writing a list of random sentences is harder than I initially thought it would be.
[/input]
[output]
W -> 1
r -> 4
i -> 8
t -> 8
n -> 6
g -> 2
a -> 5
l -> 4
s -> 4
o -> 4
f -> 1
d -> 3
m -> 1
e -> 5
c -> 1
h -> 4
I -> 1
y -> 1
u -> 2
w -> 1
b -> 1
. -> 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: A Miner Task
[code-task title="A Miner Task" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-A-Miner-task" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Aveți o secvență dată **sequence of strings**, fiecare pe o linie nouă, până la comanda "**stop**".

Fiecare **odd line** din consolă reprezintă o **resource** (e.g. Aur, Argint, Cupru samd).

Fiecare **quantity** trebuie să fie pară. 

Sarcina voastră este să colectați resursele și să le scrieți pe o linie nouă. 

**Print** resursele și cantitățile lor în **format**: 

"\{**resource**\} -> \{**quantity**\}"

### Exemplu
| **Input** | **Output** |
| --- | --- |
| Gold | Gold \-\> 155 | 
| 155 | Silver \-\> 10 |
| Silver | Gold \-\> 17 |
| 10 | | 
| Copper | |
| 17 | |
| stop | |

### Exemplu
| **Input** | **Output** |
| --- | --- |
| gold | Gold \-\> 170 | 
| 155 | Silver \-\> 10 |
| silver | Gold \-\> 17 |
| 10 | | 
| copper | |
| 17 | |
| gold | |
| 15 | |
| stop | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Gold
155
Silver
10
Copper
17
stop
[/input]
[output]
Gold -> 155
Silver -> 10
Copper -> 17
[/output]
[/test]
[test open]
[input]
gold
155
silver
10
copper
17
gold
15
stop
[/input]
[output]
gold -> 170
silver -> 10
copper -> 17
[/output]
[/test]
[test]
[input]
Silver
1234
Gold
155
Copper
113417
Silver
10351
Copper
17134
Gold
155325
stop
[/input]
[output]
Silver -> 11585
Gold -> 155480
Copper -> 130551
[/output]
[/test]
[test]
[input]
Silver
1234
gold
155
Copper
113417
Silver
10351
copper
17134
Gold
155325
stop
[/input]
[output]
Silver -> 11585
gold -> 155
Copper -> 113417
copper -> 17134
Gold -> 155325
[/output]
[/test]
[test]
[input]
Silver
1268
Gold
16846
Platinium
1683
Cork
1843
Cork
9864
Platinium
14558
stop
[/input]
[output]
Silver -> 1268
Gold -> 16846
Platinium -> 16241
Cork -> 11707
[/output]
[/test]
[test]
[input]
Silver
126358
Gold
123123
Wood
1231231
Cork
18143
Wood
986324
Platinium
14558
stop
[/input]
[output]
Silver -> 126358
Gold -> 123123
Wood -> 2217555
Cork -> 18143
Platinium -> 14558
[/output]
[/test]
[test]
[input]
Wood
73675
Gold
5438
Cork
12331
Cork
1432
Wood
67436
Platinium
36756
stop
[/input]
[output]
Wood -> 141111
Gold -> 5438
Cork -> 13763
Platinium -> 36756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]






[slide hideTitle]
# Problem: Legendary Farming
[code-task title="Legendary Farming" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Legendary-Farming" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Sarcina voastră este să obțineți un item legendar care înseamnă să colectați materiale.

Variantele posibile **possible items** sunt:

- **Shadowmourne** - necesită 250 **Shards**

- **Valanyr** - necesită 250 **Fragments**

- **Dragonwrath** - necesită 250 **Motes**

**Shards, Fragments and Motes** sunt materiale **key materials**, orice alt material este gunoi.

Țineți socoteala materialelor key,  **first** care **reaches the 250**  câștigă cursa. 

În acest punct, **print** acele **corresponding legendary item** obținute. 

Apoi, **print** celelalte **remaining shards, fragments, motes**,ordine **ordered by quantity in descending**, apoi in ordine **by name in ascending**  **each** pe o **new line**. 

În final, **print** dacă ați colectat **junk items**, in ordine **alphabetical**.


### Input
Fiecare linie de input este in format "\{**quantity**\} \{**material**\} \{**quantity**\} \{**material**\} … \{**quantity**\} \{**material**\}"

### Output
- Pe **first line**, imprimați itemii obținuți în format "\{**Legendary item**\} **obtained!**"

- Pe următoarele **next three lines**, imprimați **remaining key materials** în ordine **descending**, după **quantity**

    - Dacă **two key materials** au **same quantity**, imprimați-i in ordine **alphabetical**

- Pe liniile **final several lines**, imprimați **junk items in alphabetical** ordine

    - Toate materialele sunt imprimate in format: "\{**material**\}: \{**quantity**\}"

    - Toate output trebuie să fie **lowercase**, cu excepția  **first** litere ale legendary


### Exemple
| **Input** | **Output** |
| --- | --- |
| 3 Motes 5 stones 5 Shards | Valanyr obtained! | 
| 6 leathers 255 fragments 7 Shards | fragments: 5 |
| | shards: 5 |
| | motes: 3 | 
| | leathers: 6 |
| | stones: 5 |

### Exemple
| **Input** | **Output** |
| --- | --- |
| 123 silver 6 shards 8 shards 5 motes | Dragonwrath obtained! | 
| 9 fangs 75 motes 103 MOTES 8 Shards | shards: 22 |
| 86 Motes 7 stones 19 silver | motes: 19 |
| | fragments: 0 | 
| | fangs: 9 |
| | silver: 123 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 Motes 5 stones 5 Shards
6 leathers 255 fragments 7 Shards
[/input]
[output]
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
[/output]
[/test]
[test open]
[input]
123 silver 6 shards 8 shards 5 motes
9 fangs 75 motes 103 MOTES 8 Shards
86 Motes 7 stones 19 silver
[/input]
[output]
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123
[/output]
[/test]
[test]
[input]
5 shards 5 motes 255 fragments
[/input]
[output]
Valanyr obtained!
fragments: 5
motes: 5
shards: 5
[/output]
[/test]
[test]
[input]
16 leathers 22 leather 82 leathers 17 LEATHER 88 LEATHERS
28 shards 78 motes 66 motes 215 shards 7 shards 3 fragments
[/input]
[output]
Shadowmourne obtained!
motes: 144
fragments: 0
shards: 0
leather: 39
leathers: 186
[/output]
[/test]
[test]
[input]
8 iron
3 gold
7 silver 15 shards
15 onions 236 shards
8 freshwater
9 souls
[/input]
[output]
Shadowmourne obtained!
shards: 1
fragments: 0
motes: 0
gold: 3
iron: 8
onions: 15
silver: 7
[/output]
[/test]
[test]
[input]
249 shards 249 fragments 249 motes 8 linen 5 silver 123 silk 22 embersilk
13 alpha-gems 0 shards 0 fragments 1 motes
[/input]
[output]
Dragonwrath obtained!
fragments: 249
shards: 249
motes: 0
alpha-gems: 13
embersilk: 22
linen: 8
silk: 123
silver: 5
[/output]
[/test]
[test]
[input]
98 spirit-shards 17 SPIRiT-SHARDS 123 SPIRIT-SHARDS 12 sPI_ritShards 92 gems 1 gem
6 fragments 9 Fragments 129 Fragments 1 Shards 0 Shards 123 Shards 9 Motes
123 Motes 123 Fragments 1098 MotES
[/input]
[output]
Valanyr obtained!
motes: 132
shards: 124
fragments: 17
gem: 1
gems: 92
spi_ritshards: 12
spirit-shards: 238
[/output]
[/test]
[test]
[input]
0 shards
1 shards
2 shards
3 shards
4 shards
0 SHARDS 126 SHARDS
122 SHARDS
1 motes
1 fragments
[/input]
[output]
Shadowmourne obtained!
shards: 8
fragments: 0
motes: 0
[/output]
[/test]
[test]
[input]
77 heavy-leather 123 light-leather
789 fragments 8889 fragments 88123 motes
[/input]
[output]
Valanyr obtained!
fragments: 539
motes: 0
shards: 0
heavy-leather: 77
light-leather: 123
[/output]
[/test]
[test]
[input]
988 HEAVY-STONES
1230812 HEAVY-STONes
120398 Fragments
[/input]
[output]
Valanyr obtained!
fragments: 120148
motes: 0
shards: 0
heavy-stones: 1231800
[/output]
[/test]
[test]
[input]
123 leathers
12 leather
12 leathe
12 motes
12 shards
262 fragments
[/input]
[output]
Valanyr obtained!
fragments: 12
motes: 12
shards: 12
leathe: 12
leather: 12
leathers: 123
[/output]
[/test]
[test]
[input]
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
[/input]
[output]
Shadowmourne obtained!
fragments: 240
motes: 240
shards: 5
linen: 1420
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Orders
[code-task title="Orders" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Orders" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care conține informații despre **products and their prices**.

Fiecare produs are **a name, a price and its quantity**.

Dacă **product doesn't exist** totuși, **add it with its starting quantity**.

Dacă primiți **product, which already exists** **increase its quantity** cu cantitatea din input, iar dacă **price is different, replace the price as well**.

Veți primi **products' names, prices and quantities on new lines**. 

Până primiți **command** "**buy**", continuați să adăugați itemi.

Când ați primit comanda "**buy**", **print** **items** cu numele lor **names** și **total price** ale tuturor produselor cu acest nume.

### Input

- Până primiți "**buy**", produsele apar în **format**: "\{**name**\} \{**price**\} \{**quantity**\}"

- Datele despre produs sunt întotdeauna delimitate de un singur spațiu

### Output
- Imprimați informația despre fiecare produs, în **format**:

    - "\{**productName**\} \-\> \{**totalPrice**\}"

- Formatați prețul total la  **second digit** după punctul de zecimale

### Exemplu
| **Input** | **Output** |
| --- | --- |
| Beer 2.20 100 | Beer \-\> 220.00 | 
| IceTea 1.50 50 | IceTea \-\> 75.00 |
| Juice 3.30 80 | Juice \-\> 264.00 |
| Water 1.00 500 | Water \-\> 500.00 | 
| buy | | 

### Exemplu
| **Input** | **Output** |
| --- | --- |
| CaesarSalad 10.20 25 | CaesarSalad \-\> 255.00 | 
| SuperEnergy 0.80 400 | SuperEnergy \-\> 320.00 |
| Beer 1.35 350 | Beer \-\> 472.50 |
| IceCream 1.50 25 | IceCream \-\> 37.50 | 
| buy | | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Beer 2.20 100
IceTea 1.50 50
Juice 3.30 80
Water 1.00 500
buy
[/input]
[output]
Beer -> 220.00
IceTea -> 75.00
Juice -> 264.00
Water -> 500.00
[/output]
[/test]
[test open]
[input]
CaesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
CaesarSalad -> 255.00
SuperEnergy -> 320.00
Beer -> 472.50
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
buy
[/input]
[output]
Beer -> 660.00
Water -> 250.00
IceTea -> 110.00
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
CesarSalad -> 255.00
SuperEnergy -> 320.00
Beer -> 472.50
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
CesarSalad 9.70 10
Beer 1.35 350
Water 1.00 20
IceCream 1.50 25
Water 0.95 40
buy
[/input]
[output]
CesarSalad -> 339.50
SuperEnergy -> 320.00
Beer -> 472.50
Water -> 57.00
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
IceTea 2.00 50
IceCream 2.05 45
buy
[/input]
[output]
Beer -> 220.00
IceTea -> 200.00
NukaCola -> 264.00
Water -> 500.00
IceCream -> 92.25
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
CesarSalad 9.70 10
Beer 1.35 350
Water 1.00 20
IceCream 1.50 25
Water 0.95 40
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
IceTea 2.00 50
IceCream 2.05 45
buy
[/input]
[output]
CesarSalad -> 339.50
SuperEnergy -> 320.00
Beer -> 990.00
Water -> 560.00
IceCream -> 143.50
IceTea -> 200.00
NukaCola -> 264.00
[/output]
[/test]
[test]
[input]
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
Beer -> 1215.00
Water -> 250.00
IceTea -> 110.00
CesarSalad -> 255.00
SuperEnergy -> 320.00
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
Beer -> 1350.00
IceTea -> 135.00
NukaCola -> 264.00
Water -> 875.00
CesarSalad -> 255.00
SuperEnergy -> 320.00
IceCream -> 37.50
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Parking
[code-task title="Parking" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Parking" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program, care **validates parking** pentru un serviciu online.

Utilizatorii pot **register to park and unregister to leave**.

Programul primește **2 commands**:
- "**register** \{**username**\} \{**licensePlateNumber**\}":
    - sistemul **only supports one car per user** pe moment, deci dacă un utilizator încearcă să înregistreze o altă plăcuță de înmatriculare, folosind același username, sistemul va **print**: "**ERROR: already registered with plate number** \{**licensePlateNumber**\}"
    - dacă utilizatorul menționat trece **successfully**, atunci **plate can be registered**, deci sistemul va trebui să **print**: "\{**username**\} **registered** \{**licensePlateNumber**\} **successfully**"
- "**unregister** \{**username**\}":
    - dacă utilizatorul este **not present in the database**, sistemul va **print**: "**ERROR: user** \{**username**\} **not found**"
    - dacă utilizatorul trece **successfully**, sistemul va trebui să **print**: "\{**username**\} **unregistered successfully**"

După ce ați executat toate comenzile, **print** toți **currently registered users and their license plates** in format:
- "\{**username**\} \=\> \{**licensePlateNumber**\}"

### Input
- Prima linie: n – număr de comenzi – integer
- Următoarele n linii: comenzi într-unul dintre cele două formate posibile:
    - Register: "**register** \{**username**\} \{**licensePlateNumber**\}"
    - Unregister: "**unregister** \{**username**\}"

### Exemple
| **Input** | **Output** |
| --- | --- |
| 5 | John registered CS1234JS successfully | 
| register John CS1234JS | George registered JAVA123S successfully |
| register George JAVA123S | Andy registered AB4142CD successfully |
| register Andy AB4142CD | Jesica registered VR1223EE successfully | 
| register Jesica VR1223EE | Andy unregistered successfully | 
| unregister Andy | John => CS1234JS | 
| | George => JAVA123S | 
| | Jesica => VR1223EE | 

### Exemple
| **Input** | **Output** |
| --- | --- |
| 4 | Jony registered AA4132BB successfully | 
| register Jony AA4132BB | ERROR: already registered with plate number AA4132BB |
| register Jony AA4132BB | Linda registered AA9999BB successfully |
| register Linda AA9999BB | Jony unregistered successfully | 
| unregister Jony | Linda => AA9999BB | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister Andy
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
Andy unregistered successfully
John => CS1234JS
George => JAVA123S
Jesica => VR1223EE
[/output]
[/test]
[test open]
[input]
4
register Jony AA4132BB
register Jony AA4132BB
register Linda AA9999BB
unregister Jony
[/input]
[output]
Jony registered AA4132BB successfully
ERROR: already registered with plate number AA4132BB
Linda registered AA9999BB successfully
Jony unregistered successfully
Linda => AA9999BB
[/output]
[/test]
[test]
[input]
6
register Jacob MM1111XX
register Anthony AB1111XX
unregister Jacob
register Joshua DD1111XX
unregister Lily
register Samantha AA9999BB
[/input]
[output]
Jacob registered MM1111XX successfully
Anthony registered AB1111XX successfully
Jacob unregistered successfully
Joshua registered DD1111XX successfully
ERROR: user Lily not found
Samantha registered AA9999BB successfully
Anthony => AB1111XX
Joshua => DD1111XX
Samantha => AA9999BB
[/output]
[/test]
[test]
[input]
9
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister Andy
register Jony AA4132BB
register Jony AA4132BB
register Linda AA9999BB
unregister Jony
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
Andy unregistered successfully
Jony registered AA4132BB successfully
ERROR: already registered with plate number AA4132BB
Linda registered AA9999BB successfully
Jony unregistered successfully
John => CS1234JS
George => JAVA123S
Jesica => VR1223EE
Linda => AA9999BB
[/output]
[/test]
[test]
[input]
3
register Misho CS1234JS
register George JAVA123S
register Jesica VR1223EE
[/input]
[output]
Misho registered CS1234JS successfully
George registered JAVA123S successfully
Jesica registered VR1223EE successfully
Misho => CS1234JS
George => JAVA123S
Jesica => VR1223EE
[/output]
[/test]
[test]
[input]
6
register John CS1234JS
register George JAVA123S
register Andy AB4142CD
register Jesica VR1223EE
unregister George
unregister Andy
[/input]
[output]
John registered CS1234JS successfully
George registered JAVA123S successfully
Andy registered AB4142CD successfully
Jesica registered VR1223EE successfully
George unregistered successfully
Andy unregistered successfully
John => CS1234JS
Jesica => VR1223EE
[/output]
[/test]
[test]
[input]
7
register Mitko CS9999JS
register Dinko JAVA123S
register Misho AB5652CD
register Simo VR4627EE
unregister George
unregister Andy
unregister Simo
[/input]
[output]
Mitko registered CS9999JS successfully
Dinko registered JAVA123S successfully
Misho registered AB5652CD successfully
Simo registered VR4627EE successfully
ERROR: user George not found
ERROR: user Andy not found
Simo unregistered successfully
Mitko => CS9999JS
Dinko => JAVA123S
Misho => AB5652CD
[/output]
[/test]
[test]
[input]
11
register Mitko CS9999JS
unregister Mike
register Dinko JAVA123S
register Misho AB5652CD
unregister Misho
register Simo VR4627EE
unregister George
unregister Andy
unregister Simo
register Simo2 AD1538BC
register Acho AD1538BC
[/input]
[output]
Mitko registered CS9999JS successfully
ERROR: user Mike not found
Dinko registered JAVA123S successfully
Misho registered AB5652CD successfully
Misho unregistered successfully
Simo registered VR4627EE successfully
ERROR: user George not found
ERROR: user Andy not found
Simo unregistered successfully
Simo2 registered AD1538BC successfully
Acho registered AD1538BC successfully
Mitko => CS9999JS
Dinko => JAVA123S
Simo2 => AD1538BC
Acho => AD1538BC
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Courses
[code-task title="Courses" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Courses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care cuprinde informații despre **courses**.

Fiecare curs are un **name** și **registered students**.

Veți primi **course name and student name**, **until** până veți primi **command** "**end**". 

**Check** dacă astfel de **course already exists**, și dacă **not**, **add the course**. 

**Register** un **user** la **course**. 

Atunci când primiți **command** "**end**", **print** cursurile cu **names** lor și **total registered users**, indicați de numărul userilor **registered**  in ordine descendentă. 

Pentru fiecare **contest print registered users** **ordered by name in ascending** ordine.

### Input
- Până primiți "**end**", **input come in the format**:

 "\{**courseName**\} : \{**studentName**\}".
- Datele despre produs sunt **always delimited** de " : ".

### Output
- Imprimați informația despre fiecare **course**, după **format**: 

"\{**courseName**\}: \{**registeredStudents**\}"
- Imprimați informația despre fiecare **student**, după **format**:

"-- \{**studentName**\}"

### Exemple
| **Input** | **Output** |
| --- | --- |
| Programming Fundamentals : John Smith | Programming Fundamentals: 2 | 
| Programming Fundamentals : Linda Johnson | -- John Smith |
| JS Core : Will Wilson | -- Linda Johnson |
| Java Advanced : Harrison White | JS Core: 1 | 
| end | -- Will Wilson |
| | Java Advanced: 1 |
| | -- Harrison White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Java Advanced : Harrison White
end
[/input]
[output]
Programming Fundamentals: 2
-- John Smith
-- Linda Johnson
JS Core: 1
-- Will Wilson
Java Advanced: 1
-- Harrison White
[/output]
[/test]
[test]
[input]
Algorithms : Jay Moore
Programming Basics : Martin Taylor
Python Fundamentals : John Anderson
Python Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Python Fundamentals: 3
-- Andrew Robinson
-- Clark Lewis
-- John Anderson
Algorithms: 2
-- Bob Jackson
-- Jay Moore
Programming Basics: 1
-- Martin Taylor
[/output]
[/test]
[test]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Java Advanced : Harrison White
Algorithms : Jay Moore
Programming Basics : Martin Taylor
Python Fundamentals : John Anderson
Python Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Python Fundamentals: 3
-- Andrew Robinson
-- Clark Lewis
-- John Anderson
Programming Fundamentals: 2
-- John Smith
-- Linda Johnson
Algorithms: 2
-- Bob Jackson
-- Jay Moore
JS Core: 1
-- Will Wilson
Java Advanced: 1
-- Harrison White
Programming Basics: 1
-- Martin Taylor
[/output]
[/test]
[test]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
Programming Fundamentals : Martin Taylor
Python Fundamentals : John Anderson
Programming Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Programming Fundamentals: 4
-- Andrew Robinson
-- John Smith
-- Linda Johnson
-- Martin Taylor
Python Fundamentals: 3
-- Clark Lewis
-- Jay Moore
-- John Anderson
Algorithms: 2
-- Bob Jackson
-- Harrison White
JS Core: 1
-- Will Wilson
[/output]
[/test]
[test]
[input]
JS Core : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
Programming Fundamentals : Martin Taylor
JS Core : John Anderson
Algorithms : Andrew Robinson
Programming Fundamentals : Bob Jackson
Algorithms : Clark Lewis
end
[/input]
[output]
JS Core: 3
-- John Anderson
-- John Smith
-- Will Wilson
Programming Fundamentals: 3
-- Bob Jackson
-- Linda Johnson
-- Martin Taylor
Algorithms: 3
-- Andrew Robinson
-- Clark Lewis
-- Harrison White
Python Fundamentals: 1
-- Jay Moore
[/output]
[/test]
[test]
[input]
OOP : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
OOP : Martin Taylor
Python Fundamentals : John Anderson
C# Web : Andrew Robinson
Algorithms : Bob Jackson
C# Web : Clark Lewis
end
[/input]
[output]
OOP: 2
-- John Smith
-- Martin Taylor
Algorithms: 2
-- Bob Jackson
-- Harrison White
Python Fundamentals: 2
-- Jay Moore
-- John Anderson
C# Web: 2
-- Andrew Robinson
-- Clark Lewis
Programming Fundamentals: 1
-- Linda Johnson
JS Core: 1
-- Will Wilson
[/output]
[/test]
[test]
[input]
PHP Web : Linda Johnson
JS Core : Will Wilson
Algorithms : Clark Lewis
JS Core : John Anderson
OOP : Harrison White
OOP : Ivan
C# Web : Jay Moore
Algorithms : Andrew Robinson
OOP : John Smith
PHP Web : Bob Jackson
Programming Fundamentals : Martin Taylor
end
[/input]
[output]
OOP: 3
-- Harrison White
-- Ivan
-- John Smith
PHP Web: 2
-- Bob Jackson
-- Linda Johnson
JS Core: 2
-- John Anderson
-- Will Wilson
Algorithms: 2
-- Andrew Robinson
-- Clark Lewis
C# Web: 1
-- Jay Moore
Programming Fundamentals: 1
-- Martin Taylor
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Student Academy 
[code-task title="Student Academy" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Student-Academy" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care să cuprindă informații despre studenți și notele lor.

Veți primi un **n pair of rows**. 

Mai întâi veți primi **student's name**, după aceea, veți primi pentru fiecare **grade**. 

Verificați dacă **student already exists**, și dacă **not**, **add**. 

Țineți minte toate **all grades for each student**.

Când ați terminat de citit datele, țineți doar studenții cu nota medie **higher or equal to 4.50**. 

Ordonați studenții aleși, după nota medie, în ordine **descending**.

**Print the students and their average grade** in format:
- "\{**name**\} -> \{**averageGrade**\}"

**Format** nota medie până la **second decimal**.

### Exemple
| **Input** | **Output** |
| --- | --- |
| 5 | John -> 5.00 | 
| John | George -> 5.00 |
| 5.5 | Alice -> 4.50 |
| John | | 
| 4.5 | |
| Alice | |
| 6 | | 
| Alice | |
| 3 | |
| George | | 
| 5 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
John
5.5
John
4.5
Alice
6
Alice
3
George
5
[/input]
[output]
John -> 5.00
George -> 5.00
Alice -> 4.50
[/output]
[/test]
[test]
[input]
5
Amanda
3.5
Amanda
4
Rob
5.5
Christian
5
Robert
6
[/input]
[output]
Robert -> 6.00
Rob -> 5.50
Christian -> 5.00
[/output]
[/test]
[test]
[input]
5
Gosho
6
Ivan
5.89
Stoyan
5.74
Mitko
5.10
Vasil
4.50
[/input]
[output]
Gosho -> 6.00
Ivan -> 5.89
Stoyan -> 5.74
Mitko -> 5.10
Vasil -> 4.50
[/output]
[/test]
[test]
[input]
3
Elly
5.84
Doni
5.50
Ketty
4.89
[/input]
[output]
Elly -> 5.84
Doni -> 5.50
Ketty -> 4.89
[/output]
[/test]
[test]
[input]
7
Elly
5.00
Doni
5.40
Ketty
5.20
Elly
6.00
Ketty
5.00
Sissy
4.98
Doni
5.50
[/input]
[output]
Elly -> 5.50
Doni -> 5.45
Ketty -> 5.10
Sissy -> 4.98
[/output]
[/test]
[test]
[input]
7
Elly
5.00
Doni
5.20
Ketty
5.20
Sissy
4.50
Doni
5.50
Ketty
4.90
Elly
6.00
[/input]
[output]
Elly -> 5.50
Doni -> 5.35
Ketty -> 5.05
Sissy -> 4.50
[/output]
[/test]
[test]
[input]
9
Mitko
3.80
Ivan
4.20
Siso
4.80
Misho
5.23
Ivan
5.46
Mitko
5.20
Dido
4.85
Damyan
4.99
Misho
5.89
[/input]
[output]
Misho -> 5.56
Damyan -> 4.99
Dido -> 4.85
Ivan -> 4.83
Siso -> 4.80
Mitko -> 4.50
[/output]
[/test]
[test]
[input]
9
Kelly
3.80
Ivan
5.82
Lilly
4.20
John
5.23
Kelly
5.46
Peter
5.20
Nick
4.77
Lilly
4.99
Simon
5.67
[/input]
[output]
Ivan -> 5.82
Simon -> 5.67
John -> 5.23
Peter -> 5.20
Nick -> 4.77
Kelly -> 4.63
Lilly -> 4.60
[/output]
[/test]
[test]
[input]
9
Kelly
2.89
Ivan
4.26
Lilly
4.20
John
6.00
Kelly
5.46
Peter
5.64
Nick
4.88
Lilly
5.24
Simon
4.22
[/input]
[output]
John -> 6.00
Peter -> 5.64
Nick -> 4.88
Lilly -> 4.72
[/output]
[/test]
[test]
[input]
5
Slavi
5.50
Mimmy
3.94
Mitko
4.26
Mimmy
3.24
Mitko
5.08
[/input]
[output]
Slavi -> 5.50
Mitko -> 4.67
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Company Users
[code-task title="Company Users" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Company-Users" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Scrieți un program care conține informații despre companii și angajații lor. 

Veți primi **company name** și **employee's id**,până primiți **command** "**End**". 

**Add** fiecare **employee** de la fiecare **given company**.

Rețineți că **company cannot have two employees with the same id**.

Când ați terminat de citit date, **order** companiile după nume, în ordine ascendentă.

Imprimați numele companiei și id-ul fiecărui angajat, în următorul format:

"\{**companyName**\}

-- \{**id1**\}

-- \{**id2**\}

-- \{**idN**\}"

### Input
Până la primirea mesajului "**End**", input-ul vine **in the format**:

"\{**companyName**\} -> \{**employeeId**\}"


### Exemple
| **Input** | **Output** |
| --- | --- |
| SoftUni \-\> AA12345 | HP | 
| SoftUni \-\> BB12345 | -- BB12345 |
| Microsoft \-\> CC12345 | Microsoft |
| HP \-\> BB12345 | -- CC12345 | 
| End | SoftUni |
| | -- AA12345 |
| | -- BB12345 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SoftUni -> AA12345
SoftUni -> BB12345
Microsoft -> CC12345
HP -> BB12345
End
[/input]
[output]
HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345
[/output]
[/test]
[test]
[input]
SoftUni -> AA12345
SoftUni -> CC12344
Lenovo -> XX23456
SoftUni -> AA12345
Movement -> DD11111
End
[/input]
[output]
Lenovo
-- XX23456
Movement
-- DD11111
SoftUni
-- AA12345
-- CC12344
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> DL66709
Sony -> YR46697
End
[/input]
[output]
Apple
-- KA78902
BlackBerry
-- DL66709
Sony
-- YR46697
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> OA39837
Ebay -> VY45587
Playboy -> LJ17678
Sony -> YR46697
End
[/input]
[output]
Apple
-- KA78902
BlackBerry
-- OA39837
Ebay
-- VY45587
Playboy
-- LJ17678
Sony
-- YR46697
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> OA39837
Ebay -> VY45587
Apple -> AF97028
Playboy -> XX95869
Apple -> PF65183
Playboy -> LJ17678
Sony -> YR46697
Sony -> KT68064
End
[/input]
[output]
Apple
-- KA78902
-- AF97028
-- PF65183
BlackBerry
-- OA39837
Ebay
-- VY45587
Playboy
-- XX95869
-- LJ17678
Sony
-- YR46697
-- KT68064
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Apple -> UQ49150
Pepsi -> VU98184
Apple -> BN60893
Pepsi -> DK12387
Subway -> QM12984
Subway -> LG26063
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
-- BN60893
BestBuy
-- IM52664
Ebay
-- AC22875
Pepsi
-- VU98184
-- DK12387
Subway
-- QM12984
-- LG26063
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Pepsi -> DK12387
Apple -> UQ49150
Pepsi -> VU98184
Apple -> UQ49150
Pepsi -> DK12387
Subway -> QM12984
Subway -> QM12984
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
BestBuy
-- IM52664
Ebay
-- AC22875
Pepsi
-- DK12387
-- VU98184
Subway
-- QM12984
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Pepsi -> DK12387
Apple -> UQ49150
Subway -> UQ49150
Pepsi -> VU98184
BestBuy -> VU98184	
BestBuy -> IM52664	
Apple -> UQ49150
Pepsi -> DK12387
Subway -> QM12984
Subway -> QM12984
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
BestBuy
-- IM52664
-- VU98184
Ebay
-- AC22875
Pepsi
-- DK12387
-- VU98184
Subway
-- UQ49150
-- QM12984
[/output]
[/test]
[test]
[input]
BestBuy -> IM52664
IBM -> MS95597
Apple -> EG51303
Nike -> ED33168
Adidas -> YJ71385
End
[/input]
[output]
Adidas
-- YJ71385
Apple
-- EG51303
BestBuy
-- IM52664
IBM
-- MS95597
Nike
-- ED33168
[/output]
[/test]
[test]
[input]
BestBuy -> QW62766	
Pepsi -> YQ12022
Pepsi -> HB92932
Subway -> PU61190
Apple -> GV85833
BestBuy -> UJ28125	
Subway -> ES16007
Ebay -> PA51310
Pepsi -> TO11520
Apple -> PF47880
BestBuy -> FG66075	
Subway -> RY44017
Apple -> WT62658
End
[/input]
[output]
Apple
-- GV85833
-- PF47880
-- WT62658
BestBuy
-- QW62766
-- UJ28125
-- FG66075
Ebay
-- PA51310
Pepsi
-- YQ12022
-- HB92932
-- TO11520
Subway
-- PU61190
-- ES16007
-- RY44017
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: ForceBook
[code-task title="ForceBook" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Forcebook" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Utilizatorii de forță se luptă să-și amintească de ce parte sunt fiecare, fiindcă se schimbă prea des.

Deci sunteți pus să creați un program pentru a le manageria profilele.

Trebuie să stocați informația pentru **every unique force user**, inregistrat în aplicație.

Veți primi câteva **input lines in one of the following formats**:
- \{forceSide\} \| \{forceUser\}
- \{forceUser\} -> \{forceSide\}

Acei **force user and force side are strings**, conținând orice caracter.

Dacă primiți force side \| force user trebuie să **check if such force user already exists**, și dacă nu, **add him/her** în partea corespunzătoare. 

Dacă primiți un force user -> force side trebuie să should **check if there is such force user already** și dacă da, **change his/her side**. 

Dacă nu există astfel de force user, **add him/her to the corresponding force side**, folosind comenzile ca pentru un user nou înregistrat.

Apoi, poți printa pe consolă: 

"\{**forceUser**\} **joins the** \{**forceSide**\} **side!**"

Trebuie să **end your program when you receive the command** "**End**". 

În acest punct, trebuie să printezi fiecare parte de forță **ordered descending by force users count**, apoi **ordered by name**. 

Pentru fiecare parte, imprimăm force users, **ordered by name**.

In cazul în care avem **no force users** de o parte, atunci **shouldn't print the side information**.

### Input
- Inputul vine sub formă de comenzi într-unul din formatele specificate mai sus
-  Input-ul se încheie când primim comanda "**End**"

### Output
- Ca output pentru fiecare force side, ordonată descendent în funcție de numprul de force users, apoi după nume, trebuie să imprimăm toți force users, ordonată după nume, alfabetic

- Formatul output este:
"**Side:** \{**forceSide**\}, **Members:** \{**forceUsersCount**\}
! \{**forceUser**\}
! \{**forceUser**\}
! \{**forceUser**\}"

- In cazul în care nu avem niciun force users, nu imprimăm această parte

### Exemple
| **Input** | **Output** |
| --- | --- |
| Light \| George | Side: Dark, Members: 1 | 
| Dark \| Peter | ! Peter |
| End | Side: Light, Members: 1 |
| | ! George |

### Comentarii
L-am înregistrat pe George de partea Luminii și pe Peter, de partea întunericului. 

După ce am primit "**End**", printăm ambele părți, ordonate de numărul de membri și apoi, de numele lor. 

### Exemple
| **Input** | **Output** |
| --- | --- |
| Lighter \| Ronn | John joins the Lighter side! | 
| Darker \| Dean | Dean joins the Lighter side! |
| John -> Lighter | Side: Lighter, Members: 3 |
| Dean -> Lighter | ! Dean |
| End | ! John |
| | ! Ronn |

### Comentarii
Deși John nu are un profil, îl înregistrăm și îl adăugăm în partea Luminii. 

Îl ștergem pe Dean din partea Întunericului și îl adăugăm la partea Luminii.

Imprimăm doar partea Luminii, fiindcă partea Întunericului nu are niciun membru. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Lighter \| Ronn
Darker \| Dean
John -> Lighter
Dean -> Lighter
End
[/input]
[output]
John joins the Lighter side!
Dean joins the Lighter side!
Side: Lighter, Members: 3
! Dean
! John
! Ronn
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
End
[/input]
[output]
Side: Dark, Members: 1
! Pesho
Side: Light, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Dark \| Gosho
Light \| Pesho
End
[/input]
[output]
Side: Dark, Members: 1
! Gosho
Side: Light, Members: 1
! Pesho
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
Dark \| Kiro
End
[/input]
[output]
Side: Dark, Members: 2
! Kiro
! Pesho
Side: Light, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Light \| Royal
Dark \| DCay
Ivan -> Middle
End
[/input]
[output]
Ivan joins the Middle side!
Side: Dark, Members: 1
! DCay
Side: Light, Members: 1
! Royal
Side: Middle, Members: 1
! Ivan
[/output]
[/test]
[test]
[input]
Light \| Royal
Dark \| DCay
Ivan -> Light
End

[/input]
[output]
Ivan joins the Light side!
Side: Light, Members: 2
! Ivan
! Royal
Side: Dark, Members: 1
! DCay
[/output]
[/test]
[test]
[input]
Royal -> Java
DCay -> Java
Vik -> JScript
Ivan -> C#
End
[/input]
[output]
Royal joins the Java side!
DCay joins the Java side!
Vik joins the JScript side!
Ivan joins the C# side!
Side: Java, Members: 2
! DCay
! Royal
Side: C#, Members: 1
! Ivan
Side: JScript, Members: 1
! Vik
[/output]
[/test]
[test]
[input]
Pesho \| Gosho Goshov
Gosho \| Pesho Peshov
Pesho Peshov \| Gosho
Gosho Goshov \| Pesho
End
[/input]
[output]
Side: Gosho, Members: 1
! Pesho Peshov
Side: Gosho Goshov, Members: 1
! Pesho
Side: Pesho, Members: 1
! Gosho Goshov
Side: Pesho Peshov, Members: 1
! Gosho
[/output]
[/test]
[test]
[input]
Light \| Gosho
Dark \| Pesho
Pesho -> SoftUni
Gosho -> SoftUni
End
[/input]
[output]
Pesho joins the SoftUni side!
Gosho joins the SoftUni side!
Side: SoftUni, Members: 2
! Gosho
! Pesho
[/output]
[/test]
[test]
[input]
Java \| e
Java \| d
Java \| c
Java \| b
Java \| a
End
[/input]
[output]
Side: Java, Members: 5
! a
! b
! c
! d
! e
[/output]
[/test]
[test]
[input]
e \| b
e \| a
f \| d
f \| c
f \| e
g \| e
End
[/input]
[output]
Side: f, Members: 3
! c
! d
! e
Side: e, Members: 2
! a
! b
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: SoftUni Exam Results
[code-task title="SoftUni Exam Results" taskId="Java-Fundamentals-Part-Two-Associative-Arrays-Softuni-Exam-Results" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Enunț
Trebuie să colectați toate înscrierile și să imprimați rezultatele finale și statisticile despre fiecare limbă în care participanții și-au prezentat soluțiile. 

Veți primi linii în formatul următor: "\{**username**\}-\{**language**\}-\{**points**\}" until you receive "**exam finished**". 

Trebuie să stocați fiecare **username** și, de asemenea,  **submissions and points** pentru fiecare. 

Puteți primi o comandă să interziceți un user pentru  **cheating** in formatul următor: "\{**username**\}**-banned**". 

In acest caz, trebuie să înlăturați userul din concurs, dar să păstrați aplicația sa în numărul total de aplicații pentru fiecare limbă.

După ce ați primit  "**exam finished**", **print** fiecare participant în ordine **descending** după numărul **max** **points**, apoi după **username**, in următorul **format**:

"**Results:**
\{**username**\} \| \{**points**\}
…"

După ce am imprimat fiecare limbă folosită în examen, ordonăm **descending** după numărul total **submission count** și **then** după **name** limbii, in următorul format:

"**Submissions:**
\{**language**\} - \{**submissionsCount**\}
…"

## Input / Constraints
Pânpă primiți "**exam finished**", veți primi aplicațiile participanților în formatul următor: "\{**username**\}-\{**language**\}-\{**points**\}"
Puteți primi o comandă de interzicere -> "\{**username**\}-**banned**"
Punctele participantului vor fi un integer valid în gama \[0-100\]

## Output
- Imprimați rezultatele examenului pentru fiecare participant, ordonate descendent după numărul de participanți și apoi după username, în următorul format:

"**Results:**
\{**username**\} \| \{**points**\}
…"
- După ce am printat fiecare limbă, ordonăm descendent după numărul total de aplicații și apoi după numele limbii, în formatul următor: 

"**Submissions:**
\{**language**\} - \{**submissionsCount**\}
…"


### Exemple
| **Input** | **Output** |
| --- | --- |
| Peter-Java-91 | Results: |
| George-C#-84 | Peter \| 91 |
| Mike-Java-90 | George \| 84 |
| Mike-C#-50 | Submissions: |
| Mike-banned | C# - 2 |
| exam finished | Java - 2 |

### Comentarii
Mike este interzis, deci va fi scos din concurs, dar aplicația sa va fi păstrată în numărătoarea aplicațiilor. 

Deși sunt doar 2 participanți în rezultate, sunt 4 aplicații în total. 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Peter-Java-91
George-C#-84
Mike-Java-90
Mike-C#-50
Mike-banned
exam finished
[/input]
[output]
Results:
Peter | 91
George | 84
Submissions:
C# - 2
Java - 2
[/output]
[/test]
[test]
[input]
Pesho-Java-91
Gosho-C#-84
Kiro-JavaScript-90
Kiro-C#-50
Kiro-banned
exam finished
[/input]
[output]
Results:
Pesho | 91
Gosho | 84
Submissions:
C# - 2
Java - 1
JavaScript - 1
[/output]
[/test]
[test]
[input]
a-j-10
exam finished
[/input]
[output]
Results:
a | 10
Submissions:
j - 1
[/output]
[/test]
[test]
[input]
a-j-10
b-k-50
exam finished
[/input]
[output]
Results:
b | 50
a | 10
Submissions:
j - 1
k - 1
[/output]
[/test]
[test]
[input]
a-j-10
a-j-20
a-j-40
a-j-30
exam finished
[/input]
[output]
Results:
a | 40
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
aa-b-40
aa-b-30
aa-b-20
aa-b-10
exam finished
[/input]
[output]
Results:
aa | 40
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
aa-b-40
bb-b-30
cc-b-20
dd-b-10
exam finished
[/input]
[output]
Results:
aa | 40
bb | 30
cc | 20
dd | 10
Submissions:
b - 4
[/output]
[/test]
[test]
[input]
a-j-10
b-j-10
c-j-10
d-j-10
exam finished
[/input]
[output]
Results:
a | 10
b | 10
c | 10
d | 10
Submissions:
j - 4
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
exam finished
[/input]
[output]
Results:
d | 40
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-b-20
c-a-30
d-a-40
d-banned
exam finished
[/input]
[output]
Results:
c | 30
b | 20
a | 10
Submissions:
a - 2
b - 2
[/output]
[/test]
[test]
[input]
a-b-10
b-a-20
c-a-30
c-banned
exam finished
[/input]
[output]
Results:
b | 20
a | 10
Submissions:
a - 2
b - 1
[/output]
[/test]
[test]
[input]
e-b-90
f-b-90
g-b-90
h-b-90
a-a-90
b-a-90
c-a-90
d-a-90
e-b-100
f-b-100
g-b-100
h-b-100
a-a-100
b-a-100
c-a-100
d-a-100
d-banned
exam finished
[/input]
[output]
Results:
a | 100
b | 100
c | 100
e | 100
f | 100
g | 100
h | 100
Submissions:
a - 8
b - 8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

