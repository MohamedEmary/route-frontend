---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 14 \par}\vspace{0.1cm}\hrule\end{title}
date: April 24, 2024
---

# Lighthouse

Lighthouse is a tab in chrome dev tools that helps you to test the performance, accessibility, and SEO of your website, then it gives you a score based on these tests.

<!-- # Web developer extension and document outline -->

# Video & Audio Tags

## Video

```{.html .numberLines}
<video src="video.mp4" controls></video>
```

Any video is a replaced element just like an image, so you can set its width and height.

Video tag has some attributes:

- `controls` attribute: adds a play/pause button, volume control, and a progress bar.
- `autoplay` attribute: plays the video automatically, but some browsers block it.
- `muted` attribute: mutes the video.
- `loop` attribute: plays the video in a loop.

<!-- REVIEW THIS PART -- You can also use playlist attribute

To show more than one video, you can use the `source` tag inside the video tag.

```{.html .numberLines}
<video controls>
  <source src="video1.mp4" type="video/mp4">
  <source src="video2.mp4" type="video/mp4">
</video>
``` -->

## Audio

```{.html .numberLines}
<audio src="audio.mp3" controls></audio>
```

Audio tag has the same attributes as the video tag.

<!-- To show more than one audio, you can use the `source` tag inside the audio tag.

```{.html .numberLines}
<audio controls>
  <source src="audio1.mp3" type="audio/mp3">
  <source src="audio2.mp3" type="audio/mp3">
</audio>
``` -->

# JavaScript

JS story in video and where did its name come from.

# where to write JS code

- Inline
- Internal
- External

- `window.alert`
- `console.log`
- `document.getElementById`
- `document.getElementById("demo").innerHTML = "Hello JavaScript";`
- `console.log(document.getElementById("demo"));`
- `console.log(document.getElementById("demo").innerHTML);` prints the tag
- Comments one line and multi-line
- variable declaration assignment:
  - in the same line or in different lines
  - since its a variable u can reassign it
  - the name can't start with a number or a special character except for `$` and `_`
  - variable name can't be a reserved word like `var`, `while`, `function`, etc
- Use camelCase for naming
- don't redeclare a variable with the same name
- Data types:
  - Primitive
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
  - Non-primitive
- To know the data type of a variable use `typeof`
- JS is a loosely typed language which means you don't have to declare the data type of a variable.
  <!-- - Languages that force you to declare the data type of a variable are called statically typed languages. -->
- strings are written inside `"string"` or `'string'` or `` `String` `` (backticks)
- `typeof null` is `object` which is a bug in JS
