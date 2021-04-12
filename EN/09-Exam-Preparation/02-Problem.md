[slide hideTitle]
# Problem with Solution: Santa Workshop Business Logic

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/EN/interactive-java-oop-advanced-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Santa Workshop Business Logic" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-1-Santa-Workshop-Business-Logic" executionType="tests-execution" executionStrategy="java-project-tests"]   
[code-upload allowedMemory="30" /]

[task-description]

# Description

## The Controller Class

The business logic of the program should be concentrated around several **commands**. 

The task contains interfaces, which we have to implement in the correct classes.

**Note:** The ControllerImpl class **should not** handle exceptions! 

**The tests are designed to expect exceptions, not messages!**

The first interface is **Controller**. You must create a **ControllerImpl** class, which implements the interface and all its methods. 

The constructor of **ControllerImpl** does not take any arguments. 

The given methods should have the following logic:

## Commands

There are several commands, which control the business logic of the application. 

They are listed below.

### AddDwarf Command

**Parameters:**

- **type - String**
- **dwarfName - String**

**Functionality:**

Creates a dwarf with the given name of the given type. 

If the dwarf type is invalid, throw an `IllegalArgumentException` with the message:

**"Dwarf type doesn't exist!"**

The method should **return** the following message:

- "**Successfully added** \{**dwarfType**\} **named** \{**dwarfName**\}**!**"

### AddInstrumentToDwarf Command

**Parameters:**

- **dwarfName - String**

- **power - int**

**Functionality:**

Creates an instrument with the given power and adds it to the collection of the dwarf. 

If such dwarf does is not present, throw an `IllegalArgumentException` with the message:

"**The dwarf you want to add an instrument to doesn't exist!**"

The method should **return** the following message:

"**Successfully added instrument with power** \{**instrumentPower**\} **to dwarf** \{**dwarfName**\}**!**"


### AddPresent Command

**Parameters:**

- **presentName** - String
- **energyRequired** - int

**Functionality:**

Creates a **present** with the provided **name** and **required energy**.

The method should **return** the following message:

- "**Successfully added Present:** \{**presentName**\}**!**"

### CraftPresents Command

**Parameters:**

- **presentName** - String

**Functionality:**

When the "craft" command is given, the action performed. 

You should start crafting the present, by assigning the dwarfs which are ready:

- The dwarfs that you should select are the ones with energy **above** 50 units

- The suitable ones start working on the given present

- If **no dwarfs are ready**, throw `IllegalArgumentException` with the following message:
"**There is no dwarf ready to start crafting!**"

- After the work is done return the following message, reporting whether the present is done and how many instruments have been broken in the process:

"**Present** \{**presentName**\} **is** \{**done/not done**\}**.** \{**countBrokenInstruments**\} **instrument/s have been broken while working on it!**"

**Note**: The **name** of the **present** you receive will always be **applicable**.

### Report Command

**Functionality:**

Returns information about **crafted presents** and **dwarfs**:

"\{**countCraftedPresents**\} **presents are done!**"

"**Dwarfs info:**"

"**Name:** \{**dwarfName1**\}"

"**Energy:** \{**dwarfEnergy1**\}"

"**Instruments:** \{**countInstruments**\} **not broken left**"

…

"**Name:** \{**dwarfNameN**\}"

"**Energy:** \{**dwarfEnergyN**\}"

"**Instruments:** \{**countInstruments**\} **not broken left**"

# Input/Output

An interface will be provided, which will assist the correct execution process of your program. 

The interface is called **Engine**, and the class implementing this interface should read the input.

When the program finishes, this class should print the output.

## Input

Below, you can see the **format** in which **each command** will be given in the input:

- **AddDwarf** \{**dwarfType**\} \{**dwarfName**\}

- **AddPresent** \{**presentName**\} \{**energyRequired**\}

- **AddInstrumentToDwarf** \{**dwarfName**\}

- **CraftPresent** \{**presentName**\}

- **Report**

- **Exit**

