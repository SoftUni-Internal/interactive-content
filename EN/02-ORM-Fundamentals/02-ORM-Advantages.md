# ORM Advantages & Disadvantages

[slide hideTitle]
# ORM Advantages

**ORMs** are a powerful tool.

These are some of the categories where they really shine:

- **Productivity**
  - **Faster development** due to removed **repetitive code**
  - **Automatically-generated** SQL queries

- **Maintainability**
  - **ORMs** require **fewer lines** of code, which significantly **improves maintainability**
  - The **object model** is easier to **modify**

- **Performance**
  - They use **lazy-loading**, which loads resources only when **needed**
  - The allow **caching** which saves data that **does not change often** in the **memory**

- **Database vendor independence**
  - They **do not depend** on the database. **Changing the database** is, therefore, **easier**
  - Can be **configured outside the application**

[/slide]

[slide hideTitle]
# ORM Disadvantages

Even though they are powerful, **ORMs** underperform in certain areas.

- **Reduced performance**
  - When **SQL** queries become **bigger** and **more complex**, the **auto-generated** queries become a **double-edged** sword
  - **Overhead** can also slow down an application

- **Reduces flexibility**
  - Not all operations are **possible** to perform with **ORMs**. Searching for an alternative increases **development time** and reduces **flexibility**

- **Losing understanding**
  - By using **auto-generated** queries, the developer **loses control** and eventually - **understanding** of what is happening with the queries

[/slide]
