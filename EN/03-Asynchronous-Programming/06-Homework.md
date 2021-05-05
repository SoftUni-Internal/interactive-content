# Homework

[slide hideTitle]

# Problem: Bus Stop

To solve some of the following tasks, you will need to use an up-to-date version of the local REST service which can be downloaded from [here](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Server1.zip). 

To start the server, extract it to a folder on your computer and run the included **start.bat** file, or manually open a command prompt and execute the `node server.js` command.

Download the resources from [here](https://videos.softuni.org/resources/javascript/javascript-applications/01_Bus_Stop.zip).

## Description

Create a JS program that displays the arrival times of all buses for a particular "**bus stop id**" when a button is clicked.

When the [**Submit**] button is clicked, the name of the bus stop should appear and the list below should get populated with all of the buses that are expected to arrive, along with their arrival times. Take the **value** for the bus stop id from the **stopId** input field.

Send a GET request to `http://localhost:3030/jsonstore/bus/businfo/:busId` and parse the response. 

You will receive a **JSON object** in the following format:

```
stopId: {

 name: stopName,

 buses: { busId: time, ... }

}
```

Place the **name** property as a **text** inside the div container with id **stopName**, and each bus as a **list item** in the following format:

- **Bus {busId} arrives in {time}**

If the request is invalid or the information is not in the expected format, display **Error**. 

The list should be cleared before every request is sent.

**Note:** The service will respond with valid data to bus id: 1287, 1308, 1327, and 2334.


## Examples

[image assetsSrc="asyncprogramming-1.png" /]
<br />
[image assetsSrc="asyncprogramming-2.png" /]

When the \[**Check**\] button is clicked, the results should be displayed in the corresponding elements:

[image assetsSrc="asyncprogramming-3.png" /]

[image assetsSrc="asyncprogramming-4.png" /]

If an error occurs, the stop name changes to Error:

[image assetsSrc="asyncprogramming-5.png" /]

[image assetsSrc="asyncprogramming-6.png" /]

[/slide]

[slide hideTitle]

# Problem: Bus Schedule

Download the resources from [here](https://videos.softuni.org/resources/javascript/javascript-applications/02_Bus_Schedule.zip).

## Description

Create a JS program that tracks the progress of a bus on its route and announces it inside an info box. 

The program should display the upcoming stop and request from the server the name of the next one once the bus arrives at that stop.

The bus has two states - **moving** and **stopped**. When it is **stopped**, only the [**Depart**] button must be **enabled**, and the info box must show the name of the **current** stop. 

When it is **moving**, only the [**Arrive**] button is **enabled**, and the info box must show the name of the **upcoming** stop. 

Initially, the info box must show "**Not Connected**" and the [**Arrive**] button is **disabled**. 

The id of the first stop is "**depot**".

When the [**Depart**] button is clicked, send a GET request to the server with the id of the current stop to the following URL: `http://localhost:3030/jsonstore/bus/schedule/:id`

You will receive a **JSON object** as a response in the following format:

```
stopId {

 name: stopName,

 next: nextStopId

}
```

Update the info box with the information from the response, disable the [**Depart**] button and enable the [**Arrive**] button. 

The text in the info box must be:

- **Next stop {stopName}**

When the [**Arrive**] button is clicked, update the text, disable the [**Arrive**] button and enable the [**Depart**] button. 

The text in the info box must be:

- **Arriving at {stopName}**

The program will cycle through the entire schedule infinitely if you keep clicking the buttons. 

If any invalid data is received, show "**Error**" inside the info box and **disable** both buttons.

## Examples

Initially, the info box shows "**Not Connected**" and the arrive button is disabled.

[image assetsSrc="asyncprogramming-7.png" /]

[image assetsSrc="asyncprogramming-8.png" /]

When [**Depart**] is clicked, a request is made with the first id. The info box is updated with the new information and the buttons are changed:

[image assetsSrc="asyncprogramming-9.png" /]

[image assetsSrc="asyncprogramming-10.png" /]

Clicking on the [**Arrive**] button changes the info box and swaps the buttons. This allows the [**Depart**] button to be clickable again, which makes a new request and updates the information:

[image assetsSrc="asyncprogramming-11.png" /]

[image assetsSrc="asyncprogramming-12.png" /]


[/slide]

[slide hideTitle]

# Problem: Forecaster

Download the resources from [here](https://videos.softuni.org/resources/javascript/javascript-applications/03_Forecaster.zip).

## Description

Create a JS program that retrieves weather reports **from a server** and **displays** them to the user.

When the user writes the name of a location and clicks the [**Get Weather**] button, send a GET request to the server at `http://localhost:3030/jsonstore/forecaster/locations`.

The response will be an array of objects with the following structure:

```
{

 name: locationName,

 code: locationCode

}
```

Find the object that corresponds to the name that the user submitted in the input field with ID "**location**" and use its **code** value to make **two more** **GET requests**:

-   For the current weather conditions, make a request to `http://localhost:3030/jsonstore/forecaster/today/:code`

The response from the server will be an object with the following structure:

```
{ 
  name: locationName,
  forecast: { low: temp,
              high: temp,
              condition: condition } 
}
```

-   For a 3-day forecast, make a request to `http://localhost:3030/jsonstore/forecaster/upcoming/:code`

The response will be an object with the following structure:

```
{ 
  name: locationName,
  forecast: [{ low: temp,
               high: temp,
               condition: condition }, … ] 
}
```

Use the information from these two objects to compose a forecast in HTML format, and insert it inside the page. 

Note that the \<div\> with an id of "forecast" must be set to visible. 

See the examples for details.

If an **error** occurs (the server does not respond, or the location name cannot be found), or if the data is not in the correct format, display "**Error**" in the **forecast section**.

Use the following codes for weather symbols:

-   Sunny: `&#x2600;` // ☀
-   Partly sunny: `&#x26C5;` // ⛅
-   Overcast: `&#x2601;` // ☁
-   Rain: `&#x2614; `// ☂
-   Degrees: `&#176;` // °

## Examples

When the app starts, the **forecast div** is **hidden**. 

When the user **enters a name** and **clicks** on the [**Get Weather**] button, a GET request is sent to the server.

[image assetsSrc="asyncprogramming-13.png" /]

[image assetsSrc="asyncprogramming-14.png" /]

[image assetsSrc="asyncprogramming-15.png" /]

[image assetsSrc="asyncprogramming-16.png" /]


[/slide]


[slide hideTitle]

# Problem: Locked Profile

Download the resources from [here](https://videos.softuni.org/resources/javascript/javascript-applications/04_Locked_Profile.zip).

## Description

**Create a JS program** that **shows** and **hides** the additional information about users, which you can find by making a GET request to the server at the following URL:

`http://localhost:3030/jsonstore/advanced/profiles`

The response will be an object containing the information for all the users. 

Create a profile card for every user and display it on the web page. 

Every item should have the following structure:

[image assetsSrc="asyncprogramming-17.png" /]

[image assetsSrc="asyncprogramming-18.png" /]

When one of the [**Show more**] **buttons** is clicked, the **hidden information** in the **div** container should be displayed only if **the profile is not locked**. If the current profile is **locked**, nothing should happen.

[image assetsSrc="asyncprogramming-19.png" /]

If the **hidden information is displayed** and we **lock** **the profile again**, the [**Hide it**] button should **not work**!

Otherwise, when the profile is **unlocked** and we click on the [**Hide it**] button, the new fields must be hidden again.

[/slide]


[slide hideTitle]

# Problem: Accordion

Download the resources from [here](https://videos.softuni.org/resources/javascript/javascript-applications/05_Accordion.zip).

## Description

Create an application that shows **less or more** information for the selected article. At the start, you should send a **GET** request to the server at: 

`http://localhost:3030/jsonstore/advanced/articles/list`

The response will be an object with the titles of the articles.

By clicking the [**More**] button for the selected **article**, it should **reveal** the content of a **hidden** div container and **change** the text of the button to [**Less**]. 

Retrieve the content by making a **GET** request to the server at the following URL:

`http://localhost:3030/jsonstore/advanced/articles/details/:id`

The response will be an object with property **id**, **title**, **content**. 

When the same button is clicked **again**, **hide** the div container and **change** the text of the button to [**More**].

The Less or More button should be **toggleable** (you should be able to click the button as many times as you want).

## Examples

[image assetsSrc="asyncprogramming-20.png" /]

[image assetsSrc="asyncprogramming-21.png" /]

Every item should have the following structure:

[image assetsSrc="asyncprogramming-22.png" /]

You are allowed to add new attributes, but do not change the existing ones.


[/slide]
