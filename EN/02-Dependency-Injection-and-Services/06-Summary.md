[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/38-Summary-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- The SOLID Principles are **the most important principles** of Object-oriented programming 
  - applying them makes our applications easier to maintain and extend

- Dependency Injection is a **popular** design pattern
  - it allows us to **inject dependencies** into different components

```js
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DemoService {
  constructor() {
    // ...
  }
}
```

- RxJS and Functional Reactive Programming are a **powerful combination**
  - RxJS provides utility functions for manipulating streams
  - FRP integrates time flow and compositional events into functional programming

```js
const obs = range(1, 10).pipe(tap((i) => console.log(`Hello: ${i}`)));
```

- The `HTTPClient` is used to fetch data from an API

```js
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService { constructor(
    private http : HttpClient
  ) { }

  getAllPosts() : Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(url);
  }
}
```

## In the next lesson, you will learn:

- In-depth Components Workshop

[/slide]
