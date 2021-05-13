# Appendix B: Running the Test Suite 

[slide hideTitle]
# Project Setup 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/10-JS-Applications-Exam-Prep/EN/JS-APPS-Meme-Lounge-Testing-27-28-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The tests require a web server to deliver the content of the application. 

There is a development web server included in the project scaffold, but you may use a server that you are familiar with.

Note that specialized tools like **BrowserSync** may interfere with the tests. 

To initialize the project with its dependencies, open a terminal in the folder, containing the file **package.json** and execute the following:

`npm install`

Note that if you changed the **devDependencies** section of the project, the tests may not initialize properly.

[image assetsSrc="js-application-exap-prep-15.png" /]

## Executing the Tests 

Before running the test suite, make sure a web server is operational and the application can be found at the root of its network address. To start the included dev-server, open a terminal in the folder containing **package.json** and execute:

`npm run start`

This is a one-time operation unless you terminate the server at any point. 

It can be restarted with the same command as above.

To execute the tests, do not close the terminal running the web server instance, open a new terminal in the folder containing package.json and execute:

`npm run test`

[image assetsSrc="js-application-exap-prep-16.png" /]

The test results will be displayed in the terminal, along with detailed information about encountered problems. 

You can perform this operation as many times as necessary by re-running this command.

## Debugging Your Solution 

If a test fails, you can view the information about the requirements that were not met by your application. 

Open the file **e2e.test.js** in the folder **tests** and navigate to the desired section as described below.

**This first step will not be necessary if you are using the included web server.** 

Make sure the application host is set correctly:

[image assetsSrc="js-application-exap-prep-17.png" /]

The value for **host** must be the address where your application is being served. 

Make sure that entering this address in a regular internet browser displays your application.

To make a single test run, instead of the whole suite (useful when debugging a single failing test), find the test and append `.only` after the **it** reference:

[image assetsSrc="js-application-exap-prep-18.png" /]

On slower machines, some of the tests may require more time to complete. 

You can instruct the tests to run slower by slightly increasing the values for **interval** and **timeout**:

[image assetsSrc="js-application-exap-prep-19.png" /]

The **interval** values that are greater than 500 and **timeout** values that are greater than 10000 are not recommended.

If this does not make the test pass, set the value of **DEBUG** to **true** and run the tests again - this will launch a browser instance and allow you to see what is being tested, what the test does and where it fails (or timeouts):

[image assetsSrc="js-application-exap-prep-20.png" /]

If the actions are happening too fast, you can increase the value of **slowMo**. 

If the browser is stuck, you can close it and abort any remaining tests by focusing the terminal window and pressing `[Ctrl+C]` followed by the letter "y" and `[Enter]`.

An important piece to look for is the exact row where the test fails:

[image assetsSrc="js-application-exap-prep-21.png" /]

[/slide]

