# iframe-browser
A web page that allows you to browse (some of) the web within an iframe.

It allows you to visit some sites in an [iframe](https://www.w3schools.com/tags/tag_iframe.asp). I made this for fun when learning more about HTML, CSS, and first learning JavaScript.

Only some of the web is available, because certain sites (eg. Google) have "'X-Frame-Options' set to 'SAMEORIGIN'", which prevents these sites from being loaded inside a frame from a different origin from the page. **Many sites will not load inside a frame.**

Sites that work:
* Piazza
* Wikipedia
* Wolfram Alpha
* Bing

Some popular sites that **don't** work:
* Google
* Facebook
* Twitter
* Instagram
* Youtube
* Reddit
* Amazon
* GitHub
* StackOverflow
* LinkedIn

Mozilla has a more detailed description of X-Frame-Options [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).

## Prerequisties
A web browser with JavaScript enabled

## Build instructions
Clone the repo onto your computer with `git clone https://github.com/jfong701/iframe-browser.git` and open `index.html` in a web browser.

Alternatively, you can download the files in the repo, and then open `index.html` in a web browser.

## Use instructions

The page has 2 different behaviour modes, a list of links, and the "iframe-browser". Clicking the "toggle" button changes this behaviour. This is described in further detail in the section "**toggle**".

The default behaviour is a list of links.

### Layout
When first opening the page, the following should be visible.
* Blue header bar with title "Home Page", and the time.
* A column of circular icons on the left side which are links to other websites.
* 3 buttons in the lower right hand corner that say "collapse", "toggle", "Dark mode".

### "collapse"
Shrinks the column of links vertically and horizontally so that they take up less space.

### "toggle"
The page has 2 different behaviour modes, a list of links, and the "iframe-browser".
The default behaviour is a list of links, when an icon is clicked it will open the link normally.

When the "toggle" button is clicked, the behaviour of clicking the icons changes.
An iframe appears in the middle of the page and loads wikipedia.

Clicking the icons now opens the link in the iframe window.
Links that don't load properly in an iframe are changed to similar links that can load in an iframe.

A textfield also appears in the lower left corner. A URL can be entered in this field, clicking the text to the right of the textfield will load this page in the iframe. At the moment pressing the "Enter" key doesn't work.

### "dark mode"
Changes the header and background of the page to a darker color.
