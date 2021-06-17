[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/06.Validation-And-Error-Handling/interactive-js-back-end-validation-and-error-handling-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

-  What validation is
   * **preventing** incorrect information from reaching the database
   * done by notifiying the **user** for improperly formatted data 

- **Express-validator** can validate and sanitize data

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
  * **technical** errors - occur as a result of hardware problems
  * **expected** errors
  * **bugs**, also known as logical errors


- We can handle errors using a `try-catch` block

  ```js
  try {
     console.log('Hello');
  } catch (error) {
     console.error(error);
  }
  ```

- For **asynchronous** operations, use `then().catch()`

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
