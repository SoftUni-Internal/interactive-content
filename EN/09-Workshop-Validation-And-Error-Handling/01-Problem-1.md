# Validations

[slide]
# User Validations

Before some user register or login, implement the following validations:

-  Username

   -  Should be **unique** \(add `unique: true` property to each **User Model** username\).

   -  Should consist only with **English letters** and **digits**.

   -  Should be at least **5 characters** long.

-  Password

   -  Should consist only with **English letters** and **digits**.

   -  Should be at least **8 characters** long.

-  Re\-Password

   -  Should be the **same** as the given password.

[image assetsSrc="JS-Web-Validation-And-Error-Handling-1.png" /]

[image assetsSrc="JS-Web-Validation-And-Error-Handling-2.png" /]

[/slide]

[slide]

# Cube and Accessory Validations

The **cube** and **accessory** forms also should have some validation:

-  **Name**:

   -  At least **5 characters** long, who could be **English letters**, **digits** and **whitespaces**.

-  **Description**:

   -  At least 20 characters, who could be **English letters**, **digits** and **whitespaces**.

-  **ImageUrl**:

   -  Referring to actual picture \(starts with `http://...` or `https://...`\).

[image assetsSrc="JS-Web-Validation-And-Error-Handling-3.png" /]

[/slide]