# Interfaces

[slide hideTitle]

# What Are Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-10-11-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


A Java **interface** can have methods and variables as a class does, but all **methods** in an interface are **abstract** by default.

**Interfaces** in Java specify a behavior that **classes** must **implement**.

We use **interfaces** when we need higher **security**.

As we know, Java does not support "**multiple inheritance**". 

However, we can achieve this using **interfaces** because a class can **implement** multiple interfaces.

Here is an example of implementing an interface into a class:

``` java
public interface Printable {        
    // The interface declares a print method 
    void print();
}
```

``` java
class Document implements Printable {   
// And by implementing the interface, the class signs a contract that promises to implement the print method

  public void print() { 
    // The class gives its implementation to the method
    System.out.println("Hello");        
  }

  public static void main(String args[]) {
    Printable doc = new Document();    // Using polymorphism
    doc.print();  // Output: "Hello"
  }
}
```

[/slide]

[slide hideTitle]

# Static Methods in Interfaces

**Static methods** in interfaces are those defined by the `static` keyword.

The difference between all other methods and static methods is that we must declare a complete definition of the **static method**.

Further, when a given class implements our interface, it can not change the implementation of the given **static method**.

**Example**:

```java
// Implementation class 
public class Test implements TestInterface {

    public static void main(String[] args) {
        Test testInterfaceDemo = new Test();

        // Calling the static method of the interface 
        TestInterface.hello();

        // Calling the abstract method of the interface 
        testInterfaceDemo.overrideMethod("Hello, Override Method Here");
    }

    // Implementing interface method 

    @Override
    public void overrideMethod(String str) {
        System.out.println(str);
    }
}

// Interface
interface TestInterface {

    // Static method 
    static void hello()
    {
        System.out.println("Hello, Test Static Method Here");
    }

    // Public and abstract method of the interface 
    void overrideMethod(String str);
}

// Output
Hello, Test Static Method Here
Hello, Override Method Here
```

[/slide]

[slide hideTitle]

# Extending Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-17-18-extend-interface-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, an interface can **extend another interface**.

``` java
public interface Callable {
     void call();
}
```

``` java
public interface Printable extends Callable {
    void print();
}
```

A class that **implements an interface** must **provide an implementation** for the **parent interface** as well.

[/slide]

[slide hideTitle]
# Differences Between "Implements" and "Extends"

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-12-implements-vs-extends-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## The Relations Between Classes and Interfaces

[image assetsSrc="Interfaces-and-Abstraction-example(0).png" /]

## Multiple Inheritance

