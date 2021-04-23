# Access Modifiers

[slide hideTitle]

# Access Modifier Types

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-9-10-11-12-13-access-modifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## The "Private" Access Modifier

With the **private access** modifier an object can hide its data from the rest of the objects in our program.

We make a **field or method** private when we must preserve the internal logic of our object in its initial state:

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

## The "Protected" Access Modifier

When we declare a unit using the **protected** access modifier we say that only members of the **class hierarchy** (the current class and its children) can see and access the given unit.

```java
class Team {
  protected String getName () {…}
  protected void setName (String name) {…}
}
```

- **Protected** modifiers cannot be applied to classes and interfaces
- This prevents a **non-related** class from trying to use it

## The Default Access Modifier

When we do not specifically declare a modifier, a default access modifier is used:

```java
class Team {
  String getName() {…}
  void setName(String name) {…}
}
```

Each element with this access modifier is **available** to any other class in the same **package**:

```java
Team real = new Team("Real");
real.setName("Real Madrid");
System.out.println(real.getName()); 
```

The **output** will be:

```
Real Madrid
```

## The "Public" Access Modifier

The **public** access modifier states that the given unit is visible and accessible for anyone, anywhere in the program:

```java
public class Team {
  public String getName() {…}
  public void setName(String name) {…}
}
```
- We can import packages if we need to use a class contained in them
- The `main()` method of an application must be **public**

[/slide]

[slide hideTitle]

# Access Modifiers - Example

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/interactive-java-oop-advanced-encapsulation-access-modifiers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Problem with Solution: Sort by Name and Age

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-14-problem-and-solutiom-sort-by-name-and-age-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sort by Name and Age" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Sort-By-Name-And-Age" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class called **Person**, which should have **private** fields for:
- firstName: String
- lastName: String
- age: int
- toString() - override

## The class should fit in the following context:
```java
public static void main(String[] args) throws IOException {
    BufferedReader reader = 
    new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(reader.readLine());

    List<Person> people = new ArrayList<>();

    for (int i = 0; i < n; i++) {
        String[] input = reader.readLine().split(" ");
        people.add(new Person(input[0], input[1], 
        Integer.parseInt(input[2])));
    }

    Collections.sort(
        people, (firstPerson, secondPerson) ->  {
        int sComp = firstPerson.getFirstName()
            .compareTo(secondPerson.getFirstName());

        if (sComp != 0) {
            return sComp;
        } else { 
            return Integer.compare(firstPerson.getAge(), 
            secondPerson.getAge()); 
        }
    });

    for (Person person : people) {
        System.out.println(person.toString());
    }
}
```

# Example
| **Input** | **Output** |
| --- | --- |
| 5 | Anderson Paak is 57 years old. |
| George Air 65 | Bob Manner is 35 years old. |
| Anderson Paak 57 | George Lee is 44 years old. |
| Lee Parker 27 | George Air is 65 years old. |
| George Lee 44 | Lee Parker is 27 years old. |
| Bob Manner 35 |  |

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

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



[slide hideTitle]
# Problem with Solution: Salary Increase

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/Salary-Increase-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Salary Increase" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Salary-Increase" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create code that reads information about a person with their: **names**, **age** and **salary**. 

Reads a **bonus percentage** to be apllied to each person's salary. 

People younger **than 30** get a half bonus. 

Expand the **Person** class from previous task. 

Add a **salary field**, a **getter** and a **setter** with proper **access** modifiers.

New **fields** and **methods**:
- **salary: double**
- **increaseSalary(double bonus)**

## The class should work in the following context:
```java
public static void main(String[] args) throws IOException {
    BufferedReader reader = 
    new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(reader.readLine());
    List<Person> people = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        String[] input = reader.readLine().split(" ");
        people.add(new Person(input[0], input[1],
        Integer.parseInt(input[2]),
        Double.parseDouble(input[3])));
    }
    double bonus = Double.parseDouble(reader.readLine());
    for (Person person : people) {
        person.increaseSalary(bonus);
        System.out.println(person.toString());
    }
}
```

# Example
| **Input** | **Output** |
| --- | --- |
| 5 | George Air gets 2640.0 euro |
| George Air 65 2200 | Anderson Paak gets 3999.6 euro |
| Anderson Paak 57 3333 | Lee Parker gets 660.0 euro |
| Lee Parker 27 600 | George Lee gets 799.992 euro |
| George Lee 44 666.66 | Bob Manner gets 671.28 euro |
| Bob Manner 35 559.4 |  |
| 20 |  |

[/task-description]
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

        return salary == PERSON_SALARY + PERSON_SALARY * PERSON_BONUS / 100.0;
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

