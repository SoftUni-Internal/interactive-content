# Static Files

[slide hideTitle]
# Static Files

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-19-20-static-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In order to serve **static files** like images, CSS and JavaScript files, we use the `express.static()` function, built into ExpressJS:

```js
app.use(express.static('public'))
```

You can use the above code to serve images, css, or any other static file from a directory with the name "public".

The `static()` middleware function accepts the **relative path** to the directory in which static files reside.

The **path** provided to the function is **relative** to the directory in which the Node.js process is executed. 

In case you run the Express app from another directory, it is safer to use an absolute path:

```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

Configuring your app to serve static files would make them available at the root path by default.

For example `http://localhost:3030/catpic.jpg`

You can create a virtual path and have the static files served through another route `app.use('/files', express.static('public')).

Now your cat pictures will be accessible through a path such as `http://localhost:3030/files/catpic.jpg`

[/slide]
