[slide hideTitle]
# Problemă cu Soluție: Santa Workshop Structure

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/RO/interactive-java-oop-advanced-exam-preparation-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Santa Workshop Structure" timeLimit=5000 taskId="oop-advanced-java-exam-preparation-1-Santa-Workshop-Structure" executionType="tests-execution" executionStrategy="java-project-tests"] 

[code-upload allowedMemory="30" /]
[task-description]

# Setare

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/10-Java-OOP-Advanced-Exam-Preparation.zip) **pentru această sarcină.**

- Încărcați **doar pachetul santaWorkshop** pentru fiecare sarcină **cu excepția Unit Tests**
- **Nu modificați interfețele sau pachetele acestora**
- Folosiți **coeziune poternică** și **cuplare slabă**
- **Folosiți moștenirea și interfețele furnizate ori de câte ori acest lucru este posibil**
  * Aceasta înclude **constructorii, parametrii metodelor** și **tipurile de returnare**
- **Nu** vă încălcați  **implementările interfețelor** prin adăugarea în clasa concretă a **mai multror metode publice** decât cele definite deja în interfață 
- Asigurați-vă că **nu sunt câmpuri publice** nicăieri în codul dvs. 

# Descriere

Sarcina conține interfețe gata - implementați funcționalitatea acestora în **clasele corecte**.

Există **patru** tipuri de entități în aplicație: **Dwarf, Present, Workshop, Instrument**. 

Ar trebui să existe un  **DwarfRepository**, precum și un **PresentRepository**.

# BaseDwarf

**BaseDwarf** este  **o clasă de bază** pentru fiecare **type of Dwarf** și aceasta  **nu ar trebui să poată fi instanțiată**.

## Data:

- **name - String**
  * dacă numele e **null or whitespace**, aruncați `NullPointerException` cu mesajul: 
  "**Dwarf name cannot be null or empty.**"
  * toate numele vor fi **unice**

- **energy - int**
  * energia unui pitic 
  * dacă energia  **inițială** este de sub 0, aruncați `IllegalArgumentException` cu mesajul:
  "**Cannot create a Dwarf with negative energy!**"

- **instruments - Collection** \<**Instrument**\>
  * colecția de instrumente a unui pitic

## Constructor:

A **BaseDwarf** ar trebui să ia următoarele valori la inițializare:

- **(String name, int energy)**


## Behavior:

- `void work()`
  * metoda **work()** metoda scade energia unui pitic cu 10 unități
  * energia unui pitic trebuie să **nu** scadă **sub 0** (dacă energia devine mai puțină de 0, o setați la 0) 

- `void addInstrument(Instrument instrument)` 
  * această metodă **adaugă** un **instrument** la **colecția** de instrumente a piticului

- `boolean canWork()`
  * returnează **true**, în cazul în care energia curentă a piticului este **mai mare** decât **0** și 
  * **false** în cazul contrar.


## Child classes:

Sunt două tipuri de **BaseDwarf**:

### Happy

Unități inițiale de **energy**: **100**

Constructorul ar trebui să ia următoarele valori la inițializare:

- **(String name)**

### Sleepy

Unități inițiale de **energy**: **50**

Metoda **work()** **scade**  suplimentar energia priticului cu **5 unități**.

Constructorul ar trebui să ia următoarele valori la inițializare:

- **(String name)**

# InstrumentImpl

**InstrumentImpl** este clasa care reprezintă unealta pe care o folosește un **Dwarf** pentru a crea un **Present**.

**Această clasă** oferă opțiunea de a fi **instanțiată**.

## Date

- **power - int**

  * puterea unei unelte
  * Dacă puterea **initial** este de sub **0**, aruncați `IllegalArgumentException` cu mesajul:
  "**Cannot create an Instrument with negative power!**"

## Constructor

 **InstrumentImpl** ar trebui să ia următoarele valori la inițializare:

- **(int power)**

## Behavior 

- `void use()`
  * metoda  **use()**  **scade**  **puterea** uneltei cu **10**
  * puterea unei unelte ar trebui să **nu** scadă **sub 0** 
  * dacă puterea devine mai puțuină decât 0, o setați la 0

- `boolean isBroken()` 
  * această metodă returnează **true** atunci când **power** devine egal cu **0**

# PresentImpl

Aceasta este clasa care deține informațiile despre  **Present** la care lucrează un **Dwarf**.

**Aceasta ar trebui** să poată fi **inițializată**.

## Date

- **name - String**
  * dacă numele **este null or whitespace**, **aruncați NullPointerException** cu mesajul
: 
  "**Present name cannot be null or empty.**"

- **energyRequired - int**
  * energia necesară pentru crearea unui cadou 
  * dacă energia **inițială** este sub **0**, aruncați `IllegalArgumentException` cu mesajul
:
  "**Cannot create a Present requiring negative energy!**"

## Constructor 

 **PresentImpl** ar trebui să ia următoarele valori la inițializare: 

- **(String name, int energyRequired)**

## Behavior

- `void getCrafted()`
  *  **getCrafted() scade** energia necesară pentru un cadou cu **10 unități**
  * energia necesară pentru un cadou ar trebui să **nu** scadă **sub 0**

- `boolean isDone()`
  * metoda **isDone()** returnează **true**, în cazul în care  **energyRequired** ajunge la **0**.

# WorkshopImpl

Clasa **WorkshopImpl** deține acțiunea principală, care este metoda **craft**.

## Behavior

- `void craft(Present present, Dwarf dwarf)`

Metoda **craft** funcționează în felul următor:

- Piticul începe să creeze cadoul
    * aceasta este posibilă doar în cazul în care piticul are energie și unealta sa nu este stricată

- Continuați munca **până când** cadoul este **gata** și în timp ce piticului îi rămâne **energie**  (și **unelte** de utilizat)

- La un moment dat, **puterea** uneltei curente **ajunge la** 0 sau **scade sub 0**, ceea ce înseamnă că e **stricată**. Atunci piticul trebuie să ia **următoarea unealtă** din colecția sa, dacă are **niște unelte rămase**

# DwarfRepository

**DwarfRepository** este repozitoriul pentru piticii care lucrează la atelierul lui Moș Crăciun.

## Data

- **dwarfs** - a **collection** of **dwarfs**

## Behavior

- `void add(Dwarf dwarf)`
  - **adaugă** un pitic la colecție
  - fiecare pitic este **unic**. Nu vor exista pitici cu nume repetitive

- `boolean remove(Dwarf dwarf)`
  * **elimină** un pitic din colecție
  * returnează **true** în cazul unei eliminări **de succes**

- `Dwarf findByName(String name)`
  * returnează **piticul** cu acest **nume**, dacă acesta există 

- `Collection<Dwarf> getModels()`
  * returnează o colecție de pitici  **(unmodifiable)**

# PresentRepository

Acest repozitoriu este un repozitoriu pentru cadourile care urmează a fi făcute.

## Data

- **presents** - a **collection** of **presents**

## Behavior

- `void add(Present present)`
  - **adaugă** un cadou care trebuie făcut
  - fiecare cadou este **unic** . Nu vor fi cadouri cu același nume 

- `boolean remove(Present present)`
  - **elimină** un cadou din colecție
  - **returnează** true, dacă eliminarea a fosr **de succes**

- `Present findByName(String name)`
  - returnează **un cadou** cu acest **nume**, în cazul în care acesta există 
  - Fiecare nume dat va **fi disponibil** în colecție

- `Collection<Present> getModels()`
  - returnează colecția de cadouri (nemodificabilă)



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
