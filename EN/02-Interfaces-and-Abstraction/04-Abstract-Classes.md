# Abstract Classes

[slide hideTitle]

# What Is an Abstract Class

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-28-29-abstract-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Abstract classes in Java are similar to **interfaces**, except they may contain default a method implementation.

They cannot be **instantiated**, because we **cannot create** objects of abstract classes.

An abstract class can have both **abstract** and **regular** methods.

``` java
abstract class Animal {
  public abstract void makeSound();
  public void sleep() {
    System.out.println("Zzzzz....");
  }
}
```

We cannot create an object from the Animal class in this example:

``` java
Animal obj = new Animal(); // This will generate an error
```

To access the abstract class, it must be inherited by another one.

``` java
// This is a subclass (inherited from Animal)
class Cat extends Animal {
  public void makeSound() {
    // The body of makeSound() is provided here
    System.out.println("Meow...");
  }
}
```

``` java
class Main {
  public static void main(String[] args) {
    Cat cat = new Cat(); // Create a cat object
    cat.makeSound();
    cat.sleep();
  }
}
```
[/slide]

[slide hideTitle]

# Abstract Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-30-abstract-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Abstract** methods are methods that do not have a body.

It is important to remember that if our class **contains** an abstract method, we must declare it as an **abstract** class.

Otherwise, we will get an error.

``` java
// class should be abstract
class Device {
  // abstract method
  abstract void call();
}
```

As we already know, **abstract** classes **cannot be** instantiated, but we can create `subclasses` from them.

After that, we can **access** members of our abstract class using a subclass object.

``` java
abstract class Device {

  // method of abstract class
  public void call() {
    System.out.println("Calling...");
  }
}
```
``` java
class Main extends Device {

  public static void main(String[] args) {
    
    // create an object of Main
    Main obj = new Main();

    // access method of abstract class
    // using object of Main class
    obj.call();
  }
}
```

The **output** here will be:

```
Calling...
```

In the example above, we create an abstract class called `Device`. 

This class contains a regular method called `call`.

Then, we place a `Main` class, which inherits the **abstract class**.

we instantiate `obj` which is an object of the child class called `Main`. 

We call a method of the abstract class, using our object (`obj`).

[/slide]

[slide hideTitle]
# Problem: Border Control

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/interactive-java-oop-advanced-interfaces-and-abstraction-problem-border-control-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Border Control" timeLimit=5000 taskId="Java-OOP-Advanced-Interfaces-And-Abstraction-Border-Control" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
In the future - you are the ruler of a totalitarian dystopian society inhabited by **citizens** and **robots**.

Since you are afraid of rebellions, you decide to implement strict control of who enters your city. 

Your soldiers check the **Ids** of everyone who enters and leaves.

You will receive an **unknown** amount of lines from the console.

Until the command "**End**" is received, on each line there will be information on either **a citizen** or **a robot** who wants to enter your city, the information comes in the following format:

- "\{**name**\} \{**age**\} \{**id**\}" for citizens 
- "\{**model**\} \{**id**\}" for robots

After the "**End**" command is met, on the next line you will receive a single number representing **the last digits of all fake ids**.

Аll citizens or robots whose **Id** ends in the specified digits must be detained.

The output should consist of all detained **Ids**, each on a separate line.

The output oder is not taken into consideration.

[image assetsSrc="interfaces-and-abstraction-example(9).png" /]


