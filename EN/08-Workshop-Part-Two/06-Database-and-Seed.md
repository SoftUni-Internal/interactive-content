[slide hideTitle]

# Check Entities in The Database

If we want to update our database, we will simply start our project. This will apply our **migrations**. We can open the database, and see the new tables.

[image assetsSrc="43-Check-Tables.png" /]

There is also a **SQL** seed for our database. Inside the **resources** directory, there is the old seed for our database.

From the **downloadable files**, at the start of this part, download the **NEW** seed, and **REPLACE** it with your old file. The file is **data.sql** located in the **W_Resources** folder.

[/slide]

[slide hideTitle]

# Migrate Seed

After we **replace** it open again the **IntelliJ IDE**, and find the **data.sql** file from there. **Right-click** on the file and press
**Run 'data.sql'**.

[image assetsSrc="39-Migrate-Seed.png" /]

This will open a menu asking us which database we want to populate. We want to select our current database **pathfinder**. Click **Run** and then **Apply**.

[image assetsSrc="40-Seed-Settings.png" /]

If everything is fine, there should be no errors on the console. We can go to each table and check if they have data.

[image assetsSrc="41-Confirmation.png" /]

If you are having **errors** here, be sure that you have downloaded the **new** data.sql file, downloaded from the **Instructions and Resources** of this part.

[/slide]
