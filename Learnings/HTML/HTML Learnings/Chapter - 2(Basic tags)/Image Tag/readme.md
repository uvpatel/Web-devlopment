# Image Tag
Images play a crucial role in enhancing web pages by providing a visual context that complements textual content. In HTML, the `<img>` tag is used to embed images into web pages.

## Basic Syntax for Embedding Images
This is how the syntax to embed an image in HTML looks like:

```html
<img src="image's path" />
```
[Watch this video](imgtagvideo.mp4)


Key Features of the `<img>` Tag
- It's a self-closing tag, meaning it doesn't require a corresponding closing tag.
- Commonly used attributes include the "alt" attribute for image descriptions and the "src" attribute for specifying the image location.
- Supports various image formats including PNG, JPEG, JPG, and GIF.


### Setting Mandatory Attributes
The "src" and "alt" attributes are essential for the proper functioning of the `<img>` tag.

- src attribute: Specifies the path to the image file.
- alt attribute: Provides a text description for the image.

```html
<img src="images/profile_picture.jpg" alt="Profile Picture" />
```
**Note:** To find the image's location, right-click on the image, go to properties, and check the location field.

### Setting Image Dimensions
Although dimensions can be set using the "width" and "height" attributes in the `<img>` tag, modern best practices recommend using CSS for this purpose.

```html
<img src="image.png" alt="Description" width="300" height="100" />
```

Setting the width and height attributes for images in HTML can have a positive impact on **[Search Engine Optimization (SEO)](https://searchengineland.com/guide/what-is-seo)**. Specifying these dimensions in the `<img>` tag allows browsers to allocate the correct amount of space on a web page even before the image is fully loaded. This prevents layout shifts, improving the **[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)** score—a key metric in Google's Core Web Vitals. A better CLS score can lead to a higher page ranking in search engine results.

Note: Styling dimensions and other properties are now more commonly managed through CSS for better flexibility and maintainability.