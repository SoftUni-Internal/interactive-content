[slide]

# Dependencies

It is important to understand that not many components live on their own without reliance on other components.

Instead of creating a components, that are close-coupled to each other we can use **dependency injection** to improve the *separation of concerns*. 

You can read more detailed information about [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

Basically, dependency injection is a concept of giving a component all the thing its need from outside.

That means we can **decoupling components** by providing their dependencies from outside, instead of creating them directly inside.

Lets have a look at this simple code to understand better the concept:

``` java
interface AccountManager {  // we use interface
  Account getAccount();
}
public class Bank {
  private AccountManager accountManager; // this is independent from implementation
  public Bank(AccountManager accountManager) // here, we inject dependencies 
  {
    this.accountManager = accountManager;
  }
}
```

The goal here is to **fixate** all **moving parts**:

``` java
@Test
public void testGetInfoById() {
  // Arrange
  AccountManager manager = new AccountManager() // Annonymous class 
  {
    public Account getAccount(String id) {
       // fake interface implementation with fixed behavior
    } 
  }
  Bank bank = new Bank(manager);
  AccountInfo info = bank.getInfo(ID);
  // Assert…  }
```



[/slide]

[slide hideTitle]

# Problem: Fake Axe and Dummy

[/slide]


[slide]

# Fake implementation vs Mocking objects

Lets find the difference between **fakes** and **mocking** objects.

Fake class or objects have **working** but **simplified** implementation.

They are not the same as the production ones.

A very good example of this is working with implementation of Repository.

Our repository will use a collection to **store data**, but it won't engage any **database**.

This will allow us to test easier, without starting up a database and performing time consuming requests.

To illustrate this, lets see an example of that:

``` java
public class FakeRepository implements AccountRepository {
       
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


[/slide]