[image assetsSrc="Interfaces-and-Abstraction-example(3).png" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Car Shop

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Car-Shop-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Car Shop" timeLimit=5000 taskId="Java-OOP-Advanced-Interfaces-And-Abstraction-Car-Shop" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Build a **classes** and **interfaces** heirarchy using this UML diagram.

[image assetsSrc="interfaces-and-abstraction-example(5).png" /]

**Your implementation should work with this code:**

```java
public static void main(String[] args) {
    Car seat = new Seat("Leon", "Gray", 110, "Spain");

    System.out.println(String.format(
            "The %s is %s and has a %s horsepower engine.",
            seat.getModel(),
            seat.getColor(),
            seat.getHorsePower()));
    System.out.println(seat.toString());
}
```

## Note
Consider using the wrapper classes in the **Seat** constructor.

# Example
| **Output** |
| --- |
| The Leon is Gray and has a 110 horsepower engine. |
| This car Leon was produced in Spain and has 4 tires. |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestClasses \{

    // Error messages
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    // Class names
    private static final String Car = "Car";
    private static final String Seat = "Seat";

    @Test
    public void test() \{
        assertClassExists(Car);
        assertClassExists(Seat);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class TestEncapsulation \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String SEAT = "Seat";

    @Test
    public void test() \{
        assertHasNoPrivateFields(SEAT);
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethods \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String CAR = "Car";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";

    @Test
    public void test() \{

        assertClassExists(CAR);

        Class carClass = Classes.allClasses.get(CAR);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, CAR, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_HORSE_POWER_METHOD_NAME, int.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

public class TestConstructors \{

    // Error messages
    private static final String CLASS_NOT_PRESENT = "Class '%s' not present";
    private static final String CONSTRUCTOR_NOT_PRESENT = "Constructor(%s) in class '%s' not present";

    // Class names
    private static final String\[\] classNames = new String\[\]\{ "Seat" \};

    // Method parameter types
    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Seat", new Class\[\]\{String.class, String.class, Integer.class, String.class\});
    \}\};

    @Test
    public void test() \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}

        for (String className : classNames) \{
            Class currentClass = Classes.allClasses.get(className);

            try \{
                Constructor constructor = currentClass.getDeclaredConstructor(constructorParameters.get(className));
            \} catch (NoSuchMethodException e) \{
                String constructorParams = String.join(", ", Arrays.asList(constructorParameters.get(className)).stream().map(c -\> c.toString()).collect(Collectors.toList()));
                Assert.assertTrue(String.format(CONSTRUCTOR_NOT_PRESENT, constructorParams, className), false);
            \}
        \}
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT, className),
                Classes.allClasses.containsKey(className));
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
import java.util.stream.Stream;

public class TestConstants \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_TIRES_NAME = "TIRES";

    private static final String CAR = "Car";

    @Test
    public void test() \{
        try \{
            assertHasConstantField(CAR);
        \} catch (NoSuchFieldException ex) \{

        \}
    \}

    private void assertHasConstantField(String className) throws NoSuchFieldException \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field tires = cl.getDeclaredField(FIELD_TIRES_NAME);

        Assert.assertTrue("Field 'TIRES' was not of type 'String'",
                tires.getType().equals(int.class) \|\| tires.getType().equals(Integer.class));

        Assert.assertTrue("Field 'TIRES' access level was not 'public'",
                Modifier.isPublic(tires.getModifiers()));

        Assert.assertTrue("Field 'TIRES' access level was not 'static'",
                Modifier.isStatic(tires.getModifiers()));

        Assert.assertTrue("Field 'TIRES' access level was not 'final'",
                Modifier.isFinal(tires.getModifiers()));
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsReturnedTypes \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String CAR = "Car";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";

    @Test
    public void test() \{

        assertClassExists(CAR);

        Class carClass = Classes.allClasses.get(CAR);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, CAR, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_HORSE_POWER_METHOD_NAME, int.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsNames \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String SEAT = "Seat";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";
    private static final String GET_TO_STRING_METHOD_NAME = "toString";

    @Test
    public void test() \{

        assertClassExists(SEAT);

        Class carClass = Classes.allClasses.get(SEAT);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, SEAT, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, SEAT, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, SEAT, GET_HORSE_POWER_METHOD_NAME, int.class);
        assertMethod(carMethods, SEAT, GET_TO_STRING_METHOD_NAME, String.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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

import java.lang.reflect.Array;
import java.util.Arrays;

public class TestInterfaces \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String SEAT = "Seat";
    private static final String INTERFACE_CAR = "Car";
    private static final String INTERFACE_SERIALIZABLE = "Serializable";

    @Test
    public void test() \{

        assertClassExists(SEAT);

        String\[\] interfacesNames = new String\[\] \{ INTERFACE_CAR \};

        assertClassInstanseOf(SEAT, interfacesNames);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertClassInstanseOf(String className, String\[\] interfaces) \{
        Class child = Classes.allClasses.get(className);

        Class\[\] implementedInterfaces = child.getInterfaces();

        for (String anInterface : interfaces) \{
            Class parent = Classes.allClasses.get(anInterface);
            Assert.assertTrue(
                    String.format(CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE, className, anInterface),
                    Arrays.asList(implementedInterfaces).contains(parent));
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
# Problem with Solution: Car Shop Extended

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Car-Shop-Extend-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Car Shop Extended" timeLimit=5000 taskId="Java-OOP-Advanced-Interfaces-And-Abstraction-Car-Shop-Extended" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Extend the previous problem:

[image assetsSrc="interfaces-and-abstraction-example(6).png" /]

**Your implementation should be able to work in the following context:**

```java
public static void main(String[] args) {
    Sellable seat = new Seat("Leon", "Gray", 110,
            "Spain", 11111.1);
    Rentable audi = new Audi("A4", "Gray", 110,
            "Germany", 3, 99.9);
    printCarInfo(seat);
    printCarInfo(audi);
}

private static void printCarInfo(Car car) {
    System.out.println(String.format(
            "The %s is %s and has a %d horsepower engine.",
            car.getModel(),
            car.getColor(),
            car.getHorsePower()));
    System.out.println(car.toString());
}
```

# Examples
| **Output** |
| --- |
| The Leon is Gray and has a 110 horsepower engine. |
| The car Leon was produced in Spain and has 4 tires. |
| The price of this car Leon is: 11111,100000. |
| The A4 is Gray and has a 110 horsepower engine. |
| The car A4 was produced in Germany and has 4 tires. |
| The minimum rental period is: 3 days. Price per day: 99,900000. |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestClasses \{

    // Error messages
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    // Class names
    private static final String Car = "Car";
    private static final String Seat = "Seat";

    @Test
    public void test() \{
        assertClassExists(Car);
        assertClassExists(Seat);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class TestEncapsulation \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String SEAT = "Seat";
	

    @Test
    public void test() \{
        assertHasNoPrivateFields(SEAT);
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethods \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String CAR = "Car";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";

    @Test
    public void test() \{

        assertClassExists(CAR);

        Class carClass = Classes.allClasses.get(CAR);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, CAR, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_HORSE_POWER_METHOD_NAME, int.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

public class TestConstructors \{

    // Error messages
    private static final String CLASS_NOT_PRESENT = "Class '%s' not present";
    private static final String CONSTRUCTOR_NOT_PRESENT = "Constructor(%s) in class '%s' not present";

    // Class names
    private static final String\[\] classNames = new String\[\]\{"Seat", "Audi"\};

    // Method parameter types
    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Seat", new Class\[\]\{String.class, String.class, Integer.class, String.class, Double.class\});
        put("Audi", new Class\[\]\{String.class, String.class, Integer.class, String.class, Integer.class, Double.class\});
    \}\};


    @Test
    public void test() \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}

        for (String className : classNames) \{
            Class currentClass = Classes.allClasses.get(className);

            try \{
                Constructor constructor = currentClass.getDeclaredConstructor(constructorParameters.get(className));
            \} catch (NoSuchMethodException e) \{
                String constructorParams = String.join(", ", Arrays.asList(constructorParameters.get(className)).stream().map(c -\> c.toString()).collect(Collectors.toList()));
                Assert.assertTrue(String.format(CONSTRUCTOR_NOT_PRESENT, constructorParams, className), false);
            \}
        \}
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT, className),
                Classes.allClasses.containsKey(className));
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
import java.util.stream.Stream;

public class TestConstants \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_TIRES_NAME = "TIRES";

    private static final String CAR = "Car";

    @Test
    public void test() \{
        try \{
            assertHasConstantField(CAR);
        \} catch (NoSuchFieldException ex) \{

        \}
    \}

    private void assertHasConstantField(String className) throws NoSuchFieldException \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field tires = cl.getDeclaredField(FIELD_TIRES_NAME);

        Assert.assertTrue("Field 'TIRES' was not of type 'String'",
                tires.getType().equals(int.class) \|\| tires.getType().equals(Integer.class));

        Assert.assertTrue("Field 'TIRES' access level was not 'public'",
                Modifier.isPublic(tires.getModifiers()));

        Assert.assertTrue("Field 'TIRES' access level was not 'static'",
                Modifier.isStatic(tires.getModifiers()));

        Assert.assertTrue("Field 'TIRES' access level was not 'final'",
                Modifier.isFinal(tires.getModifiers()));
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsReturnedTypes \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String CAR = "Car";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";

    @Test
    public void test() \{

        assertClassExists(CAR);

        Class carClass = Classes.allClasses.get(CAR);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, CAR, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, CAR, GET_HORSE_POWER_METHOD_NAME, int.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsSeat \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String SEAT = "Seat";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";
	private static final String GET_PRICE_METHOD_NAME = "getPrice";
    private static final String GET_TO_STRING_METHOD_NAME = "toString";

    @Test
    public void test() \{

        assertClassExists(SEAT);

        Class carClass = Classes.allClasses.get(SEAT);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, SEAT, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, SEAT, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, SEAT, GET_HORSE_POWER_METHOD_NAME, int.class);
        assertMethod(carMethods, SEAT, GET_TO_STRING_METHOD_NAME, String.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsAudi \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String AUDI = "Audi";
    private static final String GET_MODEL_METHOD_NAME = "getModel";
    private static final String GET_COLOR_METHOD_NAME = "getColor";
    private static final String GET_HORSE_POWER_METHOD_NAME = "getHorsePower";
	private static final String GET_MIN_RENT_DAY_METHOD_NAME = "getMinRentDay";
	private static final String GET_PRICE_PER_DAY_METHOD_NAME = "getPricePerDay";
    private static final String GET_TO_STRING_METHOD_NAME = "toString";

    @Test
    public void test() \{

        assertClassExists(AUDI);

        Class carClass = Classes.allClasses.get(AUDI);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, AUDI, GET_MODEL_METHOD_NAME, String.class);
        assertMethod(carMethods, AUDI, GET_COLOR_METHOD_NAME, String.class);
        assertMethod(carMethods, AUDI, GET_HORSE_POWER_METHOD_NAME, int.class);
        assertMethod(carMethods, AUDI, GET_TO_STRING_METHOD_NAME, String.class);
		assertMethod(carMethods, AUDI, GET_MIN_RENT_DAY_METHOD_NAME, Integer.class);
		assertMethod(carMethods, AUDI, GET_PRICE_PER_DAY_METHOD_NAME, Double.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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

import java.lang.reflect.Array;
import java.util.Arrays;

public class TestInterfacesRentable \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String AUDI = "Audi";
    private static final String INTERFACE_RENTABLE = "Rentable";

    @Test
    public void test() \{

        assertClassExists(AUDI);

        String\[\] interfacesNames = new String\[\] \{ INTERFACE_RENTABLE \};

        assertClassInstanseOf(AUDI, interfacesNames);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertClassInstanseOf(String className, String\[\] interfaces) \{
        Class child = Classes.allClasses.get(className);

        Class\[\] implementedInterfaces = child.getInterfaces();

        for (String anInterface : interfaces) \{
            Class parent = Classes.allClasses.get(anInterface);
            Assert.assertTrue(
                    String.format(CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE, className, anInterface),
                    Arrays.asList(implementedInterfaces).contains(parent));
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

import java.lang.reflect.Array;
import java.util.Arrays;

public class TestInterfacesSellable \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String SEAT = "Seat";
    private static final String INTERFACE_SELLABLE = "Sellable";

    @Test
    public void test() \{

        assertClassExists(SEAT);

        String\[\] interfacesNames = new String\[\] \{ INTERFACE_SELLABLE \};

        assertClassInstanseOf(SEAT, interfacesNames);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertClassInstanseOf(String className, String\[\] interfaces) \{
        Class child = Classes.allClasses.get(className);

        Class\[\] implementedInterfaces = child.getInterfaces();

        for (String anInterface : interfaces) \{
            Class parent = Classes.allClasses.get(anInterface);
            Assert.assertTrue(
                    String.format(CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE, className, anInterface),
                    Arrays.asList(implementedInterfaces).contains(parent));
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

# The Default Method

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-22-23-default-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java 8 introduced the "Default method" feature.

This allows us to **add** different methods to the **existing interfaces** without breaking their current implementation.

``` java
public interface Drawable {
  void draw();
  default void msg() {
    System.out.println("default method:");
  }
}
```
We do not need an implementation for **default methods**.

``` java
class TestInterfaceDefault {  
  public static void main(String args[]) {  
    Drawable d = new Rectangle(); 
    d.draw();  // drawing rectangle
    d.msg();   // default method
  } 
} 
```

[/slide]

[slide hideTitle]

# Static Method

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-24-static-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Another thing we can do since Java 8 is to **define** and **implement** `static` methods in interfaces.

We can define static methods inside interfaces the same way we would define one in a class. 

These can also be invoked from within other methods.

To understand this better let us take a look at this example:

``` java
public interface Car {
    
    // default methods
    static int getHorsePower(int torque, int rpm) {
        return (torque * rpm) / 5252;
    }
}
```

If we want to calculate the **horsepower** of our car's engine, we just call our `getHorsePower()` method.

``` java
Vehicle.getHorsePower(480, 2500));
```

[/slide]

[slide hideTitle]
# Problem with Solution: Say Hello

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-25-problem-and-solution-say-hello-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Say Hello" timeLimit=5000 taskId="Java-OOP-Advanced-Interfaces-And-Abstraction-Say-Hello" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description

**Using this UML diagram create the according class hierarchy.**

[image assetsSrc="interfaces-and-abstraction-example(7).png" /]

**Your implementation should work with this code:**

```java
public static void main(String[] args) {
    List<Person> persons = new ArrayList<>();

    
    persons.add(new Bulgarian("Peter"));
    persons.add(new European("Peter"));
    persons.add(new Chinese("Peter"));

    for (Person person : persons) {
        print(person);
    }
}

private static void print(Person person) {
    System.out.println(person.sayHello());
}
```

# Example
| **Output** |
| --- |
| Здравей |
| Hello |
| 你好 |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestClasses {

    // Error messages
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    // Class names
    private static final String PERSON = "Person";
    private static final String BULGARIAN = "Bulgarian";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";

    @Test
    public void test() {
        assertClassExists(PERSON);
        assertClassExists(BULGARIAN);
        assertClassExists(EUROPEAN);
        assertClassExists(CHINESE);
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethods {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String INTERFACE_PERSON = "Person";
    private static final String GET_NAME_METHOD_NAME = "getName";
    private static final String GET_SAY_HELLO_METHOD_NAME = "sayHello";

    @Test
    public void test() {

        assertClassExists(INTERFACE_PERSON);

        Class carClass = Classes.allClasses.get(INTERFACE_PERSON);

        Method[] carMethods = carClass.getMethods();
        assertMethod(carMethods, INTERFACE_PERSON, GET_NAME_METHOD_NAME, String.class);
        assertMethod(carMethods, INTERFACE_PERSON, GET_SAY_HELLO_METHOD_NAME, String.class);
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }

    private void assertMethod(Method[] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) {
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    }

    private void assertCorrectParameterTypes(Method method, String className, Class[] expectedParamTypes) {
        Class<?>[] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i < expectedParamTypes.length; i++) {

            Class expectedParamType = expectedParamTypes[i];
            if (expectedParamTypes[i] == int.class) {
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes[i] || expectedParamType == Integer.class);
            } else {
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes[i]);
            }
        }
    }

    private void assertCorrectReturnType(Method method, String className, Class returnType) {
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    }

    private Method getMethod(Method[] methods, String methodName) {
        return Stream.of(methods)
                .filter(m -> m.getName().equals(methodName))
                .findFirst()
                .get();
    }

    private void assertMethodExists(Method[] methods, String className, String methodName) {
        Optional<Method> methodOptional = Stream.of(methods)
                .filter(m -> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    }

    private boolean isCorrectReturnType(Method method, Class returnType) {

        if (returnType == int.class || returnType == Integer.class) {
            return method.getReturnType() == int.class || method.getReturnType() == Integer.class;
        } else {
            return method.getReturnType() == returnType;
        }
    }

    private void assertHasNoPrivateFields(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

public class TestConstructors {

    // Error messages
    private static final String CLASS_NOT_PRESENT = "Class '%s' not present";
    private static final String CONSTRUCTOR_NOT_PRESENT = "Constructor(%s) in class '%s' not present";

    // Class names
    private static final String[] classNames = new String[]{ "Bulgarian", "European", "Chinese" };

    // Method parameter types
    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Bulgarian", new Class[]{String.class});
        put("European", new Class[]{String.class});
        put("Chinese", new Class[]{String.class});
    }};

    @Test
    public void test() {
        for (String className : classNames) {
            assertClassExists(className);
        }

        for (String className : classNames) {
            Class currentClass = Classes.allClasses.get(className);

            try {
                Constructor constructor = currentClass.getDeclaredConstructor(constructorParameters.get(className));
            } catch (NoSuchMethodException e) {
                String constructorParams = String.join(", ", Arrays.asList(constructorParameters.get(className)).stream().map(c -> c.toString()).collect(Collectors.toList()));
                Assert.assertTrue(String.format(CONSTRUCTOR_NOT_PRESENT, constructorParams, className), false);
            }
        }
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT, className),
                Classes.allClasses.containsKey(className));
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Array;
import java.util.Arrays;

public class TestInterfaces {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String INTERFACE_PERSON = "Person";
    private static final String BULGARIAN = "Bulgarian";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";

    @Test
    public void test() {
        String[] interfacesNames = new String[] { INTERFACE_PERSON };

        assertClassInstanseOf(BULGARIAN, interfacesNames);
        assertClassInstanseOf(EUROPEAN, interfacesNames);
        assertClassInstanseOf(CHINESE, interfacesNames);
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }

    private void assertClassInstanseOf(String className, String[] interfaces) {
        Class child = Classes.allClasses.get(className);

        Class[] implementedInterfaces = child.getInterfaces();

        for (String anInterface : interfaces) {
            Class parent = Classes.allClasses.get(anInterface);
            Assert.assertTrue(
                    String.format(CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE, className, anInterface),
                    Arrays.asList(implementedInterfaces).contains(parent));
        }
    }
}
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethodsReturnedTypes {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String PERSON = "Person";
    private static final String GET_SAY_HELLO_METHOD_NAME = "sayHello";

    @Test
    public void test() {

        assertClassExists(PERSON);

        Class personClass = Classes.allClasses.get(PERSON);

        Method[] personMethods = personClass.getMethods();
        assertMethod(personMethods, PERSON, GET_SAY_HELLO_METHOD_NAME, String.class);
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }

    private void assertMethod(Method[] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) {
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    }

    private void assertCorrectParameterTypes(Method method, String className, Class[] expectedParamTypes) {
        Class<?>[] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i < expectedParamTypes.length; i++) {

            Class expectedParamType = expectedParamTypes[i];
            if (expectedParamTypes[i] == int.class) {
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes[i] || expectedParamType == Integer.class);
            } else {
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes[i]);
            }
        }
    }

    private void assertCorrectReturnType(Method method, String className, Class returnType) {
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    }

    private Method getMethod(Method[] methods, String methodName) {
        return Stream.of(methods)
                .filter(m -> m.getName().equals(methodName))
                .findFirst()
                .get();
    }

    private void assertMethodExists(Method[] methods, String className, String methodName) {
        Optional<Method> methodOptional = Stream.of(methods)
                .filter(m -> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    }

    private boolean isCorrectReturnType(Method method, Class returnType) {

        if (returnType == int.class || returnType == Integer.class) {
            return method.getReturnType() == int.class || method.getReturnType() == Integer.class;
        } else {
            return method.getReturnType() == returnType;
        }
    }

    private void assertHasNoPrivateFields(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
    }
}

[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Say Hello Extended

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Say-Hello-Extend-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Say Hello Extended" timeLimit=50000 taskId="Java-OOP-Advanced-Interfaces-And-Abstraction-Say-Hello-Extended" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description

**Create a code structure to follow the diagram.**

[image assetsSrc="interfaces-and-abstraction-example(8).png" /]

**Your code should function in the following context:**

```java
public static void main(String[] args) {
    List<Person> persons = new ArrayList<>();

    
    persons.add(new Bulgarian("Peter"));
    persons.add(new European("Peter"));
    persons.add(new Chinese("Peter"));

    for (Person person : persons) {
        print(person);
    }
}

private static void print(Person person) {
    System.out.println(person.sayHello());
}
```

# Example
| **Output** |
| --- |
| Здравей |
| Hello |
| 你好 |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class TestClasses \{

    // Error messages
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    // Class names
    private static final String PERSON = "Person";
    private static final String BULGARIAN = "Bulgarian";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";
    private static final String BASE_PERSON = "BasePerson";

    @Test
    public void test() \{
        assertClassExists(PERSON);
        assertClassExists(BULGARIAN);
        assertClassExists(EUROPEAN);
        assertClassExists(CHINESE);
        assertClassExists(BASE_PERSON);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestMethods \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String BASE_PERSON = "BasePerson";
    private static final String GET_NAME_METHOD_NAME = "getName";
    private static final String SET_NAME_METHOD_NAME = "setName";

    @Test
    public void test() \{

        assertClassExists(BASE_PERSON);

        Class carClass = Classes.allClasses.get(BASE_PERSON);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, BASE_PERSON, GET_NAME_METHOD_NAME, String.class);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertMethod(Method\[\] methods, String className, String methodName, Class returnType, Class... expectedParamTypes) \{
        assertMethodExists(methods, className, methodName);
        Method method = getMethod(methods, methodName);
        assertCorrectReturnType(method, className, returnType);
        assertCorrectParameterTypes(method, className, expectedParamTypes);
    \}

    private void assertCorrectParameterTypes(Method method, String className, Class\[\] expectedParamTypes) \{
        Class\<?\>\[\] actualParamTypes = method.getParameterTypes();
        Assert.assertTrue(String.format(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE, method.getName(), className),
                expectedParamTypes.length == actualParamTypes.length);

        for (int i = 0; i \< expectedParamTypes.length; i++) \{

            Class expectedParamType = expectedParamTypes\[i\];
            if (expectedParamTypes\[i\] == int.class) \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\] \|\| expectedParamType == Integer.class);
            \} else \{
                Assert.assertTrue(INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE,
                        expectedParamType == actualParamTypes\[i\]);
            \}
        \}
    \}

    private void assertCorrectReturnType(Method method, String className, Class returnType) \{
        Assert.assertTrue(String.format(INCORRECT_RETURN_TYPE_ERROR_MESSAGE, method.getName(), className),
                isCorrectReturnType(method, returnType));
    \}

    private Method getMethod(Method\[\] methods, String methodName) \{
        return Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst()
                .get();
    \}

    private void assertMethodExists(Method\[\] methods, String className, String methodName) \{
        Optional\<Method\> methodOptional = Stream.of(methods)
                .filter(m -\> m.getName().equals(methodName))
                .findFirst();

        Assert.assertTrue(String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, methodName, className),
                methodOptional.isPresent());
    \}

    private boolean isCorrectReturnType(Method method, Class returnType) \{

        if (returnType == int.class \|\| returnType == Integer.class) \{
            return method.getReturnType() == int.class \|\| method.getReturnType() == Integer.class;
        \} else \{
            return method.getReturnType() == returnType;
        \}
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.util.stream.Stream;

public class TestEncapsulation \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String BULGARIAN = "BasePerson";

    @Test
    public void test() \{
        assertHasNoPrivateFields(BULGARIAN);
    \}

    private void assertHasNoPrivateFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);

        Field\[\] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -\> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className),
                nonPrivateFieldsCount == 0);
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

public class TestConstructors \{

    // Error messages
    private static final String CLASS_NOT_PRESENT = "Class '%s' not present";
    private static final String CONSTRUCTOR_NOT_PRESENT = "Constructor(%s) in class '%s' not present";

    // Class names
    private static final String\[\] classNames = new String\[\]\{ "Bulgarian", "European", "Chinese", "BasePerson" \};

    // Method parameter types
    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Bulgarian", new Class\[\]\{String.class\});
        put("European", new Class\[\]\{String.class\});
        put("Chinese", new Class\[\]\{String.class\});
        put("BasePerson", new Class\[\]\{String.class\});
    \}\};

    @Test
    public void test() \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}

        for (String className : classNames) \{
            Class currentClass = Classes.allClasses.get(className);

            try \{
                Constructor constructor = currentClass.getDeclaredConstructor(constructorParameters.get(className));
            \} catch (NoSuchMethodException e) \{
                String constructorParams = String.join(", ", Arrays.asList(constructorParameters.get(className)).stream().map(c -\> c.toString()).collect(Collectors.toList()));
                Assert.assertTrue(String.format(CONSTRUCTOR_NOT_PRESENT, constructorParams, className), false);
            \}
        \}
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT, className),
                Classes.allClasses.containsKey(className));
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

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Bulgarian",
                "European",
                "Chinese",
        \};

        Class expectedParentClass = getType("BasePerson");

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType, expectedParentClass.getName());

            Class childClass = getType(classType);
            Class parentClass = childClass.getSuperclass();

            Assert.assertEquals(message, expectedParentClass, parentClass);
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.lang.reflect.Modifier;
import java.util.HashMap;

public class TestConstructorModifier \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "Method '%s' not present in class '%s'";
    private static final String INCORRECT_RETURN_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has incorrect return type";
    private static final String INCORRECT_PARAMETER_TYPE_ERROR_MESSAGE = "Method '%s' in class '%s' has one or more incorrect parameters";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String BASE_PERSON = "BasePerson";

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(BASE_PERSON, new Class\[\]\{String.class\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException \{

        assertClassExists(BASE_PERSON);

        Class basePersonClass = Classes.allClasses.get(BASE_PERSON);


        Constructor constructor = basePersonClass.getDeclaredConstructor(constructorParameters.get(BASE_PERSON));

        Assert.assertTrue(Modifier.isProtected(constructor.getModifiers()));
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
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
