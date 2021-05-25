# Homework: Cat Shelter

[slide hideTitle]
# Description

**Here is a** [link](https://videos.softuni.org/resources/javascript/javascript-backend/01-Intro-To-NodeJs-Homework-Resources-NEW.zip) **to the resources for this task.**

The exercise itself will be distributed into several parts, each containing more concrete information and guide steps on how to develop the functionality specified below.

"Cat Shelter" is a very simple **cat catalog** which shows the "database" (JSON file) of some **cat shelter** and **every user** (registration is not required) can be a **potential owner**.

The application will consist of the basic CRUD operations (**Create** cat, **Read** cat, **Update** cat and **Delete** cat). 

**Each cat** has a **name**, a **description**, an **image** and a **breed**.

# Project Specification

Design and implement a "**Cat Shelter**" **web application** (containing routing and multiple web pages) using HTML 5, CSS 3 and Node.js.


[/slide]

[slide hideTitle]

# Functionality

The application must contain the following **functionalities**:

- **Add Cat Breed**

  - Create a cat **breed** that can later be picked, when a new cat is added to the shelter

- **Add Cat**

  - Create a new cat, which has a **name**, a **description**, an **image**, and a **breed**
  - **All cats** must be saved in a **JSON** file (that will be our database)

- **List All Cats**

  - List all cats from the "database", **no matter the breed**

- **Edit Cat**

  - Edit a cat's information
    * changes must be persisted in the "database"

- **Delete Cat**

  - Delete a specific cat from the database
    * changes must be persisted in the "database"

- **Search Cat**
  - Search in the cat "database" by some **query string** and show the results, if any

## Examples

- Home page `/`, where **all** created **cats** in the database are **shown**

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-1.jpg" /]

- Add Breed `/addBreed`, where **a new cat breed** can be created 
  * it can be picked when a new cat is added to the shelter

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-2.jpg" /]

- Add Cat `/addCat`, where a new cat can be created and stored in the shelter "database"
  * all created breeds before that are shown in the selected menu

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-3.png" /]

Currently, these 5 breeds are created (**Bombay Cat**, **American Bobtail Cat**, **Bengal Cat**, **British Shorthair Cat**, and **Unknown**)

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-4.png" /]


[/slide]

[slide hideTitle]
# Expected Behavior

## Adding a Breed

We add a new cat breed called "**Persian cat**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-5.jpg" /]

After that, we create **a new** cat with the newly created breed:

- **breed**: "**Persian cat**"
- **name**: "**Niya**"
- **description**: "**Lonely and lazy cat seek for a hospitable owner**" 
- and an imported **image**

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-6.png" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-7.png" /]

## Adding a Cat

After clicking on the `[ADD CAT]` **button**, a **redirect** should be followed and the Home page **('/')** should be shown with all cats in the shelter, including the new one.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-8.jpg" /]

## Changing Info

For instance, if we click on Jerry's `[Change Info]` button, the following page should be shown:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-9.png" /]

We change Jerry's **name** and **breed**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-10.png" /]

After clicking on the `[EDIT CAT]` **button**, the redirect to the Home page `/` should follow and the changes should be applied:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-11.jpg" /]

## Sheltering

If we click on LeeRoy's `[New Home]` **button**, the following page should be shown:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-12.jpg" /]

If we click on the `[SHELTER THE CAT]` **button**, the Home page `/` should be shown by redirection and **LeeRoy** should not be **displayed**, because someone offered him a shelter and he became a pet:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-13.jpg" /]

## Searching

If we use the search bar to check all Persian cats, the result should be:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-14.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-15.jpg" /]

[/slide]

[slide hideTitle]
# Routing


There will be different **views** that will be displayed based on the **routing** (the current URL).

There are no strict rules of how the current application routing should look like, but there are some common set of **rules** to **follow**:

