# Fundamental Software Engineering Concepts

[slide]
# Video

[vimeo-video startTimeInSeconds="1671" endTimeInSeconds="7589"]
[stream language="EN" videoId="439144295" default /]
[stream language="RO" videoId="439758279"  /]
[/video-vimeo]

[/slide]

[slide]
# Math Concepts in Software Development

**Simple mathematical concepts** are often needed and applied in software development.

This doesn't mean that software developers should be strong mathematicians, but they should be familiar with the **basic math concepts at school level**.

Developers don't need to prove theorems or solve differential equations, but they need to understand **coordinate systems**, they need to know what a function is, they need to be able to perform **simple calculations**, and they need to have well-developed **algorithmic thinking**, which is like the logical thinking used in math.

**School-level math is enough for most developers**, unless they are involved with computer graphics, machine learning or other math-intensive specialization.

Below are the most important **mathematical concepts** related to programming:

**Coordinate systems** and **graphical objects** with their size, position and other numerical characteristics are used in computer graphics and user interface systems, such as `HTML` and `CSS`, `PDF`, `SVG` and others.

**Mathematical functions**, elements of lambda calculus, discrete functions and other simple mathematical transformations are used by developers when they write code, as part of the functional programming paradigm and some modern architectural approaches like "**serverless computations**".


**Vectors** and **matrices** may be used in graphics, machine learning, and everywhere else.
In fact, developers are using vectors every day, because "**vector**" is the mathematical name of "**arrays and lists**".
"**Matrices**" is the mathematical name of "**tables**" that we know well from spreadsheet and Excel applications.

Finite state **automata** and **state machines** are used in parsers (which extract data from structured text), in process management and workflow management software and in interpreters and compilers.

**Statistics** concepts, such as probability distributions, statistical significance, hypothesis testing, and regression are widely used in data science and machine learning.

In machine learning, data science and artificial intelligence systems, math skills are more important.

But in traditional (mainstream) Web, mobile and back-end development, we need nothing more than **school-level math** and **logical thinking**.

**Algorithm complexity** is a math concept from the mathematical analysis, used to estimate the execution speed of the code, based on the approximation of the steps needed to be executed.

Developers need to learn the concept of "**time complexity**" and what is linear time, quadratic time, cubic time and logarithmic time, which is quite simple, and mathematics is not deeply involved.

**Mathematical modeling** is the art of translating problems from an application area into tractable **mathematical** or **formal** formulations whose theoretical, numerical and algorithmic analysis provides insight, answers, and guidance useful for the originating application.

**Mathematical modeling** is important skill, related to algorithmic thinking and developers with strong problem-solving skills learn how to use it at basic level.


This is an **example** of how basic **school-level mathematical skills** are used to **draw objects** using SVG (scalable vector graphics) – the vector graphics standard for the Web.

```
<svg width="500" height="250" style="background:lightgray">
  <rect x="100" y="50" width="200" height="100" rx="5" ry="5" 
  style="fill:red; stroke:black; stroke-width:5; opacity:0.7" />
</svg>
```
[image assetsSrc="SDC-example(1).png" /]

We draw a rectangle at certain **position** at the coordinate system, with certain **size**, border **width** and border **radius**.

Developers use similar concepts when they **create the user interface of their apps**, using `HTML` and `CSS` or `XAML` or other graphical representation technology.






[/slide]

[slide]

# Object-Oriented Programming (OOP)

**Object-oriented programming** (**OOP**) is the concept of using **classes** and **objects** to model the real world.

**Classes** are sets of **data fields**, together with **methods** (which are functionality to interact with the data fields and other objects).

**Classes** define the **structure of information objects**: the data they holds and the operation they can perform.
**Objects** are **instances of the classes**, holding certain values in their data fields.

At the **example** we have a definition of the **class "Rectangle"**:
```java
class Rectangle {

  int width, height;

  int CalcArea() {
      return width * height;
  }
}
```
It holds two **data fields**: **width** and **height**. – integer values.

It defines a **method**, holding the code to **calculate the area** of the rectangle.

