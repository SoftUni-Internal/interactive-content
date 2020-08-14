# HTML Tables

[slide]
# HTML Table

[vimeo-video]
[stream language="EN" videoId="431756645" default /]
[stream language="RO" videoId="445198061" /]
[/video-vimeo]

HTML table allows web authors to arrange data into **rows** and **columns**. Through CSS you can add a border between the cells.

## HTML `<table>` Tag

`<table>` tag defines an HTML table. Each table row is defined with a `<tr>` tag. A table cell is defined with a `<td>` tag (`td` means table data).

If the cell is in the header, it is defined with the `<th>` tag. By default, table headings are bold and centered. 

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="JjYZwyN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JjYZwyN">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/JjYZwyN">
  JjYZwyN</a> by Bozhidar (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

**Note**: The <td> elements can contain other HTML elements, such as: text, images, lists, other tables, etc.

[/slide]

[slide]

## Complete HTML Tables

[vimeo-video]
[stream language="EN" videoId="431755765" default /]
[stream language="RO" videoId="445198062" /]
[/video-vimeo]

There are three specific parts in every table: 
* `<thead>` - used to group header content in an HTML table;
* `<tbody>` - used to group the body content in an HTML table;
* `<tfoot>` - used to group footer content in an HTML table.

These elements are used to specify each part of a table (header, body, footer). 

[html]
<p class="codepen" data-height="265" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="ExVRGwN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExVRGwN">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/ExVRGwN">
  ExVRGwN</a> by Bozhidar (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]

[slide]

## Cells that Span Many Columns or Rows

If needed you can make a cell span more than one column/row using `colspan`/`rowspan` attributes:
* `colspan` attribute is used for columns;
* `rowspan` attribute is used for rows.

[html]
<p class="codepen" data-height="300" data-theme-id="39135" data-default-tab="html,result" data-user="softuni-inter" data-slug-hash="OJyeRXE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="colspan">
  <span>See the Pen <a href="https://codepen.io/softuni-inter/pen/OJyeRXE">
  colspan</a> by SoftUni (<a href="https://codepen.io/softuni-inter">@softuni-inter</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
[/html]

[/slide]