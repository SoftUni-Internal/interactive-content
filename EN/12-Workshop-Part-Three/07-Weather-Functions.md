[slide hideTitle]

# Get Weather DOM Elements

In the **weather.js** we will have two **functions** for the two locations on the **home** page.

First, we will get the two box elements.

```js
const boxImgA = document.getElementById('box-a-img');
const boxImgB = document.getElementById('box-b-img');
const boxTempA = document.getElementById('box-a-temp');
const boxTempB = document.getElementById('box-b-temp');
```

After we **fetch** the data we will change the elements, depending on the result.

[/slide]

[slide hideTitle]

# Weather API BreakDown

Below the **constants**, we will write the two functions. First, we will fetch the data from the **api.openweathermap.org**.

You can open **https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=8dd1b8c6c70655b59ef4f75b4d9fb753**, in your browser and see the information for yourself. That is the data that we will fetch.

```js
{"coord":{"lon":13.4105,"lat":52.5244},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":
{"temp":290.81,"feels_like":290.04,"temp_min":288.7,"temp_max":292.58,"pressure":1017,"humidity":54},"visibility":10000,"wind":{"speed":1.79,"deg":262,"gust":2.24},"clouds":{"all":20},"dt":1651656790,"sys":
{"type":2,"id":2011538,"country":"DE","sunrise":1651634967,"sunset":1651689405},"timezone":7200,"id":2950159,"name":"Berlin","cod":200}
```

If we change the **url parameter** "Berlin", to another location, we can see the weather there.

There is one small problem with the **API**. The returned degrees are in **Kelvin**. We will use the built-in **Math** object and convert it.

- 1 **Kelvin** is -272.15 **Degrees Celsius**

```js
boxTempB.innerText = Math.round(info.main.temp - 272.15);
```

But we want to also change the **image of the weather** depending on the returned data.
Inside the **resources/static/images/weather-icons/** directory, we can preview the image. Depending on the returned data, we will load the specific image.

```js
boxImgB.src = "/images/weather-icons/" + info.weather[0].icon + ".png";
```

[/slide]
[slide hideTitle]

# Weather Functions Code

This is how the **full code** of the functions will look like:

```js
fetch("https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=8dd1b8c6c70655b59ef4f75b4d9fb753")
    .then(data => data.json())
    .then(info => {
        //Formula Kelvin to Celsius 299K − 272.15 = 25.85°C
        boxTempA.innerText = Math.round(info.main.temp - 272.15);
        boxImgA.src = '/images/weather-icons/' + info.weather[0].icon + '.png';
    })

fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=8dd1b8c6c70655b59ef4f75b4d9fb753")
    .then(data => data.json())
    .then(info => {
        //Formula Kelvin to Celsius 299K − 272.15 = 25.85°C
        boxTempB.innerText = Math.round(info.main.temp - 272.15);
        boxImgB.src = '/images/weather-icons/' + info.weather[0].icon + '.png';
    })
```

If we start the project, we should see the following result:

[image assetsSrc="59-Weather-Api-Info.png" /]

The output will **differ** because now it shows **real-time** weather.

In the next parts of this workshop, we will move this logic to an **API controller**.
[/slide]

[slide hideTitle]

# Conclusion

This **PathFinder workshop** will continue in the next course - **Java Spring Advanced**.

There we will work:

- **Web API and REST controllers**
- **Spring Security**
- **HATEOAS**
- **Error Handling**
- **Events**
- **Aspect-Oriented Programming**
- **Unit and Integration Testing**
- **Containerization and Documentation**
- **Deployment, Hosting, and Monitoring**

[/slide]