This is the **class definition** and the programming language here doesn’t matter.
```java
class Rectangle{

}
```
These are the definitions of the **data fields**, which the class holds in each object.
```java
int width, height;
```

These are the methods of the class: the operations or actions that objects of this class can do.
```java
int CalcArea() {
      return width * height;
  }
```
We can create several objects of this class "Rectangle" every with different width and height, for examlple:

```java 
Rectangle( 5, 6 );

Rectangle( 6, 4 );

Rectangle( 7, 3 );
```

In the example above we have **several objects** of this class "**Rectangle**".

The **first object** is a rectangle of **width 5** and **height 6**.

Another **object** has **width 6** and **height 4**.

Some other **object** has **width 7** and **height 3**.

We have **one class "Rectangle"** and **3 objects** (or instances) of this class.

The **class** holds the definition (the specification, the model, the template) for the objects.

It defines the **data fields** and **methods** and more details (in some cases).

Classes don't hold data. They hold **data definitions** and **operation definitions**.

**Objects hold values** for the data fields in the class.

Objects of class "Rectangle" **hold data** about **certain rectangle**.

Typically one class has **multiple objects** (or instances).

**Classes** and **objects** are the building blocks of the **object-oriented programming (OOP)** and they come together with some other OOP concepts like **abstraction**, **interfaces**, **data encapsulation**, **inheritance**, **polymorphism** and **exception handling**.

## Inheritance and Interfaces

**Inheritance** and **Interfaces** are two other major concepts in the object-oriented programming.

**Inheritance** allows classes to **inherit data and functionality** from a **parent class** (also called "**base class**").

When a class inherits another class, the **parent class fields** are merged with the **child class fields** and they together form the **set of data fields** for the child class.

**Interfaces** defines **abstract actions**.

These are actions to be **implemented in the descendent classes**.

Interfaces define a **set of empty (or abstract) methods** (or actions), which shall be obligatory implemented in the child classes.

Interfaces are also called "**contracts**", because they define certain set of functionalities, a contract to implement certain methods.

**Abstract classes** are used to model abstractions.

For example, the class **Figure** is not a concrete figure like square or rectangle, but the concept or the abstraction of "figure".

```java
abstract class Figure {
  int x, y;
  abstract int calcArea();
}
```

Abstract classes defines **data** + **actions** (or normal methods) + **abstract actions** (or empty methods).

Abstract classes are **designed to be inherited** (or extended).

**Concrete classes** like **Circle** and **Rectangle** represent real entities, not abstractions.

```java 
class Circle extends Figure {
  int radius;
  // override
   int calcArea() => PI * radius * radius; 
}
```
```java 
class Rectangle extends Figure {
  int width, height;
  // override
 int calcArea() => width * height; 
}
```
Concrete classes define data fields + concrete functionality (methods).

They can **implement interfaces** and **inherit abstract and other classes**.





[/slide]

[slide]

# Functional Programming

**Functional programming**  (FP) is programming based on composing **pure functions** , while avoiding **shared state** , **mutable data** , and  **side-effects**.

- Functional programs are **sequences of transformations** of data through **functions**.
- In pure functional programming functions and programs **don&#39;t have state** , which means that **functions do not hold shared data**.
  - They only access their input arguments and return an output.
  - I will give you examples later.

Functional programming is **declarative**  programing approach (not  **imperative** ), which means that instead of describing an algorithm how to do something step by step, functional developers describe the result by functions and compositions of functions.

The **program state** flows through pure functions, where one function passes its output data as input to other function.


What is a **pure function**?

- It is a function, which returns value **only determined by its input** , without side effects.
- Printing something at the console or storing something in a database are examples of side effects.
- Therefore, using **pure functional programming** is often **impractical**.
  - Modern languages use **elements of functional-style programming** and are not purely functional.

**Examples of pure functions** are:

- the square root function: "**sqrt of**" "**x**", which takes a number as input and returns another number as output,
- and the function "**sort of list**", which takes a list as input and returns a new list as output.

Both functions have **no side effects** they do not change anything, they do not read or write external data and they do not use state.

