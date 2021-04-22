[slide hideTitle]

# Obiecte Mutabile și Imutabile

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-24-25-mutable-and-immutable-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Conținutul obiectelor **mutabile**  **poate fi alterat**:

```java
Point myPoint = new Point(0, 0); myPoint.setLocation(1.0, 0.0);
System.out.println(myPoint);

// java.awt.Point[1.0, 0.0]
```

Conținutul obiectelor **immutabile** **nu poate fi alterat**:

```java
String str = new String("old String");
System.out.println(str);
str.replaceAll("old", "new");
System.out.println(str);
```
[/slide]

[slide hideTitle]
# Câmpuri Mutabile

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-26-27-mutable-fields-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Câmpurile private mutabile nu sunt pe deplin încapsulate.**

```java
class Team {
  private String name;
  private List<Person> players;

  public List<Person> getPlayers() {
    return this.players;
  }
} 
```

Când lucrăm cu **tipuri de referință**, getterii pot deveni destul de **confuzi**.

Când **returnăm un obiect acesta este de fapt o referință** la memoria sa.

De aceea, cu această referință, am putea schimba **memoria originală** care conține obiectul, schimbând obiectul în sine.

## Exemplu

```java
Team team = new Team();
Person person = new Person("David", "Adams", 22);
team.getPlayers().add(person);
System.out.println(team.getPlayers().size());  // 1
team.getPlayers().clear();
System.out.println(team.getPlayers().size());  // 0
```

În acest caz, câmpul nostru **nu este încapsulat în siguranță** și poate fi în continuare **modificat**.

Structrua `List<>` este un tip de referință.

Atunci când o pasăm în `getter`, noi oferim referința  memoriei Listei.

Cu toate că **nu avem un setter**, lista este încă **mutablă**.

[/slide]

[slide hideTitle]

# Câmpuri Imutabile

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-28-imutable-fields-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Pentru a ne securiza colecția, putem returna: `Collections.unmodifiableList()`
  * acesta încapsulează tipul de referință și nu permite modificările

```java
class Team {
  private List<Person> players;
  public void addPlayer(Person person) {
    this.players.add(person);
    // Adding new functionality for the list

  }
  
  public List<Person> getPlayers() {
    return Collections.unmodifiableList(players);
    // Returns a safe collection
  }
} 
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: First and Reserve Team

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/RO/01.Java-OOP-Advanced-Encapsulation-29-problem-and-solution-first-and-reserve-team-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="First and Reserve Team" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-First-and-Reserve-Team" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o clasă **Team**. 

Adăugați la această clasă **team** toate datele privind jucători pe care le prmiți de la intrare. 

Toți jucăturii cu vârsta **mai mică** decât 40 de ani se duc la  **prima echipă**, iar restul jucătorii se duc la  **echipa de rezervă**.

Apoi imprimați ambele liste.

Clasa trebuie să conțină **câmpuri private** pentru:
- **nume: String**
- **firstTeam: List(Person)**
- **reserveTeam: List(Person)**

Clasa trebuie săp dețină **constructori**:
- **Team(String name)**

Clasa trebuie să aibă o metodă privată pentru  setName și metode publice pentru:
- **getName(): String**
- **addPlayer(Person person): void**
- **getFirstTeam(): List(Person) (Collections.unmodifiableList)**
- **getReserveTeam(): List(Person) (Collections.unmodifiableList)**

## Această clasă trebuie să fie aplicabilă în următorul context:
```java
Team team = new Team (name: "Black Eagles");
for (Person player : players) {
    team.addPlayer(player);
}

System.out.println("The number of players on the main team is:"
 + team.getFirstTeam().size());

System.out.println("The number of players on the reserve team is:"
 + team.getReserveTeam ().size());
```

## Nu trebuie să funcționeze în modul următor:

```java
Team team = new Team (name: "Black Eagles");

