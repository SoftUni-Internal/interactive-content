# FS Module

[slide]

# Working with the File System

The Node.js file system module allows you to work with the file system.

To include the File System module, use the `require()` method.

```
let fs = require('fs');
```

Commonly useed functions for the File System module:
- Read files
- Create files
- Update files
- Delete files
- Rename files

All these functions can be **synchronous** or **asynchronous**.

Example:

```
let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);
```
```
let data = fs.readFile('./package.json', 'utf8', (err, data) => {
    console.log(data);
});
```

[/slide]

[slide]

# List files in a directory

The `readdirSync()` method is used to synchronously read the contents of a given directory.

The method returns an array with all the file names or objects in the directory. 

The options argument can be used to change the format in which the files are returned from the method.

The method accepts two parameters:

The first one is the **path** to the file we are reading from.

The second one is **encoding**. It is a string value which specifies which encoding would be used for the filenames given to the callback argument. The default value is "utf8".

The third one is a callback function.

```
let fs = require('fs');
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);
```
If we use the `fs.readdir()` method then the content of a given directory will be read asynchronously. 

It returns an array of String, Buffer or fs.Dirent objects that contain the files in the directory.

```
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

[slide]

# Create a directory

To create a directory synchronously use the `mkdirSync()` nethod.

```
fs.mkdirSync('./myDir');
```

Use the `mkdir()` method to create a directory asynchronously.

```
let fs = require('fs');
fs.mkdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]

[slide]

# Rename file or directory

To rename a file or a directory synchronously use the `renameSync()` method.

```
fs.renameSync('./oldName', './newName');
```

Use the `rename()` method to rename a file or a directory asynchronously.

```
let fs = require('fs');
fs.rename('./oldName', './newName', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]

[slide]

# Write to a file

When writing data to a file we need to specify the path to the file first.

After that we can use synchronous or asynchronous methods to write the data to the file.

Use the `writeFileSync()` or `writeFile()` method.

Example:

```
let fs = require('fs');
let filePath = './data.txt';
let data = 'Some text';
fs.writeFile(filePath, data, err => {
    If(err){
        console.log(err);
        return;
    }
})
```

[/slide]

[slide]

# Delete a file

In case we want to delete a file use the `unlinkSync()` or `unlink()` method.

```
let fs = require('fs');
fs.unlink('./target.txt', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

Similarly we can delete a directory using the `rmdirSync()` or `rmdir()` method.

```
let fs = require('fs');
fs.rmdir('./myDir', err => {
    if (err) {
        console.log(err);
        return;
    }
});
```

[/slide]