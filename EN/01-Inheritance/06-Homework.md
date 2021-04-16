# Homework

[slide hideTitle]
# Problem: Person
[code-task title="Person" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Person" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Мodel an application that stores data about different people. 

It should allow for a **Person** or a **Child** to be entered. 

The child class derives from the person class. 

Each person has a **name**, and an **age**. 

The **Person** class should also have **getters** for its fields.

Create a **Child** class that inherits **Person** and has the same public constructor definition. 

Attention: **Reuse the Person class's constructor**.

## Note
You need a public class **Main**. 

Create a package called **person**.

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

# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| Peter | Peter |
| 13 | 13 |
|  |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| George | George |
| 10 | 10 |

[/task-description]
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

[slide hideTitle]
# Problem: Zoo
[code-task title="Zoo" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Zoo" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a package called "zoo". It should contain the following classes: 

[image assetsSrc="inheritance-example(19).png" /]

Follow the diagram and create the described structure. 

**Each** one, except the **Animal** class, should **extend** **another class**. 

The Animal class must contain the fields: **name – String** and a **Getter** for its **name**.

Every class must have:
- A public constructor, which accepts one parameter: **name**

## Submit

**Zip** your package and upload it.

## Note: 
A public class Main is necessary to run the code.

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' type doesn't exist!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Animal",
                "Reptile",
                "Mammal",
                "Lizard",
                "Snake",
                "Gorilla",
                "Bear",
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01_TestIsAssignableFromAnimal \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Reptile",
                "Mammal",
        \};

        Class expectedParentClass = getType("Animal");

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

public class T02_TestIsAssignableFromReptile \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Lizard",
                "Snake",
        \};

        Class expectedParentClass = getType("Reptile");

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

public class T03_TestIsAssignableFromMammal \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Gorilla",
                "Bear",
        \};

        Class expectedParentClass = getType("Mammal");

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
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Players and Monsters
[code-task title="Players and Monsters" taskId="Java-OOP-Advanced-Inheritance-Players-and-Monsters" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Your task is to create the following game hierarchy: 

[image assetsSrc="inheritance-example(20).png" /]

Create a "Hero" class. It should contain the following members:
- A public constructor, which accepts:
    - **username – String**
    - **level – int**
- The following fields:
    - **username - String**
    - **level – int**
- Getters for the username and the level
- `toString()` method

## Hint: Override the `toString()` method of the base class in the following way:
```java
@Override
public String toString() {
    return String.format("Type: %s Username: %s Level: %s",
            this.getClass().getName(),
            this.getUsername(),
            this.getLevel());
```

## Note
You need a public **Main** class. Create a package called **hero**.

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' type doesn't exist!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "BladeKnight",
                "DarkKnight",
                "DarkWizard",
                "Elf",
                "Hero",
                "Knight",
                "MuseElf",
                "SoulMaster",
                "Wizard",
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01_TestIsAssignableFromHero \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Elf",
                "Wizard",
                "Knight",
        \};

        Class expectedParentClass = getType("Hero");

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

public class T02_TestIsAssignableFromElf \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "MuseElf",
        \};

        Class expectedParentClass = getType("Elf");

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

public class T03_TestIsAssignableFromWizard \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "DarkWizard",
        \};

        Class expectedParentClass = getType("Wizard");

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

public class T04_TestIsAssignableFromDarkWizard \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "SoulMaster",
        \};

        Class expectedParentClass = getType("DarkWizard");

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

public class T05_TestIsAssignableFromKnight \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "DarkKnight",
        \};

        Class expectedParentClass = getType("Knight");

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

public class T06_TestIsAssignableFromDarkKnight \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "BladeKnight",
        \};

        Class expectedParentClass = getType("DarkKnight");

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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T07_TestToStringMethodInstances \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        Object\[\] bladeKnightArgs = new Object\[\]\{"New Hero", 25\};
        Class\<?\> bladeKnightClass = getType("BladeKnight");
        Object bladeKnightObject = createObjectInstance(bladeKnightClass, bladeKnightArgs);

        // Act
        // Invoke methods
        Object actualBladeKnightToString = getMethodValue(bladeKnightObject, bladeKnightClass, "toString", null);

        // Assert
        String expectedBladeKnightToString = "Type: hero.BladeKnight Username: New Hero Level: 25";
        String bladeKnightMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, bladeKnightClass.getName(), "toString", actualBladeKnightToString, expectedBladeKnightToString);
        Assert.assertEquals(bladeKnightMessage, actualBladeKnightToString, expectedBladeKnightToString);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

