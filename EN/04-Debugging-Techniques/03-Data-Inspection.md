# Data Inspection

[slide hideTitle]

# IntelliJ Data Inspection

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-20-21-data-inspections-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The most important part of debugging is the **data inspection**.

It is important because we can see the **variables** and what they keep in the **memory**. 

We follow the **code execution flow**.

To have a fast resolution time, we need to have better data inspection.

[/slide]

[slide hideTitle]

# Data Inspection

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-22-intellij-data-inspection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The build-in debugger from **IntelliJ IDEA** gives us the tools to effortlessly **inspect** the **data**.

Some of them are:

- **Variables**

    - allows us to inspect the variables and the arguments of the current frame

- **Watches**

    - tracks variables or expressions at the same time

    - the value will update on every step that the program takes

- **Memory**
 
    - lets us monitor the lifetime of the objects that are on the heap

[image assetsSrc="debugging-techniques-example(3).png" /]

[/slide]

[slide hideTitle]

# Variables and Watches Windows

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-23-variables-and-watches-tabs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Variables** and the **Watches** tabs give us the freedom to inspect the states of the application.

If we want to track something that is not displayed in the **Variables tab**, we can set up a **watch**.

There are several different kinds of "**predefined**" watch windows.

We can **add**, **edit** and **remove** watches.

Also, we can create custom **watches**, which can contain only variables that we choose to add:

- Right-click on the variable and select "**Add to Watches**"

- Write the variable name in the Watches window

[/slide]

[slide hideTitle]


# Evaluate Expression Window

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-24-evaluate-expression-window-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The debugger allows us to evaluate expressions during the debugging session.

This provides us additional information about the program.

From the **evaluate window** we can evaluate **anonymous classes**, **expressions** and etc.

There is a shortcut to access the **evaluation window** - "**Alt + F**".

[image assetsSrc="debugging-techniques-example(4).png" /]

[/slide]


[slide hideTitle]

# Finding a Defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-25-26-finding-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we have found an error, we need to take a few steps to fix it.

The first one is to make the error **predictable**.

After that, we can **collect data** and **analyze** it.

When the data is analyzed, we can try to fix the error.

After we are done, we need to test if it is fixed.

If everything works as expected, we can continue with searching for other errors.

[/slide]

[slide hideTitle]
# Tips for Finding Defects

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-27-28-tips-for-finding-defects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some tips for finding errors:

- For every piece of code, write a unit test
- Write unit tests with good quality
- Use the debugger and the information that it provides
- Look carefully at the code
- Check the classes that have thrown errors before
- Check if there are any changes in the code
- Take a break, if you cannot find anything
- Ask for help

[/slide]

[slide hideTitle]

# Fixing a Defect


When the bug is found, we have to fix it.
 
But before that, we have to understand why the program behaves that way.

After that, it is a good idea to save the original code.

Because if something happens and the code that we have written does not work, we have a back-up.

When the problem is fixed, we need to write a unit test specific to that feature.

If the test runs without a problem, we can continue with fixing other bugs.

[/slide]

[slide hideTitle]
# Psychological Considerations


[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-30-psychological-considerations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The more code we write, the more confidence we have. 

We think that our code does not have any errors, but it probably has.

So when an error appears, we have to look very carefully at the code we have written.

Because the confidence that we have will contribute to **debugging blindness**.

To prevent this from happening, we should not expect anything to work.

No matter how good we think we are, we can still make mistakes, so we have to be very careful.

[/slide]
