---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 27 \par}\vspace{0.1cm}\hrule\end{title}
date: July 17, 2024
---

# Revision

When you make a class using sugar syntax, you can't define variables with the `let, const, var` keywords outside of the `constructor` method. You can define them without the keywords, but they will be treated as properties of the class. You can't also use `function` keyword to define methods.

# JQuery

## Library vs Framework

- **Library**: A library is a small piece of code that you can call from your own code, to help you do things more quickly/easily. For example, a library might include code related to animation for example. Libraries are usually small and focus on doing one thing and doing it well. Ex: JQuery, React.
- **Framework**: A framework is a collection of code that, together, provides a solution to a problem. Frameworks are usually large and complex. They can include many libraries. Ex: Angular.

## Why JQuery?

- **Simplicity**: It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.
- **Write less, do more**: It allows you to achieve more things using less code.

JQuery has a lot of methods that allow you to manipulate the DOM, create animations, and handle events.

## How to use JQuery?

You can use JQuery by including the library in your HTML file. You can download the library from the JQuery website or use a CDN.

At the end of the body tag, you can include the library before your own script.

```{.html .numberLines}
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>
</body>
```

You can also use CDN or download the library and add it to your project files then include it in your HTML file.

# How to use JQuery?

You can use JQuery by selecting elements and applying methods on them.

## Selecting elements

You can select elements using CSS selectors, on the form `$('selector')`.

- **Tag name**: `$('p')`
- **Class**: `$('.class-name')`
- **ID**: `$('#id-name')`
- **Attribute**: `$('input[type="text"]')`

<!-- This `$()` is a method in JQuery that returns every JQuery function. -->

\begin{box1}{Side Note:}
You can also use \texttt{jQuery(\textquotesingle{}selector\textquotesingle{})} instead of \texttt{\$(\textquotesingle{}selector\textquotesingle{})} and it will work the same way.\\ This is useful if you are using another library that uses the \texttt{\$} symbol.
\end{box1}

## Effects

You can use JQuery to create animations and effects on elements.

Examples:

Conside this HTML code:

```{.html .numberLines}
<div id="my-div" class="bg-info" style="width: 300px; height: 300px"></div>
<button class="btn btn-danger">Click</button>
```

Ex 1:

- To make the `div` element fade out when you click the button you can use the `fadeOut()` method.

```{.js .numberLines}
$('button').click(function() {
  $('#my-div').fadeOut();
});
```

You can also pass a duration to the `fadeOut()` method ex: `fadeOut(1000)`.

To hide the element:

```{.js .numberLines}
$('button').click(function() {
  $('#my-div').hide();
});
```

- If the element has a `display: none` style, the `show()` method will show it.

```{.js .numberLines}
$('button').click(function() {
  $('#my-div').show();
});
```

- The `toggle()` method will show the element if it's hidden and hide it if it's shown.

**More Functions**:

- `slideUp()`, `slideDown()`, `slideToggle()`: Slide an element up, down, or toggle it. These methods work with the element **height**.
  - Toggle means that if the element is hidden, it will show it, and if it's shown, it will hide it.
- `fadeIn()`, `fadeOut()`, `fadeToggle()`, `fadeTo()`: Fade an element in, out, toggle it, or change its **opacity** to a specific value ex. `fadeTo(1000, 0.5)`.

## Effects With Callbacks

Consider this HTML code:

```{.html .numberLines}
<div id="demo1" class="bg-info" style="width: 200px; height: 200px"></div>
<div id="demo2" class="bg-dark" style="width: 200px; height: 200px"></div>
<div id="demo3" class="bg-warning" style="width: 200px; height: 200px"></div>

<button class="btn btn-danger">Hide All</button>
```

And this JS code:

```{.js .numberLines}
$('button').click(function() {
  $('#demo1').hide(1000);
  $('#demo2').hide(1000);
  $('#demo3').hide(1000);
});
```

Since the `hide()` method is asynchronous and non-blocking, the three elements will hide at the same time.

**How to hide them one after the other?**

You can use a callback function by passing a function to the `hide()` method and that function will be called when the element is hidden.

```{.js .numberLines}
$('#demo1').hide(1000, function() {
  $('#demo2').hide(1000, function() {
    $('#demo3').hide(1000);
  });
});
```

This will hide the elements one after the other.

Notice that if these effects are applied to the same element, they will be executed one after the other without the need for a callback function.

If you apply multiple effects to the same element, you can use the chaining method.

```{.js .numberLines}
$('#demo1').hide(1000).show(1000).fadeOut(1000)

// Equivalent to
$('#demo1').hide(1000);
$('#demo1').show(1000);
$('#demo1').fadeOut(1000);
```

## Custom Effects With `animate()`

