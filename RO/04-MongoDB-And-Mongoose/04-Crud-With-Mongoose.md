# CRUD with Mongoose

[slide hideTitle]

# CRUD

Using Mongoose, you can perform all the **CRUD** operations wherever you want in your code.

**CRUD** stands for - **Create**, **Retrieve**, **Update**, **Delete**.

- **Create (Persist Data)**: `save()` is used to insert a record in the collection.

We have to create a Model Object first.

``` js
let newEmployee = new Employee(employee); // this is model object.
newEmployee.save() // Saving method
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
```

- **Read**: We can use `.find()` to retrieve data.

``` js
Student.find({})
```

- **Update (Modify Data)**: If we know the id of a collection, we can update it with `.findByIdAndUpdate()`.

``` js
Student
  .findByIdAndUpdate(id, {prop: newVal}, callback)
```

- **Delete (Remove Data)**: We can use the `.findByIdAndRemove()` or the `.remove()` methods depending on the situation.

``` js
Student.findByIdAndRemove(id, callback)
Student.remove({name: studentName})
```


[/slide]

[slide hideTitle]

# Example: Create

Take a look at the following example:

``` js
const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/unidb';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    age: {
        type: Number
    }
});
const Student = mongoose.model('Student', studentSchema);

mongoose.connect(connectionStr).then(() => {
    new Student({
            name: 'Peter',
            age: 21
        })
        .save()
        .then(student => {
            console.log(student._id)
        });
});
```

This is a simple way of **connecting to the database**, **creating a schema**, and **constructing a model**.

After connecting to the database, we **insert** a new Student with a "**name**" and "**age**" properties.

Then, we save it using the `save()` method.

Finally, we print the added student.

[/slide]

[slide hideTitle]

# Example: Read

Here are **three** different ways to retrieve data with Mongoose:

``` js
Student
    .find({})
    .then(students => console.log(students))
    .catch(err => console.error(err))

Student
    .find({
        name: 'Peter'
    })
    .then(students => console.log(students))

Student
    .findOne({
        name: 'Peter'
    })
    .then(student => console.log(student))
```

The first command finds all of the students inside the database and print them.

The second one finds all students by the name property we pass and prints them to the console.

The third example is used to find the first occurrence of a student with the name "Peter". 

If there are more students with that name, using `FindOne()` will not print all of them.

Do not forget to always handle potential errors.

[/slide]

[slide hideTitle]

# Example: Update

We can also **update** one or multiple entities with several methods.

``` js
Student
    .findById('57fb9fe1853ab747b0f692d1')
    .then((student) => {
        student.firstName = 'Steven'
        student.save()
    });

Student
    .findByIdAndUpdate('57fb9fe90cd76e4e2c59e1a2', {
        name: 'Steven'
    });

Student
    .update({
        firstName: 'Chris'
    }, {
        name: 'Peter'
    }, {
        multi: true
    });
```
[/slide]


[slide hideTitle]

# Example: Remove

To remove data from the database, use: `remove(conditions, [callback])`.

Note that if the condition is **not passed** or **empty**, then all the records will be **removed**.

Take a look at the following example:

```js
userModel.remove({userid:"George"})
// Removes the record with userid "George"
```

We can **remove** all records of the users collection:

```js
userModel.remove()
```

[/slide]

