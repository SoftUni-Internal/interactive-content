# Inheritance

[slide]
# What is Inheritance

**Inheritance** in JavaScript is the ability of an object to **delegate** some or all of its functionality to another. It is a type of **dependence**.

## Types of Inheritance

The types of Inheritance are:

-  **Simple** Inheritance
-  **Multilevel** Inheritance
-  **Hierarchal** Inheritance
-  **Multiple** Inheritance
-  **Hybrid** Inheritance

[/slide]

[slide]
# Types of Inheritance

## Simple Inheritance

**Simple inheritance** is when a **child** class **inherits** the **parent** class features. This type is just **extending** the parent class.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance.png" /]

Here is a basic example:

```js
class pet {}

class dog extends pet {}
```

In this example, we **extended** the **class pet** with a **class dog**. The **dog class** will **inherit** all of the features that the **class pet** has.

## Multilevel Inheritance

In **Multilevel inheritance**, we inherited the **main** class through a class in the **middle**, and we also obtain its features. So we will extend the **parent** and the **grandparent** classes.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance(2).png" /]

Here is an example:

```js
class pet {}

class dog extends pet {}

class breed extends dog {}
```

In this example, we extended the **pet class** with a **class dog**, and after that, we inherited the **breed class** from the **dog** one. The breed class will **obtain** all of the methods that dog and pet classes have.

## Hierarchical Inheritance

In **Hierarchical inheritance**, we have **classes** that are extended **multiple** times. The downside is that if we change something in the **parent** class, we need to change it in all of its **children**.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance(3).png" /]

Here is an example:

```js
class pet {}

class breed1 extends pet {}

class breed2 extends pet {}

class breed3 extends pet {}
```

In this example, we extended the **pet class** with **breed1**, **breed2** and **breed3**. All of them will have the feature that **pet** has.

## Multiple Inheritance

**Multiple Inheritance** is when we want to inherit **many** parent classes to **one** child.

This is not supported in Javascript.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance(4).png" /]

[/slide]
