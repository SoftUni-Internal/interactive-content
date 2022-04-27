[slide hideTitle]

# Instructions and Resources

[Download](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/Java-Spring-Fundamentals-Workshop-1.zip) **the resources for this workshop.**

[Download](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/Java-Spring-Fundamentals-Workshop-Problem-1.docx) **the problem description for this workshop.**

[Download](https://videos.softuni.org/resources/java/Java-Spring-Fundamentals/Java-Spring-Fundamentals-Workshop-Project-1.zip) **the final source code from this workshop part.**

In the **problem description**, we can preview what the final version of the **workshop** project will look like. With the knowledge from the **previous lessons**, you should be able to do the workshop by yourself.

[/slide]

[slide hideTitle]

# Creating Project

First, we need to create a **new Project**.

[image assetsSrc="01-WelcometoInteliJIDEA.png" /]

Select a **name** and **directory** for our project:

[image assetsSrc="02-SelectName.png" /]
[/slide]

[slide hideTitle]

# Add Dependencies

We now need to carefully add **dependencies** for the project. We will add:

- **Spring Boot DevTools** (from Developer Tools)
- **Spring Web** (from Web)
- **Thymeleaf** (from Template Engines)
- **Spring Data JPA** (from SQL)
- **MySQL Driver** (from SQL)
- **Validation** (from I/O)

[image assetsSrc="03-Add-Dependencies.png" /]

[image assetsSrc="04-More-Dependencies.png" /]

After we select all the dependencies, we press the **Finish** button.
[/slide]

[slide hideTitle]

# Copy and Paste Resources

Our project should be in the directory we have **specified**. Now we need to go to the project from the file system. Go to your project **directory**, and open **src/main/resources**. **Paste** all files from the resources here.

[image assetsSrc="05-Add-Resources.png" /]

In this workshop, we will work with **application.yml**, so you can delete the default **application.properties** file.

That is what our resources look like:

[image assetsSrc="06-Delete-Application-Prop.png" /]
[/slide]

[slide hideTitle]

# Setup Database

After that, we can open our database tab:

[image assetsSrc="07-Open-Database.png" /]

We will work with **MySql**, so we select it:

[image assetsSrc="08-Select-MySQL.png" /]

Add our correct **username** and **password**. From the previous lessons we use:

- User: **root**
- password: **12345**

If you are using another, be sure to change the credentials in the **application.yml** file.

Click on **Test Connection** to test your connection. If everything is ok, click on **Apply**, and then **OK**.

[image assetsSrc="09-AddCredentials.png" /]
[/slide]

[slide hideTitle]

# Initialize Database

If we start our project this will create an empty database on your pc. We can do it by clicking the **Run** button.

[image assetsSrc="10-RunProject.png" /]

When the project loads, there will be no errors on the console.

[image assetsSrc="11-ShowNoErrors.png" /]

Check the database, in the **Database** section. Click on the numbers next to @localhost.

[image assetsSrc="12-CheckDatabase.png" /]

This should open a small box with our **MySQL databases**. We choose our database called **pathfinder**. Now we can view our database, but for now, it is empty.

[image assetsSrc="13-SelectDb.png" /]
[/slide]

[slide hideTitle]

# Setup Project Structure

After we are done configuring our database we can set up the structure of the project:
First, right-click on the pathfinder project and select **New** then **Package**.
[image assetsSrc="14-Add-Package.png" /]

Add the **config** package.
[image assetsSrc="15-TypeNamePackage.png" /]

Repeat the same process and add the following packages:

- model
- repository
- service
- web

[image assetsSrc="16-AllPackages.png" /]
[/slide]
