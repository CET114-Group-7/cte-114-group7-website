# Learn HTML, CSS, and JavaScript: Group 7 Website Guide

This guide is written for any group member who has never touched code before. It explains everything from the very beginning, and then walks through our actual website files so you can make changes yourself with confidence.

Take your time with this. You do not need to read it all in one sitting.

---

# PART 1: The Big Picture

Every website is built from three languages working together:

1. **HTML** (HyperText Markup Language): builds the structure and content of a page. It is like the skeleton and the words. Headings, paragraphs, images, buttons, and forms are all HTML.
2. **CSS** (Cascading Style Sheets): controls how everything looks. Colors, fonts, spacing, sizes, and layout are all CSS. Think of CSS as the paint, clothing, and interior design of the house that HTML built.
3. **JavaScript** (JS): adds behavior and interaction. It makes things happen when a user clicks, types, or scrolls. Our mobile menu button and our contact form both use JavaScript.

A simple way to remember it:
- HTML = what is on the page
- CSS = how it looks
- JavaScript = what it does when you interact with it

Your web browser (Chrome, Safari, Firefox, Edge) reads all three files and turns them into the website you see on screen.

---

# PART 2: HTML, explained completely

## 2.1 The basic structure of every HTML file

Every HTML page starts with the same skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Page Title Goes Here</title>
</head>
<body>

Everything visible on the page goes here.

</body>
</html>
```

Explanation of each line:
- `<!DOCTYPE html>` tells the browser "this is a modern HTML5 document." It always goes at the very top.
- `<html lang="en">` wraps the entire page. `lang="en"` tells the browser the page is written in English.
- `<head>` contains information about the page that is not directly visible, such as the page title (shown in the browser tab) and links to CSS files.
- `<body>` contains everything the user actually sees: text, images, buttons, forms, and so on.

## 2.2 What is a "tag" and an "element"

HTML is built from tags. A tag is written with angle brackets, like `<p>`. Most tags come in pairs: an opening tag and a closing tag.

```html
<p>This is a paragraph of text.</p>
```

- `<p>` is the opening tag
- `</p>` is the closing tag (notice the forward slash)
- Everything between them is the content

Together, an opening tag, its content, and its closing tag are called an "element."

Some tags do not need a closing tag because they do not wrap around content. These are called self-closing tags, for example:

```html
<img src="logo.png" alt="Group 7 logo">
<br>
```

## 2.3 Attributes

Attributes give extra information to a tag. They are written inside the opening tag, as `name="value"`.

```html
<a href="about.html" class="active">Team</a>
```

- `href="about.html"` tells the link where to go
- `class="active"` gives this element a label that CSS or JavaScript can use to target it

Common attributes you will see in our project:
- `href`: the destination of a link (used on `<a>` tags)
- `src`: the source file of an image or script (used on `<img>` and `<script>` tags)
- `alt`: a text description of an image, shown if the image fails to load, and read aloud by screen readers
- `class`: a label used by CSS to apply styling, or by JavaScript to select the element. Multiple elements can share the same class.
- `id`: a unique label for one specific element. No two elements on the same page should share an id.

## 2.4 Common tags used in our website

| Tag | What it is for |
|---|---|
| `<h1>` to `<h6>` | Headings. `<h1>` is the biggest and most important, `<h6>` is the smallest. |
| `<p>` | A paragraph of text |
| `<a>` | A link. Uses `href` to say where it goes |
| `<img>` | An image. Uses `src` for the file and `alt` for a description |
| `<div>` | A generic box or container, used to group things together |
| `<span>` | A generic inline container, used to style a small piece of text inside a sentence |
| `<ul>` and `<li>` | An unordered (bulleted) list, and its list items |
| `<form>` | A container for input fields that collect information from a user |
| `<input>` | A single-line field where a user types (name, email, and so on) |
| `<textarea>` | A multi-line box where a user can type a longer message |
| `<button>` | A clickable button |
| `<label>` | A caption describing what an input field is for |
| `<header>` | Represents the top section of a page, usually containing a logo and navigation |
| `<nav>` (we use a `<div class="nav">` instead) | A container for navigation links |
| `<section>` | Groups a related chunk of content on the page |
| `<footer>` | Represents the bottom section of a page |

## 2.5 How our HTML files are organized

Every page in our site (`index.html`, `about.html`, `projects.html`, `contact.html`) follows the same pattern:

1. The `<head>` links to our fonts, our icon library, and our `styles.css` file.
2. A `<header>` containing our logo, group name, and navigation menu.
3. One or more `<section>` blocks containing the actual page content.
4. A `<footer>` with our copyright text.
5. A `<script src="script.js">` tag at the very bottom, which loads our JavaScript.

---

# PART 3: CSS, explained completely

## 3.1 How CSS connects to HTML

Our CSS lives in one separate file, `styles.css`. Every HTML page links to it with this line inside the `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

