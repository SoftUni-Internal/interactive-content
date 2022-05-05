[slide hideTitle]

# User Profile View

Now let's open our **profile.html**, located in **resources/templates**.

We replace the **head**, **header**, and **footer** with our own **fragments**, that we created in the first workshop.

Be sure that the surrounding div has the **th:object="${user}"** attribute.

This is the code for the **view**:

```java
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head th:replace="fragments/commons::head"></head>
<body>
<header th:replace="fragments/commons::header"></header>
<main class="p-5 align-content-center bg-blur my-register-div">
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-7">
                <div class="profile-card p-3 py-4">
                    <div class="text-center"><img src="/images/profile.jpg" width="100" class="rounded-circle"></div>
                    <div class="text-center mt-3" th:object="${user}">
                        <span class="bg-secondary p-1 px-4 rounded text-white" th:text="*{level.name()}"></span>
                        <h5 class="mt-4 mb-0">Full name</h5>
                        <span th:text="*{fullName}"></span>
                        <h5 class="mt-2 mb-0">Username</h5>
                        <span th:text="*{username}"></span>
                        <h5 class="mt-2 mb-0">Age</h5>
                        <span th:text="*{age}"></span>
                        <div class="px-4 mt-5">
                            <p class="fonts"></p>
                        </div>
                        <ul class="social-list">
                            <li><i class="fab fa-facebook-square"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-google"></i></li>
                        </ul>
                        <div class="buttons">
                            <button class="btn btn-outline-primary px-4">Back</button>
                            <!-- button class="btn btn-primary px-4 ms-3">Contact</button>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</body>
<footer th:replace="fragments/commons::footer"></footer>
</html>
```

[/slide]

# View User Page

For now, we will only replace the:

- **level**
- **fullName**
- **username**
- **age**

[image assetsSrc="57-User-Page.png" /]

In the **next parts** of the workshop, we will add more features to this page.

[/slide]
