[slide hideTitle]
# Problemă: Easter Races Business Logic
[code-task title="Easter Races Business Logic" timeLimit=5000 taskId="Java-OOP-Advanced-Easter-Races-Business-Logic" executionType="tests-execution" executionStrategy="java-project-tests" requiresInput]
[code-upload allowedMemory="30" /]

[task-description]
# Sarcina 2: Logica afacerii (150 de puncte)

# Clasa controller

Logica afacerii ar trebui să conțină mai multe **comenzi**.

Vi se pun la dispoziție interfețe de implementat în clasele corecte.

**Notă: Clasa Controller NU TREBUIE să gestioneze excepții.**

**Testele sunt concepute pentru a se aștepta la excepții, nu la mesaje.**

Prima interfață se numește **Controller**.

 Ar trebui să includeți o clasă **ControllerImpl**, care implementează interfața și toate metodele sale.
 
 Metodele date ar trebui să aibă următoarea logică:

 # Comenzi
 
Există mai multe comenzi, care controlează logica de afaceri a aplicației.
 
După cum se menționează:

## Comanda CreateDriver 


**Parametri:**

- **driverName - string**

**Funcționalitate:**

Instanțiază un **Driver** cu numele dat și îl adaugă în depozitul corespunzător.

Metoda ar trebui să **returneze** următorul mesaj:

**"Driver** \{**name**\} **is created."**

Dacă există deja un driver cu numele dat în depozitul de șoferi, aceasta ar trebui să conducă la **IllegalArgumentException** cu mesajul:

**"Driver** \{**name**\} **is already created."**

## Comanda CreateCar

**Parametri:**

- **type - string**
- **model - string**
- **horsePower - int**

**Funcționalitate:**

Creează o **Mașină** cu **modelul** și **cai putere** furnizate și o adaugă în depozit.

Există două tipuri de mașini: "**MuscleCar**" și "**SportsCar**".

Dacă **Car** există deja în depozitul corespunzător, aceasta ar trebui să conducă la o **IllegalArgumentException** cu următorul mesaj:

**"Car** \{**model**\} **is already created."**

Dacă **Car** este creată cu succes, metoda ar trebui să **returneze** următorul mesaj:

"\{"**MuscleCar**" / "**SportsCar**"\} \{**model**\} **is created."**

## Comanda AddCarToDriver

**Parametri:**

- **driverName - string**
- **carModel - string**

**Funcționalitate:**

Adaugă **Mașina** dată la **Șoferul** dat, dacă sunt prezente în depozit.

Dacă acest **Driver** în **DriverRepository**, aceasta ar trebui să conducă la **IllegalArgumentException** cu mesajul:

- **"Driver** \{**name**\} **could not be found."**

Dacă **Car nu există** în **CarRepository**, aceasta ar trebui să conducă la o **excepție de argument ilegal** cu mesajul:

-  **"Car** \{**name**\} **could not be found."**

Dacă  car și driver există, ar trebui să adăugați **car * la **driver** și să returnați următorul mesaj:

- **"Driver** \{**driver name**\} **received car** \{**car name**\}**."**

`AddDriverToRace Command`

**Parametri:**

- **raceName - string**
- **driverName - string**

**Funcționalitate:**

Adaugă un **Driver** la **Race**.

Dacă **Race nu este prezent** în **RaceRepository**, aceasta va duce la  **IllegalArgumentException** cu mesajul:

- **"Race** \{**name**\} **could not be found."**

Dacă  **Driver nu există** în **DriverRepository**, aceasta va duce la  **IllegalArgumentException** cu mesajul:

- **"Driver** \{**name**\} **could not be found."**

Ar trebui să adăugați  **Driver** la **Race** și să imprimați următorul mesaj:

- **"Driver** \{**driver name**\} **added in** \{**race name**\} **race."**
## Comanda CreateRace

**Parametri:**

- **name - string**
- **laps - int**


**Funcționalitate:**

Creează **Race** cu **name** dat și **laps** și o adaugă la **RaceRepository**.

Dacă  **Race** cu **numele** dat **există** deja, aruncați **IllegalArgumentException** cu mesajul:
- **"Race** \{**name**\} **is already created."**

Ar trebui să returnați următorul mesaj:

- **"Race** \{**name**\} **is created."**

