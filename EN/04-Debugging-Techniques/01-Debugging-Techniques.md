# Introduction to Debugging

[slide hideTitle]

# What is Debugging?

Debugging is the process of locating and fixing or bypassing bugs (errors) in computer program code.

Steps to debug a program are:
- Start with a **problem**
- Isolate the **source** of the problem
- **Fix** it

**Debugging tools** (called **debuggers**) help identify coding errors at various development stages.

[slide]

[slide hideTitle]

# Debugging vs. Testing

- Testing
    - Is about initial detection of errors
- Debugging
    - Means of diagnosing and correcting the root causes of errors that have already been detected.

## Importance of Debugging

- Legacy code
    - You should be able to debug code that is written years ago
- Perfect code is an illusion
    - There are factors that are out of our control
- Deeper understanding of system as a whole

**Intresting fact:** - $60 Billion per year in economic losses due to software defects.

E.g. the Cluster Spacecraft Failure was caused by a bug.

## Debugging Philosophy

**Debugging** can be viewed as one big decision tree.

- Individual nodes represent **theories**
- Leaf nodes represent possible **root causes**
- Traversal of tree boils down to process state **inspection**
- Minimizing time to resolution is **key**
    - Careful traversal of the decision tree
    - Pattern recognition
    - Visualization and ease of use helps minimize time to resolution

[/slide]
