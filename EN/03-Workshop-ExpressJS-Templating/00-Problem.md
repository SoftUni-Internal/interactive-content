# Cubicle: Part 1

[slide hideTitle]
# Project Setup

[Download resources here!](https://mega.nz/file/3ZR2zJ7T#zNmYjSuGhME6GQMNTqmQtULCrUfhea3sffSDglW7rjM)

"Cubicle" is a place, where you can browse some of the most popular Rubik's cubes in the world and add some new cubes that you have discovered. 

## Folder Structure View

You are provided with a project structure skeleton like this:

[image assetsSrc="cubicle-workshop-01.png" /]

## Config Folder View
This structure includes the following configurations:

[image assetsSrc="cubicle-workshop-02.png" /]

- `Config.js`
This is where the port on which the application will be accessible is configured.
[image assetsSrc="cubicle-workshop-03.png" /]

- `Database.json`
Initially contains only an empty array. Will be used later as a local database.
[image assetsSrc="cubicle-workshop-04.png" /]

- `Express.js`

[image assetsSrc="cubicle-workshop-05.png" /]

- `Routes.js`
This is where controllers and routes will be configured.
[image assetsSrc="cubicle-workshop-06.png" /]

- `Index.js`
Calls the entire configuration based on the current environment that the app is running in. 

Configures the app to work with Express JS and to use the routes that are set up in `./config/routes`
[image assetsSrc="cubicle-workshop-07.png" /]

[/slide]

[slide hideTitle]
# Cube Model and Storage

- **Cube Model**

Each cube should have the following properties (for now it could be an ES6 class):

-   **id**: number
-   **name**: string
-   **description**: string 
-   **imageUrl**: string
-   **difficultyLevel**: number

- **Storage** 
Store the cubes inside `/config/database.json`

It is not a good practice, but as this is not the focus of this project, you can do it like this for now.

In a later workshop, you will learn how to connect to and work with an actual database.

[/slide]
