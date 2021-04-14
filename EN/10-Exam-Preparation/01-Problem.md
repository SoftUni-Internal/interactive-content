[slide hideTitle]
# Problem: Online Shop
[code-task title="Online Shop" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-2-Online-Shop" executionType="tests-execution" executionStrategy="java-project-tests"]   
[code-upload allowedMemory="30" /]

[task-description]
# Overview

Тhis cosists of build a text-based online shop project, which defines **peripherals**, **components**, and **computers**. 

The project will contain **model classes** and a **controller class**, which manages the **interaction** between the **peripherals**, **components**, and **computers**.


# Setup

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/11.Java-OOP-Advanced-Exam-Preparation-2.zip) **for these tasks.**

- Upload **only the onlineShop** package in every task **except Unit Tests**
- **Do not modify the interfaces or their packages**
- Use **strong cohesion** and **loose coupling**
- **Use inheritance and the provided interfaces wherever possible**
  * this includes **constructors, method parameters** and **return types**
- **Do not** violate your **interface implementations** by adding **more public methods** in the specific class than the interface has defined
- Make sure you have **no public fields** anywhere


# Description

**For this task's evaluation, logic in the methods is not included.**

You are provided with interfaces you need to implement their functionality in the **correct classes**.

There are the **four** types of entities present in the application: **Product**, **Component**, **Peripheral**, and **Computer**.

# Product 

The **BaseProduct** is a **base class** for **components, peripherals** and **computers**, and it **should not provide the option to be instantiated**.

## Data

- **id** - int
  * cannot be **less than or equal to 0**
  * if so - throw an `IllegalArgumentException` with the message "**Id can not be less or equal than 0.**"

- **manufacturer** - String
  * cannot be **null or whitespace**
  * if so - throw an `IllegalArgumentException` with the message "**Manufacturer can not be empty.**"

- **model** - String
  * cannot be **null or whitespace**
  * if so - throw an `IllegalArgumentException` with the message "**Model can not be empty.**"

- **price** - double
  * cannot be **less than or equal to 0**
  * if so - throw an `IllegalArgumentException` with the message "**Price can not be less or equal than 0.**"

- **overallPerformance** - double
  * cannot be **less than or equal to 0**
  * if so - throw an `IllegalArgumentException` with the message "**Overall Performance can not be less or equal than 0.**"

## Constructor

A **product** should take the following values upon initialization:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**)

Override the **toString()** method to the format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\})"

## Child Classes

There are several concrete types of **products**:

- **Component**
- **Peripheral**
- **Computer**

# Component

The **BaseComponent** is a derived class from **BaseProduct** and a **base class** for any **components** and it **should not provide the option to be instantiated**.

## Data

- **generation** - int

## Constructor

A **product** should take the following values upon initialization:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**, int **generation**)

Override the **toString()** method to the format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\}) **Generation:** \{**generation**\}"

## Child Classes

There are several concrete types of **components** where the **overall performance** has a **different multiplier**:

- **CentralProcessingUnit** has a multiplier of **1.25**
- **Motherboard** has a multiplier of **1.25**
- **PowerSupply** has a multiplier of **1.05**
- **RandomAccessMemory** has a multiplier of **1.20**
- **SolidStateDrive** has a multiplier of **1.20**
- **VideoCard** has a multiplier of **1.15**

**Example**: If we create a **CentralProcessingUnit** with overallPerformance - 50 at the constructor and a multiplier of **1.25** its overallPerformance should be 62.50.

# Peripheral

The **BasePeripheral** is a derived class from **BaseProduct** and a **base class** for any **peripherals** and it **should not offer the option to be instantiated**.

## Data

- **connectionType** - String

## Constructor

A **product** should take the following values upon initialization:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**, String **connectionType**)

Override the **toString()** method to the format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\}) **Connection Type:** \{**connection type**\}"

## Child Classes

There are several concrete types of **peripherals**:

- **Headset**
- **Keyboard**
- **Monitor**
- **Mouse**

# Computer

The **BaseComputer** is a derived class from **BaseProduct** and a **base class** for any **computers** and it **should not provide the option to be instantiated**.

## Data

- **components** - List
- **peripherals** - List

## Constructor

A **product** should take the following values upon initialization:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**)

Override the **toString()** method with to format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\})"

" **Components** (\{**components count**\}):"

"  \{**component one**\}"

"  \{**component two**\}"

"  \{**component n**\}"

" **Peripherals** (\{**peripherals count**\}); **Average Overall Performance** (\{**average overall performance peripherals**\}):"

"  \{**peripheral one**\}"

"  \{**peripheral two**\}"

"  \{**peripheral n**\}"

**Note: Be careful, some of the rows have one or two whitespaces at the beginning of the sentences!**

## Behavior 

