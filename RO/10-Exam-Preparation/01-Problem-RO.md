[slide hideTitle]
# Problemă cu Soluție: Online Shop

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/Exam-Prep2/RO/interactive-java-oop-advanced-exam-preparation-2-problem-1-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Online Shop" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-2-Online-Shop" executionType="tests-execution" executionStrategy="java-project-tests"]   
[code-upload allowedMemory="30" /]

[task-description]
# Prezentare Generală

Acest lucru constă în construirea unui proiect de magazin online bazat pe text, care definește **periferice**, **componente** și **calculatoare**.

Proiectul va conține **clase de model** și o **clasă de controler**, care gestionează **interacțiunea** dintre **perifericele**, **componentele** și **calculatoarele**.


# Configurare

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/11.Java-OOP-Advanced-Exam-Preparation-2.zip) **pentru această sarcină.**



- Încărcați **numai pachetul onlineShop** în fiecare sarcină **cu excepția testelor unitare**
- **Nu modificați interfețele sau pachetele acestora**
- Folosiți **o coeziune puternică** și **un cuplaj liber**
- **Utilizați moștenirea și interfețele furnizate ori de câte ori este posibil**
  * aceasta include **constructorii, parametrii metodei** și **tipurile de returnare**
- **Nu** încălcați **implementările de interfață** adăugând **mai multe metode publice** în clasa specifică decât a definit interfața
- Asigurați-vă că nu aveți **câmpuri publice** nicăieri


# Descriere

**Pentru evaluarea acestei sarcini, logica metodelor nu este inclusă.**

Vi se pun la dispoziție interfețe de care aveți nevoie pentru a le implementa funcționalitatea în **clasele corecte**.

Există cele **patru** tipuri de entități prezente în aplicație: **Product**, **Component**, **Peripheral** și **Computer**.

# Produs

**Produsul de bază** este o **clasă de bază** pentru **componente, periferice** și **calculatoare** și **nu ar trebui să ofere opțiunea de a fi instanțiată**.

## Date

- **id** - int
*  * nu poate fi **less than or equal to 0**
  * în caz contrar - aruncaț `IllegalArgumentException` cu mesajul "**Id can not be less or equal than 0.**"

- **manufacturer** - String
  * nu poate fi **null or whitespace**
  * în caz contrar - aruncați `IllegalArgumentException` cu mesajul "**Manufacturer can not be empty.**"

- **model** - String
  * nu poate fi **null or whitespace**
  * în caz contrar - aruncaț `IllegalArgumentException` cu mesajul "**Model can not be empty.**"

- **price** - double
  * nu poate fi **less than or equal to 0**
  * în caz contrar - aruncaț `IllegalArgumentException` cu mesajul "**Price can not be less or equal than 0.**"

- **overallPerformance** - double
  * nu poate fi **less than or equal to 0**
  * în caz contrar - aruncaț `IllegalArgumentException` cu mesajul "**Overall Performance can not be less or equal than 0.**"

## Constructor

Un **product** ar trebui să ia următoarele valori la inițializare:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**)

Suprascrieți metoda **toString()** în format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\})"

## Clase copii

Sunt câteva tupuri de **products**:

- **Component**
- **Peripheral**
- **Computer**

# Component

**BaseComponent** este o clasă derivată din **BaseProduct** și o **clasă de bază** pentru orice **component** și **nu ar trebui să ofere opțiunea de a fi instanțiată**.

## Date

**generation** - int

## Constructor

Un **produs** ar trebui să ia următoarele valori la inițializare:

-- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**, int **generation**)

Suprascrieți metoda **toString()** în format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\}) **Generation:** \{**generation**\}"

## Clase copii

Există mai multe tipuri concrete de **components** în care **performanța generală** are un **multiplicator diferit**:

-**CentralProcessingUnit** are un multiplicator de **1.25**
- **Motherboard** are un multiplicator de  **1.25**
- **PowerSupply** are un multiplicator de **1.05**
- **RandomAccessMemory** are un multiplicator de **1.20**
- **SolidStateDrive** are un multiplicator de **1.20**
- **VideoCard** are un multiplicator de **1.15**

**Exemplu**: Dacă creăm  **CentralProcessingUnit**  cu performanță generală - 50 la constructor și un multiplicator de **1,25** performanța sa generală ar trebui să fie 62,50.

