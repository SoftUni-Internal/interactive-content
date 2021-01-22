# GitHub API

[slide hideTitle]

# GitHub API - Example

[vimeo-video]
[stream language="EN" videoId="497191130/b851b586aa" default /]
[stream language="RO" videoId="497191130/b851b586aa"  /]
[/video-vimeo]

To try the GitHub's API we need Postman.

In this examples we will see a **GET** requests to the following URLs:

-  To list all public repositories, the URL we need is: `https://api.github.com/users/SoftUni/repos`.
-  To list all commits from a public repository, the URL we need is: `https://api.github.com/repos/softuni/js-apps/commits`.
-  To get the issues from a public repository, the URL we need is: `https://api.github.com/repos/softuni/js-apps/issues`.
-  To get the first issue from a public repository, the URL we need is: `https://api.github.com/repos/softuni/js-apps/issues/1`.

[/slide]

[slide hideTitle]

# GitHub: Labels Issue: Example

[vimeo-video]
[stream language="EN" videoId="497191186/eea6d5398d" default /]
[stream language="RO" videoId="497191186/eea6d5398d"  /]
[/video-vimeo]

We need Postman if we want to try GitHub's API.

In this example, we need to get a particular issue from the **js-apps** repository.

We need to specify the **id** of the issue and send a **GET** request to the following URL: `https://api.github.com/repos/softni/js-apps/issues/1`.

[/slide]

[slide hideTitle]

# GitHub: Create Issue: Example

[vimeo-video]
[stream language="EN" videoId="497191252/8d95fa288f" default /]
[stream language="RO" videoId="497191252/8d95fa288f"  /]
[/video-vimeo]

For these examples, we need Postman.

We need to get the label of a specific issue.

To do that, we need to send a **GET** request to the following URL: `https://api.github.com/repos/softni/js-apps/issues/1/labels`.

Let us try to create an issue in a repository.

We need to send a **POST** request to the following URL: `https://api.github.com/repos/softni/js-apps/issues`.

We also need to choose a **Basic Authentication** in the **Authorization** header. 

In the fields for **Username** and **Password**, we need to enter our GitHub credentials.

The last steps is to pass a JSON object to the body of the request.

[/slide]
