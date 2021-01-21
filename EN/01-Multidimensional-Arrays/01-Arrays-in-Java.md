# Arrays in Java

[slide hideTitle]

# What is Array?

An array is a **sequence of elements** that holds a **fixed number of values of a single type**.

The **length** of an array **is established when the array is created**.

Each **item** in an array is called an **element** and **each element is accessed** by its **numerical index**.

The following illustration explains an **integer array with 5 elements**:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-2.png" /]

As shown in the illustration above, **the numbering of elements starts with 0**, therefore the **first element** can be accessed at **index 0** and the **last at index 4**.

[/slide]


[slide hideTitle]

# Working with Arrays

- Initializing an Array:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```
In the example above we initialize an empty array of integers with length 5:

- `int[]`: to initialize an array we need to provide a data type
- `numbers`: is the name of the variable
- `new int[5]`: creates a new instance of an array, which will hold five integers.
- when we iterate through the array it is printing zero, because the default value of an integer is zero.

- Assigning values to the Array elements:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
    System.out.println(numbers[i]);
}
```

Using a for loop we iterate through the length of the array and assign a value to each element and then print the current element. 

- Accessing array elements:
``` java live
int[] numbers = {25, 45, 65};

int secondElement = numbers[1];

System.out.println(secondElement);
```

Using bracket notation we can access an element at the specific index in an array and store that element integer a variable. 
[/slide]
