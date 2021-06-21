# Mongoose Middleware

[slide hideTitle]

# Pre Middleware

**Middleware** este o funcție care rulează în timpul executării funcțiilor asincrone.

Acestea sunt executate înainte sau după o anumită funcție pe care o specificăm.

**Pre Middleware** rulează înainte ca metoda conectată să fie executată.

Mai multe funcții middleware vor fi executate una după alta.

Le folosim atunci când:

- Trebuie să efectuăm o **validare complexă**

- Trebuie să **eliminăm** documentele dependente

- Când avem sarcini **asincrone** pe care o anumită acțiune **le declanșează**

Iată cum se adaugă o funcție Pre Middleware:

``` js
const schema = new Schema(..);
schema.pre('save', function() {
    return hashPassword()
        .then(() => validateData());
});
```
[/slide]


[slide hideTitle]

# Post Middleware

**Post middleware** este executat odată ce toate  **pre hooks** și **metoda originală** au fost executate.

Funcțiile middleware rulează în următoarea ordine:

`pre-conectate -> metoda -> post-conectate`

Iată un exemplu de adăugare a funcțiilor Post middleware:

``` js
const schema = new Schema(..);

schema.post('save', function(doc) { 
  console.log('It has been saved', doc._id); 
}); 

schema.post('remove', function(doc) { 
  console.log('It has been removed', doc._id); 
});
```
[/slide]
