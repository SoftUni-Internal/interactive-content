[slide hideTitle]

# Dependencies

It is important to understand that not many components live on their own without the reliance on other components.

Instead of creating a components, that are close-coupled to each other we can use **dependency injection** to improve the **separation of concerns**. 

Basically, dependency injection is a concept of giving a component all the things it needs from outside.

**Decoupling components** by providing their dependencies from outside, instead of creating them directly inside.

Lets have a look at this simple code to understand better the concept:

``` java
public class Bank {​
  private AccountManager accountManager;​ // We have a concrete implementation
                                         // which couples our classes
  public Bank() {​
    this.accountManager = new AccountManager();​  // Bank depends on AccountManager
  }​

  public AccountInfo getInfo(String id) { … }​
}
```

In this class our `Bank` depends on `AccountManager` and if the dependency brings **bugs** in our test from the outside it will be harder to detect, therefore it is always better to use **Dependency Inversion Principle** in our tests.

[/slide]

[slide hideTitle]

# Dependency Injection

When we use **abstraction** and **dependency injection** the testing of our code becomes easier,
observe the following graphic and code to understand the concept. 

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
As our class is no longer depended on the `AccountManager` concrete class but on an interface, we can create a fake object, which will ensure us that we will not bring bugs from the outside.

```java
@Test​

public void testGetInfoById() {​
  // Arrange​
  AccountManager manager = new AccountManager() {​  //Anonymous class / Fake Object
    public Account getAccount(String id) { … } ​    //Fake implementation with fixed behaviour
  }​

  Bank bank = new Bank(manager);​

  AccountInfo info = bank.getInfo(ID);​
  // Assert…  }
```

[/slide]

[slide hideTitle]

# Isolating Test Behaviour

The goal is to **fixate** all **moving parts**, making our code more stable and decoupled, increasing the efficency of our tests. 

[/slide]

[slide hideTitle]

# Fake implementation vs Mocking objects

Lets find the difference between **fakes** and **mocking** objects.

Fake class or objects have **working** but **simplified** implementation.

They are not the same as the production ones.

A very good example of this is working with implementation of Repository.

Our repository will use a collection to **store data**, but it will not engage any **database**.

This will allow us to test easier, without starting up a database and performing time consuming requests.

To illustrate this, lets see an example it:

``` java
public class FakeRepository implements AccountRepository {
       
       //Our fake database
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

# Problem: Fake Axe and Dummy

## Description
Test if hero gains XP when target dies.

To do this, you need to:
- Make Hero class testable (use Dependency Injection)
- Introduce Interfaces for Axe and Dummy
  - Interface Weapon 
  - Interface Target 

Create а fake Weapon and а fake Dummy for the test.

## Hints

Create Weapon interface
```java
public interface Weapon{

  void attack(Target target);

  int getAttackPoints();

  int getDurabilityPoints();
}
```

Create `Target` interface

```java
public interface Target{

  void takeAttack(int attackPoints);

  int getHealth();

  int giveExperience();

  boolean isDead();
}
```

Implement interfaces

```java
public class Axe implements Weapon{

  public void Attack(Target target){
    if (this.durabilityPoints <= 0){
      throw new IllegalStateException("Axe is broken.");
    }

    target.takeAttack(this.attackPoints);
    this.durabilityPoints -= 1;
  }
}
```

Modify both `Axe` and `Dummy` classes

Use **Dependency Injection** for `Hero` class

```java
public Hero(String name, Weapon weapon){
  this.name = name;
  this.experience = 0;
  this.weapon = weapon;
}
```

Create `HeroTests` class and test gaining XP functionality by faking `Weapon` and `Target` classes.

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

On the other hand **Mocking objects** simulate behavior of real objects.

An example could be the function that calls e-mail sending service.

It is pointless and ineffective to send e-mail everytime we run a test.

The easiest think we can do is to verify that our **sending** service was called.

Similar case is presented in the following example:

``` java
@Test
public void testAlarmClockShouldRingInTheMorning() {
  Time time = new Time();
  AlarmClock clock = new AlarmClock(time);
  if (time.isMorning()) // The test will pass only in the morning.
  {
    Assert.assertTrue(clock.isRinging());
  }
}
```

[/slide]

[slide hideTitle]

# Mockito

**Mockito** is a framework for mocking objects. [Mockito web site](https://site.mockito.org/)

We can obtain our **Mockito** dependency from here: 

Copy this in to pom.xml file:

```
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>3.0.0</version>
    <scope>test</scope>
</dependency>
```

[/slide]

[slide hideTitle]

# Problem: Mocking
Include **Mockito** in the project dependencies, then:
1.	Mock fakes from previous problem
2.	Implement **Hero Inventory**, holding unequipped weapons
  - method - `Iterable<Weapon> getInventory()`
3.	Implement Target giving random weapon upon death
  - field - `private List<Weapon> possibleLoot`
4.	Test Hero killing a target getting loot in his inventory

## Hints
Locate **pom.xml**
[image assetsSrc="Unit-Testing-Example(8).png" /]


Add **Mockito** dependency

```
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-android</artifactId>
  <version>2.7.19</version>
  <type>pom</type>
</dependency>
```

Go to `HeroTests` and refactor the code, making use of **Mockito**

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

- Implement hero inventory and `Target` dropping loot functionalities

- Test `Hero` getting loot upon killing a `Target`
[/slide]