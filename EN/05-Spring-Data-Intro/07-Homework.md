# Homework

[slide hideTitle]

# Problem: Bookshop System

## Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/05-Spring-Data-Intro-Homework-Resources.zip) **for this task.**

Create database for a **Bookshop System**. 

This system needs to keep the information about **books**. 

Let us create a class for each of the tables.
-	**Book**:
     -  id
     -  title 
     -  description (optional, accepts very long String values) 
     -  edition_type (**NORMAL, PROMO or GOLD**)
     -  price
     -  copies
     -  release_date (optional)
     -  age_restriction (**MINOR, TEEN or ADULT**)

-	**Author**:
    - id 
    - first name (optional) 
    - last name

-	**Category**:
    - id 
    - name

Assume that everything is mandatory if it is not market with (optional).

The final schema of the database should look like this:

[image assetsSrc="Spring-data-intro-hw.png" /]

[/slide]

[slide hideTitle]

# Problem: Seed Data into the Database

Create a **seedDatabase()** method in the **ConsoleRunner implementation class**. 

Use the provided **files (categories.txt, authors.txt, books.txt)** and import the data from them.

```java

//Importing Books from the books.txt file

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
    
    //TODO add random categories for current book
   
    bookService.save(book);


    // TODO seed Authors from the authors.txt file
    // TODO seed Categories from the categories.txt file
}
``` 
[/slide]
