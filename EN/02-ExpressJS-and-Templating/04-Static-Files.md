# Static Files

[slide]
# Static Files

In order to serve **static files** like images, CSS and JavaScript files, we use the `express.static()` function, built into ExpressJS:

`app.use(express.static('public'))`

The `static()` middleware function accepts the **relative path** to directory in which static files reside.

The **path** provided to the function is **relative** to the directory in which the node process is executed. 

In case you run the Express app from another directory, it is safer to use an absolute path, as follows:

`app.use('/static', express.static(path.join(__dirname, 'public')))`

[/slide]