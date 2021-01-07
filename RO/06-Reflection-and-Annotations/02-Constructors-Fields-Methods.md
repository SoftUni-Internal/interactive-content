[slide]


# Constructors, Fields and Methods

Now, lets see how we can obtain a Constructor Objects.

We can use the **constructor class** that provides us the following methods for this purpose:

```java
Constructor[] ctors = aClass.getConstructors();
// This method allows us to only public constructors that are declared in our class and its superclass
```

If we want to obtain all declared constructors we can use `getDeclaredConstructors()` method:

``` java
Constructor[] ctors = aClass.getDeclaredConstructors();
```

Also, we can obtain a following constructor by his parameters:

```java
Constructor ctor = aClass.getConstructor(String.class);
```

Now, lets try to instantiate objects using our Constructor Object:

``` java
Constructor constructor = MyObject.class.getConstructor(String.class);
MyObject myObject = (MyObject)
        constructor.newInstance("arg1");
```

The `newInstance()` method takes an optional amount of parameters.

We must supply exact one parameter per argument in the constructor which we are invoking.

Like in this case - It was a constructor taking `String`, so we supplied one `String`.



[/slide]

[slide]

# Fields Name and Type

Analogically to the way we obtain constructors, we can obtain **class members**.

Lets see how we can obtain all **public** fields:

``` java
Field field = aClass.getField("fieldname");
Field[] fields = aClass.getFields();
```

We can use `getDeclaredFields()` to obtain **all** fields:

``` java
Field[] fields = aClass.getDeclaredFields();
```

There is also a way to obtain our field names and types:

``` java
String fieldName = field.getName();
Object fieldType = field.getType();
```

Lets discuss now, how we can setting value for a field via Reflection

``` java
Field field = targetClass.getDeclaredField(fieldName);
field.setAccessible(true); // We need to change the behavior of the AccessibleObject
field.set(object, value); // The object parameter passed to the get and set method should be an instance of the class that owns the field.
```

We can also obtain methods with parameters and return type:

```java
Method method = myObject.class.getMethod("methodName", String.class);
Object returnValue = method.invoke(null, "arg1"); // We use null for static methods
```



[/slide]

[slide hideTitle]
# Problem: Getters and Setters
[code-task title="Problem: Getters and Setters" taskId="f876a19c-8018-49fd-9a79-ae6785133708" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
## Description
Using reflection to get all **Reflection** methods. 

Then prepare an algorithm that will recognize, which methods are **getters** and **setters**. 

Sort each collection **alphabetically** by methods names. 

Print to console each **getter** on new line in format:
- "**{name} will return class {Return Type}**"

Then print all setters in format:
- "**{name} and will set field of class {Parameter Type}**"

**Do this without changing anything in "Reflection.java"**

[/task-description]
[code-io /]
[tests]
[test]
[input]
Blank Test
[/input]
[output]
getEmail will return class java.lang.String
getName will return class java.lang.String
getWebAddress will return class java.lang.String
getZip will return class int
setEmail and will set field of class java.lang.String
setName and will set field of class java.lang.String
setWebAddress and will set field of class java.lang.String
setZip and will set field of class int
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Getters and Setters

[/slide]