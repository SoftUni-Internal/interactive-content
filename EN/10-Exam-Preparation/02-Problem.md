[slide hideTitle]
# Problem: Online Shop Business Logic
[code-task title="Online Shop Business Logic" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-2-Online-Shop-Business-Logic" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]


[task-description]
# Description

## The Controller Class

The business logic of the program should be defined inside several **commands**. 

You will be provided with interfaces which you have to implement in the correct classes.

**Note: The ControllerImpl class SHOULD NOT handle exceptions! The tests are designed to expect exceptions, not messages.**

The first interface is the **Controller**. 

Create a **ControllerImpl** class, which implements the interface and all of its methods. 

The constructor, of the **ControllerImpl** class, does not take any arguments. 

Its methods should have the logic, described below.

## Commands

There are several commands, which control the business logic of the application. 

As listed: 

**Note:** For each command, except for "**addComputer**" and "**buyBest**", you should check if a computer with that ID exists in the **computers** collection. 

If it does not, throw an `IllegalArgumentException` with the message "**Computer with this id does not exist.**".

### AddComputer Command:

The method must be called **addComputer**.

**Parameters:**

- **computerType** - String
- **id** - int
- **manufacturer** - String
- **model** - String
- **price** - double

**Functionality:**

Creates a computer with the correct type and **adds it to the collection of computers**.

If a computer with the **same ID** already exists in **the computers collection**, throw an **IllegalArgumentException** with the message "**Computer with this id already exists.**"

If the computer type is invalid, throw an **IllegalArgumentException** with the message "**Computer type is invalid.**"

If it is successful, returns **"Computer with id** \{**id**\} **added successfully."**

### AddComponent Command:

The method must be called **addComponent**.

**Parameters:**

- **computerId - int**
- **id - int**
- **componentType - String**
- **manufacturer - String**
- **model - String**
- **price - double**
- **overallPerformance - double**
- **generation - int**

**Functionality:**

Creates a component with the correct type and **adds it to the computer with that ID then adds it to the collection of components in the controller**.

If a component, with the **same ID**, already exists in **the components collection**, throws an **IllegalArgumentException** with the message "**Component with this id already exists.**"

If the component type is invalid, throws an **IllegalArgumentException** with the message "**Component type is invalid.**"

If it is successful, returns "**Component** \{**component type**\} **with id** \{**component ID**\} **added successfully in computer with id** \{**computer ID**\}."

### RemoveComponent Command:

The method should be called **removeComponent**.

**Parameters:**

- **componentType** - String
- **computerId** - int

**Functionality:**

Removes a component of the given **type from the computer with that ID** and removes the component from the **collection of components**.

If it is successful, it returns "**Successfully removed** \{**component type**\} **with id** \{**component id**\}."

### AddPeripheral Command:

The method should be called **addPeripheral**.

**Parameters:**

- **computerId** - int
- **id** - int
- **peripheralType** - String
- **manufacturer** - String
- **model** - String
- **price** - double
- **overallPerformance** - double
- **connectionType** - String

**Functionality:**

Creates a peripheral of the correct type, and **adds it to the computer with that id, then adds it to the collection of peripherals in the controller**.

If a peripheral with the **same id** already exists in **the peripherals collection**, it throws an `IllegalArgumentException` with the message "**Peripheral with this id already exists.**"

If the peripheral type is invalid, throws an `IllegalArgumentException` with the message "**Peripheral type is invalid.**"

If it is successful, it returns "**Peripheral** \{**peripheral type**\} **with id** \{**peripheral id**\} **added successfully in computer with id** \{**computer id**\}."

### RemovePeripheral Command:

The method must be called **removePeripheral**.

**Parameters:**

- **peripheralType** - String
- **computerId** - int

**Functionality:**

Removes a peripheral pf the given **type from the computer** with matching **id**, then removes the peripheral from the **collection of peripherals**.

If it is successful, it returns **"Successfully removed** \{**peripheral type**\} **with id** \{**peripheral id**\}.".

### BuyComputer Command:

The should must be called **buyComputer**.

**Parameters:**

- **id** - int

**Functionality:**

Removes a computer with the given **id** from the **collection of computers**.

If it is successful, it returns the **toString() method of the removed computer**.

### BuyBestComputer Command:

The method should be called **BuyBestComputer**.

**Parameters:**

- **budget** - double

**Functionality:**

**Removes** the computer with: 
(from the collection)
- the **highest overall performance**
- a **price, less or equal to the budget** 


If there are not any computers in the collection or the budget is insufficient for any computer, it throws an `IllegalArgumentException` with the message **"Can't buy a computer with a budget of** \$\{**budget**\}."

If it is successful, it returns the **toString() method on the removed computer**.

### GetComputerData Command:

The method should be called **getComputerData**.

**Parameters:**

- **id - int**

**Functionality:**

If it is successful, returns the **toString method on the computer with the given id**.

### Close Command:

The method should be called **close**.

**Functionality:**

Ends the program.

# Input / Output

You are provided with one interface which should help you with the correct execution process of the program. 

The interface is called **Engine**, and the class implementing this interface should read the input

When the program finishes, this class should print out the output.

You are given the **EngineImpl** class with written logic in it. 

In order for the code to be **compiled**, some parts are **commented out, do not forget to comment them out**.

The **try-catch block** is also **commented out** in order for the program to **throw exceptions and for you to see them, un-comment it** when you are **ready** with this too.

## Input

- **AddComputer** \{**computer type**\} \{**id**\} \{**manufacturer**\} \{**model**\} \{**price**\}
- **AddComponent** \{**computer id**\} \{**component id**\} \{**component type**\} \{**manufacturer**\} \{**model**\} \{**price**\} \{**overall performance**\} \{**generation**\}
- **RemoveComponent** \{**component type**\} \{**computer id**\}
- **AddPeripheral** \{**computer id**\} \{**peripheral id**\} \{**peripheral type**\} \{**manufacturer**\} \{**model**\} \{**price**\} \{**overall performance**\} \{**connection type**\}
- **RemovePeripheral** \{**peripheral type**\} \{**computer id**\}
- **BuyComputer** \{**id**\}
- **BuyBestComputer** \{**budget**\}
- **GetComputerData** \{**id**\}
- **Close**

## Output

Print out the output from each command, when issued.

If an exception is thrown during any of the commands execution process, print out the respective exception message.

# Examples


## Example 1
| **Input** |
| --- |
| AddComputer Laptop 4 Asus ROG 700 |
| AddComponent 4 3 CentralProcessingUnit Intel Xeon 1600 82 9 |
| AddComponent 4 6 Motherboard Asus ROG 1250 70 8 |
| AddComponent 4 7 PowerSupply Fortron FSP 700 70 2 |
| AddComponent 4 10 RandomAccessMemory Kingston HyperX 900 80 4 |
| AddComponent 4 13 SolidStateDrive Samsung Evo 800 85 7 |
| AddComponent 4 17 VideoCard Nvidia GeForce 2000 97 9 |
| AddPeripheral 4 3 Headset Razer Thresher 300 70 AUX |
| GetComputerData 4 |
| RemovePeripheral Headset 4 |
| BuyComputer 4 |
| Close |

| **Output** |
| --- |
| Computer with id 4 added successfully. |
| Component CentralProcessingUnit with id 3 added successfully in computer with id 4. |
| Component Motherboard with id 6 added successfully in computer with id 4. |
| Component PowerSupply with id 7 added successfully in computer with id 4. |
| Component RandomAccessMemory with id 10 added successfully in computer with id 4. |
| Component SolidStateDrive with id 13 added successfully in computer with id 4. |
| Component VideoCard with id 17 added successfully in computer with id 4. |
| Peripheral Headset with id 3 added successfully in computer with id 4. |
| Overall Performance: 105.51. Price: 8250.00 - Laptop: Asus ROG (Id: 4) |
|  Components (6): |
|   Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 9 |
|   Overall Performance: 87.50. Price: 1250.00 - Motherboard: Asus ROG (Id: 6) Generation: 8 |
|   Overall Performance: 73.50. Price: 700.00 - PowerSupply: Fortron FSP (Id: 7) Generation: 2 |
|   Overall Performance: 96.00. Price: 900.00 - RandomAccessMemory: Kingston HyperX (Id: 10) Generation: 4 |
|   Overall Performance: 102.00. Price: 800.00 - SolidStateDrive: Samsung Evo (Id: 13) Generation: 7 |
|   Overall Performance: 111.55. Price: 2000.00 - VideoCard: Nvidia GeForce (Id: 17) Generation: 9 |
|  Peripherals (1); Average Overall Performance (70.00): |
| Overall Performance: 70.00. Price: 300.00 - Headset: Razer Thresher (Id: 3) Connection Type: AUX  |
| Successfully removed Headset with id 3. |
| Overall Performance: 105.51. Price: 7950.00 - Laptop: Asus ROG (Id: 4) |
|  Components (6): |
|   Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 9 |
|   Overall Performance: 87.50. Price: 1250.00 - Motherboard: Asus ROG (Id: 6) Generation: 8 |
|   Overall Performance: 73.50. Price: 700.00 - PowerSupply: Fortron FSP (Id: 7) Generation: 2 |
|   Overall Performance: 96.00. Price: 900.00 - RandomAccessMemory: Kingston HyperX (Id: 10) Generation: 4 |
|   Overall Performance: 102.00. Price: 800.00 - SolidStateDrive: Samsung Evo (Id: 13) Generation: 7 |
|   Overall Performance: 111.55. Price: 2000.00 - VideoCard: Nvidia GeForce (Id: 17) Generation: 9 |
|  Peripherals (0); Average Overall Performance (0.00): |


## Example 2

| **Input** |
| --- |
| AddComputer Laptop 4 Asus ROG 700 |
| AddComputer Tablet 5 Asus ROG 700 |
| AddComputer Laptop 0 Asus ROG 700 |
| AddComputer Laptop 4 Asus ROG 700 |
| AddComputer Laptop 7 Asus ROG 0 |
| AddComponent 4 3 CentralProcessingUnit Intel Xeon 1600 82 10 |
| AddComponent 55 33 CentralProcessingUnit Intel Xeon 1600 82 10 |
| AddComponent 4 3 CentralProcessingUnit Intel Xeon 1600 82 10 |
| AddComponent 4 30 InvalidComponent Intel Xeon 1600 82 10 |
| AddComponent 4 0 CentralProcessingUnit Intel Xeon 0 82 10 |
| AddComponent 4 -1 CentralProcessingUnit Intel Xeon 0 82 10 |
| AddComponent 4 30 CentralProcessingUnit Intel Xeon 0 82 10 |
| AddComponent 4 30 CentralProcessingUnit Intel Xeon 1600 0 10 |
| AddComponent 4 13 SolidStateDrive Samsung Evo 800 85 8 |
| RemoveComponent Motherboard 4 |
| RemoveComponent SolidStateDrive 1 |
| RemoveComponent SolidStateDrive 4 |
| GetComputerData 100 |
| GetComputerData 4 |
| BuyComputer 4 |
| BuyComputer 4 |
| Close |


| **Output** |
| --- |
| Computer with id 4 added successfully. |
| Computer type is invalid. |
| Id can not be less or equal than 0. |
| Computer with this id already exists. |
| Price can not be less or equal than 0. |
| Component CentralProcessingUnit with id 3 added successfully in computer with id 4. |
| Computer with this id does not exist. |
| Component with this id already exists. |
| Component type is invalid. |
| Id can not be less or equal than 0. |
| Id can not be less or equal than 0. |
| Price can not be less or equal than 0. |
| Overall Performance can not be less or equal than 0. |
| Component SolidStateDrive with id 13 added successfully in computer with id 4. |
| Component Motherboard does not exist in Laptop with Id 4. |
| Computer with this id does not exist. |
| Successfully removed SolidStateDrive with id 13. |
| Computer with this id does not exist. |
| Overall Performance: 112.50. Price: 2300.00 - Laptop: Asus ROG (Id: 4) |
|  Components (1): |
|   Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 10 |
|  Peripherals (0); Average Overall Performance (0.00): |
| Overall Performance: 112.50. Price: 2300.00 - Laptop: Asus ROG (Id: 4) |
|  Components (1): |
|   Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 10 |
|  Peripherals (0); Average Overall Performance (0.00): |
| Computer with this id does not exist. |


## Example 3:

| **Input** |
| --- |
| AddComputer DesktopComputer 1 Asus Huracan 500 |
| AddComponent 1 1 CentralProcessingUnit Ryzen 3950 1700 80 10 |
| AddComponent 1 4 Motherboard MSI MEG 1700 80 7 |
| AddComponent 1 16 VideoCard Nvidia Quadro 4000 90 6 |
| AddPeripheral 1 2 Monitor Dell S27 800 60 HDMI |
| AddComputer Laptop 4 Asus ROG 700 |
| AddComponent 4 3 CentralProcessingUnit Intel Xeon 1600 82 11 |
| AddComponent 4 6 Motherboard Asus ROG 1250 70 7 |
| AddComponent 4 17 VideoCard Nvidia GeForce 2000 97 8 |
| AddPeripheral 4 3 Headset Razer Thresher 300 70 Bluetooth |
| AddComputer DesktopComputer 2 Acer GX 490 |
| AddComponent 2 9 PowerSupply Corsair Hydro 200 40 8 |
| AddComponent 2 14 SolidStateDrive Samsung Evo 800 85 8 |
| AddPeripheral 2 5 Monitor Dell S27 800 60 HDMI |
| GetComputerData 1 |
| GetComputerData 4 |
| GetComputerData 2 |
| BuyBestComputer 6000 |
| GetComputerData 4 |
| Close |



| **Output** |
| --- |
| Computer with id 1 added successfully. |
| Component CentralProcessingUnit with id 1 added successfully in computer with id 1. |
| Component Motherboard with id 4 added successfully in computer with id 1. |
| Component VideoCard with id 16 added successfully in computer with id 1. |
| Peripheral Monitor with id 2 added successfully in computer with id 1. |
| Computer with id 4 added successfully. |
| Component CentralProcessingUnit with id 3 added successfully in computer with id 4. |
| Component Motherboard with id 6 added successfully in computer with id 4. |
| Component VideoCard with id 17 added successfully in computer with id 4. |
| Peripheral Headset with id 3 added successfully in computer with id 4. |
| Computer with id 2 added successfully. |
| Component PowerSupply with id 9 added successfully in computer with id 2. |
| Component SolidStateDrive with id 14 added successfully in computer with id 2. |
| Peripheral Monitor with id 5 added successfully in computer with id 2. |
| Overall Performance: 116.17. Price: 8700.00 - DesktopComputer: Asus Huracan (Id: 1) |
|  Components (3): |
|   Overall Performance: 100.00. Price: 1700.00 - CentralProcessingUnit: Ryzen 3950 (Id: 1) Generation: 10 |
|   Overall Performance: 100.00. Price: 1700.00 - Motherboard: MSI MEG (Id: 4) Generation: 7 |
|   Overall Performance: 103.50. Price: 4000.00 - VideoCard: Nvidia Quadro (Id: 16) Generation: 6 |
|  Peripherals (1); Average Overall Performance (60.00): |
|   Overall Performance: 60.00. Price: 800.00 - Monitor: Dell S27 (Id: 2) Connection Type: HDMI |
| Overall Performance: 110.52. Price: 5850.00 - Laptop: Asus ROG (Id: 4) |
|  Components (3): |
| Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 11 |
| Overall Performance: 87.50. Price: 1250.00 - Motherboard: Asus ROG (Id: 6) Generation: 7 |
| Overall Performance: 111.55. Price: 2000.00 - VideoCard: Nvidia GeForce (Id: 17) Generation: 8 |
| Peripherals (1); Average Overall Performance (70.00): |
| Overall Performance: 70.00. Price: 300.00 - Headset: Razer Thresher (Id: 3) Connection Type: Bluetooth |
| Overall Performance: 87.00. Price: 2290.00 - DesktopComputer: Acer GX (Id: 2) |
| Components (2): |
| Overall Performance: 42.00. Price: 200.00 - PowerSupply: Corsair Hydro (Id: 9) Generation: 8 |
| Overall Performance: 102.00. Price: 800.00 - SolidStateDrive: Samsung Evo (Id: 14) Generation: 8 |
|  Peripherals (1); Average Overall Performance (60.00): |
| Overall Performance: 60.00. Price: 800.00 - Monitor: Dell S27 (Id: 5) Connection Type: HDMI |
| Overall Performance: 110.52. Price: 5850.00 - Laptop: Asus ROG (Id: 4) |
| Components (3): |
|   Overall Performance: 102.50. Price: 1600.00 - CentralProcessingUnit: Intel Xeon (Id: 3) Generation: 11 |
|   Overall Performance: 87.50. Price: 1250.00 - Motherboard: Asus ROG (Id: 6) Generation: 7 |
|   Overall Performance: 111.55. Price: 2000.00 - VideoCard: Nvidia GeForce (Id: 17) Generation: 8 |
|  Peripherals (1); Average Overall Performance (70.00): |
|   Overall Performance: 70.00. Price: 300.00 - Headset: Razer Thresher (Id: 3) Connection Type: Bluetooth |
| Computer with this id does not exist. |



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

public class T01ValidateAddValidComputerMethod \{
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
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        String expectedMessage = String.format("Computer with id 1 added successfully.");

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

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

public class T02ValidateAddInvalidComputerMethod \{
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
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"LaptopComputer", 1, "Asus", "ROG", 500\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Computer type is invalid.";

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T03ValidateSameAddComputerIDMethod \{
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
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};
        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Computer with this id already exists.";

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T04ValidateAddValidPeripheralMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "addPeripheral";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Monitor", "Dell", "S27", 800, 60, "HDMI"\};

        String expectedMessage = String.format("Peripheral Monitor with id 1 added successfully in computer with id 1.");

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};

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

public class T05ValidateAddSamePeripheralMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String methodName2 = "addPeripheral";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Monitor", "Dell", "S27", 800, 60, "HDMI"\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};

        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addPeripheral";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Monitor", "Dell", "S27", 800, 60, "HDMI"\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Peripheral with this id already exists.";

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T06ValidateAddInvalidPeripheralMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addPeripheral";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Volume", "Dell", "S27", 800, 60, "HDMI"\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Peripheral type is invalid.";

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T07ValidateRemoveValidPeripheralMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        String methodName2 = "addPeripheral";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Monitor", "Dell", "S27", 800, 60, "HDMI"\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};

        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);

    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "removePeripheral";
        Object\[\] methodArgs = new Object\[\]\{"Monitor", 1\};

        String expectedMessage = String.format("Successfully removed Monitor with id 1.");

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

public class T08ValidateRemoveNonExistingPeripheralMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String methodName2 = "addPeripheral";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Monitor", "Dell", "S27", 800, 60, "HDMI"\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, String.class\};

        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "removePeripheral";
        Object\[\] methodArgs = new Object\[\]\{"Monitor2", 1\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Peripheral Monitor2 does not exist in DesktopComputer with Id 1.";

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T09ValidateAddValidComponentMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "addComponent";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Motherboard", "Asus", "ROG", 1250, 70, 8\};

        String expectedMessage = String.format("Component Motherboard with id 1 added successfully in computer with id 1.");

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

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

public class T10ValidateAddSameComponentMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        String methodName2 = "addComponent";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Motherboard", "Asus", "ROG", 1250, 70, 8\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addComponent";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Motherboard", "Asus", "ROG", 1250, 70, 8\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Component with this id already exists.";

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T11ValidateAddInvalidComponentMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "addComponent";
        Object\[\] methodArgs = new Object\[\]\{1, 1, "Fatherboard", "Asus", "ROG", 1250, 70, 8\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Component type is invalid.";

        Class\[\] paramTypes = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T12ValidateRemoveValidComponentMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);

        String methodName2 = "addComponent";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Motherboard", "Asus", "ROG", 1250, 70, 8\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);
    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "removeComponent";
        Object\[\] methodArgs = new Object\[\]\{"Motherboard", 1\};

        String expectedMessage = String.format("Successfully removed Motherboard with id 1.");

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

public class T13ValidateRemoveNonExistingComponentMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String methodName2 = "addComponent";
        Object\[\] methodArgs2 = new Object\[\]\{1, 1, "Motherboard", "Asus", "ROG", 1250, 70, 8\};

        Class\[\] paramTypes2 = new Class\[\]\{int.class, int.class, String.class, String.class, String.class, double.class, double.class, int.class\};

        getMethodValue(this.classType, this.classObject, methodName2, methodArgs2, paramTypes2);
    \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "removeComponent";
        Object\[\] methodArgs = new Object\[\]\{"Motherboard2", 1\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Component Motherboard2 does not exist in DesktopComputer with Id 1.";

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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

public class T14ValidateBuyComputerValidMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "buyComputer";
        Object\[\] methodArgs = new Object\[\]\{1\};

        String expectedMessage = "Overall Performance: 15.00. Price: 500.00 - DesktopComputer: Asus ROG (Id: 1)" + System.lineSeparator() +
                " Components (0):" + System.lineSeparator() +
                " Peripherals (0); Average Overall Performance (0.00):";

        Class\[\] paramTypes = new Class\[\]\{int.class\};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String actualResultAsString = String.valueOf(actualResult);
        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage.trim(), actualResultAsString.trim());
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T15ValidateBuyComputerInvalidMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "buyComputer";
        Object\[\] methodArgs = new Object\[\]\{2\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Computer with this id does not exist.";

        Class\[\] paramTypes = new Class\[\]\{int.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T16ValidateBuyBestComputerValidMethod {
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class classObject;
    private Object classType;

    @Before
    public void beforeMethod() {
        Class controllerClass = getType("ControllerImpl");

        Object controller = createObjectInstance(controllerClass, new Object[]{});

        this.classObject = controllerClass;
        this.classType = controller;

        String methodName = "addComputer";
        Object[] methodArgs = new Object[]{"DesktopComputer", 1, "Asus", "ROG", 500};

        Class[] paramTypes = new Class[]{String.class, int.class, String.class, String.class, double.class};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    }

    @Test
    public void addComputerShouldReturnCorrectResult() {
        // Arrange
        String methodName = "BuyBestComputer";
        Object[] methodArgs = new Object[]{1000};

        String expectedMessage = "Overall Performance: 15.00. Price: 500.00 - DesktopComputer: Asus ROG (Id: 1)" + System.lineSeparator() +
                " Components (0):" + System.lineSeparator() +
                " Peripherals (0); Average Overall Performance (0.00):";

        Class[] paramTypes = new Class[]{double.class};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String actualResultAsString = String.valueOf(actualResult);
        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage.trim(), actualResultAsString.trim());
    }

    private Object getMethodValue(Object object, Class clazz, String methodName, Object[] methodArgs, Class... parameterTypes) {
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) {
            try {
                methodValue = method.invoke(object, methodArgs);
            } catch (IllegalAccessException e) {
            } catch (InvocationTargetException e) {
            }
        }

        return methodValue;
    }

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class clazz, String methodName, Object[] methodArgs, Class... parameterTypes) throws Throwable {
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) {
            try {
                methodValue = method.invoke(object, methodArgs);
            } catch (IllegalAccessException e) {
            } catch (InvocationTargetException e) {
                String testMessage = String.format(METHOD_INCORRECT_EXCEPTION_MESSAGE,
                        clazz.getSimpleName(),
                        methodName,
                        expectedExceptionName,
                        expectedExceptionMessage,
                        e.getTargetException().getClass().getSimpleName(),
                        e.getTargetException().getMessage());

                Assert.assertEquals(testMessage, expectedExceptionMessage, e.getTargetException().getMessage());
                throw e.getTargetException();
            }
        }

        return methodValue;
    }

    private Object createObjectInstance(Class clazz, Object[] arguments) {
        Class[] argumentTypes = null;

        if (arguments != null) {
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class[]::new);
        }

        Constructor ctor = null;
        try {
            ctor = clazz.getDeclaredConstructor(argumentTypes);
        } catch (NoSuchMethodException e) {
            mapIntegerToInt(argumentTypes);

            try {
                ctor = clazz.getDeclaredConstructor(argumentTypes);
            } catch (NoSuchMethodException ex) {
                try {
                    argumentTypes = Arrays.stream(arguments).map(a -> a.getClass().getInterfaces()[0]).toArray(Class[]::new);
                    ctor = clazz.getDeclaredConstructor(argumentTypes);
                } catch (NoSuchMethodException exc) {
                }
            }
        }

        Object obj = null;

        if (ctor != null) {
            try {
                obj = ctor.newInstance(arguments);
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
            } catch (InvocationTargetException e) {
            }
        }

        return obj;
    }

    private void mapIntegerToInt(Class[] types) {
        for (int i = 0; i < types.length; i++) {
            if (types[i].getSimpleName().equals(Integer.class.getSimpleName())) {
                types[i] = int.class;
            }
        }
    }

    private static Class getType(String name) {
        Class clazz = Classes.allClasses.get(name);

        return clazz;
    }

    private Method getMethod(Class clazz, String expectedName, Class... parameterTypes) {
        Method method = null;

        try {
            method = clazz.getMethod(expectedName, parameterTypes);
        } catch (NoSuchMethodException e) {
        }

        return method;
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
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T18ValidateBuyBestComputerInvalidMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "buyBestComputer";
        Object\[\] methodArgs = new Object\[\]\{499\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Can't buy a computer with a budget of \\$\{499.00\}.";

        Class\[\] paramTypes = new Class\[\]\{double.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T19ValidateGetComputerDataValidMethod \{
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

        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        // Act
        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
    \}

    @Test
    public void addComputerShouldReturnCorrectResult() \{
        // Arrange
        String methodName = "getComputerData";
        Object\[\] methodArgs = new Object\[\]\{1\};

        String expectedMessage = "Overall Performance: 15.00. Price: 500.00 - DesktopComputer: Asus ROG (Id: 1)" + System.lineSeparator() +
                " Components (0):" + System.lineSeparator() +
                " Peripherals (0); Average Overall Performance (0.00):";

        Class\[\] paramTypes = new Class\[\]\{int.class\};

        // Act
        Object actualResult = getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        String actualResultAsString = String.valueOf(actualResult);
        // Assert
        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.classType.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage.trim(), actualResultAsString.trim());
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
[test open]
[input]
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T20ValidateBuyComputerInvalidMethod \{
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
        String methodName = "addComputer";
        Object\[\] methodArgs = new Object\[\]\{"DesktopComputer", 1, "Asus", "ROG", 500\};

        Class\[\] paramTypes = new Class\[\]\{String.class, int.class, String.class, String.class, double.class\};

        getMethodValue(this.classType, this.classObject, methodName, methodArgs, paramTypes);
        \}

    @Test
    public void validateMethodNameMethodTestExplanation() throws Throwable \{
        // Arrange
        String methodName = "getComputerData";
        Object\[\] methodArgs = new Object\[\]\{2\};

        String expectedExceptionName = IllegalArgumentException.class.getSimpleName();
        String expectedExceptionMessage = "Computer with this id does not exist.";

        Class\[\] paramTypes = new Class\[\]\{int.class\};


        // Act
        throwMethodExceptionWithMessageTest(expectedExceptionName, expectedExceptionMessage, this.classType, this.classObject, methodName, methodArgs, paramTypes);
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
                return "passed";
                //throw e.getTargetException();
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
