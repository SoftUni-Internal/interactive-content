# Event Lopp

[slide]
# Don't Make the Thread Wait

The event loop is the fundamental of how JavaSvipt function. 

Mostly JavaScript is executed in the browser. 

javascript is a single thread language, it works only on one thread.

Besides that JavaScipt can work on several tasks at the same time, using the callback. 

Callback it's one or more function that to be invoked in the future, that way it's possible to execute parallel operations.

The way JavaScript allows us to start an operation, then to start another operation, and in some time into the future to go back and collect the information from the first operation. 

[image assetsSrc="stack-execution.gif" /]


[image assetsSrc="The-Event-Loop.gif" /]


[/slide]