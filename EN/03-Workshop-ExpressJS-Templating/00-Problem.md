# Cubicle: Part 1

[slide hideTitle]
# Project Setup

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.Workshop-ExpressJS-Templating/1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/03-Cubicle-Workshop-Part-1-Resources.zip) **for this task.**

"**Cubicle**" is a place where you can browse some of the most popular Rubik's cubes in the world and add some new cubes that you have discovered. 

## Folder Structure View

You are given this folder structure for the project:

[image assetsSrc="cubicle-workshop-01.png" /]

## Config Folder View

It includes the following configurations:

[image assetsSrc="cubicle-workshop-02.png" /]

`Config.js`
- Here you can set the port on which your application will be accessible.
 
[image assetsSrc="cubicle-workshop-03.png" /]

`Database.json`
- Initially contains only an empty array. Will be used later as a local database.

[image assetsSrc="cubicle-workshop-04.png" /]

`Express.js`

[image assetsSrc="cubicle-workshop-05.png" /]

`Routes.js`
- This is where the controllers and routes will be configured.

[image assetsSrc="cubicle-workshop-06.png" /]

`Index.js`
- Runs the entire configuration based on the current environment that the app is running in. 

Configures the app to work with Express and the routes that are set up in the `./config/routes` file.

[image assetsSrc="cubicle-workshop-07.png" /]

[/slide]

[slide hideTitle]
# Cube Model and Storage

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.Workshop-ExpressJS-Templating/JS-Backend-Templating-Workshop-2-3-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- **Cube Model**

Each cube should have the following properties (you may use an **ES6** class for now):

**id**: integer

**name**: string

**description**: string

**imageUrl**: string

**difficultyLevel**: integer

- **Storage** 

Store the cubes inside the `/config/database.json` file.

It is not a good practice, but we can work like that for now.

In the following workshops, you will learn how to connect to and work with an actual database.

[/slide]
