[slide hideTitle]

# Summary

Angular-Modules-and-routing-31-Summary

## In this lesson you learned:

-  What NgModules are
   *  they define the structure of our project
   *  they organize the application into **blocks of functionality**

   ```js
   @NgModule({
      imports: [CommonModule],
      declarations: [CustomerListComponent, CustomerDetailsComponent],
      exports: [CustomerListComponent],
      providers: [CustomersService],
   })
   ```

-  **Routing** allows us to display different views without reloading the entire page

-  The **Router Module** provides us with in-app navigation
   * it contains guards, resolvers, and more

   ```js
   <nav>
      <a routerLink='/home'>Home</a>
      <a routerLink='/about'>About</a>
   </nav>
   ```

## In the next lesson you will learn:

-  What **directives** are
   *  attribute directives
   *  structural directives
   *  building an attribute directive
-  Using forms in Angular
   *  template-driven forms
   *  reactive forms

[/slide]
