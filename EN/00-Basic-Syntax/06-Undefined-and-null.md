# Undefined and Null

[slide]
## Undefined

[image assetsSrc="Undefined-Null.png" /]

When we declare a variable **without value**, it is undefined.

We can **set a varibale** to undefined later stage in our code.

If something exists **but is not given a value it is undefined**. 

If we try to access a parameter that is not specified in a function, we will get undefined.

``` js live
let car;
console.log(car);
```

Another possibility to have undefined is when we **manually set the value of a variable.**

``` js live
let car = undefined;  
console.log(car);
```

[/slide]

[slide]
## Null

Null is an object type, which can be used for any variable that holds an object which we do not want to be undefined.

For example, when we have the function to **return an object**, or a function that needs to read something from the **database and return an object**.

In case the function **does not find what it is looking for**, we tell it to return null, and then we can check if the function returns null. 

``` js live
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

person = null;
console.log(person);
console.log(typeof(person));

```
[/slide]

[slide]
## Null and Undefined

И двете са falsy, понеже и двете са в falsy таблицата. 

Null е стойност, която задаваме и знаем че вътре няма нищо, т.е. задаваме стойност null експлицитно.

Undefined се появява когато стойността не съществува или е декларирана но не ѝ е зададена стойност. 

Също така Undefined се получава от изпълнениете на програмата, т.е. получаваме инплицитно.

Null and Undefined са от различен тип

``` js live
console.log(typeof null);
console.log(typeof undefined);
```

Но са равни по идентити оператор

``` js live
console.log(null !== undefined);
console.log(null == undefined);
```

[/slide]