# Internal Object Properties

[slide hideTitle]

# Internal Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-27-28-internal-object-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="function-context-06.png" /]

All the properties of an object have properties of their own, namely **Enumerable, Configurable, Writable** and **Value**.

To **list the internal properties** of any object property, use `Oject.getOwnPropertyDescriptor(yourObject, 'propertyName');`

```js
let person = {
    name: 'Billy',
    age: 50
}

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(descriptor);
```

**Output:**
```js
{
  value: 'Billy',
  writable: true,
  enumerable: true,
  configurable: true
}
```

- **Enumerable**: We can enumerate object properties that are set to **enumerable:true** with `for..in` loop or list them by using the ``Object.keys()`` method


- **Configurable** - used to modify the behavior of the property

Setting **configurable: false** makes it so that the property cannot be deleted. 

Only properties that are **configurable** can be deleted.

- **Writable** - properties marked as **writable: true** can be modified and their values can be updated by simply assigning a new value to them

- **Value** - allows you to change the value of the property even when it is set to **writable:false** by using `Object.defineProperty()`

[/slide]

[slide hideTitle]
# Non-enumerable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-29-objects-non-enumerable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Run the code below:

```js live
let person = {
    name: 'Billy',
    age: 50
}

for (const property in person) {
    const item = `${property}: ${person[property]}`;
    console.log(item);
}
```

The expected **output** here is:

```js
name: 'Billy'
age: 50
```

**Note:** Instead of the **for loop**, you could log the result of `Object.keys(person)`, and the properties will be returned as an array. 

```js
console.log(Object.keys(person));
// output -> [ 'name', 'age' ]
```

We can change the value of the internal properties by using the ``Object.defineProperty()`` method. 

You can change one, or you can even modify all internal properties at once.

In this example we will change both the value of **age** and set **enumerable** to **false**.

```js
Object.defineProperty(object1, 'property1', {
    enumerable: false,
    writable: true
    // and so on
});
```

```js live
let person = {
    name: 'Billy',
    age: 50
}

Object.defineProperty(person, 'age', {
    enumerable: false
});

for (const property in person) {
    const item = `${property}: ${person[property]}`;
    console.log(item);
}
```

Now the **expected output** is:

```js
name: Billy
```

Notice how age is no longer output to the console? It is still inside the object but it can no longer be enumerated!

You can also try listing the properties with `Object.keys(person)` to list the properties, but the only visible property will be **name**.

Printing the object itself with `console.log(person)` will not print out the **age** property either.

**Non-enumerable** properties are not serialized when using `JSON.stringify()`.

[/slide]

[slide hideTitle]
# Non-writable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-30-objects-non-writable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Values of **non-writable** properties cannot be changed using assignments.

Using `Object.defineProperty` by specifying a property that does not exist in our object, we can add a brand new property to that object, set its value and make it non-writable:

```js live
let object = {
    property: 2
};
Object.defineProperty(object, 'anotherProperty', {
    value: 2,
    writable: false
});

console.log('Original value:', object.anotherProperty);

object.anotherProperty = 1000;

console.log('New value:', object.anotherProperty);
```

Expected output:

```js
Original value: 2
New value: 2
```

If you modify the code above and set writable to **true**, as it is by default, then you would be able to assign the value **1000** to **anotherProperty**. 

The output will be:

```js
Original value: 2
New value: 1000
```

If the **non-writable** property is an object then the reference of the object will not be writable, but the object itself can be modified by assigning it a new value.
[/slide]

[slide hideTitle]

# Non-configurable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-31-object-non-configurable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If you set **configurable: false** for any property you will only be able to modify the **writable** property if it is true to false and nothing else. 

Any attempt to change any other internal property **will fail** and throw a **TypeError**. 

```js
let ob = {};
Object.defineProperty(ob, 'a', {
    configurable: false,
    writable: true
});
Object.defineProperty(ob, 'a', {
    enumerable: true
}); // throws a TypeError
Object.defineProperty(ob, 'a', {
    value: 12
}); // throws a TypeError
Object.defineProperty(ob, 'a', {
    writable: false
}); // This is allowed!!
Object.defineProperty(ob, 'a', {
    writable: true
}); // throws a TypeError
```
[/slide]

[slide hideTitle]

# Object Freeze and Seal

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-32-object-freeze-and-seal-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Syntax: `Object.freeze(obj)` and `Object.seal(obj)`

## Object Freeze

`Object.freeze()`- does not allow adding new properties to the passed object and properties will all be **non-writable**.

Let us see an example:

