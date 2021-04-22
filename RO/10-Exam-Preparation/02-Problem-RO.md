[slide hideTitle]
# Problem: Online Shop Business Logic

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/RO/interactive-java-oop-advanced-exam-preparation-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Online Shop Business Logic" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-2-Online-Shop-Business-Logic" executionType="tests-execution" executionStrategy="java-project-tests"]
[code-upload allowedMemory="30" /]


[task-description]
# Descriere

## Clasa controlorului

Logica de afaceri a programului ar trebui definită în mai multe **comenzi**.

Vi se vor furniza interfețe pe care trebuie să le implementați în clasele corecte.

**Notă: Clasa ControllerImpl NU TREBUIE să gestioneze excepții! Testele sunt concepute pentru a se aștepta la excepții, nu la mesaje.**

Prima interfață este **Controler**.

Creați o clasă **ControllerImpl**, care implementează interfața și toate metodele sale.

Constructorul, din clasa **ControllerImpl**, nu ia niciun argument.

Metodele sale ar trebui să aibă logica, descrisă mai jos.

## Comenzi

Există mai multe comenzi, care controlează logica de afaceri a aplicației.

Așa cum este enumerat:

**Notă:** Pentru fiecare comandă, cu excepția "**addComputer**" și "**buyBest**", ar trebui să verificați dacă există un computer cu ID-ul respectiv în colecția **calculatoare**.

În caz contrar, aruncați o `IllegalArgumentException` cu mesajul "**Computer with this id does not exist.**".

### Comanda AddComputer:

Metoda trebuie numită **addComputer**.

**Parametri:**

- **computerType** - String
- **id** - int
- **manufacturer** - String
- **model** - String
- **price** - double

**Funcționalitate:**

Creează un calculator cu tipul corect și **îl adaugă la colecția de calculatoare**.

Dacă un calculator cu **același ID** există deja în **colecția de calculatoare**, aruncați o **IllegalArgumentException** cu mesajul "**Computer with this id already exists.**"

Dacă tipul calculatorului este nevalid, aruncați o **IllegalArgumentException** cu mesajul "**Computer type is invalid.**"

Dacă are succes, returnează **"Computer with id** \{**id**\} **added successfully."**

### Comanda AddComponent:

Metoda trebuie numită **addComponent**.

**Parametri:**

- **computerId - int**
- **id - int**
- **componentType - String**
- **manufacturer - String**
- **model - String**
- **price - double**
- **overallPerformance - double**
- **generation - int**

**Funcționalitate:**

Creează o componentă cu tipul corect și **o adaugă la calculatorul cu acel ID, apoi o adaugă la colecția de componente din controler**.

Dacă o componentă, **cu același ID**, există deja în **colecția de componente**, aruncă o **IllegalArgumentException** cu mesajul "**Component with this id already exists.**"

Dacă tipul de componentă este invalid, aruncă o **IllegalArgumentException** cu mesajul "**Component type is invalid.**"

Dacă are succes, returnează "**Component** \{**component type**\} **with id** \{**component ID**\} **added successfully in computer with id** \{**computer ID**\}."

### Comanda RemoveComponent:

Metoda ar trebui numită **removeComponent**.

**Parametri:**

- **componentType** - String
- **computerId** - int

**Funcționalitate:**

Îndepărtează o componentă de tipul **dat de pe calculator cu acel ID** și elimină componenta din **colecția de componente**.

Dacă are succes, se afișează "**Successfully removed** \{**component type**\} **with id** \{**component id**\}."

### Adăugare comandă periferică:

Metoda ar trebui numită **addPeripheral**.

**Parametri:**

- **computerId** - int
- **id** - int
- **peripheralType** - String
- **manufacturer** - String
- **model** - String
- **price** - double
- **overallPerformance** - double
- **connectionType** - String

**Funcționalitate:**

Creează un periferic de tipul corect și **îl adaugă la calculator cu acel id, apoi îl adaugă la colecția de periferice din controler**.

