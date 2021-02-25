# Type Parameter Bounds

[slide hideTitle]

# Type Parameter Bounds

In case you want to **restrict** the types that can be used as type arguments in a parameterized type, you have to use **bounded type parameters**.

Let us explain the need for type parameters bоunds with the following example:

```java
public class PowerOfThree<T>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
The code above will produce a compile-time error - `The method intValue() is undefined for the type T`.

The error occurs as there is no way for the compiler to know type `T` will always be used for numeric classes.

We need a bounded type to restrict the types that can be used for a parameterized type.

To declare a bounded type parameter, list the type parameter's name, followed by the `extends` keyword, followed by its **upper bound**.

In our case, that will be a `Number` class.

```java
T extends Number
```

The above code should look like this:

```java
public class PowerOfThree<T extends Number>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
Let us explain what the code does.

The type parameter `T` extends Number to restrict the type of objects that can be used in the parameterized type.

The `Number` is a superclass of all numeric classes, such as `Integer`, `Float` and `Double`.

So, if we try to use another class which is **not a subclass of Number**, the compiler will throw a compile-time error.


[/slide]

[slide hideTitle]

# Problem with Solution: Generic Scale

[code-task title="Generic Scale" taskId="oop-basics-java-generics-lab-Generic-Scale" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Java - Unit Testing Strategy needed
    }
}
```
[/code-editor]
[task-description]
## Description
Create a class `Scale<T>` that holds two elements - **left** and **right**. 

The scale should receive the elements through its single constructor:

- `Scale(T left, T right)`

The scale should have a single method: 

- `T getHeavier()`

The **greater of the two elements is heavier**. 

The method should return `null` if elements are **equal**.



# Example

```java
Scale<String> stringScale = new Scale<>("a", "c");
System.out.println(stringScale.getHeavier());

Scale<Integer> integerScale = new Scale<>(1, 2);
System.out.println(integerScale.getHeavier());
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
Unit tests!
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problem with Solution: List Utilities

[code-task title="List Utilities" taskId="oop-basics-java-generics-lab-List-Utilities" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Java - Unit Testing Strategy needed
    }
}
```
[/code-editor]
[task-description]
## Description
Create a class `ListUtils` that you will use through several other exercises.

The class should have two static methods:

- `T getMin(List<T> list)`

- `T getMax(List<T> list)`

The methods should throw `IllegalArgumentException` if an empty list is passed.

# Example

```java
List<Integer> integers = new ArrayList<>();
Collections.addAll(integers, 1, 2, 18, 2, -1);

Integer maxInteger = ListUtils.getMax(integers);

List<String> string = new ArrayList<>();
Collection.addAll(strings, "a", "b", "c");

Integer minString = ListUtils.getMin(strings);
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
Unit tests!
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Type Parameters Relationships

**Generics** are **invariant** - subtypes and supertypes are **not replaceable**.

**Example:**

```java
List<Object> objects = new ArrayList<>();
List<Animal> animals = new ArrayList<>();
objects = animals; 
```

Assigning the `animals` data structure to `objects` will result in a compile-time error.

[/slide]
