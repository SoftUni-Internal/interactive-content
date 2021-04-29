[slide hideTitle]

# Backendless Overview

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-Overview-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Backendless** is a mobile Backend-as-a-Service (**mBaaS**) platform.

Click [here](https://develop.backendless.com/registration) to **sign up**, or [here](https://develop.backendless.com/login) - to **login**.

Once you are authenticated, you will be prompted to **create a new application**.

Choose a fitting **name** and a **hosting zone**.

The location of the hosting zone is important - it must be as **close as possible** to your main user base.

You can **optionally** choose a **blueprint**, if you have a specific **type of service** in mind.

To view the Backendless **REST API** Documentation, click [here](https://backendless.com/docs/rest/).

[/slide]

[slide hideTitle]

# User Auth Operations

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-User-Auth-Operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To implement **authentication** in Backendless, visit the [User Registration Documentation](https://backendless.com/docs/rest/users_user_registration.html).

Then, open **Postman** to test the API.

To get your **REST API Key**, head over to **Data** \> **Rest Console**.

Copy your link from the "**Request URL**" textbox.

To test user **registration**, make a POST request in Postman.

The **URL** should look something like this:

`https://api.backendless.com/application-id/REST-api-key/users/register`

The body of the request **must** include an **email** and **password**:

```js
{  
  "email" : value,  
  "password" : value,  
  "objectId" : value, 
  ...  
}
```

`objectId` is **optional** and used only for [guest logins](https://backendless.com/docs/rest/users_guest_login.html).

Test the **login** and **logout** using the following **URLs**:

- Login - **POST**: `https://api.backendless.com/application-id/REST-api-key/users/login`

To **log in**, use the credentials from the registration request:

```js
{  
  "email" : value,  
  "password" : value,  
}
```

The **response body** will look like this:

```js
{  
  "objectId" : value,  
  "user-token": value,   
  //all user properties (except for password) in the "prop-name":"prop-value" format  
  "prop-name1":value,  
  "prop-name2":value,  
  "prop-name3":value,  
  ...  
}

```

- Logout using a **GET** request: `https://api.backendless.com/application-id/REST-api-key/users/logout`

[/slide]

[slide hideTitle]

# Working with the Database API

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-Working-with-the-Database-API-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Database API** is used for creating, modifying, and deleting **objects**.

To add a **new table**, go to the **Data** section and click on the **"+"** sign at the upper-left corner.

You will then be prompted to create your own **schema** and **columns**.

For more information, refer to the [Database API Documentation](https://backendless.com/docs/rest/data_overview.html)

[/slide]