## Output

Print the output of each command when issued. 

If an exception is thrown during any of the commands' execution, print the exception message.

# Example 

## Example 1

| **Input** |
| --- |
| AddDwarf Sleepy SleepyHead |
| AddDwarf Happy Sunshine |
| AddDwarf Invalid Sonny |
| AddInstrumentToDwarf SleepyHead 10 |
| AddInstrumentToDwarf Sunshine 20 |
| AddInstrumentToDwarf Sunshine 20 |
| AddInstrumentToDwarf Sunshine 30 |
| AddInstrumentToDwarf Sunshine 10 |
| AddInstrumentToDwarf Sunshine 30 |
| AddInstrumentToDwarf Sunshine 20 |
| AddInstrumentToDwarf Sunshine 40 |
| AddPresent Truck 20 |
| AddPresent TeddyBear 20 |
| AddPresent Doll 50 |
| CraftPresent Truck |
| CraftPresent TeddyBear |
| CraftPresent Doll |
| Report |
| Exit |


| **Output** |
| --- |
| Successfully added Sleepy named SleepyHead. |
| Successfully added Happy named Sunshine. |
| Dwarf type doesn't exist! |
| Successfully added instrument with power 10 to dwarf SleepyHead! |
| Successfully added instrument with power 20 to dwarf Sunshine! |
| Successfully added instrument with power 20 to dwarf Sunshine! |
| Successfully added instrument with power 30 to dwarf Sunshine! |
| Successfully added instrument with power 10 to dwarf Sunshine! |
| Successfully added instrument with power 30 to dwarf Sunshine! |
| Successfully added instrument with power 20 to dwarf Sunshine! |
| Successfully added instrument with power 40 to dwarf Sunshine! |
| Successfully added Present: Truck! |
| Successfully added Present: TeddyBear! |
| Successfully added Present: Doll! |
| Present Truck is done. 1 instrument/s have been broken while working on it! |
| Present TeddyBear is done. 2 instrument/s have been broken while working on it! |
| Present Doll is done. 4 instrument/s have been broken while working on it! |
| 3 presents are done! |
| Dwarfs info: |
| Name: SleepyHead |
| Energy: 50 |
| Instruments: 1 not broken left |
| Name: Sunshine |
| Energy: 10 |
| Instruments: 3 not broken left |

## Example 2

| **Input** |
| --- |
| AddDwarf Sleepy Moony |
| AddDwarf Sleepy Latey |
| AddDwarf Happy Mikey |
| AddDwarf Happy Crispy |
| AddInstrumentToDwarf Moony 20 |
| AddInstrumentToDwarf Mikey 180 |
| AddInstrumentToDwarf Moony 10 |
| AddInstrumentToDwarf Latey 10 |
| AddInstrumentToDwarf Crispy 20 |
| AddInstrumentToDwarf Crispy 10 |
| AddInstrumentToDwarf Crispy 10 |
| AddPresent WoodenTrain 100 |
| AddPresent LegoSet 160 |
| AddPresent DinosaurPlush 40 |
| AddPresent Laptop 500 |
| AddPresent Headphones 300 |
| CraftPresent WoodenTrain |
| CraftPresent LegoSet |
| CraftPresent DinosaurPlush |
| CraftPresent Laptop |
| CraftPresent Headphones |
| Report |
| Exit |
    
