
# Modify the Array

[slide hideTitle]

# Add Elements

To modify arrays in JavaScipt **methods** similar to the methods that come from the **Java stream**, can be used.

When any of the following **method** is applied, it will **change** (modify) the original array. 

## Push

The `array.push()` method adds **one or more elements** to the end of an array and **returns** the new **length** of the array.

This method is similar to the `STACK.push(E element)` in Java.

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let insertElement = nums.push(80);

console.log(insertElement);
console.log(nums);
```
## Unshift

The `array.unshift()` adds **one or more elements** to the **beginning** of an array and returns the **new length** of the array.

```js live
let nums = [40, 50, 60];

console.log(`Array's length is: ${nums.length}`); 

let firstElement = nums.unshift(30);
console.log(firstElement); 

let secondElement = nums.unshift(10,20);
console.log(secondElement); 
console.log(nums);

```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Negative or Positive Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05. JS-Fundamentals-Arrays-Advanced-12--negative-posivite-numbers-Solution-ONLY-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Negative or Positive Numbers" taskId="java-path-js-advanced-arrays-Negative-or-Positive-Numbers"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function negativePositive(input){
  // Scrieți codul dvs. aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere

Scrieți o funcție care procesează **toate elementele unei matrice unul câte unul** și **creează o matrice nouă**.

Adăugați fiecare element negativ la început și fiecare element pozitiv (sau 0) la sfârșitul noii matrice.

**Intrarea** este dată ca **o matrice de șiruri**, care conțin **numere**.

**Ieșirea** trebuie imprimată pe consolă, fiecare element pe **o nouă linie**.

## Exemplul Unu
| **Intrare** | **Ieșire** |
| --- | --- |
|negativePositive([7, -2, 8, 9]) | \-2 |
| | 7 |
| | 8 |
| | 9 |


## Exemplul Doi
| **Intrare** | **Ieșire** |
| --- | --- |
|negativePositive([3, -2, 0, -1])  | \-1 |
| | \-2 |
| | 3 |
| | 0 |

[hints]
[hint]
Utilizați `unshift()` pentru a adăuga un element pe prima poziție.
[/hint] 
[hint]
Folosiți `push()` pentru a adăuga un element pe ultima poziție.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
negativePositive([\-2, 8, 7, 99, 100, 11])
[/input]
[output]
\-2
8
7
99
100
11
[/output]
[/test]
[test open]
[input]
negativePositive([3, \-2, 0, \-1])
[/input]
[output]
\-1
\-2
3
0 
[/output]
[/test]
[test]
[input]
negativePositive([\-2, \-11, 7, 8, 100, \-11, \-11, 11, \-2])
[/input]
[output]
\-2
\-11
\-11
\-11
\-2
7
8
100
11
[/output]
[/test]
[test]
[input]
negativePositive([\-2, \-11, 7, 8, 0, \-13, 0, \-25, 0])
[/input]
[output]
\-25
\-13
\-11
\-2
7
8
0
0
0
[/output]
[/test]
[test]
[input]
negativePositive([2, 3, 4, 5, 6, \-7, \-8])
[/input]
[output]
\-8
\-7
2
3
4
5
6
[/output]
[/test]
[test]
[input]
negativePositive([\-2, 3, 0, 5, \-6, 0, 8])
[/input]
[output]
\-6
\-2
3
0
5
0
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Remove Elements

## Pop

The `array.pop()` method **removes** and **returns** the last element from an array and also decreases the **length** of the collection.

This method is similar to the `STACK.pop()` in Java.

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let lastElement = nums.pop();

console.log(`The last element is: ${lastElement}`);
console.log(`Array's length is: ${nums.length}`);
console.log(nums); 
```

## Shift

The `array.shift()` method **removes** the **first** element from an array, **returns** that **removed element**, and changes the length of the array.

```js live
let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let firstElement = nums.shift();

