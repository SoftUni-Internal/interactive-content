[slide]
# Problem: Easter Races
[code-task title="Easter Races" timeLimit=12000 taskId="Java-OOP-Advanced-Final-Exam-Easter-Races-1" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]
## Description
- Upload **only the easterRaces** package in every task **except Unit Tests**
- **Do not modify the interfaces or their packages**
- Use **strong cohesion** and **loose coupling**
- **Use inheritance and the provided interfaces wherever possible**
  * This includes **constructors, method parameters** and **return types**
- **Do not** violate your **interface implementations** by adding **more public methods** in the specific class than the interface has defined
- Make sure you have **no public fields** anywhere

# Task 1: Structure (50 points)

You are given **8** interfaces, and you have to implement their functionality in the **correct classes.**

It is not required to implement your structure with **Engine, ConsoleReader, ConsoleWriter** and etc. 

It's good practice but it's not required.

There are **3** types of entities and 3 repositories in the application: **Car, Driver, Race and a Repository for each of them:**

# Car

**BaseCar** is a **base class** for any **type of Car** and it **should not be able to be instantiated.**

## Data

- **model - String**
  * If the model **is null, whitespace or less than 4 symbols,** throw an **IllegalArgumentException** with message **"Model \{model\} cannot be less than 4 symbols."**

  * All models are unique

- **horsePower - int**
  * **Every type** of car has different range of valid horsepower. If the horsepower is not in the valid range, throw an **IllegalArgumentException** with message **"Invalid horse power: \{horsepower\}."**

- **cubicCentimeters - double**
  * **Every type of car has different cubic centimeters**

## Behavior

`double calculatedRacePoints(int laps)`

The **CalculateRacePoints** calculates the race points in the concrete **Race** with this formula:

**cubic centimeters / horsepower * laps**

## Constructor

A **BaseCar** should take the following values upon initialization:

**String model, int horsePower, double cubicCentimeters**

## Child Classes

There are several concrete types of **Cars:**

### MuscleCar

The **cubic centimeters** for this type of car are **5000.**

Minimum **horsepower** is **400** and maximum **horsepower** is **600.**

If you receive horsepower which is not in the given range throw **IllegalArgumentException** with message **"Invalid horse power: \{horsepower\}."**

### SportsCar 
The **cubic centimeters** for this type of car are **3000**. 

Minimum **horsepower** is **250** and maximum **horsepower** is **450.**

If you receive horsepower which is not in the given range throw **IllegalArgumentException** with message **"Invalid horse power: \{horsepower\}."**

# Driver

**DriverImpl** class

## Data

- **name - String**
  * If the name **is null**, **empty** or less than **5 symbols** throw an **IllegalArgumentException** with message **"Name \{name\} cannot be less than 5 symbols."**
  * All names are unique
- **car - Car**
- **numberOfWins - int**
- **canParticipate - boolean**
  * Default behaviour is **false**
  * **Driver** can participate in race, **ONLY** if he has a **Car** (**Car** is not **null**)

## Behavior

`void addCar(Car car)`

This method adds a **Car** to the **Driver.** 

If the car is **null**, throw **IllegalArgumentException** with message **"Car cannot be null."**

If the given **Car** is not **null**, set the current **Car** as the given one and after that **Driver** can participate to race.

`void winRace()`

When the **Driver** wins a **Race**, the number of wins should be increased.

## Constructor

A **Driver** should take the following values upon initialization:

**(String name)**

# Race

**RaceImpl** class

## Data

- **name - String**
  * If the name is **null**, **empty** or less than **5 symbols** throw an **IllegalArgumentException** with message **"Name \{name\} cannot be less than 5 symbols."**
  * All names are unique
- **laps - int** 
  * Throws **IllegalArgumentException** with message **"Laps cannot be less than 1."**, if the laps are less than **1.**
- **drivers - A collection of Drivers**

## Behavior

`void addDriver(Driver driver)`

This method adds a **Driver** to the **Race** if the **Driver** is valid. If the Driver is not valid, throw an **Exception** with the appropriate message.

