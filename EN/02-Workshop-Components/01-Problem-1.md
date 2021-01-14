# Database, Initialize and Implementation

[slide]
# Database 

Use the provided **REST API** build with **Express.js** and **MongoDB.**

You can download **MongoDB** from [here](https://www.mongodb.com/try/download/community) and use a GUI with it like [Robo3T](https://robomongo.org/).


Each **Post** should have a post **description (string)** and a **post author (objectId).** 

Use **Postman** to create some entities or use "mongoimport" to [import the data](https://stackoverflow.com/questions/15171622/mongoimport-of-json-file) that is provided to you.

# Initialize the App

Use the `npx create-react-app origami-workshop` command to create a new React App.

If you face any trouble, check the following [link](https://github.com/facebook/create-react-app#create-react-app--)

# Server

Use the provided server to fetch all posts and list them into the front-end. 

The server will listen on port **9999** by default. 

To fetch the data that you fed in the database, you will have to make a **get request** on `localhost:9999/api/origami/`.

# Implementation
Make sure you assign every **required attribute** to each Component, so the result is the same as the example above. 

If at some point something is not right, be free to check the structure picture for each element or directly to the provided CSS. 

Also, be free to extend the workshop as much as you want!

[/slide]