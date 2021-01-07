# Generic Methods

[slide]

# Generic Methods

Generic methods are those methods that are written with a **single method declaration** and can be called with **arguments of different types**. 

The **compiler will ensure the correctness** of whichever type is used. 

The main features of the generic methods are:

- Generic methods have a **type parameter** (the diamond operator enclosing the type) before the return type of the method declaration
- Type parameters can be **bounded** (bounds are explained later in the article)
- Generic methods can have **different** type parameters separated by commas in the method signature
- Method body for a generic method is just like a normal method

Let's see the following example:
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
To declare a generic method we have to define a type parameter - `<T>` to the method signature.

In the example above, we have a `genericPrinter(T element)` which have a generic type parameter in its signature - `<T>`.   

The `genericPrinter(T element)` can be called with arguments of different types, `Integer`, `String`, `Double` etc.

We don't need explicitly specify type while calling the method,  **Java compiler** is smart enough to determine the type of variable to be used, this facility is called **type inference**. 


[/slide]

