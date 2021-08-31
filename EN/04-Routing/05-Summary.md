[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/05.ReactJS-Routing/international-js-reactjs-routing-30-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Virtual DOM:

   * representation of the real DOM

- Routing:

   * **Client-Side**

   * **Server-Side**

- React Router:

   * **react-router-dom**

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

   * **BrowserRouter**
      
      * **Location** object

      ```js
      this.props.location
      ```
      
      * **History** object

      ```js
      this.props.history
      ```

- Lazy loading with React:

   * **React.lazy**

   ```js
   const OtherComponent = React.lazy(() => import('./OtherComponent'));
   ```

   * **Suspense**

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

## In the next lesson you will learn:

- Forms

   * controlled Forms

   * uncontrolled Forms

   * how to validate them

[/slide]
