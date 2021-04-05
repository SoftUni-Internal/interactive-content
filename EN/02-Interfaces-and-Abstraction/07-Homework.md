# Homework

[slide hideTitle]
# Problem: Define an Interface Person
[code-task title="Define an Interface Person" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Define-an-Interface-Person" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Define an interface called **Person** containing the methods: **getName** and **getAge**. 

Define a class called **Citizen** which implements the **Person** interface and has a constructor which takes a **String: name** and an integer: **age**.

Add the following code to your main method and submit your solution.

[image assetsSrc="interfaces-and-abstraction-example(11).png" /]

**Your implementation needs to unction with this code:**

```java
public static void main(String[] args) {
    Class[] citizenInterfaces = Citizen
            .class.getInterfaces();
    
    if (Arrays.asList(citizenInterfaces)
            .contains(Person.class)) {
        
        Method[] fields = Person
                .class.getDeclaredMethods();
        
        Scanner scanner = new Scanner(System.in);
        
        String name = scanner.nextLine();
        
        int age = Integer.parseInt(scanner.nextLine());
        
        Person person = new Citizen(name, age);
        
        System.out.println(fields.length);
        System.out.println(person.getName());
        System.out.println(person.getAge());
    }
}
```

# Example
| **Input** | **Output** |
| --- | --- |
| Peter | 2 |
| 25 | Peter |
|  | 25 |

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
            "Person"
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
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Citizen", new String\[\]\{"name", "age"\});
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
            "Citizen",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Citizen", new Class\[\]\{String.class, int.class\});
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
    private static final String CLASS_NAME_2 = "Person";
    private static final String SEARCHED_METHOD_1 = "getName";
    private static final String SEARCHED_METHOD_2 = "getAge";

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
        put(SEARCHED_METHOD_2, int.class);

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
                "Citizen",
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

    private static final String TESTED_CLASS = "Citizen";
    private static final String TESTED_INTERFACE = "Person";

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

public class T07TestGetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;


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
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER
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

        return NORMAL_NAME_PARAMETER.equals(result);
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

public class T08TestGetAge \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;


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
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER
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
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Multiple Implementation
[code-task title="Multiple Implementation" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Multiple-Implementation" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Using the code from the previous task, define an interface called **Identifiable** with a **String** method called **"getId"**, and an interface **Birthable** with a **String** method **getBirthDate**

Implement them in the **Citizen** class. 

Rewrite the **Citizen** constructor to accept the new parameters.

[image assetsSrc="interfaces-and-abstraction-example(12).png" /]

**Add the following code to your main method:**

```java
public static void main(String[] args) {
   Class[] citizenInterfaces = Citizen
           .class.getInterfaces();
           
   if (Arrays.asList(citizenInterfaces)
           .contains(Birthable.class)
           && Arrays.asList(citizenInterfaces)
           .contains(Identifiable.class)) {
           
       Method[] methods = Birthable
               .class.getDeclaredMethods();
               
       methods = Identifiable.class.getDeclaredMethods();
       
       Scanner scanner = new Scanner(System.in);
       
       String name = scanner.nextLine();
       
       int age = Integer.parseInt(scanner.nextLine());
       
       String id = scanner.nextLine();
       
       String birthDate = scanner.nextLine();
       
       Identifiable identifiable = 
               new Citizen(name, age, id, birthDate);
               
       Birthable birthable = 
               new Citizen(name, age, id, birthDate);
               
       System.out.println(methods.length);
       System.out.println(methods[0]
               .getReturnType().getSimpleName());
               
       System.out.println(methods.length);
       System.out.println(methods[0]
               .getReturnType().getSimpleName());
    }
}
```


# Example
| **Input** | **Output** |
| --- | --- |
| Peter | 1 |
| 25 | String |
| 9105152287 | 1 |
| 15/05/1991 | String |

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
            "Person",
            "Birthable",
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
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Citizen", new String\[\]\{"name", "age", "id", "birthDate"\});
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
            "Citizen",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Citizen", new Class\[\]\{String.class, int.class, String.class, String.class\});
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
    private static final String CLASS_NAME_2 = "Person";
    private static final String CLASS_NAME_3 = "Identifiable";
    private static final String CLASS_NAME_4 = "Birthable";
    private static final String SEARCHED_METHOD_1 = "getName";
    private static final String SEARCHED_METHOD_2 = "getAge";
    private static final String SEARCHED_METHOD_3 = "getId";
    private static final String SEARCHED_METHOD_4 = "getBirthDate";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,
            CLASS_NAME_4,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_3,
                \});
                put(CLASS_NAME_4, new String\[\]\{
                        SEARCHED_METHOD_4,
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

    private static final String TESTED_CLASS = "Citizen";
    private static final String TESTED_INTERFACE = "Person";
    private static final String TESTED_INTERFACE_2 = "Identifiable";
    private static final String TESTED_INTERFACE_3 = "Birthable";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE,
                TESTED_INTERFACE_2, TESTED_INTERFACE_3\};

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

public class T07TestGetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "15/05/1991";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        return NORMAL_NAME_PARAMETER.equals(result);
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

public class T08TestGetAge \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "15/05/1991";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

public class T09TestGetId \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getId";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "15/05/1991";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        return NORMAL_ID_PARAMETER.equals(result);
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

public class T10TestGetBirthDate \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getBirthDate";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "15/05/1991";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        return NORMAL_BIRTH_DATE_PARAMETER.equals(result);
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

[slide hideTitle]
# Problem: Birthday Celebrations
[code-task title="Birthday Celebrations" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Birthday-Celebrations" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
It is a well known fact that people celebrate birthdays, we also know that some people also celebrate their pets birthdays. 

Extend the program from your last task to add **birthdates** to citizens and include a class called **Pet**, pets have a **name** and a **birthdate**. 

Also create a class called **Robot** which has an **id** and a **model**. 

Encompass repeated functionality into interfaces and implement them in your classes.

You will receive an unknown amount of lines until the command "**End**" is received,  each line will contain information in one of the following formats:

- "**Citizen** \{**name**\} \{**age**\} \{**id**\} \{**birthdate**\}" for citizens 

- "**Robot** \{**model**\} \{**id**\}" for robots

- "**Pet** \{**name**\} \{**birthdate**\}" for pets
 
The input line following "end" will contain a single number representing a **specific year**.

Your task is to print out all birthdates (of both citizens and pets) in that year in the format **day/month/year** (the order of printing does not matter).

[image assetsSrc="interfaces-and-abstraction-example(13).png" /]

# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| Citizen Peter 22 9010101122 10/10/1990 | 10/10/1990 |
| Pet Scooby 13/11/2005 |  |
| Robot MK-13 558833251 |  |
| End |  |
| 1990 |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| Citizen PeterParker 16 0041018380 01/01/2000 | 01/01/2000 |
| Robot MK-10 12345678 | 24/12/2000 |
| Robot PP-09 00000001 |  |
| Pet Woof 24/12/2000 |  |
| Pet Meow 12/06/2002  |  |
| End |  |
| 2000 |  |

## Example 3
| **Input** | **Output** |
| --- | --- |
| Robot VV-XYZ 11213141 | {no output} |
| Citizen Mery 35 7903210713 21/03/1979 |  |
| Citizen Kane 40 7409073566 07/09/1974 |  |
| End |  |
| 1975 |  |

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
            "Pet",
            "Identifiable",
            "Birthable",
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
            "Pet",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Citizen", new String\[\]\{"name", "age", "id", "birthDate"\});
                put("Robot", new String\[\]\{"id", "model"\});
                put("Pet", new String\[\]\{"name", "birthDate"\});
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
            "Citizen",
            "Robot",
            "Pet",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Citizen", new Class\[\]\{String.class, int.class, String.class, String.class\});
        put("Robot", new Class\[\]\{String.class, String.class\});
        put("Pet", new Class\[\]\{String.class, String.class\});
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
    private static final String CLASS_NAME_3 = "Pet";
    private static final String CLASS_NAME_4 = "Identifiable";
    private static final String CLASS_NAME_5 = "Birthable";
    private static final String SEARCHED_METHOD_1 = "getName";
    private static final String SEARCHED_METHOD_2 = "getAge";
    private static final String SEARCHED_METHOD_3 = "getId";
    private static final String SEARCHED_METHOD_4 = "getModel";
    private static final String SEARCHED_METHOD_5 = "getBirthDate";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,
            CLASS_NAME_4,
            CLASS_NAME_5,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_5,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4,
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_5,
                \});
                put(CLASS_NAME_4, new String\[\]\{
                        SEARCHED_METHOD_3,
                \});
                put(CLASS_NAME_5, new String\[\]\{
                        SEARCHED_METHOD_5,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, String.class);
        put(SEARCHED_METHOD_2, int.class);
        put(SEARCHED_METHOD_3, String.class);
        put(SEARCHED_METHOD_4, String.class);
        put(SEARCHED_METHOD_5, String.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{\});
        put(SEARCHED_METHOD_2, new Class\[\]\{\});
        put(SEARCHED_METHOD_3, new Class\[\]\{\});
        put(SEARCHED_METHOD_4, new Class\[\]\{\});
        put(SEARCHED_METHOD_5, new Class\[\]\{\});
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
                "Pet",
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
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "Citizen";
    private static final String TESTED_INTERFACE = "Identifiable";
    private static final String TESTED_INTERFACE_2 = "Birthable";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE, TESTED_INTERFACE_2\};

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
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

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
import org.junit.Test;

