# Mongoose Middleware

[slide hideTitle]

# Pre Middleware

**Middleware** is a function that runs during the execution of asynchronous functions.

They are executed before or after a certain function that we specify.

The **Pre Middleware** runs before the hooked method is executed.

Multiple middleware functions will be executed one after another.

We use them when:

- We need to perform a **complex validation**

- We have to **remove** dependent documents

- When we have **asynchronous** tasks that a certain action **triggers**

This is how to add a Pre middleware function:

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

**Post middleware** is executed once all the **pre-hooks** and the **original method** have been executed.

Middleware functions run in the following order:

`pre-hooks -> method -> post-hooks`

Here is an example of adding Post middleware functions:

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
