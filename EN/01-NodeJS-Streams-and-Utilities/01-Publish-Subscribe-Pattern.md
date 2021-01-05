# Publish Subscribe Pattern

[slide]

# What is Pub/Sub?

It is an architectural design pattern, used to communicate messages between different system components without them knowing anything about each other’s identity.

Senders (publishers), do not program the messages to be sent directly to specific receivers (subscribers).

Subscribers express interest in one or more events, and only receive messages that are of interest.

There is an intermediary called a "message broker" or "event bus".

The "event bus" receives messages from the "Publisher" and then sends them to the "Subscriber".

[image assetsSrc="Streams-And-Utilities.png" /]

[/slide]

[slide]

# A code example of the Publisher-Subscriber Pattern

The first thing we are going to do is to declare a local variable inside the function to store subscribed callbacks: `const subscribers = {}`.

Next, we will define the **subscribe** method, which will be responsible for inserting callbacks to subscribers.

it checks to see if the "eventName" property in the subscribers storage is already an array. 

If it is not, it assumes that this will be the first registered callback for subscribers[eventName] and initializes it into an array. 

Then, it proceeds to push the callback into the array.

In a real application we might have a never ending memory leak if we subscribe many callbacks.

This means that we will have to face some consequences if we do nothing about that.

So we need to remove the subscribed callbacks when they are no longer necessary. 

The most convenient place to implement this is the return value from subscribe.

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

[slide]

# Advantages

The Pub/Sub Pattern makes our code more flexible, because publishers and subscribers are decoupled and work independantly from each other.

It eliminates the need of constant "polling". Thus our program becomes faster.

It reduces complexity by removing all the point-to-point connections with a single connection to a message point, which will manage subscriptions to decide what messages should be delivered to which endpoints.

[/slide]