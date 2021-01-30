# Algorithmic Complexity

[slide hideTitle]
# Definition

Before expanding our arsenal of data structures, it is a good idea to touch upon the subject of **algorithmic complexity**. 

**Algorithmic complexity** is a measurement of how long an algorithm will take to complete, depending on the size of the input it receives. It is a measurement of time and so we can also refer to it as **time complexity**.

For simplicity, sometimes instead of **algorithmic complexity**, we can also use the term **"running time"**.

Even though we are essentially trying to figure out how long an algorithm will take to complete a given task, we are not counting in terms of seconds or minutes. What we are doing is calculating **how many simple steps are necessary** for the execution of an algorithm.

When evaluating complexity it is a standard practice to always consider the **worst-case scenario**.

Algorithm complexity is commonly represented with **Big O Notation** - `O(n)`. The letter **n** represents the size of the input and the function inside **O()** is used to calculate how complex the algorithm is with regards the input size **n**.

While exploring the topic of Big O Notation, you will no doubt encounter the term **order**. In this context, **order** stands for the **efficiency of the algorithm**.

There are different types of complexity such as `constant`, `logarithmic`, `linear`, `n*log(n)`, `quadratic`, `cubic`, `exponential`, and more.

Next, we will see what each of these types of complexities stands for.

[/slide]


[slide hideTitle]
# Typical Algorithm Complexities


| **Complexity Type** | **Big O Notation** | **Description** |
|:---:|:---:|:---:|
|  **constant**  | **O(1)**| Performing a given operation takes **a constant number of steps** to complete. For example - 1, 5, 10, or any other number of operations. This count does not depend on the size of the input data. This would be the most efficient algorithm that can be created. |
| **logarithmic** |  **O(log(n))**| Takes a number of **log(n)** steps to complete, where the base of the **logarithm is most often 2**. This means that the running time will grow in proportion to the logarithm of the input size. An example would be a function that divides the input with each iteration. |
|   **linear**    | **O(n)**| The number of steps for performing an operation on **n** number of elements **is nearly the same as the number of elements**. For example, a search function that checks every single element in an array against a particular condition. |
|  **quadratic**  | **O(n^2)**| The algorithm has an order of **n^2** number of steps, where **n** is the size of the input data.  If **n = 100**, it takes  10000 steps. An example of this is **bubble sort** or any other function you can write that involves nested loops, iterating over the same input. |
|   **cubic**     | **O(n^3)** | An algorithm with this complexity has an order of **n^3** steps, where **n** is the size of the input data. For example, **if we have 100 elements**, it takes **1000000** (one million!) steps to complete. |
|**exponential** | **O(2^n)**|  The number of steps is exponential to the size of the input data. For example, if **n = 10**, the exponential function **2^n** has a value of **1024**, if **n = 20**, it has a value of **1048576**, and if **n = 100**, it has a value of a number with about 30 digits. An algorithm with this type of complexity would be extremely slow and inefficient.|


[/slide]

[slide hideTitle]

# Asymptotic Functions

[image assetsSrc="Java-Advanced-Stack-and-Queues-1.png" /]

The chart above illustrates the different types of complexity and their performance as the number of elements (n) increases.

You can clearly see that the following are worst in terms of performance:

- **O(2^n)** - exponential complexity algorithms
- **O(n^2)** - quadratic complexity algorithms
- **O(n*log(n))** - logarithmic


You can read more about algorithm complexity [here](http://bigocheatsheet.com/).

[/slide]

[slide hideTitle]

# Example: Even Elements Sum

Below is an example of a simple algorithm which calculates the sum of the even elements of an array.

```java
int getSumEven(int[] array) {
      int sum = 0;
      for (int i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
          sum += array[i];
        }
      }
      return sum;
    }
```

First, we create a `getSumEven()` function which accepts an array of integers as a parameter.

We are using a variable named **sum** to store the result. 

We iterate over each element of the array and checks for even numbers. 

If an even number is found it is added to the **sum**.

Finally, the sum is returned as a result of the function.

We have 3 operations that are executed only once, regardless of the size of the array:

- `int sum = 0`
- the initialization of the **i** variable in the for loop
- `return sum`

Algorithm complexity is usually evaluated in the **worst-case** (most unfavorable scenario). 

This means in the **average case** they can work faster, but in the worst case, they work with the evaluated complexity.

[/slide]

[slide hideTitle]

# Time Complexity

**Algorithmic complexity** is a measurement of how long an algorithm will take to complete, so we can also refer to it as **time complexity**. 

There are three possible scenarios which can be considered when calculating time complexity: 

- **worst-case:** to find the element we are searching for, we have to check all the elements in the array. The complexity is **O(n) - linear**

- **average-case:** we can expect to check half the elements in the array until we find the one we are looking for. The complexity is **O(n/2) - linear**

- **best-case:** the element will be found at the first position that we look at. The complexity is constant - **O(1)**



[image assetsSrc="Java-Advanced-Stack-and-Queues-2.png" /]

The visualization above illustrates the algorithm performance in each scenario. Usually the worst-case scenario will be used to calculate the complexity as this ensures optimal performance in all other cases.

[/slide]
