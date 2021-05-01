# Overview and Details
[slide hideTitle]

# CarTube

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Workshop-CarTube-NEW.zip) **for this task.**

You are assigned to implement a **Web application** (SPA) using JavaScript. 

The application should dynamically display content, based on user interactions.

It must support user profiles and CRUD operations using a REST service.

## Overview
**Implement** a front-end application (SPA) for viewing and managing **car listings**. 

The application must allow visitors to browse through different car ads. 

Users must be able to **register** in the application with a **username** and **password**, which will allow them to create their own ads. 

Ad authors can also **edit** or **delete** their own publications at any time.

## Technical Details

You are provided with the following resources:

- **Project scaffold**: a "**package.json**" file, containing a list of common dependencies

You can change the included libraries to your preference. 

The sections "**devDependencies**" and "**scripts**" of the file are used by the automated testing suite, altering them may result in incorrect test operation.

To **initialize** the project, execute the command `npm install` via the command-line terminal.

- **HTML and CSS files**: These are all of the views (or pages) for the application, including **sample** user-generated content, are included in the file index.html, which links to the CSS and other static files

**Each view is in a separate section** of the file, which can be identified by a **unique class name or id** attribute. 

Your application may use any preferred method (such as a **templating** **library** or manual visibility settings) for displaying the selected view and to **navigate** between views upon user interaction.

- **Local REST service**: This is a server, which contains **sample data** and supports **user registration** and **CRUD operations** via REST requests

It is included with the project. 

Each section of this document (where applicable) includes details about the necessary **REST endpoints**, to which **requests** must be sent, and the shape of the expected request body.

For more information on how to use the included server, see **Appendix A: Using the Local REST Service** at the end of this document.


- **Automated tests**: A complete test suite is included, which can be used to test your solution

For more information on how to run the tests, see **Appendix B: Running the Test Suite** at the end of this document.

**Note:** When creating the HTML Elements and displaying them on the page, **adhere as close as possible to the provided HTML** samples. 

Changing the structure of the document may **prevent the tests** from running correctly, which will **adversely affect your assessment grade**. 

You may **add attributes** (such as **classes** and **datasets**) to any HTML Element, as well as **change** "**href**" attributes on links and add/change the **method** and **action** attributes of HTML Forms, to facilitate the correct operation of a routing library or another method of abstraction. 

You may also add hidden elements to help you implement certain parts of the application requirements.
[/slide]


[slide hideTitle]
# Appendix A: Using the Local REST Service 

## Starting the Service 

The REST service will be the "**server**" folder in the provided resources. It has no dependencies and can be started by opening a terminal in its directory and executing:

`node server.js `

If it initialized correctly, you should see a message about the **host address and port**, on which the service will respond to requests.

## Sending Requests  

To send a request, use the **hostname** and port, shown in the initialization log and **resource address** and **method** as described in the **application requirements**. 

If the data needs to be included in the request, it must be JSON-encoded and the appropriate **Content-Type header** must be added. 

Similarly, if the service is to return data, it will be **JSON-encoded**. 

Note that **some requests do not return a body** and attempting to parse them will throw an exception.

**Read** requests, as well as **login** and **register** requests do not require authentication. 

All other requests must be authenticated.


## Required Headers 

To send the data to the server, include a **Content-Type** header and encode the body as a JSON-string: 

```
Content-Type: application/json 
{JSON-encoded request body as described in the application requirements}
```
To perform an authenticated request, include an **X-Authorization** header, set to the value of the **session token** and returned by an earlier login or register request:

`X-Authorization: {session token}`

## Server Response 

The data response:

```
HTTP/1.1 200 OK
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded response data}
```
Empty response:
```
HTTP/1.1 204 No Content
Access-Contrl-Allow-Origin: *
```
Error response:
```
HTTP/1.1 400 Request Error
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded error message}
```
## More Information
You can find more details on the GitHub [repository](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md) of the service.

[/slide]

[slide hideTitle]
# Appendix B: Running the Test Suite 

## Project Setup 
The tests require a web server to deliver the content of the application. 

There is a development web server included in the project scaffold but you may use a server that you are familiar with. 

Note that specialized tools like **BrowserSync** may interfere with the tests. 

To initialize the project with its dependencies, open a terminal in the folder, containing the file **package.json** and execute the following: 

`npm install `

If you changed the section **devDependencies** of the project, the tests may not initialize properly. 

[image assetsSrc="js-application-cartube-workshop-1.png" /]

## Executing the Tests 
Before running the test suite, make sure a web server is operational and the application can be found at the root of its network address. 

To start the included dev-server, open a terminal in the folder containing **package.json** and execute: 

`npm run start `

This is a one-time operation unless you terminate the server at any point. 

It can be restarted with the same command as above. 

To execute the tests, do not close the terminal, running the web server instance, open a new terminal  in the folder containing **package.json** and execute: 

`npm run test`

[image assetsSrc="js-application-cartube-workshop-2.png" /]

The test results will be displayed in the terminal, along with detailed information about encountered problems.

You can perform this operation as many times necessary by re-running the above command.

## Debugging Your Solution 

If a test fails, you can view the detailed information about the requirements that were not met by your application.

Open the file **e2e.test.js** in the folder **tests** and navigate to the desired section as described below. 

**This first step will not be necessary if you are using the included web server.** 

Make sure the application host is set correctly: 

[image assetsSrc="js-application-cartube-workshop-3.png" /]

The value for **host** must be the address where your application is being served. 

Make sure that entering this address in a regular internet browser shows your application. 

To make a single test run, instead of the full suite (useful when debugging a single failing test), find the test and append **.only** after the **it** reference: 

[image assetsSrc="js-application-cartube-workshop-4.png" /]

On slower machines, some of the tests may require more time to complete. 

You can instruct the tests to run more slowly by slightly increasing the values for interval and timeout: 

[image assetsSrc="js-application-cartube-workshop-5.png" /]

The **interval** values that are greater than 500 and **timeout** values that are greater than 10000 are not recommended. 

If this does not make the test pass, set the value of **DEBUG** to **true** and run the tests again - this will launch a browser instance and allow you to see what is being tested, what the test sees and where it fails (or timeouts): 

[image assetsSrc="js-application-cartube-workshop-6.png" /]

If the actions are happening too fast, you can increase the value of **slowMo**. 

If the browser hangs, you can close it and abort any remaining tests by focusing the terminal window and pressing `[Ctrl+C]` followed by the letter "**y**" and `[Enter]`. 

The detail thing to look for is the exact row where the test fails:

[image assetsSrc="js-application-cartube-workshop-7.png" /]

[/slide]