- Use **short** and **clear** URL's
  * good examples: `/cats/add`, `/cats/edit/3`

  * bad examples: `/catAddInfo.html`, `showAllProductsByCategoryName/{categoryName}`

- Follow the **HTTP standards**
  * proper usage of HTTP methods (GET, POST, PUT, etc.)

  * follow the GET – POST – Redirect pattern

## Models

**Cat**

- **id**: **string** or **number** - **required** and **unique**

- **name**: **string** - required

- **description**: **string** containing some additional information about the cat

- **image**: **string** containing **reference** to an **image** that displays the given cat

- **breed**: **string** referring to the breed of the cat

[/slide]

[slide hideTitle]
## Setup IDE

For starters, configure your IDE or text editor.

As mentioned above, the following steps will include screenshots from **Visual Studio Code**.

Other popular choices are **Atom** and **WebStorm**.

Before you continue with the next step, make sure everything about your IDE is configured and you are up and ready to go.

## Initial Setup

First, let us create our project:

Go to the folder where you want the project to be, then press `Shift + Right mouse click` and click on "**Open command window here**".

Inside the newly created window, type in "**npm init**" and fill the project's data as you see fit.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-16.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-17.jpg" /]

If you are using **Visual Studio Code**, then in the same console (after you have inserted all the needed information), type in: "**code .**".

This will **open** the editor for you.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-18.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-19.jpg" /]

## Folder Structure

Let us create the **initial** project folder structure. 

It may look like this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-20.jpg" /]

Download the **resources** and put the `site.css` and the `favicon.ico` in the "**content**" folder, as shown here:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-21.jpg" /]

Move all **views** into the **views folder**, as follows:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-22.jpg" /]

[/slide]

[slide hideTitle]
# Start the Server

Go to the `index.js` file and start implementing the server.

First, you should create **two constants**, one for the **HTTP module** and the other one for the **port** we will use for our server.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-23.jpg" /]

Once we require our HTTP module, we can create our server via a `createServer` function.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-24.jpg" /]

