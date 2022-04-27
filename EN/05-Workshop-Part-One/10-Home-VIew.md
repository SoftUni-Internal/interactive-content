[slide hideTitle]

# Working with The Partial Views

After we have added the three elements as **fragments** we can delete them from every other **HTML** document, inside our **resources** directory.

Let's take as an example the **index.html**, our home page. If we want to use some of the fragments, we use the **th:replace**:

```html
<head th:replace="fragments/commons::head"></head>
```

This will go to the **commons** file and load the head element.
We can do the same with the other elements.

```html
<header th:replace="fragments/commons::header"></header>
<footer th:replace="fragments/commons::footer"></footer>
```

Replace each section with the specific **element** and run your project. We should see the **navigation bar** and **footer**.
[/slide]

[slide hideTitle]

# Full HomePage Code

This is what the full **index.html** looks like:

```html
<html lang="en" xmlns:th="http://www.thymeleaf.org">
  <head th:replace="fragments/commons::head"></head>
  <body>
    <div class="wrapper">
      <!-- Navigation -->
      <header th:replace="fragments/commons::header"></header>
      <!-- Top Container -->
      <section class="top-container">
        <div class="showcase">
          <h1>Find amazing routes</h1>
          <p>
            Sick of staying at home, sick of limitations? Be free! Find a route
            and enjoy nature!
          </p>
          <a href="/routes" class="btn">To routes</a>
        </div>
        <div class="top-box top-box-a">
          <h4>Weather in Sofia</h4>
          <h4><span id="box-a-temp">15</span><span>&#8451;</span></h4>
          <img id="box-a-img" src="/images/sun.png" height="150px" alt="" />
        </div>
        <div class="top-box top-box-b">
          <h4>Weather in Sozopol</h4>
          <h4><span id="box-b-temp">27</span><span>&#8451;</span></h4>
          <img id="box-b-img" src="/images/cloudy.png" height="150px" alt="" />
        </div>
      </section>

      <!-- Boxes Section -->
      <section class="boxes">
        <a href="/" class="main-btn">
          <div class="box">
            <img src="/images/pedestrian.png" height="150px" alt="" />
            <h3>Pedestrian</h3>
            <p>Is this your Leg day?</p>
          </div>
        </a>
        <a href="/" class="main-btn">
          <div class="box">
            <img src="/images/bicycle.png" height="150px" alt="" />
            <h3>Bicycle</h3>
            <p>When you want to be one with nature!</p>
          </div>
        </a>
        <a href="/" class="main-btn">
          <div class="box">
            <img src="/images/motorcycle.png" height="150px" alt="" />
            <h3>Motorcycle</h3>
            <p>When you want the wind to blow on your face!</p>
          </div>
        </a>
        <a href="/" class="main-btn">
          <div class="box">
            <img src="/images/car.png" height="150px" alt="" />
            <h3>Car</h3>
            <p>Going on a trip with friends?</p>
          </div>
        </a>
      </section>

      <!-- Info Section -->
      <section class="road">
        <img src="/images/most-commented.jpg" alt="" />
        <div>
          <h2>The most commented route</h2>
          <p>
            Read more about the most commented route and do not miss the chance
            to visit it and give your opinion to help other users.
          </p>
          <a href="/" class="btn">Learn More</a>
        </div>
      </section>

      <!-- Portfolio -->
      <section class="gallery">
        <img
          src="http://res.cloudinary.com/ch-cloud/image/upload/v1630583467/koncyanx4gqwzt9vxgx4.jpg"
          width="200px"
          height="200px"
          alt=""
        />
        <img
          src="http://res.cloudinary.com/ch-cloud/image/upload/v1630582448/oowojgn4lagybkvv20jb.jpg"
          width="200px"
          height="200px"
          alt=""
        />
      </section>

      <!-- <script th:src="@{/js/weather.js}"></script> -->
    </div>
    <!-- Wrapper Ends -->'

    <footer th:replace="fragments/commons::footer"></footer>
  </body>
</html>
```

[/slide]
