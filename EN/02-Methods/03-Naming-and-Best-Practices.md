# Naming and Best Practices

[slide hideTitle]
# Naming Methods

Always use verbs when naming methods.

A method represents an action and its name should clearly state what action they perform.

Method names can be a single word or 2-3 words as needed to represent the action.

## Examples of Good Names

Method names should answer the question: *What does this method do?*

Good method names are **findStudent**, **getReportByName**, **getBrowserId**.


## Examples of Bad Method Names

If you cannot find a good name for a method, think about whether it has a **clear intent**.

Bad method names: **Method1**, **DoSomething**, **HandleStuff**, **SampleMethod**.

Perhaps your method does too many things making it difficult to decide on a name.

This should be a pretty good indicator that you should split it into two or more methods.

## Naming Method Parameters

Method parameter names should be \[Noun\] or \[Adjective\] + \[Noun\]. 

Always write method names in **camelCase**:

- **firstName**, **report**, **speedKmH**, **getListOfUsers**, **calculateFontSizeInPixels**


[/slide]

[slide hideTitle]
# Best Practices

Each method should perform a **single**, well-defined task.

A method's name should **describe that task** in a precise and non-ambiguous way.

**Avoid** methods **longer than one screen**, split them into several shorter methods.

Here are some self-documenting method names:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```

You can understand what each of the above methods does by reading their names, even without checking their implementation.

[/slide]

[slide hideTitle]
# Code Structure and Formatting

Make sure to use correct **indentation**.

Leave a **blank line** between **methods**, after **loops** and after **if** statements.

**Avoid long lines** and **complex expressions**.

```Java
public static void performAction() {
    // some code…
    // some more code…
}
```
[/slide]
