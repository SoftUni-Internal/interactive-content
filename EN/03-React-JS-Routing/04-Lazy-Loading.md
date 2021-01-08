# React Lazy and Suspense

[slide]

# Bundling

On the first load of the app or a refresh, the user downloads the whole application.

That is possible because the files are **bundled**, from tools like **WebPack**, **Browserify**, or others.

These tools have a **stating point** which is the root file, and after that, they bundle every imported component.

The idea is to merge all files into one.

And when they are merged, the whole app to be loaded at once.

For example, if we imported a **HomePage** component in the **Navigation** file, WebPack will bundle it.

It will also bundle the components, which are imported in the **HomePage**.

After everything is bundled, WebPack will go to the Navigation again and continue to bundle in tree structures.

[/slide]

[slide]

# Dynamic Import

We use **dynamic import**, also called **code\-splitting** is a React syntax used for not loading everything on the first request.

That can be useful when we have really big components, which can be loaded if only we need them.

It is done by `import.then()`.

For example:

```js
import('./math').then((math) => {
   console.log(math.add(16, 26));
});
```

When WebPack sees the **dynamic import**, it will bundle the function inside it, but it will not execute it.

The idea is for the app to load faster.

[/slide]

[slide]

# React.lazy

**React.lazy** gives us the ability to import a component dynamically, like a regular one.

To use it, we pass a callback function, in which we import the component.

it looks like this:

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
   return (
      <div>
         <OtherComponent />
      </div>
   );
}
```

After the component is imported, we can use it as a regular one.

But we need to wrap the component with **Suspense**.

[/slide]

[slide]

# Suspense

**Suspense** is a component that accepts a **fallback** while waiting for another component to load.

In the fallback, we can pass a loading page component.

The fallback will be rendered while we wait for the other component.

Here is an example:

```js
function MyComponent() {
   return (
      <div>
         <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
         </Suspense>
      </div>
   );
}
```

In this example, while **OtherComponent** renders, will be displayed a div.

With **Suspense**, we can also setup route\-based code splitting.

It will look like this:

```js
const App = () => (
   <Router>
      <Suspense fallback={<div>Loading...</div>}>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
         </Switch>
      </Suspense>
   </Router>
);
```

While these components are loading, will be shown a div with a message.

[/slide]
