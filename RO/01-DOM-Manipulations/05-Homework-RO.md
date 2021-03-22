# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Sections

[code-task title="Sections" taskId="Js-Advanced-Dom-Manipulations-Sections" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function sections(input) {
  // Scrieți codul dvs. aici
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Sections.zip) **pentru această sarcină.**

Veți primi un **matrice** de șiruri.

Pentru fiecare text, creați un **div** cu un **paragraf** care are un șir în interior.

Fiecare paragraf este inițial ascuns, având atributul de afișare `display:none`.

Adăugați un **click event listener** fiecărui **div** care afișează paragraful ascuns. 

În final, puteți **adăuga** toate divs la elementul cu un **id** **conţinut**.

## Exemplu

[image assetsSrc="Dom-Manipulation(5).gif" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = \`
\<div id="content"\>
\</div\>\`;

let sentences = \['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'\];
result(sentences);

let container = document.getElementById("content");
let sections = container.children;

expect(sections.length).to.equal(5, "Number of sections inside container is incorrect.");

for (let i = 0; i \< sections.length; i++) \{
expect(sections\[i\].textContent).to.contains(sentences\[i\], 'Section text is incorrect.');
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="content"\>
\</div\>\`;

result(\['Section 1', 'Section 2', 'Section 3', 'Section 4'\]);

let container = document.getElementById("content");
let sections = container.children;

expect(sections.length).to.equal(4, "Number of sections inside container is incorrect.");

for (let i = 0; i \< sections.length; i++) \{
let para = sections\[i\].firstChild;
expect(para.tagName.toLowerCase()).to.equal('p', "Text must be placed inside \<p\>.");
expect(para.textContent).to.contains('Section ' + (i + 1), 'Section text is incorrect.');
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="content"\>
\</div\>\`;

// Setup event
let clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('click', true, true);

result(\['Section 1', 'Section 2', 'Section 3'\]);

let container = document.getElementById("content");
let sections = container.children;

expect(sections.length).to.equal(3, "Sections not found inside container.");

for (let i = 0; i \< sections.length; i++) \{
let para = sections\[i\].firstChild;
expect(para.style.display).to.equal('none', "Initial paragraph state must be hidden.");
sections\[i\].dispatchEvent(clickEvent);
expect(para.style.display).to.not.equal('none', "Paragraph must be revealed on click.");
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

# Problemă: Notification

[code-task title="Notification" taskId="Js-Advanced-Dom-Manipulations-Notification" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function notification(){
  // Scrieți codul dvs. aici
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/02-Notification.zip) **pentru această sarcină.**

Creați o **funcţie** care primește un șir  **mesaj** și îl **afişa** în interiorul unui **div** cu o **id notification** de 2 secunde.

Acest **div** este inițial **ascuns**, dar când funcția este apelată, trebuie ca acesta să apară. 

După 2 secunde, **ascunde** acest div.

In exemplul de mai jos, să apară o notificare, atunci când dăm click pe buton.

## Exemplu

[image assetsSrc="Dom-Manipulation(7).gif" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = \`
\<div id="container"\>
\<header class="header"\>
\<h1\>Welcome to our site\</h1\>
\</header\>
\<div id="content"\>
\<article class="post"\>
\<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip
ex ea commodo consequat.\</p\>
\<p\>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est
laborum.\</p\>
\</article\>
\<button\>Get notified\</button\>
\</div\>
\<div id="notification"\>\</div\>
\</div\>
\`;

result('Something happened!');

let toast = document.getElementById("notification");

expect(toast.textContent).to.contains('Something happened!', "Notification did not display correct message.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="container"\>
\<header class="header"\>
\<h1\>Welcome to our site\</h1\>
\</header\>
\<div id="content"\>
\<article class="post"\>
\<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip
ex ea commodo consequat.\</p\>
\<p\>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est
laborum.\</p\>
\</article\>
\<button\>Get notified\</button\>
\</div\>
\<div id="notification"\>\</div\>
\</div\>
\`;

result('Boop!');
let toast = document.getElementById("notification");

expect(toast.style.display).to.equal('block', "Notification was not made visible.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="container"\>
\<header class="header"\>
\<h1\>Welcome to our site\</h1\>
\</header\>
\<div id="content"\>
\<article class="post"\>
\<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip
ex ea commodo consequat.\</p\>
\<p\>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est
laborum.\</p\>
\</article\>
\<button\>Get notified\</button\>
\</div\>
\<div id="notification"\>\</div\>
\</div\>
\`;

// Stub timers
let clock = sinon.useFakeTimers();

result('Get some!');
let toast = document.getElementById("notification");

expect(toast.style.display).to.equal('block', "Notification was not made visible.");

// Pass some time and check values
clock.tick(1050);
expect(toast.style.display).to.equal('block', "Notification was hidden too soon.");

// Pass some time and check values
clock.tick(1050);
expect(toast.style.display).to.equal('none', "Notification was not hidden in time.");

// Restore system clock
clock.restore();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="container"\>
\<header class="header"\>
\<h1\>Welcome to our site\</h1\>
\</header\>
\<div id="content"\>
\<article class="post"\>
\<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip
ex ea commodo consequat.\</p\>
\<p\>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est
laborum.\</p\>
\</article\>
\<button\>Get notified\</button\>
\</div\>
\<div id="notification"\>\</div\>
\</div\>
\`;

// Stub timers
let clock = sinon.useFakeTimers();

result('Test complete!');
let toast = document.getElementById("notification");

expect(toast.style.display).to.equal('block', "Notification was not made visible.");
expect(toast.textContent).to.contains('Test complete!', "Notification did not display correct message.");

// Pass some time and check values
clock.tick(1050);
expect(toast.style.display).to.equal('block', "Notification was hidden too soon.");

// Pass some time and check values
clock.tick(1050);
expect(toast.style.display).to.equal('none', "Notification was not hidden in time.");

// Restore system clock
clock.restore();
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Time Converter

[code-task title="Time Converter" taskId="Js-Advanced-Dom-Manipulations-Time-Converter" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function timeConverter(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/03-Time-Converter.zip) **pentru această sarcină.**

Creați un program care **converti** diferite unități de timp. 

Sarcina voastră este să adăugați un ascultător de evenimente **click** la toate butoanele `CONVERT`.

Când un buton este **clicked**, citește câmpul de intrare **corespunzător** și **afişa** valorile convertite în interiorul celorlalte trei câmpuri de intrare. 

O zi este egală cu 24 ore, 1440 minute, 86400 secunde. 

De fiecare dată când dăm click pe buton, câmpurile de intrare se pot schimba, în funcție de valoarea adăugată. 

De exemplu, dacă printăm în 48 ore și dăm click pe **convertit**, valoarea câmpului zile(days) se va schimba la **2**.


# Exemplu

[image assetsSrc="Dom-Manipulation(9).gif" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = \`
\<main\>
\<h1\>Time Converter\</h1\>
\<div\>
\<label for="days"\>Days: \</label\>
\<input type="text" id="days"\>
\<input id="daysBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="hours"\>Hours: \</label\>
\<input type="text" id="hours"\>
\<input id="hoursBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="minutes"\>Minutes: \</label\>
\<input type="text" id="minutes"\>
\<input id="minutesBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="seconds"\>Seconds: \</label\>
\<input type="text" id="seconds"\>
\<input id="secondsBtn" type="button" value="Convert"\>
\</div\>
\</main\>
\`;

result();
\\$('\#days').val('1');
\\$('\#daysBtn').trigger('click');
expect(\\$('\#hours').val()).to.contains('24', "Days where not converted into hours correctly.");
expect(\\$('\#minutes').val()).to.contains('1440', "Days where not converted into minutes correctly.");
expect(\\$('\#seconds').val()).to.contains('86400', "Days where not converted into seconds correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<main\>
\<h1\>Time Converter\</h1\>
\<div\>
\<label for="days"\>Days: \</label\>
\<input type="text" id="days"\>
\<input id="daysBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="hours"\>Hours: \</label\>
\<input type="text" id="hours"\>
\<input id="hoursBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="minutes"\>Minutes: \</label\>
\<input type="text" id="minutes"\>
\<input id="minutesBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="seconds"\>Seconds: \</label\>
\<input type="text" id="seconds"\>
\<input id="secondsBtn" type="button" value="Convert"\>
\</div\>
\</main\>
\`;

result();
\\$('\#hours').val('36');
\\$('\#hoursBtn').trigger('click');
expect(\\$('\#days').val()).to.contains('1.5', "Hours where not converted into days correctly.");
expect(\\$('\#minutes').val()).to.contains('2160', "Hours where not converted into minutes correctly.");
expect(\\$('\#seconds').val()).to.contains('129600', "Hours where not converted into seconds correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<main\>
\<h1\>Time Converter\</h1\>
\<div\>
\<label for="days"\>Days: \</label\>
\<input type="text" id="days"\>
\<input id="daysBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="hours"\>Hours: \</label\>
\<input type="text" id="hours"\>
\<input id="hoursBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="minutes"\>Minutes: \</label\>
\<input type="text" id="minutes"\>
\<input id="minutesBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="seconds"\>Seconds: \</label\>
\<input type="text" id="seconds"\>
\<input id="secondsBtn" type="button" value="Convert"\>
\</div\>
\</main\>
\`;

result();
\\$('\#minutes').val('2880');
\\$('\#minutesBtn').trigger('click');
expect(\\$('\#days').val()).to.contains('2', "Minutes where not converted into days correctly.");
expect(\\$('\#hours').val()).to.contains('48', "Minutes where not converted into hours correctly.");
expect(\\$('\#seconds').val()).to.contains('172800', "Minutes where not converted into seconds correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<main\>
\<h1\>Time Converter\</h1\>
\<div\>
\<label for="days"\>Days: \</label\>
\<input type="text" id="days"\>
\<input id="daysBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="hours"\>Hours: \</label\>
\<input type="text" id="hours"\>
\<input id="hoursBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="minutes"\>Minutes: \</label\>
\<input type="text" id="minutes"\>
\<input id="minutesBtn" type="button" value="Convert"\>
\</div\>
\<div\>
\<label for="seconds"\>Seconds: \</label\>
\<input type="text" id="seconds"\>
\<input id="secondsBtn" type="button" value="Convert"\>
\</div\>
\</main\>
\`;

result();
\\$('\#seconds').val('388800');
\\$('\#secondsBtn').trigger('click');
expect(\\$('\#days').val()).to.contains('4.5', "Seconds where not converted into days correctly.");
expect(\\$('\#hours').val()).to.contains('108', "Seconds where not converted into hours correctly.");
expect(\\$('\#minutes').val()).to.contains('6480', "Seconds where not converted into minutes correctly.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Locked Profile
[code-task title="Locked Profile" taskId="Js-Advanced-Dom-Manipulations-Locked-Profiles" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function lockedProfile(){
  // Scrieți codul dvs. aici
}

```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/04-Locked-Profile.zip) **pentru această sarcină.**

În această problemă, trebuie să, **creați o funcționalitate JavaScript** care **spectacol** și **ascunde** informațiile adiționale despre utilizatori. 

Când dăm click pe butonul `Show more` atunci **informații ascunse** din interiorul div va apărea, doar **dacă profilul nu este blocat**.

Dacă profilul curent este **blocat**, nu se va întâmpla nimic. 

Dacă informația ascunsă este afișată și dacă închidem profilul din nou, butonul `Hide it` button **nu ar trebui să funcționeze**.

Altfel, când profilul este **deblocat** și dăm click pe butonul `Hide it`, câmpurile trebuie să fie din nou ascunse.

# Exemplu

## Intrare
[image assetsSrc="Dom-Manipulation(11).png" /]

## Ieșire
[image assetsSrc="Dom-Manipulation(12).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// click when locked, click when unlocked
document.body.innerHTML = \`

<div id="container">
		<main id="main">
			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="User 1 Userov" disabled readonly />
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="18" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user2Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user2Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user2Username" value="User 2 Userov" disabled readonly />
				<div id="user2HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user2Age" value="25" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user3Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user3Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user3Username" value="User 3 Userov" disabled readonly />
				<div id="user3HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user3Age" value="23" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
		</main>
	</div>
\`;

result();

$("input[value='unlock'][name='user1Locked']").click();
$("button")[0].click();
$("button")[1].click();

let username = $("input[name='user1Username']")[0].value;
let email = $("input[name='user1Email']")[0].value;
let age = $("input[name='user1Age']")[0].value;

let locked = $("#user2HiddenFields")[0].style.length;

expect(username).to.equal("User 1 Userov");
expect(email).to.equal("user1-userov@users.bg");
expect(age).to.equal("18");
expect(locked).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// click when unlocked, lock, click again
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user1Locked'\]").click();
\\$("button")\[0\].click();
\\$("input\[value='lock'\]\[name='user1Locked'\]").click();
\\$("button")\[0\].click();

let username = \\$("input\[name='user1Username'\]")\[0\].value;
let email = \\$("input\[name='user1Email'\]")\[0\].value;
let age = \\$("input\[name='user1Age'\]")\[0\].value;

let locked = \\$("\#user2HiddenFields")\[0\].style.length;

expect(username).to.equal("User 1 Userov");
expect(email).to.equal("user1-userov@users.bg");
expect(age).to.equal("18");
expect(locked).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user1Locked'\]").click();
\\$("button")\[0\].click();

let value = \\$("button")\[0\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button after locking
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user1Locked'\]").click();
\\$("button")\[0\].click();
\\$("input\[value='lock'\]\[name='user1Locked'\]").click();
\\$("button")\[0\].click();

let value = \\$("button")\[0\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// click when unlocked, lock, click again
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user2Locked'\]").click();
\\$("button")\[0\].click();
\\$("input\[value='lock'\]\[name='user2Locked'\]").click();
\\$("button")\[0\].click();

let username = \\$("input\[name='user2Username'\]")\[0\].value;
let email = \\$("input\[name='user2Email'\]")\[0\].value;
let age = \\$("input\[name='user2Age'\]")\[0\].value;

let locked = \\$("\#user1HiddenFields")\[0\].style.length;

expect(username).to.equal("User 2 Userov");
expect(email).to.equal("user2-userov@users.bg");
expect(age).to.equal("25");
expect(locked).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user2Locked'\]").click();
\\$("button")\[1\].click();

let value = \\$("button")\[1\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button after locking
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user2Locked'\]").click();
\\$("button")\[1\].click();
\\$("input\[value='lock'\]\[name='user2Locked'\]").click();
\\$("button")\[1\].click();

let value = \\$("button")\[1\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// click when unlocked, lock, click again
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user3Locked'\]").click();
\\$("button")\[2\].click();
\\$("input\[value='lock'\]\[name='user3Locked'\]").click();
\\$("button")\[2\].click();

let username = \\$("input\[name='user3Username'\]")\[0\].value;
let email = \\$("input\[name='user3Email'\]")\[0\].value;
let age = \\$("input\[name='user3Age'\]")\[0\].value;

let locked = \\$("\#user1HiddenFields")\[0\].style.length;

expect(username).to.equal("User 3 Userov");
expect(email).to.equal("user3-userov@users.bg");
expect(age).to.equal("23");
expect(locked).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user3Locked'\]").click();
\\$("button")\[2\].click();

let value = \\$("button")\[2\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// value of button after locking
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user1Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user1Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user1Username" value="User 1 Userov" disabled readonly /\>
\<div id="user1HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user1Age" value="18" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user2Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user2Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user2Username" value="User 2 Userov" disabled readonly /\>
\<div id="user2HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user2Age" value="25" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\<div class="profile"\>
\<img src="./iconProfile2.png" class="userIcon" /\>
\<label\>Lock\</label\>
\<input type="radio" name="user3Locked" value="lock" checked\>
\<label\>Unlock\</label\>
\<input type="radio" name="user3Locked" value="unlock"\>\<br\>
\<hr\>
\<label\>Username\</label\>
\<input type="text" name="user3Username" value="User 3 Userov" disabled readonly /\>
\<div id="user3HiddenFields"\>
\<hr\>
\<label\>Email:\</label\>
\<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly /\>
\<label\>Age:\</label\>
\<input type="email" name="user3Age" value="23" disabled readonly /\>
\</div\>
\<button\>Show more\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();

\\$("input\[value='unlock'\]\[name='user3Locked'\]").click();
\\$("button")\[2\].click();
\\$("input\[value='lock'\]\[name='user3Locked'\]").click();
\\$("button")\[2\].click();

let value = \\$("button")\[2\].innerHTML;

expect(value).to.equal("Hide it");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Encode And Decode Messages
[code-task title="Encode And Decode Messages" taskId="Js-Advanced-Dom-Manipulations-Encode-And-Decode-Messages" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function encodeAndDecodeMessages(){
  // Scrieți codul dvs. aici
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/05-Encode-and-Decode-Messages.zip) **pentru această sarcină.**

Create a JavaScript functionality that encodes and decodes some messages which travel to the network.

The program should contain two functionalities.

The first one is to encode the given message and send it to the receiver.

The second one is to decode the received message and display it.

When the `Encode and send it` button is clicked, you should get the given message from the first textarea.

When you get the current message, you should encode it as follows:

- Change the ASCII CODE on every single character in that message by adding 1 to the current ASCII NUMBER that represent the current character in that message

- Clear the sender textarea and append the encoded message to the receiver textarea

After that, when the `Decode and read it` button is clicked, you need to get the encoded message from the receiver textarea and do the opposite logic:

- Subtract 1 from the current ASCII NUMBER that represents the current character in that message

- Replace the encoded message with your decoded message in the receiver textarea to make it readable

# Exemplu

## Intrare
[image assetsSrc="Dom-Manipulation(13).png" /]
[image assetsSrc="Dom-Manipulation(14).png" /]

## Ieșire
[image assetsSrc="Dom-Manipulation(15).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// decoding single message and clearing the textarea
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div\>
\<p\>Message\</p\>
\<textarea placeholder="Write your message here..."\>\</textarea\>
\<button\>Encode and send it\</button\>
\</div\>
\<div\>
\<p\>Last received message\</p\>
\<textarea disabled placeholder="No messages..."\>\</textarea\>
\<button\>Decode and read it\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();
\\$("textarea")\[0\].value = "pesho";
\\$("button").first().trigger("click");

let textAreaValue = \\$("textarea")\[0\].value;
let resultValue = \\$("textarea")\[1\].value;

expect(textAreaValue).to.equal("");
expect(resultValue).to.equal("qftip");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// decoding single message then encoding
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div\>
\<p\>Message\</p\>
\<textarea placeholder="Write your message here..."\>\</textarea\>
\<button\>Encode and send it\</button\>
\</div\>
\<div\>
\<p\>Last received message\</p\>
\<textarea disabled placeholder="No messages..."\>\</textarea\>
\<button\>Decode and read it\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();
\\$("textarea")\[0\].value = "pesho";
\\$("button").first().trigger("click");
\\$("button").last().trigger("click");

let resultValue = \\$("textarea")\[1\].value;

expect(resultValue).to.equal("pesho");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// decoding 2 messages
document.body.innerHTML = \`
\<div id="container"\>
\<main id="main"\>
\<div\>
\<p\>Message\</p\>
\<textarea placeholder="Write your message here..."\>\</textarea\>
\<button\>Encode and send it\</button\>
\</div\>
\<div\>
\<p\>Last received message\</p\>
\<textarea disabled placeholder="No messages..."\>\</textarea\>
\<button\>Decode and read it\</button\>
\</div\>
\</main\>
\</div\>
\`;

result();
\\$("textarea")\[0\].value = "hello";
\\$("button").first().trigger("click");
\\$("textarea")\[0\].value = "hello again";
\\$("button").first().trigger("click");

let resultValue = \\$("textarea")\[1\].value;

expect(resultValue).to.equal("ifmmp!bhbjo");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clearing textarea
document.body.innerHTML = \`\<div id="container"\>
\<nav id="navigation"\>
\<div id="navigation-text"\>
\<p id="lecture-name"\>Intro to DOM\</p\>
\<p id="problem-name"\>Encode and Decode Messages\</p\>
\</div\>
\<img id="logo-img" src="SoftUniFoundation_Logo_OneLine_White@2x.png" alt="logo"\>
\</nav\>
\<main id="main"\>
\<div id="exercise"\>
\<div\>
\<p\>Message\</p\>
\<textarea placeholder="Write your message here..."\>\</textarea\>\<br\>
\<button\>Encode and send it\</button\>
\</div\>
\<div\>
\<p\>Last received message\</p\>
\<textarea disabled placeholder="No messages..."\>\</textarea\>\<br\>
\<button\>Decode and read it\</button\>
\</div\>
\</div\>
\<img id="softUni-person-img" src="cw_2_New_Logo.png" alt="softUni-person"\>
\</main\>
\<footer id="footer"\>
\<p id="footer-text"\>Check your solution here: \<span id="check-judge"\>https://judge.softuni.bg/Contests/356\</span\>
\</p\>
\</footer\>
\</div\>\`;

result();
\\$("textarea")\[0\].value = "hello";
\\$("button").first().trigger("click");
\\$("textarea")\[0\].value = "hello again";
\\$("button").first().trigger("click");

let resultValue = \\$("textarea")\[0\].value;

expect(resultValue).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clearing textarea and decoding 2 messages
document.body.innerHTML = \`\<div id="container"\>
\<nav id="navigation"\>
\<div id="navigation-text"\>
\<p id="lecture-name"\>Intro to DOM\</p\>
\<p id="problem-name"\>Encode and Decode Messages\</p\>
\</div\>
\<img id="logo-img" src="SoftUniFoundation_Logo_OneLine_White@2x.png" alt="logo"\>
\</nav\>
\<main id="main"\>
\<div id="exercise"\>
\<div\>
\<p\>Message\</p\>
\<textarea placeholder="Write your message here..."\>\</textarea\>\<br\>
\<button\>Encode and send it\</button\>
\</div\>
\<div\>
\<p\>Last received message\</p\>
\<textarea disabled placeholder="No messages..."\>\</textarea\>\<br\>
\<button\>Decode and read it\</button\>
\</div\>
\</div\>
\<img id="softUni-person-img" src="cw_2_New_Logo.png" alt="softUni-person"\>
\</main\>
\<footer id="footer"\>
\<p id="footer-text"\>Check your solution here: \<span id="check-judge"\>https://judge.softuni.bg/Contests/356\</span\>
\</p\>
\</footer\>
\</div\>\`;

result();
\\$("textarea")\[0\].value = "hello";
\\$("button").first().trigger("click");
\\$("textarea")\[0\].value = "hello again";
\\$("button").first().trigger("click");

let resultValue = \\$("textarea")\[1\].value;
let textAreaValue = \\$("textarea")\[0\].value;

expect(textAreaValue).to.equal("");
expect(resultValue).to.equal("ifmmp!bhbjo");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Table Search Engine

[code-task title="Table Search Engine" taskId="Js-Advanced-Dom-Manipulations-Table-Search-Engine" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function tableSearchEngine(){
  // Scrieți codul dvs. aici
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/06-Table-Search-Engine.zip) **pentru această sarcină.**

Create a function that searches in a table by a given input.

When the `Search` button is clicked, go through all cells in the table, except for the first row, which is the header of the table: Student name, Student email, and Student course.

Check if the given input has a match. Check for both full words and single letters.

If any of the rows contain the submitted string, add a **select class** to that row.

**Țineți cont de faptul că mai multe rânduri pot conține șirul dat.**

If there is no match, **nu ar trebui să se întâmple nimic**.

Note: After every search, **ștergeți intrarea** field and remove all already selected classes, if any exist from the previous search, in order to make sure the new search will contain only the new result.

# Exemplu

## Intrare
[image assetsSrc="Dom-Manipulation(16).png" /]

## Ieșire
[image assetsSrc="Dom-Manipulation(17).png" /]
[/task-description]
[code-io /]
[tests]
[test open]
[input]
// Search for John Dan - First table row must be selected
document.body.innerHTML = \`

 <table class="container">
        <thead>
            <tr>
                <th>Student name</th>
                <th>Student email</th>
                <th>Student course</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">
                    <input type="text" id="searchField" />
                    <button type="button" id="searchBtn">Search</button>
                </td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>John Dan</td>
                <td>john@john-dan.com</td>
                <td>JS-CORE</td>
            </tr>
            <tr>
                <td>Max Peterson</td>
                <td>max@softuni.bg</td>
                <td>JS-WEB</td>
            </tr>
            <tr>
                <td>Philip Anderson</td>
                <td>philip@softuni.bg</td>
                <td>FRONT-END</td>
            </tr>
            <tr>
                <td>Sam Lima</td>
                <td>sam@gmail.com</td>
                <td>TECH-JS</td>
            </tr>
            <tr>
                <td>Eva Longoria</td>
                <td>eva@gmail.com</td>
                <td>All possible courses</td>
            </tr>
        </tbody>
    </table>
    <div id="result"></div>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) => {
assert.equal(row.className, '', 'Some of the rows has different className');
})

input.value = "John Dan";
button.click();

assert.equal(rows[0].className, 'select', 'First row has different class name');
assert.equal(rows[1].className, '', 'Second row has different class name');
assert.equal(rows[2].className, '', 'Third row has different class name');
assert.equal(rows[3].className, '', 'Fourth row has different class name');
assert.equal(rows[4].className, '', 'Fifth row has different class name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for Sam Lima - Fourth table row must be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = "Sam Lima";
button.click();

assert.equal(rows\[0\].className, '', 'First row has different class name');
assert.equal(rows\[1\].className, '', 'Second row has different class name');
assert.equal(rows\[2\].className, '', 'Third row has different class name');
assert.equal(rows\[3\].className, 'select', 'Fourth row has different class name');
assert.equal(rows\[4\].className, '', 'Fifth row has different class name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for .bg - Second and Third table row should be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = ".bg";
button.click();

assert.equal(rows\[0\].className, '', 'First row has different class name');
assert.equal(rows\[1\].className, 'select', 'Second row has different class name');
assert.equal(rows\[2\].className, 'select', 'Third row has different class name');
assert.equal(rows\[3\].className, '', 'Fourth row has different class name');
assert.equal(rows\[4\].className, '', 'Fifth row has different class name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for com - First, Fourth, Fifth row should be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = "com";
button.click();

assert.equal(rows\[0\].className, 'select', 'First row has different class name');
assert.equal(rows\[1\].className, '', 'Second row has different class name');
assert.equal(rows\[2\].className, '', 'Third row has different class name');
assert.equal(rows\[3\].className, 'select', 'Fourth row has different class name');
assert.equal(rows\[4\].className, 'select', 'Fifth row has different class name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for "-" - Every row except the last one should be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = "-";
button.click();

assert.equal(rows\[0\].className, 'select', 'First row has different class name');
assert.equal(rows\[1\].className, 'select', 'Second row has different class name');
assert.equal(rows\[2\].className, 'select', 'Third row has different class name');
assert.equal(rows\[3\].className, 'select', 'Fourth row has different class name');
assert.equal(rows\[4\].className, '', 'Fifth row has different class name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for @ - Every row should be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = "@";
button.click();

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, 'select', 'Some of the rows has different changed className');
\})
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Search for no-existing string - No one from the rows should be selected
document.body.innerHTML = \`
\<table class="container"\>
\<thead\>
\<tr\>
\<th\>Student name\</th\>
\<th\>Student email\</th\>
\<th\>Student course\</th\>
\</tr\>
\</thead\>
\<tfoot\>
\<tr\>
\<td colspan="3"\>
\<input type="text" id="searchField" /\>
\<button type="button" id="searchBtn"\>Search\</button\>
\</td\>
\</tr\>
\</tfoot\>
\<tbody\>
\<tr\>
\<td\>John Dan\</td\>
\<td\>john@john-dan.com\</td\>
\<td\>JS-CORE\</td\>
\</tr\>
\<tr\>
\<td\>Max Peterson\</td\>
\<td\>max@softuni.bg\</td\>
\<td\>JS-WEB\</td\>
\</tr\>
\<tr\>
\<td\>Philip Anderson\</td\>
\<td\>philip@softuni.bg\</td\>
\<td\>FRONT-END\</td\>
\</tr\>
\<tr\>
\<td\>Sam Lima\</td\>
\<td\>sam@gmail.com\</td\>
\<td\>TECH-JS\</td\>
\</tr\>
\<tr\>
\<td\>Eva Longoria\</td\>
\<td\>eva@gmail.com\</td\>
\<td\>All possible courses\</td\>
\</tr\>
\</tbody\>
\</table\>
\<div id="result"\>\</div\>
\`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different className');
\})

input.value = "Pesho";
button.click();

Array.from(rows).forEach((row) =\> \{
assert.equal(row.className, '', 'Some of the rows has different changed className');
\})
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Furniture
[code-task title="Furniture" taskId="Js-Advanced-Dom-Manipulations-Furniture" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function furniture(){
  // Scrieți codul dvs. aici
}
```

[/code-editor]
[task-description]

# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/07-Furniture.zip) **pentru această sarcină.**

You will be given furniture as an array of objects.

Each object will have a name, a price, and a decoration factor.

When the `Generate` button is **clicked**, add a new row to the table for each piece of furniture with its **image**, **name**, **price**, and **decoration factor**.

When the `Buy` button is clicked, get all checkboxes that are marked, and show in the result textbox the names of the furniture that were **checked**, separated by a comma and a single space, in the following format: 

"**Bought furniture:** \{**furniture1**\} \{**furniture2**\}**...**"

On the next line, print the total price in format: "**Total price:** \{**totalPrice**\}", formatted two digits after the decimal point.

Finally, print the average decoration factor in the format: "**Average decoration factor:** \{**decFactor**\}".

# Exemplu

## Intrare
`[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]`

## Ieșire
[image assetsSrc="Dom-Manipulation(18).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// Adding 1 furniture
document.body.innerHTML = \`
\<div id="container"\>
\<div id="exercise"\>
\<h1\>Furniture List\</h1\>
\<textarea rows="5" cols="50"\>\</textarea\>
\<button\>Generate\</button\>
\<div class="wrapper"\>
\<div class="card-wrapper"\>
\<div class="row"\>
\<div class="col-md-12"\>
\<table class="table"\>
\<thead\>
\<tr\>
\<th scope="col"\>Image\</th\>
\<th scope="col"\>Name\</th\>
\<th scope="col"\>Price\</th\>
\<th scope="col"\>Decoration factor\</th\>
\<th scope="col"\>Mark\</th\>
\</tr\>
\</thead\>
\<tbody\>
\<tr\>
\<td\>
\<img
src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg"\>
\</td\>
\<td\>
\<p\>Office chair\</p\>
\<td\>
\<p\>160\</p\>
\</td\>
\<td\>
\<p\>0.5\</p\>
\</td\>
\<td\>
\<input type="checkbox" disabled /\>
\</td\>
\</tr\>
\</tbody\>
\</table\>
\</div\>
\</div\>
\</div\>
\</div\>
\<textarea rows="4" cols="50" disabled\>\</textarea\>
\<button\>Buy\</button\>
\</div\>
\</div\>
\`;

result();

let textareas = document.getElementsByTagName('textarea');

textareas\[0\].value = '\[\{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2\}\]';

document.getElementsByTagName('button')\[0\].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 2, 'The table rows is incorrect');

let tds = rows\[1\].children;

assert.equal(tds\[0\].innerHTML, '\<img src="https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg"\>', 'First td includes something different');

assert.equal(tds\[1\].textContent, 'Sofa', 'Second td includes something different');

assert.equal(tds\[2\].textContent, '150', 'Third td includes something different');

assert.equal(tds\[3\].textContent, '1.2', 'Fourth td includes something different');

assert.equal(tds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Adding 1 furniture
document.body.innerHTML = \`
\<div id="container"\>
\<div id="exercise"\>
\<h1\>Furniture List\</h1\>
\<textarea rows="5" cols="50"\>\</textarea\>
\<button\>Generate\</button\>
\<div class="wrapper"\>
\<div class="card-wrapper"\>
\<div class="row"\>
\<div class="col-md-12"\>
\<table class="table"\>
\<thead\>
\<tr\>
\<th scope="col"\>Image\</th\>
\<th scope="col"\>Name\</th\>
\<th scope="col"\>Price\</th\>
\<th scope="col"\>Decoration factor\</th\>
\<th scope="col"\>Mark\</th\>
\</tr\>
\</thead\>
\<tbody\>
\<tr\>
\<td\>
\<img
src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg"\>
\</td\>
\<td\>
\<p\>Office chair\</p\>
\<td\>
\<p\>160\</p\>
\</td\>
\<td\>
\<p\>0.5\</p\>
\</td\>
\<td\>
\<input type="checkbox" disabled /\>
\</td\>
\</tr\>
\</tbody\>
\</table\>
\</div\>
\</div\>
\</div\>
\</div\>
\<textarea rows="4" cols="50" disabled\>\</textarea\>
\<button\>Buy\</button\>
\</div\>
\</div\>
\`;

result();

let textareas = document.getElementsByTagName('textarea');

textareas\[0\].value = '\[\{"name": "Laptop", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2\}\]';

document.getElementsByTagName('button')\[0\].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 2, 'The table rows is incorrect');

let tds = rows\[1\].children;

assert.equal(tds\[0\].innerHTML, '\<img src="https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg"\>', 'First td includes something different');

assert.equal(tds\[1\].textContent, 'Laptop', 'Second td includes something different');

assert.equal(tds\[2\].textContent, '2000', 'Third td includes something different');

assert.equal(tds\[3\].textContent, '5.2', 'Fourth td includes something different');

assert.equal(tds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Adding 2 furniture, buy just 1
document.body.innerHTML = \`
\<div id="container"\>
\<div id="exercise"\>
\<h1\>Furniture List\</h1\>
\<textarea rows="5" cols="50"\>\</textarea\>
\<button\>Generate\</button\>
\<div class="wrapper"\>
\<div class="card-wrapper"\>
\<div class="row"\>
\<div class="col-md-12"\>
\<table class="table"\>
\<thead\>
\<tr\>
\<th scope="col"\>Image\</th\>
\<th scope="col"\>Name\</th\>
\<th scope="col"\>Price\</th\>
\<th scope="col"\>Decoration factor\</th\>
\<th scope="col"\>Mark\</th\>
\</tr\>
\</thead\>
\<tbody\>
\<tr\>
\<td\>
\<img
src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg"\>
\</td\>
\<td\>
\<p\>Office chair\</p\>
\<td\>
\<p\>160\</p\>
\</td\>
\<td\>
\<p\>0.5\</p\>
\</td\>
\<td\>
\<input type="checkbox" disabled /\>
\</td\>
\</tr\>
\</tbody\>
\</table\>
\</div\>
\</div\>
\</div\>
\</div\>
\<textarea rows="4" cols="50" disabled\>\</textarea\>
\<button\>Buy\</button\>
\</div\>
\</div\>
\`;

result();

let textareas = document.getElementsByTagName('textarea');

textareas\[0\].value = '\[\{"name": "Laptop", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2\}, \{"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10\}\]';

document.getElementsByTagName('button')\[0\].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 3, 'The table rows is incorrect');

let firstTds = rows\[1\].children;

assert.equal(firstTds\[0\].innerHTML, '\<img src="https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg"\>', 'First td includes something different');

assert.equal(firstTds\[1\].textContent, 'Laptop', 'Second td includes something different');
assert.equal(firstTds\[2\].textContent, '2000', 'Third td includes something different');
assert.equal(firstTds\[3\].textContent, '5.2', 'Fourth td includes something different');
assert.equal(firstTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

let secondTds = rows\[2\].children;

assert.equal(secondTds\[0\].innerHTML, '\<img src="https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg"\>', 'First td includes something different');

assert.equal(secondTds\[1\].textContent, 'Vase', 'Second td includes something different');
assert.equal(secondTds\[2\].textContent, '15', 'Third td includes something different');
assert.equal(secondTds\[3\].textContent, '10', 'Fourth td includes something different');
assert.equal(secondTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

secondTds\[4\].children\[0\].checked = true;

document.getElementsByTagName('button')\[1\].click();

assert.equal(textareas\[1\].value, 'Bought furniture: Vase\nTotal price: 15.00\nAverage decoration factor: 10', 'Output textarea is different');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Adding 2 furniture, buy the both
document.body.innerHTML = \`
\<div id="container"\>
\<div id="exercise"\>
\<h1\>Furniture List\</h1\>
\<textarea rows="5" cols="50"\>\</textarea\>
\<button\>Generate\</button\>
\<div class="wrapper"\>
\<div class="card-wrapper"\>
\<div class="row"\>
\<div class="col-md-12"\>
\<table class="table"\>
\<thead\>
\<tr\>
\<th scope="col"\>Image\</th\>
\<th scope="col"\>Name\</th\>
\<th scope="col"\>Price\</th\>
\<th scope="col"\>Decoration factor\</th\>
\<th scope="col"\>Mark\</th\>
\</tr\>
\</thead\>
\<tbody\>
\<tr\>
\<td\>
\<img
src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg"\>
\</td\>
\<td\>
\<p\>Office chair\</p\>
\<td\>
\<p\>160\</p\>
\</td\>
\<td\>
\<p\>0.5\</p\>
\</td\>
\<td\>
\<input type="checkbox" disabled /\>
\</td\>
\</tr\>
\</tbody\>
\</table\>
\</div\>
\</div\>
\</div\>
\</div\>
\<textarea rows="4" cols="50" disabled\>\</textarea\>
\<button\>Buy\</button\>
\</div\>
\</div\>
\`;

result();

let textareas = document.getElementsByTagName('textarea');

textareas\[0\].value = '\[\{"name": "Laptop", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2\}, \{"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10\}\]';

document.getElementsByTagName('button')\[0\].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 3, 'The table rows is incorrect');

let firstTds = rows\[1\].children;

assert.equal(firstTds\[0\].innerHTML, '\<img src="https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg"\>', 'First td includes something different');

assert.equal(firstTds\[1\].textContent, 'Laptop', 'Second td includes something different');
assert.equal(firstTds\[2\].textContent, '2000', 'Third td includes something different');
assert.equal(firstTds\[3\].textContent, '5.2', 'Fourth td includes something different');
assert.equal(firstTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

let secondTds = rows\[2\].children;

assert.equal(secondTds\[0\].innerHTML, '\<img src="https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg"\>', 'First td includes something different');

assert.equal(secondTds\[1\].textContent, 'Vase', 'Second td includes something different');
assert.equal(secondTds\[2\].textContent, '15', 'Third td includes something different');
assert.equal(secondTds\[3\].textContent, '10', 'Fourth td includes something different');
assert.equal(secondTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

firstTds\[4\].children\[0\].checked = true;
secondTds\[4\].children\[0\].checked = true;

document.getElementsByTagName('button')\[1\].click();

assert.equal(textareas\[1\].value, 'Bought furniture: Laptop, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6', 'Output textarea is different');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Adding 3 furniture, buy all of them
document.body.innerHTML = \`
\<div id="container"\>
\<div id="exercise"\>
\<h1\>Furniture List\</h1\>
\<textarea rows="5" cols="50"\>\</textarea\>
\<button\>Generate\</button\>
\<div class="wrapper"\>
\<div class="card-wrapper"\>
\<div class="row"\>
\<div class="col-md-12"\>
\<table class="table"\>
\<thead\>
\<tr\>
\<th scope="col"\>Image\</th\>
\<th scope="col"\>Name\</th\>
\<th scope="col"\>Price\</th\>
\<th scope="col"\>Decoration factor\</th\>
\<th scope="col"\>Mark\</th\>
\</tr\>
\</thead\>
\<tbody\>
\<tr\>
\<td\>
\<img
src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg"\>
\</td\>
\<td\>
\<p\>Office chair\</p\>
\<td\>
\<p\>160\</p\>
\</td\>
\<td\>
\<p\>0.5\</p\>
\</td\>
\<td\>
\<input type="checkbox" disabled /\>
\</td\>
\</tr\>
\</tbody\>
\</table\>
\</div\>
\</div\>
\</div\>
\</div\>

            \<textarea rows="4" cols="50" disabled\>\</textarea\>
            \<button\>Buy\</button\>
        \</div\>
    \</div\>

\`;

result();

let textareas = document.getElementsByTagName('textarea');

textareas\[0\].value = '\[\{"name": "Laptop", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2\}, \{"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10\}, \{"name": "TV", "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_TV_PF.jpg", "price": 3000, "decFactor": 15.6\}\]';

document.getElementsByTagName('button')\[0\].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 4, 'The table rows is incorrect');

let firstTds = rows\[1\].children;

assert.equal(firstTds\[0\].innerHTML, '\<img src="https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg"\>', 'First td includes something different');

assert.equal(firstTds\[1\].textContent, 'Laptop', 'Second td includes something different');
assert.equal(firstTds\[2\].textContent, '2000', 'Third td includes something different');
assert.equal(firstTds\[3\].textContent, '5.2', 'Fourth td includes something different');
assert.equal(firstTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

let secondTds = rows\[2\].children;

assert.equal(secondTds\[0\].innerHTML, '\<img src="https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg"\>', 'First td includes something different');

assert.equal(secondTds\[1\].textContent, 'Vase', 'Second td includes something different');
assert.equal(secondTds\[2\].textContent, '15', 'Third td includes something different');
assert.equal(secondTds\[3\].textContent, '10', 'Fourth td includes something different');
assert.equal(secondTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

let thirdTds = rows\[3\].children;

assert.equal(thirdTds\[0\].innerHTML, '\<img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_TV_PF.jpg"\>', 'First td includes something different');

assert.equal(thirdTds\[1\].textContent, 'TV', 'Second td includes something different');
assert.equal(thirdTds\[2\].textContent, '3000', 'Third td includes something different');
assert.equal(thirdTds\[3\].textContent, '15.6', 'Fourth td includes something different');
assert.equal(thirdTds\[4\].innerHTML, '\<input type="checkbox"\>', 'Fifth td includes something different');

firstTds\[4\].children\[0\].checked = true;
secondTds\[4\].children\[0\].checked = true;
thirdTds\[4\].children\[0\].checked = true;

document.getElementsByTagName('button')\[1\].click();

assert.equal(textareas\[1\].value, 'Bought furniture: Laptop, Vase, TV\nTotal price: 5015.00\nAverage decoration factor: 10.266666666666666', 'Output textarea is different');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Cards

[code-task title="Cards" taskId="Js-Advanced-Dom-Manipulations-Cards" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function cards(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/08-Cards.zip) **for this task.**

Create a function that checks cards, shows which one is greater, and keeps history of all hands.

First, **add click events to all cards**.

When one of the cards is clicked, the current background card must be changed with the `whiteCard.jpg` picture given in the skeleton.

The card name should be appended to one of the **span** elements in the div with `id="result"`.

If a card from **the top side** is **clicked**, append the card name to the **left span**, first empty the span, otherwise append the card name to the right span, which will be second or last span.

When cards from **both sides are selected**, check which one is **greater**.

The card that is greater should have a border `2px solid green`, and the other card should have a border `2px solid red`.

You should clear the span elements that hold the current cards' names, when both are selected, and the winner is selected.

After every hand, push the current cards' names in the **history div** in the following format:
`[{top side card name} vs {bottom side card name}]`

# Exemplu

## Intrare
[image assetsSrc="Dom-Manipulation(19).png" /]

## Ieșire
[image assetsSrc="Dom-Manipulation(20).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// clicking 2 cards, adding history, coloring
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>

\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='7'\]").trigger("click");
\\$("img\[name='2'\]").trigger("click");

let history = \\$("\#history")\[0\].innerHTML;
let firstCardStyle = \\$("img\[name='7'\]")\[0\].style.border;

expect(history).to.equal("\[2 vs 7\] ");
expect(firstCardStyle).to.equal("2px solid green");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Clicking 4 cards - History Check
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>

\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='3'\]").trigger("click");
\\$("img\[name='8'\]").trigger("click");

\\$("img\[name='11'\]").trigger("click");
\\$("img\[name='10'\]").trigger("click");

let history = \\$("\#history")\[0\].innerHTML;

expect(history).to.equal("\[8 vs 3\] \[10 vs 11\] ");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clicking 1 cards, empty history
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>
\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='15'\]").trigger("click");

let result1 = \\$("\#result span")\[0\].innerHTML;
let result2 = \\$("\#result span")\[2\].innerHTML;
let history =\\$("\#history")\[0\].innerHTML;

expect(result1).to.equal("15");
expect(result2).to.equal("");
expect(history).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clicking 1 cards, empty history
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>
\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='14'\]").trigger("click");

let result1 = \\$("\#result span")\[0\].innerHTML;
let result2 = \\$("\#result span")\[2\].innerHTML;
let history =\\$("\#history")\[0\].innerHTML;

expect(result1).to.equal("");
expect(result2).to.equal("14");
expect(history).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clicking 2 cards - Checking the loosing one
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>

\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='5'\]").click();
\\$("img\[name='4'\]").click();

let history = \\$("\#history")\[0\].innerHTML;
let firstCardStyle = document.querySelector('img\[name="4"\]').style.border;

expect(history).to.equal("\[4 vs 5\] ");
expect(firstCardStyle).to.equal("2px solid red");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clicking 1 card, checking the background
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>

\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

\\$("img\[name='9'\]").trigger("click");

let firstCardStyle = \\$("img\[name='9'\]")\[0\].src.slice(-13);

expect(firstCardStyle).to.equal("whiteCard.jpg");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// clicking 2 cards, adding history, coloring
document.body.innerHTML = \`
\<section class="description"\>
\<h2\>Create a functonality which checks all cards, shows which
one is greater and keeps history of all hands.
\</h2\>
\</section\>

\<section class="cards"\>
\<div id="player1Div"\>
\<img src="images/card.jpg" name="2"/\>
\<img src="images/card.jpg" name="15"/\>
\<img src="images/card.jpg" name="4"/\>
\<img src="images/card.jpg" name="12"/\>
\<img src="images/card.jpg" name="6"/\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="8"/\>
\<img src="images/card.jpg" name="9"/\>
\</div\>
\<div id="result"\>
\<span\>\</span\>
\<span\>vs\</span\>
\<span\>\</span\>
\</div\>
\<div id="player2Div"\>
\<img src="images/card.jpg" name="10"/\>
\<img src="images/card.jpg" name="14"/\>
\<img src="images/card.jpg" name="9"/\>
\<img src="images/card.jpg" name="7"/\>
\<img src="images/card.jpg" name="11"/\>
\<img src="images/card.jpg" name="5"/\>
\<img src="images/card.jpg" name="13"/\>
\<img src="images/card.jpg" name="3"/\>
\</div\>
\<div id="history"\>\</div\>
\</section\>
\`;

result();

let firstCard = \\$('img\[name="7"\]')\[0\];
let secondCard = \\$('img\[name="12"\]')\[0\];

firstCard.click();
secondCard.click();

let history = document.getElementById('history').innerHTML;

expect(history).to.equal("\[12 vs 7\] ");

let firstCardStyle = firstCard.style.border;
let secondCardStyle = secondCard.style.border;

expect(secondCardStyle).to.equal("2px solid green");
expect(firstCardStyle).to.equal("2px solid red");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
