[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/43-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **Bazele de date NoSQL** au o **performanță** mai ridicată
- **Mongoose** ne oferă o soluție **bazată pe schemă** 

``` js
const modelSchema = new mongoose.Schema({
   propString: String 
});
```

- **Mongoose** suportă toate operațiile **CRUD** 
- Este posibilă **înlănțuirea interogărilor** cu ajutorul **Mongoose** 

``` js
Student.find({}).where('firstName').equals('george').where('age').gt(18).lt(65).sort({age:1}).skip(10).limit(10)
```

## În lecția următoare veți învăța:

- Cookie-uri și sesiuni
- Concepte de autentificare
- JSON Web Token

[/slide]
