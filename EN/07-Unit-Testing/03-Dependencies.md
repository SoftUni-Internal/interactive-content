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







[/slide]