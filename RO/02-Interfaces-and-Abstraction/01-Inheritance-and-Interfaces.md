[slide hideTitle]

# Inheritance and Interfaces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-3-inheritance-and-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Inheritance** and **interfaces** are two other major concepts in **object-oriented** programming.

**Inheritance** allows classes to **inherit data and functionality** from a **parent class** (also called a **base class**).

When a class inherits another class, the **parent class fields** are merged with the **child class fields**, and they form the **set of data fields** for the child class.

**Interfaces** define abstract actions.

- These are actions to be **implemented in the descendent classes**

- Interfaces define a **set of empty (or abstract) methods** (or actions) which shall be obligatory implemented in the child classes

- Interfaces are also called **contracts** because they define a distinct set of functionalities, a contract to implement given methods

We use **abstract** classes to model abstractions.

- An abstract class allows you to create functionality that subclasses can **implement** or **override**

- Abstract classes are similar to interfaces

- You cannot instantiate them, and they may contain a mix of **methods** declared with or without an implementation

- For example, the **Figure** class is not a concrete figure like square or rectangle, but the concept or the abstraction of a **figure**

- Abstract classes defines **data + actions** (or normal methods) + **abstract actions** (or empty methods)

- Abstract classes are **designed to be inherited** (or extended)

`Concrete` classes like **Circle** and **Rectangle** represent **real** entities, not abstractions.

- Concrete classes define **data fields** + **concrete functionality** (methods)

- They can **implement interfaces** and **inherit abstract** and other classes

[/slide]

[slide hideTitle]
# Example: Abstract Classes and Concrete Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-4-inheritance-and-interfaces-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Interfaces-and-Abstraction-example.png" /]

In this example we demonstrate **abstract** classes and **concrete** classes.

This is an example of an abstract class, which models an abstraction **"Figure"**.

- It defines two data **fields**: `x` and `y`

- It also defines an **abstract action** (or method) for calculating the area of the figure

- This method is **empty** (or **abstract**), because it is specific to the concrete figure, like **"circle"** or **"rectangle"**

- In the child (or descendent) classes, this abstract action **will become concrete**
	* it will hold the code to calculate a circle area or rectangle area depending on the concrete figure

- This abstract class models the generic **abstraction "Figure"** and **child classes** will determine the type of the figure

 The **child class "Circle**" is a class, which inherits properties from the **abstract** class "Figure"

- This way, the child class **has three fields**: two inherited from the parent class and one defined additionally

- It **inherits** the fields **"x"** and **"y"** from "Figure" and appends an additional field **"radius"**

- The class **Circle** defines a **concrete implementation** of the abstract method **"calcArea"**, which calculates the circle area using the well-known formula from school level mathematics

The **child class "Rectangle"** inherits the properties from the **base class "Figure"**.

- The **"Rectangle"** class defines two additional fields: **width** and **height**

- It provides a different concrete implementation of the **"calcArea"** abstract method, which calculates the rectangle area

[/slide]