You can create custom animations using the `animate()` method.

Syntax:

```{.js .numberLines}
$('selector').animate({styles}, duration, easing, callback);
```

Example:

```{.js .numberLines}
$('#demo1').animate({width: '300px'}, 1000);
```

This will animate the width of the element to 300px in 1 second.

You can have multiple styles in the object passed to the `animate()` method.

```{.js .numberLines}
$('#demo1').animate({width: '300px', height: '300px', borderRadius: '50%'}, 1000);
```

This will animate the width, height, and border-radius of the element at the same time to the specified values in 1 second.

To make them animate one after the other, you can just chain the `animate()` methods.

```{.js .numberLines}
$('#demo1').animate({width: '300px'}, 1000).animate({height: '300px'}, 1000).animate({borderRadius: '50%'}, 1000);


// or
$('#demo1').animate({width: '300px'}, 1000);
$('#demo1').animate({height: '300px'}, 1000);
$('#demo1').animate({borderRadius: '50%'}, 1000);
```

If you have two elements and you want to animate them one after the other, you can use the callback function.

```{.js .numberLines}
$('#demo1').animate({width: '300px'}, 1000).animate({height: '300px'}, 1000, function() {
  $('#demo2').animate({width: '300px'}, 1000).animate({height: '300px'}, 1000);
});
```

This will animate the first element by changing its width then height, then animate the second element by changing its width then height.

Above example Steps:

$$
\text{First element width} \xrightarrow{Then} \text{Its height}  \to \text{Second element width} \xrightarrow{Then} \text{Its height}
$$

If you have an element you can even make the element increase its width by 50px from its current width with each click.

```{.js .numberLines}
$('button').click(function() {
  $('#demo1').animate({width: '+=50px'}, 1000);
});
```

\begin{box4}{Important Note}
\texttt{animate()} method works with CSS properties that have numeric value only.
\end{box4}

To stop animation with a button click, you can use the `stop()` method.

```{.js .numberLines}
$('button').click(function() {
  $('#demo1').stop();
});
```

This will stop the animation of the element but other animations will continue.

If you pass `true` to the `stop()` method, it will clear the animation queue and stop all animations.

If you stop an animation (even without `true` as parameter) and this animation calls back another animation, the callback function will not be executed.

# DOM Manipulation With JQuery

JQuery allows you to manipulate the DOM easily.

## Get and Set

You can get and set the content, HTML, value, attributes, and CSS properties of elements using JQuery.

### Text Content

To get the content of an element, you can use the `text()` method.

```{.js .numberLines}
$('selector').text();
```

You can also pass a string to the `text()` method to set the content of the element.

```{.js .numberLines}
$('selector').text('New text');
```

### HTML Content

To get the HTML content of an element, you can use the `html()` method.

```{.js .numberLines}
$('selector').html();
```

You can also pass a string to the `html()` method to set the HTML content of the element.

```{.js .numberLines}
$('selector').html('<h1>New content</h1>');
```

### Input Value

To get the value of an input element, you can use the `val()` method.

```{.js .numberLines}
$('input').val();
```

You can also pass a string to the `val()` method to set the value of the input element.

```{.js .numberLines}
$('input').val('New value');
```

### Attribute

To get the attribute of an element, you can use the `attr()` method.

```{.js .numberLines}
$('selector').attr('attribute-name');
```

You can also pass a string to the `attr()` method to set the attribute of the element.

```{.js .numberLines}
$('selector').attr('attribute-name', 'value');
```

Example:

```{.html .numberLines}
<input type="text" id="my-input">
```

```{.js .numberLines}
$('input').attr('type'); // 'text'
```

### CSS

You can get the CSS value of a property of an element using the `css()` method.

```{.js .numberLines}
$('selector').css('property-name');
```

You can also pass a string to the `css()` method to set the CSS property of the element.

```{.js .numberLines}
$('selector').css('property-name', 'value');
```

Example:

```{.js .numberLines}
$('#demo1').css('background-color'); // 'rgb(255, 0, 0)'
$('#demo1').css('color', 'red');


// To set multiple CSS properties
$("#demo1").css({
  width: "100px",
  height: "100px",  
  borderRadius: "50%",
  transitionDuration: "1s",
});
```

### Width, Height

You can get and set the width and height of an element using the `width()` and `height()` methods.

```{.js .numberLines}
$('selector').width();
$('selector').height();
```

You can also pass a number to the `width()` and `height()` methods to set the width and height of the element.

```{.js .numberLines}
$('selector').width(100);
$('selector').height(100);
```

You can get the inner width and height of an element using the `innerWidth()` and `innerHeight()` methods.

`innerWidth` = `width` + `padding`

