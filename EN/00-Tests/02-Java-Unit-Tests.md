# Homework

[slide hideTitle]
# Problem: Person
[code-task title="Problem: Person" taskId="6149ff73-1837-40fc-96c1-08df5397cd19" executionType="tests-execution" executionStrategy="java-unit-tests" requiresInput]
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
You are asked to model an application for storing data about people. 

You should be able to have a **Person** and a **Child**. 

The child derives from the person. 

Every person has a **name**, and an **age**. 

Your task is to model the application.

The **Person** class also have **getters** for the fields.

Create a **Child** class that inherits **Person** and has the same public constructor definition. 

However, do not copy the code from the **Person** class - **reuse the Person class's constructor**.

## Note
You need a public class **Main**. Create a package **person**.

## Sample Main()

```java
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String name = sc.nextLine();
        int age = Integer.parseInt(sc.nextLine());

        Child child = new Child(name, age);

        System.out.println(child.getName());
        System.out.println(child.getAge());
    }
}
```

## Examples
| **Input** | **Output** |
| --- | --- |
| Peter | Peter |
| 13 | 13 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| George | George |
| 10 | 10 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Person",
                "Child"
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;

public class T00_TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present or args are invalid";

    private class ExpConstructor \{
        String className;
        Class\[\] constructorTypes;

        ExpConstructor(String className, Class\[\] constructorTypes) \{
            this.className = className;
            this.constructorTypes = constructorTypes;
        \}
    \}

    @Test
    public void validateFields() throws NoSuchMethodException \{
        Class aClass = getType("Person");

        ExpConstructor\[\] constructorsWithClasses = new ExpConstructor\[\]\{
                new ExpConstructor("Person", new Class\[\]\{String.class, Integer.TYPE\}),
                new ExpConstructor("Child", new Class\[\]\{String.class, Integer.TYPE\}),
        \};


        for (ExpConstructor constructorWithClass : constructorsWithClasses) \{
            assertConstructorExists(constructorWithClass);
        \}
    \}

    private void assertConstructorExists(ExpConstructor constructorArgs) throws NoSuchMethodException \{
        Class clazz = Classes.allClasses.get(constructorArgs.className);
        Constructor constructor = null;

        try \{
            constructor = clazz.getDeclaredConstructor(constructorArgs.constructorTypes);
        \} catch (NoSuchMethodException e) \{
        \}
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, constructorArgs.className), constructor);

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
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Arrays;

