# Different Types of Errors

[slide hideTitle]

# Why you should validate data

**Validation** is the process of checking if data meets specific requirements.

You should always perform validation to prevent **incorrect data** from polluting your database.

If a piece of data does not pass the validation process, you should return an error message. 

Data validation in web development is performed by comparing user input with a schema or another valid model.
[/slide]

[slide hideTitle]

# How to Validate Data

We can validate on the **server-side**, on the **client-side** and in the **database**.

For best security, we should use all of the available methods.

**Client-side** validation is not very secure because the user can change the code in the browser.

This method does not protect the database from incorrect data.

However, it significantly improves the user experience by displaying error messages in real-time.

When validating on the **server**, the user does not have access to your code.

This way validating functions cannot be **altered** or **disabled**.

You should focus on the **server-side** validation.

However, you should still validate in the database to cover potential mistakes.

In most database engines, there is **built-in validation**, which can be easily enabled.

[/slide]

[slide hideTitle]

# The validator.js library

The **validator.js** library can be used both on the **client-side** or the **server-side**.

It offers a wide variety of validating functions.

You can install it by entering `npm install validator` in the terminal.

Here is an example of **server-side** validation:

```js
const validator = require('validator');
const body = req.body;
validator.isEmail(body.email);
```

The function `isEmail()` will return **true** or **false**.

The following example validates the same thing on the **client-side**:

```js
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail('foo@bar.com'); // => true
</script>
```

On the **client-side**, `isEmail()` returns **true** or **false** as well.

[/slide]

[slide hideTitle]

# Express-Validator

We can use **Express-Validator** to wrap the **validator.js** functions.

**Express-Validator** is a set of **middlewares** for **express.js**.

To install **express-validator**, type `npm install express-validator` in the terminal.

We can set checks for the data input fields with the `check()` function.

Take a look at the following example:

```js
const { check, validationResult } = require('express-validator');

check('email').isEmail();
check('password').isLength({ min: 5 });

const errors = validationResult(req);

if (!errors.isEmpty()) {
  console.error('Request Failed')
}
```

As you can see above, we check the **email** and the **length** of the **password**.

Then, we call the `validationResult()` function to get the result of the validation.

In the end, we check if there are any errors present in the result.

If we have errors, we will print a **message** to the console. 

Otherwise, we **continue** with the account creation.

[/slide]

[slide hideTitle]

# Sanitizers

**Sanitizers** are functions that maintain the data in the correct format.

Their work revolves around **modifying** the **request** and removing **illegal characters** from the data.

If the user input is `John@example.com` for example, after the sanitizer function it will become `john@example.com`.

These are cases where **sanitizers** could be useful:

- **Normalizing** emails - e.g. making sure all characters are in lowercase

- **Trimming** characters from the input, like unnecessary spaces

- Removing characters that are **blacklisted**

Take a look at these **sanitizer** functions:

```js
const { body } = require('express-validator');

body('email').isEmail().normalizeEmail();
body('password').isLength({ min: 5 }).isAlphanumeric().trim();
```

Here, we use the `normalizeEmail` method to make sure the email matches all requirements.

The `isLength` method makes sure the password's length is bigger than or equal to 5. 

The `isAlphanumeric` method ensures it includes both letters and numerals.
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

This code illustrates the creation of a **POST** request.

We call the `custom()` validator function on the **body**.

In this function, we specify the **validation** process and the error **message**.

## Custom Sanitizer

To create a custom sanitizer, we use the `customSanitizer()` method:

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

We require the **sanitizeParam** from **express-validator**.

After that, we use `customSanitizer()` method, which will return the **ObjectId**.

[/slide]

[slide hideTitle]

# Mongoose Validation

Mongoose validation is a **middleware** validation performed in the **SchemaType**:


```js
const schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const Product = db.model('Product', schema);

// This product has no name
const product = new Product();
product.save(function(error) {
  assert.equal(error.errors['name'].message,
    'A `name` is required for this entity.');

  error = product.validateSync();
  assert.equal(error.errors['name'].message,
    'A `name` is required for this entity.');
});
```

It is registered as a `pre('save')` hook.

This validation is also **asynchronously recursive** and we can customize it.

We have the option **unique**, which helps for building the MongoDB unique indexes.

Remember that `unique` is **not** a validator.

[/slide]

[slide hideTitle]

# Mongoose Save and Validate Hooks

To trigger the `validate()` hook we need the `save()` function.

Before any `pre('save')` hook, the `pre('validate')` and `post('validate')` hooks are called.

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

The `pre('validate')` hook will be the first to run.

The **save** hooks will execute after the **validation** ones are ready.

Again the `pre('save')` hook will be before the `post('save')`.

[/slide]

[slide hideTitle]

# Mongoose Built-in Validators

All Mongoose **SchemaTypes** have **built-in** validators.

The **SchemaTypes** are:

- For **Numbers**:

  * the `Min` and `Max` validators check if a value is bigger/smaller/equal to a given minimum or maximum

- For **Strings**:

  * `enum` - validates whether a value is present in an array
  * `match` - compares the value to a given regular expression
  * `trim` - sets whether to invoke the `.trim()` method on the given value, boolean
  * `lowercase` and `uppercase` - booleans used to set whether to call the `.toLowerCase()` or `.toUpperCase()` methods on the value

The following code is an example of a **Mongoose schema**:

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

In this schema, we are going to set the default properties of a **username**.

The nickname must be of type **"String"**.

We cannot create a user without one, so we set `required` to **true**.

We also set `minlength` and `maxlength` to make sure sure the username's length is between **4** and **20** characters.
[/slide]

[slide hideTitle]

# Mongoose Custom Validators

Although we have many **built-in** validators, if we cannot find what we need, we can make a **custom** one.

With the custom validators, we can send a custom message:

```js
const userSchema = new Schema({
    phone: {
        type: String,
        validate: {
            validator: function(validate) {
                return /\d{3}-\d{3}-\d{4}/.test(validate);
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
        required: [true, 'User phone number required'],
    },
});
```

In this example, we want to validate a phone number.

We create a schema with the **phone** object, which includes the the data type.

It holds two functions as parameters, which are **validator** and **message**.

The **validator** function takes a value and returns a **boolean**.

The **message** function returns an error if the validation **fails**.

[/slide]

[slide hideTitle]

# Mongoose Validation Errors

The **ValidationError** object is returned when the validation fails.

The folowing object has a **kind**, a **path**, a **value** and a **message** properties.

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

The **message** property returns an error message.

The **kind** property returns the error type, like an invalid index, or in this case - "Invalid color"

The **path** property returns the track of the failed validation property.

And the **value** returns the value of the failed property.

[/slide]

[slide hideTitle]

# Best practices

In the end, every type of validation is prone to failure.

That is why we need to have multiple **layers** of validation.

When validation fails, it is recommended to:

- Return a helpful and readable **message** so that the user is aware of what is wrong

- Test **all edge-cases** in our code and make sure all of them are handled

- **Avoid reloading** the page when possible
  * **notify** the user with a simple **message** instead

You can find more information about **express-validator** and **mongoose** here:

- [Express-validator](https://express-validator.github.io/docs/)
- [Mongoose](https://mongoosejs.com/docs/validation.html)

[/slide]

