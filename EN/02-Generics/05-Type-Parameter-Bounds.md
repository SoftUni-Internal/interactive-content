# Type Parameter Bounds

[slide hideTitle]

# Type Parameter Bounds

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-18-19-Type-Parameter-Bounds-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In case you want to **restrict** the types that can be used as type arguments in a parameterized type, you have to use **bounded type parameters**.

Let us explain the need for type parameters bounds with the following example:

```java
public class PowerOfThree<T>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
The code above will produce a compile-time error - "**The method intValue() is undefined for the type T**".

The error occurs as there is no way for the compiler to know type "**T**" will always be used for numeric classes.

We need a bounded type to restrict the types that can be used for a parameterized type.

To declare a bounded type parameter, list the type parameter's name, followed by the "**extends**" keyword, followed by its **upper bound**.

In our case, that will be a "**Number**" class.

```java
T extends Number
```

The code should look like this:

```java
public class PowerOfThree<T extends Number>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
Let us explain what the code does.

The type parameter `T` extends Number to restrict the type of objects that can be used in the parameterized type.

The "**Number**" is a superclass of all numeric classes, such as "**Integer**", "**Float**" and "**Double**".

If we try to use another class that is **not a subclass of Number**, the compiler will throw a compile-time error.


[/slide]

[slide hideTitle]

# Problem with Solution: Generic Scale

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-20-Solution-Generic-Scale-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Generic Scale" timeLimit=5000 taskId="oop-basics-java-generics-lab-Generic-Scale" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]
```

```
[task-description]
## Description
Create a class `Scale<T>` that holds two elements - **left** and **right**. 

The scale should receive the elements through its single constructor:

- `Scale(T left, T right)`

The scale should have a single method: 

- `T getHeavier()`

The **greater of the two elements is heavier**. 

The method should return `null` if the elements are **equal**.



# Example

```java
Scale<String> stringScale = new Scale<>("a", "c");
System.out.println(stringScale.getHeavier());

Scale<Integer> integerScale = new Scale<>(1, 2);
System.out.println(integerScale.getHeavier());
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class P03_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        cl.getConstructor(Comparable.class, Comparable.class);
        cl.getMethod("getHeavier");
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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierInteger \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3, 4);
        Integer result = (Integer) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierString \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance("abc", "xyz");
        String result = (String) getHeavier.invoke(scale);
        Assert.assertTrue(result.equals("xyz"));

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierFloat \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3.3f, 4.4f);
        Float result = (Float) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4.4f);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierDouble \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3.3, 4.4);
        Double result = (Double) getHeavier.invoke(scale);
        Assert.assertTrue(result == 4.4);

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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P03_getHeavierNull \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException,
            InstantiationException \{
        Assert.assertTrue("Class 'Scale' not found", Classes.allClasses.containsKey("Scale"));
        Class cl = Classes.allClasses.get("Scale");
        Assert.assertTrue("Scale class has no type parameters", cl.getTypeParameters().length \> 0);
        Constructor constructor = cl.getConstructor(Comparable.class, Comparable.class);
        Method getHeavier = cl.getMethod("getHeavier");

        Object scale = constructor.newInstance(3, 3);
        Integer result = (Integer) getHeavier.invoke(scale);
        Assert.assertTrue(result == null);

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

# Problem with Solution: List Utilities

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-23-Problem-and-Solution-List-Utilities-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Utilities" timeLimit=5000 taskId="oop-basics-java-generics-lab-List-Utilities" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]
```

```
[task-description]
## Description
Create a class `ListUtils` that you will use through several other exercises.

The class should have **two static methods**:

- `T getMin(List<T> list)`

- `T getMax(List<T> list)`

The methods should throw `IllegalArgumentException` if an empty list is passed.

# Example

```java
List<Integer> integers = new ArrayList<>();
Collections.addAll(integers, 1, 2, 18, 2, -1);

Integer maxInteger = ListUtils.getMax(integers);

List<String> string = new ArrayList<>();
Collection.addAll(strings, "a", "b", "c");

Integer minString = ListUtils.getMin(strings);
```

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class P04_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");
        cl.getMethod("getMin", List.class);
        cl.getMethod("getMin", List.class);
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMinInteger \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMin = cl.getMethod("getMin", List.class);

        List\<Integer\> testList = new ArrayList\<\>();
        Collections.addAll(testList, 1, 2, 3, 1, -2, 1);
        Integer result = (Integer) getMin.invoke(null, testList);
        Assert.assertTrue(result == -2);
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class P04_GetMinException \{

    @Test(expected = IllegalArgumentException.class)
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMin = cl.getMethod("getMin", List.class);

        List\<Integer\> testList = new ArrayList\<\>();
        try \{
            Integer result = (Integer) getMin.invoke(null, testList);
        \} catch (InvocationTargetException ite) \{
            if (ite.getTargetException().getClass() == IllegalArgumentException.class) \{
                throw new IllegalArgumentException();
            \}
        \}
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMaxString \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMax = cl.getMethod("getMax", List.class);

        List\<String\> testList = new ArrayList\<\>();
        Collections.addAll(testList, "a", "b", "c");
        String result = (String) getMax.invoke(null, testList);
        Assert.assertTrue(result.equals("c"));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class P04_GetMaxException \{

    @Test
    public void test() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException \{
        Assert.assertTrue("Class 'ListUtils' not found", Classes.allClasses.containsKey("ListUtils"));
        Class cl = Classes.allClasses.get("ListUtils");

        Method getMax = cl.getMethod("getMax", List.class);

        List\<String\> testList = new ArrayList\<\>();
        Collections.addAll(testList, "a", "b", "c");
        try \{
            String result = (String) getMax.invoke(null, testList);
        \} catch (InvocationTargetException ite) \{
            if (ite.getTargetException().getClass() == IllegalArgumentException.class) \{
                throw new IllegalArgumentException();
            \}
        \}
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

# Type Parameters Relationships

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/EN/interactive-java-advanced-generics-25-26-Type-Parameters-Relationship-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Generics** are **invariant** - subtypes and supertypes are **not replaceable**.

**Example:**

```java
List<Object> objects = new ArrayList<>();
List<Animal> animals = new ArrayList<>();
objects = animals; 
```

Assigning the `animals` data structure to `objects` will result in a compile-time error.

[/slide]
