[slide]

# Interfaces

`Interfaces` in Java may look like a **class**, but they are not classses. 

An **interface** can have all the methods and variables like the class do, but the **methods** in the interface are **abstract** by default.

**Interfaces** in Java are used to specify a behavior that **classes** must **implement**.

We use **interfaces** when we want to achieve **security**.

As we know, Java does not support "**multiple inheritance**". However, we can achieve this easy with **interfaces**, because the class can **implement** multiple interfaces.

In this **example** we can see how **implementation** of `print()` is provided in class `Document`

``` java
public interface Printable {
    void print();
}
```

``` java
class Document implements Printable {  
  public void print() { 
    System.out.println("Hello"); 
    }
  public static void main(String args[]) {
    Printable doc = new Document();  // We achieve Polymorphism
    doc.print();  // Hello
  }
}
```
In Java, interface can **extend another interface**.

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

[/slide]

[slide]
# Difference between Implement and Extends

[image assetsSrc="Interfaces-and-Abstraction-example(3).png" /]

[/slide]

[slide hideTitle]
# Problem: Car Shop
[code-task title="Problem: Car Shop" taskId="9b690dc4-1cb1-419b-8919-1b6baf0ff337" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Build hierarchy from **classes** and **interfaces** for this UML diagram

[image assetsSrc="interfaces-and-abstraction-example(5)).png" /]

**Your hierarchy have to be used with this code**
```java
public static void main(String[] args) {
    Car seat = new Seat("Leon", "gray", 110, "Spain");

    System.out.println(String.format(
            "%s is %s color and have %s horse power",
            seat.getModel(),
            seat.getColor(),
            seat.getHorsePower()));
    System.out.println(seat.toString());
}
```

## Note
Consider using the wrapper classes in the **Seat** constructor.

## Examples
| **Input** | **Output** |
| --- | --- |
|  | Leon is gray color and have 110 horse power |
|  | This is Leon produced in Spain and have 4 tires |

[/task-description]
[code-io /]
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

[slide]
# Solution: Car Shop

[/slide]

[slide hideTitle]
# Problem: Car Shop Extend
[code-task title="Problem: Car Shop Extend" taskId="ae154817-fbb0-45c9-80f0-b50a314d1442" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Extend previous problem: 

[image assetsSrc="interfaces-and-abstraction-example(6)).png" /]

**Your hierarchy has to be used with this code**

```java
public static void main(String[] args) {
    Sellable seat = new Seat("Leon", "Gray", 110, "Spain", 11111.1);
    Rentable audi = new Audi("A4", "Gray", 110, "Germany", 3, 99.9);

    printCarInfo(seat);
    printCarInfo(audi);
}

private static void printCarInfo(Car car) {
    System.out.println(String.format(
            "%s is %s color and have %s horse power",
            car.getModel(),
            car.getColor(),
            car.getHorsePower()));
    System.out.println(car.toString());
}
```

## Examples
| **Input** | **Output** |
| --- | --- |
|  | Leon is Gray color and have 110 horse power |
|  | This is Leon produced in Spain and have 4 tires |
|  | Leon sells for 11111,100000 |
|  | A4 is Gray color and have 110 horse power |
|  | This is A4 produced in Germany and have 4 tires |
|  | Minimum rental period of 3 days. Price per day 99,900000 |

[/task-description]
[code-io /]
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

[slide]
# Solution: Car Shop Extended:

[/slide]

[slide]

## Default Method

Java 8 introduces the "Default method" feature.

This allows us to **add** different methods to the **existing interfaces** without breaking their current implementation.

``` java
public interface Drawable {
  void draw();
  default void msg() {
    System.out.println("default method:");
  }
}
```
We don't need implementation for **default methods**.

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

[slide]

## Static Method

Another thing we can do since Java 8 is to **define** and **implement** `static` methods in interfaces.

We can define static methods in interfaces identical to defining one in class. They can be also invoked within other methods.

To understand better let's take a look in this example:

``` java
public interface Car {
    
    // default methods
    static int getHorsePower(int torque, int rpm) {
        return (torque * rpm) / 5252;
    }
}
```

Now, if we want to calculate the **horsepower** of our car's engine we just call our `getHorsePower()` method.

``` java
Vehicle.getHorsePower(480, 2500));
```

[/slide]

[slide]
# Problem: Say Hello
[code-task title="Problem: Say Hello" taskId="8c1737fd-7ac9-4031-b8e6-d39e8a85bbcd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Build hierarchy from classes and interfaces for this UML diagram**

[image assetsSrc="interfaces-and-abstraction-example(7)).png" /]

**Your hierarchy have to be used with this code**
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

## Examples
| **Input** | **Output** |
| --- | --- |
|  | Hi |
|  | Hello |
|  | Djydjybydjy |

[/task-description]
[code-io /]
[tests]
[test]
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

    @Test
    public void test() \{
        assertClassExists(PERSON);
        assertClassExists(BULGARIAN);
        assertClassExists(EUROPEAN);
        assertClassExists(CHINESE);
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

    private static final String INTERFACE_PERSON = "Person";
    private static final String GET_NAME_METHOD_NAME = "getName";
    private static final String GET_SAY_HELLO_METHOD_NAME = "sayHello";

    @Test
    public void test() \{

        assertClassExists(INTERFACE_PERSON);

        Class carClass = Classes.allClasses.get(INTERFACE_PERSON);

        Method\[\] carMethods = carClass.getMethods();
        assertMethod(carMethods, INTERFACE_PERSON, GET_NAME_METHOD_NAME, String.class);
        assertMethod(carMethods, INTERFACE_PERSON, GET_SAY_HELLO_METHOD_NAME, String.class);
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

    private static final String BULGARIAN = "Bulgarian";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";

    @Test
    public void test() \{
        assertHasNoPrivateFields(BULGARIAN);
        assertHasNoPrivateFields(EUROPEAN);
        assertHasNoPrivateFields(CHINESE);
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
    private static final String\[\] classNames = new String\[\]\{ "Bulgarian", "European", "Chinese" \};

    // Method parameter types
    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Bulgarian", new Class\[\]\{String.class\});
        put("European", new Class\[\]\{String.class\});
        put("Chinese", new Class\[\]\{String.class\});
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

import java.lang.reflect.Array;
import java.util.Arrays;

public class TestInterfaces \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String INTERFACE_PERSON = "Person";
    private static final String BULGARIAN = "Bulgarian";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";

    @Test
    public void test() \{
        String\[\] interfacesNames = new String\[\] \{ INTERFACE_PERSON \};

        assertClassInstanseOf(BULGARIAN, interfacesNames);
        assertClassInstanseOf(EUROPEAN, interfacesNames);
        assertClassInstanseOf(CHINESE, interfacesNames);
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

    private static final String PERSON = "Person";
    private static final String GET_SAY_HELLO_METHOD_NAME = "sayHello";

    @Test
    public void test() \{

        assertClassExists(PERSON);

        Class personClass = Classes.allClasses.get(PERSON);

        Method\[\] personMethods = personClass.getMethods();
        assertMethod(personMethods, PERSON, GET_SAY_HELLO_METHOD_NAME, String.class);
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
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Say Hello

[/slide]


[slide]
# Problem: Say Hello Extend
[code-task title="Problem: Say Hello Extend" taskId="262958a5-e60f-4073-a6d2-c4d45d434e82" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Build hierarchy from classes and interfaces for this UML diagram**

[image assetsSrc="interfaces-and-abstraction-example(8)).png" /]

**Your hierarchy have to be used with this code**
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

## Examples
| **Input** | **Output** |
| --- | --- |
|  | Hi |
|  | Hello |
|  | Djydjybydjy |

[/task-description]
[code-io /]
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
    private static final String AMERICAN = "American";
    private static final String EUROPEAN = "European";
    private static final String CHINESE = "Chinese";
    private static final String BASE_PERSON = "BasePerson";

    @Test
    public void test() \{
        assertClassExists(PERSON);
        assertClassExists(AMERICAN);
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

    private static final String AMERICAN = "BasePerson";

    @Test
    public void test() \{
        assertHasNoPrivateFields(AMERICAN);
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
    private static final String\[\] classNames = new String\[\]\{ "American", "European", "Chinese", "BasePerson" \};

    // Method parameter types
    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("American", new Class\[\]\{String.class\});
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
                "American",
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


[slide]
# Solution: Say Hello Extended

[/slide]