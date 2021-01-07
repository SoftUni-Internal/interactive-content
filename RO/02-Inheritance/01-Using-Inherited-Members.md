[slide]
# Using Inherited Members

**You can access inherited members**

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

## Reusing Constructors

**Constructors are not inherited**

They can be **reused** by the child classes

```java
class Student extends Person {
  private School school;
  public Student(String name, School school) {
    super(name); //Constructor call should be first
    this.school = school;
  }
}
```
[/slide]

[slide]
# Thinking about Inheritance – Extends

- A derived class instance **contains** an instance of its base class

[image assetsSrc="inheritance-example(6).png" /]

## Inheritance has a transitive relation

```java
class Person { … }
class Student extends Person { … }
class CollegeStudent extends Student { … }
```

[image assetsSrc="inheritance-example(7).png" /]

[/slide]

[slide]
# Multiple Inheritance

**In Java there is no multiple inheritance**

Only **multiple interfaces can be implemented**

[image assetsSrc="inheritance-example(8).png" /]

[/slide]

[slide hideTitle]
# Problem: Multiple Inheritance
[code-task title="Problem: Multiple Inheritance" taskId="5cf868e8-02f2-4b35-9377-f7b81085064e" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create three classes named **Animal, Dog** and **Puppy**. 

**Animal** with a single public method `eat()` that prints: **"eating…"**

**Dog** with a single public method `bark()` that prints: **"barking…"**

Puppy with a single public method weep() that prints: **"weeping…"**

**Dog** should inherit from **Animal**. **Puppy** should inherit from **Dog**. 

[image assetsSrc="inheritance-example(10).png" /]

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

public class TestSuperClass \{
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

[slide]
# Solution: Multiple Inheritance

[/slide]

[slide]
# Access to Base Class Members

To access the base class members, use the `super` keyword

```java
class Person { … }

class Employee extends Person { 
  public void fire(String reasons) { 
    System.out.println(
        super.name + 
        " got fired because " + reasons);
  }
}
```
[/slide]

[slide hideTitle]
# Problem: Hierarchical Inheritance
[code-task title="Problem: Hierarchical Inheritance" taskId="8688e808-529e-4532-be86-b62a8cdc42fc" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create three classes named **Animal**, **Dog** and **Cat**. 

**Animal** with a single public method `eat()` that prints: **"eating…"**

**Dog** with a single public method `bark()` that prints: **"barking…"**

**Cat** with a single public method `meow()` that prints: **"meowing…"**

**Dog** and **Cat** should inherit from **Animal**.

[image assetsSrc="inheritance-example(11).png" /]

[/task-description]
[code-io /]
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

[slide]

# Solution: Hierarchical Inheritance

[/slide]





