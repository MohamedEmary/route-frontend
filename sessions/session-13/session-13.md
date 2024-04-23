---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 13 \par}\vspace{0.1cm}\hrule\end{title}
date: April 21, 2024
---

# Inside head tag

`meta` tag takes: name & content

keywords

```{.html .numberLines}
<meta name="keywords" content="HTML, CSS, JavaScript">
```

author

```{.html .numberLines}
<meta name="author" content="John Doe">
```

description

```{.html .numberLines}
<meta name="description" content="Free Web tutorials">
```

viewport (responsive design)
  
```{.html .numberLines}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Content-Type
  
```{.html .numberLines}
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

important for SEO

---

Link `icon`

```{.html .numberLines}
<link rel="icon" href="favicon.ico">
```

`.ico` is preferred. There is sites to convert `.png` to `.ico`.

---

Character encoding

```{.html .numberLines}
<meta charset="UTF-8">
```

OR:

```{.html .numberLines}
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

---

`html lang`

```{.html .numberLines}
<html lang="en">
```

---

Before `<html>`

`<!DOCTYPE>` declaration

```{.html .numberLines}
<!DOCTYPE html>
```

Means the document is an HTML5 document.

It enforces some rules on the document CSS like:

- case-sensitive selectors
- having to write `px` after a number
- images inside a div with a border there will be a very small gap between the image and the border since the image is a replaced element and to fix this you can set the image to `display: block;`

# Other

`svg` tag

It can be used to create shapes and images.

```{.html .numberLines}
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

`circle` is the shape, `cx` and `cy` are the center of the circle, `r` is the radius, `stroke` is the color of the border, `stroke-width` is the width of the border, `fill` is the color of the inside of the circle.

<!-- canvas ?? -->
<!-- particle.js is a library to create particles -->
<!-- Site to create svg  getwaves.io blobmaker.app -->

---

<!-- الجزء بتاع ال input -->

- `form-control` and `gy-2` classes
- `btn-outline-warning`

---

svg and another section with the same color to make it look like better

![1713722502526](image/session-13/1713722502526.png)

In this image the waves above appear to be a part of the form however they are not, but since they have the same color they look like they are.

---

`max-width` and `min-width`

---

Download fonts from google fonts and create a folder for them in the project. Then move the downloaded font file (`.ttf`, `.woff`, `.woff2`, `.eot`) to the fonts folder.

Then use the `@font-face` rule to use them. `font-family` is the name of the font. `src` is the path to the font.

```{.css .numberLines}
@font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf');
}
```

You can have multiple `src` to support different browsers.

```{.css .numberLines}
@font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf') format('truetype'),
       url('fonts/Roboto-Regular.woff') format('woff');
}
```

Then use the `font-family` in the CSS.

You can have more than one font with the same name and the browser will use the one that is needed.

for example:

fonts with the same name and different weights.

```{.css .numberLines}
@font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf');
}

@font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Bold.ttf');
}
```

So using:

```{.css .numberLines}
font-family: 'Roboto';
font-weight: bold;
```

will use the bold font.

while using:

```{.css .numberLines}
font-family: 'Roboto';
font-weight: normal;
```

will use the regular font.

---

Importing font awesome javascript file will make the icons appear as svg. You can see that in dev tools.

---

`navbar-expand-lg` is used to make the navbar responsive and expand when the screen is large.

<!-- اراجع الجزء ده كمان في الفيديو بتاع ال navbar -->

---

In html 5 you can make a tag with any name and it will be valid and it will have inline display by default.

You can also create your own attributes in the form `data-*`. Then you can select it in the CSS using `[data-*]`.

Bootstrap has its own tags like `data-toggle` and `data-target` to make the navbar work.

<!-- ال SEO في الاخر وال selector بيشتغل ازاي -->

---

Slider exercise

---

cards exercise

tabs part of the exercise

---

- Alert
- Accordion
- Badge
- Breadcrumb

And many Other Components

---

`popper.min.js` and `bootstrap.min.js` are merged in `bootstrap.bundle.min.js`
