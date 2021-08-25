# Softuni Forum Workshop: Part 4

[slide hideTitle]

# Task Requirements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-1-Authentication Interceptor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this workshop we will see what JWT (JSON WEB TOKEN) is, and the **INTERCEPTORS** concept. 

We will have to intercept the **requests** and **responses** between the front-end part and the back-end. 

## Auth Interceptor

When a user is **registers** or tries to **login**, the API should return a **cookie** which should hold JSON WEB TOKEN (JWT). 

Use it to **authenticate** the current user.

[/slide]

[slide hideTitle]

# Error Interceptor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-2-Error Interceptor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In some cases, errors will occur and by using an interceptor, **try to prevent bad user experience** and handle these errors. 

You can use the **404 page** to **show error info** or put a **paragraph** `("<p>")` element in the **header** (as shown in the picture) with the provided **styling**:


[image assetsSrc="Angular-Pipes-Workshop.png" /]

```css
.notification{
  position: fixed;
  z-index: 10;
  right: center;
  top: 10%;
  padding: 0.5rem 5 rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  font-style: italic;
  text-decoration: underline;
  box-shadow: 0 5px 10px rgb(204, 204, 204);
  background-color: rgba(238, 74, 74, 0.699);
}

.error-message {
    background-color: rgba(238, 74, 74, 0.699);
}

```

[/slide]

[slide hideTitle]

# Lazy Loading

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-3-Lazy Loading-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Lazy Loading helps us **download** web pages in **chunks**. 

Implement lazy loading on all the modules you can.

[/slide]

[slide hideTitle]

# Pipes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/10-Workshop-Pipes-Interceptors-Subjects/Part-4-Pipes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Try to write pipes, as follows:

- Write a pipe for slicing long titles of the themes (25 chars max). You can use the "SlicePipe" provided from Angular or write your own.

[image assetsSrc="Angular-Pipes-Workshop2.png" /]

- Write a pipe to convert the date, as shown in the pictures:

[image assetsSrc="Angular-Pipes-Workshop3.png" /]

- Write another pipe, which calculates the time since the post is created:

[image assetsSrc="Angular-Pipes-Workshop4.png" /]

[/slide]




