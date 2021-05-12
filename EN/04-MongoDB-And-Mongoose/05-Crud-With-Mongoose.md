# CRUD with Mongoose

[slide hideTitle]

# CRUD

Using Mongoose you can perform all **CRUD** operations wherever you want in your code.

**CRUD** stands for - **Create**, **Retrieve**, **Update**, **Delete**.

- **Create (Persist Data)**: `save()` is used to insert a record in the collection.

We have to create a Modal Object first.

``` js
let newEmployee = new Employee(employee); // this is modal object.
newEmployee.save() // Saving method
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })
```

- **Read**

We can retrieve data with this method:

``` js
Student.find({})
```

- **Update (Modify Data)**

``` js
Student
  .findById(id, callback)
Student
  .findByIdAndUpdate(id, {prop: newVal}, callback)
Student
  .update({_id: id, {prop: newVal}, callback)
```

We must first find the student by their **id**.

After that, we **update** and **save** the new values in the model.

- **Delete (Remove Data)**

``` js
Student.findByIdAndRemove(id, callback)
Student.remove({name: studentName})
```


[/slide]

[slide hideTitle]

# Create Example

``` js
const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/unidb';
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  age: { type: Number }
});
const Student = mongoose.model('Student', studentSchema);
mongoose.connect(connectionStr).then(() => {
  new Student({ name: 'Petar', age: 21 })
    .save()
    .then(student => {
      console.log(student._id)
    });
});
```

This is a simple example of **connecting to the database**, **creating a schema**, and **constructing a model**.

Inside the model, we **insert** a new Student with a "**name**" and "**age**".

Then we save the model using the `save()` method.

At the final, we print the added student.


[/slide]

[slide hideTitle]

# Read Example

``` js
Student
    .find({})
    .then(students => console.log(students))
    .catch(err => console.error(err))
Student
    .find({name: 'Peter'})
    .then(students => console.log(students))
Student
    .findOne({name: 'Peter'})
    .then(student => console.log(student))
```

The first command finds all of the students inside the database and print them.

Second, find all students by the name we pass and print them in the console.

The third example is used to find the first student with the name Peter. 

If there are more students with that name, using `FindOne()` will not print all of them.

Do not forget to always handle errors.

[/slide]

[slide hideTitle]

# Update Example

We can **update** multiple entities.

``` js
Student
    .findById('57fb9fe1853ab747b0f692d1')
    .then((student) => { 
      student.firstName = 'Steven'
      student.save()
    });
Student
    .findByIdAndUpdate('57fb9fe90cd76e4e2c59e1a2',
     { name: 'Steven' }
    );
Student
    .update(
      { firstName: 'Chris' },
      { name: 'Peter' },
      { multi: true })
```

[/slide]


[slide hideTitle]

# Remove & Count Example

- Syntax: `remove(conditions, [callback])`

Note that if the condition is **not passed** or **empty** then all the records will be **removed**.

Take a look at the following example:

``` js
userModel.remove({userid:"George"})
// Remove the document having userid "George"
```

We can **remove** all documents of users collection:

``` js
userModel.remove()
```

[/slide]

