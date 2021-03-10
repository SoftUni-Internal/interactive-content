# Homework

[slide hideTitle]
# Problem: Class Box
[code-task title="Class Box" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Class-Box" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
You are given a geometric figure Box with fields length, width and height. 

Model a class Box that can be instantiated by the same three parameters. 

Expose to the outside world only methods for its surface area, lateral surface area and its volume.
[Formulas](http://www.mathwords.com/r/rectangular_parallelepiped.htm).

## Input
On the first three lines you will get the length, width and height. 

On the next three lines print the surface area, lateral surface area and the volume of the box.

A box’s side should not be zero or a negative number. 

Add data validation for each parameter given to the constructor. 

Make a private setter that performs data validation internally.


| **Box** |
| --- |
| -length: double |
| -width: double |
| -height: double |
|  |
| +Box (double length, double width, double height) |
| -setLength(double): void |
| -setWidth(double): void |
| -setHeight(double): void |
| +calculateSurfaceArea (): double |
| +calculateLateralSurfaceArea (): double |
| +calculateVolume (): double |


## Examples
| **Input** | **Output** |
| --- | --- |
| 2 | Width cannot be zero or negative. |
| -3 |  |
| 4 |  |

| **Input** | **Output** |
| --- | --- |
| 2 | Surface Area - 52.00 |
| 3 | Lateral Surface Area - 40.00 |
| 4 | Volume – 24.00 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 1.3 | Surface Area - 30.20 |
| 1 | Lateral Surface Area - 27.60 |
| 6 | Volume - 7.80 |

[/task-description]
[tests]
[test open]
[input]

import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String[] classNames = new String[] {
            "Box"
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
[test open]
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

    private static final String[] classNames = new String[]{"Box"};
    private static final Map<String, String[]> allNeededFields =
            new HashMap<String, String[]>() {{
                put("Box", new String[]{"length", "width", "height"});
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
[test open]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T03TestConstructors {

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String[] classNames = new String[]{
            "Box"
    };

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() {{
        put("Box", new Class[]{double.class, double.class, double.class});


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
[test open]
[input]

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class T04TestForNonPrivateFields {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String[] classNames = new String[]{"Box"};

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
import java.util.HashMap;
import java.util.Map;

public class T05TestAllMethodsExists {

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";

    private static final String[] classNames = new String[]{
            "Box"
    };


    private static final Map<String, String[]> methodsInClass =
            new HashMap<String, String[]>() {{
                put("Box", new String[]{
                        "calculateSurfaceArea",
                        "calculateLateralSurfaceArea",
                        "calculateVolume",
                        "setLength",
                        "setWidth",
                        "setHeight",
                });
            }};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("calculateSurfaceArea", double.class);
        put("calculateLateralSurfaceArea", double.class);
        put("calculateVolume", double.class);
        put("setLength", void.class);
        put("setWidth", void.class);
        put("setHeight", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("calculateSurfaceArea", new Class[]{});
        put("calculateLateralSurfaceArea", new Class[]{});
        put("calculateVolume", new Class[]{});
        put("setLength", new Class[]{double.class});
        put("setWidth", new Class[]{double.class});
        put("setHeight", new Class[]{double.class});
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T06TestCalculateSurfaceArea {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result from method %s";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "calculateSurfaceArea"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("calculateSurfaceArea", double.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("calculateSurfaceArea", new Class[]{});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName,
                            methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_RESULT, methodName),
                    assertCalculateSurfaceCorrect(method, cl));
        }
    }

    private boolean assertCalculateSurfaceCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctCalculateSurface(method, cl);
    }


    private boolean correctCalculateSurface(Method calculateSurfaceArea, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor
                .newInstance(BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        double result = (double) calculateSurfaceArea.invoke(box);

        double expectedResult = (2 * BOX_LENGTH * BOX_WIDTH) +
                (2 * BOX_LENGTH * BOX_HEIGHT) + (2 * BOX_WIDTH * BOX_HEIGHT);

        return expectedResult == result;
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T07CalculateLateralSurfaceArea {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result from method %s";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "calculateLateralSurfaceArea"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("calculateLateralSurfaceArea", double.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("calculateLateralSurfaceArea", new Class[]{});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName,
                            methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_RESULT, methodName),
                    assertCalculateSurfaceCorrect(method, cl));
        }
    }

    private boolean assertCalculateSurfaceCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctCalculateSurface(method, cl);
    }


    private boolean correctCalculateSurface(Method calculateSurfaceArea, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor
                .newInstance(BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        double result = (double) calculateSurfaceArea.invoke(box);

        double expectedResult = (2 * BOX_LENGTH * BOX_HEIGHT) +
                (2 * BOX_WIDTH * BOX_HEIGHT);

        return expectedResult == result;
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T08TestCalculateVolume {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result from method %s";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "calculateVolume"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("calculateVolume", double.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("calculateVolume", new Class[]{});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName,
                            methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_RESULT, methodName),
                    assertCalculateSurfaceCorrect(method, cl));
        }
    }

    private boolean assertCalculateSurfaceCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctCalculateSurface(method, cl);
    }


    private boolean correctCalculateSurface(Method calculateSurfaceArea, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor
                .newInstance(BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        double result = (double) calculateSurfaceArea.invoke(box);

        double expectedResult = BOX_LENGTH * BOX_WIDTH * BOX_HEIGHT;

        return expectedResult == result;
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

public class T09TestSetLength {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;
    private static final String FIELD_LENGTH_NAME = "length";

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "setLength"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setLength", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setLength", new Class[]{double.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, FIELD_LENGTH_NAME),
                    assertSetLengthCorrect(method, cl));
        }
    }

    private boolean assertSetLengthCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetLength(method, cl)
                && correctLengthWithZero(method, cl);
    }

    private boolean correctLengthWithZero(Method setLength, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setLength.setAccessible(true);
        boolean error = false;
        try {
            setLength.invoke(box, 0);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetLength(Method setLength, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setLength.setAccessible(true);
        setLength.invoke(box, BOX_LENGTH);

        Field fieldLength = box.getClass().getDeclaredField(FIELD_LENGTH_NAME);
        fieldLength.setAccessible(true);
        double length = (double) fieldLength.get(box);

        return BOX_LENGTH == length;
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

public class T10TestSetWidth {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;
    private static final String FIELD_WIDTH_NAME = "width";

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "setWidth"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setWidth", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setWidth", new Class[]{double.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, FIELD_WIDTH_NAME),
                    assertSetWidthCorrect(method, cl));
        }
    }

    private boolean assertSetWidthCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetWidth(method, cl)
                && correctSetWidthZero(method, cl);
    }

    private boolean correctSetWidthZero(Method setWidth, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setWidth.setAccessible(true);
        boolean error = false;
        try {
            setWidth.invoke(box, 0);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetWidth(Method setWidth, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setWidth.setAccessible(true);
        setWidth.invoke(box, BOX_WIDTH);

        Field fieldWidth = box.getClass().getDeclaredField(FIELD_WIDTH_NAME);
        fieldWidth.setAccessible(true);
        double width = (double) fieldWidth.get(box);

        return BOX_WIDTH == width;
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

public class T11TestSetHeight {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final double BOX_LENGTH = 1d;
    private static final double BOX_WIDTH = 2d;
    private static final double BOX_HEIGHT = 3d;
    private static final String FIELD_HEIGHT_NAME = "height";

    private static final String BOX = "Box";


    private static final String[] methodNames = new String[]{
            "setHeight"
    };

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() {{
        put("setHeight", void.class);
    }};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() {{
        put("setHeight", new Class[]{double.class});
    }};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        assertExistingMethodsAndWorksCorrect(methodNames);
    }

    private void assertExistingMethodsAndWorksCorrect(String[] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException {
        Class cl = getClass(BOX);
        for (String methodName : methodNames) {
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class<?> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            BOX,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, FIELD_HEIGHT_NAME),
                    assertSetHeightCorrect(method, cl));
        }
    }

    private boolean assertSetHeightCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException {
        return correctSetHeight(method, cl)
                && correctSetHeightWithZero(method, cl);
    }

    private boolean correctSetHeightWithZero(Method setHeight, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setHeight.setAccessible(true);
        boolean error = false;
        try {
            setHeight.invoke(box, 0);
        } catch (InvocationTargetException ite) {
            error = true;
        }

        return error;
    }

    private boolean correctSetHeight(Method setHeight, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {

        Constructor constructor = cl.getDeclaredConstructor(
                double.class, double.class, double.class);
        constructor.setAccessible(true);
        Object box = constructor.newInstance(
                BOX_LENGTH, BOX_WIDTH, BOX_HEIGHT);

        setHeight.setAccessible(true);
        setHeight.invoke(box, BOX_HEIGHT);

        Field fieldHeight = box.getClass().getDeclaredField(FIELD_HEIGHT_NAME);
        fieldHeight.setAccessible(true);
        double height = (double) fieldHeight.get(box);

        return BOX_HEIGHT == height;
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

[slide hideTitle]
# Problem: Animal Farm
[code-task title="Animal Farm" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Animal-Farm" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description

You should be familiar with encapsulation already. 

For this problem, you’ll need to create class called **Chicken**. 

Chicken should contain several **fields**, a **constructor**, and several **methods**. 

Your task is to encapsulate or hide anything that is not intended to be viewed or modified from outside the class.

| **Chicken** |
| --- |
| -name: String |
| -age: int |
|  |
| +Chicken(String, int) |
| -setName(String) : void |
| -setAge (int): void |
| +productPerDay (): double |
| +toString(): Override |
| -calculateProductPerDay() : double |

Chicken lives for **15 years**. 

Chicken have **name** for sure, at least **1 symbo**l long. 

Chicken producing eggs:
- First 6 years it produces 2 eggs per day [0 - 5]
- Next 6 years it produces 1 egg per day [6 - 11]
- And after that it produces 0.75 eggs per day

## Step 1. Encapsulate Fields
Fields should be **private**. 

Leaving fields open for modification from outside the class is potentially dangerous. 

Make all fields in the Chicken class private.

In case the value inside a field is needed elsewhere, use **getters** to reveal it.
## Step 2. Ensure Classes Have a Correct State
Having **getters and setters** is useless if you don’t actually use them. 

The Chicken constructor modifies the fields directly which is wrong when there are suitable setters available.

Modify the constructor to fix this issue.
## Step 3. Validate Data Properly
Validate the chicken’s **name** (it cannot be null, empty or whitespace). 

In case of **invalid name**, print exception message "**Name cannot be empty.**"

Validate the **age** properly, minimum and maximum age are provided, make use of them. 

In case of **invalid age**, print exception message "**Age should be between 0 and 15.**"
## Step 4. Hide Internal Logic
If a method is intended to be used only by descendant classes or internally to perform some action, there is no point in keeping them **public**.

The **calculateProductPerDay()** method is used by the **productPerDay()** public method. 

This means the method can safely be hidden inside the **Chicken** class by declaring it **private**.
## Step 4. Submit Code to Judge
Submit your code as a **zip** **file** in Judge. 

Make sure you have a **public Main** class with a **public static void main** method in it.

## Examples
| **Input** | **Output** |
| --- | --- |
| Lee | Chicken Lee (age 10) can produce 1.00 eggs per day. |
| 10 |  |

| **Input** | **Output** |
| --- | --- |
| Lee | Age should be between 0 and 15. |
| 17 |  |

| **Input** | **Output** |
| --- | --- |
| George | Chicken George (age 6) can produce 1.00 eggs per day. |
| 6 |  |

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\] \{
            "Chicken"
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
[test]
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

    private static final String\[\] classNames = new String\[\]\{"Chicken"\};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap<String, String[]>() \{\{
                put("Chicken", new String\[\]\{"name", "age"\});
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T03TestConstructors \{

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Chicken"
    \};

    private static final HashMap<String, Class[]> constructorParameters = new HashMap<String, Class[]>() \{\{
        put("Chicken", new Class[]{String.class, int.class});


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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class T04TestForNonPrivateFields \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String\[\] classNames = new String\[\]\{"Chicken"\};

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

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T05TestAllMethodsExists \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Chicken";
    private static final String SEARCHED_METHOD_1 = "setName";
    private static final String SEARCHED_METHOD_2 = "setAge";
    private static final String SEARCHED_METHOD_3 = "calculateProductPerDay";
    private static final String SEARCHED_METHOD_4 = "productPerDay";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap<String, String[]>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4,
                \});
            \}\};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() \{\{
        put(SEARCHED_METHOD_1, void.class);
        put(SEARCHED_METHOD_2, void.class);
        put(SEARCHED_METHOD_3, double.class);
        put(SEARCHED_METHOD_4, double.class);

    \}\};

    private static final HashMap<String, Class\[\]\> methodParameters = new HashMap<String, Class[]>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_2, new Class\[\]\{int.class\});
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

import java.lang.reflect.Method;

public class T06TestToStringOverride \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class %s not present";

    private static final String\[\] classNames = new String\[\]\{"Chicken"\};

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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T07TestSetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final String CHICKEN_NAME = "ChickenName";
    private static final int CHICKEN_MIDDLE_AGE = 10;
    private static final String NAME_OF_SEARCHED_FIELD = "name";
    private static final String TEST_METHOD_NAME = "setName";
    private static final String CHICKEN = "Chicken";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CHICKEN);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                CHICKEN_NAME, CHICKEN_MIDDLE_AGE);
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CHICKEN);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CHICKEN,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, NAME_OF_SEARCHED_FIELD),
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetName(method, cl)
                && correctSetNameWithEmptyString(method, cl);
    \}

    private boolean correctSetNameWithEmptyString(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(this.currentObject, "");
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetName(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        method.invoke(this.currentObject, CHICKEN_NAME);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_SEARCHED_FIELD);
        field.setAccessible(true);
        String result = (String) field.get(this.currentObject);

        return CHICKEN_NAME.equals(result);
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

public class T08TestSetAge \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final String CHICKEN_NAME = "ChickenName";
    private static final int CHICKEN_MIDDLE_AGE = 10;
    private static final int CHICKEN_NEGATIVE_AGE = -1;
    private static final String NAME_OF_SEARCHED_FIELD = "age";
    private static final String TEST_METHOD_NAME = "setAge";
    private static final String CHICKEN = "Chicken";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap<String, Class\[\]\> methodParameters = new HashMap<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{int.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CHICKEN);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                CHICKEN_NAME, CHICKEN_MIDDLE_AGE);
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CHICKEN);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CHICKEN,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, NAME_OF_SEARCHED_FIELD),
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetAge(method, cl)
                && correctSetAgeWithNegativeNumber(method, cl);
    \}

    private boolean correctSetAgeWithNegativeNumber(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(this.currentObject, CHICKEN_NEGATIVE_AGE);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetAge(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        method.invoke(this.currentObject, CHICKEN_MIDDLE_AGE);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_SEARCHED_FIELD);
        field.setAccessible(true);
        int result = (int) field.get(this.currentObject);

        return CHICKEN_MIDDLE_AGE == result;
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

public class T09TestProductPerDay \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String CHICKEN_NAME = "ChickenName";
    private static final int CHICKEN_MIDDLE_AGE = 10;
    private static final int YOUNG_CHICKEN_AGE = 3;
    private static final int OLD_CHICKEN_AGE = 13;
    private static final String TEST_METHOD_NAME = "productPerDay";
    private static final String NAME_OF_METHOD_SET_AGE = "setAge";
    private static final String CHICKEN = "Chicken";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap<String, Class> methodReturnTypes = new HashMap<String, Class>() \{\{
        put(TEST_METHOD_NAME, double.class);
        put(NAME_OF_METHOD_SET_AGE, void.class);
    \}\};

    private static final HashMap<String, Class[]> methodParameters = new HashMap<String, Class[]>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
        put(NAME_OF_METHOD_SET_AGE, new Class\[\]\{int.class\});
    \}\};

    private Object currentObject;
    private Method setAge;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CHICKEN);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                CHICKEN_NAME, CHICKEN_MIDDLE_AGE);

        this.setAge = cl.getDeclaredMethod
                (NAME_OF_METHOD_SET_AGE,
                        methodParameters.get(NAME_OF_METHOD_SET_AGE));
        setAge.setAccessible(true);
    \}

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertExistingMethodsAndWorksCorrect(methodNames);
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CHICKEN);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CHICKEN,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctTestWithYoungChicken(method, cl)
                && correctTestWithOldChicken(method, cl)
                && correctTestWithMiddleAgeChicken(method, cl);
    \}

    private boolean correctTestWithMiddleAgeChicken(Method method, Class cl) throws InvocationTargetException, IllegalAccessException \{
        this.setAge.invoke(this.currentObject, CHICKEN_MIDDLE_AGE);
        double result = (double) method.invoke(this.currentObject);
        double expectedResult = 1d;
        return expectedResult == result;
    \}

    private boolean correctTestWithOldChicken(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        this.setAge.invoke(this.currentObject, OLD_CHICKEN_AGE);
        double result = (double) method.invoke(this.currentObject);
        double expectedResult = 0.75;
        return expectedResult == result;
    \}

    private boolean correctTestWithYoungChicken(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        this.setAge.invoke(this.currentObject, YOUNG_CHICKEN_AGE);
        double result = (double) method.invoke(this.currentObject);
        double expectedResult = 2d;
        return expectedResult == result;
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

import java.lang.reflect.*;
import java.util.HashMap;

public class T10TestIsCalcProductPerDayAccessModifier \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_ACCESS_MODIFIER = "Wrong access modifier";
    private static final String TEST_METHOD_NAME = "calculateProductPerDay";
    private static final String CLASS_NAME = "Chicken";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap<String, Class\> methodReturnTypes = new HashMap<String, Class>() \{\{
        put(TEST_METHOD_NAME, double.class);
    \}\};

    private static final HashMap<String, Class\[\]\> methodParameters = new HashMap<String, Class[]>() \{\{
        put(TEST_METHOD_NAME, new Class[]{});
    \}\};


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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_ACCESS_MODIFIER,
                    assertMethodModifierIsCorrect(method, cl));
        \}
    \}

    private boolean assertMethodModifierIsCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        method.setAccessible(true);
        return Modifier.isPrivate(method.getModifiers()) ;
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
# Problem: Shopping Spree
[code-task title="Shopping Spree" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Shopping-Spree" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create two classes: class **Person** and class **Product**. 

Each person should have a **name**, **money** and a **bag of products**. 

Each product should have **name** and **cost**. 

Name cannot be an **empty** string. 

Be careful about **white space** in name. 

Money and cost cannot be a **negative** number.

| **Person** | **Product** |
| --- | --- |
| -name: String | -name: String |
| -money:  double | -cost: double|
| -products:  List(Product) |  |
|  |  |
| +Person (String ,  double) | +Product (String,  double) |
| -setName (String) : void | -setCost (double): void |
| -setMoney (double) : void | -setName (String): void |
| +buyProduct (Product) : void | +getName(): String |
| +getName(): String | +getCost (): double |

Create a program in which each command corresponds to a person buying a product. 

If the person can afford a product add it to his bag. 

If a person doesn’t have enough money, print an appropriate message:
"{Person name} can't afford {Product name}"

## Input
On the first two lines you are given all people and all products. 

## Output
After all purchases print every person in the order of appearance and all products that he has bought also in order of appearance. 

If nothing is bought, print the name of the person followed by "Nothing bought".

Read commands till you find line with "END" command. 

In case of invalid input (negative money exception message: "Money cannot be negative") or empty name: (empty name exception message "Name cannot be empty") break the program with an appropriate message. 

## Hint
Judge does not work with `isBlank()` method. You can use `trim().isEmpty()`.

## Examples
| **Input** | **Output** |
| --- | --- |
| Peter=11;George=4 | Peter bought Bread |
| Bread=10;Milk=2 | George bought Milk |
| Peter Bread | George bought Milk |
| George Milk | Peter can't afford Milk |
| George Milk | Peter - Bread |
| Peter Milk | George - Milk, Milk |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Merry=0 | Merry can't afford Coffee |
| Coffee=2 | Merry – Nothing bought |
| Merry Coffee |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Gill=-3 | Money cannot be negative |
| Tomatoes=1 |  |
| Gill Tomatoes |  |
| END |  |

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Person",
            "Product"
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
[test]
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
            "Person",
            "Product"
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Person", new String\[\]\{"name", "money", "products"\});
                put("Product", new String\[\]\{"name", "cost"\});
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T03TestConstructors \{

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Person",
            "Product"
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Person", new Class\[\]\{String.class, double.class\});
        put("Product", new Class\[\]\{String.class, double.class\});
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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class T04TestForNonPrivateFields \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String\[\] classNames = new String\[\]\{
            "Person",
            "Product"
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

import java.awt.*;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T05TestAllMethodsExists \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Person";
    private static final String CLASS_NAME_2 = "Product";
    private static final String SEARCHED_METHOD_1 = "setName";
    private static final String SEARCHED_METHOD_2 = "setMoney";
    private static final String SEARCHED_METHOD_3 = "buyProduct";
    private static final String SEARCHED_METHOD_5 = "setCost";
    private static final String SEARCHED_METHOD_6 = "getCost";
    private static final String SEARCHED_METHOD_7 = "getName";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_5,
                        SEARCHED_METHOD_6,
                        SEARCHED_METHOD_7,
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, void.class);
        put(SEARCHED_METHOD_2, void.class);
        put(SEARCHED_METHOD_3, void.class);
        put(SEARCHED_METHOD_5, void.class);
        put(SEARCHED_METHOD_6, double.class);
        put(SEARCHED_METHOD_7, String.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_2, new Class\[\]\{double.class\});
        put(SEARCHED_METHOD_3, new Class\[\]\{Classes.allClasses.get(CLASS_NAME_2)\});
        put(SEARCHED_METHOD_5, new Class\[\]\{double.class\});
        put(SEARCHED_METHOD_6, new Class\[\]\{\});
        put(SEARCHED_METHOD_7, new Class\[\]\{\});

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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T06TestPersonSetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final String NAME = "PersonName";
    private static final String NEW_NAME = "NewPersonName";
    private static final double MONEY = 100d;
    private static final String NAME_OF_SEARCHED_FIELD = "name";
    private static final String TEST_METHOD_NAME = "setName";
    private static final String CLASS_NAME = "Person";
    private static final String WHITE_SPACES = "  ";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NAME, MONEY);
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, NAME_OF_SEARCHED_FIELD),
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetName(method, cl)
                && correctSetNameWithWhiteSpace(method, cl);
    \}

    private boolean correctSetNameWithWhiteSpace(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(this.currentObject, WHITE_SPACES);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetName(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        method.invoke(this.currentObject,NEW_NAME);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_SEARCHED_FIELD);
        field.setAccessible(true);
        String result = (String) field.get(this.currentObject);

        return NEW_NAME.equals(result);
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
import java.util.Map;

public class T07TestSetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong result";
    private static final String NAME = "Name";
    private static final double MONEY = 100d;
    private static final String NEW_NAME = "NewName";
    private static final String NAME_OF_TESTED_FIELD = "name";
    private static final String TEST_METHOD_NAME = "setName";
    private static final String CLASS_NAME = "Person";
    private static final String CLASS_NAME_2 = "Product";
    private static final String WHITE_SPACES = "   ";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2
    \};

    private static final Map\<String, String\[\]\> classesAndMethods =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{TEST_METHOD_NAME\});
                put(CLASS_NAME_2, new String\[\]\{TEST_METHOD_NAME\});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private static final HashMap\<String, String\> testedFieldInClass =
            new HashMap\<String, String\>() \{\{
                put(CLASS_NAME, NAME_OF_TESTED_FIELD);
                put(CLASS_NAME_2, TEST_METHOD_NAME);
            \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        for (String className : classesAndMethods.keySet()) \{
            assertExistingMethodsAndWorksCorrect(
                    classesAndMethods.get(className), className
            );
        \}
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames, String className) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(className);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_FIELD_IS_SET,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSet(method, cl)
                && correctBehaviorOnSetWhiteSpaces(method, cl);
    \}

    private boolean correctBehaviorOnSetWhiteSpaces(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                NAME, MONEY);

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(currentObject, WHITE_SPACES);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSet(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                NAME, MONEY);

        method.setAccessible(true);
        method.invoke(currentObject, NEW_NAME);

        Field field = currentObject.getClass()
                .getDeclaredField(NAME_OF_TESTED_FIELD);
        field.setAccessible(true);
        String result = (String) field.get(currentObject);

        return NEW_NAME.equals(result);
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

