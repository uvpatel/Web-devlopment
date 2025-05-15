# HTML Page Structure
An HTML document is structured using a set of nested tags. Each tag is enclosed within <...> angle brackets and acts as a container for content or other HTML tags. Let's take a look at a basic HTML document structure:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
   <!-- content -->
</body>
</html>
```

This is how the title appears on an HTML page:

``` html
<html>
<head>
    <title>Page title</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
</html>
```

Almost every website uses this structure. The main content goes inside the body tag. No worries if this looks complicated; let's break it down!

**Note:** These are the essential elements for a basic HTML document:  
`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `</head>`, `<body>`, `</body>`, `</html>`


## DOCTYPE Declaration
```html <!DOCTYPE html> ```

The `<!DOCTYPE html>` declaration informs the web browser about the HTML version being used. The latest version is HTML5. But if this changes in the future (maybe 10 years down the line), the doctype declaration will be helpful!

## HTML Root Element
```html <html>```

The `<html>`tag is the root element that encapsulates all the content on the page.

```html </html>```

The `</html>` tag marks the end of the `<html>` section.

### Head Section
`<head>`

The `<head>` tag contains metadata and links to external resources like CSS and JavaScript files.

`</head>`

The `</head>` tag marks the end of the `<head>` section.

#### Title Tag
<title>Document</title>

The <title> tag sets the title of the web page, which is displayed in the browser's title bar or tab.

#### Body Tag
```html <body>```

The `<body>` tag contains the visible content of the web page. This is where text, images, and other elements go.

```html </body>```

The `</body>` tag marks the end of the visible content of the web page.

Every HTML page should include at least these essential elements to define the basic layout. In upcoming tutorials, we'll dive deeper into the fascinating world of HTML.

## Summary
- The `<!DOCTYPE html>` tag specifies that the document is an HTML5 document.
- The `<html lang="en">` tag defines the document to be in English.
- The `<head>` section contains metadata and the title of the webpage, which appears in the browser's title bar.
- The `<body>` section contains the content that will be displayed on the webpage.
- The h1 and p are two types of tags. We will learn about more tags in the later section.

## Visualization of an HTML Document:
The following image provides a visual representation of the HTML structure:

![HTML Tag Structure Image](htmlstructure.png)



## How This Content Appears in a Web Browser:
Consider this HTML code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1> This is a heading</h1>
    <p>This is a paragraph</p>
</body>
</html>
```
Below is an image showing how this HTML document will be rendered in a web browser:


![HTML Headings](heading.jpg)

In the browser, the title bar will display the content from the `<head>` section, specifically the `<title>` tag. The main area of the browser window (usually a white background) will display the content inside the `<body>` tag.

In the upcoming sections, we will learn about HTML tags and elements.