# Homework

[slide hideTitle]

# Problem: Forecaster

[code-task title="Problem: Forecaster" taskId="js-applications-asynchronous-programming-Forecaster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```

```

[/code-editor]
[task-description]

# Description

You can download the resources for this problem from [here](https://mega.nz/file/jBJxUYqa#epYRw83cYrEAQirIotxCdnuD-WSVlOPrzjx8DzBVNzs).

Write a program that **requests** a weather report **from a server** and **displays** it to the user.

**Use the skeleton from the provided resources.**

When the user writes the name of a location and clicks `Get Weather`, make a **GET** request to the server at address https://judgetests.firebaseio.com/locations.json.

The response will be an array of objects, with the following structure:

```js
{
  name: locationName,
  code: locationCode
}
```

Find the object, corresponding to the name that the user submitted in the input field with the ID "**location**" and use its **code** value to make **two more GET requests**:

- For current conditions, request to:

https://judgetests.firebaseio.com/forecast/today/{code}.json

The response from the server will be an object with the following structure:

```js
{
  name: locationName,
  forecast: { low: temp,
              high: temp,
              condition: condition }
}
```

- For a 3-day forecast, make a request to:

https://judgetests.firebaseio.com/forecast/upcoming/{code}.json

The response from the server will be an object with the following structure:

```js
{
  name: locationName,
  forecast: [{ low: temp,
               high: temp,
               condition: condition }, … ]
}
```

Use the information from these two objects to compose a forecast in HTML and insert it inside the page.

Note that the `<div`> with ID "**forecast**" must be set to **visible**. See the examples for details.

If an **error** occurs (the server doesn’t respond or the location name cannot be found) or the data is not in the correct format, display `Error` in the **forecast section**.

Use the following codes for weather symbols:

- Sunny `&#x2600;` // ☀
- Partly sunny `&#x26C5;` // ⛅
- Overcast `&#x2601;` // ☁
- Rain `&#x2614;` // ☂
- Degrees `&#176;` // °

# Examples

When the app starts, the **forecast div** is **hidden**. When the user **enters a name** and **clicks** on the button **Get Weather**, the requests being.

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-1.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-2.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-3.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-4.jpg" /]

# Hints

The server at the address listed above will respond with valid data for location names "**London**", "**New York**" and "**Barcelona**".
[/task-description]
[code-io /]
[tests]
[test]
[input]
server.respondWith((request) =\> \{
if (request.method == 'GET') \{
let response = ``;
if (request.url.includes('locations')) \{
response = JSON.stringify(\[\{
"code": "ny",
"name": "New York"
\}, \{
"code": "london",
"name": "London"
\}, \{
"code": "barcelona",
"name": "Barcelona"
\}\]);
\} else if (request.url.includes('forecast/today')) \{
response = JSON.stringify(\{
"name": "New York, USA",
"forecast": \{
"low": "8",
"high": "19",
"condition": "Sunny"
\}
\});
\} else if (request.url.includes('forecast/upcoming')) \{
response = JSON.stringify(\{
"name": "New York",
"forecast": \[
\{
"low": "6",
"high": "17",
"condition": "Partly sunny"
\},
\{
"low": "3",
"high": "9",
"condition": "Overcast"
\},
\{
"low": "3",
"high": "7",
"condition": "Overcast"
\}
\]
\})
\} else \{
request.respond(501, \{\}, "");
return;
\}
request.respond(200, \{"Content-Type": "application/json"\}, response);
\} else \{
request.respond(500, \{\}, "");
\}
\});

server.respondImmediately = true;
document.body.innerHTML = `\<div id="request"\> \<input id="location" class='bl' type="text"\> \<input id="submit" class="bl" type="button" value="Get Weather"\> \</div\> \<div id="forecast" style="display: none;"\> \<div id="current"\> \<div class="label"\>Current conditions\</div\> \</div\> \<div id="upcoming"\> \<div class="label"\>Three-day forecast\</div\> \</div\> \</div\>`;

result();
\\$('\#location').val('New York');
\\$('\#submit').trigger('click');

setTimeout(nextStep, 50);

function nextStep() \{
let current = \\$('\#current').text();
    let upcoming = \\$('\#upcoming').text();

    expect(current).to.contains("New York");
    expect(current).to.contains("8");
    expect(current).to.contains("19");
    expect(current).to.contains("Sunny");
    expect(upcoming).to.contains("6");
    expect(upcoming).to.contains("17");
    expect(upcoming).to.contains("Partly sunny");
    expect(upcoming).to.contains("3");
    expect(upcoming).to.contains("9");
    expect(upcoming).to.contains("Overcast");
    expect(upcoming).to.contains("7");
    done();

\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Fisher Game

[code-task title="Problem: Fisher Game" taskId="js-applications-asynchronous-programming-Fisher-Game" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```

```

[/code-editor]
[task-description]

# Description

You can download the resources for this problem from [here](https://mega.nz/file/bBZVmQDY#HtUoXzWAc5EG0evnj_87seQcAOYIvbw-1sz9S719oMA).


- **angler**: **string** representing the name of the person who caught the fish

- **weight**: **floating-point number** representing the weight of the fish in kilograms

- **species**: **string** representing the name of the fish species

- **location**: **string** representing the location where the fish was caught

- **bait**: **string** representing the bait used to catch the fish

- **captureTime**: **integer number** representing the time needed to catch the fish in minutes

## HTML Template

**Use the skeleton from the provided resources.**

Attach handlers to the `[Load]`, `[Update]`, `[Delete]` and `[Add]` buttons, which make the appropriate **GET**, **PUT**, **DELETE** and **POST** requests.

You are given an example catch in the template to show you where and how to insert the catches.

Notice that the **div** containing the catch has an attribute **data-id** that should store the `_id` of the entry given by Kinvey.

Create the following REST services to access your data:

- **List All Catches**

  - Endpoint - https://fisher-game.firebaseio.com/catches.json
  - Method: **GET**
  - Returns (**Object of objects**)

- **Create a New Catch**

  - Endpoint: https://fisher-game.firebaseio.com/catches.json
  - Method: **POST**
  - Request body (JSON): `{"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}`

- **Update a Catch**

  - Endpoint: https://fisher-game.firebaseio.com/catches/{catchId}.json
  - Method: **PUT**
  - Request body (JSON): `{"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}`

- **Delete a Catch**

  - Endpoint: https://fisher-game.firebaseio.com/catches/{catchId}.json
  - Method: **DELETE**

- Pressing the `[Load]` button should **list all** catches.

- Pressing the `[Update]` button should send a **PUT** request, updating the catch in firebase.

- Pressing the `[Delete]` button should delete the catch both from firebase and from the page.

- Pressing the `[Add]` button should submit a new catch with the values of the inputs in the fieldset with `id="addFrom"`.

# Screenshots

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-5.jpg" /]

[image assetsSrc="JS-Applications-Asynchronous-Programming-Homework-6.jpg" /]
[/task-description]
[code-io /]
[tests]
[test]
[input]
let response = \[\{\_id: 1, angler: "Pesho", weight: 1000, species:"Legend", location:"Soft Uni", bait:"trolling", captureTime:1\}\];
response = JSON.stringify(response);
server.autoRespond = true;
let correctHeader = false;
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches/, function (xhr, appKey) \{
if(xhr.requestHeaders.Authorization && xhr.requestHeaders.Authorization === "Basic Secret")\{
correctHeader = true;
\}
xhr.respond(200, \{"Content-Type": "application/json"\}, response)
\});
global.btoa = function(text)\{
return "Secret";
\};
document.body.innerHTML = `\<h1\>Biggest Catches\</h1\> \<fieldset id="main"\> \<legend\>Catches\</legend\> \<div id="catches"\> \</div\> \</fieldset\> \<div id="aside"\> \<button class="load"\>Load\</button\> \<fieldset id="addForm"\> \<legend\>Add Catch\</legend\> \<label\>Angler\</label\> \<input type="text" class="angler"/\> \<label\>Weight\</label\> \<input type="number" class="weight"/\> \<label\>Species\</label\> \<input type="text" class="species"/\> \<label\>Location\</label\> \<input type="text" class="location"/\> \<label\>Bait\</label\> \<input type="text" class="bait"/\> \<label\>Capture Time\</label\> \<input type="number" class="captureTime"/\> \<button class="add"\>Add\</button\> \</fieldset\> \</div\>`;

result();
\\$('.load').trigger('click');

setTimeout(checkResults, 70);

function checkResults() \{
let entries = \\$('\#catches').find(".catch");
expect(entries).to.have.lengthOf(1, "Incorrect number of entries");
let angler = entries.eq(0).find(".angler");
let weight = entries.eq(0).find(".weight");
let species = entries.eq(0).find(".species");
let location = entries.eq(0).find(".location");
let bait = entries.eq(0).find(".bait");
let captureTime = entries.eq(0).find(".captureTime");

    expect(angler).to.have.lengthOf(1,"No angler was added");
    expect(weight).to.have.lengthOf(1,"No weight was added");
    expect(species).to.have.lengthOf(1,"No species was added");
    expect(location).to.have.lengthOf(1,"No location was added");
    expect(bait).to.have.lengthOf(1,"No bait was added");
    expect(captureTime).to.have.lengthOf(1,"No captureTime was added");

    expect(angler.val()).to.equal("Pesho","Incorrect angler value");
    expect(weight.val()).to.equal("1000","Incorrect weight value");
    expect(species.val()).to.equal("Legend","Incorrect species value");
    expect(location.val()).to.equal("Soft Uni","Incorrect location value");
    expect(bait.val()).to.equal("trolling","Incorrect bait value");
    expect(captureTime.val()).to.equal("1","Incorrect capture time value");

    expect(correctHeader).to.equal(true,"Incorrect authorization header");
    done();

\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \[\{\_id: 1, angler: "Pesho", weight: 1000, species:"Legend", location:"Soft Uni", bait:"trolling", captureTime:1\}\];
response = JSON.stringify(response);
server.autoRespond = true;
let correctHeader = false;
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches/, function (xhr, appKey) \{
if(xhr.requestHeaders.Authorization && xhr.requestHeaders.Authorization === "Basic Secret")\{
correctHeader = true;
\}
xhr.respond(200, \{"Content-Type": "application/json"\}, response)
\});
global.btoa = function(text)\{
return "Secret";
\};

document.body.innerHTML = `\<h1\>Biggest Catches\</h1\> \<fieldset id="main"\> \<legend\>Catches\</legend\> \<div id="catches"\> \</div\> \</fieldset\> \<div id="aside"\> \<button class="load"\>Load\</button\> \<fieldset id="addForm"\> \<legend\>Add Catch\</legend\> \<label\>Angler\</label\> \<input type="text" class="angler"/\> \<label\>Weight\</label\> \<input type="number" class="weight"/\> \<label\>Species\</label\> \<input type="text" class="species"/\> \<label\>Location\</label\> \<input type="text" class="location"/\> \<label\>Bait\</label\> \<input type="text" class="bait"/\> \<label\>Capture Time\</label\> \<input type="number" class="captureTime"/\> \<button class="add"\>Add\</button\> \</fieldset\> \</div\>`;

result();
\\$('.load').trigger('click');

setTimeout(checkResults, 70);

function checkResults() \{
let entries = \\$('\#catches').find(".catch");
expect(entries).to.have.lengthOf(1, "Incorrect number of entries");
let labels = entries.eq(0).find("label");

    expect(labels.eq(0).text()).to.equal("Angler","Label missing");
    expect(labels.eq(1).text()).to.equal("Weight","Label missing");
    expect(labels.eq(2).text()).to.equal("Species","Label missing");
    expect(labels.eq(3).text()).to.equal("Location","Label missing");
    expect(labels.eq(4).text()).to.equal("Bait","Label missing");
    expect(labels.eq(5).text()).to.equal("Capture Time","Label missing");

    expect(correctHeader).to.equal(true,"Incorrect authorization header");
    done();

\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \[\{\_id: 7, angler: "Pesho", weight: 1000, species:"Legend", location:"Soft Uni", bait:"trolling", captureTime:1\},
\{\_id: 8, angler: "Gosho", weight: 30, species:"Fish", location:"Somewhere", bait:"mouse", captureTime:30\}\];
let called = false;
server.autoRespond = true;
let correctHeader = false;
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches\/(\d+)/, function (xhr, appKey,id) \{
if(xhr.requestHeaders.Authorization && xhr.requestHeaders.Authorization === "Basic Secret")\{
correctHeader = true;
\}
let body = JSON.parse(xhr.requestBody);
if(xhr.method === "PUT" && id === "7")\{
if(body.angler === "New Value")\{
called = true;
\}
response = response.filter(x=\>x.\_id !== id);
response.add(JSON.parse(xhr.requestBody));
xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(response));
\}
else\{
xhr.respond(404, \{\}, JSON.stringify('Not Found'));
\}

\});
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches/, function (xhr, appKey) \{
xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(response))
\});
global.btoa = function(text)\{
return "Secret";
\};
document.body.innerHTML = `\<h1\>Biggest Catches\</h1\> \<fieldset id="main"\> \<legend\>Catches\</legend\> \<div id="catches"\> \</div\> \</fieldset\> \<div id="aside"\> \<button class="load"\>Load\</button\> \<fieldset id="addForm"\> \<legend\>Add Catch\</legend\> \<label\>Angler\</label\> \<input type="text" class="angler"/\> \<label\>Weight\</label\> \<input type="number" class="weight"/\> \<label\>Species\</label\> \<input type="text" class="species"/\> \<label\>Location\</label\> \<input type="text" class="location"/\> \<label\>Bait\</label\> \<input type="text" class="bait"/\> \<label\>Capture Time\</label\> \<input type="number" class="captureTime"/\> \<button class="add"\>Add\</button\> \</fieldset\> \</div\>`;

