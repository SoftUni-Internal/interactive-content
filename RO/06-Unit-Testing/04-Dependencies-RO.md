[slide hideTitle]

# Dependențe

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-35-36-coupling-and-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Majoritatea componentelor depind de alte componente pentru a exista.

În loc să creăm componente care sunt asociate îndeaproape, putem utiliza **injecția de dependență** pentru a îmbunătăți **separarea preocupărilor (separation of concerns)**. 

**Injecția de dependență** este tehnica de **decuplare a componentelor** prin furnizarea dependențelor acestora din altă parte.

Pentru a întelege mai bine acest concept, să observăm acest cod simplu:

``` java
public class Bank {​
  private AccountManager accountManager;​ 
// Avem o implementare concretă care cuplează clasele noastre
  public Bank() {​
    // Bank depinde de AccountManager
    this.accountManager = new AccountManager();​  
  }​

  public AccountInfo getInfo(String id) { … }​
}
```

În această clasă, `Bank` depinde de `AccountManager`.

Dacă dependența introduce **erori** din exterior în testul nostru, acestea vor fi mai greu de detectat.

De aceea utilizarea **Principiului de Inversiune a Dependenței** în testele noastre este o bună practică.

[/slide]

[slide hideTitle]

# Injecția de Dependență

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-37-dependency-injection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când folosim **abstractizarea** și **injecția de dependență**, testarea codului nostru devine mai puțin complicată.

Exemplele următoare ilustrează acest concept:

[image assetsSrc="Unit-Testing-Example(9).png" /]

```java
interface IAccountManager { ​
  Account getAccount();​
}​

public class Bank {​
  private IAccountManager accountManager;​

  public Bank(IAccountManager accountManager) {​
    this.accountManager = accountManager;​
  }
}
```

Deoarece clasa noastră nu mai este dependentă de clasa concretă `AccountManager`, ci de o interfață, putem crea un obiect de tip mock.

Acest lucru va asigura faptul că nu importăm erori din exterior.

```java
@Test​

public void testGetInfoById() {​
  // Arrange​
  AccountManager manager = new AccountManager() {​  
    // Anonymous class / Fake Object
    public Account getAccount(String id) { … } ​    
    // Fake implementation with fixed behavior
  }​

  Bank bank = new Bank(manager);​

  // Assert… 
  AccountInfo info = bank.getInfo(ID);​
}
```

[/slide]

[slide hideTitle]

# Izolarea Comportamentelor Testelor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-38-goal-isolating-test-behavior-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectivul principal este să **fixăm** toate **părțile dinamice**.

Acest lucru ne ajută să facem codul nostru mai stabil și decuplat, mărind eficiența testelor noastre. 

[/slide]

[slide hideTitle]

# Implementări False

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-44-fake-implementations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectele și clasele false au o implementare **funcțională**, dar **simplificată**.

Acestea **nu sunt la fel** cu cele de producție.

Un exemplu bun al acestui concept este lucrul cu implementarea unui **depozit (repository)**.

Depozitul nostru va folosi o colecție pentru **a stoca date**, dar nu va interacționa cu o **bază de date**.

Acest lucru ne permite să testăm mai ușor, fără a demara o bază de date și a efectua solicitări care necesită mult timp.

Pentru a ilustra acest lucru, să observăm acest exemplu:

``` java
public class FakeRepository implements AccountRepository {
       
       // Our fake database
       Map<User, Account> accounts = new HashMap<>();
       
       public FakeRepository() {
              this.accounts.put(new User("Peter@test.mail"), new UserAccount());
              this.accounts.put(new User("George@test.mail"), new AdminAccount());
       }
       
       String getPasswordHash(User user) {
              return accounts.get(user).getPasswordHash();
       }
}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Fake Axe and Dummy

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-39-fake-axe-and-dummy-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# Descriere
Testați dacă eroul câștigă XP atunci când moare o țintă.

Pentru a face acest lucru, trebuie să:
- Vă asigurați că clasa `Hero` poate fi testată (folosiți injecția de dependență)
- Introduceți interfețe pentru `Axe` și `Dummy`:
  - Interfața: Weapon 
  - Interfața: Target 

Creați interfețele false `Weapon` și `Dummy` pentru test.

## Sfaturi

Creați o interfață Weapon:
```java
public interface Weapon{

  void attack(Target target);

  int getAttackPoints();

  int getDurabilityPoints();
}
```

Creați o interfață `Target`:
```java
public interface Target{

