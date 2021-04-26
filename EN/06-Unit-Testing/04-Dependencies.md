[slide hideTitle]

# Dependencies

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-35-36-coupling-and-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Most components rely on other components to exist.

Instead of creating components that are close-coupled to each other, we can use **dependency injection** to improve the **separation of concerns**. 

**Dependency injection** is the technique of **decoupling components** by providing their dependencies from elsewhere.

To better understand the concept, let us have a look at this simple code:

``` java
public class Bank {​
  private AccountManager accountManager;​ 
// We have a concrete implementation which couples our classes
  public Bank() {​
    // Bank depends on AccountManager
    this.accountManager = new AccountManager();​  
  }​

  public AccountInfo getInfo(String id) { … }​
}
```

In this class, our `Bank` depends on `AccountManager`.

If the dependency introduces **bugs** in our test from the outside, they will be harder to detect.

This is why it is a good practice to use the **Dependency Inversion Principle** in our tests.

[/slide]

[slide hideTitle]

# Dependency Injection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-37-dependency-injection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we use **abstraction** and **dependency injection**,  testing our code becomes less complicated.

The following examples illustrate this concept:

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

As our class is no longer dependent on the `AccountManager` concrete class, but on an interface, we can create a mock object.

That will ensure that we do not import bugs from the outside.

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

# Isolating Test Behaviour

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-38-goal-isolating-test-behavior-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The main objective is to **fixate** all **moving parts**.

That helps make our code more stable and decoupled, increasing the efficiency of our tests. 

[/slide]

[slide hideTitle]

# Fake Implementations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-44-fake-implementations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fake classes and objects have a **working**, but **simplified** implementation.

They are **not the same** as the production ones.

A great example of this is working with an implementation of a **repository**.

Our repository will use a collection to **store data**, but it will not engage a **database**.

That will allow us to test easier, without starting up a database and performing time-consuming requests.

To illustrate this, let us see an example:

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

# Problem with Solution: Fake Axe and Dummy

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-39-40-41-42-43-problem-and-solution-fake-axe-and-dummy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# Description
Test if the hero gains XP when a target dies.

To do this, you need to:
- Make the `Hero` class testable (use dependency injection)
- Introduce interfaces for `Axe` and `Dummy`:
  - interface: Weapon 
  - interface: Target 

Create а fake `Weapon` and а fake `Dummy` for the test.

## Hints

Create a Weapon interface:
```java
public interface Weapon{

  void attack(Target target);

  int getAttackPoints();

  int getDurabilityPoints();
}
```

Create a `Target` interface:
```java
public interface Target{

  void takeAttack(int attackPoints);

  int getHealth();

  int giveExperience();

  boolean isDead();
}
```

Implement the interfaces:

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

Modify both the `Axe` and `Dummy` classes.

Use **dependency injection** for the `Hero` class.

```java
public Hero(String name, Weapon weapon){
  this.name = name;
  this.experience = 0;
  this.weapon = weapon;
}
```

Create a `HeroTests` class and test gaining XP by faking the `Weapon` and `Target` classes.

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-45-mocking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mocking objects** simulates the behavior of real objects.

An **example** could be a function that calls an e-mail sending service.

It is pointless and ineffective to send an e-mail every time we run a test.

The easiest thing is to verify that our **sending** service was called.

A similar case is presented in the following example:

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-46-47-mockito-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mockito** is a framework for mocking objects. 

You can learn more by [visiting the official site](https://site.mockito.org/).

We can obtain our **Mockito** dependency from here.

Paste the following code into the `pom.xml` file:

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

# Problem with Solution: Mocking

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-48-49-50-problem-and-solution-mocking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Description

Include **Mockito** in the project dependencies, then:
- Mock fakes from the previous problem
- Implement a **Hero Inventory**, holding unequipped weapons
  - a method - `Iterable<Weapon> getInventory()`
- Implement a Target propping a random weapon upon death
  - a field - `private List<Weapon> possibleLoot`
- Test the Hero killing a target and getting loot in his inventory

## Hints
Locate `pom.xml`:
[image assetsSrc="Unit-Testing-Example(8).png" /]


Add the **Mockito** dependency:

``` js
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-android</artifactId>
  <version>2.7.19</version>
  <type>pom</type>
</dependency>
```

Go to `HeroTests` and refactor the code, using **Mockito**:

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

- Implement a hero inventory and a `Target` dropping loot

- Test whether the `Hero` gets loot upon killing a `Target`
[/slide]
