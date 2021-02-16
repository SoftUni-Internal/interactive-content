# Inheritance

[slide hideTitle]

# What is Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-3-4-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Inheritance is the ability of a class to copy the functions of a parent class.

In JavaScript, **inheritance** can also be called **Delegation Behavior**.

Because the functionality from one object is delegated to another one.

The inheritance in JavaScript is a type of **dependence**.

**Types of Inheritance**

- **Simple** Inheritance
- **Multilevel** Inheritance
- **Hierarchal** Inheritance
- **Multiple** Inheritance
- **Hybrid** Inheritance

[/slide]


[slide hideTitle]

# Simple Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-5-simple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **child** class **inherits** the features of the **parent** class, it is called **Simple inheritance**. 

This type of inheritance is only for **extending** the parent class.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance.png" /]

Here is a basic example:

```js
    class Pet {
        constructor(name) {
            this.name = name;
        }
    }

    class Dog extends Pet {
         constructor(name, breed) {
             super(color);
             this.breed = breed;
          }
    }
```

In this example, we **extended** the **class Pet** with a **class Dog**. 

The **Dog** class will **inherit** all features of the **Pet** class.

[/slide]

[slide hideTitle]

# Multilevel Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-6-multi-level-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **Multilevel inheritance**, the **parent** class is inherited from the **grandchild** one through a **child** class.

The **grandchild** class will obtain the features of the **parent** and the **child** one.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-1.png" /]

Here is an example:

```js
    class Pet {
        constructor(name) {
             this.name = name;
          }
    }

    class Dog extends Pet {
         constructor(name, age) {
             super(name);
             this.age = age;
          }
    }

    class Breed extends Dog {
        constructor(name, age, breed) {
             super(name, age);
             this.breed = breed;
          }
    }
```

In this example, we extended the **Pet** class with a class **Dog**.

After that, we inherited the **Dog** class with the **Breed** one.

The **Breed** class will **obtain** all of the methods that **Dog** and **Pet** classes have.

[/slide]

[slide hideTitle]

# Hierarchical Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-7-hierarchical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **Hierarchical inheritance**, the **classes** are inherited **multiple** times. 

The downside is that if we change something in the **parent** class, we need to change it in all of its **children**.

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-2.png" /]

Here is an example:

```js
    class Pet {
        constructor(name) {
            this.name = name;
         }
    }

    class Dog extends Pet {
         constructor(name, age) {
             super(name);
             this.age = age;
          }
    }

    class Cat extends Pet {
        constructor(name, age) {
            super(name);
            this.age = age;
          }
    }
```

In this example, the **Dog** and the **Cat** classes extend the **Pet** class.

All of them will have the properties and methods that the **Pet** class has.

[/slide]

[slide hideTitle]
# Multiple Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-8-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Multiple Inheritance** is a directly inheriting feature from more than one parent class.

The problem with this type of inheritance comes when there are methods with the same names in both parent classes. 

The compiler will not know which one to prioritize, and the application will fail.

**Multiple Inheritance is not supported in JavaScript.**

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-3.png" /]

[/slide]