console.log(firstElement);
console.log(nums);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sum First Last

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-1-solution-sum-first-last-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum First Last" taskId="java-path-js-advanced-arrays-Sum-First-Last" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function sumFirstLast(input){
 // Scrieți codul dvs. aici
}

```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere

Scrieți o funcție care **calculează** și **imprimă** suma primului și ultimului element al unei matrice.

**Intrarea** este dată ca o **matrice** de **șiruri**, care conțin **numere**.

**Ieșirea** trebuie să fie **valoarea returnată de către funcție**.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|sumFirstLast(['20', '30', '40']) | 60 |
|sumFirstLast(['5', '10']) | 15 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
sumFirstLast(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test open]
[input]
sumFirstLast(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
sumFirstLast(['2', '3', '2', '14', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
sumFirstLast(['2.5', '3.6', '1.1', '3.33'])
[/input]
[output]
5.83
[/output]
[/test]
[test]
[input]
sumFirstLast(['1000', '2000', '3000', '4000'])
[/input]
[output]
5000
[/output]
[/test]
[test]
[input]
sumFirstLast(['20', '30', '40'])
[/input]
[output]
60
[/output]
[/test]
[test]
[input]
sumFirstLast(['5', '10'])
[/input]
[output]
15
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Splice

The `array.splice()` **changes** the contents of an array by **deleting**, **adding**, or **replace** elements to a specific index.

This method is similar to the `remove(int index)` and `ArrayList.addAll()` methods in Java, but in Java there are is **no option for removing** multiple elements.

``` js live
let nums = [1, 3, 4, 5, 6];

// Inserts at index 1
nums.splice(1, 0, 2); 
console.log(nums);

// Replaces 1 element at index 4
nums.splice(4, 1, 19); 
console.log(nums);

// Removes 1 element at index 2
let el = nums.splice(2, 1); //Only two arguments when deleting
console.log(nums); 
console.log(el);
```
In first example `array.splice()` receives **three** arguments:

- First argument: **starting index** of the operation
- Second argument: **how many elements to delete**

When **deleting** elements, there is **no need** for passing the third argument.

- Third element: to pass **three** or **more** elements and those are the elements that will be **added** to the given index


[/slide]

[slide hideTitle]

# Fill

The `array.fill()` fills all the **elements** of an array from a **start** index to an **end** index with a static value.

In Java, **there is no** similar method.

```js live
let fruits = ['apple', 'orange', 'grapes', 'watermelon'];

// Fill with 'banana' from position 2 until position 4
console.log(fruits.fill('banana', 2, 4));

// Fill with 'strawberry' from position 1
console.log(fruits.fill('strawberry', 1));

// Replace all elements with 'blueberry'
console.log(fruits.fill('blueberry'));
```

[/slide]

[slide hideTitle]

# Reverse

The `array.fill()` reverses the array, where the **first** array element becomes the **last**, and the **last** array element becomes the **first**.

In Java, **there is no** similar method, rather a **custom** reverse method should be **created**.

```js live
let arr = [1, 2, 3, 4];
arr.reverse();

console.log(arr); 
```
[/slide]

[slide hideTitle]
# Sort

The `array.sort()` method **sorts the items** of an array.

This method is similar to the `Stream sorted()` method in Java.

Depending on the provided **compare function**, the sort order can either be **alphabetic** or **numeric**, and either **ascending** (up) or **descending** (down). 

By default, the `array.sort()` method sorts the values as **strings in alphabetical and ascending order.**

If we want to sort numbers or other values, we need to provide a correct **compare function.** 

In this example, we have an array of names. 

If we call the `array.sort()` method directly, without passing a **compare function**, the method will work correctly - it will sort the names in ascending alphabetic order.

```js live
let names = ['Peter', 'George', 'Mary'];
names.sort(); 

console.log(names); 
```

However, if we have an array that contains numbers, not strings, the result will be **unexpected and incorrect**. 

Without a passed **compare function**, the `array.sort()` method will treat the array as an array of strings, not as an array of numbers.

So, it will sort them as string values:

```js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```
[/slide]