public class T08TestProductSetName \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong %s is set";
    private static final String NAME = "ProductName";
    private static final String NEW_NAME = "NewProductName";
    private static final double MONEY = 100d;
    private static final String NAME_OF_SEARCHED_FIELD = "name";
    private static final String TEST_METHOD_NAME = "setName";
    private static final String CLASS_NAME = "Product";
    private static final String WHITE_SPACES = "  ";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NAME, MONEY);
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(String.format(WRONG_FIELD_IS_SET, NAME_OF_SEARCHED_FIELD),
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSetName(method, cl)
                && correctSetNameWithWhiteSpace(method, cl);
    \}

    private boolean correctSetNameWithWhiteSpace(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(this.currentObject, WHITE_SPACES);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSetName(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        method.invoke(this.currentObject,NEW_NAME);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_SEARCHED_FIELD);
        field.setAccessible(true);
        String result = (String) field.get(this.currentObject);

        return NEW_NAME.equals(result);
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
import java.util.Map;

public class T09TestSetMoneyAndCost \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_FIELD_IS_SET = "Wrong result";
    private static final String NAME = "ProductName";
    private static final double MONEY = 100d;
    private static final double NEW_MONEY = 200d;
    private static final String NAME_OF_TESTED_FIELD = "money";
    private static final String NAME_OF_TESTED_FIELD_2 = "cost";
    private static final String TEST_METHOD_NAME = "setMoney";
    private static final String TEST_METHOD_NAME_2 = "setCost";
    private static final String CLASS_NAME = "Person";
    private static final String CLASS_NAME_2 = "Product";
    private static final double NEGATIVE_MONEY = -1D;

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2
    \};

    private static final Map\<String, String\[\]\> classesAndMethods =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{TEST_METHOD_NAME\});
                put(CLASS_NAME_2, new String\[\]\{TEST_METHOD_NAME_2\});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
        put(TEST_METHOD_NAME_2, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{double.class\});
        put(TEST_METHOD_NAME_2, new Class\[\]\{double.class\});
    \}\};

    private static final HashMap\<String, String\> testedFieldInClass =
            new HashMap\<String, String\>() \{\{
                put(CLASS_NAME, NAME_OF_TESTED_FIELD);
                put(CLASS_NAME_2, NAME_OF_TESTED_FIELD_2);
            \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        for (String className : classesAndMethods.keySet()) \{
            assertExistingMethodsAndWorksCorrect(
                    classesAndMethods.get(className), className
            );
        \}
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames, String className) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(className);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_FIELD_IS_SET,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSet(method, cl)
                && correctBehaviorOnSetNegativeNumber(method, cl);
    \}

    private boolean correctBehaviorOnSetNegativeNumber(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                NAME, MONEY);

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(currentObject, NEGATIVE_MONEY);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctSet(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                NAME, MONEY);

        method.setAccessible(true);
        method.invoke(currentObject, NEW_MONEY);

        Field field = currentObject.getClass()
                .getDeclaredField(
                        testedFieldInClass.get(cl.getSimpleName()));
        field.setAccessible(true);
        double result = (double) field.get(currentObject);

        return NEW_MONEY == result;
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
import org.mockito.Mockito;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;

