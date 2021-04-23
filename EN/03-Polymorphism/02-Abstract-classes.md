[slide hideTitle]

# Abstract Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-16-17-Abstract-Classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us take a look at **abstract classes** in Java.

We know from the last lesson that **abstract classes cannot** be instantiated.

```java
public abstract class Animal {} 
public class Cat extends Animal {}
Animal cat = new Animal(); // Compile time error
Animal cat = new Cat(); // Polymorphism
```

An abstract class **may** or **may not** have **abstract methods** inside itself.

If we need to use an abstract class we must inherit it.

An **abstract class** shares an "**IS-A**" type relationship with its subclasses. 

So we could have an **abstract** class called `Animal` which holds functions as any animal would possess (like a **eat** or **sleep** function), and then a class called `Cat` which inherits it. 

**Every cat is an animal, but not all animals are cats.**

The main goal of an abstract class is to provide a shared implementation of common behavior - promoting the **reuse of code**.

[/slide]

[slide hideTitle]
# Problem with Solution: Shapes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-18-problem-and-solution-shapes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Shapes" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-Shapes" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a **class structure**, starting with an abstract class **Shape**:

- **Fields**:
    - perimeter : Double
    - area : Double

- **Encapsulate these fields**

- **Abstract methods**:
    - `calculatePerimeter()`
    - `calculateArea()`

**Extend** the **Shape** class with **two children classes**:

- **Rectangle**
- **Circle**

Each of them needs to have:

- **Fields - for Rectangle**:
    - height : Double
    - width : Double 

- **Fields - for Circle**:
    - radius : Double

- **Encapsulate these fields**

- **A Public constructor**

