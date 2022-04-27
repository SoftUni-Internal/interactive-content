[slide hideTitle]

# Create Fragment

One of our first tasks will be to show only specific buttons in the **navigation** menu. If the user is **not logged** he should be able to see:

- **Login**, **Register**, and **About** buttons.
  If he is already logged the user should see:
- **Add new route**, **Profile**, **Admin**, and **Logout** buttons.

If we want to add this to every page, we will have to repeat a lot of code. To prevent this, we will add a **partial** view, that will contain the navigation element. In each view, we will import the **view**.

To do this go to the **templates** directory in **resources** and create a new directory called **fragments**. That is where we will store our repeating fragments.

[image assetsSrc="30-Fragments-Directory.png" /]
[/slide]

[slide hideTitle]

# Add Commons

Inside the **fragments** package we will create a new **HTML** file called **commons.html**.

[image assetsSrc="31-HTML-File.png" /]

Inside it, we will add every element that will **reuse**. For now, we will only add:

- **Head**
- **Navigation Bar**
- **Footer**

This is a **html** document so it must start and end with the appropriate tags:

```html
<!DOCTYPE html>
<html lang="en"></html>
  <!-- Head -->
<body>
  <!-- Navigation -->
</body>
<!-- Footer -->
</html>
```

[/slide]

[slide hideTitle]

# Add head Element

Inside the html tag we add the following code for the head:

```html
<!-- Head -->
<head th:fragment="head">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pathfinder</title>
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="stylesheet" href="/css/mobile.css" />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
    integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
    integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
    crossorigin=""
  ></script>
</head>
```

We can copy it from the **index.html**. Be sure to add **th:fragment="head"** on the **head** element. That is how we will get it from other views.
[/slide]

[slide hideTitle]

# Navigation Bar

Below the **head**, inside the body we will write the code for our **navigation bar**.

```html
<!-- Navigation -->
<header th:fragment="navigatioin">
  <nav class="main-nav">
    <ul>
      <th:block th:if="${@currentUser.id == null}">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/users/login">Login</a>
        </li>
        <li>
          <a href="/users/register">Register</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </th:block>
      <th:block th:unless="${@currentUser.id == null}">
        <li>
          <a href="/routes/add">Add new route</a>
        </li>
        <li>
          <a th:href="@{/users/profile/{id}(id = ${@currentUser.id})}"
            >Profile</a
          >
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <a href="/users/logout">Logout</a>
        </li>
      </th:block>
    </ul>
  </nav>
</header>
```

If the user is **logged** he will see one block, and if he isn't the other.
[/slide]

[slide hideTitle]

# Footer

```html
<footer th:fragment="footer" class="footer bg-blur rounded">
  <div class="container-fluid text-center">
    <div class="h5 text-white">
      &copy; Lucho, Chocho & Spring Advanced Students 2021. All rights reserved.
    </div>
  </div>
</footer>
```

We can copy the code from the **index.html** but be sure that each element has **th:fragment** as above.
[/slide]

[slide hideTitle]

# Full Code for commons.html

This is how the full **commons.html** looks like:

```html
<!DOCTYPE html>
<html lang="en">
  <head th:fragment="head">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pathfinder</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/styles.css" />
    <link rel="stylesheet" href="/css/mobile.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
      integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
      integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
      crossorigin=""
    ></script>
  </head>
  <body>
    <!-- Navigation -->
    <header th:fragment="navigatioin">
      <nav class="main-nav">
        <ul>
          <th:block th:if="${@currentUser.id == null}">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/users/login">Login</a>
            </li>
            <li>
              <a href="/users/register">Register</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </th:block>
          <th:block th:unless="${@currentUser.id == null}">
            <li>
              <a href="/routes/add">Add new route</a>
            </li>
            <li>
              <a th:href="@{/users/profile/{id}(id = ${@currentUser.id})}"
                >Profile</a
              >
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <a href="/users/logout">Logout</a>
            </li>
          </th:block>
        </ul>
      </nav>
    </header>
    <!-- Footer -->
    <footer th:fragment="footer" class="footer bg-blur rounded">
      <div class="container-fluid text-center">
        <div class="h5 text-white">
          &copy; Lucho, Chocho & Spring Advanced Students 2021. All rights
          reserved.
        </div>
      </div>
    </footer>
  </body>
</html>
```

[/slide]
