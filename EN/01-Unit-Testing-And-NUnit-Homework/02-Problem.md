# Unit Testing a C# Web App *

[slide hideTitle]

# Installing and Running the App

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/16.web-app-unit-tests-homework-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this exercises, we shall **test a real-world project**, not just a single isolated C# class. 

You are given a simple **C# Web application**, based on ASP.NET MVC, Entity Framework and MS SQL Server database. 

Your task is to write **unit tests** for its **controller classes**. 

You will need to use **mocked database** to simulate the external database dependency.

Open the project in Visual Studio, compile and run it. You need to have the following software installed:

- .NET 5 or later version [.NET 5](https://dotnet.microsoft.com)
- MS SQL Server LocalDB [MS SQL Server LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb)
- Visual Studio 2019 or later version [Visual Studio 2019](https://visualstudio.microsoft.com)



[/slide]

[slide hideTitle]

# The App in Action

The Web app holds a list of **events**. **Events** have name, start date, end date, location and owner. Users, after registration / login, can **view and create events**. 

This is how the app looks like:

[image assetsSrc="Unit-Testing-NUnit-Homework(16).png" /]

<------------------------------------>

[image assetsSrc="Unit-Testing-NUnit-Homework(17).png" /]

<------------------------------------>

[image assetsSrc="Unit-Testing-NUnit-Homework(18).png" /]


[/slide]

[slide hideTitle]

# Web App Code Structure

The Web app uses classical MVC architecture. The app logic is split into:

- **Controllers**: C# classes, which respond to user actions, process data and display views: 
  * **HomeController** – displays the home page.
  * **EventsController** – view / create / delete events.
- **Models**: C# classes, which hold the data, for displaying by the views:
  * **EventViewModel** – holds data about an event for displaying by the views.
  * **EventBindingModel** – holds data about an event, together with validation rules.
  * **ErrorViewModel** – used for displaying unhandled exceptions.
- **Views**: Razor pages, which display data from the models as HTML code:
  * **Home\Index.cshtml** – displays the app welcome page.
  * **Events\All.cshtml** – displays all events in a table.
  * **Events\Create.cshtml** – displays a form for creating new event.
  * **Events\Delete.cshtml** – displays a confirmation form for deleting existing event.

The code, that we shall unit test, are the controller classes HomeController and EventsController and the public methods (actions) in them.

[image assetsSrc="Unit-Testing-NUnit-Homework(19).png" /]



[/slide]


[slide hideTitle]

# Creating Unit Test Project

To create the unit tests, we need to create a new app of type "**NUnit Test Project**" in your Visual Studio solution:

[image assetsSrc="Unit-Testing-NUnit-Homework(20).png" /]



[/slide]

[slide hideTitle]

# Testing the HomeController

Now, let's test the **HomeController** class. It holds the following code:

[image assetsSrc="Unit-Testing-NUnit-Homework(21).png" /]

The controller class defined two **actions: Index()** and **Error()**, which are quite simple.

The **unit test** for the **Index()** method (the main action) in the controller is trivial:

- Instantiate the controller class.

- Invoke the target method.

- Check the returned result. It should be an instance of **ViewResult** (a view).

This is how the **unit test** may look like:

[image assetsSrc="Unit-Testing-NUnit-Homework(22).png" /]

Testing the **Error() action** is a little bit trickier. 

It has a dependency: **HttpContext**. We need to mock it before calling the action. 

Otherwise, it will be **null**. This is how we can test the **Error() action**:

[image assetsSrc="Unit-Testing-NUnit-Homework(23).png" /]


[/slide]

[slide hideTitle]

# Testing the EventsController

The **EventsController** class is more complex for testing because it has external dependencies:

[image assetsSrc="Unit-Testing-NUnit-Homework(24).png" /]

The **EventsController** class has the following dependencies:

- It depends on the ASP.NET Core **user management, authentication and authorization framework**.

- It depends on the **ApplicationDbContext**, which is implements a database management API, based on Entity Framework.

These **dependencies should be mocked or simulated**, in order to unit test this controller class. Let’s see how to it.

[/slide]

[slide hideTitle]

# EventsController.All()

First, we shall **test the method All()**, which retrieves all events from the database and renders the view, which visualizes them as HTML:

[image assetsSrc="Unit-Testing-NUnit-Homework(25).png" /]

It has a dependency of the **ApplicationDbContext**, so first need to mock the database layer.

[/slide]


[slide hideTitle]

# Mocked Database Layer

We are writing unit tests. By definition **unit tests should test a single component** (unit). 

All external dependencies should be mocked (simulated).

We can define a class, which will create a temporary in-memory database, which will hold some pre-defined testing data (one user and two events). 

This is an example of **database mock**, which we can use to simulate the behavior of Entity Framework based database layer:


```csharp
using System;
using System.Collections.Generic;
using System.Security.Claims;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using Eventures.App.Data;

namespace Eventures.UnitTests
{
    public class TestData
    {
        public ApplicationDbContext DbContext { get; private set; }
        public EventuresUser UserMaria { get; private set; }
        public Event EventSoftuniada { get; private set; }
        public Event EventOpenFest { get; private set; }

        public TestData()
        {
            // Create an in-memory database for testing
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseInMemoryDatabase("Eventures-MemoryDb-" + DateTime.Now.Ticks);
            DbContext = new ApplicationDbContext(optionsBuilder.Options);

            this.UserMaria = new EventuresUser()
            {
                Id = "25ab6879-32b1-4b44-b0f1-49e85a6418c9",
                UserName = "maria",
                Email = "maria@gmail.com",
                FirstName = "Maria",
                LastName = "Green",
            };
            DbContext.Add(this.UserMaria);
            this.EventSoftuniada = new Event()
            {
                Id = 1,
                Name = "Softuniada 2021",
                Place = "Sofia",
                Start = DateTime.Now.AddMonths(3),
                End = DateTime.Now.AddMonths(3),
                TotalTickets = 200,
                PricePerTicket = 12.00m,
                OwnerId = UserMaria.Id
            };
            DbContext.Add(this.EventSoftuniada);
            this.EventOpenFest = new Event()
            {
                Id = 2,
                Name = "OpenFest 2021",
                Place = "Online",
                Start = DateTime.Now.AddDays(200),
                End = DateTime.Now.AddDays(201),
                TotalTickets = 5000,
                PricePerTicket = 0,
                OwnerId = UserMaria.Id
            };
            DbContext.Add(this.EventOpenFest);
            DbContext.SaveChanges();
        }

        public static void AssignCurrentUserForController(
            Controller controller, EventuresUser user)
        {
            var userClaims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.FirstName + " " + user.LastName),
            };
            var userIdentity = new ClaimsIdentity(userClaims, "Password");
            var userPrincipal = new ClaimsPrincipal(userIdentity);
            controller.ControllerContext = new ControllerContext()
            {
                HttpContext = new DefaultHttpContext() { User = userPrincipal }
            };
        }
    }
}
```

The above class defines a **testing database layer** for the Web app under test. 

It uses in-memory database to implement the **ApplicationDbContext** class and the entity objects in it: one **EventuresUser** and two **Event** objects. 

It also defines a method, used to assign a testing user in the **HttpContext** of given controller class to mock the user-related functionality.



[/slide]


[slide hideTitle]

# Testing EventsController.All()

Now we have a mock object for the database layer, so we are ready to test the **EventsController** class. 

Let’s start with the **action All()**. This is how we can test its functionality. We shall use the classical AAA pattern:

- **Arrange** the input data and input conditions: create a **database mock**, create a **controller class**, using the mocked database.

- **Act**: invoke the controller action under test.

- **Assert** that the controller action returns the expected view, together with the view model, holding the events from the mocked database.

This is a sample implementation of the **unit test**:

[image assetsSrc="Unit-Testing-NUnit-Homework(26).png" /]

The **mocked database** holds two events, called *Softuniada* and *Open Fest*. The controller action is expected to return all events. 

We have two events in the mocked database, so we assert they are returned correctly.



[/slide]

[slide hideTitle]

# Testing EventsController.Create()

The **Create()** action, which displays the "**Create New Event**" form looks like this:

[image assetsSrc="Unit-Testing-NUnit-Homework(27).png" /]

It can be tested like we did in our previous unit test:

[image assetsSrc="Unit-Testing-NUnit-Homework(28).png" /]



[/slide]


[slide hideTitle]

# Testing EventsController.Create(EventCreateBindingModel)

The controller action, which handles the HTTP POST request from the "Create New Event" form looks like this:

[image assetsSrc="Unit-Testing-NUnit-Homework(29).png" /]

It depends on **this.ModelState** (validation errors) on **this.dbContext** (the **database**) and on **this.User** (the **currently logged-in user**). We need to mock all of them in the unit tests.

We shall have **two unit tests**: valid and invalid event data.

Let’s start with **valid data**. This is how we **prepare the external dependencies** and **arrange the input data** and entrance conditions:

[image assetsSrc="Unit-Testing-NUnit-Homework(30).png" /]

This is how we **act**: invoke the controller action:

[image assetsSrc="Unit-Testing-NUnit-Homework(31).png" /]

Finally, we **assert** that the new event is inserted in the mocked database and the returned result is correct:

[image assetsSrc="Unit-Testing-NUnit-Homework(32).png" /]

The controller action should **insert the new event in the database** and redirect to action “All”. 

The unit test asserts that the database holds one more event and this is the event, that was just inserted.

Now let’s test the second scenario: attempt to **create event with invalid data**. This is how we can **arrange** input data and entrance conditions, matching the invalid data, passed to the MVC controller:

- We prepare event data, with missing “Name”.
- We add a validation error in the controller’s **ModelState**.

This is a sample code:

[image assetsSrc="Unit-Testing-NUnit-Homework(33).png" /]

Now we can invoke the controller action and **assert** that it returns the default view with empty model (**null**):

[image assetsSrc="Unit-Testing-NUnit-Homework(34).png" /]



[/slide]

[slide hideTitle]

# Testing EventsController.Delete()

Following the previous examples, implement the following unit test scenarios:

- **Test_Delete_ValidId()** – test the **Delete(id)** action with a valid event id, e. g. 1 and assert that the view model holds the event with id=1.

- **Test_Delete_InvalidId()** – test the **Delete(id)** action with an invalid event id, e. g. -1 and assert that the view model is **null** (no event).

- **Test_Delete_PostValidData()** – test the **Delete(model)** action (HTTP POST) with a valid event (e. g. **model.Id=1**) and assert that the specified event is
deleted successfully from the mocked database and the returned result is “redirect to action All”.

- **Test_Delete_PostInvalidData()** – test the **Delete(model)** action (HTTP POST) with an invalid event (e. g. **model.Id=-1**) and assert that the database stays unmodified, and the returned result is the default view.


[/slide]