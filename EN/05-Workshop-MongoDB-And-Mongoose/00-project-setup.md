# Cubicle - Part 2

[slide hideTitle]

# Project Setup

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.Workshop-MongoDB-And-Mongoose/1-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-backend/04-Cubicle-Homework-Part-2-Resources.zip) **for this task.**

"**Cubicle**" is a place, where you can browse some of the most popular Rubik cubes in the world and add some new cubes that you have discovered.

## Main Task

If you were able to complete the previous task, **good job!** 

Now it is time to **upgrade** your app and **implement** a few new features. 

For instance, to replace the way you **store** data using **MongoDB** and **Mongoose**, **creating and attaching** new accessories to each cube, make some relations between them and **include** a few more **pages**.

## Installing Dependencies

As you already know, you should **install** a bunch of new things so you could be able to continue with this part of the workshop.

Here is the list:

1. [MongoDB Download Center](https://www.mongodb.com/try)

    - You can check the [Installation Instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) as well

2. [MongoDB Node.JS Driver](https://www.npmjs.com/package/mongodb)

3. [Mongoose](https://www.npmjs.com/package/mongoose) - Usefull [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)

4. [Robo 3T](https://robomongo.org/download)

## Database Connection with ExpressJS

Your **database.json** file inside the **config folder** will be **modified**, because you **no longer** will **store** the data in **json** file. 

So, make sure inside it, the **mongoose connection** via **MongoDB** **connection string** is **made** and **exported**.

The `index.js` file should **require** the exported mongoose connection (**database**) before the server starts. 


[/slide]

[slide hideTitle]

# Database Model

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.Workshop-MongoDB-And-Mongoose/3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If you follow the previous structure you probably created **ES6** class Model for each cube in this format:

- **Id**: number
- **Name**: string
- **Description**: string
- **Image URL**: string
- **Difficulty Level**: number

Now it is time to refactor this **ES6** class to **Mongoose Schema**, so each **Cube** has the following structure:

- **Id**: ObjectId
- **Name**: String, required
- **Description**: String, required, max length validation
- **ImageUrl**: String, required, `http/https` validation
- **Difficulty Level**: Number, required, min and max valid range
- **Accessories**: ObjectId, ref Accessories Model

And create another model (**Accessory**) in the following format:

- **Id**: ObjectId
- **Name**: String, required
- **ImageUrl**: String, required, http/https validation
- **Description**: String, required, max length validation
- **Cubes**: ObjectId, ref Cubes Model

Your models folder should look like:

[image assetsSrc="Workshop-Mongoose.jpg" /]

[/slide]

[slide hideTitle]

# Views

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/04.Workshop-MongoDB-And-Mongoose/4-5-6-7-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Database Persistence

**All pages** in the application should **persist** data to **MongoDB** & work with **MongoDB**.

- **Additional Pages**

You should implement **2** new routes:

- `/create/accessory`: should render the create the accessory form

- `/attach/accessory/:id`: should render the accessory page about attaching new accessory for cube

And **update the view** on `/details/:id route`, that render the cube's details.

Use the provided Resources to create the additional templates using Handlebars (The authentication here is the same as above - **username: student, password: student**).

Identify the dynamic parts and use the appropriate syntax for interpolating and rendering the application context. 

Replace the old **CSS** file with the given one.

- **Create Accessory Page View**

[image assetsSrc="Workshop-Mongoose1.png" /]

- **Attach new accessory view**

[image assetsSrc="Workshop-Mongoose2.png" /]

**Note that the options inside the select element must be only those which the current cube does not have attached to itself.**

- **Updated Details Page View**

[image assetsSrc="Workshop-Mongoose3.png" /]

[/slide]
