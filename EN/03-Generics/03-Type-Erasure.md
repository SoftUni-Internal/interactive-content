# Type Erasure

[slide]

# Type Erasure

Another important term in java generics is **type erasure**.

To implement generic behaviour, java compiler applies type erasure. 

Type erasure is a process in which compiler replaces a generic parameter with an actual class or bridge method.

In type erasure, the compiler ensures that no extra classes are created and there is no runtime overhead.

How the type erasure works:

- Replace type parameters in generic type with their bound if **bounded** type parameters are used.

- Replace type parameters in generic type with Object if **unbounded** type parameters are used

- Insert type casts to preserve type safety.

- Generate bridge methods to keep polymorphism in extended generic types.

Let's see the following example:

```java live 
List<String> strings = new ArrayList<>();

// True
System.out.println(strings instanceof List);

// Compile Time Error
System.out.println(strings instanceof List<String>);
```

Upon compilation, the compiler deletes all angle bracket syntax and, for that reason, the Compile Time Error occurs in an attempt to check whether the **strings** is an instanceOf `List<Strings>`.

The compiler adds type casts for us (presented in byte-code).


[/slide]