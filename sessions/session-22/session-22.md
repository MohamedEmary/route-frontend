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
var example = document.getElementById('example');
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
var example = document.getElementById('example');
console.log(example.innerText); // My example paragraph

example.innerText = 'My <strong>new</strong> paragraph';
console.log(example.innerText); // My <strong>new</strong> paragraph
```

Here the `<strong>new</strong>` appear in the web page as it is because `innerText` does not render HTML tags.

# Creating Elements

To create an element, you can use the `document.createElement()` method. This method creates a new element with the specified tag name.

Example:

```{.js .numberLines}
var newElement = document.createElement('div');
```

To set the attributes of the new element, you can use the `setAttribute()` method or the `.` notation.

Example:

```{.js .numberLines}
// Using the setAttribute() method
newElement.setAttribute('id', 'new-element');
newElement.setAttribute('class', 'new-class');

// Or using the . notation
newElement.id = 'new-element';
newElement.className = 'new-class';
```

## Appending & Prepending Elements (Child)

To append an element inside another element in the DOM, you can use the `append()` method, and to prepend an element, you can use the `prepend()` method.

Example:

HTML:

```{.html .numberLines}
<div id="parent" style="background-color: gold">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
```

JavaScript:

```{.js .numberLines}
var parent = document.getElementById('parent');
var newElement = document.createElement('p');
newElement.innerText = 'New paragraph';

// Append the new element inside the parent element
parent.append(newElement);
```

Now the result will look like this:

![Using `append`](image/append.png){width=300px}

## Add Element Before or After Another (Sibling)

To add an element before or after another element in the DOM, you can use the `before()` and `after()` methods.

Example:

HTML:

```{.html .numberLines}
<div id="parent" style="background-color: gold">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
```

JavaScript:

```{.js .numberLines}
var parent = document.getElementById('parent');
var newElement = document.createElement('p');
newElement.innerText = 'New paragraph';

// Add the new element after the second paragraph
parent.after(newElement);
```

Now the result will look like this:

![Using `after`](image/after.png){width=300px}

<!-- What is the difference between append and appendChild -->

\begin{box4}{Note}

You can only send elements as arguments to the \texttt{append()}, \texttt{prepend()}, \texttt{before()}, and \texttt{after()} methods. If you send HTML tag or text, it will be treated as a string and not as an element.

\end{box4}

## Traversing the DOM

Traversing the DOM which is a way to move around the DOM tree and select elements based on their relationship to other elements.

Some useful properties and methods for traversing the DOM are:

1. `parentElement`: returns the parent **element** of an element.
2. `parentNode`: returns the parent **node** of an element.
3. `firstElementChild`: returns the first child **element** of an element.
4. `lastElementChild`: returns the last child **element** of an element.
5. `children`: returns an **HTML collection** of an element's child elements.
6. `childNodes`: returns a **NodeList** of an element's child nodes.
7. `nextElementSibling`: returns the next sibling **element** of an element.
8. `previousElementSibling`: returns the previous sibling **element** of an element.
9. `nextSibling`: returns the next sibling **node** of an element.
10. `previousSibling`: returns the previous sibling **node** of an element.

Example:

HTML:

```{.html .numberLines}
<div id="parent" style="background-color: gold">
  <p id="p1">First paragraph</p>
  <p>Second paragraph</p>
</div>
```

JavaScript:

```{.js .numberLines}
var parent = document.getElementById('parent');
var p1 = document.getElementById('p1');

// Get the parent element of the first paragraph
var parentElement = p1.parentElement;
console.log(parentElement.id); // parent

// Get the parent node of the first paragraph
var parentNode = p1.parentNode;
console.log(parentNode.id); // parent

// Get the first child of the parent element
var firstChild = parent.firstElementChild;
console.log(firstChild.innerText); // First paragraph

// Get the last child of the parent element
var lastChild = parent.lastElementChild;
console.log(lastChild.innerText); // Second paragraph

// Get all the child elements of the parent element
var children = parent.children;
console.log(children.length); // 2
console.log(children[1]); // <p>Second paragraph</p>

// Get all the child nodes of the parent element
var childNodes = parent.childNodes;
console.log(childNodes.length); // 3
console.log(childNodes[1]); // #text

// Get the next sibling element of the first paragraph
var nextSibling = p1.nextElementSibling;
console.log(nextSibling.innerText); // Second paragraph

// Get the previous sibling element of the second paragraph
var previousSibling = lastChild.previousElementSibling;
console.log(previousSibling.innerText); // First paragraph

// Get the next sibling node of the first paragraph
var nextNode = p1.nextSibling;
console.log(nextNode); // #text

// Get the previous sibling node of the second paragraph
var previousNode = lastChild.previousSibling;
console.log(previousNode); // #text
```

<!-- 

(including text nodes and HTML tags and even spaces and linebreaks between tags and comments)

***What is the difference between previousSibling, nextSibling, previousElementSibling, and nextElementSibling?***

element.parentElement ==> returns the parent element of an element
element.parentNode ==> returns the parent node of an element
You can add elements to the HTML collection and when printing the HTML collection, the output will have the new element while in the NodeList, the output will not have the new element. Try it with `getElementsByTagName` and `querySelectorAll`. 
--- --- --- --- -- This is because the HTML collection is live while the NodeList is static. 

## DOM vs BOM

BOM is the Browser Object Model

-->
