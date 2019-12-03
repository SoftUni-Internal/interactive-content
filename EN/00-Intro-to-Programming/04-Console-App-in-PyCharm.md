[slide]
# Console App in PyCharm
We already have PyCharm and we can start it. 

We can create a new project by clicking `[Create New Project]`
[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-programming-create-new-project.png"/]

If an old project is opened, the way we create a new console project is: `[File]` → `[New Project]`.

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/new-project-pycharm.png"/]

We set **a meaningful name** to our program, for example `Hello`:

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-programming-set-name.png"/]

PyCharm is going to create for us **an empty Python project**, in which we can create Python files. 
[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-ptogramming-new-py-file.png"/]

[/slide]

[slide]
# Writing the Program Code
After creating the **.py** file we can start writing the code. 

The code of the program is written **inwards**, as this is a part of shaping up the text for convenience during a review and/or debugging.

We have to keep in mind that Python uses indentation, which we are going to cover later.

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-programming-blank-file.png"/]

Write the following command:
```python
print('Hello Python')
```

Here is how our program should look like in PyCharm:

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-programming-hello-result.png"/]

The message `Process finished with exit code 0` signifies that there are no errors in our code.

The command `print('Hello Python')` in the Python language means to execute printing (the text message `Hello Python`, which we should surround by quotation marks, in order to clarify that this is a text. 

By default python’s print() function ends with a newline. If we want to stay on the same line, we can use the print() function with a parameter `end`.
```python
print('Hello Python', end=' ')
```

[/slide]

[slide]
# Starting the Program
To start the program, press `[Ctrl + Shift + F10]`. 

The result will be written on the console (PyCharm has its own console):

[image src="https://github.com/AtanasovAtanas/pb-interactive-python/blob/master/assets/intro-to-programming-console.png"/]

Notice that we start it with `[Ctrl + Shift + F10]`, and `[Shift + F10]` is used to run the program.

Actually, the output from the program is the following text message:
```
Hello Python
```

[/slide]

[slide]
# Video

[vimeo-video videoId="351878876" startTimeInSeconds="3984" endTimeInSeconds="4584" /]

[/slide]