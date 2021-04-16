[slide hideTitle]
# Problem with Solution: Santa Workshop Structure

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/EN/interactive-java-oop-advanced-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Santa Workshop Structure" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-1-Santa-Workshop-Structure" executionType="tests-execution" executionStrategy="java-project-tests"] 

[code-upload allowedMemory="30" /]
[task-description]

# Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/10-Java-OOP-Advanced-Exam-Preparation.zip) **for these tasks.**

- Upload **only the santaWorkshop package** for every task **except Unit Tests**
- **Do not modify the interfaces or their packages**
- Use **strong cohesion** and **loose coupling**
- **Use inheritance and the provided interfaces wherever possible**
  * this includes **constructors, method parameters** and **return types**
- **Do not** violate your **interface implementations** by adding **more public methods** in the concrete class than the ones already defined in the interface
- Make sure you have **no public fields** anywhere in your code

# Description

The task contains ready interfaces - implement their functionality in the **correct classes**.

There are **four** types of entity in the application: **Dwarf, Present, Workshop, Instrument**. 

There should also be a **DwarfRepository**, as well as a **PresentRepository**.

# BaseDwarf

**BaseDwarf** is a **base class** for any **type of Dwarf** and it **should not be able to be instantiated**.

## Data:

- **name - String**
  * if the name **is null or whitespace**, throw a `NullPointerException` with the message: 
  "**Dwarf name cannot be null or empty.**"
  * all names will be **unique**

- **energy -  int**
  * the energy of a dwarf
  * if the **initial** energy is below 0, throw an `IllegalArgumentException` with the message:
  "**Cannot create a Dwarf with negative energy!**"

- **instruments - Collection**\<**Instrument**\>
  * a collection of a dwarf's instruments

## Constructor:

A **BaseDwarf** should take the following values on initialization: 

- **(String name, int energy)**


## Behavior:

- `void work()`
  * the **work()** method decreases a dwarfs' energy by 10
  * a dwarf's energy should **not** drop **below 0** (if the power becomes less than 0, set it to 0)

- `void addInstrument(Instrument instrument)` 
  * this method **adds** an **instrument** to the dwarf's **collection** of instruments

- `boolean canWork()`
  * returns **true**, if the current energy of the dwarf is **greater** than **0**
  * **false**, otherwise


## Child classes:

There are two types of **BaseDwarf**:

### Happy

Initial **energy** units: **100**

The constructor should take the following values upon initialization:

- **(String name)**

### Sleepy

Initial **energy** units: **50**

The **work()** method **decreases** the dwarf's energy by an additional **5 units**.

The constructor should take the following values upon initialization:

- **(String name)**

# InstrumentImpl

The **InstrumentImpl** is a class that represents the tool, which a **Dwarf** uses to craft a **Present**.

**It should** offer the option to be **instantiated**.

## Data

- **power - int**

  * the power of an instrument
  * if the **initial** power is below **0**, throw an `IllegalArgumentException` with the message:
  "**Cannot create an Instrument with negative power!**"

## Constructor

An **InstrumentImpl** should take the following values upon initialization: 

- **(int power)**

## Behavior 

- `void use()`
  * the **use()** method **decreases** an instrument's **power** by **10**
  * an instrument's power should **not** drop **below 0** 
  * if the power becomes less than 0, set it to 0

- `boolean isBroken()` 
  * this method returns **true** when its **power** becomes equal to **0**

# PresentImpl

This is the class that holds information about the **Present** that a **Dwarf** is working on.

**It should** be able to be **instantiated**.

## Data

- **name - String**
  * if the name **is null or whitespace**, **throw a NullPointerException** with the message: 
  "**Present name cannot be null or empty.**"

- **energyRequired - int**
  * the energy a present requires in order to be crafted
  * if the **initial** energy is below **0**, throw an `IllegalArgumentException` with the message:
  "**Cannot create a Present requiring negative energy!**"

## Constructor 

A **PresentImpl** should take the following values upon initialization: 

- **(String name, int energyRequired)**

## Behavior

- `void getCrafted()`
  * the **getCrafted() decreases** the required energy of the present by **10 units**
  * a present's required energy should **not** drop **below 0**

