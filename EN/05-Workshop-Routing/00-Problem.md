# Origami Platform Workshop: Part 2

[slide hideTitle]
# First Path

Publications view, which shows all created posts ever.

[image assetsSrc="ReactJS-Workshop-Routing-1.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-2.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-3.png" /]

[/slide]

[slide hideTitle]
# Second Path

Share your thoughts view, where the user can see the text area where the post will be created and the last 3 posts ever.

[image assetsSrc="ReactJS-Workshop-Routing-4.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-5.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-6.png" /]

[/slide]

[slide hideTitle]
# Third Path

Register view, where the users will be registered.

[image assetsSrc="ReactJS-Workshop-Routing-7.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-8.png" /]

[/slide]

[slide hideTitle]
# Fourth Path

Login view, where the users will be logged.

[image assetsSrc="ReactJS-Workshop-Routing-9.png" /]

Use these styles for Login and Register views.

[image assetsSrc="ReactJS-Workshop-Routing-10.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-11.png" /]

[/slide]

[slide hideTitle]
# Fifth Path

Profile view, where the user can see his own account information and his top 3 recent posts.

[image assetsSrc="ReactJS-Workshop-Routing-12.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-13.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-14.png" /]

[/slide]

[slide hideTitle]
# Sixth Path

404 view for any invalid path.

[image assetsSrc="ReactJS-Workshop-Routing-15.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-16.png" /]

[image assetsSrc="ReactJS-Workshop-Routing-17.png" /]

[/slide]

[slide hideTitle]
# Database 

Use the provided **REST API** build with **Express.js** and **MongoDB.**

You can download **MongoDB** from [here](https://www.mongodb.com/try/download/community) and use a GUI with it like [Robo3T](https://robomongo.org/).

Each **Post** should have a **post description (string)** and a **post author (objectId).** 

Use **Postman** to create some entities or use "**mongoimport**" to [import the data](https://stackoverflow.com/questions/15171622/mongoimport-of-json-file) that is provided to you.


# Server

Use the provided server to fetch all posts and list them into the front-end.

The server will listen on port **9999** by default.

In order to fetch the data that you fed in the database, you will have to make a **get request** on `localhost:9999/api/origami/`

# Implementation

Make sure you assign every **required attribute** to each Component, so the result is the same as the example above.

If at some point something is not right, be free to check the structure picture for each element or directly to the provided CSS.

**Also be free to extend the workshop as much as you want!**

[/slide]