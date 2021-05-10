# Publish Subscribe Pattern

[slide hideTitle]

# What is Pub/Sub?

It is an architectural design pattern used to communicate messages between different system components without them knowing anything about each other's identity.

Senders or also called publishers, do not program the messages that are sent directly to specific receivers (subscribers).

Subscribers express interest in one or more events and only receive messages that are of interest.

There is an intermediary called a "**message broker**" or "**Event Bus**".

The "**event bus**" receives messages from the "**Publisher**" and then sends them to the "**Subscriber**".

[image assetsSrc="JS-Back-End-Streams-And-Utilities.png" /]

[/slide]

[slide hideTitle]

# Demo: Publisher-Subscriber Pattern

The first thing we are going to do is to declare a local variable inside the function to store subscribed callbacks like so, `const subscribers = {}`.

Next, we will define the **subscribe** method, which will be, responsible for inserting callbacks to subscribers.

it checks to see if the "**eventName**" property in the subscriber's storage is already an array. 

If it is not, it assumes that this will be the first registered callback for `subscribers[eventName]` and initializes it into an array. 

Then, it proceeds to push the callback into the array.

In a real application, we might have many memory leaks if we subscribe to many callbacks.

This means that we will have to face some consequences if we do nothing about that.

So we need to remove the subscribed callbacks when they are no longer necessary. 

The most convenient place to implement this is the return value from the subscribe function.

```js
function pubSub() {
  const subscribers = {};
  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    })
  }
  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;
    return {
        unsubscribe() {
        subscribers[eventName].splice(index, 1);
            },
        }
    }
    const unsubscribe = subscribe('food', function(data) {
        console.log(`Received some food: ${data}`);
        })
    unsubscribe();
    return { publish, subscribe }
}
```

[/slide]

[slide hideTitle]

# Advantages

The **Pub/Sub** Pattern makes our code more flexible because publishers and subscribers are decoupled and work independently from each other.

This allows for better scalability because if we want to reuse functionality or to have lots of events, subscribers, publishers, it can be easily done by using the **Pub/Sub** Pattern.

**Pub/Sub** Pattern eliminates the need to check for fresh data over a given interval by periodically making API requests to a server ("**polling**"),  which makes our program run faster.

It reduces complexity by removing all the point-to-point connections with a single connection to a message point, which will manage subscriptions to decide what messages should be delivered to which endpoints.

**Pub/Sub** Pattern has some disadvantages as well like:

- Makes the code more abstract
- Makes code harder for debugging 

As a rule of thumb, you should not use any pattern unless you need to.

[/slide]