## Comanda StartRace

**Parametri:**

- **raceName - string**

**Funcționalitate:**

Dacă informațiile sunt valide, ar trebui să **aranjați** toți **șoferii** și apoi să returnați primii trei cei mai rapizi **piloți**.

Pentru a face acest lucru, ar trebui să sortați toți **șoferii**, în ordinea descrescătoare, după rezultatul metodei **CalculateRacePoints** din obiectul **Car**.

În cele din urmă, dacă totul este valid, **eliminați** această **cursă** din depozitul de curse.

Dacă **Race nu există** în **RaceRepository**, aruncați **IllegalArgumentException** cu mesajul:

- **"Race** \{**name**\} **could not be found."**

Dacă sunt prezenți mai puțini decât  **3** participanți, aruncați **IllegalArgumentException** cu mesajul:

- **"Race** \{**race name**\} **cannot start with less than 3 participants."**


Ar trebui să returnați următorul mesaj:

- **"Driver** \{**first driver name**\} **wins** \{**race name**\} **race."**

**"Driver** \{**second driver name**\} **is second in** \{**race name**\} **race."**

**"Driver** \{**third driver name**\} **is third in** \{**race name**\} **race."**

## Comanda End

**Ieșiți** din program.

# Date de Intrare/Ieșire

Vi se oferă o singură interfață, care ar trebui să vă ajute cu procesul corect de execuție al programului dvs.

Interfața se numește **Engine**, iar clasa care implementează această interfață ar trebui să citească intrarea. Când programul se termină, această clasă ar trebui să imprime ieșirea.

## Intrare

Mai jos, puteți vedea **formatul**, în care **fiecare comandă** va fi dată în intrare:

CreateDriver \{name\}
CreateCar \{car type\} \{model\} \{horsepower\}
AddCarToDriver \{driver name\} \{car name\}
AddDriverToRace \{race name\} \{driver name\}
CreateRace \{name\} \{laps\}
StartRace \{race name\}
End

## Ieșire

Imprimați ieșirea fiecărei comenzi atunci când este emisă.

Dacă o excepție este aruncată în timpul oricăreia dintre comenzi, tipăriți mesajul specificat.

# Exemplul 1

**Intrare**
CreateDriver Michael 
CreateDriver Peter 
CreateCar Sports Porsche 380
CreateCar Muscle Mustang 580 
CreateCar Muscle Corvette 440 
CreateRace Daytona 2 
AddCarToDriver Michael Porsche
AddCarToDriver Peter Mustang
AddCarToDriver Michael Corvette
StartRace Daytona
AddDriverToRace Daytona Michael
AddDriverToRace Daytona Peter
StartRace Daytona
CreateDriver Brian
AddDriverToRace Daytona Brian
CreateCar Sports Mazda 350
AddCarToDriver Brian Mazda
AddDriverToRace Daytona Brian
StartRace Daytona
End

**Ieșire**
Driver Michael is created.
Driver Peter is created.
SportsCar Porsche is created.
MuscleCar Mustang is created. 
MuscleCar Corvette is created. 
Race Daytona is created. 
Driver Michael received car Porsche. 
Driver Peter received car Mustang. 
Driver Michael received car Corvette. 
Race Daytona cannot start with less than 3 participants. 
Driver Michael added in Daytona race. 
Driver Peter added in Daytona race. 
Race Daytona cannot start with less than 3 participants. 
Driver Brian is created. 
Driver Brian could not participate in race. 
SportsCar Mazda is created. 
Driver Brian received car Mazda. 
Driver Brian added in Daytona race. 
Driver Michael wins Daytona race.
Driver Peter is second in Daytona race. 
Driver Brian is third in Daytona race. 

# Exemplul 2

