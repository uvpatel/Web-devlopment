# Anchor Tag
Links are fundamental to navigating the web. In HTML, links are created using the `<a>` tag, also known as the Anchor tag.

## Key Characteristics of HTML Links
- Specified by the `<a>` tag.
- Also known as hyperlinks.
- Used to link one document to another.
- Includes a closing tag `</a>`.

## Syntax of HTML Links
```html
<a href="Your specified path">
    content
</a>
```

## Essential Attributes of the Anchor Tag
HTML links primarily use two attributes:

- href attribute: Defines the URL the link points to.
- target attribute: Specifies where to open the linked document.

### Target Attribute Values
- _blank: Opens the linked document in a new window or tab.
- _top: Opens document in the full body of the window.
- _self: Opens document in the same window or tab (default behavior).
- _parent: Opens the linked document in the parent frame.

## Linking to Specific Page Sections
To link to a specific section of a webpage, you can:

- Use the name or id attribute of the target section.
- Use a hyperlink with a hash (#) followed by the target id or name.

### Example
Let's say you have a long webpage with multiple sections, and you want to create a link at the top that, when clicked, takes the user directly to a specific section further down the page. You can do this using HTML links that target specific sections.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
 
  <!-- Link at the top -->
  <a href="#gardening-tips">Go to Gardening Tips</a>
 
  <!-- Some content -->
  <p>Here is some other content...</p>
 
  <!-- Gardening Tips Section -->
  <h2 id="gardening-tips">Gardening Tips</h2>
  <p>This section provides tips on how to garden...</p>
 
</body>
</html>
```
## Link Colors
Links typically appear in different colors based on their state:

- Active: Displayed in red and underlined like this sentence.
- Visited: Appears purple and underlined like this sentence.
- Unvisited: Shown as blue and underlined like this sentence.

You can customize these colors using CSS to better match the style of your website.

