[slide hideTitle]

# Clasele Abstracte

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-16-17-Abstract-Classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să aruncăm o privire asupra **claselor abstracte** din Java.

Știm din ultima lecție că **clasele abstracte nu pot** fi instanțiate.

```java
public abstract class Animal {} 
public class Cat extends Animal {}
Animal cat = new Animal(); // Compile time error
Animal cat = new Cat(); // Polymorphism
```

O clasă abstractă **poate** sau **nu** să aibă **metode abstracte** în sine.

Dacă trebuie să folosim o clasă abstractă, trebuie să o moștenim.

O **clasă abstractă** împarte o relație de tip **IS-A** cu subclasele sale.

Așa că am putea avea o clasă **abstractă** numită `Animal` care deține funcții precum orice animal ar avea (cum ar fi o funcție **mănâncă** sau **dormi**) și apoi o clasă numită `Cat` care moștenește aceasta.

**Fiecare pisică este un animal, dar nu toate animalele sunt pisici.**

Scopul principal al unei clase abstracte este de a oferi o implementare comună a comportamentului comun - promovând **reutilizarea codului**.

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Shapes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive_java_oop_advanced_polymorphism_18_problem_and_solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Shapes" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-Shapes" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o **structură de clasă**, începând cu o clasă abstractă **Shape**:

- **Câmpuri**:
    - perimetru: dublu
    - zona: dublă

- **Încapsulați aceste câmpuri**

- **Metode abstracte**:
    - `calculatePerimeter()`
    - `calculateArea()`

**Extindeți** clasa **Shape** cu **două clase copil**:

- **Rectangle**
- **Circle**

Fiecare dintre ele trebuie să aibă:

- **Câmpuri - pentru dreptunghi**:
    - înălțime: double
    - lățime: double

- **Câmpuri - pentru cerc**:
    - raza: double

- **Încapsulați aceste câmpuri**

- **Un constructor public**

- **Metode concrete pentru a calcula perimetrul și aria unei figuri**

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
# Problemă: Animals

[code-task title="Animals" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-Animals" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o clasă numită **Animal**, care conține două câmpuri:
- **name: String**
- **favouriteFood: String**

Clasa **Animal** ar trebui să aibă o metodă abstractă **getAnimalInfo(): String**.

creați două clase suplimentare - **Cat** și **Dog**.

**Override** metoda **getAnimalInfo()** definind diferite sunete de animale pe o nouă linie.

Pentru a vă face o idee mai bună, uitați-vă la exemplul de mai jos.

Codul dvs. ar trebui să funcționeze în acest context:

```java
public static void main(String[] args) {
    Animal cat = new Cat("Oscar", "Whiskas");
    Animal dog = new Dog("Rocky", "Meat");
    System.out.println(cat.getAnimalInfo());
    System.out.println(dog.getAnimalInfo());
}
```

# Exemplu
| **Ieșire** |
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

