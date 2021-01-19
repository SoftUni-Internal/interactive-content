# Application Pages: 70 Pts

[slide hideTitle]
# Guest Pages: 15 Pts

These are the pages and functionalities, accessible by **Guests (logged out users).**

## Home Page (Logged Out User)

List the **top three (3) public plays** ordered by the count of likes in **descending** order. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-1.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-2.png" /]

## Register Page (Logged Out User)

Register a user inside the database with **username** and **password.** 

Both **passwords** must **match!** 


[image assetsSrc="JS-BackEnd-Exam-Preparation-3.png" /]


## Login Page (Logged Out User)

[image assetsSrc="JS-BackEnd-Exam-Preparation-4.png" /]

[/slide]


[slide hideTitle]
# User Pages: 55 Pts

These are the **templates** and **functionalities**, accessible by **Users** (logged in users).

## Home Page (Logged in User)

List **all public** plays sorted in **descending order** by the **created time** with a button **Details** which leads to a **play details page.** 

[image assetsSrc="JS-BackEnd-Exam-Preparation-5.png" /]

If there are no plays in the database yet, display `No plays yet...`

[image assetsSrc="JS-BackEnd-Exam-Preparation-6.png" /]

## Create Play Page (Logged in User)

Enter play **title**, **description**, **image URL** and choose if the play will be public or not. 

You will receive the value of the checkbox as a string `on` if it is checked or **undefined** if it is not. 

You have to convert the received value as Boolean **true** or **false** and save the play in the database. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-7.png" /]

## Logged in Details Page (Logged in User)

In the Details of a play section, you should load play **name** and **description**. 

## Not Liked Play (Logged in User) 

If the user did not like the play, you should display **Like button.**  

[image assetsSrc="JS-BackEnd-Exam-Preparation-8.png" /]

## Liked Play (Logged in User) 

**After** the user has liked the play, the `You have already liked this play!` span element should be shown instead of the `[Like]` button. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-9.png" /]

## Play Creator (Logged in User) 

The creator of the play should see `[Delete]` `[Edit]`. 

The creator should NOT be able to like his plays! 
[image assetsSrc="JS-BackEnd-Exam-Preparation-10.png" /]

## Delete Play (Logged in User) 

Upon deleting a play (clicking over `[Delete]` **button**, you should be **redirected to the home page.** 

## Edit Play (Logged in User) 

All form fields should be **filled automatically** with the corresponding information of the selected play. 

[image assetsSrc="JS-BackEnd-Exam-Preparation-11.png" /]
[/slide]