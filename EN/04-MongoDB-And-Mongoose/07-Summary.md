[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.MongoDB-And-Mongoose/43-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
