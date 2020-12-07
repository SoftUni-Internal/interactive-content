# What Is a Method
[slide]
# Video

[vimeo-video startTimeInSeconds="199" endTimeInSeconds="1995"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

[/slide]
[slide]
# Method
A method is a block of code that only runs when it is called.

You can pass data, known as parameters, into a method.

Methods are used to perform certain actions, and they are also known as **functions**.

Sample method **definition**:

```Java
public static void printHello () {
  System.out.println("Hello World");
}
```

* Call a Method \(Invoking\)

```Java
printHello();
```

# Why Use Methods?

We use methods in Java for several reasons:

- **Reusability**: we can write a method once, and use it **multiple times**. 

We do not have to rewrite the entire code each time. Think of it as, `write once, reuse multiple times`.

- **To parameterize code**: in addition to making reusable code which is the same in all cases. 
You will often want to use `parameters` that change the way the method works.

- **Create conceptual units**: create methods to do something that is one action in your **mental view of the problem**.

This will make it **much easier** for you to work with your programs.

- Methods make code more readable and easier to debug. 

For example, `printHello()` method is so readable, that we can know what this method will print `Hello`.

- **Simplify problems**: Because local variables and statements of a method **can not be seen from outside the method**. 

They \(and their complexity\) are **hidden** from other parts of the program, which prevents accidental errors or confusion.

[/slide]