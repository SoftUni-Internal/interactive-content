# Modificatori de Acces

[slide hideTitle]

# Tipurile de Modificatori de Acces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-9-10-11-12-13-access-modifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Modificatorul de acces "Private" 

Prin modificatorul  **private access** un obiect își poate ascunde datele de restul obiectelor din programul nostru.

Facem private **un câmp sau o metodă**, atunci când trebuie să păstrăm logica internă a obiectului nostru în starea sa inițială:

```java
class Person {
  private String name;

  Person (String name) {
    this.name = name;
  }
}
```

- Clasele și interfețele **nu pot fi** private
- Datele pot fi **accesate numai în cadrul clasei declarate**

## Modificatorul de acces "Protected" 

Atunci când declarăm o unitate folosind modificatorul de acces **protejat**  spunem că numai membrii **ierarhiei de clase** (clasa curentă și copiii săi) pot vedea și accesa unitatea dată.

```java
class Team {
  protected String getName () {…}
  protected void setName (String name) {…}
}
```

- Modificatorii **protejați** nu pot fi aplicați claselor și interfețelor modifiers cannot be applied to classes and interfaces

- Acest lucru împiedică utilizarea acestora de către o clasă **fără legătură** 

## The Default Access Modifier

Atunci când nu declarăm  modificatorul în mod special, va fi utilizat modificatorul de acces default (implicit):

```java
class Team {
  String getName() {…}
  void setName(String name) {…}
}
```

Fiecare element cu aceste modificator de acces este **disponibil** pentru orice altă clasă din același **pachet**:

```java
Team real = new Team("Real");
real.setName("Real Madrid");
System.out.println(real.getName()); 
```

The **output** will be:

```
Real Madrid
```

## Modificatorul de acces "Public" 

Modificatorul de acces **public** afirmă că unitatea dată este vizibilă și accesibilă pentru oricine, oriunde în program:

```java
public class Team {
  public String getName() {…}
  public void setName(String name) {…}
}
```
- Putem importa pachete, în cazul în care avem nevoie să folosim o clasă din cadrul lor 
- Metoda `main()` a aplicației trebuie să fie **publică**

[/slide]

[slide hideTitle]

# Modificatori de Acces - Exemplu

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/interactive-java-oop-advanced-encapsulation-access-modifiers-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Sort by Name and Age

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-14-problem-and-solution-sort-by-name-and-age-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sort by Name and Age" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Sort-By-Name-And-Age" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o clasă denumită **Person**, care trebuie să aibă cîmpuri **private** pentru:
- firstName: șir
- lastName: șir
- age: întreg
- toString() - suprascriere

## Clasa trebuie să fie încadrată în următorul context:
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

# Exemplu
| **Intrare** | **Ieșire** |
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
# Problemă cu Soluție: Salary Increase

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-16-problem-and-solution-salary-increase-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Salary Increase" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Salary-Increase" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați un cod care citește informații despre o persoană: **nume**, **vârsta** și **salariu**. 

Citește un **procent de bonus** care se aplică salariului fiecărei persoane. 

Persoanele cu vârsta **sub 30 de ani** primes o jumătate din bonus. 

Extindeți clasa **Person** din sarcina anterioară. 

Adăugați  **câmpul salary**, un **getter** și un **setter** cu modificatorii de **access** corespunzători.

**Câmpuri** și **metode** noi:
- **salary: double**
- **increaseSalary(double bonus)**

## Clasa trebuie să funcționeze în următorul context:
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

# Exemplu
| **Intrare** | **Ieșire** |
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