result();
\\$('.load').trigger('click');

setTimeout(del, 70);

function del() \{
let entries = \\$('\#catches').find(".catch");
expect(entries).to.have.lengthOf(2, "Incorrect number of entries");
let updateBtn = entries.eq(0).find('.update');

    entries.eq(0).find(".angler").val("New Value");
    updateBtn.trigger('click');

    setTimeout(checkResults, 70);

\}
function checkResults()\{
expect(called).to.equal(true,'Update was not called with correct value');
expect(correctHeader).to.equal(true,"Incorrect authorization header");
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \[\{\_id: 3, angler: "Pesho", weight: 1000, species:"Legend", location:"Soft Uni", bait:"trolling", captureTime:1\},
\{\_id: 4, angler: "Gosho", weight: 30, species:"Fish", location:"Somewhere", bait:"mouse", captureTime:30\}\];
server.autoRespond = true;
let called = false;
let correctHeader = false;
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches\/(\d+)/, function (xhr, appKey,id) \{
if(xhr.requestHeaders.Authorization && xhr.requestHeaders.Authorization === "Basic Secret")\{
correctHeader = true;
\}

    if(xhr.method === "DELETE" && id === "3")\{
        called = true;
        response = response.filter(x=\>x._id !== id);
        xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(\{count:1\}));
    \}
    else\{
        xhr.respond(404, \{\}, JSON.stringify('Not Found'));
    \}

\});
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches/, function (xhr, appKey) \{
xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(response))
\});
global.btoa = function(text)\{
return "Secret";
\};
document.body.innerHTML = `\<h1\>Biggest Catches\</h1\> \<fieldset id="main"\> \<legend\>Catches\</legend\> \<div id="catches"\> \</div\> \</fieldset\> \<div id="aside"\> \<button class="load"\>Load\</button\> \<fieldset id="addForm"\> \<legend\>Add Catch\</legend\> \<label\>Angler\</label\> \<input type="text" class="angler"/\> \<label\>Weight\</label\> \<input type="number" class="weight"/\> \<label\>Species\</label\> \<input type="text" class="species"/\> \<label\>Location\</label\> \<input type="text" class="location"/\> \<label\>Bait\</label\> \<input type="text" class="bait"/\> \<label\>Capture Time\</label\> \<input type="number" class="captureTime"/\> \<button class="add"\>Add\</button\> \</fieldset\> \</div\>`;

