# HTML Forms

[slide]
# Video

[vimeo-video startTimeInSeconds="1515" endTimeInSeconds="2442"]
[stream language="EN" videoId="429002366" default /]
[stream language="RO" videoId="429006590"  /]
[/video-vimeo]

[/slide]


[slide]
# HTML Forms: Action

```
<form action="home.html">
  <input type="submit" value="Go to homepage"/>
</form>
```

In HTML forms the `action` attribute defines where to submit the form data.

Most HTML forms have the `form` tag with some action URL, a set of input fields and a submit button.

The **submit button** sends the form data to the specified URL in the `action` attribute.

You can use relative or full URL:

- Relative URLs are evaluated relative to the current URL, which is loaded in the Web browser

- Full URLs are used to submit the form data to a completely different Web site

You can test this example live at:

[HTML Forms: Action](https://repl.it/@nakov/http-form-example#index.html)


# HTML Forms: Method GET

``` 
<form method="get">  
  Name: <input type="text" name="name">  
  <br /><br />
  <input type="submit" value="Submit">
</form>
```

Forms can specify the HTTP method for sending the form data.

It can be GET or POST.

**GET** sends the form data as a query string in the URL.

And POST sends the form data in the HTTP request body.

The first example consists of the HTML form, shown at the screen.

It has the `method equals GET` attribute.

This is a simple Web form, which has a text input field named `name` and a `submit` button.

The form submits its data to the same page, from which the form is loaded, because it has no `action` attribute.

The form field values are **sent** as sequences of `field=value` tokens after the question mark at the end of the URL, separated from each other by ampersands, and with escaping when needed.

You can test this example live at:

[HTML Forms: Method GET](https://repl.it/@nakov/http-get-example)

[/slide]

[slide]
# HTML Forms: Method POST

``` 
<form method="post">
  Name: <input type="text" name="name">
    <br /><br />
  <input type="submit" value="Submit">
</form>

```

The next example consists of this HTML form on the screen.

It is the same form from the previous example, but now it uses `method equals POST`.

It's a simple form with a text field named `name` and a `submit` button.

The form submits its data to the same page, without specifying the `action` attribute.

If we run the form, fill the name `Peter` in the text field and submit the form, it will send the following HTTP request:

- POST - the page relative URL, space, HTTP, slash 1 point 1.

Some headers like the content type, which says `URL-encoded form data`.

And the HTTP request body **holds** the submitted form data, which is URL-encoded as `name=Peter`

You can test this example live at:

[HTML Forms: Method POST](https://repl.it/@nakov/http-post-example)


# URL Encoded Form Data – Example

```
<form method="post">
  Name: <input type="text" name="name"/> <br/>
  Age: <input type="text" name="age"/> <br/>
  <input type="submit" />
</form>
```

We have an HTML form using method `POST`, with two input text fields named `name` and `age` and a submit button.

If we run the form and enter `Maria Smith` in the `name` field and `19` in the `age` field, the form submission will create the following HTTP request:

Note how the form data is encoded: `name=Maria+Smith&age=19`.

This is the **standard URL encoding** used to encode the HTML form fields and URLs.

This encoding can be used for text and other data fields, but it does not support file upload fields.

You can test this example live at:

[URL Encoded Form DataT](https://repl.it/@nakov/http-post-example)

[/slide]

