[slide]

# Code Refactoring



[/slide]

[slide]
# Problem: Sort by Name and Age
[code-task title="Problem: Sort by Name and Age" taskId="5783e108-0ee1-468f-959f-881e6915ba43" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

You should be able to use the class like this:
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class P01_ZeroTest \{

    @Test
    public void test() throws NoSuchMethodException \{
        Assert.assertTrue("Class 'Jar' not found", Classes.allClasses.containsKey("Jar"));
        Class cl = Classes.allClasses.get("Jar");
	Assert.assertTrue("Jar class has no type parameters", cl.getTypeParameters().length \> 0);
        cl.getDeclaredMethod("add", Object.class);
        cl.getDeclaredMethod("remove");
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P01_TestAddInt \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
	Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123);
        Integer result = (Integer) remove.invoke(jar);
        Assert.assertTrue(result.equals(123));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P01_TestAddString \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
	Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, "123");
        String result = (String) remove.invoke(jar);
        Assert.assertTrue(result.equals("123"));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P01_TestAddFloat \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123.2f);
        Float result = (Float) remove.invoke(jar);
        Assert.assertTrue(result.equals(123.2f));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P01_TestAddDouble \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, 123.2);
        Double result = (Double) remove.invoke(jar);
        Assert.assertTrue(result.equals(123.2));
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

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class P01_TestAddBoolean \{

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException \{
        Class\<?\> cl = Classes.allClasses.get("Jar");
        Assert.assertTrue(cl.getTypeParameters().length \> 0);
        Method add = cl.getMethod("add", Object.class);
        Method remove = cl.getMethod("remove");
        Object jar = cl.newInstance();
        add.invoke(jar, false);
        add.invoke(jar, true);
        add.invoke(jar, false);
        boolean result = (boolean) remove.invoke(jar);
        Assert.assertTrue(!result);
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