[slide hideTitle]

# Destructuring

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-8-9-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Let us have a look at some examples:

```js live
const department = {
    name: 'Engineering',
    data: {
        employeesCount: 20
    }
}
const {
    data
} = department;
console.log(data);
data.employeesCount = 30;
console.log(department);
```

In this example, we are referencing the "**data**" object inside the "**department**" object directly by assigning it to a new variable "**data**" using this line of code: `const { data } = department`.

You can see that the new "**data**" object is a reference to the "**data**" object inside the "**department**" object. 

We can prove that by changing the "**employeesCount**" data, of the newly created "**data**" object, to 30. 

Finally, when we print out the "**department**" object, we can see that the "**employeesCount**" has changed to 30 as well. 

```js live
const classroom = [{
    key: 'StudentOne'
}, {
    key: 'StudentTwo'
}, {
    key: 'StudentThree'
}]
const [firstObj, secondObj, thirdObj] = classroom;
console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);
firstObj.key = 'John Smith';
console.log(firstObj);
console.log(classroom);
```

In this example, we have an object "**classroom**", which is an array of objects. 

After destructuring: 

- Тhe object at index 0 will be assigned to "**firstObj**" 

- Тhe object at index 1 to "**secondObj**" 

- Тhe object at index 2 to "**thirdObj**"

Remember that "**firstObj**", "**secondObj**", and "**thirdObj**" are referencing the objects inside the "**classroom**" array.

Now, let us change the `firstObj.key` to be equal to "John Smith", and print out the "**classroom**".

We can see that the change has been reflected there too.



[/slide]

[slide hideTitle]

# Nested Destructuring

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-10-nested-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Now, let us have a look at some nested destructuring.

We can use this expression: `const {data: {director}} = department` to create a new variable "**director**" by destructuring the "**department**" object.

Just like in the examples above, the new "**director**" object is referencing the "**director**" object inside the "**data**" object.

```js live
const department = {
    name: 'Engineering',
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
}
const {
    data: {
        director
    }
} = department;
console.log(director);
director.name = 'Peter';
console.log(department);
```

[/slide]

[slide hideTitle]

# Destructuring Nested Arrays

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-11-destructuring-nested-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When destructuring nested arrays, it is important to know the indexes of what you are looking for. 

Also, you need to provide a reference variable, or a comma placeholder, for each element up and until the one you are looking for. 

```js live
const departments = [
    ['Engineering', ['secretary', 'director', 'worker']],
    ['Accounting', ['director', 'accountant']]
];
const [
    [name, positions]
] = departments;
console.log(name);
console.log(positions);
```

In this example, the new "**name**" and "**positions**" variables correspond to the data of the "**departments**" object at index 0. 

Square brackets are used when destructuring arrays. 

Try extracting the data at index 1 and store it in new variables. 

Then print out the result. 
[/slide]

[slide hideTitle]
# Objects and Array Destructuring

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-12-objects-and-arrays-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Destructuring an array of objects:

```js live
const employees = [{
    name: 'John',
    position: 'worker'
}, {
    name: 'Jane',
    position: 'secretary'
}];
const [{
    name
}] = employees;
console.log(name);
```

Create a new variable "**name**" using the expression `const [{name}] = employees`.

In this case, "**name**" will be equal to "John". 

Use this expression: `const [{}, {name}] = employees` to assign "Jane" to the "**name**" variable and print out the result.

Destructuring an object containing an array or arrays.

Try printing out the rest of the names yourself.

```js live
const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
}
const {
    employees: [employee]
} = company;
console.log(employee);
```

[/slide]