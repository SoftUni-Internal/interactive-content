# Mongoose Queries

[slide hideTitle]
# Queries

The **Mongoose Query** class provides an interface for **finding**, **updating**, and **deleting** documents.

**Mongoose** defines all queries of the native MongoDB driver in a more **clear** and **understandable** way.

This is an example of writing a query in default **MongoDB** syntax:

``` js
{
  $or: [
    {conditionOne: true},
    {conditionTwo: true}
  ]
}
```
In this example, we can find an object base on two criteria, but both criteria do not need to be true, but just one of them can be true. 

To do this we use `$or` and we pass an array of objects, where we insert as many conditions as we need, so we can find a certain object in the database.

This is an example of writing the same query in **Mongoose** syntax:

``` js
.where({ conditionOne: true })
.or({ conditionTwo: true })
```

[/slide]


[slide hideTitle]

# Mongoose Queries Example

There are many model functions, like `find()` return a **mongoose query**.

``` js
const Character = mongoose.model('Employee', Schema({
  fname: String,
  lname: String,
  age: Number
}));

const query = Character.find();
query instanceof mongoose.Query; // true

// Execute the query
const docs = await query;
```

**Mongoose** supports many different queries:

- **For equality / Non-equality**

``` js
Student.findOne({'lastName':'Higgins'})
```

``` js
Student.find({}).where('age').gt(7).lt(14)
```

``` js
Student.find({}).where('facultyNumber').equals('12399')
```

- **Selection of some properties**

```js
Student.findOne({'lastName':'Smith'}).select('name age')
```

- **Sort**

To get sorted a result we need to use another function name `sort()`.

``` js
Student.find({}).sort({age:-1})
```

The **keywords** or you can say values are: **asc**, **desc**, **ascending**, **descending**, **1**, **-1**

- **Limit & Skip**

```js
Student.find({}).sort({age:-1}).skip(10).limit(10)
```

Sometimes we need all documents and sometimes we need only a certain number of the documents.

For this, we can use the `limit()` function that can limit the number of documents in our output result.

In the example above, the `skip()` function is used to return a certain number of results after a certain number of documents.

We can **stack** different methods one upon the others.

``` js
Student.find({})
  .where('firstName').equals('George')
  .where('age').gt(18).lt(65)
  .sort({age:-1})
  .skip(10)
  .limit(10)
```

[/slide]

[slide hideTitle]

# Model Population

Population is the process of **automatically replacing** the **specified paths** in the document with document(s) from **other** collection(s). 

We may **populate** a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query.

``` js
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  facultyNumber: String
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});
const subjectSchema = new mongoose.Schema({
  title: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});
const Student = mongoose.model('Student', studentSchema);
const Subject = mongoose.model('Subject', subjectSchema);
```

In this example, we are creating **two models** that reference each other.

To load all the data referenced with the entity use `populate()` method.

``` js
Student.findOne({ name: 'Peter' })
  .populate('subjects')
  .then(student => {
     console.log(student.subjects)   })
```

We can also load **multiple** paths:

``` js
Student.findOne({ name: 'Peter' })
   .populate('subjects')
   .populate('teacher')
   .then(student => {
      console.log(student.teacher)
      console.log(student.subjects)   })
```

Let us take a look at some notes about `populate()`:

- If no document is found, then the field will be **null**

- We can **chain** populate method for populating **multiple** fields

- If we have an array of documents and the documents are **not found**, it will return an **empty array**

- If there are two populate methods, populate the same field, the second populate will **override** the first one

We can populate based on a **condition**:

``` js
Subject.
  find({})
  .populate({
    path: 'students',
    match: { age: { $gte: 19 }},
    select: 'name facultyNumber',
    options: { limit: 3 }
  })
```

You can read more about population [here.](mongoosejs.com/docs/populate.html)

[/slide]