import java.util.Arrays;

public class T08TestPetInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "Pet";
    private static final String TESTED_INTERFACE = "Birthable";

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

public class T09TestCitizenGetNameMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

public class T10TestCitizenGetAgeMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

public class T10TestCitizenGetAgeMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

public class T12TestCitizenGetBirthDateMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getBirthDate";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        return NORMAL_BIRTH_DATE_PARAMETER.equals(result.trim());
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

public class T13TestRobotGetIdMethod \{
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
                NORMAL_ID_PARAMETER, NORMAL_MODEL_PARAMETER
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

public class T14TestRobotGetModelMethod \{
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
                NORMAL_ID_PARAMETER, NORMAL_MODEL_PARAMETER
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
[test]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T15TestPetGetNameMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Pet";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                NORMAL_NAME_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

public class T16TestPetGetBirthDateMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getBirthDate";
    private static final String CLASS_NAME = "Pet";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                NORMAL_NAME_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        return NORMAL_BIRTH_DATE_PARAMETER.equals(result.trim());
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

[slide hideTitle]
# Problem: Food Shortage
[code-task title="Food Shortage" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Food-Shortage" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Your totalitarian dystopian society suffers a shortage of food, so many rebels appear. 

Extend the code from your previous (Problem 2.**Multiple Implementation**) task with new functionality to solve this task.

Define a class **Rebel** which has a **name**, **age** and **group** (String), names are **unique** - there will never be 2 Rebels/Citizens or a Rebel and a Citizen with the same name. 

Define an interface **Buyer** which defines the methods **buyFood()** and a **getFood()**. 

Implement the **Buyer** interface in the **Citizen** and **Rebel** class, both Rebels and Citizens **start with 0 food**, when a Rebel buys food his **food** increases by **5**, when a Citizen buys food his **food** increases by **10**.

On the first line of input you will receive an integer **N** - the number of people, on each of the next **N** lines you will receive information in one of the following formats

- "\{**name**\} \{**age**\} \{**id**\} \{**birthdate**\}" for a Citizen 

- "\{**name**\} \{**age**\} \{**group**\}" for a Rebel

After the **N** lines until the command "**End**" is received, you will receive names of people who bought food, each on a new line. 

Note that not all names will be valid, in case an inexistent name is given - nothing should happen.

On the only line of output, you should print out the total amount of food purchased.

[image assetsSrc="interfaces-and-abstraction-example(14).png" /]

# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| 2 | 20 |
| Peter 25 8904041303 04/04/1989 |  |
| Bob 27 WildMonkeys |  |
| Peter |  |
| George |  |
| Peter |  |
| End |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| 4 | 25 |
| PeterParker 23 TheSwarm |  |
| Bobby 44 7308185527 18/08/1973 |  |
| GeorgeBush 31 Terrorists |  |
| Mery 27 881222212 22/12/1988 |  |
| Jim |  |
| GeorgeBush |  |
| Jim |  |
| GeorgeBush |  |
| PeterParker |  |
| Mery |  |
| End |  |

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
            "Rebel",
            "Buyer",
            "Identifiable",
            "Person",
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
            "Rebel",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Citizen", new String\[\]\{"name", "age", "id", "birthDate", "food"\});
                put("Rebel", new String\[\]\{"name", "age", "food", "group"\});
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
            "Citizen",
            "Rebel",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Citizen", new Class\[\]\{String.class, int.class, String.class, String.class\});
        put("Rebel", new Class\[\]\{String.class, int.class, String.class\});
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
    private static final String CLASS_NAME_2 = "Rebel";
    private static final String CLASS_NAME_3 = "Buyer";
    private static final String CLASS_NAME_4 = "Identifiable";
    private static final String CLASS_NAME_5 = "Person";
    private static final String SEARCHED_METHOD_1 = "getName";
    private static final String SEARCHED_METHOD_2 = "getAge";
    private static final String SEARCHED_METHOD_3 = "getId";
    private static final String SEARCHED_METHOD_4 = "getFood";
    private static final String SEARCHED_METHOD_5 = "buyFood";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,
            CLASS_NAME_4,
            CLASS_NAME_5,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4,
                        SEARCHED_METHOD_5,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_4,
                        SEARCHED_METHOD_5,
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_4,
                        SEARCHED_METHOD_5,
                \});
                put(CLASS_NAME_4, new String\[\]\{
                        SEARCHED_METHOD_3,
                \});
                put(CLASS_NAME_5, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, String.class);
        put(SEARCHED_METHOD_2, int.class);
        put(SEARCHED_METHOD_3, String.class);
        put(SEARCHED_METHOD_4, int.class);
        put(SEARCHED_METHOD_5, void.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{\});
        put(SEARCHED_METHOD_2, new Class\[\]\{\});
        put(SEARCHED_METHOD_3, new Class\[\]\{\});
        put(SEARCHED_METHOD_4, new Class\[\]\{\});
        put(SEARCHED_METHOD_5, new Class\[\]\{\});
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
[test open]
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
                "Rebel",
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
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "Citizen";
    private static final String TESTED_INTERFACE = "Identifiable";
    private static final String TESTED_INTERFACE_2 = "Buyer";
    private static final String TESTED_INTERFACE_3 = "Person";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE,
                TESTED_INTERFACE_2, TESTED_INTERFACE_3\};

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