[slide hideTitle]
# Problem: Need for Speed
[code-task title="Need for Speed" taskId="Java-OOP-Advanced-Inheritance-Need-For-Speed" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Description
Create the following **hierarchy** with the following **classes**: 

[image assetsSrc="inheritance-example(21).png" /]

Create a base class called "Vehicle". It should possess the following members:
- **DEFAULT_FUEL_CONSUMPTION** – **final static double (constant)**
- **fuelConsumption – double**
- **fuel – double**
- **horsePower – int**
- **Getters and Setters for all fields**
- A public constructor which accepts (**fuel, horsePower**) and sets the **default fuel consumption** of the field called **fuelConsumption**
- **void drive(double kilometers)**
    - The **drive** method should have contain code logic to reduce the **fuel** based on the travelled kilometers and fuel consumption. 
    Keep in mind that you can drive the vehicle only if you have enough fuel to finish the drive.

The default fuel consumption for a **Vehicle** is **1.25**. Some of the classes have different default fuel consumptions:
- **SportCar – DEFAULT_FUEL_CONSUMPTION = 10**
- **RaceMotorcycle – DEFAULT_FUEL_CONSUMPTION = 8**
- **Car – DEFAULT_FUEL_CONSUMPTION = 3**

## Submit 

**Zip** your package and upload it.

## Hint	
In the child classes' constructors use `super.setFuelConsumption()` to set **fuelConsumption**

## Note
a public class **Main** should be present. 

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' type doesn't exist!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Vehicle",
                "Motorcycle",
                "Car",
                "RaceMotorcycle",
                "CrossMotorcycle",
                "FamilyCar",
                "SportCar",

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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01_TestIsAssignableFromVehicle \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Motorcycle",
                "Car",
        \};

        Class expectedParentClass = getType("Vehicle");

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

public class T02_TestIsAssignableFromMotorcycle \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "RaceMotorcycle",
                "CrossMotorcycle",
        \};

        Class expectedParentClass = getType("Motorcycle");

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

public class T03_TestIsAssignableFromCar \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "FamilyCar",
                "SportCar",
        \};

        Class expectedParentClass = getType("Car");

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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T04_TestSportCarInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        Object\[\] vehicleArgs = new Object\[\]\{10.0, 200\};
        Class\<?\> vehicleClass = getType("SportCar");
        Object vehicleObject = createObjectInstance(vehicleClass, vehicleArgs);

        // Act
        // Invoke methods
        getMethodValue(vehicleObject, vehicleClass, "drive", new Object\[\]\{1\}, double.class);
        Object actualFuel = getMethodValue(vehicleObject, vehicleClass, "getFuel", null);
        Object actualFuelConsumption = getMethodValue(vehicleObject, vehicleClass, "getFuelConsumption", null);
        Object actualHorsePower = getMethodValue(vehicleObject, vehicleClass, "getHorsePower", null);

        // Assert
        double expectedFuel = 0;
        double expectedFuelConsumption = 10;
        int expectedHorsePower = 200;

        String fuelMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuel", actualFuel, expectedFuel);
        Assert.assertEquals(fuelMessage, actualFuel, expectedFuel);

        String fuelConsumptionMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuelConsumption", actualFuelConsumption, expectedFuelConsumption);
        Assert.assertEquals(fuelConsumptionMessage, actualFuelConsumption, expectedFuelConsumption);

        String horsePowerMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getHorsePower", actualHorsePower, expectedHorsePower);
        Assert.assertEquals(horsePowerMessage, actualHorsePower, expectedHorsePower);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T05_TestRaceMotorcycleInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        Object\[\] vehicleArgs = new Object\[\]\{100.0, 200\};
        Class\<?\> vehicleClass = getType("RaceMotorcycle");
        Object vehicleObject = createObjectInstance(vehicleClass, vehicleArgs);

        // Act
        // Invoke methods
        getMethodValue(vehicleObject, vehicleClass, "drive", new Object\[\]\{10\}, double.class);
        Object actualFuel = getMethodValue(vehicleObject, vehicleClass, "getFuel", null);
        Object actualFuelConsumption = getMethodValue(vehicleObject, vehicleClass, "getFuelConsumption", null);
        Object actualHorsePower = getMethodValue(vehicleObject, vehicleClass, "getHorsePower", null);

        // Assert
        double expectedFuel = 20;
        double expectedFuelConsumption = 8;
        int expectedHorsePower = 200;

        String fuelMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuel", actualFuel, expectedFuel);
        Assert.assertEquals(fuelMessage, actualFuel, expectedFuel);

        String fuelConsumptionMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuelConsumption", actualFuelConsumption, expectedFuelConsumption);
        Assert.assertEquals(fuelConsumptionMessage, actualFuelConsumption, expectedFuelConsumption);

        String horsePowerMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getHorsePower", actualHorsePower, expectedHorsePower);
        Assert.assertEquals(horsePowerMessage, actualHorsePower, expectedHorsePower);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T06_TestFamilyCarInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        Object\[\] vehicleArgs = new Object\[\]\{10.0, 200\};
        Class\<?\> vehicleClass = getType("FamilyCar");
        Object vehicleObject = createObjectInstance(vehicleClass, vehicleArgs);

        // Act
        // Invoke methods
        getMethodValue(vehicleObject, vehicleClass, "drive", new Object\[\]\{1\}, double.class);
        Object actualFuel = getMethodValue(vehicleObject, vehicleClass, "getFuel", null);
        Object actualFuelConsumption = getMethodValue(vehicleObject, vehicleClass, "getFuelConsumption", null);
        Object actualHorsePower = getMethodValue(vehicleObject, vehicleClass, "getHorsePower", null);

        // Assert
        double expectedFuel = 7;
        double expectedFuelConsumption = 3;
        int expectedHorsePower = 200;

        String fuelMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuel", actualFuel, expectedFuel);
        Assert.assertEquals(fuelMessage, actualFuel, expectedFuel);

        String fuelConsumptionMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getFuelConsumption", actualFuelConsumption, expectedFuelConsumption);
        Assert.assertEquals(fuelConsumptionMessage, actualFuelConsumption, expectedFuelConsumption);

        String horsePowerMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, vehicleClass.getName(), "getHorsePower", actualHorsePower, expectedHorsePower);
        Assert.assertEquals(horsePowerMessage, actualHorsePower, expectedHorsePower);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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

