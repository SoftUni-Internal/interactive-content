[slide hideTitle]
# Helpers

Helpers are objects that provide built-in functionalities that help to enhance a view.

This is a list of available helper objects and their functions:

|**Helper Objects**| **Functions**|
|---|---|
|`#dates`| Utility methods for working with data and time.|
|`#calendars`| Similar to `#dates`, used for java.util.Calendar objects.|
|`#numbers`| Utility methods for formatting numeric objects.|
|`#strings`| Utility methods for string and text objects.|
|`#objects`| Utility methods for Java Object class in general.|
|`#bools`| Utility methods for boolean evaluation.|
|`#arrays`| Utility methods for arrays.|
|`#lists`| Utility methods for lists.|
|`#sets`| Utility methods for sets.|
|`#maps`| Utility methods for maps.|
|`#aggregates`| Utility methods for creating aggregates on arrays or collections.|
|`#messages`| Utility methods for obtaining externalized messages inside variables expressions.|

[/slide]

[slide hideTitle]
# Date Object

## Custom Format
In a controller class, we can have GET methods, within the mapping URL. 

We can also add attributes to the model, and return the view.

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    model.addAttribute("myDate", new Date());
    return "whiskey-home";
}
```
Here we add an attribute "myData", which is a `new Data()` object.

Into the view, `myData` could be formatted by using the `#dates` object with its utility method:

```js
// whiskey-home.html

<div th:text="${#dates.format(myDate,'yyyy-MMM-dd')}"></div>
```
The `#dates` is ready to use object, available in Thymeleaf, which has utility methods.

In this example the `.format()` utility method is used, to format the `myData` object into the more presentable format.

As a result of invoking this method, the `myData` object will be presented to the user in the following format: 

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-1.png" /]

## Week Name of Day

By using the same controller, we can chose a different utility method, and present the `myDate` in another format:

```js
<div th:text="${#dates.dayOfWeekName(myDate)}"></div>
```

In this example the invoked utility method is `.dayOfWeekName()`, which will present to the user only the day of the week in text format:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-2.png" /]

## List Days

It is still the same controller, but now `myDates` is a collection of dates in a specific format:

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    // List of dates -> 2016-12-12, 2017-04-09 -> yyyy-MM-dd
    model.addAttribute("myDates", myDates);
    return "whiskey-home";
}
```

The `#dates` object goes as far as it can process a collection:

```js
// whiskey-home.html

<div th:text="${#dates.listDay(myDates)}"></div>
```
In this example, `myDates` is a collection of dates, and with invoking the utility method `.listDay()`, process the collection by only taking the days.

The result is present to the user into the array of days:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-3.png" /]

## Get Current Date

The functionality of this controller is slightly different:

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage() {
    return "whiskey-home";
}
```
Here the route stays the same, but the controller returns only the view without any data.

Into the view the `#dates` object can create a date:

```js
// whiskey-home.html

<div th:text="${#dates.createNow()}"></div>
```

The utility method is `.createNow()` returns the current date into the following format:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-4.png" /]

It is of course possible to create new data and format it as `#dates.format(createNow(), 'yyyy-MMM-dd')`, and return the current data into the desire format.

## LocalDate and Thymeleaf

In Java 8 a new date-time object [LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html) is created, which is viewed as year-month-day and does not store time-zone.

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    model.addAttribute("myDate", LocalDate.now());
    return "whiskey-home";
}
```
The controller is almost identical, but `LocalDate.now()` is added to the "myDate" attribute.

Into the view we can format "myDate" as follows:

```js
// whiskey-home.html

