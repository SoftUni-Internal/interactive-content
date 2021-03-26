# Arrays in Java

[slide hideTitle]

# What is an Array?

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-4-5-Array-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An array is a **sequence of elements** that holds a **fixed number of values of a single type**.

The **length** of an array **is established when it is created**. 

Each **item** in an array is called an **element**, and **each element is accessed** by its **numerical index**.

The following illustration explains an **integer array with 5 elements**:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-2.png" /]

As shown in the illustration above, **the numbering of elements starts from 0**.

The **first element** can be accessed at **index 0** and the **last at index 4**.

[/slide]


[slide hideTitle]

# Working with Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/interactive-java-advanced-multidimensional-arrays-6-Working-With-Array-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Initializing an Array:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

In the example above, we initialize an empty array of integers with a length of 5:

- `int[]`: to initialize an array, we need to provide a data type
- `numbers`: is the name of the variable
- `new int[5]`: creates a new instance of an array, which will hold five integers

When we iterate through the array, it will be printing zeros because the default value of an integer is zero


Here is how to assign values to the Array elements:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
    System.out.println(numbers[i]);
}
```

Using a **for-loop**, we iterate through the length of the array and assign a value to each element and then print the current element. 

- Accessing array elements:
``` java live
int[] numbers = {25, 45, 65};

int secondElement = numbers[1];

System.out.println(secondElement);
```

Using the square bracket notation we can access an element at the specific index in an array and store that value in a new variable. 
[/slide]