[slide hideTitle]
# Problem: Restaurant
[code-task title="Restaurant" taskId="Java-OOP-Advanced-Inheritance-Restaurant" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Description
Create a **restaurant** package with the following classes and hierarchy:

There is Food and Beverages in the restaurant and they are all "products".

The **Product** class must have the following members:

- A public constructor with the following parameters: **String name, BigDecimal price**
- **name – String**
- **price – BigDecimal**
- **Getters for all fields**

The **Beverage** and the **Food** classes are "products". 

The **Beverage** class must have the following members:
- A public constructor with the following parameters: **String name, BigDecimal price, double milliliters**
- **name – String**
- **price – BigDecimal**
- **milliliters – double**
- **A Getter for "milliliters"**

The **Food** class must have the following members:
- A constructor with the following parameters: **String name, BigDecimal price, double grams**
- **name – String**
- **price – double**
- **grams – double**
- **A Getter for "grams"**

**HotBeverage** and **ColdBeverage** are **beverages** and they accept the following parameters upon initialization: **String name, BigDecimal price, double milliliters**

**Coffee** and **Tea** are **hot beverage**s. The **Coffee** class must have the following additional members:
- `double COFFEE_MILLILITERS = 50`
- `BigDecimal COFFEE_PRICE = 3.50`
- **caffeine – double**
- A Getter for **caffeine**

**MainDish**, **Dessert** and **Starter** are all **food**.
 They all accept the following parameters upon initialization: **String name, BigDecimal price, double grams**. 
 The **Dessert** class should accept one more parameter in its constructor: **double calories**.
- **calories – double**
- A **Getter for "calories"**

**Salmon**, **Soup** and **Cake** inherit the appropriate class.

The **Cake** class should have the following members upon initialization:
- `double CAKE_GRAMS = 250`
- `double CAKE_CALORIES = 1000`
- `BigDecimal CAKE_PRICE = 5`
The **Salmon** class should have the following members upon initialization:
- `double SALMON_GRAMS = 22`

## Note
There should be a public **Main** class. 

Create a **restaurant** package.

## Submit

**Zip** your package and upload it.

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' type doesn't exist!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Product",
                "Beverage",
                "Coffee",
                "ColdBeverage",
                "HotBeverage",
                "Tea",
                "Cake",
                "Dessert",
                "Food",
                "MainDish",
                "Salmon",
                "Soup",
                "Starter"
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01_TestIsAssignableFromProduct \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Beverage",
                "Food",
        \};

        Class expectedParentClass = getType("Product");

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

