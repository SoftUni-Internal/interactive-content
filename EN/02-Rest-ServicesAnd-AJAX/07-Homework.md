# Homework

[slide]

# Problem: Bus Stop

[code-task title="Problem: Bus Stop" taskId="js-applications-rest-services-and-ajax-bus-stop" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function busStop(){
    //TODO
}
```

[/code-editor]
[task-description]

## Description

You can download the resources for this problem from [here](https://mega.nz/file/LIoi3D4b#nyXdp7v9QUUXuRztMjPXSyUVUJGEckoReHMFP7JlWbE).

Write a JS program that displays arrival times for all buses by a given bus stop ID when a button is clicked.

When the button with ID **submit** is clicked, the name of the bus stop appears, and the list below gets filled with all the buses that are expected and their time of arrival.

Take the **value** of the input field with id **stopId**.

Submit a **GET** request to `https://js-applications1.firebaseio.com/businfo/{stopId}.json` \(replace the highlighted part with the correct value\) and parse the response.

You will receive a JSON object in the format:

```
stopId: {
  name: stopName,
  buses: { busId: time, … }
}
```

Place the name property as text inside the div with ID **stopName** and each bus as a list item with text:

`Bus {busId} arrives in {time}`

Replace all highlighted parts with the relevant value from the response.

If the request is not successful, or the information is not in the expected format, display **Error** as **stopName** and nothing in the list. The list should be cleared before every request is sent.

## Examples

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-6.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-7.png" /]

When the button is clicked, the results are displayed in the corresponding elements:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-8.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-9.png" /]

If an error occurs, the stop name changes to Error:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-10.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-11.png" /]

## Hints

The web host will respond with valid data to IDs 1287, 1308, 1327, and 2334.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let response = \{ "name": "St. Nedelya sq.", "buses": \{ "12": "6", "18": "7", "4": "13" \} \};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="stopInfo"\> \<div\> \<label for="stopId"\>Stop ID: \</label\> \<input id="stopId" type="text"\> \<input id="submit" type="button" value="Check"\>\</div\> \<div id="result"\> \<div id="stopName"\>\</div\> \<ul id="buses"\>\</ul\> \</div\> \</div\>`;

\\$('\#stopId').val('1308');
result();

function testIt() \{
expect(\\$('\#stopName').text()).to.contains("St. Nedelya sq.");
    let list = \\$('\#buses').find('li');
expect(list.text()).to.contains('Bus 4 arrives in 13 minutes');
expect(list.text()).to.contains('Bus 12 arrives in 6 minutes');
expect(list.text()).to.contains('Bus 18 arrives in 7 minutes');
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let responseObj = \{"status": "404", json: () =\> \{return \{\}\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="stopInfo"\> \<div\> \<label for="stopId"\>Stop ID: \</label\> \<input id="stopId" type="text"\> \<input id="submit" type="button" value="Check"\>\</div\> \<div id="result"\> \<div id="stopName"\>\</div\> \<ul id="buses"\>\</ul\> \</div\> \</div\>`;

\\$('\#stopId').val('111');
result();

function testIt() \{
expect(\\$('\#stopName').text()).to.contains("Error");
    let list = \\$('\#buses').find('li');
expect(list.length).to.equal(0);
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \{ "name": "Centralni Hali", "buses": \{ "20": "11", "22": "4" \} \};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="stopInfo"\> \<div\> \<label for="stopId"\>Stop ID: \</label\> \<input id="stopId" type="text"\> \<input id="submit" type="button" value="Check"\>\</div\> \<div id="result"\> \<div id="stopName"\>\</div\> \<ul id="buses"\>\</ul\> \</div\> \</div\>`;

\\$('\#stopId').val('2334');
result();

function testIt() \{
expect(\\$('\#stopName').text()).to.contains("Centralni Hali");
    let list = \\$('\#buses').find('li');
expect(list.text()).to.contains('Bus 20 arrives in 11 minutes');
expect(list.text()).to.contains('Bus 22 arrives in 4 minutes');
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return \{\}\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="stopInfo"\> \<div\> \<label for="stopId"\>Stop ID: \</label\> \<input id="stopId" type="text"\> \<input id="submit" type="button" value="Check"\>\</div\> \<div id="result"\> \<div id="stopName"\>\</div\> \<ul id="buses"\>\</ul\> \</div\> \</div\>`;

\\$('\#stopId').val('666');
result();

function testIt() \{
expect(\\$('\#stopName').text()).to.contains("Error");
    let list = \\$('\#buses').find('li');
expect(list.length).to.equal(0);
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \{ name: "Central Train Station sq.", buses: \{ 78: 18, 85: 20, 213: 18, 285: 20, 305: 18, 404: 18, 413: 16 \} \};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="stopInfo"\> \<div\> \<label for="stopId"\>Stop ID: \</label\> \<input id="stopId" type="text"\> \<input id="submit" type="button" value="Check"\>\</div\> \<div id="result"\> \<div id="stopName"\>\</div\> \<ul id="buses"\>\</ul\> \</div\> \</div\>`;

\\$('\#stopId').val('1327');
result();

function testIt() \{
expect(\\$('\#stopName').text()).to.contains("Central Train Station sq.");
    let list = \\$('\#buses').find('li');
expect(list.text()).to.contains('Bus 78 arrives in 18 minutes');
expect(list.text()).to.contains('Bus 85 arrives in 20 minutes');
expect(list.text()).to.contains('Bus 213 arrives in 18 minutes');
expect(list.text()).to.contains('Bus 285 arrives in 20 minutes');
expect(list.text()).to.contains('Bus 305 arrives in 18 minutes');
expect(list.text()).to.contains('Bus 404 arrives in 18 minutes');
expect(list.text()).to.contains('Bus 413 arrives in 16 minutes');
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]










[slide]

# Problem: Bus Schedule

[code-task title="Problem: Bus Schedule" taskId="js-applications-rest-services-and-ajax-bus-schedule" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function busSchedule(){
    //TODO
}
```

[/code-editor]
[task-description]

## Description

You can download the resources for this problem from [here](https://mega.nz/file/SdhmGQBR#XXw-a1o4YZseJGGUr2ivu7_98h-g66VJyFNi7upstTQ).

Write a JS program that tracks the progress of a bus on its route and announces it inside an info box.

The program should display which is the upcoming stop and once the bus arrives, request from the server the name of the next one.

The bus has two states – **moving** and **stopped**.

When it is **stopped**, only the button **Depart** is **enabled**, while the info box shows the name of the **current** stop.

When it is **moving**, only the button **Arrive** is **enabled**, while the info box shows the name of the **upcoming** stop. Initially, the info box shows **Not Connected**, and the **Arrive** button is **disabled**.

The ID of the first stop is **depot**.

When the "**Depart**" button is clicked, make a **GET** request to the server with the ID of the current stop to address `https://js-applications1.firebaseio.com/schedule/{currentId}.json` \(replace the highlighted part with the relevant value\).

As a response, you will receive a JSON object in the following format:

```
stopId {
  name: stopName,
  next: nextStopId
}
```

Update the info box with the response information, disable the `Depart` button, and enable the `Arrive` button.

The info box text should look like this \(replace the highlighted part with the relevant value\):

`Next stop {stopName}`

When the "Arrive" button is clicked, update the text, disable the `Arrive` button and enable the `Depart` button.

The info box text should look like this (replace the highlighted part with the relevant value):

`Arriving at {stopName}`

Successfully clicking the buttons will cycle through the entire schedule.

If invalid data is received, show **Error** inside the info box and **disable** both buttons.

## Examples

Initially, the info box shows “Not Connected” and the arrive button is disabled.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-12.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-13.png" /]

When Depart is clicked, a request is made with the first ID.

The info box is updated with the new information and the buttons are changed:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-14.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-15.png" /]

Clicking Arrive, changes the info box and swaps the buttons.

This allows Depart to be clicked again, which makes a new request and updates the information:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-16.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-17.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let response = \{ "name": "Depot", "next": "0361" \};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="schedule"\> \<div id="info"\>\<span class="info"\>Not Connected\</span\>\</div\> \<div id="controls"\> \<input id="depart" value="Depart" type="button"\> \<input id="arrive" value="Arrive" type="button" disabled="true"\> \</div\> \</div\>`;

result = result();
result.depart();

function testIt() \{
expect(\\$('\#info').find('span').text()).to.contains("Depot");
    expect(\\$('\#depart').prop('disabled')).to.be.true;
expect(\\$('\#arrive').prop('disabled')).to.be.false;
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let response = \{ "name": "Depot", "next": "0361" \};

let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};
var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="schedule"\> \<div id="info"\>\<span class="info"\>Not Connected\</span\>\</div\> \<div id="controls"\> \<input id="depart" value="Depart" type="button"\> \<input id="arrive" value="Arrive" type="button" disabled="true"\> \</div\> \</div\>`;

result = result();
result.depart();

function testIt() \{
expect(\\$('\#info').find('span').text()).to.contains("Depot");
    expect(\\$('\#depart').prop('disabled')).to.be.true;
expect(\\$('\#arrive').prop('disabled')).to.be.false;
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \{ "name": "Depot", "next": "0361" \};

let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};
var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="schedule"\> \<div id="info"\>\<span class="info"\>Not Connected\</span\>\</div\> \<div id="controls"\> \<input id="depart" value="Depart" type="button"\> \<input id="arrive" value="Arrive" type="button" disabled="true"\> \</div\> \</div\>`;

result = result();
result.depart();

function nextStep() \{
expect(\\$('\#info').find('span').text()).to.contains("Depot");
    expect(\\$('\#depart').prop('disabled')).to.be.true;
expect(\\$('\#arrive').prop('disabled')).to.be.false;

    result.arrive();
    expect(\\$('\#info').find('span').text()).to.contains("Depot");
    expect(\\$('\#depart').prop('disabled')).to.be.false;
    expect(\\$('\#arrive').prop('disabled')).to.be.true;

    response = \{ "name": "Ovcha Kupel", "next": "0812" \};

    responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};
    fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

    result.depart();

    function nextNextStep() \{
        expect(\\$('\#info').find('span').text()).to.contains("Ovcha Kupel");
        expect(\\$('\#depart').prop('disabled')).to.be.true;
        expect(\\$('\#arrive').prop('disabled')).to.be.false;
        done();
    \}

        setTimeout(nextNextStep, 100);
        fetchStub.restore();

\}

setTimeout(nextStep, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]










[slide]

# Problem: Messenger

[code-task title="Problem: Messenger" taskId="js-applications-rest-services-and-ajax-messenger" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function messenger(){
    //TODO
}
```

[/code-editor]
[task-description]

## Description

You can download the resources for this problem from [here](https://mega.nz/file/fdBHmQ7b#Z730DTvjcuaVb5pMNiAWTJshx7beI__eApUCiqg9hoA).

Write a JS program that records and displays messages.

The user can post a message, supplying a name and content, and retrieve all currently recorded messages.

**Firebase url** for the requests - `https://rest-messanger.firebaseio.com/messanger`.

When **Send button** is clicked, you should create a **new object** and send a **post request** to the firebase URL.

Use the following message structure:

```
{
  author: authorName,
  content: msgText,
}
```

The key associated with each message object is not essential - when making a **POST** request with the message object as a parameter, Firebase will automatically assign a random key.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-18.png" /]

If you click over the **Refresh button**, you should **get all** messages with **GET request** and display them into the text area.

Use the following message format:

`{author}: {message}`

## Examples

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-19.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-20.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
let response = \{"-LjH4pfOCXxKp7qilNSh":\{author:"Spami",content:"Hello, are you there?",timestamp:1562597899447 \},"LjH6AplPAnU8AdbcVdb":\{author:"Garry",content:"Yep, whats up :?",timestamp:1562598252760\},"LjH851rrC6qc2l6yyCs":\{ author:"Spami",content:"How are you? Long time no see? :)",timestamp:1562598753863\}\};

let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};
var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="main"\> \<textarea id="messages" cols="80" rows="12" disabled="true"\>\</textarea\> \<div id="controls"\> \<label for="author"\>Name: \</label\>\<input id="author" type="text"\>\<br\> \<label for="content"\>Message: \</label\>\<input id="content" type="text"\> \<input id="submit" type="button" value="Send"\> \<input id="refresh" type="button" value="Refresh"\> \</div\> \</div\>`;

result();
\\$('\#refresh').trigger('click');

function nextStep() \{
let messages = \\$('\#messages').text();
expect(messages).to.contains('Spami: Hello, are you there?');
expect(messages).to.contains('Garry: Yep, whats up :?');
expect(messages).to.contains('Spami: How are you? Long time no see? :)');
done();
\}

setTimeout(nextStep, 200);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \{"-LjH4pf4CXxKp9qilNRf": \{ author: "Mowgli", content: "Like you, I was. Like me, you will be.", timestamp: 1562597889447 \}\};

let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};
var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<div id="main"\> \<textarea id="messages" cols="80" rows="12" disabled="true"\>\</textarea\> \<div id="controls"\> \<label for="author"\>Name: \</label\>\<input id="author" type="text"\>\<br\> \<label for="content"\>Message: \</label\>\<input id="content" type="text"\> \<input id="submit" type="button" value="Send"\> \<input id="refresh" type="button" value="Refresh"\> \</div\> \</div\>`;

result();
\\$('\#author').val('Mowgli');
\\$('\#content').val('Like you, I was. Like me, you will be.');
\\$('\#submit').trigger('click');

function testIt() \{
let messages = \\$('\#messages').text();
expect(messages).to.contains('Mogli: Like you, I was. Like me, you will be.');
done();
\}

setTimeout(testIt, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]










[slide]

# Problem: PhoneBook

[code-task title="Problem: PhoneBook" taskId="js-applications-rest-services-and-ajax-phoneBook" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function phoneBook(){
    //TODO
}
```

[/code-editor]
[task-description]

## Description

You can download the resources for this problem from [here](https://mega.nz/file/XMJDXQjL#VSvQJ_4MOas82BnYrF3X2dt356VbrT9jrEiD7kNgJvI).

Write a JS program that can load, create and delete entries from a PhoneBook.

You will be given an HTML template to which you must bind the needed functionality.

When the **Load button** is clicked, a **GET** request should be made to the server to get all phoneBook entries.

Each received entry should be in a li inside the **ul** with `id="phonebook"` in the following format with text `<person>: <phone>` and a **Delete button** attached.

Pressing the **Delete** button should send a **DELETE** request to the server and delete the entry.

The received response will be an object in the following format:

`{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…}`

where `<key>` is a unique key given by the server, and `<person>` and `<phone>` are the actual values.

When the **Create** button is clicked, a new **POST** request should be made to the server with the information from the Person and Phone textboxes, the Person and Phone textboxes should be cleared, and the PhoneBook should be automatically reloaded \(like if the **Load** button was pressed\).

The data sent on a **POST** request should be a valid JSON object, containing properties **person** and **phone**.

Example format:

```
{
"person": "<person>",
"phone": "<phone>"
}
```

The URL to which your program should make requests is: 'https://phonebook-nakov.firebaseio.com/phonebook'.

**GET** and **POST** requests should go to `https://phonebook-nakov.firebaseio.com/phonebook.json`, while **DELETE** requests should go to `https://phonebook-nakov.firebaseio.com/phonebook/<key>.json`, where `<key>` is the unique key of the entry \(you can find out the **key** from the key property in the **GET** request\)

**You may create your own app** in Firebase.

## Screenshots:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-21.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-22.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
let response = \{ "guy1": \{ "phone": "+555", "person": "guy" \};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<h1\>Phonebook\</h1\> \<ul id="phonebook"\>\</ul\> \<button id="btnLoad"\>Load\</button\> \<h2\>Create Contact\</h2\> Person: \<input type="text" id="person" /\> \<br\> Phone: \<input type="text" id="phone" /\> \<br\> \<button id="btnCreate"\>Create\</button\>`;

result();

\\$('\#btnLoad').trigger('click');

function checkResults() \{
let entry = \\$('\#phonebook').find('li');
expect(entry.eq(0).text()).to.contains('guy');
expect(entry.eq(0).text()).to.contains('+555');
expect(entry.eq(0).find('button').length).to.equal(1);
done();
\}

setTimeout(checkResults, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let response = \{person: "Peter", phone: "9993"\};
let responseObj = \{"status": "200", "Content-Type": "application/json", json: () =\> \{return response\}\};

var fetchStub = sinon.stub(fetch, 'Promise').returns(Promise.resolve(responseObj));

document.body.innerHTML = `\<ul id="phonebook"\>\</ul\> \<button id="btnLoad"\>Load\</button\> Person: \<input type="text" id="person" /\> Phone: \<input type="text" id="phone" /\> \<button id="btnCreate"\>Create\</button\>`;

result();

\\$('\#person').val('Peter');
\\$('\#phone').val('7777');
\\$('\#btnCreate').trigger('click');

function checkResults() \{
expect(\\$('\#person').val()).to.be.empty;
    expect(\\$('\#phone').val()).to.be.empty;
done();
\}

setTimeout(checkResults, 100);
fetchStub.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var isCalled = false;

server.respondWith((request) =\> \{
if (request.method == 'GET') \{
request.respond(200, \{"Content-Type": "application/json"\}, '\{ "guy1": \{ "phone": "+555", "person": "guy" \} \}');
\} else if (request.method == 'DELETE' && request.url.includes("firebaseio.com/phonebook/guy1.json")) \{
isCalled = true;
request.respond(200, \{\}, "");
\} else \{
request.respond(404, \{\}, JSON.stringify('Not Found'));
\}
\});
server.respondImmediately = true;
document.body.innerHTML = `\<ul id="phonebook"\>\</ul\> \<button id="btnLoad"\>Load\</button\> Person: \<input type="text" id="person" /\> Phone: \<input type="text" id="phone" /\> \<button id="btnCreate"\>Create\</button\>`;

result();

\\$('\#btnLoad').trigger('click');

function next() \{
expect(isCalled).to.equal(true,"Delete button did not send the correct DELETE command.")
done();
\}

function checkResults() \{
let entries = \\$('\#phonebook').find('li');
    expect(entries).to.have.lengthOf(1,'Incorrect ammount of entries');
    \\$('\#phonebook').find('li').find('button').trigger('click');

    setTimeout(next, 50);

\}

setTimeout(checkResults, 50);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


