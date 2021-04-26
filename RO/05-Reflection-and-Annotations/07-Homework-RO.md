# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Harvesting Fields
[code-task title="Harvesting Fields" taskId="oop-advanced-java-reflection-and-annotations-Harvesting-Fields" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-harvestingFields.zip) **pentru această problemă.**

Veți primi o clasă **RichSoilLand** cu o mulțime de câmpuri, pe care ar trebui să le recoltați.

Recoltarea înseamnă că trebuie să imprimați informații despre fiecare **câmp** într-un format dat (consultați datele de ieșire).

## Intrare
Veți primi maximum 100 de linii cu una dintre următoarele comenzi:
- **private** - tipăriți toate câmpurile private
- **protected** - tipăriți toate câmpurile protejate
- **public** - tipăriți toate câmpurile publice
- **all** - tipărește TOATE câmpurile declarate
- **HARVEST** - încheie intrarea

## Ieșire
Pentru fiecare comandă, trebuie să imprimați **câmpurile** care au **modificator de acces**, așa cum este descris în secțiunea de intrare.

Formatul în care ar trebui tipărite câmpurile este:

"\{**access modifier**\} \{**field type**\} \{**field name**\}"


# Exemple

## Example 1
| **Input** | **Output** |
| --- | --- |
| protected | protected String testString |
| HARVEST | protected double aDouble |
|  | protected byte testByte |
|  | protected StringBuilder aBuffer |
|  | protected BigInteger testBigNumber |
|  | protected float testFloat |
|  | protected Object testPredicate |
|  | protected Object fatherMotherObject |
|  | protected String moarString |
|  | protected Exception inheritableException |
|  | protected Stream moarStreamz |


## Example 2
| **Input** | **Output** |
| --- | --- |
| private | private int testInt |
| public | private long testLong |
| private | private Calendar aCalendar |
| HARVEST | private char testChar |
|  | private BigInteger testBigInt |
|  | private Thread aThread |
|  | private Object aPredicate |
|  | private Object hiddenObject |
|  | private String anotherString |
|  | private Exception internalException |
|  | private Stream secretStream |
|  | public double testDouble |
|  | public String aString |
|  | public StringBuilder aBuilder |
|  | public short testShort |
|  | public byte aByte |
|  | public float aFloat |
|  | public Thread testThread |
|  | public Object anObject |
|  | public int anotherIntBitesTheDust |
|  | public Exception justException |
|  | public Stream aStream |
|  | private int testInt |
|  | private long testLong |
|  | private Calendar aCalendar |
|  | private char testChar |
|  | private BigInteger testBigInt |
|  | private Thread aThread |
|  | private Object aPredicate |
|  | private Object hiddenObject |
|  | private String anotherString |
|  | private Exception internalException |
|  | private Stream secretStream |

