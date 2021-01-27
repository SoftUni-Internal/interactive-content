# Algorithmic Complexity

[slide hideTitle]
# Definition

**Algorithm complexity** is a **measure** which evaluates the order of the **count of operations**, performed by a given algorithm as a function of the size of the input data.

In other words, **complexity** is a rough **approximation of the number of steps** necessary to execute an algorithm.

When we evaluate complexity we speak of **order of operation count**, not of their exact count.

Algorithm complexity is commonly represented with the **O(f) notation**, also known as **asymptotic notation** or **Big O notation**, where **f** is the function of the size of the input data.

The asymptotic computational complexity **O(f)** measures the order of the consumed resources (CPU time, memory, etc.) by a certain algorithm expressed as a function of the input data size.

Complexity can be `constant`, `logarithmic`, `linear`, `n*log(n)`, `quadratic`, `cubic`, `exponential`, etc.

This is respectively the order of constant, logarithmic, linear and so on, a number of steps, are executed to solve a given problem.

For simplicity, sometimes instead of **algorithms complexity** or just **"complexity"** we use the term **"running time"**.
[/slide]


[slide hideTitle]
# Typical Algorithm Complexities

This table will explain the meaning of the different types of complexity.

| **Complexity** | **Running time** | **Description** |
|:---:|:---:|:---:|
|  `constant`   | `O(1)` | Performing a given operation takes **a constant number of steps** to complete. For example - 1, 5, 10, or any other number of operations. This count does not depend on the size of the input data. |
| `logarithmic` |  `O(log(n))`| Takes the order of `log(n)` steps, where the base of the **logarithm is most often 2**, for performing a given operation on `n` number of elements. |
|   `linear`    | `O(n)`| The number of steps for performing an operation on `n` number of elements **is nearly the same as the number of elements**. |
|  `quadratic`  | `O(n^2)`| It takes the order of `n^2` number of steps, where `n` is the size of the input data, for performing a given operation.  For example, if `n = 100`, it takes about 10 000 steps. |
|   `cubic`     | `O(n^3)` | It takes the order of `n^3` steps, where `n` is the size of the input data, for performing an operation on `n` elements. For example, if we have 100 elements, it takes about 1 000 000 steps. |
|`exponential` | `O(2^n)`| It takes a number of steps, which is in exponential dependability with the size of the input data, to perform an operation on n elements. For example, if `n = 10`, the exponential function `2^n` has a value of 1024, if `n = 20`, it has a value of 1 048 576, and if `n = 100`, it has a value of a number with about 30 digits.|


[image assetsSrc="Java-Advanced-Stack-and-Queues-1.png" /]

You can read more about algorithm complexity [here](http://bigocheatsheet.com/).

[/slide]

[slide hideTitle]

# Get Sum Number of Steps

The complexity of algorithms is usually evaluated in the **worst-case** (most unfavorable scenario). 

This means in the **average case** they can work faster, but in the worst case, they work with the evaluated complexity.

Let us see the following example - searching in an array:

```java
for (int i = 0; i < names.length; i++) {
    String name = names[i];
    if (searchedName.equals(name)){
        System.out.println("Name is found!");
        break;
    }
}
```

[/slide]

[slide hideTitle]
# Time Complexity

There are three possible scenarios when using algorithms: 

- **Worst-case:** to find the element we are searching for, we have to check all the elements in the array. The complexity is `O(N) - linear`

- **Average-case:** we can expect to check half the elements in the array until we find the one we are looking for. The complexity is `O(N/2) - linear`

- **Best-case:** the element will be found at the first position that we look at. The complexity is `O(1) - constant`

[image assetsSrc="Java-Advanced-Stack-and-Queues-2.png" /]

[/slide]
