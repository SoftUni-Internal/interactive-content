# Database Models: 10 Pts

[slide hideTitle]
# Database Models

The **Database** of the **Theater** application needs to support **two entities:**

## User
- Username: string (required), unique

- Password: string (required)

- Liked Plays: a collection of Plays 

## Play

- Title: string (required), unique

- Description: string (required), max length of 50 symbols,

- Image Url: string (required),

- Is Public: boolean, default - false,

- Created at: Date or String, required

- Users Liked: a collection of Users

Implement the entities with the **correct datatypes.**

[/slide]