public class T07TestRebelInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "Rebel";
    private static final String TESTED_INTERFACE_2 = "Buyer";
    private static final String TESTED_INTERFACE_3 = "Person";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\]\{
                TESTED_INTERFACE_2, TESTED_INTERFACE_3\};

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

public class T08TestCitizenGetNameMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T11TestCitizenGetFoodMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getFood";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";
    private static final int TEST_FOOD_VALUE = 20;
    private static final String NAME_OF_FIELD_FOOD = "food";


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
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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

        Field fieldFood = cl.getDeclaredField(NAME_OF_FIELD_FOOD);
        fieldFood.setAccessible(true);
        fieldFood.set(this.currentObject, TEST_FOOD_VALUE);

        method.setAccessible(true);

        int result = (int) method.invoke(this.currentObject);

        return TEST_FOOD_VALUE == result;
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T12TestCitizenBuyFoodMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "buyFood";
    private static final String CLASS_NAME = "Citizen";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_ID_PARAMETER = "normalId0987675";
    private static final String NORMAL_BIRTH_DATE_PARAMETER = "01/02/03";
    private static final int EXPECTED_FOOD_VALUE_AFTER_FIRST_BUY = 10;
    private static final String NAME_OF_FIELD_FOOD = "food";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class, String.class, String.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_ID_PARAMETER, NORMAL_BIRTH_DATE_PARAMETER
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
        method.invoke(this.currentObject);

        Field fieldFood = cl.getDeclaredField(NAME_OF_FIELD_FOOD);
        fieldFood.setAccessible(true);

        int result = (int) fieldFood.get(this.currentObject);

        return EXPECTED_FOOD_VALUE_AFTER_FIRST_BUY == result;
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

