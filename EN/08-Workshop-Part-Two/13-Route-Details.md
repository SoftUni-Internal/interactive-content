[slide hideTitle]

# Route Details Method

Now let's add the logic for the **all routes** page. We will have a page, in which we have all the routes, with small information about them.

We will create a **details** method with a **@GetMapping** pointing to the specific **id**. That means that on the **localhost:8080/routes/details/{id}** we will view the details page for a specific id.

```java
@GetMapping("/details/{id}")
    public String details(@PathVariable Long id, Model model)
    {
        model.addAttribute("route", routeService.findRouteById(id));
        return "route-details";
    }
```

In the next parts of this workshop, we will **add** other **attributes** for the **username** of the creator, the **total distance**, etc.

[/slide]

[slide hideTitle]

# Route Details View

For the **details** view, we will get the current route with a **th:object="${route}"**. From there we can get each field of data with **th:text="\*{name of field}"**.

For now, we will leave the **upload image**, and the **comment** section. We will do them in the next part of the workshop.

```java
<html lang="en"
      xmlns:th="http://www.thymeleaf.org">
<head th:replace="fragments/commons::head"></head>
<body>
<div class="wrapper">
    <header th:replace="fragments/commons::header"></header>
    <input type="hidden" name="routeId" id="routeId">
    <div class="details-main" th:object="${route}">
        <section class="route-info text-center">
            <h4 id="track-name" th:text="*{name}"></h4>
            <p>Total distance: <span id="totalDistance"></span> km</p>
            <p>Author name: <span id="authorName"></span></p>
            <h4>Difficulty Level (1-3):</h4>
            <div class="level">
                <p><img class="level-img" src="/images/difficulty-level.png" alt=""></p>
                <p th:if="*{level.name() == 'INTERMEDIATE'}"><img class="level-img" src="/images/difficulty-level.png" alt=""></p>
                <th:block th:if="*{level.name() == 'ADVANCED'}">
                    <p><img class="level-img" src="/images/difficulty-level.png" alt=""></p>
                    <p><img class="level-img" src="/images/difficulty-level.png" alt=""></p>
                </th:block>
            </div>
            <div>
                <h4>Choose picture</h4>
                <form action="/" method="POST" enctype="multipart/form-data">
                    <input type="hidden" id="id" name="routeId">
                    <div class="form-group">
                        <label>
                            <input type="text" name="title">
                        </label>
                    </div>
                    <div class="image-upload">
                        <label for="picture">
                            <img src="/images/add-img.png" alt=""/>
                        </label>
                        <input style="display: none" id="picture" type="file" name="picture" />
                    </div>
                    <div class="form-group">
                        <button class="btn-primary rounded">Upload Picture</button>
                    </div>
                </form>
            </div>
        </section>
        <section id="map"></section>
        <section id="video">
            <iframe id="frame" th:src="'https://www.youtube.com/embed/' + *{videoUrl}">
            </iframe>
        </section>
        <section class="route-description text-center">
            <h4>Description:</h4>
            <p th:text="*{description}" id="route-description">Description: </p>
        </section>
        <section class="gallery">
            <img th:each="p : *{pictures}" class="rounded" th:src="${p.url}" height="100%" alt="">
        </section>
        <section class="comments">
        </section>
    </div>
</div>
<footer th:replace="fragments/commons::footer"></footer>
</body>
</html>

```

[/slide]

[slide hideTitle]

# Route Details View 2

The **difficulty level** part might look complicated but it isn't. If it's a beginner level it will show one image, if its level is **intermediate** it will show one more image, and so on.

With the **th:each="p : \*{pictures}"** we go through all the images, the same way we did on the **all routes** page.

Be sure to replace the **head**, **header**, and **footer** with our reusable fragment.

This is what the details page will look like:

[image assetsSrc="49-Route-Details.png" /]

[/slide]
