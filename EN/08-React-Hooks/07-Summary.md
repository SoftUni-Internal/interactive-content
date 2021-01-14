[slide]

# Summary

In this lesson you learned:

-  What are Hooks.

   -  They let us use functionality from class components without writing them.

-  What is **UseState** Hook.

   -  It allows us to have a state in functional components.

   ```js
   const [count, setCount] = useState(0);
   ```

-  What is **UseEffect** Hook.

   -  Bundles the lifecycle methods in a single API.

   -  Let us use side effects from function components.

   ```js
   useEffect(() => {
      document.title = `The counter reached: ${count} times`;
   });
   ```

-  Custom Hooks.

   -  We can have re\-usable logic without adding more components to the tree.

   -  Every custom hook need to start with **use**.

   ```js
   function useStatus(id) {
      const [status, setStatus] = useState(0);

      return status;
   }
   ```

-  Rules when using Hooks.

   -  **Only call hooks at the top level**.

   -  **Hooks only work in React function**.

## In the next lesson you will learn about:

-  Advanced Techniques:

   -  What are Error Boundaries.

   -  Unit Testing with JEST and Enzyme.

   -  How to test Asynchronous code.

   -  Server\-side rendering with React.

[/slide]
