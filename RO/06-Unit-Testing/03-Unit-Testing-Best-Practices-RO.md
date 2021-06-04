# Cele mai Bune Practici în Testarea Unitară 

[slide hideTitle]

# Aserțiuni

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-25-26-27-assertions-and-assertion-messages-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ne vom uita la câteva abordări - considerate "cele mai bune practici" în Testarea Unitară.

Metoda `assertEquals(expected, actual)` ne oferă mai multe detalii atunci când lucrăm cu valori, comparativ cu `assertTrue()`.

În acest exemplu, putem observa codul următor atunci când este utilizată metoda `assertTrue()` și ieșirea acestuia:
``` java
Assert.assertTrue(account.getBalance() == 50);
```

**Ieșirea** așteptată este: 

```
java.lang.AssertionError <3 internal calls>
```

Comparativ cu ieșirea rezultată atunci când utilizăm `assertEquals()`:
``` java
Assert.assertEquals(50, account.getBalance());
```

**Ieșire:**

```
java.lang.AssertionError:
Expected :50
Actual :35
<Click to see difference>
```


[/slide]

[slide hideTitle]

# Numere Magice

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-28-magic-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O altă practică bună este evitarea utilizării "**numerelor magice**".

Trebuie să folosim "**constante**" în locul acestora.

Să ne uităm la acest exemplu simplu:

``` java
private static final int AMOUNT = 100;
@Test
public void depositShouldAddMoney() {
  BankAccount account = new BankAccount();
  account.deposit(AMOUNT);
  Assert.assertEquals("Wrong balance",    
               AMOUNT, account.getBalance());
}
```
Este mai bine să declarăm o variabilă `int` în afara testului și să o folosim drept constantă.

Procedând astfel, dacă suntem nevoiți să schimbăm variabila `amount`, putem să facem asta doar **în afara** testului, fără să ne îngrijorăm în legătură cu logica care se află înăuntru.

[/slide]

[slide hideTitle]

# Adnotația "Before"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-29-before-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când scriem teste, este comun ca unele teste să aibă nevoie de crearea unui obiect similar înainte ca acestea să poată rula.

Putem folosi adnotația `@Before` pentru a utiliza acest comportament.

O metodă desemnată cu adnotația `@Before` va fi executată de fiecare dată înaintea rulării testului următor.

Acest lucru va asigura date consistente și clare pentru fiecare test, făcând testele noastre mai de încredere.

Acesta este un exemplu simplu:

``` java
 public class Example {
    HashMap empty;
    @Before
    public void initialize() {
        empty = new HashMap();
    }
    
    @Test public void size() {
      // ... test logic goes here
    }
    @Test public void remove() {
       // ... test logic
    }
```

Metoda "initialize" va rula înainte de fiecare test.

[/slide]

[slide hideTitle]

# Numirea Metodelor Testelor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-30-naming-tests-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Numirea este esențială, în special pentru proiecte de lungă durată.

Există mai multe **recomandări** în ceea ce privește numele testelor:

- Numele testelor trebuie să folosească **terminologie specifică domeniului**

- Numele testelor trebuie să fie **sugestive** și **ușor de citit**

- Testele noastre trebuie să ia în considerare o **cerință specifică**

- Unele nume de teste pot include **numele** **metodei** sau **clasei** testate

- Trebuie să folosim **nume de teste clare și descriptive**

- Se pot folosi **nume lungi de teste**, dacă acest lucru ajută la explicarea scopului testului

Să vedem câteva exemple de numire **nepotrivită** a testelor:

```
increaseDMG {}
test1() {}
testTransfer()
idontrememberwhatiamtesting {}
```

Acestea sunt câteva exemple de nume de teste **adecvate**:

```
depositAddsMoneyToBalance() {}
depositNegativeShouldNotAddMoney() {}
transferSubtractsFromSourceAddsToDestAccount() {}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Refactor Tests

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-31-refactor-tests-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Descriere
Refactorizați testele pentru clasele **Axe** și **Dummy**.

Asigurați-vă că:
- **Numele** metodelor testelor sunt **sugestive**
- Utilizați **aserțiuni adecvate** ("assert equals" vs. "assert true")
- Utilizați **mesaje de aserțiune**
- Nu există **numere magice**
- Nu există **o duplicare a codului** ("Nu Vă Repetați")

## Soluție

Extrageți constante și câmpuri private pentru clasa `Axe`:
```java
private static final int AXE_ATTACK = 10;
private static final int AXE_DURABILITY = 1;
private static final int DUMMY_HEALTH = 20;
private static final int DUMMY_XP = 10;
private static final int EXPECTED_DURABILITY = AXE_DURABILITY - 1;

private Axe axe;
private Dummy dummy;
```

Creați o metodă care rulează înainte de fiecare test:
```java
@Before
public void initializeTestObjects(){
  this.axe - new Axe(AXE_ATTACK, AXE_DURABILITY);
  this.dummy = new Dummy(DUMMY_HEALTH, DUMMY_XP);
}
```

Utilizați atât constante și câmpuri private, cât și mesaje de aserțiune:
```java
@Test
public void weaponAttackLosesDurability(){
  // Act
  this.axe.attack(this.dummy);

  // Assert
  Assert.assertEquals("Wrong Durability, "),
          EXPECTED_DURABILITY,
          this.axe.getDurabilityPoints());
}
```

Urmăriți aceeași logică pentru alte metode de test și pentru clasa `TestDummy`.


[/slide]
