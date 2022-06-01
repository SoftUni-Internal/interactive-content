[slide hideTitle]

# Add JS Function for Comment

If we want to visualize the comments, we will need a js file that will invoke it.

[image assetsSrc="12-Comment-JS.png" /]

Inside we add the following code:

```javascript
const routeId = document.getElementById("routeId").value;
const commentCtnr = document.getElementById("commentCtnr");

const allComments = [];

const displayComments = (comments) => {
  commentCtnr.innerHTML = comments.map((c) => asComment(c)).join("");
};

function asComment(c) {
  let commentHTML = `<div id="commentCtnr-${c.id}">`;
  commentHTML += `<h4>${c.author} (${c.created})</h4>`;
  commentHTML += `<p>${c.textContent}</p>`;
  commentHTML += `</div>`;
  return commentHTML;
}

fetch(`http://localhost:8080/api/comments/${routeId}`)
  .then((response) => response.json())
  .then((data) => {
    for (let comment of data) {
      allComments.push(comment);
    }
    displayComments(allComments);
  });
```

When a new request is made, the page will refresh, and comment will be added.

[/slide]

[slide hideTitle]

# Comment View

The only new code, that we will add in the **route-details.html** view is the import of the javascript file.

```html
<script th:src="@{/js/comments.js}"></script>
```

Be sure that this is how your comment section looks like.

```html
<section class="comments">
  <h1>Comments</h1>
  <div>
    <!-- Comments submission -->
    <form id="commentForm" method="POST" action="/">
      <div class="form-group">
        <h4>Leave a comment</h4>
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          class="form-control"
          style="background-color: white;"
        ></textarea>
        <small id="messageError" class="invalid-feedback">
          Message should be at least 10 characters.
        </small>
      </div>

      <div class="form-group">
        <input
          type="submit"
          class="btn"
          id="postComment"
          value="Post Comment"
        />
      </div>
    </form>
    <!-- Comments submission -->
  </div>

  <!-- All comments section -->
  <div>
    <span id="commentCtnr"><!-- Comments section, filled in by script --></span>
  </div>
  <!-- EO: All comments section -->
</section>
<script th:src="@{/js/comments.js}"></script>
```

[/slide]

[slide hideTitle]

# Test Comment Section

If we go to a specific route and write a comment, after clicking **Post Comment**, a comment will be added.

[image assetsSrc="10-Write-Comment.png" /]

This is what the result will look like:

[image assetsSrc="11-Result.png" /]

In the next **workshop**, we will continue adding more new features to this **Pathfinder project**.

[/slide]