They are **pure functions**.

**Pure functions** are the **heart** of the functional programming.

- Using "**pure functions**" means maintaining "consistent results".
- If you **invoke a pure function many times** with the same input data, it will have the same consistent behavior and **will return the same result** , because it have no state and no interaction with the external data or components.
  - Pure functions produce **predictable results and behavior** and sometimes their correctness can be mathematically proven.

This is the most **important principle in functional programming**, to build programs by composition of stateless pure functions without side effects.
 
## Functional Programming Languages

There are many **functional programming languages and languages** that incorporate **functional paradigms** into modern software development.

- Most modern languages are not functional, but support **concepts for functional programming**.

**Purely functional languages** are **unpractical** and rarely used, because it is more complicated to program without maintaining a state.

- Purely functional developers need to **switch their thinking style** from the traditional "**algorithmic thinking**" to "**functional thinking**".
- The program in the purely functional languages is a **pure function** (which calls other pure functions) without side effects.
- An example of purely functional language is **Haskell** , which is not widely used in practice,
  - but it has a great value in learning the functional programming paradigms.

**Impure functional languages** are used more often because they allow exceptions from the concept of &quot;pure functions&quot; and simplify the work of developers.

- These languages emphasize the **functional style** but sometimes **allow side effects**.
- An example of impure functional language is **Clojure**.
  - It is not very popular in practical software development.

**Multi-paradigm languages** combine the strengths of both the **functional** and the **algorithmic** (or **imperative** )world.

- Most of today's widely used general-purpose programming languages are **multi-paradigm**.
- They combine multiple programing paradigms: **functional** programming, **declarative** programming, **structured** programming, **imperative** programming, **object-oriented** programming, **component-based** programming, **event-driven** programming, **asynchronous** programming, and many others.

Examples of popular general-purpose multi-paradigm programming languages are:

- **JavaScript** , **C#** , **Python** , **Java** , PHP, C++, Go, Swift and TypeScript.

All these languages combine multiple concepts and paradigms for structuring the program to simplify the work of developers and improve their efficiency and performance.

## Lambda and First-Class Functions

In programming, **lambda functions** are expressions, which transform some input to some output.

They look like a mathematical **formula**, or like an anonymous (unnamed) function.


- Lambda function in `Java`:
```java
x -> 2 * x
```

- Lambda function in `C#`:
```C#
x => 2 * x
```

- Lambda function in `JavaScript`:
```JS
x => 2 * x
```

- Lambda function in `Python`:
```Python
lambda x: 2 * x
```
JavaScript, Python, C# and Java support "**first-class functions**".

This concept means that **functions can be stored in variables** and can be **passed as arguments** to other functions.

These languages support **expressions of type "function"**, which hold programming logic to transform some input into some output.

**Lambda functions** are the simplest way to write an **expression of type "function"**.

Once we have a variable, which holds a function, we can **invoke it**.

- First Class Functions in `Java`
```java
Function<Integer, Integer> twice = x -> 2 * x;
var d = twice.apply(5); // 10
```
- First Class Functions in `C#`
```C#
Func<int, int> twice = x => 2 * x;
var d = twice(5);  // 10
```
- First Class Functions in `Python`
```Python
twice = lambda x: 2 * x
d = twice(5)  // 10
```
- First Class Functions in `JavaScript`
```JS
let twice = x => 2 * x;
let d = twice(5);  // 10
```

**First-class functions** are an important concept in programming.

They allow functions and methods to **take other functions as arguments**.

And this is **very powerful tool** for many situations.

**We shall learn more** about functional programming and first-class functions in the advanced programming modules and courses at **SoftUni**.

## Higher Order Functions 

**Higher-order functions** take other functions as arguments. This is powerful concept in functional programming.

Using functions, which **take other functions as argument**, we can implement **abstract behavior**.

For Example:
```JS
function aggregate(start, end, func) {
  for (var result = start, i = start+1; i <= end; i++)
    result = func(result, i);
  return result;
}
```
Let's explain what does the function above:
- It takes 3 parameters: **start**, **end** and **func**.

