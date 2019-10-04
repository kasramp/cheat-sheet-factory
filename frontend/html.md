---
title: HTML 
category: Front-end
layout: 2017/sheet
updated: 2019-10-03
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
        <option value="highschool">High School</option>
        <option value="bachelors">Bachelors</option>
        <option value="masters">Masters</option>
        <option value="phd">PhD</option>
    </select>

    <!-- Multiple selection show three item and then scroll -->
    <select multiple name="favourite-animals" size="3">
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
        <option value="fish">Fish</option>
        <option value="turtle">Turtles</option>
        <option value="horse">Horses</option>
        <option value="fox">Foxes</option>
        <option value="cow">Cows</option>
    </select>

    <textarea name="description" cols="50" rows="10"></textarea>

    <!-- Size in characters -->
    <input type="text" name="country-code" size="30">

    <!-- Submit button with image -->
    <input type="image" name="submit" height="100px" width="100px" src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg"   border="5px" alt="btn">

    <!-- Email input -->
    <input type="email" name="email-address"> 

    <!-- Number input -->
    <input type="number" name="age">

    <!-- Range/Volume input -->
    <input type="range" name="happiness" min="0" max="100" value="60" step="5">

    <!-- Date input -->
    <input type="date" name="birthday" value="2019-10-04" min="1900-01-01" max="2019-12-31">

    <!-- Time input -->
    <input type="time" name="appointment" min="09:00" max="18:00" required>

    <!-- Color picker -->
    <input type="color" value="#e66465" name="favorite-color"> 

    <input type="reset">

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

<!-- Starts at number 2 -->
<ol start=2>
  <li>Night Wish</li>
  <li>Eminem</li>
  <li>LP</li>
</ol> 

<h2>Definition list, definition term and definition description</h2>
<!-- Definition list -->
<dl>
  <!-- Definition term -->
  <dt>Hello</dt>
  <!-- Definition description -->
  <dd>English greeting</dd>
  <dt>Hola!</dt>
  <dd>Spanish greeting</dd>
  <dt>Hallo</dt>
  <dd>Germany greeting</dd>
</dl>
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

### Pre formated text

```html
<pre>This is a preformatted text</pre>
```

### Typewriter text

```html
<tt>This is a text for testing purposes only</tt>
```

### Code block

```html
<code>
    echo "Hello World!"
</code>
```

### Citation

```html
<cite>
    Citation text. In Italics
</cite>
```

### Address

```html
<address>
My home, address, is here
</address>
```

### Italics

```html
<em>Italics text</em>
```

### Bold

```html
<strong>Bold text</strong>
```

### Font tag

```html
<!-- Font size -->
<font size="10px"></font> 
<!-- Font color -->
<font color="red"></font>
<!-- Font style -->
<font face="Open Sans"> </font>
```

### Abbr tag

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

### ‌Base tag

```html
<!-- Defines a base URL for all links in the page -->
<base href="http://www.example.com/">
```

### Text direction

```html
<p>This paragraph will go left-to-right.</p>
<!-- Direction right to left -->
<p><bdo dir="rtl">This paragraph will go right-to-left.</bdo></p>
```

### Formatting

```html
<!-- Paragraph -->
<p>
    This is a paragraph tag.
</p>

<!-- Line break -->
<br>

<!-- Quote with indentation on both side, a tab length -->
<blockquote>
    My quote goes here
</blockquote>

<!-- div and span -->
<div>
    To format block content
</div>

<span>
    To format inline content
</span>

<!-- Strikethrough text -->
<del>This is outdated information</del>


```

### Link tag

```html
<a href="https://google.com">Google</a>
<a href="mailto:test@test.com">Mail me</a>
<a href="#id">Anchor within a doc</a>
```

### Horizontal line

```html
<hr>

<!-- Thickness -->
<hr size="5px">

<!-- Length, starts in middle -->
<hr width="20px">

<!-- No shadow -->
<hr noshade>
```

### Image

```html

<!-- Basic image -->
<img  src="url" />

<!--
    Alignment: use CSS instead. Values: `left/right/center/bottom/top/middle`
    Border: use CSS instead.
    Alt: alternative when browser is not supporting image or when image is not available
    -->
<img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg" align="center" border="2px" height="500px" width="600px" alt="flower" />
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

### Reference

+ Some more details, [here](https://github.com/kasramp/cheat-sheet-factory/blob/gh-pages/_docs/pdfs/HTML%20Cheat%20Sheet.pdf)
+ HTML 5 cheat sheet, [here](https://github.com/kasramp/cheat-sheet-factory/blob/gh-pages/_docs/pdfs/HTML5%20Cheat%20Sheet.pdf)