- `boolean isDone()`
  * the **isDone()** method returns **true** if the **energyRequired** reaches **0**.

# WorkshopImpl

The **WorkshopImpl** class holds the main action, which is the **craft** method.

## Behavior

- `void craft(Present present, Dwarf dwarf)`

Here is how the **craft** method works:

- The dwarf starts crafting the present
    * this is only possible if the dwarf has energy and an instrument that is not broken

- Keep working **until** the present is **done** and while the dwarf has **energy** left (and **instruments** to use)

- If at some point the **power** of the current instrument **reaches** 0 or **drops below 0**, meaning it gets **broken**, then the dwarf should take the **next instrument** from its collection, if it has **any left**

# DwarfRepository

**DwarfRepository** is a repository for the dwarfs working at Santa's workshop.

## Data

- **dwarfs** - a **collection** of **dwarfs**

## Behavior

- `void add(Dwarf dwarf)`
  - **adds** a dwarf to the collection
  - every dwarf is **unique**. There will be no repeating dwarf names

- `boolean remove(Dwarf dwarf)`
  * **removes** a dwarf from the collection
  * returns **true** if the deletion was **sucessful**

- `Dwarf findByName(String name)`
  * returns the **dwarf** with that **name** if there is one

- `Collection<Dwarf> getModels()`
  * returns a collection of dwarfs **(unmodifiable)**

# PresentRepository

The present repository is a repository for presents that await to be crafted.

## Data

- **presents** - a **collection** of **presents**

## Behavior

- `void add(Present present)`
  - **adds** a present to be crafted
  - every present is **unique** . Тhere will not be a present with the same name

- `boolean remove(Present present)`
  - **removes** a present from the collection
  - **returns** true if the deletion was **sucessful**

- `Present findByName(String name)`
  - returns a **present** with that **name** if such exists
  - Each given name will **be available** in the collection

- `Collection<Present> getModels()`
  - returns the collection of presents (unmodifiable)