for (Person player : players) {
    if (player.getAge() < 40) {
        team.getFirstTeam().add(player);
    } else {
        team.getReserveTeam().add(player);
    }
}
```

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 | The number of players on the main team is: 4  |
| George Air 20 2200 | The number of players on the reserve team is: 1  |
| Anderson Paak 57 3333 |  |
| Lee Parker 27 600 |  |
| Grigor Dimitrov 25 666.66 |  |
| Bob Manner 35 555 |  |

[/task-description]
[tests]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class T01TestAllClassesExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String[] classNames = new String[] {
            "Person",
            "Team",
    };

    @Test
    public void test() {
        assertExistingClasses(classNames);
    }

    private void assertExistingClasses(String[] classNames) {
        for (String className : classNames) {
            assertClassExists(className);
        }
    }

    private void assertClassExists(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    }
}
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
import java.util.HashMap;
import java.util.Map;

public class T02TestFieldsExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' is missing";

    private static final String[] classNames = new String[]{"Person", "Team"};
    private static final Map<String, String[]> allNeededFields =
            new HashMap<String, String[]>() {{
                put("Person", new String[]{"firstName", "lastName", "age", "salary"});
                put("Team", new String[]{"name", "firstTeam", "reserveTeam"});
            }};

    @Test
    public void test() {
        assertHaveAllFields(classNames);
    }

    private void assertHaveAllFields(String[] classNames) {
        for (String className : classNames) {
            haveAllFields(className);
        }
    }

    private void haveAllFields(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Field[] fields = cl.getDeclaredFields();

        for (String field : allNeededFields.get(className)) {
            Assert.assertTrue(String.format(FIELD_IS_MISSING_ERROR_MESSAGE, field),
                    Arrays.stream(fields)
                            .anyMatch(x -> x.getName().equalsIgnoreCase(field)));
        }
    }
}
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

public class T03TestConstructors {

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String[] classNames = new String[]{
            "Person",
            "Team"
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Person", new Class[]{String.class, String.class, int.class, double.class});
        put("Team", new Class[]{String.class});

    }};

    @Test
    public void test() throws NoSuchMethodException {
        assertConstructors(classNames);
    }

    private void assertConstructors(String[] classNames) throws NoSuchMethodException {
        for (String className : classNames) {
            assertConstructorExists(className);
        }
    }

    private void assertConstructorExists(String className) throws NoSuchMethodException {
        Class cl = Classes.allClasses.get(className);

        Constructor constructor = null;

        try {
            constructor = cl.getDeclaredConstructor(constructorParameters.get(className));
        } catch (Exception e) {
            constructor = null;
        }
        Assert.assertNotNull(String.format(CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE, className), constructor);

    }
}
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

public class T04TestForNonPrivateFields {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String[] classNames = new String[]{"Person"};

    @Test
    public void test() {
        assertPrivateFields(classNames);
    }

    private void assertPrivateFields(String[] classNames) {
        for (String className : classNames) {
            assertHasNoPrivateFields(className);
        }
    }

    private void assertHasNoPrivateFields(String className) {
        Class cl = getClass(className);
        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields)
                .filter(x -> !Modifier.isPrivate(x.getModifiers()))
                .count();

        Assert.assertEquals(String.format(HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE, className)
                , 0, nonPrivateFieldsCount);

    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        return Classes.allClasses.get(className);
    }

}
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

public class T05TestToStringOverride {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class %s not present";

    private static final String[] classNames = new String[]{"Person"};

    private static final String[] methodNames = new String[]{"toString"};


    @Test
    public void test() throws NoSuchMethodException {
        assertExistingMethodsInClasses(classNames, methodNames);
    }

    private void assertExistingMethodsInClasses(String[] classNames, String[] methodNames) throws NoSuchMethodException {
        for (String className : classNames) {
            for (String methodName : methodNames) {
                assertMethodExist(className, methodName);
            }
        }
    }

    private void assertMethodExist(String className, String methodName) throws NoSuchMethodException {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));

        Class cl = Classes.allClasses.get(className);
        Method toString = cl.getDeclaredMethod(methodName);
    }
}

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
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class T06TestAllMethodsExists {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";

    private static final String[] classNames = new String[]{
            "Person", "Team"
    };


    private static final Map<String, String[]> methodsInClass =
            new HashMap<String, String[]>() {{
                put("Person", new String[]{
                        "setSalary",
                        "setFirstName",
                        "setLastName",
                        "setAge",
                });
                put("Team", new String[]{
                        "getFirstTeam",
                        "getReserveTeam"});
            }};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setSalary", void.class);
        put("setFirstName", void.class);
        put("setLastName", void.class);
        put("setAge", void.class);
        put("getFirstTeam", List.class);
        put("getReserveTeam",  List.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setSalary", new Class[]{double.class});
        put("setFirstName", new Class[]{String.class});
        put("setLastName", new Class[]{String.class});
        put("setAge", new Class[]{int.class});
        put("getFirstTeam", new Class[]{});
        put("getReserveTeam",  new Class[]{});
    }};

    @Test
    public void test() throws NoSuchMethodException {
        assertExistingMethods(classNames);
    }

    private void assertExistingMethods(String[] classNames) throws NoSuchMethodException {
        for (String className : classNames) {

            Class cl = getClass(className);
            for (String methodName : methodsInClass.get(className)) {
                Method method =
                        methodParameters.get(methodName).length == 0
                                ? cl.getDeclaredMethod(methodName)
                                : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
                Class<?> returnType = method.getReturnType();
                Assert.assertTrue(
                        String.format(METHOD_RETURN_TYPE_ERROR,
                                methodName,
                                className,
                                methodReturnTypes.get(methodName)),
                        returnType.equals(methodReturnTypes.get(methodName)));
            }

        }
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class T07TestUnmodifiableCollections {

    private static final String CLASS_NOT_PRESENT_ERROR = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR = "Class '%s' contains non private fields";


    private static final String[] classNames = new String[]{
            "Team"
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Team", new Class[] {String.class});
    }};

    static final Map<Class<?>, Object> defaultValues = new HashMap<Class<?>, Object>() {{
        put(boolean.class, Boolean.FALSE);
        put(byte.class, (byte) 0);
        put(short.class, (short) 0);
        put(int.class, 0);
        put(long.class, 0L);
        put(char.class, '\0');
        put(float.class, 0.0F);
        put(double.class, 0.0);
        put(Boolean.class, Boolean.FALSE);
        put(Byte.class, (byte) 0);
        put(Short.class, (short) 0);
        put(Integer.class, 0);
        put(Long.class, 0L);
        put(Character.class, 0L);
        put(Float.class, 0L);
        put(Double.class, 0L);
    }};

    @Test
    public void test() throws Exception {
        assertPrivateFields(classNames);
        assertModifiableCollections(classNames);
    }

    private void assertModifiableCollections(String[] classNames) throws Exception {
        for (String className : classNames) {
            assertClassForModifiableCollection(className);
        }
    }

    private void assertClassForModifiableCollection(String className) throws Exception {
        Class cl = getClass(className);
        List<Method> nonPrivateMethods = Stream.of(cl.getMethods())
                .filter(m -> !Modifier.isPrivate(m.getModifiers()))
                .filter(m -> m.getParameterCount() == 0)
                .collect(Collectors.toList());

        for (Method nonPrivateMethod : nonPrivateMethods) {

            Class returnType = nonPrivateMethod.getReturnType();

            if (Iterable.class.isAssignableFrom(returnType)) {
                if (returnType.getSimpleName().equals(Iterable.class.getSimpleName())) {
                    continue; // iterable cannot be modified
                }

                Constructor c = cl.getConstructor(constructorParameters.get(className));
                Class<?>[] parameterTypes = constructorParameters.get(className);
                Object[] arguments = getArguments(parameterTypes);
                Object o = c.newInstance(arguments);
                Collection collection = (Collection) nonPrivateMethod.invoke(o);
                try {
                    collection.clear(); // ** should throw
                    throw new Exception("modifiable collection");
                } catch (UnsupportedOperationException uoe) {
                    // no problem
                }
            } else if (Map.class.isAssignableFrom(returnType)) {
                Constructor c = cl.getConstructor(constructorParameters.get(className));
                Class<?>[] parameterTypes = constructorParameters.get(className);
                Object[] arguments = getArguments(parameterTypes);
                Object o = c.newInstance(arguments);
                Map map = (Map) nonPrivateMethod.invoke(o);
                try {
                    map.clear(); // ** should throw
                    throw new Exception("Method returns a modifiable collection");
                } catch (UnsupportedOperationException uoe) {
                    // no problem
                }
            }
        }
    }

    private Object[] getArguments(Class<?>[] parameterTypes) {
        Object[] parameters = new Object[parameterTypes.length];
        for (int i = 0; i < parameterTypes.length; i++) {
            parameters[i] = defaultValues.get(parameterTypes[i]);
        }

        return parameters;
    }

    private void assertPrivateFields(String[] classNames) {
        for (String className : classNames) {
            assertHasNoPrivateFields(className);
        }
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }

    private void assertHasNoPrivateFields(String className) {
        Class cl = getClass(className);
        Field[] fields = cl.getDeclaredFields();
        long nonPrivateFieldsCount = Stream.of(fields).filter(f -> !Modifier.isPrivate(f.getModifiers())).count();
        Assert.assertTrue(
                String.format(HAS_NON_PRIVATE_FIELDS_ERROR, className),
                nonPrivateFieldsCount == 0);
    }
}
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

public class T08TestSetSalary {
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


    private static final String[] methodNames = new String[]{
            "setSalary"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("set", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setSalary", new Class[]{double.class});
    }};

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethods(methodNames);
    }

    private void assertExistingMethods(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertIncreaseSalaryCorrect(method, cl));
        }
    }

    private boolean assertIncreaseSalaryCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetSalaryUnder460(method, cl)
                && correctSetNormalSalary(method, cl);
    }

    private boolean correctSetNormalSalary(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
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
    }

    private boolean correctSetSalaryUnder460(Method setSalary, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                YOUNG_PERSON_AGE, PERSON_SALARY);

        setSalary.setAccessible(true);
        boolean haveError= false;
        try {
            setSalary.invoke(person, PERSON_LOWER_SALARY);
        }catch (InvocationTargetException iae){
            haveError = true;
        }

        return haveError;
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}

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

public class T09TestSetFirstName {
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


    private static final String[] methodNames = new String[]{
            "setFirstName"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setFirstName", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setFirstName", new Class[]{String.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetFirstNameCorrect(method, cl));
        }
    }

    private boolean assertSetFirstNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetFirstName(method, cl)
                && correctSetFirstNameWithShorterString(method, cl);
    }

    private boolean correctSetFirstNameWithShorterString(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE,PERSON_SALARY);

        boolean error = false;
        try {
            setFirstName.invoke(person, SHORTER_FIRST_NAME);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetFirstName(Method setFirstName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

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
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}

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

public class T10TestSetLastName {
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


    private static final String[] methodNames = new String[]{
            "setLastName"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setLastName", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setLastName", new Class[]{String.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetLastNameCorrect(method, cl));
        }
    }

    private boolean assertSetLastNameCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetLastName(method, cl)
                && correctSetLastNameWithShorterString(method, cl);
    }

    private boolean correctSetLastNameWithShorterString(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try {
            setLastName.invoke(person, SHORTER_SECOND_NAME);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetLastName(Method setLastName, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

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
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


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

public class T11TestSetAge {
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


    private static final String[] methodNames = new String[]{
            "setAge"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setAge", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setAge", new Class[]{int.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_SALARY_IS_SET,
                    assertSetAgeCorrect(method, cl));
        }
    }

    private boolean assertSetAgeCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetAge(method, cl)
                && correctSetAgeWithZERO(method, cl);
    }

    private boolean correctSetAgeWithZERO(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class,
                String.class, int.class, double.class);
        constructor.setAccessible(true);
        Object person = constructor.newInstance(FIRST_NAME, SECOND_NAME,
                OLD_PERSON_AGE, PERSON_SALARY);

        boolean error = false;
        try {
            setAge.invoke(person, 0);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetAge(Method setAge, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

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
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}


[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T12TestAddPlayer {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String TEAM_NAME = "TeamName";
    private static final String PERSON_CLASS_NAME = "Person";
    private static final String PERSON_METHOD_GET_AGE_NAME = "getAge";
    private static final String NAME_OF_FIELD_RESERVE_TEAM = "reserveTeam";
    private static final String NAME_OF_FIELD_FIRST_TEAM = "firstTeam";
    private static final int YOUNG_PERSON_AGE = 20;
    private static final int OLD_PERSON_AGE = 40;

    private static final String PERSON = "Team";


    private static final String[] methodNames = new String[]{
            "addPlayer"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("addPlayer", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("addPlayer", new Class[]{Object.class});
    }};
    private static final String CANNOT_ADD_PLAYER = "Can not add player";


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(PERSON);
        for (String methodName : methodNames) {
            Method method = cl.getDeclaredMethod(methodName, Classes.allClasses.get(PERSON_CLASS_NAME));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            PERSON,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(CANNOT_ADD_PLAYER,
                    assertAddPlayerCorrect(method, cl));
        }
    }

    private boolean assertAddPlayerCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctAddYoungPlayer(method, cl)
                && correctAddOldPlayer(method, cl);
    }

    private boolean correctAddOldPlayer(Method addPlayer, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(String.class);
        constructor.setAccessible(true);
        Object team = constructor.newInstance(TEAM_NAME);

        Object person = Mockito.mock(Classes.allClasses.get(PERSON_CLASS_NAME));
        Method getAge = person.getClass().getDeclaredMethod(PERSON_METHOD_GET_AGE_NAME);
        getAge.setAccessible(true);
        Mockito.when(getAge.invoke(person)).thenReturn(OLD_PERSON_AGE);

        addPlayer.invoke(team, person);

        Field reserveTeamField = team.getClass().getDeclaredField(NAME_OF_FIELD_RESERVE_TEAM);
        reserveTeamField.setAccessible(true);
        List<?> reserveTeam = (List<?>) reserveTeamField.get(team);

        return reserveTeam.size() > 0;
    }

    private boolean correctAddYoungPlayer(Method addPlayer, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(String.class);
        constructor.setAccessible(true);
        Object team = constructor.newInstance(TEAM_NAME);

        Object person = Mockito.mock(Classes.allClasses.get(PERSON_CLASS_NAME));
        Method getAge = person.getClass().getDeclaredMethod(PERSON_METHOD_GET_AGE_NAME);
        getAge.setAccessible(true);
        Mockito.when(getAge.invoke(person)).thenReturn(YOUNG_PERSON_AGE);

        addPlayer.invoke(team, person);

        Field firstTeamField = team.getClass().getDeclaredField(NAME_OF_FIELD_FIRST_TEAM);
        firstTeamField.setAccessible(true);
        List<?> firstTeam = (List<?>) firstTeamField.get(team);

        return firstTeam.size() > 0;
    }

    private Class getClass(String className) {
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    }
}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

