# HTML Attributes
HTML attributes are used to define the characteristics of an HTML element. They are placed within the element's opening tag and consist of two parts: the **name** and the **value**.

- **Name**: Specifies the property for that element.
- **Value**: Sets the value of that property for the element.

## Types of HTML Attributes
There are three main types of HTML attributes:

1. Core Attributes: These are basic attributes that can be applied to most HTML elements. Examples include id, class, and style.
2. Internationalization Attributes: These attributes help adapt the document to different languages and regions. Examples include lang and dir.
3. Generic Attributes: These attributes provide additional information about the element but don't necessarily affect its appearance or behavior. Examples include data-* attributes for storing custom data private to the page or application.
Core attributes are some of the most widely used attributes in HTML. There are four main types:

- `id`
- `class`
- `title`
- `style`

### ID Attribute
The ID attribute is used to assign a unique identifier to an HTML element. Each element with an ID has its own unique identity, similar to how each individual has a unique identity. Multiple elements cannot have the same ID.

Example:
```html
<p id="html">This is an HTML tutorial</p>
<p id="python">This is a Python tutorial</p> 
```

In this example, the ID attribute helps to distinguish between two paragraphs by having different values: "html" and "python".

### Class Attribute
The class attribute is used to associate an HTML element with a particular class, typically for styling or JavaScript manipulation. Unlike the ID attribute, the class attribute is not unique, and multiple elements can share the same class.

### Title Attribute
The title attribute provides additional information about an element and is often displayed as a tooltip when the mouse hovers over it.

Example:
```html
<h4 title="hello, motto">Title attribute</h4>
```
Output:
[Style Attribute](https://www.youtube.com/watch?v=VIDEO_ID)

#### Style Attribute

The style attribute allows for inline styling of HTML elements. It is used in conjunction with CSS properties to directly style individual elements within the HTML code.

#### Case Sensitivity
The HTML standard is flexible about the case of attribute names, allowing them to be written in either uppercase or lowercase, such as "title" or "TITLE." However, for best practices and compatibility with stricter document types like XHTML, the W3C recommends using lowercase attributes.