public class T02_TestIsAssignableFromBeverage \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssertBeverage = new String\[\]\{
                "ColdBeverage",
                "HotBeverage",
        \};
        Class expectedParentClassBeverage = getType("Beverage");

        validateTypeExist(classTypesToAssertBeverage, expectedParentClassBeverage);

        String\[\] classTypesToAssertHotBeverage = new String\[\]\{
                "Coffee",
                "Tea",
        \};
        Class expectedParentClassHotBeverage = getType("HotBeverage");

        validateTypeExist(classTypesToAssertHotBeverage, expectedParentClassHotBeverage);

    \}

    private static void validateTypeExist(String\[\] classTypesToAssert, Class expectedParentClass) \{
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

public class T03_TestIsAssignableFromFood \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssertFood = new String\[\]\{
                "MainDish",
                "Dessert",
                "Starter",
        \};

        Class expectedParentClassFood = getType("Food");
        validateTypeExist(classTypesToAssertFood, expectedParentClassFood);


        String\[\] classTypesToAssertMainDish = new String\[\]\{
                "Salmon",
        \};

        Class expectedParentClassMainDish = getType("MainDish");
        validateTypeExist(classTypesToAssertMainDish, expectedParentClassMainDish);
    \}

    private static void validateTypeExist(String\[\] classTypesToAssert, Class expectedParentClass) \{
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

public class T04_TestIsAssignableFromFood \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssertDessert = new String\[\]\{
                "Cake",
        \};

        Class expectedParentClassDessert = getType("Dessert");
        validateTypeExist(classTypesToAssertDessert, expectedParentClassDessert);


        String\[\] classTypesToAssertStarter = new String\[\]\{
                "Soup",
        \};

        Class expectedParentClassStarter = getType("Starter");
        validateTypeExist(classTypesToAssertStarter, expectedParentClassStarter);

    \}

    private static void validateTypeExist(String\[\] classTypesToAssert, Class expectedParentClass) \{
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.Arrays;

public class T05_TestCakeInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Nedelq";

        Object\[\] cakeArgs = new Object\[\]\{expectedName\};
        Class\<?\> cakeClass = getType("Cake");
        Object cakeObject = createObjectInstance(cakeClass, cakeArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(cakeObject, cakeClass, "getName", null);
        Object actualPrice = getMethodValue(cakeObject, cakeClass, "getPrice", null);
        Object actualCalories = getMethodValue(cakeObject, cakeClass, "getCalories", null);
        Object actualGrams = getMethodValue(cakeObject, cakeClass, "getGrams", null);

        // Assert
        BigDecimal expectedPrice = new BigDecimal(5);
        double expectedCalories = 1000.0;
        double expectedGrams = 250.0;

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, cakeClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String priceMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, cakeClass.getName(), "getPrice", actualPrice, expectedPrice);
        Assert.assertEquals(priceMessage, actualPrice, expectedPrice);

        String caloriesMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, cakeClass.getName(), "getCalories", actualCalories, expectedCalories);
        Assert.assertEquals(caloriesMessage, actualCalories, expectedCalories);

        String gramsMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, cakeClass.getName(), "getGrams", actualGrams, expectedGrams);
        Assert.assertEquals(gramsMessage, actualGrams, expectedGrams);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.Arrays;

public class T06_TestCoffeeInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Lavazza";
        double expectedCaffeine = 1.2;

        Object\[\] caffeineArgs = new Object\[\]\{expectedName, expectedCaffeine\};
        Class\<?\> caffeineClass = getType("Coffee");
        Object caffeineObject = createObjectInstance(caffeineClass, caffeineArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(caffeineObject, caffeineClass, "getName", null);
        Object actualPrice = getMethodValue(caffeineObject, caffeineClass, "getPrice", null);
        Object actualCaffeine = getMethodValue(caffeineObject, caffeineClass, "getCaffeine", null);
        Object actualMilliliters = getMethodValue(caffeineObject, caffeineClass, "getMilliliters", null);

        // Assert
        BigDecimal expectedPrice = new BigDecimal(3.5);
        double expectedMilliliters = 50.0;

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, caffeineClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String priceMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, caffeineClass.getName(), "getPrice", actualPrice, expectedPrice);
        Assert.assertEquals(priceMessage, actualPrice, expectedPrice);

        String caffeineMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, caffeineClass.getName(), "getCaffeine", actualCaffeine, expectedCaffeine);
        Assert.assertEquals(caffeineMessage, actualCaffeine, expectedCaffeine);

        String millilitersMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, caffeineClass.getName(), "getMilliliters", actualMilliliters, expectedMilliliters);
        Assert.assertEquals(millilitersMessage, actualMilliliters, expectedMilliliters);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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

