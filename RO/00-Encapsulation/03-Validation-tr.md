# Validare

[slide hideTitle]

# Validare

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-19-20-21-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Validarea datelor se realizează în metodele "setter".**

```java
private void setSalary(double salary) {
  if (salary < 460) {   
    // Validation happens here
    throw new IllegalArgumentException("Message");
  }
  
  this.salary = salary;
}
```
- Este mai bine să aruncați **excepții**, decât să imprimați mesaje pe consolă

- Imprimarea cu `System.out` **cuplează** clasa dvs.
- **Clienții** pot gestiona **excepțiile de clasă**


**Constructorii folosesc setters privați cu logică de validare:**

```java
public Person(String firstName, String lastName, 
              int age, double salary) {
  setFirstName(firstName);
  setLastName(lastName);
  setAge(age);
  setSalary(salary);
}
```

**Validarea se realizează în interiorul setterului:**
- Acest lucru garantează starea validp a unui obiect încă din momentul creării sale 
- De asemenea, garantează starea validă a setterilor publici.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Validation Data

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-22-problem-and-solution-validation-data-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Validation Data" taskId="Java-OOP-Advanced-Encapsulation-Validation-Data" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Extindeți clasa **Person** cu o proprie validare pentru fiecare câmp:

- **Numele** trebuie să conțină cel puțin 3 simboluri
- **Vârsta** nu trebuie să fie mai mică sau egală cu zero
- **Salariul** nu poate fi mai mic decât 460.0 

Imprimați **mesajul** corespunzător pentru utilizatorul final (vedeți **exemplul** pentru mesaje). 

Nu folosiți  `System.out.println()` în clasa **Person**.


# Exemplu
| **Intrare** | **ieșire** |
| --- | --- |
| 5 | A person's age cannot be zero or negative integer |
| George Air -6 2200 | A person's first name cannot be less than 3 symbols |
| Jr Johnson 44 666.66 | A person's last name cannot be less than 3 symbols |
| Lee Parker 27 600 | A person's salary cannot be less than 460 euro |
| Peter P 57 3333 | Lee Parker received 660.0 euro |
| Bob Manner 35 300 |  |
| 20 |  |


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.util.Arrays;

