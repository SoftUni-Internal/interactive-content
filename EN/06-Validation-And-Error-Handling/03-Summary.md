[slide]

# Summary

## In this lesson you learned:

- What is validation.

   - **How** and **why** you should validate the data that you are receiving.

   - How to **validate** and **sanitize** data with **express\-validator**.

   ```js
   const { body } = require('express-validator');

   body('email').isEmail().normalizeEmail();
   body('password').isLength({ min: 5 }).isAlphanumeric().trim();
   ```

   -  How mongoose validator works.

   ```js
   schema.pre('validate', () => {});
   schema.post('validate', () => {});
   schema.pre('save', () => {});
   schema.post('save', () => {});
   ```

- How to handle errors.

   - Different types of errors.

   - Different ways to handle them.

      - Try\-catch:

      ```js
      try {
         // Logic...
      } catch (e) {
         // Error Handling...
      }
      ```

      - `then().catch()`

```js
      .then((example) => {
      // Logic...
      })
      .catch((error) => {
      // Error Handling...
      });
      ```

[/slide]
