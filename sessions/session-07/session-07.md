---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 7 \par}\vspace{0.1cm}\hrule\end{title}
date: March 28, 2024
---


# Shadow property

It's a CSS property that adds a shadow to an element.

An element can have more than one shadow. The shadow property syntax is:

```{.numberLines}
shadow: x-shadow y-shadow blur spread color inset;
```

`inset` makes the shadow appear inside the element.

To give an element like `h1` a shadow, you can use the `text-shadow` property, It takes four values:

```{.numberLines}
text-shadow: x-shadow y-shadow blur color;
```

The positive x direction is to the right and the positive y direction is down. You can use negative values to move the shadow in the opposite direction.

# Gradient <!-- review in the video -->

It's a value that can be used with the `background` property to create a gradient background. The syntax is:

```{.numberLines}
background: linear-gradient(direction, color1, color2, ...);
```

The direction can be `to top`, `to bottom`, `to left`, `to right`, `to top left`, `to top right`, `to bottom left`, `to bottom right`, or an angle in degrees like `45deg`.

Browser dev tools can help you to create gradients like specifying the angle.

Each color inside the `linear-gradient` can also take a percentage value to specify the position of the color.

```{.numberLines}
background: linear-gradient(to right, red 20%, blue 50%, green 80%);
```

You can also use opacity with the colors so if you have a background image you can see it through the gradient.

```{.numberLines}
background: url(./path/to/image), linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
```

`radial-gradient` is another type of gradient that creates a circular gradient. The syntax is:

```{.numberLines}
background: radial-gradient(shape size at position, color1, color2, ...);
```

# Before and After pseudo-elements

They are used to add content before or after an element. They are used with the `::before` and `::after` selectors.

An element can't have more than one `::before` or `::after` pseudo-element.

The content of the pseudo-element can be text, an image, or nothing.

```{.numberLines}
element::before {
  content: "before";
}
```

Example:

If you have a `h1` element and you want to add a horizontal line before and after it but it should be away from the text by 10px, you can use the following CSS:

<!-- review the example here -->

```{.numberLines}
h1{
  text-align: center;
  position: relative;
}
/*  review the code
h1::before, h1::after{
  content: "";
  position: absolute;
  top: 50%;
  width: 10%;
  height: 1px;
  background-color: black;
}  */
```

# Selection

It's a CSS property that allows you to style the selected text. The syntax is:

```{.numberLines}
selector::selection {
  color: white;
  background-color: red;
}
```

`::selection` is a pseudo-element so it has the specificity of a pseudo-element which is the same as an element.

Pseudo-elements take `::` while pseudo-classes take `:`.

# Animation

If you want to animate an element, you can use `@keyframes` to define the animation and the `animation` property to apply the animation to the element.

The syntax of `@keyframes` is:

```{.numberLines}
@keyframes animation-name {
  from {
    property: value;
  }
  to {
    property: value;
  }
}

/* You can also use percentages */

@keyframes animation-name {
  0% {
    property: value;
  }
  50% {
    property: value;
  }
  100% {
    property: value;
  }
}
```

The `animation` property syntax is:

```{.numberLines}
selector {
  animation: animation-name duration delay iteration-count;
}
```

Always keep the order of `duration` and `delay`.

<!-- animation: animation-name duration timing-function delay iteration-count direction fill-mode play-state; -->

Example:

```{.numberLines}
@keyframes change-colors {
  from {
    background-color: red;
  }
  to {
    background-color: blue;
  }
}

.animated {
  animation: change-colors 5s 1s infinite;
}
```

# media queries

<!-- mobile simulate extension -->
