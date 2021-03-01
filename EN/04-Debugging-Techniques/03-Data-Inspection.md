# Data Inspection

[slide hideTitle]

# IntelliJ Data Inspection

- Debugging is all about **data inspection**
    - what are the local **variables**
    - what is in **memory**
    - what is the **code flow**
    - in general - What is the state of the process right now and how did it get there
- As such, the ease of data inspection is key to quick resolution of problems

[/slide]

[slide hideTitle]

# Data Inspection

- IntelliJ offers great data inspection features
    - **Variables**
    - **Watches**
    - **Memory**
    - **Overhead**

[image assetsSrc="debugging-techniques-example(3).png" /]

[/slide]

[slide hideTitle]

# Variables and Watches Windows

- Allows you to inspect various states of your application
- Several different kinds of "predefined" watches windows
- "Custom" watches windows also possible
    - contains only variables that you choose to add
    - right click on the variable and select "Add to Watches"
    - write the variable name in Watches window

[/slide]

[slide hideTitle]

# Evaluate Expression Window

- Enables to evaluate expressions and code fragments in the context of a stack frame
- Also evaluate operator expressions, lambda expressions, and anonymous classes
- Shortcut – Alt + F

[image assetsSrc="debugging-techniques-example(4).png" /]

[/slide]


[slide hideTitle]

# Finding a Defect

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

- Your ego tells you that your code is good and doesn't have a defect 
even when you've seen that it has
- How "psychological set" contributes to debugging blindness
    - people expect a new phenomenon to resemble similar phenomena they've seen before
    - do not expect anything to work "by default"
    - do not be too devoted to your code – establish psychological distance




[/slide]