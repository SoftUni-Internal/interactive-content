[slide]

# 3. Model Definition

## Description

There are 3 main models that the **Football info** database application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:


### Picture

- **id** – **integer** number, **primary identification field**.
- **url** – a **string (required)**.


### Team

- **id** – **integer** number, **primary identification field**. 
- **name** – a **string (required)** between 3 and 20 characters.
- **picture** – a **Picture entity (required)**.

### Player

- **id** – **integer** number, **primary identification field**.
- **first_name** – a **string (required)**.
- **last_name** – a **string (required)** between 3 and 15 characters.
- **number** – a Integer **(required)** between 1 and 99.
- **salary** – a **BigDecimal (required)** min 0.
- **position** – an **ENUM (required)**.
    - **GK, CD, RB, LB, CM, DM, CDM, LM, RM, ST, CF, RW, LW**.
- **picture** – a **Picture entity (required)**.
- **team** – a **Team entity (required)**.

**NOTE:** Name the entities and their class members, **exactly** in the **format stated** above. Do not name them in snake case with the dashes, of course. 

But if a field is specified as **first_name**, you are to name it **firstName**.

### Relationships

- The Football info decided to give you a little hint about the more complex relationships in the database, so that you can implement it correctly.

- One **Team** may have only one **Picture**, and one **Picture** may have many **Teams**.

- One **Team** may have many **Players**, and one **Player** may be appointed to only one **Team**.

- One **Player** may have only one **Picture**, and one **Picture** may have many **Players**.

[image assetsSrc="Exam-Preparation(11).png" /]

[/slide]