result();
\\$('.load').trigger('click');

setTimeout(del, 70);

function del() \{
let entries = \\$('\#catches').find(".catch");
expect(entries).to.have.lengthOf(2, "Incorrect number of entries");
let deleteBtn = entries.eq(0).find('.delete');

    deleteBtn.trigger('click');

    setTimeout(checkResults, 70);

\}
function checkResults()\{
expect(called).to.equal(true,'Delete was not called with correct value');
expect(correctHeader).to.equal(true,"Incorrect authorization header");
done();
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \[\];
server.autoRespond = true;
let correctHeader = false;
server.respondWith(/https:\/\/baas.kinvey.com\/appdata\/(\[\w-\]+)\/biggestCatches/, function (xhr, appKey) \{
if(xhr.requestHeaders.Authorization && xhr.requestHeaders.Authorization === "Basic Secret")\{
correctHeader = true;
\}

    let body = JSON.parse(xhr.requestBody);
    if (xhr.method === "POST") \{
        called = true;
        body._id = 666;
        response.push(body);
        xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(body));
    \}
    else if (xhr.method === "GET") \{
        xhr.respond(200, \{"Content-Type": "application/json"\}, JSON.stringify(response));
    \}
    else \{
        xhr.respond(404, \{\}, JSON.stringify('Not Found'));
    \}

\});
global.btoa = function(text)\{
return "Secret";
\};
document.body.innerHTML = `\<h1\>Biggest Catches\</h1\> \<fieldset id="main"\> \<legend\>Catches\</legend\> \<div id="catches"\> \</div\> \</fieldset\> \<div id="aside"\> \<button class="load"\>Load\</button\> \<fieldset id="addForm"\> \<legend\>Add Catch\</legend\> \<label\>Angler\</label\> \<input type="text" class="angler"/\> \<label\>Weight\</label\> \<input type="number" class="weight"/\> \<label\>Species\</label\> \<input type="text" class="species"/\> \<label\>Location\</label\> \<input type="text" class="location"/\> \<label\>Bait\</label\> \<input type="text" class="bait"/\> \<label\>Capture Time\</label\> \<input type="number" class="captureTime"/\> \<button class="add"\>Add\</button\> \</fieldset\> \</div\>`;

