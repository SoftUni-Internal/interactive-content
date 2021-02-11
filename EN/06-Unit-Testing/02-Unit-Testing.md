# Unit-Testing

[slide hideTitle]

# What is Unit-Testing?

Lets continue with Unit-Testing.

Unit-Testing means that we test smaller **pieces/units** of our application.

Lets see what is the main difference between manual and automated testing.

Manual testing:

- Manual testing is not **structured** and **repeatable**

- Our Manual testing methods cannot **cover** all of our code

- Menual testing methods are not as easy as they should be

Here is an example: 

```java
void testSum() {
  if (this.sum(1, 2) != 3) {
    throw new Exception("1 + 2 != 3");
}
```

To make the things easier we need a **structured** approach that:

- Allows **refactoring**

- Reduce the **cost of change**

- Help us to reduce the amount of **bugs/defects** in the code


[/slide]


[slide hideTitle]

# Automated Testing

Automated testing contains:

- Unit tests
  - A **piece of a single logical unit** in our code (method, class, etc.)
- Integration tests
  - A test of a module in our app (payment, registration, etc.)


- System tests
  - End-to-End testing of our full system.


[image assetsSrc="Unit-Testing-Example(1).png" /]

[/slide]

[slide hideTitle]

# JUnit

JUnit is one of the first unit testing **Frameworks** for Java.

First, we need to set the JUnit repository. 

After creating a Maven project, we must copy and paste this code in our pom.xml file.

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

Lets create a new **package** for our tests.

Than we must create our first class for test methods. (e.g **CalculatorTests**)

We can now create our first **public void** method annotated with `@Test`.

``` java
@Test
public void commandShouldMultiplyNumbers() {
  /* logic here... */
}
```

[/slide]


[slide hideTitle]

# 3A Pattern

There is a **must-know** pattern when creating unit tests.

The AAA pattern (**Arrange-Act-Assert**) became the **standard** across our industry.

The basis of this pattern is that all tests should follow a default layer.

At the beginning, we must **Arrange** all the conditions to the system.

After that we take the actions **Act**, needed to produce a result.

Finally, we **Assert** that the expected output is generated.

Lets take a look at this simple example:

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

[/slide]

[slide hideTitle]

# Exceptions

In some method we may need to throw an exception for (example: invalid input) in our code, we can test this behaviour like:

``` java
@Test(expected = IllegalArgumentException.class) //Assert
public void multiplyingWordsShouldThrow() {
  //Arrange
  Calculator calculator = new Calculator();
  
  //Act
  calculator.multiply(a, b);
}
```



[/slide]

[slide hideTitle]

# Problem: Create Maven Project

## Description
Maven is build automation tool that takes care of dependencies for your project. 

Before you can make one, make sure that you enable the plugin in IntelliJ \[File \-\> Settings \-\> Plugins \-\> Maven Integration\]

[image assetsSrc="Unit-Testing-Example(2).png" /]

Now, you can create a Maven project. 

[image assetsSrc="Unit-Testing-Example(3).png" /]

Group Id should be separated by dots, Artifact Id should be separated by hyphens.

[image assetsSrc="Unit-Testing-Example(4).png" /]

If everything is ok, you should see the following project structure.

[image assetsSrc="Unit-Testing-Example(5).png" /]

Copy the files provided and place them in a package inside src/main/java folder.

[image assetsSrc="Unit-Testing-Example(6).png" /]

[/slide]

[slide hideTitle]

# Problem: Test Axe

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/07.Java-OOP-Advanced-Unit-Testing-Lab-Resources.zip) **for this task.**

## Description
In **test/java** folder, create a package called **rpg_tests.**

Create a class `AxeTests`.

Create the following tests:
- Test if weapon loses durability after each attack
- Test attacking with a broken weapon

[/slide]

[slide hideTitle]

# Solution: Test Axe

Create the new package **rpg_tests** and inside create the class `AxeTests`

[image assetsSrc="Unit-Testing-Example(7).png" /]

Inside the class create your first test:

```java
public class AxeTests{

  @Test
  public void weaponAttacksLosesDurability(){
    //Arrange

    //Act

    //Assert
  }
}
```

Arrange preconditions:
```java
//Arrange
Axe axe = new Axe(10, 10);
Dummy dummy = new Dummy(10, 10);
```

Execute tested behaviour:
```java
//Act
axe.attack(dummy);
```

Assert postconditions:
```java
//Assert
Assert.assertEquals(9, age.getDurabilityPoints());
```

Create your second text method:
```java
@Test(expected = IllegalStateExcepiton.class) //Assert
public void brokenWeaponCantAttack(){
  //Arrange

  //Act

}
```

Arrange preconditions and test behaviour:
```java
//Arrange
Axe axe - new Axe(10, 1);
Dummy dummy = new Dummy(20, 10);

//Act
axe.attack(dummy);
axe.attack(dummy);
```


[/slide]

[slide hideTitle]

# Problem: Test Dummy


## Description
Create a class `DummyTests`

Create the following tests:

- Dummy loses health if attacked
- Dead Dummy throws exception if attacked
- Dead Dummy can give XP
- Alive Dummy can't give XP

## Hints
Follow the logic of the previous problem.

[/slide]