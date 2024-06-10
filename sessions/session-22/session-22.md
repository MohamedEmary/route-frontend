---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 22 \par}\vspace{0.1cm}\hrule\end{title}
date: June 10, 2024
---

# `innerHTML` and `innerText`

## `innerHTML`

- `innerHTML` returns the HTML content of an element.
- When assigning a value with HTML tags to `innerHTML`, the browser will render the HTML tags as HTML elements.
- When printing the value of `innerHTML` of an element that contains HTML tags, the browser will show the HTML tags in the output.

Example:

HTML:

```{.html .numberLines}
<p id="example">My <strong>example</strong> paragraph</p>
```

JavaScript:

```{.js .numberLines}
const example = document.getElementById('example');
console.log(example.innerHTML); // My <strong>example</strong> paragraph

example.innerHTML = 'My <strong>new</strong> paragraph';
console.log(example.innerHTML); // My <strong>new</strong> paragraph
```

## `innerText`

- `innerText` returns the text content of an element.
- When assigning a value with HTML tags to `innerText`, the browser will render the HTML tags as plain text.
- When printing the value of `innerText` of an element that contains HTML tags, the browser will show the HTML tags in the output.

Example:

HTML:

```{.html .numberLines}
<p id="example">My <strong>example</strong> paragraph</p>
```

JavaScript:

```{.js .numberLines}
const example = document.getElementById('example');
console.log(example.innerText); // My example paragraph

example.innerText = 'My <strong>new</strong> paragraph';
console.log(example.innerText); // My <strong>new</strong> paragraph
```

Here the `<strong>new</strong>` appear in the web page as it is because `innerText` does not render HTML tags.

<!-- 

Create element
set its attributes
append or prepend it inside another element in the DOM (child)
add element before or after another element in the DOM (sibling)
Those functions take elements as arguments, not html tags

Traversing the DOM which is a way to move around the DOM tree and select elements based on their relationship to other elements.
element.children ==> returns an "HTML collection" of an element's child elements
element.childNodes ==> returns a "NodeList" of an element's child nodes (including text nodes and HTML tags and even spaces and linebreaks between tags and comments)
element.nextElementSibling ==> returns the next sibling element of an element (returns the next element node)
element.previousElementSibling ==> returns the previous sibling element of an element (returns the previous element node)
element.previousSibling ==> returns the previous sibling node of an element (returns the previous node)
element.nextSibling ==> returns the next sibling node of an element (returns the next node)
***What is the difference between previousSibling, nextSibling, previousElementSibling, and nextElementSibling?***
element.parentElement ==> returns the parent element of an element
element.parentNode ==> returns the parent node of an element
You can add elements to the HTML collection and when printing the HTML collection, the output will have the new element while in the NodeList, the output will not have the new element. Try it with `getElementsByTagName` and `querySelectorAll`. 
--- --- --- --- -- This is because the HTML collection is live while the NodeList is static. 

## DOM vs BOM

BOM is the Browser Object Model

-->
