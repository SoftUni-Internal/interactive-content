# Different Type of Errors

[slide hideTitle]

# Why to Validate?

When we have a **larger application**, we have **more data** to store.

This data comes from the user.

That means that we have to prevent the user from entering **incorrect** data.

That is why we use validation.

If the user enters a **correct** data, we will store it in the database.

But if it is **incorrect**, we need to return a message, and we should not store the data in the database.

[/slide]

[slide hideTitle]

# How to Validate?

We can validate on the **server-side**, on the **client-side** and in the **database**.

For best security, we should use all of the three methods.

**client-side** validation is not very useful because the user can change the code in the browser.

This validation does not protect or secures the application from incorrect data, even though it is good to have it.

In **server-side** validation, unlike the **client-side** one, the validation is not visible to the user.

This means that it cannot be **altered** or **disabled**.

When we want to validate the data that we are receiving, we focus on the **server-side** validation.

But we need to make sure that the database is also validated.

In most database engines, there is **built-in validation**, which can be easily enabled.

Database validation is **not required** because there should be no situation where the data can be invalid.

[/slide]

[slide hideTitle]

# validator.js

The **validator.js** library can be used in both the **client-side** or the **server-side**.

It gives us a wide variety of functions to validate data.

We can install it with `npm install validator`.

Here is an example of **server-side** validation:

```js
const validator = require('validator');
const body = req.body;
validator.isEmail(body.email);
```

The function `isEmail()` will return **true** or **false**.

And here is an example on the **client-side**:

```js
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail($('#email').val());
</script>
```

On the **client-side**, `isEmail()` will also returns **true** or **false**.

[/slide]

[slide hideTitle]

# Express-Validator

We can use **Express-Validator** to wrap the **validator.js** functions.

**Express-Validator** is a set of **middlewares** to express.js.

We can set checks for the fields from which we receive data with the `check()` function.

To install **express-validator**, we need to write `npm install express-validator`.

Now let us have a look at this example:

```js
const { check, validationResult } = require('express-validator');

check('email').isEmail();
check('password').isLength({ min: 5 });

const errors = validationResult(req);

if (!errors.isEmpty()) {
  console.error('Request Failed')
}
```

In this example, we check the **email** and the **length** of the **password**.

After, we call the `validationResult()` function to get the result of the validation.

In the end, we check if there are errors in the result.

If we have errors, we will print an error to the console. 

But if there are no errors, we continue with creating a user.

[/slide]

[slide hideTitle]

# Sanitizers

**Sanitizers** are functions that keep the data in the correct format.

Their work revolves around modifying the request and removing illegal characters from the data.

If the user input is `John@example.com`, after the sanitizer function it will be `john@example.com`.

Here are use cases where the sanitizers are useful:

- **Normalizing** emails.

- **Trimming** characters from the input.

- Removing characters that are **blacklisted**

Have a look at a **sanitizer** function:

```js
const { body } = require('express-validator');

body('email').isEmail().normalizeEmail();
body('password').isLength({ min: 5 }).isAlphanumeric().trim();
```

In this example, we use sanitizing functions on the **email** and the **password**:

- `normalizeEmail()` will standardize the email address.
- `trim()` will trim the characters and the whitespace.

[/slide]

[slide hideTitle]

# Custom Validation

The **Express-validators** allows us to create custom **validation**, **messages** and **sanitizers**.

Let us have a look at this **custom validator**:

```js
const { body } = require('express-validator');

app.post('/user', body('email').custom(value => {
        return User.findUserByEmail(value)
          .then(user => {
            if (user) {
              return Promise.reject('E-mail already in use');
            }
          });
      };
```

In this example, we create a **post** request.

On the **body** we call the `custom()` validator function.

In this function, we specify the **validation** and the **message**.

## Custom Sanitizer

To create a custom sanitizer, we use the `customSanitizer()` method.

Here is an example:

```js
const { sanitizeParam } = require('express-validator');

app.post(
 '/object/:id',
 sanitizeParam('id').customSanitizer((value) => {
 return ObjectId(value);
 }),
 (req, res) => {
 console.log(req.params)
 }
);
```

We require the **sanitizeParam** from the **express-validator**.

After that, we use `customSanitizer()` method, which will return the **ObjectId**.

[/slide]

[slide hideTitle]

# Mongoose Validation

Mongoose validation is a **middleware** validation defined in the **SchemaType**.

It is registered as a `pre('save')` hook.

This validation is also **asynchronously recursive** and we can customize it.

We have the option **unique**, which helps for building the MongoDB unique indexes.

[/slide]

[slide hideTitle]

# Mongoose Save and Validate Hooks

To trigger the `validate()` hook we need the `save()` function.

Before any `pre('save')` hook, are called the `pre('validate')` and `post('validate')` hooks,

Here is an example:

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

The **validation** hooks will execute first.

But the `pre('validate')` hook will be the first to run from the **validation** hooks.

The **save** hooks will execute after the **validation** ones are ready.

Again the `pre('save')` hook will be before the `post('save')`.

[/slide]

[slide hideTitle]

# Mongoose Built-in Validators

All Mongoose **SchemaTypes** have **built-in** validators.

The **SchemaTypes** are:

- For **Numbers**:

 - They have **Min** and **Max** validators.

- For **Strings**:

 - **enum**
 - **match**
 - **minlength**
 - **maxlength**

Here is an example of **Mongoose schema**:

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

In this schema, we set the **type**, which is **string**.

We also set **minlength** and **maxlength** for the **username**. 

They specify the minimum and the maximum length of the **username** string.

We set the **username** to be **required** and **unique**.

[/slide]

[slide hideTitle]

# Mongoose Custom Validators

Although we have many **built-in** validators, if we cannot find what we need, we can make a **custom** one.

With the custom validators, we can send a custom message.

For example:

```js
const userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function (validate) {
        return /\d{3}-\d{3}-\d{4}/.test(validate);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, 'User phone number required'],
  },
});
```

In this example, we want to validate a phone number.

We create the schema with the **phone** object and set a property ** to validate**.

It holds two functions as parameters, which are **validator** and **message**.

The **validator** function takes a value and returns a **boolean**.

The **message** function returns an error if the validation fails.

[/slide]

[slide hideTitle]

# Mongoose Validation Errors

The **ValidationError** object is returned when the validation fails.

This object has a **kind**, a **path**, a **value** and a **message** properties.

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

The **message** property will return an error message.

The **kind** property will return the error type.

The **path** property will return the track of the failed validation property.

And the **value** will return the value of the failed property.

[/slide]

[slide hideTitle]

# Validation

In the end, every type of validation can fail.

That is why we need to have multiple layers of validation.

Some of the things that we can do when the validation fails are:

- Always return a helpful and readable message

- To test every piece of our code

- To avoid reloading the page because it is a bad user experience

More info about **express-validator** and **mongoose** you can find on:

- [express-validator](https://express-validator.github.io/docs/)
- [mongoose](https://mongoosejs.com/docs/validation.html)

[/slide]