[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_1ValidateDwarfTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Dwarf",
                "BaseDwarf",
                "Happy",
                "Sleepy",
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

public class T00_2ValidateInstrumentTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Instrument",
                "InstrumentImpl",

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

public class T00_3ValidatePresentTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Present",
                "PresentImpl",
                
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
                "DwarfRepository",
                "PresentRepository",

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
import java.util.Collection;

public class T01ValidateBaseDwarfFields \{
    private static final String MODIFIER_PRIVATE = "private";
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";
    private static final String FIELD_IS_NOT_CORRECT_MODIFIER = "The field '%s.%s' doesn't have correct access modifier(actual - `%s`; expected - `%s`;)!";
    private static final String FIELD_HAS_WRONG_TYPE = "The field '%s.%s' has the wrong type(actual - `%s`; expected - `%s`;)!";

    private class ExpField \{
        Class fieldType;
        String modifier;
        String name;

        public ExpField(String modifier, Class fieldType, String name) \{
            this.fieldType = fieldType;
            this.modifier = modifier;
            this.name = name;
        \}
    \}

    @Test
    public void validateClassFields() \{
        Class clazz = getType("BaseDwarf");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "name"),
                new ExpField(MODIFIER_PRIVATE, int.class, "energy"),
                new ExpField(MODIFIER_PRIVATE, Collection.class, "instruments"),

        \};

        for (ExpField field : fields) \{
            validateField(clazz, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedModifier = expField.modifier;
        String expectedType = expField.fieldType.toString();
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

public class T02ValidateBaseDwarfMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("BaseDwarf");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getName"),
                new ExpMethod(int.class, "getEnergy"),
                new ExpMethod(Collection.class, "getInstruments"),
        \};

        for (ExpMethod method : methods) \{
            validateMethod(clazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\[\] expectedParameterTypes = expMethod.parameterTypes;

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

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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

import java.lang.reflect.Method;
import java.util.Arrays;

public class T03ValidateInstrumentImplMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("InstrumentImpl");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(int.class, "getPower"),
                new ExpMethod(void.class, "use"),
                new ExpMethod(boolean.class, "isBroken"),
        \};

        for (ExpMethod method : methods) \{
            validateMethod(clazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\[\] expectedParameterTypes = expMethod.parameterTypes;

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

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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

import java.lang.reflect.Method;
import java.util.Arrays;

public class T04ValidatePresentImplMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("PresentImpl");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getName"),
                new ExpMethod(int.class, "getEnergyRequired"),
                new ExpMethod(void.class, "getCrafted"),
                new ExpMethod(boolean.class, "isDone"),

        \};

        for (ExpMethod method : methods) \{
            validateMethod(clazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\[\] expectedParameterTypes = expMethod.parameterTypes;

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

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Collection;

public class T05ValidateDwarfRepositoryMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("DwarfRepository");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(Collection.class, "getModels"),
                new ExpMethod(void.class, "add", getType("Dwarf")),
                new ExpMethod(boolean.class, "remove", getType("Dwarf")),
                new ExpMethod(getType("Dwarf"), "findByName", String.class),

        \};

        for (ExpMethod method : methods) \{
            validateMethod(clazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\[\] expectedParameterTypes = expMethod.parameterTypes;

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

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Collection;

public class T06ValidatePresentRepositoryMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";
    private static final String METHOD_HAS_WRONG_RETURN_TYPE = "The method '%s.%s()' has the wrong return type(actual - '%s'; expected - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class ExpMethod \{
        Class returnType;
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(Class returnType, String name, Class... parameterTypes) \{
            this.returnType = returnType;
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Class clazz = getType("PresentRepository");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(Collection.class, "getModels"),
                new ExpMethod(void.class, "add", getType("Present")),
                new ExpMethod(boolean.class, "remove", getType("Present")),
                new ExpMethod(getType("Present"), "findByName", String.class),

        \};

        for (ExpMethod method : methods) \{
            validateMethod(clazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
        String expectedReturnType = expMethod.returnType.toString();
        String expectedName = expMethod.name;
        Class\[\] expectedParameterTypes = expMethod.parameterTypes;

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

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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
                "BaseDwarf",
                "Happy",
                "Sleepy",
                "InstrumentImpl",
                "PresentImpl",
                "Dwarf",
                "Instrument",
                "Present",
                "Repository",
                "DwarfRepository",
                "PresentRepository",
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

import java.lang.reflect.Method;
import java.util.Arrays;

public class T8ValidateInterfaceCountMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual param types: '%s' ;expected - '%s')!";
    private static final String INTERFACE_INVALID_METHODS_COUNT = "The interface '%s' has wrong methods count(expected - '%s'; actual - '%s')!";
    private static final String METHOD_HAS_PARAMETER_TYPES = "The method '%s.%s()' has incorrect parameter types(actual - '%s'; expected - '%s')!";

    private class Interface \{
        String type;
        int methodsCount;

        public Interface(String type, int methodsCount) \{
            this.type = type;
            this.methodsCount = methodsCount;
        \}
    \}

    @Test
    public void validateClassMethods() \{
        Interface\[\] interfaces = new Interface\[\]\{
                new Interface("Dwarf", 6),
                new Interface("Instrument", 3),
                new Interface("Present", 4),
                new Interface("Repository", 4),
        \};

        for (Interface anInterface : interfaces) \{
            validateMethodsCount(anInterface);
        \}
    \}

    private void validateMethodsCount(Interface anInterface) \{
        Class clazz = getType(anInterface.type);

        int actualMethodsCount = clazz.getMethods().length;
        int expectedMethodsCount = anInterface.methodsCount;
        String returnTypeMessage = String.format(INTERFACE_INVALID_METHODS_COUNT, clazz.getSimpleName(), expectedMethodsCount, actualMethodsCount);
        Assert.assertEquals(returnTypeMessage, expectedMethodsCount, actualMethodsCount);
    \}

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class::getSimpleName).toArray(String\[\]::new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]::new);

        StringBuilder sb = new StringBuilder();

        for (Method method : methodsWithGivenName) \{
            String parameterTypes = arrayToString(method.getParameterTypes());
            sb.append("\{ " + parameterTypes + " \} ");
        \}

        return sb.toString().trim();
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
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
[/tests]
[/code-task]
[/slide]
