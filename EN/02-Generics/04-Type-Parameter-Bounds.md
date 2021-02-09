# Type Parameter Bounds

[slide]

# Type Parameter Bounds

In case, you want to **restrict** the types that can be used as type arguments in a parameterized type, you have to use bounded type parameters.

Let's explain the need for type parameters bоunds with the following example:
```java
public class PowerOfThree<T>  {

    public int powerOf(T number) {
        return number.intValue() * number.intValue() * number.intValue();
    }
}
```
The code above will produce compile-time-error - "The method intValue() is undefined for the type T".

The error occurs as there is no way for the compiler to know type `T` will always be used for numeric classes.

So, we need bounded type to restrict the types that can be used for parameterized type.

To declare a bounded type parameter, list the type parameter's name, followed by the `extends` keyword, followed by its **upper bound**.

In our case that will be a Number class.

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
Let's explain what does the code above:

The type parameter `T` extends Number to restrict the type of objects that can be used in the parameterized type.

The `Number` is a superclass of all numeric classes, such as `Integer`, `Float` and `Double`.

So, if we try to use another class which is **not a subclass of Number**, the compiler will throw `compile-time-error`.


[/slide]

[slide]

# Problem: Generic Scale

[code-task title="Problem: Generic Scale" taskId="298eccf5-3f1c-4eca-a299-58012f7ca715" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class `Scale<T>` that holds two elements - left and right. 

The scale should receive the elements through its single constructor:

- Scale(T left, T right)

The scale should have a single method: 

- T getHeavier()

The greater of the two elements is heavier. 

The method should return null if elements are equal.



## Examples
[image assetsSrc="generics-example(4).png" /]

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

[slide]

# Solution: Generic Scale

```java
public class Scale<T extends Comparable<T>> {

    private T left;
    private T right;

    public Scale(T left, T right) {
        this.left = left;
        this.right = right;
    }

    public T getHeavier() {
        if (left.compareTo(right) < 0) {
            return right;
        }

        if (left.compareTo(right) > 0) {
            return left;
        }

        return null;
    }
}

```
[/slide]


[slide]

# Problem: List Utilities

[code-task title="Problem: List Utilities" taskId="2fa5d18e-da5d-436e-9860-7b43e847752d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a class **ListUtils** that you will use through several other exercises.

The class should have two static methods:

- `T getMin(List<T> list)`

- `T getMax(List<T> list)`

The methods should throw `IllegalArgumentException` if an empty list is passed.




## Examples
[image assetsSrc="generics-example(5).png" /]

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


[slide]

# Solution: List Utilities

```java
public class ListUtils {

    public static <T extends Comparable<T>> T getMax(List<T> list){
        if(list.size() == 0){
            throw new IllegalArgumentException();
        }

        T max = list.get(0);

        for (int i = 1; i < list.size() ; i++) {
            if (max.compareTo(list.get(i)) < 0){
                max = list.get(i);
            }
        }
        return max;
    }
    
    public static <T extends Comparable<T>> T getMin(List<T> list){
        if(list.size() == 0){
            throw new IllegalArgumentException();
        }

        T min = list.get(0);

        for (int i = 1; i < list.size() ; i++) {
            if (min.compareTo(list.get(i)) > 0){
                min = list.get(i);
            }
        }
        return min;
    }
}

```
[/slide]