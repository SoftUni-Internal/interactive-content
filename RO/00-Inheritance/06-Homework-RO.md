# Temă Pentru Acasă

[slide hideTitle]
# Problemă: Person
[code-task title="Person" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Person" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Modelați o aplicație care stochează date despre diferite persoane.

Ar trebui să permită introducerea unei **Person** sau a unui **Child**.

Clasa copil derivă din clasa persoană.

Fiecare persoană are un **name** și o **age**.

Clasa **Person** ar trebui să aibă și **getters** pentru câmpurile sale.

Creați o clasă **Child** care moștenește **Person** și are aceeași definiție a constructorului public.

Atenție: **Reutilizați constructorul clasei Person**.

## Notă
Aveți nevoie de o clasă publică **Main**.

Creați un pachet numit **person**.

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

# Exemple

## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| Peter | Peter |
| 13 | 13 |
|  |  |

## Exemplul 2
| **Intrare** | **Ieșire** |
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
# Problemă: Zoo
[code-task title="Zoo" timeLimit=5000 taskId="Java-OOP-Advanced-Inheritance-Zoo" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați un pachet numit „grădina zoologică”. 

Ar trebui să conțină următoarele clase:

[image assetsSrc="inheritance-example(19).png" /]

Urmați diagrama și creați structura descrisă.

**Fiecare**, cu excepția clasei **Animal**, ar trebui **să extindă** **o altă clasă**.

Clasa Animal trebuie să conțină câmpurile: **name - String** și un **Getter** pentru **numele său**.

Fiecare clasă trebuie să aibă:
- Un constructor public, care acceptă un parametru: **name**

## Trimiterea

**Închideți** pachetul și încărcați-l.

## Notă:
O clasă publică Main este necesară pentru a rula codul.

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
# Problemă: Players and Monsters
[code-task title="Players and Monsters" taskId="Java-OOP-Advanced-Inheritance-Players-and-Monsters" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Sarcina dvs. este să creați următoarea ierarhie a jocului:

[image assetsSrc="inheritance-example(20).png" /]

Creați o clasă "Hero". 

Ar trebui să conțină următorii membri:
- Un constructor public, care acceptă:
    - **username - String**
    - **level- int**
- Următoarele câmpuri:
    - **username - String**
    - **level- int**
- Obțineți numele de utilizator și nivelul
- Мetoda `toString()`

## Sfat: Înlocuiți metoda `toString ()` a clasei de bază în felul următor:
```java
@Override
public String toString() {
    return String.format("Type: %s Username: %s Level: %s",
            this.getClass().getName(),
            this.getUsername(),
            this.getLevel());
```

## Notă
Aveți nevoie de o clasă publică **Main**. Creați un pachet numit ** hero**.

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
# Problemă: Need for Speed
[code-task title="Need for Speed" taskId="Java-OOP-Advanced-Inheritance-Need-For-Speed" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Descriere
Creați următoarea **ierarhie** cu următoarele **clase**:

[image assetsSrc="inheritance-example(21).png" /]

Creați o clasă de bază numită „Vehicle”. 

Ar trebui să aibă următorii membri:
- **DEFAULT_FUEL_CONSUMPTION** - **final static double (constant)**
- **fuelConsumption - double**
- **fuel - double**
- **horsePower - int**
- **Getters and Setters for all fields**
- Un constructor public care acceptă (**fuel, horsePower**) și stabilește **default fuel consumption** al câmpului numit **fuelConsumption**
- **void drive(double kilometers)**
    - metoda **drive** ar trebui să conțină logică de cod pentru a reduce **combustibilul** pe baza kilometrilor parcurși și a consumului de combustibil
    Rețineți că puteți conduce vehiculul numai dacă aveți suficient combustibil pentru a termina conducerea.

Consumul implicit de combustibil pentru un **Vehicul** este **1,25**. 

Unele dintre clase au consumuri de combustibil implicite diferite:
- **SportCar - DEFAULT_FUEL_CONSUMPTION = 10**
- **RaceMotorcycle - DEFAULT_FUEL_CONSUMPTION = 8**
- **Car - DEFAULT_FUEL_CONSUMPTION = 3**

## Submit

**Închideți** pachetul și încărcați-l.

## Sfat
În constructorii claselor - copii, folosiți `super.setFuelConsumption()` pentru a seta **fuelConsumption**
## Notă
Ar trebui să fie prezentă o clasă publică **Main**.

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
# Problemă: Restaurant
[code-task title="Restaurant" taskId="Java-OOP-Advanced-Inheritance-Restaurant" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Descriere
Creați un pachet **restaurant** cu următoarele clase și ierarhie:

Există alimente și băuturi în restaurant și toate sunt „produse”.

Clasa **Product** trebuie să aibă următorii membri:

- Un constructor public cu următorii parametri: **String name, BigDecimal price**
- **name - String**
- **price - BigDecimal**
- **Getters for all fields**

Clasele **Beverage** și **Food** sunt "products".

Clasa **Beverage** trebuie să aibă următorii membri:

- Un constructor public cu următorii parametri: **String name, BigDecimal price, double milliliters**
- **name - String**
- **price - BigDecimal**
- **milliliters - double**
- **A Getter for "milliliters"**

Clasa **Food** trebuie să aibă următorii membri:

- Un constructor cu următorii parametri: **String name, BigDecimal price, double grams**
- **name - String**
- **price - double**
- **grams - double**
- **A Getter for "grams"**

**HotBeverage** și **ColdBeverage** sunt **băuturi** și acceptă următorii parametri la inițializare: **String name, BigDecimal price, double milliliters**

**Coffee** și **Tea** sunt **băuturi calde**. 

Clasa **Coffee** trebuie să aibă următorii membri suplimentari:
- `COFFEE_MILLILITERS double = 50`
- `BigDecimal COFFEE_PRICE = 3.50`
- **caffeine - double**
- Un câștigător pentru **caffeine**

**MainDish**, **Dessert** și **Starter** sunt **mâncare**.
 Toți acceptă următorii parametri la inițializare: **String name, BigDecimal price, double grams**. 
 Clasa **Desert** ar trebui să accepte încă un parametru în constructorul său: **double calories**.
- **calories - double**
- Un **getter pentru "calorii"**

**Salmon**, **Soup** și **Cake** moștenesc clasa corespunzătoare.

Clasa **Cake** ar trebui să aibă următorii membri la inițializare:
- `double CAKE_GRAMS = 250`
- `double CAKE_CALORIES = 1000`
- `BigDecimal CAKE_PRICE = 5`
Clasa **Salmon** ar trebui să aibă următorii membri la inițializare:
- `SALMON_GRAMS dublu = 22`

## Notă
Ar trebui să existe o clasă publică **Main**.

Creați un pachet **restaurant**.

## Submit

**Arhivați** pachetul dvs. și încărcați-l.

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
# Problemă: Animals

[code-task title="Animals" taskId="Java-OOP-Advanced-Inheritance-Animals" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]
[task-description]
# Descriere
Creați o ierarhie (pachet) de **animals**.

Programul dvs. ar trebui să aibă trei animale diferite - **Dog**, **Frog** și **Cat**.

Mai adânc în ierarhie ar trebui să aveți două clase suplimentare - **Kitten** and **Tomcat**
**Kittens sunt "Femei", iar Tomcats sunt "Bărbați".**

Toate tipurile de animale ar trebui să poată produce un fel de sunet - "String produceSound()".

De exemplu, câinele ar trebui să poată să latre.

 Sarcina dvs. este să modelați ierarhia și să testați funcționalitatea acesteia.

 Creați un animal de fiecare fel și faceți-i pe toți să producă sunet și creați getters pentru toate domeniile.

## Intrare
Vi se vor da câteva linii de intrare.

Fiecare două rânduri vor reprezenta un animal.

Pe prima linie va fi tipul de animal și pe a doua - numele, vârsta și sexul.

Când este dată comanda "**Beast!**", opriți intrarea și tipăriți toate animalele în formatul prezentat mai jos.

## Ieșire
- Imprimați informațiile pentru fiecare animal pe trei linii. Pe prima linie, tipăriți: "\{**animalType**\}"
- Pe a doua linie tipăriți: "\{**name**\} \{**age**\} \{**gender**\}"
- Pe a treia linie tipăriți sunetele pe care le produce: "\{**produceSound()**\}"

## Limitări
- Fiecare **Animal** ar trebui să aibă un **name**, o **age** și un **gender**
- **Toate** valorile de intrare nu trebuie **să fie necompletate** (de exemplu, numele, vârsta și așa mai departe ...)
- Dacă primiți o intrare pentru **gender** unui **Tomcat** sau a unei **Kitten**, ignorați-l, dar **creați** animalul
- Dacă intrarea nu este validă pentru una dintre proprietăți, aruncați o excepție cu mesajul: "**Invalid input!**"
- Fiecare animal ar trebui să aibă funcționalitatea de a "produceSound()"
- Iată ce tip de sunet ar trebui să producă fiecare animal:
    - **Dog: "Woof!"**
    - **Cat: "Meow meow"**
    - **Frog: "Ribbit"**
    - **Kittens: "Meow"**
    - **Tomcat: "MEOW"**

## Sfat
Pentru a găsi numele clasei, puteți folosi `this.getClass().GetSimpleName()` în metoda `toString()` din clasa **Animal**.

## Notă
Aveți nevoie de o clasă publică **Main**.


# Exemple

## Exemplu 1
| **Intrare** | **Ieșire** |
| --- | --- |
| Cat | Cat  |
| Tom 12 Male | Tom 12 Male |
| Dog | Meow meow |
| Rex 132 Male | Dog  |
| Beast! | Rex 132 Male |
|  | Woof! |
|  |  |

## Exemple 2
| **Intrare** | **Ieșire** |
| --- | --- |
| Frog | Frog  |
| Kermit 12 Male | Kermit 12 Male |
| Beast! | Ribbit |
|  |  |

| **Intrare** | **Ieșire** |
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

