[slide]

# Summary

## In this lesson you learned:

-  Multi Page Application

   -  reloads the entire page when a user interacts with the it.

-  Single Page Application

   -  **dynamically update** the content of the page, instead of **reloading** it.

-  What is **Routing**

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

      -  it gives us also methods like `back()`, `forward()`, `go()` and etc.

## In the next lesson you will learn about:

-  Design Patterns:

   -  What is Pattern.

   -  Most Common Design Patterns.

[/slide]