public class T13TestRebelGetNameMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getName";
    private static final String CLASS_NAME = "Rebel";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_GROUP_PARAMETER = "normalGroup";


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
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_GROUP_PARAMETER
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

public class T14TestRebelGetAgeMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getAge";
    private static final String CLASS_NAME = "Rebel";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_GROUP_PARAMETER = "normalGroup";


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
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_GROUP_PARAMETER
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

public class T15TestRebelGetGroupMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getGroup";
    private static final String CLASS_NAME = "Rebel";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_GROUP_PARAMETER = "normalGroup";


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
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_GROUP_PARAMETER
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

        return NORMAL_GROUP_PARAMETER.equals(result.trim());
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T16TestRebelGetFoodMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getFood";
    private static final String CLASS_NAME = "Rebel";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final String NORMAL_NAME_OF_GROUP_PARAMETER = "normalGroup";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final int TEST_FOOD_VALUE = 20;
    private static final String NAME_OF_FIELD_FOOD = "food";


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
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_NAME_OF_GROUP_PARAMETER
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

        Field fieldFood = cl.getDeclaredField(NAME_OF_FIELD_FOOD);
        fieldFood.setAccessible(true);
        fieldFood.set(this.currentObject, TEST_FOOD_VALUE);

        method.setAccessible(true);

        int result = (int) method.invoke(this.currentObject);

        return TEST_FOOD_VALUE == result;
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T17TestRebelBuyFoodMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "buyFood";
    private static final String CLASS_NAME = "Rebel";
    private static final String NORMAL_NAME_PARAMETER = "normalName";
    private static final int NORMAL_AGE_PARAMETER = 10;
    private static final String NORMAL_NAME_OF_GROUP_PARAMETER = "normalGroup";
    private static final int EXPECTED_FOOD_VALUE_AFTER_FIRST_BUY = 5;
    private static final String NAME_OF_FIELD_FOOD = "food";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
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
                NORMAL_NAME_PARAMETER, NORMAL_AGE_PARAMETER,
                NORMAL_NAME_OF_GROUP_PARAMETER
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
        method.invoke(this.currentObject);

        Field fieldFood = cl.getDeclaredField(NAME_OF_FIELD_FOOD);
        fieldFood.setAccessible(true);

        int result = (int) fieldFood.get(this.currentObject);

        return EXPECTED_FOOD_VALUE_AFTER_FIRST_BUY == result;
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

