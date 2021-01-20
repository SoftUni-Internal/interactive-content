# Inheritance

[slide hideTitle]

# What is Inheritance

**Inheritance** in JavaScript is the ability of an object to **delegate** some or all of its functionality to another. 

It is a type of **dependence**.

## Types of Inheritance

-  **Simple** Inheritance
-  **Multilevel** Inheritance
-  **Hierarchal** Inheritance
-  **Multiple** Inheritance
-  **Hybrid** Inheritance

[/slide]


[slide hideTitle]

# Simple Inheritance

**Simple inheritance** is when a **child** class **inherits** the features of the **parent** class. This type of inheritance is when you are only **extending** the parent class.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance.png" /]

Here is a basic example:

```js
class Pet {}

class Dog extends Pet {}
```

In this example, we **extended** the **class Pet** with a **class Dog**. 

The **Dog class** will **inherit** all of the features that the **class Pet** has.

[/slide]

[slide hideTitle]

# Multilevel Inheritance

In **Multilevel inheritance**, we inherit the **main** class through another class in the **middle**, and we also obtain its features. 

So we will extend the **parent** and the **grandparent** classes.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-(2).png" /]

Here is an example:

```js
class Pet {}

class Dog extends Pet {}

class Breed extends Dog {}
```

In this example, we extended the **pet class** with a **class dog**, and after that, we inherited the **breed class** from the **dog** one. 

The breed class will **obtain** all of the methods that dog and pet classes have.

[/slide]

[slide hideTitle]
# Hierarchical Inheritance

In **Hierarchical inheritance**, we have **classes** that are extended **multiple** times. 

The downside is that if we change something in the **parent** class, we need to change it in all of its **children**.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-(3).png" /]

Here is an example:

```js
class Pet {}

class Breed1 extends Pet {}

class Breed2 extends Pet {}

class Breed3 extends Pet {}
```

In this example, we extended the **Pet class** with **Breed1**, **Breed2** and **Breed3**. 

All of them will have the properties and methods of **Pet**.

[/slide]

[slide hideTitle]
# Multiple Inheritance

We have **Multiple Inheritance** when we are directly inheriting from more than one parent class.

This is not supported in JavaScript.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-(4).png" /]

[/slide]