public class T10TestBuyProduct \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String NAME = "PersonName";
    private static final double MONEY = 100d;
    private static final String TEST_METHOD_NAME = "buyProduct";
    private static final String CLASS_NAME = "Person";
    private static final String PRODUCT_CLASS_NAME = "Product";
    private static final String NAME_OF_METHOD_GET_COST = "getCost";
    private static final String NAME_OF_FIELD_PRODUCTS = "products";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{
                Classes.allClasses.get(PRODUCT_CLASS_NAME)\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, double.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NAME, MONEY);
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctAdd(method, cl)
                && correctBehaviourWithExpensiveProduct(method, cl);
    \}

    private boolean correctBehaviourWithExpensiveProduct(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Class productClass = Classes.allClasses.get(PRODUCT_CLASS_NAME);
        Object product = Mockito.mock(productClass);
        Method getCost = productClass.getDeclaredMethod(NAME_OF_METHOD_GET_COST);
        getCost.setAccessible(true);
        Mockito.when(getCost.invoke(product)).thenReturn(MONEY + 1);

        method.setAccessible(true);
        boolean error = false;
        try \{
            method.invoke(this.currentObject, product);
        \} catch (InvocationTargetException ite) \{
            error = true;
        \}

        return error;
    \}

    private boolean correctAdd(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        Class productClass = Classes.allClasses.get(PRODUCT_CLASS_NAME);
        Object product = Mockito.mock(productClass);
        Method getCost = productClass.getDeclaredMethod(NAME_OF_METHOD_GET_COST);
        getCost.setAccessible(true);
        Mockito.when(getCost.invoke(product)).thenReturn(MONEY - 1);

        method.setAccessible(true);
        method.invoke(this.currentObject, product);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_FIELD_PRODUCTS);
        field.setAccessible(true);
        List list = (List) field.get(this.currentObject);

        return list.size() \> 0;
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
# Problem: Pizza Calories
[code-task title="Pizza Calories" timeLimit=5000 taskId="Java-OOP-Advanced-Encapsulation-Pizza-Calories" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
# Description
A Pizza is made of a dough and different toppings. 

You should model a class **Pizza** which should have a **name**, **dough** and **toppings** as fields. 

Every type of ingredient should have its own class.

| **Input** | 
| --- | 
| -name: String |
| -dought:  Dough | 
| -toppings: List(Topping)  | 
|  |
| +Piza (String, int numberOfToppings)| 
| -setToppings(int) : void | 
| -setName(String) : void |
| +setDough(Dough) : void |
| +getName(): String |
| +addTopping (Topping) : void |
| +getOverallCalories () : double |

Every ingredient has **different fields**: 

The dough can be **white** or **wholegrain** and in addition it can be **crispy**, **chewy** or **homemade**. 

The toppings can be of type **meat**, **veggies**, **cheese** or **sauce**. 

Every ingredient should have a **weight** in grams and a method for calculating its calories according its type. 

Calories per gram are calculated through modifiers. 

Every ingredient has **2 calories per gram as a base** and a **modifier** that gives the exact calories.

| **Dough** | **Topping** |
| --- | --- |
| -flourType: String | -toppingType: String |
| -bakingTechnique: String | -weight: double |
| -weight: double |  |
|  |  |
| +Dought (String, String, double) | +Topping (String, double) |
| -setWeight(double): void | -setToppingType (String): void |
| -setFlourType(String): void | -setWeight (double): void |
| -setBakingTechnique(String): void | -setWeight (double): void |
| +calculateCalories (): double |  |

**Your job** is to model the classes in such a way that they are **properly encapsulated**. 

Provide a public method for every pizza that **calculates its calories according to the ingredients it has**.

| **Dough Modifiers** | **Topping Modifiers** |
| --- | --- |
| White – 1.5 | Meat – 1.2 |
| Wholegrain – 1.0 | Veggies – 0.8 |
| Crispy – 0.9 | Cheese – 1.1 |
| Chewy – 1.1 | Sauce – 0.9 |
| Homemade – 1.0 |  |

For example, white dough has a modifier of 1.5, a chewy dough has a modifier of 1.1, which means that a white chewy dough weighting 100 grams will have (2 * 100) * 1.5 * 1.1 = 330.00 total calories.

For example, meat has a modifier of 1.2, which means that a meat weighting 50 grams will have (2 * 50) * 1.2 = 120.00 total calories.

## Data Validation
**Data Validation must be in the order of the Input Data**.
- If invalid flour type or an invalid baking technique is given an exception is thrown with the message "**Invalid type of dough**".
- If dough weight is outside of range (1..200) throw an exception with the message "**Dough weight should be in the range (1..200)**"
- If topping is not one of the provided types throw an exception with the message "**Cannot place {name of invalid argument} on top of your pizza**"
- If topping weight is outside of range (1..50) throw an exception with the message "**{Topping type name} weight should be in the range (1..50)**"
- If name of the pizza is empty, only whitespace or longer than 15 symbols throw an exception with the message "**Pizza name should be between 1 and 15 symbols.**"
- If number of topping is outside of range (0..10) throw an exception with the message "**Number of toppings should be in range (0..10)**"

## Input
**The input for a pizza consists of several lines:**
- On the first line is the **pizza name** and the **number of toppings it has** in format:
    - pizza **{pizzaName} {numberOfToppings}**
- On the second line you will get input for the **dough** in format:
    - dough **{flourType} {bakingTechnique} {weightInGrams}**
- On the next lines, you will receive every topping the pizza has, until an **"END"** command is given:
    - topping **{toppingType} {weightInGrams}**

## Output
If creation of the pizza was **successful** print on a single line the name of the pizza and the **total calories** it has, rounded to the second digit after the decimal point.


## Examples
| **Input** | **Output** |
| --- | --- |
| Pizza Meatless 2 | Meatless - 370.00 |
| Dough Wholegrain Crispy 100 |  |
| Topping Veggies 50 |  |
| Topping Cheese 50 |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Pizza European 20 | Number of toppings should be in range (0..10). |
| Dough Type500 100 |  |
| Topping Yellow Cheese 50 |  |
| Topping Cheese 50 |  |
| Topping Chicken 20 |  |
| Topping Meat 10 |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Pizza European 2 | Invalid type of dough. |
| Dough Type500 100 |  |
| Topping Yellow Cheese 50 |  |
| Topping Cheese 50 |  |
| Topping Chicken 20 |  |
| Topping Meat 10 |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Pizza European 2 | Cannot place Yellow Cheese on top of your pizza. |
| Dough White Chewy 100 |  |
| Topping Yellow Cheese 50 |  |
| Topping Cheese 50 |  |
| Topping Chicken 20 |  |
| Topping Meat 10 |  |
| END |  |

[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "Pizza",
            "Topping",
            "Dough"
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
[test]
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
            "Pizza",
            "Topping",
            "Dough"
    \};
    private static final Map\<String, String\[\]\> allNeededFields =
            new HashMap\<String, String\[\]\>() \{\{
                put("Pizza", new String\[\]\{"name", "dough", "toppings"\});
                put("Topping", new String\[\]\{"weight"\});
                put("Dough", new String\[\]\{"weight"\});
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.util.HashMap;

public class T03TestConstructors \{

    private static final String CONSTRUCTOR_NOT_PRESENT_ERROR_MESSAGE = "Constructor '%s' not present";


    private static final String\[\] classNames = new String\[\]\{
            "Pizza",
            "Topping",
            "Dough"
    \};

    private static final HashMap\<String, Class\[\]\> constructorParameters = new HashMap\<String, Class\[\]\>() \{\{
        put("Pizza", new Class\[\]\{String.class, int.class\});
        put("Topping", new Class\[\]\{String.class, double.class\});
        put("Dough", new Class\[\]\{String.class, String.class, double.class\});
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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.stream.Stream;

public class T04TestForNonPrivateFields \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String HAS_NON_PRIVATE_FIELDS_ERROR_MESSAGE = "Class %s contains non private fields";

    private static final String\[\] classNames = new String\[\]\{
            "Pizza",
            "Topping",
            "Dough"
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

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T05TestAllMethodsExists \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String CLASS_NAME = "Pizza";
    private static final String CLASS_NAME_2 = "Dough";
    private static final String CLASS_NAME_3 = "Topping";
    private static final String SEARCHED_METHOD_1 = "setName";
    private static final String SEARCHED_METHOD_2 = "setDough";
    private static final String SEARCHED_METHOD_3 = "setToppings";
    private static final String SEARCHED_METHOD_4 = "getOverallCalories";
    private static final String SEARCHED_METHOD_5 = "setWeight";
    private static final String SEARCHED_METHOD_6 = "setFlourType";
    private static final String SEARCHED_METHOD_7 = "setBakingTechnique";
    private static final String SEARCHED_METHOD_8 = "calculateCalories";
    private static final String SEARCHED_METHOD_9 = "setToppingType";

    private static final String\[\] classNames = new String\[\]\{
            CLASS_NAME,
            CLASS_NAME_2,
            CLASS_NAME_3
    \};


    private static final Map\<String, String\[\]\> methodsInClass =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{
                        SEARCHED_METHOD_1,
                        SEARCHED_METHOD_2,
                        SEARCHED_METHOD_3,
                        SEARCHED_METHOD_4
                \});
                put(CLASS_NAME_2, new String\[\]\{
                        SEARCHED_METHOD_5,
                        SEARCHED_METHOD_6,
                        SEARCHED_METHOD_7,
                        SEARCHED_METHOD_8
                \});
                put(CLASS_NAME_3, new String\[\]\{
                        SEARCHED_METHOD_5,
                        SEARCHED_METHOD_8,
                        SEARCHED_METHOD_9
                \});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(SEARCHED_METHOD_1, void.class);
        put(SEARCHED_METHOD_2, void.class);
        put(SEARCHED_METHOD_3, void.class);
        put(SEARCHED_METHOD_4, double.class);
        put(SEARCHED_METHOD_5, void.class);
        put(SEARCHED_METHOD_6, void.class);
        put(SEARCHED_METHOD_7, void.class);
        put(SEARCHED_METHOD_8, double.class);
        put(SEARCHED_METHOD_9, void.class);

    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(SEARCHED_METHOD_1, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_2, new Class\[\]\{Classes.allClasses.get(CLASS_NAME_2)\});
        put(SEARCHED_METHOD_3, new Class\[\]\{int.class\});
        put(SEARCHED_METHOD_4, new Class\[\]\{\});
        put(SEARCHED_METHOD_5, new Class\[\]\{double.class\});
        put(SEARCHED_METHOD_6, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_7, new Class\[\]\{String.class\});
        put(SEARCHED_METHOD_8, new Class\[\]\{\});
        put(SEARCHED_METHOD_9, new Class\[\]\{String.class\});

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

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T06TestSetWeight \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT_SET = "Wrong result";
    private static final String DOUGH_FLOUR_TYPE = "White";
    private static final String TOPPING_TYPE = "Meat";
    private static final String DOUGH_BAKING_TECHNIQUE = "Crispy";
    private static final double NORMAL_VALUE_OF_WEIGHT = 10D;
    private static final double NEGATIVE_WEIGHT = -10D;
    private static final double WEIGHT_VALUE_2 = 51D;
    private static final String NAME_OF_TESTED_FIELD = "weight";
    private static final String TEST_METHOD_NAME = "setWeight";
    private static final String CLASS_NAME = "Dough";
    private static final String CLASS_NAME_2 = "Topping";
    private static final String RIGHT_ERROR_MESSAGE_DOUGH = "Dough weight should be in the range \[1..200\].";
    private static final String RIGHT_ERROR_MESSAGE_TOPPING = "%s weight should be in the range \[1..50\].";


    private static final Map\<String, String\[\]\> classesAndMethods =
            new HashMap\<String, String\[\]\>() \{\{
                put(CLASS_NAME, new String\[\]\{TEST_METHOD_NAME\});
                put(CLASS_NAME_2, new String\[\]\{TEST_METHOD_NAME\});
            \}\};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{double.class\});
    \}\};

    private static final HashMap\<String, Class\[\]\> constructorParameters =
            new HashMap\<String, Class\[\]\>() \{\{
                put(CLASS_NAME, new Class\[\]\{String.class, String.class, double.class\});
                put(CLASS_NAME_2, new Class\[\]\{String.class, double.class\});
            \}\};

    private static final HashMap\<String, Object\[\]\> parametersForNewInstance =
            new HashMap\<String, Object\[\]\>() \{\{
                put(CLASS_NAME, new Object\[\]\{DOUGH_FLOUR_TYPE, DOUGH_BAKING_TECHNIQUE, NORMAL_VALUE_OF_WEIGHT\});
                put(CLASS_NAME_2, new Object\[\]\{TOPPING_TYPE, NORMAL_VALUE_OF_WEIGHT\});
            \}\};

    private static final HashMap\<String, String\> testedFieldInClass =
            new HashMap\<String, String\>() \{\{
                put(CLASS_NAME, NAME_OF_TESTED_FIELD);
                put(CLASS_NAME_2, NAME_OF_TESTED_FIELD);
            \}\};

    private static final HashMap\<String, Double\> parametersWithNewValues =
            new HashMap\<String, Double\>() \{\{
                put(CLASS_NAME, NEGATIVE_WEIGHT);
                put(CLASS_NAME_2, WEIGHT_VALUE_2);
            \}\};


    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        for (String className : classesAndMethods.keySet()) \{
            assertExistingMethodsAndWorksCorrect(
                    classesAndMethods.get(className), className
            );
        \}
    \}

    private void assertExistingMethodsAndWorksCorrect(String\[\] methodNames, String className) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(className);
        for (String methodName : methodNames) \{
            Method method =
                    methodParameters.get(methodName).length == 0
                            ? cl.getDeclaredMethod(methodName)
                            : cl.getDeclaredMethod(methodName, methodParameters.get(methodName));
            Class\<?\> returnType = method.getReturnType();
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT_SET,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctSet(method, cl)
                && throwCorrectException(method, cl);
    \}

    private boolean throwCorrectException(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        String className = cl.getSimpleName();
        Constructor constructor = cl.getDeclaredConstructor(
                constructorParameters.get(className));
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                parametersForNewInstance.get(className));

        method.setAccessible(true);
        boolean rightErrorMessage = false;
        try \{
            method.invoke(currentObject, parametersWithNewValues.get(className));
        \} catch (InvocationTargetException ite) \{
            String searchedError = className.endsWith(CLASS_NAME)
                    ? RIGHT_ERROR_MESSAGE_DOUGH
                    : String.format(RIGHT_ERROR_MESSAGE_TOPPING, TOPPING_TYPE);
            if (searchedError.equals(String.valueOf(ite.getTargetException().getMessage()))) \{
                rightErrorMessage = true;
            \}
        \}

        return rightErrorMessage;
    \}

    private boolean correctSet(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        String className = cl.getSimpleName();
        Constructor constructor = cl.getDeclaredConstructor(
                constructorParameters.get(className));
        constructor.setAccessible(true);
        Object currentObject = constructor.newInstance(
                parametersForNewInstance.get(className));

        method.setAccessible(true);
        method.invoke(currentObject, NORMAL_VALUE_OF_WEIGHT);

        Field field = currentObject.getClass()
                .getDeclaredField(NAME_OF_TESTED_FIELD);
        field.setAccessible(true);

        double result = (double) field.get(currentObject);

        return NORMAL_VALUE_OF_WEIGHT == result;
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

public class T07TestDoughSetFlourType \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "setFlourType";
    private static final String CLASS_NAME = "Dough";
    private static final String NAME_OF_FIELD = "flourType";
    private static final String DOUGH_FLOUR_TYPE = "White";
    private static final String ILLEGAL_FLOUR_TYPE = "IllegalFlourType";
    private static final String DOUGH_BAKING_TECHNIQUE = "Crispy";
    private static final double NORMAL_VALUE_OF_WEIGHT = 10D;
    private static final String RIGHT_ERROR_MESSAGE = "Invalid type of dough.";

    private static final String\[\] allPossibleFlourTypes = new String\[\]\{
            "White", "Wholegrain"
    \};

    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private static final HashMap\<String, Class\[\]\> constructorParameters =
            new HashMap\<String, Class\[\]\>() \{\{
                put(CLASS_NAME, new Class\[\]\{String.class, String.class, double.class\});
            \}\};

    private static final HashMap\<String, Object\[\]\> parametersForNewInstance =
            new HashMap\<String, Object\[\]\>() \{\{
                put(CLASS_NAME, new Object\[\]\{allPossibleFlourTypes\[0\], DOUGH_BAKING_TECHNIQUE, NORMAL_VALUE_OF_WEIGHT\});
            \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                constructorParameters.get(CLASS_NAME));
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                parametersForNewInstance.get(CLASS_NAME)
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return testWithCorrectParameters(method, cl)
                && testWithIllegalArguments(method, cl);
    \}

    private boolean testWithIllegalArguments(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean rightErrorMessage = false;
        try \{
            method.invoke(this.currentObject, ILLEGAL_FLOUR_TYPE);
        \} catch (InvocationTargetException ite) \{
            if (RIGHT_ERROR_MESSAGE.equals(String.valueOf(ite.getTargetException().getMessage()))) \{
                rightErrorMessage = true;
            \}
        \}

        return rightErrorMessage;
    \}

    private boolean testWithCorrectParameters(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        for (String possibleFlourType : allPossibleFlourTypes) \{
            method.invoke(this.currentObject, possibleFlourType);
        \}

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_FIELD);
        field.setAccessible(true);

        String result = (String) field.get(this.currentObject);

        return allPossibleFlourTypes\[allPossibleFlourTypes.length - 1\].equals(result);
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

public class T08TestDoughSetBakingTechnique \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "setBakingTechnique";
    private static final String CLASS_NAME = "Dough";
    private static final String NAME_OF_FIELD = "bakingTechnique";
    private static final String DOUGH_FLOUR_TYPE = "White";
    private static final String ILLEGAL_ARGUMENT = "IllegalBakingType";
    private static final String DOUGH_BAKING_TECHNIQUE = "Crispy";
    private static final double NORMAL_VALUE_OF_WEIGHT = 10D;
    private static final String RIGHT_ERROR_MESSAGE = "Invalid type of dough.";

    private static final String\[\] allPossibleFlourTypes = new String\[\]\{
            "Crispy",
            "Chewy",
            "Homemade"
    \};

    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private static final HashMap\<String, Class\[\]\> constructorParameters =
            new HashMap\<String, Class\[\]\>() \{\{
                put(CLASS_NAME, new Class\[\]\{String.class, String.class, double.class\});
            \}\};

    private static final HashMap\<String, Object\[\]\> parametersForNewInstance =
            new HashMap\<String, Object\[\]\>() \{\{
                put(CLASS_NAME, new Object\[\]\{DOUGH_FLOUR_TYPE, DOUGH_BAKING_TECHNIQUE, NORMAL_VALUE_OF_WEIGHT\});
            \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                constructorParameters.get(CLASS_NAME));
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                parametersForNewInstance.get(CLASS_NAME)
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return testWithCorrectParameters(method, cl)
                && testWithIllegalArguments(method, cl);
    \}

    private boolean testWithIllegalArguments(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        boolean rightErrorMessage = false;
        try \{
            method.invoke(this.currentObject, ILLEGAL_ARGUMENT);
        \} catch (InvocationTargetException ite) \{
            if (RIGHT_ERROR_MESSAGE.equals(String.valueOf(ite.getTargetException().getMessage()))) \{
                rightErrorMessage = true;
            \}
        \}

        return rightErrorMessage;
    \}

    private boolean testWithCorrectParameters(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);

        for (String possibleFlourType : allPossibleFlourTypes) \{
            method.invoke(this.currentObject, possibleFlourType);
        \}

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_FIELD);
        field.setAccessible(true);

        String result = (String) field.get(this.currentObject);

        return allPossibleFlourTypes\[allPossibleFlourTypes.length - 1\].equals(result);
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

public class T09TestPizzaSetName \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "setName";
    private static final String NAME_OF_TESTED_FIELD = "name";
    private static final String CLASS_NAME = "Pizza";
    private static final String NAME = "PizzaName";
    private static final String NEW_VALID_ARGUMENT = "NewPizzaName";
    private static final String ILLEGAL_ARGUMENT = "  ";
    private static final int NUMBER_OF_TOPPINGS = 5;
    private static final String RIGHT_ERROR_MESSAGE = "Pizza name should be between 1 and 15 symbols.";


    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{String.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NAME, NUMBER_OF_TOPPINGS);
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return correctWork(method, cl)
                && throwCorrectException(method, cl);
    \}

    private boolean throwCorrectException(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        try \{
            method.invoke(this.currentObject, ILLEGAL_ARGUMENT);
        \} catch (InvocationTargetException ite) \{
            if (RIGHT_ERROR_MESSAGE.equals(String.valueOf(ite.getTargetException().getMessage()))) \{
                return true;
            \}
        \}

        return false;
    \}

    private boolean correctWork(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        method.invoke(this.currentObject, NEW_VALID_ARGUMENT);

        Field field = this.currentObject.getClass()
                .getDeclaredField(NAME_OF_TESTED_FIELD);
        field.setAccessible(true);
        String result = (String) field.get(this.currentObject);

        return NEW_VALID_ARGUMENT.equals(result);
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

public class T10TestSetToppings \{

    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "setToppings";
    private static final String NAME_OF_TESTED_FIELD = "toppings";
    private static final String CLASS_NAME = "Pizza";
    private static final String NAME = "PizzaName";
    private static final int NEW_VALID_ARGUMENT = 5;
    private static final int ILLEGAL_ARGUMENT = 11;
    private static final String RIGHT_ERROR_MESSAGE = "Number of toppings should be in range \[0..10\].";

    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, void.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{int.class\});
    \}\};

    private Object currentObject;

    @Before
    public void createChickenAndFindMethod() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getDeclaredConstructor(
                String.class, int.class);
        constructor.setAccessible(true);
        this.currentObject = constructor.newInstance(
                NAME, NEW_VALID_ARGUMENT);
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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return  throwCorrectException(method, cl);
    \}

    private boolean throwCorrectException(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        method.setAccessible(true);
        try \{
            method.invoke(this.currentObject, ILLEGAL_ARGUMENT);
        \} catch (InvocationTargetException ite) \{
            if (RIGHT_ERROR_MESSAGE.equals(String.valueOf(ite.getTargetException().getMessage()))) \{
                return true;
            \}
        \}

        return false;
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T11TestToppingCalculateCalories \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "calculateCalories";
    private static final String CLASS_NAME = "Topping";
    private static final double NORMAL_VALUE_OF_WEIGHT = 10D;

    private static final Map\<String, Double\> toppingTypesAndModifiers =
            new HashMap\<String, Double\>() \{\{
                put("Meat", 1.2);
                put("Veggies", 0.8);
                put("Cheese", 1.1);
                put("Sauce", 0.9);
            \}\};

    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, double.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return testWithCorrectParameters(method, cl);
    \}

    private boolean testWithCorrectParameters(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        for (String toppingType : toppingTypesAndModifiers.keySet()) \{
            Constructor constructor = cl.getDeclaredConstructor(
                    String.class, double.class);
            constructor.setAccessible(true);
            Object currentObject = constructor.newInstance(
                    toppingType, NORMAL_VALUE_OF_WEIGHT);

            method.setAccessible(true);
            double currentResult = (double) method.invoke(currentObject);
            double expectedCurrentResult = NORMAL_VALUE_OF_WEIGHT \* 2
                    \* toppingTypesAndModifiers.get(toppingType);
            if (expectedCurrentResult != currentResult) \{
                return false;
            \}
        \}
        return true;
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
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class T12TestDoughCalculateCalories \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String WRONG_RESULT = "Wrong result";
    private static final String TEST_METHOD_NAME = "calculateCalories";
    private static final String CLASS_NAME = "Dough";
    private static final String DOUGH_FLOUR_TYPE = "White";
    private static final String DOUGH_BAKING_TECHNIQUE = "Crispy";
    private static final double NORMAL_VALUE_OF_WEIGHT = 10D;

    private static final Map\<String, Double\> flourTypesAndModifiers =
            new HashMap\<String, Double\>() \{\{
                put("White", 1.5);
                put("Wholegrain", 1D);
            \}\};
    private static final Map\<String, Double\> bakingTypesAndModifiers =
            new HashMap\<String, Double\>() \{\{
                put("Crispy", 0.9);
                put("Chewy", 1.1);
                put("Homemade", 1D);
            \}\};

    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, double.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{\});
    \}\};

    private static final HashMap\<String, Class\[\]\> constructorParameters =
            new HashMap\<String, Class\[\]\>() \{\{
                put(CLASS_NAME, new Class\[\]\{String.class, String.class, double.class\});
            \}\};

    private static final HashMap\<String, Object\[\]\> parametersForNewInstance =
            new HashMap\<String, Object\[\]\>() \{\{
                put(CLASS_NAME, new Object\[\]\{DOUGH_FLOUR_TYPE, DOUGH_BAKING_TECHNIQUE, NORMAL_VALUE_OF_WEIGHT\});
            \}\};

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
            Assert.assertTrue(
                    String.format(METHOD_RETURN_TYPE_ERROR,
                            methodName,
                            CLASS_NAME,
                            methodReturnTypes.get(methodName)),
                    returnType.equals(methodReturnTypes.get(methodName)));

            Assert.assertTrue(WRONG_RESULT,
                    assertMethodWorksCorrect(method, cl));
        \}
    \}

    private boolean assertMethodWorksCorrect(Method method, Class cl) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, NoSuchFieldException \{
        return testWithCorrectParameters(method, cl);
    \}

    private boolean testWithCorrectParameters(Method method, Class cl) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{

        for (String flourType : flourTypesAndModifiers.keySet()) \{
            for (String bakingType : bakingTypesAndModifiers.keySet()) \{
                Constructor constructor = cl.getDeclaredConstructor(
                        String.class, String.class, double.class);
                constructor.setAccessible(true);
                Object currentObject = constructor.newInstance(
                        flourType, bakingType, NORMAL_VALUE_OF_WEIGHT);

                method.setAccessible(true);
                double currentResult = (double) method.invoke(currentObject);
                double expectedCurrentResult = NORMAL_VALUE_OF_WEIGHT * 2
                        * flourTypesAndModifiers.get(flourType)
                        * bakingTypesAndModifiers.get(bakingType);
                if (expectedCurrentResult != currentResult) \{
                    return false;
                \}
            \}
        \}
        return true;
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
# Problem: Football Team Generator
[code-task title="Football Team Generator" taskId="Java-OOP-Advanced-Encapsulation-Football-Team-Generator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
**A football team has variable number of players, a name and a rating.**

| **Team** |
| --- |
| -name: String |
| -players: List(Player) |
|  |
| +Team (String) |
| -setName(String) : void |
| +getName(): String |
| +addPlayer(Player) : void |
| +removePlayer(String) : void |
| +getRating() : double |

A **player** has a **name** and **stats** which are the basis for his skill level. 

The stats a player has are **endurance**, **sprint**, **dribble**, **passing** and **shooting**. 

Each stat can be in the range (0..100). 

The **overall skill** level of a player is calculated as the **average** of his stats. 

Only the name of a player and his stats should be visible to all of the outside world. 

Everything else should be hidden.

| **Player** | 
| --- |
| -name: String |
| -endurance:  int |
| -sprint:  int |
| -dribble: int   |
| -passing: int |
| -shooting: int  |
|  |
| +Player (String, int, int, int, int, int) |
| -setName(String) : void |
| +getName(): String |
| -setEndurance (int) : void |
| -setSprint (int) : void |
| -setDribble (int) : void |
| -setPassing (int) : void |
| -setShooting (int) : void |
| +overallSkillLevel() : double |

A **team** should expose a **name**, a **rating** (calculated by the average skill level of all players in the team) and **methods** for **adding** and **removing** players.

Your task is to model the team and the players following the proper principles of **Encapsulation**. 

Expose only the fields that needs to be visible and validate data appropriately.

## Input
Your application will receive commands until the **"END"** command is given. 

The command can be one of the following:
- "**Team;{TeamName}**" – add a new team
- "**Add;{TeamName};{PlayerName};{Endurance};{Sprint};{Dribble};{Passing};{Shooting}**" – add a new player to the team
- "**Remove;{TeamName};{PlayerName}**" – remove the player from the team
- "**Rating;{TeamName}**" – print the team rating, rounded to a closest integer

## Data Validation
- A **name** cannot be null, empty or white space. 

If not, print "**A name should not be empty.**"
- **Stats** should be in the range 0..100. If not, print "**{Stat name} should be between 0 and 100.**"
- If you receive a command to **remove** a missing player, print 
    "**Player {Player name} is not in {Team name} team.**"
- If you receive a command to **add** a player to a missing team, print "**Team {team name} does not exist.**"
- If you receive a command to **show** stats for a missing team, print "**Team {team name} does not exist.**"


## Examples
| **Input** | **Output** |
| --- | --- |
| Team;Arsenal | Arsenal – 81 |
| Add;Arsenal;Kieran_Gibbs;75;85;84;92;67 |  |
| Add;Arsenal;Aaron_Ramsey;95;82;82;89;68 |  |
| Remove;Arsenal;Aaron_Ramsey |  |
| Rating;Arsenal |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Team;Arsenal | Endurance should be between 0 and 100. |
| Add;Arsenal;Kieran_Gibbs;75;85;84;92;67 | Player Aaron_Ramsey is not in Arsenal team. |
| Add;Arsenal;Aaron_Ramsey;195;82;82;89;68 | Arsenal - 81 |
| Remove;Arsenal;Aaron_Ramsey |  |
| Rating;Arsenal |  |
| END |  |

| **Input** | **Output** |
| --- | --- |
| Team;Arsenal | Arsenal – 0 |
| Rating;Arsenal |  |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Team;Arsenal
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;95;82;82;89;68
Remove;Arsenal;Aaron_Ramsey
Rating;Arsenal
END
[/input]
[output]
Arsenal - 81
[/output]
[/test]
[test open]
[input]
Team;Arsenal
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Remove;Arsenal;Aaron_Ramsey
Rating;Arsenal
END
[/input]
[output]
Endurance should be between 0 and 100.
Player Aaron_Ramsey is not in Arsenal team.
Arsenal - 81
[/output]
[/test]
[test open]
[input]
Team;Arsenal
Rating;Arsenal
END
[/input]
[output]
Arsenal - 0
[/output]
[/test]
[test]
[input]
Team;Arsenal
Team;England
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Add;England;Joe_Heart;11;46;32;87;10;
Rating;England
Rating;Arsenal
END
[/input]
[output]
Endurance should be between 0 and 100.
England - 37
Arsenal - 81
[/output]
[/test]
[test]
[input]
Team;Arsenal
Team;England
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Add;England;Joe_Heart;11;46;32;87;10;
Rating;England
Rating;Arsenal
Rating;Angliq
END
[/input]
[output]
Endurance should be between 0 and 100.
England - 37
Arsenal - 81
Team Angliq does not exist.
[/output]
[/test]
[test]
[input]
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Add;England;Joe_Heart;11;46;32;87;10;
Rating;England
Rating;Arsenal
Rating;Angliq
END
[/input]
[output]
Team Arsenal does not exist.
Team Arsenal does not exist.
Team England does not exist.
Team England does not exist.
Team Arsenal does not exist.
Team Angliq does not exist.
[/output]
[/test]
[test]
[input]
Team;Arsenal
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Remove;Arsenal;Aaron_Ramsey
Rating;Ce
Rating;Arsenal
END
[/input]
[output]
Endurance should be between 0 and 100.
Player Aaron_Ramsey is not in Arsenal team.
Team Ce does not exist.
Arsenal - 81
[/output]
[/test]
[test]
[input]
Team;Arsenal
Team;England
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Add;England;Joe_Heart;11;46;32;87;10;
Remove;Arsenal;Kieran_Gibbs;75;85;84;92;67
Remove;Arsenal;Aaron_Ramsey;195;82;82;89;68
Remove;England;Joe_Heart;11;46;32;87;10;
Rating;England
Rating;Arsenal
Rating;Angliq
END
[/input]
[output]
Endurance should be between 0 and 100.
Player Aaron_Ramsey is not in Arsenal team.
England - 0
Arsenal - 0
Team Angliq does not exist.
[/output]
[/test]
[test]
[input]
Team;Arsenal
Team;England
Add;Arsenal;Kieran_Gibbs;75;85;84;92;67
Add;Arsenal;Aaron_Ramsey;195;82;82;89;68
Add;England;Joe_Heart;11;46;32;87;10;
Rating;England
Rating;Arsenal
Rating;Angliq
END
[/input]
[output]
Endurance should be between 0 and 100.
England - 37
Arsenal - 81
Team Angliq does not exist.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
