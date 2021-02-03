[slide hideTitle]
# Problem: Guild
[code-task title="Guild" taskId="ebe69476-a484-4c52-9d12-dd5d26b13854" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Preparation

Download the provided [skeleton](https://mega.nz/file/yQBBmCAY#3yPBdO0qi9r7yhPgRgAMpfLZ6W-2YGGfJLw-J9iER2U).


**Do not** change the **packages**!

**Pay attention to name the package guild, all the classes, their fields, and methods the same way they are presented in the following document. It is also important to keep the project structure as described.**

## Problem description

Your task is to create a repository that stores players by creating the classes described below.

## Player

First, write a Java class `Player` with the following fields:

- `name: String`
- `clazz: String`
- `rank: String – "Trial" by default`
- `description: String – "n/a" by default`

The class **constructor** should receive **name and clazz**. 

You need to create the appropriate **getters and setters**. 

Override the `toString()` method in the following format:

`Player {name}: {clazz}`

`Rank: {rank}`

`Description: {description}`

## Guild

**Next**, write a Java class **Guild** that has a **roster** (a collection which stores **Player** entities). 

All entities inside the repository have the **same**  **fields**. 

Also, the **Guild** class should have those **fields**:

- `name: String`
- `capacity: int`

The class **constructor** should receive **name** and **capacity**, also it should initialize the **roster** with a new instance of the collection.

Implement the following features:

- Method `addPlayer(Player player)` - **adds** an **entity** to the roster **if there is room** for it
- Method `removePlayer(String name)` - removes a player by **given name**, if such **exists**, and **returns boolean**
- Method `promotePlayer(String name)` - **promote** (**set his rank to "Member"**) the **first**  **player** with the **given name**. If the player is **already** a "Member", **do nothing**.
- Method `demotePlayer(String name)` - **demote (set his rank to "Trial")** the first player with the **given** name. If the player is **already** a "Trial", **do nothing**.
- Method `kickPlayersByClass(String clazz)` - removes all the players by the given class and returns **all removed players** from that **class as an array**
- Method `count()` - **returns** the **number** of players
- Method `report()` - **returns** a **String** in the following **format**:

```
Players in the guild: {guildName}:
{Player1}
{Player2}
(...)
```

## Constraints

- The **names** of the players will be **always unique**.
- You will always have a player added before receiving methods manipulating the Guild's players.

## Examples

This is an example of how the **Guild** class is **intended to be used**.

``` java 
package guild;

public class Main {
    public static void main(String[] args) {
        //Initialize the repository (guild)
        Guild guild = new Guild("Weekend Raiders", 20);
        //Initialize entity
        Player player = new Player("Mark", "Rogue");
        //Print player
        System._out_.println(player); //Player Mark: Rogue
        //Rank: Trial
        //Description: n/a

        //Add player
        guild.addPlayer(player);
        System._out_.println(guild.count()); //1
        System._out_.println(guild.removePlayer("Gosho")); //false

        Player firstPlayer = new Player("Pep", "Warrior");
        Player secondPlayer = new Player("Lizzy", "Priest");
        Player thirdPlayer = new Player("Mike", "Rogue");
        Player fourthPlayer = new Player("Marlin", "Mage");

        //Add description to player
        secondPlayer.setDescription("Best healer EU");

        //Add players
        guild.addPlayer(firstPlayer);
        guild.addPlayer(secondPlayer);
        guild.addPlayer(thirdPlayer);
        guild.addPlayer(fourthPlayer);

        //Promote player
        guild.promotePlayer("Lizzy");

        //Remove Player
        System._out_.println(guild.removePlayer("Pep")); //true

        Player[] kickedPlayers = guild.kickPlayersByClass("Rogue");
        for (Player kickedPlayer : kickedPlayers) {
            System._out_.print(kickedPlayer.getName() + " ");
        }
        //Mark Mike

        System._out_.println(guild.report());
        //Players in the guild: Weekend Raiders:
        //Player Lizzy: Priest
        //Rank: Member
        //Description: Best healer EU
        //Player Marlin: Mage
        //Rank: Trial
        //Description: n/a
    }
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T00_1ValidateTypesExist \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    @Test
    public void validateTypesExist() \{
        String\[\] classTypesToAssert = new String\[\]\{
                "Guild",
                "Player",
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
        Class playerClazz = getType("Player");
        ExpField\[\] fieldsFirstType = new ExpField\[\]\{
                new ExpField("name"),
                new ExpField("clazz"),
                new ExpField("rank"),
                new ExpField("description"),
        \};

        for (ExpField field : fieldsFirstType) \{
            validateField(playerClazz, field);
        \}


        Class guildClazz = getType("Guild");
        ExpField\[\] fieldsSecondType = new ExpField\[\]\{
                new ExpField("roster"),
                new ExpField("name"),
                new ExpField("capacity"),
        \};

        for (ExpField field : fieldsSecondType) \{
            validateField(guildClazz, field);
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
    private static final String METHOD_NOT_PRESENT_ERROR_MESSAGE = "The method '%s.%s' does not exist(actual methods parameter types: '%s' ;expected - '%s')!";

    private class ExpMethod \{
        String name;
        Class\[\] parameterTypes;

        public ExpMethod(String name, Class... parameterTypes) \{
            this.name = name;
            this.parameterTypes = parameterTypes;
        \}
    \}

    @Test
    public void validatePlayerMethods() \{
        Class playerClazz = getType("Player");

        ExpMethod\[\] playerMethods = new ExpMethod\[\]\{
                new ExpMethod("getName"),
                new ExpMethod("getClazz"),
                new ExpMethod("setRank", String.class),
                new ExpMethod("toString"),
        \};

        for (ExpMethod method : playerMethods) \{
            validateMethod(playerClazz, method);
        \}

        Class guildClazz = getType("Guild");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod("addPlayer", playerClazz),
                new ExpMethod("removePlayer", String.class),
                new ExpMethod("promotePlayer", String.class),
                new ExpMethod("demotePlayer", String.class),
                new ExpMethod("kickPlayersByClass", String.class),
                new ExpMethod("count"),
                new ExpMethod("report"),
        \};

        for (ExpMethod method : methods) \{
            validateMethod(guildClazz, method);
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
import guild.Player;
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Arrays;

public class T01GuildMethods \{
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
        Class playerClazz = getType("Player");
        Class guildClazz = getType("Guild");

        ExpMethod\[\] methods = new ExpMethod\[\]\{
                new ExpMethod(void.class, "addPlayer", playerClazz),
                new ExpMethod(boolean.class, "removePlayer", String.class),
                new ExpMethod(void.class, "promotePlayer", String.class),
                new ExpMethod(void.class, "demotePlayer", String.class),
                new ExpMethod(Player\[\].class, "kickPlayersByClass", String.class),
                new ExpMethod(int.class, "count"),
                new ExpMethod(String.class, "report"),
        \};

        for (ExpMethod method : methods) \{
            validateMethod(guildClazz, method);
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

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T02ValidatePlayerInstance \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validatePlayerInstance() \{
        Object\[\] arguments = new Object\[\]\{"Gumble", "Mage"\};
        Class clazz = getType("Player");
        Object object = createObjectInstance(clazz, arguments);

        Object actualName = getMethodValue(object, clazz, "getName");
        Object actualClazz = getMethodValue(object, clazz, "getClazz");
        Object actualToString = getMethodValue(object, clazz, "toString");

        Object expectedName = "Gumble";
        Object expectedClazz = "Mage";
        Object expectedToString = String.format("Player Gumble: Mage%n" +
                "Rank: Trial%n" +
                "Description: n/a");

        String nameMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "getName", actualName, expectedName);
        String clazzMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "getClazz", actualClazz, expectedClazz);
        String toStringMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, clazz.getName(), "toString", actualToString, expectedToString);

        Assert.assertEquals(nameMessage, expectedName, actualName);
        Assert.assertEquals(clazzMessage, expectedClazz, actualClazz);
        Assert.assertEquals(toStringMessage, expectedToString, actualToString);
    \}

    private Object getMethodValue(Object object, Class clazz, String methodName, Class... parameterTypes) \{
        Method method = getMethod(clazz, methodName, parameterTypes);

        Object methodValue = null;
        if (method != null) \{
            try \{
                methodValue = method.invoke(object);
            \} catch (IllegalAccessException e) \{
            \} catch (InvocationTargetException e) \{
            \}
        \}

        return methodValue;
    \}

    private Object createObjectInstance(Class clazz, Object\[\] arguments) \{
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T03ValidateGuildAddMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateGuildAddMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] guildArguments = new Object\[\]\{"Freshness", 20\};
        Class guild = getType("Guild");
        Object guildObject = createObjectInstance(guild, guildArguments);

        //Create Player object
        Object\[\] PlayerArguments = new Object\[\]\{"Burp", "Rogue"\};
        Class playerClazz = getType("Player");
        Object playerObject = createObjectInstance(playerClazz, PlayerArguments);

        Object expectedCount = 1;

        //Act
        Object\[\] methodArgs = new Object\[\]\{playerObject\};

        getMethodValue(guildObject, guild, "addPlayer", methodArgs, playerClazz);

        Object actualCount = getMethodValue(guildObject, guild, "count", null);

        //Assert
        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guild.getName(), "count", actualCount, expectedCount);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T05ValidateGuildAddMethodWithFilledCapacity \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateGuildAddMethodWithFilledCapacity() \{
        //Arrange
        //Create Guild object
        Object\[\] guildArguments = new Object\[\]\{"Freshness", 1\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, guildArguments);

        //Create Player objects
        Object\[\] playerOneArguments = new Object\[\]\{"Chichi One", "Mage One"\};
        Class playerOneClazz = getType("Player");
        Object playerOneObject = createObjectInstance(playerOneClazz, playerOneArguments);

        Object\[\] playerTwoArguments = new Object\[\]\{"Chichi Two", "Mage Two"\};
        Class playerTwoClazz = getType("Player");
        Object playerTwoObject = createObjectInstance(playerTwoClazz, playerTwoArguments);

        Object expectedCount = 1;

        //Act
        Object\[\] methodOneArgs = new Object\[\]\{playerOneObject\};
        Object\[\] methodTwoArgs = new Object\[\]\{playerTwoObject\};

        getMethodValue(guildObject, guildClazz, "addPlayer", methodOneArgs, playerOneClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", methodTwoArgs, playerTwoClazz);

        Object actualCount = getMethodValue(guildObject, guildClazz, "count", null);

        //Assert
        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "count", actualCount, expectedCount);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T06ValidateGuildRemovePlayerMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateAquariumRemoveMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] aquariumArguments = new Object\[\]\{"Freshness", 10\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, aquariumArguments);

        //Create Player objects
        //Create Player objects
        Object\[\] playerOneArguments = new Object\[\]\{"Chichi", "Mage"\};
        Class playerOneClazz = getType("Player");
        Object playerOneObject = createObjectInstance(playerOneClazz, playerOneArguments);

        Object\[\] playerTwoArguments = new Object\[\]\{"Beauty", "Priest"\};
        Class playerTwoClazz = getType("Player");
        Object playerTwoObject = createObjectInstance(playerTwoClazz, playerTwoArguments);


        Object expectedCount = 1;
        Object expectedIsRemoved = true;

        //Act
        Object\[\] methodOneArgs = new Object\[\]\{playerOneObject\};
        Object\[\] methodTwoArgs = new Object\[\]\{playerTwoObject\};

        getMethodValue(guildObject, guildClazz, "addPlayer", methodOneArgs, playerOneClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", methodTwoArgs, playerTwoClazz);

        Object actualIsRemoved =
                getMethodValue(guildObject, guildClazz, "removePlayer", new Object\[\]\{"Chichi"\}, String.class);

        Object actualCount = getMethodValue(guildObject, guildClazz, "count", null);

        // Assert
        String isRemovedMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "removePlayer", actualIsRemoved, expectedIsRemoved);
        Assert.assertEquals(isRemovedMessage, expectedIsRemoved, actualIsRemoved);

        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "count", actualCount, expectedCount);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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
import guild.Player;
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

public class T07ValidateGuildKickByClassMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateAquariumRemoveMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] aquariumArguments = new Object\[\]\{"Freshness", 10\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, aquariumArguments);

        //Create Player objects
        Object\[\] playerOneArguments = new Object\[\]\{"Chichi", "Mage"\};
        Class playerOneClazz = getType("Player");
        Object playerOneObject = createObjectInstance(playerOneClazz, playerOneArguments);

        Object\[\] playerTwoArguments = new Object\[\]\{"Beautys", "Mage"\};
        Class playerTwoClazz = getType("Player");
        Object playerTwoObject = createObjectInstance(playerTwoClazz, playerTwoArguments);

        Object\[\] playerThreeArguments = new Object\[\]\{"Beauty", "Priest"\};
        Class playerThreeClazz = getType("Player");
        Object playerThreeObject = createObjectInstance(playerTwoClazz, playerThreeArguments);

        Object expectedCount = 1;
        Object\[\] expectedResult = new Player\[\]\{(Player) playerOneObject, (Player) playerTwoObject\};

        //Act
        Object\[\] methodOneArgs = new Object\[\]\{playerOneObject\};
        Object\[\] methodTwoArgs = new Object\[\]\{playerTwoObject\};
        Object\[\] methodThreeArgs = new Object\[\]\{playerThreeObject\};

        getMethodValue(guildObject, guildClazz, "addPlayer", methodOneArgs, playerOneClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", methodTwoArgs, playerTwoClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", methodThreeArgs, playerThreeClazz);

        Object actualIsRemoved =
                getMethodValue(guildObject, guildClazz, "kickPlayersByClass", new Object\[\]\{"Mage"\}, String.class);

        Object actualCount = getMethodValue(guildObject, guildClazz, "count", null);

        // Assert
        String isRemovedMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "kickPlayersByClass", actualIsRemoved, expectedResult);
        Assert.assertArrayEquals(isRemovedMessage, expectedResult, (Object\[\]) actualIsRemoved);

        String countMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "count", actualCount, expectedCount);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T08ValidateGuildPromotePlayerMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateGuildPromotePlayerMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] guildArguments = new Object\[\]\{"Freshness", 20\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, guildArguments);

        //Create Player object
        Object\[\] PlayerArguments = new Object\[\]\{"Chichi", "Mage"\};
        Class playerClazz = getType("Player");
        Object playerObject = createObjectInstance(playerClazz, PlayerArguments);

        Object expectedtoString = String.format("Player Chichi: Mage%n" +
                "Rank: Member%n" +
                "Description: n/a");

        //Act
        Object\[\] methodOneArgs = new Object\[\]\{playerObject\};
        getMethodValue(guildObject, guildClazz, "addPlayer", methodOneArgs, playerClazz);

        getMethodValue(guildObject, guildClazz, "promotePlayer", new Object\[\] \{"Chichi"\}, String.class);

        Object actualToString = getMethodValue(playerObject, playerClazz, "toString", null).toString();

        //Assert
        String toStringMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "toString", actualToString, expectedtoString);
        Assert.assertEquals(toStringMessage, expectedtoString, actualToString);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T09ValidateGuildDemotePlayerMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateGuildPromotePlayerMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] guildArguments = new Object\[\]\{"Freshness", 20\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, guildArguments);

        //Create Player object
        Object\[\] PlayerArguments = new Object\[\]\{"Chichi", "Mage"\};
        Class playerClazz = getType("Player");
        Object playerObject = createObjectInstance(playerClazz, PlayerArguments);

        Object expectedToString = String.format("Player Chichi: Mage%n" +
                "Rank: Trial%n" +
                "Description: n/a");

        //Act
        Object\[\] methodOneArgs = new Object\[\]\{playerObject\};
        getMethodValue(guildObject, guildClazz, "addPlayer", methodOneArgs, playerClazz);

        getMethodValue(guildObject, guildClazz, "promotePlayer", new Object\[\]\{"Chichi"\}, String.class);
        getMethodValue(guildObject, guildClazz, "demotePlayer", new Object\[\]\{"Chichi"\}, String.class);

        Object actualToString = getMethodValue(playerObject, playerClazz, "toString", null).toString();

        //Assert
        String toStringMessage = String.format(METHOD_INCORRECT_RETURN_VALUE, guildClazz.getName(), "toString", actualToString, expectedToString);
        Assert.assertEquals(toStringMessage, expectedToString, actualToString);
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
        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        Constructor ctor = null;
        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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

public class T10ValidateGuildReportMethod \{
    private static final String METHOD_INCORRECT_RETURN_VALUE = "The method '%s.%s' returns invalid data (actual result: '%s'; expected - '%s')!";

    @Test
    public void validateAquariumReportMethod() \{
        //Arrange
        //Create Guild object
        Object\[\] aquariumArguments = new Object\[\]\{"Freshness", 10\};
        Class guildClazz = getType("Guild");
        Object guildObject = createObjectInstance(guildClazz, aquariumArguments);

        //Create Player objects
        Object\[\] playerOneArguments = new Object\[\]\{"Chichi", "Mage"\};
        Class playerOneClazz = getType("Player");
        Object playerOneObject = createObjectInstance(playerOneClazz, playerOneArguments);

        Object\[\] playerTwoArguments = new Object\[\]\{"Beauty", "Rogue"\};
        Class playerTwoClazz = getType("Player");
        Object playerTwoObject = createObjectInstance(playerTwoClazz, playerTwoArguments);

        Object\[\] playerThreeArguments = new Object\[\]\{"Beautys", "Priest"\};
        Class playerThreeClazz = getType("Player");
        Object playerThreeObject = createObjectInstance(playerThreeClazz, playerThreeArguments);

        Object expectedReport = String.format(
                "Players in the guild: Freshness:%n" +
                        "Player Chichi: Mage%n" +
                        "Rank: Trial%n" +
                        "Description: n/a%n" +
                        "Player Beauty: Rogue%n" +
                        "Rank: Trial%n" +
                        "Description: n/a%n" +
                        "Player Beautys: Priest%n" +
                        "Rank: Trial%n" +
                        "Description: n/a");

        // Act
        // Invoke methods
        // add Fish to Aquarium
        getMethodValue(guildObject, guildClazz, "addPlayer", new Object\[\]\{playerOneObject\}, playerOneClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", new Object\[\]\{playerTwoObject\}, playerOneClazz);
        getMethodValue(guildObject, guildClazz, "addPlayer", new Object\[\]\{playerThreeObject\}, playerOneClazz);

        String actualReport =
                getMethodValue(guildObject, guildClazz, "report", null).toString().trim();


        // Assert
        String reportMessage = String.format(METHOD_INCORRECT_RETURN_VALUE,
                guildClazz.getName(),
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

        Class\[\] argumentTypes = Arrays.stream(arguments).map(Object::getClass).toArray(Class\[\]::new);

        try \{
            ctor = clazz.getConstructor(argumentTypes);
        \} catch (NoSuchMethodException e) \{
            mapIntegerToInt(argumentTypes);

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