public class T01TestFieldsExists \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' is missing";

    private static final String\[\] classNames = new String\[\]\{"Person"\};
    private static final String\[\] allNeededFields = new String\[\]\{
            "firstName", "lastName", "age", "salary"\};

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

        for (String field : allNeededFields) \{
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T02TestConstructor \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor %s not present";
    private static final String\[\] classNames = new String\[\]\{
            "Person"
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameter = new HashMap\<String, Class\[\]\>() \{\{
        put("Person", new Class\[\]\{String.class, String.class, int.class, double.class\});
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
            constructor =
                    cl.getDeclaredConstructor(constructorParameter.get(className));
        \}catch (Exception e)\{
            constructor = null;
        \}

        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, className), constructor);
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

public class T03TestToStringOverride \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class %s not present";

    private static final String\[\] classNames = new String\[\]\{"Person"\};

    private static final String\[\] methodNames = new String\[\]\{"toString"\};


    @Test
    public void test() throws NoSuchMethodException \{
        assertExistingMethodsInClasses(classNames, methodNames);
    \}

    private void assertExistingMethodsInClasses(String\[\] classNames, String\[\] methodNames) throws NoSuchMethodException \{
        for (String className : classNames) \{
            for (String methodName : methodNames) \{
                assertMethodExist(className, methodName);
            \}
        \}
    \}

    private void assertMethodExist(String className, String methodName) throws NoSuchMethodException \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
               Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Method toString = cl.getDeclaredMethod(methodName);
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

    private static final String\[\] classNames = new String\[\] \{"Person"\};

    @Test
    public void test()\{
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
                .filter(x-\>!Modifier.isPrivate(x.getModifiers()))
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

import java.lang.reflect.Field;
import java.util.Arrays;

public class T05TestHaveAllFields \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' is missing";

    private static final String\[\] classNames = new String\[\]\{"Person"\};
    private static final String\[\] allNeededFields = new String\[\]\{
            "firstName", "lastName", "age", "salary"\};

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

        for (String field : allNeededFields) \{
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.HashMap;

public class T06TestHaveAllMethods \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "getSalary",
            "setSalary",
            "setFirstName",
            "setLastName",
            "setAge",
            "increaseSalary"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("getSalary", double.class);
        put("setSalary", void.class);
        put("setFirstName", void.class);
        put("setLastName", void.class);
        put("setAge", void.class);
        put("increaseSalary", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("getSalary", new Class\[\]\{\});
        put("setSalary", new Class\[\]\{double.class\});
        put("setFirstName", new Class\[\]\{String.class\});
        put("setLastName", new Class\[\]\{String.class\});
        put("setAge", new Class\[\]\{int.class\});
        put("increaseSalary", new Class\[\]\{double.class\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException \{
        assertExistingMethods(methodNames);
    \}

    private void assertExistingMethods(String\[\] methodNames) throws NoSuchMethodException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));
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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T07TestIncreaseSalary \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_SALARY = "salary";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;
    private static final double PERSON_BONUS = 20D;

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "increaseSalary"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("increaseSalary", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("increaseSalary", new Class\[\]\{double.class\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethods(methodNames);
    \}

    private void assertExistingMethods(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertIncreaseSalaryCorrect(method, cl));
        \}
    \}

    private boolean assertIncreaseSalaryCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctIncreaseSalaryOfYoungPerson(method, cl)
                && correctIncreaseSalaryOfOldPerson(method, cl);
    \}

    private boolean correctIncreaseSalaryOfOldPerson(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class, String.class,
                int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        method.invoke(person, PERSON_BONUS);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY + PERSON_SALARY * PERSON_BONUS / 100.0;
    \}

    private boolean correctIncreaseSalaryOfYoungPerson(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Constructor constructor = cl.getDeclaredConstructor(String.class, String.class,
                int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        method.invoke(person, PERSON_BONUS);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY + PERSON_SALARY * PERSON_BONUS / 200.0;
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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T08TestSetSalary \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_SALARY = "salary";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;
    private static final double PERSON_LOWER_SALARY = 400D;

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "setSalary"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("set", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("setSalary", new Class\[\]\{double.class\});
    \}\};

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethods(methodNames);
    \}

    private void assertExistingMethods(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertIncreaseSalaryCorrect(method, cl));
        \}
    \}

    private boolean assertIncreaseSalaryCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetSalaryUnder460(method, cl)
                && correctSetNormalSalary(method, cl);
    \}

    private boolean correctSetNormalSalary(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class, String.class,
                int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        setSalary.setAccessible(true);
        setSalary.invoke(person, PERSON_SALARY);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY;
    \}

    private boolean correctSetSalaryUnder460(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setSalary.setAccessible(true);
        boolean haveError= false;
        try \{
            setSalary.invoke(person, PERSON_LOWER_SALARY);
        \}catch (InvocationTargetException iae)\{
            haveError = true;
        \}

        return haveError;
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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T09TestSetFirstName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SHORTER_FIRST_NAME = "fn";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_FIRST_NAME = "firstName";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "setFirstName"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("setFirstName", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("setFirstName", new Class\[\]\{String.class\});
    \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetFirstNameCorrect(method, cl));
        \}
    \}

    private boolean assertSetFirstNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetFirstName(method, cl)
                && correctSetFirstNameWithShorterString(method, cl);
    \}

    private boolean correctSetFirstNameWithShorterString(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE,PERSON_SALARY);

        boolean error = false;
        try \{
            setFirstName.invoke(person, SHORTER_FIRST_NAME);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetFirstName(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setFirstName.invoke(person, FIRST_NAME);

        Field fieldFirstName = person.getClass().getDeclaredField(NAME_OF_FIELD_FIRST_NAME);
        fieldFirstName.setAccessible(true);
        String firstName  = (String) fieldFirstName.get(person);

        return FIRST_NAME.equals(firstName);
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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T10TestSetLastName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "lastName";
    private static final String SHORTER_SECOND_NAME = "sn";
    private static final String NAME_OF_FIELD_LAST_NAME = "lastName";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "setLastName"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("setLastName", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("setLastName", new Class\[\]\{String.class\});
    \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetLastNameCorrect(method, cl));
        \}
    \}

    private boolean assertSetLastNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetLastName(method, cl)
                && correctSetLastNameWithShorterString(method, cl);
    \}

    private boolean correctSetLastNameWithShorterString(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try \{
            setLastName.invoke(person, SHORTER_SECOND_NAME);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetLastName(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setLastName.invoke(person, SECOND_NAME);

        Field fieldLastName = person.getClass().getDeclaredField(NAME_OF_FIELD_LAST_NAME);
        fieldLastName.setAccessible(true);
        String lastName = (String) fieldLastName.get(person);

        return SECOND_NAME.equals(lastName);
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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T11TestSetAge \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_SALARY_IS_SET = "Wrong salary is set";
    private static final String FIRST_NAME = "firstName";
    private static final String SECOND_NAME = "secondName";
    private static final String NAME_OF_FIELD_AGE = "age";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;
    private static final double PERSON_SALARY = 500D;

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "setAge"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("setAge", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("setAge", new Class\[\]\{int.class\});
    \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetAgeCorrect(method, cl));
        \}
    \}

    private boolean assertSetAgeCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetAge(method, cl)
                && correctSetAgeWithZERO(method, cl);
    \}

    private boolean correctSetAgeWithZERO(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try \{
            setAge.invoke(person, 0);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetAge(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setAge.invoke(person, YOUNG_PERSON_AGE);

        Field fieldAge = person.getClass().getDeclaredField(NAME_OF_FIELD_AGE);
        fieldAge.setAccessible(true);
        int age = (int) fieldAge.get(person);

        return YOUNG_PERSON_AGE == age;
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

