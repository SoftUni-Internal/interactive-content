# Different Type of Errors

[slide]

# Why to Validate?

When we have a **bigger app**, we have **more data**.

We get this data from the user.

That means that we have to prevent the user, enter something **incorrect**.

That is why we use validation.

So if the user enters the correct data, we will write it in the database.

But if it is incorrect, we will return a message, and the data will not be written in the database.

[/slide]

[slide]

# How to Validate?

We can validate on the **server\-side**, on the **client\-side** and in the **database**.

For best security, we use all three methods.

**client\-side** validation is not very useful because the user can change the code in the browser.

This validation does not protect or secures us from incorrect data, even though it is good to have it.

In the **server\-side** validation unlike the **client\-side** one, the code is not visible to the user.

So this validation cannot be **changed** or **disabled**.

When we want to validate data, we focus on the **server-side**.

But we need to make sure that the database is also validated.

In most database engines, there is **build\-in validation**, which can be turned on.

Database validation is **not required** because there should be no situation where the user pass invalid data.

But we should not ignore it.

The most important is to have a good **server\-side** validation.

[/slide]

[slide]

# validator.js

This library can be used in both the **client\-side** and the **server\-side**.

Validator.js give us a wide variety of functions to validate data.

We install it with `npm install validator`.

Here is an example of **validator.js** on the **server\-side**:

```js
const validator = require('validator');
const body = req.body;
validator.isEmail(body.email);
```

This code will return **true** or **false**.

And here is an example on the **client\-side**:

```js
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail($('#email').val());
</script>
```

On the client\-side this library also returns **true** or **false**.

[/slide]

[slide]

# Express-Validator

We can use **Express\-Validator** to wrap the validator library.

**Express\-Validator** is a set of middlewares to express.js.

We can set checks for the fields from which we receive data.

The check the data we, use the function `check()`.

To install express\-validator we need to write `npm install express-validator`.

Now let us have a look at this example:

```js
const { check, validationResult } = require('express-validator');

check('email').isEmail();
check('password').isLength({ min: 5 });

const errors = validationResult(req);

if (!errors.isEmpty()) {
}
```

So in this example, the first thing we do is require **express\-validator**.

After requesting **express\-validator**, we check the email and the length of the password.

Finally, we call the `validationResult()` function to get the result of the check.

Then we check if there are any errors in the result.

So If we have errors, we will return them, but if there are no errors, we continue with creating a user.

[/slide]

[slide]

# Sanitizers

**Sanitizers** are functions that keep the data in the right format.

Their work is based on removing illegal characters from the data.

-  They **normalize** emails.

-  Sanitize functions can **trim** characters from the input.

-  Also, they can remove characters that are **blacklisted**.

Here is an example:

```js
const { body } = require('express-validator');

body('email').isEmail().normalizeEmail();
body('password').isLength({ min: 5 }).isAlphanumeric().trim();
```

In this example, we use sanitizing functions on the email and the password.

-  `normalizeEmail()` will canonicalizes the email address.
-  `trim()` will trim the characters and the whitespace.

The sanitization function mutates the request.

So if the user input is `John@example.com`, after the sanitization, it will be `john@example.com`.

[/slide]

[slide]

# Custom Validation

With **Express\-validators** we can create custom **validation**, **messages** and **sanitizers**.

Let us have a look at this **custom validator**:

```js
const { body } = require('express-validator');

app.post('/user', body('email').custom(value => {
    return User.findUserByEmail(value)
        .then(user => {
	      if(user){
                return Promise.reject('E-mail already in use');
            }
	  });
};
```

In this example, we **require** the `express\-validator` and create a post request.

On the **body** we call the `custom()` function.

On this function, we specify our validation and message.

To create a custom sanitizer we use the `customSanitizer()` method.

Here is an example:

```js
const { sanitizeParam } = require('express-validator');

app.post(
   '/object/:id',
   sanitizeParam('id').customSanitizer((value) => {
      return ObjectId(value);
   }),
   (req, res) => {
      // Handle the request...
   }
);
```

Firstly, we require the **sanitizeParam** from the **express\-validator**.

After that, we use `customSanitizer()`, which will return the change changed value.

[/slide]

[slide]

# Mongoose Validation

Mongoose validation is **middleware** validation defined in the **SchemaType**.

It is registered as a `pre('save')` hook.

This validation is also **asynchronously recursive** and we can customize it.

We have the option **unique**, which is a helper, not a validator, for building the MongoDB unique indexes.

[/slide]

[slide]

# Mongoose Save and Validate Hooks

To trigger the `validate()` hook we need the `save()` function.

But before any `pre('save')` hook, are called firstly the `pre('validate')` and `post('validate')` hooks,

For example:

```js
schema.pre('validate', function () {
   //this gets printed first
});
schema.post('validate', function () {
   //this gets printed second
});
schema.pre('save', function () {
   //this gets printed third
});
schema.post('save', function () {
   //this gets printed fourth
});
```

First, will be executed the validation hooks.

But the first from the validation ones will be the `pre('validate')` hook.

After the validation hooks, will be executed the **save** ones.

Again in first will be the `pre('save')`, and the second will be `post('save')`.

[/slide]

[slide]

# Mongoose Built-in Validators

All Mongoose **SchemaTypes** have built-in validators.

They are:

-  For **Numbers**.

   -  **Min** and **Max** validators.

-  For **Strings**.

   -  **enum**
   -  **match**
   -  **minlength**
   -  **maxlength**

A mongoose scheme will look like this:

```js
const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 20,
   },
});
```

In this schema, we have the **type**, which is **string**.

And **minlength** and **maxlength**, they specify the minimum and the maximum length of that string.

We also set that the username is required and unique.

[/slide]

[slide]

# Mongoose Custom Validators

Although we have many built\-in validators, if we cannot find what we need, we can make **custom** ones.

With the custom validators, we can send a custom message.

For example:

```js
const userSchema = new Schema({
   phone: {
      type: String,
      validate: {
         validator: function (v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
         },
         message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'User phone number required'],
   },
});
```

In this example, we want to validate a phone number.

So we create the schema with the phone object.

We use the property validate, which holds two parameters.

They are the **validator** and **message**, both are storing functions.

The validator takes a value and returns a **boolean**.

The message returns an error if the validation fails.

[/slide]

[slide]

# Mongoose Validation Errors

**ValidationError** object is returned when the validation fails.

This object has **kind**, **path**, **value** and **message** properties.

We access these properties from `err.errors.color.Property`.

Here is an example:

```js
toy.save((err) => {
	assert.equal(err.errors.color.message, 'Color');
	assert.equal(err.errors.color.kind, 'Invalid color');
	assert.equal(err.errors.color.path, 'color');
	assert.equal(err.errors.color.value, 'Green');
	...
});
```

So the **message** property will return the error message.

The **kind** property will return the type of the error.

The **path** property will return the track of the failed validation property.

And the **value** will return the value of the failed property.

[/slide]

[slide]

# Validation

In the end, every type of validation can fail.

That is why we need to have multiple layers of validation.

Some of the things that we can do when this happens are:

- Always to return helpful and readable messages.

- Avoid reloading the page because it is a bad user experience.

- And to test every piece of our code.

More info about **express\-validator** and **mongoose** you can find on:

- [express\-validator](https://express-validator.github.io/docs/)
- [mongoose](https://mongoosejs.com/docs/validation.html)

[/slide]
