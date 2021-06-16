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

- The **path** to the file we are reading from

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