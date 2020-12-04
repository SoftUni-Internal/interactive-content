# Access Modifiers

[slide]
# Private Access Modifier

With the **private access** modifier an object **hides data from the outside world.**

```java
class Person {
  private String name;
  Person (String name) {
    this.name = name;
  }
}
```

- Classes and interfaces **cannot** be private
- Data can be **accessed only within the declared class** itself
[/slide]

[slide]
# Protected Access Modifier

Grants **access to subclasses**

```java
class Team {
  protected String getName () {…}
  protected void setName (String name) {…}
}
```

- **Protected** modifier cannot be applied to classes and interfaces
- Prevents a **nonrelated** class from trying to use it

[/slide]

[slide]
# Default Access Modifier

Does not explicitly declare an access modifier

```java
class Team {
  String getName() {…}
  void setName(String name) {…}
}
```
**Available** to any other class in the same **package**

```java
Team real = new Team("Real");
real.setName("Real Madrid");
System.out.println(real.getName()); 
				// Real Madrid
```
[/slide]

[slide]
# Public Access Modifier

Grants access to **any class** belonging to the **Java Universe**

```java
public class Team {
  public String getName() {…}
  public void setName(String name) {…}
}
```
- Import a package if you need to use a class
- The `main()` method of an application must be **public**

[/slide]

[slide]
# Problem: Sort by Name and Age
[code-task title="Problem: Sort by Name and Age" taskId="fc07458b-3b86-4698-af22-a54efa5e87c5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class **Person**, which should have **private** fields for:
- firstName: String
- lastName: String
- age: int
- toString() - override

## You should be able to use the class like this:
```java
public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(reader.readLine());

    List<Person> people = new ArrayList<>();

    for (int i = 0; i < n; i++) {
        String[] input = reader.readLine().split(" ");
        people.add(new Person(input[0], input[1], Integer.parseInt(input[2])));
    }

    Collections.sort(people, (firstPerson, secondPerson) -> {
        int sComp = firstPerson.getFirstName().compareTo(secondPerson.getFirstName());

        if (sComp != 0) {
            return sComp;
        } else { 
            return Integer.compare(firstPerson.getAge(), secondPerson.getAge()); 
        }
    });

    for (Person person : people) {
        System.out.println(person.toString());
    }
}
```

## Examples
| **Input** | **Output** |
| --- | --- |
| 5 | George Lee is 44 years old. |
| George Air 65 | George Air is 65 years old. |
| Anderson Paak 57 | Bob Manner is 35 years old. |
| Lee Parker 27 | Anderson Paak is 57 years old. |
| George Lee 44 | Lee Parker is 27 years old. |
| Bob Manner 35 |  |

[/task-description]
[code-io /]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.\*;

public class T01TestClassExists \{

    private static final String CLASS_NOT_FOUND_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Person"
    \};

    @Test
    public void test() throws ClassNotFoundException \{
        assertExistingClasses(classNames);
    \}

    private void assertExistingClasses(String\[\] classNames) throws ClassNotFoundException \{
        for (String className : classNames) \{
            assertExistingClass(className);
        \}
    \}

    private void assertExistingClass(String className) throws ClassNotFoundException \{

        Assert.assertTrue(String.format(CLASS_NOT_FOUND_ERROR_MESSAGE, className),
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

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T02TestConstructors \{
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor %s not present";

    private static final String\[\] classNames = new String\[\]\{
            "Person"
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameter = new HashMap\<String, Class\[\]\>() \{\{
        put("Person", new Class\[\]\{String.class, String.class, int.class\});
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
            constructor = cl.getDeclaredConstructor(constructorParameter.get(className));
        \} catch (Exception e) \{
            constructor = null;
        \}
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, className), constructor);    \}
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

public class  T03TestToStringOverride \{
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
            "firstName", "lastName", "age"\};

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
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Sort by Name and Age

``` java
public class Person {
  private String firstName;
  private String lastName; private int age;
  // TODO: Implement Constructor
  public String getFirstName() { /* TODO */ }
  public String getLastName() { /* TODO */ }
  public int getAge() { return age; }

  @Override
  public String toString() { /* TODO */ }
}
```

[/slide]

[slide]
# Problem: Salary Increase
[code-task title="Problem: Salary Increase" taskId="ede80230-10bc-44f8-a87a-d53f09a25042" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read a person with their **names**, **age** and **salary**. 

Read **percent bonus** to every person salary. 

People younger **than 30** get half bonus. 

Expand **Person** from previous task. 

Add **salary field** and **getter** and **setter** with proper **access**.

New **fields** and **methods**
- **salary: double**
- **increaseSalary(double bonus)**

## You should be able to use the class like this:
```java
public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(reader.readLine());
    List<Person> people = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        String[] input = reader.readLine().split(" ");
        people.add(new Person(input[0], input[1], Integer.parseInt(input[2]), Double.parseDouble(input[3])));
    }
    double bonus = Double.parseDouble(reader.readLine());
    for (Person person : people) {
        person.increaseSalary(bonus);
        System.out.println(person.toString());
    }
}
```

## Examples
| **Input** | **Output** |
| --- | --- |
| 5 | George Air gets 2640.0 euro |
| George Air 65 2200 | Anderson Paak gets 3999.6 euro |
| Anderson Paak 57 3333 | Lee Parker gets 660.0 euro |
| Lee Parker 27 600 | George Lee gets 799.992 euro |
| George Lee 44 666.66 | Bob Manner gets 671.28 euro |
| Bob Manner 35 559.4 |  |
| 20 |  |

| **Input** | **Output** |
| --- | --- |
|  |  |

| **Input** | **Output** |
| --- | --- |

[/task-description]
[code-io /]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassExists \{


    private static final String CLASS_NOT_FOUND_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Person"
    \};

    @Test
    public void test() throws ClassNotFoundException \{
        assertExistingClasses(classNames);
    \}

    private void assertExistingClasses(String\[\] classNames) throws ClassNotFoundException \{
        for (String className : classNames) \{
            assertExistingClass(className);
        \}
    \}

    private void assertExistingClass(String className) throws ClassNotFoundException \{

        Assert.assertTrue(String.format(CLASS_NOT_FOUND_ERROR_MESSAGE, className),
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

import java.lang.reflect.Method;
import java.util.HashMap;

public class T02TestAllMethodExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";

    private static final String PERSON = "Person";


    private static final String\[\] methodNames = new String\[\]\{
            "getSalary",
            "setSalary",
            "increaseSalary"
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put("getSalary", double.class);
        put("setSalary", void.class);
        put("increaseSalary", void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("getSalary", new Class\[\]\{\});
        put("setSalary", new Class\[\]\{double.class\});
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

public class T03TestIncreaseSalary \{
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
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        method.invoke(person, PERSON_BONUS);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY + PERSON_SALARY \* PERSON_BONUS / 100.0;
    \}

    private boolean correctIncreaseSalaryOfYoungPerson(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        method.invoke(person, PERSON_BONUS);

        Field fieldSalary = person.getClass().getDeclaredField(NAME_OF_FIELD_SALARY);
        fieldSalary.setAccessible(true);
        double salary = (double) fieldSalary.get(person);

        return salary == PERSON_SALARY + PERSON_SALARY \* PERSON_BONUS / 200.0;
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
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Salary Increase

TODO: Implement after strategy is ready!

[/slide]