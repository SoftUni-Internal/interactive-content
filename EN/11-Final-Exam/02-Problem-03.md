[slide]

# 3. Model Definition

## Description

There are 4 main models that the **Airline database** application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:


### Town

- **id - integer** number, **primary identification field**.

- **name** - a **char sequence** with **minimum** length **2**. The **name** is **unique**.

- **population** - a **number** (must be positive). 

- **guide** - **Long** and **detailed description** of all known places

### Passenger

- **id - integer** number, **primary identification field**. 

- **firstName** - a **char sequence** with **minimum** length **2**.

- **lastName** - a **char sequence** with **minimum** length **2**.

- **age** -  a **number** (**must** be positive).

- **phoneNumber** - a **char sequence** - phone number. 

- **email** - an **email** - (**must** contains ‘@’ and ‘.’ - dot). The **email** of a **person** is **unique**.
    - **Note:** Passenger has a relation with Town

### Plane

- **id - integer** number, **primary identification field**.

- **registerNumber** - a **char sequence** (**minimum** length **5**). The register **number** is **unique**.

- **capacity** - **number** of passenger (**must** be positive).

- **airline** - name of the airline company with **min length** of **2**.

### Ticket

- **id - integer** number, **primary identification field**.

- **serialNumber** - a combination from letters and numbers with **minimum length** of **2** . 
    - The serial numbers are **unique**.

- **price** - a price of the ticket. **Must** be **positive**.

- **takeoff** -  а **date** and **time** of plane taking off.
    - **Note:** Tickets have two **foreign keys** to Town, because of **fromTown**(Town) and **toTown**(Town)
    - **Note2:** Tickets have relations with Towns, Passengers and Planes.  

**NOTE:** Name the entities and their class members, **exactly** in the **format stated** above. Do not name them in snake case with the dashes, of course. 

[image assetsSrc="Final-Exam(11).png" /]

[/slide]