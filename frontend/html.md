---
title: HTML 
category: Front-end
layout: 2017/sheet
updated: 2019-10-01
keywords:
    - "HTML"
    - "HTML cheat sheet"
prism_languages: [html]
intro: |
    Cheat sheet for HTML
---

Shortcuts
---------
{: .-two-column}

### Basic HTML document

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta charset="UTF-8">
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <script src="jquery-3.4.1.min.js"></script>
    </body>
</html>
```

### Basic HTML document with author tag

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta charset="UTF-8">
        <!-- Description is very important for SEO -->
        <meta name="description" content="Something">
        <!-- Important for SEO -->
        <meta name="author" content="Kasra">
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <!-- To resize base on the device size -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <script src="jquery-3.4.1.min.js"></script>
    </body>
</html>
```

### Audio tag

```html
<audio width="600" controls autoplay loop>
    <source src="audio.mp3" type="audio/mp3">
</audio>
```

### Video tag

```html
<video width="800" height="600" controls>
    <source src="video.mp4"  type="video/mp4">
</video>
```

### Form tag

```html
<form method="GET" action="a page or url">

    <input name="address" placeholder="Address Line 1" />
    <input name type="checkbox" name="married" />Married

    <input name type="radio" name="gender" value="male" />Male
    <input name type="radio" name="gender" value="female"/>Female

    <select name="education">
        <option value"highschool">High School</option>
        <option value="bachelors">Bachelors</option>
        <option value="masters">Masters</option>
        <option value="phd">PhD</option>
    </select>

    <button type="submit">Submit</button>
</form>
```

### Table tag

```html
<table border="1px">
    <thead>
        <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>#1</td>
            <td>Kasra</td>
            <td>30</td>
        </tr>
        <tr>
            <td>#2</td>
            <td>John</td>
            <td>45</td>
        </tr>
    </tbody>
</table>
```

### List

```html
<h2>An Unordered List</h2>

<ul>
  <li>John Wick</li>
  <li>The Equalizer</li>
  <li>Suicide Squad</li>
</ul>  

<h2>An Ordered List</h2>

<ol>
  <li>Night Wish</li>
  <li>Eminem</li>
  <li>LP</li>
</ol> 
```

### Section

+ Between `header` and `footer` can place `main` tag which will refer to `main` section.
+ `main` can have multiple `section` tags.

```html
<body>
    <header>
        Header here
    </header>

    <main>
        <section>
            <article>Article one</article>
        </section>
    </main>

    <footer>
        Footer here
    </footer>
</body>
```



### Notes

+ HTML 5 introduces two new elements call `header` and `footer`
+ Copyright symbol: `&copy;`
+ `div` is taking one full line, called `blocked element` whereas `span` is an inline element and only takes whatever space needed
+ It's recommended to add the JS at the end of HTML file
+ Each HTML element has three wrapped around three boxes. From inner to outter `padding`, `border`, and `margin`
+ `padding` is the space between the element and border
+ `margin` is the space between margin and border
+ By default we should only manipulate padding unless want to change the inner element alignment
+ for article, summary or post can use `article` tag instead of `div`