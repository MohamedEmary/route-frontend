---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 2 \par}\vspace{0.1cm}\hrule\end{title}
date: March 6, 2024
---

# HTML Forms

HTML forms are used to collect user input. To make a form in HTML you need to use `<form>` tag. The user input is most often sent to a server for processing. The form tag is used to create an HTML form for user input.

Form can contain input elements like text fields and labels for these fields.

example:

```{.html .numberLines}
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```

<!-- ## Type Attribute -->

As you see in the example the value in `for` in the `label` element should be exactly the same as the value in `id` of the `input` field.

Each input field should hava a `name` attribute to be able to be sent to the server.

Sometimes you want the user to enter a password, an email, a phone number, a date, a color, a number, etc. HTML5 has a lot of new input types for these cases. Just use the `type` attribute to specify the type of input.

There is a lot of input types, some of them are:

::: {.columns .ragged columngap=2.5em column-rule="0.0pt solid black"}

- `text`
- `password`
- `email`
- `number`
- `date`

\columnbreak

- `color`
- `url`
- `tel`
- `search`
- `file`

:::

Example:

```{.html .numberLines}
<form>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Submit">
</form>
```

Each input element should have a `name`, `type` attributes.

You can also add the `value` attribute to set the default value of the input field.

The submit button is used to send the form to the server and it has a `submit` type.

The `<br>` used in the example above is used to add a line break between the input fields.

To allow uploading files you can use the `file` type, and to allow multiple files you can use the `multiple` attribute.

You can also allow only a specific type of files using the `accept` attribute.

Example:

```{.html .numberLines}
<form action="/action_page.php">
  <label for="file">Select files:</label><br>
  <input type="file" id="file" name="file" multiple accept=".png"><br>
  <input type="submit">
</form>
```

To allow any type of images you can use `accept="image/*"`. See this [link](https://www.w3schools.com/tags/att_input_accept.asp) for more information.

The `button` element has a `type` attribute that can be `submit`, `reset`, or `button`.

- `submit`: The button submits the form data to the server. (This is the *default*)
- `reset`: The button resets all the form data to its initial values.
- `button`: The button does nothing.

You can also use a regular `input` tag instead of `button` and set the `type` attribute to `submit`, `reset`, or `button`, but it's better to use the `button` tag.
