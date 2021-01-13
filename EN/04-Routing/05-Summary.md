[slide]

# Summary

## In this lesson you learned:

-  What is Virtual DOM.

-  What is Routing.

   -  Client\-Side.

   -  Server\-Side

-  What is React Router.

   -  **react-router-dom**

   ```js
   const App = (
      <div>
         <Route path='/home' component={HomePage} />
      </div>
   );
   ReactDOM.render(
      <BrowserRouter>
         <App />
      </BrowserRouter>,
      document.getElementById('root')
   );
   ```

   -  **BrowserRouter**

      -  Has different object: **Match**, **Location** and **History**.

-  Lazy loading and suspense with React

   -  **React.lazy**

   ```js
   const OtherComponent = React.lazy(() => import('./OtherComponent'));
   ```

   -  **Suspense**

   ```js
   function MyComponent() {
      return (
         <div>
            <Suspense fallback={<LoadingPage />}>
               <HomePage />
            </Suspense>
         </div>
      );
   }
   ```

## In the next lesson you will learn about:

-  Forms

   -  Controlled Forms

   -  Uncontrolled Forms

   -  How to validate them.

[/slide]
