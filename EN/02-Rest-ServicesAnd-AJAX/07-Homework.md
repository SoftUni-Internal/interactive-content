# Homework


[slide hideTitle]
# Problem: REST Countries

**NOTE**: Install the [Postman](https://www.postman.com/) REST Client to **test** the functions. 

- Manually compile an **HTTP request** (as text) to retrieve information about Romania
  
- Use **Postman** to make the **same request**

- Make a request that **retrieves** only the fields **name**, **capital**, **region**, and **population** for Italy 

- Make a request that retrieves information about **all German-speaking countries**

Your **first task** is to get detailed information about **Romania**. 

Send a "**GET**" request to the link given below. 

## Request   

`https://restcountries.eu/rest/v2/name/Romania`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-28.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-29.png" /]

Each API has a documentation where you can see how to use it. You can find the documentation for this API [here](https://restcountries.eu/).

- Try to filter only **specific fields** of the information about **Italy**. Send a **GET** request with the needed parameter to receive a response with information about the country in this form:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-30.png" /]

- There is a way to retrieve a response holding all the countries, which citizens speak the German language. Send a **GET** request to retrieve the information for these countries: Austria, Belgium, Germany, Holy See, Liechtenstein, Luxembourg and Switzerland but retrieve only their names and region.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-31.png" /]

[/slide]

[slide hideTitle]

# Problem: Bus Stop

Use the **resources** from previous task.

Perform an HTTP request that displays the arrival times for all buses by a **bus stop ID**.

Submit a **GET** request to `http://localhost:3030/jsonstore/bus/businfo/:stopID` \(replace `:stopID` with the correct value\).

You will receive a JSON object in the following format:

```
stopId: {
  name: stopName,
  buses: { busId: time, … }
}
```

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-32.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-33.png" /]

## Hints

The webhost will respond with valid data to the IDs 1287, 1308, 1327, and 2334.

[/slide]


[slide hideTitle]

# Problem: Bus Schedule

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Rest-Services-And-AJAX-Homework-02.BUS-SCHEDULE.zip) **for this task.**

Create a program that tracks the progress of a bus on its route and announces it inside of an **infobox**.

The program should display the upcoming stop and once the bus arrives, request the name of the next one.

The bus has two states - **moving** and **stopped**.

When it is **stopped**, only the button **Depart** is **enabled** while the infobox shows the name of the **current** stops.

When it is **moving**, only the button **Arrive** is **enabled** while the infobox shows the name of the **upcoming** stops. 

Initially, the info box shows **Not Connected** and the **Arrive** button is **disabled**.

The ID of the first stop is **depot**.

When the **Depart** button is clicked, send a **GET** request to the server with the ID of the current stop to address `https://js-applications1.firebaseio.com/schedule/{currentId}.json` \(replace the highlighted part with the relevant value\).

As a response, you will receive a JSON object in the following format:

```
stopId {
  name: stopName,
  next: nextStopId
}
```

Update the infobox with the response information, disable the **Depart** button, and enable the **Arrive** button.

The infobox text should look like this \(replace the highlighted part with the relevant value\):

`Next stop {stopName}`

When the "Arrive" button is clicked, update the text, disable the **Arrive** button and enable the **Depart** button.

The infobox text should look like this \(replace the highlighted part with the relevant value\):

`Arriving at {stopName}`

Successfully clicking the buttons will cycle through the entire schedule.

If invalid data is received, show **Error** inside the infobox and **disable** both buttons.

## Examples

Initially, the info box shows "Not Connected" and the arrive button is disabled.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-12.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Not Connected</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()" disabled="true">
   </div>
</div>
```

When **Depart** is clicked, a request is made with the first ID.

The infobox is updated with the new information and the buttons are changed:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-14.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Next stop Depot</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()" disabled="disabled">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()">
   </div>
</div>
```

Clicking on the **Arrive** button changes the infobox and swaps the buttons.

This allows **Depart** to be clicked again, which makes a new request and updates the information:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-16.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Arriving at Depot</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()" disabled="disabled">
   </div>
</div>
```

[/slide]


[slide hideTitle]

# Problem: Messenger

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Rest-Services-And-AJAX-Homework-03.MESSENGER.zip) **for this task.**

Create a program that records and displays messages.

The user can post a message, containing a name and content and retrieve all of the currently recorded messages.

**Firebase url** for the requests - `https://rest-messanger.firebaseio.com/messanger`.

When the **Send button** is clicked, you should create a **new object** and send a **post request** to the firebase URL.

Use the following message structure:

```
{
  author: authorName,
  content: msgText,
}
```

The key associated with each message object is not required. When making a **POST** request with the message object as a parameter, Firebase will automatically assign a random key.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-18.png" /]

If you click on the **Refresh button**, you should **get all** of the messages with a **GET request** and display them in a text area.

Use the following message format:

`{author}: {message}`

## Examples

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-19.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-20.png" /]

[/slide]


[slide hideTitle]

# Problem: PhoneBook


**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Rest-Services-And-AJAX-Homework-04.PHONEBOOK.zip) **for this task.**

Create a program that can load, create and delete entries from a PhoneBook.

Using the HTML template, to which you should bind the needed functionality.

When the **Load button** is clicked, a **GET** request should be made to the server to get all of the **phoneBook** entries.

Each received entry should be in a **li** tag inside the **ul** tag with an `id="phonebook"` in the following format with text `<person>: <phone>` and a **Delete button** attached.

Pressing the **Delete** button should send a **DELETE** request to the server and delete the entry.

The received response will be an object in the following format:

`{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…}`

where `<key>` is a unique key given by the server and `<person>` and `<phone>` are the actual values.

When the **Create** button is clicked, a new **POST** request should be made to the server with the information from the Person and Phone textboxes. The Person and Phone textboxes should be cleared and the PhoneBook should be automatically reloaded \(like if the **Load** button was pressed\).

The data sent on a **POST** request should be a valid JSON object, containing the properties **person** and **phone**.

Example format:

```
{
"person": "<person>",
"phone": "<phone>"
}
```

The URL to which your program should make requests is: `https://phonebook-nakov.firebaseio.com/phonebook`.

**GET** and **POST** requests should go to `https://phonebook-nakov.firebaseio.com/phonebook.json`, while **DELETE** requests should go to `https://phonebook-nakov.firebaseio.com/phonebook/<key>.json`, where `<key>` is the unique key of the entry \(you can find out the **key** from the key property in the **GET** request\)

You can use Firebase to create your app.

**First Screenshots:**

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-21.png" /]

**Second Screenshots:**
[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-22.png" /]

[/slide]

