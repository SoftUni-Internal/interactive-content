[slide]

# Access Modifiers


The way to obtain the class modifiers will be:

```java
int modifiers = aClass.getModifiers();
```

It is good to remember that `getModifiers()` method can be called on **constructors**, **fields**, and **methods**.

We can check our modifiers with the following methods:

If we set a variable `name` in our class `Dog`:

``` java
private String name;
```

We can use this syntax:

```java
int modifiers = Dog.class.getModifiers();
Field field = Dog.class.getDeclaredField("name");
System.out.println(Modifier.isPrivate(field.getModifiers()));
```

**Output** will be:

```
true
```

Also, we are able to check if the modifiers are protected, public or static with the following methods:

- `Modifier.isProtected(modifiers)`

- `Modifier.isPublic(modifiers)`

- `Modifier.isStatic(modifiers)`



[/slide]

[slide]

# Creating Arrays via Java Reflection

Lets see how we can create **Arrays** via Reflection:

We may use `Array.newInstance()` method.

Lets make a quick demo in our main class:


``` java 
import java.lang.reflect.Array;
int arr[] = (int[])Array.newInstance(int.class, 5); // a new instance is created using Array.newInstance method.
      Array.set(arr, 0, 2); // We set the values of the array with Array.set() method.
      Array.set(arr, 2, 2);
      Array.set(arr, 1, 9);
      Array.set(arr, 2, 3);
      Array.set(arr, 4, 7);
        System.out.print("The array elements are: ");
        for(int i: arr) {
           System.out.print(i + " ");
      }
   }
}
```

Output will be:

```
The array elements are: 2 9 3 0 7
```


[/slide]

[slide hideTitle]


# Problem: High Quality Mistakes


[/slide]