```js
const obj = {
    property1: 'something',
    property2: 654,
    property3: {
        innerProperty: 'can-change'
    }
};

const frozenObj = Object.freeze(obj);
frozenObj.property1 = 'trying to change it'; 
// TypeError
```

All of the properties are changed to **non-writable**, so you cannot assign a new value to **property1** in this way and you would get a **TypeError** if you try.

You can change the value of **innerProperty** only because it contains a reference to an object. 

The reference does not change but the value of **innerProperty** can be assigned to.

```js
frozenObj.property3.innerProperty = 'something else';
```

To prevent this from happening, you can **freeze** the object property:

```js
Object.freeze(frozenObj.property3);

frozenObj.prop3.innerProperty = 'this will not work'; 
// Type Error
```

You can use `Object.isFrozen(someObject)`. 

If **someObject** is frozen, this would return **true**.

## Object Seal
`Object.seal()`- does not allow adding new properties to the object and all its properties become **non-configurable**. 

The values of the properties can be changed.

```js live
const obj = {
    property1: 'something',
    property2: 654
};

Object.seal(obj);
obj.property1 = 'something else' // OK
delete obj.property1 // Does nothing. Also: Error in strict mode;
console.log(obj);
```

``delete obj.property1`` was supposed to remove this property from the object, but since it is **sealed** it will not work.

You can check if an object is sealed with ``Object.isFrozen(someObject)``.

## Conclusion

Both **freeze** and **seal** deal with the object's immutability. 

When using `Object.freeze()` new values cannot be assigned to the properties. 

`Object.seal()` makes it so that new properties cannot be added and existing properties cannot be removed, but you can assign new values to them.

In any case, if you have a property that is also an object, only its reference cannot be changed, but the value can, even if it is **non-writable**. 

To prevent this, we can also **freeze** the object property, and then the value inside it will not be writable.

[/slide]

[slide hideTitle]

# Problem with Solution: Person

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-34-solution-person-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Person" taskId="js-advanced-function-context-Person" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
class Person{
    // Write your code here
}

```
[/code-editor]
[task-description]
# Description
Write a class which takes **first** and **last** names as **parameters** and returns an object with **firstName**, **lastName** and **fullName**: "\{**firstName**\} \{**lastName**\}`. 

Properties should all be **accessible**. We discovered that "accessible" also means "mutable". 

This means that:

- If **firstName** or **lastName** have changed, then **fullName** should also be changed

- If **fullName** is changed, then **firstName** and **lastName** should also be changed

- If **fullName** is **invalid**, you should not change the other properties

A **valid** **full name** is in the format: "\{**firstName**\} \{**lastName**\}"

**Note:** Check the examples below for more information.

# Examples

## Input

```js
let person = new Person('Peter', 'Smith');
console.log(person.fullName); // Peter Smith

person.firstName = 'George';
console.log(person.fullName); // George Smith

person.lastName = 'Peterson';
console.log(person.fullName); // George Peterson

person.fullName = 'Nikola Tesla';
console.log(person.firstName) // Nikola
console.log(person.lastName)  // Tesla

let person = new Person('Albert", "Simpson');
console.log(person.fullName); // Albert Simpson

person.firstName = 'Simon';
console.log(person.fullName); // Simon Simpson

person.fullName = 'Peter';
console.log(person.firstName) // Simon
console.log(person.lastName)
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let Person = result;
let a = new Person("Albert", "Simpson");
let actual = a.fullName;
let expected = "Albert Simpson";
assert.equal(actual,expected);
a.firstName = "Simon";
let actualFullName = a.fullName;
let expectedFullName = "Simon Simpson";
assert.equal(actualFullName,expectedFullName);
a.fullName = "Peter";
let b = a.firstName;
let expectedB = "Simon"
assert.equal(b,expectedB);
let v = a.lastName;
let expectedV = "Simpson";
assert.equal(v,expectedV);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let person = new Person("Peter", "Ivanov");

let act1 = person.fullName;
let exp1 = "Peter Ivanov";
assert.equal(act1,exp1);

person.firstName = "George";
let act2 = person.fullName;
let exp2 = "George Ivanov";
assert.equal(act2,exp2);

person.lastName = "Peterson";
let act3 = person.fullName;
let exp3 = "George Peterson";
assert.equal(act3,exp3);

person.fullName = "Nikola Tesla";
let act4 = person.firstName;
let exp4 = "Nikola";
assert.equal(act4,exp4);

let act5 = person.lastName;
let exp5 = "Tesla";
assert.equal(act5,exp5);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
