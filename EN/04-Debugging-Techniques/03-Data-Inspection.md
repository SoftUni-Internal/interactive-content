# Data Inspection

[slide hideTitle]

# IntelliJ Data Inspection

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-22-intellij-data-inspection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Debugging is all about **data inspection**
    - what are the local **variables**
    - what is in **memory**
    - what is the **code flow**
    - in general - What is the state of the process right now and how did it get there
- As such, the ease of data inspection is key to quick resolution of problems

[/slide]

[slide hideTitle]

# Data Inspection

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-20-21-data-inspections-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- IntelliJ offers great data inspection features
    - **Variables**
    - **Watches**
    - **Memory**
    - **Overhead**

[image assetsSrc="debugging-techniques-example(3).png" /]

[/slide]

[slide hideTitle]

# Variables and Watches Windows

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-23-variables-and-watches-tabs-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Allows you to inspect various states of your application
- Several different kinds of "predefined" watches windows
- "Custom" watches windows also possible
    - contains only variables that you choose to add
    - right click on the variable and select "Add to Watches"
    - write the variable name in Watches window

[/slide]

[slide hideTitle]

# Evaluate Expression Window

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-24-evaluate-expression-window-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Enables to evaluate expressions and code fragments in the context of a stack frame
- Also evaluate operator expressions, lambda expressions, and anonymous classes
- Shortcut – Alt + F

[image assetsSrc="debugging-techniques-example(4).png" /]

[/slide]


[slide hideTitle]

# Finding a Defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-25-26-finding-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Stabilize the error
- Locate the source of the error
    - gather the data
    - analyze the data and form hypothesis
    - determine how to prove or disprove the hypothesis
- Fix the defect
- Test the fix
- Look for similar errors

[/slide]

[slide hideTitle]
# Tips for Finding Defects

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-27-28-tips-for-finding-defects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Use all available data
- Refine the test cases
- Check unit tests
- Use available tools
- Reproduce the error in several different ways
- Generate more data to generate more hypotheses
- Use the results of negative tests
- Brainstorm for possible hypotheses
- Narrow the suspicious region of the code
- Be suspicious of classes and routines that have had defects before
- Check code that's changed recently
- Expand the suspicious region of the code
- Integrate incrementally
- Check for common defects
- Talk to someone else about the problem
- Take a break from the problem


[/slide]

[slide hideTitle]

# Fixing a Defect

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-29-fixing-a-defect-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Understand the problem before you fix it
- Understand the program, not just the problem
- Confirm the defect diagnosis
- Relax
- Save the original source code
- Fix the problem, not the symptom
- Make one change at a time
- Add a unit test that expose the defect
- Look for similar defects

[/slide]

[slide hideTitle]
# Psychological Considerations

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/06-Debugging-Techniques/EN/Java-Advanced-Debugging-Techniques-30-psychological-considerations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Your ego tells you that your code is good and doesn't have a defect 
even when you've seen that it has
- How "psychological set" contributes to debugging blindness
    - people expect a new phenomenon to resemble similar phenomena they've seen before
    - do not expect anything to work "by default"
    - do not be too devoted to your code – establish psychological distance




[/slide]