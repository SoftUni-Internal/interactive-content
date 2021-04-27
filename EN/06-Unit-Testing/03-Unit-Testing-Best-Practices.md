# Unit Testing Best Practices

[slide hideTitle]

# Assertions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-25-26-27-assertions-and-assertion-messages-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We will take at some approaches - considered "best practices" in Unit Testing.

The `assertEquals(expected, actual)` method gives us more details when working with values, compared to `assertTrue()`.

In this example, we can observe the following code when we use `assertTrue()` and the output of it:
``` java
Assert.assertTrue(account.getBalance() == 50);
```

The expected **output** is: 

```
java.lang.AssertionError <3 internal calls>
```

Compared to the output when we use `assertEquals()`:
``` java
Assert.assertEquals(50, account.getBalance());
```

**Output:**

```
java.lang.AssertionError:
Expected :50
Actual :35
<Click to see difference>
```


[/slide]

[slide hideTitle]

# Magic Numbers

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-28-magic-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Another good practice is to avoid using "**magic numbers**".

We should use "**constants**" instead.

Let us take a look at this simple example:

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

It is better to declare an `int` variable outside of the test and use it as a constant.

By doing so, if we need to change the `amount` variable, we can do so only **outside** of the test, without worrying about the logic inside.

[/slide]

[slide hideTitle]

# The "Before" Annotation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-29-before-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we write tests, it is common to find that several tests need a similar object to be created before they can run.

We can use the `@Before` annotation to utilize this behavior.

A method, designated with `@Before` will be executed each time before running the next test.

This will ensure consistent and clean data for each test, making our tests more reliable.

Here is a simple example:

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

The "initialize" method will run before each test.

[/slide]

[slide hideTitle]

# Naming Test Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-30-naming-tests-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Test naming is crucial, especially for long-term projects.

There are multiple **recommendations** regarding test names:

- Test names should use **business domain terminology**

- Test names should be **descriptive** and **readable**

- Our tests should regard a **specific requirement**

- Some test names could include the **name** of the tested **method** or **class**

- We must use **clear and descriptive test names**

- **Long test names** are good to use, if that helps explain the test purpose

Let us see some examples of **bad** test naming:

```
increaseDMG {}
test1() {}
testTransfer()
idontrememberwhatiamtesting {}
```

Here are some **proper** test name examples:

```
depositAddsMoneyToBalance() {}
depositNegativeShouldNotAddMoney() {}
transferSubtractsFromSourceAddsToDestAccount() {}
```

[/slide]

[slide hideTitle]

# Problem with Solution: Refactor Tests

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-31-32-33-problem-and-solution-refactor-tests-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Description
Refactor the tests for the **Axe** and **Dummy** classes

Make sure that:
- **Names** of test methods are **descriptive**
- Use **appropriate assertions** ("assert equals" vs. "assert true")
- Use **assertion messages**
- There are **no magic numbers**
- There is **no code duplication** ("Do Not Repeat Yourself")

## Solution

Extract constants and private fields for the `Axe` class:
```java
private static final int AXE_ATTACK = 10;
private static final int AXE_DURABILITY = 1;
private static final int DUMMY_HEALTH = 20;
private static final int DUMMY_XP = 10;
private static final int EXPECTED_DURABILITY = AXE_DURABILITY - 1;

private Axe axe;
private Dummy dummy;
```

Create a method that runs before each test:
```java
@Before
public void initializeTestObjects(){
  this.axe - new Axe(AXE_ATTACK, AXE_DURABILITY);
  this.dummy = new Dummy(DUMMY_HEALTH, DUMMY_XP);
}
```

Use constants and private fields, as well as assertion messages:
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

Follow the same logic for other test methods and the `TestDummy` class.


[/slide]
