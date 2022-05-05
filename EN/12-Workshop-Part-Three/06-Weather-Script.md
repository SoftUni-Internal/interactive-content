[slide hideTitle]

# Weather Section

On the **home** page(index.html), we have two **div** elements each, containing information about a different weather location.

[image assetsSrc="58-Weather-Section.png" /]

With **JavaScript**, we will change the **text** and **image** with **real-time** information.

[/slide]

[slide hideTitle]

# Create JavaScript File

In the **resources/static/js** directory, we will create a new **JavaScript** file named **weather.js**.

[image assetsSrc="56-Create-JS-File.png" /]

We will embed the **weather.js** script in the **index.html** home page.

```JavaScript
<script th:src="@{/js/weather.js}"></script>
```

Each time we go to the home page, the script will also load.

[/slide]
