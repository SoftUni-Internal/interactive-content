# Reusing Classes

[slide hideTitle]
# Access Modifiers

- Derived classes **can access all public** and **protected** members
- Derived classes can access **default** members **if in same package**
- **Private** fields can not be accessed from the **subclasses** but they are instantiated as our **Parent** need them for its internal logic

```java
class Person {
  protected String address;   //Can be accessed from it is subclasses.
  public void sleep();        //Access from everywhere in the project.
  String name;                //Can be accessed through other methods.
  private String id;          //It can be accessed only from the class delegator itself.
}
```

[/slide]

[slide hideTitle]

# Shadowing Variables

- Derived classes **can hide/shadow** superclass variables by implementing a unit with the same name by itself
- When you are using **shadowing** you can rebase an entire method, this means changing its parameters and return type. 

```java
class Person { 
  protected int weight; 
  }

class Patient extends Person {
  protected float weight; //hides (shadows) int weight.
  public void method() {
    double weight = 0.5d; //As it is more concrete, it hides both but it lives only inside the method brackets.
  }
}
```

[/slide]

[slide hideTitle]

# Shadowing Variables – Access

- Use **super** and **this** to specify member access

```java
class Person { protected int weight; }

class Patient extends Person {
  protected float weight;
  public void method() {
    double weight = 0.5d; //Local variable
    this.weight = 0.6f; //Instance member
    super.weight = 1; //Base class member
  }
}

```
[/slide]

[slide hideTitle]
# Overriding Derived Methods

Overriding is a mechanism in which we can give a custom implementation of a given class method down the hierarchy, we can achieve it with the keyword `@Override`.

It is an important tool as it is connected to another pillar of the OOP **Polymorphism**.

The difference between **Shadowing** and **Overriding** is that when you override you can not change the return type or the parameters.

Other than that, when we have a **variable of a base class type** and we hold a **subclass object** if we have an overridden class member and we call it, it will use **the logic declared by the subclass overriding it**, whereas if you use the **shadowing** it will always call the **base class implementation**.


```java
public class Person {  
  public void sleep() { 
  System.out.println("Person sleeping"); } //Here we declare a method.
}
```
- A method that we want to override should not be set as `final`

```java
public class Student extends Person {
  @Override                                   //The Attribute @Override means that this method is being given new/extended implementation.
  public void sleep(){
  System.out.println("Student sleeping"); }   //Between the brackets we declare the new implementation.
}
```
- Signature and return type **should match**

[/slide]

[slide hideTitle]

# Final Methods and Classes

- `final` – defines a method that **can not be overridden**
  - We should use this tool when we want to preserve our method implementation down the class hierarchy
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

## Abstraction

- With inheritance, we can provide an abstraction to the classes we use
- We can re-use code, less code means fewer bugs
- We can achieve **Polymorphism**
- Inheritance provides a clear model structure, which is easy to understand.
- With inheritance, if we have a bug in the parent class, we can fix it for all child classes as well.

```java
Person person = new Person();
Student student = new Student();

List<Person> people = new ArrayList();

people.add(person);
people.add(student);
```

[image assetsSrc="inheritance-example(13).png" /]

[/slide]

[slide hideTitle]

# Extension

- We can extend a class that we can't otherwise change, implementing the custom logic we need

If we take notice of the picture, we see an extension of the `Lists<>` logic, when we derive, although we can't see the original implementation, we can write more methods or parameters to our custom class, thus expanding the original class's logic.

[image assetsSrc="inheritance-example(14).png" /]


[/slide]

[slide hideTitle]
# Problem: Random Array List
[code-task title="Random Array List" taskId="a002eea4-0c9f-4728-bb88-a7e24ab26a52" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a **RandomArrayList** class that has all the functionality of an **ArrayList**.

Add additional function that **returns** and **removes** a random element from the list.

- Public method: **getRandomElement(): Object**


[/task-description]
[code-io /]
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

[slide hideTitle]
# Solution: Random Array List
[code-task title="Random Array List" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a **RandomArrayList** class that has all the functionality of an **ArrayList**.

Add additional function that **returns** and **removes** a random element from the list.

- Public method: **getRandomElement(): Object**


[/task-description]
[code-io /]
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
