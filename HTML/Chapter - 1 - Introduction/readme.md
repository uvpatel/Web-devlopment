# HTML Id & Classes
HTML offers multiple ways to select and style elements. Two of the most commonly used selectors are IDs and Classes. This blog explores what they are, how to use them, and their differences.

## What is an ID?
An ID is an attribute, a unique identifier assigned to only one HTML element within a page. It is often used for unique styling and JavaScript manipulations.
```html
<div id="myUniqueID">This is a div with an ID.</div>
```

## What are Classes?
The class attribute lets you give the same name to multiple HTML elements. That way, you can easily change their look or behavior all at once. Classes are not unique and can be assigned to multiple elements. They are generally used for applying the same styles or behaviors to a group of elements.

```html
<div class="myClass">This is a div with a class.</div>
<p class="myClass">This is a paragraph with the same class.</p>
```
### The Style Tag
The style tag in HTML is used to include embedded CSS (Cascading Style Sheets) within an HTML document. It is commonly placed within the <head> section of the HTML file, although it can technically be used in the <body> as well. The style tag allows you to define the look and feel of various HTML elements on the page, including their colors, sizes, margins, and other visual styles.

Here's a simple example:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS rules go here */
    p {
      color: blue;
      font-size: 18px;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <p>This is a blue paragraph.</p>
  <p class="highlight">This paragraph has a yellow background.</p>
</body>
</html>
```

In this example, we have targeted the second paragraph by its class name in CSS. The style tag is used to add CSS right into HTML. We will learn about CSS and selectors later in the CSS tutorial.

### Using IDs and Classes in CSS
In CSS, elements with IDs are selected using a hash (#) symbol before the ID, and elements with classes are selected using a dot (.) before the class name.
```css
/* CSS for ID */
#myUniqueID {
  background-color: yellow;
}
 
/* CSS for Class */
.myClass {
  font-size: 18px;
}
```

### Differences Between IDs and Classes
- Uniqueness: IDs are unique, and classes can be reused.
- JavaScript: IDs are often used for JavaScript operations.
- Styling: Both can be used for styling, but IDs have higher specificity.

### Conclusion
Understanding the difference between IDs and Classes is crucial for effective web development. While IDs are for unique elements, classes are for grouping elements.