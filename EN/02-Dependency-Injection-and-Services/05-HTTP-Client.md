# HTTP Client

[slide hideTitle]

# The HTTP Client Module

32-33-HTTP-Client-and-the-http-cllient-module

Angular's HTTP module enables us to **interact** with thousands of **web-based APIs** like Facebook, Twitter, and Amazon Web Services.

What these products all have in common is that they provide a **restful API** that you can **consume** from an Angular app.

The **restful API** is responsible for the **communication** between the client and the server. 

Data can be retrieved without **modification**  by using a "**GET**" request. 

The server will respond with the **status code** as well as the data that was **requested**.

If the request is successful, the server will return status "**200 OK**" and the **requested** data.

If the request was **not valid**, or there was an **internal server issue**, you will receive a status code **400** or **500** respectively.

There also other types of requests:

- "**POST**" - Tells the server that new data will be created and sends a payload that carries it.
- "**PUT**" - Updates a resource available on the server.
- "**PATCH**" - Sets instructions on how to modify a resource on the server.
- "**DELETE**" - Deletes a resource from the server.
 
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

From now on, the `HttpClient` can be injected into different Services.

[/slide]

[slide hideTitle]

# Using the HTTP Client in Services

34-Using-the-HTTP-Client-in-Services

While it is possible to import the `HttpClient` module in a component, it is not recommended.

A better solution would be to **separate** it into its very own Angular **service**.

In the following slides, we will simulate accessing photos in a database.

Using the Angular CLI, type in:

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

# Subscribing to the Observable

35-Subscribe-to-the-Observable

To subscribe to the Observable, create a `PhotosComponent` with the Angular CLI:

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

36-Type-Checking-the-Response

A major upside of TypeScript is that we can use **Interfaces** to **explicitly** type what a class must include.

The following example shows the correct syntax when checking the data types of a class:

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

37-Handling-Errors

While accessing remote data, many **issues** may occur.

We can **handle these errors** by passing an error handling function as an **argument** to the `subscribe()` method:

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

[slide hideTitle]

# HTTP Client - Demo

03-Angular_Fundamentals_Dependency_Injection_and_Services_Demo-1-2

[/slide]
