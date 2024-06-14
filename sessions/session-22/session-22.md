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

# Traversing the DOM

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

# Important Differences

## `previousSibling`, `nextSibling` VS `previousElementSibling`, `nextElementSibling`

- `previousSibling` and `nextSibling` return nodes and these nodes include both element nodes and non-element nodes (like text and comment nodes).
- `previousElementSibling` and `nextElementSibling` return only element nodes and ignore text and comment nodes.

```{.html .numberLines}
<div>
  <p>Paragraph 1</p>
  Text
  <p>Paragraph 2</p>
</div>
```

If the current node is the first `<p>` element, `nextSibling` would return the text node `Text`, while `nextElementSibling` would return the second `<p>` element.

## NodeList VS HTML Collection

| NodeList                                                   | HTML Collection                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------- |
| Static (Does not update when the DOM changes)              | Live (Updates when the DOM changes)                         |
| Returns a list of nodes                                    | Returns a list of elements                                  |
| Nodes can be of any type like element, text, comment, etc. | Elements only                                               |
| Returned by methods like `querySelectorAll`, `childNodes`  | Returned by methods like `getElementsByTagName`, `children` |

By saying that the `NodeList` is static, it means that if you add an element to the DOM after getting the `NodeList`, the `NodeList` will not include the new element. On the other hand, the `HTML Collection` is live, which means that it will include the new element even after getting the `HTML Collection`.

Example:

HTML:

```{.html .numberLines}
<div>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

JavaScript:

```{.js .numberLines}
var div = document.querySelector('div');
var paragraphsCollection = div.getElementsByTagName('p');
var paragraphsNodeList = div.querySelectorAll('p');

console.log(paragraphsCollection.length); // 2
console.log(paragraphsNodeList.length);   // 2

var newParagraph = document.createElement('p');
newParagraph.innerText = 'New paragraph';

div.append(newParagraph);

console.log(paragraphsCollection.length); // 3
console.log(paragraphsNodeList.length);   // 2
```

In this example, the `paragraphsCollection` will have a length of 3, while the `paragraphsNodeList` will have a length of 2 because the `NodeList` is static and does not change when the DOM changes while the `HTML Collection` is live and changes when the DOM changes.

# Browser Object Model (BOM)

Browser Object Model or BOM is a set of objects provided by the browser to interact with the browser itself.

## DOM VS BOM

The DOM can be accessed via the BOM through the `window.document` property. So, you can say that the DOM is part of the BOM in a browser environment.

`window` is a super global object in the browser environment.

DOM is concerned with the content of the web document, while the BOM is concerned with the browser environment.

## BOM Methods

Some of the BOM methods include:

- `setInterval()`: Calls a function or evaluates an expression each time a specified number of milliseconds elapses.

For example, to display the value of a counter every second:

```{.js .numberLines}
function incrementCounter() {
  console.log(counter);
  counter++;
}

var counter = 0;
var interval = setInterval(incrementCounter, 1000);
```

- `clearInterval()`: Stops the intervals set by `setInterval()`.

For example, to stop the counter we made earlier when the user clicks a button:

```{.js .numberLines}
var button = document.getElementById('stop');

button.addEventListener('click', function() {
  console.log("Counter stopped");
  clearInterval(interval);
});
```

- `setTimeout()`: Calls a function or evaluates an expression **once** after a specified number of milliseconds.

For example, to display a message after 3 seconds:

```{.js .numberLines}
function showMessage() {
  console.log("Hello, world!");
}

setTimeout(showMessage, 3000);
```

- `alert()`: Displays an alert box with a message and an OK button.

For example:

```{.js .numberLines}
alert("Hello, world!");
```

- `window.open()`: Opens a new browser window or a new tab.

For example, This will open a new tab with Google's homepage.

```{.js .numberLines}
var googleBtn = document.getElementById('open');
googleBtn.addEventListener('click', function() {
  window.open('https://www.google.com', '_blank');
});
```

`_blank` is the name of the target window. It specifies that the URL should be opened in a new tab and it's the default value. To open the URL in the same tab, you can use `_self`.