- **Concrete methods to calculate a figure's perimeter and area**

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestShape \{
    private static final String SHAPE_CLASS_NAME = "Shape";
    private static final String METHOD_GETPERIMETER_NAME = "getPerimeter";
    private static final String METHOD_CALCULATEPERIMETER_NAME = "calculatePerimeter";
    private static final String METHOD_GETAREA_NAME = "getArea";
    private static final String METHOD_CALCULATEAREA_NAME = "calculateArea";
    private static final String FIELD_PERIMETER_NAME = "perimeter";
    private static final String FIELD_AREA_NAME = "area";

    @Test
    public void shape() throws NoSuchFieldException \{

        Assert.assertTrue("Class 'Shape' not found", Classes.allClasses.containsKey(SHAPE_CLASS_NAME));

        Class shape = Classes.allClasses.get(SHAPE_CLASS_NAME);

        Method\[\] shapeMethods = shape.getDeclaredMethods();
        Assert.assertTrue(
                String.format("Method %s not present", METHOD_GETPERIMETER_NAME),
                isMethodPresent(shapeMethods, METHOD_GETPERIMETER_NAME));

        Assert.assertTrue(
                String.format("Method %s not present", METHOD_CALCULATEPERIMETER_NAME),
                isMethodPresent(shapeMethods, METHOD_CALCULATEPERIMETER_NAME));

        Assert.assertTrue(
                String.format("Method %s not present", METHOD_GETAREA_NAME),
                isMethodPresent(shapeMethods, METHOD_GETAREA_NAME));

        Assert.assertTrue(
                String.format("Method %s not present", METHOD_CALCULATEAREA_NAME),
                isMethodPresent(shapeMethods, METHOD_CALCULATEAREA_NAME));

        Field fieldPerimeter = shape.getDeclaredField(FIELD_PERIMETER_NAME);
        Field fieldArea = shape.getDeclaredField(FIELD_AREA_NAME);

        Assert.assertTrue("Field 'perimeter' was not of type 'Double'",
                fieldPerimeter.getType().equals(Double.class) \|\| fieldPerimeter.getType().equals(double.class));

        Assert.assertTrue("Field 'perimeter' access level was not 'private'",
                Modifier.isPrivate(fieldPerimeter.getModifiers()));

        Assert.assertTrue("Field 'area' was not of type 'Double'",
                fieldArea.getType().equals(Double.class) \|\| fieldArea.getType().equals(double.class));

        Assert.assertTrue("Field 'area' access level was not 'private'",
                Modifier.isPrivate(fieldArea.getModifiers()));
    \}

    private boolean isMethodPresent(Method\[\] methods, String name) \{
        Optional\<Method\> method =  Stream.of(methods)
                .filter(m -\> m.getName().equals(name))
                .findFirst();

        return method.isPresent();
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestCircle \{
    private static final String CIRCLE_CLASS_NAME = "Circle";
    private static final String METHOD_GETRADIUS_NAME = "getRadius";
    private static final String FIELD_RADIUS_NAME = "radius";

    @Test
    public void circle() throws NoSuchFieldException \{

        Assert.assertTrue("Class 'Circle' not found", Classes.allClasses.containsKey(CIRCLE_CLASS_NAME));
        Class circle = Classes.allClasses.get(CIRCLE_CLASS_NAME);

        Method\[\] methods = circle.getDeclaredMethods();
        Optional\<Method\> methodGetRadius = Stream.of(methods)
                .filter(m -\> m.getName().equals(METHOD_GETRADIUS_NAME))
                .findFirst();

        Assert.assertTrue(
                "Method '" + METHOD_GETRADIUS_NAME + "' not present",
                methodGetRadius.isPresent());

        Assert.assertTrue(
                "Method '" + METHOD_GETRADIUS_NAME + "' should have 'final' modifier",
                Modifier.isFinal(methodGetRadius.get().getModifiers()));

        Field radius = circle.getDeclaredField(FIELD_RADIUS_NAME);

        Assert.assertTrue("Field 'radius' was not of type 'Double'",
                radius.getType().equals(Double.class) \|\| radius.getType().equals(double.class));

        Assert.assertTrue("Field 'radius' access level was not 'private'",
                Modifier.isPrivate(radius.getModifiers()));
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
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Optional;
import java.util.stream.Stream;

public class TestRectangle \{
    private static final String RECTANGLE_CLASS_NAME = "Rectangle";
    private static final String METHOD_GETHEIGHT_NAME = "getHeight";
    private static final String METHOD_GETWIDTH_NAME = "getWidth";
    private static final String FIELD_HEIGHT_NAME = "height";
    private static final String FIELD_WIDTH_NAME = "width";

    @Test
    public void rectanle() throws NoSuchFieldException \{

        Assert.assertTrue("Class 'Rectangle' not found", Classes.allClasses.containsKey(RECTANGLE_CLASS_NAME));
        Class rectangle = Classes.allClasses.get(RECTANGLE_CLASS_NAME);

        Method\[\] methods = rectangle.getDeclaredMethods();
        Assert.assertTrue(
                String.format("Method %s not present", METHOD_GETHEIGHT_NAME),
                isMethodPresent(methods, METHOD_GETHEIGHT_NAME));

        Assert.assertTrue(
                String.format("Method %s not present", METHOD_GETWIDTH_NAME),
                isMethodPresent(methods, METHOD_GETWIDTH_NAME));

        Field height = rectangle.getDeclaredField(FIELD_HEIGHT_NAME);
        Field width = rectangle.getDeclaredField(FIELD_WIDTH_NAME);

        Assert.assertTrue("Field 'height' was not of type 'Double'",
                height.getType().equals(Double.class) \|\| height.getType().equals(double.class));

        Assert.assertTrue("Field 'height' access level was not 'private'",
                Modifier.isPrivate(height.getModifiers()));

        Assert.assertTrue("Field 'width' was not of type 'Double'",
                width.getType().equals(Double.class) \|\| width.getType().equals(double.class));

        Assert.assertTrue("Field 'width' access level was not 'private'",
                Modifier.isPrivate(width.getModifiers()));
    \}

    private boolean isMethodPresent(Method\[\] methods, String name) \{
        Optional\<Method\> method =  Stream.of(methods)
                .filter(m -\> m.getName().equals(name))
                .findFirst();

        return method.isPresent();
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
# Problem with Solution: Animals

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/Animals-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Animals" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-Animals" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class called **Animal**, which holds two fields:
- **name: String**
- **favouriteFood: String**

The **Animal** class should have one abstract method **getAnimalInfo() : String**.

create two additional classes - **Cat** and **Dog**. 

**Override** the **getAnimalInfo()** method by defining different animal sounds on a new line. 

To get a better idea, look at the example below.

Your code should function in this context:

```java
public static void main(String[] args) {
    Animal cat = new Cat("Oscar", "Whiskas");
    Animal dog = new Dog("Rocky", "Meat");
    System.out.println(cat.getAnimalInfo());
    System.out.println(dog.getAnimalInfo());
}
```

# Example
| **Output** |
| --- |
| I am Oscar and my favourite food is Whiskas. |
| MEOW |
| I am Rocky and my favourite food is Meat. |
| BARK |

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class T01TestAllClassesExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String[] classNames = new String[]{
            "Animal",
            "Cat",
            "Dog",
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
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class T02TestAllFieldsExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String FIELD_IS_MISSING_ERROR_MESSAGE = "Field '%s' in class '%s' is missing";
    private static final Class<?> animalClass = Classes.allClasses.get("Animal");

//    private static final String[] classNames = new String[]{
//            "Animal"
//    };
    private static final Map<String, String[]> allNeededFields =
            new HashMap<String, String[]>() {{
                put("Animal", new String[]{"name", "favouriteFood"});
            }};

    @Test
    public void test() {
      haveAllFields("Animal");
      hasMethodExplainSelf();
    }

    private void hasMethodExplainSelf() {
        List<Method> methods = Arrays.asList(animalClass.getDeclaredMethods());
        boolean contains = false;
        for (Method method : methods) {
            if (method.getName().equals("getAnimalInfo")){
                contains=true;
            }
        }

        Assert.assertTrue("Method ExplainSelf in class Animal not present",contains);
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
            Assert.assertTrue(String.format(FIELD_IS_MISSING_ERROR_MESSAGE, field,className),
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

public class T03TestAllConstructors {
    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";
    private static final Class<?> animalClass = Classes.allClasses.get("Animal");
    private static final Class<?> catClass = Classes.allClasses.get("Cat");
    private static final Class<?> dogClass = Classes.allClasses.get("Dog");


    private static final String[] classNames = new String[]{
            "Cat",
            "Dog",
            "Animal",
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Animal", new Class[]{String.class,String.class});
        put("Cat", new Class[]{String.class,String.class});
        put("Dog", new Class[]{String.class,String.class});
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

import static org.junit.Assert.*;

public class T04TestCatClass {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";
    private static final String PARENT_CLASS_NAME = "Animal";
    private static final String CHILD_CLASS_NAME = "Cat";

    @Test
    public void testChildParent() {
        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, CHILD_CLASS_NAME),
                Classes.allClasses.containsKey(CHILD_CLASS_NAME));

        Class child = Classes.allClasses.get(CHILD_CLASS_NAME);
        Class parent = child.getSuperclass();

        Assert.assertEquals(String.format(ERROR_MESSAGE, CHILD_CLASS_NAME, PARENT_CLASS_NAME),
                parent.getSimpleName(), PARENT_CLASS_NAME);

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

import static org.junit.Assert.*;

public class T05TestDogClass {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String ERROR_MESSAGE = "Class '%s' should inherit from class '%s'";
    private static final String PARENT_CLASS_NAME = "Animal";
    private static final String CHILD_CLASS_NAME = "Dog";

    @Test
    public void testChildParent() {
        Assert.assertTrue(
                String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, CHILD_CLASS_NAME),
                Classes.allClasses.containsKey(CHILD_CLASS_NAME));

        Class child = Classes.allClasses.get(CHILD_CLASS_NAME);
        Class parent = child.getSuperclass();

        Assert.assertEquals(String.format(ERROR_MESSAGE, CHILD_CLASS_NAME, PARENT_CLASS_NAME),
                parent.getSimpleName(), PARENT_CLASS_NAME);

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

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T06TestAllMethods {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Animal";
    private static final String CLASS_NAME_2 = "Cat";
    private static final String CLASS_NAME_3 = "Dog";
    private static final String SEARCHED_METHOD_1 = "getAnimalInfo";

    private static final String[] classNames = new String[]{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3,

    };


    private static final Map<String, String[]> methodsInClass =
            new HashMap<String, String[]>() {{
                put(CLASS_NAME, new String[]{
                        SEARCHED_METHOD_1,


                });
                put(CLASS_NAME_2, new String[]{
                        SEARCHED_METHOD_1,

                });
                put(CLASS_NAME_3, new String[]{

                        SEARCHED_METHOD_1,
                });

            }};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put(SEARCHED_METHOD_1, String.class);

    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put(SEARCHED_METHOD_1, new Class[]{});
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
//                if (!cl.getSimpleName().equals("Animal")) {
//
//
//    //            Assert.assertTrue("Method not ovveriden");
//                }
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
[/tests]
[/code-task]
[/slide]

