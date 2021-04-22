# Temă Pentru Acasă

[slide hideTitle]
# Problemă: Define an Interface Person
[code-task title="Define an Interface Person" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Define-an-Interface-Person" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Definiți o interfață numită **Person** care conține metodele: **getName** și **getAge**.

Definiți o clasă numită **Citizen** care implementează interfața **Person** și are un constructor care are un **String: name** și un număr întreg: **age**.

Adăugați următorul cod la metoda dvs. principală și trimiteți soluția.

[image assetsSrc="interfaces-and-abstraction-example(11).png" /]

**Implementarea dvs. trebuie să se potrivească cu acest cod:**

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

# Exemplu
| **Intrare** | **Ieșire** |
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
# Problemă: Multiple Implementation
[code-task title="Multiple Implementation" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Multiple-Implementation" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Folosind codul din sarcina anterioară, definiți o interfață numită **Identifiable** cu o metodă **String** numită **"getId"** și o interfață **Birthable** cu o metodă **String** **getBirthDate**

Implementați-le în clasa **Citizen**.

Rescrieți constructorul **Citizen** pentru a accepta noii parametri.

[image assetsSrc="interfaces-and-abstraction-example(12).png" /]

**Adăugați următorul cod la metoda dvs. principală:**

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


# Exemplu
| **Intrare** | **Ieșire** |
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
# Problemă: Birthday Celebrations
[code-task title="Birthday Celebrations" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Birthday-Celebrations" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Este un fapt bine cunoscut faptul că oamenii sărbătoresc zilele de naștere, știm, de asemenea, că unele persoane își sărbătoresc și zilele de naștere ale animalelor de companie.

Extindeți programul de la ultima dvs. sarcină pentru a adăuga **date de naștere** cetățenilor și includeți o clasă numită **Pet**, animalele de companie au un **nume** și o **dată de naștere**.

De asemenea, creați o clasă numită **Robot** care are un **id** și un **model**.

Includeți funcționalități repetate în interfețe și implementați-le în clasele dvs.

Veți primi o cantitate necunoscută de linii până când se primește comanda "**End**", fiecare linie va conține informații într-unul dintre următoarele formate:

- "**Citizen** \{**name**\} \{**age**\} \{**id**\} \{**birthdate**\}" pentru cetățeni

- "**Robot** \{**model**\} \{**id**\}" pentru roboți

- "**Pet** \{**name**\} \{**birthdate**\}" pentru animale de companie
 
Linia de introducere care urmează după "end" va conține un singur număr reprezentând un **an specific**.

Imprimați toate datele de naștere (atât ale cetățenilor, cât și ale animalelor de companie) în acel an în format **day/month/year** (ordinea de imprimare nu contează).

[image assetsSrc="interfaces-and-abstraction-example(13).png" /]

# Exemple

## Exemplu 1
| **Intrare** | **Ieșire** |
| --- | --- |
| Citizen Peter 22 9010101122 10/10/1990 | 10/10/1990 |
| Pet Scooby 13/11/2005 |  |
| Robot MK-13 558833251 |  |
| End |  |
| 1990 |  |

## Exemplu 2
| **Intrare** | **Ieșire** |
| --- | --- |
| Citizen PeterParker 16 0041018380 01/01/2000 | 01/01/2000 |
| Robot MK-10 12345678 | 24/12/2000 |
| Robot PP-09 00000001 |  |
| Pet Woof 24/12/2000 |  |
| Pet Meow 12/06/2002  |  |
| End |  |
| 2000 |  |

## Exemplu 3
| **Intrare** | **Ieșire** |
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
# Problemă: Food Shortage
[code-task title="Food Shortage" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Food-Shortage" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Societatea ta distopiană totalitară suferă o penurie de hrană, așa că apar mulți rebeli.

Extindeți codul din sarcina dvs. anterioară (Problema 2. **Multiple Implementation**) cu funcționalități noi pentru a rezolva această sarcină.

Definiți o clasă **Rebel** care are un **name**, **age** și **group** (String), numele sunt **unice** - nu vor exista niciodată 2 Rebeli / Cetățeni sau Rebel și un cetățean cu același nume.

Definiți o interfață **Buyer** care definește metodele **buyFood()** și un **getFood()**.

Implementați interfața **Buyer** în clasele **Citizen** și **Rebel**, atât Rebelii, cât și Cetățenii **încep cu 0 mâncare**, când un Rebel cumpără alimente **mâncarea sa** crește cu **5**, atunci când un cetățean cumpără alimente **mâncarea** sa crește cu **10**.

Pe prima linie de intrare veți primi un număr întreg **N** - numărul de persoane, pe fiecare dintre următoarele **N** linii veți primi informații într-unul dintre următoarele formate:

- "\{**name**\} \{**age**\} \{**id**\} \{**birthdate**\}" pentru un Cetăţean

- "\{**name**\} \{**age**\} \{**group**\}" pentru un Rebel

După rândurile **N** până când se primește comanda "**End**", veți primi numele persoanelor care au cumpărat alimente, fiecare pe o nouă linie.

Rețineți că nu toate numele vor fi valabile, în cazul în care este dat un nume inexistent - nu ar trebui să se întâmple nimic.

Pe singura linie de ieșire, ar trebui să imprimați cantitatea totală de alimente achiziționate.

[image assetsSrc="interfaces-and-abstraction-example(14).png" /]

# Exemplu

## Exemplu 1
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 | 20 |
| Peter 25 8904041303 04/04/1989 |  |
| Bob 27 WildMonkeys |  |
| Peter |  |
| George |  |
| Peter |  |
| End |  |

## Exemplu 2
| **Intrare** | **Ieșire** |
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
# Problemă: Telephony
[code-task title="Telephony" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Telephony" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere

Dețineți o afacere - **fabricarea de telefoane mobile**.

Dar nu aveți dezvoltatori de software, așa că vă sunați prietenii și le cereți să vă ajute să creați software pentru telefonul mobil.

Sunt de acord și încep să lucreze la proiect.

Proiectul constă dintr-un model principal **- un smartphone**.

Fiecare dintre smartphone-urile dvs. ar trebui să aibă funcționalități pentru **a efectua apeluri** și **pentru a naviga pe browser-ul web**.

Prietenii tăi sunt foarte ocupați, așa că te hotărăști să scrii singur codul.
Iată sarcina:

Ar trebui să aveți un model **- Smartphone** și două funcționalități separate pe care le oferă smartphone-ul dvs. - **efectuarea de apeluri** și **navigarea pe browser-ul web**.

totalurile sale **o clasă** și două **interfețe**.

[image assetsSrc="interfaces-and-abstraction-example(15).png" /]
## Intrare
Introducerea vine sub formă de text.

Va conține două linii:
- **Prima linie: numere de telefon** de apelat (string), separate prin spații

- **A doua linie: site-uri** de vizitat (string), separate prin spații

## Ieșire
- Mai întâi **apelați toate numerele** în ordinea de introducere, apoi **răsfoiți toate site-urile** în ordinea de introducere
- Invocarea cu succes a funcției de apel ar trebui să producă următoarea ieșire: "**Calling...** \{**number**\}"
- Browsing-ul cu succes al web ar trebui să producă următoarea ieșire:
"**Browsing**\: \{**site**\}**!**"
- Dacă există un număr ca adresă URL, tipăriți: "**Invalid URL!**" și continuați procesarea celorlalte adrese URL
- Dacă există un caracter diferit care nu este o cifră într-un număr de telefon: "**Invalid number!**", continuați cu următorul

## Limitări
- URL-ul fiecărui site ar trebui să fie format doar din litere și simboluri (**Nu sunt permise cifre** într-o adresă URL)


# Exemple
| **Intrare** | **Ieșire** |
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
# Problemă: Collection Hierarchy
[code-task title="Collection Hierarchy" timeLimit=5000 taskId="oop-advanced-java-interfaces-and-abstraction-Collection-Hierarchy" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați 3 colecții de șiruri diferite - **AddCollection**, **AddRemoveCollection** și **MyListImpl**.

**AddCollection** ar trebui să conțină:
- Doar o singură metodă  **add(String)** care adaugă un articol la **sfârșitul** colecției

**AddRemoveCollection** ar trebui să aibă:
- O metodă **add(String)** - care adaugă un articol la **start** al colecției
- O metodă **remove()** care elimină ultimul articol din colecție.

Colecția **MyListImpl** ar trebui să conțină:
- O metodă **add(String)** care adaugă un articol la **start** al colecției
- O metodă **remove()** care elimină **primul** element din colecție
- Un câmp * folosit** care afișează dimensiunea elementelor aflate în prezent în colecție
-
Creați interfețe care definesc funcționalitatea colecțiilor, încercați să modelați relațiile dintre interfețe pentru a refolosi codul.

Adăugați un pic de funcționalitate metodelor din colecțiile personalizate, metodele **add**  ar trebui să returneze indexul la care a fost adăugat elementul, metodele **remove** ar trebui să returneze elementul care a fost eliminat.

Sarcina dvs. este să creați o singură copie a colecțiilor dvs., după care pe prima linie de intrare veți primi o cantitate aleatorie de șiruri pe o singură linie separată prin spații - elementele pe care trebuie să le adăugați la fiecare dintre colecțiile dvs.

Pentru fiecare dintre colecțiile dvs., scrieți o singură linie de ieșire care conține rezultatele tuturor **add operations** separate prin spații (verificați exemplele pentru a înțelege mai bine formatul).

Pe a doua linie de introducere veți primi un singur număr - cantitatea de **remove operations** pe care trebuie să le apelați la fiecare colecție.

În același mod ca și în cazul operațiunilor de adăugare pentru fiecare colecție (cu excepția AddCollection), tipăriți o linie cu rezultatele fiecărei operații **remove** separate prin spații.

[image assetsSrc="interfaces-and-abstraction-example(16).png" /]

## Intrare
Vor exista linii de intrare:
- Prima linie va conține o cantitate aleatorie de șiruri separate prin spații - elementele pe care trebuie să le **adăugați** fiecărei colecții
- A doua linie va conține un singur număr - cantitatea de operații de **eliminare**

## Ieșire
Ieșirea va consta din **cinci** linii:
- Prima linie conține rezultatele tuturor operațiunilor **add** pe **AddCollection** separate prin spații
- A doua linie conține rezultatele tuturor operațiunilor **add** pe **AddRemoveCollection** separate prin spații
- A treia linie conține rezultatul tuturor operațiunilor **add** din colecția **MyListImpl** separate prin spații
- A patra linie conține rezultatul tuturor operațiunilor de **remove** de pe **AddRemoveCollection** separate prin spații
- A cincea linie conține rezultatul tuturor operațiunilor de **remove** din colecția **MyListImpl** separate prin spații

## Limitări
- Toate colecțiile ar trebui să aibă o **lungime de 100**
- Nu vor exista niciodată **mai mult de 100** de operațiuni de adăugare
- Numărul de operații de eliminare nu va fi niciodată mai mare decât cantitatea de operații de adăugare


# Exemplu

## Exemplu 1
| **Intrare** | **Ieșire** |
| --- | --- |
| apple orange peach | 0 1 2 |
| 3 | 0 0 0 |
|  | 0 0 0 |
|  | apple orange peach |
|  | peach orange apple |
|  |  |


## Exemplul 2
| **Intrare** | **Ieșire** |
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
