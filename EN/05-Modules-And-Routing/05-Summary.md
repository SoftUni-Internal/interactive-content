[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-31-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
