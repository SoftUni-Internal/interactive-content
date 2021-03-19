# Inheritance

[slide hideTitle]

# Types of Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-3-4-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Inheritance is the ability of a class to copy the functions of a parent class.

In JavaScript, **inheritance** can also be called **Delegation Behavior**.

- Because the functionality from one object is delegated to another one

Inheritance in JavaScript is a type of **dependency**.

**These are the five types of inheritance:**

- **Simple** inheritance
- **Multilevel** inheritance
- **Hierarchal** inheritance
- **Multiple** inheritance
- **Hybrid** inheritance

[/slide]


[slide hideTitle]

# Simple Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-5-simple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **child** class **inherits** the features of the **parent** class.

It is called **simple inheritance**. 

This type of inheritance is only used for **extending** the parent class.

Here is a basic **example**:

```js live
class Pet {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log('wuf wuf')
    }
}

const dog = new Dog()
dog.bark()
```

In this example, we **extended** the **class Pet** with a **class Dog**. 

The **Dog** class will **inherit** all features of the **Pet** class.

[/slide]

[slide hideTitle]

# Multilevel Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-6-multi-level-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **multilevel inheritance**, the **parent** class is inherited from the **grandchild** class through a **child** class.

The **grandchild** class will obtain the features of the **parent** and the **child** classes.

Here is an **example**:

```js live
class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Brand extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
}

class Ferrari extends Brand {
    constructor(type, brand, model) {
        super(type, brand);
        this.model = model;
    }

    print() {
        console.log(`${this.type} - ${this.brand} - ${this.model}`)
    }
}

const ferrari = new Ferrari('Supercar', 'Ferrari', '488 GTB')
ferrari.print()
```

In this example, we extended the **Vehicle** class with a class **Brand**.

After that, we inherited the **Ferrari** class with the **Brand** one.

The **Ferrari** class will **obtain** all of the methods that **Brand** and **Vehicle** classes have.

[/slide]

[slide hideTitle]

# Hierarchical Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-7-hierarchical-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **hierarchical inheritance**, multiple classes **inherit the traits** of a **single class**.

The downside is that if we change something in the **parent** class, we need to change it in all of its **children**.

Here is an **example**:

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

In this example, the **Dog** and the **Cat** classes inherit the **Pet** class.

All of them will have the properties and methods that the **Pet** class has.

[/slide]

[slide hideTitle]
# Multiple Inheritance

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/EN/interactive-javascript-advanced-prototypes-and-inheritance-8-multiple-inheritance-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Multiple inheritance** is a directly inheriting feature from more than one parent class.

The problem with this type of inheritance comes when there are methods with the same names in both parent classes. 

The compiler will not know which one to prioritize, and the application will fail.

**JavaScript does not support multiple inheritance.**

[/slide]
