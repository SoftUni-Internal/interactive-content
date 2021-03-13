# Inheritance

[slide hideTitle]

# Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-3-4-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Inheritance** is a mechanism that enables inheriting properties and methods from a **parent** object to a **child** object.

- The class **passing its members** to its child class is called **Superclass** (Base Class, Parent class)

- The class **receiving members** from its base class is called **Subclass** (Child class, Derived Class)

The idea behind using **Inheritance** is that you can build classes upon already existing classes, therefore reusing code, one of the golden rules in programming.

```java
public class Mammal {...}
// Mammal is the parent class, this class passes its members to its children

public class Cow extends Mammal {...}
// Cow is the child class, this class inherits the members of its parent class.
```

[/slide]


[slide hideTitle]

# Inheritance - Example

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-5-inheritance-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we use inheritance, we can have more than one **Subclass**.

In this example we create a base class `Person`, this class has properties that every person class must have, like `String Name` and `String Address`.

When we create another object of type `Employee` our employee also needs to know its **name and address**.

That is one of the reasons **Inheritance** exists, instead of creating the same properties for our `Employee` we can `extend` the class `Person` and we will inherit and re-use its properties.

Therefore, it is called a **derived** class.

We also extend the functionality by adding a `String Company` parameter.

Respectively we do the same for the `Student`, but with its own internal logic which it has to add.


[image assetsSrc="inheritance-example(1).png" /]


[/slide]

[slide hideTitle]
# Class Hierarchies

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-6-class-hierarchies-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Inheritance leads to hierarchies of classes and/or interfaces in an application:**

A real-life analog of **class hierarchies** is a  **family tree**, we have one class starting the family and down the leaves, we have its children, which also have their own, etc.

[image assetsSrc="inheritance-example(2).png" /]

[/slide]


[slide hideTitle]
# Class Hierarchies – Java Collection

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-7-class-hierarchies-java-collection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`Object` is a universal **Superclass** that is defined to be the root of the entire class hierarchy in Java.

This means that every class that we create is implicitly a child of the class `Object`, without us specifying it.

[image assetsSrc="inheritance-example(3).png" /]

[/slide]

[slide hideTitle]
# Inheritance in Java

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-9-inheritance-in-java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We **inherit** a given class through the keyword **extends**, placed right after the name of the given **Subclass**.

We have to use **Inheritance** when we need to re-use some logic.

But in Java there is a rule, we can inherit **only one** parent per class.

That is why we say that in Java we have **Single-Inheritance**.

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```

[image assetsSrc="inheritance-example(4).png" /]

[/slide]

[slide hideTitle]

# Derived Class

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-10-inheritance-derived-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **derived class** takes all of its members from the **base class**.

**Derived** classes can inherit and call all the **non-private** members of the **Parent** class.

If a unit is declared as private, the memory for it is declared when the class is initialized, but we can use it through our **derived** class.

[image assetsSrc="inheritance-example(5).png" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Single Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-17-problem-and-solution-single-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Single Inheritance" timeLimit=100000 taskId="Java-OOP-Advanced-Inheritance-Single-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create two classes named **Animal** and **Dog**.

**Animal** has a single public method `.eat()` that prints: **"eating…"**

**Dog** also has a single public method - `.bark()` that prints: **"barking…"**

**Dog** should inherit from **Animal**.

[image assetsSrc="inheritance-example(9).png" /]

## Hints
Use the `extends` keyword to build a hierarchy.

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestAnimal \{
    @Test
    public void testAnimalClassAndMethod() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Animal"));
        Class animal = Classes.allClasses.get("Animal");
        Method\[\] methods = animal.getDeclaredMethods();
        Optional\<Method\> eatMethod = Stream.of(methods).filter(m -\> m.getName().equals("eat")).findFirst();
        Assert.assertTrue("Method 'eat' not found", eatMethod.isPresent());
        Assert.assertTrue("Method 'eat' has incorrect return type", eatMethod.get().getReturnType().equals(Void.TYPE));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestDog \{
    @Test
    public void testDogClassAndMethod() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
        Method\[\] methods = dog.getDeclaredMethods();
        Optional\<Method\> eatMethod = Stream.of(methods).filter(m -\> m.getName().equals("bark")).findFirst();
        Assert.assertTrue("Method 'bark' not found", eatMethod.isPresent());
        Assert.assertTrue("Method 'bark' has incorrect return type", eatMethod.get().getReturnType().equals(Void.TYPE));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestSuperClass \{
    @Test
    public void testDogParent() \{
        Assert.assertTrue(Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
        Class animal = dog.getSuperclass();
        Assert.assertTrue("Class 'Dog' should inherit from class 'Animal'", animal.getSimpleName().equals("Animal"));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