[slide hideTitle]
# Problem: Animals

[code-task title="Animals" taskId="Java-OOP-Advanced-Inheritance-Animals" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Description
Create a hierarchy(package) of **animals**. 

Your program should have three different animals – **Dog**, **Frog** and **Cat**. 

Deeper in the hierarchy you should have two additional classes – **Kitten** and **Tomcat**. 

**Kittens are "Female" and Tomcats are "Male".**

All types of animals should be able to produce some kind of sound - `String produceSound()`.

For example, the dog should be able to bark.

 Your task is to model the hierarchy and test its functionality. 

 Create an animal of each kind and make them all produce sound and create getters for all fields.

## Input
You will be given some lines of input.

Each two lines will represent an animal.

On the first line will be the type of animal and on the second – the name, the age and the gender. 

When the command "**Beast!**" is given, stop the input and print all the animals in the format shown below.

## Output
- Print the information for each animal on three lines. On the first line, print: "\{**animalType**\}"
- On the second line print: "\{**name**\} \{**age**\} \{**gender**\}"
- On the third line print the sounds it produces: "\{**produceSound()**\}"

## Constraints
- Each **Animal** should have a **name**, an **age** and a **gender**
- **All** input values should **not be blank** (e.g. name, age and so on…)
- If you receive an input for the **gender** of a **Tomcat** or a **Kitten**, ignore it but **create** the animal
- If the input is invalid for one of the properties, throw an exception with message: "**Invalid input!**"
- Each animal should have the functionality to `produceSound()`
- Here is the type of sound each animal should produce:
    - **Dog: "Woof!"**
    - **Cat: "Meow meow"**
    - **Frog: "Ribbit"**
    - **Kittens: "Meow"**
    - **Tomcat: "MEOW"**

## Hint
To find the name of the class you can use `this.getClass().getSimpleName()` in `toString()` method inside **Animal** class.

## Note
You need a public class **Main**.


# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| Cat | Cat  |
| Tom 12 Male | Tom 12 Male |
| Dog | Meow meow |
| Rex 132 Male | Dog  |
| Beast! | Rex 132 Male |
|  | Woof! |
|  |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| Frog | Frog  |
| Kermit 12 Male | Kermit 12 Male |
| Beast! | Ribbit |
|  |  |

| **Input** | **Output** |
| --- | --- |
| Frog | Invalid input! |
| Froakie -2 Male | Frog |
| Frog | Froakie 2 Male |
| Froakie 2 Male | Ribbit |
| Beast! |  |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' type doesn't exist!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Animal",
                "Cat",
                "Dog",
                "Frog",
                "Kitten",
                "Tomcat",
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01_TestIsAssignableFromAnimal \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Dog",
                "Cat",
                "Frog",
        \};

        Class expectedParentClass = getType("Animal");

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

public class T02_TestIsAssignableFromCat \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "'%s' should inherit from '%s'!";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Kitten",
                "Tomcat",
        \};

        Class expectedParentClass = getType("Cat");

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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.Arrays;

