# React Lazy and Suspense

[slide hideTitle]

# Bundling

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/05.ReactJS-Routing/international-js-reactjs-routing-23-24-25-lazy-loading-code-splitting-bundling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The whole application will download itself on the first load or a refresh.

That is possible because the files are **bundled**, from tools like **WebPack**, **Parcel**, or others.

They have a **starting point** which is the root file, and after that, they bundle every imported component.

The idea is to merge all files into one file.

The application will load all of the bundled files at once when they are ready.

For example, if we imported a **HomePage** component in the **Navigation** file, WebPack will bundle it.

It will also bundle the components imported in the **HomePage**.

After WebPack bundles everything from the **HomePage**, it will go to the Navigation again and continue to bundle in **tree structures**

[/slide]

[slide hideTitle]

# Dynamic Import

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/05.ReactJS-Routing/international-js-reactjs-routing-26-dynamic-import-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Dynamic import**, also called **code-splitting**, is a React syntax used for not loading the whole application on the first request.

**code-splitting** is useful for loading complex components only if we need them.

We can **Dynamically import** function or components with: `import.then()`.

For example:

```js
import('./product').then((product) => {
   console.log(product.id);
});
```

When WebPack sees a **dynamic import**, it will bundle the function inside it but it will not execute it.

The idea is for the application to load faster.

[/slide]

[slide hideTitle]

# React.lazy

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/05.ReactJS-Routing/international-js-reactjs-routing-27-using-react-lazy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**React.lazy** gives us the ability to import a component dynamically, almost like a regular one.

To use it, we pass a callback function, in which we import the component.

It looks like this:

```js
const ExamplePage = React.lazy(() => import('./ExamplePage '));

function MyComponent() {
   return (
      <div>
         <ExamplePage />
      </div>
   );
}
```

After the `React.lazy(`) import, we can use the **ExamplePage** as a regular component.

[/slide]

[slide hideTitle]

# Suspense

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/05.ReactJS-Routing/international-js-reactjs-routing-28-suspense -showing-indicators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Suspense** is a component that accepts a **fallback** while waiting for another one to load.

In the **fallback**, we can pass a **Loading page** component.

It will be displayed while we wait for the other component.

Here is an example:

```js
function MyComponent() {
   return (
      <div>
         <Suspense fallback={<LoadingPage />}>
            <ExamplePage />
         </Suspense>
      </div>
   );
}
```

In this example, while **ExamplePage** renders, the **LoadingPage** will be displayed.

With **Suspense**, we can also setup **route-based** code splitting.

It will look like this:

```js
const App = () => (
   <Router>
      <Suspense fallback={<LoadingPage />}>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
         </Switch>
      </Suspense>
   </Router>
);
```

While these components are loading, the **LoadingPage** component will be displayed.

[/slide]