| **Output** |
| --- |
| Successfully added Sleepy named Moony. |
| Successfully added Sleepy named Latey. |
| Successfully added Happy named Mikey. |
| Successfully added Happy named Crispy. |
| Successfully added instrument with power 20 to dwarf Moony! |
| Successfully added instrument with power 180 to dwarf Mikey! |
| Successfully added instrument with power 10 to dwarf Moony! |
| Successfully added instrument with power 10 to dwarf Latey! |
| Successfully added instrument with power 20 to dwarf Crispy! |
| Successfully added instrument with power 10 to dwarf Crispy! |
| Successfully added instrument with power 10 to dwarf Crispy! |
| Successfully added Present: WoodenTrain! |
| Successfully added Present: LegoSet! |
| Successfully added Present: DinosaurPlush! |
| Successfully added Present: Laptop! |
| Successfully added Present: Headphones! |
| Present WoodenTrain is done. 0 instrument/s have been broken while working on it! |
| Present LegoSet is not done. 3 instrument/s have been broken while working on it! |
| Present DinosaurPlush is not done. 3 instrument/s have been broken while working on it! |
| Present Laptop is not done. 3 instrument/s have been broken while working on it! |
| Present Headphones is not done. 3 instrument/s have been broken while working on it! |
| 1 presents are done! |
| Dwarfs info: |
| Name: Moony |
| Energy: 50 |
| Instruments 2 not broken left |
| Name: Latey | 
| Energy: 50 |
| Instruments 1 not broken left |
| Name: Mikey |
| Energy: 0 |
| Instruments 1 not broken left |
| Name: Crispy |
| Energy: 60 |
| Instruments 0 not broken left |




