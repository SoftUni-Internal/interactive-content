[slide hideTitle]

# Problem with Solution: Blog

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/01-JS-Application-Asynchronous-Programming-Lab-Resources.zip) **for this task.**

Write a program for reading blog content.

It needs to make **requests** to the **server** and display **all blog posts** and their **comments**.

[Firebase URL](https://blog-apps-c12bf.firebaseio.com/)

Skeleton will be provided in the **Resources folder**.

The button with ID `btnLoadPosts` should make a **GET** request to `/posts`. 

The **response** from the **server** will be an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-1.jpg" /]

Each object will be in the following format:

```js
{
  body: {postBody},
  id: {postId},
  title: {postTitle}
}
```

Create an `<option>` for each post using its **object key** as value and **current object title property** as text inside the node with ID "**posts**".

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-2.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-3.jpg" /]

When the button with ID "**btnViewPost**" is clicked, a **GET** request should be made to:

- `/posts/{postId}` to obtain the selected post (from the dropdown menu with ID "**posts**") - The following **request** will return a **single object** as described above.

- `/comments`: to obtain all comments. 

The request will **return** an **Object of objects**.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-4.jpg" /]

Each object will be in the following format:

```js
{
  	id: {commentId},
  	postId: {postId},
  	text: {commentText}
}
```

You have to find these comments that are for the current post (check the **postId property**).

Display the post title inside `h1` with ID `post-title` and the post content inside ul with ID `post-body`.

Display **each comment** as a `<li>` inside ul with ID `post-comments`.

Do not forget to clear its content beforehand.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-5.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Lab-6.jpg" /]

[/slide]

