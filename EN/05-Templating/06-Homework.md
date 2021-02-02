# Homework

[slide hideTitle]
# Problem: Contacts Book

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Templating-Homework-01.Contacts-Book.zip) **for this task.**

Create a simple page containing some cards with contacts. 

Each card should have a **name** and a button `Details\`. 

Each time the button is pressed, you have to **toggle a div** containing more detailed information about the corresponding contact.

You are provided with the **HTML, CSS** and a **JavaScript** file with all the contacts data. 

You have to create a **separate template** for the contact cards and display all of them on the main page. 

In the end, the page should look like this:

[image assetsSrc="JS-Applications-templating-4.png" /]

[image assetsSrc="JS-Applications-templating-5.png" /]

## Hints

First, create a **separate HTML file**, where you will put your **contact cards**:

**Loop through all the contacts** and **render the data** about each of them

The next step is to create the functionality for displaying all cards: 

- Create a function that gets the `template.html` file
  
- Pass the `contacts` variable to the context
  
- Create the **template**
  
- Get the `div` and fill it with the **compiled HTML**
  
- Create the **function** that **shows** the additional info about each contact

[/slide]




[slide hideTitle]
# Problem: List Towns

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Templating-Homework-02.List-Towns.zip) **for this task.**



You are given an **input field** with a button. 

In the input field, you should enter **elements separated** by comma and whitespace `, `. 

Your task is to create a simple **template** that defines a **list** of towns. 

Each **town** comes from the **input** field.

In your `attachEvents()` function you **should** attach a click event to the **button** with **id** `btnLoadTowns` and **render** the **towns** that come from the input field in the **HTML template** with **id** `towns-template`.

## Screenshots
[image assetsSrc="JS-Applications-templating-6.png" /]

This is how the HTML looks like:
[image assetsSrc="JS-Applications-templating-7.png" /]

[/slide]




[slide hideTitle]
# Problem: HTTP Status Cats

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Templating-Homework-03.HTTP-Status-Cats.zip) **for this task.**

*We all love cats.*

*They are also a fun way to learn all the HTTP status codes.*

Your task is to **refactor** the given **HTML** and to create a **template** to represent **each** cat card block on its own.

After you have **created** the template, **render** it into the div with **id** `allCats`.

A cat has an `id`, `statusCode`, `statusMessage` and `imageLocation`. 

The cats are **seeded** using the **function** from the JavaScript **file** named `catSeeder.js`.

Each card block has a **button** that **unveils** status code information **connected** to each cat. 

You should **toggle** the button and change its text from `Show status code` to `Hide status code`.

## Screenshots
[image assetsSrc="JS-Applications-templating-8.png" /]

[image assetsSrc="JS-Applications-templating-9.png" /]

[/slide]





[slide hideTitle]
# Problem: Popular Monkeys

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Templating-Homework-04.Popular-Monkeys.zip) **for this task.**

You are provided with a **skeleton**. 

Your task is to implement the function in the `monkeysTemplate.js` file to render the six most popular monkeys in the browser.

You should also add an **event** to each `Info` button to show the **details** about the monkey.

Each monkey also has a **name** and an **image**. 

Explore the `monkeys.js` file for more details. 

At the end the page should look like this:
[image assetsSrc="JS-Applications-templating-10.png" /]

[/slide]