```{.js .numberLines}
$('selector').innerWidth();
$('selector').innerHeight();
```

You can get the outer width and height of an element using the `outerWidth()` and `outerHeight()` methods.

`outerWidth` = `width` + `padding` + `border`

```{.js .numberLines}
$('selector').outerWidth();
$('selector').outerHeight();
```

You can also pass `true` to the `outerWidth()` and `outerHeight()` methods to include the margin.

```{.js .numberLines}
$('selector').outerWidth(true);
$('selector').outerHeight(true);
```

## Add and Remove

You can add and remove elements, classes, and attributes using JQuery.

### Elements

To add elements, you can use the `append()`, `prepend()`, `after()`, and `before()` methods.

- `append()`: Add elements inside the selected element at the end.
- `prepend()`: Add elements inside the selected element at the beginning.
- `after()`: Add elements after the selected element.
- `before()`: Add elements before the selected element.

Example:

Consider this HTML:

```{.html .numberLines}
<div id="my-div"></div>
```

And in JS:

```{.js .numberLines}
$('#my-div').append('<p>New paragraph</p>');  // Child at the end
// <div id="my-div"><p>New paragraph</p></div>

$('#my-div').prepend('<p>New paragraph</p>'); // Child at the beginning
// <div id="my-div"><p>New paragraph</p></div>

$('#my-div').after('<p>New paragraph</p>'); // Sibling after
// <div id="my-div"></div><p>New paragraph</p>

$('#my-div').before('<p>New paragraph</p>');  // Sibling before
// <p>New paragraph</p><div id="my-div"></div>
```

You can even move existing element by passing it to the `append()`, `prepend()`, `after()`, and `before()` methods.

```{.js .numberLines}
$('#my-div').append($('p')); // Moves the p element inside the div element
```

To remove elements, you can use the `remove()` method.

```{.js .numberLines}
$('selector').remove();
```

This will remove the selected element.

To empty an element, you can use the `empty()` method.

```{.js .numberLines}
$('selector').empty();
```

This will remove all the children of the selected element.

### Classes

You can add and remove classes using JQuery.

To add a class to an element, you can use the `addClass()` method.

```{.js .numberLines}
$('selector').addClass('class-name');

// To add multiple classes
$('selector').addClass('class1 class2 class3');
```

To remove a class from an element, you can use the `removeClass()` method.

```{.js .numberLines}
$('selector').removeClass('class-name');
```

To toggle a class on an element, you can use the `toggleClass()` method.

```{.js .numberLines}
$('selector').toggleClass('class-name');
```

This will add the class if it's not there and remove it if it's there.

### Attributes

You can add and remove attributes using JQuery.

To add an attribute to an element, you can use the `attr()` method.

```{.js .numberLines}
$('selector').attr('attribute-name', 'value');
```

To remove an attribute from an element, you can use the `removeAttr()` method.

```{.js .numberLines}
$('selector').removeAttr('attribute-name');
```

# Traversing

JQuery allows you to traverse the DOM easily.

- `.parent()`: The direct parent of the selected element.
- `.parents()`: All the ancestors of the selected element.
- `.parentsUntil('selector')`: All the ancestors of the selected element until a specific element, and that element is not included.

You can use the methods mentioned before to apply styles, add classes, and remove elements from the elements you are traversing.

- `.children()`: The direct children of the selected element.
  - `.children('selector')`: The direct children of the selected element that match the selector.
- `.find('selector')`: The descendants of the selected element that match the selector.
  - `.find('*')`: All the descendants of the selected element.
- `.siblings()`: The siblings of the selected element.
  - `.siblings('selector')`: The siblings of the selected element that match the selector.
- `.next()`, `.prev()`: The next or previous sibling of the selected element.
- `.nextAll()`, `.prevAll()`: All the next or previous siblings of the selected element.
- `.nextUntil('selector')`, `.prevUntil('selector')`: All the next or previous siblings of the selected element until a specific element, and that element is not included.
- `$('span').not('selector')`: Select all span elements that do not match the selector.
- `$('span').eq(index)`: Select the span element at the specified index.
- `$('span').first()`: Select the first span element.
- `$('span').last()`: Select the last span element.
- `$('span').filter('selector')`: Select the span elements that match the selector.

For a nice JQuery cheat sheet, you can visit [this link](https://htmlcheatsheet.com/jquery/).

\pagebreak

# Summary

- JQuery is a library that makes things like HTML document traversal and manipulation, event handling, and animation much simpler.
- You can use JQuery by including the library in your HTML file.
- You can select elements using CSS selectors.
- You can create animations and effects on elements using JQuery.
- You can create custom animations using the `animate()` method.
- You can manipulate the DOM using JQuery.
- You can traverse the DOM using JQuery.