This means we only have to write a style once in `styles.css`, and it applies to every page that links to it. This is why all four of our pages look consistent.

## 3.2 The basic rule structure

A CSS rule looks like this:

```css
selector {
  property: value;
  property: value;
}
```

Example:

```css
h1 {
  color: #2a6ebb;
  font-size: 36px;
}
```

This says: "Find every `<h1>` element, and make its text color blue, and its font size 36 pixels."

- The **selector** (`h1`) says which HTML elements this rule applies to
- Each **property** (like `color`) is the thing you want to change
- Each **value** (like `#2a6ebb`) is what you want to change it to
- Every property and value pair ends with a semicolon `;`
- The whole rule is wrapped in curly braces `{ }`

## 3.3 Types of selectors

| Selector | Example | What it targets |
|---|---|---|
| Element selector | `p { }` | Every `<p>` tag on the page |
| Class selector | `.card { }` | Every element with `class="card"`. Notice the dot. |
| ID selector | `#contact-form { }` | The one element with `id="contact-form"`. Notice the hash symbol. |
| Descendant selector | `.navlinks a { }` | Every `<a>` tag that is inside an element with class `navlinks` |
| Hover state | `.btn:hover { }` | Applies only while the mouse is hovering over the element |

Classes are the most common selector you will use. In our HTML, you will see things like:

```html
<div class="panel card">
```

And in our CSS:

```css
.panel {
  border: 1px solid #e6e6e6;
  border-radius: 10px;
}
```

That rule applies to any element with `class="panel"` anywhere in our site.

## 3.4 The box model

Every element on a webpage is treated like a rectangular box. That box has four layers, from the inside out:

1. **Content**: the actual text or image
2. **Padding**: empty space between the content and the border (inside the box)
3. **Border**: a visible or invisible line around the padding
4. **Margin**: empty space outside the border, separating this box from other elements

Example:

```css
.panel {
  padding: 20px;
  border: 1px solid #e6e6e6;
  margin-bottom: 16px;
}
```

This gives the box 20 pixels of breathing room inside, a thin gray border, and 16 pixels of space below it before the next element starts.

## 3.5 Common properties used in our project

| Property | What it controls |
|---|---|
| `color` | Text color |
| `background-color` | The background color of an element |
| `font-family` | Which typeface is used |
| `font-size` | How big the text is |
| `font-weight` | How bold the text is (examples: 400 is normal, 600 or 700 is bold) |
| `text-align` | Left, center, or right alignment of text |
| `width` / `height` | The size of an element |
| `padding` | Inside spacing (see box model above) |
| `margin` | Outside spacing (see box model above) |
| `border` | A line around an element |
| `border-radius` | Rounds the corners of an element. Higher numbers are more rounded |
| `display` | How an element behaves in the layout. Common values: `block`, `flex`, `none` |
| `position` | How an element is positioned. Covered in detail below |

## 3.6 Flexbox (how we arrange items in a row)

Flexbox is how we line things up, like our navigation links or our card grids. You turn any container into a flex container like this:

```css
.navlinks {
  display: flex;
  gap: 8px;
}
```

- `display: flex` tells the browser "arrange the children of this box in a row, side by side"
- `gap: 8px` adds 8 pixels of space between each child
- `flex-wrap: wrap` (used in our `.grid` class) allows items to drop to a new line if there is not enough room, which is important for making the site work on small phone screens
- `justify-content: space-between` spreads items apart, with equal space between them
- `align-items: center` lines items up in the middle vertically

## 3.7 Responsive design (making the site work on phones and computers)

We use something called a **media query** to apply different CSS rules depending on the screen width. This is exactly how our mobile menu button appears only on small screens.

```css
@media (max-width: 700px) {
  .navtoggle {
    display: flex;
  }
}
```

This says: "Only apply this rule when the screen is 700 pixels wide or narrower." On a phone, this rule kicks in and shows the menu button. On a laptop, the screen is wider than 700 pixels, so this rule is ignored, and a different rule (outside the media query) keeps the button hidden while showing the full menu instead.

## 3.8 Positioning (how our header stays fixed while scrolling)

The `position` property controls how an element is placed on the page:

