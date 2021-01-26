[slide hideTitle]

# Summary

# In this lesson you learned:

- **Multi Page Application** reloads the entire page when the user interacts with the app.

-  **Single Page Application** dynamically updates the page content without refreshing the application.

-  Types of **Routing**

   -  Hash-Based

   ```js
   let changePath = function (path) {
      let currentPath = window.location.href;
      window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
   };
   ```

   -  Push-Based

   ```js
   let stateObj = { facNum: '123' };
   history.replaceState(stateObj, '', 'newStudent.html');
   ```

   -  The History API provides access to the browser **history** object.

      -  It provides methods like `back()`, `forward()`, `go()` and etc.

## In the next lesson you will learn:

-  Design Patterns:

   -  What is Pattern.

   -  Most Common Design Patterns.

[/slide]