# Periferic

**BasePeripheral** este o clasă derivată din **BaseProduct** și o **clasă de bază** pentru orice **periferic** și **nu ar trebui să ofere opțiunea de a fi instanțiată**.

## Date

- **connectionType** - String

## Constructor

Un **produs** ar trebui să ia următoarele valori la inițializare:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**, String **connectionType**)

Suprascrieți metoda **toString()** în format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\}) **Connection Type:** \{**connection type**\}"

## Clase copii 

Există mai multe tipuri concrete de **peripherals**:

- **Headset**
- **Keyboard**
- **Monitor**
- **Mouse**

# Calculator

**BaseComputer** este o clasă derivată din **BaseProduct** și o **clasă de bază** pentru orice **calculator** și **nu ar trebui să ofere opțiunea de a fi instanțiată**.

## Date

- **components** - List
- **peripherals** - List

## Constructor

Un **produs** ar trebui să ia următoarele valori la inițializare:

- (int **id**, String **manufacturer**, String **model**, double **price**, double **overallPerformance**)

Suprascrieți metoda **toString()** în format:

"**Overall Performance:** \{**overall performance**\}. **Price:** \{**price**\} - \{**product type**\}: \{**manufacturer**\} \{**model**\} (**Id:** \{**id**\})"

" **Components** (\{**components count**\}):"

"  \{**component one**\}"

"  \{**component two**\}"

"  \{**component n**\}"

" **Peripherals** (\{**peripherals count**\}); **Average Overall Performance** (\{**average overall performance peripherals**\}):"

"  \{**peripheral one**\}"

"  \{**peripheral two**\}"

"  \{**peripheral n**\}"

**Notă: Fiți atenți, unele dintre rânduri au unul sau mai multe spații libere la începutul propozițiilor!**


## Comportament

- `double getOverallPerformance()`
      - **suprascrieți funcționalitatea de bază** (dacă colecția de componente este goală, ar trebui să returneze numai **performanța generală a calculatorului**
      - în caz contrar, returnează suma performanței generale a calculatorului și a performanței medii generale a tuturor componentelor)

- `double getPrice()`
      - **suprascrieți funcționalitatea de bază** (prețul este egal cu **suma totală** a **prețului calculatorului** cu **suma tuturor prețurilor componentelor** și **suma tuturor prețurilor periferice**)

- `void addComponent(Component component)`
      - dacă colecția de componente conține o componentă cu același tip de componentă, aruncați **IllegalArgumentException** cu mesajul "**Component** \{**component type**\} **already exists in** \{**computer type**\} **with Id** \{**id**\}."
      - în caz contrar, adăugați componenta la colecția de componente

- `Component removeComponent(String componentType)`
      - dacă colecția de componente este goală sau nu are o componentă de acel tip, aruncați o **excepție de argument ilegal** cu mesajul "**componentă** \ {**tip de componentă**\} **nu există în** \{**tip calculator**\} **cu Id ** \{**id**\}."
      - în caz contrar, eliminați componenta de acel tip și returnați-o.

- `void аddPeripheral(Peripheral peripheral)`
      - dacă colecția de periferice conține un periferic cu același tip de periferic, aruncați o **excepție de argument ilegal** cu mesajul "**Periferic** \{**tip de periferic**\} **există deja în** \{**tip de calculator**\} **cu Id** \{**id**\}. "
      - în caz contrar, adăugați perifericul în colecția de periferice

- `Peripheral removePeripheral(String peripheralType)`
      - dacă colecția de periferice este goală sau nu are un periferic de acel tip, aruncați o **excepție de argument ilegal** cu mesajul "**Periferic** \{**tip de periferic** \} **nu există în** \{**tip calculator**\} **cu Id** \{**id**\}."
      - în caz contrar, scoateți perifericul de acel tip și returnați-l

## Clase copii

Există mai multe tipuri specifice de **calculatoare**, unde **performanța generală** are o **valoare diferită**:

- **DesktopComputer** - performanța sa generală este de **15**
- **Laptop** - performanța sa generală este de **10**

Clasele copii **nu ar trebui** să primească performanță generală ca parametru de la constructor.

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
