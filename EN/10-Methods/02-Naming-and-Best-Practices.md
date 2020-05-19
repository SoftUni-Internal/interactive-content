# Naming and Best Practices

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]


[slide]
# Naming Methods

Methods always should be verbs.

They represent an action and the method name should clearly state the action they perform.

The method name can be a single or 2-3 words as needed to represent the action.

## Example for good names

Method names should answer the question:

`What does this method do?`

* Good method names: `findStudent`, `getReportByName`, `getId`.


## Exmaple for bad names

If you cannot find a good name for a method, think about whether it has a **clear intent**.

* Bad methods name: `Method1`, `DoSomething`, `HandleStuff`, `SampleMethod`.

# Naming Method Parameters

Method parameters names should be `[Noun]` or `[Adjective]` + `[Noun]`, should be in camelCase, should be meaningful:

* `firstName`, `report`, `speedKmH`, `usersList`, `fontSizeInPixels`, `font`.

# Methods – Best Practices

Each method should perform a **single**, well-defined task.

A Method's name should **describe that task** in a clear and non-ambiguous way.

**Avoid** methods **longer than one screen**, split them to several shorter methods.

* Here are some self-documenting and easy to test:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```

# Code Structure and Code Formatting

Make sure to use correct **indentation**.

Leave a **blank line** between **methods**, after **loops** and after if statements

Always use **curly brackets** for loops and if statements bodies.

**Avoid long lines** and **complex expressions**.

```Java
public static void main(args) {
    // some code…
    // some more code…
}
```
[/slide]