[slide hideTitle]
# Problem: Telephony
[code-task title="Telephony" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Telephony" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
You own a business - **manufacturing cell phones**. 

But you have no software developers, so you call your friends and ask them to help you create cell phone software. 

They agree and start working on the project. 

The project consists of one main **model - a Smartphone**. 

Each of your smartphones should have functionalities to **make calls** and **browse the world wide web**.

Your friends are very busy, so you decide to write the code on your own. 

Here is the assignment:

You should have a **model - Smartphone** and two separate functionalities which your smartphone offers - **making calls** and to **browsing the world wide web**. 

This totals **one class** and two **interfaces**.

[image assetsSrc="interfaces-and-abstraction-example(15).png" /]

## Input
The input comes in text form. 

It will hold two lines:
- **First line: phone numbers** to call (String), separated by spaces
- **Second line: sites** to visit (String), separated by spaces

## Output
- First **call all numbers** in input order then **browse all sites** in input order
- Successfully invoking the call function should produce the following outpur: "**Calling...** \{**number**\}"
- Successfully brownsing the web should produce the following output:
"**Browsing**\: \{**site**\}**!**" (pay attention to the exclamation mark when printing URLs)
- If there is a number an URL, print: "**Invalid URL!**" and continue processing the rest of the URLs
- If there is a character different which is not a digit in a phone number: "**Invalid number!**" then continue to the next one

## Constraints
- Each site's URL should consist only of letters and symbols (**No digits are allowed** in an URL address)


# Examples
| **Input** | **Output** |
| --- | --- |
| 0882134215 0882134333 08992134215 0558123 3333 1 | Calling... 0882134215 |
| http://softuni.org http://youtube.com http://www.g00gle.com | Calling... 0882134333 |
|  | Calling... 08992134215 |
|  | Calling... 0558123 |
|  | Calling... 3333 |
|  | Calling... 1 |
|  | Browsing: http://softuni.org! |
|  | Browsing: http://youtube.com! |
|  | Invalid URL! |

[/task-description]

[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Callable",
            "Browsable",
            "Smartphone",
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
            "Smartphone",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Smartphone", new String\[\]\{"numbers", "urls"\});
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
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class T03TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Smartphone",
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Smartphone", new Class\[\]\{List.class, List.class\});
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
    private static final String CLASS_NAME = "Smartphone";
    private static final String CLASS_NAME_2 = "Callable";
    private static final String CLASS_NAME_3 = "Browsable";
    private static final String SEARCHED_METHOD_1 = "call";
    private static final String SEARCHED_METHOD_2 = "browse";

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
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_1,
                \});
                put(CLASS_NAME_3, new String\[\]\{
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
                "Smartphone",
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

    private static final String TESTED_CLASS = "Smartphone";
    private static final String TESTED_INTERFACE = "Callable";
    private static final String TESTED_INTERFACE_2 = "Browsable";

    @Test
    public void test() \{

        assertClassExists(TESTED_CLASS);

        String\[\] interfacesNames = new String\[\] \{TESTED_INTERFACE, TESTED_INTERFACE_2\};

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

public class T07TestCallMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "call";
    private static final String CLASS_NAME = "Smartphone";
    private static final List\<String\> NORMAL_LIST_FROM_NUMBERS_PARAMETER =
            new ArrayList\<String\>() \{\{
                add("0888111222");
            \}\};
    private static final List\<String\> ILLEGAL_LIST_FROM_NUMBERS_PARAMETER =
            new ArrayList\<String\>() \{\{
                add("words2222");
            \}\};
    private static final String EXPECTED_RESULT_1 =
            "Calling... 0888111222";
    private static final String EXPECTED_RESULT_2 =
            "Invalid number!";


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
                List.class, List.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NORMAL_LIST_FROM_NUMBERS_PARAMETER, new ArrayList\<\>()
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
        return correctBehaviour(method, cl)
                && correctBehaviourWithIllegalParams(method, cl);
    \}

    private boolean correctBehaviourWithIllegalParams(Method method, Class cl) throws IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchMethodException \{
        Constructor constructor = cl.getDeclaredConstructor(
                List.class, List.class);
        this.currentObject =constructor.newInstance(
                ILLEGAL_LIST_FROM_NUMBERS_PARAMETER, new ArrayList\<\>());

        String result = (String) method.invoke(this.currentObject);

        return EXPECTED_RESULT_2.equals(result.trim());
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return EXPECTED_RESULT_1.equals(result.trim());
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class T08TestBrowseMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "browse";
    private static final String CLASS_NAME = "Smartphone";
    private static final List\<String\> NORMAL_LIST_FROM_URLS_PARAMETER =
            new ArrayList\<String\>() \{\{
                add("http://softuni.org");
            \}\};
    private static final List\<String\> ILLEGAL_LIST_FROM_URLS_PARAMETER =
            new ArrayList\<String\>() \{\{
                add("words2222");
            \}\};
    private static final String EXPECTED_RESULT_1 =
            "Browsing: http://softuni.org!";
    private static final String EXPECTED_RESULT_2 =
            "Invalid URL!";


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
                List.class, List.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                new ArrayList\<\>(), NORMAL_LIST_FROM_URLS_PARAMETER
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
        return correctBehaviour(method, cl)
                && correctBehaviourWithIllegalParams(method, cl);
    \}

    private boolean correctBehaviourWithIllegalParams(Method method, Class cl) throws IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchMethodException \{
        Constructor constructor = cl.getDeclaredConstructor(
                List.class, List.class);
        this.currentObject = constructor.newInstance(
                new ArrayList\<\>(), ILLEGAL_LIST_FROM_URLS_PARAMETER);

        String result = (String) method.invoke(this.currentObject);

        return EXPECTED_RESULT_2.equals(result.trim());
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        String result = (String) method.invoke(this.currentObject);

        return EXPECTED_RESULT_1.equals(result.trim());
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

[slide hideTitle]
# Problem: Collection Hierarchy
[code-task title="Collection Hierarchy" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Collection-Hierarchy" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create 3 different string collections – **AddCollection**, **AddRemoveCollection** and **MyListImpl**.

**The AddCollection** should have:
- Only a single method **add(String)** which adds an item to the **end** of the collection

The **AddRemoveCollection** should have:
- An **add(String)** method – which adds an item to the **start** of the collection
- A **remove()** method which removes the last item in the collection.

The **MyListImpl** collection should have:
- An **add(String)** method which adds an item to the **start** of the collection
- A **remove()** method which removes the **first** element in the collection
- A **used** field which displays the size of elements currently in the collection

Create interfaces which define the collections functionality, try to model the relations between interfaces to reuse code. 

Add an extra bit of functionality to the methods in the custom collections, **add** methods should return the index to which the item was added, **remove** methods should return the item that was removed.

Your task is to create a single copy of your collections, after which on the first input line you will receive a random amount of strings on a single line separated by spaces - the elements you have to add to each of your collections. 

For each of your collections, write a single line of output that holds the results of all **add operations** separated by spaces (check the examples to better understand the format). 

On the second input line you will receive a single number - the amount of **remove operations** you have to call on each collection. 

In the same manner as with the add operations for each collection (except the AddCollection), print a line with the results of each **remove** operation separated by spaces.

[image assetsSrc="interfaces-and-abstraction-example(16).png" /]

## Input
The input comes on two lines:
- The first line will contain a random amount of strings separated by spaces - the elements you have to **add** to each of your collections
- The second line will contain a single number \- the amount of **remove** operations

## Output
The output will consist of **five** lines:
- The first line contains the results of all **add** operations on the **AddCollection** separated by spaces
- The second line contains the results of all **add** operations on the **AddRemoveCollection** separated by spaces
- The third line contains the result of all **add** operations on the **MyListImpl** collection separated by spaces
- The fourth line contains the result of all **remove** operations on the **AddRemoveCollection** separated by spaces
- The fifth line contains the result of all **remove** operations on the **MyListImpl** collection separated by spaces

## Constraints
- All collections should have a **length of 100**
- There will never be **more than 100** add operations
- The number of remove operations will never be more than the amount of add operations


# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| apple orange peach | 0 1 2 |
| 3 | 0 0 0 |
|  | 0 0 0 |
|  | apple orange peach |
|  | peach orange apple |
|  |  |


## Example 2
| **Input** | **Output** |
| --- | --- |
| one two three four five six seven | 0 1 2 3 4 5 6 |
| 4 | 0 0 0 0 0 0 0 |
|  | 0 0 0 0 0 0 0 |
|  | one two three four |
|  | seven six five four |
|  | 2 |

[/task-description]

[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;


public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Addable",
            "AddRemovable",
            "MyList",
            "Collection",
            "AddCollection",
            "AddRemoveCollection",
            "MyListImpl",
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
            "Collection",
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Collection", new String\[\]\{"maxSize", "items"\});
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

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T03TestAllMethodsExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Addable";
    private static final String CLASS_NAME_2 = "AddRemovable";
    private static final String CLASS_NAME_3 = "MyList";
    private static final String CLASS_NAME_4 = "AddCollection";
    private static final String CLASS_NAME_5 = "AddRemoveCollection";
    private static final String CLASS_NAME_6 = "MyListImpl";
    private static final String SEARCHED_METHOD_1 = "add";
    private static final String SEARCHED_METHOD_2 = "remove";
    private static final String SEARCHED_METHOD_3 = "getUsed";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,
            CLASS_NAME_4,
            CLASS_NAME_5,
            CLASS_NAME_6,
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_2
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_3
                \});
                put(CLASS_NAME_4, new String\[\]\{
                        SEARCHED_METHOD_1,
                \});
                put(CLASS_NAME_5, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                \});
                put(CLASS_NAME_6, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, int.class);
        put(SEARCHED_METHOD_2, String.class);
        put(SEARCHED_METHOD_3, int.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_2, new Class\[\]\{\});
        put(SEARCHED_METHOD_3, new Class\[\]\{\});
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

public class T04TestAddCollectionParent \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";
    private static final String PARENT_CLASS_NAME = "Collection";
    private static final String CHILD_CLASS_NAME = "AddCollection";

    @Test
    public void testChildParent() \{
        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, CHILD_CLASS_NAME),
                Classes.allClasses.containsKey(CHILD_CLASS_NAME));

        Class child = Classes.allClasses.get(CHILD_CLASS_NAME);
        Class parent = child.getSuperclass();

        Assert.assertEquals(String.format(ERROR_MESSAGE, CHILD_CLASS_NAME, PARENT_CLASS_NAME),
                parent.getSimpleName(), PARENT_CLASS_NAME);

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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T13TestAddRemoveCollectionRemoveMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "remove";
    private static final String CLASS_NAME = "AddRemoveCollection";
    private static final String STRING_TO_REMOVE = "StringToRemove";
    private static final String NAME_OF_FIELD_ITEMS = "items";


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
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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


        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);
        List\<String\> items = (List\<String\>) fieldItems.get(this.currentObject);
        items.add(STRING_TO_REMOVE);

        method.setAccessible(true);
        String result = (String) method.invoke(this.currentObject);

        return STRING_TO_REMOVE.equals(result);
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T14TestMyListRemoveMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "remove";
    private static final String CLASS_NAME = "MyListImpl";
    private static final String STRING_TO_REMOVE = "StringToRemove";
    private static final String NAME_OF_FIELD_ITEMS = "items";


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
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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
2818

        assertConstructors(classNames);

