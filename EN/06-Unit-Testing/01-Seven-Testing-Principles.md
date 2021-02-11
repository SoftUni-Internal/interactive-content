[slide hideTitle]

# Seven Testing Principles

There are **fundamental** testing principles which helps the testing teams to make the process of testing software more effective.

Lets see what is the concept behind testing:

## 1.Testing is context depedent:

Different kind of sites are tested differently.

For example: 

We can have different domains like **Banking**, **Marketing**, **Advertisement** and much more.

Each of these domains will be tested differently based on their **requirements**, **functions**, **different techniques** and etc...

The same goes for the software applications.

## 2.Exhaustive testing is impossible:

Simply we cannot test everything. 

We have almost **infinite** combinations of **input data**.

Instead of this, we can test a **few combinations** based on **priority** using different techniques.

Exhaustive testing will take unlimited efforts and most of those efforts are ineffective.

It is recommended to test input data using different methods like **Boundary Value Analysis** or **Equivalence Partitioning**.

## 3.Defect Clustering:

Most of the defects that are found during **pre-release testing** are related to a small numbers of module.

The reason behind is that the modules may be **too complex**. 

Coding related to such modules is complicated.

## 4.Early Testing:

The later a bug is found - the more it costs!

The **costs** involved in fixing defects at the start of the projects are cheaper compared to those found during the later stages of testing.

[image assetsSrc="Unit-Testing-Example.png" /]

## 5.Pesticide Paradox

The Pesticide Paradox in testing, states that repeating **the same tests** over and over again eventually will stop detecting new defects or bugs.

We can overcome this problem by writing new tests and adding new test data.

## 6.Testing shows presence of defects:

It is important to understand that even **after testing** we cannot state that our product is **100% defect free**.

However efficient testing techniques **reduces** the chance of undiscovered bugs/defects.

## 7.Absence-of-errors fallacy:

Sometimes our software is tested against wrong requirements.

Finding and fixing defects does not help when:

- Our system built is unusable

- When our software does not fulfill the users needs and expectations

[/slide]