- The function aggregates the result from the given function over the numbers from start to end.
- For example, it can multiply the numbers from 1 to 10.
- Or it can sum the numbers from 20 to 30.

In the body of the "**aggregate**" **function** we apply the function "**func**" many times in a loop, for the numbers from "**start**" to "**end**".

The **start number**, **end number** and the **aggregation function** come as arguments.

This function is a good **example**, which illustrates the power of "**higher-order functions**" in functional programming.

The function "**aggregate**" accepts as parameter another function, which combines two values during the aggregation process.



[/slide]

[slide]

# Data Structures

**Data structures** are representations of data in the computer memory, which allow efficient access and modification.

- This is a pretty **big topic**.
- **Hundreds of books** are written about data structures.
- Data structures can be **linear structures** (such as arrays and lists), **tree-like structures** (suchas balanced trees), **graph-like structures** (such as graphs), **hash-based structures** (such as hash-tables) and others.

**Linear data types** are the most commonly used data structures in programming.

- They represent **sequences of elements** , which can be ordered or not, indexed or not, linked to the next element or not, etc.
- Examples of linear data structures are **arrays** , **lists** , **stacks** and **queues**.

This is how **arrays** and **array-based lists** look like in most programming languages and platforms:

- They are **sequences of elements** , which are directly accessible by their **position** (which is called "**index**").

This is an example of **linked-list**:

[image assetsSrc="SDC-example(3).png" /]



- It consists of **elements** , where each element knows its **next element**.
- The **last element** has "**null**" (or missing value) as next element.
- Unlike array-based lists, linked list **do not provide direct access by index**.

This is an example of **array-based queue**:

[image assetsSrc="SDC-example(4).png" /]


- The "**queue**" data structure works on the principle **FIFO** (first-in first-out).
- Elements are **appended** in the queue at its **left end** (at its back). This operation is called &"**enqueue**";.
- Elements are **taken** from the queue from its **right end** (from its front). This operation is called "**dequeue**".

We shall **master the linear data structures** in detail in the advanced programming modules at **SoftUni**.






[/slide]

[slide]

# Data Structures and Algorithms

In programming, sometimes we use more complex data structures, like **trees**.

**Trees** and tree-like data structures consist of nodes, where each **node** holds data + list of **child nodes** + **parent node**.


[image assetsSrc="SDC-example(2).png" /]

The example above illustrates visually a **tree**.
- This is a tree holding, the directory structure of a hard drive in Windows.
- The **root** node "**C colon backslash**" has 3 **child nodes**: "Programs", "Users" and "Windows"
- The child node "Users" has **3 child nodes**: "Maria", "Peter" and "George".
- The other nodes have **no children**.
- Each node, except the root, have a **parent node**.

Data structures often come with **algorithms** for their processing.

- Such algorithms can be different styles of traversing;
  - appending, inserting, deleting and modifying a node;
  - extracting sub-structures, finding paths, and much more.

**Examples** of algorithms are the classical **tree traversal algorithms** :

- Depth-First Search (DFS)
- And Breadth-First Search (BFS)
- We shall learn them in the "Data Structures and Algorithms" module at SoftUni.

This is a **sample** pseudocode implementation of the **Depth-First-Search algorithm**.

```Python
DepthFirstSearch(node) {
  print(node);
  for each ch in node.childNodes
    DepthFirstSearch(ch)
}
```

- The **in-depth traversal** starts from certain **node** .
- Then this **node** is first **printed**.
- Then the traversal starts **recursively from each child node** of the current **node** .
- The traversal process initially starts from the root node of the tree and reaches all tree nodes sooner or later.
- Unless the tree has a cycle or the tree is not connected, **this process infinite** and will **traverse all the nodes**.

[/slide]

[slide]

# Component-Based Development and Event-Driven Programming


**Component-based software development** is software development approach, a programming paradigm, based on the **composition of re-usable components**.

