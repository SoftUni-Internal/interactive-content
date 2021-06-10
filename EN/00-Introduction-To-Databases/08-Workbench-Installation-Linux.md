# Workbench Linux

[slide hideTitle]

# Installation Guidelines For Linux

This document consists of guidelines for installing MySQL server.

**Step 1. Install the MySQL Community Server**

Open the terminal and write the following:
- sudo apt update
- sudo apt install MySQL-server
- sudo mysql_secure_installation

After writing the last command, it will ask you for a password. 

This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options.

The first prompt will ask whether you would like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. 

Regardless of your choice, the next prompt will be to set a password for the MySQL root user. 

Enter the password and then confirm a secure password of your choice.

From there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. 

This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.

**Step 2. Install the MySQL Workbench**

In the terminal write the following:
- sudo apt-get install mysql-workbench

If there are any problems, check these links:

https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04

https://linuxconfig.org/install-and-configure-mysql-workbench-on-ubuntu-linux

[/slide]