# FS Module

[slide hideTitle]

# Working with the File System

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/NodeJS-Streams-And-Utilities-18-25-fs-module-and-working-with-file-system-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Node.js **file system module** allows you to work with files synchronously or asynchronously.

To include it in your code, use the `require()` method.

```js
let fs = require('fs');
```

These are some of the more commonly used methods:
- `.readFile()` - reads data from a file
- `.writeFile()` - writes data to a file
- `.unlink()` - used to delete a file
- `.rename()` - used to rename a file

The following example shows the difference between the synchronous and asynchronous versions of these methods:

```js
// Synchronous
let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);
```
```js
// Asynchronous
let data = fs.readFile('./package.json', 'utf8', (err, data) => {
    console.log(data);
});
```

[/slide]

[slide hideTitle]

# List Files in a Directory

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/fs-reading-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use the `readdirSync()` method to read the contents of a given directory synchronously.

The method returns an array with all the file names or objects in the directory. 

Use the options argument to change the format in which the files are returned from the method.

The method accepts three arguments:

- The **path** to the directory we are reading from

- The **encoding** format, a string value that specifies which encoding would be used for the filenames given to the callback argument

- A **callback** function

Note that the default encoding format is `utf8`.

```js
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```

If we use the `fs.readdir()` method, the content of a given directory will be read asynchronously. 

It returns an array of String, Buffer, or `fs.Dirent` objects that contain the files in the directory.

```js
let fs = require('fs');
let data = fs.readdir('./myDir', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
```

## Using `readFile()` and `readFileSync()`

The `readFile()` and `readFileSync()` methods work in a similar fashion to the previous two, with one notable difference - they are used to **read a single file**, not a directory.

In the following **example**, we create a simple server:

```js
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('dummyFile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end;
    });
}).listen(8080);

console.log('Server is running!');
```

We use the `fs.readFile()` method to read the contents of `dummyFile.html` **asynchronously**.

Using the `writeHead` method, we send a response header to the request.

Then, we send the data using `write`.

`readFile()` accepts three arguments, similarly to `readdir()` - the file **path**, a callback function, and `options`.

The `options` argument can either be of type `Object` or `string`.

If of type `string`, it is used to specify the **encoding**.

As an `Object`, it can specify:

- the `encoding` - like **"utf-8"**, for example
    * has a **default** value of `null`
- a `flag` property - customises the **read/write** permissions of the file
    * defaults to **'r'** (read-only)
- `signal` - allows us to **terminate** an ongoing `readFile` process before completion
    * unavalable in the synchronous version - `readFileSync()` 

Keep in mind that `readFile()` buffers the entire file - this can result in higher memory use.

It is recommended to use `createReadStream()` whenever possible.

[/slide]

[slide hideTitle]

# Create a Directory

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/fs-updating-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You can create a directory with the `mkdir()` or `mkdirSync()` methods.

```js
// Synchronous
fs.mkdirSync('./myDir');
```

```js
// Asynchronous
let fs = require('fs');
fs.mkdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

## Using `appendFile()` and `appendFileSync()`

We use the `appendFile()` and `appendFileSync()` methods when we want to append data to an existing file.

For example, let us say we have a `newFile.txt` with the following **content**:

```
Creating a new file with FS Module
```

If we want to **modify** it, we can use `fs.appendFile`:

```js
const fs = require('fs');

fs.appendFile('newFile.txt', ' Appended text', function(err) {
    if (err) {
        throw err;
    }

    console.log('Updated');
})
```

It can accept up to **four** arguments:

- `path` - the file's name or location, `newFile.txt` in our case
- `data` - the new information we want to append - such as **" Appended text"**
    * can be of type `string` or `Buffer`
- a **callback** function
- `options` - include `encoding`, `mode` and `flag`

After executing the above code, `newFile.txt` looks like this:

```
Creating a new file with FS Module Appended text
```

[/slide]

[slide hideTitle]

# Rename File or Directory

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/fs-renaming-and-deleting-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use the `renameSync()` method to rename a file or a directory synchronously.

```js
fs.renameSync('./oldName', './newName');
```

Use the `rename()` method to rename a file or a directory asynchronously.

```js
let fs = require('fs');
fs.rename('./oldName', './newName', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]

[slide hideTitle]

# Write to a File

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/02.NodeJS-Streams-And-Utilities/fs-writing-files-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When writing data to a file, we need to specify the path to the file first.

After that, we can use synchronous or asynchronous methods to write the data to the file.

Use `writeFileSync()` or `writeFile()` based on what you need.

The following example shows how to use the **asynchronous** method:

```js
let fs = require('fs');
let filePath = './data.txt';
let data = 'Some text';
fs.writeFile(filePath, data, err => {
    if (err) {
        console.log(err);
        return;
    }
})
```

[/slide]

[slide hideTitle]

# Delete a File

In case we want to delete a file, we use `unlinkSync()` or `unlink()`.

```js
let fs = require('fs');
fs.unlink('./target.txt', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

Similarly, we can delete a directory with `rmdirSync()` or `rmdir()`.

```js
let fs = require('fs');
fs.rmdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]