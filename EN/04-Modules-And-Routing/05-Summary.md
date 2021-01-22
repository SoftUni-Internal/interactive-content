[slide hideTitle]

# Summary

# In this lesson you learned:

-  What is NgModule?

   -  Helps us to organize the application

   -  They organize the application into **blocks of functionality**

   ```js
   @NgModule({
      imports: [CommonModule],
      declarations: [CustomerListComponent, CustomerDetailsComponent],
      exports: [CustomerListComponent],
      providers: [CustomersService],
   })
   ```

-  What is Routing?

   -  It allows us to have navigation without reloading the entire page

-  What is Router Module?

   -  Gives us in-app navigation

   -  Provides us guards, resolvers, and more

   ```js
   <nav>
      <a routerLink='/home'>Home</a>
      <a routerLink='/about'>About</a>
   </nav>
   ```

## In the next lesson you will learn about:

-  Directives and Forms:

   -  What are Directives?

      -  Attribute Directives

      -  Structural Directives

      -  Building an Attribute Directive

   -  How to Handle Forms.

   -  Template-Driven Forms

   -  Reactive Forms

[/slide]
