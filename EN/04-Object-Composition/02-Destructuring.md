

[slide]

# Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Let us have a look at some examples:

In this example we are referencing the `data` object inside `department` object directly by assigning it to a new variable `data` using this line of code: `const { data } = department`.

You can see that the new `data` object is a refernece to `data` object inside `department` object. 

We can prove that by changing `employeesCount` of the newly created `data` object to 30.

Finally printing out the `department` object we can see that the `employeesCount` has changed to 30 as well.

```js live
const department = {
    name: "Engineering",
    data: { employeesCount: 20 }
    }
    const { data } = department;
    console.log(data);
    data.employeesCount = 30;
    console.log(department);
```

In this example we have an object `objectList`, which is an array of objects. 

After destructuring, the object at index 0 wiil be assigned to `obj1`, the object at index 1 to `obj2` and the object at index 2 to `obj3`.

Remember that `obj1`, `obj2` and `obj3` are referencing the objects inside `objectList` array.

Now let us change the `obj1.key` to be equal to "John Smith" and print out the `objectList`.

We can see that the change has been reflected there too.

```js live
const objectList = [ { key: 'value' }, { key: 'value' }, { key: 'value' } ]
const [ obj1, obj2, obj3 ] = objectList;
console.log(obj1);
console.log(obj2);
console.log(obj3);
obj1.key = "John Smith";
console.log(obj1);
console.log(objectList);
```

[/slide]

[slide]

# Nested destructuring

Now let us have a look at some nested destructuring.

Use this expression: `const {data: {director}} = department` to create a new variable `director` by destructuring `department` object.

Just like in the examples above the new `director` object is referencing the `director` object inside the `data` object.

```js live
const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
}
const {data: {director}} = department;
console.log(director);
director.name = "Peter";
console.log(department);
```

[/slide]

[slide]

# Destructuring nested arrays

When destructuring nested arrays is important to know the position of what you are looking for.

Also you need to provide a reference variable or comma placeholder for each element up and until the one you are looking for.

In this example the new variables `name` and `positions` correspond to the data of the `departments` object at index 0.

Use square brackets when destructuring arrays.

Try extracting the data at index 1 and store it in new variables. Then print out the result.

```js live
const departments = [['Engineering', ['secretary', 'director', 'worker']], ['Accounting', ['director', 'accountant']]];
const [[name, positions]] = departments;
console.log(name);
console.log(positions);
```

[/slide]

[slide]

# Objects and array destructuring

Destructuring an array of objects.

Create a new variable `name` using the expression `const [{name}] = employees`.

Obviously `name` will be equal to "John". 

Use this expression: `const [{}, {name}] = employees` to assign "Jane" to the `name` variable and print out the result.

```js live
const employees = [{name: 'John', position: 'worker'}, {name: 'Jane', position: 'secretary'}];
const [{name}] = employees;
console.log(name);
```

Destructuring an object containing array or arrays.

Try printing out the rest of the names yourself.

```js live
const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
}
const {employees:[employee]} = company;
console.log(employee);
```

[/slide]