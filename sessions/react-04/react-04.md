---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries React Session 4 \par}\vspace{0.1cm}\hrule\end{title}
date: August 12, 2024
---

# React Component Life Cycle

1. Mounting: Place the Component into the DOM
2. Update: Change in Props or State
3. Unmounting: Remove the Component from the DOM

# Final Project API

[API Documentation Link](https://documenter.getpostman.com/view/5709532/2s93JqTRWN)

---

Base URL: `https://ecommerce.routemisr.com`

---

Signup: `https://ecommerce.routemisr.com/api/v1/auth/signup`

Method: `POST`

body of the request:

```{.json .numberLines}
{
  "name": "Ahmed Abd Al-Muti",
  "email": "ahmedmutti@gmail.com",
  "password": "Ahmed@123",
  "rePassword": "Ahmed@123",
  "phone": "01010700700"
}
```

Change the `name`, `email`, `password`, `rePassword`, and `phone` to the user's data.
