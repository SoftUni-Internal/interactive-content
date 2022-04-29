# Layers and Thin Controllers

[slide hideTitle]
# Layers

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/Spring-Introduction-MVC/32-layers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The code in every application should be **split base on it is functionality**, otherwise, navigation through the application could be very complicated. 

The typical Java Spring application organization looks like this:

[image assetsSrc="Java-Spring-Fund-MVC-7.png" /]

We will take a look into a few foulders:

- **Models** - database models and also view binding and service bindings

- **Repository** - access the data into the database

- **Services** - location of the business logic

- **Web** - location of the controllers

For a huge application, even this type of organization could not be very sufficient.

Splitting the project into different modules in IntelliJ:

[image assetsSrc="Java-Spring-Fund-MVC-8.png" /]

Each module corresponding to the application layer and is easier to navigate.

[/slide]

[slide hideTitle]
# Thin Controllers

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/Spring-Introduction-MVC/35-thin-controllers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Every controller in Java Spring applications should follow the two most important principles:

- "**Do Not Repeat Yourself**" ("**DRY**") - code should not repeat not only in the controller but in the entire application

When there are repeating blocks of code is a typical "**code smell**" and method or class should be created.

- "**Keep it Stupid and Simple**" ("**KISS**") - every application has two types of complexity
   - **essential** - what business logic of the application demands
   - **incidental** - the level of complexity created by the developer - different "**code smells**", abstraction, etc.

Controllers should not work directly with the database's entities, for this purpose services should be used.

The service layer consists of application logic, e.g. services, executors, strategies, mappers, DTOs, entities, etc.


[/slide]
