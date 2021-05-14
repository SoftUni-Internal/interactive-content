# GitHub API

[slide hideTitle]

# GitHub API - Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-18-19-github-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To test out **GitHub's API**, we need to use **Postman**.

In these examples, we will send **GET** requests to the following URLs:

- To list all of the public repositories, the URL that we need is: 

`https://api.github.com/users/SoftUni/repos`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-23.png" /]

- To list all of the commits from a public repository, the URL that we need is: 

`https://api.github.com/repos/softuni/js-apps/commits`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-24.png" /]

- To get the issues from a public repository, the URL that we need is: 

`https://api.github.com/repos/softuni/js-apps/issues`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-25.png" /]

- To get the first issue from a public repository, the URL that we need is: 

`https://api.github.com/repos/softuni/js-apps/issues/1`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-26.png" /]

[/slide]

[slide hideTitle]

# GitHub: Labels Issue: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-20-21-github-labels-api-getting-labels-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this example, we need to get a particular issue.

We send a **GET** request to `https://api.github.com/repos/softuni/js-apps/issues/:id`, where `:id` is the issue - `1`:

`https://api.github.com/repos/softuni/js-apps/issues/1`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-26.png" /]

## Getting a Label

To get the label of a specific issue, we need to send a **GET** request to the following URL: 

`https://api.github.com/repos/softuni/js-apps/issues/1/labels`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-27.png" /]

[/slide]

[slide hideTitle]

# GitHub: Create Issue: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-22-github-api-creating-an-issue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


This time we have to **create** an issue (data should be **sent** to the server). 

To do so, we need to send a **POST** request to the following URL: 

`https://api.github.com/repos/softni/js-apps/issues`.

We also need to choose **Basic Authentication** in the **Authorization** header. 

In the **Username** and the **Password** fields, we need to enter our GitHub credentials.

The last step is to pass a JSON object to the **body** of the request.

Send the request to the server with the following JSON as a body (send it as `application/json`): 

```
{
    "title":"Found a bug",
    "body":"I'm having a problem with this."
}
```

[/slide]
