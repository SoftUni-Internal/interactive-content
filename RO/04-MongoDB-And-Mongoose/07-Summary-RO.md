[slide hideTitle]
# Rezumat

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
