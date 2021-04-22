[slide hideTitle]

# Access Modifiers

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-24-25-access-modifiers-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To obtain the class modifiers, we use the `getModifiers()` method.

```java
int modifiers = aClass.getModifiers();
```

The `getModifiers()` method can be called on **constructors**, **fields**, and **methods**.

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

The **output** will be:

```
true
```

Also, we can **check** if the modifiers are **protected, public or static** with the following **methods**:

- `Modifier.isProtected(modifiers)`

- `Modifier.isPublic(modifiers)`

- `Modifier.isStatic(modifiers)`



[/slide]

[slide hideTitle]

# Arrays

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-26-arrays-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us see how we can create **Arrays** via Reflection:

We can use the `Array.newInstance()` method.

Let us see a quick demo in our main class:


``` java 
import java.lang.reflect.Array;

public class Main {
    public static void main(String[] args) {

        int arr[] = (int[])Array.newInstance(int.class, 5);
        // A new instance is created using the Array.newInstance method.
        
        Array.set(arr, 0, 2); 
        // We set the values of the array with the Array.set() method.
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

The **output** will be:

```
The array elements are: 2 9 3 0 7
```


[/slide]

[slide hideTitle]
# Problem with Solution: High-Quality Mistakes

[code-task title="High Quality Mistakes" taskId="Java-OOP-Advanced-Reflection-High-Quality-Mistakes" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[code-upload allowedMemory="30" /]
[task-description]
# Description

You are already an expert in writing **high-quality code**, so you know what kind of **access modifiers** must be set to the members of a class. 

You have to check the code in the Reflection class. 

Check all **fields and access modifiers for the methods**. 


Sort each category of members **alphabetically**. 

Print all mistakes to the console in the following **format**:

- Fields:

"\{**fieldName**\} **must be private!**"

- Getters:

"\{**methodName**\} **must be public!**"

- Setters:

"\{**methodName**\} **must be private!**"


[/task-description]
[tests]
[test]
[input]
Blank Test
[/input]
[output]
email must be private!
name must be private!
webAddress must be private!
getWebAddress must be public!
getZip must be public!
setEmail must be private!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

