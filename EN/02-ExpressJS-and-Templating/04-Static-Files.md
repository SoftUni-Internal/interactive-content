Static Files
[slide hideTitle]

Static Files
In order to serve static files like images, CSS and JavaScript files, we use the express.static() function, built into ExpressJS:

app.use(express.static('public'))

You can use the above code to serve images, css or any other static file from a directory with name "public".

The static() middleware function accepts the relative path to the directory in which static files reside.

The path provided to the function is relative to the directory in which the Node.js process is executed.

In case you run the Express app from another directory, it is safer to use an absolute path:

app.use('/static', express.static(path.join(__dirname, 'public')))

Configuring your app to serve static files would make them available at the root path by default.

For example: http://localhost:3030/catpic.jpg

You can create a virtual path and have the static files served through another route `app.use('/files', express.static('public')).

Now your cat pictures will be accessible through a path such as http://localhost:3030/files/catpic.jpg

[/slide]
