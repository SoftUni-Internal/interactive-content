# Naming and Best Practices

[slide hideTitle]
# Naming Methods

Always use verbs when naming methods.

A method represents an action, and its name should clearly state what action they perform.

Method names can be a single word or 2-3 words as needed to represent the action.

## Example of good names

Method names should answer the question:

`What does this method do?`

Good method names: **findStudent**, **getReportByName**, **getId**.


## Examples of bad method names

If you cannot find a good name for a method, think about whether it has a **clear intent**.

Bad methods name: **Method1**, **DoSomething**, **HandleStuff**, **SampleMethod**.
[/slide]

[slide hideTitle]
# Naming Method Parameters

Method parameter names should be **[Noun]** or **[Adjective]** + **[Noun]**. Also we should write methods in camelCase, and methods name should be meaningful:

- **firstName**, **report**, **speedKmH**, **usersList**, **fontSizeInPixels**, **font**


[/slide]

[slide hideTitle]
# Methods – Best Practices

Each method should perform a **single**, well-defined task.

A method's name should **describe that task** in a clear and non-ambiguous way.

**Avoid** methods **longer than one screen**, split them into several shorter methods.

Here are some self-documenting method names:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```
[/slide]

[slide hideTitle]
# Code Structure and Formatting

Make sure to use correct **indentation**.

Leave a **blank line** between **methods**, after **loops**, and after **if** statements.

Always use **curly brackets** for **loops** and **if** statements bodies.

**Avoid long lines** and **complex expressions**.

```Java
public static void main(args) {
    // some code…
    // some more code…
}
```
[/slide]