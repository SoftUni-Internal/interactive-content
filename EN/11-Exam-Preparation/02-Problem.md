# Application Pages: 70 Pts

[slide hideTitle]
# Guest Pages: 15 Pts

These are the pages and functionalities, accessible by **Guests (logged out users).**

## Home Page (Logged Out User)

List the **top three (3) public courses ordered** by the count of enrolled in users in **descending** order.

[image assetsSrc="JS-BackEnd-Exam-1.png" /]

If there are no courses in the database yet, display `No courses...`

## Register Page (Logged Out User)

Register a user inside the database with **username** and **password.** 

Both **passwords** must **match!** 

After successful registration, you should **redirect to Home page** and the user should be already **logged in.**

[image assetsSrc="JS-BackEnd-Exam-3.png" /]


## Login Page (Logged Out User)

[image assetsSrc="JS-BackEnd-Exam-4.png" /]

[/slide]


[slide hideTitle]
# User Pages: 55 Pts

These are the **templates** and **functionalities**, accessible by **Users** (logged in users).

## Home Page (Logged in User)

List **all public** courses sorted in **ascending order** by the **created time** with a button **Details** which leads to a course **details page.**

[image assetsSrc="JS-BackEnd-Exam-5.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-6.png" /]

## Create Course Page (Logged in User)

Enter course **title**, **description**, **image URL** and duration. 

After the course is created successfully, you should **redirect to Home page.**

[image assetsSrc="JS-BackEnd-Exam-7.png" /]

## Logged in Details Page (Logged in User)

In the Details of a course section, you should load course **name** and **description.**

## Not Enrolled in Course (Logged in User)

If the user is **not enrolled** in the course, you should display **Enroll button.** 

[image assetsSrc="JS-BackEnd-Exam-8.png" /]

## Course Creator (Logged in User)

The creator of the course should see `[Delete]` `[Edit]`.

[image assetsSrc="JS-BackEnd-Exam-9.png" /]

## Delete Course (Logged in User)

Upon deleting a lecture (clicking over `[Delete]` **button**), you should be **redirected to the home page.**

## Edit Course (Logged in User)

All form fields should be **filled** with the corresponding information of the selected course. 

When a put request is sent (clicking over `[Edit]` **button**), you should be **redirected to the Details page.**

[image assetsSrc="JS-BackEnd-Exam-10.png" /]

[/slide]