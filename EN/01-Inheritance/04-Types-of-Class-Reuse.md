# Types of Class Reuse

[slide hideTitle]
# Extension

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-31-32-types-of-class-reuse-extension-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The extension of class is called an **IS-A** relationship.

**Student IS-A Person:**
```java
public Student extends Person{}
```

- Duplicate code is error prone
    * if we have a bug at one place, we have to go and find all the places we used this code in order to fix it

- **Reuse classes** through **extension** and add custom logic to them

- When a class is not from our library and we do not know its implementation, we can only extend the given class to add custom logic to it

[image assetsSrc="inheritance-example(15).png" /]

[/slide]

[slide hideTitle]
# Composition

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-33-composition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Composition** is a different type of relationship, in which we contain the given object in our class.

Th;is relationship is called **HAS-A**:

- **The Laptop HAS-A Monitior**
- **The Laptop HAS-A Touchpad**
- **The Laptop HAS-A Keyboard**

[image assetsSrc="inheritance-example(16).png" /]

```java
class Laptop {
  Monitor monitor;
  Touchpad touchpad;
  Keyboard keyboard;
  // Reusing classes...
}
```


[/slide]

[slide hideTitle]
# Delegation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-34-Delegation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Delegation is the process of passing attributes between objects.**

This way we can give a common interface for the client to work with as it does not really care of the implementation underneath.

[image assetsSrc="inheritance-example(17).png" /]

```java
class Laptop {
  Monitor monitor;
  
  void incrBrightness() {   
    monitor.brighten();     
  }                         
                            
  void decrBrightness() {
    monitor.dim();
  } 
}
```

In our **Laptop** class, we provide a method for increasing the brightness.

Undearneath, we are calling the monitor's method.

We provide an **interface to our class**, without specifying the code that does the work.

By doing so, we can **combine** complex logic in just **one method**.                      

[/slide]

[slide hideTitle]
# Problem with Solution: Stack of Strings

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-35-problem-and-solution-stack-of-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Stack of Strings" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Stack-Of-Strings" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class **Stack** which can store only strings and has the following functionality:
- Private field: `data: ArrayList (String)`
- Public method: `push(String item): void`
- Public method: `pop(): String`
- Public method: `peek(): String`
- Public method: `isEmpty(): boolean`

## Hints
Use composition/delegation in order to have a field in which to store the stack's data.

[/task-description]
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
# When to Use Inheritance

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-37-when-to-use-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use inheritance when we meet one of the following:

- Classes share **IS-A** relationship

- The derived class **IS-A-SUBSTITUTE** for the base class

- They hare the **same role**

- The derived class is the **same as the base class** but adds a **little bit more functionality**

[/slide]
