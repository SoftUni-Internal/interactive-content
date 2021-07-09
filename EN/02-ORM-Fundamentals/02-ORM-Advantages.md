# Advantages and Disadvantages

[slide hideTitle]
# ORM Advantages

Using **ORMs** has multiple advantages, including:

- **Productivity**
  * **faster development** due to removed **repetitive code**
  * **automatically-generated** SQL queries

- **Maintainability**
  * **ORMs** require **fewer lines** of code, which significantly **improves maintainability**
  * the **object model** is easier to **modify**

- **Performance**
  * they use **lazy loading**, which loads resources only when **needed**
  * they allow **caching** - storing rarely modified data in the **memory**

- **Database vendor independence**
  * being independent of the database makes **changing** it easier
  * it could be **configured outside the application**

[/slide]

[slide hideTitle]
# ORM Disadvantages

Even though they are powerful, **ORMs** have several disadvantages:

- **Reduced performance**
  * when **SQL** queries become **more complex**, the **auto-generated** queries could be inaccurate or less effective
  * **overhead** can also slow down an application

- **Reduces flexibility**
  * some operations cannot be performed using **ORMs**
  * searching for an alternative increases **development time** and reduces **flexibility**

- **Losing understanding**
  * by using **auto-generated** queries, the developer **loses control** and eventually - **understanding** of the application flow

[/slide]