**Intrare**
 CreateDriver Kevin 
 CreateDriver Kevin 
 CreateDriver Jose 
 CreateCar Sports Ford 500 
 CreateCar Sports Kia 300 
 CreateCar Muscle Ford 550 
 CreateCar Muscle Ford 550 
 StartRace LeMans 
 CreateRace LeMans 4 
 AddDriverToRace Dakar Kevin 
 AddDriverToRace LeMans Jose 
 AddDriverToRace LeMans Kevin 
 AddCarToDriver Kevin Ford 
 AddDriverToRace LeMans Kevin 
 CreateCar Sports Porsche 380 
 CreateCar Muscle Mustang 490 
 CreateCar Muscle Dodge 500 
 CreateRace Daytona 2 
 CreateDriver Michael 
 CreateDriver Peter 
 AddCarToDriver Michael Porsche 
 AddCarToDriver Peter Mustang 
 AddDriverToRace LeMans Michael 
 AddDriverToRace LeMans Peter 
 StartRace LeMans 
 End 

 **Ieșire**
 Driver Kevin is created. 
 Driver Kevin is already created. 
 Name Jose cannot be less than 5 symbols. 
 Invalid horse power: 500. 
 Model Kia cannot be less than 4 symbols. 
 MuscleCar Ford is created. 
 Car Ford is already created. 
 Race LeMans could not be found. 
 Race LeMans is created. 
 Race Dakar could not be found. 
 Driver Jose could not be found. 
 Driver Kevin could not participate in race. 
 Driver Kevin received car Ford. 
 Driver Kevin added in LeMans race. 
 SportsCar Porsche is created. 
 MuscleCar Mustang is created. 
 MuscleCar Dodge is created. 
 Race Daytona is created. 
 Driver Michael is created. 
 Driver Peter is created. 
 Driver Michael received car Porsche. 
 Driver Peter received car Mustang. 
 Driver Michael added in LeMans race. 
 Driver Peter added in LeMans race. 
 Driver Peter wins LeMans race. 
 Driver Kevin is second in LeMans race. 
 Driver Michael is third in LeMans race.


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T01ValidateCreateDriverMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected result: '%s'; actual - '%s')!";

    @Test
    public void validateMethod() \{
        // Arrange
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        // Act
        // Invoke methods
        String methodName = "createDriver";
        String name = "DriverName";
        Object\[\] methodArgs = new Object\[\]\{name\};
        Object actualRes = getMethodValue(controller, controllerClass, methodName, methodArgs, String.class);

        // Assert
        String expectedRes = String.format("Driver %s is created.", name);
        String resMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, controllerClass.getSimpleName(), methodName, expectedRes, actualRes);
        Assert.assertEquals(resMessage, expectedRes, actualRes);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T02ValidateCreateDriverInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected result: '%s'; actual - '%s')!";

    @Test
    public void validateMethod() \{
        // Arrange
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        // Act
        // Invoke methods
        String methodName = "createDriver";
        String name = "DriverName";
        Object\[\] methodArgs = new Object\[\]\{name\};
        Object actualRes = getMethodValue(controller, controllerClass, methodName, methodArgs, String.class);

        // Assert
        String expectedRes = String.format("Driver %s is created.", name);
        String resMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, controllerClass.getSimpleName(), methodName, expectedRes, actualRes);
        Assert.assertEquals(resMessage, expectedRes, actualRes);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T03ValidateCreateCarMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createSpeedMotorcycle() \{
        String methodName = "createCar";
        String type = "Sports";
        String model = "Valid";
        int horsePower = 300;
        Object\[\] methodArgs = new Object\[\]\{type, model, horsePower\};
        String expectedMessage = String.format("SportsCar %s is created.", model);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class, int.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    @Test
    public void createPowerMotorcycle() \{
        String methodName = "createCar";
        String type = "Muscle";
        String model = "Valid";
        int horsePower = 500;
        Object\[\] methodArgs = new Object\[\]\{type, model, horsePower\};
        String expectedMessage = String.format("MuscleCar %s is created.", model);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class, int.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T04ValidateCreateCarInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createSpeedMotorcycle() \{
        String methodName = "createCar";
        String type = "Sports";
        String model = "Valid";
        int horsePower = 300;
        Object\[\] methodArgs = new Object\[\]\{type, model, horsePower\};
        String expectedMessage = String.format("SportsCar %s is created.", model);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class, int.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    @Test
    public void createPowerMotorcycle() \{
        String methodName = "createCar";
        String type = "Muscle";
        String model = "Valid";
        int horsePower = 500;
        Object\[\] methodArgs = new Object\[\]\{type, model, horsePower\};
        String expectedMessage = String.format("MuscleCar %s is created.", model);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class, int.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T05ValidateAddCarToDriverMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createSpeedMotorcycle() \{
        // Arrange
        String riderName = "Driver";
        Object\[\] riderArgs = new Object\[\]\{riderName\};

        String motorcycleModel = "Honda";
        Object\[\] motorcycleArgs = new Object\[\]\{"Sports", motorcycleModel, 300\};

        getMethodValue(this.controller, this.controllerClass, "createDriver", riderArgs, String.class);
        getMethodValue(this.controller, this.controllerClass, "createCar", motorcycleArgs, String.class, String.class, int.class);

        String methodName = "addCarToDriver";
        Object\[\] methodArgs = new Object\[\]\{riderName, motorcycleModel\};
        String expectedMessage = String.format("Driver %s received car %s.", riderName, motorcycleModel);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T06ValidateAddCarToDriverInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createSpeedMotorcycle() \{
        // Arrange
        String riderName = "Driver";
        Object\[\] riderArgs = new Object\[\]\{riderName\};

        String motorcycleModel = "Honda";
        Object\[\] motorcycleArgs = new Object\[\]\{"Sports", motorcycleModel, 300\};

        getMethodValue(this.controller, this.controllerClass, "createDriver", riderArgs, String.class);
        getMethodValue(this.controller, this.controllerClass, "createCar", motorcycleArgs, String.class, String.class, int.class);

        String methodName = "addCarToDriver";
        Object\[\] methodArgs = new Object\[\]\{riderName, motorcycleModel\};
        String expectedMessage = String.format("Driver %s received car %s.", riderName, motorcycleModel);

        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, String.class, String.class);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T07ValidateCreateRaceMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createRace() \{
        // Arrange
        String name = "Race Name";
        int laps = 2;

        String methodName = "createRace";
        Object\[\] methodArgs = new Object\[\]\{name, laps\};
        String expectedMessage = String.format("Race %s is created.", name);
        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T08ValidateCreateRaceInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createRace() \{
        // Arrange
        String name = "Race Name";
        int laps = 2;

        String methodName = "createRace";
        Object\[\] methodArgs = new Object\[\]\{name, laps\};
        String expectedMessage = String.format("Race %s is created.", name);
        Class\[\] paramTypes = new Class\[\]\{String.class, int.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T09ValidateAddDriverToRaceMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createRace() \{
        // Create Race
        String raceName = "Race Name";
        String riderName = "Driver";
        getMethodValue(this.controller, this.controllerClass, "createRace", new Object\[\]\{raceName, 2\}, String.class, int.class);

        // Creates rider, motorcycle and add it to race
        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Sports", "Honda", 300\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{riderName\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{riderName, "Honda"\}, String.class, String.class);

        String methodName = "addDriverToRace";
        Object\[\] methodArgs = new Object\[\]\{raceName, riderName\};
        String expectedMessage = String.format("Driver %s added in %s race.", riderName, raceName);
        Class\[\] paramTypes = new Class\[\]\{String.class, String.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T10ValidateAddDriverToRaceInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void createRace() \{
        // Create Race
        String raceName = "Race Name";
        String riderName = "Driver";
        getMethodValue(this.controller, this.controllerClass, "createRace", new Object\[\]\{raceName, 2\}, String.class, int.class);

        // Creates rider, motorcycle and add it to race
        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Sports", "Honda", 300\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{riderName\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{riderName, "Honda"\}, String.class, String.class);

        String methodName = "addDriverToRace";
        Object\[\] methodArgs = new Object\[\]\{raceName, riderName\};
        String expectedMessage = String.format("Driver %s added in %s race.", riderName, raceName);
        Class\[\] paramTypes = new Class\[\]\{String.class, String.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T11ValidateStartRaceMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void startRace() \{
        // Create Race
        String raceName = "Race Name";
        int laps = 2;
        getMethodValue(this.controller, this.controllerClass, "createRace", new Object\[\]\{raceName, laps\}, String.class, int.class);

        // Creates three riders, motorcycles and add them to race
        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda", 442\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver", "Honda"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver"\}, String.class, String.class);

        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda 2", 400\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver 2"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver 2", "Honda 2"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver 2"\}, String.class, String.class);

        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda 3", 404\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver 3"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver 3", "Honda 3"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver 3"\}, String.class, String.class);

        // Act
        String methodName = "startRace";
        Object\[\] methodArgs = new Object\[\]\{raceName\};
        String expectedMessage = String.format("Driver %s wins %s race.%n", "Driver 2", raceName);
        expectedMessage += String.format("Driver %s is second in %s race.%n", "Driver 3", raceName);
        expectedMessage += String.format("Driver %s is third in %s race.", "Driver", raceName);

        Class\[\] paramTypes = new Class\[\]\{String.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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

public class T12ValidateStartRaceInvalidMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "Method '%s.%s' returns invalid data (expected res: '%s'; actual - '%s')!";
    private static final String METHOD_INCORRECT_EXCEPTION_MESSAGE = "Method '%s.%s' throws invalid ex (expected: '%s - %s'; actual - '%s - %s')!";


    private Class controllerClass;
    private Object controller;

    @Before
    public void beforeMethod() \{
        Class carRepositoryClass = getType("CarRepository");
        Object motorcycleRepository =  createObjectInstance(carRepositoryClass, null);
        Class raceRepositoryClass = getType("RaceRepository");
        Object raceRepository =  createObjectInstance(raceRepositoryClass, null);
        Class driverRepositoryClass = getType("DriverRepository");
        Object riderRepository =  createObjectInstance(driverRepositoryClass, null);

        Class controllerClass = getType("ControllerImpl");
        Object\[\] controllerArgs = new Object\[\]\{riderRepository, motorcycleRepository, raceRepository\};

        Object controller = createObjectInstance(controllerClass, controllerArgs);

        this.controllerClass = controllerClass;
        this.controller = controller;
    \}

    @Test
    public void startRace() \{
        // Create Race
        String raceName = "Race Name";
        int laps = 2;
        getMethodValue(this.controller, this.controllerClass, "createRace", new Object\[\]\{raceName, laps\}, String.class, int.class);

        // Creates three riders, motorcycles and add them to race
        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda", 442\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver", "Honda"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver"\}, String.class, String.class);

        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda 2", 400\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver 2"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver 2", "Honda 2"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver 2"\}, String.class, String.class);

        getMethodValue(this.controller, this.controllerClass, "createCar", new Object\[\]\{"Muscle", "Honda 3", 404\}, String.class, String.class, int.class);
        getMethodValue(this.controller, this.controllerClass, "createDriver", new Object\[\]\{"Driver 3"\}, String.class);
        getMethodValue(this.controller, this.controllerClass, "addCarToDriver", new Object\[\]\{"Driver 3", "Honda 3"\}, String.class, String.class);
        getMethodValue(this.controller, this.controllerClass, "addDriverToRace", new Object\[\]\{raceName, "Driver 3"\}, String.class, String.class);

        // Act
        String methodName = "startRace";
        Object\[\] methodArgs = new Object\[\]\{raceName\};
        String expectedMessage = String.format("Driver %s wins %s race.%n", "Driver 2", raceName);
        expectedMessage += String.format("Driver %s is second in %s race.%n", "Driver 3", raceName);
        expectedMessage += String.format("Driver %s is third in %s race.", "Driver", raceName);

        Class\[\] paramTypes = new Class\[\]\{String.class\};
        Object actualResult = getMethodValue(this.controller, this.controllerClass, methodName, methodArgs, paramTypes);

        String message = String.format(METHOD_INCORRECT_RETURN_VALUE, this.controller.getClass().getSimpleName(), methodName, expectedMessage, actualResult);
        Assert.assertEquals(message, expectedMessage, actualResult);
    \}

    private Object getMethodValue(Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) \{
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

    private Object throwMethodException(String expectedExceptionName, String expectedExceptionMessage, Object object, Class\<?\> clazz, String methodName, Object\[\] methodArgs, Class\<?\>... parameterTypes) throws Throwable \{
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

    private Object createObjectInstance(Class\<?\> clazz, Object\[\] arguments) \{
        Class\<?\>\[\] argumentTypes = null;

        if (arguments != null) \{
            argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);
        \}

        Constructor\<?\> ctor = null;
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

    private void mapIntegerToInt(Class\<?\>\[\] types) \{
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

    private Method getMethod(Class clazz, String expectedName, Class\<?\>... parameterTypes) \{
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
