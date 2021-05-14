# Different Types of Errors

[slide hideTitle]

# Why to Validate?

**Data validation** is crucial, as it avoids the storage of "bad" information in your database.

That means that we have to prevent the user from entering **incorrect** data.

If the user enters **correct** data, we will store it in the database.

But if it is **incorrect**, we need to return an appropriate message.

In **web development**, data validation is performed by taking user input, usually from a form, and then comparing a valid model, or schema.

[/slide]

[slide hideTitle]

# How to Validate?

We can validate on the **server-side**, on the **client-side** and in the **database**.

For best security, we should use all of the available methods.

**Client-side** validation is not very useful because the user can change the code in the browser.

This validation does not protect or secures the application from incorrect data.

However, is significantly improves the experience of potential users, as it displays their mistakes as they type.

In **server-side** validation, unlike the **client-side** one, the validation is not visible to the user.

This means that it cannot be **altered** or **disabled**.

When we want to validate the data that we are receiving, we must focus on the **server-side** validation.

But we need to make sure that the database is also validated, since this is the last check before saving.

In most database engines, there is **built-in validation**, which can be easily enabled.

Database validation is the last resort for catching invalid data, and it strongly recommended.

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

On the **client-side**:

```js
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail('foo@bar.com'); // => true
</script>
```

On the **client-side**, `isEmail()` return **true** or **false**, as well.

[/slide]

[slide hideTitle]

# Express-Validator

We can use **Express-Validator** to wrap the **validator.js** functions.

**Express-Validator** is a set of **middlewares** for **express.js**.

To install **express-validator**, we need to write `npm install express-validator`.

We can set checks for the fields from which we receive data with the `check()` function.

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

As you can see above, we check the **email** and the **length** of the **password**.

After that, we call the `validationResult()` function to get the result of the validation.

In the end, we check if there are any errors present in the result.

If we have errors, we will print a **message** to the console. 

Otherwise, we **continue** with the account creation.

[/slide]

[slide hideTitle]

# Sanitizers

**Sanitizers** are functions that maintain the data in the correct format.

Their work revolves around **modifying** the **request** and removing **illegal characters** from the data.

If the user input is `John@example.com`, after the sanitizer function it will be `john@example.com`.

Here are some use cases where **sanitizers** could be useful:

- **normalizing** emails - e.g. making sure all characters are in lowercase

- **trimming** characters from the input, like unnecessary spaces

- removing characters that are **blacklisted**

Have a look at these **sanitizer** functions:

```js
const { body } = require('express-validator');

body('email').isEmail().normalizeEmail();
body('password').isLength({ min: 5 }).isAlphanumeric().trim();
```

Here, we use the `normalizeEmail` method to make sure the email matches all requirements.

The `isLength` method makes sure the password's length is bigger than or equal to 5, while `isAlphanumeric` ensures it includes both letters and numerals.

In this example, we use sanitizing functions on the **email** and the **password**:

- `normalizeEmail()` will standardize the email address
- `trim()` will trim the whitespaces at the beginning and the end of it

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

This code illistrates the creation of a **POST** request.

On the **body** we call the `custom()` validator function.

In this function, we specify the **validation** and the **message**.

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

We require the **sanitizeParam** from the **express-validator**.

After that, we use `customSanitizer()` method, which will return the **ObjectId**.

[/slide]

[slide hideTitle]

# Mongoose Validation

Mongoose validation is a **middleware** validation defined in the **SchemaType**:


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

  * the `Min` and `Max` validators check if a value is bigger/smaller/equal to a given minimum or maximum

- For **Strings**:

  * `enum` - validates whether a value is present in an array
  * `match` - compares the value to a given regular expression
  * `trim` - sets whether to invoke the `.trim()` method on the given value, boolean
  * `lowercase` and `uppercase` - booleans used to set whether to call the `.toLowerCase()`/`.toUpperCase()` methods on the value

Here is an example of a **Mongoose schema**:

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

We also set `minlength` and `maxlength` - they make sure sure the username's length is between **4** and **20**.


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

# Validation

In the end, every type of validation is prone to failure.

That is why we need to have multiple **layers** of validation.

When validation fails, it is recommended to:

- Return a helpful and readable **message** so that the user is aware of what is wrong

- Test **all edge-cases** in our code and make sure all of them are handled

- **Avoid reloading** the page when possible
  * **notify** the user with a simple **message** instead

You can find more info about **express-validator** and **mongoose** here:

- [express-validator](https://express-validator.github.io/docs/)
- [mongoose](https://mongoosejs.com/docs/validation.html)

[/slide]

