# Integration

We need to define how Media Tag will integrate to applications (like
CryptPad).

We propose and define two strategies:

## Web Component

Supported natively by Chrome and with polyfill
(42k [xtag](http://x-tag.github.io/)) in other browsers.

Whenever a <media-tag> tag is attached to DOM it will 'just work'.

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Page with Media Tag</title>
	<!-- Include the polyfill -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/x-tag/1.5.11/x-tag-core-with-shadowdom.min.js"></script>
	<!-- Include Media Tag web component -->
	<script type="text/javascript" src="media-tag-web-component.js"></script>
</head>
<body>
	<!-- Use Media Tag as any other native HTML element -->
	<media-tag>contents foo bar</media-tag>
	<!-- Or -->
	<script>
		// You can also use it in JavaScript and create new Media Tag elements
		// as you would create other HTML elements
		var myNewMediaTag = document.createElement('media-tag');
		document.querySelector('body').appendChild(myNewMediaTag);
	</script>
</body>
</html>
```


## JavaScript library

This will require from application developers to 'activate' Media Tag
for any time they will attach it to the DOM. This is the behavior
we have Today for other media content libraries, for example videojs.

Check out the [Media Tag constructor documentation]() for details.

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Page with Media Tag</title>
	<!-- Include Media Tag library -->
	<script type="text/javascript" src="media-tag.js"></script>
</head>
<body>
	<div class="myMediaTag"></div>
	<script>
		// The only way to use as library is with JavaScript.
		// You will need to select a DOM element that will be the wrapper
		// element, for example a div.
		// Then create a new MediaTag Object passing that element as
		// parameter.
		var mediaTagObj = mediaTag(document.querySelector('.myMediaTag'));
	</script>
</body>
</html>
```

