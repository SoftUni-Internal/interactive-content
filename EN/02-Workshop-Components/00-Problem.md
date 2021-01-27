# Origami Platform Workshop: Part 1

[slide]
# Task Requirements
[Download resources here!](https://mega.nz/file/nNpnwASQ#XEaZFlQWft2XTibJanDnteYBiju_r9I3MAMrijj0vvQ)

Use the provided **styles** to **create** a page with the following structure:

[image assetsSrc="ReactJs-Workshop-Components-1.png" /]

# Navigation

[image assetsSrc="ReactJs-Workshop-Components-2.png" /]

[image assetsSrc="ReactJs-Workshop-Components-3.png" /]

- **Link**
Each Link Component inside the header navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-4.png" /]

# Aside
Aside Component should have the "Aside" class name.
[image assetsSrc="ReactJs-Workshop-Components-5.png" /]
[image assetsSrc="ReactJs-Workshop-Components-8.png" /]

- **Link**

Each Link Component inside the aside navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-6.png" /]

# Main

Main Component should have a "Main" class name.

[image assetsSrc="ReactJs-Workshop-Components-7.png" /]

# Posts

Posts component should have the "Posts" class name.
[image assetsSrc="ReactJs-Workshop-Components-9.png" /]
[image assetsSrc="ReactJs-Workshop-Components-10.png" /]

# Post

Each Post Component should have a "Post" class name.

[image assetsSrc="ReactJs-Workshop-Components-11.png" /]

Here is an example of one post component structure.

[image assetsSrc="ReactJs-Workshop-Components-12.png" /]

Each post component is consisting of:

- Image which is provided with the resources (the origami logo)
- Paragraph with class name "description" which holds the current post description
- Div wrapper for a span that holds the current post author

**Try to separate the styles and the structure for (div wrapper) into another component called postAuthor or something like that.**

# Footer

The Footer component should have a "Footer" class name.

[image assetsSrc="ReactJs-Workshop-Components-13.png" /]
[image assetsSrc="ReactJs-Workshop-Components-14.png" /]

- **Link**

Each Link Component inside the footer navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-15.png" /]

[/slide]

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