- Instead of building the application or system from scratch, developers take **ready-to-use components** and plug them into their software.
- The **components** are **building blocks** , which come from **component libraries** and **software packages** (which can be open-source, royalty free or commercial).

**Components** are self-contained pieces of functionality, ready to be inserted as part of larger software application.

- For **example** , a **PDF generator** component can be used to
  - create PDF reports, insert formatted text, images, tables and other elements in them
  - and then create a **PDF file** , which can be displayed in the Web browser or printed on paper.
  - The **internal details** about the PDF document format and how it works **are hidden** in the component.
  - Developers do not need to care about these technical details. They just use the component.
- Another **example** of software component is an **email sender** , which can send emails, holding formatted text and attachments.
  - The email components knows how to connect to the specified **email server** using the **SMTP protocol**
  - and how to compose **email messages** using the **MIME standard**.
  - This functionality is **encapsulated internally** inside the component and developers do not have to go into great technical details.
- Another **example** of software component is a **"date picker" UI control** , used in Web front-end applications.
  - The **"date picker"** visual component is a **drop-down box** , which shows the **calendar** and users can select a specific date.
  - If you open a website to book online airline tickets, you will see such a "**date picker**" component.

**User interface (UI) components** are also known as **UI controls** , **visual components** or **widgets**.

- Software components can be **visual** , such as the date picker and **non-visual** , such as the PDF generator.
- **Visual components** are also called **UI controls**.

Software components are distributed in **component libraries**.

- **Components libraries** are software components, bundled as redistributable software packages.
  - They can be downloaded from a **software component repository** (such as **npm** , **NuGet** and **PyPI** ).
  - Or can be purchased from **software component publishers** (such as Telerik, DevExpress, Aspose, and others).
  - Or can be publicly available **open-source projects** (such as **Apache Commons Crypto** and **jQuery UI** ).