  void takeAttack(int attackPoints);

  int getHealth();

  int giveExperience();

  boolean isDead();
}
```

Implementați interfețele:

```java
public class Axe implements Weapon {

  public void Attack(Target target){
    if (this.durabilityPoints <= 0){
      throw new IllegalStateException("Axe is broken.");
    }

    target.takeAttack(this.attackPoints);
    this.durabilityPoints -= 1;
  }
}
```

Modificați ambele clase `Axe` și `Dummy`.

Folosiți **injecția de dependență** pentru clasa `Hero`.

```java
public Hero(String name, Weapon weapon){
  this.name = name;
  this.experience = 0;
  this.weapon = weapon;
}
```

Creați o clasă `HeroTests` și testați obținerea de XP cu ajutorul falsificării claselor `Weapon` și `Target`.

```java
@Test
public void attackGainsExperienceIfTargetIsDead(){
  Target fakeTarget = new Target(){
    public void takeAttack(int attackPoints) { }
    public int getHealth() { return 0; }
    public int giveExperience() { return TARGET_XP; }
    public boolean isDead() { return true; }
  };

  Weapon fakeWeapon = new Weapon() {
    public void attack(Target target) { }
    public int getAttackPoints() { return 10; }
    public int getDurabilityPoints() { return 0; }
  };

  Hero hero = new Hero(HERO_NAME, fakeWeapon);
  hero.attack(fakeTarget);
  Assert.assertEquals("Wrong experience", TARGET_XP, hero.getExperience());
}
```
[/slide]


[slide hideTitle]

# Mocking

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-45-mocking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Tehnica mocking pentru obiecte** simulează comportamentul obiectelor reale.

Un **exemplu** poate fi o funcție care apelează un serviciu de trimitere a unor e-mail-uri.

Este lipsit de sens și ineficient să trimitem un e-mail de fiecare dată când rulăm un test.

Cel mai simplu lucru este să verificăm dacă serviciul nostru de **trimitere** a fost apelat.

Un caz similar este prezentat în exemplul următor:

``` java
@Test
public void testAlarmClockShouldRingInTheMorning() {
  Time time = new Time();
  AlarmClock clock = new AlarmClock(time);
  if (time.isMorning()) {
    // The test will pass only in the morning
    Assert.assertTrue(clock.isRinging());
  }
}
```

[/slide]

[slide hideTitle]

# Mockito

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-46-47-mockito-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mockito** este un cadru pentru obiecte de tip mock. 

Puteți învăța mai multe [vizitând site-ul oficial](https://site.mockito.org/).

Putem să obținem dependența noastră **Mockito** de aici.

Copiați următorul cod în fișierul `pom.xml`:

``` js
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>3.0.0</version>
    <scope>test</scope>
</dependency>
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Mocking

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/RO/Java-OOP-Advanced-Unit-Testing-48-mocking-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Descriere

Includeți **Mockito** în dependențele proiectului, iar apoi:
- Simulați falsuri din problema precedentă
- Implementați **Hero Inventory**, care să conțină armele neechipate
  - o metodă - `Iterable<Weapon> getInventory()`
- Implementați oferirea unei arme aleatorie de către țintă atunci când aceasta moare
  - un câmp - `private List<Weapon> possibleLoot`
- Testați acțiunea eroului de a omorî o țintă și de a primi comoara în inventarul său

## Sfaturi
Localizați `pom.xml`:
[image assetsSrc="Unit-Testing-Example(8).png" /]


Adăugați o dependență **Mockito**:

``` js
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-android</artifactId>
  <version>2.7.19</version>
  <type>pom</type>
</dependency>
```

Mergeți la `HeroTests` și refactorizați codul folosind **Mockito**:

```java
@Test
public void attackGainsExperienceIfTargetIsDead(){
  Weapon weaponMock = Mockito.mock(Weapon.class);
  Target targetMock = Mockito.mock(Target.classTarget;
  Mockito.when(targetMock.isDead()).thenReturn(true);
  Mockito.when(targetMock.giveExperience()).thenReturn(TARGET_XP);

  Hero hero = new Hero(Hero_Name, weaponMock);

  hero.attack(targetMock);

  Assert.assertEquals("Wrong experience", TARGET_XP, hero.getExperience());
}
```

- Implementați inventarul eroului și oferirea unei comori de către `Target`

- Testați dacă `Hero` primește comoara atunci când omoară `Target`
[/slide]
