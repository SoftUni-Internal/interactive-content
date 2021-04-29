# Overview and Details
[slide hideTitle]

# Meme Lounge

**Here is a link to the** [resources]() **for this task.**

You are assigned to implement a **Web application** (SPA) using JavaScript. 

The application should dynamically display content, based on user interactions. 

It must support user **profiles** and **CRUD** operations using a **REST** service.

## Overview
**Implement** a front-end app (SPA) for viewing and managing **memes**. 

The application must allow visitors to browse through the **memes** catalog.

 Users must be able to **register** with a **username**, an **email**, a **password** and **gender**, which will allow them to **create** their own posts. 
 
 Post authors can also **edit** and **delete** their own publications at any time.

## Technical Details

You are provided with the following resources:

- **Project scaffold**: A **package.json** file, containing a list of common dependencies

You can change the included libraries to your preference. The sections "**devDependencies**" and "**scripts**" of the file are used by the automated testing suite, altering them may result in incorrect test operation.

To **initialize** the project, execute the command `npm install` via the command-line terminal.


- **HTML and CSS files**: These are all of the views (or pages) for the application, including **sample** user-generated **content**, are included in the file index.html, which links to the CSS and other static files 

**Each view is in a separate section** of the file, which can be identified by a **unique class name or id** attribute. 

Your application may use any preferred method (such as a **templating library** or manual visibility settings) for displaying the selected view and to **navigate** between views upon user interaction.

- **Local REST service**: This is a server, which contains **sample data** and supports **user registration** and **CRUD operations** via REST requests

It is included with the project. 

Each section of this document (where applicable) includes details about the necessary **REST endpoints**, to which **requests** must be sent, and the **shape** of the expected **request body**.

For **more information** on how to use the included server, see **Appendix A: Using the Local REST Service** at the end of this document.


- **Automated tests**: A complete test suite is included, which can be used to test your solution

For **more information** on how to run the tests, see **Appendix B: Running the Test Suite** at the end of this document.


**Note:** When creating the HTML Elements and displaying them on the page, **adhere as close as possible to the provided HTML** samples. 

Changing the structure of the document **may prevent the tests** from running correctly, which **will adversely affect your assessment grade**. 

You may **add attributes** (such as **classes** and **datasets**) to any HTML Element, as well as **change** "**href**" attributes on links and add/change the **method** and **action** attributes of HTML Forms, to facilitate the correct operation of a routing library or another method of abstraction. 

You may also add hidden elements to help you implement certain parts of the application requirements.
[/slide]


[slide hideTitle]
# Appendix A: Using the Local REST Service 

## Starting the Service 


## Sending Requests  


## Required Headers 


## Server Response 

## More Information
You can find more details on the GitHub [repository](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md) of the service.

[/slide]

[slide hideTitle]
# Appendix B: Running the Test Suite 

## Project Setup 

## Executing the Tests 

## Debugging Your Solution 

[/slide]