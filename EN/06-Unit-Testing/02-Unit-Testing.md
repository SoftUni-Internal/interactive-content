# Unit Testing

[slide hideTitle]

# Manual Testing

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-11-13-manual-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unit Testing is the process of examining separate **pieces/units** of our application.

Let us review the main differences between manual and automated testing.

**Manual testing:**

- Manual testing is not **structured** and **repeatable**

- Manual testing methods cannot **cover** all of our code

- The testing methods are complicated

Here is an **example**: 

```java
void testSum() {
  if (this.sum(1, 2) != 3) {
    throw new Exception("1 + 2 != 3");
}
```

To make things easier, we need a **structured** approach that:

- Allows **refactoring**

- Reduces the **cost of change**

- Help us to reduce the amount of **bugs/defects** in the code


[/slide]


[slide hideTitle]

# Automated Testing

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-14-automated-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Automated testing** contains:

- **Unit tests**
  - used to examine a **a single logical unit** in our code (method, class, etc.)

- **Integration tests**
  - tests a module in our application (payment, registration, etc.)

- **System tests**
  - end-to-end testing of our system


[/slide]

[slide hideTitle]

# JUnit

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-15-16-junit-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

JUnit is one of the most popular unit testing **frameworks** for Java.

To get started, we need to set up the JUnit repository, after **creating a Maven project**, we should copy and paste this code into our `pom.xml` file.

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

# JUnit - Writing Tests

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-17-junit-writing-tests-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us create a new **package** for our tests.

After that, we can create our first class containing test methods (e.g **CalculatorTests**).

We can now create a **public void** method, annotated with `@Test`.

``` java
@Test
public void commandShouldMultiplyNumbers() {
  // logic...
}
```

[/slide]


[slide hideTitle]

# The "3A" Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-18-3A-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is a **must-know** pattern when creating unit tests.

The AAA pattern (**Arrange-Act-Assert**) has become the **standard** testing pattern in the software industry.

The basis of this pattern is that all tests should follow a default layer.

Let us take a look at this simple example:

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

First we should **аrrange** all conditions for the testing system.

Then we take the actions **аct**, which aim to produce a certain result.

Finally, we check **аssert** if the expected output matches the generated output.

[/slide]

[slide hideTitle]

# Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-19-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Some methods, may need to **throw an exception** (for example: "invalid input") in our code.

We can also test this behavior:

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

# Problem: Create a Maven Project

## Description
Maven is a build automation tool that takes care of dependencies for your project. 

Make sure that you enabled the plugin in IntelliJ \[**File** \-\> **Settings** \-\> **Plugins** \-\> **Maven Integration**\]

[image assetsSrc="Unit-Testing-Example(2).png" /]

Now you can create a Maven project. 

[image assetsSrc="Unit-Testing-Example(3).png" /]

The **GroupId** must be separated using periods.

The **ArtifactId** must be separated using hyphens.

[image assetsSrc="Unit-Testing-Example(4).png" /]

If everything is okay, you should see the following project structure.

[image assetsSrc="Unit-Testing-Example(5).png" /]

Copy the files provided and place them in a package inside the `src/main/java` folder.

[image assetsSrc="Unit-Testing-Example(6).png" /]

[/slide]

[slide hideTitle]

# Problem with Solution: Test Axe

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-20-21-22-problem-and-solutiom-test-axe-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/07.Java-OOP-Advanced-Unit-Testing-Lab-Resources.zip) **for this task.**

## Description
In the `test/java` folder, create a package called `rpg_tests`.

Create an `AxeTests` class.

Create tests for the following cases:
- Test if the weapon loses durability after each attack
- Test attacking with a broken weapon


## Solution

Create the package `rpg_tests` and inside it place a class called `AxeTests`.

[image assetsSrc="Unit-Testing-Example(7).png" /]

In the class, create your first test:

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

Arrange preconditions:
```java
// Arrange
Axe axe = new Axe(10, 10);
Dummy dummy = new Dummy(10, 10);
```

Execute tested behavior:
```java
// Act
axe.attack(dummy);
```

Assert postconditions:
```java
// Assert
Assert.assertEquals(9, age.getDurabilityPoints());
```

Create your second text method:
```java
@Test(expected = IllegalStateExcepiton.class) //Assert
public void brokenWeaponCantAttack(){
  // Arrange

  // Act

}
```

Arrange preconditions and test behavior:
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

# Problem with Solution: Test Dummy

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-23-24-problem-and-solution-test-dummy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Description
Create a class `DummyTests`.

Write tests for the following cases:

- The Dummy loses health if attacked
- A Dead Dummy throws an exception if attacked
- A Dead Dummy provides XP
- A living Dummy does not give us XP

## Hints
Follow the logic of the previous problem.

[/slide]
