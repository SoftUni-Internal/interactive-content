# Reusing Classes

[slide hideTitle]
# Access Modifiers

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-20-21-reusing-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Derived classes **can access all public** and **protected** members
- Derived classes can access **default** members **if they are in the same package**
- **Private** fields cannot be accessed from the **Subclasses** but they are instantiated, as the **Parent** needs them for its internal logic

```java
class Person {
  protected String address;   // Can be accessed from its Subclasses.
  public void sleep();        // Access from everywhere in the project.
  String name;                // Can be accessed through other methods.
  private String id;          // It can be accessed only from the class delegator itself.
}
```

[/slide]

[slide hideTitle]

# Shadowing Variables

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-22-shadowing-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Derived classes **can hide/shadow** Superclass variables by implementing a unit with the same name for itself


- When you are using **shadowing**, you can rebase an entire method
  * this means changing its parameters and logic inside, but not its return type

```java
class Person { 
  protected int weight; 
  }

class Patient extends Person {
  protected float weight; 
  // Hides (shadows) the weight Integer.

  public void method() {
    // As it is more concrete, it hides both, but it lives only inside the method brackets.
    double weight = 0.5d;
  }
}
```

[/slide]

[slide hideTitle]

# Shadowing Variables – Access

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-23-shadowing-variables-access-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Use **super** and **this** to specify member access

```java
class Person { protected int weight; }

class Patient extends Person {
  protected float weight;
  public void method() {
    double weight = 0.5d; // Local variable
    this.weight = 0.6f;   // Instance member
    super.weight = 1;     // Base class member
  }
}

```
[/slide]

[slide hideTitle]
# Overriding Derived Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-24-overriding-derived-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Overriding** is a mechanism in which we can give a custom implementation of a given class method down the hierarchy.

It is done by using the `@Override` keyword.

It is an important tool as it is connected to another pillar of the OOP **polymorphism**.

The difference between **shadowing** and **overriding** is that when you override, you cannot change the parameters.

Other than that, when we have a **variable of a base class type** and we hold a **Subclass object** if we have an overridden class member and we call it, it will use **the logic declared by the Subclass overriding it**.

By contrast, if you use **shadowing**, it will always call the **base class implementation**.


```java
public class Person {  
  public void sleep() { 
  System.out.println("Person sleeping"); } // Here we declare a method.
}
```
- A method that we want to override should not be set as `final`

```java
public class Student extends Person {
  // The @Override attribute means that this method is being given a new/extended implementation.
  @Override                                   
  public void sleep(){
    // Between the brackets, we declare the new implementation.
    System.out.println("Student sleeping");   
  }   
}
```
- Signature and return type **should match**

[/slide]

[slide hideTitle]

# Final Methods and Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-25-26-final-methods-and-final-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `final` – defines a method that **cannot be overridden**
  - we should use this tool when we want to preserve our method implementation down the class hierarchy
  - `final` can be declared in any derived class and it gets in power for the classes children down the hierarchy

```java
public class Animal {
  public final void eat() { … }
}

public class Dog extends Animal { 
  
  @Override
  public void eat() {} // Error…
}
```

- **Inheriting from a final class is forbidden**

```java
public final class Animal {
  …
}

public class Dog extends Animal { }      // Error…
public class MyString extends String { } // Error…
public class MyMath extends Math { }     // Error…
```

[/slide]

[slide hideTitle]

# Inheritance Benefits 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-27-inheritance-benefits-abstraction-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- With inheritance, we can provide an abstraction to the classes we use
- We can reuse code, less code means fewer bugs
- We can achieve **polymorphism**
- Inheritance provides a clear model structure, which is easy to understand
- With inheritance, if we have a bug in the parent class, we can fix it for all child classes as well

[image assetsSrc="inheritance-example(13).png" /]

```java
Person person = new Person();    // When we have a base class
Student student = new Student(); // And another inherited class 

List<Person> people = new ArrayList(); 
// We can contain both of them in a collection of the base class

people.add(person);
people.add(student);
```

[/slide]

[slide hideTitle]

# Extension

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-28-inheritance-benefits-extension-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- We can extend a class that we can not otherwise change, implementing the custom logic we need

If we take notice of the picture, we see an extension of the `Lists<>` logic, when we derive, although we can not see the original implementation, we can write more methods or parameters to our custom class, therefore expanding the original class's logic.

[image assetsSrc="inheritance-example(14).png" /]

```java
public class MyArrayList<E> extends ArrayList<E>{
  // Custom logic...
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Random Array List

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-29-problem-and-solution-random-array-list-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Random Array List" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Random-Array-List" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description

Create a **RandomArrayList** class that has all the functionality of an **ArrayList**.

Add additional function that **returns** and **removes** a random element from the list.

- Public method: **getRandomElement(): Object**


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestRandomArrayList \{
    private static final String RANDOM_ARRAY_LIST_CLASS_NAME = "RandomArrayList";
    private static final String ARRAY_LIST_CLASS_NAME = "ArrayList";
    private static final String GET_RND_ELEMENT_METHOD_NAME = "getRandomElement";

    @Test
    public void testRandomArrayList() \{

        Assert.assertTrue("Class 'RandomArrayList' not found", Classes.allClasses.containsKey(RANDOM_ARRAY_LIST_CLASS_NAME));
        Class ral = Classes.allClasses.get(RANDOM_ARRAY_LIST_CLASS_NAME);
        Class ralBase = ral.getSuperclass();
        Assert.assertTrue("Class 'RandomArrayList' should extend 'ArrayList'", ralBase.getSimpleName().equals(ARRAY_LIST_CLASS_NAME));

        Method\[\] methods = ral.getDeclaredMethods();
        Assert.assertTrue("Method 'getRandomElement()' not present", isMethodPresent(methods, GET_RND_ELEMENT_METHOD_NAME));
    \}

    private boolean isMethodPresent(Method\[\] methods, String name) \{
        Optional\<Method\> method =  Stream.of(methods)
                .filter(m -\> m.getName().equals(name))
                .findFirst();

        return method.isPresent();
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

