# HTML Inline Elements
Inline Elements don't start on a new line. It only takes the width required to cover the content.

HTML elements are generally divided into two categories: **Block-level** and **Inline elements**.

![inline Element](image.jpg)

No matter what the width is, block elements will always start on a new line and take up the full available width of their container by default. This means they essentially claim all the horizontal space for themselves, pushing any content that comes after them to a new line. But the inline elements will fit snugly within the flow of other elements, taking up only as much width as their content requires.

## What are Inline Elements?
Inline elements do not start on a new line and only take up as much width as necessary. They are part of the flow within other elements.

Inline elements can contain other inline elements, but they generally should not contain block-level elements. For example, you could nest a `<strong>` (strong emphasis) element within a `<span>` (a generic inline container) element, like so:

```html
<span>This is <strong>important</strong> text.</span>
```

However, placing a block-level element like a `<div>` or `<p>` inside an inline element like `<span>` or `<a>` is typically considered incorrect HTML and could lead to unexpected behavior in terms of layout and styling.

```html- `
<!-- This is generally considered incorrect -->
<span>This is <div>not recommended</div> text.</span>
```

## Common Inline Elements
- `<span>`: A generic inline container for text
- `<a>`: Defines a hyperlink
- `<strong>`: Defines important text
- `<em>`: Defines emphasized text
- `<img>`: Embeds an image
- `<input>`: Defines an input control

## Examples
Here is an example of using <span style="color: blue;"> inline elements </span>  within a paragraph.

This text contains <u>a link</u>, **an important text**, and an emphasized text.

## Styling Inline Elements
You can use CSS to style inline elements. However, some properties like `width` and `height` may not apply.

Here is an exhaustive list of the most used 
**Inline Elements**:

- `<a>`
- `<abbr>`
- `<acronym>`
- `<button>`
- `<br>`
- `<big>`
- `<bdo>`
- `<b>`
- `<cite>`
- `<code>`
- `<dfn>`
- `<i>`
- `<em>`
- `<img>`
- `<input>`
- `<kbd>`
- `<label>`
- `<map>`
- `<object>`
- `<output>`
- `<tt>`
- `<time>`
- `<samp>`
- `<script>`
- `<select>`
- `<small>`
- `<span>`
- `<strong>`
- `<sub>`
- `<sup>`
- `<textarea>`