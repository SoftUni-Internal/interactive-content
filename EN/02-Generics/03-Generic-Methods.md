# Generic Methods

[slide hideTitle]

# Generic Methods

Generic methods are those methods that are written with a **single method declaration** and can be called with **arguments of different types**. 

The **compiler will ensure the correctness** of whichever type is used. 

The main features of the generic methods are:

- Generic methods have a **type parameter** (enclosed in diamond brackets) before the return type of the method declaration
- Type parameters can be **bounded** (bounds are explained later in the lesson)
- Generic methods can have **different** type parameters separated by commas in the method signature
- Method body for a generic method is just like a normal method

Let us see the following example:

```java live no-template
public class Main {

    static <T> void genericPrinter(T element) {
        System.out.println(element);
    }

    public static void main(String[] args) {

        genericPrinter(5); // Integer
        genericPrinter("SoftUni"); // String
        genericPrinter(1.5);  // Double
    }
}
```
To declare a generic method we have to define a type parameter - `<T>` in the method signature.

In the example above, we have a `genericPrinter(T element)` which has a generic type parameter in its signature - `<T>`.

The `genericPrinter(T element)` can be called with arguments of different types, "**Integer**", "**String**", "**Double**", etc.

We do not need to **explicitly specify** a type while calling the method, the **Java compiler** will determine the type of variable to be used, this feature is called **type inference**. 

[/slide]

