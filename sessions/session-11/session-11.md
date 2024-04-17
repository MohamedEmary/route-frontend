---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 11 \par}\vspace{0.1cm}\hrule\end{title}
date: April 14, 2024
---

# rem & em Units

## rem

`rem` is a relative unit of length. It is relative to the root element's font-size.

By default, the root element is the `html` element and it has a font-size of `16px` so a `1rem` is equal to `16px`.

If you change the root font size to `20px`, `1rem` will be equal to `20px`.

```{.css .numberLines}
html { /* You can also use :root */
  font-size: 20px;
}

h1 {
  font-size: 2rem; /* 40px */
}
```

## em

`em` is a relative unit of length. It is relative to the font-size of the parent element, and the parent element can still be the root element.

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

If you have the following HTML:

```{.html .numberLines}
<div>
  <p>Some text</p>
</div>
```

\columnbreak

And the following CSS:

```{.css .numberLines}
div {
  font-size: 20px;
}

p {
  font-size: 1em; /* 20px */
}
```

:::

Here the root element still has a font-size of `16px`, but `em` is relative to the parent element, which is the `div` element with a font-size of `20px`.

## Which unit is better with each property?

- With `width` It's better to use percentages and `vh` with the first section.
- With `height` It's better to leave it as `auto`.
- With `margin`, `padding`, `border`, and `font-size` It's better to use `rem` or `em`.

# Calc Function

`calc()` is a CSS function that can be used to perform simple arithmetic operations.

```{.css .numberLines}
div {
  width: calc(100% / 4);
}
```

You can even use it to mix different units.

Like this:

```{.css .numberLines}
div {
  width: calc(100% - 20px);
}
```

Or:

```{.css .numberLines}
div {
  width: calc(5vw - 10px);
}
```

Another usefull example is that if you have 4 div inside a container and each of them has a margin of `10px` and width of `25%`, you can use `calc()` to calculate the width of the divs so they fit inside the container without going into the next line.

```{.css .numberLines}
div {
  width: calc(100% / 4 - 20px);
  margin: 10px;
}
```

# Bootstrap

## What is Bootstrap?

Bootstrap is a free and open-source CSS library directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

In brief, Bootstrap is a CSS library that contains a lot of pre-built components that you can use to build your website.

Bootstrap was developed by Mark Otto and Jacob Thornton at Twitter.

***It's better to watch Bootstrap inroduction video from session record on Google drive.***

## What is the difference between library and framework?

A library is a collection of pre-written code that you can use in your project.

A framework is larger than a library and it provides a structure for your project. It has a collection of libraries and tools that you can use to build your project.

**Example of libraries**: Bootstrap, tailwind, etc.

**Example of frameworks**: Angular, React, etc.

## How to use Bootstrap?

### Downloading Bootstrap