Dacă un periferic cu **același id** există deja în **colecția de periferice**, acesta aruncă o `IllegalArgumentException` cu mesajul  "**Peripheral with this id already exists.**"


Dacă tipul de periferic este invalid, aruncă o `IllegalArgumentException` cu mesajul "**Peripheral type is invalid.**"

Dacă are succes, returnează "**Peripheral** \{**peripheral type**\} **with id** \{**peripheral id**\} **added successfully in computer with id** \{**computer id**\}

### Comande RemovePeripheral:

Metoda trebuie numită **removePeripheral**.

**Parametri:**

- **peripheralType** - String
- **computerId** - int

**Funcționalitate:**

Îndepărtează un periferic de tipul **dat din computer** cu **id** potrivit, apoi elimină perifericul din **colecția de periferice**.

Dacă are succes, se returnează **"Successfully removed** \{**peripheral type**\} **with id** \{**peripheral id**\}.".

### Comanda BuyComputer:

Ar trebui să fie numit **buyComputer**.

**Parametri:**

- **id** - int

**Funcționalitate:**

Elimină un computer cu **id** dat din **colecția de calculatoare**.

Dacă are succes, returnează **toString() method a calculatorului eliminat**.

### Comanda BuyBestComputer:

Metoda ar trebui să fie numită **BuyBestComputer**.

**Parametri:**

- **budget** - double

**Funcționalitate:**

**Elimină** calculatorul cu:
(din colecție)
- **cea mai ridicată performanță generală**
- un **preț, mai mic sau egal cu bugetul**


Dacă nu există calculatoare în colecție sau bugetul este insuficient pentru orice calculator, acesta aruncă o `IllegalArgumentException` cu mesajul **"Can't buy a computer with a budget of** \$\{**budget**\}."

Dacă are succes, returnează ** toString method de pe calculatorul eliminat **.

### Comanda GetComputerData:

Metoda ar trebui numită **getComputerData**.

**Parametri:**

- **id - int**

**Funcționalitate:**

Dacă are succes, returnează **toString() method de pe calculatorul cu id-ul dat**.

### Închideți comanda:

Metoda ar trebui numită **închidere**.

**Funcționalitate:**

Încheie programul.

# Intrare/Ieșire

Vi se oferă o interfață care ar trebui să vă ajute cu procesul corect de execuție a programului.

Interfața se numește **Engine**, iar clasa care implementează această interfață ar trebui să citească intrarea

Când programul se termină, această clasă ar trebui să imprime ieșirea.

Vi se oferă clasa **EngineImpl** cu logică scrisă în ea.

Pentru ca codul să fie **compilat**, unele părți sunt **comentate, nu uitați să le comentați**.

**Blocul try-catch** este, de asemenea, **dezactivat** pentru ca programul să **arunce excepții și pentru ca dvs. să le vedeți** când sunteți **gata**.

## Intrare

- **AddComputer** \{**computer type**\} \{**id**\} \{**manufacturer**\} \{**model**\} \{**price**\}
- **AddComponent** \{**computer id**\} \{**component id**\} \{**component type**\} \{**manufacturer**\} \{**model**\} \{**price**\} \{**overall performance**\} \{**generation**\}
- **RemoveComponent** \{**component type**\} \{**computer id**\}
- **AddPeripheral** \{**computer id**\} \{**peripheral id**\} \{**peripheral type**\} \{**manufacturer**\} \{**model**\} \{**price**\} \{**overall performance**\} \{**connection type**\}
- **RemovePeripheral** \{**peripheral type**\} \{**computer id**\}
- **BuyComputer** \{**id**\}
- **BuyBestComputer** \{**budget**\}
- **GetComputerData** \{**id**\}
- **Close**

## Ieșire

Imprimați datele de ieșire pentru fiecare comandă, atunci când este emisă.

Dacă o excepție este aruncată în timpul oricăruia dintre procesele de executare a comenzilor, tipăriți mesajul de excepție respectiv.

# Exemple


## Exemplu 1
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