## Example 3
| **Input** | **Output** |
| --- | --- |
| all | private int testInt |
| HARVEST | public double testDouble |
|  | protected String testString |
|  | private long testLong |
|  | protected double aDouble |
|  | public String aString |
|  | private Calendar aCalendar |
|  | public StringBuilder aBuilder |
|  | private char testChar |
|  | public short testShort |
|  | protected byte testByte |
|  | public byte aByte |
|  | protected StringBuilder aBuffer |
|  | private BigInteger testBigInt |
|  | protected BigInteger testBigNumber |
|  | protected float testFloat |
|  | public float aFloat |
|  | private Thread aThread |
|  | public Thread testThread |
|  | private Object aPredicate |
|  | protected Object testPredicate |
|  | public Object anObject |
|  | private Object hiddenObject |
|  | protected Object fatherMotherObject |
|  | private String anotherString |
|  | protected String moarString |
|  | public int anotherIntBitesTheDust |
|  | private Exception internalException |
|  | protected Exception inheritableException |
|  | public Exception justException |
|  | public Stream aStream |
|  | protected Stream moarStreamz |
|  | private Stream secretStream |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
protected
HARVEST
[/input]
[output]
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
[/output]
[/test]
[test open]
[input]
private
public
private
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test open]
[input]
all
HARVEST
[/input]
[output]
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[test]
[input]
private
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test]
[input]
public
HARVEST
[/input]
[output]
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
[/output]
[/test]
[test]
[input]
private
protected
all
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[test]
[input]
protected
public
private
HARVEST
[/input]
[output]
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test]
[input]
public
private
protected
all
HARVEST
[/input]
[output]
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Black Box Integer
[code-task title="Black Box Integer" taskId="oop-advanced-java-reflection-and-annotations-Black-Box-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-blackBoxInteger.zip) **pentru această problemă.**

Vreți să-l ajutați pe un prieten de-al dvs. care este încă la cursul OOP Basics.

El a făcut o clasă cu toți membrii privați.

Sarcinile dvs. sunt să **instanțiați** un obiect din clasa sa (toate cu o valoare inițială 0) și apoi **să invocați** diferitele metode pe care le are.

Nu ar trebui **să** schimbați nimic din clasă.

Clasa în sine se numește **BlackBoxInt**. Este un pachet pentru primitivul **int**.

Metodele pe care le are sunt:

```java
private void add (int addend) {
    this.innerValue += addend;
}

private void subtract(int subtrahend) {
    this.innerValue -= subtrahend;
}

private void multiply(int multiplier) {
    this.innerValue *= multiplier;
}

private void divide (int divider) {
    this.innerValue /= divider;
}

private void leftShift(int shifter) {
    this.innerValue <= shifter;
}

private void rightShift (int shifter) {
    this.innerValue >>= shifter;
}
```
## Intrare
Intrarea va consta din linii în formă:

"\{**command name**\}_\{**value**\}"

Exemplu: **add_115**

Intrarea va fi întotdeauna aplicabilă și în formatul descris, deci nu este nevoie să o verificați în mod explicit.

Nu mai primiți intrări când întâlniți comanda: **END**.

## Ieșire

Fiecare comandă (cu excepția celei **END**) ar trebui să imprime valoarea curentă a **Valorii interioare** a obiectului **BlackBoxInt** pe care l-ați instanțiat.

Scopul nu este de a suprascrie metoda **toString** din clasă.

Trebuie să obțineți fiecare valoare din câmpul **private**.

# Exemplu
| **Input** | **Output** |
| --- | --- |
| add_999999 | 999999 |
| subtract_19 | 999980 |
| divide_4 | 249995 |
| multiply_2 | 499990 |
| rightShift_1 | 249995 |
| leftShift_3 | 1999960 |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
add_999999
subtract_19
divide_4
multiply_2
rightShift_1
leftShift_3
END
[/input]
[output]
999999
999980
249995
499990
249995
1999960
[/output]
[/test]
[test]
[input]
add_200
divide_5
leftShift_4
END
[/input]
[output]
200
40
640
[/output]
[/test]
[test]
[input]
multiply_1000
subtract_5
rightShift_3
END
[/input]
[output]
0
-5
-1
[/output]
[/test]
[test]
[input]
subtract_3000
add_556677
add_889915
rightShift_3
leftShift_3
END
[/input]
[output]
-3000
553677
1443592
180449
1443592
[/output]
[/test]
[test]
[input]
add_336688
multiply_55
multiply_2
divide_6
subtract_536489
rightShift_15
END
[/input]
[output]
336688
18517840
37035680
6172613
5636124
172
[/output]
[/test]
[test]
[input]
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
multiply_2
multiply_2
multiply_2
multiply_2
END
[/input]
[output]
15
30
45
60
75
90
105
120
135
150
135
120
105
90
75
60
45
30
15
0
0
0
0
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: BarracksWars - A New Factory
[code-task title="BarracksWars - A New Factory" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-A-New-Factory" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-barracksWars.zip) **pentru această ptoblemă.**

Vi se oferă un mic proiect bazat pe consolă numit "Barracks".

Proiectul are două funcționalități:
- adăugarea de noi unități în depozitul său
- tipărirea unui raport cu statistici despre unitățile aflate în prezent în depozit

Mai întâi, haideți să trecem peste sarcina inițială înainte de crearea acestui proiect.

## Intrare 
Intrarea constă din mai multe comenzi, fiecare pe o linie separată.

Comenzile posibile sunt:
- **add** \{**Archer/Swordsman/Pikeman/**\{**…**\}\}  - adaugă o unitate în depozit
- **report** - tipărește o statistică lexicologică ordonată despre unitățile din depozit
- **fight** - încheie aportul de intrare

## Ieșire 
Fiecare comandă, cu excepția **fight**, ar trebui să producă rezultate ieșire.
- **add** ar trebui să imprime:

     „\{**Archer/Swordsman/Pikeman/**\{**…**\}\} **added!**”

- **report** ar trebui să tipărească toate informațiile din depozit în format:

     „\{**UnitType**\} -\> \{**UnitQuantity**\}”, sortate după UnitType

## Limitări
- Introducerea va consta din cel mult **1000** linii
- Comanda **report** nu va fi dată niciodată înainte să fie furnizată o comandă validă **add**

## Sarcina dvs.
Trebuie să **studiați codul proiectului și să aflați cum funcționează.**

Există părți ale acestuia care nu sunt implementate (marcate cu „TODO”).

Trebuie să implementați funcționalitatea metodei **createUnit** din clasa **UnitFactoryImpl** astfel încât să înregistreze o unitate pe baza tipului de unitate primit ca parametru.

Implementați-o în așa fel încât oricând adăugați o unitate nouă, aceasta poate fi creată fără a fi nevoie să schimbați nimic din clasa **UnitFactoryImpl** (sugestie - utilizați reflecția).

Puteți utiliza abordarea cunoscută sub numele de: **Simple Factory**.

Adăugați două clase de unități noi (vor exista teste care le necesită) - **Horseman** cu 50 de sănătate și 10 atac și **Gunner** cu 20 de sănătate și 20 de atac.

Dacă faceți totul corect, ar trebui să adăugați cod numai la pachetele **factories** și **units**.

# Exemple

## Example 1
| **Input** | **Output** |
| --- | --- |
| add Swordsman | Swordsman added! |
| add Archer | Archer added! |
| add Pikeman | Pikeman added! |
| report | Archer -> 1 |
| add Pikeman | Pikeman -> 1 |
| add Pikeman | Swordsman -> 1 |
| report | Pikeman added! |
| fight | Pikeman added! |
|  | Archer -> 1 |
|  | Pikeman -> 3 |
|  | Swordsman -> 1 |
|  |  |


## Example 2
| **Input** | **Output** |
| --- | --- |
| add Pikeman | Pikeman added! |
| add Pikeman | Pikeman added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| add Archer | Archer added! |
| add Gunner | Gunner added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| report | Archer -> 1 |
| fight | Gunner -> 3 |
|  | Horseman -> 2 |
|  | Pikeman -> 2 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
add Swordsman
add Archer
add Pikeman
report
add Pikeman
add Pikeman
report
fight
[/input]
[output]
Swordsman added!
Archer added!
Pikeman added!
Archer -\> 1
Pikeman -\> 1
Swordsman -\> 1
Pikeman added!
Pikeman added!
Archer -\> 1
Pikeman -\> 3
Swordsman -\> 1
[/output]
[/test]
[test open]
[input]
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
fight
[/input]
[output]
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
[/output]
[/test]
[test]
[input]
add Horseman
report
add Horseman
report
add Pikeman
report
add Archer
add Archer
add Archer
report
fight
[/input]
[output]
Horseman added!
Horseman -\> 1
Horseman added!
Horseman -\> 2
Pikeman added!
Horseman -\> 2
Pikeman -\> 1
Archer added!
Archer added!
Archer added!
Archer -\> 3
Horseman -\> 2
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Gunner
report
add Pikeman
add Gunner
add Pikeman
report
add Gunner
add Pikeman
add Gunner
add Pikeman
report
add Horseman
add Horseman
add Horseman
add Horseman
report
fight
[/input]
[output]
Gunner added!
Gunner -\> 1
Pikeman added!
Gunner added!
Pikeman added!
Gunner -\> 2
Pikeman -\> 2
Gunner added!
Pikeman added!
Gunner added!
Pikeman added!
Gunner -\> 4
Pikeman -\> 4
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Gunner -\> 4
Horseman -\> 4
Pikeman -\> 4
[/output]
[/test]
[test]
[input]
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
report
fight
[/input]
[output]
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer -\> 5
Gunner -\> 5
Horseman -\> 5
Pikeman -\> 5
Swordsman -\> 5
[/output]
[/test]
[test]
[input]
add Swordsman
add Gunner
add Swordsman
report
add Swordsman
add Gunner
add Gunner
add Swordsman
add Swordsman
report
add Gunner
add Swordsman
add Swordsman
add Horseman
report
fight
[/input]
[output]
Swordsman added!
Gunner added!
Swordsman added!
Gunner -\> 1
Swordsman -\> 2
Swordsman added!
Gunner added!
Gunner added!
Swordsman added!
Swordsman added!
Gunner -\> 3
Swordsman -\> 5
Gunner added!
Swordsman added!
Swordsman added!
Horseman added!
Gunner -\> 4
Horseman -\> 1
Swordsman -\> 7
[/output]
[/test]
[test]
[input]
add Gunner
add Swordsman
add Horseman
report
add Archer
add Archer
add Archer
report
add Gunner
add Swordsman
add Horseman
report
add Archer
add Archer
add Archer
report
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
report
fight
[/input]
[output]
Gunner added!
Swordsman added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Swordsman -\> 1
Archer added!
Archer added!
Archer added!
Archer -\> 3
Gunner -\> 1
Horseman -\> 1
Swordsman -\> 1
Gunner added!
Swordsman added!
Horseman added!
Archer -\> 3
Gunner -\> 2
Horseman -\> 2
Swordsman -\> 2
Archer added!
Archer added!
Archer added!
Archer -\> 6
Gunner -\> 2
Horseman -\> 2
Swordsman -\> 2
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Archer -\> 6
Gunner -\> 2
Horseman -\> 10
Swordsman -\> 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: BarracksWars - The Commands Strike Back
[code-task title="BarracksWars - The Commands Strike Back" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-The-Commands-Strike-Back" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere

După cum ați fi observat, comenzile din proiect din **Problema 3** sunt implementate într-un caz de comutare cu apeluri de metodă din clasa **Engine**.

Deși această abordare funcționează, este eronată, deoarece trebuie să adăugați un caz nou pentru fiecare comandă.

În unele proiecte, este posibil să nu aveți acces la engine, iar acest lucru nu ar funcționa.

Dacă acest proiect a fost externalizat, firma de externalizare ar putea să nu aibă acces la engine.

Faceți-o astfel încât, ori de câte ori vor să adauge o comandă nouă, nu vor trebui să schimbe nimic în **Engine**.

Pentru aceasta, folosiți [Modelul de comandă](https://www.baeldung.com/java-command-pattern).

Iată cum ar trebui să arate comanda de bază (abstractă):

```java
public abstract class Command implements Executable {
    private String[] data;
    private Repository repository;
    private UnitFactory unitFactory;

    protected Command (String[] data,
                       Repository repository,
                       UnitFactory unitFactory) {
        this.data = data;
        this.repository repository;
        this.unitFactory = unitFactory;
    }

    protected Repository getRepository () {
        return repository;
    }

    protected UnitFactory getunitFactory () {
        return unitFactory;
    }

    protected String[] getData() {
        return data;
    }
}
```
Observați cum toate comenzile care îl extind vor avea atât un **Repository** cât și un **UnitFactory**, deși nu toate au nevoie de acestea.

Putem permite acest lucru, deoarece pentru ca reflecția să funcționeze, avem nevoie ca toți constructorii să accepte aceiași parametri.

Vom vedea cum să rezolvăm această problemă în **Problema 5.**

După ce ați implementat modelul, adăugați o nouă comandă.

Ar trebui să aibă următoarea sintaxă:

- **retire**\{**UnitType**\} - Tot ce face este **eliminați** o unitate din tipul furnizat din depozit
     - dacă nu există astfel de unități în prezent în depozit, tipăriți: „**No such units in repository.**”
     - dacă există o astfel de unitate, tipăriți: "\{**UnitType**\} **retired!**"

Pentru a implementa această comandă, va trebui, de asemenea, să implementați o metodă corespunzătoare în **UnitRepository.**

Dacă faceți totul corect pentru această problemă, ar trebui să scrieți/refactorizați codul numai în pachetele **core** și **data**.

# Exemplu
| **Input** | **Output** |
| --- | --- |
| retire Archer | No such units in repository. |
| add Pikeman | Pikeman added! |
| add Pikeman | Pikeman added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| add Archer | Archer added! |
| add Gunner | Gunner added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| report | Archer -> 1 |
| retire Gunner | Gunner -> 3 |
| retire Archer | Horseman -> 2 |
| report | Pikeman -> 2 |
| retire Swordsman | Gunner retired! |
| retire Archer | Archer retired! |
| fight | Archer -> 0 |
|  | Gunner -> 2 |
|  | Horseman -> 2 |
|  | Pikeman -> 2 |
|  | No such units in repository. |
|  | No such units in repository. |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
retire Archer
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
retire Gunner
retire Archer
report
retire Swordsman
retire Archer
fight
[/input]
[output]
No such units in repository.
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
Gunner retired!
Archer retired!
Archer -\> 0
Gunner -\> 2
Horseman -\> 2
Pikeman -\> 2
No such units in repository.
No such units in repository.
[/output]
[/test]
[test]
[input]
retire Archer
retire Swordsman
retire Horseman
add Gunner
add Archer
retire Archer
retire Gunner
report
fight
[/input]
[output]
No such units in repository.
No such units in repository.
No such units in repository.
Gunner added!
Archer added!
Archer retired!
Gunner retired!
Archer -\> 0
Gunner -\> 0
[/output]
[/test]
[test]
[input]
add Pikeman
add Gunner
add Horseman
report
add Gunner
add Pikeman
retire Pikeman
retire Gunner
report
fight
[/input]
[output]
Pikeman added!
Gunner added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
Gunner added!
Pikeman added!
Pikeman retired!
Gunner retired!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Horseman
add Horseman
add Horseman
add Horseman
report
retire Gunner
retire Pikeman
retire Horseman
report
add Horseman
add Archer
add Horseman
add Archer
add Horseman
add Archer
report
retire Archer
fight
[/input]
[output]
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman -\> 4
No such units in repository.
No such units in repository.
Horseman retired!
Horseman -\> 3
Horseman added!
Archer added!
Horseman added!
Archer added!
Horseman added!
Archer added!
Archer -\> 3
Horseman -\> 6
Archer retired!
[/output]
[/test]
[test]
[input]
add Swordsman
add Swordsman
retire Swordsman
retire Archer
add Archer
retire Archer
report
add Horseman
add Horseman
add Horseman
retire Swordsman
retire Horseman
add Swordsman
retire Swordsman
report
fight
[/input]
[output]
Swordsman added!
Swordsman added!
Swordsman retired!
No such units in repository.
Archer added!
Archer retired!
Archer -\> 0
Swordsman -\> 1
Horseman added!
Horseman added!
Horseman added!
Swordsman retired!
Horseman retired!
Swordsman added!
Swordsman retired!
Archer -\> 0
Horseman -\> 2
Swordsman -\> 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: BarracksWars - Return of the Dependencies
[code-task title="BarracksWars - Return of the Dependencies" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-Return-of-the-Dependencies" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere
În partea finală a acestei trilogii de probleme epice, vom rezolva problema în care toate comenzile primesc toate clasele de utilități ca parametri în constructorii lor.

Putem realiza acest lucru folosind o abordare numită **container de injecție de dependență**.

Această abordare este utilizată în multe cadre, cum ar fi **Spring** - de exemplu.

Vom face o mică schimbare în această abordare.

Eliminați toate câmpurile din comanda abstractă, cu excepția **datelor**.

În schimb, puneți câmpurile de care are nevoie fiecare comandă în clasa concretă.

Creați o adnotare numită **Inject** și faceți-o utilizabilă numai pe câmpuri.

Puneți adnotarea peste câmpurile pe care trebuie să le setăm prin reflecție.

Odată ce ați pregătit acest lucru, adăugați codul de reflecție necesar în **Interpretul de comandă** (pe care ar fi trebuit să îl refactorați din motor în **Problema 4**).

Utilizați testele de la problema 4 pentru a testa soluția.


[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
retire Archer
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
retire Gunner
retire Archer
report
retire Swordsman
retire Archer
fight
[/input]
[output]
No such units in repository.
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
Gunner retired!
Archer retired!
Archer -\> 0
Gunner -\> 2
Horseman -\> 2
Pikeman -\> 2
No such units in repository.
No such units in repository.
[/output]
[/test]
[test]
[input]
retire Archer
retire Swordsman
retire Horseman
add Gunner
add Archer
retire Archer
retire Gunner
report
fight
[/input]
[output]
No such units in repository.
No such units in repository.
No such units in repository.
Gunner added!
Archer added!
Archer retired!
Gunner retired!
Archer -\> 0
Gunner -\> 0
[/output]
[/test]
[test]
[input]
add Pikeman
add Gunner
add Horseman
report
add Gunner
add Pikeman
retire Pikeman
retire Gunner
report
fight
[/input]
[output]
Pikeman added!
Gunner added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
Gunner added!
Pikeman added!
Pikeman retired!
Gunner retired!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Horseman
add Horseman
add Horseman
add Horseman
report
retire Gunner
retire Pikeman
retire Horseman
report
add Horseman
add Archer
add Horseman
add Archer
add Horseman
add Archer
report
retire Archer
fight
[/input]
[output]
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman -\> 4
No such units in repository.
No such units in repository.
Horseman retired!
Horseman -\> 3
Horseman added!
Archer added!
Horseman added!
Archer added!
Horseman added!
Archer added!
Archer -\> 3
Horseman -\> 6
Archer retired!
[/output]
[/test]
[test]
[input]
add Swordsman
add Swordsman
retire Swordsman
retire Archer
add Archer
retire Archer
report
add Horseman
add Horseman
add Horseman
retire Swordsman
retire Horseman
add Swordsman
retire Swordsman
report
fight
[/input]
[output]
Swordsman added!
Swordsman added!
Swordsman retired!
No such units in repository.
Archer added!
Archer retired!
Archer -\> 0
Swordsman -\> 1
Horseman added!
Horseman added!
Horseman added!
Swordsman retired!
Horseman retired!
Swordsman added!
Swordsman retired!
Archer -\> 0
Horseman -\> 2
Swordsman -\> 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
