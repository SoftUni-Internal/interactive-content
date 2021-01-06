# Homework

[slide]
# Problem: Cubicle \- Part 1

You can download the needed resources here: [mega.nz](https://mega.nz/file/uBJFFAbK#vl-22hUstXYeiKM54ZS2UHwqqM-9HYfYu6mewiCnxrI)

# Description

_"Cubicle" is a place, where you can browse some of the most popular rubik cubes in the world and add some new cubes that you have discovered._

# Folder Structure View

You are provided with a project structure skeleton like this:
[image assetsSrc="expressjs-and-templating-1.png" /]

This structure includes the following configurations\:

- Config Folder View
[image assetsSrc="expressjs-and-templating-2.png" /]

- Config\.js
[image assetsSrc="expressjs-and-templating-3.png" /]

- Database\.json
[image assetsSrc="expressjs-and-templating-4.png" /]

- Express\.js
[image assetsSrc="expressjs-and-templating-5.png" /]

- Routes\.js
[image assetsSrc="expressjs-and-templating-6.png" /]

- Index\.js
[image assetsSrc="expressjs-and-templating-7.png" /]

# Install Dependencies

Run `npm install` to install all the dependencies.

**1. Create Model**

- Cube Model:

Each cube should have the following properties (for now it could be an ES6 class):

- `Id` \- number

- `Name` \- string

- `Description` \- string

- `Image URL` \- string

- `Difficulty Level` \- number

**2. Storage**

Store the cubes inside a `/config/database.json`

**3. Create Routes**

You should implement the following routes:

- `/` \- the main page (should visualize all the cubes in the database and a search field)

- `/about` \- should render the about page

- `/create` \- should render the create cube form

- `/details/:id` \- should render the details page about selected cube

- `Any other` \- should render the 404 not found page

Here is how the pages should look:

- Main Page
[image assetsSrc="expressjs-and-templating-8.png" /]

[image assetsSrc="expressjs-and-templating-9.png" /]

- About Page
[image assetsSrc="expressjs-and-templating-10.png" /]

- Create Page
[image assetsSrc="expressjs-and-templating-11.png" /]

- Details Page
[image assetsSrc="expressjs-and-templating-12.png" /]

- Not Found Page
[image assetsSrc="expressjs-and-templating-13.png" /]

**4. Create Templates**

Use the provided HTML to create templates using Handlebars.

Identify the dynamic parts and use appropriate syntax for interpolating and rendering the application context.

**5. Search**

Implement searching logic.

Use the following validation:

- If the user searches **only** a string and **NO difficulty**, render **all difficulties**

If the search does **NOT** meet the requirements, just **redirect** to the home page `/`.

[/slide]
