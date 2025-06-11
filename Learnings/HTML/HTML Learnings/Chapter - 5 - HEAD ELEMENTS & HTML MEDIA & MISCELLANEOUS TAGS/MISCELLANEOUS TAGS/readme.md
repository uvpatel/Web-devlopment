# HTML Code Tag
The HTML `<code>` tag is a powerful element for displaying code snippets within a webpage. It preserves both spaces and line breaks, making it ideal for showcasing code. In this blog post, we'll explore how to use the `<code>` tag effectively, especially in conjunction with Prism for code highlighting.

## What is the `<code>` Tag?
The `<code>` tag is a semantic HTML tag that's used for displaying code snippets. It can be used both inline and within a block-level element like `<pre>`.

## Why Use the `<code>` Tag?
- **Semantic Meaning**: Provides semantic value to the enclosed code.
- **Readability**: This makes it easier for both browsers and developers to understand that the text is code.
- **Styling**: Easier to style and highlight with CSS or JavaScript libraries like Prism.

## Basic Usage
The most straightforward way to use the `<code>` tag is inline for short code snippets:
```html
<code>Your code here</code>
```

![usage](image.jpg)

## Using `<code>` with `<pre>`
For multiline code snippets, it's common to combine the `<code>` tag with the `<pre>` tag:

```html
<pre><code>Your multiline code here</code></pre>
```
## Conclusion
The HTML `<code>` tag is a simple yet powerful way to include code snippets in your webpage.


##HTML Semantic Tags
HTML5 introduced a range of semantic tags that provide meaning to the structure of web content. This blog will guide you through the importance and usage of these tags.

##What are Semantic Tags?
Semantic tags add meaning to your HTML. They tell both the browser and the developer what kind of content is being presented.

Here are some of the key semantic tags you must know about:

<header>: Used to represent the top section of a web page, often containing headings, logos, and navigation.
<nav>: Signifies a navigation menu on a web page.
<article>: Indicates a self-contained piece of content, such as a blog post or news article.
<section>: Represents a thematic grouping of content on a web page.
<aside>: Typically used for sidebars or content that is tangentially related to the main content.
<footer>: Represents the footer of a web page, usually containing copyright information and contact details.
<figure> and <figcaption>: Used for embedding images, diagrams, or charts, along with a caption.
<main>: Signifies the main content area of a web page.
<time>: Used to represent time-related information, like dates and times.
cwh tutorial image

Why Use Semantic Tags?
They enhance SEO, improve accessibility, and make your code easier to read and maintain.

Commonly Used Semantic Tags
Here are some commonly used semantic tags in HTML:

header: Contains introductory content.
footer: Holds footer information.
article: Encapsulates a self-contained composition.
section: Represents a standalone section.
aside: Contains content aside from the content it is placed in.
nav: Holds navigation links.
Examples
Using the <header> tags and <footer> tags
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
 
<footer>
    <p>Copyright 2023</p>
</footer>

Using the <article> and <section> tags
<article>
    <h2>Article Title</h2>
    <section>
      <p>Content here</p>
    </section>
</article>

Using the <aside> and <nav> tags
<aside>
    <p>This is an aside content</p>
</aside>
<nav>
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
</nav>

Using the <figure> and <figcaption> tags
<figure>
    <img src="image.jpg" alt="An example image">
    <figcaption>This is an example image.</figcaption>
</figure>

##Conclusion
Using HTML's semantic tags can greatly benefit both your website's SEO and the maintainability of your code. They offer a way to structure your HTML in a meaningful manner, making your website more accessible and easier to understand.