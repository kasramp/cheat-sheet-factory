---
title: CSS 
category: Front-end
layout: 2017/sheet
updated: 2020-05-18
keywords:
    - "CSS"
    - "CSS cheat sheet"
prism_languages: [css]
intro: |
    Cheat sheet for CSS
---

Shortcuts
---------
{: .-two-column}

### Add CSS file to HTML

```html
<html>
    <head>
        <link rel="stylesheet" href="css/styles.css" />
    </head>
</html>
```
### Block element to inline

```css
h1 {
    display: inline;
}
```
- Block element has the full width but inline does not have the full width. 
- Block supports height in CSS but inline doesn't have such an attribute.

### Selector by id

```css
#id-element {

}
```

### Import font

```css
@import url('https://fonts.googleapis.com/css?family=Germania+One');
/* fonts.google.com */
```
