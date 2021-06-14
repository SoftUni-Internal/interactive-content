# Publish Subscribe Pattern

[slide hideTitle]

# What is Pub/Sub?

The Publish-Subscribe pattern is an architectural design pattern used to exchange messages between different system components without them knowing about each other's identity.

Senders or also called publishers, do not program the messages to be sent directly to specific receivers (subscribers).

The subscribers choose the events they want to subscribe to and receive messages only from them.

There is an intermediary called a "**message broker**" or an "**Event Bus**".

The "**event bus**" receives messages from the "**Publisher**" and then sends them to the "**Subscriber**".

[image assetsSrc="JS-Back-End-Streams-And-Utilities.png" /]

## Demo: Publisher-Subscriber Pattern

First, we will declare a local variable inside the function to store subscribed callbacks like so: `const subscribers = {}`.

Next, we will define the `subscribe` method, which will be responsible for inserting callbacks in the `subscribers` object.

It checks if the "**eventName**" property in the subscriber's storage is already an array. 

If it is not, it assumes that this will be the first registered callback for `subscribers[eventName]` and initializes an array. 

Then, it proceeds to push the callback into the array.

In a real application, we might have memory leaks if we subscribe to many callbacks.

We need to remove the subscribed callbacks when they are no longer necessary. 

The best place to implement this is the return value of the subscribe function.

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

The **Pub/Sub** pattern makes our code more flexible because publishers and subscribers are decoupled and work independently from each other.

This allows for better scalability because it is easy to reuse functionality or manage lots of events, subscribers, and publishers.

This pattern eliminates the need to constantly check for new data by periodically making API requests to a server ("**polling**"), which makes our program run faster.

It reduces complexity by replacing all the point-to-point connections with a single connection, which manages subscriptions and decides where to deliver each message.

The **Pub/Sub** pattern has its disadvantages:

- Makes the code more abstract
- Makes code harder for debugging 

Before using a certain design pattern, make sure you are aware of the drawbacks.

[/slide]

