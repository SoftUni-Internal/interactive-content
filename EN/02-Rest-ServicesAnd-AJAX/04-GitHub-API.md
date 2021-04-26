# GitHub API

[slide hideTitle]

# GitHub API - Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-18-19-github-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To test out **GitHub's API**, we need to use **Postman**.

In these examples, we will send **GET** requests to the following URLs:

- To list all of the public repositories, the URL we need is: 

`https://api.github.com/users/SoftUni/repos`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-23.png" /]

- To list all of the commits from a public repository, the URL we need is: 

`https://api.github.com/repos/softuni/js-apps/commits`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-24.png" /]

- To get the issues from a public repository, the URL we need is: 

`https://api.github.com/repos/softuni/js-apps/issues`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-25.png" /]

- To get the first issue from a public repository, the URL we need is: 

`https://api.github.com/repos/softuni/js-apps/issues/1`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-26.png" /]

[/slide]

[slide hideTitle]

# GitHub: Labels Issue: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-20-github-labels-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this example, we need to get a particular issue from the **js-apps** repository.

We need to specify the **ID** of the issue and send a **GET** request to the following URL: 

`https://api.github.com/repos/softni/js-apps/issues/1`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

[/slide]

[slide hideTitle]

# GitHub: Create Issue: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-22-github-api-creating-an-issue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

For these examples, we need **Postman**.

We should get the label of a specific issue.

To do that, we need to send a **GET** request to the following URL: 

`https://api.github.com/repos/softni/js-apps/issues/1/labels`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

Let us try to create an issue in a repository.

We need to send a **POST** request to the following URL: 

`https://api.github.com/repos/softni/js-apps/issues`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX.png" /]

We also need to choose a **Basic Authentication** in the **Authorization** header. 

In the fields for **Username** and **Password**, we need to enter our GitHub credentials.

The last step is to pass a JSON object to the body of the request.

[/slide]