${#temporals.format(myDate, 'dd-MMM-yyyy')}
```
The `#temporals` is used to invoke the `.format()` method and format the date.

But to use LocalDate we need to add new dependency:

```js
<dependency>
   <groupId>org.thymeleaf.extras</groupId>
   <artifactId>thymeleaf-extras-java8time</artifactId>
   <version>3.0.4.RELEASE</version>
</dependency>
```

[/slide]

[slide hideTitle]
# Strings Operations

When the controller set the value of a string to null:

## Is Empty
```java
//WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    String whiskeyNull = null;
    model.addAttribute("whiskey", whiskeyNull);
    return "whiskey-home";
}
```

We can check in the controller if the string is empty:

```js
// whiskey-home.html

<div th:text="${#strings.isEmpty(whiskey)}"></div>
```
Into the view the `.isEmpty()` method returns **true** or **false**, and it does not metter if the string is set to "null" or "String.Empty".

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-5.png" /]

## Substring

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    String whiskey = "Jack Daniels";
    model.addAttribute("whiskey", whiskey);
    return "whiskey-home";
}
```
This is a similar controller as above, but instead, an empty string returns "Jack Daniels".

```js
//whiskey-home.html

<div th:text="${#strings.substring(whiskey, 0, 4)}"></div>
```
Into the view the `.substring()` method is used, which receive three parameters:
- Current string
- Start index
- End index

As a result, the string is sliced from the first letter to the fourth letter exclusively:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-6.png" /]

## Join

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    model.addAttribute("whiskeys", whiskeys);
    // Jack Daniels, Jameson
    return "whiskey-home";
}
```
In this example, a list of strings is passed as an attribute to the view.

```js
//whiskey-home.html

<div th:text="${#strings.listJoin(whiskeys, '-')}"></div>

```
It is possible to display the collection by using the `.listJoin()` method, which receives two parameters:

- Current string
- The delimiter

The `.listJoin()` allowed to format a collection into a single string, separated by chosen delimiter:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-7.png" /]

## Capitalize
```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    String whiskey = "jameson";
    model.addAttribute("whiskey", whiskey);
    return "whiskey-home";
}
```
In this example, a single string is passed as an attribute to the view.

```js
//whiskey-home.html

<div th:text="${#strings.capitalize(whiskey)}"></div>

```
It is possible to display the string by using the `.capitalize()` method, which will set the first character to capital letter:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-8.png" /]
[/slide]

[slide hideTitle]
# Numbers Processing

Format number to the chosen decimal point is very helpful when displaying an amount of money to the user.

## Format

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    double num = 3.14159;
    model.addAttribute("num", num);
    return "home";
}

```
In this example, a number is passed as an attribute to the view.

```js
//whiskey-home.html

<div th:text="${#numbers.formatDecimal(num, 1, 2)}"></div>

```

We can format this number to the desired amount of numbers after the decimal point, in this case, two:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-9.png" /]

## Sequence

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    return "home";
}

```

```js
//whiskey-home.html

<span th:each="number: ${#numbers.sequence(0,2)}">
    <span th:text="${number}"></span>
</span>

```
In this example we can generate a sequence of numbers by using `#numbers.sequence()`, which receives two parameters:
- First number
- Last number

As a result, a sequence of numbers is displayed to the user:

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-10.png" /]

## Sum

```java
// WhiskeyController.java

@GetMapping("/home")
public String getHomePage(Model model) {
    double[] whiskeyPrices = new double[] {
        29.23,
        21.22,
        33.50
    };
    model.addAttribute("whiskeyPrices", whiskeyPrices);
    return "whiskey-home";
}

```
In this example, an array number is passed as an attribute to the view.

```js
//whiskey-home.html

<div th:text="${#aggregates.sum(whiskeyPrices)}

```

When we use `#aggregates.sum()`, and as an argument, we pass an array of numbers, as a result the sum of the numbers into the array will be received: 

[image assetsSrc="Java-Spring-Fundamentals-Thymeleaf-and-Validation​-11.png" /]
[/slide]

[slide hideTitle]
# Thymeleaf in JavaScript

It is also possible to parametrize scrips, and passing data dynamically to JavaScipt variables into the view.

This way we can create cline-side dynamic applications as well as server-side dynamic applications.

```java
// JSController.java

@GetMapping("/js")
public String getMapPage(Model model) {
    String message = "Hi JS!";
    model.addAttribute("message", message);
    return "page";
}
```

In this example, a string is passed as an attribute to the view.

```js
//script.js

<script th:inline="javascript">
   let message = [[${message}]];
<script>

```
Here the "message" variable is interpolated onto the server, embedded into the script, and assign to a JavaScript variable, which will be dynamically rendered to the client.

[/slide]