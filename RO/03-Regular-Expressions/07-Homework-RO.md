# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Furniture

[code-task title="Furniture" taskId="Java-Fundamentals-2-Regular-Expressions-Furniture" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program pentru a **calcula costul total** al diferitelor tipuri de mobilier cumpărat .

Veți primi câteva linii de intrare **până când veți primi comanda** "Purchase".

Pentru ca linia **să fie valabilă** ar trebui să fie în următorul **format**:

- "\>\>\{furniture name\}\<\<\{price\}!\{quantity\}"

Prețul poate fi un **număr cu virgulă mobilă sau un număr întreg**.

Stocați **denumirea mobilierukui și prețul total**.

La final **imprimați fiecare mobilierul cumpărat pe o linie separată** în formatul următor:

Bought furniture:
\{furniture name 1\}
\{furniture name 2\}
…

Și pe **ultima linie imprimați** următoarele:

- "Total money spent: \{spend money\}" **formatate** la a doua zecimală


### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| >>Sofa<<312.23!3 | Bought furniture: |
| >>TV<<300!5 | Sofa |
| >Invalid<<!5 | TV |
| Purchase | Total money spent: 2436.69 |

[hints]
[hint]
Puteți utiliza [Regex101](https://regex101.com/) sau [RegExr](https://regexr.com) pentru a vă testa șablonul în timp real.

În acest exemplu, numai **canapeaua** ("Sofa") și **televizorul** ("TV") sunt valabile.
[/hint] 
[hint]
Pentru fiecare dintre ele **înmulțim** prețul cu cantitatea:

```java
if (matcher.find()) {
  String name = matcher.group("name");
  double price = 
    Double.parseDouble(matcher.group("price"));
  int quantity = 
    Integer.parseInt(matcher.group("quantity"));

  furniture.add(name);

  finalPrice += price * quantity;
}
```
[/hint] 
[hint]
**Imprimați** rezultatul:

```java
System.out.println("Bought furniture:");

furniture
  .forEach(piece -> System.out.println(piece));

System.out.println(
  String.format("Total money spent: %.2f", 
    finalPrice));
```

Nu uitați să **formatați** **prețul final** la a doua cifră după punctul zecimal. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
>>Sofa<<312.23!3
>>TV<<300!5
>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Sofa
TV
Total money spent: 2436.69
[/output]
[/test]
[test]
[input]
>>Televizor<<312.23!3
>>Monitor<<300!5
>>Invalid<<<<!5
>>Sink<<220!10
>>>>>>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Televizor
Monitor
Sink
Total money spent: 4636.69
[/output]
[/test]
[test]
[input]
>Invalid<<!5
>Invalid<<!5
>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Total money spent: 0.00
[/output]
[/test]
[test]
[input]
>>Sofa<<316.12!10
>>Couch<<31!12
>>Table<<31!12
>Masichka<<5
Purchase
[/input]
[output]
Bought furniture:
Sofa
Couch
Table
Total money spent: 3905.20
[/output]
[/test]
[test]
[input]
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
Purchase
[/input]
[output]
Bought furniture:
Sofa
Sofa
Sofa
Sofa
Sofa
Total money spent: 4683.45
[/output]
[/test]
[test]
[input]
>>Laptop<<312.2323!3
>>TV<<300.21314!5
>Invalid<<!5
>>TV<<300.21314!20
>>Invalid<!5
>>TV<<30.21314!5
>>Invalid<<!!5
Purchase
[/input]
[output]
Bought furniture:
Laptop
TV
TV
TV
Total money spent: 8593.09
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Race
[code-task title="Race" taskId="Java-Fundamentals-2-Regex-Race" executionType="tests-execution" executionStrategy="java-code"  requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program care procesează informații despre o cursă.

Pe **prima linie** vi  se va oferi o **lista de participanți separați** prin ", ".

Pe **următoarele rânduri până când primiți** o linie "end of race" vi se vor oferi informații care vor fi câteva **caractere alfanumerice**.

Între ele puteți avea **câteva caractere suplimentare pe care ar trebui să le ignorați**.

De **exemplu**: "G!32e%o7r#32g$235@!2e".

**Literele sunt numele persoanei** și **suma cifrelor este distanța pe care au parcurs-o**.

Aici avem **George who ran 29 km**.

**Stocați informațiile** despre **persoană numai dacă lista de curse conține numele** persoanei respective.

Dacă primiți **aceeași persoană de mai multe ori** numai **adăugați distanța la vechea sa distanță**.

La final **imprimați primii 3 alergători ordonați în funcție de distanța descrescătoare** în formatul:

1st place: \{first racer\}
2nd place: \{second racer\}
3rd place: \{third racer\}

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| George, Peter, Bill, Tom | 1st place: George |
| G4e@55or%6g6!68e!!@ | 2nd place: Peter |
| R1@!3a$y4456@ | 3rd place: Tom |
| B5@i@#123ll | |
| G@e54o$r6ge# | |
| 7P%et^#e5346r | |
| T$o553m&6 | |
| end of race | |


[hints]
[hint]
Pe a treia linie de intrare avem **Ray**.
El **nu este** pe listă, deci nu luăm în calcul rezultatul lui.
[/hint] 
[hint]
**Celelalte** sunt **valabile**:

```java
if (racers.containsKey(name)) {
  racers.put(name, racers.get(name) + result);
}
```

**George** are **55** km în total, **Peter** - **25** și **Tom** - **19**.
[/hint] 
[hint]
Tipărim câștigătorii (**top 3**):

```java
List<String> winners = new LinkedList<>();

racers.entrySet().stream()
.sorted(Map.Entry.<String, Integer>comparingByValue()
.reversed())
.limit(3)
.forEach(racer -> winners.add(racer.getKey()));

System.out.printf("1st place: %s\n" +
  "2nd place: %s\n" +
  "3rd place: %s\n", 
  winners.get(0), 
  winners.get(1), 
  winners.get(2));
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George, Peter, Bill, Tom
G4e@55or%6g6!68e!!@
R1@!3a\$y4456@
B5@i@\#123ll
G@e54o\$r6ge\#
7P%et^\#e5346r
T\$o553m&6
end of race
[/input]
[output]
1st place: George
2nd place: Peter
3rd place: Tom
[/output]
[/test]
[test]
[input]
Gregory, Tom, Jerry, Christian, Bill
G4r\*\&^\$\#ego%4^\&4\*ry
T\*\&^%57)\&%\$o^\*m6
J\&\*\*67e%\&))rr\&12\*3y
J\&\*\*22e%&))rr\&44\*8y
Ch\&\*\&\*^ri1s3t5ian
L\&\*\&%666amar
end of race
[/input]
[output]
1st place: Jerry
2nd place: Tom
3rd place: Gregory
[/output]
[/test]
[test]
[input]
Ronald, Bill, Tom, Timmy, Maggie, Michonne
Mi@@@@!ch123o!@nne787)
%@B(@@)i89ll)!@)
R@(on@ald992)
T(@immy77)
Ma10!@@g0g0g0i0e
end of race
[/input]
[output]
1st place: Michonne
2nd place: Ronald
3rd place: Bill
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R\*\*\*\*i22c00k199!!!
N\*\*\*\\&^E989GA(\*\\&^\\&^\\&N323a)))
\*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille\*\\&^\\&%^234
end of race
[/input]
[output]
1st place: Peter
2nd place: Lucille
3rd place: Rick
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R****i22c00k199!!!
N***\\&^e989ga(*\\&^\\&^\\&n323)))
*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille*\\&^\\&%^234
R**%^\\&%i11c104k123!^\\&!!
R\\&\\&%^\\&%ic10^\$@k123!^\\&!!
*^%Peter8675
*^%Geo\$12\#%112r^\$ge23!(@^)
!!22!P23!e!t!e!r!85
end of race
[/input]
[output]
1st place: Peter
2nd place: Rick
3rd place: Negan
[/output]
[/test]
[test]
[input]
Joro, George, Georgi, Stamat
!@232St#$ama!@!@t
@@@232St@@ama!@!@!t
G7667eorge!!!
@!@@J99999oro@@@57
end of race
[/input]
[output]
1st place: Joro
2nd place: George
3rd place: Stamat
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă: Bar Income
[code-task title="Bar Income" taskId="Java-Fundamentals-2-Regex-Bar-Income" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Calculați profitul din produsele care au fost vândute pe tot parcursul zilei.

**Până când veți primi o linie** cu textul "**end of shift**"  vi se vor oferi **linii de intrare**.

Dar înainte de a prelucra aceasta linie, trebuie să executați mai întâi câteva **validări**.

Fiecare comandă validă trebuie să aibă un **client, produs, total și prețul**.

**Valid**: 
- **Numele clientului** trebuie să fie înconjurat de '%' și trebuie să înceapă cu o literă mare, urmată de litere mici
- **Produsul** conține orice caracter de cuvânt și trebuie să fie înconjurat de '\<' și '\>' 
- **Total** este un număr întreg, înconjurat de '\|'
- **Prețul** este orice număr real urmat de '$'

Părțile unei **comenzi valide ar trebui să apară în comanda dată : client, produs, total și un prețul**.

Între fiecare **parte pot exista și alte simboluri**, **cu excepția** ('\|', '$', '%' and '.')

**Pentru fiecare linie valida imprimați** pe consola: "\{customerName\}: \{product\} - \{totalPrice\}"

Când primiți "end of shift" **imprimați suma totală** pentru ziua rotunjita la **2 zecimale** în următorul format: 

- "Total income: \{income\}".

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| %George%\<Croissant\>\|2\|10.3\$ | George: Croissant - 20.60 |
| %Peter%\<Gum\>\|1\|1.3\$ | Peter: Gum - 1.30 |
| %Maria%\<Cola\>\|1\|2.4\$ | Maria: Cola - 2.40 |
| end of shift | Total income: 24.30 |

[hints]
[hint]
Fiecare linie este valabilă, așa că **tipărim** fiecare comandă, calculând **prețul** total al produsulelor cumpărate:

```java
double totalPrice = count * price;

System.out.println(String.format(
  "%s: %s - %.2f", customer, 
  product, totalPrice));
```
[/hint] 
[hint]
La final **imprimăm** venitul **total** al **zilei**:

```java
System.out.println(String.format(
  "Total income: %.2f", totalIncome));
```
[/hint] 
[/hints] 

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| %InvalidName%\<Croissant\>\|2\|10.3\$ | Valid: Valid - 200.00 |
| %Peter%\<Gum\>1.3\$ | Total income: 200.00 |
| %Maria%\<Cola\>\|1\|2.4 | |
| %Valid%\<Valid\>valid\|10\|valid20\$ | |
| end of shift | |

[hints]
[hint]
Pe **prima** linie, numele clientului **nu este valid**, așa că **omitem** acest rând.
[/hint] 
[hint]
A **doua** linie lipsește **numărul** de produse.
[/hint] 
[hint]
Pe a **treia** linie avem un **preț nevalid**.
[/hint] 
[hint]
Și numai a **patra** linie este **validă**.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
%George%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>\|1\|1.3\$
%Maria%\<Cola\>\|1\|2.4\$
end of shift
[/input]
[output]
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
[/output]
[/test]
[test open]
[input]
%InvalidName%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>1.3\$
%Maria%\<Cola\>\|1\|2.4
%Valid%\<Valid\>valid\|10\|valid20\$
end of shift
[/input]
[output]
Valid: Valid - 200.00
Total income: 200.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%\<Product2\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product2 - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%valid\<Product3\>valid\|1\|20.80\$
end of shift
[/input]
[output]
Name: Product3 - 20.80
Total income: 20.80
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|20.50\$
end of shift
[/input]
[output]
Name: Product - 41.00
Total income: 41.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
%Name%\<Product\>\|1\|9.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Name: Product - 9.50
Total income: 30.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10.3\$
%Name%\<Pro_duct\>\|2\|10.3\$
end of shift
[/input]
[output]
Name: Product - 20.60
Name: Pro_duct - 20.60
Total income: 41.20
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|30.10\$
%Name%\<Product\>\|1.0\|10.10\$
%Name%\<Product\>\|1\|10.10
%Name%Product\|1\|10.10\$
end of shift
[/input]
[output]
Name: Product - 30.10
Total income: 30.10
[/output]
[/test]
[test]
[input]
%Name%ho\<Product\>eins\|1\|10\$
%Name%he\<Product\>zwei\|2\|10\$
%Name%hi\<Product\>drei\|3\|10\$
end of shift
[/input]
[output]
Name: Product - 10.00
Name: Product - 20.00
Name: Product - 30.00
Total income: 60.00
[/output]
[/test]
[test]
[input]
%Name%sorry for this test\<\>\<\>\<\>\<\>\<Product\>\<\>\<\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Star Enigma
[code-task title="Star Enigma" taskId="Java-Fundamentals-2-Regex-Star-Enigma" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Aveți sarcina să creați un program pentru a **decripta mesajele**.

Veți primi **câteva mesaje, care sunt criptate** folosind enigmă legendara stelară.

Ar trebui să **decriptați mesajele**, urmând aceste reguli:
- Pentru a decripta în mod corespunzător un mesaj, **ar trebui să calculați toate literele** [s, t, a, r] - **insensibile la majuscule și să eliminați clacul** din valoarea ASCII curentă a fiecărui simbol al mesajului criptat

**După decriptare**:
- Fiecare **mesaj** trebuie să aibă **denumirea planetei, populație, tip de atac** ('A', as attack or 'D', as destruction) și **număr de soldați**
- **Denumirea planetei incepe după** '\@' și **conține doar litere din alfabetul latin**
- **Populația planetei începe după** ':' și **este un număr întreg**
- **Tipul de atac** poate fi "A"(attack) sau "D"(destruction) și **trebuie să fie înconjurat de** "!" (semnul exclamarii)
- **Numărul de soldați începe după** "->" și **ar trebui să fie un număr întreg**

**Ordinea mesajului** trebuie să fie:
**planet name -> planet population -> attack type -> soldier count**

Fiecare parte poate fi **separată de celelalte prin orice caracter, cu excepția**: '\@', '-', '!', ':' și '>'.

### Ieșire
**După decriptarea tuturor mesajelor**, ar trebui să **imprimați informațiile decriptate în următorul format**:
-  Mai întâi imprimați planetele atacate, apoi planetele distruse
- "Attacked planets: \{attackedPlanetsCount\}"
- "-> \{planetName1\}"
- ...
- "Destroyed planets: \{destroyedPlanetsCount\}"
- "-> \{planetName1\}"
- ...

Planetele ar trebui să fie ordonate după nume in mod **alfabetic**.

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 2 | Attacked planets: 1 |
| STCDoghudd4=63333$D$0A53333 | -> Alderaa |
| EHfsytsnhf?8555&I&2C9555SR | Destroyed planets: 1 |
| | -> Cantonica |

[hints]
[hint]
Primim **două** mesaje, pentru a le decripta calculăm **cheia**:

**Primul mesaj** are cheia de decriptare 3, deoarece conține:
- **o** apariție a literei "**S**" 
- **o** apariție a literei "**T**"
- **o** apariție a literei "**A**"

Deci scoatem **3** din **valoarea ASCII** a fiecărui **caracter**: 

```java
int occurrences = 0;

for (int i = 0; i < message.length(); i++) {
  if (star.find()) {
    occurrences++;
  }
}

for (int i = 0; i < message.length(); i++) {
  char symbol = message.charAt(i);
  deciphered += (char)(symbol - occurrences);
}
```

Mesajul **descifrat** este: `PQ@Alderaa1:30000!A!->20000`
[/hint] 
[hint]
Al **doilea mesaj** are cheia **5**.

Aici, mesajul **descifrat** este: `@Cantonica:3000!D!->4000NM`
[/hint] 
[hint]
Ambele mesaje sunt **valabile** și conțin:
- **planete**
- **populație**
- **tipul** de atac 
- număr de **soldați**
[/hint] 
[hint]
După **decriptarea** tuturor **mesajelor**, **imprimăm** fiecare planetă conform formatului **dat**:

```java
System.out.println(String.format(
  "Attacked planets: %d",
  attacked.size()));

attacked
  .stream()
  .sorted()
  .forEach(planet -> 
    System.out.println("-> " + planet));
 

System.out.println(String.format(
  "Destroyed planets: %d", 
  destroyed.size()));

destroyed
  .stream() 
  .sorted()
  .forEach(planet -> 
    System.out.println("-> " + planet));
```
[/hint] 
[/hints] 


### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| 3 | Attacked planets: 0 |
| tt(''DGsvywgerx>6444444444%H%1B9444 | Destroyed planets: 2 |
| GQhrr\|A977777(H(TTTT | -> Cantonica |
| EHfsytsnhf?8555&I&2C9555SR | -> Coruscant |

[hints]
[hint]
Primim **trei** mesaje.

**Primul mesaj** este decriptat cu cheia **4**: `pp$##@Coruscant:2000000000!D!->5000`
[/hint] 
[hint]
Al **doilea mesaj** are cheia **7**: `@Jakku:200000!A!MMMM`
  
Acesta este un mesaj **nevalid**, numărul **soldaților** lipsește, așa că **continuăm**.
[/hint] 
[hint]
Al **treilea mesaj** are cheia **5**: `@Cantonica:3000!D!->4000NM`
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
STCDoghudd4=63333\$D\$0A53333
EHfsytsnhf?8555&I&2C9555SR
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Cantonica
[/output]
[/test]
[test open]
[input]
3
tt(''DGsvywgerx>6444444444%H%1B9444
GQhrr\|A977777(H(TTTT
EHfsytsnhf?8555&I&2C9555SR
[/input]
[output]
Attacked planets: 0
Destroyed planets: 2
-> Cantonica
-> Coruscant
[/output]
[/test]
[test]
[input]
2
@Khomm:100!D!->200
@Lwhekk:100!D!->200
[/input]
[output]
Attacked planets: 0
Destroyed planets: 2
-> Khomm
-> Lwhekk
[/output]
[/test]
[test]
[input]
2
GQhrr\|A977777(H(4E:777TTTT
@Khomm:100!D!->200
[/input]
[output]
Attacked planets: 1
-> Jakku
Destroyed planets: 1
-> Khomm
[/output]
[/test]
[test]
[input]
1
STCDoghudd4=63333\$D\$0A53333
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
2
STCDoghudd4=63333\$D\$0A53333
STCDoghudddd4=63333\$G\$0A53333
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Alderaaaa
[/output]
[/test]
[test]
[input]
3
CWdwrrlqh&'(=533333\$D\$&'.0A633333
tt(''DGsvywgerx>6444444444%H%1B9444
GQhrr\|A977777(H(4E:777TTTT
[/input]
[output]
Attacked planets: 2
-> Jakku
-> Tatooine
Destroyed planets: 1
-> Coruscant
[/output]
[/test]
[test]
[input]
2
CWdwrrlqh&'(=533333\$D\$&'.0A433333
GQhrr\|A977777(H(4E:777TTTT
[/input]
[output]
Attacked planets: 2
-> Jakku
-> Tatooine
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
5
TTBFciqdcj<722\#C\#/@622
TBEqtwuecpv<622\#C\#/@522
TBDgurkp<522\#C\#/@422
TBCnfgtccp<422\#C\#/@322
TTB\[cxkp<822\#F\#/@722
[/input]
[output]
Attacked planets: 4
-> Alderaan
-> Bespin
-> Coruscant
-> Dagobah
Destroyed planets: 1
-> Yavin
[/output]
[/test]
[test]
[input]
2
TTBFc\#iqdcj<722\#C\#/@622
TTB\[cx\#kp<822\#F\#/@722
[/input]
[output]
Attacked planets: 0
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
3
TBCnfgtccccp<422\#C\#/@322
TTBFc\#iqdcj<722\#C\#/@622
TTB\[cx\#kp<822\#F\#/@722
[/input]
[output]
Attacked planets: 1
-> Alderaaaan
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
5
TTBFciqdcj\#C\#<722/@622
TBEqtwuecpv/@522<622\#C\#
<522\#C\#/@422TBDgurkp
TBCnfgtccp<422\#C\#/@322
TTB\[cxkp<822\#F\#/@722
[/input]
[output]
Attacked planets: 1
-> Alderaan
Destroyed planets: 1
-> Yavin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Nether Realms
[code-task title="Nether Realms" taskId="Java-Fundamentals-2-Regex-Nether-Realm" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Se apropie o luptă puternică.

În țara furtunoasă Nether Realms, demonii luptă unul împotriva celuilalt pentru supremație într-un duel din care doar unul va supraviețui.

Sarcina dvs, totuși, nu este atât de captivantă.

Sunteți desemnați să **conectați toți participanții** pe cartea demonilor intr-o luptă puternică la Nether Realms, care este **sortată in mod alfabetic**.

Numele unui demon conține **starea sănătații lui și daunele lui**.

**Suma codurilor ASCII ale tuturor caracterelor** (excluzând numerele (0-9), simbolurile aritmetice ('+', '-', '*', '/') și **punctul delimitator** ('.')) **oferă sănătatea maxima a unui demon**. 

**Suma tuturor numerelor din numele său formează daunele sale de bază**.

Rețineți că ar trebui să luați în considerare semnele **plus** '+' și **minus** '-'  (e.g. +10 este 10 și -10 este -10). 

Cu toate acestea, există **unele simboluri** ('\*' and '/') care **pot modifica în continuare daunele de bază înmulțindu-le sau împărțindu-le la 2** (de exemplu, în numele "m15\*/c-5.0", daunele de bază sunt 15 + (-5.0) = 10 și apoi **trebuie să le înmulțițim cu 2** (de ex. 10 \ * 2 = 20) și ** apoi să o împărțiți cu 2 ** (de ex. 20/2 = 10)).  

Deci, **înmulțire și împărțire se aplică numai după ce toate numerele sunt incluse în calcul** și în ordinea în care apar în numele. 

Veți primi **toți demonii pe o singură linie**, **separate prin virgule și zero sau mai multe spații goale**

Sortați-le în **ordine alfabetică și imprimaț numele lor** conform **sănătății și daunelor fiecărui**.

### Intrare
- Intrarea va fi citită de pe consolă
- Intrarea constă dintr-o singură linie care conține toate numele demonilor separate prin virgule și zero sau mai multe spații în format:
    - "\{demon name\}, \{demon name\}, … \{demon name\}"

### Ieșire
Imprimați toți demonii sortate după numele lor în ordine crescătoare, fiecare pe o linie separată în format:
    - "\{demon name\} - \{health points\} health, \{damage points\} damage"

### Limitări
- Numele unui demon va conține cel puțin un caracter
- Numele unui demon nu poate conține spații goale ' ' sau virgule  ','
- Un număr în virgulă mobilă va avea întotdeauna cifre înainte și după separatorul său zecimal
- Numărul in numele unui demon este considerat tot ceea ce este un număr întreg valid sau un număr cu virgulă mobilă (punctul '.' este folosit ca separator)
    - de exemplu, toate acestea sunt numere valide:'4', '+4', '-4', '3.5', '+3.5', '-3.5'

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| M3ph-0.5s-0.5t0.0** | M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage |

### Comentarii
- M3ph-0.5s-0.5t0.0**:
    - Health = 'M' + 'p' + 'h' + 's' + 't' = 524 health
    - Damage = (3 + (-0.5) + (-0.5) + 0.0) \* 2 \* 2 = 8 damage

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| M3ph1st0**, Azazel | Azazel - 615 health, 0.00 damage  |
| | M3ph1st0** - 524 health, 16.00 damage |

### Comments
- Azazel: 
    - Health - 'A' + 'z' + 'a' + 'z' + 'e' + 'l' = 615 health. Damage - no digits = 0 damage
- M3ph1st0**:
    - Health - 'M' + 'p' + 'h' + 's' + 't' = 524 health
    - Damage - (3 + 1 + 0) \* 2 \* 2 = 16 damage

[/task-description]
[code-io /]
[tests]
[test open]
[input]
M3ph-0.5s-0.5t0.0**
[/input]
[output]
M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage
[/output]
[/test]
[test open]
[input]
M3ph1st0**, Azazel
[/input]
[output]
Azazel - 615 health, 0.00 damage 
M3ph1st0** - 524 health, 16.00 damage
[/output]
[/test]
[test]
[input]
Gos/ho
[/input]
[output]
Gos/ho - 512 health, 0.00 damage
[/output]
[/test]
[test]
[input]
Leopold   ,    Merrie , Goldham,     Stephen   ,     Rodgers,Bob
[/input]
[output]
Bob - 275 health, 0.00 damage
Goldham - 700 health, 0.00 damage
Leopold - 719 health, 0.00 damage
Merrie - 612 health, 0.00 damage
Rodgers - 726 health, 0.00 damage
Stephen - 727 health, 0.00 damage
[/output]
[/test]
[test]
[input]
D0novan , P1er, Alfons000, Mav3r1ck   , Garf13ld33
[/input]
[output]
Alfons000 - 611 health, 0.00 damage
D0novan - 614 health, 0.00 damage
Garf13ld33 - 592 health, 46.00 damage
Mav3r1ck - 612 health, 4.00 damage
P1er - 295 health, 1.00 damage
[/output]
[/test]
[test]
[input]
F3.0R0.3D0.5, K0.0TL1.1N, Z3R0.0303, F3RD1NAND
[/input]
[output]
F3.0R0.3D0.5 - 220 health, 3.80 damage
F3RD1NAND - 509 health, 4.00 damage
K0.0TL1.1N - 313 health, 1.10 damage
Z3R0.0303 - 172 health, 3.03 damage
[/output]
[/test]
[test]
[input]
F-3.0R3D0.5, K-0.0TL1.1N, Z3R-0.0303, F-3RD1NAND
[/input]
[output]
F-3.0R3D0.5 - 220 health, 0.50 damage
F-3RD1NAND - 509 health, -2.00 damage
K-0.0TL1.1N - 313 health, 1.10 damage
Z3R-0.0303 - 172 health, 2.97 damage
[/output]
[/test]
[test]
[input]
G0SH0  , P3.666SH-0.666, AP3.666SH0.666   , G0.056-0.56O65
[/input]
[output]
AP3.666SH0.666 - 300 health, 4.33 damage
G0.056-0.56O65 - 150 health, 64.50 damage
G0SH0 - 226 health, 0.00 damage
P3.666SH-0.666 - 235 health, 3.00 damage
[/output]
[/test]
[test]
[input]
***a/// , ***b///  , ***c///
[/input]
[output]
***a/// - 97 health, 0.00 damage
***b/// - 98 health, 0.00 damage
***c/// - 99 health, 0.00 damage
[/output]
[/test]
[test]
[input]
912345678912.2**/-468.3a  , 0123456789.3*/b ,  0123456789.99999*/c
[/input]
[output]
0123456789.3*/b - 98 health, 123456789.30 damage
0123456789.99999*/c - 99 health, 123456790.00 damage
912345678912.2**/-468.3a - 97 health, 1824691356887.80 damage
[/output]
[/test]
[test]
[input]
1.1!@2.2\#\$3.999%^0.01&*(0.22)?0.3/* , d0.3r0.2o0.1b0.0, k0.0rab0.02a0.5*    ,      fr0002d0.2*/
[/input]
[output]
1.1!@2.2\#\$3.999%^0.01&*(0.22)?0.3/* - 481 health, 15.66 damage
d0.3r0.2o0.1b0.0 - 423 health, 0.60 damage
fr0002d0.2*/ - 316 health, 2.20 damage
k0.0rab0.02a0.5* - 513 health, 1.04 damage
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Extract Emails
[code-task title="Extract Emails" taskId="Java-Fundamentals-2-Regex-Extract-Emails" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Creați  codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați  un program pentru a extrage toate adresele de e-mail dintr-un text dat.

Textul apare la **singura linie de intrare**.

**Imprimați e-mailurile pe consolă**, fiecare pe o linie separată.

E-mailurile sunt considerate a fi în **format** \{user\}\@\{host\}, unde: 

- \{user\} este o secvență de **litere și cifre**, unde'.', '-' și '_' pot apărea între ele
    - exemple de **utilizatori valide**: "stephan", "mike03", "s.johnson", "st_steward", "12345"
    - exemple de **utilizatori nevalide**: ''--123", ".....", "_steve", ".info"
- \{host\} este o **secvență de cel puțin două cuvinte, separate prin puncte** '.'. Fiecare cuvânt este **secvență de litere și poate avea cratime** '-' între litere
    - exemple de **hosts**: "softuni.org", "software-university.com", "intoprogramming.info", "mail.softuni.org"
    - exemple de **hosts invalide**: "helloworld", ".unknown.soft.", "invalid-host-", "invalid-"
- Exemple de **e-mailuri valide**: info\@softuni.org, kiki\@hotmail.co.uk, no-reply\@github.com, s.peterson\@mail.uu.net, info-bg\@software-university.software.academy 
- Exemple de **e-mailuri invalide**: --123\@gmail.com, …\@mail.bg, .info\@info.info, _steve\@yahoo.cn, mike\@helloworld, mike\@.unknown.soft., s.johnson\@invalid-

### Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information. | s.miller@mit.edu  |
| | j.hopking@york.ac.uk |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.
end
[/input]
[output]
s.miller@mit.edu
j.hopking@york.ac.uk
[/output]
[/test]
[test]
[input]
Please contact us at: support@github.com.
end
[/input]
[output]
support@github.com
[/output]
[/test]
[test]
[input]
Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. ?- steve.parker@softuni.de.
end
[/input]
[output]
steve.parker@softuni.de
[/output]
[/test]
[test]
[input]
Examples of valid emails: info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, info-bg@software-university.software.academy
end
[/input]
[output]
info@softuni-bulgaria.org
kiki@hotmail.co.uk
no-reply@github.com
s.peterson@mail.uu.net
info-bg@software-university.software.academy
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