public class T03_TestDogInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Sharo";
        int expectedAge = 12;
        String expectedGender = "Male";

        Object\[\] animalArgs = new Object\[\]\{expectedName, expectedAge, expectedGender\};
        Class\<?\> animalClass = getType("Dog");
        Object animalObject = createObjectInstance(animalClass, animalArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(animalObject, animalClass, "getName", null);
        Object actualAge = getMethodValue(animalObject, animalClass, "getAge", null);
        Object actualGender = getMethodValue(animalObject, animalClass, "getGender", null);
        Object actualSound = getMethodValue(animalObject, animalClass, "produceSound", null);

        // Assert

        String expectedSound = "Woof!";

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String ageMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getAge", actualAge, expectedAge);
        Assert.assertEquals(ageMessage, actualAge, expectedAge);

        String genderMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getGender", actualGender, expectedGender);
        Assert.assertEquals(genderMessage, actualGender, expectedGender);

        String soundMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "produceSound", actualSound, expectedSound);
        Assert.assertEquals(soundMessage, actualSound, expectedSound);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T04_TestFrogInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Gaag";
        int expectedAge = 12;
        String expectedGender = "Male";

        Object\[\] animalArgs = new Object\[\]\{expectedName, expectedAge, expectedGender\};
        Class\<?\> animalClass = getType("Frog");
        Object animalObject = createObjectInstance(animalClass, animalArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(animalObject, animalClass, "getName", null);
        Object actualAge = getMethodValue(animalObject, animalClass, "getAge", null);
        Object actualGender = getMethodValue(animalObject, animalClass, "getGender", null);
        Object actualSound = getMethodValue(animalObject, animalClass, "produceSound", null);

        // Assert

        String expectedSound = "Ribbit";

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String ageMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getAge", actualAge, expectedAge);
        Assert.assertEquals(ageMessage, actualAge, expectedAge);

        String genderMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getGender", actualGender, expectedGender);
        Assert.assertEquals(genderMessage, actualGender, expectedGender);

        String soundMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "produceSound", actualSound, expectedSound);
        Assert.assertEquals(soundMessage, actualSound, expectedSound);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T05_TestKittenInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Gaag";
        int expectedAge = 12;
        String expectedGender = "Female";

        Object\[\] animalArgs = new Object\[\]\{expectedName, expectedAge\};
        Class\<?\> animalClass = getType("Kitten");
        Object animalObject = createObjectInstance(animalClass, animalArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(animalObject, animalClass, "getName", null);
        Object actualAge = getMethodValue(animalObject, animalClass, "getAge", null);
        Object actualGender = getMethodValue(animalObject, animalClass, "getGender", null);
        Object actualSound = getMethodValue(animalObject, animalClass, "produceSound", null);

        // Assert

        String expectedSound = "Meow";

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String ageMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getAge", actualAge, expectedAge);
        Assert.assertEquals(ageMessage, actualAge, expectedAge);

        String genderMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getGender", actualGender, expectedGender);
        Assert.assertEquals(genderMessage, actualGender, expectedGender);

        String soundMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "produceSound", actualSound, expectedSound);
        Assert.assertEquals(soundMessage, actualSound, expectedSound);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T06_TestTomcatInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "'%s.%s' returns invalid data (actual: '%s'; expected: '%s')!";

    @Test
    public void validateInstance() \{
        // Arrange
        String expectedName = "Tomcat";
        int expectedAge = 12;
        String expectedGender = "Male";

        Object\[\] animalArgs = new Object\[\]\{expectedName, expectedAge\};
        Class\<?\> animalClass = getType("Tomcat");
        Object animalObject = createObjectInstance(animalClass, animalArgs);

        // Act
        // Invoke methods
        Object actualName = getMethodValue(animalObject, animalClass, "getName", null);
        Object actualAge = getMethodValue(animalObject, animalClass, "getAge", null);
        Object actualGender = getMethodValue(animalObject, animalClass, "getGender", null);
        Object actualSound = getMethodValue(animalObject, animalClass, "produceSound", null);
        Object actualToString = getMethodValue(animalObject, animalClass, "toString", null);

        // Assert

        String expectedSound = "MEOW";
        String expectedToString = "Tomcat" + System.lineSeparator() +
                "Tomcat 12 Male" + System.lineSeparator() +
                "MEOW";

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getName", actualName, expectedName);
        Assert.assertEquals(nameMessage, actualName, expectedName);

        String ageMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getAge", actualAge, expectedAge);
        Assert.assertEquals(ageMessage, actualAge, expectedAge);

        String genderMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "getGender", actualGender, expectedGender);
        Assert.assertEquals(genderMessage, actualGender, expectedGender);

        String soundMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "produceSound", actualSound, expectedSound);
        Assert.assertEquals(soundMessage, actualSound, expectedSound);

        String toStringMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, animalClass.getName(), "toString", actualToString, expectedToString);
        Assert.assertEquals(toStringMessage, actualToString, expectedToString);
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
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleToPrimitiveDouble(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
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

    private void mapDoubleToPrimitiveDouble(Class\<?\>\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
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