You can use Bootstrap by [downloading the CSS and JS files](https://getbootstrap.com/docs/5.3/getting-started/download/) from the official website and linking them in your HTML file.

Then from the downloaded files you get two files:

- `bootstrap.min.css`
- `bootstrap.bundle.min.js`

You will find these files in the `dist` folder. Then place them in your project folder.

Then in your HTML file, link the CSS file in the head section and the JS file at the end of the body section.

```{.html .numberLines}
<!DOCTYPE html>
<html>
  <head>
    <title>Trying Bootstrap</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
  </head>
  <body>
    .
    .
    .
    your page content
    .
    .
    .
    <script src="./js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

### Using CDN

CDN stands for Content Delivery Network. You can use Bootstrap by linking the CSS and JS files from a CDN.

```{.html .numberLines}
<!DOCTYPE html>
<html>
  <head>
    <title>Trying Bootstrap</title>
    <link 
      rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist /css/bootstrap.min.css"
    >
  </head>
  <body>
    .
    .
    .
    your page content
    .
    .
    .
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist /js/bootstrap.bundle.min.js"
    >
    </script>
  </body>
</html>
```

<!-- 
### Using npm

You can also install Bootstrap using npm.

```{.bash .numberLines}
npm install bootstrap
```

Then you can import the CSS file in your CSS file.

```{.css .numberLines}
@import "~bootstrap/dist/css/bootstrap.css";
```

And the JS file in your JS file.

```{.js .numberLines}
import 'bootstrap';
``` 
-->

## Some Questions

**What are the extra `.map` files that come with Bootstrap?**

All the `.map` files are because Bootstrap is written in Sass and the `.map` files are used to map the compiled CSS to the original Sass files.

**What is the difference between** `bootstrap.min.css` **and** `bootstrap.css`**?**

<!-- minifier vscode extension -->

`bootstrap.min.css` is the minified version of `bootstrap.css`. Minified files are smaller in size and faster to load.

**So how to minify a CSS file?**

You can use a CSS minifier like [CSS Minifier](https://www.toptal.com/developers/cssminifier).

**What are the** `rtl` **files in Bootstrap?**

`rtl` stands for right-to-left. These files are used to support right-to-left languages like Arabic.

**What are the** `utilities`, `reboot` **and** `grid` **files in Bootstrap?**

- **Utilities**: These are a collection of CSS classes that provide quick and easy-to-use styling options for various elements. Utilities in Bootstrap offer solutions for common tasks like spacing, alignment, typography, and more. They allow developers to apply styles without having to write custom CSS, which helps in maintaining consistency and speeding up development.

- **Reboot**: The "reboot" file in Bootstrap is a CSS file that provides a standardized set of CSS resets and basic styles. It aims to normalize styles across different browsers and devices, ensuring consistent rendering of HTML elements. Reboot resets the default styling of HTML elements like headings, paragraphs, lists, links, etc., making them consistent and predictable.

- **Grid**: The grid system in Bootstrap is a powerful layout utility that allows developers to create responsive and flexible layouts easily. It's based on a 12-column grid system, which provides a flexible structure for organizing content on a web page. Developers can use predefined classes to create responsive layouts that adjust automatically based on the screen size and device, ensuring a consistent user experience across different devices.

**Why we use** `bootstrap.min.css` **and** `bootstrap.bundle.min.js`**?**

`bootstrap.min.css` is the CSS file that contains all the styles of Bootstrap.

`bootstrap.bundle.min.js` is the JS file that contains all the JavaScript plugins of Bootstrap.

But you can still use other files that contain only the features you need.

**What is the difference between** `bootstrap.bundle.min.js` **and** `bootstrap.min.js`**?**

`bootstrap.bundle.min.js` includes Popper.js which is a library used to position tooltips and popovers.

<!-- 
https://chat.openai.com/share/6562886e-36b1-4439-a4b6-3ad537e14150 
https://www.w3schools.com/bootstrap/bootstrap_get_started.asp
https://getbootstrap.com/docs/4.3/getting-started/introduction/
-->

## What to do if you want to change the default Bootstrap styles?

You can override the default Bootstrap styles by writing your own CSS code and loading it after the Bootstrap CSS file.

```{.html .numberLines}
<head>
  <title>Trying Bootstrap</title>
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist /css/bootstrap.min.css"
  >
  <link rel="stylesheet" href="./css/styles.css">
</head>
```

Also don't override the Bootstrap class styles directly, instead, create a new class with the styling you want and apply it to the element.

You can apply the styling by overriding the variable values for the Bootstrap component you want.

<!-- For example if the default value for `--bs-btn-primary-color` is `#0d6efd` and you want to change it to `#ff0000`, you can do it like this: -->

In CSS:

```{.css .numberLines}
.my-custom-class {
  /* Your custom styles here */
}
```

In HTML:

```{.html .numberLines}
<div 
  class="bootstrap-class-1 bootstrap-class-2 my-custom-class"
>
</div>
```

<!--
\begin{box4}{Will bootstrap make me a bad front-end developer?}

No, using Bootstrap doesn't make you a bad developer. It's a tool that can help you build websites faster and more efficiently. However, it's important to understand the underlying CSS and HTML concepts so that you can customize and extend Bootstrap to fit your needs.

\end{box4}
-->

<!-- Bootstrap Contains a collection of Component, utilities and grid system -->

## Sizing in Bootstrap

Bootstrap provides classes to set the width and height of elements.

- `w-25`, `w-50`, `w-75`, `w-100`, `w-auto` to set the width to 25%, 50%, 75%, and 100%, and auto respectively.
- `h-25`, `h-50`, `h-75`, `h-100`, `h-auto` to set the height to 25%, 50%, 75%, and 100% and auto respectively.

## Colors in Bootstrap

Bootstrap provides classes to set the **background color**.

- `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `bg-white` to set the background color.

And to change the **text color** you can use the following classes.

- `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-white` to set the text color.

You can also change the background color opacity using the `--bs-bg-opacity` variable.

```{.css .numberLines}
.bg-primary {
  --bs-bg-opacity: 0.5;
}
```

We also have some classes to control the **opacity** of the **background color**.

- `bg-opacity-25`, `bg-opacity-50`, `bg-opacity-75`, `bg-opacity-100` to set the opacity to 25%, 50%, 75%, and 100% respectively.

And to control the **opacity of the element** itself, you can use the following classes.

- `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100` to set the opacity to 0%, 25%, 50%, 75%, and 100% respectively.

## Alignment

Bootstrap provides classes to align elements.

- `text-start`, `text-center`, `text-end` to align text.

## Text in Bootstrap

### Font Size

- `fs-1`, `fs-2`, `fs-3`, `fs-4`, `fs-5`, `fs-6` to set the font size.

## Font Style

- `fst-italic` to set the font style to italic.

### Font Weight

- `fw-light`, `fw-normal`, `fw-bold` to set the font weight.

### Text Transform

- `text-lowercase`, `text-uppercase`, `text-capitalize` to transform text.

### Line Height

- `lh-base`, `lh-sm`, `lh-lg` to set the line height to base, small, and large respectively.

<!-- 
اشوف الحتة بتاعة Transform middle اتقالت في انهي session
-->

<!-- 
### Other 

- `lead` to set the font size to `1.25rem` and the line height to `1.7`.
-->

There are many other effects and classes that you can use in Bootstrap. You can find them in [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
