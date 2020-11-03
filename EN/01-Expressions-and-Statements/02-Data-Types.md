
[slide]
# Data Types
Six data types that are primitives:
* Boolean - true or false
* Null
* Undefined    
* Number - 1, 2, 4.5, -2        
* String - "Hello, World!"
* Symbol (new in ECMAScript 6)
* BigInt

# Data Types are Dynamic
In JavaScript data types are dynamic

A single variable can be used to hold different data types:
```js
let x = 5;   // x is Number
x = "John";  // x is String
x = true;  // x is Boolean
```

Data types set ranges of values with similar characteristics.

The are characterized by:
  * **Name** 
  * **Size** (memory usage) - Example: 4 bytes
  * **Default value** - Example: 0
[/slide]

[slide]
# Naming Conventions
In computer programming, a naming convention is a set of **rules** for choosing the name to be used for variables.

In JS the convention for naming variables is ***"camel-case"***. 

There are other naming conventions which are used in different languages such as pascal case, snake case. 

**Camel case** combines words by:
* capitalizing all words following the first word
* removing the space:
```js
let userLoginCount;
```

**Pascal case** combines words by:
* capitalizing each word along with the first one
* removing the space:
```js
let UserLoginCount;
```

**Snake-case** is another naming convention, which separates words with:
* one underscore character \(_\)
* no spaces
* each element's initial letter usually lowercased within the compound
* the first letter either upper or lowercase:
```js
let users_count;
let first_name;
```
[/slide]