- `static`: the default. The element just sits in normal document flow.
- `relative`: the element stays in normal flow, but you can nudge it using `top`, `left`, `right`, `bottom`. It also becomes an anchor point for any child element that uses `position: absolute`.
- `absolute`: the element is removed from normal flow and positioned relative to its nearest ancestor that has `position: relative`, `sticky`, or `absolute`. This is how our mobile dropdown menu knows to appear directly under the header.
- `sticky`: the element scrolls normally until it reaches a certain point (in our case, the top of the screen), then it "sticks" there while the rest of the page scrolls underneath it. This is how our header stays fixed at the top of the screen.
- `fixed`: always stays in the same spot on the screen, no matter what, even relative to the whole browser window rather than any parent.

Our header uses this rule:

```css
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

`z-index` controls stacking order. A higher `z-index` means the element appears above other elements when they overlap. We set it high so the header always stays on top of the page content as you scroll.

---

# PART 4: JavaScript, explained completely

## 4.1 How JavaScript connects to HTML

Our JavaScript lives in one file, `script.js`. Every page loads it with this line, placed at the very bottom of the `<body>`, just before `</body>`:

```html
<script src="script.js"></script>
```

It is placed at the bottom so that the browser finishes building the whole page first, before running any JavaScript that tries to find and control elements on that page.

## 4.2 Variables

A variable is a named container that holds a value. In modern JavaScript, we mainly use `var`, `let`, or `const`:

```js
var toggleBtn = document.querySelector('.navtoggle');
```

This line finds the button on the page with class `navtoggle`, and stores a reference to it inside a variable named `toggleBtn`. We can now use `toggleBtn` later in the code to work with that exact button.

- `var` and `let` create a variable that can be changed later
- `const` creates a variable that cannot be reassigned later
- We use `var` in our file for simplicity

## 4.3 Selecting elements from the page

`document.querySelector('...')` is how JavaScript finds an element on the page, using the same kind of selector syntax as CSS:

```js
document.querySelector('.navtoggle')
```

finds the first element with class `navtoggle`, exactly like `.navtoggle { }` would target in CSS.

```js
document.querySelector('#contact-form')
```

finds the one element with `id="contact-form"`.

## 4.4 Events: making things happen on click

An "event listener" tells the browser: "when something specific happens to this element, run this block of code."

```js
toggleBtn.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});
```

Reading this line by line:
- `toggleBtn.addEventListener('click', ...)` says "watch the toggle button, and when it is clicked, do the following"
- `function () { ... }` is the block of code that runs every time the click happens
- `navLinks.classList.toggle('open')` adds the class `open` to the menu if it is not already there, or removes it if it is already there. This is exactly how clicking the button shows and hides the mobile menu.

## 4.5 classList: adding and removing CSS classes with JavaScript

`classList` lets JavaScript add, remove, or toggle a CSS class on an element, which is a very common way to make interactive websites:

- `element.classList.add('open')`: adds the class
- `element.classList.remove('open')`: removes the class
- `element.classList.toggle('open')`: adds it if missing, removes it if present

This matters because our CSS has a rule like:

```css
.navlinks.open {
  display: flex;
}
```

The menu is hidden by default, and only becomes visible once JavaScript adds the `open` class to it.

## 4.6 if statements

An `if` statement runs code only when a condition is true:

```js
if (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    ...
  });
}
```

This says: "only try to add a click listener if the button actually exists on this page." This protects us from errors on pages where a certain button or form might not exist.

## 4.7 Functions

A function is a named, reusable block of code. In our file, we use anonymous functions (functions without a name) directly inside `addEventListener`, but functions can also be written and named separately:

```js
function sayHello() {
  console.log('Hello!');
}
```

You would then "call" this function elsewhere in the code by writing `sayHello();`

## 4.8 Preventing a form from actually submitting

Our contact form uses this:

```js
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  ...
});
```

`e.preventDefault()` stops the browser's normal behavior, which would otherwise reload the page when a form is submitted. We stop that so we can instead show our own "Thank you" message using JavaScript.

---

# PART 5: A full walkthrough of our actual files

## 5.1 index.html (the Home page)

- The `<head>` section loads our Poppins font, our Bootstrap Icons library, and our `styles.css` file.
- The `<header>` contains our logo image, our group name, and the navigation menu with four links: Home, Team, Skills, Contact. Notice that the Home link has `class="active"`, which is what makes it appear highlighted in blue while you are on that page. On the other pages, the `active` class is moved to a different link.
- The `<section class="hero">` is the big introductory area with our heading and short description.
- The `.stats` section shows the four number boxes (10 members, 04 pages, and so on).
- Further down, three `.panel` boxes explain the assignment, our tools, and our team.
- The `<footer>` at the bottom shows our copyright line.

## 5.2 about.html (the Team page)

This page repeats the same header and footer as every other page, but the middle section uses `.member` boxes, one for each of our ten group members, each showing an avatar circle with initials, a name (or matric number if the name has not been submitted yet), a role, and a matric number.

## 5.3 projects.html (the Skills page)

Uses `.card` boxes inside `.panel` boxes to list the tools we used (HTML, CSS, JavaScript, Design, Research, QA), followed by our two listed projects, followed by a section explaining how we published the site using GitHub and Vercel.

## 5.4 contact.html (the Contact page)

Contains our working message form on the left (built with `<input>` and `<textarea>` elements inside a `<form id="contact-form">`), and our contact details list on the right, each row using a small icon plus a heading and description.

## 5.5 styles.css

This single file controls the appearance of every page. It is organized into labeled sections in this order: base page styles, header and navigation, footer, headings and text, buttons, the hero section, grid layout, section spacing, panel and card boxes, team member boxes, stats boxes, the contact form, and finally the info list on the contact page.

## 5.6 script.js

Only two things happen in this file:
1. It finds the mobile menu button and makes it open and close the navigation menu when clicked, also swapping the icon between a list icon and an X icon.
2. It finds our contact form and, when submitted, stops the page from reloading and instead shows a thank-you message.

---

# PART 6: How to make common changes yourself

## 6.1 Changing text on a page

1. Open the relevant `.html` file in a text editor (or GitHub's built-in editor, as explained in the management guide)
2. Find the sentence you want to change. It will be sitting between an opening and closing tag, for example `<p>Old text here</p>`
3. Type your new text between the tags, keeping the tags themselves exactly as they are: `<p>New text here</p>`
4. Save and upload the file

## 6.2 Changing a color

1. Open `styles.css`
2. Our main accent color is `#2a6ebb`. Colors in CSS are usually written as a hash symbol followed by six letters or numbers, called a hex code
3. If you want to change our main color everywhere, search the file for every instance of `#2a6ebb` and replace it with your new hex code. You can find hex codes for any color by searching "color picker" on Google
4. Save and upload the file

