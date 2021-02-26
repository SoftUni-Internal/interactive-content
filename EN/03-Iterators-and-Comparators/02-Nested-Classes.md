# Nested Classes

[slide hideTitle]

# Nested Classes

In Java, it is also possible to **nest classes** (a class within a class).

The purpose of nested classes is to **group classes that belong together**, which makes the code more maintainable.

- **Example** of a nested class:

```java live
class OuterClass {
    int x = 10;

    class InnerClass {
        int y = 5;
    }

    public static void main(String[] args) {
        OuterClass myOuter = new OuterClass();
        OuterClass.InnerClass myInner = myOuter.new InnerClass();
        System.out.println(myInner.y + myOuter.x);
    }
}
``` 

[/slide]
