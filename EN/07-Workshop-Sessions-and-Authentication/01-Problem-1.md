# Routes Protection

[slide]
# Authentication 

Make sure the **anonymous** (guest) users **can not reach** the functionality which requires authentication, such as create cube view.

And already logged in users have generated and stored **jwt**, can see the correct navigation and **can not** reach the login and register form.

If some of these scenarios is happen, make sure the current user is redirected to the home page.

**Guest** users can **see** and **access** the following urls: 

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-1.png" /]

- **Home page** **(Browse)**
- **About page**
- **Login page**
- **Register page**
- **Cube details page**

and can not access and see everyone else.

**Logged** in users can see and access the following urls:

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-2.png" /]

- **Home page (Browse)**
- **About page**
- **Add cube**
- **Add accessory**
- **Logout**
- **Cube details page**
- **Cube accessories page**
- **Edit Cube page**
- **Delete Cube page**

[/slide]

[slide]
# Authorization

Only authorized users should see the `[Edit]` and `[Delete]` buttons and if the **currently logged in user is the creator of this cube.**

Otherwise they should be **hidden.**

[image assetsSrc="JS-Back-End-Workshop-Sessions-and-Authentication-3.png" /]

[/slide]