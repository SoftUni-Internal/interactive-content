[slide hideTitle]

# Summary

## In this lesson you learned:

-  What validation is
  * **preventing** incorrect information from reaching the database
  * done by notifiying the **user** for improperly formatted data 

- **express-validator** can validate and sanitize data

```js
body('email').isEmail()
```

```js
body('email').isEmail().normalizeEmail();
```


- The **Mongoose validator** uses **schemas** to configure models

```js
schema.pre('validate', () => {});
schema.post('validate', () => {});
schema.pre('save', () => {});
schema.post('save', () => {});
```

- There are three main types of errors
  * **technical** errors - occur as a result of equipment problems
  * **expected** errors
  * **bugs**, also known as logical errors


-  Ways to **handle** errors:
  * using a `try-catch` block:

  ```js
  try {
     console.log('Hello');
  } catch (error) {
     console.error(error);
  }
  ```
  * for **asynchronous** operations, use `then().catch()`:

  ```js
  .then((example) => {
     console.log('Hello');
  })
  .catch((error) => {
     console.error(error);
  });
  ```

## In the next lesson you will learn:

-  **Deployment**:

   *  how to set up **Heroku**

   *  creating a **Git** repository and a **database**

   *  **deploying** a live version of your **project**

[/slide]
