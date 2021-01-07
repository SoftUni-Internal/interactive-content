# GitHub API

[slide]

# GitHub API - Example

[vimeo-video]
[stream language="EN" videoId="497191130/b851b586aa" default /]
[stream language="RO" videoId="497191130/b851b586aa"  /]
[/video-vimeo]

To try GitHub's API we need Postman.

In this example we will see **GET** requests to the following URLs:

-  To list all public repositories, the URL that we need is https://api.github.com/users/SoftUni/repos.
-  To list all commits from a public repository, the URL that we need is https://api.github.com/repos/softuni/js-apps/commits.
-  To get the issues from a public repository the, URL that we need is https://api.github.com/repos/softuni/js-apps/issues.
-  To get the first issue from a public repository, the URL that we need is https://api.github.com/repos/softuni/js-apps/issues/1.

[/slide]

[slide]

# GitHub: Labels Issue - Example

[vimeo-video]
[stream language="EN" videoId="497191186/eea6d5398d" default /]
[stream language="RO" videoId="497191186/eea6d5398d"  /]
[/video-vimeo]

To try, we need Postman.

So In this example, we need to get one particular issue from the **js-apps** repository.

So we need to send a **GET** request and specify the **id** of that issue to the following URL: https://api.github.com/repos/softni/js-apps/issues/1.

[/slide]

[slide]

# GitHub: Create Issue - Example

[vimeo-video]
[stream language="EN" videoId="497191252/8d95fa288f" default /]
[stream language="RO" videoId="497191252/8d95fa288f"  /]
[/video-vimeo]

In this example, we need Postman.

Firstly, we will get the label of a certain issue.

To do this, we need to send a GET request to the following URL: https://api.github.com/repos/softni/js-apps/issues/1/labels.

And now, let's try to create an issue to a certain repository.

So we need to send a **POST** request to the following URL: https://api.github.com/repos/softni/js-apps/issues.

And we also need in **Authorization** we have to choose **Basic Authentication** and in the fields **Username** and **Password** we need to enter our GitHub credentials.

We also need to pass a JSON object to the body of that request.

[/slide]
