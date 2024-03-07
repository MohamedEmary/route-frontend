---
title: \begin{title}\centering\vspace*{0cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 1 \par}\vspace{0.1cm}\hrule\end{title}
date: March 3, 2024
---

# Introduction

In web development we use three main technologies: **HTML**, **CSS**, and **JavaScript**.

**HTML** defines the structure of your website. The basic building blocks of HTML are elements, which are created using tags.

**CSS** defines the style of your website.

**JavaScript** defines the behavior of your website.

HTML & CSS are not programming languages, they are markup languages, but JavaScript is a programming language.

**Visual Studio Code** is a text editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.

To see your HTML, CSS, and JavaScript code in action, you need to open them in a **web browser**.

**Tim Berners-Lee** invented the World Wide Web in 1989.

# Some HTML Tags and Their Syntax

HTML has paired tags and self-closing tags.

```{.html .numberLines}
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Nested Tag</h1>
    <img src="image.jpg" alt="Image" />
  </body>
</html>
```

`<html>` is the parent of all other elements (all other elements are children of it), `<head>` and `<body>` are siblings.

To save use `ctrl + s`, but it's better to activate `autosave` in the settings.

## SEO (Search Engine Optimization)

SEO is Search Engine Optimization, it's used to rank your website higher in search engines.

We should stick to some rules when making our websites so that search engines rank them higher.

One of these rules is that one HTML page should never have more than one `h1` tag.

## Image Tag

`<img>` is a self-closing tag, it doesn't have a closing tag.

`src` is the source of the image, and `alt` is the alternative text for the image.

`alt` is used when the image can't be displayed, and it's used by screen readers to describe the image to the user. It's also important for SEO.

[Google `<img>` tag SEO guidelines.](https://developers.google.com/search/docs/appearance/google-images?hl=en)

## Anchor Tag

`<a>` is the anchor tag, it's used to create hyperlinks.

`href` is the hyperlink reference, it's the URL of the page you want to link to.

`target="_blank"` is used to open the link in a new tab. For security reasons it's used with `rel="noopener noreferrer"` to prevent the new tab from accessing the `window.opener` object.

## Lists

We have two types of lists in HTML: ordered lists and unordered lists.

### Ordered List

Ordered lists has an attribute called `type` which can be `1`, `A`, `a`, `I`, or `i`.

```{.html .numberLines}
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

### Unordered List

```{.html .numberLines}
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Tables

Tables in HTML are created using the `<table>` tag and have three main elements: `<thead>`, `<tbody>`, and `<tfoot>`.

```{.html .numberLines}
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

Table element has a `border` attribute which is used to specify the width of the border around the table, for example `border="1"`.

You can control the width or height of the table using the `width` and `height` attributes.

You can make the table take the full width of the page using the `width` attribute and setting it to `100%`.

You can make a cell span multiple columns using the `colspan` attribute, and you can make a cell span multiple rows using the `rowspan` attribute.

To give the table a background color, you can use the `style` attribute and set the `background-color` property. You can also set the `color` property to change the text color.

\pagebreak

# Summary

- **HTML** defines the structure of your website.
- **CSS** defines the style of your website.
- **JavaScript** defines the behavior of your website.
- **Visual Studio Code** is a text editor developed by Microsoft for Windows, Linux and macOS.
- **Tim Berners-Lee** invented the World Wide Web in 1989.
- **SEO** is used to rank your website higher in search engines.

## Tag

| Tag       | Description                                          |
| :----------- | :------------------------------------------------------------------------------- |
| `<html>`  | The root element of an HTML page.                    |
| `<head>`  | Contains metadata about the HTML page.               |
| `<title>` | Specifies the title of the page.                     |
| `<body>`  | Contains the visible page content.                   |
| `<h1>`    | Defines a level 1 heading. We have `<h1>` to `<h6>`. |
| `<img>`   | Embeds an image into the page.                       |
| `<a>`     | Creates a hyperlink.                                 |
| `<ol>`    | Defines an ordered list.                             |
| `<ul>`    | Defines an unordered list.                           |
| `<li>`    | Defines a list item.                                 |
| `<table>` | Defines a table.                                     |
| `<thead>` | Groups the header content in a table.                |
| `<tbody>` | Groups the body content in a table.                  |
| `<tfoot>` | Groups the footer content in a table.                |
| `<tr>`    | Defines a row in a table.                            |
| `<th>`    | Defines a header cell in a table.                    |
| `<td>`    | Defines a cell in a table.                           |

## Attribute

| Attribute | Description                                                                      |
| :----------- | :------------------------------------------------------------------------------- |
| `src`     | Specifies the source of an image.                                                |
| `alt`     | Specifies an alternate text for an image when the image cannot be displayed.     |
| `href`    | Specifies the URL of the page the link goes to.                                  |
| `target`  | Specifies where to open the linked document.                                     |
| `rel`     | Specifies the relationship between the current document and the linked document. |
| `type`    | Specifies the type of numbering for list items.                                  |
| `border`  | Specifies the width of the table border.                                         |
| `width`   | Specifies the width of the table.                                                |
| `height`  | Specifies the height of the table.                                               |
| `colspan` | Specifies the number of columns a cell should span.                              |
| `rowspan` | Specifies the number of rows a cell should span.                                 |
