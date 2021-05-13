[slide hideTitle]

# Summary

## In this lesson you learned:

-  What validation is

   - **preventing** incorrect information from reaching the database

   - done by notifiying the **user** for improperly formatted data 

   - **express-validator**:

      - **validating** data

      ```js
      body('email').isEmail()
      ```

      - **sanitizing** data

      ```js
      body('email').isEmail().normalizeEmail();
      ```

   - Using the mongoose validator

   ```js
   schema.pre('validate', () => {});
   schema.post('validate', () => {});
   schema.pre('save', () => {});
   schema.post('save', () => {});
   ```

- Handle errors:

   - Types of errors:

      - **technical** errors

      - **expected** errors

      - **bugs**, also known as logical errors

   -  Ways to handle errors:

      -  using a `try-catch` block:

      ```js
      try {
         console.log('Hello')
      } catch (error) {
         console.error(error)
      }
      ```

      -  `then().catch()`

      ```js
      .then((example) => {
         console.log('Hello')
      })
      .catch((error) => {
         console.error(error)
      });
      ```

## In the next lesson you will learn:

-  Deployment:

   *  how to set up Heroku

   *  creating a Git repository and a database

   *  deploying a live version of your project

[/slide]
