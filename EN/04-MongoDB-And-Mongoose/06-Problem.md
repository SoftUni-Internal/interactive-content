# Mongoose Middleware

[slide hideTitle]

# Pre Middleware

Middleware is functions that are passed control during the execution of asynchronous functions.

They are executed before or after a certain function that we specify.

- Pre Middleware

Pre middleware functions are executed one after another. We use them when:

- We have a complex validation

- To remove dependent documents

- When we have asynchronous tasks that a certain action triggers

As the name suggests, pre middlewares get executed **before** some other method execution on some documents.

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

Post middleware is executed once all the pre-hooks have been executed and after the original method has been executed.


`pre-hooks -> method -> post-hooks`


An example would help:

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