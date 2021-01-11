[slide]

# Database Connection with ExpressJS

Your **database.json** file inside **config folder** will be **modified**, because you **no longer** will **store** the data in **json** file. 

So, make sure inside it, the **mongoose connection** via **MongoDB** **connection string** is **made** and **exported**.

The **index.js** file should **require** the exported mongoose connection (**database**) before the server starts. 

# Model

If you follow the previous structure you probably created ES6 class Model for each cube in this format:

- **Id** - number
- **Name** - string
- **Description** - string 
- **Image URL** - string
- **Difficulty Level** - number

Now it's time to refactor this ES6 class to **Mongoose Schema**, so each **Cube** has the following structure:

- Id - (**ObjectId**)	
- Name - (**String, required**)
- Description - (**String, required, max length validation**)
- ImageUrl - (**String, required, http/https validation**)
- Difficulty Level - (**Number, required, min and max valid range**)
- Accessories - (**ObjectId, ref Accessories Model**)

And create another model (**Accessory**) in the following format:

- Id - (**ObjectId**)
- Name - (**String, required**)
- ImageUrl - (**String, required, http/https validation**)
- Description - (**String, required, max length validation**)
- Cubes - (**ObjectId, ref Cubes Model**)

Your models folder should look like:

[image assetsSrc="Workshop-Mongoose.jpg" /]



[/slide]