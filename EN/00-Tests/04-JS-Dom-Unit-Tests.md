[slide]
# Problem: Time Converter
[code-task title="Time Converter" taskId="Js-Advanced-Dom-Manipulations-Time-Converter" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput]
[code-editor language=javascript]
\`\`\`
function attachEventsListeners() {
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(e) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        const parent = e.target.parentElement;

        if (parent.textContent.includes('Days')) {
            days = Number(parent.querySelector('#days').value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Hours')) {
            hours = Number(parent.querySelector('#hours').value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Minutes')) {
            minutes = Number(parent.querySelector('#minutes').value);
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Seconds')) {
            seconds = Number(parent.querySelector('#seconds').value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }
}
\`\`\`
[/code-editor]
[task-description]
# Description
Create a program that **converts** different time units. 

Your task is to add a **click** event listener to all \`CONVERT\` buttons. 

When a button is **clicked**, read the **corresponding** input field and **display** the rest of the values inside the other three inputs.

One day is equal to 24 hours, 1440 minutes, 86400 seconds. 

Whichever button we click, the input fields should change depending on the added value on the left. 

For example, if we type in 48 hours and click convert the days, the field value should change to 2.

# Example
**Input**
[image assetsSrc="Dom-Manipulation(9).png" /]

**Output**
[image assetsSrc="Dom-Manipulation(10).png" /]

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