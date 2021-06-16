[slide hideTitle]
# Summary

## In this lesson you learned:

- **NoSQL databases** have higher **performance**
- **Mongoose** gives us a **schema-based** solution

```js
const modelSchema = new mongoose.Schema({
   propString: String 
});
```

- **Mongoose** supports all **CRUD** operations
- **Chaining queries** with **Mongoose** is possible

```js
Student.find({}).where('firstName').equals('george').where('age').gt(18).lt(65).sort({
    age: 1
}).skip(10).limit(10)
```

## In the next lesson, you will learn:

- Cookies and Sessions
- Authentication Concepts
- JSON Web Token

[/slide]
