# Testarea Unitară

[slide hideTitle]

# Testarea Manuală

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-11-13-manual-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Testarea unitară este procesul de examinare a unor **fragmente/unități** separate ale aplicației noastre.

Să trecem în revistă principalele diferențe dintre testarea manuală și automată.

**Testarea manuală:**

- Testarea manuală nu este **structurată** și **repetabilă**

- Metodele de testare manuală nu pot **cuprinde** tot codul nostru

- Metodele de testare sunt complicate

Aici aveți un **exemplu**: 

```java
void testSum() {
  if (this.sum(1, 2) != 3) {
    throw new Exception("1 + 2 != 3");
}
```

Pentru a simplifica lucrurile, avem nevoie de o abordare **structurată** care:

- Permite **refactorizarea**

- Reduce **costul schimbării**

- Ne ajută să reducem numărul de **erori/defecte** din cod


[/slide]


[slide hideTitle]

# Testarea Automată

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-14-automated-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Testarea automată** cuprinde:

- **Teste unitare**
   - utilizate pentru a examina **o singură unitate logică** din codul nostru (metodă, clasă, etc.)

- **Teste de integrare**
   - testează un modul din aplicația noastră (plată, înregistrare, etc.)

- **Teste de sistem**
   - testarea sistemului nostru de la început până la sfârșit


[/slide]

[slide hideTitle]

# JUnit

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-15-16-junit-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JUnit este unul dintre cele mai populare **cadre** de testare unitară pentru Java.

Pentru a începe, trebuie să organizăm depozitul JUnit, iar după ce am **creat un proiect Maven**, trebuie să copiem acest acest cod în fișierul nostru `pom.xml`.

```
<project …>
…
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

[/slide]

[slide hideTitle]

# JUnit - Scrierea Testelor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-17-junit-writing-tests-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să creăm un **pachet** nou pentru testele noastre.

După aceea, putem crea prima noastră clasă care conține metodele testelor (ex. **CalculatorTests**).

Acum putem crea o metodă **public void**, adnotată cu `@Test`.

``` java
@Test
public void commandShouldMultiplyNumbers() {
  // logic...
}
```

[/slide]


[slide hideTitle]

# Modelul "3A"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-18-3A-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acesta este un model **indispensabil** în ceea ce privește crearea testelor .

Modelul AAA (**Arrange-Act-Assert**) a devenit modelul **standard** de testare în industria software.

Principiul acestui model este că toate testele trebuie să urmeze o stratificare prestabilită.

Să observăm acest exemplu simplu:

``` java
@Test
    public void testAddition() 
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.multiply(2, 4);

        // Assert
        assertEquals("multiply method returns a valid result", 8, result);
    }
```

În primul rând trebuie să organizăm **(аrrange)** toate condițiile pentru sistemul de testare.

Apoi efectuăm acțiunile **(аct)**, al căror scop este să producă un anumit rezultat.

La final, verificăm **(аssert)** dacă ieșirea așteptată se potrivește cu ieșirea generată.

[/slide]

[slide hideTitle]

# Excepții

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-19-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Este posibil ca unele metode să necesite **aruncarea unei excepții** (de exemplu: intrare non-validă) în codul nostru.

Putem de asemenea să testăm acest comportament:

``` java
@Test(expected = IllegalArgumentException.class) //Assert
public void multiplyingWordsShouldThrow() {
  // Arrange
  Calculator calculator = new Calculator();
  
  // Act
  calculator.multiply(a, b);
}
```

[/slide]

[slide hideTitle]

# Problemă: Create a Maven Project

## Descriere
Maven este un instrument de automatizare care se ocupă de dependențele proiectului vostru.

Asigurați-va că ați activat plugin-ul în IntelliJ \[**File** \-\> **Settings** \-\> **Plugins** \-\> **Maven Integration**\]

[image assetsSrc="Unit-Testing-Example(2).png" /]

Acum puteți crea un proiect Maven. 

[image assetsSrc="Unit-Testing-Example(3).png" /]

**GroupId** trebuie separat prin punct.

**ArtifactId** trebuie separat prin cratimă.

[image assetsSrc="Unit-Testing-Example(4).png" /]

Dacă totul este okay, ar trebui să vedeți următoarea structură de proiect.

[image assetsSrc="Unit-Testing-Example(5).png" /]

Copiați fișierele furnizate și plasați-le într-un pachet înăuntrul fișierului `src/main/java`.

[image assetsSrc="Unit-Testing-Example(6).png" /]

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Test Axe

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-20-test-axe-problem-and-solutionJava-OOP-Advanced-Unit-Testing-20-test-axe-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Aici este un link către** [resursele](https://videos.softuni.org/resources/java/java-oop-advanced/07.Java-OOP-Advanced-Unit-Testing-Lab-Resources.zip) **pentru această sarcină.**

## Descriere
În fișierul `test/java`, creați un pachet numit `rpg_tests`.

Creați o clasă numită `AxeTests`.

Creați teste pentru următoarele cazuri:
- Testați dacă arma își pierde din durabilitate după fiecare atac
- Testați atacul cu o armă stricată


## Soluție

Creați un pachet numit `rpg_tests` și înăuntrul lui plasați o clasă numită `AxeTests`.

[image assetsSrc="Unit-Testing-Example(7).png" /]

În cadrul clasei, creați primul vostru test:

```java
public class AxeTests{

  @Test
  public void weaponAttacksLosesDurability(){
    // Arrange

    // Act

    // Assert
  }
}
```

Organizați precondițiile:
```java
// Arrange
Axe axe = new Axe(10, 10);
Dummy dummy = new Dummy(10, 10);
```

Executați comportamentul testat:
```java
// Act
axe.attack(dummy);
```

Verificați postcondițiile:
```java
// Assert
Assert.assertEquals(9, age.getDurabilityPoints());
```

Creați a doua metodă text:
```java
@Test(expected = IllegalStateExcepiton.class) //Assert
public void brokenWeaponCantAttack(){
  // Arrange

  // Act

}
```

Organizați precondițiile și testați comportamentul:
```java
// Arrange
Axe axe - new Axe(10, 1);
Dummy dummy = new Dummy(20, 10);

// Act
axe.attack(dummy);
axe.attack(dummy);
```


[/slide]

[slide hideTitle]

# Problemă cu Soluție: Test Dummy

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-23-test-dummy-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Descriere
creați o clasă numită `DummyTests`.

Scrieți teste pentru următoarele cazuri:

- Manechinul pierde puncte de viață dacă este atacat
- Un manechin mort aruncă o excepție dacă este atacat
- Un manechin mort oferă XP
- Un manechin viu nu oferă XP

## Sfaturi
Urmăriți logica problemei precedente.

[/slide]