# Examples
## Example 1
| **Input** | **Output** |
| --- | --- |
| Peter 22 9010101122 | 9010101122 |
| MK-13 558833251 | 33283122 |
| MK-12 33283122 |  |
| End |  |
| 122 |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| Teo 31 7801211340 | 7801211340 |
| Anna 29 8007181534 |  |
| IV-228 999999 |  |
| Simon 54 3401018380 |  |
| KKK-666 80808080 |  |
| End |  |
| 340 |  |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Citizen",
            "Robot",
            "Identifiable",
    \};

    @Test
    public void test() \{
        assertExistingClasses(classNames);
    \}

    private void assertExistingClasses(String\[\] classNames) \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class T02TestFieldsExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' is missing";

    private static final String\[\] classNames = new String\[\]\{
            "Citizen",
            "Robot",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Citizen", new String\[\]\{"name", "age", "id"\});
                put("Robot", new String\[\]\{"id", "model"\});
            \}\};

    @Test
    public void test() \{
        assertHaveAllFields(classNames);
    \}

    private void assertHaveAllFields(String\[\] classNames) \{
        for (String className : classNames) \{
            haveAllFields(className);
        \}
    \}

    private void haveAllFields(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Field\[\] fields = cl.getDeclaredFields();

        for (String field : allNeededFields.get(className)) \{
            Assert.assertTrue(String.format(FIELD_IS_MISSING_ERROR_MESSAGE, field),
                    Arrays.stream(fields)
                            .anyMatch(x -\> x.getName().equalsIgnoreCase(field)));
        \}
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

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.List;

public class T03TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Citizen",
            "Robot",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Citizen", new Class\[\]\{String.class, int.class, String.class\});
        put("Robot", new Class\[\]\{String.class, String.class\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException \{
        assertConstructors(classNames);
    \}

    private void assertConstructors(String\[\] classNames) throws NoSuchMethodException \{
        for (String className : classNames) \{
            assertConstructorExists(className);
        \}
    \}

    private void assertConstructorExists(String className) throws NoSuchMethodException \{
        Class cl = Classes.allClasses.get(className);

        Constructor constructor = null;

        try \{
            constructor = cl.getDeclaredConstructor(constructorParameters.get(className));
        \} catch (Exception e) \{
        \}
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, className), constructor);

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

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T05TestAllMethodsExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Citizen";
    private static final String CLASS_NAME_2 = "Robot";
    private static final String CLASS_NAME_3 = "Identifiable";
    private static final String SEARCHED_METHOD_1 = "getName";
    private static final String SEARCHED_METHOD_2 = "getAge";
    private static final String SEARCHED_METHOD_3 = "getId";
    private static final String SEARCHED_METHOD_4 = "getModel";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4,
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_3,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, String.class);
        put(SEARCHED_METHOD_2, int.class);
        put(SEARCHED_METHOD_3, String.class);
        put(SEARCHED_METHOD_4, String.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{\});
        put(SEARCHED_METHOD_2, new Class\[\]\{\});
        put(SEARCHED_METHOD_3, new Class\[\]\{\});
        put(SEARCHED_METHOD_4, new Class\[\]\{\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException \{
        assertExistingMethods(classNames);
    \}

    private void assertExistingMethods(String\[\] classNames) throws NoSuchMethodException \{
        for (String className : classNames) \{

            Class cl = getClass(className);
            for (String methodName : methodsInClass.get(className)) \{
                Method method =
                        methodParameters.get(methodName).length == 0
                                ? cl.getDeclaredMethod(methodName)
                                : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
                Class\<?\> returnType = method.getReturnType();
                Assert.assertTrue(
                        String.format(METHOD_RETURN_TYPE_ERROR,
                                methodName,
                                className,
                                methodReturnTypes.get(methodName)),
                        returnType.equals(methodReturnTypes.get(methodName)));
            \}

        \}
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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

public class T04TestForNonPrivateFields \{
        private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
        private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

        private static final String\[\] classNames = new String\[\]\{
                "Citizen",
                "Robot",
        \};

        @Test
        public void test() \{
            assertPrivateFields(classNames);
        \}

        private void assertPrivateFields(String\[\] classNames) \{
            for (String className : classNames) \{
                assertHasNoPrivateFields(className);
            \}
        \}

        private void assertHasNoPrivateFields(String className) \{
            Class cl = getClass(className);
            Field\[\] fields = cl.getDeclaredFields();
            long nonPrivateFieldsCount = Stream.of(fields)
                    .filter(x -\> !Modifier.isPrivate(x.getModifiers()))
                    .count();

            Assert.assertEquals(String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className)
                    , 0, nonPrivateFieldsCount);

        \}

        private Class getClass(String className) \{
            Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                    Classes.allClasses.containsKey(className));

            return Classes.allClasses.get(className);
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

import java.util.Arrays;

public class T06TestCitizenInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String TESTED_CLASS = "Citizen";
    private static final String TESTED_INTERFACE = "Identifiable";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE\};

        assertClassInstanceOf(TESTED_CLASS, interfacesNames);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertClassInstanceOf(String className, String\[\] interfaces) \{
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

import java.util.Arrays;

public class T07TestRobotInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String TESTED_CLASS = "Robot";
    private static final String TESTED_INTERFACE = "Identifiable";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE\};

        assertClassInstanceOf(TESTED_CLASS, interfacesNames);
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}

    private void assertClassInstanceOf(String className, String\[\] interfaces) \{
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class T08TestCitizenGetNameMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, String.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER, NORMAL_ID_PARAMETER
        );
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    methodName,
                    CLASS_NAME,
                    methodReturnTypes.get(methodName)), returnType, methodReturnTypes.get(methodName));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return NORMAL_NAME_PARAMETER.equals(result.trim());
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T09TestCitizenGetAgeMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER, NORMAL_ID_PARAMETER
        );
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    methodName,
                    CLASS_NAME,
                    methodReturnTypes.get(methodName)), returnType, methodReturnTypes.get(methodName));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        int result = (int) method.invoke(this.currentObject);

        return NORMAL_AGE_PARAMETER == result;
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T10TestCitizenGetIdMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getId";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, String.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER, NORMAL_ID_PARAMETER
        );
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    methodName,
                    CLASS_NAME,
                    methodReturnTypes.get(methodName)), returnType, methodReturnTypes.get(methodName));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return NORMAL_ID_PARAMETER.equals(result.trim());
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T11TestRobotGetIdMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getId";
    private static final String CLASS_NAME = "Robot";
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_MODEL_PARAMETER = "normalModel";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, String.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_MODEL_PARAMETER, NORMAL_ID_PARAMETER
        );
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    methodName,
                    CLASS_NAME,
                    methodReturnTypes.get(methodName)), returnType, methodReturnTypes.get(methodName));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return NORMAL_ID_PARAMETER.equals(result.trim());
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T12TestRobotGetModelMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getModel";
    private static final String CLASS_NAME = "Robot";
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_MODEL_PARAMETER = "normalModel";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, String.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_MODEL_PARAMETER, NORMAL_ID_PARAMETER
        );
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    methodName,
                    CLASS_NAME,
                    methodReturnTypes.get(methodName)), returnType, methodReturnTypes.get(methodName));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return NORMAL_MODEL_PARAMETER.equals(result.trim());
    \}

    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
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
