# Origami Platform Workshop: Part 1

[slide hideTitle]
# Task Requirements

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/01-explore-workshop-part-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-react/React-Js-Components.zip) **for this task.**

Use the provided **styles** to **create** a page with the following structure:

[image assetsSrc="ReactJs-Workshop-Components-1.png" /]

[/slide]

[slide hideTitle]
# Database 

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/02-explore-rest-api-and-add-data-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use the provided **REST API** build with **Express.js** and **MongoDB.**

You can download **MongoDB** from [here](https://www.mongodb.com/try/download/community) and use a GUI with it like [Robo3T](https://robomongo.org/).


Each **Post** should have a post **description (string)** and a **post author (objectId).** 

Use **Postman** to create some entities or use "mongoimport" to [import the data](https://stackoverflow.com/questions/15171622/mongoimport-of-json-file) that is provided to you.

[/slide]

[slide hideTitle]

# Initialize the App

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/03-04-create-react-app-part-1-and-part-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use the `npx create-react-app origami-workshop` command to create a new React App.

If you face any trouble, check the following [link](https://github.com/facebook/create-react-app#create-react-app--)

## Server

Use the provided server to fetch all posts and list them into the front-end. 

The server will listen on port **9999** by default. 

To fetch the data that you fed in the database, you will have to make a **get request** on `localhost:9999/api/origami/`.

## Implementation

Make sure you assign every **required attribute** to each Component, so the result is the same as the example above. 

If at some point something is not right, be free to check the structure picture for each element or directly to the provided CSS. 

Also, be free to extend the workshop as much as you want!

[/slide]

[slide hideTitle]
# Create the Header Navigation

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/05-create-the-header-navigation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="ReactJs-Workshop-Components-2.png" /]

[image assetsSrc="ReactJs-Workshop-Components-3.png" /]

[/slide]

[slide hideTitle]
# Add Header Logo

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/06-add-header-logo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Reusable Link Component

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/07-reusable-link-component-part-1-and-part-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Each Link Component inside the header navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-4.png" /]

[/slide]

[slide hideTitle]
# Create the Aside Navigation

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/08-create-the-aside-navigation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aside Component should have the "Aside" class name.
[image assetsSrc="ReactJs-Workshop-Components-5.png" /]
[image assetsSrc="ReactJs-Workshop-Components-8.png" /]

## Link

Each Link Component inside the aside navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-6.png" /]


[/slide]

[slide hideTitle]
# Create Main Container

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/09-create-main-container-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Main Component should have a "Main" class name.

[image assetsSrc="ReactJs-Workshop-Components-7.png" /]

[/slide]

[slide hideTitle]
# Create Origami Items Container

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/10-create-origami-items-container-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

# Posts

Posts component should have the "Posts" class name.
[image assetsSrc="ReactJs-Workshop-Components-9.png" /]
[image assetsSrc="ReactJs-Workshop-Components-10.png" /]


[/slide]

[slide hideTitle]
# Create Origami Item Component

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/11-create-origami-item-component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[/slide]

[slide hideTitle]
# Create the Footer

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/04. ReactJS-Workshop-Components/12-create-the-footer-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Footer component should have a "Footer" class name.

[image assetsSrc="ReactJs-Workshop-Components-13.png" /]
[image assetsSrc="ReactJs-Workshop-Components-14.png" /]

## Link

Each Link Component inside the footer navigation should have the class name called listItem and the following structure.

[image assetsSrc="ReactJs-Workshop-Components-15.png" /]

[/slide]