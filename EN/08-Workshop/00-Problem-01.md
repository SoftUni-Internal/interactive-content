
[slide hideTitle]

# Workshop: CarTube

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Workshop-CarTube.zip) **for this task.**

## Overview
**Implement** a front-end app (SPA) for viewing and managing car **listings**. 

The application allows visitors to browse through different car ads. 

Users may **register** with a **username** and **password**, which allows them to create their own ads. 

Ad authors can also **edit** or **delete** their own publications at any time.

## Technical Details

You are provided with the following resources:

- **Project scaffold**: a "**package.json**" file, containing a list of common dependencies

You may change the included libraries to your preference. 

The sections **devDependencies** and **scripts** of the file are used by the automated testing suite, altering them may result in incorrect test operation.

To **initialize** the project, execute the command `npm install` via the command-line terminal.

- **HTML and CSS files**: all views (pages) of the application, including **sample** user-generated content, are included in the file "**index.html**", which links to CSS and other static files

**Each view is in a separate section** of the file, which can be identified by a **unique class name or id** attribute.

Your application may use any preferred method (such as a **templating library** or manual visibility settings) to display only the selected view and to **navigate** between views upon user interaction.

- **Local REST service**: a special server, which contains **sample data** and supports **user registration** and **CRUD operations** via REST requests is included with the project

Each section of this document (where applicable) includes details about the necessary **REST endpoints**, to which **requests** must be sent, and the **shape** of the expected **request body**.

For more information on how to use the included server, see **Appendix A: Using the Local REST Service**.


- **Automated tests**: A complete test suite is included, which can be used to test the correctness of your solution. Your work will be assessed, based on these tests.

For more information on how to run the tests, see **Appendix B: Running the Test Suite**.

**Note:** When creating HTML Elements and displaying them on the page, **adhere as close as possible to the provided HTML** samples. 

Changing the structure of the document may **prevent the tests** from running correctly, which will **adversely affect your assessment grade**. 

You may **add attributes** (such as **class** and **dataset**) to any HTML Element, as well as **change** "**href**" attributes on links and add/change the **method** and **action** attributes of HTML Forms, to facilitate the correct operation of a routing library or another method of abstraction. 

You may also add hidden elements to help you implement certain parts of the application requirements.

[/slide]
# Navigation Bar (5 pts)

[slide hideTitle]


