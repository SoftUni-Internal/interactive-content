# Arrays in Java

[slide]

# What is Array?

An array is a **sequence of elements** that holds a **fixed number of values of a single type**.

The **length** of an array **is established when the array is created**.

Each **item** in an array is called an **element**, and **each element is accessed** by its **numerical index**.

The following illustration explains an **integer array with 5 elements**:

[image assetsSrc="matrices-example(1).png" /]

As shown in the illustration above, **the numbering of elements starts with 0**, therefore the **first element** can be accessed at **index 0** and the **last at index 4**.

[/slide]


[slide]

# Working with Arrays

- Initializing an Array: 
```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```
In the example above we initialize an empty array of integers with length 5.

- Assigning values to the Array elements:
```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
    System.out.println(numbers[i]);
}
```

- Accessing array elements :
``` java live
int[] numbers = {25, 45, 65};

int secondElement = numbers[1];

System.out.println(secondElement);
```

[/slide]