Exceptions are:

- If a **Driver** is null throw an IllegalArgumentException with message: **"Driver cannot be null."**
- If a **Driver cannot** participate in the **Race** (the **Driver** doesn't own a **Car**) throw an **IllegalArgumentException** with message: **"Driver \{driver name\} could not participate in race."**
- If the **Driver** already **exists** in the **Race** throw an **IllegalArgumentException** with message:
**"Driver \{driver name\} is already added in \{race name\} race."**

## Constructor

**Racer** should take the following values upon initialization:
**(String name, int laps)**

# Repository

The repository holds information about the entity.

## Data

- **Models - A collection of T (entity)**

## Behavior

`void add(T model)`

Adds an entity in the collection.

`boolean remove(T model)`

Removes an entity from the collection.

`T getByName(String name)`

Returns an entity with that name.

`Collection<T> getAll()`

Returns all entities (unmodifiable)

## Child Classes

Create **CarRepository**, **DriverRepository** and **RaceRepository** repositories.


[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_1ValidateCarTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Car",
                "BaseCar",
                "MuscleCar",
                "SportsCar",
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T00_2ValidateDriverTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Driver",
                "DriverImpl"
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T00_3ValidateRaceTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Race",
                "RaceImpl"
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T00_4ValidateRepositoryTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Repository",
                "CarRepository",
                "RaceRepository",
                "DriverRepository",
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T01ValidateBaseCarFields \{
    private static final String MODIFIER_PRIVATE = "private";
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";
    private static final String FIELD_IS_NOT_CORRECT_MODIFIER = "The field '%s.%s' doesn't have correct access modifier(actual - `%s`; expected - `%s`;)!";
    private static final String FIELD_HAS_WRONG_TYPE = "The field '%s.%s' has the wrong type(actual - `%s`; expected - `%s`;)!";

    private class ExpField \{
        Class classType;
        String modifier;
        String name;

        public ExpField(String modifier, Class classType, String name) \{
            this.classType = classType;
            this.modifier = modifier;
            this.name = name;
        \}
    \}

    @Test
    public void validateClassFields() \{
        Class clazz = getType("BaseCar");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "model"),
                new ExpField(MODIFIER_PRIVATE, int.class, "horsePower"),
                new ExpField(MODIFIER_PRIVATE, double.class, "cubicCentimeters")
        \};

        for (ExpField field : fields) \{
            validateField(clazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedModifier = expField.modifier;
        String expectedType = expField.classType.toString();
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);

        // Tests whether the modifier is private
        String actualModifier = getFieldModifier(actualField);
        String modifierMessage = String.format(FIELD_IS_NOT_CORRECT_MODIFIER, clazz.getSimpleName(), expectedName, actualModifier, expectedModifier);
        Assert.assertEquals(modifierMessage, expectedModifier, actualModifier);

        // Tests whether the field type is correct
        String actualType = actualField.getType().toString();
        String typeMessage = String.format(FIELD_HAS_WRONG_TYPE, clazz.getSimpleName(), expectedName, actualType, expectedType);
        Assert.assertEquals(typeMessage, expectedType, actualType);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
    \}

    private String getFieldModifier(Field field) \{
        int actualModifier = field.getModifiers();

        String modifierAsStr = Modifier.toString(actualModifier);
        return modifierAsStr;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.util.Arrays;

public class T02ValidateBaseCarMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\<?\>\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class\<?\>... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("BaseCar");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getModel"),
                new ExpMethod(int.class, "getHorsePower"),
                new ExpMethod(double.class, "getCubicCentimeters"),
                new ExpMethod(double.class, "calculateRacePoints", int.class),
        \};

        for (ExpMethod method : methods) \{
            ValidateMethod(clazz, method);
        \}
    \}

    private void ValidateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\<?\>\[\] expectedParameterTypes = expMethod.parameterTypes;

        Method actualMethod = getMethod(clazz, expectedName, expectedParameterTypes);

        // Tests whether the method exist
        String actualMethodsParametersMessage = null;

        if (actualMethod == null) \{
            actualMethodsParametersMessage = findMethodFromMethods(clazz, expectedName);
        \}

        String existMessage = String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName, actualMethodsParametersMessage, arrayToString(expectedParameterTypes));
        Assert.assertNotNull(existMessage, actualMethod);

        // Tests whether the method returns correct type
        String actualReturnType = actualMethod.getReturnType().toString();
        String returnTypeMessage = String.format(METHOD_HAS_WRONG_RETURN_TYPE, clazz.getSimpleName(), expectedName, actualReturnType, expectedReturnType);
        Assert.assertEquals(returnTypeMessage, expectedReturnType, actualReturnType);
    \}

    private String arrayToString(Class\<?\>\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class\<?\> clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T03ValidateDriverImplFields \{
    private static final String MODIFIER_PRIVATE = "private";
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";
    private static final String FIELD_IS_NOT_CORRECT_MODIFIER = "The field '%s.%s' doesn't have correct access modifier(actual - `%s`; expected - `%s`;)!";
    private static final String FIELD_HAS_WRONG_TYPE = "The field '%s.%s' has the wrong type(actual - `%s`; expected - `%s`;)!";

    private class ExpField \{
        Class classType;
        String modifier;
        String name;

        public ExpField(String modifier, Class classType, String name) \{
            this.classType = classType;
            this.modifier = modifier;
            this.name = name;
        \}
    \}

    @Test
    public void validateClassFields() \{
        Class clazz = getType("DriverImpl");
        Class carClass = getType("Car");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "name"),
                new ExpField(MODIFIER_PRIVATE, carClass, "car"),
                new ExpField(MODIFIER_PRIVATE, int.class, "numberOfWins"),
                new ExpField(MODIFIER_PRIVATE, boolean.class, "canParticipate")
        \};

        for (ExpField field : fields) \{
            validateField(clazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedModifier = expField.modifier;
        String expectedType = expField.classType.toString();
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);

        // Tests whether the modifier is private
        String actualModifier = getFieldModifier(actualField);
        String modifierMessage = String.format(FIELD_IS_NOT_CORRECT_MODIFIER, clazz.getSimpleName(), expectedName, actualModifier, expectedModifier);
        Assert.assertEquals(modifierMessage, expectedModifier, actualModifier);

        // Tests whether the field type is correct
        String actualType = actualField.getType().toString();
        String typeMessage = String.format(FIELD_HAS_WRONG_TYPE, clazz.getSimpleName(), expectedName, actualType, expectedType);
        Assert.assertEquals(typeMessage, expectedType, actualType);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
    \}

    private String getFieldModifier(Field field) \{
        int actualModifier = field.getModifiers();

        String modifierAsStr = Modifier.toString(actualModifier);
        return modifierAsStr;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.util.Arrays;

public class T04ValidateDriverImplMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual param types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\<?\>\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class\<?\>... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("DriverImpl");
        Class carClass = getType("Car");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getName"),
                new ExpMethod(carClass, "getCar"),
                new ExpMethod(int.class, "getNumberOfWins"),
                new ExpMethod(void.class, "addCar", carClass),
                new ExpMethod(void.class, "winRace"),
                new ExpMethod(boolean.class, "getCanParticipate"),
        \};

        for (ExpMethod method : methods) \{
            ValidateMethod(clazz, method);
        \}
    \}

    private void ValidateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\<?\>\[\] expectedParameterTypes = expMethod.parameterTypes;

        Method actualMethod = getMethod(clazz, expectedName, expectedParameterTypes);

        // Tests whether the method exist
        String actualMethodsParametersMessage = null;

        if (actualMethod == null) \{
            actualMethodsParametersMessage = findMethodFromMethods(clazz, expectedName);
        \}

        String existMessage = String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName, actualMethodsParametersMessage, arrayToString(expectedParameterTypes));
        Assert.assertNotNull(existMessage, actualMethod);

        // Tests whether the method returns correct type
        String actualReturnType = actualMethod.getReturnType().toString();
        String returnTypeMessage = String.format(METHOD_HAS_WRONG_RETURN_TYPE, clazz.getSimpleName(), expectedName, actualReturnType, expectedReturnType);
        Assert.assertEquals(returnTypeMessage, expectedReturnType, actualReturnType);
    \}

    private String arrayToString(Class\<?\>\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class\<?\> clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.util.Collection;

public class T05ValidateRaceImplFields \{
    private static final String MODIFIER_PRIVATE = "private";
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";
    private static final String FIELD_IS_NOT_CORRECT_MODIFIER = "The field '%s.%s' doesn't have correct access modifier(actual - `%s`; expected - `%s`;)!";
    private static final String FIELD_HAS_WRONG_TYPE = "The field '%s.%s' has the wrong type(actual - `%s`; expected - `%s`;)!";

    private class ExpField \{
        Class classType;
        String modifier;
        String name;

        public ExpField(String modifier, Class classType, String name) \{
            this.classType = classType;
            this.modifier = modifier;
            this.name = name;
        \}
    \}

    @Test
    public void validateClassFields() \{
        Class clazz = getType("RaceImpl");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "name"),
                new ExpField(MODIFIER_PRIVATE, int.class, "laps"),
                new ExpField(MODIFIER_PRIVATE, Collection.class, "drivers"),
        \};

        for (ExpField field : fields) \{
            validateField(clazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedModifier = expField.modifier;
        String expectedType = expField.classType.toString();
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);

        // Tests whether the modifier is private
        String actualModifier = getFieldModifier(actualField);
        String modifierMessage = String.format(FIELD_IS_NOT_CORRECT_MODIFIER, clazz.getSimpleName(), expectedName, actualModifier, expectedModifier);
        Assert.assertEquals(modifierMessage, expectedModifier, actualModifier);

        // Tests whether the field type is correct
        String actualType = actualField.getType().toString();
        String typeMessage = String.format(FIELD_HAS_WRONG_TYPE, clazz.getSimpleName(), expectedName, actualType, expectedType);
        Assert.assertEquals(typeMessage, expectedType, actualType);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
    \}

    private String getFieldModifier(Field field) \{
        int actualModifier = field.getModifiers();

        String modifierAsStr = Modifier.toString(actualModifier);
        return modifierAsStr;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.util.Arrays;
import java.util.Collection;

public class T06ValidateRaceImplMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual method param types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\<?\>\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class\<?\>... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("RaceImpl");
        Class driverClass = getType("Driver");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getName"),
                new ExpMethod(int.class, "getLaps"),
                new ExpMethod(Collection.class, "getDrivers"),
                new ExpMethod(void.class, "addDriver", driverClass),
        \};

        for (ExpMethod method : methods) \{
            ValidateMethod(clazz, method);
        \}
    \}

    private void ValidateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\<?\>\[\] expectedParameterTypes = expMethod.parameterTypes;

        Method actualMethod = getMethod(clazz, expectedName, expectedParameterTypes);

        // Tests whether the method exist
        String actualMethodsParametersMessage = null;

        if (actualMethod == null) \{
            actualMethodsParametersMessage = findMethodFromMethods(clazz, expectedName);
        \}

        String existMessage = String.format(METHOD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName, actualMethodsParametersMessage, arrayToString(expectedParameterTypes));
        Assert.assertNotNull(existMessage, actualMethod);

        // Tests whether the method returns correct type
        String actualReturnType = actualMethod.getReturnType().toString();
        String returnTypeMessage = String.format(METHOD_HAS_WRONG_RETURN_TYPE, clazz.getSimpleName(), expectedName, actualReturnType, expectedReturnType);
        Assert.assertEquals(returnTypeMessage, expectedReturnType, actualReturnType);
    \}

    private String arrayToString(Class\<?\>\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class\<?\> clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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

public class T07ValidateTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Car",
                "BaseCar",
                "MuscleCar",
                "SportsCar",
                "Race",
                "RaceImpl",
                "Driver",
                "DriverImpl",
        \};

        for (String classType : classTypesToAssert) \{
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
