# Testing

[slide]
# Video

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="446753743" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]
[/slide]

[slide]
# What Is Testing?

Testing is a software check to see whether it **meets the requirements**, or whether there are bugs. 

This is the process of analyzing the software to find problems, defects it is testing. 

It can be done **manually**, it can be done by **QA**, the **marketing director** or **all together**. 

Anyone can find a bug, even the end-user, but it is best for it to be found by the team. 

We check if the features are implemented correctly and if they do the work they are supposed to do.

These are the **main test activities**:

## Planning and Control

### Test Planning

Test planning involves producing a document that describes an overall approach and test objectives. 

It involves **reviewing** the test basis, **identifying** the test conditions based on analysis of test items, **writing test cases**, and Designing the test environment. 

Completion or exit criteria must be specified so that we know when testing (at any stage) is complete.

**Puprose**
  * To determine the **scope** and **risks** and identify the objectives of testing;
  * To determine the **required test resources** like people, test environments etc;
  * To schedule **test analysis** and **design tasks**, test implementation, execution and evaluation.

### Control

Control is the activity of comparing actual progress against the plan and reporting the status, including deviations from the plan. 

It involves taking actions necessary to meet the mission and objectives of the project.

## Analysis and Design

Test analysis and Test Design has the following major tasks:
* To review the test basis;
* To identify test conditions;
* To design the tests;
* To design the test environment set-up and identify the required infrastructure.

## Implementation and Execution

Test execution involves actually running the **specified test** on a **computer system** either manually or by using an automated test tool. 

It is a Fundamental Test Process in which actual work is done.

Test implementation has the following **major task**:

* To develop and prioritize test cases by using techniques;
* To create test suites from the test cases for efficient test execution;
* To re-execute the tests that previously failed in order to confirm a fix;
* To log the outcome of the test execution;
* To compare actual results with expected results.

## Evaluating Exit criteria and Reporting

Evaluating exit criteria is a process defining when to **stop testing**. 

It depends on the coverage of code, functionality, or risk. 

Basically, it also depends on **business risk**, cost, and time and varies from project to project. 

Exit criteria come into the picture, **when**:

* Maximum test cases are executed with certain pass percentage;
* Bug rate falls below a certain level;
* When we achieve the deadlines.

Evaluating exit criteria has the following **major tasks**:

* To assess if more test is needed or if the exit criteria specified should be changed;
* To write a test summary report for stakeholders.

## Test Closure activities

Test closure activities are done when the software is ready to be delivered. 
The testing can be closed for other reasons also like:

* When a project is ** canceled**;
* When some target is **achieved**;
* When a maintenance release or update is **done**.
[/slide]

[slide]
# Software Requirement Specifications

A software requirements specification (**SRS**) is a document that describes what the software **will do** and how it **will be expected** to perform. 

It also describes the functionality the product needs to fulfill all stakeholders (business, users) needs.

A typical SRS includes:

* A purpose;
* An overall description;
* Specific requirements.

The best **SRS documents** define how the software will interact when embedded in hardware — or when connected to other software. 

Good SRS documents also account for real-life users.

## Why Use an SRS Document?

A software requirements specification is the **basis for your entire project**. 

It lays the framework that every team involved in development will follow.

It's used to provide **critical information** to multiple teams — development, quality assurance, operations, and maintenance. 

This keeps everyone on the same page.

Using the SRS helps to ensure **requirements are fulfilled**. 

And it can also help you make decisions about your product's lifecycle — for instance when to retire a feature.

Writing an SRS can also minimize overall development time and costs. 

Embedded development teams especially benefit from using an SRS.
[/slide]

[slide]
# Test Process
[image assetsSrc="test-process.png" /]
[/slide]

[slide]
# Test Control

Test control is about **guiding** and **corrective actions** to try to achieve the best possible outcome for the project. 

The specific guiding actions depend on what we are trying to control.

For example:

* Monitoring of the test activities;
* Comparing with the plan;
* Reporting status of deviations from the plan;
* Taking actions for correction;
* Updating the test plan according to the feedback.
[/slide]

[slide]
# Test Plan

Test plan is a document describing the **scope**, **approach**, **resources** and **schedule** of intended test activities. 

It identifies amongst others test items, the features to be tested, the testing tasks, who will do each task, degree of tester independence, the test environment, the test design techniques, and entry and exit criteria to be used, and the rationale for their choice, and any risks requiring contingency planning. 

It is a **record** of the test planning process.
[/slide]

[slide]
# Test Analysis and Design

Test Analysis is the **process** of looking into **test artifacts** to base your test conditions/test cases. 

It is also called **Test Basis**.

The source from which you derive test information could be:

* SRS (Software Requirement Specification);
* BRS (Business Requirement Specification);
* Functional Design Documents.
[/slide]

[slide]
# Test Case

A test case describes an input, action, or event and an expected response, to determine if a feature of a software application is working correctly. 

A test case may contain particulars such as:
- test case identifier,
- test case name, objective,
- test conditions/setup,
- input data requirements,
- steps,
- expected results. 

The level of detail may vary significantly depending on the organization and project context.

# Test Case Example:

[image assetsSrc="test-case-example.png" /]
[/slide]

[slide]
# Test Execution

Test execution is the process of **executing the code** and comparing the **expected** and **actual** results. 

Following factors are to be considered for a test execution process:

* Based on risk, select a subset of a test suite to be executed for this cycle.
* Assign the test cases in each test suite to testers for execution.
* Execute tests, report bugs, and capture test status continuously.
* Resolve blocking issues as they arise.
* Report status, adjust assignments and reconsider plans and priorities daily.
* Report test cycle findings and status.
[/slide]

[slide]
# Test Exit Criteria

The exit criteria get evaluated at the **end** of the testing cycle and are defined in Test Plan. 

It is the set of conditions or activities which **must be fulfilled** in order to conclude testing.

The Exit criteria define h**ow much testing is enough** and when testing activities can be declared complete. 

Coverage and completion criteria are combined to define exit criteria for testing.
[/slide]

[slide]
# Test Summary Report

The test summary report is a document that contains **summary of test activities** and final test results. 

After the testing cycle, it is very important that you **communicate** the test results. 

And findings to the project stakeholders so that decisions can be made for the software release.

As one of the most important deliverables, the significance of the test summary report is immense in the software development life cycle (**SDLC**). 

Prepared after the completion of the testing process, this report consists of **all the necessary information** related to the process of software testing as well as the results delivered by it.
[/slide]

[slide]
# Static vs Dynamic Testing

## What is Static Testing?
Under Static Testing, **code is not executed**. 

Rather it manually checks the code, requirement documents, and design documents to find errors. 

Hence, the name "static".

The main objective of this testing is to **improve the quality of software products** by finding errors in the **early stages** of the development cycle. 

This testing is also called a Non-execution technique or verification testing.

## What is Dynamic Testing?
Under Dynamic Testing, a **code is executed**. 

It checks for functional behavior of software system, memory/CPU usage, and overall performance of the system. 

Hence the name "Dynamic"

The main objective of this testing is to **confirm that the software product works** in conformance with the business requirements. 

This testing is also called an **Execution technique** or validation testing.

## What is Black Box Testing?
Black box testing is a form of software testing during which the functionality of an application is tested **without looking at the code** or **internal structure**. 

Any test which examines the interface of the application is considered black-box testing. 

There is a wide range of test types that fall under this category of testing, **including**:

* Functional Testing;
* Regression Testing;
* Integration Testing;
* User acceptance Testing.

[/slide]