2819

    \}

2820

​

2821

    private void assertConstructors(String\[\] classNames) throws NoSuchMethodException \{

2822

        for (String className : classNames) \{

2823

            assertConstructorExists(className);

2824

        \}

2825

    \}

2826

​

2827

    private void assertConstructorExists(String className) throws NoSuchMethodException \{

2828

        Class cl = Classes.allClasses.get(className);

2829

​

2830

        Constructor constructor = null;

2831

​

2832

        try \{

2833

            constructor = cl.getDeclaredConstructor(constructorParameters.get(className));

2834

        \} catch (Exception e) \{    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctBehaviour(method, cl);
    \}

    private boolean correctBehaviour(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{


        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);
        List\<String\> items = (List\<String\>) fieldItems.get(this.currentObject);
        items.add(STRING_TO_REMOVE);

        method.setAccessible(true);
        String result = (String) method.invoke(this.currentObject);

        return STRING_TO_REMOVE.equals(result);
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T15TestMyListGetUsedMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "getUsed";
    private static final String CLASS_NAME = "MyListImpl";
    private static final String STRING_PARAMETER = "StringParameter";
    private static final String NAME_OF_FIELD_ITEMS = "items";


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
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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


        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);
        List\<String\> items = (List\<String\>) fieldItems.get(this.currentObject);
        items.add(STRING_PARAMETER);

        method.setAccessible(true);
        int result = (int) method.invoke(this.currentObject);

        return items.size() == result;
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

public class T05TestAddRemoveCollectionParent \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";
    private static final String PARENT_CLASS_NAME = "Collection";
    private static final String CHILD_CLASS_NAME = "AddRemoveCollection";

    @Test
    public void testChildParent() \{
        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, CHILD_CLASS_NAME),
                Classes.allClasses.containsKey(CHILD_CLASS_NAME));

        Class child = Classes.allClasses.get(CHILD_CLASS_NAME);
        Class parent = child.getSuperclass();

        Assert.assertEquals(String.format(ERROR_MESSAGE, CHILD_CLASS_NAME, PARENT_CLASS_NAME),
                parent.getSimpleName(), PARENT_CLASS_NAME);

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

