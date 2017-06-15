# My Personal Website

visit live site [here](http://melissamartinez.me)

This is my personal website to act as a visual resume and to display my projects. I’m started this site off as basic static webpage using Rails so that I can later add dynamic content. I decided on a modular design so that I can easily add or remove sections as needed in the future.   

***Tools Used:***
-	HTML5, SASS, Javascript
-	Ruby on Rails
-	Heroku



## CSS/SASS

I'm most proud of my use of CSS/SASS in this project. The way I have organized my stylesheets has made enhancing my site over time much smoother. Here's a simplified example of my setup:

 I use seperate modules so that I can easily access each module individually for styling.
```html
<body>
	<div class="module01"><h1>module 1</h1></div>
	<div class="module02"><h1>module 1</h1></div>
	<div class="module03"><h1>module 1</h1></div>
	<footer><h1>footer</h1></footer>
</body>
```

my file structure simply looks like this. Most stylesheets are out of the way in the `custom/` folder.
```
> stylesheets
	> custom
	application.css.scss
    	theme.css.scss
```


I use the application file soley for manifesting all stylesheets in the correct order to avoid overiding styles. This file also acts as a 'directory' of sorts because each file is named after its corresponding module.  
```css
/* application.css.scss */
@import "theme.css.scss";
@import "custom/module01.css.scss";
@import "custom/module02.css.scss";
@import "custom/module03.css.scss";
@import "custom/footer.css.scss";
@import "custom/mobile.css.scss";
```

The theme file consist only of general styling, along with mixins and varriables to be used in other stylesheets. In this project, I have my theme file setup so I can easily change the overall theme colors and images in this single file. I tend to get bored of the same color scheme, so this is esential. 🤷🏻‍
```css
/* theme.css.scss */
* {
	box-sizing: border-box;
	margin: 0;
}
$color1: blue;
div, footer {
    display: block;
    width: 100%;
    background-color: $color1;
}
```

Here's an example of a module's stylesheet. I take advantage of sass nesting so that all styles in this file only affect the appropriate module. If I find myself repeating the same styles in multiple modules, I simply move them to the `theme.css.scss`. I also include a `@mixin` for mobile responsiveness within the same file, keeping everything all in one place.

```css
/* custom/*.css.scss file example setup */
.module01 {
    background-color: black;
    h1 {
    	color: white;
    }
}
@mixin module01-mobile {
  .module01 {
      background-color: $color1;
    }    
}
```

I then manifest all the responsive mixins into a single file, similarly to the application file.  
```css
/* mobile.css.scss setup */
@mixin responsive {
    @include theme-mobile
    @mixin module01-mobile
    @mixin module02-mobile
    @mixin module03-mobile
    @include footer-mobile;
}
/* ----- iPhone 6 ----- */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
    @include responsive;
}

```
Overall, my goal with this setup is to isolate all styles to a single file per module, to avoid overiding styles in other modules, and to make modifiying styles more straightforward.   

### CSS vs Javascript
When possible, I like to avoid using Javascript for styling my web pages. Perhaps it's because I like a good challenge. The 'Feature Projects' section of my website is my favorite because it is a vanilla html/css module with some cool features. The responsive gird is made with `flex-box` properties and also I created an image overlay hover effect. But thats just an illusion. There is no div overlaying the image. Instead I have a pink div behind the image, and I set the image to grayscale and lowered the opacity so the image itself is disolved into the pink div. This is backwards to what is visually happening.

I save the javascript for the coolest effects. Right now, in the desktop view, I have a neat starfield animation and at the footer of my site and I have a cute little binary tree in the footer 🌲 These animaions are too cool for mobile devices, so I have images of pretty clouds to enjoy instead ☁️☁️  
