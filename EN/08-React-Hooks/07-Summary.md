# Summary

[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What are Hooks:

   - They let us use the **class** functionality in **functional components**

   - We can use them only in **functional components**

- What is **UseState** Hook:

   - It allows us to have a **state** in **functional components**

   - It does not **merge** the **old value** and **the new one**

   - We can instantiate more that one `useState()` in a single component

   ```js
      const [count, setCount] = useState(0);
   ```

- What is **UseEffect** Hook:

   - Bundles the lifecycle methods in a single API

   - Let us use side effects from **functional components**

   ```js
      useEffect(() => {
         document.title = `The counter reached: ${count} times`;
      });
   ```

- **Custom Hooks**.

   - We can have re-usable logic without adding more components to the tree

   - Every custom hook need to start with **use**

   ```js
      function useUser(id) {
         const [user, setUser] = useState(0);

         return user;
      }
   ```

-  Rules to follow when using Hooks:

   - **Only call hooks at the top level**

   - **Hooks only work in React function**

## In the next lesson, you will learn:

- Advanced Techniques:

   - What are Error Boundaries.

   - Unit Testing with JEST and Enzyme.

   - How to test the asynchronous code.

   - Server-side rendering with React.

[/slide]
