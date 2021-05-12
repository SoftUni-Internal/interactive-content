[slide hideTitle]

# Summary

# In this lesson you learned:

-  What is validation?

   - **Preventing** the user to enter **incorrect** data.

   - **express-validator**:

      - **Validating** data

      ```js
      body('email').isEmail()
      ```

      - **Sanitizing** data

      ```js
      body('email').isEmail().normalizeEmail();
      ```

   - Mongoose validator

   ```js
   schema.pre('validate', () => {});
   schema.post('validate', () => {});
   schema.pre('save', () => {});
   schema.post('save', () => {});
   ```

- Handle errors:

   - Types of errors:

      - **Technical** errors

      - **Expected** errors

      - **Bugs**

   -  Ways to handle errors:

      -  **Try-catch**:

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

   -  Set up

   -  App preparation

   -  Deployment

[/slide]