When you do that, just open the Terminal with **(Ctrl +** \`**)** and run the server with the `node index` command.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-25.jpg" /]


[/slide]

[slide hideTitle]
# Display the Home Page

We will start implementing the **application logic** in the following steps.

Note that the application **does not** have users.

First, whenever we access our site, we want to display the "**default**", or the so-called "**home**" page. 

To do that, we have to:

- Implement **back-end logic** of what to be displayed
- Write our **view** (the HTML and the CSS)
- Write the **server** and **execute** the **logic** we implemented in the first step

Next, go to the "**handlers**" folder and add a new `home.js` file. 

In the beginning, add the **modules** we are going to use:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-26.jpg" /]

As we mentioned above, we will use **JSON files** to simulate a database, so create a folder called "**data**".

Inside, create 2 **JSON** files (**cats.json** and **breeds.json**).

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-27.jpg" /]

Do not forget to include it in the `home.js` file. 

We will need them **later**, but **include** them anyway.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-28.jpg" /]

Then, let us start **exporting** the logic as a **function** which is accepting both a **request** and a **response**.

After that, we can **parse** the requested **URL** and **attach** it to the request object:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-29.jpg" /]

Next, we should tell the **server** when to **dispatch** the request to the **home handler** - when the **requested URL** is: `/` and the request **method** is "**GET**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-30.jpg" /]

If we could not handle the current request, we will **notify** the server of that by returning `true` (is a request **not handled** - `true`).

What is left is to **find** the HTML5 **page**, **read** it, and **send** it as a **response**.
[/slide]

[slide hideTitle]
# Hints

Inside the above **if-statement**, we should locate the local `index.html` file (our home page) and store the path to it into a variable called **filePath**, for instance.

Use the `path.normalize` and the `path.join` functions, along with `__dirname property` to achieve that.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-31.jpg" /]

Use the `fs` module to read the HTML file, using the **readFile** function with the derived **filePath**.

If an error occurs, send a **404 response** code and a fitting **plain text message**.

If the specified file path name is **correct**, send the **HTML** as a response with a **code** of **200** and a **content type** of "**text/html**".

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-32.jpg" /]

Our HTML page (**home page**) is almost **ready** (the cats will be added later).

We will soon be ready to **test** if everything mentioned above is about to work.

Go to the "**handlers**" folder and add the `index.js` file.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-33.jpg" /]

This `index.js` file inside the "**handlers**" folder is the file that **exports** all future **handlers** which we will create (**static file handler** and **cat handler**).

After that, go back to the **root folder** and open `index.js` (the file where we created our HTTP **server**).

As we mentioned above, the `index.js` **file** inside the "**handlers**" **folder** will export **all handlers** to the "open world". 

That is why we should require them in this `index.js` file:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-34.jpg" /]

**Loop through** all handlers and if the right handler is found, break the loop.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-35.jpg" /]

**Start the server** again and type **localhost:3000** in the browser to see the result.

The result will be **waiting on the localhost**...

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-36.jpg" /]

**Stop** the page loading by clicking on the `[_X_]` button.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-37.jpg" /]

Our `index.html` file is visualized, but **without any styles**.

If you open the **network tab** inside **DevTools** and refresh the page, the result will be something like this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-38.jpg" /]

In other words, the server does not have the functionality to **serve static files**. 

We will take care of that in the next section.
[/slide]

[slide hideTitle]

# Serve Static Files

In this step, we will serve static files.

In other words, load **CSS**, **JS** and **image** files.

Let us begin by adding the **back-end** logic.

Add a new file called `static-files.js` in the "**handler**" folder.

It will behave like a normal **handler**, but **instead of returning HTML**, it will return **file(s)**.

Our public folder will be "**content**":

First, let us create a function called `getContentType`.

It will receive our ***pathname*** (url), check the file **extension** and return the **correct** `content-type`:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-39.jpg" /]

Following the example, continue writing the logic to cover the other extensions (such as **HTML**, **png**, **js**, etc...).

After that, you should **export** a **function** which will:

- receive our so familiar **request** and **response** parameters
- check the **pathname** and the **request** method

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-40.jpg" /]

**Implement** the missing logic.

- **Read a file** via the `readFile` function from the **file system** module (**fs**)
- Check for errors
- Deliver the correct **content type**
- **Send** the correct **response** with the **received data** from the `fs` module

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-41.jpg" /]

This will work for now, but when we load the cat images locally, we should make some changes.

Go back to `handlers/index.js` and add the **static** file handler:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-42.jpg" /]

If you have not included the `site.css` file and the `favicon.ico` in `home/index.html`, go back and do it.

## Note

Make sure that all **href** attributes inside the HTML start with "/**content**/…"

Start the web application again:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-43.jpg" /]

[/slide]


[slide hideTitle]

# Implement Database

As we mentioned, we will use **JSON files**.

So, create a new folder called "**data**" (if you have not done that already) and add **two** JSON files in there (**cats** and **breeds**).

In the beginning, they will be **empty arrays** (both files), but when we start creating **cats** and **breeds**, we will fill them.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-44.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-45.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-46.jpg" /]

[/slide]

[slide hideTitle]

# Accessing All Views

A new handler should be created for the logic about the cats.

Create a file called `cat.js` inside the "**handlers**" folder.

The handler will be responsible for:
- **displaying** the (HTML) form
- **parsing** the data from it 
- **adding** a new cat inside the **JSON** file

First, **include** all needed libraries:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-47.jpg" /]

This may look like a lot, but do not worry - we will use each one of them at a specific moment.

Feel free to check the official [Node documentation](https://nodejs.org/dist/latest-v14.x/docs/api/) to understand what each module does.

The logic is similar to the one before.

Using the **if-statement**, you should check every single **pathname** and **request method** and load an HTML page or parse the incoming data.

Create the variable, which will be the parsed **request**, get the current **URL pathname**, and check the different cases.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-48.jpg" /]

You already have all the needed views.

Use the `readFile` or the `createReadStream` function to **read** each of the HTML files (check the difference between these two functions).

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-49.jpg" /]

One more thing before we test our application – go to `handlers/index.js` and add our **cat handler**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-50.jpg" /]

**Restart the server** and go to `localhost:3000/cats/add-cat`

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-51.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-52.png" /]

[/slide]

[slide hideTitle]

# Handling POST

To create a new cat, first, we should create the cat breeds functionality, because they will be listed in the **addCat page** as **options elements** inside the **select menu**.

Handle the post request in `/cats/add-breed`, save the given breed inside the `breeds.json` file and when the `addCat.html` file is loaded, we should use the breeds inside that **JSON** file, so they could be picked when a new cat is added to our application.

To handle **POST request**, the logic is similar:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-53.jpg" /]

You have to:

- **Parse** the **incoming data** from the **form**

- **Read** the `breeds.json` file

- **Modify** the `breeds.json` file

- **Update** the `breeds.json` file

- **Redirect** to the home page `/` and **end** the **response**

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-54.jpg" /]

Here is an example of how it works.

The `breeds.json` file **before**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-55.jpg" /]

Adding an "**Unknown breed**":

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-56.jpg" /]

If you got redirected to the home page, you have successfully implemented the functionality of adding a breed.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-57.jpg" /]

If we check the `breeds.json` file again, the result is:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-58.jpg" /]

Every single breed that is created by the app is saved in this JSON file.

The next step is to visualize all breeds from this JSON file into the **select menu** as **options** in the `addCat.html` file.

At the moment, the Fluffy Cat Breed is just a **placeholder**.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-59.png" /]

[/slide]

[slide hideTitle]
# Making Custom Templates

To continue, we must create **two templates**.

One for all created **breeds** inside the JSON file, and one for all listed **cats** on the home page.

Let us start with the simple one (**breeds**) because we cannot create a new cat yet.

This is the **structure**:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-60.jpg" /]

Every breed should be an **option** that has a value with the current breed, and **text content** - also with the current breed.

All of them should be inside the **select element** with an id of "**group**".

When we render the `addCat.html` file, we should **replace** some of the content inside the HTML.

To do that, we simply modify the `addCat.html` file as follows:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-61.jpg" /]

After that, open the `cat.js` **handler** and go to the statement where you render the `addCat.html` file.

Modify the data. Replace the `{{catBreeds}}` with the current **breed placeholder** like this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-62.jpg" /]

In this case, **breeds** is a variable that is **required** at the top of the file and refers to the `breeds.json`.

We can replace/modify the data and pass it to the `res.write()` method.

Let us add another breed, just to **check** if this logic is working fine:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-63.jpg" /]

After we open the **Add Cat** Tab, we will see that this time, the **options** are the **actual breeds** inside the JSON file.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-64.png" /]

As you can guess, we can use the same logic to render all created cats on the home page.

However, first, you should create the logic where a new cat is **added** to our `cat.json` file via a **form**.

But here comes the funny part, because they add a new cat form that contains the input where the type is "**file**".

That means this time we must process the incoming data differently.

We will use **formidable**. 

You can check [how this library works](https://www.npmjs.com/package/formidable), or simply use the following code structure:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-65.jpg" /]

In this case, **fields** and **files** will be **objects**, where **fields** is the incoming data from the form and **files** is the information about the uploaded file via a form.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-66.jpg" /]

Use the `rename()` function to change the location of the uploaded file.

In other words, you can **save it** somewhere in the local files.

Just get the **old** and the **new path** on that file and pass them as arguments to the function.

Then, you can get all cats inside the `json.file` using the `readFile()` and the `writeFile()` functions from the `fs` module, **modify** them and **write them back** to the JSON file, where the **new cat** will be included.

[/slide]

[slide hideTitle]
# Making Custom Templates: Example

This is an example of creating a **custom** template.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-67.png" /]

If we open the `cats.json` file, it will **not** be an empty array anymore.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-68.jpg" /]

We **already** can create new cats.

To fully verify that the entire logic is working, you can check `/content/images/`.

If the picture uploaded by you is there, everything is fine. 

Next, we can use the given template and render all cats inside the `cats.json` file.

Here is the cat structure:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-69.jpg" /]

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-70.jpg" /]

When rendering the `index.html` page, we should loop through all cats inside the `cats.json` file.

Then, use the placeholder from above to change and include them into the HTML file before it is rendered.

## How to do it

Go to the `home.js` file, because there is the logic we should change. 

There we load the `index.html` file, but with static data.

Change it to this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-71.jpg" /]

Loop through all cats inside the `cats.json` file and use the given from the skeleton placeholder to fill every single cat information into the right place.

Do not forget to `write()` and `end()` the response.

Remember to change the `index.html` as well.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-72.jpg" /]

If you restart the server and check the home page `localhost:3000`, the result might be something like this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-73.jpg" /]

The picture is not visualized on the page.

The reason behind that is because when we serve static files, we tend to forget about all edge cases.

To solve this problem, we should extend our `static-handler.js` logic.

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-74.jpg" /]

This is the structure you should use to resolve this problem.

The logic inside these two `readFile()` functions is mostly the same.

The only difference between them is the **encoding**, which is the second argument, and it is optional.

When some of the following files are served, there should be no encoding, including no **utf8** encoding: **png**, **jpg**, **jpeg**, etc.

You should just **check** when:
- the **pathname starts with** `/content`
- the **request method** is `GET`
- the **pathname ends with** any of the above image extensions

Read the file, pass the **pathname** and the **callback** as arguments.

In any other cases, regardless of the file extension on the end of the **pathname**, you should put the encoding `utf8` for now, as shown above.

If you do that, the result will be:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-75.jpg" /]
[/slide]

[slide hideTitle]

# Edit and Delete

`[Change Info]` and `[New Home]` are buttons that **every cat** should have.

You are given all the necessary views, including these two - `editCat.html` and `catShelter.html`.

By clicking over any of them, the app should show the current view with the current cat's info inside.

We should implement the following logic:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-76.jpg" /]

When some of the `[Change info]` buttons are clicked, you should:

- check the **cat id** which is provided in the **URL**
- **search** that cat in the `cat.json` file
- use templates to **replace** the static data with the current cat information

If you check the `home.js` handler, you will see this:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-77.jpg" /]

This is our **cat template**. 

When you get the current cat from the `json.file`, you can use the logic from above to **get the file, render it**, and apply the template:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-78.jpg" /]

**Remember** to change the `editCat.html` file as well:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-79.jpg" /]

The logic after clicking on the `[New Home]` button is the same:

- Check the **URL** to get the current **cat id**.

- **Search** through the `cat.json` file that id

- **Replace** `editCat.html` with the current cat information like above

**POST request** for these two actions is almost the same as the logic for **adding a new cat**.

The only difference is when you **edit** some of the cat information, you **change** that cat inside the JSON file, **instead** of creating a new one (change it with the **incoming information** from the form). 

And **delete** the current cat from the shelter `cats.json` file.

The steps are the same:

- **Parse** the incoming data from the form (if you are editing the cat's information)

- **Read** the `cats.json` file via the **fs** module and update the cats (edit the cat or deleting it)

- **Rewrite** the `cats.json` file with the applied changes

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-Homework-80.jpg" /]

[/slide]

[slide hideTitle]

# Search

Having a web page with cats is fun, but sometimes you want to **filter** them by some **criteria**.

Therefore, our home page includes a little form that has **only one text field** (a cat's **name** or a part of it).

After **submitting** the form, **all** the cats **containing** such text or having the same name should be **displayed**.

**Good luck!**

[/slide]

