# HTTP Client

[slide hideTitle]

# The HTTP Client Module

Angular's HTTP module gives the ability to **interact** with thousands of **web-based APIs** like Facebook Twitter and Amazon Web Services and many more.

What these products all have in common is that they provide a **restful API** that you can be **consumed** from an Angular app.

A **restful API** is and how **communication** works between the client and the server. 

On the one side there is a **client** on the other side is a **server**, restful is simply a way for these two parties to **communicate** in a **standardized** way by using the HTTP protocol. 

Data can be only retrieve without **modifying** it by using the "**GET**" request, and the server will respond with the **status code** as well as the data that was **requested**.

If the request is successful the server will return a "**200 OK**" plus the **requested** data.

If the request was **not valid**, or there is a **problem with the server**, a **400** or **500** level error will be return.

A **400 response** generally means the request is **invalid** and a **500 level** response generally means there was an **error on the server itself**.

There also other types of requests:

- "**Post**" - which tells the server that new data will be created and also send data payload with it which is the data that will be saved on the server
- "**Put**" - update a resource available on the server
- "**Patch**" - sets instructions on how to modify a resource on the server
- "**Delete**" - delete a resource on the server
 

To get started, go to `src/app/app.module.ts`:

```js
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

At the beginning of your file, import `HttpClientModule`:

`import { HttpClientModule } from '@angular/common/http';`

Then, put `HttpClientModule` in the imports array.

From now on `HttpClient` can be injected in Services.

[/slide]

[slide hideTitle]

# Using the HTTP Client in Services

While it is possible to import `HttpClient` in a component, it is not recommended.

A better solution will be to **separate** it into its very own Angular **service**.

For the sake of this example, we will simulate accessing photos in a database.

Using Angular CLI, type in:

`ng generate service services/Photos`

This will create a new `PhotosService` in the `services` directory.

At the top of the `PhotosService` file, import `HttpClient`.

```js
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService {
  constructor (private http : HttpClient) {

  }

  getAllPhotos() : Observable<Photo[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Photo[]>(url);
  }
}
```

The `getAllPhotos()` method makes a GET request to a demo REST API.

[/slide]

[slide hideTitle]

# Subscribe to the Observable

To subscribe to the Observable, create a `PhotosComponent` with Angular CLI:

`ng g c photos`

```js
import { PhotosService } from 'services/photos.service.ts';

// ...

export class PhotosComponent implements OnInit {
  photos: Photos[];  
  constructor (
   private photosService : PhotosService
  ) { }

ngOnInit(): void {
   this.photosService.getAllPhotos()
      .subscribe(data => {
         this.photos = data;
      });
  }
}
```

First, import the `PhotosService` from the `services` folder.

Inside `ngOnInit()`, use the `subcribe()` method.

[/slide]

[slide hideTitle]

# Type Checking the Response

A major upside of TypeScript is that we can use **Interfaces** to **explicitly** type what the `Photo` class must include:

```js
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

[/slide]

[slide hideTitle]

# Handling Errors

While accessing remote data, many **issues** may occur.

Thankfully, we can **handle errors** by passing an error handling function as a **parameter** to `subscribe()`:

```js
ngOnInit(): void {
this.photosService.getAllPhotos()
  .subscribe(
    data => { 
      // Attach data to prop
    },
    err => {
      console.log(`${JSON.stringify(err)}`) 
    }
  )
}
```

[/slide]