result();

let addBtn = \\$('.add');
let addForm = \\$('\#addForm');
let anglerInput = addForm.find('.angler');
let weightInput = addForm.find('.weight');
let speciesInput = addForm.find('.species');
let locationInput = addForm.find('.location');
let baitInput = addForm.find('.bait');
let captureTimeInput = addForm.find('.captureTime');

anglerInput.val("Paulo Amorim");
weightInput.val(636);
speciesInput.val("Atlantic Blue Marlin");
locationInput.val("Vitória, Brazil");
baitInput.val("trolled pink");
captureTimeInput.val(80);
addBtn.trigger('click');

setTimeout(checkResults, 70);

function checkResults() \{
expect(called).to.equal(true, "Add button did not make a request");
expect(response\[0\].angler).to.equal("Paulo Amorim", "Incorrect angler name sent");
expect(response\[0\].weight).to.equal(636, "Incorrect weight sent");
expect(response\[0\].species).to.equal("Atlantic Blue Marlin", "Incorrect species sent");
expect(response\[0\].location).to.equal("Vitória, Brazil", "Incorrect location sent");
expect(response\[0\].bait).to.equal("trolled pink", "Incorrect bait sent");
expect(response\[0\].captureTime).to.equal(80, "Incorrect capture time sent");

    expect(correctHeader).to.equal(true,"Incorrect authorization header");
    done();

\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
