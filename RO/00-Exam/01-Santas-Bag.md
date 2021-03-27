[slide hideTitle]
# Santa's Bag of Presents
[code-task title="Santas Bag of Presents" timeLimit=30000 taskId="Java-OOP-Basics-Exam-Santas-Bag-of-Presents" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]

[task-description]

## Preparation
Pay attention to name the package (**christmas**), all the classes, their fields and methods exactly the same way they are presented in the following resources. 

It is also important to keep the project structure as described above. 

Download the resources from [Here](https://videos.softuni.org/resources/java/java-oop-basics/Java-Basics-OOP-Exam-Christmas_Skeleton.zip)

## Problem Description

Create the classes that are described below.

### Present

First, write a Java class **Present** with the following fields: 

- **name: String**
- **weight double**
- **gender: String**

The class constructor should receive (**name, weight and gender**). 

The class should contain the methods: 

**- getName()**
**- getWeight()**
**- getGender()**
- Override the **toString()** method in the following format: "Present \{name\} (\{weight\}) for a \{gender\}" 

**Note: Format the weight to the second digit after the decimal point!** 

### Bag

**Next**, write a **Java** class **Bag** that has **data** (a collection which stores the entity **Present**). 

All entities inside the repository have the **same fields**. Also, the **Bag** class should have those fields: 

- **color: String** 
- **capacity: int** 
- **data: List<Present>** - holds all added presents in the bag 

The class **constructor** should receive (**color, capacity**), also it should initialize the **data** with a new instance of the collection. 

Implement the following features:

**- getColor()** 
**- getCapacity()** 
**- count()** method– **returns** the **number** of presents 
**- add(Present present)** method – **adds** an **entity** to the data if **there is room** for it 
**- remove(String name)** method – removes an present by **given name**, if such **exists**, and **returns boolean** 
**- heaviestPresent()** method – returns the **heaviest** present 
**- getPresent(String name)** method – returns the present with the **given name** 
**- report()** method – **returns a string** in the following **format** (print the presents in order of appearance): 
"\{color of Bag\} bag contains:
\{Present1\} 
\{Present2\}
(…)"

### Constraints

- The **names** of the presents will be **always unique**. 
- The **weights** of the presents will always be with **positive values**. 
- You will always have a present added before receiving methods. 


## Example

This is an example how the **Bag** class is **intended to be used**.

**Sample code usage**
```java
// Initialize the repository 
Bag bag = new Bag("black", 10); 

// Initialize entity 
Present present = new Present("Doll", 0.4, "girl"); 

// Print Present 
System.out.println(present); // Present Doll (0.40) for a girl 

// Add Present 
bag.add(present); 

// Remove Present 
bag.remove("Toy"); // false 

Present secondPresent = new Present("Train", 2, "boy"); 
// Add Present 
bag.add(secondPresent); 

Present heaviestPresent = bag.heaviestPresent(); 

System.out.println(heaviestPresent); 

// Present Train (2.00) for a boy 
 
Present p = bag.getPresent("Doll"); 

System.out.println(p); 

// Present Doll (0.40) for a girl 

System.out.println(bag.count()); // 2 
System.out.println(bag.report()); 

// black bag contains: 
// Present Doll (0.40) for a girl 
// Present Train (2.00) for a boy 
```

## Submission
Submit **single .zip file**, containing **christmas package, with the classes inside (Present, Bag and the Main class)**, there is no specific content required inside the Main class e. g. you can do any kind of local testing of you program there. However there should be **main** method inside. 

[/task-description]
[tests]
[test open]
[input]
```
import org.junit.Assert;
import org.junit.Test;

public class T00_1ValidateTypesExist {
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() {
        String[] classTypesToAssert = new String\[\]{
                "Bag",
                "Present",
        };

        for (String classType : classTypesToAssert) {
            String message = String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, classType);
            Assert.assertNotNull(message, getType(classType));
        }
    }

    private static Class getType(String name) {
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    }
}
```
[/input]
[output]
```
Test Passed!
```
[/output]
[/test]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

public class T00_2ValidateFieldsExists \{
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";

    private class ExpField \{
        String name;

        public ExpField(String name) \{
            this.name = name;
        \}
    \}

    @Test
    public void validateClassFields() \{
        Class clazzFirstType = getType("Bag");
        ExpField\[\] fieldsFirstType = new ExpField\[\]\{
                new ExpField("color"),
                new ExpField("capacity"),
                new ExpField("data"),
        \};

        for (ExpField field \: fieldsFirstType) \{
            validateField(clazzFirstType, field);
        \}


        Class clazzSecondType = getType("Present");
        ExpField\[\] fieldsSecondType = new ExpField\[\]\{
                new ExpField("name"),
                new ExpField("weight"),
                new ExpField("gender"),
        \};

        for (ExpField field \: fieldsSecondType) \{
            validateField(clazzSecondType, field);
        \}
    \}

    private void validateField(Class clazz, ExpField expField) \{
        String expectedName = expField.name;

        // Returns null if the field does not exist
        Field actualField = getField(clazz, expectedName);

        // Tests whether the field exist
        String nameMessage = String.format(FIELD_NOT_PRESENT_ERROR_MESSAGE, clazz.getSimpleName(), expectedName);
        Assert.assertNotNull(nameMessage, actualField);
    \}

    private Field getField(Class clazz, String expectedName) \{
        Field field = null;
        try \{
            field = clazz.getDeclaredField(expectedName);
        \} catch (NoSuchFieldException e) \{
        \}

        return field;
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

import java.lang.reflect.Method;
import java.util.Arrays;

public class T00_3ValidateMethodsExists \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types\: '%s' ;expected - '%s')!";

    private class ExpMethod \{
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(String name, Class... parameterTypes) \{
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validatePresentMethods() \{
        Class presentClazz = getType("Present");

        ExpMethod\[\] presentMethods = new ExpMethod\[\]\{
                new ExpMethod("getName"),
                new ExpMethod("getWeight"),
//                new ExpMethod("methodName", String.class, int.class, getType("")),
        \};

        for (ExpMethod method \: presentMethods) \{
            validateMethod(presentClazz, method);
        \}
        Class BagClazz = getType("Bag");

        ExpMethod\[\] bagMethods = new ExpMethod\[\]\{
                new ExpMethod("getColor"),
                new ExpMethod("getCapacity"),
                new ExpMethod("count"),
                new ExpMethod("add",presentClazz),
                new ExpMethod("remove",String.class),
                new ExpMethod("heaviestPresent"),
                new ExpMethod("report"),

//                new ExpMethod("methodName", String.class, int.class, getType("")),
        \};

        for (ExpMethod method \: bagMethods) \{
            validateMethod(BagClazz, method);
        \}
    \}

    private void validateMethod(Class clazz, ExpMethod expMethod) \{
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
    \}

    private String arrayToString(Class\[\] array) \{
        String\[\] stringArray = Arrays.stream(array).map(Class\:\:getSimpleName).toArray(String\[\]\:\:new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]\:\:new);

        StringBuilder sb = new StringBuilder();

        for (Method method \: methodsWithGivenName) \{
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

public class T01ValidatePresentFields \{
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
        Class clazz = getType("Present");

        ExpField\[\] fields = new ExpField\[\]\{
                new ExpField(MODIFIER_PRIVATE, String.class, "name"),
                new ExpField(MODIFIER_PRIVATE, double.class, "weight"),
                new ExpField(MODIFIER_PRIVATE, String.class, "gender"),
        \};

        for (ExpField field \: fields) \{
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

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

public class T02ValidateBagFields {
    private static final String MODIFIER_PRIVATE = "private";
    private static final String FIELD_NOT_PRESENT_ERROR_MESSAGE = "The field '%s.%s' does not exist!";
    private static final String FIELD_IS_NOT_CORRECT_MODIFIER = "The field '%s.%s' doesn't have correct access modifier(actual - `%s`; expected - `%s`;)!";
    private static final String FIELD_HAS_WRONG_TYPE = "The field '%s.%s' has the wrong type(actual - `%s`; expected - `%s`;)!";

    private class ExpField {
        Class fieldType;
        String modifier;
        String name;

        public ExpField(String modifier, Class fieldType, String name) {
            this.fieldType = fieldType;
            this.modifier = modifier;
            this.name = name;
        }
    }

    @Test
    public void validateClassFields() {
        Class clazz = getType("Bag");

        ExpField\[\] fields = new ExpField\[\]{
                new ExpField(MODIFIER_PRIVATE, String.class, "color"),
                new ExpField(MODIFIER_PRIVATE, int.class, "capacity"),
                new ExpField(MODIFIER_PRIVATE, List.class, "data"),
        };

        for (ExpField field : fields) {
            validateField(clazz, field);
        }
    }

    private void validateField(Class clazz, ExpField expField) {
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
    }

    private Field getField(Class clazz, String expectedName) {
        Field field = null;
        try {
            field = clazz.getDeclaredField(expectedName);
        } catch (NoSuchFieldException e) {
        }

        return field;
    }

    private String getFieldModifier(Field field) {
        int actualModifier = field.getModifiers();

        String modifierAsStr = Modifier.toString(actualModifier);
        return modifierAsStr;
    }

    private static Class getType(String name) {
        Class clazz = Classes.allClasses.get(name);

        return clazz;
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
import java.util.Arrays;

public class T03ValidatePresentMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types\: '%s' ;expected - '%s')!";
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
        Class clazz = getType("Present");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getName"),
                new ExpMethod(double.class, "getWeight"),
                new ExpMethod(String.class, "toString"),
        \};

        for (ExpMethod method \: methods) \{
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
        String\[\] stringArray = Arrays.stream(array).map(Class\:\:getSimpleName).toArray(String\[\]\:\:new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]\:\:new);

        StringBuilder sb = new StringBuilder();

        for (Method method \: methodsWithGivenName) \{
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

public class T04ValidateBagMethods \{
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types\: '%s' ;expected - '%s')!";
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
        Class clazz = getType("Bag");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(String.class, "getColor"),
                new ExpMethod(int.class, "getCapacity"),
        \};

        for (ExpMethod method \: methods) \{
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
        String\[\] stringArray = Arrays.stream(array).map(Class\:\:getSimpleName).toArray(String\[\]\:\:new);
        String arrayStr = String.join(", ", stringArray);

        return arrayStr;
    \}

    private String findMethodFromMethods(Class clazz, String methodName) \{
        Method\[\] methods = clazz.getMethods();

        Method\[\] methodsWithGivenName = Arrays.stream(methods).filter(m -\> m.getName().equals(methodName)).toArray(Method\[\]\:\:new);

        StringBuilder sb = new StringBuilder();

        for (Method method \: methodsWithGivenName) \{
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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T05ValidatePresentInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validatePresentInstance() \{
        Object\[\] arguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Class clazz = getType("Present");
        Object object = createObjectInstance(clazz, arguments);

        Object actualName = getMethodValue(object, clazz, "getName");
        Object actualWeight = getMethodValue(object, clazz, "getWeight");
        Object actualToString = getMethodValue(object, clazz, "toString");

        Object expectedName = "Doll";
        Object expectedWeight = 0.4;
        Object expectedToString = "Present Doll (0.40) for a girl";

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "getName", actualName, expectedName);
        String weightMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "getWeight", actualWeight, expectedWeight);
        String toStringMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "toString", actualToString, expectedToString);

        Assert.assertEquals(nameMessage, expectedName, actualName);
        Assert.assertEquals(weightMessage, expectedWeight, actualWeight);
        Assert.assertEquals(toStringMessage, expectedToString, actualToString);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object);
            \} catch (IllegalAccessException \| InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
//            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T06ValidateBagAddMethod \{

    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validateBagAddMethod()\{
        //Arrange
        //Create Bag object
        Object\[\] bagArguments = new Object\[\]\{"Red", 10\};
        Class bagClazz = getType("Bag");
        Object bagObject = createObjectInstance(bagClazz, bagArguments);

        //Create Present object
        Object\[\] presentArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Class presentClazz = getType("Present");
        Object presentObject = createObjectInstance(presentClazz, presentArguments);

        Object expectedCount = 1;

        //Act
        Object\[\] methodArgs = new Object\[\]\{presentObject\};

        getMethodValue(bagObject, bagClazz, "add", methodArgs, presentClazz);

        Object actualCount = getMethodValue(bagObject, bagClazz, "count", null);

        //Assert
        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, bagClazz.getName(), "count", actualCount, expectedCount);
        Assert.assertEquals(countMessage, expectedCount, actualCount);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T07ValidateBagAddMethodWithFilledCapacity \{

    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validateBagAddMethod()\{
        //Arrange
        //Create Bag object
        Object\[\] bagArguments = new Object\[\]\{"Red", 1\};
        Class bagClazz = getType("Bag");
        Object bagObject = createObjectInstance(bagClazz, bagArguments);

        //Create Present object
        Object\[\] presentArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Object\[\] presentArguments2 = new Object\[\]\{"Car", 0.7, "boy"\};
        Class presentClazz = getType("Present");
        Class presentClazz2 = getType("Present");
        Object presentObject = createObjectInstance(presentClazz, presentArguments);
        Object presentObject2 = createObjectInstance(presentClazz2, presentArguments2);

        Object expectedCount = 1;

        //Act
        Object\[\] methodArgs = new Object\[\]\{presentObject\};
        Object\[\] methodArgs2 = new Object\[\]\{presentObject2\};

        getMethodValue(bagObject, bagClazz, "add", methodArgs, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", methodArgs2, presentClazz2);

        Object actualCount = getMethodValue(bagObject, bagClazz, "count", null);

        //Assert
        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, bagClazz.getName(), "count", actualCount, expectedCount);
        Assert.assertEquals(countMessage, expectedCount, actualCount);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T08ValidateBagRemoveMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validateBagRemoveMethod() \{


        //Arrange
        //Create Bag object
        Object\[\] bagArguments = new Object\[\]\{"Red", 6\};
        Class bagClazz = getType("Bag");
        Object bagObject = createObjectInstance(bagClazz, bagArguments);

        //Create Present object
        Object\[\] presentArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Object\[\] presentArguments2 = new Object\[\]\{"Car", 0.7, "boy"\};
        Class presentClazz = getType("Present");
        Class presentClazz2 = getType("Present");
        Object presentObject = createObjectInstance(presentClazz, presentArguments);
        Object presentObject2 = createObjectInstance(presentClazz2, presentArguments2);

        Object expectedCount = 1;
        Object expectedIsRemoved = true;

        //Act
        Object\[\] methodArgs = new Object\[\]\{presentObject\};
        Object\[\] methodArgs2 = new Object\[\]\{presentObject2\};

        getMethodValue(bagObject, bagClazz, "add", methodArgs, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", methodArgs2, presentClazz2);

        Object actualIsRemoved =
                getMethodValue(bagObject, bagClazz, "remove", new Object\[\]\{"Doll"\}, String.class);

        Object actualCount = getMethodValue(bagObject, bagClazz, "count", null);

        // Assert
        String isRemovedMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, bagClazz.getName(), "remove", actualIsRemoved, expectedIsRemoved);
        Assert.assertEquals(isRemovedMessage, expectedIsRemoved, actualIsRemoved);

        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, bagClazz.getName(), "count", actualCount, expectedCount);
        Assert.assertEquals(countMessage, expectedCount, actualCount);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T09ValidatePresentToStringMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validatePresentToStringMethod() \{
        //Arrange
        //Create Present object
        Class presentClazz = getType("Present");

        Object\[\] presentArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Object presentObject = createObjectInstance(presentClazz, presentArguments);

        Object expectedToString = "Present Doll (0.40) for a girl";


        // Act
        Object actualToString = getMethodValue(presentObject, presentClazz, "toString", null).toString();

        // Assert
        String reportMessage = String.format(METHOD_INCORRECT_RETURN_VALUE,
                presentClazz.getName(),
                "toString",
                actualToString,
                expectedToString);

        Assert.assertEquals(reportMessage, expectedToString, actualToString);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}

    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}

    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T10ValidateHeaviestPresentMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validateHeaviestPresentMethod() \{
        //Arrange
        //Create Bag object
        Class bagClazz = getType("Bag");
        Object\[\] bagArguments = new Object\[\]\{"black", 10\};
        Object bagObject = createObjectInstance(bagClazz, bagArguments);

        //Creat Present Objects
        Class presentClazz = getType("Present");


        Object\[\] presentOneArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Object presentOneObject = createObjectInstance(presentClazz, presentOneArguments);

        Object\[\] presentTwoArguments = new Object\[\]\{"Train", 2.0, "boy"\};
        Object presentTwoObject = createObjectInstance(presentClazz, presentTwoArguments);

        Object\[\] presentThreeArguments = new Object\[\]\{"Car", 3.0, "boy"\};
        Object presentThreeObject = createObjectInstance(presentClazz, presentThreeArguments);

        Object expectedHeaviestPresent = "Present Car (3.00) for a boy";

        // Act
        // Invoke methods
        // add Presents to Bag
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentOneObject\}, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentTwoObject\}, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentThreeObject\}, presentClazz);

        String actualReport =
                getMethodValue(bagObject, bagClazz, "heaviestPresent", null).toString().trim();


        // Assert
        String reportMessage = String.format(METHOD_INCORRECT_RETURN_VALUE,
                bagClazz.getName(),
                "heaviestPresent",
                actualReport,
                expectedHeaviestPresent);
        Assert.assertEquals(reportMessage, expectedHeaviestPresent, actualReport);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Constructor ctor = null;

        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
import java.util.Arrays;

public class T11ValidateBagReportMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result\: '%s'; expected - '%s')!";

    @Test
    public void validateBagReportMethod() \{
        //Arrange
        //Create Bag object
        Class bagClazz = getType("Bag");
        Object\[\] bagArguments = new Object\[\]\{"black", 10\};
        Object bagObject = createObjectInstance(bagClazz, bagArguments);

        //Creat Present Objects
        Class presentClazz = getType("Present");


        Object\[\] presentOneArguments = new Object\[\]\{"Doll", 0.4, "girl"\};
        Object presentOneObject = createObjectInstance(presentClazz, presentOneArguments);

        Object\[\] presentTwoArguments = new Object\[\]\{"Train", 2.0, "boy"\};
        Object presentTwoObject = createObjectInstance(presentClazz, presentTwoArguments);

        Object\[\] presentThreeArguments = new Object\[\]\{"Car", 3.0, "boy"\};
        Object presentThreeObject = createObjectInstance(presentClazz, presentThreeArguments);

        Object expectedReport = String.format(
                "black bag contains\:%n" +
                        "Present Doll (0.40) for a girl%n" +
                        "Present Train (2.00) for a boy%n" +
                        "Present Car (3.00) for a boy");

        // Act
        // Invoke methods
        // add Presents to Bag
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentOneObject\}, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentTwoObject\}, presentClazz);
        getMethodValue(bagObject, bagClazz, "add", new Object\[\]\{presentThreeObject\}, presentClazz);

        String actualReport =
                getMethodValue(bagObject, bagClazz, "report", null).toString().trim();


        // Assert
        String reportMessage = String.format(METHOD_INCORRECT_RETURN_VALUE,
                bagClazz.getName(),
                "report",
                actualReport,
                expectedReport);
        Assert.assertEquals(reportMessage, expectedReport, actualReport);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Constructor ctor = null;

        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object\:\:getClass).toArray(Class\[\]\:\:new);

        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);
            mapDoubleTodouble(argumentTypes);

            try \{
                ctor = clazz.getConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
            \}
        \}

        Object obj = null;

        if (ctor != null) \{
            try \{
                obj = ctor.newInstance(arguments);
            \} catch (InstantiationException e) \{
                e.printStackTrace();
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return obj;
    \}

    private void mapIntegerToInt(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Integer.class.getName())) \{
                types\[i\] = int.class;
            \}
        \}
    \}
    private void mapDoubleTodouble(Class\[\] types) \{
        for (int i = 0; i \< types.length; i++) \{
            if (types\[i\].getName().equals(Double.class.getName())) \{
                types\[i\] = double.class;
            \}
        \}
    \}
    private static Class getType(String name) \{
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    \}

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) \{
        Method method = null;

        try \{
            method = clazz.getMethod(expectedName, parameterTypes);
        \} catch (NoSuchMethodException e) \{
        \}

        return method;
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