public class T06TestMyListParent \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";
    private static final String PARENT_CLASS_NAME = "Collection";
    private static final String CHILD_CLASS_NAME = "MyListImpl";

    @Test
    public void testChildParent() \{
        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, CHILD_CLASS_NAME),
                Classes.allClasses.containsKey(CHILD_CLASS_NAME));

        Class child = Classes.allClasses.get(CHILD_CLASS_NAME);
        Class parent = child.getSuperclass();

        Assert.assertEquals(String.format(ERROR_MESSAGE, CHILD_CLASS_NAME, PARENT_CLASS_NAME),
                parent.getSimpleName(), PARENT_CLASS_NAME);

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

public class T07TestAddCollectionInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "AddCollection";
    private static final String TESTED_INTERFACE = "Addable";

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

public class T08TestAddRemoveCollectionInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "AddRemoveCollection";
    private static final String TESTED_INTERFACE = "AddRemovable";

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

public class T09TestMyListInterfaces \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String CLASS_NOT_INSTANCE_OF_ERROR_MESSAGE = "Class %s is not instance of %s";

    private static final String TESTED_CLASS = "MyListImpl";
    private static final String TESTED_INTERFACE = "MyList";

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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T10TestAddCollectionAddMethod  \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "add";
    private static final String CLASS_NAME = "AddCollection";
    private static final String METHOD_PARAMETER = "StringToAdd";
    private static final String NAME_OF_FIELD_ITEMS = "items";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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

        int result = (int) method.invoke(this.currentObject, METHOD_PARAMETER);

        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);

        List items = (List) fieldItems.get(this.currentObject);

        return result == items.size() - 1;
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class asjkda \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "add";
    private static final String CLASS_NAME = "AddRemoveCollection";
    private static final String METHOD_PARAMETER = "StringToAdd";
    private static final String NAME_OF_FIELD_ITEMS = "items";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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

        int result = (int) method.invoke(this.currentObject, METHOD_PARAMETER);

        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);

        List items = (List) fieldItems.get(this.currentObject);

        return result == items.size() - 1;
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
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T12TestMyListAddMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "add";
    private static final String CLASS_NAME = "MyListImpl";
    private static final String METHOD_PARAMETER = "StringToAdd";
    private static final String NAME_OF_FIELD_ITEMS = "items";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createInstance() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor();
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance();
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

        int result = (int) method.invoke(this.currentObject, METHOD_PARAMETER);

        Field fieldItems = cl.getSuperclass().getDeclaredField(NAME_OF_FIELD_ITEMS);
        fieldItems.setAccessible(true);

        List items = (List) fieldItems.get(this.currentObject);

        return result == items.size() - 1;
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
