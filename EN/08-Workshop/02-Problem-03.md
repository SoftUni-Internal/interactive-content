# Appendix B: Running the Test Suite 
[slide hideTitle]

# Project Setup 
The tests require a web server to deliver the content of the application. 

There is a development web server included in the project scaffold but you may use a server that you are familiar with. 

Note that specialized tools like **BrowserSync** may interfere with the tests. 

To initialize the project with its dependencies, open a terminal in the folder, containing the file **package.json** and execute the following: 

npm install 

If you changed the section **devDependencies** of the project, the tests may not initialize properly. 

[image assetsSrc="js-application-cartube-workshop-1.gif" /]


[/slide]

[slide hideTitle]
# Executing the Tests 
Before running the test suite, make sure a web server is operational and the application can be found at the root of its network address. 

To start the included dev-server, open a terminal in the folder containing **package.json** and execute: 

`npm run start `

This is a one-time operation unless you terminate the server at any point. 

It can be restarted with the same command as above. 

To execute the tests, do not close the terminal, running the web server instance, open a new terminal  in the folder containing **package.json** and execute: 

`npm run test`

[image assetsSrc="js-application-cartube-workshop-2.gif" /]

The test results will be displayed in the terminal, along with detailed information about encountered problems.

You can perform this operation as many times necessary by re-running the above command. 
[/slide]

[slide hideTitle]
# Debugging Your Solution 

If a test fails, you can view the detailed information about the requirements that were not met by your application.

Open the file **e2e.test.js** in the folder **tests** and navigate to the desired section as described below. 

**This first step will not be necessary if you are using the included web server.** 

Make sure the application host is set correctly: 

[image assetsSrc="js-application-cartube-workshop-3.gif" /]

The value for **host** must be the address where your application is being served. 

Make sure that entering this address in a regular internet browser shows your application. 

To make a single test run, instead of the full suite (useful when debugging a single failing test), find the test and append **.only** after the **it** reference: 

[image assetsSrc="js-application-cartube-workshop-4.gif" /]

On slower machines, some of the tests may require more time to complete. 

You can instruct the tests to run more slowly by slightly increasing the values for interval and timeout: 

[image assetsSrc="js-application-cartube-workshop-5.gif" /]

The **interval** values that are greater than 500 and **timeout** values that are greater than 10000 are not recommended. 

If this does not make the test pass, set the value of **DEBUG** to **true** and run the tests again - this will launch a browser instance and allow you to see what is being tested, what the test sees and where it fails (or timeouts): 

[image assetsSrc="js-application-cartube-workshop-6.gif" /]

If the actions are happening too fast, you can increase the value of **slowMo**. 

If the browser hangs, you can close it and abort any remaining tests by focusing the terminal window and pressing `[Ctrl+C]` followed by the letter "**y**" and `[Enter]`. 

The final thing to look for is the exact row where the test fails: 

[image assetsSrc="js-application-cartube-workshop-7.gif" /]


[/slide]










