[slide]

# What is Unit-Testing?

We saw what are the seven testing principles. Now lets continue with Unit-Testing.

Unit-Testing means that we test the smaller **pieces/units** of our application.

Lets see what is the main difference between manual and automated testing.

Manual testing:

- Manual testing is not **structured** and **repeatable**.

- Our Manual testing methods cannot **cover** all of our code.

- This methods are not as easy as it should be.

Here is one example: 

```java
void testSum() {
  if (this.sum(1, 2) != 3) {
    throw new Exception("1 + 2 != 3");
}
```

To make the things easier we need a **structured** approach that:

- Allows us **refactoring**.

- Reduce the **cost of change**.

- Help us to reduce the amount of **bugs/defects** in the code.


[/slide]


[slide]

# Automated Testing

Automated testing contains:

- Unit tests

- System tests

- Integration tests


[image assetsSrc="Unit-Testing-Example(1).png" /]




[/slide]