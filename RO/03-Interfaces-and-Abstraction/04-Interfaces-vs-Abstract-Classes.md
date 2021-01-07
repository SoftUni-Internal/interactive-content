[slide]


# Interfaces vs Abstract Classes

Once again, lets see the main differences between `Interfaces` and `Abstract` classes.

[image assetsSrc="Interfaces-And-Abstraction-example(4).png" /]


From that chart we can assume that we can use `interfaces` when we need to achieve **multiple inheritance**, **full abstraction** by implementing all methods declared in the interface by a class which implements the interface.

We use `abstraction` when some classes need to share few lines of code. We can put these lines of code in an abstract class and extend by all other related classes.

[/slide]

[slide]
# Problem: Ferrari
[code-task title="Problem: Ferrari" taskId="8b0c7e60-09d4-4929-b2b3-df0a2d34dffa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Model an application which contains a **class Ferrar**i and an **interface**. 

Your task is simple, you have a **car - Ferrari**, its model is "**488-Spider**" and it has a **driver**. 

Your Ferrari should have functionality to **use brakes** and **push the gas pedal**. 

When the **brakes** are pushed down **print "Brakes!"**, and when the **gas peda**l is pushed down - **"Gas!"**. 

As you may have guessed this functionality is typical for all cars, so you should **implement an interface** to describe it.

Your task is to **create a Ferrari** and **set the driver's name** to the passed one in the input. 

After that, print the info. Take a look at the Examples to understand the task better.

[image assetsSrc="interfaces-and-abstraction-example(10).png" /]

## Input
On the **single input line**, you will be given the **driver's name**.

## Output
On the **single output line**, print the model, the messages from the brakes and gas pedal methods and the driver's name. In the following format:
**"{model}/{brakes}/{gas pedal}/{driver's name}"**

## Constraints
The input will always be valid, no need to check it explicitly! The Driver's name may contain any ASCII characters.


## Examples
| **Input** | **Output** |
| --- | --- |
| Dominic Toretto | 488-Spider/Brakes!/brum-brum-brum-brrrrr/Dominic Toretto |

| **Input** | **Output** |
| --- | --- |
| Brian O'Conner | 488-Spider/Brakes!/brum-brum-brum-brrrrr/Brian O'Conner |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Car",
            "Ferrari",
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
            "Ferrari",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Ferrari", new String\[\]\{"driverName", "model"\});
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

public class T03TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Ferrari",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Ferrari", new Class\[\]\{String.class\});
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
    private static final String CLASS_NAME = "Car";
    private static final String CLASS_NAME_2 = "Ferrari";
    private static final String SEARCHED_METHOD_1 = "brakes";
    private static final String SEARCHED_METHOD_2 = "gas";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, String.class);
        put(SEARCHED_METHOD_2, String.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{\});
        put(SEARCHED_METHOD_2, new Class\[\]\{\});
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
                "Ferrari",
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

public class T06TestInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not istance of %s";

    private static final String TESTED_CLASS = "Ferrari";
    private static final String TESTED_INTERFACE = "Car";

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
import java.util.HashMap;

public class T07TestBrakes \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "brakes";
    private static final String CLASS_NAME = "Ferrari";
    private static final String NORMAL_DRIVER_NAME_PARAMETER = "normalDriver";
    private static final String EXPECTED_RESULT = "Brakes!";


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
                String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_DRIVER_NAME_PARAMETER
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

        return EXPECTED_RESULT.equals(result);
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

public class T08TestGas \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "gas";
    private static final String CLASS_NAME = "Ferrari";
    private static final String NORMAL_DRIVER_NAME_PARAMETER = "normalDriver";
    private static final String EXPECTED_RESULT = "brum-brum-brum-brrrrr";


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
                String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_DRIVER_NAME_PARAMETER
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

        return EXPECTED_RESULT.equals(result);
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

[slide]
# Solution: Ferrari

[/slide]