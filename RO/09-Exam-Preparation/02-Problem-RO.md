[slide hideTitle]
# Problemă cu soluție: Santa Workshop Business Logic

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/RO/interactive-java-oop-advanced-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Santa Workshop Business Logic" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-1-Santa-Workshop-Business-Logic" executionType="tests-execution" executionStrategy="java-project-tests"]   
[code-upload allowedMemory="30" /]

[task-description]

# Descriere

## Clasa Controller 

Logica de afaceri a programului ar trebui să fie concentrată în jurul mai multor **comenzi**.

Sarcina conține interfețe, pe care trebuie să le implementăm în clasele corecte.

**Notă:** Clasa ControllerImpl **nu trebuie** să gestioneze excepții! 

**Testele sunt concepute pentru a aștepta excepții, nu mesaje!**

Prima interfață este **Controller**. Trebuie să creați clasa **ControllerImpl** care implementează interfața și toate metodele sale. 

Constructorul clasei  **ControllerImpl** nu ia nici un argument. 

Metodele date trebuie să aibă următoarea logică:

## Comenzi

Există câteva comenzi care controlează logica de afaceri a aplicației. 

Acestea sunt enumerate mai jos.

### AddDwarf Command

**Parameters:**

- **type - String**
- **dwarfName - String**

**Functionalitate:**

Creează un pitic, cu numele dat și din tipul dat. 

Dacă tipul piticului este nevalid,  aruncați `IllegalArgumentException` cu mesajul:

**"Dwarf type doesn't exist!"**

The method should **return** the following message:

- "**Successfully added** \{**dwarfType**\} **named** \{**dwarfName**\}**!**"

### AddInstrumentToDwarf Command

**Parameters:**

- **dwarfName - String**

- **power - int**

**Funcționalitate:**

Creează o unealtă cu puterea dată și o adaugă la colecția piticului. 

Dacă un astfel de pitic nu este prezent  `IllegalArgumentException` cu mesajul:

"**The dwarf you want to add an instrument to doesn't exist!**"

Metoda ar trebui să **returneze** umrătorul mesaj:

"**Successfully added instrument with power** \{**instrumentPower**\} **to dwarf** \{**dwarfName**\}**!**"


### Comanda AddPresent 

**Parametri**

- **presentName** - String
- **energyRequired** - int

**Funcționalitate:**

Creează **un cadou** cu **numele** furnizat și **energia necesară**.

Metoda ar trebui să **returneze** umrătorul mesaj:

- "**Successfully added Present:** \{**presentName**\}**!**"

### Comanda CraftPresents 

**Parametri:**

- **presentName** - String

**Funcționalitate:**

Acțiunea este efectuată atunci când este data comanda "craft". 

Trebuie să începeți crearea cadoului, desemnând piticii care sunt gata:

- Piticii pe care trebuie să-i selectați sunt cei care au energie **peste** 50 unități

- Cei potriviți încep să lucreze la cadoul respectiv 

- Dacă **no dwarfs are ready**, aruncați `IllegalArgumentException` cu următorul mesaj:
"**There is no dwarf ready to start crafting!**"

- După ce munca a fost finalizată, returnați următorul mesaj, raportând dacă cadoul este gata și câte unelte au fost stricate în tipul creării:

"**Present** \{**presentName**\} **is** \{**done/not done**\}**.** \{**countBrokenInstruments**\} **instrument/s have been broken while working on it!**"

**Nota**: **Numele** **cadoului**, pe care îl obțineți va fi întotdeauna **applicabil**.

###  Comanda Report 

**Funcționalitate:**

Returnează informații despre **cadourile create** și despre **pitici**:

"\{**countCraftedPresents**\} **presents are done!**"

"**Dwarfs info:**"

"**Name:** \{**dwarfName1**\}"

"**Energy:** \{**dwarfEnergy1**\}"

"**Instruments:** \{**countInstruments**\} **not broken left**"

…

"**Name:** \{**dwarfNameN**\}"

"**Energy:** \{**dwarfEnergyN**\}"

"**Instruments:** \{**countInstruments**\} **not broken left**"

# Intrare/Ieșire 

AVa fi furnizată o interfață, care va sprijini procesul de execuție corect al programului dumneavoastră.

Interfața se numește **Engine**, iar clasa care implementează această interfață ar trebui să citească intrarea.

Când programul se termină, această clasă ar trebui să imprime ieșirea.

## Intrare

Mai jos, puteți vedea  **formatul** în care  **fiecare comandă** va  fi dată în cadrul intrării:

- **AddDwarf** \{**dwarfType**\} \{**dwarfName**\}

- **AddPresent** \{**presentName**\} \{**energyRequired**\}

- **AddInstrumentToDwarf** \{**dwarfName**\}

- **CraftPresent** \{**presentName**\}

- **Report**

- **Exit**

## Ieșire

Imprimați ieșirea fiecărei comenzi atunci când este emisă.

Dacă o excepție este aruncată în timpul executarea oricărei dintre comenzi, tipăriți mesajul de excepție.

# Exemple

## Exemplul 1

| **Intrare** |
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


| **Ieșire** |
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

## Exemplul 2

| **Intrare** |
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
    
| **Ieșire** |
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
