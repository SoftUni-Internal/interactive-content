# Cubicle: Part 3

[slide]
# Project Setup
[Download resources here!](https://mega.nz/file/jFh3kS4Z#aYYT9efHNL9ZkwCuakEcMCuTlYxIHQk1-ynKd7gxd8c)

"Cubicle" is a place, where you can browse some of the most popular Rubik cubes in the world and add some new cubes that you have discovered.  

If you missed the first two parts of this workshop, **make sure you complete them** before you continue because all parts of this workshop are related to each other.

# Main Task 

Now it's time to implement user service in your app, so people can **register**, **login** and **logout**. 

And each cube can be **edited** or **deleted**. 

Some of the functionality should **requires authentication** such as (create cube, create accessory) and authorization (such as edit and delete).

Also, all **routes** should be **protected!** 

# Installing Dependencies 

You should install a few more packages which you will use. 

They are: 

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): allows you to decode, verify and generate JWT.

- [bcrypt](https://www.npmjs.com/package/bcrypt): a library to help you hash passwords. 

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): parse **cookie header** and populate `req.cookies` with an object keyed by the cookie names (if you choose to store the jwt as а cookie). 

# Model 

The User Model structure:

- **Id**: ObjectId

- **Username**:  string

- **Password**: string (**hashed**), уse bcrypt to hash and compare the password

Make sure, when you successfully create a new user into the database, you generate a **jsonwebtoken** and use it later for **authentication** and **authorization.**

Also, you have to add an additional property on **Cube Model**, which is `creatorId` (type: **String** and its **required**), so you can keep tracking every cube's creator. 

[/slide]
