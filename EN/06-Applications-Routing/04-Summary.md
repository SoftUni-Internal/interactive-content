[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-28-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **Multi-Page Application** reloads the entire page when the user interacts with the app

-  **Single Page Application** dynamically updates the page content without refreshing the application

-  Types of **Routing**

   * Hash-Based

   ```js
   let changePath = function (path) {
      let currentPath = window.location.href;
      window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
   };
   ```

   * Push-Based

```js
let stateObj = {
    facNum: '123'
};
history.replaceState(stateObj, '', 'newStudent.html');
```

   -  The History API provides access to the browser **history** object

      * it provides methods like `back()`, `forward()`, `go()` and etc

## In the next lesson you will learn:

- Design Patterns

   * what is Pattern

   * most common Design Patterns

[/slide]