- `double getOverallPerformance()`
     - **override the base functionality** (if the components collection is empty, it should return only the **computer's overall performance**
     - otherwise, returns the sum of the computer's overall performance and the average overall performance of all components)

- `double getPrice()`
     - **override the base functionality** (the price is equal to the **total sum** of **computer price** with the **sum of all component prices** and the **sum of all peripheral prices**)

- `void addComponent(Component component)`
     - if the components collection contains a component with the same component type, throw an **IllegalArgumentException** with the message "**Component** \{**component type**\} **already exists in** \{**computer type**\} **with Id** \{**id**\}."
     - otherwise, add the component to the components collection

- `Component removeComponent(String componentType)`
     - if the components collection is empty or does not have a component of that type, throw an **IllegalArgumentException** with the message "**Component** \{**component type**\} **does not exist in** \{**computer type**\} **with Id** \{**id**\}."
     - otherwise, remove the component of that type and return it.

- `void аddPeripheral(Peripheral peripheral)`
     - if the peripherals collection contains a peripheral with the same peripheral type, throw an **IllegalArgumentException** with the message "**Peripheral** \{**peripheral type**\} **already exists in** \{**computer type**\} **with Id** \{**id**\}."
     - otherwise, add the peripheral in peripherals collection

- `Peripheral removePeripheral(String peripheralType)`
     - if the peripherals collection is empty or does not have a peripheral of that type, throw an **IllegalArgumentException** with the message "**Peripheral** \{**peripheral type**\} **does not exist in** \{**computer type**\} **with Id** \{**id**\}."
     - otherwise, remove the peripheral of that type and return it

## Child Classes

There are several specific types of **computers**, where the **overall performance** has a **different value**:

- **DesktopComputer** - its overall performance is **15**
- **Laptop** - its overall performance is **10**

Child classes should **not** receive overall performance as a parameter from the constructor.

[/task-description]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_1ValidateComponentsTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Computer",
                "BaseComputer",
                "DesktopComputer",
                "Laptop",
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

public class T00_2ValidateComputersTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Component",
                "BaseComponent",
                "CentralProcessingUnit",
                "Motherboard",
                "PowerSupply",
                "RandomAccessMemory",
                "VideoCard",
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

public class T00_3ValidatePeripheralsTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Peripheral",
                "BasePeripheral",
                "Headset",
                "Keyboard",
                "Monitor",
                "Mouse",
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

public class T00_4ValidateProductsTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Product",
                "BaseProduct",
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

public class T01ValidateBaseProductFields \{
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
        Class clazz = getType("BaseProduct");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, int.class, "id"),
                new ExpField(MODIFIER_PRIVATE, String.class, "manufacturer"),
                new ExpField(MODIFIER_PRIVATE, String.class, "model"),
                new ExpField(MODIFIER_PRIVATE, double.class, "price"),
                new ExpField(MODIFIER_PRIVATE, double.class, "overallPerformance"),
                //new ExpField(MODIFIER_PRIVATE,  getType("custom type class"), "field")
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

public class T02ValidateEntityNameMethods \{
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
        Class clazz = getType("BaseProduct");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(int.class, "getId"),
                new ExpMethod(String.class, "getManufacturer"),
                new ExpMethod(String.class, "getModel"),
                new ExpMethod(double.class, "getPrice"),
                new ExpMethod(double.class, "getOverallPerformance"),
                new ExpMethod(String.class, "toString"),
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

public class T03ValidateProductInterfaceCountMethods \{
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
                new Interface("Product", 5),
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

public class T04ValidateBaseComponentFields \{
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
        Class clazz = getType("BaseComponent");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, int.class, "generation"),
                //new ExpField(MODIFIER_PRIVATE,  getType("custom type class"), "field")
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

public class T05ValidateEntityNameMethods \{
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
        Class clazz = getType("BaseComponent");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(int.class, "getGeneration"),
                new ExpMethod(String.class, "toString"),
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

public class T06ValidateComponentInterfaceCountMethods \{
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
                new Interface("Component", 6),
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
[test]
[input]
import onlineShop.models.products.components.Component;
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

public class T07ValidateBaseComputerFields \{
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
        Class clazz = getType("BaseComputer");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, List.class, "components"),
                new ExpField(MODIFIER_PRIVATE, List.class, "peripherals"),
                //new ExpField(MODIFIER_PRIVATE,  getType("custom type class"), "field")
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
import java.util.List;

public class T08ValidateEntityNameMethods \{
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
        Class clazz = getType("BaseComputer");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(List.class, "getComponents"),
                new ExpMethod(List.class, "getPeripherals"),
                new ExpMethod(double.class, "getOverallPerformance"),
                new ExpMethod(double.class, "getPrice"),
                new ExpMethod(void.class, "addComponent", getType("Component")),
                new ExpMethod(getType("Component"), "removeComponent", String.class),
                new ExpMethod(void.class, "addPeripheral", getType("Peripheral")),
                new ExpMethod(getType("Peripheral"), "removePeripheral", String.class),
                new ExpMethod(String.class, "toString"),
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

public class T09ValidateComputerInterfaceCountMethods \{
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
                new Interface("Computer", 11),
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

public class T10ValidateBasePeripheralsFields \{
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
        Class clazz = getType("BasePeripheral");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "connectionType"),
                //new ExpField(MODIFIER_PRIVATE,  getType("custom type class"), "field")
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
import java.util.List;

public class T11ValidateEntityNameMethods \{
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
        Class clazz = getType("BasePeripheral");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getConnectionType"),
                new ExpMethod(String.class, "toString"),
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

public class T12ValidatePeripheralCountMethods \{
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
                new Interface("Peripheral", 6),
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
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T13ValidateTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Computer",
                "BaseComputer",
                "DesktopComputer",
                "Laptop",
                "Component",
                "BaseComponent",
                "CentralProcessingUnit",
                "Motherboard",
                "PowerSupply",
                "RandomAccessMemory",
                "VideoCard",
                "Peripheral",
                "BasePeripheral",
                "Headset",
                "Keyboard",
                "Monitor",
                "Mouse",
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