## 6.3 Adding a new team member card

Open `about.html` and find one of the existing `.member` blocks, which looks like this:

```html
<div class="member">
  <div class="avatar">SK</div>
  <h3>Simon Kelvin</h3>
  <div class="role">Member</div>
  <div class="id">ND/CET/25/0052</div>
</div>
```

Copy this whole block, paste it just before the closing `</div>` of the grid, and change the initials, name, role, and matric number to the new member's details.

## 6.4 Adding a new page link to the menu

If you ever add a fifth page, you would need to add a new link inside the `.navlinks` section of every single HTML file, for example:

```html
<a href="newpage.html">New Page</a>
```

Remember: this line must be added to all four (or five) HTML files, since each page has its own separate copy of the navigation menu.

## 6.5 Changing the logo

Replace `logo.svg` and `logo.png` with new files that have the exact same file names, and upload them to overwrite the old ones.

---

# PART 7: Common mistakes and how to avoid them

1. **Forgetting a closing tag.** Every opening tag like `<p>` needs a matching `</p>`. A missing closing tag can cause the rest of the page to display incorrectly.
2. **Mismatched class names.** If your CSS says `.card` but your HTML says `class="cards"`, the style will not apply. Class names must match exactly, including capitalization.
3. **Missing a semicolon or curly brace in CSS.** Every CSS property needs a semicolon at the end, and every rule needs both an opening `{` and a closing `}`. A missing one can break the styling for everything after it in the file.
4. **Wrong file name or capitalization.** File names are case sensitive. `Logo.png` and `logo.png` are treated as two different files.
5. **Forgetting to save before uploading**, or uploading the wrong version of a file.
6. **Editing the live file without testing first.** Always view your change before telling the group it is done.

---

# PART 8: How to check your changes before uploading

You do not need any special software. Just open the HTML file directly in a browser:

1. On a computer: locate the file on your computer, right-click it, and choose "Open with" and select any browser (Chrome, Edge, Firefox)
2. On a phone: open your Files app, tap the HTML file, and choose to open it with your browser app

This lets you preview your change exactly as it will appear, before uploading it for everyone else to see.

---

# Final note

You do not need to memorize any of this. Bookmark this guide and come back to it whenever you need to make a change. Every real web developer looks things up constantly. What matters is understanding the shape of how HTML, CSS, and JavaScript work together, which this guide has now covered in full.