- Example of open-source **UI control library** is the[jQuery UI](https://jqueryui.com/) project.
  - **jQuery UI** provides front-end user-interface components, widgets, effects and interactions for JavaScript developers.

## Event-Driven Programming

**Event-driven programming** is a **programming paradigm**, in which **the flow of the program ** is determined by  **events**, such as mouse clicks, key presses, button clicks, and many others.

Typically a **software framework** drives the application:

- **listens** for events in an **event loop** 
- when an event occurs, the framework calls the code to handle it

Developers write the **code for handling the events** (functions or methods).

**Examples** of event-driven software frameworks are:

- The user interface (UI) system in the Web browsers, where the **HTML5** standard describes the **components** and their **events**.
- Another example is **the UI system in Android** , which defines a set of **UI components** with **events**.

**Event source** (or event emitter) is a software component, that **produces events**.

- For example, an internal component in the software framework may track the mouse and when the mouse is clicked, it may emit an event.
- Typical **example** of event source is **the "button" component** , which defines the "**on click**" event.

Developers can write their **own components** (such as an "email sender") and **emit events** in certain situations,

- for example, when a successful **connection to the mail server** is established,
- or when the **email was rejected** by the server for some reason.

**Event handler** (or event consumer) is a **piece of code** (or callback function), written by developers, to **handle** (or process) **an event**.

- A simple **example** is to **show a message, when a button is clicked**.
- In this example the **button** is an **event emitter**.
  - It has "**on click**" event, which can be handled by developers.
- To handle the event, developers write an **event handling function** and assign it for the "**on click**" event.
  - When the button is clicked the framework **emits the "on click" event**.
  - The event handling function **handles the "on click" event** and shows a message.



## Inversion of Control - IoC

The **inversion of control** ( **IoC** ) principleis a **program control-flow paradigm** , where
**a function or component or framework does the processing** and **calls pieces of your code** for certain tasks.

Instead of **your program to keep the control** and invoke external functions and libraries,
**the framework takes the control** and invokes pieces of your program's code (functions from your code).

This concept is called "**inversion of control**" and is very often used with **software frameworks**.

For **example** , most user interface **(UI) frameworks** work under **the "inversion of control" principle**.

The UI frameworks typically keeps the control and the execution of your entire application, and invoke your code to handle events, to which your code is subscribed.

Look at the following picture to get a better understanding of the difference between the "**traditional program flow**" and the "**inversion of control program flow**".

[image assetsSrc="SDC-example(5).png" /]


Let's look at two **examples** of "inversion of control" behavior, to understand it better:

The first **example** is a **parser** , which processes a document and calls **events** when it finds certain tokens.

- An **XML parser** takes as input an XML document, and it calls an **event handler** from your code, when a new tag is found in the XML document.
- This is how **event-driven XML parsers** work, such as SAX.
  - **SAX** stands for "Simple API for XML" and is widely used industry standard for XML processing.

Another example is a **GUI app** - a visual app with a **graphical user interface** (GUI)

The UI framework drives the app and **keeps the control over its execution**.

**The framework manages the UI** , draws the UI controls, listens for user interactions and emits **events** after each interaction.

When the text is changed in a text box, or a button is clicked or the focus is moved from one text field to another, the UI framework emits an event.

Developers **handle these events** by providing event-handler functions and respond to user interactions.

Most user interface frameworks and libraries are **event-driven** and use the "**inversion of control**" principle.

- That's why "**event-driven programming**" and "**inversion of control**" are so important.
- If you deal with **front-end** and **user interfaces** , you will use inversion of control frameworks and event-driven programming.
- We shall learn **how to create front-end applications** in the professional modules and courses at **SoftUni**.


[/slide]

[slide]

# Networking and Internet Protocols


**Networking and Internet protocols** play an important role in software development.

- Communication in Internet uses **networking protocols**.
- **Protocols** define the technical standards for communication between two systems, for example a mobile app and a Web server.

The [OSI model](https://en.wikipedia.org/wiki/OSI_model) defines **7 layers** of networking protocols.

- **OSI** stands for "Open Systems Interconnection" and defines a framework on which modern networking and communication standards are based.

The 7 layers of the OSI model are:

- **Layer 1** : the **Physical layer**.
  - It is responsible for the physical connection between two or more parties.
  - At the physical layer, the data is carried by **electrical impulses** (using electrical cables), **radio signals** (in wireless communication), or **light** (using optical cables).
  - The physical layer specifications define characteristics such as voltage levels, the timing of voltage changes, physical data rates, maximum transmission distances, modulation scheme, channel access method, physical connectors and many more.
  - The physical layer is part of the specifications of the **USB** , **Bluetooth** , **Ethernet** and **WiFi** standards.
  - **Repeaters** , **hubs** and **antennas** are typical devices at the physical layer.
- **Layer 2** : the **Data Link layer**.
  - It provides **node-to-node data transfer** – a link between two directly connected nodesin the same network.
  - The data transferred is split into packets called "**frames**".
  - Layer 2 hardware, such as **Ethernet adapters** and **modems** are responsible for transmitting the frames over the physical connections.
  - At layers 2 communication devices are identified by **hardware addresses** , such as MAC address.
  - Typical data link layer protocols are **Ethernet** and **PPP**.
  - **Network switches** are typical hardware for the layer 2 (the data link layer).
- **Layer**  **3** : the **Network layer**.
  - Layer 3 networking protocols (such as **IP** , **IPv6** , **IPSec** , **ICMP** and **IGMP** ) transfer **packets** (such as IP packets) between two nodes at **two different networks**.
  - Packets typically pass through several **routers** to reach their destination.
  - The **routing** of the packetsis an important concept for the layer 3 networking.
  - **Routers** are typical hardware for the layer 3 (the network layer).
  - The concept of "**IP address**" comes from the layer 3 and is important for software developers.
- **Layer**  **4** : the **Transport layer**.
  - The transport layer protocols (such as **TCP** , **UDP** and **QUIC** ) are responsible for end-to-end communication between the two endpoints.
  - These protocols transfer data, split into pieces called "**segments**", and handle the flow control and error control during the communication.
  - For example, if an IP packet at layer 3 is lost, it will not be retransmittedand it will never arrive,
    - but layer 4 protocol TCP retransmit the lost TCP segments and maintain streams of data between the endpoints.
  - An important concept from the developer's perspective at layer 4 is the **port number**.
    - Port numbers allow maintaining multiple parallel stream connections between two endpoints.
- **Layer**  **5** : the **Session layer**.
  - It controls the **dialogues** (connections) between computers.
  - It establishes, manages and terminates connections between the local and remote application.
  - Example protocols at layer 5 are **RPC** (Remote Procedure Call) and virtual private networking protocols like PPTP.
- **Layer**  **6** : the **Presentation layer**.
  - It is responsible for translation, encryption, and compression of data.
  - Example protocols at layer 5 are **SSL** (Secure Socket Layer) and **TLS** (Transport Layer Security).
- **Layer**  **7** : the **Application layer**.
  - This is the only layer that directly interacts with data from the user.
  - Software applications like Web browsers and Email clients rely directly on the application layer protocols.
  - The **"Application layer"** is the most important for software engineers from all the OSI layers,
    - because the code developers write, directly interacts at this layer.
  - Typical application level protocols are: **HTTP** , **SMTP** , **POP3** , **IMAP** , **FTP** , **DNS** and many others.
  - The **HTTP** protocol connects Web clients with the Web servers and allows downloading resources from the Web.
  - The **SMTP** , **POP3** and **IMAP** protocols are used by email clients to send and read **emails**.
  - Many other protocols operate at the **application layer** and you will encounter some of them in your career as a software engineer.

The **7-layer OSI model** is too complicated.

- It is designed for network engineers and communication experts.
- In software development a simplified networking model exists.
- It is called "**The TCP/IP protocol suite**" and it consists of only 4 layers:
  - **Link layer** , which combines physical media and data link protocols, such as **Ethernet**.
  - **Internet layer** , which transmits packets between two hosts in Internet, using the network protocols **IP** or **IPv6**.
  - **Transport layer** , which provides communication between two endpoints, using the **TCP** , **UDP** or **QUIC** protocols.
  - **Application layer** , which defines how two applications (client and server) talk to each other. Protocols like **HTTP** , **HTTPS** , **SMTP** , **SMTPS** , **DNS** and **DNSSEC** operate at the application level.

**Network protocols** are a **large area of knowledge** and it takes years to master them in detail.

- Software engineers only need to learn **the basic concepts of networking** , networking models and the basics of the most important network protocols (like HTTP).
- Everything else from the world of networks is optional and whether developers need it highly depends on their narrow specialization.


## HTTP and Socket Communication

Most connected applications communicate through **HTTP** or **sockets**.

**HTTP** is application level protocol for the Web, the protocol used by Web browsers to open Web sites.

**Sockets** are bi-directional stream connections, usually implemented by the **TCP** protocol or the **WebSocket** protocol, which is a socket over HTTP.

**HTTP** is a "request / response" based protocol for the Web.

- **Web clients request** a resource, using HTTP GET, POST, PUT or DELETE **request**.
- The **Web server responds to the request** and provides the resource as HTTP **response**.

**Sockets** are bidirectional communication streams.

When a **socket connection** is established between two endpoints (host + port), both participants can **send and receive data** , which arrives in the same order, as it was sent.

**Sockets** are used for communication over Internet.

**Sockets** are used to open a Web site, to download a file from Internet, for real-time communication such as chat messaging, for streaming video, for gaming and in many other scenarios.

- **HTTP** also works over a **TCP** or **QUIC** socket connection.

**Web sockets** are **sockets** that run over **HTTP.**

If supported by the Web server, an HTTP connection can be **upgraded to a WebSocket** , using special HTTP Upgrade headers in the request.

**Web sockets** allows JavaScript clients to communicate with the Web server bidirectionally in a **message-oriented style**.
- The **Web server can push data messages** to the client over the Web socket at any time.
- The **Web client can also push data messages** to the Web server over the Web socket at any time.
- The **WebSocket** technology allows Web applications to efficiently **communicate in real-time**.

You will learn more about socket communication later at **SoftUni**, in the **Web development professional modules.**

[/slide]

[slide]

# Asynchronous Programming

**Asynchronous programming** is another important paradigm in software engineering.

- **Asynchronous programming** and **concurrent execution** allow multiple pieces of code to run simultaneously.
- This is **quite natural** in computer software: you can listen to music on your laptop while browsing a website and downloading files.
- **Asynchronous programming** allows several functions or methods of your code to be executed **simultaneously**, just like you are executing several programs in the same time.

There are many **concepts and technologies** , which implement asynchronous code execution:

- multithreading, background tasks 
- promises, forked processes, web workers 
- service workers, and others.

**Multithreading** in `Java`, `C#` and `Python` allows simultaneously running several **threads**.

- A **thread** of execution is a piece of code, which runs simultaneously within your program or application.
- **Threads** are **methods** or **functions** , which are **executed concurrently**.
- A program can run **multiple threads concurrently**.
- Threads share the program state, memory and other resources.

Accessing **shared data** from concurrent threads may need **synchronization**.

What will happen if **one thread is printing** the elements from a list, while **another thread is deleting** some of the elements **in the same time**?
**Тhe program can crash**, when it tries to read deleted elements.

This is a **big problem** with multithreaded applications.

**Inconsistent behavior** , **crashes** , **unexpected results** , and **hanging** are just few **examples of problems** when multiple threads access shared data concurrently.

To solve these challenges, developers use "**thread synchronization**".

**Critical sections** , **locks** , **mutexes** , **semaphores** , **signals** , **atomic operations** and **monitors** are examples of **synchronization objects** used in multithreading to resolve the conflicts when accessing shared data from several threads.

Many programming languages offer a **simplified concurrent programming model** , without threads.

- It is based on background **tasks** (in C#) and **promises** (in JavaScript).
- **Tasks** and **promises** are handled with special language constructs: **async** and **await**.
- We **shall learn** how to use them in the JavaScript programming modules and courses at **SoftUni**.

**Web Workers** and **Service Workers** in HTML5 are tasks (JavaScript code), which run in the background.

- **Workers** are **like threads** , but they cannot access shared data, so **synchronization is not needed**.
- **Workers communicate** with the hosting Web site **through messages**.

Running multiple parallel **processes** in Windows or Linux is another option to implement **concurrent code execution**.

- This approach is typical for lower-level programming languages like **C**.

## Promises

**Promises** are very **important concept** in JavaScript and some other languages.

- You cannot be a **JavaScript developer** without understanding **how to use promises**.
- Without promises, you cannot execute asynchronous tasks like downloading a resource from the server.

A **promise** in JS holds an **operation** that runs **asynchronously**.

- After **completion** or **failure** an **event** is called.
- This means that the **operation** behind a promise **runs in the background**.
- Some functions (like **fetching a resource** ) do not return the result but return a **promise**.
- This is a **promise** to execute the requested operation in background and **return the result later**.
- Promises accept **functions** to be invoked in case of **success** and in case of **error**.

Let's see the following **example**:

```JS
let request = fetch('https://blog.softuni.org/wp-json/wp/v2/posts');
request.then(function(response) {
  response.json().then(function(posts) {
    console.log(JSON.stringify(posts));
  });
});
request.catch((err) => console.log(err));

```

- We **fetch the blog posts** from the SoftUni blog, through its API.
- This "**fetch**" function in JavaScript downloads a resource through an asynchronous **HTTP request**.
- It does not return the resource itself, but instead **returns a promise**.

Next, we pass to the promise a **function** to be called **in case of success**.

- This function will receive **the HTTP response** as parameter from the promise.

To download the response body as **JSON** object, **we use a promise again**.

- In case of success, we **print the downloaded blog posts** as JSON string on the console.

Finally, we pass to the promise a **function** to be called **in case of error** (a lambda expression).

- This function will be invoked **in case of problem**, for example:
    - if the remote server is down
    - if the specified URL is invalid
    - if the Internet connection is lost
- The error function will receive **the error details** as parameter from the promise.
- If an error occurs, we **print the error details** on the console.

[/slide]
