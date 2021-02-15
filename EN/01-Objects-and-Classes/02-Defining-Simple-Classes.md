[slide hideTitle]
# Defining Simple Classes

When defining a class, it contains only those components of a class declaration that are required.

The **obligatory** components are:

- The `class` keyword

- A **name** for the class

- The **body** of the class, between **curly brackets**

Not obligatory, but **credential** components are: 

- Class fields

- Constructor

- Getters and Setters

- Class methods

Each **class**, **field**, **constructor** or **method** is initialized with an **access modifier** in front, which specifies the **accessibility**. 

Тhe **access level** can be **changed** by applying the **access modifier** on it. We will cover this in the next course. 

There is a possibility to generate **automatically** via IntelliJ IDEA **constructors**, **getters**, **setters**, and other most used methods. 

To do so, just use `Right-click + Generate`. 

The short command depends on the operation system of the computer: 

- In Windows and Linux it is `Alt + Insert` 

- In Macintosh it is `Cmd + N`

[/slide]


[slide hideTitle]
# Naming Classes

The class name is with the initial letter capitalized by convention, i.e. **PascalCase naming**. 

The class name should contain descriptive nouns.

Abbreviations are required to be avoided (except widely known, e.g. URL, HTTP, etc.).

```java
public class CompanyEmployee {

}
```

[/slide]


[slide hideTitle]
# Fields

Fields store **values** such as:

- `private String type` 

- `private int age` 

- `private boolean vegetarian`

Fields represent the **state** of an object.

There can be specified as many fields as needed.


```java
public class Animal {
    // fields
    private String type;
    private int age;
    private boolean herbivorous;
}
```

[/slide]


[slide hideTitle]
# Constructor

A special method, executed during object creation, that **sets object's initial state**.

The constructor name is the **same as the name of the class**.

Constructor **can take parameters**, which is used to **initialize fields**.

All classes have **constructor by default**. 

There can be **multiple constructors of the same class**. This helps to instantiate objects in various ways with a different number of arguments.

```java
public class Animal {
    // fields
    private String type;
    private int age;
    private boolean herbivorous;

    // constructors
    public Animal() {

    }
    public Animal(String type) {
        this.type = type;
    }
}
```

[/slide]

[slide hideTitle]
# Getters and Setters

There can be declared getter and setter for each field.

Getter provide **access** to field and read its value. 

Naming convention: `getVariable()`, where `Variable` is **replaced** with name of the variable. 

Since the getter method is **return** type, the data type of the value returned by the method is the same as the field type.

Setter provides field's **change** and updates its value. 

Naming convention: `setVariable()`, where `Variable` is **replaced** with the name of the variable. 

The setter method is **void** type.

```java
public class Animal {
    // field
    private String type;
    . . .
    // getter
    public String getType() {
        return this.type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }
}
```

[/slide]

[slide hideTitle]
# Methods

Methods describe the **behavior** of an object:

- `public void makeSound() { ... }`

They store **executable code** (algorithm) that manipulate state.

```java
class Animal {
    // fields
    private String type;
    private int age;
    private boolean herbivorous;

    // method
    public void makeSound() {
        System.out.println("The animal is making sounds.")
    }
}
```

[/slide]

