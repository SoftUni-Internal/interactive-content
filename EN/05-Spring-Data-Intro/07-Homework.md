# Homework: Bookshop System

[slide hideTitle]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/05-Spring-Data-Intro-Homework-Resources.zip) **for this task.**

Create database for a **Bookshop System**. 

This system needs to keep the information about **books**. 

Let us create a class for each of the tables.
-	**Book**:
     *  id
     *  title 
     *  description (optional, accepts very long String values) 
     *  edition_type (**NORMAL, PROMO or GOLD**)
     *  price
     *  copies
     *  release_date (optional)
     *  age_restriction (**MINOR, TEEN or ADULT**)

-	**Author**:
    * id 
    * first name (optional) 
    * last name

-	**Category**:
    * id 
    * name

Assume that everything is mandatory if it is not marked with **(optional)**.

The final schema of the database should look like this:

[image assetsSrc="Spring-data-intro-hw.png" /]

[/slide]

[slide hideTitle]

# Seed Data into the Database

Create a **seedDatabase()** method in the **ConsoleRunner implementation class**. 

Use the provided **files (categories.txt, authors.txt, books.txt)** and import the data from them.

## Importing Books from the `books.txt` file


```java
// TODO: Seed Authors from the authors.txt file
// TODO: Seed Categories from the categories.txt file

BufferedReader booksReader = new BufferedReader(new FileReader("books.txt"));
String line = booksReader.readLine();

while((line = booksReader.readLine()) != null) {
    String[] data = line.split("\\s+");

    int authorIndex = random.nextInt(authors.size());
    Author author = authors.get(authorIndex);
    EditionType editionType = EditionType.values()[Integer.parseInt(data[0])];
    
    SimpleDateFormat formatter = new SimpleDateFormat("d/M/yyyy");
    Date releaseDate = formatter.parse(data[1]);
    int copies = Integer.parseInt(data[2]);
    BigDecimal price = new BigDecimal(data[3]);
    
    AgeRestriction ageRestriction = AgeRestriction.values()[Integer.parseInt(data[4])];
    StringBuilder titleBuilder = new StringBuilder();
    
    for (int i = 5; i < data.length; i++) {
        titleBuilder.append(data[i]).append(" ");
    }
    
    titleBuilder.delete(titleBuilder.lastIndexOf(" "), titleBuilder.lastIndexOf(" "));
    String title = titleBuilder.toString();

    Book book = new Book();
    book.setAuthor(author);
    book.setEditionType(editionType);
    book.setReleaseDate(releaseDate);
    book.setCopies(copies);
    book.setPrice(price);
    book.setAgeRestriction(ageRestriction);
    book.setTitle(title);
    
    // TODO: Add random categories for current book
   
    bookService.save(book);

}
``` 

[/slide]

[slide hideTitle]

## Wrire Queries

Write queries for the following tasks.

### 1. Books After The Year 2000

Get all **books** after the year **2000**. 

Print only their **titles**. 

### 2. Authors With Books Before 1990

Get all **authors** with at least **one book with release date before 1990**. 

Print their **first name** and **last name**. 

### 3. Authors by Books Count

Get all **authors**, ordered by the **number of their books** (descending). 

Print their **first name, last name and book count**.

### 4. Books From George Powell

Get all books from author **George Powell**, ordered by their **release date** (descending), then by **book title** (ascending). 

Print the book's **title, release date and copies**. 

[/slide]