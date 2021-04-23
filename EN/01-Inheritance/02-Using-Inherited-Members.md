[slide hideTitle]
# Using Inherited Members

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-11-using-inherited-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can **access inherited members**.

We do it in the same way we **call class members**.

First, we create an object of the derived class, when we call it, we can access all **non-private** members - **derived** or **declared**.

```java
class Person { public void sleep() { … } }
class Student extends Person { … }
class Employee extends Person { … }
```

```java
Student student = new Student();
student.sleep();

Employee employee = new Employee();
employee.sleep();
```

We can also hold a **reference** to an object of the derived class in the base class variable.

```java
Person student = new Student();
// The base class variable holds the object of the Subclass type.

Person employee = new Employee();
```

What changes here is that we will only have access to the **base class members**, as we declare the `Student` as a `Person`.

[/slide]

[slide hideTitle]

# Reusing Constructors

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-12-reusing-constructors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Constructors are **not inherited**.

When a **parent class** declares a **constructor** with parameters, every unit that inherits from this class must be able to use the **parent class'** constructor.

That is because the base constructor gets called automatically when the derived class is created.

The parameters in the **constructor** of the derived class must be passed in to the parent **constructor** with the `super` keyword.

Here is an example of "constructor chaining".

```java
class Person{
    private String name;
    
    // If we do not have a parameterized constructor in the parent class, we can skip calling it in the Subclass.
    public Person(String name){
        this.name = name;
    }
}

class Student extends Person {
  private School school;
  public Student(String name, School school) {  
  // If we do not call our Superclass' constructor, a compile-time error will be thrown.
  
    super(name); // It is a good practice to call the constructor first.
    this.school = school;
  }

// You can also fill the parent constructor with some default values, just like this.
  public Student(School school){ 
      String defaultName = "John Doe";
      super(defaultName);
      this.school = school;
  }

}

```
[/slide]

[slide hideTitle]

# Thinking about Inheritance - Extends

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-13-thinking-about-inheritance-extends-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is what happens in memory when a class **inherits** another one.


When we inherit a class, memory is allocated for the **parent**, plus the extra memory required for the **derived class**. (see the image below)

In such cases all members of the **parent** are declared, as well as all the new members from the **derived class**.

[image assetsSrc="inheritance-example(6).png" /]

[/slide]

[slide hideTitle]

# Inheritance has a Transitive Relation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-14-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
class Person { … }                          // A Base class holding some members.
class Student extends Person { … }          // The Student calss will inherit all members from Person and can add more.
class CollegeStudent extends Student { … }  // The CollegeStudent class will inherit all members from both Student and Person.
```

This is what **transitive relation** is: a **Subclass** gets all the functionality from it is Superclasses up the hierarchy.

[image assetsSrc="inheritance-example(7).png" /]

[/slide]

[slide hideTitle]
# Multiple Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-15-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, **multiple inheritance is not available.**

```java
public class Person {...}

public class CollegeStudent {...}

public class Student extends Person, CollegeStudent // Not allowed
```

Instead, if we need one class to be from two or more families, we can implement additional **interfaces** on a single class.

**Interfaces** will be covered further in our lessons.

[/slide]

[slide hideTitle]
# Access to Base Class Members

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-16-access-to-base-class-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sometimes we need to access the base class members.

To access the base class members, use the `super` keyword.

We can also reuse some of the logic.

**Example:**

```java
class Person {
    protected String name;
    
    public Person(String name){
        this.name = name;
    }
 }

class Employee extends Person { 
  public void fire(String reasons) { 
    System.out.println(
        super.name + // We use the `super` keyword to access the Superclass/Inherited class members.
        " got fired because " + reasons);
  }
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Multiple Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-18-problem-and-solution-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Multiple Inheritance" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Multiple-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
## Description
Create three classes named **Animal, Dog** and **Puppy**. 

**Animal** - holding a single public method `.eat()` that prints: **"eating…"**.

**Dog** - holding a single public method `.bark()` that prints: **"barking…"**.

**Puppy** - holding a single public method weep() that prints: **"weeping…"**.

**Dog** - should extend **Animal**. **Puppy** should extend **Dog**. 

[image assetsSrc="inheritance-example(10).png" /]

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Optional;
import java.util.stream.Stream;

public class TestPuppy \{
    @Test
    public void testPuppyClass() \{
        Assert.assertTrue("Class 'Puppy' not found", Classes.allClasses.containsKey("Puppy"));

        Class puppy = Classes.allClasses.get("Puppy");
        Method\[\] methods = puppy.getDeclaredMethods();
        Optional\<Method\> weepMethod = Stream.of(methods).filter(m -\> m.getName().equals("weep")).findFirst();
        Assert.assertTrue("Method 'weep' not found", weepMethod.isPresent());
        Assert.assertTrue("Method 'weep' has incorrect return type", weepMethod.get().getReturnType().equals(Void.TYPE));
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

public class TestSuperclass \{
    @Test
    public void testDogParent() \{
        Assert.assertTrue("Class 'Puppy' not found", Classes.allClasses.containsKey("Puppy"));

        Class puppy = Classes.allClasses.get("Puppy");

        Class dog = puppy.getSuperclass();
        Assert.assertTrue("Class 'Puppy' should inherit from class 'Dog'", dog.getSimpleName().equals("Dog"));

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


[slide hideTitle]
# Problem with Solution: Hierarchical Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-19-problem-and-solution-hierarchical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hierarchical Inheritance" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Hierarchical-Inheritance" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create three classes named **Animal**, **Dog** and **Cat**. 

**Animal** - with a single public method `.eat()` that prints: **"eating…"**

**Dog** - with a single public method `.bark()` that prints: **"barking…"**

**Cat** - with a single public method `.meow()` that prints: **"meowing…"**

**Dog** and **Cat** should inherit from **Animal**.

[image assetsSrc="inheritance-example(11).png" /]

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestCatParent \{

    @Test
    public void testCatParent() \{
        Assert.assertTrue("Class 'Cat' not found", Classes.allClasses.containsKey("Cat"));
        Class cat = Classes.allClasses.get("Cat");
        Class catParent = cat.getSuperclass();
        Assert.assertTrue("Class 'Cat' should inherit from class 'Animal'", catParent.getSimpleName().equals("Animal"));
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

public class TestDogParent \{

    @Test
    public void testCatParent() \{
        Assert.assertTrue("Class 'Dog' not found", Classes.allClasses.containsKey("Dog"));
        Class dog = Classes.allClasses.get("Dog");
        Class dogParent = dog.getSuperclass();
        Assert.assertTrue("Class 'Dog' should inherit from class 'Animal'", dogParent.getSimpleName().equals("Animal"));
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




