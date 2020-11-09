[slide]

# What is Unit-Testing?

We saw what are the seven testing principles. Now lets continue with Unit-Testing.

Unit-Testing means that we test the smaller **pieces/units** of our application.

Lets see what is the main difference between manual and automated testing.

Manual testing:

- Manual testing is not **structured** and **repeatable**.

- Our Manual testing methods cannot **cover** all of our code.

- This methods are not as easy as it should be.

Here is one example: 

```java
void testSum() {
  if (this.sum(1, 2) != 3) {
    throw new Exception("1 + 2 != 3");
}
```

To make the things easier we need a **structured** approach that:

- Allows us **refactoring**.

- Reduce the **cost of change**.

- Help us to reduce the amount of **bugs/defects** in the code.


[/slide]


[slide]

# Automated Testing

Automated testing contains:

- Unit tests

- System tests

- Integration tests


[image assetsSrc="Unit-Testing-Example(1).png" /]


[/slide]

[slide]

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

Next, lets create a new **package** for our tests.

After that we must create our first class for test methods. (e.g **CreditCardTests**)

Now, we can create our first **public void** method annotated with `@Test`.

``` java
@Test
public void depositShouldAddMoney() {
  /* logic here... */
}
```

[/slide]


[slide]

# 3A Pattern

[/slide]