public class T00_TestMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";

    private class ExpMethod \{
        String name;
        Class\<?\>\[\] parameterTypes;

        public ExpMethod(String name, Class\<?\>... parameterTypes) \{
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateMethods() \{
        Class astronautClazz = getType("Person");

        ExpMethod\[\] astronautMethods = new ExpMethod\[\]\{
                new ExpMethod("getName"),
                new ExpMethod("getAge"),
        \};

        for (ExpMethod method : astronautMethods) \{
            ValidateMethod(astronautClazz, method);
        \}
    \}

    private void ValidateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedName = expMethod.name;
        Class\<?\>\[\] expectedParameterTypes = expMethod.parameterTypes;

        Method actualMethod = getMethod(clazz, expectedName, expectedParameterTypes);

        // Tests whether the method exist
        String actualMethodsParametersMessage = null;

        if (actualMethod == null) \{
            actualMethodsParametersMessage = findMethodFromMethods(clazz, expectedName);
        \}

        String existMessage = String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, clazz.getName(), expectedName, actualMethodsParametersMessage, arrayToString(expectedParameterTypes));
        Assert.assertNotNull(existMessage, actualMethod);
    \}

    private String arrayToString(Class\<?\>\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class\<?\> clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;

public class T00_TestPersonFields \{
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";

    private class ExpField \{
        String name;

        public ExpField(String name) \{
            this.name = name;
        \}
    \}

    @Test
    public void ValidateAstronautFields() \{
        Class astronautClazz = getType("Person");

        ExpField\[\] astronautFields = new ExpField\[\]\{
                new ExpField("name"),
                new ExpField("age"),
        \};

        for (ExpField field : astronautFields) \{
            validateField(astronautClazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
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

public class T01_TestParent \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";

    @Test
    public void testChildParent() \{
        String parentClassName = "Person";
        String childClassName = "Child";

        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, childClassName),
                Classes.allClasses.containsKey(childClassName));

        Class child = Classes.allClasses.get(childClassName);
        Class parent = child.getSuperclass();

        Assert.assertTrue(String.format(ERROR_MESSAGE, childClassName, parentClassName)
                , parent.getSimpleName().equals(parentClassName));
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

public class T02_TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present or args are invalid";

    private class ExpConstructor \{
        String className;
        Class\[\] constructorTypes;

        ExpConstructor(String className, Class\[\] constructorTypes) \{
            this.className = className;
            this.constructorTypes = constructorTypes;
        \}
    \}

    @Test
    public void validateFields() throws NoSuchMethodException \{
        Class aClass = getType("Person");

        ExpConstructor\[\] constructorsWithClasses = new ExpConstructor\[\]\{
                new ExpConstructor("Person", new Class\[\]\{String.class, Integer.TYPE\}),
                new ExpConstructor("Child", new Class\[\]\{String.class, Integer.TYPE\}),
        \};


        for (ExpConstructor constructorWithClass : constructorsWithClasses) \{
            assertConstructorExists(constructorWithClass);
        \}
    \}

    private void assertConstructorExists(ExpConstructor constructorArgs) throws NoSuchMethodException \{
        Class clazz = Classes.allClasses.get(constructorArgs.className);
        Constructor constructor = null;

        try \{
            constructor = clazz.getDeclaredConstructor(constructorArgs.constructorTypes);
        \} catch (NoSuchMethodException e) \{
        \}
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, constructorArgs.className), constructor);

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

import java.lang.reflect.Method;
import java.util.Arrays;

public class T03_TestMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";

    private class ExpMethod \{
        String name;
        Class\<?\>\[\] parameterTypes;

        public ExpMethod(String name, Class\<?\>... parameterTypes) \{
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateMethods() \{
        Class astronautClazz = getType("Person");

        ExpMethod\[\] astronautMethods = new ExpMethod\[\]\{
                new ExpMethod("getName"),
                new ExpMethod("getAge"),
        \};

        for (ExpMethod method : astronautMethods) \{
            ValidateMethod(astronautClazz, method);
        \}
    \}

    private void ValidateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedName = expMethod.name;
        Class\<?\>\[\] expectedParameterTypes = expMethod.parameterTypes;

        Method actualMethod = getMethod(clazz, expectedName, expectedParameterTypes);

        // Tests whether the method exist
        String actualMethodsParametersMessage = null;

        if (actualMethod == null) \{
            actualMethodsParametersMessage = findMethodFromMethods(clazz, expectedName);
        \}

        String existMessage = String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, clazz.getName(), expectedName, actualMethodsParametersMessage, arrayToString(expectedParameterTypes));
        Assert.assertNotNull(existMessage, actualMethod);
    \}

    private String arrayToString(Class\<?\>\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class\<?\> clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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

import java.lang.reflect.Field;

public class T04_TestPersonFields \{
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";

    private class ExpField \{
        String name;

        public ExpField(String name) \{
            this.name = name;
        \}
    \}

    @Test
    public void ValidateAstronautFields() \{
        Class astronautClazz = getType("Person");

        ExpField\[\] astronautFields = new ExpField\[\]\{
                new ExpField("name"),
                new ExpField("age"),
        \};

        for (ExpField field : astronautFields) \{
            validateField(astronautClazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T05_TestGettersInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateAstronautInstance() \{
        // Arrange
        Object expectedName = "Peter";
        Object expectedAge = 10;

        Object\[\] childArgs = new Object\[\] \{expectedName, expectedAge\};
        Class\<?\> childClass = getType("Child");
        Object childObject = createObjectInstance(childClass, childArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(childObject, childClass, "getName", null);
        Object actualAge = getMethodValue(childObject, childClass, "getAge", null);

        // Assert
        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, childClass.getName(), "getName", actualName, expectedName);
        String ageMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, childClass.getName(), "getAge", actualAge, expectedAge);
        Assert.assertEquals(nameMessage, expectedName, actualName);
        Assert.assertEquals(ageMessage, expectedAge, actualAge);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor\<?\> ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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