[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T01ValidateAddDwarfMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test
    public void validateAddDwarfHappy() \{
        // Arrange
        String methodName = "addDwarf";
        Object\[\] methodArgs = new Object\[\]\{"Happy", "Pesho"\};

        String expectedMessage = String.format("Successfully added %s named %s!", methodArgs\[0\], methodArgs\[1\]);

        Class\[\] paramTypes = new Class\[\]\{String.class, String.class\};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T02ValidateAddDwarfThrowsExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = IllegalArgumentException.class)
    public void validateAddInvalidDwarf() throws Throwable \{
        // Arrange
        String methodName = "addDwarf";
        Object\[\] methodArgs = new Object\[\]\{"invalid", "name"\};

        Class\[\] paramTypes = new Class\[\]\{String.class, String.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T03ValidateAddDwarfNullNameThrowsExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = NullPointerException.class)
    public void validateAddInvalidNameDwarf() throws Throwable \{
        // Arrange
        String methodName = "addDwarf";
        Object\[\] methodArgs = new Object\[\]\{"Happy", null\};

        Class\[\] paramTypes = new Class\[\]\{String.class, String.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T04ValidateAddInstrumentToDwarfMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test
    public void validateAddInstrumentToDwarf() \{
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Pesho"\}, String.class, String.class);

        // Arrange
        String methodName = "addInstrumentToDwarf";
        Object\[\] methodArgs = new Object\[\]\{"Pesho", 100\};

        String expectedMessage = String.format("Successfully added instrument with power %d to dwarf %s!", methodArgs\[1\], methodArgs\[0\]);

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T05ValidateAddInstrumentToDwarfThrowsExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = IllegalArgumentException.class)
    public void validateInsertDecorationInvalidDecoration() throws Throwable \{
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Pesho"\}, String.class, String.class);

        // Arrange
        String methodName = "addInstrumentToDwarf";
        Object\[\] methodArgs = new Object\[\]\{"Gosho", 100\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T06ValidateAddInstrumentToDwarfNegativeThrowsExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = IllegalArgumentException.class)
    public void validateAddInstrumentToDwarf() throws Throwable \{
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Pesho"\}, String.class, String.class);

        // Arrange
        String methodName = "addInstrumentToDwarf";
        Object\[\] methodArgs = new Object\[\]\{"Pesho", -100\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T07ValidateAddPresentMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test
    public void validateAddPresent() \{
        // Arrange
        String methodName = "addPresent";
        Object\[\] methodArgs = new Object\[\]\{"Doll", 45\};

        String expectedMessage = String.format("Successfully added Present: %s!", methodArgs\[0\]);

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T08ValidateAddPresentNullNameExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = NullPointerException.class)
    public void validateInsertDecorationInvalidDecoration() throws Throwable \{
        // Arrange
        String methodName = "addPresent";
        Object\[\] methodArgs = new Object\[\]\{null, 10\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T09ValidateAddPresentThrowsExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = IllegalArgumentException.class)
    public void validateInsertDecorationInvalidDecoration() throws Throwable \{
        // Arrange
        String methodName = "addPresent";
        Object\[\] methodArgs = new Object\[\]\{"Train", -10\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T10ValidateCraftPresentMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{

        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test
    public void validateCraftMethod() \{
        getMethodValue(this.classType, this.classObject, "addPresent", new Object\[\]\{"Doll", 30\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Pesho"\}, String.class, String.class);
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Gosho"\}, String.class, String.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Pesho", 10\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Pesho", 50\}, String.class, int.class);


        // Arrange
        String methodName = "craftPresent";
        Object\[\] methodArgs = new Object\[\]\{"Doll"\};
        Class\[\] paramTypes = new Class\[\]\{String.class\};

        String expectedMessage = "Present Doll is done. 1 instrument/s have been broken while working on it!";

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T11ValidateCraftNoDwarfReadyExMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test(expected = IllegalArgumentException.class)
    public void validateCraftPresentNoDwarf() throws Throwable \{
        getMethodValue(this.classType, this.classObject, "addPresent", new Object\[\]\{"Doll", 30\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Sleepy", "Pesho"\}, String.class, String.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Pesho", 50\}, String.class, int.class);

        // Arrange
        String methodName = "craftPresent";
        Object\[\] methodArgs = new Object\[\]\{"Doll"\};

        Class\[\] paramTypes = new Class\[\]\{String.class\};

        // Act
        throwMethodException(this.classType, this.classObject, methodName, methodArgs, paramTypes);
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

    private Object throwMethodException(Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object throwMethodExceptionWithMessageTest(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T12ValidateReportMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() \{

        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object\[\]\{\});

        this.classObject = controllerClass;
        this.classType = controller;
    \}

    @Test
    public void validateReportMethod() \{
        getMethodValue(this.classType, this.classObject, "addPresent", new Object\[\]\{"Doll", 30\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addPresent", new Object\[\]\{"Teddy", 10\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addPresent", new Object\[\]\{"Train", 10\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Pesho"\}, String.class, String.class);
        getMethodValue(this.classType, this.classObject, "addDwarf", new Object\[\]\{"Happy", "Gosho"\}, String.class, String.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Pesho", 10\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Pesho", 50\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "addInstrumentToDwarf", new Object\[\]\{"Gosho", 10\}, String.class, int.class);
        getMethodValue(this.classType, this.classObject, "craftPresent", new Object\[\]\{"Doll"\}, String.class);
        getMethodValue(this.classType, this.classObject, "craftPresent", new Object\[\]\{"Train"\}, String.class);
        getMethodValue(this.classType, this.classObject, "craftPresent", new Object\[\]\{"Teddy"\}, String.class);

        // Arrange
        String methodName = "report";
        Object\[\] methodArgs = new Object\[\]\{\};
        Class\[\] paramTypes = new Class\[\]\{\};

        String expectedMessage = "3 presents are done!\n" +
                "Dwarfs info:\n" +
                "Name: Pesho\n" +
                "Energy: 50\n" +
                "Instruments: 1 not broken left\n" +
                "Name: Gosho\n" +
                "Energy: 90\n" +
                "Instruments: 0 not broken left";


        // Act
        String actualResult = (String)getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        actualResult = actualResult.replaceAll("\r\n", "\n");

        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object\[\] methodArgs, Class... parameterTypes) throws Throwable \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object, methodArgs);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor ctor = null;
        try \{
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

            try \{
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            \} catch (NoSuchMethodException ex) \{
                try \{
                    argumentTypes = Arrays.stream(arguments).map(a -\> a.getClass().getInterfaces()\[0\]).toArray(Class\[\]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                \} catch (NoSuchMethodException exc) \{
                \}
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
            if (types\[i\].getSimpleName().equals(Integer.class.getSimpleName())) \{
                types\[i\] = int.class;
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
