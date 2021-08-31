# Summary

[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What Hooks are:

   * they let us use the **class** functionality in **functional components**

   * we can use them only in **functional components**

- What the **UseState** hook is:

   * it allows us to have a **state** in **functional components**

   * it does not **merge** the **old value** and **the new one**

   * we can instantiate more that one `useState()` in a single component

   ```js
      const [count, setCount] = useState(0);
   ```

- What the **UseEffect** hook is:

   * bundles the lifecycle methods in a single API

   * allows us to use side effects from **functional components**

   ```js
      useEffect(() => {
         document.title = `The counter reached: ${count} times`;
      });
   ```

- **Custom hooks**

   * we can have re-usable logic without adding more components to the tree

   * every custom hook should start with **use**

   ```js
      function useUser(id) {
         const [user, setUser] = useState(0);

         return user;
      }
   ```

-  Rules to follow when using hooks:

   * **only call hooks at the top level**

   * **hooks only work in React function**

## In the next lesson you will learn:

- Advanced Techniques:

   * what error boundaries are

   * unit testing with JEST and Enzyme

   * how to test asynchronous code

   * server-side rendering with React

[/slide]
