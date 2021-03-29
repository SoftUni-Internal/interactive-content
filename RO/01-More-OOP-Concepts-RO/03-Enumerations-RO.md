# Enumerații

[slide hideTitle]

# Enumerații

**Enumerarea** reprezintă o valoare numerică dintr-un set fix ca text

Le putem folosi pentru a transmite **argumente** către **metode** fără a provoca confuz codului

- De exemplu:

  `enum Day {Mon, Tue, Wed, Thu, Fri, Sat, Sun}`

  `GetDailySchedule(0)` =>  `GetDailySchedule(Day.Mon)`

În mod implicit, **enumerările** încep de la 0

Fiecare valoare următoare este incrementată cu 1

## Enumerații personalizate

**Putem personaliza valorile enumerate**

Exemplu: Zilele din săptămână

```java
enum Day { 
  Mon(1),Tue(2),Wed(3),Thu(4),Fri(5),Sat(6),Sun(7);

  private int value;

  Day(int value) {
    this.value = value;
  }
}

System.out.println(Day.Sat); // Sat
```
Exemplu: tipuri de cafea

```java
enum CoffeeSize { 
  Small(100), Normal(150), Double(300);
  private int size;
  CoffeeSize(int size) {
    this.size = size;
  }
  public int getValue() { return this.size; }
}

System.out.println(CoffeeSize.Small.getValue()); // 100
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Hotel Reservation
[code-task title="Hotel Reservation" taskId="oop-basics-java-more-oop-concepts-lab-Hotel-Reservation" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Descriere

Creați o clasă "**PriceCalculator**" care calculează prețul total al unei vacanțe, având în vedere **prețul pe zi**, **numărul de zile**, **sezonul** și un **tip de reducere**. **Tipul de reducere** și **sezonul** ar trebui să fiу **enums**

Utilizați clasa din metoda dvs `main()` pentru a citi intrarea și a **imprima** pe consolă **prețul** întregii **vacanțe**.

Prețul pe zi va fi multiplicat în funcție de sezonul cu:
- **1** în timpul toamnei
- **2** în timpul primăverii
- **3** în timpul iernii
- **4** în timpul verii

Reducerea se aplică prețului total și este una dintre următoarele:
- 20% pentru clienții VIP - VIP
- 10% pentru clienți, care îl vizita pentru a doua oară - SecondVisit
- 0% dacă nu există reducere - Niciuna

## Intrare
Pe o **singură linie** veți primi toate **informațiile** despre **rezervarea** în formatul:

"\<**pricePerDay**\> \<**numberOfDays**\> \<**season**\> \<**discountType**\>", unde:

- Prețul pe zi va fi o zecimală valabilă în intervalul [0.01 ... 1000.00]
- Numărul de zile va fi un număr întreg valid în intervalul [1 ... 1000]
- Sezonul va fi unul dintre: **Spring, Summer, Autumn, Winter**
- Reducerea va fi una dintre: **VIP, SecondVisit, None**

## Ieșire

Pe o **singură linie**, imprimați **prețul total** al **vacanței**, rotunjit la 2 **cifre** după separatorul zecimal.


## Exemplu
| **Intrare**|**Ieșire**|
| --- | --- |
| 50.25 5 Summer VIP | 804.00 |
| 40 10 Autumn SecondVisit | 360.00 |
| 120.20 2 Winter None | 721.20 |


[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
50.25 5 Summer VIP
[/input]
[output]
804.00
[/output]
[/test]
[test open]
[input]
40 10 Autumn SecondVisit
[/input]
[output]
360.00
[/output]
[/test]
[test open]
[input]
120.20 2 Winter None
[/input]
[output]
721.20
[/output]
[/test]
[test]
[input]
120.20 2 Winter None
[/input]
[output]
721.20
[/output]
[/test]
[test]
[input]
0.01 1000 Summer VIP
[/input]
[output]
32.00
[/output]
[/test]
[test]
[input]
1000 1000 Summer None
[/input]
[output]
4000000.00
[/output]
[/test]
[test]
[input]
1000 50 Winter SecondVisit
[/input]
[output]
135000.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
