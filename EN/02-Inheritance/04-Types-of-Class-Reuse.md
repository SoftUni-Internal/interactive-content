# Types of Class Reuse

[slide hideTitle]
# Extension

Extension of class is called **IS-A** relationship.

**Student IS-A Person**
```java
public Student extends Person{}
```

- Duplicate code is error prone, but also if we have a bug at one place we have to go and find all the places we used this code in order to fix it.
- **Reuse classes** through **extension** and add custom logic to it.
- When a class is not from our library and we don't know its implementation we can only extend the given class to add custom logic to it.

[image assetsSrc="inheritance-example(15).png" /]

[/slide]

[slide hideTitle]
# Composition

Composition is a different type of relationship, in composition we contain the given object in our class.

This relationship is called **HAS-A**

**The Laptop HAS-A Monitior**
**The Laptop HAS-A Touchpad**
**The Laptop HAS-A Keyboard**

```java
class Laptop {
  Monitor monitor;
  Touchpad touchpad;
  Keyboard keyboard;
  … //Reusing classes
}
```
[image assetsSrc="inheritance-example(16).png" /]

[/slide]

[slide hideTitle]
# Delegation

**Delegation is a process of passing attributes between objects**
This way we can give a common interface for the client to work with as he doesn't really care of the implementation underneath.

```java
class Laptop {
  Monitor monitor;
  void incrBrightness() {           //In our class Laptop we provide a method for increasing the brigthness
    monitor.brighten();             //although that undearneath we are calling the monior's method
  }                                 //we give an interface to our class, without specifying the code that does the job
                                    //this way we can also combine several methods from differnet classed under just one method.




                                    
  void decrBrightness() {
    monitor.dim();
  } 
}
```

[image assetsSrc="inheritance-example(17).png" /]

[/slide]

[slide hideTitle]
# Problem: Stack of Strings
[code-task title="Problem: Stack of Strings" taskId="453de29f-62b0-402e-bff7-59ba14b9a7ca" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class **Stack** which can store only strings and has the following functionality:
- Private field: `data: ArrayList (String)`
- Public method: `push(String item): void`
- Public method: `pop(): String`
- Public method: `peek(): String`
- Public method: `isEmpty(): boolean`

## Hints:
Use composition/delegation in order to have a field in which to store the stack's data

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

public class TestPeek \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> peekMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("peek"))
                .findFirst();

        Assert.assertTrue("Method 'peek()' was not present", peekMethod.isPresent());
        Assert.assertTrue("Method 'peek()' should return String", peekMethod.get().getReturnType().equals(String.class));
        Assert.assertTrue("Method 'peek()' should have zero parameters", peekMethod.get().getParameterCount() == 0);
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

public class TestPop \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> popMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("pop"))
                .findFirst();

        Assert.assertTrue("Method 'pop()' was not present", popMethod.isPresent());
        Assert.assertTrue("Method 'pop()' should return 'String'", popMethod.get().getReturnType().equals(String.class));
        Assert.assertTrue("Method 'pop()' should have zero parameters", popMethod.get().getParameterCount() == 0);
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

public class TestPush \{
    @Test
    public void testPush() \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Method\[\] methods = stack.getDeclaredMethods();
        Optional\<Method\> pushMethod = Stream.of(methods)
                .filter(m -\> m.getName().equals("push"))
                .findFirst();

        Assert.assertTrue("Method 'push()' was not present", pushMethod.isPresent());
        Assert.assertTrue("Method 'push()' should be void", pushMethod.get().getReturnType().equals(Void.TYPE));
        Assert.assertTrue("Method 'push()' should have one parameter", pushMethod.get().getParameterCount() == 1);
        Assert.assertTrue("Method 'push()' parameter should be of type 'String'", pushMethod.get().getParameterTypes()\[0\].equals(String.class));
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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.List;

public class TestStack \{

    @Test
    public void testDataField() throws NoSuchFieldException \{
        Assert.assertTrue("Class 'StackOfStrings' not found", Classes.allClasses.containsKey("StackOfStrings"));
        Class stack = Classes.allClasses.get("StackOfStrings");

        Field dataField = stack.getDeclaredField("data");
        Assert.assertTrue("Field 'data' was not of type 'List' or 'ArrayList'",
                dataField.getType().equals(List.class) \|\| dataField.getType().equals(ArrayList.class));

        Assert.assertTrue("Field 'data' access level was not 'private'",
                Modifier.isPrivate(dataField.getModifiers()));
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
# Solution: Stack of Strings

[/slide]

[slide hideTitle]
# When to Use Inheritance

- Classes share **IS-A** relationship
- Derived class **IS-A-SUBSTITUTE** for the base class
- Share the **same role**
- Derived class is the **same as the base class** but adds a **little bit more functionality**

[/slide]
