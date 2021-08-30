# Fetch API

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-20-24-Fetch-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Fetch API** provides an interface for accessing and manipulating requests to servers from web browsers.

`fetch()` function which provides an easy way to access data from an API asynchronously.

Functionality like this was previously achieved using `XMLHttpRequest`.

The `fetch()` function accepts **one argument**, which will be the URL to which send the request. 

By default a `GET` request is sent, if we want to send other requests, we will have to set them up by passing a **second** argument to the function.

Fetch returns `promise`, where we can use `then` and `catch` so can catch errors if they occur or catch the result which returns API itself.

For more information, see the fetch [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) itself.

## Example

In this example we access GitHub API, we can only access publicly open routs.

```js
fetch('https://api.github.com/users/k1r1L')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson))
    .catch((myErr) => console.error(myErr));
```

We `fetch()` a given user by username. 

When we **successfully** fetch a user, we get a promise, which we call `response.json`, which will return the data in the form of JSON. 

Once we have the data, we are free to start using it in context, or we can update the state.

With `catch()`, we can catch errors.

Result:

[image assetsSrc="Compenents-Deep-Dive-3.png" /]

## Example Two

Fetch can be used **asynchronously**, it is depending on us what to use asynchronously or not.

The best practice to use `async` `await` so we can take advantage of the better performance.

```js
(async () => {
  try {
    const response = await fetch('https://api.github.com/users/k1r1L');
    const myJson = await response.json();
    console.log(myJson);
  } catch (myErr) {
    console.error(myErr);
  }
})();
```

Result:

[image assetsSrc="Compenents-Deep-Dive-4.png" /]
[/slide]

[slide hideTitle]

# Fetch Services

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-25-26-Fetch-Services-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The basic idea is to isolate the concern of fetching data inside components.

Fetching data logic should be separated as service.

```js
const apiUrl = '...';

export const getData = () => {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error))
};

```

In this example, we have the function `getData` and return a response.

This is the best way we can fetch data because we do not **unnecessarily** contaminate our components.

We separate the logic of data acquisition and creation, where we can use only functions that we need.

## Usage

When we separate data retrieval in a service, we can insert that service into components and use them.

```js
import { getData } from 
'./services/fetching-data-service';

class App extends Component {
  state = {
    data: ...
  };
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data })
    });
  }
  render() {
    return ...;
  }
}
```

[/slide]