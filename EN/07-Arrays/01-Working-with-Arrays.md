# Working with Arrays

[slide]
# Arrays

Arrays are used to store **multiple values in a single variable**, instead of declaring separate variables for each value. In short, an array is a sequence of elements.

```java
int[] numbers = {1, 2, 3, 4, 5};
```

Let's explain what the code does above?
- To declare an array, define the variable type with square brackets (`[]`).
- We can define initial values in the array using the array literal - place the values in a comma-separated list, inside curly braces (`{1, 2, 3, 4, 5}`).
[/slide]

[slide]
# Allocating Arrays

```java
int[] numbers = new int[10];
```

The above statement does two things:
- It creates an array using `new int[10]`.
- It assigns the created array to the variable `int[] numbers`.
- All elements are initially equal to 0 (**default value** of integers).

We can create an array without knowing how many elements we should have:
```java live
Scanner scanner = new Scanner(System.in);

int n = Integer.parseInt(scanner.nextLine());
int[] numbers = new int[n];
```
[/slide]


[slide]
# Acessing Elements
In Java, each element in an array is **associated with a number**. 

The number is known as an **array index**. We can **access elements** of an array by using those indices.

The array indices **always start from 0**.

For example, to access the first element of the array is we can use `[0]`:
```java live
int[] numbers = {100, 200, 300};
System.out.println(numbers[0]);
```

**Note:** If the length of an array is `n`, the first element of the array will be at index `0` and the last element will be at index `n - 1`.

```java live
int[] numbers = {100, 200, 300};
System.out.println(numbers[2]);
```

We can use the `length` property to find out how many elements an array has:
```java live
int[] numbers = {100, 200, 300};
System.out.println(numbers[numbers.length - 1]);
```

If you try to access an element on invalid index, you wil get an `ArrayIndexOutOfBoundsException` exception:
```java live
int[] numbers = {100, 200, 300};
System.out.println(numbers[-1]);
```

```java live
int[] numbers = {100, 200, 300};
System.out.println(numbers[numbers.length]);
```
[/slide]

[slide]
# Assigning Values 

To change the value of a specific element, you have to access by using its numeric index:
```java live
int[] numbers = new int[5];
numbers[0] = 100;
numbers[1] = 200;
System.out.println(numbers[0]);
System.out.println(numbers[1]);
```
[/slide]